import { Database } from 'bun:sqlite'

// Bun-compatible backend server with SQLite
const server = Bun.serve({
  port: 3002,
  
  async fetch(req) {
    // Enable CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json'
    }

    if (req.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    const url = new URL(req.url)
    const pathname = url.pathname

    try {
      // Root endpoint - API overview
      if (pathname === '/') {
        return new Response(JSON.stringify({
          message: 'Lingo Challenge Backend API (Bun)',
          version: '1.0.0',
          runtime: 'Bun',
          status: 'running',
          database: 'Bun SQLite + Drizzle ORM',
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
        }, null, 2), { headers: corsHeaders })
      }

      // Database info endpoint
      if (pathname === '/database/info') {
        try {
          const db = new Database('./lingo-challenge.db')
          
          const tables = db.query("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'").all()
          
          const tableInfo = {}
          tables.forEach(table => {
            try {
              const count = db.query(`SELECT COUNT(*) as count FROM ${table.name}`).get()
              tableInfo[table.name] = count.count
            } catch (error) {
              tableInfo[table.name] = 'Error: ' + error.message
            }
          })
          
          db.close()
          
          return new Response(JSON.stringify({
            success: true,
            database: 'lingo-challenge.db',
            runtime: 'Bun SQLite',
            orm: 'Drizzle ORM',
            tables: tableInfo,
            total_tables: tables.length,
            timestamp: new Date().toISOString()
          }, null, 2), { headers: corsHeaders })
          
        } catch (error) {
          return new Response(JSON.stringify({ 
            success: false,
            error: error.message 
          }), { 
            status: 500, 
            headers: corsHeaders 
          })
        }
      }

      // Users data endpoint
      if (pathname === '/database/users') {
        try {
          const db = new Database('./lingo-challenge.db')
          
          const users = db.query("SELECT id, username, email, name, level, xp, streak, created_at FROM users LIMIT 10").all()
          
          db.close()
          
          return new Response(JSON.stringify({
            success: true,
            table: 'users',
            runtime: 'Bun SQLite',
            data: users,
            total: users.length
          }, null, 2), { headers: corsHeaders })
          
        } catch (error) {
          return new Response(JSON.stringify({ 
            success: false,
            error: error.message 
          }), { 
            status: 500, 
            headers: corsHeaders 
          })
        }
      }

      // Vocabulary data endpoint
      if (pathname === '/database/vocabulary') {
        try {
          const db = new Database('./lingo-challenge.db')
          
          const vocabulary = db.query("SELECT * FROM vocabulary LIMIT 10").all()
          
          db.close()
          
          return new Response(JSON.stringify({
            success: true,
            table: 'vocabulary',
            runtime: 'Bun SQLite',
            data: vocabulary,
            total: vocabulary.length
          }, null, 2), { headers: corsHeaders })
          
        } catch (error) {
          return new Response(JSON.stringify({ 
            success: false,
            error: error.message 
          }), { 
            status: 500, 
            headers: corsHeaders 
          })
        }
      }

      // API vocabulary endpoint
      if (pathname === '/api/vocabulary') {
        try {
          const db = new Database('./lingo-challenge.db')
          
          const vocabulary = db.query("SELECT * FROM vocabulary ORDER BY RANDOM() LIMIT 5").all()
          
          db.close()
          
          return new Response(JSON.stringify({
            success: true,
            runtime: 'Bun SQLite',
            data: vocabulary,
            message: 'Random vocabulary words from Drizzle ORM database'
          }), { headers: corsHeaders })
          
        } catch (error) {
          return new Response(JSON.stringify({
            success: true,
            runtime: 'Bun SQLite',
            data: [],
            message: 'Database not found. Please run migration first.',
            error: error.message
          }), { headers: corsHeaders })
        }
      }

      // Auth register endpoint
      if (pathname === '/api/auth/register' && req.method === 'POST') {
        try {
          const userData = await req.json()
          
          return new Response(JSON.stringify({
            success: true,
            runtime: 'Bun',
            message: 'User registration endpoint ready',
            received: userData,
            note: 'This is a test endpoint. Real registration will be implemented with Drizzle ORM.'
          }), { headers: corsHeaders })
          
        } catch (error) {
          return new Response(JSON.stringify({ 
            error: 'Invalid JSON' 
          }), { 
            status: 400, 
            headers: corsHeaders 
          })
        }
      }

      // Health check
      if (pathname === '/health') {
        return new Response(JSON.stringify({
          status: 'healthy',
          runtime: 'Bun',
          uptime: process.uptime(),
          timestamp: new Date().toISOString()
        }), { headers: corsHeaders })
      }

      // 404
      return new Response(JSON.stringify({
        error: 'Not found',
        runtime: 'Bun',
        available_endpoints: [
          '/',
          '/health',
          '/database/info',
          '/database/users', 
          '/database/vocabulary',
          '/api/auth/register (POST)',
          '/api/vocabulary'
        ]
      }), { 
        status: 404, 
        headers: corsHeaders 
      })

    } catch (error) {
      return new Response(JSON.stringify({
        error: error.message,
        runtime: 'Bun',
        message: 'Internal server error'
      }), { 
        status: 500, 
        headers: corsHeaders 
      })
    }
  }
})

console.log(`🚀 Lingo Challenge Backend (Bun) running on http://localhost:${server.port}`)
console.log(`📚 Bun SQLite + Drizzle ORM Database`)
console.log(`🔗 API endpoints:`)
console.log(`   http://localhost:${server.port}/ - API overview`)
console.log(`   http://localhost:${server.port}/database/info - Database info`)
console.log(`   http://localhost:${server.port}/database/users - Users data`)
console.log(`   http://localhost:${server.port}/database/vocabulary - Vocabulary data`)
console.log(`   http://localhost:${server.port}/api/vocabulary - API vocabulary`)
console.log(`🔍 Ready for frontend connection!`)

export default server
