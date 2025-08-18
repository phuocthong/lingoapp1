const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')

  const url = req.url

  console.log(`[${new Date().toISOString()}] ${req.method} ${url}`)

  try {
    if (url === '/') {
      res.writeHead(200)
      res.end(
        JSON.stringify(
          {
            message: 'Backend API Test Server',
            status: 'running',
            timestamp: new Date().toISOString(),
            endpoints: ['/test - Simple test', '/files - Check files', '/database - Database test'],
          },
          null,
          2,
        ),
      )
      return
    }

    if (url === '/test') {
      res.writeHead(200)
      res.end(
        JSON.stringify(
          {
            message: 'Test endpoint working!',
            timestamp: new Date().toISOString(),
            cwd: process.cwd(),
          },
          null,
          2,
        ),
      )
      return
    }

    if (url === '/files') {
      const files = fs.readdirSync('.')
      res.writeHead(200)
      res.end(
        JSON.stringify(
          {
            message: 'Files in current directory',
            files: files,
            cwd: process.cwd(),
          },
          null,
          2,
        ),
      )
      return
    }

    if (url === '/database') {
      try {
        // Check if database file exists
        const dbExists = fs.existsSync('./lingo-challenge.db')

        if (!dbExists) {
          res.writeHead(200)
          res.end(
            JSON.stringify(
              {
                error: 'Database file not found',
                path: './lingo-challenge.db',
                cwd: process.cwd(),
                files: fs.readdirSync('.'),
              },
              null,
              2,
            ),
          )
          return
        }

        // Try to connect to database
        const Database = require('better-sqlite3')
        const db = new Database('./lingo-challenge.db')

        const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all()

        db.close()

        res.writeHead(200)
        res.end(
          JSON.stringify(
            {
              message: 'Database connection successful',
              database_file: './lingo-challenge.db',
              tables: tables.map((t) => t.name),
              total_tables: tables.length,
            },
            null,
            2,
          ),
        )
      } catch (error) {
        res.writeHead(500)
        res.end(
          JSON.stringify(
            {
              error: 'Database connection failed',
              message: error.message,
              cwd: process.cwd(),
            },
            null,
            2,
          ),
        )
      }
      return
    }

    // 404
    res.writeHead(404)
    res.end(
      JSON.stringify({
        error: 'Not found',
        url: url,
        available_endpoints: ['/', '/test', '/files', '/database'],
      }),
    )
  } catch (error) {
    console.error('Server error:', error)
    res.writeHead(500)
    res.end(
      JSON.stringify({
        error: error.message,
        stack: error.stack,
      }),
    )
  }
})

const port = 3002
server.listen(port, () => {
  console.log(`🧪 Test Backend Server running on http://localhost:${port}`)
  console.log(`📊 Test endpoints:`)
  console.log(`   http://localhost:${port}/test`)
  console.log(`   http://localhost:${port}/files`)
  console.log(`   http://localhost:${port}/database`)
})
