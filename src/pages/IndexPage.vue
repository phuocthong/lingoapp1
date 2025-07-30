<template>
  <q-page class="bg-white">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <!-- Hero Icon -->
        <div class="hero-icon">
          <q-icon name="computer" size="48px" color="white" />
        </div>

        <!-- Hero Title -->
        <div class="hero-titles">
          <h1 class="hero-main-title">Học Tiếng Anh Thông Qua</h1>
          <h1 class="hero-sub-title">Trò Chuyện AI</h1>
        </div>

        <!-- Hero Description -->
        <p class="hero-description">
          Khám phá cách học tiếng Anh hiệu quả nhất với AI chatbot thông minh, thách đấu bạn bè và hệ thống phần thưởng hấp dẫn.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-buttons">
          <q-btn
            class="primary-cta-btn"
            no-caps
            @click="showRegister"
          >
            <q-icon name="auto_awesome" size="16px" />
            Bắt Đầu Miễn Phí
            <q-icon name="arrow_forward" size="16px" />
          </q-btn>

          <q-btn
            class="secondary-cta-btn"
            no-caps
            @click="showLogin"
          >
            <q-icon name="play_arrow" size="16px" />
            Đăng Nhập
          </q-btn>
        </div>

        <!-- Statistics -->
        <div class="stats-row">
          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <q-icon name="people" size="20px" color="primary" />
            </div>
            <div class="stat-number">10,000+</div>
            <div class="stat-label">Người học</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <q-icon name="quiz" size="20px" color="primary" />
            </div>
            <div class="stat-number">50,000+</div>
            <div class="stat-label">Câu hỏi</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <q-icon name="star" size="20px" color="primary" />
            </div>
            <div class="stat-number">95%</div>
            <div class="stat-label">Hài lòng</div>
          </div>

          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <q-icon name="schedule" size="20px" color="primary" />
            </div>
            <div class="stat-number">24/7</div>
            <div class="stat-label">Hỗ trợ</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <div class="section-header">
          <h2 class="section-title">Tại Sao Chọn Lingo?</h2>
          <p class="section-subtitle">
            Những tính năng độc đáo giúp bạn học tiếng Anh hiệu quả và thú vị hơn bao giờ hết
          </p>
        </div>

        <div class="features-grid">
          <!-- Row 1 -->
          <q-card class="feature-card">
            <q-card-section class="feature-card-content">
              <div class="feature-icon">
                <q-icon name="computer" size="32px" color="primary" />
              </div>
              <h3 class="feature-title">AI Chatbot Thông Minh</h3>
              <p class="feature-desc">
                Học tiếng Anh qua trò chuyện tự nhiên với AI bot được thiết kế đặc biệt
              </p>
            </q-card-section>
          </q-card>

          <q-card class="feature-card">
            <q-card-section class="feature-card-content">
              <div class="feature-icon">
                <q-icon name="people" size="32px" color="primary" />
              </div>
              <h3 class="feature-title">Thách Đấu Bạn Bè</h3>
              <p class="feature-desc">
                Cạnh tranh với bạn bè trong các cuộc thi tiếng Anh thú vị và hấp dẫn
              </p>
            </q-card-section>
          </q-card>

          <q-card class="feature-card">
            <q-card-section class="feature-card-content">
              <div class="feature-icon">
                <q-icon name="emoji_events" size="32px" color="primary" />
              </div>
              <h3 class="feature-title">Hệ Thống Xếp Hạng</h3>
              <p class="feature-desc">
                Theo dõi ti���n bộ và cạnh tranh với hàng nghìn người học khác
              </p>
            </q-card-section>
          </q-card>

          <!-- Row 2 -->
          <q-card class="feature-card">
            <q-card-section class="feature-card-content">
              <div class="feature-icon">
                <q-icon name="target" size="32px" color="primary" />
              </div>
              <h3 class="feature-title">Nhiệm Vụ Hàng Ngày</h3>
              <p class="feature-desc">
                Hoàn thành các nhiệm vụ để duy trì động lực và nhận phần thưởng
              </p>
            </q-card-section>
          </q-card>

          <q-card class="feature-card">
            <q-card-section class="feature-card-content">
              <div class="feature-icon">
                <q-icon name="redeem" size="32px" color="primary" />
              </div>
              <h3 class="feature-title">Đổi Thưởng Hấp Dẫn</h3>
              <p class="feature-desc">
                Quy đổi điểm thành thẻ cào điện thoại và nhiều phần quà khác
              </p>
            </q-card-section>
          </q-card>

          <q-card class="feature-card">
            <q-card-section class="feature-card-content">
              <div class="feature-icon">
                <q-icon name="analytics" size="32px" color="primary" />
              </div>
              <h3 class="feature-title">Thống Kê Chi Tiết</h3>
              <p class="feature-desc">
                Theo dõi chi tiết quá trình học tập với biểu đồ và báo cáo
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works-section">
      <div class="how-it-works-container">
        <div class="section-header">
          <h2 class="section-title">Cách Thức Hoạt Động</h2>
          <p class="section-subtitle">
            Chỉ 3 bước đơn giản để bắt đầu hành trình học tiếng Anh
          </p>
        </div>

        <div class="steps-grid">
          <div class="step-item">
            <div class="step-number">1</div>
            <h3 class="step-title">Đăng Ký Miễn Phí</h3>
            <p class="step-desc">
              Tạo tài khoản chỉ trong 30 giây với email hoặc số điện thoại
            </p>
          </div>

          <div class="step-item">
            <div class="step-number">2</div>
            <h3 class="step-title">Bắt Đầu Chat</h3>
            <p class="step-desc">
              Trò chuyện với AI bot và trả lời các câu hỏi tiếng Anh thú vị
            </p>
          </div>

          <div class="step-item">
            <div class="step-number">3</div>
            <h3 class="step-title">Nhận Phần Thưởng</h3>
            <p class="step-desc">
              Tích lũy điểm và đổi lấy thẻ cào, quà tặng hấp dẫn
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Login Dialog -->
    <q-dialog v-model="showLoginDialog" persistent>
      <q-card style="min-width: 400px" class="q-pa-md">
        <q-card-section>
          <div class="text-h6 text-center">🚀 Đăng nhập EnglishBot</div>
          <div class="text-subtitle2 text-center text-grey-6">
            Chào mừng bạn trở lại! Hãy đăng nhập để tiếp tục học tập.
          </div>
        </q-card-section>

        <q-card-section>
          <!-- Demo Login Button -->
          <div class="q-mb-lg">
            <q-btn
              color="primary"
              label="🚀 Đăng nhập Demo (Phước Thông)"
              class="full-width q-py-sm"
              @click="doLogin"
            />
            <div class="text-center q-mt-sm text-caption text-grey-6">
              Click để đăng nhập nhanh
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Hủy" @click="showLoginDialog = false" />
          <q-btn
            flat
            label="Chuyển sang Đăng ký"
            color="primary"
            @click="switchToRegister"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Register Dialog -->
    <q-dialog v-model="showRegisterDialog" persistent>
      <q-card style="min-width: 400px" class="q-pa-md">
        <q-card-section>
          <div class="text-h6 text-center">✨ Đăng ký EnglishBot</div>
          <div class="text-subtitle2 text-center text-grey-6">
            Tạo tài khoản mới để bắt đầu hành trình học tiếng Anh!
          </div>
        </q-card-section>

        <q-card-section>
          <!-- Demo Register Button -->
          <div class="q-mb-lg">
            <q-btn
              color="primary"
              label="✨ Đăng ký Demo (Phước Thông)"
              class="full-width q-py-sm"
              @click="handleRegister({
                name: 'Phước Thông',
                email: 'phuocthoang@demo.com',
              })"
            />
            <div class="text-center q-mt-sm text-caption text-grey-6">
              Click để tạo tài khoản demo
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Hủy" @click="showRegisterDialog = false" />
          <q-btn
            flat
            label="Đã có tài khoản? Đăng nhập"
            color="primary"
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

// Local state for dialogs
const showLoginDialog = ref(false);
const showRegisterDialog = ref(false);

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
    message: `Chào mừng ${userData.name}!`,
    position: "top",
  });
  router.push("/chat");
};

const handleRegister = (userData: { name: string; email: string }) => {
  console.log("IndexPage: Register handler called with:", userData);
  authStore.login(userData);
  showRegisterDialog.value = false;
  $q.notify({
    type: "positive",
    message: `Đăng ký thành công! Chào mừng ${userData.name}!`,
    position: "top",
  });
  router.push("/chat");
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
/* Hero Section */
.hero-section {
  background: linear-gradient(90deg, rgba(37, 99, 235, 0.1) 0%, rgba(109, 40, 217, 0.1) 100%);
  padding: 80px 0;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-container {
  max-width: 1136px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-icon {
  display: inline-flex;
  padding: 16px;
  border-radius: 50%;
  background: linear-gradient(90deg, #2563EB 0%, #6D28D9 100%);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 34px;
}

.hero-titles {
  margin-bottom: 34px;
}

.hero-main-title {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 60px;
  color: #111827;
  margin: 0 0 6px 0;
}

.hero-sub-title {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 60px;
  font-weight: 700;
  line-height: 60px;
  background: linear-gradient(90deg, #2563EB 0%, #6D28D9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.hero-description {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 32.5px;
  color: #4B5563;
  text-align: center;
  max-width: 732px;
  margin: 0 auto 34px auto;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.primary-cta-btn {
  background: linear-gradient(90deg, #2563EB 0%, #6D28D9 100%);
  color: white;
  padding: 8px 32px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 16px;
  text-transform: none;
}

.secondary-cta-btn {
  background: white;
  color: #5B21B6;
  border: 2px solid #E9D5FF;
  padding: 8px 32px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 16px;
  text-transform: none;
}

.stats-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stat-icon-wrapper {
  display: flex;
  padding: 8px;
  border-radius: 50%;
  background: #EDE9FE;
}

.stat-number {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: #111827;
  text-align: center;
}

.stat-label {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #4B5563;
  text-align: center;
}

/* Features Section */
.features-section {
  background: white;
  padding: 80px 0;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.section-header {
  text-align: center;
  margin-bottom: 64px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 40px;
  color: #111827;
  text-align: center;
  margin: 0 0 16px 0;
}

.section-subtitle {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #4B5563;
  text-align: center;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  max-width: 1140px;
  margin: 0 auto;
}

.feature-card {
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1);
  background: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.feature-card-content {
  text-align: center;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(90deg, #EFF6FF 0%, #F5F3FF 100%);
}

.feature-title {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.5px;
  color: #111827;
  text-align: center;
  margin: 0;
}

.feature-desc {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22.75px;
  color: #4B5563;
  text-align: center;
  margin: 0;
}

/* How It Works Section */
.how-it-works-section {
  background: linear-gradient(90deg, #EFF6FF 0%, #F5F3FF 100%);
  padding: 80px 0;
}

.how-it-works-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
}

.steps-grid {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
  flex-wrap: wrap;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 360px;
  flex: 1;
  min-width: 280px;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(90deg, #2563EB 0%, #6D28D9 100%);
  color: white;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 21px;
}

.step-title {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  color: #111827;
  text-align: center;
  margin: 0 0 21px 0;
}

.step-desc {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #4B5563;
  text-align: center;
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-main-title,
  .hero-sub-title {
    font-size: 36px;
    line-height: 40px;
  }
  
  .hero-description {
    font-size: 18px;
    line-height: 28px;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .primary-cta-btn,
  .secondary-cta-btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .stats-row {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .steps-grid {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  
  .section-title {
    font-size: 28px;
    line-height: 32px;
  }
  
  .section-subtitle {
    font-size: 16px;
    line-height: 24px;
  }
}

@media (max-width: 480px) {
  .hero-container,
  .features-container,
  .how-it-works-container {
    padding: 0 16px;
  }
  
  .hero-main-title,
  .hero-sub-title {
    font-size: 28px;
    line-height: 32px;
  }
  
  .hero-description {
    font-size: 16px;
    line-height: 24px;
  }
  
  .stats-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
