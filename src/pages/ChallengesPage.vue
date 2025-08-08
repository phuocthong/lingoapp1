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
              <!-- Room Creation Form -->
              <div v-if="!showCreateForm" class="create-btn-container">
                <q-btn color="primary" class="create-btn" no-caps @click="showCreateForm = true">
                  <q-icon name="add" size="16px" class="q-mr-xs" />
                  Tạo phòng thử thách
                </q-btn>
              </div>

              <!-- Create Room Form (Figma Design) -->
              <div v-if="showCreateForm" class="create-room-form">
                <!-- Form Header -->
                <div class="form-header">
                  <div class="form-title">
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
                  <div class="form-subtitle">
                    Tạo phòng thử thách riêng với các cài đặt tùy chỉnh
                  </div>
                </div>

                <!-- Form Content -->
                <div class="form-content">
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
                  <div class="form-actions">
                    <q-btn class="create-room-btn" color="primary" @click="confirmCreateRoom" no-caps>
                      Tạo phòng
                    </q-btn>
                    <q-btn class="cancel-btn" outline @click="cancelCreateForm" no-caps>
                      Hủy
                    </q-btn>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const searchQuery = ref('')
const showResultsModal = ref(false)
const showCreateRoomModal = ref(false)
const showCreateForm = ref(false)

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

function cancelCreateForm() {
  showCreateForm.value = false
  // Reset form
  roomSettings.value = {
    name: '',
    maxPlayers: 4,
    questions: 10,
    timePerQuestion: 20,
  }
}

function confirmCreateRoom() {
  // Validate room name
  if (!roomSettings.value.name.trim()) {
    // Show error or use default name
    console.error('Room name is required')
    return
  }

  console.log('Creating room with settings:', roomSettings.value)

  // Generate room code
  const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase()

  // Close form
  showCreateForm.value = false

  // Navigate to waiting room with room data
  router.push({
    path: '/dashboard/waiting-room',
    query: {
      roomCode: roomCode,
      roomName: roomSettings.value.name,
      questions: roomSettings.value.questions,
      timePerQuestion: roomSettings.value.timePerQuestion,
      maxPlayers: roomSettings.value.maxPlayers,
      isOwner: 'true'
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
  width: 100%;
}

.create-btn {
  width: 100%;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
}

/* Create Room Form Styles */
.create-room-form {
  width: 100%;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.form-header {
  padding: 24px 24px 6px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-title {
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

.form-subtitle {
  font-size: 14px;
  font-weight: 400;
  color: #64748b;
  line-height: 20px;
}

.form-content {
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

.form-actions {
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
  .form-header {
    padding: 20px 16px 6px 16px;
  }

  .form-content {
    padding: 0 16px 20px 16px;
  }

  .option-buttons {
    gap: 6px;
  }

  .option-btn {
    font-size: 13px;
    padding: 6px 10px;
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

  .form-actions {
    flex-direction: column;
    gap: 12px;
  }

  .cancel-btn {
    width: 100%;
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
