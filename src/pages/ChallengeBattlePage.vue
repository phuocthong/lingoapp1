<template>
  <div class="challenge-battle-page">
    <!-- Floating Particles Background -->
    <div class="particles-background">
      <div class="particle" v-for="n in 15" :key="n"></div>
    </div>

    <!-- Game Header -->
    <header class="game-header">
      <div class="header-container">
        <!-- Question Progress -->
        <div class="progress-section">
          <div class="progress-info">
            <div class="progress-icon">
              <svg class="trophy-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8h1a4 4 0 010 8h-1M2 8h1a4 4 0 010 8H2M7 13h10a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2a2 2 0 002 2z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 21l4-7 4 7M8 21h8"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="progress-text">{{ currentQuestion }}/{{ totalQuestions }}</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: questionProgress + '%' }"></div>
              <div class="progress-glow" :style="{ width: questionProgress + '%' }"></div>
            </div>
          </div>
        </div>

        <!-- Timer -->
        <div class="timer-section">
          <div
            class="timer-circle"
            :class="{ warning: timeLeft <= 5, critical: timeLeft <= 3, pulse: timeLeft <= 3 }"
          >
            <svg class="timer-svg" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r="20"
                stroke="#E5E7EB"
                stroke-width="2"
                fill="none"
                class="timer-track"
              />
              <circle
                cx="22"
                cy="22"
                r="20"
                stroke="currentColor"
                stroke-width="3"
                fill="none"
                :stroke-dasharray="circleCircumference"
                :stroke-dashoffset="timerStrokeDashoffset"
                class="timer-progress"
              />
            </svg>
            <div class="timer-content">
              <div class="timer-value">{{ timeLeft }}</div>
              <div class="timer-label">s</div>
            </div>
          </div>
        </div>

        <!-- Players Section -->
        <div class="players-info">
          <div class="players-badge">
            <div class="players-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" />
                <path
                  d="M23 21v-2a4 4 0 00-3-3.87"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 3.13a4 4 0 010 7.75"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="players-count">{{ players.length }}</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Battle Area -->
    <main class="battle-arena">
      <!-- Question Section -->
      <div class="question-zone">
        <div class="question-card" :class="{ answered: answered }">
          <div class="question-header">
            <div class="question-badge">
              <span class="question-number">{{ currentQuestion }}</span>
              <span class="question-total">/{{ totalQuestions }}</span>
            </div>
            <div class="difficulty-indicator">
              <div class="difficulty-stars">
                <div class="star filled"></div>
                <div class="star filled"></div>
                <div class="star"></div>
              </div>
            </div>
          </div>
          <div class="question-content">
            <h1 class="question-text">{{ currentQuestionData.question }}</h1>
            <div class="word-highlight" v-if="currentQuestionData.word">
              "{{ currentQuestionData.word }}"
            </div>
          </div>
        </div>
      </div>

      <!-- Battle Grid -->
      <div class="battle-grid">
        <!-- Answers Grid -->
        <div class="answers-arena">
          <div class="answers-grid">
            <button
              v-for="(answer, index) in currentQuestionData.answers"
              :key="index"
              class="answer-card"
              :class="getAnswerClass(index)"
              :disabled="answered"
              @click="selectAnswer(index)"
            >
              <div class="answer-indicator">
                <div class="answer-letter">{{ String.fromCharCode(65 + index) }}</div>
                <div class="answer-check" v-if="answered && index === correctAnswer">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div
                  class="answer-x"
                  v-if="answered && index === selectedAnswer && index !== correctAnswer"
                >
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 6l12 12"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div class="answer-content">
                <div class="answer-text">{{ answer.text }}</div>
              </div>
              <div class="answer-glow"></div>
            </button>
          </div>
        </div>

        <!-- Live Scoreboard -->
        <div class="live-scoreboard">
          <div class="scoreboard-header">
            <div class="scoreboard-title">
              <svg class="leaderboard-icon" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 13h4l3-8 4 8h7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Live Rankings
            </div>
          </div>
          <div class="players-list">
            <div
              v-for="player in players"
              :key="player.id"
              class="player-row"
              :class="{
                'current-player': player.isCurrentUser,
                leader: player.rank === 1,
                animated: answered,
              }"
            >
              <div class="player-position">
                <div class="rank-badge" :class="'rank-' + player.rank">
                  <span v-if="player.rank === 1">👑</span>
                  <span v-else>{{ player.rank }}</span>
                </div>
              </div>
              <div class="player-avatar-container">
                <div class="player-avatar" :style="{ background: getPlayerGradient(player.id) }">
                  {{ player.initials }}
                </div>
                <div class="player-status-indicator" :class="player.status">
                  <div v-if="player.status === 'answered'" class="status-dot answered"></div>
                  <div v-else-if="player.status === 'thinking'" class="status-dot thinking"></div>
                  <div v-else class="status-dot waiting"></div>
                </div>
              </div>
              <div class="player-details">
                <div class="player-name">{{ player.name }}</div>
                <div class="player-stats">
                  <div class="score-display">
                    <span class="score-value">{{ player.score }}</span>
                    <span class="score-label">pts</span>
                  </div>
                  <div v-if="player.streak > 1" class="streak-indicator">🔥{{ player.streak }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Enhanced Game Over Modal -->
    <div v-if="gameOver" class="game-over-overlay">
      <!-- Close Button -->
      <button class="modal-close-btn" @click="exitGame" aria-label="Đóng">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <div class="celebration-confetti">
        <div class="confetti" v-for="n in 50" :key="n"></div>
      </div>
      <div class="fireworks">
        <div class="firework" v-for="n in 5" :key="n"></div>
      </div>
      <div class="modal-backdrop" @click="exitGame"></div>

      <div class="results-modal">
        <!-- Victory Header -->
        <div class="modal-decoration">
          <div class="trophy-burst">
            <div class="trophy-icon-main">🏆</div>
            <div class="victory-rays"></div>
            <div class="sparkles">
              <span v-for="n in 6" :key="n" class="sparkle">✨</span>
            </div>
          </div>
        </div>

        <div class="results-header">
          <h2 class="results-title">🎉 Trận Đấu Hoàn Thành!</h2>
          <p class="results-subtitle">Thật tuyệt vời! Hãy xem kết quả nào!</p>
        </div>

        <div class="results-content">
          <!-- Champion và Stats gộp lại -->
          <div class="champion-section">
            <div class="champion-info">
              <div class="champion-crown">👑</div>
              <div class="champion-avatar" :style="{ background: getPlayerGradient(winner.id) }">
                {{ winner.initials || winner.name.charAt(0) }}
              </div>
              <h3 class="champion-name">{{ winner.name }}</h3>
              <div class="champion-score">{{ winner.score }} điểm</div>
            </div>

            <div class="quick-stats">
              <div class="quick-stat">
                <span class="stat-value">{{ Math.round((winner.score / totalQuestions) * 100) || 0 }}%</span>
                <span class="stat-label">Chính xác</span>
              </div>
              <div class="quick-stat">
                <span class="stat-value">{{ winner.streak }}</span>
                <span class="stat-label">🔥 Streak</span>
              </div>
              <div class="quick-stat">
                <span class="stat-value">+{{ Math.floor(currentPlayer?.score * 0.1) || 0 }}</span>
                <span class="stat-label">XP</span>
              </div>
            </div>
          </div>

          <!-- Leaderboard ngắn gọn -->
          <div class="compact-leaderboard">
            <h4 class="section-title">Kết Quả</h4>
            <div class="players-result">
              <div
                v-for="(player, index) in sortedPlayers"
                :key="player.id"
                class="player-result"
                :class="{ 'is-current': player.isCurrentUser }"
              >
                <div class="result-rank">
                  <span v-if="index === 0">🥇</span>
                  <span v-else-if="index === 1">🥈</span>
                  <span v-else>{{ index + 1 }}</span>
                </div>
                <div class="result-info">
                  <span class="result-name">{{ player.name }}</span>
                  <span class="result-score">{{ player.score }} điểm</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Motivation ngắn -->
          <div class="motivation-brief">
            <span class="motivation-icon">{{ getMotivationIcon() }}</span>
            <span class="motivation-text">{{ getMotivationTitle() }}</span>
          </div>
        </div>

        <!-- Enhanced Action Buttons -->
        <div class="results-actions">
          <button class="action-btn primary-action" @click="playAgain">
            <div class="btn-content">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                <path d="M1 4v6h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.51 15a9 9 0 1015.8-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Chơi Lại</span>
            </div>
            <div class="btn-shimmer"></div>
          </button>

          <button class="action-btn secondary-action" @click="viewLeaderboard">
            <div class="btn-content">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                <path d="M3 13h4l3-8 4 8h7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Bảng Xếp Hạng</span>
            </div>
          </button>

          <button class="action-btn tertiary-action" @click="exitGame">
            <div class="btn-content">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <polyline points="16,17 21,12 16,7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <line x1="21" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Thoát</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Game state
const totalQuestions = ref(10)
const currentQuestion = ref(1)
const timePerQuestion = ref(20)
const timeLeft = ref(20)
const answered = ref(false)
const gameOver = ref(false)
const gameInterval = ref(null)

// Current question data
const currentQuestionData = ref({
  question: "What does 'beautiful' mean?",
  word: 'beautiful',
  answers: [
    { text: 'ugly', correct: false },
    { text: 'pretty, attractive', correct: true },
    { text: 'sad', correct: false },
    { text: 'angry', correct: false },
  ],
})

const selectedAnswer = ref(null)
const correctAnswer = ref(null)

// Players data
const players = ref([
  {
    id: 'player1',
    name: 'Bạn',
    initials: 'B',
    score: 0,
    streak: 0,
    rank: 1,
    status: 'thinking', // thinking, answered, waiting
    isCurrentUser: true,
  },
  {
    id: 'player2',
    name: 'Thành Hòa',
    initials: 'TH',
    score: 0,
    streak: 0,
    rank: 2,
    status: 'thinking',
    isCurrentUser: false,
  },
])

// Sample questions
const questions = ref([
  {
    question: "What does 'intelligent' mean?",
    word: 'intelligent',
    answers: [
      { text: 'stupid', correct: false },
      { text: 'smart, clever', correct: true },
      { text: 'lazy', correct: false },
      { text: 'tired', correct: false },
    ],
  },
  {
    question: "What does 'courageous' mean?",
    word: 'courageous',
    answers: [
      { text: 'afraid, scared', correct: false },
      { text: 'hungry', correct: false },
      { text: 'brave, fearless', correct: true },
      { text: 'sleepy', correct: false },
    ],
  },
])

// Computed properties
const questionProgress = computed(() => (currentQuestion.value / totalQuestions.value) * 100)

const circleCircumference = computed(() => 2 * Math.PI * 16)

const timerStrokeDashoffset = computed(() => {
  const progress = timeLeft.value / timePerQuestion.value
  return circleCircumference.value * (1 - progress)
})

const sortedPlayers = computed(() => {
  return [...players.value].sort((a, b) => b.score - a.score)
})

const winner = computed(() => {
  return sortedPlayers.value[0]
})

const currentPlayer = computed(() => {
  return players.value.find(p => p.isCurrentUser)
})

// Authentication check
const checkAuthentication = () => {
  // Simple auth check - in real app this would check actual login status
  const isLoggedIn = localStorage.getItem('user_token') || sessionStorage.getItem('user_session')

  if (!isLoggedIn) {
    // Redirect to login or home page
    router.push('/dashboard/challenges')
    return false
  }
  return true
}

// Initialize game
onMounted(() => {
  // Check authentication first
  if (!checkAuthentication()) {
    return
  }

  if (route.query.questions) {
    totalQuestions.value = parseInt(route.query.questions)
  }
  if (route.query.timePerQuestion) {
    timePerQuestion.value = parseInt(route.query.timePerQuestion)
    timeLeft.value = timePerQuestion.value
  }

  startTimer()
  loadQuestion()
})

onUnmounted(() => {
  if (gameInterval.value) {
    clearInterval(gameInterval.value)
  }
})

// Methods
const startTimer = () => {
  gameInterval.value = setInterval(() => {
    if (timeLeft.value > 0 && !answered.value) {
      timeLeft.value--
    } else if (timeLeft.value === 0 && !answered.value) {
      // Time's up
      timeUp()
    }
  }, 1000)
}

const loadQuestion = () => {
  const questionIndex = (currentQuestion.value - 1) % questions.value.length
  currentQuestionData.value = questions.value[questionIndex]
  selectedAnswer.value = null
  correctAnswer.value = currentQuestionData.value.answers.findIndex((a) => a.correct)
  answered.value = false
  timeLeft.value = timePerQuestion.value

  // Reset player statuses
  players.value.forEach((player) => {
    if (player.isCurrentUser) {
      player.status = 'thinking'
    } else {
      // Simulate other players
      setTimeout(
        () => {
          if (!answered.value && Math.random() > 0.3) {
            player.status = 'answered'
          }
        },
        Math.random() * timePerQuestion.value * 1000,
      )
    }
  })
}

const selectAnswer = (answerIndex) => {
  if (answered.value) return

  selectedAnswer.value = answerIndex
  answered.value = true

  const currentPlayer = players.value.find((p) => p.isCurrentUser)
  currentPlayer.status = 'answered'

  // Check if answer is correct
  const isCorrect = currentQuestionData.value.answers[answerIndex].correct

  if (isCorrect) {
    // Correct answer: +1 point, increase streak
    currentPlayer.streak++
    const streakBonus = Math.floor(currentPlayer.streak / 3) // Bonus every 3 correct answers
    currentPlayer.score += 1 + streakBonus
  } else {
    // Wrong answer: -1 point, reset streak
    currentPlayer.score = Math.max(0, currentPlayer.score - 1)
    currentPlayer.streak = 0
  }

  // Update rankings
  updateRankings()

  // Show answer for 2 seconds, then next question
  setTimeout(() => {
    nextQuestion()
  }, 2000)
}

const timeUp = () => {
  if (answered.value) return

  answered.value = true
  const currentPlayer = players.value.find((p) => p.isCurrentUser)
  currentPlayer.status = 'answered'

  // Time up: -1 point, reset streak
  currentPlayer.score = Math.max(0, currentPlayer.score - 1)
  currentPlayer.streak = 0

  updateRankings()

  setTimeout(() => {
    nextQuestion()
  }, 2000)
}

const nextQuestion = () => {
  if (currentQuestion.value >= totalQuestions.value) {
    endGame()
  } else {
    currentQuestion.value++
    loadQuestion()
  }
}

const updateRankings = () => {
  const sorted = [...players.value].sort((a, b) => b.score - a.score)
  sorted.forEach((player, index) => {
    const originalPlayer = players.value.find((p) => p.id === player.id)
    originalPlayer.rank = index + 1
  })
}

const endGame = () => {
  if (gameInterval.value) {
    clearInterval(gameInterval.value)
  }
  gameOver.value = true
}

const getAnswerClass = (index) => {
  if (!answered.value) return ''

  if (index === correctAnswer.value) {
    return 'correct'
  } else if (index === selectedAnswer.value) {
    return 'incorrect'
  }
  return 'disabled'
}


const playAgain = () => {
  // Reset game state
  currentQuestion.value = 1
  timeLeft.value = timePerQuestion.value
  answered.value = false
  gameOver.value = false
  selectedAnswer.value = null

  // Reset players
  players.value.forEach((player) => {
    player.score = 0
    player.streak = 0
    player.rank = 1
    player.status = 'thinking'
  })

  loadQuestion()
  startTimer()
}

const exitGame = () => {
  router.push('/dashboard/challenges')
}

const viewLeaderboard = () => {
  router.push('/dashboard/leaderboard')
}

const getMotivationIcon = () => {
  const currentPlayerData = currentPlayer.value
  if (!currentPlayerData) return '🎯'

  const accuracy = (currentPlayerData.score / totalQuestions.value) * 100
  if (accuracy >= 90) return '🌟'
  if (accuracy >= 70) return '🎯'
  if (accuracy >= 50) return '💪'
  return '📚'
}

const getMotivationTitle = () => {
  const currentPlayerData = currentPlayer.value
  if (!currentPlayerData) return 'Cố gắng lên!'

  const accuracy = (currentPlayerData.score / totalQuestions.value) * 100
  if (accuracy >= 90) return 'Xuất sắc!'
  if (accuracy >= 70) return 'Rất tốt!'
  if (accuracy >= 50) return 'Khá ổn!'
  return 'Cố gắng hơn nữa!'
}


const getPlayerGradient = (playerId) => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #ff8a80 0%, #ea6100 100%)',
  ]

  // Use player ID to consistently assign the same gradient
  const index = playerId.charCodeAt(playerId.length - 1) % gradients.length
  return gradients[index]
}
</script>

<style scoped>
.challenge-battle-page {
  min-height: 100vh;
  background: radial-gradient(ellipse at top, #667eea 0%, #764ba2 100%);
  background-attachment: fixed;
  font-family:
    'Inter',
    -apple-system,
    'Roboto',
    'Helvetica',
    sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* Floating Particles Background */
.particles-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: float 8s infinite ease-in-out;
}

.particle:nth-child(odd) {
  animation-delay: -2s;
  animation-duration: 6s;
}

.particle:nth-child(3n) {
  animation-delay: -4s;
  animation-duration: 10s;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) scale(1);
    opacity: 0;
  }
}

.particle:nth-child(1) {
  left: 10%;
}
.particle:nth-child(2) {
  left: 20%;
}
.particle:nth-child(3) {
  left: 30%;
}
.particle:nth-child(4) {
  left: 40%;
}
.particle:nth-child(5) {
  left: 50%;
}
.particle:nth-child(6) {
  left: 60%;
}
.particle:nth-child(7) {
  left: 70%;
}
.particle:nth-child(8) {
  left: 80%;
}
.particle:nth-child(9) {
  left: 90%;
}
.particle:nth-child(10) {
  left: 5%;
}
.particle:nth-child(11) {
  left: 15%;
}
.particle:nth-child(12) {
  left: 25%;
}
.particle:nth-child(13) {
  left: 35%;
}
.particle:nth-child(14) {
  left: 65%;
}
.particle:nth-child(15) {
  left: 85%;
}

/* Game Header */
.game-header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 32px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 32px;
}

/* Progress Section */
.progress-section {
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.progress-info {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.progress-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.trophy-icon {
  width: 18px;
  height: 18px;
}

.progress-text {
  color: #4a5568;
  font-size: 16px;
  font-weight: 600;
}

.progress-bar-container {
  flex: 1;
  min-width: 120px;
}

.progress-bar {
  position: relative;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 12px;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.progress-glow {
  position: absolute;
  top: -2px;
  left: 0;
  height: 12px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  border-radius: 12px;
  filter: blur(4px);
  opacity: 0.4;
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Timer */
.timer-section {
  display: flex;
  justify-content: center;
}

.timer-circle {
  position: relative;
  width: 64px;
  height: 64px;
  color: #667eea;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.timer-circle.warning {
  color: #f59e0b;
}

.timer-circle.critical {
  color: #ef4444;
}

.timer-circle.pulse {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.timer-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.timer-track {
  opacity: 0.2;
}

.timer-progress {
  transition: stroke-dashoffset 1s linear;
  filter: drop-shadow(0 0 4px currentColor);
}

.timer-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.timer-value {
  font-size: 18px;
  font-weight: 700;
  color: currentColor;
  line-height: 1;
}

.timer-label {
  font-size: 10px;
  font-weight: 500;
  color: currentColor;
  opacity: 0.7;
}

/* Players Info */
.players-info {
  display: flex;
  justify-content: flex-end;
}

.players-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.players-icon {
  width: 18px;
  height: 18px;
  color: #667eea;
}

.players-count {
  font-size: 14px;
  font-weight: 600;
  color: #4a5568;
}

/* Battle Arena */
.battle-arena {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 32px;
  position: relative;
  z-index: 10;
}

/* Question Zone */
.question-zone {
  margin-bottom: 40px;
}

.question-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.question-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.question-card.answered::before {
  left: 100%;
}

.question-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.question-badge {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
}

.question-number {
  font-size: 16px;
}

.question-total {
  opacity: 0.8;
}

.difficulty-indicator {
  display: flex;
  gap: 4px;
}

.difficulty-stars {
  display: flex;
  gap: 2px;
}

.star {
  width: 12px;
  height: 12px;
  background: #e5e7eb;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.star.filled {
  background: #fbbf24;
}

.question-content {
  position: relative;
  z-index: 1;
}

.question-text {
  color: #1a202c;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.word-highlight {
  display: inline-block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  margin-top: 8px;
}

/* Battle Grid */
.battle-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: start;
}

/* Answers Arena */
.answers-arena {
  position: relative;
}

.answers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.answer-card {
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  min-height: 100px;
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: hidden;
}

.answer-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.answer-card:hover:not(:disabled)::before {
  opacity: 1;
}

.answer-card:hover:not(:disabled) {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
}

.answer-card:disabled {
  cursor: not-allowed;
}

.answer-card.correct {
  border-color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  transform: scale(1.02);
}

.answer-card.incorrect {
  border-color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  transform: scale(0.98);
}

.answer-card.disabled {
  opacity: 0.6;
  transform: scale(0.95);
}

.answer-indicator {
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f7fafc, #edf2f7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.answer-letter {
  font-size: 18px;
  font-weight: 700;
  color: #4a5568;
  transition: all 0.3s ease;
}

.answer-card.correct .answer-indicator {
  background: linear-gradient(135deg, #10b981, #059669);
}

.answer-card.correct .answer-letter {
  color: white;
}

.answer-card.incorrect .answer-indicator {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.answer-card.incorrect .answer-letter {
  color: white;
}

.answer-check,
.answer-x {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  color: white;
}

.answer-content {
  flex: 1;
}

.answer-text {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: #2d3748;
  transition: color 0.3s ease;
}

.answer-card.correct .answer-text {
  color: #065f46;
}

.answer-card.incorrect .answer-text {
  color: #991b1b;
}

.answer-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border-radius: 22px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease;
}

.answer-card:hover:not(:disabled) .answer-glow {
  opacity: 0.3;
}

/* Live Scoreboard */
.live-scoreboard {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  padding: 28px;
  height: fit-content;
  position: sticky;
  top: 140px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.scoreboard-header {
  margin-bottom: 24px;
}

.scoreboard-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
}

.leaderboard-icon {
  width: 20px;
  height: 20px;
  color: #667eea;
}

.players-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.player-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.player-row.animated {
  animation: scoreUpdate 0.6s ease;
}

@keyframes scoreUpdate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}

.player-row.current-player {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-color: #667eea;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
}

.player-row.leader {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1));
  border-color: #f59e0b;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.2);
}

.player-position {
  flex-shrink: 0;
}

.rank-badge {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #6b7280;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.rank-badge.rank-1 {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  font-size: 16px;
}

.player-avatar-container {
  position: relative;
  flex-shrink: 0;
}

.player-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.player-status-indicator {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid white;
}

.status-dot {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.status-dot.answered {
  background: #10b981;
  animation: pulse-green 2s infinite;
}

.status-dot.thinking {
  background: #f59e0b;
  animation: pulse-yellow 2s infinite;
}

.status-dot.waiting {
  background: #6b7280;
}

@keyframes pulse-green {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
  }
  50% {
    box-shadow: 0 0 0 4px rgba(16, 185, 129, 0);
  }
}

@keyframes pulse-yellow {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4);
  }
  50% {
    box-shadow: 0 0 0 4px rgba(245, 158, 11, 0);
  }
}

.player-details {
  flex: 1;
  min-width: 0;
}

.player-name {
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 4px;
  truncate: true;
}

.player-stats {
  display: flex;
  gap: 12px;
  align-items: center;
}

.score-display {
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.score-value {
  font-size: 18px;
  font-weight: 700;
  color: #667eea;
}

.score-label {
  font-size: 12px;
  font-weight: 500;
  color: #718096;
}

.streak-indicator {
  font-size: 12px;
  font-weight: 600;
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

/* Enhanced Game Over Modal */
.game-over-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-close-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-close-btn:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.modal-close-btn svg {
  width: 24px;
  height: 24px;
  color: #4a5568;
}

.celebration-confetti {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.confetti {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #667eea, #764ba2, #f59e0b, #10b981, #ef4444);
  animation: confetti-fall 3s linear infinite;
}

.confetti:nth-child(odd) {
  animation-delay: -1s;
  animation-duration: 2.5s;
}

.confetti:nth-child(3n) {
  animation-delay: -2s;
  animation-duration: 3.5s;
}

@keyframes confetti-fall {
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

.fireworks {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.firework {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #fff 0%, transparent 70%);
  border-radius: 50%;
  animation: firework-burst 2s ease-out infinite;
}

.firework:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.firework:nth-child(2) { top: 30%; left: 80%; animation-delay: 0.5s; }
.firework:nth-child(3) { top: 60%; left: 15%; animation-delay: 1s; }
.firework:nth-child(4) { top: 70%; left: 70%; animation-delay: 1.5s; }
.firework:nth-child(5) { top: 40%; left: 50%; animation-delay: 0.8s; }

@keyframes firework-burst {
  0% {
    transform: scale(0);
    opacity: 1;
    box-shadow: 0 0 0 0px #fff, 0 0 0 0px #f59e0b, 0 0 0 0px #10b981, 0 0 0 0px #ef4444;
  }
  50% {
    transform: scale(1);
    opacity: 0.8;
    box-shadow:
      0 0 20px 8px #fff,
      10px 10px 20px 6px #f59e0b,
      -10px 10px 20px 6px #10b981,
      10px -10px 20px 6px #ef4444,
      -10px -10px 20px 6px #667eea;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
    box-shadow:
      0 0 50px 20px transparent,
      20px 20px 50px 15px transparent,
      -20px 20px 50px 15px transparent,
      20px -20px 50px 15px transparent,
      -20px -20px 50px 15px transparent;
  }
}

.sparkles {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
}

.sparkle {
  position: absolute;
  font-size: 16px;
  animation: sparkle-twinkle 1.5s ease-in-out infinite;
}

.sparkle:nth-child(1) { top: 0; left: 50%; animation-delay: 0s; }
.sparkle:nth-child(2) { top: 20%; right: 0; animation-delay: 0.2s; }
.sparkle:nth-child(3) { bottom: 20%; right: 0; animation-delay: 0.4s; }
.sparkle:nth-child(4) { bottom: 0; left: 50%; animation-delay: 0.6s; }
.sparkle:nth-child(5) { bottom: 20%; left: 0; animation-delay: 0.8s; }
.sparkle:nth-child(6) { top: 20%; left: 0; animation-delay: 1s; }

@keyframes sparkle-twinkle {
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
}

.results-modal {
  position: relative;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 0;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  animation: modal-appear 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 85vh;
  overflow-y: auto;
}

@keyframes modal-appear {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(40px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal-decoration {
  position: relative;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 24px 24px 40px;
  text-align: center;
}

.trophy-burst {
  position: relative;
  display: inline-block;
}

.trophy-icon-main {
  font-size: 48px;
  position: relative;
  z-index: 2;
  animation: trophy-bounce 1.5s ease-in-out infinite alternate;
}

@keyframes trophy-bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-4px);
  }
}

.victory-rays {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 60%);
  border-radius: 50%;
  animation: rays-pulse 2s ease-in-out infinite;
}

@keyframes rays-pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.5;
  }
}

.results-header {
  padding: 0 24px 20px;
  text-align: center;
  color: white;
}

.results-title {
  font-size: 24px;
  font-weight: 700;
  margin: 12px 0 6px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.results-subtitle {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}

.results-content {
  padding: 24px;
  background: rgba(255, 255, 255, 0.95);
}

.champion-section {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.champion-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-shrink: 0;
}

.champion-crown {
  font-size: 20px;
  margin-bottom: 8px;
}

.champion-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 700;
  border: 3px solid rgba(245, 158, 11, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
}

.champion-name {
  font-size: 18px;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 4px;
}

.champion-score {
  font-size: 20px;
  font-weight: 700;
  color: #667eea;
}

.quick-stats {
  display: flex;
  gap: 16px;
  flex: 1;
}

.quick-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  flex: 1;
  text-align: center;
}

.quick-stat .stat-value {
  font-size: 18px;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 2px;
}

.quick-stat .stat-label {
  font-size: 12px;
  color: #718096;
  font-weight: 500;
}

.compact-leaderboard {
  margin-bottom: 20px;
}

.section-title {
  font-size: 16px;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 12px;
  text-align: center;
}

.players-result {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.player-result {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.player-result.is-current {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-color: #667eea;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);
}

.result-rank {
  font-size: 18px;
  font-weight: 700;
  width: 24px;
  text-align: center;
}

.result-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.result-name {
  font-size: 14px;
  font-weight: 600;
  color: #2d3748;
}

.result-score {
  font-size: 14px;
  font-weight: 600;
  color: #667eea;
}

.motivation-brief {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.2);
  margin-bottom: 16px;
}

.motivation-brief .motivation-icon {
  font-size: 20px;
}

.motivation-brief .motivation-text {
  font-size: 14px;
  font-weight: 600;
  color: #2d3748;
}

.leaderboard-title {
  font-size: 20px;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 20px;
  text-align: center;
}

.leaderboard-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.leaderboard-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  position: relative;
}

.leaderboard-item.champion {
  background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1));
  border-color: #f59e0b;
}

.leaderboard-item.runner-up {
  background: linear-gradient(135deg, rgba(156, 163, 175, 0.1), rgba(107, 114, 128, 0.1));
  border-color: #9ca3af;
}

.leaderboard-item.third-place {
  background: linear-gradient(135deg, rgba(205, 127, 50, 0.1), rgba(180, 83, 9, 0.1));
  border-color: #cd7f32;
}

.leaderboard-item.current-player {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
}

.position-indicator {
  flex-shrink: 0;
}

.position-medal {
  font-size: 20px;
}

.position-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e2e8f0;
  color: #4a5568;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.player-summary {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.player-mini-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.player-info-summary {
  flex: 1;
  text-align: left;
}

.player-name-summary {
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2px;
}

.player-performance {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.final-score {
  font-size: 14px;
  font-weight: 600;
  color: #667eea;
}

.final-streak {
  font-size: 12px;
  font-weight: 600;
  color: #f59e0b;
}

.accuracy-rate {
  font-size: 12px;
  font-weight: 600;
  color: #10b981;
  background: rgba(16, 185, 129, 0.1);
  padding: 2px 6px;
  border-radius: 6px;
}

.you-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.results-actions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.95);
}

.action-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  overflow: hidden;
}

.btn-content {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 2;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.primary-action {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.primary-action:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(102, 126, 234, 0.4);
}

.btn-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
  z-index: 1;
}

.primary-action:hover .btn-shimmer {
  left: 100%;
}

.secondary-action {
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.secondary-action:hover {
  background: rgba(245, 158, 11, 0.2);
  transform: translateY(-1px);
  border-color: rgba(245, 158, 11, 0.5);
}

.tertiary-action {
  background: rgba(255, 255, 255, 0.9);
  color: #4a5568;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.tertiary-action:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-1px);
  border-color: rgba(0, 0, 0, 0.2);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .battle-grid {
    grid-template-columns: 1fr 320px;
    gap: 32px;
  }
}

@media (max-width: 1024px) {
  .battle-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .live-scoreboard {
    position: static;
    order: -1;
  }

  .header-container {
    grid-template-columns: 1fr auto 1fr;
    gap: 24px;
    padding: 16px 24px;
  }

  .battle-arena {
    padding: 32px 24px;
  }
}

@media (max-width: 768px) {
  .battle-arena {
    padding: 24px 16px;
  }

  .question-card {
    padding: 32px 24px;
  }

  .question-text {
    font-size: 28px;
  }

  .answers-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .answer-card {
    padding: 20px;
    min-height: 80px;
  }

  .answer-text {
    font-size: 16px;
  }

  .header-container {
    grid-template-columns: 1fr;
    gap: 16px;
    text-align: center;
    padding: 16px;
  }

  .progress-section {
    order: 2;
  }

  .timer-section {
    order: 1;
  }

  .players-info {
    order: 3;
    justify-content: center;
  }

  .live-scoreboard {
    padding: 20px;
  }

  .player-row {
    padding: 12px;
    gap: 12px;
  }

  .player-avatar {
    width: 36px;
    height: 36px;
    font-size: 14px;
  }

  .results-modal {
    max-width: 90vw;
    margin: 20px;
  }

  .champion-section {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  .quick-stats {
    gap: 8px;
  }

  .quick-stat {
    padding: 8px;
  }

  .quick-stat .stat-value {
    font-size: 16px;
  }

  .quick-stat .stat-label {
    font-size: 11px;
  }

  .results-actions {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 16px;
  }

  .action-btn {
    padding: 12px 16px;
    font-size: 13px;
  }

  .btn-icon {
    width: 16px;
    height: 16px;
  }

  .champion-avatar {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }

  .champion-name {
    font-size: 16px;
  }

  .champion-score {
    font-size: 18px;
  }

  .section-title {
    font-size: 14px;
  }

  .player-result {
    padding: 10px 12px;
    gap: 10px;
  }

  .result-rank {
    font-size: 16px;
  }

  .result-name, .result-score {
    font-size: 13px;
  }

  .motivation-brief {
    padding: 10px 12px;
  }

  .motivation-brief .motivation-icon {
    font-size: 18px;
  }

  .motivation-brief .motivation-text {
    font-size: 13px;
  }

  .modal-decoration {
    padding: 32px 24px 60px;
  }

  .results-content {
    padding: 32px 24px;
  }

  .results-actions {
    padding: 24px;
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 12px 16px;
  }

  .question-card {
    padding: 24px 16px;
  }

  .question-text {
    font-size: 24px;
  }

  .word-highlight {
    font-size: 16px;
  }

  .answer-card {
    padding: 16px;
    min-height: 70px;
  }

  .answer-indicator {
    width: 36px;
    height: 36px;
  }

  .answer-letter {
    font-size: 16px;
  }

  .answer-text {
    font-size: 15px;
  }

  .live-scoreboard {
    padding: 16px;
  }

  .player-row {
    padding: 10px;
    gap: 10px;
  }

  .player-avatar {
    width: 32px;
    height: 32px;
    font-size: 12px;
  }

  .player-name {
    font-size: 14px;
  }

  .score-value {
    font-size: 16px;
  }

  .results-modal {
    border-radius: 24px;
  }

  .modal-decoration {
    padding: 24px 16px 40px;
  }

  .results-title {
    font-size: 24px;
  }

  .trophy-icon-main {
    font-size: 48px;
  }

  .champion-avatar {
    width: 60px;
    height: 60px;
    font-size: 20px;
  }

  .champion-name {
    font-size: 20px;
  }

  .score-number {
    font-size: 24px;
  }

  .results-content {
    padding: 24px 16px;
  }

  .leaderboard-item {
    padding: 12px;
    gap: 12px;
  }

  .player-mini-avatar {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }

  .results-actions {
    padding: 16px;
  }

  .action-btn {
    padding: 14px 20px;
    font-size: 14px;
  }

  /* Confetti positioning for mobile */
  .confetti:nth-child(n) {
    left: calc(var(--i) * 2%);
  }
}

/* Confetti positioning */
.confetti:nth-child(1) {
  left: 2%;
}
.confetti:nth-child(2) {
  left: 6%;
}
.confetti:nth-child(3) {
  left: 10%;
}
.confetti:nth-child(4) {
  left: 14%;
}
.confetti:nth-child(5) {
  left: 18%;
}
.confetti:nth-child(6) {
  left: 22%;
}
.confetti:nth-child(7) {
  left: 26%;
}
.confetti:nth-child(8) {
  left: 30%;
}
.confetti:nth-child(9) {
  left: 34%;
}
.confetti:nth-child(10) {
  left: 38%;
}
.confetti:nth-child(11) {
  left: 42%;
}
.confetti:nth-child(12) {
  left: 46%;
}
.confetti:nth-child(13) {
  left: 50%;
}
.confetti:nth-child(14) {
  left: 54%;
}
.confetti:nth-child(15) {
  left: 58%;
}
.confetti:nth-child(16) {
  left: 62%;
}
.confetti:nth-child(17) {
  left: 66%;
}
.confetti:nth-child(18) {
  left: 70%;
}
.confetti:nth-child(19) {
  left: 74%;
}
.confetti:nth-child(20) {
  left: 78%;
}
.confetti:nth-child(21) {
  left: 82%;
}
.confetti:nth-child(22) {
  left: 86%;
}
.confetti:nth-child(23) {
  left: 90%;
}
.confetti:nth-child(24) {
  left: 94%;
}
.confetti:nth-child(25) {
  left: 98%;
}
.confetti:nth-child(26) {
  left: 4%;
}
.confetti:nth-child(27) {
  left: 8%;
}
.confetti:nth-child(28) {
  left: 12%;
}
.confetti:nth-child(29) {
  left: 16%;
}
.confetti:nth-child(30) {
  left: 20%;
}
.confetti:nth-child(31) {
  left: 24%;
}
.confetti:nth-child(32) {
  left: 28%;
}
.confetti:nth-child(33) {
  left: 32%;
}
.confetti:nth-child(34) {
  left: 36%;
}
.confetti:nth-child(35) {
  left: 40%;
}
.confetti:nth-child(36) {
  left: 44%;
}
.confetti:nth-child(37) {
  left: 48%;
}
.confetti:nth-child(38) {
  left: 52%;
}
.confetti:nth-child(39) {
  left: 56%;
}
.confetti:nth-child(40) {
  left: 60%;
}
.confetti:nth-child(41) {
  left: 64%;
}
.confetti:nth-child(42) {
  left: 68%;
}
.confetti:nth-child(43) {
  left: 72%;
}
.confetti:nth-child(44) {
  left: 76%;
}
.confetti:nth-child(45) {
  left: 80%;
}
.confetti:nth-child(46) {
  left: 84%;
}
.confetti:nth-child(47) {
  left: 88%;
}
.confetti:nth-child(48) {
  left: 92%;
}
.confetti:nth-child(49) {
  left: 96%;
}
.confetti:nth-child(50) {
  left: 1%;
}
</style>
