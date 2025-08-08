<template>
  <div class="challenge-battle-page">
    <!-- Game Header -->
    <header class="game-header">
      <div class="header-container">
        <!-- Question Progress -->
        <div class="question-progress">
          <div class="progress-info">
            <svg class="trophy-icon" viewBox="0 0 16 16">
              <path
                d="M4.00065 6.00008H3.00065C2.55862 6.00008 2.1347 5.82449 1.82214 5.51193C1.50958 5.19937 1.33398 4.77544 1.33398 4.33341C1.33398 3.89139 1.50958 3.46746 1.82214 3.1549C2.1347 2.84234 2.55862 2.66675 3.00065 2.66675H4.00065"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.001 6.00008H13.001C13.443 6.00008 13.8669 5.82449 14.1795 5.51193C14.492 5.19937 14.6676 4.77544 14.6676 4.33341C14.6676 3.89139 14.492 3.46746 14.1795 3.1549C13.8669 2.84234 13.443 2.66675 13.001 2.66675H12.001"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.66797 14.6667H13.3346"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66797 9.77344V11.3334C6.66797 11.7001 6.35464 11.9868 6.0213 12.1401C5.23464 12.5001 4.66797 13.4934 4.66797 14.6668"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.33398 9.77344V11.3334C9.33398 11.7001 9.64732 11.9868 9.98065 12.1401C10.7673 12.5001 11.334 13.4934 11.334 14.6668"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.001 1.33325H4.00098V5.99992C4.00098 7.06078 4.4224 8.0782 5.17255 8.82835C5.9227 9.57849 6.94011 9.99992 8.00098 9.99992C9.06184 9.99992 10.0793 9.57849 10.8294 8.82835C11.5795 8.0782 12.001 7.06078 12.001 5.99992V1.33325Z"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{{ currentQuestion }}/{{ totalQuestions }}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: questionProgress + '%' }"></div>
          </div>
        </div>

        <!-- Timer -->
        <div class="timer-section">
          <div class="timer-circle" :class="{ warning: timeLeft <= 5, critical: timeLeft <= 3 }">
            <svg class="timer-svg" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" stroke="#E5E7EB" stroke-width="2" fill="none" />
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                :stroke-dasharray="circleCircumference"
                :stroke-dashoffset="timerStrokeDashoffset"
                class="timer-progress"
              />
            </svg>
            <div class="timer-value">{{ timeLeft }}</div>
          </div>
        </div>

        <!-- Players Section -->
        <div class="players-section">
          <div class="players-header">
            <svg class="players-icon" viewBox="0 0 16 16">
              <path
                d="M10.6663 14V12.6667C10.6663 11.9594 10.3854 11.2811 9.88529 10.781C9.3852 10.281 8.70692 10 7.99967 10H3.99967C3.29243 10 2.61415 10.281 2.11406 10.781C1.61396 11.2811 1.33301 11.9594 1.33301 12.6667V14"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52692 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52692 7.33333 5.99967 7.33333Z"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.667 14V12.6667C14.6666 12.0758 14.4699 11.5019 14.1079 11.0349C13.7459 10.5679 13.2391 10.2344 12.667 10.0867"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.667 2.08667C11.2406 2.23354 11.749 2.56714 12.1121 3.03488C12.4752 3.50262 12.6722 4.07789 12.6722 4.67C12.6722 5.26212 12.4752 5.83739 12.1121 6.30513C11.749 6.77287 11.2406 7.10647 10.667 7.25334"
                stroke="#6B7280"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{{ players.length }} players</span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Question Section -->
      <div class="question-section">
        <div class="question-card">
          <div class="question-number">Question {{ currentQuestion }}</div>
          <h1 class="question-text">{{ currentQuestionData.question }}</h1>
        </div>
      </div>

      <!-- Answers Section -->
      <div class="answers-section">
        <div class="answers-grid">
          <button
            v-for="(answer, index) in currentQuestionData.answers"
            :key="index"
            class="answer-button"
            :class="getAnswerClass(index)"
            :disabled="answered"
            @click="selectAnswer(index)"
          >
            <div class="answer-letter">{{ String.fromCharCode(65 + index) }}</div>
            <div class="answer-text">{{ answer.text }}</div>
          </button>
        </div>
      </div>

      <!-- Players Scoreboard -->
      <div class="scoreboard-section">
        <div class="scoreboard-header">
          <h2 class="scoreboard-title">Scoreboard</h2>
        </div>
        <div class="players-grid">
          <div
            v-for="player in players"
            :key="player.id"
            class="player-card"
            :class="{ 'current-player': player.isCurrentUser, leader: player.rank === 1 }"
          >
            <div class="player-rank">{{ player.rank }}</div>
            <div class="player-avatar">{{ player.initials }}</div>
            <div class="player-info">
              <div class="player-name">{{ player.name }}</div>
              <div class="player-stats">
                <div class="score">{{ player.score }} points</div>
                <div v-if="player.streak > 1" class="streak">{{ player.streak }} streak</div>
              </div>
            </div>
            <div class="player-status" :class="player.status">
              <div v-if="player.status === 'answered'" class="status-icon">✓</div>
              <div v-else-if="player.status === 'thinking'" class="status-icon">💭</div>
              <div v-else class="status-icon">⏱️</div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Game Over Modal -->
    <div v-if="gameOver" class="game-over-modal">
      <div class="modal-backdrop" @click="closeGameOver"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">🎉 Game Over!</h2>
        </div>
        <div class="modal-body">
          <div class="winner-section">
            <div class="trophy-icon-large">🏆</div>
            <h3 class="winner-name">{{ winner.name }}</h3>
            <p class="winner-score">{{ winner.score }} points</p>
          </div>
          <div class="final-standings">
            <h4>Final Results:</h4>
            <div class="standings-list">
              <div
                v-for="player in sortedPlayers"
                :key="player.id"
                class="standing-item"
                :class="{ 'current-player': player.isCurrentUser }"
              >
                <div class="standing-rank">{{ player.rank }}</div>
                <div class="standing-name">{{ player.name }}</div>
                <div class="standing-score">{{ player.score }} points</div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="play-again-btn" @click="playAgain">Play Again</button>
          <button class="exit-btn" @click="exitGame">Exit</button>
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
  return players.value.find((p) => p.isCurrentUser)
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

  // Debug log
  console.log('Game initialized:', {
    gameOver: gameOver.value,
    currentQuestion: currentQuestion.value,
    totalQuestions: totalQuestions.value,
  })

  startTimer()
  loadQuestion()
})

onUnmounted(() => {
  // Restore body scroll
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''

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

  // Prevent body scroll when showing fullscreen results
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
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
  // Restore body scroll
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''

  // Chuyển về trang ChallengePage
  router.push('/dashboard/challenges')
}

const exitGame = () => {
  // Restore body scroll
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''

  // Clear any running timer
  if (gameInterval.value) {
    clearInterval(gameInterval.value)
  }
  // Navigate back to challenges
  router.push('/dashboard/challenges')
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

/* Question Progress */
.question-progress {
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
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  border-radius: 4px;
  transition: width 0.3s ease;
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
}

/* Players Section */
.players-section {
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
  width: 16px;
  height: 16px;
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 32px;
  position: relative;
  z-index: 10;
}

/* Question Section */
.question-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
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

.question-number {
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
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
  line-height: 1.4;
  margin: 0;
}

/* Answers Section */
.answers-section {
  margin-top: 24px;
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
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  min-height: 80px;
}

.answer-button:hover:not(:disabled) {
  border-color: #3b82f6;
  background: #f8fafc;
}

.answer-button:disabled {
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

.answer-button.incorrect .answer-letter {
  background: #dc2626;
  color: white;
}

.answer-text {
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}

/* Scoreboard */
.scoreboard-section {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  height: fit-content;
  position: sticky;
  top: 120px;
}

.scoreboard-header {
  margin-bottom: 20px;
}

.scoreboard-title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.players-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.player-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
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

.player-rank {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #6b7280;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
}

.player-card.leader .player-rank {
  background: #f59e0b;
}

.player-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  flex-shrink: 0;
}

.player-info {
  flex: 1;
}

.player-name {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 2px;
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
}

.player-status.waiting {
  background: #e5e7eb;
  color: #6b7280;
}

/* Game Over Modal */
.game-over-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;
}

.figma-background {
  min-height: 100vh;
  background: linear-gradient(90deg, #831843 0%, #581c87 33%, #312e81 100%);
  position: relative;
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.figma-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.modal-header {
  text-align: center;
}

.trophy-burst {
  position: relative;
  display: inline-block;
}

.trophy-icon-main {
  font-size: 64px;
  position: relative;
  z-index: 2;
  animation: trophy-bounce 1s ease-in-out infinite alternate;
}

@keyframes trophy-bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-8px);
  }
}

.modal-title {
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.modal-body {
  text-align: center;
}

.winner-section {
  margin-bottom: 24px;
}

.trophy-icon-large {
  font-size: 48px;
  margin-bottom: 12px;
}

.winner-name {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
}

.winner-score {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
}

.final-standings h4 {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
  text-align: left;
}

.standings-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.standing-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #f9fafb;
  border-radius: 8px;
}

.standing-item.current-player {
  background: #eff6ff;
  border: 1px solid #3b82f6;
}

.standing-rank {
  font-weight: 700;
  color: #374151;
}

.standing-name {
  flex: 1;
  text-align: left;
  margin-left: 12px;
  font-weight: 500;
  color: #111827;
}

.standing-score {
  font-weight: 600;
  color: #6b7280;
}

.modal-footer {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.play-again-btn,
.exit-btn {
  flex: 1;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.play-again-btn {
  background: #3b82f6;
  color: white;
  border: none;
}

.play-again-btn:hover {
  background: #2563eb;
}

.exit-btn {
  background: #fff;
  color: #6b7280;
  border: 1px solid #d1d5db;
}

.exit-btn:hover {
  background: #f9fafb;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .main-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .scoreboard-section {
    position: static;
    order: -1;
  }

  .header-container {
    grid-template-columns: 1fr auto 1fr;
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 16px;
  }

  .question-card {
    padding: 24px;
  }

  .question-text {
    font-size: 24px;
  }

  .answers-grid {
    grid-template-columns: 1fr;
  }

  .header-container {
    grid-template-columns: 1fr;
    gap: 12px;
    text-align: center;
  }

  .question-progress {
    order: 2;
  }

  .winner-avatar {
    width: 70px;
    height: 70px;
    font-size: 16px;
  }

  .players-section {
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
    padding: 20px;
  }

  .question-text {
    font-size: 20px;
  }

  .answer-button {
    padding: 16px;
    min-height: 60px;
  }

  .modal-content {
    padding: 24px;
    margin: 16px;
  }

  .modal-footer {
    flex-direction: column;
  }
}
</style>
