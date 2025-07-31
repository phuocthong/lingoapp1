<template>
  <q-page class="introduction-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <!-- AI Icon -->
        <div class="ai-icon-wrapper">
          <q-icon name="smart_toy" class="ai-icon" />
        </div>

        <!-- Main Title -->
        <div class="hero-content">
          <h1 class="hero-title">
            Học Tiếng Anh Thông Qua<br />
            <span class="hero-title-highlight">Trò Chuyện AI</span>
          </h1>

          <p class="hero-description">
            Khám phá cách học tiếng Anh hiệu quả nhất với AI chatbot thông minh, thách đấu bạn bè và
            hệ thống phần thưởng hấp dẫn.
          </p>

          <!-- Action Buttons -->
          <div class="hero-actions">
            <q-btn color="primary" size="lg" class="hero-btn-primary" no-caps @click="startFree">
              <q-icon name="auto_awesome" class="q-mr-sm" />
              Bắt Đầu Miễn Phí
              <q-icon name="arrow_forward" class="q-ml-sm" />
            </q-btn>

            <q-btn
              outline
              color="purple"
              size="lg"
              class="hero-btn-secondary"
              no-caps
              @click="login"
            >
              <q-icon name="play_arrow" class="q-mr-sm" />
              Đăng Nhập
            </q-btn>
          </div>

          <!-- Stats -->
          <div class="hero-stats">
            <div class="stat-item">
              <q-icon name="people" class="stat-icon" />
              <div class="stat-number">10,000+</div>
              <div class="stat-label">Người học</div>
            </div>
            <div class="stat-item">
              <q-icon name="quiz" class="stat-icon" />
              <div class="stat-number">50,000+</div>
              <div class="stat-label">Câu hỏi</div>
            </div>
            <div class="stat-item">
              <q-icon name="star" class="stat-icon" />
              <div class="stat-number">95%</div>
              <div class="stat-label">Hài lòng</div>
            </div>
            <div class="stat-item">
              <q-icon name="access_time" class="stat-icon" />
              <div class="stat-number">24/7</div>
              <div class="stat-label">Hỗ trợ</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Tại Sao Chọn Lingo?</h2>
          <p class="section-description">
            Những tính năng độc đáo giúp bạn học tiếng Anh hiệu quả và thú vị hơn bao giờ hết
          </p>
        </div>

        <div class="features-grid">
          <!-- Feature 1 -->
          <div class="feature-card">
            <div class="feature-icon">
              <q-icon name="smart_toy" />
            </div>
            <h3 class="feature-title">AI Chatbot Thông Minh</h3>
            <p class="feature-description">
              Học tiếng Anh qua trò chuyện tự nhiên với AI bot được thiết kế đặc biệt
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="feature-card">
            <div class="feature-icon">
              <q-icon name="people" />
            </div>
            <h3 class="feature-title">Thách Đấu Bạn Bè</h3>
            <p class="feature-description">
              Cạnh tranh v��i bạn bè trong các cuộc thi tiếng Anh thú vị và hấp dẫn
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="feature-card">
            <div class="feature-icon">
              <q-icon name="emoji_events" />
            </div>
            <h3 class="feature-title">Hệ Thống Xếp Hạng</h3>
            <p class="feature-description">
              Theo dõi tiến bộ và cạnh tranh với hàng nghìn người học khác
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="feature-card">
            <div class="feature-icon">
              <q-icon name="task_alt" />
            </div>
            <h3 class="feature-title">Nhiệm Vụ Hàng Ngày</h3>
            <p class="feature-description">
              Hoàn thành các nhiệm vụ để duy trì động lực và nhận phần thưởng
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="feature-card">
            <div class="feature-icon">
              <q-icon name="card_giftcard" />
            </div>
            <h3 class="feature-title">Đổi Thưởng Hấp Dẫn</h3>
            <p class="feature-description">
              Quy đổi điểm thành thẻ cào điện thoại và nhiều phần quà khác
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="feature-card">
            <div class="feature-icon">
              <q-icon name="analytics" />
            </div>
            <h3 class="feature-title">Thống Kê Chi Tiết</h3>
            <p class="feature-description">
              Theo dõi chi tiết quá trình học tập với biểu đồ và báo cáo
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Cách Thức Hoạt Động</h2>
          <p class="section-description">Chỉ 3 bước đơn giản để bắt đầu hành trình học tiếng Anh</p>
        </div>

        <div class="steps-container">
          <!-- Step 1 -->
          <div class="step-item">
            <div class="step-number">1</div>
            <h3 class="step-title">Đăng Ký Miễn Phí</h3>
            <p class="step-description">
              Tạo tài khoản chỉ trong 30 giây với email hoặc số điện thoại
            </p>
          </div>

          <!-- Step 2 -->
          <div class="step-item">
            <div class="step-number">2</div>
            <h3 class="step-title">Bắt Đầu Chat</h3>
            <p class="step-description">
              Trò chuyện với AI bot và trả lời các câu hỏi tiếng Anh thú vị
            </p>
          </div>

          <!-- Step 3 -->
          <div class="step-item">
            <div class="step-number">3</div>
            <h3 class="step-title">Nhận Phần Thưởng</h3>
            <p class="step-description">Tích lũy điểm và đổi lấy thẻ cào, quà tặng hấp dẫn</p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const startFree = () => {
  // Navigate to registration or challenges page
  router.push('/challenges')
}

const login = () => {
  // Navigate to dashboard
  router.push('/dashboard')
}
</script>

<style scoped>
.introduction-page {
  background: linear-gradient(135deg, #f0f8ff 0%, #f5f3ff 100%);
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  padding: 80px 0 120px;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(109, 40, 217, 0.1) 100%);
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  text-align: center;
}

.ai-icon-wrapper {
  margin-bottom: 40px;
}

.ai-icon {
  font-size: 64px;
  color: white;
  background: linear-gradient(135deg, #2563eb 0%, #6d28d9 100%);
  padding: 20px;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(32px, 5vw, 60px);
  font-weight: 700;
  color: #111827;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-title-highlight {
  background: linear-gradient(135deg, #2563eb 0%, #6d28d9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 20px;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.hero-btn-primary {
  background: linear-gradient(135deg, #2563eb 0%, #6d28d9 100%);
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.hero-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(37, 99, 235, 0.4);
}

.hero-btn-secondary {
  padding: 12px 32px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  border: 2px solid #e9d5ff;
  background: white;
  color: #5b21b6;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 32px;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
}

.stat-icon {
  font-size: 24px;
  color: #6d28d9;
  background: #ede9fe;
  padding: 12px;
  border-radius: 50%;
  margin-bottom: 12px;
}

.stat-number {
  font-size: 30px;
  font-weight: 700;
  color: #111827;
  line-height: 1.2;
}

.stat-label {
  font-size: 16px;
  color: #4b5563;
  font-weight: 500;
}

/* Sections */
.features-section {
  padding: 80px 0;
  background: white;
}

.how-it-works-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
}

.section-title {
  font-size: 36px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
}

.section-description {
  font-size: 20px;
  color: #4b5563;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.feature-card {
  background: white;
  padding: 32px 24px;
  border-radius: 12px;
  text-align: center;
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
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
}

.feature-icon .q-icon {
  font-size: 32px;
  color: #2563eb;
}

.feature-title {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
  letter-spacing: -0.025em;
}

.feature-description {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.6;
}

/* Steps */
.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 48px;
}

.step-item {
  text-align: center;
}

.step-number {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #2563eb 0%, #6d28d9 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  margin: 0 auto 24px;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.3);
}

.step-title {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 12px;
}

.step-description {
  font-size: 16px;
  color: #4b5563;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    padding: 60px 0 80px;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .hero-btn-primary,
  .hero-btn-secondary {
    width: 100%;
    max-width: 300px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .steps-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .section-container {
    padding: 0 16px;
  }

  .hero-container {
    padding: 0 16px;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .stat-number {
    font-size: 24px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-description {
    font-size: 18px;
  }
}
</style>
