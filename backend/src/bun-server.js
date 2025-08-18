import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { Database } from 'bun:sqlite'

// Initialize Bun SQLite database
const db = new Database('lingo-challenge.db')

const app = new Elysia()
  .use(
    cors({
      origin: true,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    }),
  )
  .use(
    swagger({
      documentation: {
        info: {
          title: 'Lingo Challenge API (Bun)',
          version: '1.0.0',
          description: 'REST API for Lingo Challenge with Bun SQLite',
        },
      },
    }),
  )

  // Health check
  .get('/', () => ({
    message: 'Lingo Challenge API running with Bun!',
    version: '1.0.0',
    runtime: 'Bun',
    database: 'Bun SQLite',
    timestamp: new Date().toISOString(),
  }))

  // Database info
  .get('/api/database/info', () => {
    try {
      const tables = db
        .query("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
        .all()

      const tableInfo = {}
      tables.forEach((table) => {
        try {
          const count = db.query(`SELECT COUNT(*) as count FROM ${table.name}`).get()
          tableInfo[table.name] = count.count
        } catch (error) {
          tableInfo[table.name] = 'Error: ' + error.message
        }
      })

      return {
        success: true,
        data: {
          database_file: 'lingo-challenge.db',
          tables: tableInfo,
          total_tables: tables.length,
          runtime: 'Bun SQLite',
          timestamp: new Date().toISOString(),
        },
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  })

  // Get users
  .get('/api/database/users', () => {
    try {
      const users = db
        .query(
          'SELECT id, username, email, name, level, xp, streak, created_at FROM users LIMIT 10',
        )
        .all()

      return {
        success: true,
        data: users,
        total: users.length,
        runtime: 'Bun SQLite',
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  })

  // Get vocabulary
  .get('/api/database/vocabulary', () => {
    try {
      const vocabulary = db.query('SELECT * FROM vocabulary LIMIT 10').all()

      return {
        success: true,
        data: vocabulary,
        total: vocabulary.length,
        runtime: 'Bun SQLite',
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  })

  // Get questions
  .get('/api/database/questions', () => {
    try {
      const questions = db.query('SELECT * FROM questions LIMIT 10').all()

      return {
        success: true,
        data: questions,
        total: questions.length,
        runtime: 'Bun SQLite',
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
      }
    }
  })

  // Simple auth endpoint for testing
  .post('/api/auth/test', ({ body }) => {
    return {
      success: true,
      message: 'Bun server is working!',
      received: body,
      timestamp: new Date().toISOString(),
    }
  })

  // Error handling
  .onError(({ code, error, set }) => {
    console.error('API Error:', error)

    if (code === 'VALIDATION') {
      set.status = 400
      return {
        success: false,
        message: 'Validation error',
        errors: error.message,
      }
    }

    if (code === 'NOT_FOUND') {
      set.status = 404
      return {
        success: false,
        message: 'Endpoint not found',
      }
    }

    set.status = 500
    return {
      success: false,
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    }
  })

const port = process.env.PORT || 3003

const server = app.listen(port)

console.log(`🚀 Lingo Challenge API (Bun) running on http://localhost:${port}`)
console.log(`📚 API Documentation: http://localhost:${port}/swagger`)
console.log(`🗄️ Database endpoints:`)
console.log(`   http://localhost:${port}/api/database/info`)
console.log(`   http://localhost:${port}/api/database/users`)
console.log(`   http://localhost:${port}/api/database/vocabulary`)
console.log(`   http://localhost:${port}/api/database/questions`)

export default server
