<template>
  <q-page class="challenges-page">
    <div class="challenges-container">
      <!-- Header -->
      <div class="page-header">
        <h1 class="page-title">⚡ Phòng Thử thách EnglishBot</h1>
        <p class="page-description">
          Tham gia hoặc tạo phòng để thử thách kiến thức tiếng Anh với bạn bè và người chơi khác
        </p>
      </div>

      <div class="content-grid">
        <!-- Left Side - Create Room -->
        <div class="create-room-section">
          <q-card class="create-room-card">
            <div class="create-room-content">
              <div class="create-room-header">
                <q-icon name="add" class="create-icon" />
                <h3 class="create-title">Tạo phòng mới</h3>
              </div>
              <p class="create-description">Tạo phòng thử thách riêng với các cài đặt tùy chỉnh</p>
              <div class="create-btn-container" ref="createBtnContainer">
                <q-btn
                  color="primary"
                  class="create-btn"
                  no-caps
                  @click="toggleChallengeTypeDropdown"
                  :class="{ 'dropdown-open': showChallengeTypeDropdown }"
                >
                  <q-icon name="add" size="16px" class="q-mr-xs" />
                  Tạo phòng thử thách
                  <q-icon
                    name="expand_more"
                    size="20px"
                    class="dropdown-arrow"
                    :class="{ 'rotated': showChallengeTypeDropdown }"
                  />
                </q-btn>

                <!-- Mobile Backdrop -->
                <div
                  v-if="showChallengeTypeDropdown"
                  class="mobile-backdrop"
                  @click="showChallengeTypeDropdown = false"
                ></div>

                <!-- Challenge Type Dropdown -->
                <div v-if="showChallengeTypeDropdown" class="challenge-type-dropdown">
                  <div
                    v-for="challengeType in challengeTypes"
                    :key="challengeType.id"
                    class="challenge-type-item"
                    @click="createRoomWithType(challengeType)"
                  >
                    <div class="challenge-type-icon">{{ challengeType.emoji }}</div>
                    <div class="challenge-type-info">
                      <div class="challenge-type-title">{{ challengeType.title }}</div>
                      <div class="challenge-type-description">{{ challengeType.description }}</div>
                      <div class="challenge-type-stats">
                        <div class="challenge-stat">
                          <q-icon name="people" size="14px" />
                          <span>{{ challengeType.maxPlayers }} người</span>
                        </div>
                        <div class="challenge-stat">
                          <q-icon name="quiz" size="14px" />
                          <span>{{ challengeType.questions }} câu</span>
                        </div>
                        <div class="challenge-stat">
                          <q-icon name="schedule" size="14px" />
                          <span>{{ challengeType.timePerQuestion }}s/câu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </q-card>
        </div>

        <!-- Right Side - Available Rooms -->
        <div class="rooms-section">
          <!-- Search Header -->
          <div class="rooms-header">
            <div class="rooms-title">
              <q-icon name="search" class="search-icon" />
              <h3>Phòng có sẵn (3)</h3>
            </div>
            <q-input
              v-model="searchQuery"
              placeholder="Tìm kiếm phòng..."
              outlined
              dense
              class="search-input"
            />
          </div>

          <!-- Room Cards -->
          <div class="rooms-list">
            <!-- Room 1 -->
            <q-card class="room-card">
              <q-card-section class="room-content">
                <!-- Room Header -->
                <div class="room-header">
                  <div class="room-owner">
                    <q-icon name="emoji_events" color="amber" size="16px" />
                    <span class="owner-name">Minh Anh</span>
                    <q-chip size="sm" color="purple-1" text-color="purple-8" class="owner-badge">
                      Chủ phòng
                    </q-chip>
                  </div>
                  <q-chip size="sm" color="green" text-color="white" class="status-badge">
                    🟢 Chờ
                  </q-chip>
                </div>

                <!-- Room Title -->
                <h4 class="room-title">🏆 Cuộc thi từ vựng cơ bản</h4>

                <!-- Room Stats -->
                <div class="room-stats">
                  <div class="stat-item">
                    <q-icon name="people" size="16px" />
                    <span>3/6</span>
                  </div>
                  <div class="stat-item">
                    <q-icon name="quiz" size="16px" />
                    <span>15 câu</span>
                  </div>
                  <div class="stat-item">
                    <q-icon name="schedule" size="16px" />
                    <span>30s/câu</span>
                  </div>
                </div>

                <!-- Bottom Row -->
                <div class="room-footer">
                  <!-- User Avatars -->
                  <div class="room-avatars">
                    <q-avatar size="32px" class="user-avatar">MA</q-avatar>
                    <q-avatar size="32px" class="user-avatar">TT</q-avatar>
                    <q-avatar size="32px" class="user-avatar">VN</q-avatar>
                  </div>

                  <!-- Join Button -->
                  <q-btn color="primary" no-caps @click="joinRoom(1)"> Tham gia </q-btn>
                </div>
              </q-card-section>
            </q-card>

            <!-- Room 2 -->
            <q-card class="room-card">
              <q-card-section class="room-content">
                <div class="room-header">
                  <div class="room-owner">
                    <q-icon name="emoji_events" color="silver" size="16px" />
                    <span class="owner-name">Thành Hòa</span>
                    <q-chip size="sm" color="purple-1" text-color="purple-8" class="owner-badge">
                      Chủ phòng
                    </q-chip>
                  </div>
                  <q-chip size="sm" color="orange" text-color="white" class="status-badge">
                    🔴 Đang chơi
                  </q-chip>
                </div>

                <h4 class="room-title">💯 Challenge Grammar Masters</h4>

                <div class="room-stats">
                  <div class="stat-item">
                    <q-icon name="people" size="16px" />
                    <span>4/8</span>
                  </div>
                  <div class="stat-item">
                    <q-icon name="quiz" size="16px" />
                    <span>20 câu</span>
                  </div>
                  <div class="stat-item">
                    <q-icon name="schedule" size="16px" />
                    <span>45s/câu</span>
                  </div>
                </div>

                <div class="room-footer">
                  <div class="room-avatars">
                    <q-avatar size="32px" class="user-avatar">TH</q-avatar>
                    <q-avatar size="32px" class="user-avatar">LM</q-avatar>
                    <q-avatar size="32px" class="user-avatar">DN</q-avatar>
                    <q-avatar size="32px" class="user-avatar">KT</q-avatar>
                  </div>

                  <q-btn outline color="orange" no-caps @click="watchRoom(2)"> Xem </q-btn>
                </div>
              </q-card-section>
            </q-card>

            <!-- Room 3 -->
            <q-card class="room-card">
              <q-card-section class="room-content">
                <div class="room-header">
                  <div class="room-owner">
                    <q-icon name="emoji_events" color="orange" size="16px" />
                    <span class="owner-name">Văn Nam</span>
                    <q-chip size="sm" color="purple-1" text-color="purple-8" class="owner-badge">
                      Chủ phòng
                    </q-chip>
                  </div>
                  <q-chip size="sm" color="green" text-color="white" class="status-badge">
                    🟢 Chờ
                  </q-chip>
                </div>

                <h4 class="room-title">🚀 Speed English Quiz</h4>

                <div class="room-stats">
                  <div class="stat-item">
                    <q-icon name="people" size="16px" />
                    <span>2/4</span>
                  </div>
                  <div class="stat-item">
                    <q-icon name="quiz" size="16px" />
                    <span>10 câu</span>
                  </div>
                  <div class="stat-item">
                    <q-icon name="schedule" size="16px" />
                    <span>15s/câu</span>
                  </div>
                </div>

                <div class="room-footer">
                  <div class="room-avatars">
                    <q-avatar size="32px" class="user-avatar">VN</q-avatar>
                    <q-avatar size="32px" class="user-avatar">PT</q-avatar>
                  </div>

                  <q-btn color="primary" no-caps @click="joinRoom(3)"> Tham gia </q-btn>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Create Room Modal -->
    <q-dialog v-model="showCreateRoomModal" persistent>
      <q-card class="create-room-modal">
        <q-card-section class="create-modal-header">
          <div class="create-modal-title">
            <svg
              class="plus-icon"
              width="20"
              height="20"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66699 10.8H16.3337"
                stroke="#6D28D9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 4.96667V16.6333"
                stroke="#6D28D9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Tạo phòng mới
          </div>
          <div class="create-modal-subtitle">
            Tạo phòng thử thách riêng với các cài đặt tùy chỉnh
          </div>
        </q-card-section>

        <q-card-section class="create-modal-content">
          <!-- Room Name -->
          <div class="form-field">
            <label class="field-label">Tên phòng</label>
            <q-input
              v-model="roomSettings.name"
              placeholder="Ví dụ: Thử thách từ vựng cơ bản"
              outlined
              class="room-input"
            />
          </div>

          <!-- Max Players -->
          <div class="form-field">
            <div class="field-header">
              <span class="field-label">Số người tối đa:</span>
              <span class="field-value">{{ roomSettings.maxPlayers }}</span>
            </div>
            <div class="option-buttons">
              <q-btn
                v-for="option in playerOptions"
                :key="option"
                :class="{ selected: roomSettings.maxPlayers === option }"
                @click="roomSettings.maxPlayers = option"
                class="option-btn"
              >
                {{ option }}
              </q-btn>
            </div>
          </div>

          <!-- Number of Questions -->
          <div class="form-field">
            <div class="field-header">
              <span class="field-label">Số câu hỏi:</span>
              <span class="field-value">{{ roomSettings.questions }}</span>
            </div>
            <div class="option-buttons">
              <q-btn
                v-for="option in questionOptions"
                :key="option"
                :class="{ selected: roomSettings.questions === option }"
                @click="roomSettings.questions = option"
                class="option-btn"
              >
                {{ option }}
              </q-btn>
            </div>
          </div>

          <!-- Time per Question -->
          <div class="form-field">
            <div class="field-header">
              <span class="field-label">Thời gian/câu:</span>
              <span class="field-value">{{ roomSettings.timePerQuestion }}s</span>
            </div>
            <div class="option-buttons">
              <q-btn
                v-for="option in timeOptions"
                :key="option"
                :class="{ selected: roomSettings.timePerQuestion === option }"
                @click="roomSettings.timePerQuestion = option"
                class="option-btn time-btn"
              >
                {{ option }} s
              </q-btn>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="modal-actions">
            <q-btn class="create-room-btn" color="primary" @click="confirmCreateRoom" no-caps>
              Tạo phòng
            </q-btn>
            <q-btn class="cancel-btn" outline @click="cancelCreateRoom" no-caps> Hủy </q-btn>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Results Modal -->
    <q-dialog v-model="showResultsModal" position="bottom">
      <q-card class="results-modal">
        <q-card-section class="modal-header">
          <div class="modal-title">
            <q-icon name="emoji_events" color="amber" size="20px" />
            <span>Kết quả cuộc thi</span>
          </div>
          <div class="modal-subtitle">Danh sách trả lời đúng (Top 8)</div>
        </q-card-section>

        <q-card-section class="modal-content">
          <div class="players-list">
            <div v-for="(player, index) in topPlayers" :key="index" class="player-item">
              <div class="player-info">
                <span class="player-rank"># {{ index + 1 }}</span>
                <span class="player-name">{{ player.name }}</span>
              </div>
              <span class="player-time">{{ player.time }}</span>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Click outside to close dropdown
const createBtnContainer = ref(null)

const searchQuery = ref('')
const showResultsModal = ref(false)
const showCreateRoomModal = ref(false)
const showChallengeTypeDropdown = ref(false)

// Room creation settings
const roomSettings = ref({
  name: '',
  maxPlayers: 4,
  questions: 10,
  timePerQuestion: 20,
})

// Options for room settings
const playerOptions = [4, 6, 8, 10]
const questionOptions = [10, 15, 20, 25]
const timeOptions = [20, 30, 45, 60]

// Challenge types for dropdown
const challengeTypes = [
  {
    id: 'vocabulary',
    emoji: '🏆',
    title: 'Cuộc thi từ vựng cơ bản',
    description: 'Thử thách kiến thức từ vựng cơ bản',
    maxPlayers: 6,
    questions: 15,
    timePerQuestion: 30
  },
  {
    id: 'quick',
    emoji: '⚡',
    title: 'Thử thách nhanh 10 câu',
    description: 'Trả lời nhanh các câu hỏi ngắn',
    maxPlayers: 4,
    questions: 10,
    timePerQuestion: 20
  },
  {
    id: 'professional',
    emoji: '🎯',
    title: 'Thách đấu chuyên nghiệp',
    description: 'Dành cho người chơi có kinh nghiệm',
    maxPlayers: 8,
    questions: 25,
    timePerQuestion: 45
  },
  {
    id: 'custom',
    emoji: '⚙️',
    title: 'Tùy chỉnh',
    description: 'Tạo phòng với cài đặt tùy chỉnh',
    maxPlayers: 4,
    questions: 10,
    timePerQuestion: 20,
    isCustom: true
  }
]

const topPlayers = ref([
  { name: 'Minh Anh', time: '10:31' },
  { name: 'Thành Hòa', time: '10:31' },
  { name: 'Văn Nam', time: '10:32' },
  { name: 'Thu Trang', time: '10:32' },
  { name: 'Đức Minh', time: '10:33' },
  { name: 'Lan Anh', time: '10:33' },
  { name: 'Hoàng Nam', time: '10:34' },
  { name: 'Mai Linh', time: '10:34' },
])

function toggleChallengeTypeDropdown() {
  showChallengeTypeDropdown.value = !showChallengeTypeDropdown.value
}

function createRoomWithType(challengeType) {
  // Set room settings based on challenge type
  roomSettings.value = {
    name: challengeType.title,
    maxPlayers: challengeType.maxPlayers,
    questions: challengeType.questions,
    timePerQuestion: challengeType.timePerQuestion
  }

  showChallengeTypeDropdown.value = false
  showCreateRoomModal.value = true
}

function confirmCreateRoom() {
  // Validate room name
  if (!roomSettings.value.name.trim()) {
    console.error('Room name is required')
    return
  }

  console.log('Creating room with settings:', roomSettings.value)

  // Generate room code
  const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase()

  // Close modal
  showCreateRoomModal.value = false

  // Navigate to waiting room with room data
  router.push({
    path: '/dashboard/waiting-room',
    query: {
      roomCode: roomCode,
      roomName: roomSettings.value.name,
      questions: roomSettings.value.questions,
      timePerQuestion: roomSettings.value.timePerQuestion,
      maxPlayers: roomSettings.value.maxPlayers,
    },
  })

  // Reset form
  roomSettings.value = {
    name: '',
    maxPlayers: 4,
    questions: 10,
    timePerQuestion: 20,
  }
}

function cancelCreateRoom() {
  showCreateRoomModal.value = false
  // Reset form
  roomSettings.value = {
    name: '',
    maxPlayers: 4,
    questions: 10,
    timePerQuestion: 20,
  }
}

function joinRoom(roomId) {
  console.log('Joining room:', roomId)

  // Navigate to waiting room for the specific room
  router.push({
    path: '/dashboard/waiting-room',
    query: {
      roomCode: roomId,
      mode: 'join',
    },
  })
}

function watchRoom(roomId) {
  console.log('Watching room:', roomId)
  showResultsModal.value = true
}

// Handle click outside to close dropdown
function handleClickOutside(event) {
  if (createBtnContainer.value && !createBtnContainer.value.contains(event.target)) {
    showChallengeTypeDropdown.value = false
  }
}

// Handle escape key to close dropdown
function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    showChallengeTypeDropdown.value = false
  }
}

// Mount/unmount event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
})
</script>

<style scoped>
.challenges-page {
  background: #f5f3ff;
  min-height: 100vh;
}

.challenges-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
}

/* Header */
.page-header {
  text-align: center;
  margin-bottom: 48px;
}

.page-title {
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 400;
  color: #111827;
  margin-bottom: 16px;
}

.page-description {
  font-size: 20px;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 32px;
}

/* Create Room Section */
.create-room-section {
  display: flex;
  flex-direction: column;
}

.create-room-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  height: fit-content;
}

.create-room-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.create-room-content {
  padding: 32px 24px;
  text-align: center;
}

.create-room-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.create-icon {
  font-size: 32px;
  color: #6d28d9;
  background: #f5f3ff;
  padding: 12px;
  border-radius: 50%;
}

.create-title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.create-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 24px;
}

.create-btn-container {
  position: relative;
}

.create-btn {
  width: 100%;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.create-btn.dropdown-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.dropdown-arrow {
  margin-left: auto;
  transition: transform 0.2s ease;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.challenge-type-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #e2e8f0;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  overflow: hidden;
}

.challenge-type-item {
  padding: 16px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid #f3f4f6;
}

.challenge-type-item:last-child {
  border-bottom: none;
}

.challenge-type-item:hover {
  background: #f8fafc;
}

.challenge-type-icon {
  font-size: 20px;
  line-height: 1;
  margin-top: 2px;
}

.challenge-type-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.challenge-type-title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  line-height: 1.2;
}

.challenge-type-description {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.4;
}

.challenge-type-stats {
  display: flex;
  gap: 16px;
  margin-top: 8px;
}

.challenge-stat {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #4b5563;
  font-size: 12px;
}

.challenge-stat .q-icon {
  opacity: 0.7;
}

.mobile-backdrop {
  display: none;
}

@media (max-width: 768px) {
  .mobile-backdrop {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
  }
}

/* Rooms Section */
.rooms-section {
  display: flex;
  flex-direction: column;
}

.rooms-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.rooms-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.rooms-title h3 {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0;
}

.search-icon {
  font-size: 20px;
  color: #2563eb;
}

.search-input {
  width: 250px;
}

/* Rooms List */
.rooms-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.room-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.room-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.room-content {
  padding: 20px;
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.room-owner {
  display: flex;
  align-items: center;
  gap: 8px;
}

.owner-name {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
}

.owner-badge {
  font-size: 12px;
}

.status-badge {
  font-size: 12px;
}

.room-title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px 0;
}

.room-stats {
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #6b7280;
  font-size: 14px;
}

.room-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.room-avatars {
  display: flex;
  gap: -8px;
}

.user-avatar {
  background: linear-gradient(135deg, #6d28d9 0%, #3b82f6 100%);
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-left: -8px;
  border: 2px solid white;
}

.user-avatar:first-child {
  margin-left: 0;
}

/* Results Modal */
.results-modal {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.modal-header {
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.modal-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 4px;
}

.modal-subtitle {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.modal-content {
  padding: 16px;
}

.players-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.player-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: white;
  border-radius: 6px;
  border: 1px solid #f3f4f6;
}

.player-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.player-rank {
  font-size: 12px;
  color: #6b7280;
}

.player-name {
  font-size: 12px;
  font-weight: 500;
  color: #111827;
}

.player-time {
  font-size: 12px;
  color: #6b7280;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .create-room-section {
    order: 1;
  }

  .rooms-section {
    order: 0;
  }
}

@media (max-width: 768px) {
  .challenges-container {
    padding: 16px;
  }

  .page-header {
    margin-bottom: 32px;
  }

  .rooms-header {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }

  .search-input {
    width: 100%;
  }

  .room-stats {
    flex-wrap: wrap;
    gap: 16px;
  }

  .room-footer {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .room-avatars {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .challenge-type-dropdown {
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 16px 16px 0 0;
    border: none;
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.15);
  }

  .challenge-type-item {
    padding: 20px 16px;
  }

  .challenge-type-stats {
    flex-wrap: wrap;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .create-room-content {
    padding: 24px 16px;
  }

  .room-content {
    padding: 16px;
  }

  .room-header {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .room-owner {
    justify-content: center;
  }

  .challenge-type-item {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }

  .challenge-type-info {
    align-items: center;
  }

  .challenge-type-stats {
    justify-content: center;
  }
}

/* Create Room Modal Styles */
.create-room-modal {
  width: 400px;
  max-width: 90vw;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.create-modal-header {
  padding: 24px 24px 6px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.create-modal-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 400;
  color: #020817;
  line-height: 24px;
  letter-spacing: -0.6px;
}

.plus-icon {
  width: 20px;
  height: 20px;
}

.create-modal-subtitle {
  font-size: 14px;
  font-weight: 400;
  color: #64748b;
  line-height: 20px;
}

.create-modal-content {
  padding: 0 24px 25px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  font-size: 14px;
  font-weight: 400;
  color: #374151;
  line-height: 20px;
}

.field-header {
  display: flex;
  align-items: center;
  gap: 6px;
}

.field-value {
  font-size: 14px;
  font-weight: 400;
  color: #374151;
  line-height: 20px;
}

.room-input {
  height: 40px;
}

.room-input .q-field__control {
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.room-input .q-field__native {
  padding: 8px 12px;
  font-size: 14px;
  color: #999;
}

.option-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.option-btn {
  min-width: auto;
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  background: #fff;
  color: #020817;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-transform: none;
}

.option-btn.selected {
  background: #2563eb;
  color: #fff;
  border-color: #2563eb;
}

.option-btn:hover {
  border-color: #2563eb;
}

.time-btn {
  padding: 8px 13px;
}

.modal-actions {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.create-room-btn {
  flex: 1;
  height: 40px;
  background: #2563eb;
  color: #fff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-transform: none;
}

.cancel-btn {
  height: 40px;
  padding: 10px 17px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  background: #fff;
  color: #020817;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-transform: none;
}

.cancel-btn:hover {
  border-color: #2563eb;
}
</style>
