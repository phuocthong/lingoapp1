import { Elysia, t } from 'elysia'
import { statements } from '../database/schema'
import { requireAuth } from '../middleware/auth'
import { isValidUsername, sanitizeUser } from '../utils/auth'

export const userRoutes = new Elysia({ prefix: '/api/users' })
  .use(requireAuth)

  // Cập nhật thông tin profile
  .put(
    '/profile',
    ({ body, user, set }) => {
      try {
        const { username, full_name, avatar_url } = body

        // Validate username if provided
        if (username && username !== user.username) {
          const usernameValidation = isValidUsername(username)
          if (!usernameValidation.isValid) {
            set.status = 400
            return {
              success: false,
              message: usernameValidation.message,
            }
          }

          // Check if username is already taken
          const existingUser = statements.getUserByUsername.get(username)
          if (existingUser && existingUser.id !== user.id) {
            set.status = 409
            return {
              success: false,
              message: 'Tên người dùng đã được sử dụng',
            }
          }
        }

        // Update user
        statements.updateUser.run(
          username || user.username,
          full_name || user.full_name || null,
          avatar_url || user.avatar_url || null,
          user.id,
        )

        // Get updated user
        const updatedUser = statements.getUserById.get(user.id)

        return {
          success: true,
          message: 'Cập nhật thông tin thành công',
          data: {
            user: sanitizeUser(updatedUser),
          },
        }
      } catch (error) {
        console.error('Update profile error:', error)
        set.status = 500
        return {
          success: false,
          message: 'Lỗi khi cập nhật thông tin',
        }
      }
    },
    {
      body: t.Object({
        username: t.Optional(t.String({ minLength: 3, maxLength: 20 })),
        full_name: t.Optional(t.String({ maxLength: 100 })),
        avatar_url: t.Optional(t.String()),
      }),
      detail: {
        tags: ['Users'],
        summary: 'Cập nhật thông tin cá nhân',
        description: 'Cập nhật username, tên đầy đủ và avatar',
      },
    },
  )

  // Lấy thống kê chi tiết của user
  .get(
    '/stats',
    ({ user }) => {
      try {
        // Lấy thống kê tổng quan
        const userStats = statements.getUserById.get(user.id)

        // Lấy thống kê theo category
        const categoryStats = db
          .prepare(
            `
        SELECT 
          q.category,
          COUNT(*) as total_answered,
          SUM(CASE WHEN ua.is_correct THEN 1 ELSE 0 END) as correct_answered,
          ROUND(AVG(CASE WHEN ua.is_correct THEN 1.0 ELSE 0.0 END) * 100, 1) as accuracy_rate,
          SUM(ua.points_earned) as total_points
        FROM user_answers ua
        JOIN questions q ON ua.question_id = q.id
        WHERE ua.user_id = ?
        GROUP BY q.category
        ORDER BY total_answered DESC
      `,
          )
          .all(user.id)

        // Lấy thống kê theo difficulty
        const difficultyStats = db
          .prepare(
            `
        SELECT 
          q.difficulty_level,
          COUNT(*) as total_answered,
          SUM(CASE WHEN ua.is_correct THEN 1 ELSE 0 END) as correct_answered,
          ROUND(AVG(CASE WHEN ua.is_correct THEN 1.0 ELSE 0.0 END) * 100, 1) as accuracy_rate,
          SUM(ua.points_earned) as total_points
        FROM user_answers ua
        JOIN questions q ON ua.question_id = q.id
        WHERE ua.user_id = ?
        GROUP BY q.difficulty_level
        ORDER BY 
          CASE q.difficulty_level 
            WHEN 'easy' THEN 1 
            WHEN 'medium' THEN 2 
            WHEN 'hard' THEN 3 
          END
      `,
          )
          .all(user.id)

        // Lấy hoạt động 7 ngày gần nhất
        const recentActivity = db
          .prepare(
            `
        SELECT 
          DATE(answered_at) as date,
          COUNT(*) as questions_answered,
          SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) as correct_answers,
          SUM(points_earned) as points_earned
        FROM user_answers
        WHERE user_id = ? AND answered_at >= DATE('now', '-7 days')
        GROUP BY DATE(answered_at)
        ORDER BY date DESC
      `,
          )
          .all(user.id)

        // Tính accuracy rate
        const accuracyRate =
          userStats.total_questions_answered > 0
            ? Math.round((userStats.correct_answers / userStats.total_questions_answered) * 100)
            : 0

        return {
          success: true,
          data: {
            overview: {
              ...sanitizeUser(userStats),
              accuracy_rate: accuracyRate,
            },
            by_category: categoryStats,
            by_difficulty: difficultyStats,
            recent_activity: recentActivity,
          },
        }
      } catch (error) {
        console.error('Get user stats error:', error)
        return {
          success: false,
          message: 'Lỗi khi lấy thống kê',
        }
      }
    },
    {
      detail: {
        tags: ['Users'],
        summary: 'Lấy thống kê chi tiết',
        description: 'Lấy thống kê học tập chi tiết của người dùng',
      },
    },
  )

  // Tìm kiếm user theo username
  .get(
    '/search',
    ({ query }) => {
      try {
        const { q, limit = 10 } = query

        if (!q || q.length < 2) {
          return {
            success: false,
            message: 'Từ khóa tìm kiếm phải có ít nhất 2 ký tự',
          }
        }

        const limitNum = Math.min(Number(limit), 20)

        const users = db
          .prepare(
            `
        SELECT id, username, full_name, avatar_url, level, xp
        FROM users
        WHERE username LIKE ? OR full_name LIKE ?
        ORDER BY xp DESC
        LIMIT ?
      `,
          )
          .all(`%${q}%`, `%${q}%`, limitNum)

        return {
          success: true,
          data: users,
        }
      } catch (error) {
        console.error('Search users error:', error)
        return {
          success: false,
          message: 'Lỗi khi tìm kiếm người dùng',
        }
      }
    },
    {
      query: t.Object({
        q: t.String({ minLength: 2 }),
        limit: t.Optional(t.String()),
      }),
      detail: {
        tags: ['Users'],
        summary: 'Tìm kiếm người dùng',
        description: 'Tìm kiếm người dùng theo username hoặc tên',
      },
    },
  )

  // Lấy thông tin user theo ID
  .get(
    '/:id',
    ({ params }) => {
      try {
        const targetUser = statements.getUserById.get(params.id)

        if (!targetUser) {
          return {
            success: false,
            message: 'Không tìm thấy người dùng',
          }
        }

        // Chỉ trả về thông tin công khai
        const publicUser = {
          id: targetUser.id,
          username: targetUser.username,
          full_name: targetUser.full_name,
          avatar_url: targetUser.avatar_url,
          level: targetUser.level,
          xp: targetUser.xp,
          streak_days: targetUser.streak_days,
          total_questions_answered: targetUser.total_questions_answered,
          correct_answers: targetUser.correct_answers,
          accuracy_rate:
            targetUser.total_questions_answered > 0
              ? Math.round((targetUser.correct_answers / targetUser.total_questions_answered) * 100)
              : 0,
          created_at: targetUser.created_at,
        }

        return {
          success: true,
          data: publicUser,
        }
      } catch (error) {
        console.error('Get user error:', error)
        return {
          success: false,
          message: 'Lỗi khi lấy thông tin người dùng',
        }
      }
    },
    {
      params: t.Object({
        id: t.String(),
      }),
      detail: {
        tags: ['Users'],
        summary: 'Lấy thông tin người dùng theo ID',
        description: 'Lấy thông tin công khai của một người dùng',
      },
    },
  )
