const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')

  const reqUrl = url.parse(req.url, true)

  try {
    if (reqUrl.pathname === '/') {
      res.writeHead(200)
      res.end(
        JSON.stringify(
          {
            message: 'Database Viewer API',
            endpoints: [
              '/info - Database overview',
              '/users - Show users data',
              '/vocabulary - Show vocabulary data',
              '/questions - Show questions data',
            ],
          },
          null,
          2,
        ),
      )
      return
    }

    if (reqUrl.pathname === '/info') {
      const Database = require('better-sqlite3')
      const db = new Database('./lingo-challenge.db')

      const tables = db
        .prepare("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
        .all()

      const tableInfo = {}
      tables.forEach((table) => {
        try {
          const count = db.prepare(`SELECT COUNT(*) as count FROM ${table.name}`).get()
          tableInfo[table.name] = count.count
        } catch (error) {
          tableInfo[table.name] = 'Error: ' + error.message
        }
      })

      db.close()

      res.writeHead(200)
      res.end(
        JSON.stringify(
          {
            database_file: 'lingo-challenge.db',
            tables: tableInfo,
            total_tables: tables.length,
            timestamp: new Date().toISOString(),
          },
          null,
          2,
        ),
      )
      return
    }

    if (reqUrl.pathname === '/users') {
      const Database = require('better-sqlite3')
      const db = new Database('./lingo-challenge.db')

      const users = db
        .prepare(
          'SELECT id, username, email, name, level, xp, streak, created_at FROM users LIMIT 10',
        )
        .all()

      db.close()

      res.writeHead(200)
      res.end(
        JSON.stringify(
          {
            table: 'users',
            data: users,
            total: users.length,
          },
          null,
          2,
        ),
      )
      return
    }

    if (reqUrl.pathname === '/vocabulary') {
      const Database = require('better-sqlite3')
      const db = new Database('./lingo-challenge.db')

      const vocabulary = db.prepare('SELECT * FROM vocabulary LIMIT 10').all()

      db.close()

      res.writeHead(200)
      res.end(
        JSON.stringify(
          {
            table: 'vocabulary',
            data: vocabulary,
            total: vocabulary.length,
          },
          null,
          2,
        ),
      )
      return
    }

    if (reqUrl.pathname === '/questions') {
      const Database = require('better-sqlite3')
      const db = new Database('./lingo-challenge.db')

      const questions = db.prepare('SELECT * FROM questions LIMIT 10').all()

      db.close()

      res.writeHead(200)
      res.end(
        JSON.stringify(
          {
            table: 'questions',
            data: questions,
            total: questions.length,
          },
          null,
          2,
        ),
      )
      return
    }

    // 404
    res.writeHead(404)
    res.end(
      JSON.stringify({
        error: 'Not found',
        available_endpoints: ['/', '/info', '/users', '/vocabulary', '/questions'],
      }),
    )
  } catch (error) {
    res.writeHead(500)
    res.end(
      JSON.stringify({
        error: error.message,
      }),
    )
  }
})

const port = 3001
server.listen(port, () => {
  console.log(`🔍 Database Viewer running on http://localhost:${port}`)
  console.log(`📊 Available endpoints:`)
  console.log(`   http://localhost:${port}/info - Database overview`)
  console.log(`   http://localhost:${port}/users - Users data`)
  console.log(`   http://localhost:${port}/vocabulary - Vocabulary data`)
  console.log(`   http://localhost:${port}/questions - Questions data`)
})
