import { Elysia, t } from 'elysia'
import { statements, generateId, db } from '../database/schema'
import { requireAuth } from '../middleware/auth'

export const chatRoutes = new Elysia({ prefix: '/api/chat' })
  .use(requireAuth)

  // Tạo battle mới với bot
  .post(
    '/battle/bot',
    ({ user, body }) => {
      try {
        const { difficulty = 'medium', category } = body

        // Lấy random questions
        let questions
        if (category) {
          questions = db
            .prepare(
              `
          SELECT id FROM questions 
          WHERE category = ? AND difficulty_level = ?
          ORDER BY RANDOM() 
          LIMIT 5
        `,
            )
            .all(category, difficulty)
        } else {
          questions = db
            .prepare(
              `
          SELECT id FROM questions 
          WHERE difficulty_level = ?
          ORDER BY RANDOM() 
          LIMIT 5
        `,
            )
            .all(difficulty)
        }

        if (questions.length < 5) {
          return {
            success: false,
            message: 'Không đủ câu hỏi để tạo battle',
          }
        }

        const battleId = generateId()
        const questionIds = questions.map((q) => q.id)

        statements.createBattle.run(
          battleId,
          user.id,
          null, // bot battle không có player2
          'waiting',
          'bot',
          JSON.stringify(questionIds),
        )

        // Bắt đầu battle ngay lập tức
        statements.updateBattleStatus.run('active', battleId)

        // Lấy câu hỏi đầy đủ
        const fullQuestions = questionIds.map((id) => {
          const q = statements.getQuestionById.get(id)
          return {
            ...q,
            options: q.options ? JSON.parse(q.options) : null,
          }
        })

        return {
          success: true,
          data: {
            battle_id: battleId,
            status: 'active',
            questions: fullQuestions,
            mode: 'bot',
          },
        }
      } catch (error) {
        console.error('Create bot battle error:', error)
        return {
          success: false,
          message: 'Lỗi khi tạo battle với bot',
        }
      }
    },
    {
      body: t.Object({
        difficulty: t.Optional(
          t.Union([t.Literal('easy'), t.Literal('medium'), t.Literal('hard')]),
        ),
        category: t.Optional(t.String()),
      }),
      detail: {
        tags: ['Chat'],
        summary: 'Tạo battle với bot',
        description: 'Tạo một trận đấu mới với bot AI',
      },
    },
  )

  // Nộp kết quả battle
  .post(
    '/battle/:id/submit',
    ({ params, body, user, set }) => {
      try {
        const { answers } = body // Array of {question_id, user_answer, time_taken}
        const battleId = params.id

        // Lấy thông tin battle
        const battle = statements.getBattleById.get(battleId)
        if (!battle) {
          set.status = 404
          return {
            success: false,
            message: 'Không tìm thấy battle',
          }
        }

        if (battle.player1_id !== user.id && battle.player2_id !== user.id) {
          set.status = 403
          return {
            success: false,
            message: 'Bạn không có quyền truy cập battle này',
          }
        }

        if (battle.status !== 'active') {
          set.status = 400
          return {
            success: false,
            message: 'Battle không ở trạng thái active',
          }
        }

        // Tính điểm cho từng câu trả lời
        const questionIds = JSON.parse(battle.questions)
        let totalScore = 0
        const detailedResults = []

        for (const answer of answers) {
          const question = statements.getQuestionById.get(answer.question_id)
          if (!question) continue

          const isCorrect =
            answer.user_answer.toLowerCase().trim() === question.correct_answer.toLowerCase().trim()
          const points = isCorrect ? question.points : 0
          totalScore += points

          detailedResults.push({
            question_id: answer.question_id,
            user_answer: answer.user_answer,
            correct_answer: question.correct_answer,
            is_correct: isCorrect,
            points: points,
            time_taken: answer.time_taken,
          })

          // Lưu vào user_answers
          const answerId = generateId()
          statements.saveUserAnswer.run(
            answerId,
            user.id,
            answer.question_id,
            answer.user_answer,
            isCorrect,
            answer.time_taken,
            points,
          )
        }

        if (battle.mode === 'bot') {
          // Bot battle - tạo kết quả bot ngẫu nhiên
          const botScore =
            Math.floor(Math.random() * (totalScore * 1.2)) + Math.floor(totalScore * 0.3)
          const winnerId = totalScore > botScore ? user.id : null

          // Cập nhật battle
          const player1Answers = battle.player1_id === user.id ? detailedResults : null
          const player2Answers = battle.player1_id === user.id ? null : detailedResults

          statements.updateBattleAnswers.run(
            JSON.stringify(player1Answers),
            JSON.stringify(player2Answers),
            winnerId,
            battleId,
          )

          // Cập nhật XP cho user
          const bonusXP = winnerId === user.id ? 50 : 25 // Win bonus or participation bonus
          const currentUser = statements.getUserById.get(user.id)
          const newXP = currentUser.xp + totalScore + bonusXP

          db.prepare('UPDATE users SET xp = ? WHERE id = ?').run(newXP, user.id)

          return {
            success: true,
            data: {
              battle_completed: true,
              user_score: totalScore,
              bot_score: botScore,
              winner: winnerId === user.id ? 'user' : 'bot',
              detailed_results: detailedResults,
              xp_gained: totalScore + bonusXP,
            },
          }
        } else {
          // Friend battle - lưu kết quả và chờ đối thủ
          const isPlayer1 = battle.player1_id === user.id

          if (isPlayer1) {
            db.prepare('UPDATE battles SET player1_answers = ? WHERE id = ?').run(
              JSON.stringify(detailedResults),
              battleId,
            )
          } else {
            db.prepare('UPDATE battles SET player2_answers = ? WHERE id = ?').run(
              JSON.stringify(detailedResults),
              battleId,
            )
          }

          return {
            success: true,
            data: {
              battle_completed: false,
              user_score: totalScore,
              waiting_for_opponent: true,
              detailed_results: detailedResults,
            },
          }
        }
      } catch (error) {
        console.error('Submit battle error:', error)
        set.status = 500
        return {
          success: false,
          message: 'Lỗi khi nộp kết quả battle',
        }
      }
    },
    {
      params: t.Object({
        id: t.String(),
      }),
      body: t.Object({
        answers: t.Array(
          t.Object({
            question_id: t.String(),
            user_answer: t.String(),
            time_taken: t.Number(),
          }),
        ),
      }),
      detail: {
        tags: ['Chat'],
        summary: 'Nộp kết quả battle',
        description: 'Nộp câu trả lời và hoàn thành battle',
      },
    },
  )

  // Lấy danh sách battle của user
  .get(
    '/battles',
    ({ user, query }) => {
      try {
        const { status, limit = 20 } = query
        const limitNum = Math.min(Number(limit), 50)

        let battles
        if (status) {
          battles = db
            .prepare(
              `
          SELECT * FROM battles 
          WHERE (player1_id = ? OR player2_id = ?) AND status = ?
          ORDER BY created_at DESC 
          LIMIT ?
        `,
            )
            .all(user.id, user.id, status, limitNum)
        } else {
          battles = statements.getUserActiveBattles.all(user.id, user.id)
        }

        // Lấy thông tin đối thủ cho mỗi battle
        const battlesWithOpponents = battles.map((battle) => {
          let opponent = null
          if (battle.mode === 'friend' && battle.player2_id) {
            const opponentId = battle.player1_id === user.id ? battle.player2_id : battle.player1_id
            const opponentData = statements.getUserById.get(opponentId)
            if (opponentData) {
              opponent = {
                id: opponentData.id,
                username: opponentData.username,
                full_name: opponentData.full_name,
                avatar_url: opponentData.avatar_url,
                level: opponentData.level,
              }
            }
          }

          return {
            ...battle,
            opponent,
            questions: battle.questions ? JSON.parse(battle.questions) : [],
            player1_answers: battle.player1_answers ? JSON.parse(battle.player1_answers) : null,
            player2_answers: battle.player2_answers ? JSON.parse(battle.player2_answers) : null,
          }
        })

        return {
          success: true,
          data: battlesWithOpponents,
        }
      } catch (error) {
        console.error('Get battles error:', error)
        return {
          success: false,
          message: 'Lỗi khi lấy danh sách battle',
        }
      }
    },
    {
      query: t.Object({
        status: t.Optional(t.String()),
        limit: t.Optional(t.String()),
      }),
      detail: {
        tags: ['Chat'],
        summary: 'Lấy danh sách battle',
        description: 'Lấy danh sách battle của người dùng',
      },
    },
  )

  // Lấy chi tiết battle
  .get(
    '/battle/:id',
    ({ params, user, set }) => {
      try {
        const battle = statements.getBattleById.get(params.id)

        if (!battle) {
          set.status = 404
          return {
            success: false,
            message: 'Không tìm thấy battle',
          }
        }

        if (battle.player1_id !== user.id && battle.player2_id !== user.id) {
          set.status = 403
          return {
            success: false,
            message: 'Bạn không có quyền truy cập battle này',
          }
        }

        // Lấy thông tin questions
        const questionIds = JSON.parse(battle.questions)
        const questions = questionIds.map((id) => {
          const q = statements.getQuestionById.get(id)
          return {
            ...q,
            options: q.options ? JSON.parse(q.options) : null,
          }
        })

        // Lấy thông tin opponent nếu có
        let opponent = null
        if (battle.player2_id) {
          const opponentId = battle.player1_id === user.id ? battle.player2_id : battle.player1_id
          const opponentData = statements.getUserById.get(opponentId)
          if (opponentData) {
            opponent = {
              id: opponentData.id,
              username: opponentData.username,
              full_name: opponentData.full_name,
              avatar_url: opponentData.avatar_url,
              level: opponentData.level,
            }
          }
        }

        return {
          success: true,
          data: {
            ...battle,
            questions,
            opponent,
            player1_answers: battle.player1_answers ? JSON.parse(battle.player1_answers) : null,
            player2_answers: battle.player2_answers ? JSON.parse(battle.player2_answers) : null,
          },
        }
      } catch (error) {
        console.error('Get battle detail error:', error)
        set.status = 500
        return {
          success: false,
          message: 'Lỗi khi lấy chi tiết battle',
        }
      }
    },
    {
      params: t.Object({
        id: t.String(),
      }),
      detail: {
        tags: ['Chat'],
        summary: 'Lấy chi tiết battle',
        description: 'Lấy thông tin chi tiết của một battle',
      },
    },
  )
