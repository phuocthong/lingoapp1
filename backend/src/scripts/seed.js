import { db } from '../db/index.js'
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

console.log('Seeding database...')

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
  const hashedPassword = await bcrypt.hash('123456', 10)
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
        level: 10,
        xp: 2500,
        streak: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'minhanh',
        email: 'minhanh@example.com',
        password: hashedPassword,
        name: 'Minh Anh',
        avatar:
          'https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fd0e1a2af26da485f8609e3080da7d7b8?alt=media&token=aca82dee-2b72-4297-9d9d-7921d490a327&apiKey=f046890c17ca436cab38cffc651fb9cb',
        level: 8,
        xp: 1800,
        streak: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'thanhhoa',
        email: 'thanhhoa@example.com',
        password: hashedPassword,
        name: 'Thành Hòa',
        avatar:
          'https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fd0e1a2af26da485f8609e3080da7d7b8?alt=media&token=aca82dee-2b72-4297-9d9d-7921d490a327&apiKey=f046890c17ca436cab38cffc651fb9cb',
        level: 6,
        xp: 1200,
        streak: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'thutrang',
        email: 'thutrang@example.com',
        password: hashedPassword,
        name: 'Thu Trang',
        avatar:
          'https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fd0e1a2af26da485f8609e3080da7d7b8?alt=media&token=aca82dee-2b72-4297-9d9d-7921d490a327&apiKey=f046890c17ca436cab38cffc651fb9cb',
        level: 12,
        xp: 3200,
        streak: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'vannam',
        email: 'vannam@example.com',
        password: hashedPassword,
        name: 'Văn Nam',
        avatar:
          'https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fd0e1a2af26da485f8609e3080da7d7b8?alt=media&token=aca82dee-2b72-4297-9d9d-7921d490a327&apiKey=f046890c17ca436cab38cffc651fb9cb',
        level: 9,
        xp: 2100,
        streak: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
    .returning()

  // Seed vocabulary
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
      {
        word: 'extraordinary',
        meaning: 'phi thường, đặc biệt',
        pronunciation: '/ɪkˈstrɔːd(ɪ)n(ə)ri/',
        example: 'She has extraordinary talent.',
        difficulty: 'hard',
        category: 'advanced',
        createdAt: new Date(),
      },
      // Thêm từ vựng cơ bản
      {
        word: 'cat',
        meaning: 'con mèo',
        pronunciation: '/kæt/',
        example: 'The cat is sleeping.',
        difficulty: 'easy',
        category: 'animals',
        createdAt: new Date(),
      },
      {
        word: 'dog',
        meaning: 'con chó',
        pronunciation: '/dɔːɡ/',
        example: 'My dog is very friendly.',
        difficulty: 'easy',
        category: 'animals',
        createdAt: new Date(),
      },
      {
        word: 'house',
        meaning: 'ngôi nhà',
        pronunciation: '/haʊs/',
        example: 'This is my house.',
        difficulty: 'easy',
        category: 'basic',
        createdAt: new Date(),
      },
      {
        word: 'water',
        meaning: 'nước',
        pronunciation: '/ˈwɔːtər/',
        example: 'I drink water every day.',
        difficulty: 'easy',
        category: 'basic',
        createdAt: new Date(),
      },
      {
        word: 'food',
        meaning: 'thức ăn',
        pronunciation: '/fuːd/',
        example: 'This food is delicious.',
        difficulty: 'easy',
        category: 'basic',
        createdAt: new Date(),
      },
      // Từ vựng trung bình
      {
        word: 'environment',
        meaning: 'môi trường',
        pronunciation: '/ɪnˈvaɪrənmənt/',
        example: 'We must protect the environment.',
        difficulty: 'medium',
        category: 'nature',
        createdAt: new Date(),
      },
      {
        word: 'technology',
        meaning: 'công nghệ',
        pronunciation: '/tekˈnɒlədʒi/',
        example: 'Technology changes our lives.',
        difficulty: 'medium',
        category: 'science',
        createdAt: new Date(),
      },
      {
        word: 'education',
        meaning: 'giáo dục',
        pronunciation: '/ˌedʒuˈkeɪʃn/',
        example: 'Education is very important.',
        difficulty: 'medium',
        category: 'society',
        createdAt: new Date(),
      },
      {
        word: 'communication',
        meaning: 'giao tiếp',
        pronunciation: '/kəˌmjuːnɪˈkeɪʃn/',
        example: 'Good communication is essential.',
        difficulty: 'medium',
        category: 'social',
        createdAt: new Date(),
      },
      {
        word: 'opportunity',
        meaning: 'cơ hội',
        pronunciation: '/ˌɒpəˈtjuːnəti/',
        example: 'This is a great opportunity.',
        difficulty: 'medium',
        category: 'business',
        createdAt: new Date(),
      },
      // Từ vựng khó
      {
        word: 'phenomenal',
        meaning: 'phi thường, tuyệt vời',
        pronunciation: '/fəˈnɒmɪnl/',
        example: 'His performance was phenomenal.',
        difficulty: 'hard',
        category: 'advanced',
        createdAt: new Date(),
      },
      {
        word: 'sophisticated',
        meaning: 'tinh vi, phức tạp',
        pronunciation: '/səˈfɪstɪkeɪtɪd/',
        example: 'It\'s a sophisticated system.',
        difficulty: 'hard',
        category: 'advanced',
        createdAt: new Date(),
      },
      {
        word: 'unprecedented',
        meaning: 'chưa từng có',
        pronunciation: '/ʌnˈpresɪdentɪd/',
        example: 'This is an unprecedented situation.',
        difficulty: 'hard',
        category: 'advanced',
        createdAt: new Date(),
      },
      {
        word: 'entrepreneurship',
        meaning: 'tinh thần khởi nghiệp',
        pronunciation: '/ˌɒntrəprəˈnɜːʃɪp/',
        example: 'Entrepreneurship requires courage.',
        difficulty: 'hard',
        category: 'business',
        createdAt: new Date(),
      },
      {
        word: 'sustainability',
        meaning: 'tính bền vững',
        pronunciation: '/səˌsteɪnəˈbɪləti/',
        example: 'Sustainability is crucial for our future.',
        difficulty: 'hard',
        category: 'environment',
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
    {
      vocabularyId: seedVocabulary[3].id,
      question: "What does 'happy' mean?",
      correctAnswer: 'vui vẻ, hạnh phúc',
      wrongAnswers: JSON.stringify(['buồn bã', 'tức giận', 'sợ hãi']),
      type: 'multiple_choice',
      difficulty: 'easy',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[4].id,
      question: "What does 'difficult' mean?",
      correctAnswer: 'khó khăn',
      wrongAnswers: JSON.stringify(['dễ dàng', 'đơn giản', 'nhanh chóng']),
      type: 'multiple_choice',
      difficulty: 'medium',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[5].id,
      question: "What does 'extraordinary' mean?",
      correctAnswer: 'phi thường, đặc biệt',
      wrongAnswers: JSON.stringify(['bình thường', 'tệ hại', 'yếu ớt']),
      type: 'multiple_choice',
      difficulty: 'hard',
      createdAt: new Date(),
    },
    // Câu hỏi cho từ vựng mới
    {
      vocabularyId: seedVocabulary[6].id, // cat
      question: "What does 'cat' mean?",
      correctAnswer: 'con mèo',
      wrongAnswers: JSON.stringify(['con chó', 'con gà', 'con heo']),
      type: 'multiple_choice',
      difficulty: 'easy',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[7].id, // dog
      question: "What does 'dog' mean?",
      correctAnswer: 'con chó',
      wrongAnswers: JSON.stringify(['con mèo', 'con ngựa', 'con bò']),
      type: 'multiple_choice',
      difficulty: 'easy',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[8].id, // house
      question: "What does 'house' mean?",
      correctAnswer: 'ngôi nhà',
      wrongAnswers: JSON.stringify(['cái cây', 'con đường', 'chiếc xe']),
      type: 'multiple_choice',
      difficulty: 'easy',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[11].id, // environment
      question: "What does 'environment' mean?",
      correctAnswer: 'môi trường',
      wrongAnswers: JSON.stringify(['thời tiết', 'khí hậu', 'vũ trụ']),
      type: 'multiple_choice',
      difficulty: 'medium',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[12].id, // technology
      question: "What does 'technology' mean?",
      correctAnswer: 'công nghệ',
      wrongAnswers: JSON.stringify(['khoa học', 'toán học', 'vật lý']),
      type: 'multiple_choice',
      difficulty: 'medium',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[16].id, // phenomenal
      question: "What does 'phenomenal' mean?",
      correctAnswer: 'phi thường, tuyệt vời',
      wrongAnswers: JSON.stringify(['bình thường', 'tệ hại', 'nhỏ bé']),
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
      {
        title: 'Duy trì chuỗi ngày học',
        description: 'Học liên tục trong 7 ngày',
        target: 7,
        reward: 200,
        icon: 'local_fire_department',
        type: 'weekly',
        isActive: true,
        createdAt: new Date(),
      },
      {
        title: 'Tham gia 3 thử thách',
        description: 'Tham gia và hoàn thành 3 thử thách trực tuyến',
        target: 3,
        reward: 75,
        icon: 'groups',
        type: 'daily',
        isActive: true,
        createdAt: new Date(),
      },
    ])
    .returning()

  // Seed task progress for first user
  await db.insert(userTaskProgress).values([
    {
      userId: seedUsers[0].id,
      taskId: seedTasks[0].id,
      current: 3,
      completed: false,
      claimed: false,
      createdAt: new Date(),
    },
    {
      userId: seedUsers[0].id,
      taskId: seedTasks[1].id,
      current: 0,
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
    {
      name: 'Voucher Grab Food 30K',
      description: 'Phiếu giảm giá Grab Food trị giá 30.000đ',
      cost: 300,
      stock: 50,
      category: 'vouchers',
      image: 'https://via.placeholder.com/200x150/00B14F/FFFFFF?text=Grab+30K',
      isActive: true,
      createdAt: new Date(),
    },
    {
      name: 'Sticker Pack Exclusive',
      description: 'Bộ sticker độc quyền cho ứng dụng',
      cost: 100,
      stock: 200,
      category: 'items',
      image: 'https://via.placeholder.com/200x150/F59E0B/FFFFFF?text=Stickers',
      isActive: true,
      createdAt: new Date(),
    },
  ])

  // Seed friends relationships
  console.log('Seeding friends...')
  await db.insert(friends).values([
    // Admin có các bạn bè
    {
      userId: seedUsers[0].id, // admin
      friendId: seedUsers[1].id, // minhanh
      status: 'accepted',
      createdAt: new Date(),
      acceptedAt: new Date(),
    },
    {
      userId: seedUsers[0].id, // admin
      friendId: seedUsers[2].id, // thanhhoa
      status: 'accepted',
      createdAt: new Date(),
      acceptedAt: new Date(),
    },
    {
      userId: seedUsers[0].id, // admin
      friendId: seedUsers[3].id, // thutrang
      status: 'accepted',
      createdAt: new Date(),
      acceptedAt: new Date(),
    },
    // Các mối quan hệ bạn bè khác
    {
      userId: seedUsers[1].id, // minhanh
      friendId: seedUsers[2].id, // thanhhoa
      status: 'accepted',
      createdAt: new Date(),
      acceptedAt: new Date(),
    },
    {
      userId: seedUsers[1].id, // minhanh
      friendId: seedUsers[4].id, // vannam
      status: 'accepted',
      createdAt: new Date(),
      acceptedAt: new Date(),
    },
    {
      userId: seedUsers[2].id, // thanhhoa
      friendId: seedUsers[3].id, // thutrang
      status: 'pending',
      createdAt: new Date(),
    },
  ])

  // Seed user progress for leaderboard
  console.log('Seeding user progress...')
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  await db.insert(userProgress).values([
    // Admin progress
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
    // Thu Trang progress (top performer)
    {
      userId: seedUsers[3].id,
      date: today,
      questionsAnswered: 35,
      correctAnswers: 33,
      wrongAnswers: 2,
      xpEarned: 330,
      timeSpent: 60,
      streakMaintained: true,
      createdAt: new Date(),
    },
    // Minh Anh progress
    {
      userId: seedUsers[1].id,
      date: today,
      questionsAnswered: 28,
      correctAnswers: 24,
      wrongAnswers: 4,
      xpEarned: 240,
      timeSpent: 50,
      streakMaintained: true,
      createdAt: new Date(),
    },
    // Thành Hòa progress
    {
      userId: seedUsers[2].id,
      date: today,
      questionsAnswered: 20,
      correctAnswers: 18,
      wrongAnswers: 2,
      xpEarned: 180,
      timeSpent: 35,
      streakMaintained: true,
      createdAt: new Date(),
    },
    // Văn Nam progress
    {
      userId: seedUsers[4].id,
      date: today,
      questionsAnswered: 22,
      correctAnswers: 19,
      wrongAnswers: 3,
      xpEarned: 190,
      timeSpent: 40,
      streakMaintained: true,
      createdAt: new Date(),
    },
  ])

  console.log('Database seeded successfully!')
  console.log(`Created ${seedUsers.length} users`)
  console.log(`Created ${seedVocabulary.length} vocabulary words`)
  console.log(`Created 12 questions`)
  console.log(`Created ${seedTasks.length} tasks`)
  console.log(`Created 4 rewards`)
  console.log(`Created 6 friend relationships`)
  console.log(`Created user progress entries`)

  console.log('\nTest accounts:')
  console.log('Username: admin, Password: 123456')
  console.log('Username: minhanh, Password: 123456')
  console.log('Username: thanhhoa, Password: 123456')
  console.log('Username: thutrang, Password: 123456')
  console.log('Username: vannam, Password: 123456')
} catch (error) {
  console.error('Seeding failed:', error)
} finally {
  process.exit(0)
}
