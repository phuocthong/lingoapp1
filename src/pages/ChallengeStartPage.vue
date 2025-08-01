<template>
  <div class="challenge-start-page">
    <main class="main-content">
      <!-- Game Info Header -->
      <div class="game-info-header">
        <div class="info-badges">
          <div class="info-badge">
            <span>🏆 {{ totalQuestions }} câu hỏi</span>
          </div>
          <div class="info-badge">
            <span>⏱️ {{ timePerQuestion }} s mỗi câu</span>
          </div>
          <div class="info-badge">
            <span>👥 {{ participantCount }} thách thủ</span>
          </div>
        </div>
      </div>

      <!-- Main Countdown Section -->
      <div class="countdown-section">
        <h1 class="countdown-title">BẮT ĐẦU TRONG...</h1>
        
        <!-- Countdown Timer -->
        <div class="timer-container">
          <div class="timer-circle">
            <svg class="timer-svg" viewBox="0 0 256 256">
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="#F3F4F6"
                stroke-width="8"
                fill="none"
              />
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="#2563EB"
                stroke-width="8"
                fill="none"
                :stroke-dasharray="circleCircumference"
                :stroke-dashoffset="strokeDashoffset"
                class="timer-progress"
              />
            </svg>
            <div class="timer-content">
              <div class="countdown-number">{{ countdownValue }}</div>
              <div class="countdown-unit">Giây</div>
            </div>
          </div>

          <!-- Ripple Effects -->
          <div class="ripple-container">
            <div class="ripple ripple-1"></div>
            <div class="ripple ripple-2"></div>
          </div>
        </div>

        <!-- Game Stats -->
        <div class="game-stats">
          <div class="stat-card">
            <svg class="stat-icon" viewBox="0 0 33 32">
              <path d="M8.59994 12H6.59993C5.71588 12 4.86803 11.6488 4.24291 11.0237C3.61779 10.3985 3.2666 9.5507 3.2666 8.66665C3.2666 7.78259 3.61779 6.93474 4.24291 6.30962C4.86803 5.6845 5.71588 5.33331 6.59993 5.33331H8.59994" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.5996 12H26.5996C27.4837 12 28.3315 11.6488 28.9566 11.0237C29.5818 10.3985 29.9329 9.5507 29.9329 8.66665C29.9329 7.78259 29.5818 6.93474 28.9566 6.30962C28.3315 5.6845 27.4837 5.33331 26.5996 5.33331H24.5996" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.93262 29.3333H27.266" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.9326 19.5467V22.6667C13.9326 23.4 13.306 23.9734 12.6393 24.28C11.066 25 9.93262 26.9867 9.93262 29.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.2666 19.5467V22.6667C19.2666 23.4 19.8933 23.9734 20.5599 24.28C22.1333 25 23.2666 26.9867 23.2666 29.3334" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.5996 2.66669H8.59961V12C8.59961 14.1218 9.44246 16.1566 10.9428 17.6569C12.443 19.1572 14.4779 20 16.5996 20C18.7213 20 20.7562 19.1572 22.2565 17.6569C23.7568 16.1566 24.5996 14.1218 24.5996 12V2.66669Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="stat-label">Câu hỏi</div>
            <div class="stat-value">{{ totalQuestions }}</div>
          </div>

          <div class="stat-card">
            <svg class="stat-icon" viewBox="0 0 33 32">
              <path d="M16.5999 29.3334C23.9637 29.3334 29.9333 23.3638 29.9333 16C29.9333 8.63622 23.9637 2.66669 16.5999 2.66669C9.23614 2.66669 3.2666 8.63622 3.2666 16C3.2666 23.3638 9.23614 29.3334 16.5999 29.3334Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M16.5996 8V16L21.9329 18.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="stat-label">Thời gian/câu</div>
            <div class="stat-value">{{ timePerQuestion }} s</div>
          </div>

          <div class="stat-card">
            <svg class="stat-icon" viewBox="0 0 33 32">
              <path d="M21.9333 28V25.3333C21.9333 23.9188 21.3714 22.5623 20.3712 21.5621C19.371 20.5619 18.0144 20 16.5999 20H8.59993C7.18545 20 5.82889 20.5619 4.8287 21.5621C3.8285 22.5623 3.2666 23.9188 3.2666 25.3333V28" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12.5999 14.6667C15.5455 14.6667 17.9333 12.2789 17.9333 9.33333C17.9333 6.38781 15.5455 4 12.5999 4C9.65442 4 7.2666 6.38781 7.2666 9.33333C7.2666 12.2789 9.65442 14.6667 12.5999 14.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29.9326 28V25.3333C29.9317 24.1516 29.5384 23.0037 28.8144 22.0698C28.0905 21.1358 27.0768 20.4688 25.9326 20.1733" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.9326 4.17334C23.0798 4.46707 24.0967 5.13427 24.8228 6.06975C25.5489 7.00523 25.9431 8.15578 25.9431 9.34001C25.9431 10.5242 25.9489 11.6748 24.8228 12.6103C24.0967 13.5457 23.0798 14.2129 21.9326 14.5067" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="stat-label">Thách thủ</div>
            <div class="stat-value">{{ participantCount }}</div>
          </div>
        </div>
      </div>

      <!-- Progress Indicators -->
      <div class="progress-section">
        <div class="progress-dots">
          <div 
            v-for="(step, index) in progressSteps" 
            :key="index"
            class="progress-dot"
            :class="step.status"
          ></div>
        </div>
        <div class="progress-text">{{ progressText }}</div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Game data
const totalQuestions = ref(10)
const timePerQuestion = ref(20)
const participantCount = ref(2)

// Countdown timer
const countdownValue = ref(3)
const initialCountdown = ref(3)
const countdownInterval = ref(null)

// Progress steps
const progressSteps = ref([
  { status: 'completed' },
  { status: 'completed' },
  { status: 'completed' },
  { status: 'active' },
  { status: 'pending' }
])

// Computed properties
const circleCircumference = computed(() => 2 * Math.PI * 120)

const strokeDashoffset = computed(() => {
  const progress = countdownValue.value / initialCountdown.value
  return circleCircumference.value * (1 - progress)
})

const progressText = computed(() => {
  if (countdownValue.value > 0) {
    return 'Đếm ngược...'
  }
  return 'Bắt đầu!'
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

// Initialize from route params
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
  }
  if (route.query.participants) {
    participantCount.value = parseInt(route.query.participants)
  }

  // Start countdown
  startCountdown()
})

onUnmounted(() => {
  if (countdownInterval.value) {
    clearInterval(countdownInterval.value)
  }
})

// Methods
const startCountdown = () => {
  countdownInterval.value = setInterval(() => {
    if (countdownValue.value > 0) {
      countdownValue.value--
    } else {
      clearInterval(countdownInterval.value)
      // Navigate to battle page after countdown
      setTimeout(() => {
        router.push({
          path: '/dashboard/challenge-battle',
          query: {
            questions: totalQuestions.value,
            timePerQuestion: timePerQuestion.value,
            participants: participantCount.value
          }
        })
      }, 1000)
    }
  }, 1000)
}
</script>

<style scoped>
.challenge-start-page {
  min-height: 100vh;
  background: #fff;
  font-family: 'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif;
  display: flex;
  flex-direction: column;
  contain: layout style;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 16px;
  gap: 48px;
}

/* Game Info Header */
.game-info-header {
  text-align: center;
}

.info-badges {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.info-badge {
  color: #6b7280;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

/* Countdown Section */
.countdown-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
}

.countdown-title {
  color: #111827;
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
  margin: 0;
  text-align: center;
}

/* Timer */
.timer-container {
  position: relative;
  width: 256px;
  height: 256px;
}

.timer-circle {
  position: relative;
  width: 100%;
  height: 100%;
}

.timer-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.timer-progress {
  transition: stroke-dashoffset 1s linear;
}

.timer-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.countdown-number {
  color: #2563eb;
  font-size: 96px;
  font-weight: 700;
  line-height: 96px;
  margin: 0;
}

.countdown-unit {
  color: #000;
  font-size: 40px;
  font-weight: 700;
  margin-top: 8px;
}

/* Ripple Effects */
.ripple-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  border: 4px solid;
  animation: ripple 2s infinite;
}

.ripple-1 {
  width: 506px;
  height: 506px;
  border-color: #ef4444;
  opacity: 0.0067;
  top: -253px;
  left: -253px;
}

.ripple-2 {
  width: 417px;
  height: 417px;
  border-color: #f87171;
  opacity: 0.0275;
  top: -208px;
  left: -208px;
  animation-delay: 0.5s;
}

@keyframes ripple {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}

/* Game Stats */
.game-stats {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  flex-wrap: wrap;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  height: 88px;
}

.stat-icon {
  width: 32px;
  height: 32px;
  stroke: #000;
  fill: none;
  margin-bottom: 8px;
}

.stat-label {
  color: #4b5563;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin-bottom: 8px;
}

.stat-value {
  color: #000;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
}

/* Progress Section */
.progress-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.progress-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
}

.progress-dot {
  border-radius: 50%;
}

.progress-dot.completed {
  width: 12px;
  height: 12px;
  background: #22c55e;
}

.progress-dot.active {
  width: 15px;
  height: 15px;
  background: #6d28d9;
}

.progress-dot.pending {
  width: 12px;
  height: 12px;
  background: #d1d5db;
}

.progress-text {
  color: #6b7280;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-transform: capitalize;
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    padding: 32px 16px;
    gap: 32px;
  }

  .countdown-title {
    font-size: 28px;
    line-height: 32px;
  }

  .timer-container {
    width: 200px;
    height: 200px;
  }

  .countdown-number {
    font-size: 72px;
    line-height: 72px;
  }

  .countdown-unit {
    font-size: 32px;
  }

  .game-stats {
    gap: 24px;
  }

  .info-badges {
    flex-direction: column;
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 24px 16px;
    gap: 24px;
  }

  .countdown-title {
    font-size: 24px;
    line-height: 28px;
  }

  .timer-container {
    width: 160px;
    height: 160px;
  }

  .countdown-number {
    font-size: 56px;
    line-height: 56px;
  }

  .countdown-unit {
    font-size: 24px;
  }

  .game-stats {
    flex-direction: column;
    gap: 16px;
  }

  .stat-card {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px;
    background: #f9fafb;
    border-radius: 8px;
  }

  .stat-icon {
    margin-bottom: 0;
  }
}
</style>
