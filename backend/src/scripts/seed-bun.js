import { db } from '../db/index-bun.js'
import {
  users,
  vocabulary,
  questions,
  tasks,
  rewards,
  userTaskProgress,
  friends,
  userProgress,
} from '../db/schema.js'
import bcrypt from 'bcryptjs'

console.log('Seeding database with Bun SQLite...')

try {
  // Clear existing data (in development)
  console.log('Clearing existing data...')
  await db.delete(friends)
  await db.delete(userProgress)
  await db.delete(rewards)
  await db.delete(userTaskProgress)
  await db.delete(tasks)
  await db.delete(questions)
  await db.delete(vocabulary)
  await db.delete(users)

  // Seed users
  console.log('Seeding users...')
  const hashedPassword = await bcrypt.hash('password123', 10)
  const seedUsers = await db
    .insert(users)
    .values([
      {
        username: 'admin',
        email: 'admin@example.com',
        password: hashedPassword,
        name: 'Admin User',
        avatar:
          'https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fd0e1a2af26da485f8609e3080da7d7b8?alt=media&token=aca82dee-2b72-4297-9d9d-7921d490a327&apiKey=f046890c17ca436cab38cffc651fb9cb',
        phone: null,
        bio: null,
        isPublicProfile: true,
        allowFriendRequests: true,
        level: 10,
        xp: 2500,
        streak: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    .returning()

  // Seed vocabulary - Basic sample
  console.log('Seeding vocabulary...')
  const seedVocabulary = await db
    .insert(vocabulary)
    .values([
      {
        word: 'beautiful',
        meaning: 'đẹp, xinh đẹp',
        pronunciation: '/ˈbjuːtɪf(ə)l/',
        example: 'She has beautiful eyes.',
        difficulty: 'easy',
        category: 'basic',
        createdAt: new Date(),
      },
      {
        word: 'intelligent',
        meaning: 'thông minh',
        pronunciation: '/ɪnˈtelɪdʒ(ə)nt/',
        example: 'He is a very intelligent student.',
        difficulty: 'medium',
        category: 'intermediate',
        createdAt: new Date(),
      },
      {
        word: 'magnificent',
        meaning: 'tuyệt vời, lộng lẫy',
        pronunciation: '/mæɡˈnɪfɪs(ə)nt/',
        example: 'The view from the mountain was magnificent.',
        difficulty: 'hard',
        category: 'advanced',
        createdAt: new Date(),
      },
      {
        word: 'happy',
        meaning: 'vui vẻ, hạnh phúc',
        pronunciation: '/ˈhæpi/',
        example: 'I am happy to see you.',
        difficulty: 'easy',
        category: 'basic',
        createdAt: new Date(),
      },
      {
        word: 'difficult',
        meaning: 'khó khăn',
        pronunciation: '/ˈdɪfɪk(ə)lt/',
        example: 'This problem is very difficult.',
        difficulty: 'medium',
        category: 'intermediate',
        createdAt: new Date(),
      },
    ])
    .returning()

  // Seed questions
  console.log('Seeding questions...')
  await db.insert(questions).values([
    {
      vocabularyId: seedVocabulary[0].id,
      question: "What does 'beautiful' mean?",
      correctAnswer: 'đẹp, xinh đẹp',
      wrongAnswers: JSON.stringify(['xấu xí', 'buồn bã', 'tức giận']),
      type: 'multiple_choice',
      difficulty: 'easy',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[1].id,
      question: "What does 'intelligent' mean?",
      correctAnswer: 'thông minh',
      wrongAnswers: JSON.stringify(['ngu ngốc', 'lười biếng', 'yếu đuối']),
      type: 'multiple_choice',
      difficulty: 'medium',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[2].id,
      question: "What does 'magnificent' mean?",
      correctAnswer: 'tuyệt vời, lộng lẫy',
      wrongAnswers: JSON.stringify(['tệ hại', 'bình thường', 'nhỏ bé']),
      type: 'multiple_choice',
      difficulty: 'hard',
      createdAt: new Date(),
    },
  ])

  // Seed tasks
  console.log('Seeding tasks...')
  const seedTasks = await db
    .insert(tasks)
    .values([
      {
        title: 'Hoàn thành 5 câu hỏi',
        description: 'Trả lời đúng 5 câu hỏi từ vựng',
        target: 5,
        reward: 50,
        icon: 'quiz',
        type: 'daily',
        isActive: true,
        createdAt: new Date(),
      },
      {
        title: 'Đạt điểm hoàn hảo',
        description: 'Trả lời đúng 100% câu hỏi trong một thử thách',
        target: 1,
        reward: 100,
        icon: 'star',
        type: 'achievement',
        isActive: true,
        createdAt: new Date(),
      },
    ])
    .returning()

  // Seed task progress for admin user
  await db.insert(userTaskProgress).values([
    {
      userId: seedUsers[0].id,
      taskId: seedTasks[0].id,
      current: 3,
      completed: false,
      claimed: false,
      createdAt: new Date(),
    },
  ])

  // Seed rewards
  console.log('Seeding rewards...')
  await db.insert(rewards).values([
    {
      name: 'Voucher Shopee 50K',
      description: 'Phiếu mua hàng Shopee trị giá 50.000đ',
      cost: 500,
      stock: 25,
      category: 'vouchers',
      image: 'https://via.placeholder.com/200x150/FF6B35/FFFFFF?text=Shopee+50K',
      isActive: true,
      createdAt: new Date(),
    },
    {
      name: 'Gói Premium 1 tháng',
      description: 'Truy cập không giới hạn tất cả tính năng premium',
      cost: 300,
      stock: 100,
      category: 'premium',
      image: 'https://via.placeholder.com/200x150/6366F1/FFFFFF?text=Premium',
      isActive: true,
      createdAt: new Date(),
    },
  ])

  // Seed user progress
  console.log('Seeding user progress...')
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  await db.insert(userProgress).values([
    {
      userId: seedUsers[0].id,
      date: today,
      questionsAnswered: 25,
      correctAnswers: 22,
      wrongAnswers: 3,
      xpEarned: 220,
      timeSpent: 45,
      streakMaintained: true,
      createdAt: new Date(),
    },
    {
      userId: seedUsers[0].id,
      date: yesterday,
      questionsAnswered: 18,
      correctAnswers: 16,
      wrongAnswers: 2,
      xpEarned: 160,
      timeSpent: 30,
      streakMaintained: true,
      createdAt: new Date(),
    },
  ])

  console.log('Database seeded successfully with Bun SQLite!')
  console.log(`Created ${seedUsers.length} users`)
  console.log(`Created ${seedVocabulary.length} vocabulary words`)
  console.log(`Created ${seedTasks.length} tasks`)
  console.log(`Created 2 rewards`)
  console.log(`Created admin user progress entries`)

  console.log('\nTest account:')
  console.log('Username: admin, Password: password123')

} catch (error) {
  console.error('Seeding failed:', error)
  process.exit(1)
}
