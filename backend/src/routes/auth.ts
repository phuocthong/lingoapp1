import { Elysia, t } from 'elysia'
import { jwt } from '@elysiajs/jwt'
import { statements, generateId } from '../database/schema'
import {
  hashPassword,
  verifyPassword,
  isValidEmail,
  isValidPassword,
  isValidUsername,
  userExists,
  sanitizeUser,
} from '../utils/auth'
import { requireAuth } from '../middleware/auth'

export const authRoutes = new Elysia({ prefix: '/api/auth' })
  .use(
    jwt({
      name: 'jwt',
      secret: process.env.JWT_SECRET || 'your-secret-key-here',
      exp: '7d',
    }),
  )

  // Đăng ký
  .post(
    '/register',
    async ({ body, set, jwt }) => {
      try {
        const { username, email, password, full_name } = body

        // Validate input
        if (!username || !email || !password) {
          set.status = 400
          return {
            success: false,
            message: 'Vui lòng điền đầy đủ thông tin',
          }
        }

        // Validate email
        if (!isValidEmail(email)) {
          set.status = 400
          return {
            success: false,
            message: 'Email không hợp lệ',
          }
        }

        // Validate username
        const usernameValidation = isValidUsername(username)
        if (!usernameValidation.isValid) {
          set.status = 400
          return {
            success: false,
            message: usernameValidation.message,
          }
        }

        // Validate password
        const passwordValidation = isValidPassword(password)
        if (!passwordValidation.isValid) {
          set.status = 400
          return {
            success: false,
            message: passwordValidation.message,
          }
        }

        // Check if user already exists
        const existingUser = userExists(email, username)
        if (existingUser.exists) {
          set.status = 409
          return {
            success: false,
            message: `${existingUser.field === 'email' ? 'Email' : 'Tên người dùng'} đã được sử dụng`,
          }
        }

        // Hash password
        const passwordHash = await hashPassword(password)

        // Create user
        const userId = generateId()
        statements.createUser.run(userId, username, email, passwordHash, full_name || null)

        // Get created user
        const newUser = statements.getUserById.get(userId)

        // Generate JWT token
        const token = await jwt.sign({
          userId: userId,
          username: username,
          email: email,
        })

        return {
          success: true,
          message: 'Đăng ký thành công',
          data: {
            user: sanitizeUser(newUser),
            token,
          },
        }
      } catch (error) {
        console.error('Register error:', error)
        set.status = 500
        return {
          success: false,
          message: 'Lỗi server',
        }
      }
    },
    {
      body: t.Object({
        username: t.String({ minLength: 3, maxLength: 20 }),
        email: t.String({ format: 'email' }),
        password: t.String({ minLength: 8 }),
        full_name: t.Optional(t.String()),
      }),
      detail: {
        tags: ['Auth'],
        summary: 'Đăng ký tài khoản mới',
        description: 'Tạo tài khoản người dùng mới',
      },
    },
  )

  // Đăng nhập
  .post(
    '/login',
    async ({ body, set, jwt }) => {
      try {
        const { email, password } = body

        // Validate input
        if (!email || !password) {
          set.status = 400
          return {
            success: false,
            message: 'Vui lòng điền email và mật khẩu',
          }
        }

        // Find user by email
        const user = statements.getUserByEmail.get(email)
        if (!user) {
          set.status = 401
          return {
            success: false,
            message: 'Email hoặc mật khẩu không đúng',
          }
        }

        // Verify password
        const isValidPassword = await verifyPassword(password, user.password_hash)
        if (!isValidPassword) {
          set.status = 401
          return {
            success: false,
            message: 'Email hoặc mật khẩu không đúng',
          }
        }

        // Generate JWT token
        const token = await jwt.sign({
          userId: user.id,
          username: user.username,
          email: user.email,
        })

        return {
          success: true,
          message: 'Đăng nhập thành công',
          data: {
            user: sanitizeUser(user),
            token,
          },
        }
      } catch (error) {
        console.error('Login error:', error)
        set.status = 500
        return {
          success: false,
          message: 'Lỗi server',
        }
      }
    },
    {
      body: t.Object({
        email: t.String({ format: 'email' }),
        password: t.String(),
      }),
      detail: {
        tags: ['Auth'],
        summary: 'Đăng nhập',
        description: 'Xác thực người dùng và trả về token',
      },
    },
  )

  // Lấy thông tin user hiện tại
  .use(requireAuth)
  .get(
    '/me',
    ({ user }) => {
      return {
        success: true,
        data: { user },
      }
    },
    {
      detail: {
        tags: ['Auth'],
        summary: 'Lấy thông tin người dùng hiện tại',
        description: 'Trả về thông tin chi tiết của người dùng đang đăng nhập',
      },
    },
  )

  // Đổi mật khẩu
  .post(
    '/change-password',
    async ({ body, set, user }) => {
      try {
        const { current_password, new_password } = body

        // Get full user data (including password hash)
        const fullUser = statements.getUserById.get(user.id)
        if (!fullUser) {
          set.status = 404
          return {
            success: false,
            message: 'Người dùng không tồn tại',
          }
        }

        // Verify current password
        const isValidCurrentPassword = await verifyPassword(
          current_password,
          fullUser.password_hash,
        )
        if (!isValidCurrentPassword) {
          set.status = 400
          return {
            success: false,
            message: 'Mật khẩu hiện tại không đúng',
          }
        }

        // Validate new password
        const passwordValidation = isValidPassword(new_password)
        if (!passwordValidation.isValid) {
          set.status = 400
          return {
            success: false,
            message: passwordValidation.message,
          }
        }

        // Hash new password
        const newPasswordHash = await hashPassword(new_password)

        // Update password in database
        const updatePassword = db.prepare(
          'UPDATE users SET password_hash = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        )
        updatePassword.run(newPasswordHash, user.id)

        return {
          success: true,
          message: 'Đổi mật khẩu thành công',
        }
      } catch (error) {
        console.error('Change password error:', error)
        set.status = 500
        return {
          success: false,
          message: 'Lỗi server',
        }
      }
    },
    {
      body: t.Object({
        current_password: t.String(),
        new_password: t.String({ minLength: 8 }),
      }),
      detail: {
        tags: ['Auth'],
        summary: 'Đổi mật khẩu',
        description: 'Thay đổi mật khẩu người dùng',
      },
    },
  )
