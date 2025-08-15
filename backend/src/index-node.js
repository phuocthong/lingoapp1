import express from 'express'
import cors from 'cors'
import { db } from './db/index.js'
import { users, vocabulary, questions, tasks, friends, rewards, progress } from './db/schema.js'
import { eq, desc, count, sql } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const app = express()
const port = process.env.PORT || 3001

// Middleware
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json())
app.use(express.static('public'))

// Health check
app.get('/', (req, res) => {
  res.json({
    message: 'Lingo Challenge API is running!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  })
})

// Auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '')
  
  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'demo-secret-key')
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' })
  }
}

// API Routes

// Auth routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, username } = req.body
    
    const hashedPassword = await bcrypt.hash(password, 10)
    
    const [user] = await db.insert(users).values({
      name,
      email,
      password: hashedPassword,
      username: username || email.split('@')[0],
      avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/94861390f9be0eb42544493a89935a3e8537e779?width=55',
      xp: 0,
      level: 1,
      streak: 0
    }).returning()

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'demo-secret-key')

    res.json({
      success: true,
      user: { ...user, password: undefined },
      token
    })
  } catch (error) {
    console.error('Registration error:', error)
    res.status(500).json({ success: false, message: 'Registration failed' })
  }
})

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body
    
    const [user] = await db.select().from(users).where(eq(users.email, email))
    
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET || 'demo-secret-key')

    res.json({
      success: true,
      user: { ...user, password: undefined },
      token
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ success: false, message: 'Login failed' })
  }
})

// Vocabulary routes
app.get('/api/vocabulary/questions', async (req, res) => {
  try {
    const { count: questionCount = 1, difficulty, category } = req.query
    
    let query = db.select().from(questions)
    
    if (difficulty) {
      query = query.where(eq(questions.difficulty, difficulty))
    }
    
    const allQuestions = await query.limit(parseInt(questionCount))
    
    res.json({
      success: true,
      questions: allQuestions
    })
  } catch (error) {
    console.error('Questions fetch error:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch questions' })
  }
})

// Progress routes  
app.get('/api/progress/leaderboard', async (req, res) => {
  try {
    const { period = 'week', limit = 10 } = req.query
    
    const leaderboard = await db
      .select({
        id: users.id,
        name: users.name,
        username: users.username,
        avatar: users.avatar,
        xp: users.xp,
        level: users.level,
        streak: users.streak
      })
      .from(users)
      .orderBy(desc(users.xp))
      .limit(parseInt(limit))

    res.json({
      success: true,
      leaderboard,
      period,
      totalUsers: leaderboard.length
    })
  } catch (error) {
    console.error('Leaderboard error:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch leaderboard' })
  }
})

// Friends routes
app.get('/api/friends', authMiddleware, async (req, res) => {
  try {
    const userFriends = await db
      .select({
        id: users.id,
        name: users.name,
        username: users.username,
        avatar: users.avatar,
        status: friends.status
      })
      .from(friends)
      .innerJoin(users, eq(users.id, friends.friendId))
      .where(eq(friends.userId, req.user.id))

    res.json({
      success: true,
      friends: userFriends
    })
  } catch (error) {
    console.error('Friends fetch error:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch friends' })
  }
})

// Users routes
app.get('/api/users/profile', authMiddleware, async (req, res) => {
  try {
    const [user] = await db.select().from(users).where(eq(users.id, req.user.id))
    
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    res.json({
      success: true,
      user: { ...user, password: undefined }
    })
  } catch (error) {
    console.error('Profile fetch error:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch profile' })
  }
})

// Tasks routes
app.get('/api/tasks', authMiddleware, async (req, res) => {
  try {
    const userTasks = await db.select().from(tasks).limit(10)
    
    res.json({
      success: true,
      tasks: userTasks
    })
  } catch (error) {
    console.error('Tasks fetch error:', error)
    res.status(500).json({ success: false, message: 'Failed to fetch tasks' })
  }
})

// Error handling
app.use((error, req, res, next) => {
  console.error('Server error:', error)
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? error.message : undefined,
  })
})

app.listen(port, () => {
  console.log(`🚀 Lingo Challenge API server running on http://localhost:${port}`)
  console.log(`📚 API endpoints available at http://localhost:${port}/api/`)
  console.log(`🗄️ Database: lingo-challenge.db`)
})

export default app
