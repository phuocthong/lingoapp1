import { Elysia, t } from 'elysia';
import { statements, generateId } from '../database/schema';
import { requireAuth, optionalAuth } from '../middleware/auth';
import { calculateXP, calculateLevel } from '../utils/auth';

export const questionRoutes = new Elysia({ prefix: '/api/questions' })
  
  // Lấy danh sách câu hỏi theo category
  .use(optionalAuth)
  .get('/', ({ query }) => {
    try {
      const { category, difficulty, limit = 10 } = query;
      const limitNum = Math.min(Number(limit), 50); // Max 50 questions per request
      
      let questions;
      
      if (category && difficulty) {
        questions = db.prepare(`
          SELECT * FROM questions 
          WHERE category = ? AND difficulty_level = ? 
          ORDER BY RANDOM() 
          LIMIT ?
        `).all(category, difficulty, limitNum);
      } else if (category) {
        questions = statements.getQuestionsByCategory.all(category, limitNum);
      } else if (difficulty) {
        questions = statements.getQuestionsByDifficulty.all(difficulty, limitNum);
      } else {
        questions = statements.getRandomQuestions.all(limitNum);
      }
      
      // Parse JSON fields
      const parsedQuestions = questions.map(q => ({
        ...q,
        options: q.options ? JSON.parse(q.options) : null
      }));
      
      return {
        success: true,
        data: parsedQuestions
      };
    } catch (error) {
      console.error('Get questions error:', error);
      return {
        success: false,
        message: 'Lỗi khi lấy danh sách câu hỏi'
      };
    }
  }, {
    query: t.Object({
      category: t.Optional(t.String()),
      difficulty: t.Optional(t.Union([t.Literal('easy'), t.Literal('medium'), t.Literal('hard')])),
      limit: t.Optional(t.String())
    }),
    detail: {
      tags: ['Questions'],
      summary: 'Lấy danh sách câu hỏi',
      description: 'Lấy câu hỏi theo danh mục và độ khó'
    }
  })
  
  // Lấy câu hỏi theo ID
  .get('/:id', ({ params }) => {
    try {
      const question = statements.getQuestionById.get(params.id);
      
      if (!question) {
        return {
          success: false,
          message: 'Không tìm thấy câu hỏi'
        };
      }
      
      const parsedQuestion = {
        ...question,
        options: question.options ? JSON.parse(question.options) : null
      };
      
      return {
        success: true,
        data: parsedQuestion
      };
    } catch (error) {
      console.error('Get question error:', error);
      return {
        success: false,
        message: 'Lỗi khi lấy câu hỏi'
      };
    }
  }, {
    params: t.Object({
      id: t.String()
    }),
    detail: {
      tags: ['Questions'],
      summary: 'Lấy câu hỏi theo ID',
      description: 'Lấy thông tin chi tiết của một câu hỏi'
    }
  })
  
  // Nộp câu trả lời
  .use(requireAuth)
  .post('/:id/answer', async ({ params, body, user, set }) => {
    try {
      const { user_answer, time_taken } = body;
      const questionId = params.id;
      
      // Lấy thông tin câu hỏi
      const question = statements.getQuestionById.get(questionId);
      if (!question) {
        set.status = 404;
        return {
          success: false,
          message: 'Không tìm thấy câu hỏi'
        };
      }
      
      // Kiểm tra câu trả lời
      const isCorrect = user_answer.toLowerCase().trim() === question.correct_answer.toLowerCase().trim();
      
      // Tính điểm
      const pointsEarned = isCorrect ? calculateXP(question.difficulty_level, true, time_taken) : 0;
      
      // Lưu câu trả lời
      const answerId = generateId();
      statements.saveUserAnswer.run(
        answerId,
        user.id,
        questionId,
        user_answer,
        isCorrect,
        time_taken,
        pointsEarned
      );
      
      // Cập nhật thống kê người dùng
      const userStats = statements.getUserById.get(user.id);
      const newTotalQuestions = userStats.total_questions_answered + 1;
      const newCorrectAnswers = userStats.correct_answers + (isCorrect ? 1 : 0);
      const newXP = userStats.xp + pointsEarned;
      const newLevel = calculateLevel(newXP);
      
      statements.updateUserStats.run(
        newLevel,
        newXP,
        userStats.streak_days, // Streak sẽ được tính trong daily challenge
        newTotalQuestions,
        newCorrectAnswers,
        user.id
      );
      
      return {
        success: true,
        data: {
          is_correct: isCorrect,
          correct_answer: question.correct_answer,
          explanation: question.explanation,
          points_earned: pointsEarned,
          user_stats: {
            total_questions: newTotalQuestions,
            correct_answers: newCorrectAnswers,
            xp: newXP,
            level: newLevel,
            accuracy: Math.round((newCorrectAnswers / newTotalQuestions) * 100)
          }
        }
      };
    } catch (error) {
      console.error('Submit answer error:', error);
      set.status = 500;
      return {
        success: false,
        message: 'Lỗi khi nộp câu trả lời'
      };
    }
  }, {
    params: t.Object({
      id: t.String()
    }),
    body: t.Object({
      user_answer: t.String(),
      time_taken: t.Number({ minimum: 0 })
    }),
    detail: {
      tags: ['Questions'],
      summary: 'Nộp câu trả lời',
      description: 'Nộp câu trả lời cho một câu hỏi'
    }
  })
  
  // Lấy lịch sử trả lời của user
  .get('/user/history', ({ query, user }) => {
    try {
      const { limit = 20 } = query;
      const limitNum = Math.min(Number(limit), 100);
      
      const history = statements.getUserAnswerHistory.all(user.id, limitNum);
      
      return {
        success: true,
        data: history
      };
    } catch (error) {
      console.error('Get user history error:', error);
      return {
        success: false,
        message: 'Lỗi khi lấy lịch sử trả lời'
      };
    }
  }, {
    query: t.Object({
      limit: t.Optional(t.String())
    }),
    detail: {
      tags: ['Questions'],
      summary: 'Lấy lịch sử trả lời của user',
      description: 'Lấy danh sách câu hỏi đã trả lời của người dùng'
    }
  })
  
  // Lấy danh sách categories
  .get('/categories', () => {
    try {
      const categories = db.prepare(`
        SELECT category, COUNT(*) as question_count
        FROM questions 
        GROUP BY category
        ORDER BY category
      `).all();
      
      return {
        success: true,
        data: categories
      };
    } catch (error) {
      console.error('Get categories error:', error);
      return {
        success: false,
        message: 'Lỗi khi lấy danh sách chủ đề'
      };
    }
  }, {
    detail: {
      tags: ['Questions'],
      summary: 'Lấy danh sách chủ đề',
      description: 'Lấy tất cả chủ đề câu hỏi có sẵn'
    }
  });
