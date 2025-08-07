import Database from 'better-sqlite3';
import { nanoid } from 'nanoid';

// Khởi tạo database
export const db = new Database('lingo_challenge.db');

// Tạo tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    level INTEGER DEFAULT 1,
    xp INTEGER DEFAULT 0,
    streak_days INTEGER DEFAULT 0,
    total_questions_answered INTEGER DEFAULT 0,
    correct_answers INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    question_text TEXT NOT NULL,
    question_type TEXT NOT NULL CHECK (question_type IN ('multiple_choice', 'fill_blank', 'translation', 'listening')),
    difficulty_level TEXT NOT NULL CHECK (difficulty_level IN ('easy', 'medium', 'hard')),
    category TEXT NOT NULL,
    correct_answer TEXT NOT NULL,
    options TEXT, -- JSON array cho multiple choice
    explanation TEXT,
    points INTEGER DEFAULT 10,
    audio_url TEXT,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS user_answers (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    question_id TEXT NOT NULL,
    user_answer TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    time_taken INTEGER, -- seconds
    points_earned INTEGER DEFAULT 0,
    answered_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (question_id) REFERENCES questions (id)
  );

  CREATE TABLE IF NOT EXISTS battles (
    id TEXT PRIMARY KEY,
    player1_id TEXT NOT NULL,
    player2_id TEXT,
    status TEXT NOT NULL CHECK (status IN ('waiting', 'active', 'completed', 'cancelled')),
    mode TEXT NOT NULL CHECK (mode IN ('bot', 'friend', 'random')),
    questions TEXT NOT NULL, -- JSON array of question IDs
    player1_answers TEXT, -- JSON array
    player2_answers TEXT, -- JSON array
    winner_id TEXT,
    started_at DATETIME,
    completed_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (player1_id) REFERENCES users (id),
    FOREIGN KEY (player2_id) REFERENCES users (id),
    FOREIGN KEY (winner_id) REFERENCES users (id)
  );

  CREATE TABLE IF NOT EXISTS friendships (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    friend_id TEXT NOT NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'accepted', 'blocked')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (friend_id) REFERENCES users (id),
    UNIQUE(user_id, friend_id)
  );

  CREATE TABLE IF NOT EXISTS achievements (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    icon TEXT,
    requirement_type TEXT NOT NULL, -- 'streak', 'questions_answered', 'correct_ratio', etc.
    requirement_value INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS user_achievements (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    achievement_id TEXT NOT NULL,
    earned_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (achievement_id) REFERENCES achievements (id),
    UNIQUE(user_id, achievement_id)
  );

  CREATE TABLE IF NOT EXISTS daily_challenges (
    id TEXT PRIMARY KEY,
    date DATE NOT NULL,
    question_ids TEXT NOT NULL, -- JSON array
    bonus_points INTEGER DEFAULT 50,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS user_daily_challenges (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    challenge_id TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    score INTEGER DEFAULT 0,
    completed_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (challenge_id) REFERENCES daily_challenges (id),
    UNIQUE(user_id, challenge_id)
  );
`);

// Tạo indexes để tối ưu performance
db.exec(`
  CREATE INDEX IF NOT EXISTS idx_users_email ON users (email);
  CREATE INDEX IF NOT EXISTS idx_users_username ON users (username);
  CREATE INDEX IF NOT EXISTS idx_questions_category ON questions (category);
  CREATE INDEX IF NOT EXISTS idx_questions_difficulty ON questions (difficulty_level);
  CREATE INDEX IF NOT EXISTS idx_user_answers_user_id ON user_answers (user_id);
  CREATE INDEX IF NOT EXISTS idx_battles_player1_id ON battles (player1_id);
  CREATE INDEX IF NOT EXISTS idx_battles_player2_id ON battles (player2_id);
  CREATE INDEX IF NOT EXISTS idx_battles_status ON battles (status);
  CREATE INDEX IF NOT EXISTS idx_friendships_user_id ON friendships (user_id);
  CREATE INDEX IF NOT EXISTS idx_friendships_friend_id ON friendships (friend_id);
`);

// Helper functions
export const generateId = () => nanoid();

// Prepared statements
export const statements = {
  // Users
  getUserById: db.prepare('SELECT * FROM users WHERE id = ?'),
  getUserByEmail: db.prepare('SELECT * FROM users WHERE email = ?'),
  getUserByUsername: db.prepare('SELECT * FROM users WHERE username = ?'),
  createUser: db.prepare(`
    INSERT INTO users (id, username, email, password_hash, full_name)
    VALUES (?, ?, ?, ?, ?)
  `),
  updateUser: db.prepare(`
    UPDATE users SET username = ?, full_name = ?, avatar_url = ?, updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `),
  updateUserStats: db.prepare(`
    UPDATE users SET level = ?, xp = ?, streak_days = ?, 
                     total_questions_answered = ?, correct_answers = ?, 
                     updated_at = CURRENT_TIMESTAMP
    WHERE id = ?
  `),

  // Questions
  getQuestionById: db.prepare('SELECT * FROM questions WHERE id = ?'),
  getQuestionsByCategory: db.prepare('SELECT * FROM questions WHERE category = ? ORDER BY RANDOM() LIMIT ?'),
  getQuestionsByDifficulty: db.prepare('SELECT * FROM questions WHERE difficulty_level = ? ORDER BY RANDOM() LIMIT ?'),
  getRandomQuestions: db.prepare('SELECT * FROM questions ORDER BY RANDOM() LIMIT ?'),
  createQuestion: db.prepare(`
    INSERT INTO questions (id, question_text, question_type, difficulty_level, category, 
                          correct_answer, options, explanation, points, audio_url, image_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `),

  // User Answers
  saveUserAnswer: db.prepare(`
    INSERT INTO user_answers (id, user_id, question_id, user_answer, is_correct, time_taken, points_earned)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `),
  getUserAnswerHistory: db.prepare(`
    SELECT ua.*, q.question_text, q.correct_answer 
    FROM user_answers ua 
    JOIN questions q ON ua.question_id = q.id 
    WHERE ua.user_id = ? 
    ORDER BY ua.answered_at DESC 
    LIMIT ?
  `),

  // Battles
  createBattle: db.prepare(`
    INSERT INTO battles (id, player1_id, player2_id, status, mode, questions)
    VALUES (?, ?, ?, ?, ?, ?)
  `),
  getBattleById: db.prepare('SELECT * FROM battles WHERE id = ?'),
  getUserActiveBattles: db.prepare(`
    SELECT * FROM battles 
    WHERE (player1_id = ? OR player2_id = ?) AND status IN ('waiting', 'active')
    ORDER BY created_at DESC
  `),
  updateBattleStatus: db.prepare('UPDATE battles SET status = ?, started_at = CURRENT_TIMESTAMP WHERE id = ?'),
  updateBattleAnswers: db.prepare(`
    UPDATE battles SET player1_answers = ?, player2_answers = ?, 
                      winner_id = ?, completed_at = CURRENT_TIMESTAMP, status = 'completed'
    WHERE id = ?
  `),

  // Friendships
  sendFriendRequest: db.prepare(`
    INSERT INTO friendships (id, user_id, friend_id, status)
    VALUES (?, ?, ?, 'pending')
  `),
  acceptFriendRequest: db.prepare(`
    UPDATE friendships SET status = 'accepted' WHERE user_id = ? AND friend_id = ?
  `),
  getFriends: db.prepare(`
    SELECT u.id, u.username, u.full_name, u.avatar_url, u.level, u.xp
    FROM friendships f
    JOIN users u ON f.friend_id = u.id
    WHERE f.user_id = ? AND f.status = 'accepted'
  `),
  getPendingFriendRequests: db.prepare(`
    SELECT u.id, u.username, u.full_name, u.avatar_url
    FROM friendships f
    JOIN users u ON f.user_id = u.id
    WHERE f.friend_id = ? AND f.status = 'pending'
  `),

  // Leaderboard
  getTopUsers: db.prepare(`
    SELECT id, username, full_name, avatar_url, level, xp, streak_days,
           total_questions_answered, correct_answers,
           ROUND((correct_answers * 100.0 / total_questions_answered), 1) as accuracy_rate
    FROM users 
    WHERE total_questions_answered > 0
    ORDER BY xp DESC 
    LIMIT ?
  `),
  getUserRanking: db.prepare(`
    SELECT COUNT(*) + 1 as rank
    FROM users
    WHERE xp > (SELECT xp FROM users WHERE id = ?)
  `)
};

console.log('✅ Database initialized successfully');
