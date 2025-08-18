import { Elysia, t } from 'elysia'
import bcrypt from 'bcryptjs'
import { db } from '../db/index-bun.js'
import { users } from '../db/schema.js'
import { eq } from 'drizzle-orm'
import { generateToken } from '../middleware/auth.js'

const authRoutes = new Elysia({ prefix: '/auth' })
  .post(
    '/register',
    async ({ body, set }) => {
      try {
        const { username, email, password } = body

        // Check if user already exists
        const existingUser = await db.select().from(users).where(eq(users.email, email)).get()

        if (existingUser) {
          set.status = 400
          return {
            success: false,
            message: 'User already exists with this email',
          }
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12)

        // Create user
        const [newUser] = await db
          .insert(users)
          .values({
            username,
            email,
            password: hashedPassword,
          })
          .returning({
            id: users.id,
            username: users.username,
            email: users.email,
            createdAt: users.createdAt,
          })

        // Generate token
        const token = generateToken(newUser.id)

        return {
          success: true,
          message: 'User registered successfully',
          data: {
            user: newUser,
            token,
          },
        }
      } catch (error) {
        console.error('Registration error:', error)
        set.status = 500
        return {
          success: false,
          message: 'Internal server error',
        }
      }
    },
    {
      body: t.Object({
        username: t.String({ minLength: 3, maxLength: 50 }),
        email: t.String({ format: 'email' }),
        password: t.String({ minLength: 6 }),
      }),
      tags: ['auth'],
    },
  )

  .post(
    '/login',
    async ({ body, set }) => {
      try {
        const { email, password } = body

        // Find user
        const user = await db.select().from(users).where(eq(users.email, email)).get()

        if (!user) {
          set.status = 401
          return {
            success: false,
            message: 'Invalid credentials',
          }
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword) {
          set.status = 401
          return {
            success: false,
            message: 'Invalid credentials',
          }
        }

        // Generate token
        const token = generateToken(user.id)

        // Return user without password
        const { password: _, ...userWithoutPassword } = user

        return {
          success: true,
          message: 'Login successful',
          data: {
            user: userWithoutPassword,
            token,
          },
        }
      } catch (error) {
        console.error('Login error:', error)
        set.status = 500
        return {
          success: false,
          message: 'Internal server error',
        }
      }
    },
    {
      body: t.Object({
        email: t.String({ format: 'email' }),
        password: t.String({ minLength: 1 }),
      }),
      tags: ['auth'],
    },
  )

export default authRoutes
