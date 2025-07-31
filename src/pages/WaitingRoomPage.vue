<template>
  <div class="waiting-room-page">
    <!-- Header Navigation -->
    <header class="header-nav">
      <div class="nav-container">
        <div class="logo-section">
          <div class="logo-icon">
            <svg width="24" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.2021 8V4H8.20215" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.2021 8H6.20215C5.09758 8 4.20215 8.89543 4.20215 10V18C4.20215 19.1046 5.09758 20 6.20215 20H18.2021C19.3067 20 20.2021 19.1046 20.2021 18V10C20.2021 8.89543 19.3067 8 18.2021 8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2.20215 14H4.20215" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.2021 14H22.2021" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.2021 13V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9.20215 13V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <span class="logo-text">Logo</span>
        </div>

        <nav class="nav-menu">
          <a href="#" class="nav-link">Trang chủ</a>
          <a href="#" class="nav-link">Giới thiệu</a>
          <a href="#" class="nav-link">Thử thách</a>
          <a href="#" class="nav-link">Bạn bè</a>
        </nav>

        <div class="user-section">
          <div class="user-stats">
            <div class="stat-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_154_988)">
                  <path d="M4.00163 6.00008H3.00163C2.5596 6.00008 2.13568 5.82449 1.82312 5.51193C1.51056 5.19937 1.33496 4.77544 1.33496 4.33341C1.33496 3.89139 1.51056 3.46746 1.82312 3.1549C2.13568 2.84234 2.5596 2.66675 3.00163 2.66675H4.00163" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.002 6.00008H13.002C13.444 6.00008 13.8679 5.82449 14.1805 5.51193C14.493 5.19937 14.6686 4.77544 14.6686 4.33341C14.6686 3.89139 14.493 3.46746 14.1805 3.1549C13.8679 2.84234 13.444 2.66675 13.002 2.66675H12.002" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.66895 14.6667H13.3356" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.66895 9.77344V11.3334C6.66895 11.7001 6.35561 11.9868 6.02228 12.1401C5.23561 12.5001 4.66895 13.4934 4.66895 14.6668" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.33496 9.77344V11.3334C9.33496 11.7001 9.64829 11.9868 9.98163 12.1401C10.7683 12.5001 11.335 13.4934 11.335 14.6668" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.002 1.33325H4.00195V5.99992C4.00195 7.06078 4.42338 8.0782 5.17353 8.82835C5.92367 9.57849 6.94109 9.99992 8.00195 9.99992C9.06282 9.99992 10.0802 9.57849 10.8304 8.82835C11.5805 8.0782 12.002 7.06078 12.002 5.99992V1.33325Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span class="stat-text"># 45</span>
            </div>
            <div class="stat-item">
              <span class="stat-number correct">523</span>
              <span class="stat-text">đúng</span>
            </div>
            <div class="stat-item">
              <span class="stat-text">Streak:</span>
              <span class="stat-number streak">7</span>
            </div>
          </div>

          <div class="user-profile">
            <div class="user-avatar">ND</div>
            <span class="user-name">Người dùng</span>
          </div>

          <button class="logout-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.00195 14H3.33529C2.98166 14 2.64253 13.8595 2.39248 13.6095C2.14243 13.3594 2.00195 13.0203 2.00195 12.6667V3.33333C2.00195 2.97971 2.14243 2.64057 2.39248 2.39052C2.64253 2.14048 2.98166 2 3.33529 2H6.00195" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.6689 11.3334L14.0023 8.00008L10.6689 4.66675" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.002 8H6.00195" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
      <div class="content-container">
        <!-- Room Header -->
        <div class="room-header">
          <h1 class="room-title">🏠 {{ roomName }}</h1>
          <h2 class="room-code">{{ roomCode }}</h2>
          
          <div class="room-stats">
            <div class="room-stat">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_154_864)">
                  <path d="M4.00065 6.00008H3.00065C2.55862 6.00008 2.1347 5.82449 1.82214 5.51193C1.50958 5.19937 1.33398 4.77544 1.33398 4.33341C1.33398 3.89139 1.50958 3.46746 1.82214 3.1549C2.1347 2.84234 2.55862 2.66675 3.00065 2.66675H4.00065" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.001 6.00008H13.001C13.443 6.00008 13.8669 5.82449 14.1795 5.51193C14.492 5.19937 14.6676 4.77544 14.6676 4.33341C14.6676 3.89139 14.492 3.46746 14.1795 3.1549C13.8669 2.84234 13.443 2.66675 13.001 2.66675H12.001" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.66797 14.6667H13.3346" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6.66797 9.77344V11.3334C6.66797 11.7001 6.35464 11.9868 6.0213 12.1401C5.23464 12.5001 4.66797 13.4934 4.66797 14.6668" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.33398 9.77344V11.3334C9.33398 11.7001 9.64732 11.9868 9.98065 12.1401C10.7673 12.5001 11.334 13.4934 11.334 14.6668" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.001 1.33325H4.00098V5.99992C4.00098 7.06078 4.4224 8.0782 5.17255 8.82835C5.9227 9.57849 6.94011 9.99992 8.00098 9.99992C9.06184 9.99992 10.0793 9.57849 10.8294 8.82835C11.5795 8.0782 12.001 7.06078 12.001 5.99992V1.33325Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span>10 câu hỏi</span>
            </div>
            
            <div class="room-stat">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_154_875)">
                  <path d="M7.99967 14.6666C11.6816 14.6666 14.6663 11.6818 14.6663 7.99992C14.6663 4.31802 11.6816 1.33325 7.99967 1.33325C4.31778 1.33325 1.33301 4.31802 1.33301 7.99992C1.33301 11.6818 4.31778 14.6666 7.99967 14.6666Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 4V8L10.6667 9.33333" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <span>20s mỗi câu</span>
            </div>
            
            <div class="room-stat">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6663 14V12.6667C10.6663 11.9594 10.3854 11.2811 9.88529 10.781C9.3852 10.281 8.70692 10 7.99967 10H3.99967C3.29243 10 2.61415 10.281 2.11406 10.781C1.61396 11.2811 1.33301 11.9594 1.33301 12.6667V14" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.99967 7.33333C7.47243 7.33333 8.66634 6.13943 8.66634 4.66667C8.66634 3.19391 7.47243 2 5.99967 2C4.52692 2 3.33301 3.19391 3.33301 4.66667C3.33301 6.13943 4.52692 7.33333 5.99967 7.33333Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.667 14V12.6667C14.6666 12.0758 14.4699 11.5019 14.1079 11.0349C13.7459 10.5679 13.2391 10.2344 12.667 10.0867" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.667 2.08667C11.2406 2.23354 11.749 2.56714 12.1121 3.03488C12.4752 3.50262 12.6722 4.07789 12.6722 4.67C12.6722 5.26212 12.4752 5.83739 12.1121 6.30513C11.749 6.77287 11.2406 7.10647 10.667 7.25334" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Tối đa 4 người</span>
            </div>
          </div>
        </div>

        <!-- Content Grid -->
        <div class="content-grid">
          <!-- Participants Section -->
          <div class="participants-section">
            <div class="section-header">
              <div class="section-title-container">
                <svg width="22" height="22" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.2708 20.05V18.2167C15.2708 17.2443 14.8845 16.3116 14.1969 15.624C13.5093 14.9364 12.5766 14.55 11.6042 14.55H6.10417C5.13171 14.55 4.19908 14.9364 3.51144 15.624C2.82381 16.3116 2.4375 17.2443 2.4375 18.2167V20.05" stroke="#020817" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.85417 10.8834C10.8792 10.8834 12.5208 9.24176 12.5208 7.21672C12.5208 5.19167 10.8792 3.55005 8.85417 3.55005C6.82912 3.55005 5.1875 5.19167 5.1875 7.21672C5.1875 9.24176 6.82912 10.8834 8.85417 10.8834Z" stroke="#020817" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.7715 20.05V18.2167C20.7709 17.4043 20.5005 16.6151 20.0027 15.973C19.505 15.3309 18.8081 14.8723 18.0215 14.6692" stroke="#020817" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.2715 3.66919C16.0602 3.87113 16.7593 4.32983 17.2585 4.97297C17.7577 5.61612 18.0287 6.40712 18.0287 7.22127C18.0287 8.03543 17.7577 8.82643 17.2585 9.46957C16.7593 10.1127 16.0602 10.5714 15.2715 10.7734" stroke="#020817" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h3 class="section-title">Người tham gia (1/4)</h3>
              </div>
              <div class="status-badge waiting">🟡 Chờ</div>
            </div>

            <!-- Participant Card -->
            <div class="participant-card">
              <div class="participant-avatar">TH</div>
              <div class="participant-info">
                <div class="participant-name-row">
                  <span class="participant-name">NGười Dùng</span>
                  <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_154_915)">
                      <path d="M8.31245 2.17745C8.34122 2.12518 8.3835 2.0816 8.43486 2.05125C8.48622 2.02089 8.54479 2.00488 8.60445 2.00488C8.66411 2.00488 8.72268 2.02089 8.77404 2.05125C8.8254 2.0816 8.86767 2.12518 8.89645 2.17745L10.8644 5.91345C10.9114 5.99995 10.9769 6.075 11.0563 6.13319C11.1356 6.19138 11.2269 6.23128 11.3235 6.25002C11.4201 6.26876 11.5197 6.26587 11.6151 6.24156C11.7104 6.21726 11.7992 6.17214 11.8751 6.10945L14.7264 3.66678C14.7812 3.62226 14.8486 3.59626 14.9191 3.59251C14.9895 3.58877 15.0594 3.60748 15.1185 3.64594C15.1777 3.68441 15.2231 3.74065 15.2482 3.80657C15.2734 3.87249 15.2769 3.94469 15.2584 4.01278L13.3691 10.8434C13.3305 10.9832 13.2475 11.1066 13.1325 11.1949C13.0174 11.2832 12.8768 11.3316 12.7318 11.3328H4.47778C4.33267 11.3318 4.19186 11.2834 4.07671 11.1951C3.96156 11.1068 3.87838 10.9833 3.83978 10.8434L1.95112 4.01345C1.93262 3.94536 1.9362 3.87316 1.96134 3.80724C1.98649 3.74132 2.0319 3.68508 2.09105 3.64661C2.1502 3.60814 2.22002 3.58944 2.29048 3.59318C2.36093 3.59692 2.42838 3.62293 2.48312 3.66745L5.33378 6.11011C5.40965 6.17281 5.49845 6.21793 5.59382 6.24223C5.6892 6.26654 5.78876 6.26942 5.88538 6.25069C5.982 6.23195 6.07327 6.19205 6.15264 6.13386C6.23202 6.07567 6.29752 6.00062 6.34445 5.91411L8.31245 2.17745Z" stroke="#EAB308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3.9375 14H13.2708" stroke="#EAB308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                  <div class="badge">Bạn</div>
                </div>
                <div class="owner-badge">
                  <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_154_921)">
                      <path d="M6.38522 2.03323C6.4068 1.99403 6.4385 1.96135 6.47702 1.93858C6.51555 1.91582 6.55947 1.90381 6.60422 1.90381C6.64896 1.90381 6.69289 1.91582 6.73141 1.93858C6.76993 1.96135 6.80163 1.99403 6.82322 2.03323L8.29922 4.83523C8.33441 4.90011 8.38354 4.9564 8.44307 5.00004C8.5026 5.04368 8.57105 5.07361 8.64352 5.08766C8.71598 5.10171 8.79066 5.09955 8.86218 5.08132C8.93371 5.06309 9.00032 5.02925 9.05722 4.98223L11.1957 3.15023C11.2368 3.11684 11.2874 3.09734 11.3402 3.09453C11.393 3.09172 11.4454 3.10575 11.4898 3.1346C11.5341 3.16345 11.5682 3.20564 11.587 3.25508C11.6059 3.30452 11.6086 3.35867 11.5947 3.40973L10.1777 8.53273C10.1488 8.63756 10.0865 8.73011 10.0002 8.79634C9.91396 8.86256 9.80846 8.89886 9.69972 8.89973H3.50922C3.40038 8.89897 3.29477 8.86272 3.20841 8.79649C3.12205 8.73025 3.05966 8.63765 3.03072 8.53273L1.61422 3.41023C1.60034 3.35917 1.60303 3.30502 1.62189 3.25558C1.64075 3.20614 1.67481 3.16395 1.71917 3.1351C1.76353 3.10625 1.81589 3.09222 1.86874 3.09503C1.92158 3.09784 1.97216 3.11734 2.01322 3.15073L4.15122 4.98273C4.20812 5.02975 4.27472 5.06359 4.34625 5.08182C4.41778 5.10005 4.49245 5.10221 4.56492 5.08816C4.63738 5.07411 4.70583 5.04418 4.76536 5.00054C4.82489 4.9569 4.87402 4.90061 4.90922 4.83573L6.38522 2.03323Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3.10449 10.9001H10.1045" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
                  <span>Chủ phòng</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side Panel -->
          <div class="right-panel">
            <!-- Room Info -->
            <div class="room-info-card">
              <h3 class="card-title">Thông tin phòng</h3>
              
              <div class="info-list">
                <div class="info-item">
                  <span class="info-label">Tổng số câu:</span>
                  <span class="info-value">10</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Thời gian/câu:</span>
                  <span class="info-value">20s</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Người chơi:</span>
                  <span class="info-value">1/4</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Chủ phòng:</span>
                  <span class="info-value">thong</span>
                </div>
              </div>
            </div>

            <!-- Start Game Section -->
            <div class="start-game-card">
              <h3 class="card-title">Bắt đầu</h3>
              
              <button class="start-btn" :disabled="!canStartGame">
                <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.7998 2.6001L14.1331 8.6001L4.7998 14.6001V2.6001Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Bắt đầu thử thách</span>
              </button>
              
              <p class="start-requirement">Cần ít nhất 2 người để bắt đầu</p>
            </div>

            <!-- Leave Room -->
            <div class="leave-room-card">
              <button class="leave-btn" @click="leaveRoom">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10.667 11.3334L14.0003 8.00008L10.667 4.66675" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14 8H6" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Rời khỏi phòng</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Room data
const participants = ref(1)
const maxParticipants = ref(4)
const totalQuestions = ref(10)
const timePerQuestion = ref(20)
const roomOwner = ref('thong')
const roomCode = ref('ABC')
const roomName = ref('Phòng chờ')

// Initialize room data from query params
onMounted(() => {
  if (route.query.roomCode) {
    roomCode.value = route.query.roomCode
  }
  if (route.query.roomName) {
    roomName.value = route.query.roomName
  }
  if (route.query.questions) {
    totalQuestions.value = parseInt(route.query.questions)
  }
  if (route.query.timePerQuestion) {
    timePerQuestion.value = parseInt(route.query.timePerQuestion)
  }
  if (route.query.maxPlayers) {
    maxParticipants.value = parseInt(route.query.maxPlayers)
  }
})

// Computed properties
const canStartGame = computed(() => participants.value >= 2)

// Methods
const leaveRoom = () => {
  // Handle leaving the room
  router.push('/dashboard/challenges')
}

const startGame = () => {
  if (canStartGame.value) {
    // Handle starting the game
    console.log('Starting game...')
  }
}
</script>

<style scoped>
.waiting-room-page {
  min-height: 100vh;
  background: linear-gradient(90deg, #EFF6FF 100%, #F5F3FF 0%);
  font-family: 'Inter', -apple-system, 'Roboto', 'Helvetica', sans-serif;
}

/* Header Navigation */
.header-nav {
  background: #fff;
  border-bottom: 1px solid #E5E7EB;
  padding: 16px 24px;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  background: #6D28D9;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-icon svg path {
  stroke: white;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
}

.nav-menu {
  display: flex;
  gap: 24px;
}

.nav-link {
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #6D28D9;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-stats {
  display: flex;
  gap: 16px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.stat-text {
  color: #4B5563;
  font-size: 14px;
}

.stat-number {
  font-size: 14px;
  font-weight: 500;
}

.stat-number.correct {
  color: #16A34A;
}

.stat-number.streak {
  color: #2563EB;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #6D28D9;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
}

.user-name {
  color: #111827;
  font-size: 16px;
  font-weight: 500;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid #E2E8F0;
  border-radius: 6px;
  background: #fff;
  color: #000;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background: #F9FAFB;
}

/* Main Content */
.main-content {
  padding: 32px 16px;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Room Header */
.room-header {
  text-align: center;
  margin-bottom: 32px;
}

.room-title {
  font-size: 30px;
  font-weight: 400;
  color: #111827;
  margin: 0 0 10px 0;
}

.room-code {
  font-size: 20px;
  font-weight: 400;
  color: #374151;
  margin: 0 0 20px 0;
}

.room-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
}

.room-stat {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #4B5563;
  font-size: 14px;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 32px;
  align-items: start;
}

/* Participants Section */
.participants-section {
  background: #fff;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 24px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.section-title-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-title {
  font-size: 24px;
  font-weight: 400;
  color: #020817;
  margin: 0;
}

.status-badge {
  padding: 3px 10px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 400;
}

.status-badge.waiting {
  background: #F2F0FF;
  color: #8457FF;
}

/* Participant Card */
.participant-card {
  background: #F0FDF4;
  border: 1px solid #86EFAC;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.participant-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(90deg, #7C3AED 100%, #3B82F6 0%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  flex-shrink: 0;
}

.participant-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.participant-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.participant-name {
  color: #111827;
  font-size: 16px;
  font-weight: 400;
}

.badge {
  padding: 3px 10px;
  border: 1px solid #E2E8F0;
  border-radius: 9999px;
  font-size: 12px;
  color: #020817;
}

.owner-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #8457FF;
  color: white;
  padding: 2px 10px;
  border-radius: 9999px;
  font-size: 12px;
  width: fit-content;
}

/* Right Panel */
.right-panel {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Card Styles */
.room-info-card,
.start-game-card,
.leave-room-card {
  background: #fff;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 24px;
}

.card-title {
  font-size: 24px;
  font-weight: 400;
  color: #020817;
  margin: 0 0 24px 0;
}

/* Room Info */
.info-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-label {
  color: #4B5563;
  font-size: 16px;
  font-weight: 400;
}

.info-value {
  color: #020817;
  font-size: 16px;
  font-weight: 400;
}

/* Start Game */
.start-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #2563EB;
  color: white;
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 12px;
}

.start-btn:hover:not(:disabled) {
  background: #1D4ED8;
}

.start-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.start-requirement {
  color: #6B7280;
  font-size: 14px;
  text-align: center;
  margin: 0;
}

/* Leave Room */
.leave-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #fff;
  border: 1px solid #FCA5A5;
  color: #DC2626;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
}

.leave-btn:hover {
  background: #FEF2F2;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .nav-container {
    flex-direction: column;
    gap: 16px;
  }

  .nav-menu {
    order: -1;
  }

  .user-section {
    flex-direction: column;
    gap: 12px;
  }

  .user-stats {
    justify-content: center;
  }

  .content-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .right-panel {
    order: -1;
  }
}

@media (max-width: 768px) {
  .nav-container {
    padding: 0;
  }

  .nav-menu {
    display: none;
  }

  .user-stats {
    flex-direction: column;
    gap: 8px;
  }

  .room-stats {
    flex-direction: column;
    gap: 16px;
  }

  .participant-name-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
}

@media (max-width: 480px) {
  .main-content {
    padding: 16px 8px;
  }

  .participants-section,
  .room-info-card,
  .start-game-card,
  .leave-room-card {
    padding: 16px;
  }

  .participant-card {
    flex-direction: column;
    text-align: center;
  }

  .participant-info {
    align-items: center;
  }
}
</style>
