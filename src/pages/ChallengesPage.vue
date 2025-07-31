<template>
  <q-page class="challenges-page">
    <!-- Main Content -->
    <div class="challenges-container">
      <!-- Header -->
      <div class="page-header">
        <h1 class="page-title">
          ⚡ Phòng Thử thách EnglishBot
        </h1>
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
              <p class="create-description">
                Tạo phòng thử thách riêng v���i các cài đặt tùy chỉnh
              </p>
              <q-btn
                color="primary"
                class="create-btn"
                no-caps
                @click="createRoom"
              >
                <q-icon name="add" size="16px" class="q-mr-xs" />
                Tạo phòng thử thách
              </q-btn>
            </div>
          </q-card>
        </div>

        <!-- Right Side - Available Rooms -->
        <div class="rooms-section">
          <!-- Header with Search -->
          <div class="row items-center justify-between q-mb-lg">
            <div class="row items-center q-gutter-sm">
              <q-icon name="search" size="20px" color="blue-6" />
              <div class="text-h6 text-grey-9">Phòng có sẵn (3)</div>
            </div>
            <q-input
              v-model="searchQuery"
              placeholder="Tìm kiếm phòng..."
              outlined
              dense
              style="width: 250px"
              class="bg-white"
            />
          </div>

          <!-- Room Cards -->
          <div class="column q-gutter-md">
            <!-- Room 1 -->
            <q-card class="room-card">
              <q-card-section class="q-pa-md">
                <!-- Room Header -->
                <div class="row items-center justify-between q-mb-sm">
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="emoji_events" color="amber" size="16px" />
                    <span class="text-subtitle1 text-weight-medium">Minh Anh</span>
                    <q-chip size="sm" color="purple-1" text-color="purple-8" class="text-caption">
                      Chủ phòng
                    </q-chip>
                  </div>
                  <q-chip size="sm" color="purple-7" text-color="white" class="text-caption">
                    🟢 Chờ
                  </q-chip>
                </div>

                <!-- Room Title -->
                <div class="text-h6 text-grey-9 q-mb-sm">🏆 Cuộc thi từ vựng cơ bản</div>

                <!-- Room Stats -->
                <div class="row items-center q-gutter-lg q-mb-md">
                  <div class="row items-center q-gutter-xs">
                    <q-icon name="people" size="16px" color="grey-6" />
                    <span class="text-body2 text-grey-6">3/6</span>
                  </div>
                  <div class="row items-center q-gutter-xs">
                    <q-icon name="emoji_events" size="16px" color="grey-6" />
                    <span class="text-body2 text-grey-6">15 câu</span>
                  </div>
                  <div class="row items-center q-gutter-xs">
                    <q-icon name="schedule" size="16px" color="grey-6" />
                    <span class="text-body2 text-grey-6">30s/câu</span>
                  </div>
                </div>

                <!-- Bottom Row -->
                <div class="row items-center justify-between">
                  <!-- User Avatars -->
                  <div class="row items-center">
                    <q-avatar
                      size="32px"
                      class="bg-gradient-purple text-white text-weight-bold overlap-avatar"
                      >MA</q-avatar
                    >
                    <q-avatar
                      size="32px"
                      class="bg-gradient-purple text-white text-weight-bold overlap-avatar"
                      >TT</q-avatar
                    >
                    <q-avatar
                      size="32px"
                      class="bg-gradient-purple text-white text-weight-bold overlap-avatar"
                      >VN</q-avatar
                    >
                  </div>

                  <!-- Join Button -->
                  <q-btn color="blue-6" no-caps @click="joinRoom(1)"> Tham gia </q-btn>
                </div>
              </q-card-section>
            </q-card>

            <!-- Room 2 -->
            <q-card class="room-card">
              <q-card-section class="q-pa-md">
                <!-- Room Header -->
                <div class="row items-center justify-between q-mb-sm">
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="emoji_events" color="amber" size="16px" />
                    <span class="text-subtitle1 text-weight-medium">Thành Hòa</span>
                    <q-chip size="sm" color="purple-1" text-color="purple-8" class="text-caption">
                      Chủ phòng
                    </q-chip>
                  </div>
                  <q-chip size="sm" color="purple-7" text-color="white" class="text-caption">
                    🟢 Chờ
                  </q-chip>
                </div>

                <!-- Room Title -->
                <div class="text-h6 text-grey-9 q-mb-sm">⚡ Thử thách nhanh 10 câu</div>

                <!-- Room Stats -->
                <div class="row items-center q-gutter-lg q-mb-md">
                  <div class="row items-center q-gutter-xs">
                    <q-icon name="people" size="16px" color="grey-6" />
                    <span class="text-body2 text-grey-6">2/4</span>
                  </div>
                  <div class="row items-center q-gutter-xs">
                    <q-icon name="emoji_events" size="16px" color="grey-6" />
                    <span class="text-body2 text-grey-6">10 câu</span>
                  </div>
                  <div class="row items-center q-gutter-xs">
                    <q-icon name="schedule" size="16px" color="grey-6" />
                    <span class="text-body2 text-grey-6">20s/câu</span>
                  </div>
                </div>

                <!-- Bottom Row -->
                <div class="row items-center justify-between">
                  <!-- User Avatars -->
                  <div class="row items-center">
                    <q-avatar
                      size="32px"
                      class="bg-gradient-purple text-white text-weight-bold overlap-avatar"
                      >TH</q-avatar
                    >
                    <q-avatar
                      size="32px"
                      class="bg-gradient-purple text-white text-weight-bold overlap-avatar"
                      >LA</q-avatar
                    >
                  </div>

                  <!-- Join Button -->
                  <q-btn color="blue-6" no-caps @click="joinRoom(2)"> Tham gia </q-btn>
                </div>
              </q-card-section>
            </q-card>

            <!-- Room 3 -->
            <q-card class="room-card">
              <q-card-section class="q-pa-md">
                <!-- Room Header -->
                <div class="row items-center justify-between q-mb-sm">
                  <div class="row items-center q-gutter-sm">
                    <q-icon name="emoji_events" color="amber" size="16px" />
                    <span class="text-subtitle1 text-weight-medium">Hoàng Nam</span>
                    <q-chip size="sm" color="purple-1" text-color="purple-8" class="text-caption">
                      Chủ phòng
                    </q-chip>
                  </div>
                  <q-chip size="sm" color="purple-7" text-color="white" class="text-caption">
                    🟢 Chờ
                  </q-chip>
                </div>

                <!-- Room Title -->
                <div class="text-h6 text-grey-9 q-mb-sm">🎯 Thách đấu chuyên nghiệp</div>

                <!-- Room Stats -->
                <div class="row items-center q-gutter-lg q-mb-md">
                  <div class="row items-center q-gutter-xs">
                    <q-icon name="people" size="16px" color="grey-6" />
                    <span class="text-body2 text-grey-6">1/8</span>
                  </div>
                  <div class="row items-center q-gutter-xs">
                    <q-icon name="emoji_events" size="16px" color="grey-6" />
                    <span class="text-body2 text-grey-6">25 câu</span>
                  </div>
                  <div class="row items-center q-gutter-xs">
                    <q-icon name="schedule" size="16px" color="grey-6" />
                    <span class="text-body2 text-grey-6">45s/câu</span>
                  </div>
                </div>

                <!-- Bottom Row -->
                <div class="row items-center justify-between">
                  <!-- User Avatars -->
                  <div class="row items-center">
                    <q-avatar size="32px" class="bg-gradient-purple text-white text-weight-bold"
                      >HN</q-avatar
                    >
                  </div>

                  <!-- Join Button -->
                  <q-btn color="blue-6" no-caps @click="joinRoom(3)"> Tham gia </q-btn>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>

      <!-- Results Modal (similar to Figma design) -->
      <q-dialog v-model="showResultsModal">
        <q-card style="width: 400px">
          <q-card-section class="border-bottom q-pa-md">
            <div class="row items-center q-gutter-sm">
              <q-icon name="emoji_events" size="12px" />
              <div class="text-caption text-weight-medium text-grey-7">
                Danh sách trả lời đúng (Top 8)
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pa-md">
            <div class="column q-gutter-xs">
              <!-- Top players list -->
              <div
                v-for="(player, index) in topPlayers"
                :key="index"
                class="row justify-between items-center q-pa-xs bg-white rounded"
              >
                <div class="row items-center q-gutter-sm">
                  <span class="text-caption text-grey-6"># {{ index + 1 }}</span>
                  <span class="text-caption text-weight-medium">{{ player.name }}</span>
                </div>
                <span class="text-caption text-grey-6">{{ player.time }}</span>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const searchQuery = ref('')
const showResultsModal = ref(false)

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

function createRoom() {
  console.log('Creating new room...')
  // Add create room logic
}

function joinRoom(roomId) {
  console.log('Joining room:', roomId)
  // Add join room logic
}

function logout() {
  console.log('Logging out...')
  // Add logout logic
}
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid #e0e0e0;
}

.create-room-card {
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.create-room-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.room-card {
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.room-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.bg-gradient-purple {
  background: linear-gradient(90deg, #7c3aed 100%, #3b82f6 0%);
}

.overlap-avatar {
  margin-left: -8px;
  border: 2px solid white;
}

.overlap-avatar:first-child {
  margin-left: 0;
}

/* Responsive design */
@media (max-width: 1024px) {
  .row.q-gutter-lg {
    flex-direction: column;
  }

  .col-3,
  .col-9 {
    max-width: 100%;
    flex: none;
  }
}

@media (max-width: 768px) {
  .q-pa-lg {
    padding: 12px !important;
  }

  .create-room-card {
    height: auto !important;
  }
}
</style>
