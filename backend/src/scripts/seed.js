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
        example: "It's a sophisticated system.",
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
      // Thêm từ vựng Easy mới
      {
        word: 'book',
        meaning: 'cuốn sách',
        pronunciation: '/bʊk/',
        example: 'I love reading this book.',
        difficulty: 'easy',
        category: 'basic',
        createdAt: new Date(),
      },
      {
        word: 'friend',
        meaning: 'bạn bè',
        pronunciation: '/frend/',
        example: 'She is my best friend.',
        difficulty: 'easy',
        category: 'social',
        createdAt: new Date(),
      },
      {
        word: 'school',
        meaning: 'trường học',
        pronunciation: '/skuːl/',
        example: 'I go to school every day.',
        difficulty: 'easy',
        category: 'education',
        createdAt: new Date(),
      },
      {
        word: 'family',
        meaning: 'gia đình',
        pronunciation: '/ˈfæməli/',
        example: 'My family is very important to me.',
        difficulty: 'easy',
        category: 'social',
        createdAt: new Date(),
      },
      {
        word: 'music',
        meaning: 'âm nhạc',
        pronunciation: '/ˈmjuːzɪk/',
        example: 'I enjoy listening to music.',
        difficulty: 'easy',
        category: 'arts',
        createdAt: new Date(),
      },
      {
        word: 'travel',
        meaning: 'du lịch',
        pronunciation: '/ˈtrævəl/',
        example: 'I like to travel around the world.',
        difficulty: 'easy',
        category: 'activity',
        createdAt: new Date(),
      },
      // Thêm từ vựng Medium mới
      {
        word: 'creative',
        meaning: 'sáng tạo',
        pronunciation: '/kriˈeɪtɪv/',
        example: 'She has a very creative mind.',
        difficulty: 'medium',
        category: 'personality',
        createdAt: new Date(),
      },
      {
        word: 'responsible',
        meaning: 'có trách nhiệm',
        pronunciation: '/rɪˈspɒnsəbəl/',
        example: 'He is responsible for this project.',
        difficulty: 'medium',
        category: 'personality',
        createdAt: new Date(),
      },
      {
        word: 'comfortable',
        meaning: 'thoải mái',
        pronunciation: '/ˈkʌmftəbəl/',
        example: 'This chair is very comfortable.',
        difficulty: 'medium',
        category: 'feelings',
        createdAt: new Date(),
      },
      {
        word: 'successful',
        meaning: 'thành công',
        pronunciation: '/səkˈsesfəl/',
        example: 'She is a successful businesswoman.',
        difficulty: 'medium',
        category: 'achievement',
        createdAt: new Date(),
      },
      {
        word: 'professional',
        meaning: 'chuyên nghiệp',
        pronunciation: '/prəˈfeʃənəl/',
        example: 'He has a professional attitude.',
        difficulty: 'medium',
        category: 'work',
        createdAt: new Date(),
      },
      {
        word: 'knowledge',
        meaning: 'kiến thức',
        pronunciation: '/ˈnɒlɪdʒ/',
        example: 'Knowledge is power.',
        difficulty: 'medium',
        category: 'education',
        createdAt: new Date(),
      },
      // Thêm từ vựng Hard mới
      {
        word: 'magnificent',
        meaning: 'tráng lệ, hùng vĩ',
        pronunciation: '/mæɡˈnɪfɪsənt/',
        example: 'The view was absolutely magnificent.',
        difficulty: 'hard',
        category: 'advanced',
        createdAt: new Date(),
      },
      {
        word: 'courageous',
        meaning: 'can đảm, dũng cảm',
        pronunciation: '/kəˈreɪdʒəs/',
        example: 'She made a courageous decision.',
        difficulty: 'hard',
        category: 'personality',
        createdAt: new Date(),
      },
      {
        word: 'intellectual',
        meaning: 'trí thức, thuộc về trí tuệ',
        pronunciation: '/ˌɪntəˈlektʃuəl/',
        example: 'He enjoys intellectual conversations.',
        difficulty: 'hard',
        category: 'academic',
        createdAt: new Date(),
      },
      {
        word: 'innovative',
        meaning: 'đổi mới, sáng tạo',
        pronunciation: '/ˈɪnəveɪtɪv/',
        example: 'The company has an innovative approach.',
        difficulty: 'hard',
        category: 'business',
        createdAt: new Date(),
      },
      {
        word: 'collaboration',
        meaning: 'sự hợp tác',
        pronunciation: '/kəˌlæbəˈreɪʃən/',
        example: 'Collaboration is key to success.',
        difficulty: 'hard',
        category: 'work',
        createdAt: new Date(),
      },
      {
        word: 'fundamental',
        meaning: 'cơ bản, căn cơ',
        pronunciation: '/ˌfʌndəˈmentəl/',
        example: 'This is a fundamental principle.',
        difficulty: 'hard',
        category: 'academic',
        createdAt: new Date(),
      },
      {
        word: 'comprehensive',
        meaning: 'toàn diện, bao quát',
        pronunciation: '/ˌkɒmprɪˈhensɪv/',
        example: 'We need a comprehensive solution.',
        difficulty: 'hard',
        category: 'academic',
        createdAt: new Date(),
      },
      {
        word: 'demonstrate',
        meaning: 'chứng minh, biểu diễn',
        pronunciation: '/ˈdemənstreɪt/',
        example: 'Can you demonstrate how it works?',
        difficulty: 'hard',
        category: 'academic',
        createdAt: new Date(),
      },
      // Động vật (Animals) - Easy
      {
        word: 'bird',
        meaning: 'con chim',
        pronunciation: '/bɜːrd/',
        example: 'The bird is singing in the tree.',
        difficulty: 'easy',
        category: 'animals',
        createdAt: new Date(),
      },
      {
        word: 'fish',
        meaning: 'con cá',
        pronunciation: '/fɪʃ/',
        example: 'Fish swim in the water.',
        difficulty: 'easy',
        category: 'animals',
        createdAt: new Date(),
      },
      {
        word: 'horse',
        meaning: 'con ngựa',
        pronunciation: '/hɔːrs/',
        example: 'The horse runs very fast.',
        difficulty: 'easy',
        category: 'animals',
        createdAt: new Date(),
      },
      {
        word: 'rabbit',
        meaning: 'con thỏ',
        pronunciation: '/ˈræbɪt/',
        example: 'The rabbit has long ears.',
        difficulty: 'easy',
        category: 'animals',
        createdAt: new Date(),
      },
      {
        word: 'elephant',
        meaning: 'con voi',
        pronunciation: '/ˈelɪfənt/',
        example: 'The elephant is very big.',
        difficulty: 'easy',
        category: 'animals',
        createdAt: new Date(),
      },
      // Màu sắc (Colors) - Easy
      {
        word: 'red',
        meaning: 'màu đỏ',
        pronunciation: '/red/',
        example: 'The apple is red.',
        difficulty: 'easy',
        category: 'colors',
        createdAt: new Date(),
      },
      {
        word: 'blue',
        meaning: 'màu xanh dương',
        pronunciation: '/bluː/',
        example: 'The sky is blue.',
        difficulty: 'easy',
        category: 'colors',
        createdAt: new Date(),
      },
      {
        word: 'green',
        meaning: 'màu xanh lá',
        pronunciation: '/ɡriːn/',
        example: 'The grass is green.',
        difficulty: 'easy',
        category: 'colors',
        createdAt: new Date(),
      },
      {
        word: 'yellow',
        meaning: 'màu vàng',
        pronunciation: '/ˈjeloʊ/',
        example: 'The sun is yellow.',
        difficulty: 'easy',
        category: 'colors',
        createdAt: new Date(),
      },
      {
        word: 'black',
        meaning: 'màu đen',
        pronunciation: '/blæk/',
        example: 'The night is black.',
        difficulty: 'easy',
        category: 'colors',
        createdAt: new Date(),
      },
      {
        word: 'white',
        meaning: 'màu trắng',
        pronunciation: '/waɪt/',
        example: 'Snow is white.',
        difficulty: 'easy',
        category: 'colors',
        createdAt: new Date(),
      },
      // Thời gian (Time) - Easy/Medium
      {
        word: 'morning',
        meaning: 'buổi sáng',
        pronunciation: '/ˈmɔːrnɪŋ/',
        example: 'I wake up in the morning.',
        difficulty: 'easy',
        category: 'time',
        createdAt: new Date(),
      },
      {
        word: 'afternoon',
        meaning: 'buổi chiều',
        pronunciation: '/ˌæftərˈnuːn/',
        example: 'We have lunch in the afternoon.',
        difficulty: 'easy',
        category: 'time',
        createdAt: new Date(),
      },
      {
        word: 'evening',
        meaning: 'buổi tối',
        pronunciation: '/ˈiːvnɪŋ/',
        example: 'I watch TV in the evening.',
        difficulty: 'easy',
        category: 'time',
        createdAt: new Date(),
      },
      {
        word: 'yesterday',
        meaning: 'hôm qua',
        pronunciation: '/ˈjestərdeɪ/',
        example: 'I went shopping yesterday.',
        difficulty: 'medium',
        category: 'time',
        createdAt: new Date(),
      },
      {
        word: 'tomorrow',
        meaning: 'ngày mai',
        pronunciation: '/təˈmɔːroʊ/',
        example: 'Tomorrow is my birthday.',
        difficulty: 'medium',
        category: 'time',
        createdAt: new Date(),
      },
      // Thức ăn (Food) - Easy/Medium
      {
        word: 'apple',
        meaning: 'quả táo',
        pronunciation: '/ˈæpəl/',
        example: 'An apple a day keeps the doctor away.',
        difficulty: 'easy',
        category: 'food',
        createdAt: new Date(),
      },
      {
        word: 'bread',
        meaning: 'bánh mì',
        pronunciation: '/bred/',
        example: 'I eat bread for breakfast.',
        difficulty: 'easy',
        category: 'food',
        createdAt: new Date(),
      },
      {
        word: 'rice',
        meaning: 'cơm, gạo',
        pronunciation: '/raɪs/',
        example: 'Rice is a staple food in Asia.',
        difficulty: 'easy',
        category: 'food',
        createdAt: new Date(),
      },
      {
        word: 'chicken',
        meaning: 'thịt gà',
        pronunciation: '/ˈtʃɪkɪn/',
        example: 'Chicken is delicious.',
        difficulty: 'easy',
        category: 'food',
        createdAt: new Date(),
      },
      {
        word: 'vegetable',
        meaning: 'rau củ',
        pronunciation: '/ˈvedʒtəbəl/',
        example: 'Vegetables are good for health.',
        difficulty: 'medium',
        category: 'food',
        createdAt: new Date(),
      },
      // Gia đình (Family) - Easy/Medium
      {
        word: 'mother',
        meaning: 'mẹ',
        pronunciation: '/ˈmʌðər/',
        example: 'My mother is very kind.',
        difficulty: 'easy',
        category: 'family',
        createdAt: new Date(),
      },
      {
        word: 'father',
        meaning: 'bố',
        pronunciation: '/ˈfɑːðər/',
        example: 'My father works in an office.',
        difficulty: 'easy',
        category: 'family',
        createdAt: new Date(),
      },
      {
        word: 'brother',
        meaning: 'anh/em trai',
        pronunciation: '/ˈbrʌðər/',
        example: 'My brother is older than me.',
        difficulty: 'easy',
        category: 'family',
        createdAt: new Date(),
      },
      {
        word: 'sister',
        meaning: 'chị/em gái',
        pronunciation: '/ˈsɪstər/',
        example: 'My sister loves to read books.',
        difficulty: 'easy',
        category: 'family',
        createdAt: new Date(),
      },
      {
        word: 'grandmother',
        meaning: 'bà',
        pronunciation: '/ˈɡrænmʌðər/',
        example: 'My grandmother tells great stories.',
        difficulty: 'medium',
        category: 'family',
        createdAt: new Date(),
      },
      // Hành động (Actions) - Easy/Medium
      {
        word: 'run',
        meaning: 'chạy',
        pronunciation: '/rʌn/',
        example: 'I run every morning.',
        difficulty: 'easy',
        category: 'actions',
        createdAt: new Date(),
      },
      {
        word: 'walk',
        meaning: 'đi bộ',
        pronunciation: '/wɔːk/',
        example: 'Let\'s walk to the park.',
        difficulty: 'easy',
        category: 'actions',
        createdAt: new Date(),
      },
      {
        word: 'swim',
        meaning: 'bơi',
        pronunciation: '/swɪm/',
        example: 'Fish can swim underwater.',
        difficulty: 'easy',
        category: 'actions',
        createdAt: new Date(),
      },
      {
        word: 'dance',
        meaning: 'nhảy, khiêu vũ',
        pronunciation: '/dæns/',
        example: 'She loves to dance.',
        difficulty: 'easy',
        category: 'actions',
        createdAt: new Date(),
      },
      {
        word: 'study',
        meaning: 'học tập',
        pronunciation: '/ˈstʌdi/',
        example: 'I study English every day.',
        difficulty: 'easy',
        category: 'actions',
        createdAt: new Date(),
      },
      {
        word: 'exercise',
        meaning: 'tập thể dục',
        pronunciation: '/ˈeksərsaɪz/',
        example: 'Exercise is good for your health.',
        difficulty: 'medium',
        category: 'actions',
        createdAt: new Date(),
      },
      // Cảm xúc (Emotions) - Easy/Medium
      {
        word: 'sad',
        meaning: 'buồn',
        pronunciation: '/sæd/',
        example: 'I feel sad when it rains.',
        difficulty: 'easy',
        category: 'emotions',
        createdAt: new Date(),
      },
      {
        word: 'angry',
        meaning: 'tức giận',
        pronunciation: '/ˈæŋɡri/',
        example: 'Don\'t make me angry.',
        difficulty: 'easy',
        category: 'emotions',
        createdAt: new Date(),
      },
      {
        word: 'excited',
        meaning: 'phấn khích',
        pronunciation: '/ɪkˈsaɪtɪd/',
        example: 'I\'m excited about the trip.',
        difficulty: 'medium',
        category: 'emotions',
        createdAt: new Date(),
      },
      {
        word: 'surprised',
        meaning: 'ngạc nhiên',
        pronunciation: '/sərˈpraɪzd/',
        example: 'I was surprised by the news.',
        difficulty: 'medium',
        category: 'emotions',
        createdAt: new Date(),
      },
      // Công việc (Jobs) - Medium
      {
        word: 'teacher',
        meaning: 'giáo viên',
        pronunciation: '/ˈtiːtʃər/',
        example: 'My teacher is very helpful.',
        difficulty: 'easy',
        category: 'jobs',
        createdAt: new Date(),
      },
      {
        word: 'doctor',
        meaning: 'bác sĩ',
        pronunciation: '/ˈdɑːktər/',
        example: 'The doctor helps sick people.',
        difficulty: 'easy',
        category: 'jobs',
        createdAt: new Date(),
      },
      {
        word: 'engineer',
        meaning: 'kỹ sư',
        pronunciation: '/ˌendʒɪˈnɪr/',
        example: 'The engineer builds bridges.',
        difficulty: 'medium',
        category: 'jobs',
        createdAt: new Date(),
      },
      {
        word: 'programmer',
        meaning: 'lập trình viên',
        pronunciation: '/ˈproʊɡræmər/',
        example: 'The programmer writes code.',
        difficulty: 'medium',
        category: 'jobs',
        createdAt: new Date(),
      },
      // Tính từ nâng cao (Advanced Adjectives) - Hard
      {
        word: 'ambitious',
        meaning: 'tham vọng',
        pronunciation: '/æmˈbɪʃəs/',
        example: 'She is very ambitious in her career.',
        difficulty: 'hard',
        category: 'personality',
        createdAt: new Date(),
      },
      {
        word: 'persistent',
        meaning: 'kiên trì',
        pronunciation: '/pərˈsɪstənt/',
        example: 'Be persistent in pursuing your goals.',
        difficulty: 'hard',
        category: 'personality',
        createdAt: new Date(),
      },
      {
        word: 'eloquent',
        meaning: 'hùng biện',
        pronunciation: '/ˈeləkwənt/',
        example: 'The speaker was very eloquent.',
        difficulty: 'hard',
        category: 'communication',
        createdAt: new Date(),
      },
      {
        word: 'versatile',
        meaning: 'đa năng, linh hoạt',
        pronunciation: '/ˈvɜːrsətaɪl/',
        example: 'He is a versatile athlete.',
        difficulty: 'hard',
        category: 'personality',
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
      wrongAnswers: JSON.stringify(['dễ dàng', '��ơn giản', 'nhanh chóng']),
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
    // Câu hỏi cho từ vựng mới - Easy
    {
      vocabularyId: seedVocabulary[21].id, // book
      question: "What does 'book' mean?",
      correctAnswer: 'cuốn sách',
      wrongAnswers: JSON.stringify(['cái bàn', 'cái ghế', 'cái cửa']),
      type: 'multiple_choice',
      difficulty: 'easy',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[22].id, // friend
      question: "What does 'friend' mean?",
      correctAnswer: 'bạn bè',
      wrongAnswers: JSON.stringify(['thù địch', 'người lạ', 'giáo viên']),
      type: 'multiple_choice',
      difficulty: 'easy',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[23].id, // school
      question: "What does 'school' mean?",
      correctAnswer: 'trường học',
      wrongAnswers: JSON.stringify(['bệnh viện', 'chợ', 'công viên']),
      type: 'multiple_choice',
      difficulty: 'easy',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[24].id, // family
      question: "What does 'family' mean?",
      correctAnswer: 'gia đình',
      wrongAnswers: JSON.stringify(['bạn bè', 'công việc', 'sở thích']),
      type: 'multiple_choice',
      difficulty: 'easy',
      createdAt: new Date(),
    },
    // Câu hỏi cho từ vựng Medium mới
    {
      vocabularyId: seedVocabulary[27].id, // creative
      question: "What does 'creative' mean?",
      correctAnswer: 'sáng tạo',
      wrongAnswers: JSON.stringify(['nhàm chán', 'thụ động', 'bình thường']),
      type: 'multiple_choice',
      difficulty: 'medium',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[28].id, // responsible
      question: "What does 'responsible' mean?",
      correctAnswer: 'có trách nhiệm',
      wrongAnswers: JSON.stringify(['vô trách nhiệm', 'bất cẩn', 'lười biếng']),
      type: 'multiple_choice',
      difficulty: 'medium',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[30].id, // successful
      question: "What does 'successful' mean?",
      correctAnswer: 'thành công',
      wrongAnswers: JSON.stringify(['thất bại', 'gặp khó khăn', 'bỏ cuộc']),
      type: 'multiple_choice',
      difficulty: 'medium',
      createdAt: new Date(),
    },
    // Câu hỏi cho từ vựng Hard mới
    {
      vocabularyId: seedVocabulary[34].id, // courageous
      question: "What does 'courageous' mean?",
      correctAnswer: 'can đảm, dũng cảm',
      wrongAnswers: JSON.stringify(['nhút nhát', 'sợ hãi', 'yếu đuối']),
      type: 'multiple_choice',
      difficulty: 'hard',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[35].id, // intellectual
      question: "What does 'intellectual' mean?",
      correctAnswer: 'trí thức, thuộc về trí tuệ',
      wrongAnswers: JSON.stringify(['thể chất', 'cảm xúc', 'bản năng']),
      type: 'multiple_choice',
      difficulty: 'hard',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[36].id, // innovative
      question: "What does 'innovative' mean?",
      correctAnswer: 'đổi mới, sáng tạo',
      wrongAnswers: JSON.stringify(['cũ kỹ', 'lạc hậu', 'truyền thống']),
      type: 'multiple_choice',
      difficulty: 'hard',
      createdAt: new Date(),
    },
    {
      vocabularyId: seedVocabulary[39].id, // comprehensive
      question: "What does 'comprehensive' mean?",
      correctAnswer: 'toàn diện, bao quát',
      wrongAnswers: JSON.stringify(['hạn chế', 'một phần', 'thiếu sót']),
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
  console.log(`Created 25 questions`)
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
