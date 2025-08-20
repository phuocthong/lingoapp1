#!/usr/bin/env bun

// Simple Bun HTTP server với real database authentication
console.log('🚀 Starting Lingo Challenge Auth Server...')

import { Database } from 'bun:sqlite'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const PORT = 3003
const JWT_SECRET = 'your-secret-key'

// Initialize database
const db = new Database('./lingo-challenge.db')

// Create users table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    name TEXT NOT NULL,
    avatar TEXT,
    phone TEXT,
    bio TEXT,
    is_public_profile INTEGER DEFAULT 1,
    allow_friend_requests INTEGER DEFAULT 1,
    level INTEGER DEFAULT 1,
    xp INTEGER DEFAULT 0,
    streak INTEGER DEFAULT 0,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  )
`)

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
            message: 'Lingo Challenge Auth Server (Bun)',
            version: '1.0.0',
            runtime: 'Bun ' + Bun.version,
            status: 'running',
            database: 'Bun SQLite (Real Database)',
            port: PORT,
            endpoints: [
              '/ - This overview',
              '/health - Health check',
              '/api/auth/register (POST) - Register user to database',
              '/api/auth/login (POST) - Login user from database',
              '/api/database/users - List users',
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
            database: 'Connected',
            uptime: process.uptime(),
            timestamp: new Date().toISOString(),
          },
          null,
          2,
        ),
        { headers },
      )
    }

    // Authentication - Register (REAL DATABASE)
    if (url.pathname === '/api/auth/register' && req.method === 'POST') {
      try {
        const body = await req.json()
        const { username, email, password, name } = body

        if (!username || !email || !password) {
          throw new Error('Username, email and password are required')
        }

        // Check if user already exists
        const existingUser = db.query('SELECT * FROM users WHERE email = ? OR username = ?').get(email, username)
        if (existingUser) {
          return new Response(
            JSON.stringify({
              success: false,
              message: 'User already exists with this email or username',
            }),
            { status: 400, headers },
          )
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12)
        const now = Date.now()

        // Insert user into database
        const insertUser = db.query(`
          INSERT INTO users (username, email, password, name, avatar, level, xp, streak, created_at, updated_at)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `)

        const result = insertUser.run(
          username,
          email,
          hashedPassword,
          name || username,
          'https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fd0e1a2af26da485f8609e3080da7d7b8?alt=media&token=aca82dee-2b72-4297-9d9d-7921d490a327&apiKey=f046890c17ca436cab38cffc651fb9cb',
          1, // level
          0, // xp
          0, // streak
          now, // created_at
          now  // updated_at
        )

        // Get the created user
        const newUser = db.query('SELECT * FROM users WHERE id = ?').get(result.lastInsertRowid)

        // Generate JWT token
        const token = jwt.sign(
          { userId: newUser.id, username: newUser.username },
          JWT_SECRET,
          { expiresIn: '7d' }
        )

        return new Response(
          JSON.stringify({
            success: true,
            message: 'User registered successfully',
            user: {
              id: newUser.id,
              username: newUser.username,
              email: newUser.email,
              name: newUser.name,
              avatar: newUser.avatar,
              level: newUser.level,
              xp: newUser.xp,
              streak: newUser.streak,
              createdAt: new Date(newUser.created_at).toISOString(),
            },
            token,
          }),
          { headers },
        )
      } catch (error) {
        console.error('Registration error:', error)
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

    // Authentication - Login (REAL DATABASE)
    if (url.pathname === '/api/auth/login' && req.method === 'POST') {
      try {
        const body = await req.json()
        const { username, email, password } = body
        
        // Accept either username or email
        const userIdentifier = username || email
        if (!userIdentifier || !password) {
          throw new Error('Username/email and password are required')
        }

        // Find user in database
        const user = db.query('SELECT * FROM users WHERE username = ? OR email = ?').get(userIdentifier, userIdentifier)

        if (!user) {
          return new Response(
            JSON.stringify({
              success: false,
              message: 'Invalid credentials',
            }),
            { status: 401, headers },
          )
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
          return new Response(
            JSON.stringify({
              success: false,
              message: 'Invalid credentials',
            }),
            { status: 401, headers },
          )
        }

        // Generate JWT token
        const token = jwt.sign(
          { userId: user.id, username: user.username },
          JWT_SECRET,
          { expiresIn: '7d' }
        )

        return new Response(
          JSON.stringify({
            success: true,
            message: 'Login successful',
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
              name: user.name,
              avatar: user.avatar,
              level: user.level,
              xp: user.xp,
              streak: user.streak,
            },
            token,
          }),
          { headers },
        )
      } catch (error) {
        console.error('Login error:', error)
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

    // Get users (for debugging)
    if (url.pathname === '/api/database/users') {
      try {
        const users = db.query('SELECT id, username, email, name, level, xp, streak, created_at FROM users ORDER BY created_at DESC LIMIT 10').all()

        return new Response(
          JSON.stringify(
            {
              success: true,
              data: users.map(user => ({
                ...user,
                createdAt: new Date(user.created_at).toISOString(),
              })),
              total: users.length,
              runtime: 'Bun SQLite (Real Database)',
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
          available_paths: ['/', '/health', '/api/auth/register', '/api/auth/login', '/api/database/users'],
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

console.log(`✅ Lingo Challenge Auth Server running on http://localhost:${server.port}`)
console.log(`🔗 Test it at: http://localhost:${server.port}/`)
console.log(`🗄️ Database: http://localhost:${server.port}/api/database/users`)
console.log(`📝 Register: POST http://localhost:${server.port}/api/auth/register`)
console.log(`🔑 Login: POST http://localhost:${server.port}/api/auth/login`)
