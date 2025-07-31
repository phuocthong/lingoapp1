<template>
  <q-page class="dashboard-page">
    <div class="dashboard-container">
      <!-- Left side - Chat Interface -->
      <div class="chat-section">
        <q-card class="chat-card">
          <!-- Chat Header -->
          <q-card-section class="chat-header">
            <div class="header-content">
              <q-icon name="extension" class="header-icon" />
              <div class="header-info">
                <div class="header-title">Thách đấu với Bot</div>
                <div class="header-subtitle">Bot sẽ đưa ra câu hỏi mỗi 30-60 giây</div>
              </div>
            </div>
          </q-card-section>

          <!-- Chat Messages -->
          <q-card-section class="chat-messages">
            <!-- Bot Message 1 -->
            <div class="message-row">
              <q-avatar size="32px" class="bot-avatar">
                <q-icon name="extension" size="16px" />
              </q-avatar>
              <div class="message-bubble bot-message">
                <div class="message-text">
                  Xin chào! Tôi là EnglishBot. Tôi sẽ đưa ra các câu hỏi tiếng Anh định kỳ để các bạn trả lời.
                </div>
                <div class="message-time">21:23</div>
              </div>
            </div>

            <!-- Bot Message 2 -->
            <div class="message-row">
              <q-avatar size="32px" class="bot-avatar">
                <q-icon name="extension" size="16px" />
              </q-avatar>
              <div class="message-bubble bot-message">
                <div class="message-text">Dịch từ "Intelligent" sang tiếng Việt</div>
                <div class="message-time">21:23</div>
                <div class="message-participants">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/94861390f9be0eb42544493a89935a3e8537e779?width=38" alt="User 1" class="participant-avatar" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/808cc85b683761b4f2649b219713e811950b7da6?width=38" alt="User 2" class="participant-avatar" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/d0b0d0d7bf9e895d63b544b8849b7b88a157a184?width=38" alt="User 3" class="participant-avatar" />
                </div>
              </div>
            </div>

            <!-- Correct Answer Display -->
            <div class="answer-display">
              <div class="correct-answer">
                Đáp án đúng là: "thông minh"
                <div class="answer-time">21:23</div>
              </div>
            </div>

            <!-- Bot Message 3 -->
            <div class="message-row">
              <q-avatar size="32px" class="bot-avatar">
                <q-icon name="extension" size="16px" />
              </q-avatar>
              <div class="message-bubble bot-message">
                <div class="message-text">Dịch từ "Amazing" sang tiếng Việt</div>
                <div class="message-time">21:23</div>
                <div class="message-participants">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/afd6b1f2255dd111fa11b26060334ab2b8550b68?width=34" alt="User 1" class="participant-avatar" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/57601513ec477a7832bf1a848cd546ad59d68b24?width=34" alt="User 2" class="participant-avatar" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/a799c61d39d6c04d560750f802eb88c5ea24ee80?width=34" alt="User 3" class="participant-avatar" />
                </div>
              </div>
            </div>

            <!-- Answer Display 2 -->
            <div class="answer-display">
              <div class="correct-answer">
                Đáp án đúng là: "tuyệt vời"
                <div class="answer-time">21:24</div>
              </div>
            </div>
          </q-card-section>

          <!-- Input Area -->
          <q-card-section class="chat-input">
            <div class="input-container">
              <q-input
                v-model="messageInput"
                placeholder="Nhập câu trả lời của bạn..."
                outlined
                class="message-input"
                @keyup.enter="sendMessage"
              />
              <q-btn
                icon="send"
                color="primary"
                class="send-btn"
                @click="sendMessage"
              />
            </div>

            <div class="status-indicator">
              <q-icon name="fiber_manual_record" color="green" size="8px" />
              <span class="status-text">Đăng nhập với tên: Người dùng</span>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Right side - Leaderboard and History -->
      <div class="col-4">
        <!-- Leaderboard Section -->
        <q-card class="q-mb-lg">
          <q-card-section class="border-bottom q-pa-md">
            <div class="row items-center justify-between">
              <div class="row items-center q-gutter-sm">
                <q-icon name="emoji_events" size="20px" />
                <div class="text-subtitle1 text-weight-medium">Bảng xếp hạng</div>
              </div>
              <q-icon name="trending_up" size="16px" />
            </div>

            <div class="row q-gutter-xs q-mt-sm">
              <q-chip size="sm" color="purple-2" text-color="purple-8" class="text-weight-medium"
                >Tổng</q-chip
              >
              <q-chip size="sm" color="grey-3" text-color="grey-7">Tuần</q-chip>
              <q-chip size="sm" color="grey-3" text-color="grey-7">Tháng</q-chip>
              <q-chip size="sm" color="grey-3" text-color="grey-7">Năm</q-chip>
            </div>
          </q-card-section>

          <q-card-section class="q-pa-md">
            <!-- Leaderboard Item 1 -->
            <div class="leaderboard-item row items-center q-gutter-sm q-mb-md q-pa-sm rounded">
              <q-icon name="emoji_events" color="amber" size="16px" />
              <q-avatar size="32px" class="bg-amber text-white text-weight-bold">MA</q-avatar>
              <div class="col">
                <div class="text-body2 text-weight-medium">Minh Anh</div>
                <div class="text-caption text-grey-6">Streak: 15</div>
              </div>
              <div class="text-right">
                <div class="text-h6 text-weight-bold">2,456</div>
                <div class="text-caption text-grey-6">Câu đúng</div>
              </div>
            </div>

            <!-- Leaderboard Item 2 -->
            <div class="leaderboard-item row items-center q-gutter-sm q-mb-md q-pa-sm rounded">
              <q-icon name="emoji_events" color="grey-5" size="16px" style="opacity: 0.2" />
              <q-avatar size="32px" class="bg-grey text-white text-weight-bold">TH</q-avatar>
              <div class="col">
                <div class="text-body2 text-weight-medium">Thành Hòa</div>
                <div class="text-caption text-grey-6">Streak: 23</div>
              </div>
              <div class="text-right">
                <div class="text-h6 text-weight-bold">2,195</div>
                <div class="text-caption text-grey-6">Câu đúng</div>
              </div>
            </div>

            <!-- Leaderboard Item 3 -->
            <div class="leaderboard-item row items-center q-gutter-sm q-mb-md q-pa-sm rounded">
              <q-icon name="emoji_events" color="orange" size="16px" />
              <q-avatar size="32px" class="bg-orange text-white text-weight-bold">VN</q-avatar>
              <div class="col">
                <div class="text-body2 text-weight-medium">Văn Nam</div>
                <div class="text-caption text-grey-6">Streak: 12</div>
              </div>
              <div class="text-right">
                <div class="text-h6 text-weight-bold">1,957</div>
                <div class="text-caption text-grey-6">Câu đúng</div>
              </div>
            </div>

            <!-- Leaderboard Item 4 -->
            <div class="leaderboard-item row items-center q-gutter-sm q-pa-sm rounded">
              <q-icon name="star" color="blue" size="12px" />
              <q-avatar size="32px" class="bg-blue text-white text-weight-bold">TT</q-avatar>
              <div class="col">
                <div class="text-body2 text-weight-medium">Thu Trang</div>
                <div class="text-caption text-grey-6">Streak: 8</div>
              </div>
              <div class="text-right">
                <div class="text-h6 text-weight-bold">1,834</div>
                <div class="text-caption text-grey-6">Câu đúng</div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- History Section -->
        <q-card>
          <q-card-section class="border-bottom q-pa-md">
            <div class="row items-center q-gutter-sm">
              <q-icon name="history" size="20px" />
              <div class="text-subtitle1 text-weight-medium">Lịch sử câu hỏi</div>
            </div>
            <div class="text-caption text-grey-6">20 câu hỏi gần nhất</div>
          </q-card-section>

          <q-card-section class="q-pa-md">
            <!-- History Item 1 -->
            <div class="history-item bg-blue-1 q-pa-sm q-mb-sm rounded border-blue-2">
              <div class="text-body2 text-weight-medium q-mb-xs">
                Dịch từ "Beautiful" sang tiếng Việt
              </div>
              <div class="row justify-between items-center q-mb-xs">
                <div class="text-caption text-green-7">Đáp án: "đẹp"</div>
                <div class="text-caption text-grey-6">10:30 - 26/07/2024</div>
              </div>
              <div class="row justify-between items-center">
                <div class="row items-center q-gutter-xs">
                  <q-icon name="people" size="12px" />
                  <span class="text-caption text-green-7">15 đúng</span>
                  <span class="text-caption text-grey-6">/</span>
                  <span class="text-caption text-grey-6">23 trả lời</span>
                </div>
                <div class="text-caption text-blue-6 cursor-pointer">▼ Xem chi tiết</div>
              </div>
            </div>

            <!-- History Item 2 -->
            <div class="history-item bg-blue-1 q-pa-sm q-mb-sm rounded border-blue-2">
              <div class="text-body2 text-weight-medium q-mb-xs">
                Dịch từ "Happy" sang tiếng Việt
              </div>
              <div class="row justify-between items-center q-mb-xs">
                <div class="text-caption text-green-7">Đáp án: "hạnh phúc"</div>
                <div class="text-caption text-grey-6">10:25 - 26/07/2024</div>
              </div>
              <div class="row justify-between items-center">
                <div class="row items-center q-gutter-xs">
                  <q-icon name="people" size="12px" />
                  <span class="text-caption text-green-7">12 đúng</span>
                  <span class="text-caption text-grey-6">/</span>
                  <span class="text-caption text-grey-6">18 trả lời</span>
                </div>
                <div class="text-caption text-blue-6 cursor-pointer">▼ Xem chi tiết</div>
              </div>
            </div>

            <!-- History Item 3 -->
            <div class="history-item bg-blue-1 q-pa-sm rounded border-blue-2">
              <div class="text-body2 text-weight-medium q-mb-xs">
                Dịch từ "Wonderful" sang tiếng Việt
              </div>
              <div class="row justify-between items-center q-mb-xs">
                <div class="text-caption text-green-7">Đáp án: "tuyệt vời"</div>
                <div class="text-caption text-grey-6">10:20 - 26/07/2024</div>
              </div>
              <div class="row justify-between items-center">
                <div class="row items-center q-gutter-xs">
                  <q-icon name="people" size="12px" />
                  <span class="text-caption text-green-7">18 đúng</span>
                  <span class="text-caption text-grey-6">/</span>
                  <span class="text-caption text-grey-6">25 trả lời</span>
                </div>
                <div class="text-caption text-blue-6 cursor-pointer">▼ Xem chi tiết</div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-section q-mt-xl q-pt-xl text-center">
      <div class="text-h4 text-weight-bold text-blue-grey-9 q-mb-md">
        Học Tập Thông Minh<br />Cùng Bạn Bè
      </div>
      <div class="text-body1 text-grey-6 q-mb-xl" style="max-width: 600px; margin: 0 auto">
        Khám phá kiến thức mới mỗi ngày với câu hỏi ngẫu nhiên, thử thách bạn bè và leo lên bảng xếp
        hạng!
      </div>

      <div class="row justify-center q-gutter-lg">
        <!-- Feature 1 -->
        <q-card class="feature-card q-pa-lg text-center" style="width: 280px; height: 220px">
          <div class="feature-icon bg-blue-6 q-mx-auto q-mb-md">
            <q-icon name="school" color="white" size="24px" />
          </div>
          <div class="text-h6 text-weight-medium text-blue-grey-9 q-mb-sm">Học ngẫu nhiên</div>
          <div class="text-body2 text-grey-6">
            Khám phá kiến thức mới với câu hỏi được chọn ngẫu nhiên từ kho dữ liệu phong phú
          </div>
        </q-card>

        <!-- Feature 2 -->
        <q-card class="feature-card q-pa-lg text-center" style="width: 280px; height: 220px">
          <div class="feature-icon bg-teal q-mx-auto q-mb-md">
            <q-icon name="people" color="white" size="24px" />
          </div>
          <div class="text-h6 text-weight-medium text-blue-grey-9 q-mb-sm">Thử thách bạn bè</div>
          <div class="text-body2 text-grey-6">
            Tạo cuộc thi với bạn bè và xem ai là người giỏi nhất
          </div>
        </q-card>

        <!-- Feature 3 -->
        <q-card class="feature-card q-pa-lg text-center" style="width: 280px; height: 220px">
          <div class="feature-icon bg-light-blue q-mx-auto q-mb-md">
            <q-icon name="emoji_events" color="white" size="24px" />
          </div>
          <div class="text-h6 text-weight-medium text-blue-grey-9 q-mb-sm">Bảng xếp hạng</div>
          <div class="text-body2 text-grey-6">
            Theo dõi tiến trình và so sánh thành tích với người khác
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const messageInput = ref('')
</script>

<style scoped>
.chat-card {
  height: 600px;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  max-height: 400px;
}

.message-bubble {
  max-width: 70%;
  border-radius: 8px;
}

.border-bottom {
  border-bottom: 1px solid #e0e0e0;
}

.border-blue-2 {
  border: 1px solid #dbeafe;
}

.history-item:hover {
  background-color: #f3f4f6 !important;
}

.leaderboard-item:hover {
  background-color: #f9fafb;
}

.features-section {
  background: linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%);
  border-radius: 20px;
  padding: 60px 40px;
  margin: 0 -24px;
}

.feature-card {
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
