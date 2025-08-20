#!/usr/bin/env bun

// Simple Bun HTTP server for Lingo Challenge
console.log('🚀 Starting Bun backend server...')

const PORT = 3010

const server = Bun.serve({
  port: PORT,
  hostname: '0.0.0.0',

  fetch(req) {
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
