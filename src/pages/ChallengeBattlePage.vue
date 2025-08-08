<template>
  <div class="challenge-battle-page">
    <!-- Floating Particles Background -->
    <div class="particles-background">
      <div class="particle" v-for="n in 15" :key="n"></div>
    </div>

    <!-- Game Battle Interface - chỉ hiện khi KHÔNG game over -->
    <template v-if="!gameOver">
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
                    <div v-if="player.streak > 1" class="streak-indicator">
                      🔥{{ player.streak }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>

    <!-- Full Screen Game Results - New Figma Design -->
    <div v-if="gameOver" class="figma-results-page">
      <!-- Background with gradient -->
      <div class="figma-background">
        <!-- Header Section -->
        <div class="figma-header">
          <!-- Decorative icons -->
          <div class="header-decorations">
            <svg class="decoration-left" width="65" height="64" viewBox="0 0 65 64" fill="none">
              <path d="M15.6665 30.1333L5.5332 58.6667L34.0665 48.56" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.8672 8H10.8939" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M58.8672 21.3333H58.8939" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M40.2002 5.33333H40.2269" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M58.8672 53.3333H58.8939" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg class="decoration-right" width="65" height="64" viewBox="0 0 65 64" fill="none">
              <path d="M26.6984 41.3333L32.201 32L37.701 41.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M53.5332 8V18.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M58.8669 13.3333H48.2002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.8672 45.3333V50.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.5335 48H8.2002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          
          <h1 class="figma-title">🏆 KẾT QUẢ THÁCH ĐẤU</h1>
          
          <!-- Game info stats -->
          <div class="game-info">
            <span class="info-item">📝 {{ totalQuestions }} câu hỏi</span>
            <span class="info-item">👥 {{ players.length }} ngư���i chơi</span>
            <span class="info-item">⏱️ 30 s mỗi câu</span>
          </div>
        </div>

        <!-- Main Content Grid -->
        <div class="figma-content">
          <!-- Left Column - Personal Results -->
          <div class="personal-results-card">
            <div class="card-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                <circle cx="12" cy="12" r="6" stroke="white" stroke-width="2"/>
                <circle cx="12" cy="12" r="2" stroke="white" stroke-width="2"/>
              </svg>
              <h3>Kết quả của bạn</h3>
            </div>
            
            <div class="champion-section">
              <svg class="crown-icon" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M15.578 4.65464L20.682 12.1266C20.7759 12.2997 21.6002 12.7998 21.6002 12.7998L28.406 7.6333L25.6914 21.9866H7.90869L2.85536 8.32664L9.62069 12.52L15.578 4.65464Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.8291 28.3H25.4958" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="champion-badge">🥇 CHAMPION</div>
              <div class="champion-score">{{ currentPlayer.score }} / {{ totalQuestions }} điểm</div>
              <div class="champion-accuracy">{{ getAccuracyRate(currentPlayer) }} % chính xác</div>
            </div>
            
            <div class="achievement-message">
              🎉 CHAMPION! Bạn đã giành chiến thắng!
            </div>
            
            <div class="personal-stats">
              <div class="stat-box high-score">
                <div class="stat-number">{{ currentPlayer.score }}</div>
                <div class="stat-label">Điểm cao nhất</div>
              </div>
              <div class="stat-box avg-score">
                <div class="stat-number">{{ (currentPlayer.score / totalQuestions * 10).toFixed(1) }}</div>
                <div class="stat-label">Điểm TB</div>
              </div>
            </div>
            
            <div class="action-buttons">
              <button class="btn-primary" @click="playAgain">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10.7627 14.9V9.56663H6.7627V14.9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.7627 7.56663L8.7627 2.23364L14.7627 7.56663V13.5666C14.7627 13.9203 14.6222 14.2594 14.3722 14.5094C14.1221 14.7595 13.783 14.9 13.4294 14.9H4.09603C3.74241 14.9 3.40327 14.7595 3.15322 14.5094C2.90317 14.2594 2.7627 13.9203 2.7627 13.5666V7.56663Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Quay về sảnh
              </button>
              <button class="btn-secondary" @click="exitGame">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M12.7627 6.23328C13.8673 6.23328 14.7627 5.33785 14.7627 4.23328C14.7627 3.12871 13.8673 2.23328 12.7627 2.23328C11.6581 2.23328 10.7627 3.12871 10.7627 4.23328C10.7627 5.33785 11.6581 6.23328 12.7627 6.23328Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.48926 9.90662L11.0426 12.5599" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.0359 5.23999L6.48926 7.89332" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Chia sẻ kết quả
              </button>
            </div>
          </div>

          <!-- Center Column - Trophy Podium -->
          <div class="trophy-podium">
            <h2 class="podium-title">🏆 LINGO VINH DANH</h2>
            
            <div class="podium-container">
              <!-- Winner on top -->
              <div class="podium-winner">
                <svg class="trophy-large" width="70" height="70" viewBox="0 0 70 70" fill="none">
                  <path d="M34.2227 9.82586L45.3877 26.1709C45.593 26.5493 47.3961 27.6434 47.3961 27.6434L62.2839 16.3417L56.3456 47.7396H17.446L6.39185 17.8584L21.191 27.0313L34.2227 9.82586Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.083 61.55H55.9163" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="winner-avatar" :style="{ background: getPlayerGradient(winner.id) }">
                  {{ winner.initials || winner.name.charAt(0) }}
                </div>
                <div class="winner-name">{{ winner.name }}</div>
                <div class="winner-score">{{ winner.score }}</div>
                <div class="winner-podium-base">
                  <div class="podium-rank">1</div>
                </div>
              </div>

              <!-- Second place -->
              <div class="podium-second" v-if="sortedPlayers[1]">
                <svg class="trophy-medium" width="62" height="62" viewBox="0 0 62 62" fill="none">
                  <path d="M18.9731 39.25L7.21893 18.945C6.71208 18.0689 11.7139 7.73335 11.7139 7.73335L50.9806 7.73335L55.1139 13.2617L43.7214 39.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="31.3473" cy="44.4167" r="12.9167" stroke="white" stroke-width="2"/>
                  <path d="M31.3473 47V41.8334H30.0557" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="second-avatar" :style="{ background: getPlayerGradient(sortedPlayers[1].id) }">
                  {{ sortedPlayers[1].initials || sortedPlayers[1].name.charAt(0) }}
                </div>
                <div class="second-name">{{ sortedPlayers[1].name }}</div>
                <div class="second-score">{{ sortedPlayers[1].score }}</div>
                <div class="second-podium-base">
                  <div class="podium-rank">2</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column - Full Leaderboard -->
          <div class="full-leaderboard">
            <div class="leaderboard-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22.2373 7.30002L13.7373 15.8L8.7373 10.8L2.2373 17.3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.2373 7.30002H22.2373V13.3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h3>Bảng xếp hạng đầy đủ</h3>
            </div>
            
            <div class="leaderboard-list">
              <div 
                v-for="(player, index) in sortedPlayers" 
                :key="player.id"
                class="leaderboard-item"
                :class="{ 'is-current-user': player.isCurrentUser }"
              >
                <div class="player-rank">
                  <svg v-if="index === 0" class="rank-crown" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M15.6532 4.45468L20.7572 11.9267L28.4812 7.43335L25.7665 21.7867H7.98389L2.93055 8.12668L9.69588 12.32L15.6532 4.45468Z" stroke="white" stroke-width="2"/>
                    <path d="M6.9043 28.1H25.571" stroke="white" stroke-width="2"/>
                  </svg>
                  <svg v-else-if="index === 1" class="rank-trophy" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M9.8509 20.7L3.78424 10.22L8.23757 3.3667H24.2376L28.6909 10.22L22.6242 20.7" stroke="white" stroke-width="2"/>
                    <circle cx="16.237" cy="23.3667" r="6.6667" stroke="white" stroke-width="2"/>
                  </svg>
                </div>
                
                <div class="player-avatar-small" :style="{ background: getPlayerGradient(player.id) }">
                  {{ player.initials || player.name.charAt(0) }}
                </div>
                
                <div class="player-info">
                  <div class="player-name">
                    {{ player.name }}
                    <span v-if="player.isCurrentUser" class="you-badge">Bạn</span>
                  </div>
                  <div class="player-accuracy">{{ getAccuracyRate(player) }} % chính xác</div>
                </div>
                
                <div class="player-score">
                  <div class="score-value">{{ player.score }}</div>
                  <div class="score-unit">điểm</div>
                </div>
              </div>
            </div>
          </div>
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
  
  // Reset game state
  currentQuestion.value = 1
  timeLeft.value = timePerQuestion.value
  answered.value = false
  gameOver.value = false
  selectedAnswer.value = null
  correctAnswer.value = null

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

const viewLeaderboard = () => {
  // Restore body scroll
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
  
  router.push('/dashboard/leaderboard')
}

const getMotivationIcon = () => {
  const currentPlayerData = currentPlayer.value
  if (!currentPlayerData) return '🎯'

  const accuracy = getAccuracyRate(currentPlayerData)
  if (accuracy >= 90) return '🌟'
  if (accuracy >= 70) return '🎯'
  if (accuracy >= 50) return '💪'
  return '📚'
}

const getAccuracyRate = (player) => {
  if (!player || !totalQuestions.value) return 0
  // Giả sử mỗi câu đúng được 1 điểm, có thể có bonus
  // Để tính chính xác, ta giới hạn tối đa là số câu hỏi
  const correctAnswers = Math.min(player.score, totalQuestions.value)
  return Math.round((correctAnswers / totalQuestions.value) * 100)
}

const getMotivationTitle = () => {
  const currentPlayerData = currentPlayer.value
  if (!currentPlayerData) return 'Cố gắng lên!'

  const accuracy = getAccuracyRate(currentPlayerData)
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
  0%, 100% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% {
    transform: translateY(-10vh) scale(1);
    opacity: 0;
  }
}

.particle:nth-child(1) { left: 10%; }
.particle:nth-child(2) { left: 20%; }
.particle:nth-child(3) { left: 30%; }
.particle:nth-child(4) { left: 40%; }
.particle:nth-child(5) { left: 50%; }
.particle:nth-child(6) { left: 60%; }
.particle:nth-child(7) { left: 70%; }
.particle:nth-child(8) { left: 80%; }
.particle:nth-child(9) { left: 90%; }
.particle:nth-child(10) { left: 5%; }
.particle:nth-child(11) { left: 15%; }
.particle:nth-child(12) { left: 25%; }
.particle:nth-child(13) { left: 35%; }
.particle:nth-child(14) { left: 65%; }
.particle:nth-child(15) { left: 85%; }

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

.timer-circle.warning { color: #f59e0b; }
.timer-circle.critical { color: #ef4444; }
.timer-circle.pulse { animation: pulse 1s infinite; }

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.timer-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.timer-track { opacity: 0.2; }

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

.battle-arena {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 32px;
  position: relative;
  z-index: 10;
}

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
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.star.filled {
  background: #fbbf24;
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

.battle-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: start;
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

.answer-card:hover:not(:disabled) {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border-color: #667eea;
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

.answer-check, .answer-x {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  color: white;
}

.answer-text {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
  color: #2d3748;
  transition: color 0.3s ease;
}

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

.scoreboard-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 24px;
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
}

.rank-badge.rank-1 {
  background: linear-gradient(135deg, #f59e0b, #d97706);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
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

.status-dot.answered { background: #10b981; }
.status-dot.thinking { background: #f59e0b; }
.status-dot.waiting { background: #6b7280; }

.player-name {
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 4px;
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
}

/* Existing CSS for game interface... */
/* (keeping all the original CSS for the game interface) */

/* NEW FIGMA DESIGN CSS */
.figma-results-page {
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
  background: linear-gradient(90deg, #831843 0%, #581C87 33%, #312E81 100%);
  position: relative;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.figma-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.20) 0%, rgba(0, 0, 0, 0.00) 33%, rgba(124, 58, 237, 0.20) 100%);
  pointer-events: none;
}

.figma-header {
  text-align: center;
  position: relative;
  z-index: 2;
}

.header-decorations {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.decoration-left,
.decoration-right {
  width: 64px;
  height: 64px;
  stroke: white;
  opacity: 0.8;
}

.figma-title {
  font-size: 48px;
  font-weight: 400;
  color: white;
  margin: 0 0 16px;
  line-height: 1;
}

.game-info {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 16px;
}

.info-item {
  color: #D8B4FE;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.figma-content {
  display: grid;
  grid-template-columns: 324px 357px 400px;
  gap: 32px;
  justify-content: center;
  align-items: start;
  position: relative;
  z-index: 2;
}

/* Left Column - Personal Results */
.personal-results-card {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 24px;
}

.card-header h3 {
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: -0.5px;
  margin: 0;
}

.champion-section {
  background: linear-gradient(90deg, rgba(59, 130, 246, 0.20) 0%, rgba(124, 58, 237, 0.20) 100%);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 12px;
  padding: 24px 45px 26px;
  text-align: center;
  margin-bottom: 24px;
}

.champion-badge {
  color: white;
  font-size: 30px;
  font-weight: 400;
  line-height: 36px;
  margin: 8px 0;
}

.champion-score {
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  margin: 8px 0;
}

.champion-accuracy {
  color: #E9D5FF;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 8px 0;
}

.achievement-message {
  background: rgba(59, 130, 246, 0.20);
  border: 1px solid rgba(96, 165, 250, 0.30);
  border-radius: 8px;
  padding: 18px;
  text-align: center;
  color: #BFDBFE;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 24px;
}

.personal-stats {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.stat-box {
  flex: 1;
  border-radius: 8px;
  padding: 7px 0 13px;
  text-align: center;
}

.stat-box.high-score {
  background: rgba(234, 179, 8, 0.20);
  border: 1px solid rgba(250, 204, 21, 0.30);
}

.stat-box.avg-score {
  background: rgba(34, 197, 94, 0.20);
  border: 1px solid rgba(74, 222, 128, 0.30);
}

.stat-number {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 6px;
}

.stat-box.high-score .stat-number {
  color: #FEF08A;
}

.stat-box.avg-score .stat-number {
  color: #BBF7D0;
}

.stat-label {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}

.stat-box.high-score .stat-label {
  color: #FDE047;
}

.stat-box.avg-score .stat-label {
  color: #86EFAC;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.btn-primary {
  background: linear-gradient(90deg, #2563EB 0%, #6D28D9 100%);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 14px 54px;
  display: flex;
  align-items: center;
  gap: 11px;
  justify-content: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 28px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 6px;
  padding: 14px 55px;
  display: flex;
  align-items: center;
  gap: 13px;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

/* Center Column - Trophy Podium */
.trophy-podium {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.podium-title {
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.6px;
  margin: 0 0 24px;
}

.podium-container {
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 4px;
}

.podium-winner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.trophy-large {
  width: 70px;
  height: 70px;
  stroke: white;
  margin-bottom: 8px;
}

.winner-avatar {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(90deg, #EAB308 0%, #FACC15 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.50);
}

.winner-name {
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.winner-score {
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
}

.winner-podium-base {
  background: linear-gradient(90deg, #EAB308 0%, #FACC15 100%);
  border: 1px solid rgba(255, 255, 255, 0.30);
  border-radius: 8px 8px 0 0;
  padding: 55px 46px 50px 45px;
  width: 136px;
}

.podium-rank {
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
}

.podium-second {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
}

.trophy-medium {
  width: 62px;
  height: 62px;
  stroke: white;
}

.second-avatar {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: linear-gradient(90deg, #9CA3AF 0%, #D1D5DB 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}

.second-name {
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
}

.second-score {
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
}

.second-podium-base {
  background: linear-gradient(90deg, #9CA3AF 0%, #D1D5DB 100%);
  border: 1px solid rgba(255, 255, 255, 0.30);
  border-radius: 8px 8px 0 0;
  padding: 36px 45px 34px 46px;
  width: 136px;
}

/* Right Column - Full Leaderboard */
.full-leaderboard {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.leaderboard-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
}

.leaderboard-header h3 {
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.6px;
  margin: 0;
}

.leaderboard-list {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.leaderboard-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 8px;
  padding: 13px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.leaderboard-item.is-current-user {
  background: rgba(124, 58, 237, 0.20);
  border: 1px solid #C084FC;
  box-shadow: 0 0 0 0 #C084FC;
}

.player-rank {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rank-crown,
.rank-trophy {
  width: 32px;
  height: 32px;
  stroke: white;
}

.player-avatar-small {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.player-info {
  flex: 1;
}

.player-name {
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.you-badge {
  background: #6D28D9;
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  padding: 2px 11px 4px 10px;
  border-radius: 9999px;
  border: 1px solid rgba(0, 0, 0, 0.00);
}

.player-accuracy {
  color: #E9D5FF;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.player-score {
  text-align: right;
}

.score-value {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  margin-bottom: 4px;
}

.leaderboard-item.is-current-user .score-value {
  color: #FACC15;
}

.leaderboard-item:not(.is-current-user) .score-value {
  color: #D1D5DB;
}

.score-unit {
  color: #E9D5FF;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .figma-content {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .figma-title {
    font-size: 36px;
  }
  
  .game-info {
    flex-direction: column;
    gap: 8px;
  }
}

@media (max-width: 768px) {
  .figma-background {
    padding: 20px 16px;
    gap: 32px;
  }
  
  .figma-title {
    font-size: 28px;
  }
  
  .header-decorations {
    gap: 8px;
  }
  
  .decoration-left,
  .decoration-right {
    width: 48px;
    height: 48px;
  }
  
  .personal-stats {
    flex-direction: column;
    gap: 12px;
  }
  
  .podium-container {
    flex-direction: column;
    gap: 16px;
  }
  
  .winner-avatar {
    width: 70px;
    height: 70px;
    font-size: 16px;
  }
  
  .second-avatar {
    width: 50px;
    height: 50px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .figma-background {
    padding: 16px 12px;
    gap: 24px;
  }
  
  .figma-title {
    font-size: 24px;
  }
  
  .personal-results-card,
  .trophy-podium,
  .full-leaderboard {
    padding: 16px;
  }
  
  .action-buttons {
    gap: 12px;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 12px 24px;
    font-size: 14px;
  }
}
</style>
