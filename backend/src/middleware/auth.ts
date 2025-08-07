import { Elysia } from 'elysia'
import { jwt } from '@elysiajs/jwt'
import { statements } from '../database/schema'
import { sanitizeUser } from '../utils/auth'

export const authMiddleware = new Elysia({ name: 'auth' })
  .use(
    jwt({
      name: 'jwt',
      secret: process.env.JWT_SECRET || 'your-secret-key-here',
    }),
  )
  .derive(async ({ jwt, headers, set }) => {
    const authorization = headers.authorization

    if (!authorization) {
      return { user: null }
    }

    const token = authorization.replace('Bearer ', '')

    try {
      const payload = await jwt.verify(token)

      if (!payload || typeof payload !== 'object' || !payload.userId) {
        return { user: null }
      }

      const user = statements.getUserById.get(payload.userId)

      if (!user) {
        return { user: null }
      }

      return { user: sanitizeUser(user) }
    } catch (error) {
      return { user: null }
    }
  })
  .macro(({ onBeforeHandle }) => ({
    requireAuth(enabled: boolean = true) {
      if (!enabled) return

      onBeforeHandle(({ user, set }) => {
        if (!user) {
          set.status = 401
          return {
            success: false,
            message: 'Unauthorized - Token required',
          }
        }
      })
    },
  }))

export const optionalAuth = new Elysia({ name: 'optional-auth' }).use(authMiddleware)

export const requireAuth = new Elysia({ name: 'require-auth' }).use(authMiddleware).requireAuth()
