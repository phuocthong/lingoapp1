import { statements, generateId } from './database/schema'
import { hashPassword } from './utils/auth'

// Dữ liệu câu hỏi mẫu
const sampleQuestions = [
  // Vocabulary - Easy
  {
    question_text: "What is the English word for 'xin chào'?",
    question_type: 'multiple_choice',
    difficulty_level: 'easy',
    category: 'vocabulary',
    correct_answer: 'Hello',
    options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
    explanation: "'Hello' là từ tiếng Anh nghĩa là 'xin chào'",
    points: 10,
  },
  {
    question_text: "Choose the correct translation for 'cảm ơn':",
    question_type: 'multiple_choice',
    difficulty_level: 'easy',
    category: 'vocabulary',
    correct_answer: 'Thank you',
    options: ['Hello', 'Goodbye', 'Thank you', 'Sorry'],
    explanation: "'Thank you' có nghĩa là 'cảm ơn'",
    points: 10,
  },
  {
    question_text: "What does 'book' mean in Vietnamese?",
    question_type: 'fill_blank',
    difficulty_level: 'easy',
    category: 'vocabulary',
    correct_answer: 'sách',
    explanation: "'Book' trong tiếng Việt có nghĩa là 'sách'",
    points: 10,
  },

  // Grammar - Medium
  {
    question_text: 'I _____ to school every day.',
    question_type: 'multiple_choice',
    difficulty_level: 'medium',
    category: 'grammar',
    correct_answer: 'go',
    options: ['go', 'goes', 'going', 'went'],
    explanation: "Với chủ ngữ 'I', ta dùng động từ nguyên mẫu 'go'",
    points: 20,
  },
  {
    question_text: 'She _____ English very well.',
    question_type: 'multiple_choice',
    difficulty_level: 'medium',
    category: 'grammar',
    correct_answer: 'speaks',
    options: ['speak', 'speaks', 'speaking', 'spoke'],
    explanation: "Với chủ ngữ số ít 'She', động từ phải thêm 's'",
    points: 20,
  },
  {
    question_text: 'Complete: We _____ watching TV now.',
    question_type: 'fill_blank',
    difficulty_level: 'medium',
    category: 'grammar',
    correct_answer: 'are',
    explanation: 'Thì hiện tại tiếp diễn: We + are + V-ing',
    points: 20,
  },

  // Reading - Hard
  {
    question_text:
      "Read the passage and answer: 'John likes to read books in his free time. He has a large collection of mystery novels.' What does John like to do?",
    question_type: 'multiple_choice',
    difficulty_level: 'hard',
    category: 'reading',
    correct_answer: 'Read books',
    options: ['Watch TV', 'Read books', 'Play games', 'Listen to music'],
    explanation: 'Theo đoạn văn, John thích đọc sách trong thời gian rảnh',
    points: 30,
  },
  {
    question_text:
      "Based on the text: 'The weather is sunny today. It's a perfect day for a picnic.' What is the weather like?",
    question_type: 'fill_blank',
    difficulty_level: 'hard',
    category: 'reading',
    correct_answer: 'sunny',
    explanation: "Trong đoạn văn có nói 'The weather is sunny today'",
    points: 30,
  },

  // Listening (without actual audio)
  {
    question_text: "Listen and choose: [Audio: 'How are you today?'] What did the speaker ask?",
    question_type: 'multiple_choice',
    difficulty_level: 'medium',
    category: 'listening',
    correct_answer: 'How are you today?',
    options: ["What's your name?", 'How are you today?', 'Where are you from?', 'What time is it?'],
    explanation: "Người nói hỏi 'How are you today?' (Hôm nay bạn như thế nào?)",
    points: 20,
  },

  // More vocabulary
  {
    question_text: "What is the plural form of 'child'?",
    question_type: 'multiple_choice',
    difficulty_level: 'medium',
    category: 'vocabulary',
    correct_answer: 'children',
    options: ['childs', 'children', 'childes', 'child'],
    explanation: "'Child' có dạng số nhiều bất quy tắc là 'children'",
    points: 20,
  },
  {
    question_text: 'Complete the sentence: I _____ a student.',
    question_type: 'fill_blank',
    difficulty_level: 'easy',
    category: 'grammar',
    correct_answer: 'am',
    explanation: "Với chủ ngữ 'I', ta dùng động từ 'am'",
    points: 10,
  },
]

// Tạo user mẫu
const sampleUsers = [
  {
    username: 'admin',
    email: 'admin@lingo.com',
    password: 'admin123',
    full_name: 'Administrator',
  },
  {
    username: 'alice',
    email: 'alice@example.com',
    password: 'password123',
    full_name: 'Alice Johnson',
  },
  {
    username: 'bob',
    email: 'bob@example.com',
    password: 'password123',
    full_name: 'Bob Smith',
  },
]

export async function seedDatabase() {
  try {
    console.log('🌱 Bắt đầu seed database...')

    // Seed questions
    console.log('📝 Tạo câu hỏi mẫu...')
    for (const question of sampleQuestions) {
      const questionId = generateId()
      statements.createQuestion.run(
        questionId,
        question.question_text,
        question.question_type,
        question.difficulty_level,
        question.category,
        question.correct_answer,
        question.options ? JSON.stringify(question.options) : null,
        question.explanation,
        question.points,
        null, // audio_url
        null, // image_url
      )
    }

    // Seed users
    console.log('👥 Tạo user mẫu...')
    for (const user of sampleUsers) {
      const userId = generateId()
      const hashedPassword = await hashPassword(user.password)

      statements.createUser.run(userId, user.username, user.email, hashedPassword, user.full_name)

      // Thêm một số XP ngẫu nhiên cho user
      const randomXP = Math.floor(Math.random() * 500) + 100
      const level = Math.floor(Math.sqrt(randomXP / 100)) + 1
      statements.updateUserStats.run(
        level,
        randomXP,
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 50) + 10,
        Math.floor(Math.random() * 40) + 5,
        userId,
      )
    }

    console.log('✅ Seed database thành công!')
    console.log(`📊 Đã tạo ${sampleQuestions.length} câu hỏi và ${sampleUsers.length} user`)
  } catch (error) {
    console.error('❌ Lỗi khi seed database:', error)
  }
}

// Chạy seed nếu file được execute trực tiếp
if (import.meta.main) {
  await seedDatabase()
}
