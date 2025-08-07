import { Elysia, t } from 'elysia'
import { statements } from '../database/schema'
import { optionalAuth } from '../middleware/auth'

export const leaderboardRoutes = new Elysia({ prefix: '/api/leaderboard' })
  .use(optionalAuth)

  // Bảng xếp hạng tổng thể (theo XP)
  .get(
    '/',
    ({ query, user }) => {
      try {
        const { limit = 50 } = query
        const limitNum = Math.min(Number(limit), 100)

        // Lấy top users
        const topUsers = statements.getTopUsers.all(limitNum)

        // Nếu user đăng nhập, tìm ranking của họ
        let userRanking = null
        if (user) {
          const ranking = statements.getUserRanking.get(user.id)
          userRanking = {
            ...user,
            rank: ranking.rank,
            accuracy_rate:
              user.total_questions_answered > 0
                ? Math.round((user.correct_answers / user.total_questions_answered) * 100)
                : 0,
          }
        }

        // Thêm rank cho từng user
        const rankedUsers = topUsers.map((user, index) => ({
          ...user,
          rank: index + 1,
        }))

        return {
          success: true,
          data: {
            leaderboard: rankedUsers,
            user_ranking: userRanking,
          },
        }
      } catch (error) {
        console.error('Get leaderboard error:', error)
        return {
          success: false,
          message: 'Lỗi khi lấy bảng xếp hạng',
        }
      }
    },
    {
      query: t.Object({
        limit: t.Optional(t.String()),
      }),
      detail: {
        tags: ['Leaderboard'],
        summary: 'Bảng xếp hạng tổng thể',
        description: 'Lấy bảng xếp hạng người dùng theo điểm XP',
      },
    },
  )

  // Bảng xếp hạng theo category
  .get(
    '/category/:category',
    ({ params, query }) => {
      try {
        const { category } = params
        const { limit = 50 } = query
        const limitNum = Math.min(Number(limit), 100)

        const categoryLeaderboard = db
          .prepare(
            `
        SELECT 
          u.id, u.username, u.full_name, u.avatar_url, u.level,
          COUNT(ua.id) as questions_answered,
          SUM(CASE WHEN ua.is_correct THEN 1 ELSE 0 END) as correct_answers,
          SUM(ua.points_earned) as total_points,
          ROUND(AVG(CASE WHEN ua.is_correct THEN 1.0 ELSE 0.0 END) * 100, 1) as accuracy_rate
        FROM users u
        JOIN user_answers ua ON u.id = ua.user_id
        JOIN questions q ON ua.question_id = q.id
        WHERE q.category = ?
        GROUP BY u.id
        HAVING questions_answered >= 5
        ORDER BY total_points DESC, accuracy_rate DESC
        LIMIT ?
      `,
          )
          .all(category, limitNum)

        // Thêm rank
        const rankedUsers = categoryLeaderboard.map((user, index) => ({
          ...user,
          rank: index + 1,
        }))

        return {
          success: true,
          data: {
            category,
            leaderboard: rankedUsers,
          },
        }
      } catch (error) {
        console.error('Get category leaderboard error:', error)
        return {
          success: false,
          message: 'Lỗi khi lấy bảng xếp hạng theo chủ đề',
        }
      }
    },
    {
      params: t.Object({
        category: t.String(),
      }),
      query: t.Object({
        limit: t.Optional(t.String()),
      }),
      detail: {
        tags: ['Leaderboard'],
        summary: 'Bảng xếp hạng theo chủ đề',
        description: 'Lấy bảng xếp hạng người dùng theo chủ đề cụ thể',
      },
    },
  )

  // Bảng xếp hạng friends (chỉ bạn bè)
  .get(
    '/friends',
    ({ user, query }) => {
      try {
        if (!user) {
          return {
            success: false,
            message: 'Cần đăng nhập để xem bảng xếp hạng bạn bè',
          }
        }

        const friendsLeaderboard = db
          .prepare(
            `
        SELECT 
          u.id, u.username, u.full_name, u.avatar_url, u.level, u.xp,
          u.total_questions_answered, u.correct_answers,
          ROUND((u.correct_answers * 100.0 / u.total_questions_answered), 1) as accuracy_rate
        FROM users u
        WHERE u.id IN (
          SELECT friend_id FROM friendships 
          WHERE user_id = ? AND status = 'accepted'
          UNION
          SELECT user_id FROM friendships 
          WHERE friend_id = ? AND status = 'accepted'
        ) OR u.id = ?
        ORDER BY u.xp DESC
      `,
          )
          .all(user.id, user.id, user.id)

        // Thêm rank
        const rankedFriends = friendsLeaderboard.map((friend, index) => ({
          ...friend,
          rank: index + 1,
          is_current_user: friend.id === user.id,
        }))

        return {
          success: true,
          data: {
            friends_leaderboard: rankedFriends,
          },
        }
      } catch (error) {
        console.error('Get friends leaderboard error:', error)
        return {
          success: false,
          message: 'Lỗi khi l��y bảng xếp hạng bạn bè',
        }
      }
    },
    {
      detail: {
        tags: ['Leaderboard'],
        summary: 'Bảng xếp hạng bạn bè',
        description: 'Lấy bảng xếp hạng chỉ bao gồm bạn bè của người dùng',
      },
    },
  )

  // Thống kê tổng quan
  .get(
    '/stats',
    () => {
      try {
        const totalStats = db
          .prepare(
            `
        SELECT 
          COUNT(DISTINCT u.id) as total_users,
          COUNT(DISTINCT q.id) as total_questions,
          COUNT(ua.id) as total_answers,
          COUNT(DISTINCT q.category) as total_categories,
          SUM(CASE WHEN ua.is_correct THEN 1 ELSE 0 END) as total_correct_answers,
          ROUND(AVG(CASE WHEN ua.is_correct THEN 1.0 ELSE 0.0 END) * 100, 1) as overall_accuracy
        FROM users u
        LEFT JOIN user_answers ua ON u.id = ua.user_id
        LEFT JOIN questions q ON ua.question_id = q.id
      `,
          )
          .get()

        const activeUsers = db
          .prepare(
            `
        SELECT COUNT(DISTINCT user_id) as active_today
        FROM user_answers
        WHERE DATE(answered_at) = DATE('now')
      `,
          )
          .get()

        const topCategory = db
          .prepare(
            `
        SELECT q.category, COUNT(*) as question_count
        FROM questions q
        GROUP BY q.category
        ORDER BY question_count DESC
        LIMIT 1
      `,
          )
          .get()

        return {
          success: true,
          data: {
            ...totalStats,
            active_users_today: activeUsers.active_today,
            most_popular_category: topCategory?.category || null,
          },
        }
      } catch (error) {
        console.error('Get leaderboard stats error:', error)
        return {
          success: false,
          message: 'Lỗi khi lấy thống kê',
        }
      }
    },
    {
      detail: {
        tags: ['Leaderboard'],
        summary: 'Thống kê tổng quan',
        description: 'Lấy thống kê tổng quan của hệ thống',
      },
    },
  )
