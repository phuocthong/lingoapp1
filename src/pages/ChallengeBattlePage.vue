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
  {
    question: 'Hành tinh nào gần Mặt Trời nhất?',
    answers: [
      { text: 'Sao Kim', correct: false },
      { text: 'Trái Đ���t', correct: false },
      { text: 'Sao Thủy', correct: true },
      { text: 'Sao Hỏa', correct: false },
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

const closeGameOver = () => {
  // Allow closing by clicking backdrop
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
</script>

<style scoped>
.challenge-battle-page {
  min-height: 100vh;
  background: linear-gradient(90deg, #eff6ff 100%, #f5f3ff 0%);
  font-family:
    'Inter',
    -apple-system,
    'Roboto',
    'Helvetica',
    sans-serif;
  contain: layout style;
}

/* Game Header */
.game-header {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
}

/* Question Progress */
.question-progress {
  display: flex;
  align-items: center;
  gap: 12px;
}

.progress-info {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.trophy-icon {
  width: 16px;
  height: 16px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  border-radius: 4px;
  transition: width 0.3s ease;
}

/* Timer */
.timer-section {
  display: flex;
  justify-content: center;
}

.timer-circle {
  position: relative;
  width: 48px;
  height: 48px;
  color: #3b82f6;
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

.timer-progress {
  transition: stroke-dashoffset 1s linear;
}

.timer-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: 700;
  color: currentColor;
}

/* Players Section */
.players-section {
  display: flex;
  justify-content: flex-end;
}

.players-header {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
}

.players-icon {
  width: 16px;
  height: 16px;
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px;
  align-items: start;
}

/* Question Section */
.question-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.question-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.question-number {
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
}

.question-text {
  color: #111827;
  font-size: 28px;
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
  gap: 16px;
}

.answer-button {
  background: #fff;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
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

.answer-button.correct {
  border-color: #16a34a;
  background: #f0fdf4;
  color: #16a34a;
}

.answer-button.incorrect {
  border-color: #dc2626;
  background: #fef2f2;
  color: #dc2626;
}

.answer-button.disabled {
  opacity: 0.6;
}

.answer-letter {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #f3f4f6;
  color: #374151;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
}

.answer-button.correct .answer-letter {
  background: #16a34a;
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
  gap: 12px;
}

.player-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
}

.player-card.current-player {
  border-color: #3b82f6;
  background: #eff6ff;
}

.player-card.leader {
  border-color: #f59e0b;
  background: #fffbeb;
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
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.player-card.leader .player-rank {
  background: #f59e0b;
}

.player-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(90deg, #7c3aed 100%, #3b82f6 0%);
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
  font-size: 14px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 2px;
}

.player-stats {
  display: flex;
  gap: 8px;
  align-items: center;
}

.score {
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
}

.streak {
  font-size: 10px;
  font-weight: 500;
  color: #f59e0b;
  background: #fffbeb;
  padding: 2px 6px;
  border-radius: 4px;
}

.player-status {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
}

.player-status.answered {
  background: #dcfce7;
  color: #16a34a;
}

.player-status.thinking {
  background: #fef3c7;
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
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.modal-backdrop {
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
  margin-bottom: 24px;
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
  justify-content: space-between;
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

  .timer-section {
    order: 1;
  }

  .players-section {
    order: 3;
    justify-content: center;
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
