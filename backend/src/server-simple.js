const express = require('express')
const cors = require('cors')
const path = require('path')

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
    timestamp: new Date().toISOString(),
    database: 'lingo-challenge.db'
  })
})

// Database info endpoint
app.get('/api/database/info', (req, res) => {
  const Database = require('better-sqlite3')
  
  try {
    const db = new Database('./lingo-challenge.db')
    
    // Get table info
    const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'").all()
    
    const tableInfo = {}
    tables.forEach(table => {
      try {
        const count = db.prepare(`SELECT COUNT(*) as count FROM ${table.name}`).get()
        tableInfo[table.name] = count.count
      } catch (error) {
        tableInfo[table.name] = 'Error: ' + error.message
      }
    })
    
    db.close()
    
    res.json({
      success: true,
      data: {
        database_file: './lingo-challenge.db',
        tables: tableInfo,
        total_tables: tables.length,
        timestamp: new Date().toISOString()
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// Show users
app.get('/api/database/users', (req, res) => {
  const Database = require('better-sqlite3')
  
  try {
    const db = new Database('./lingo-challenge.db')
    
    const users = db.prepare("SELECT id, username, email, name, level, xp, streak, created_at FROM users LIMIT 10").all()
    
    db.close()
    
    res.json({
      success: true,
      data: users,
      total: users.length
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// Show vocabulary
app.get('/api/database/vocabulary', (req, res) => {
  const Database = require('better-sqlite3')
  
  try {
    const db = new Database('./lingo-challenge.db')
    
    const vocabulary = db.prepare("SELECT * FROM vocabulary LIMIT 10").all()
    
    db.close()
    
    res.json({
      success: true,
      data: vocabulary,
      total: vocabulary.length
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
  }
})

// Show questions
app.get('/api/database/questions', (req, res) => {
  const Database = require('better-sqlite3')
  
  try {
    const db = new Database('./lingo-challenge.db')
    
    const questions = db.prepare("SELECT * FROM questions LIMIT 10").all()
    
    db.close()
    
    res.json({
      success: true,
      data: questions,
      total: questions.length
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    })
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
  console.log(`📚 Database viewer available at:`)
  console.log(`   http://localhost:${port}/api/database/info`)
  console.log(`   http://localhost:${port}/api/database/users`)
  console.log(`   http://localhost:${port}/api/database/vocabulary`)
  console.log(`   http://localhost:${port}/api/database/questions`)
  console.log(`🗄️ Database: lingo-challenge.db`)
})
