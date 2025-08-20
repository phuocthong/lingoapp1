#!/usr/bin/env bun

// Simple Bun HTTP server for Lingo Challenge
console.log('🚀 Starting Bun backend server...')

const PORT = 3010

const server = Bun.serve({
  port: PORT,
  hostname: '0.0.0.0',

  async fetch(req) {
    const url = new URL(req.url)

    // CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json',
    }

    if (req.method === 'OPTIONS') {
      return new Response(null, { headers })
    }

    // Root endpoint
    if (url.pathname === '/') {
      return new Response(
        JSON.stringify(
          {
            message: 'Lingo Challenge Backend (Bun)',
            version: '1.0.0',
            runtime: 'Bun ' + Bun.version,
            status: 'running',
            database: 'Bun SQLite',
            port: PORT,
            endpoints: [
              '/ - This overview',
              '/health - Health check',
              '/test - Test endpoint',
              '/database/info - Database info',
              '/api/auth/register (POST) - Register user',
              '/api/auth/login (POST) - Login user',
              '/api/vocabulary/questions - Get questions',
            ],
            timestamp: new Date().toISOString(),
          },
          null,
          2,
        ),
        { headers },
      )
    }

    // Health check
    if (url.pathname === '/health') {
      return new Response(
        JSON.stringify(
          {
            status: 'healthy',
            runtime: 'Bun ' + Bun.version,
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            timestamp: new Date().toISOString(),
          },
          null,
          2,
        ),
        { headers },
      )
    }

    // Test endpoint
    if (url.pathname === '/test') {
      return new Response(
        JSON.stringify(
          {
            message: 'Bun backend is working!',
            method: req.method,
            url: req.url,
            headers: Object.fromEntries(req.headers.entries()),
            timestamp: new Date().toISOString(),
          },
          null,
          2,
        ),
        { headers },
      )
    }

    // Authentication - Register
    if (url.pathname === '/api/auth/register' && req.method === 'POST') {
      try {
        const body = await req.json()
        const { username, email, password, name } = body

        return new Response(
          JSON.stringify({
            success: true,
            message: 'User registered successfully',
            user: {
              id: Math.random().toString(36).substr(2, 9),
              username: username || email.split('@')[0],
              email,
              name: name || username || email.split('@')[0],
              level: 1,
              xp: 0,
              streak: 0,
              createdAt: new Date().toISOString(),
            },
            token: 'demo-jwt-token-' + Date.now(),
          }),
          { headers },
        )
      } catch (error) {
        return new Response(
          JSON.stringify({
            success: false,
            message: 'Registration failed',
            error: error.message,
          }),
          { status: 400, headers },
        )
      }
    }

    // Authentication - Login
    if (url.pathname === '/api/auth/login' && req.method === 'POST') {
      try {
        const body = await req.json()
        const { username, email, password } = body

        // Accept either username or email
        const userIdentifier = username || email || 'admin'

        // Demo login - accept any credentials
        if (password) {
          return new Response(
            JSON.stringify({
              success: true,
              message: 'Login successful',
              user: {
                id: 'demo-user-id',
                username: userIdentifier.includes('@') ? userIdentifier.split('@')[0] : userIdentifier,
                email: userIdentifier.includes('@') ? userIdentifier : `${userIdentifier}@demo.com`,
                name: userIdentifier,
                level: 5,
                xp: 1250,
                streak: 7,
              },
              token: 'demo-jwt-token-' + Date.now(),
            }),
            { headers },
          )
        } else {
          throw new Error('Password is required')
        }
      } catch (error) {
        return new Response(
          JSON.stringify({
            success: false,
            message: 'Login failed',
            error: error.message,
          }),
          { status: 400, headers },
        )
      }
    }

    // API - Get vocabulary questions
    if (url.pathname === '/api/vocabulary/questions') {
      return new Response(
        JSON.stringify({
          success: true,
          questions: [
            {
              id: 1,
              question: "What does 'Hello' mean?",
              correctAnswer: 'Xin chào',
              wrongAnswers: ['Tạm biệt', 'Cảm ơn', 'Xin lỗi'],
              difficulty: 'easy',
            },
            {
              id: 2,
              question: "What does 'Thank you' mean?",
              correctAnswer: 'Cảm ơn',
              wrongAnswers: ['Xin chào', 'Tạm biệt', 'Xin lỗi'],
              difficulty: 'easy',
            },
          ],
        }),
        { headers },
      )
    }

    // Database info (if database exists)
    if (url.pathname === '/database/info') {
      try {
        // Try to import and use Bun SQLite
        const { Database } = require('bun:sqlite')
        const db = new Database('./lingo-challenge.db')

        const tables = db
          .query("SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'")
          .all()

        const info = {
          database: 'lingo-challenge.db',
          runtime: 'Bun SQLite',
          tables: tables.length,
          table_names: tables.map((t) => t.name),
        }

        db.close()

        return new Response(
          JSON.stringify(
            {
              success: true,
              ...info,
              timestamp: new Date().toISOString(),
            },
            null,
            2,
          ),
          { headers },
        )
      } catch (error) {
        return new Response(
          JSON.stringify(
            {
              success: false,
              error: error.message,
              message: 'Database not accessible or not found',
            },
            null,
            2,
          ),
          { headers },
        )
      }
    }

    // 404
    return new Response(
      JSON.stringify(
        {
          error: 'Not found',
          path: url.pathname,
          available_paths: ['/', '/health', '/test', '/database/info'],
        },
        null,
        2,
      ),
      {
        status: 404,
        headers,
      },
    )
  },
})

console.log(`✅ Bun backend server running on http://localhost:${server.port}`)
console.log(`🔗 Test it at: http://localhost:${server.port}/`)
console.log(`💾 Database: http://localhost:${server.port}/database/info`)
console.log(`🔍 Health: http://localhost:${server.port}/health`)
