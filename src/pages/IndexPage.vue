<template>
  <q-page class="landing-page">
    <!-- Hero Section with Beautiful Gradient -->
    <section class="hero-section">
      <div class="hero-container">
        <!-- Floating Animation Elements -->
        <div class="floating-elements">
          <div class="float-item float-1">🚀</div>
          <div class="float-item float-2">✨</div>
          <div class="float-item float-3">🎯</div>
          <div class="float-item float-4">💡</div>
        </div>

        <!-- Hero Icon with Animation -->
        <div class="hero-icon-wrapper">
          <q-avatar size="120px" class="hero-avatar">
            <q-icon name="school" size="60px" color="white" />
          </q-avatar>
          <div class="pulse-ring"></div>
          <div class="pulse-ring pulse-ring-delay"></div>
        </div>

        <!-- Hero Content -->
        <div class="hero-content">
          <h1 class="hero-title">
            Học Tiếng Anh Thông Qua
            <span class="gradient-text">Trò Chuyện AI</span>
          </h1>
          
          <p class="hero-description">
            🤖 Khám phá cách học tiếng Anh hiệu quả nhất với AI chatbot thông minh, 
            thách đấu bạn bè và hệ thống phần thưởng hấp dẫn.
          </p>

          <!-- CTA Buttons -->
          <div class="cta-buttons">
            <q-btn
              size="lg"
              class="primary-cta"
              unelevated
              rounded
              @click="showRegister"
            >
              <q-icon name="rocket_launch" size="20px" class="q-mr-sm" />
              Bắt Đầu Miễn Phí
              <q-icon name="arrow_forward" size="20px" class="q-ml-sm" />
            </q-btn>

            <q-btn
              size="lg"
              class="secondary-cta"
              outline
              rounded
              @click="showLogin"
            >
              <q-icon name="play_arrow" size="20px" class="q-mr-sm" />
              Đăng Nhập
            </q-btn>
          </div>
        </div>

        <!-- Beautiful Stats Cards -->
        <div class="stats-grid">
          <q-card class="stat-card">
            <q-card-section class="stat-content">
              <q-avatar size="48px" color="blue-4" text-color="white">
                <q-icon name="people" />
              </q-avatar>
              <div class="stat-info">
                <div class="stat-number">10,000+</div>
                <div class="stat-label">Người học</div>
              </div>
            </q-card-section>
          </q-card>

          <q-card class="stat-card">
            <q-card-section class="stat-content">
              <q-avatar size="48px" color="purple-4" text-color="white">
                <q-icon name="quiz" />
              </q-avatar>
              <div class="stat-info">
                <div class="stat-number">50,000+</div>
                <div class="stat-label">Câu hỏi</div>
              </div>
            </q-card-section>
          </q-card>

          <q-card class="stat-card">
            <q-card-section class="stat-content">
              <q-avatar size="48px" color="orange-4" text-color="white">
                <q-icon name="star" />
              </q-avatar>
              <div class="stat-info">
                <div class="stat-number">95%</div>
                <div class="stat-label">Hài lòng</div>
              </div>
            </q-card-section>
          </q-card>

          <q-card class="stat-card">
            <q-card-section class="stat-content">
              <q-avatar size="48px" color="green-4" text-color="white">
                <q-icon name="support_agent" />
              </q-avatar>
              <div class="stat-info">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Hỗ trợ</div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-emoji">🌟</span>
            Tại Sao Chọn Lingo?
          </h2>
          <p class="section-subtitle">
            Những tính năng độc đáo giúp bạn học tiếng Anh hiệu quả và thú vị hơn bao giờ hết
          </p>
        </div>

        <div class="features-grid">
          <!-- Feature 1 -->
          <q-card class="feature-card">
            <q-card-section>
              <div class="feature-icon">
                <q-avatar size="64px" color="blue-6" text-color="white">
                  <q-icon name="smart_toy" size="32px" />
                </q-avatar>
              </div>
              <h3 class="feature-title">AI Chatbot Thông Minh</h3>
              <p class="feature-description">
                Học tiếng Anh qua trò chuyện tự nhiên với AI bot được thiết kế đặc biệt
              </p>
              <q-btn 
                flat 
                color="blue-6" 
                label="Tìm hiểu thêm"
                icon-right="arrow_forward"
                class="feature-btn"
              />
            </q-card-section>
          </q-card>

          <!-- Feature 2 -->
          <q-card class="feature-card">
            <q-card-section>
              <div class="feature-icon">
                <q-avatar size="64px" color="purple-6" text-color="white">
                  <q-icon name="people" size="32px" />
                </q-avatar>
              </div>
              <h3 class="feature-title">Thách Đấu Bạn Bè</h3>
              <p class="feature-description">
                Cạnh tranh với bạn bè trong các cuộc thi tiếng Anh thú vị và hấp dẫn
              </p>
              <q-btn 
                flat 
                color="purple-6" 
                label="Tìm hiểu thêm"
                icon-right="arrow_forward"
                class="feature-btn"
              />
            </q-card-section>
          </q-card>

          <!-- Feature 3 -->
          <q-card class="feature-card">
            <q-card-section>
              <div class="feature-icon">
                <q-avatar size="64px" color="orange-6" text-color="white">
                  <q-icon name="emoji_events" size="32px" />
                </q-avatar>
              </div>
              <h3 class="feature-title">Hệ Thống Xếp Hạng</h3>
              <p class="feature-description">
                Theo dõi tiến bộ và cạnh tranh với hàng nghìn người học khác
              </p>
              <q-btn 
                flat 
                color="orange-6" 
                label="Tìm hiểu thêm"
                icon-right="arrow_forward"
                class="feature-btn"
              />
            </q-card-section>
          </q-card>

          <!-- Feature 4 -->
          <q-card class="feature-card">
            <q-card-section>
              <div class="feature-icon">
                <q-avatar size="64px" color="green-6" text-color="white">
                  <q-icon name="assignment" size="32px" />
                </q-avatar>
              </div>
              <h3 class="feature-title">Nhiệm Vụ Hàng Ngày</h3>
              <p class="feature-description">
                Hoàn thành các nhiệm vụ để duy trì động lực và nhận phần thưởng
              </p>
              <q-btn 
                flat 
                color="green-6" 
                label="Tìm hiểu thêm"
                icon-right="arrow_forward"
                class="feature-btn"
              />
            </q-card-section>
          </q-card>

          <!-- Feature 5 -->
          <q-card class="feature-card">
            <q-card-section>
              <div class="feature-icon">
                <q-avatar size="64px" color="red-6" text-color="white">
                  <q-icon name="redeem" size="32px" />
                </q-avatar>
              </div>
              <h3 class="feature-title">Đổi Thưởng Hấp Dẫn</h3>
              <p class="feature-description">
                Quy đổi điểm thành thẻ cào điện thoại và nhiều phần quà khác
              </p>
              <q-btn 
                flat 
                color="red-6" 
                label="Tìm hiểu thêm"
                icon-right="arrow_forward"
                class="feature-btn"
              />
            </q-card-section>
          </q-card>

          <!-- Feature 6 -->
          <q-card class="feature-card">
            <q-card-section>
              <div class="feature-icon">
                <q-avatar size="64px" color="teal-6" text-color="white">
                  <q-icon name="analytics" size="32px" />
                </q-avatar>
              </div>
              <h3 class="feature-title">Thống Kê Chi Tiết</h3>
              <p class="feature-description">
                Theo dõi chi tiết quá trình học tập với biểu đồ và báo cáo
              </p>
              <q-btn 
                flat 
                color="teal-6" 
                label="Tìm hiểu thêm"
                icon-right="arrow_forward"
                class="feature-btn"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works-section">
      <div class="works-container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-emoji">⚡</span>
            Cách Thức Hoạt Động
          </h2>
          <p class="section-subtitle">
            Chỉ 3 bước đơn giản để bắt đầu hành trình học tiếng Anh
          </p>
        </div>

        <div class="steps-timeline">
          <!-- Step 1 -->
          <div class="step-item">
            <div class="step-number">
              <q-avatar size="80px" color="primary" text-color="white">
                <span class="step-digit">1</span>
              </q-avatar>
            </div>
            <q-card class="step-card">
              <q-card-section>
                <h3 class="step-title">🚀 Đăng Ký Miễn Phí</h3>
                <p class="step-description">
                  Tạo tài khoản chỉ trong 30 giây với email hoặc số điện thoại
                </p>
                <q-chip color="primary" text-color="white" icon="flash_on">
                  Nhanh chóng & Dễ dàng
                </q-chip>
              </q-card-section>
            </q-card>
          </div>

          <!-- Timeline connector -->
          <div class="timeline-connector"></div>

          <!-- Step 2 -->
          <div class="step-item">
            <div class="step-number">
              <q-avatar size="80px" color="secondary" text-color="white">
                <span class="step-digit">2</span>
              </q-avatar>
            </div>
            <q-card class="step-card">
              <q-card-section>
                <h3 class="step-title">💬 Bắt Đầu Chat</h3>
                <p class="step-description">
                  Trò chuyện với AI bot và trả lời các câu hỏi tiếng Anh thú vị
                </p>
                <q-chip color="secondary" text-color="white" icon="psychology">
                  AI Thông minh
                </q-chip>
              </q-card-section>
            </q-card>
          </div>

          <!-- Timeline connector -->
          <div class="timeline-connector"></div>

          <!-- Step 3 -->
          <div class="step-item">
            <div class="step-number">
              <q-avatar size="80px" color="positive" text-color="white">
                <span class="step-digit">3</span>
              </q-avatar>
            </div>
            <q-card class="step-card">
              <q-card-section>
                <h3 class="step-title">🎁 Nhận Phần Thưởng</h3>
                <p class="step-description">
                  Tích lũy điểm và đổi lấy thẻ cào, quà tặng hấp dẫn
                </p>
                <q-chip color="positive" text-color="white" icon="celebration">
                  Phần thưởng hấp dẫn
                </q-chip>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Final CTA -->
        <div class="final-cta">
          <q-btn
            size="xl"
            color="primary"
            label="Bắt Đầu Ngay Hôm Nay"
            icon="rocket_launch"
            unelevated
            rounded
            @click="showRegister"
            class="cta-final-btn"
          />
          <p class="cta-note">💯 Miễn phí hoàn toàn • Không cần thẻ tín dụng</p>
        </div>
      </div>
    </section>

    <!-- Login Dialog -->
    <q-dialog v-model="showLoginDialog" persistent transition-show="scale" transition-hide="scale">
      <q-card style="min-width: 400px" class="login-dialog">
        <q-card-section class="dialog-header">
          <div class="dialog-title">
            <q-avatar size="48px" color="primary" text-color="white">
              <q-icon name="login" />
            </q-avatar>
            <div>
              <h4>🚀 Đăng nhập EnglishBot</h4>
              <p>Chào mừng bạn trở lại! Hãy đăng nhập để tiếp tục học tập.</p>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <q-btn
            color="primary"
            label="🚀 Đăng nhập Demo (Phước Thông)"
            class="full-width q-py-md"
            unelevated
            rounded
            @click="doLogin"
          />
          <div class="text-center q-mt-sm text-caption text-grey-6">
            Click để đăng nhập nhanh với tài khoản demo
          </div>
        </q-card-section>

        <q-card-actions align="center" class="q-pb-lg">
          <q-btn flat label="Hủy" @click="showLoginDialog = false" />
          <q-btn
            flat
            label="Chưa có tài khoản? Đăng ký"
            color="primary"
            @click="switchToRegister"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Register Dialog -->
    <q-dialog v-model="showRegisterDialog" persistent transition-show="scale" transition-hide="scale">
      <q-card style="min-width: 400px" class="register-dialog">
        <q-card-section class="dialog-header">
          <div class="dialog-title">
            <q-avatar size="48px" color="secondary" text-color="white">
              <q-icon name="person_add" />
            </q-avatar>
            <div>
              <h4>✨ Đăng ký EnglishBot</h4>
              <p>Tạo tài khoản mới để bắt đầu hành trình học tiếng Anh!</p>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <q-btn
            color="secondary"
            label="✨ Đăng ký Demo (Phước Thông)"
            class="full-width q-py-md"
            unelevated
            rounded
            @click="handleRegister({
              name: 'Phước Thông',
              email: 'phuocthoang@demo.com',
            })"
          />
          <div class="text-center q-mt-sm text-caption text-grey-6">
            Click để tạo tài khoản demo và trải nghiệm ngay
          </div>
        </q-card-section>

        <q-card-actions align="center" class="q-pb-lg">
          <q-btn flat label="Hủy" @click="showRegisterDialog = false" />
          <q-btn
            flat
            label="Đã có tài khoản? Đăng nhập"
            color="secondary"
            @click="switchToLogin"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useAuthStore } from "../stores/auth";

const authStore = useAuthStore();
const router = useRouter();
const $q = useQuasar();

// Dialog states
const showLoginDialog = ref(false);
const showRegisterDialog = ref(false);

// Methods
const showLogin = () => {
  console.log("IndexPage: Show login clicked!");
  showRegisterDialog.value = false;
  showLoginDialog.value = true;
};

const showRegister = () => {
  console.log("IndexPage: Show register clicked!");
  showLoginDialog.value = false;
  showRegisterDialog.value = true;
};

const handleLogin = (userData: { name: string; email: string }) => {
  console.log("IndexPage: Login handler called with:", userData);
  authStore.login(userData);
  showLoginDialog.value = false;
  $q.notify({
    type: "positive",
    message: `🎉 Chào mừng ${userData.name}!`,
    position: "top",
    timeout: 3000,
    actions: [{ icon: 'close', color: 'white' }]
  });
  router.push("/profile");
};

const handleRegister = (userData: { name: string; email: string }) => {
  console.log("IndexPage: Register handler called with:", userData);
  authStore.login(userData);
  showRegisterDialog.value = false;
  $q.notify({
    type: "positive",
    message: `🚀 Đăng ký thành công! Chào mừng ${userData.name}!`,
    position: "top",
    timeout: 3000,
    actions: [{ icon: 'close', color: 'white' }]
  });
  router.push("/profile");
};

const switchToRegister = () => {
  showLoginDialog.value = false;
  showRegisterDialog.value = true;
};

const switchToLogin = () => {
  showRegisterDialog.value = false;
  showLoginDialog.value = true;
};

const doLogin = () => {
  console.log("IndexPage doLogin called!");
  handleLogin({ name: "Phước Thông", email: "phuocthoang@demo.com" });
};
</script>

<style scoped>
.landing-page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 2;
}

/* Floating Elements Animation */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.float-item {
  position: absolute;
  font-size: 24px;
  opacity: 0.7;
  animation: float 6s ease-in-out infinite;
}

.float-1 { top: 20%; left: 10%; animation-delay: 0s; }
.float-2 { top: 30%; right: 15%; animation-delay: 2s; }
.float-3 { bottom: 30%; left: 20%; animation-delay: 4s; }
.float-4 { bottom: 20%; right: 10%; animation-delay: 1s; }

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

/* Hero Avatar with Pulse Effect */
.hero-icon-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 40px;
}

.hero-avatar {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 3;
}

.pulse-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: pulse 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
}

.pulse-ring-delay {
  animation-delay: 1s;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 0;
  }
}

/* Hero Content */
.hero-content {
  margin-bottom: 60px;
}

.hero-title {
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 24px 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.gradient-text {
  background: linear-gradient(45deg, #ffd89b 0%, #19547b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-top: 8px;
}

.hero-description {
  font-size: clamp(16px, 2.5vw, 22px);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 40px auto;
  opacity: 0.95;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 80px;
  flex-wrap: wrap;
}

.primary-cta {
  background: linear-gradient(45deg, #ff6b6b, #ffd93d);
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 16px 32px;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
  transition: all 0.3s ease;
}

.primary-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 107, 107, 0.6);
}

.secondary-cta {
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: white;
  font-size: 18px;
  font-weight: 600;
  padding: 16px 32px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.secondary-cta:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
}

/* Stats Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.stat-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: none;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(31, 38, 135, 0.5);
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
}

.stat-info {
  text-align: left;
}

.stat-number {
  font-size: 28px;
  font-weight: 700;
  color: #1a202c;
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #718096;
  font-weight: 500;
}

/* Features Section */
.features-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 100px 0;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.title-emoji {
  font-size: 1.2em;
}

.section-subtitle {
  font-size: clamp(16px, 2vw, 20px);
  color: #718096;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
}

.feature-card {
  background: white;
  border-radius: 20px;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  overflow: hidden;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  text-align: center;
  margin-bottom: 24px;
}

.feature-title {
  font-size: 22px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 16px 0;
  text-align: center;
}

.feature-description {
  color: #718096;
  line-height: 1.6;
  margin: 0 0 24px 0;
  text-align: center;
}

.feature-btn {
  width: 100%;
  margin-top: 8px;
}

/* How It Works Section */
.how-it-works-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 100px 0;
  color: white;
}

.works-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.steps-timeline {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
  margin: 0 auto 80px auto;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 32px;
}

.step-number {
  flex-shrink: 0;
}

.step-digit {
  font-size: 32px;
  font-weight: 700;
}

.step-card {
  flex: 1;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: none;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.step-title {
  font-size: 24px;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 12px 0;
}

.step-description {
  color: #718096;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.timeline-connector {
  width: 4px;
  height: 40px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
  margin: 0 auto;
  border-radius: 2px;
}

/* Final CTA */
.final-cta {
  text-align: center;
}

.cta-final-btn {
  background: linear-gradient(45deg, #ff6b6b, #ffd93d);
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 40px;
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
  transition: all 0.3s ease;
}

.cta-final-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(255, 107, 107, 0.6);
}

.cta-note {
  margin: 16px 0 0 0;
  opacity: 0.9;
  font-size: 16px;
}

/* Dialog Styles */
.login-dialog,
.register-dialog {
  border-radius: 16px;
  overflow: hidden;
}

.dialog-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.dialog-title {
  display: flex;
  align-items: center;
  gap: 16px;
}

.dialog-title h4 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
}

.dialog-title p {
  margin: 4px 0 0 0;
  opacity: 0.9;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-container,
  .features-container,
  .works-container {
    padding: 0 20px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .primary-cta,
  .secondary-cta {
    width: 100%;
    max-width: 300px;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .step-item {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .step-card {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .stat-content {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
