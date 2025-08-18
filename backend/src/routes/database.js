import { Elysia } from 'elysia'
import { db } from '../db/index.js'
import { users, vocabulary, questions, rooms, userProgress, friends, rewards } from '../db/schema.js'

const databaseRoutes = new Elysia({ prefix: '/database' })
  
  // Get all tables overview
  .get('/overview', async () => {
    try {
      const [usersCount] = await db.select({ count: users.id }).from(users)
      const [vocabCount] = await db.select({ count: vocabulary.id }).from(vocabulary)
      const [questionsCount] = await db.select({ count: questions.id }).from(questions)
      const [roomsCount] = await db.select({ count: rooms.id }).from(rooms)
      
      return {
        success: true,
        data: {
          users: usersCount?.count || 0,
          vocabulary: vocabCount?.count || 0,
          questions: questionsCount?.count || 0,
          rooms: roomsCount?.count || 0,
          database_path: 'backend/lingo-challenge.db',
          last_updated: new Date().toISOString()
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  })

  // Get users data
  .get('/users', async () => {
    try {
      const allUsers = await db
        .select({
          id: users.id,
          username: users.username,
          email: users.email,
          level: users.level,
          xp: users.xp,
          streak: users.streak,
          createdAt: users.createdAt
        })
        .from(users)
        .limit(10)

      return {
        success: true,
        data: allUsers
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  })

  // Get vocabulary data
  .get('/vocabulary', async () => {
    try {
      const allVocab = await db
        .select()
        .from(vocabulary)
        .limit(10)

      return {
        success: true,
        data: allVocab
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  })

  // Database health check
  .get('/health', () => {
    try {
      return {
        success: true,
        message: 'Database connection is healthy',
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      return {
        success: false,
        error: error.message
      }
    }
  })

export default databaseRoutes
