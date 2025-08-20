const http = require('http')
const url = require('url')

// Simple backend server with database integration
const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Content-Type', 'application/json')

  if (req.method === 'OPTIONS') {
    res.writeHead(200)
    res.end()
    return
  }

  const reqUrl = url.parse(req.url, true)
  
  try {
    if (reqUrl.pathname === '/') {
      res.writeHead(200)
      res.end(JSON.stringify({
        message: 'Lingo Challenge Backend API',
        version: '1.0.0',
        status: 'running',
        database: 'Drizzle ORM + SQLite',
        endpoints: {
          '/api/auth/register': 'POST - Register new user',
          '/api/auth/login': 'POST - Login user',
          '/api/vocabulary': 'GET - Get vocabulary words',
          '/api/users/profile': 'GET - Get user profile',
          '/database/info': 'GET - Database information',
          '/database/users': 'GET - View users data',
          '/database/vocabulary': 'GET - View vocabulary data'
        },
        timestamp: new Date().toISOString()
      }, null, 2))
      return
    }

    // Database info endpoint
    if (reqUrl.pathname === '/database/info') {
      try {
        const Database = require('better-sqlite3')
        const db = new Database('./lingo-challenge.db')
        
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
        
        res.writeHead(200)
        res.end(JSON.stringify({
          success: true,
          database: 'lingo-challenge.db',
          orm: 'Drizzle ORM',
          tables: tableInfo,
          total_tables: tables.length,
          timestamp: new Date().toISOString()
        }, null, 2))
        return
      } catch (error) {
        res.writeHead(500)
        res.end(JSON.stringify({ error: error.message }))
        return
      }
    }

    // Users data endpoint
    if (reqUrl.pathname === '/database/users') {
      try {
        const Database = require('better-sqlite3')
        const db = new Database('./lingo-challenge.db')
        
        const users = db.prepare("SELECT id, username, email, name, level, xp, streak, created_at FROM users LIMIT 10").all()
        
        db.close()
        
        res.writeHead(200)
        res.end(JSON.stringify({
          success: true,
          table: 'users',
          data: users,
          total: users.length
        }, null, 2))
        return
      } catch (error) {
        res.writeHead(500)
        res.end(JSON.stringify({ error: error.message }))
        return
      }
    }

    // Vocabulary data endpoint
    if (reqUrl.pathname === '/database/vocabulary') {
      try {
        const Database = require('better-sqlite3')
        const db = new Database('./lingo-challenge.db')
        
        const vocabulary = db.prepare("SELECT * FROM vocabulary LIMIT 10").all()
        
        db.close()
        
        res.writeHead(200)
        res.end(JSON.stringify({
          success: true,
          table: 'vocabulary',
          data: vocabulary,
          total: vocabulary.length
        }, null, 2))
        return
      } catch (error) {
        res.writeHead(500)
        res.end(JSON.stringify({ error: error.message }))
        return
      }
    }

    // Simple auth register endpoint
    if (reqUrl.pathname === '/api/auth/register' && req.method === 'POST') {
      let body = ''
      req.on('data', chunk => {
        body += chunk.toString()
      })
      req.on('end', () => {
        try {
          const userData = JSON.parse(body)
          res.writeHead(200)
          res.end(JSON.stringify({
            success: true,
            message: 'User registration endpoint ready',
            received: userData,
            note: 'This is a test endpoint. Real registration will be implemented with Drizzle ORM.'
          }))
        } catch (error) {
          res.writeHead(400)
          res.end(JSON.stringify({ error: 'Invalid JSON' }))
        }
      })
      return
    }

    // Simple vocabulary endpoint
    if (reqUrl.pathname === '/api/vocabulary') {
      try {
        const Database = require('better-sqlite3')
        const db = new Database('./lingo-challenge.db')
        
        const vocabulary = db.prepare("SELECT * FROM vocabulary ORDER BY RANDOM() LIMIT 5").all()
        
        db.close()
        
        res.writeHead(200)
        res.end(JSON.stringify({
          success: true,
          data: vocabulary,
          message: 'Random vocabulary words from Drizzle ORM database'
        }))
        return
      } catch (error) {
        res.writeHead(200)
        res.end(JSON.stringify({
          success: true,
          data: [],
          message: 'Database not found. Please run migration first.',
          error: error.message
        }))
        return
      }
    }

    // Health check
    if (reqUrl.pathname === '/health') {
      res.writeHead(200)
      res.end(JSON.stringify({
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
      }))
      return
    }

    // 404
    res.writeHead(404)
    res.end(JSON.stringify({
      error: 'Not found',
      available_endpoints: [
        '/',
        '/health',
        '/database/info',
        '/database/users', 
        '/database/vocabulary',
        '/api/auth/register (POST)',
        '/api/vocabulary'
      ]
    }))

  } catch (error) {
    res.writeHead(500)
    res.end(JSON.stringify({
      error: error.message,
      message: 'Internal server error'
    }))
  }
})

const port = 3002
server.listen(port, () => {
  console.log(`🚀 Lingo Challenge Backend running on http://localhost:${port}`)
  console.log(`📚 Drizzle ORM + SQLite Database`)
  console.log(`🔗 API endpoints:`)
  console.log(`   http://localhost:${port}/ - API overview`)
  console.log(`   http://localhost:${port}/database/info - Database info`)
  console.log(`   http://localhost:${port}/database/users - Users data`)
  console.log(`   http://localhost:${port}/database/vocabulary - Vocabulary data`)
  console.log(`   http://localhost:${port}/api/vocabulary - API vocabulary`)
  console.log(`🔍 Ready for frontend connection!`)
})
