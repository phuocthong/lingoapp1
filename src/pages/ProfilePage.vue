<template>
  <q-page class="profile-page">
    <div class="profile-layout">
      <!-- Beautiful Sidebar with Gradient -->
      <q-card class="sidebar-card">
        <q-card-section class="sidebar-header">
          <div class="user-avatar-section">
            <q-avatar size="64px" class="user-avatar">
              <q-icon name="person" size="32px" color="white" />
            </q-avatar>
            <div class="user-info">
              <h4>{{ authStore.user?.name || 'Người dùng' }}</h4>
              <p>Level 15 • 1,250 điểm</p>
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-list class="nav-list">
          <q-item 
            clickable 
            v-ripple
            :class="{ 'active-nav': activeTab === 'dashboard' }"
            @click="setActiveTab('dashboard')"
          >
            <q-item-section avatar>
              <q-icon name="dashboard" size="24px" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="nav-label">Dashboard</q-item-label>
            </q-item-section>
          </q-item>

          <q-item 
            clickable 
            v-ripple
            :class="{ 'active-nav': activeTab === 'tasks' }"
            @click="setActiveTab('tasks')"
          >
            <q-item-section avatar>
              <q-icon name="assignment" size="24px" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="nav-label">Nhiệm vụ</q-item-label>
              <q-item-label caption>4 nhiệm vụ đang chờ</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-badge color="orange" rounded>4</q-badge>
            </q-item-section>
          </q-item>

          <q-item 
            clickable 
            v-ripple
            :class="{ 'active-nav': activeTab === 'friends' }"
            @click="setActiveTab('friends')"
          >
            <q-item-section avatar>
              <q-icon name="people" size="24px" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="nav-label">Bạn bè</q-item-label>
              <q-item-label caption>15 bạn bè</q-item-label>
            </q-item-section>
          </q-item>

          <q-item 
            clickable 
            v-ripple
            :class="{ 'active-nav': activeTab === 'exchange' }"
            @click="setActiveTab('exchange')"
          >
            <q-item-section avatar>
              <q-icon name="redeem" size="24px" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="nav-label">Đổi thưởng</q-item-label>
              <q-item-label caption>3 thẻ có sẵn</q-item-label>
            </q-item-section>
          </q-item>

          <q-item 
            clickable 
            v-ripple
            :class="{ 'active-nav': activeTab === 'settings' }"
            @click="setActiveTab('settings')"
          >
            <q-item-section avatar>
              <q-icon name="settings" size="24px" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="nav-label">Cài đặt</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>

      <!-- Main Content Area -->
      <div class="main-content-area">
        <!-- Tasks Tab (Default) -->
        <div v-if="activeTab === 'tasks'" class="content-section">
          <div class="section-header">
            <div class="header-title">
              <h3>📋 Nhiệm vụ của tôi</h3>
              <p>Hoàn thành nhiệm vụ để nhận điểm và phần thưởng</p>
            </div>
            <q-btn-toggle
              v-model="taskFilter"
              :options="[
                { label: 'Hàng ngày (1)', value: 'daily' },
                { label: 'Hàng tuần (3)', value: 'weekly' }
              ]"
              color="primary"
              text-color="grey-7"
              toggle-color="primary"
              toggle-text-color="white"
              unelevated
              rounded
            />
          </div>

          <div class="tasks-grid">
            <!-- Task Card 1 -->
            <q-card class="task-card gradient-border">
              <q-card-section>
                <div class="task-header">
                  <div class="task-icon">
                    <q-icon name="groups" size="20px" color="primary" />
                  </div>
                  <div class="task-info">
                    <h4>Thách đấu với 5 bạn bè</h4>
                    <p>Tham gia thách đấu với ít nhất 5 người bạn trong tuần</p>
                  </div>
                  <q-chip 
                    color="orange" 
                    text-color="white" 
                    icon="schedule"
                    size="sm"
                  >
                    3 ngày
                  </q-chip>
                </div>

                <q-linear-progress
                  :value="0.4"
                  size="12px"
                  rounded
                  color="purple"
                  track-color="purple-1"
                  class="q-my-md"
                />

                <div class="progress-info">
                  <span class="progress-text">Tiến độ: 2/5</span>
                  <span class="progress-percent">40%</span>
                </div>

                <div class="rewards-section">
                  <q-chip color="green" text-color="white" icon="stars" size="sm">
                    +200 XP
                  </q-chip>
                  <q-chip color="amber" text-color="white" icon="monetization_on" size="sm">
                    +100 điểm
                  </q-chip>
                </div>
              </q-card-section>

              <q-card-actions class="task-actions">
                <q-btn 
                  flat 
                  dense 
                  color="primary" 
                  icon="add"
                  @click="incrementTask(0)"
                >
                  +1
                </q-btn>
                <q-btn 
                  flat 
                  dense 
                  color="green" 
                  icon="check"
                  @click="completeTask(0)"
                >
                  Hoàn thành
                </q-btn>
                <q-btn 
                  flat 
                  dense 
                  color="red" 
                  icon="delete"
                  @click="deleteTask(0)"
                >
                  Xóa
                </q-btn>
              </q-card-actions>
            </q-card>

            <!-- Task Card 2 -->
            <q-card class="task-card gradient-border">
              <q-card-section>
                <div class="task-header">
                  <div class="task-icon">
                    <q-icon name="emoji_events" size="20px" color="orange" />
                  </div>
                  <div class="task-info">
                    <h4>Đạt top 10 leaderboard</h4>
                    <p>Leo lên top 10 bảng xếp hạng tuần này</p>
                  </div>
                  <q-chip 
                    color="red" 
                    text-color="white" 
                    icon="schedule"
                    size="sm"
                  >
                    1 ngày
                  </q-chip>
                </div>

                <q-linear-progress
                  :value="0"
                  size="12px"
                  rounded
                  color="orange"
                  track-color="orange-1"
                  class="q-my-md"
                />

                <div class="progress-info">
                  <span class="progress-text">Tiến độ: 0/1</span>
                  <span class="progress-percent">0%</span>
                </div>

                <div class="rewards-section">
                  <q-chip color="green" text-color="white" icon="stars" size="sm">
                    +300 XP
                  </q-chip>
                  <q-chip color="amber" text-color="white" icon="monetization_on" size="sm">
                    +150 điểm
                  </q-chip>
                </div>
              </q-card-section>

              <q-card-actions class="task-actions">
                <q-btn 
                  flat 
                  dense 
                  color="primary" 
                  icon="add"
                  @click="incrementTask(1)"
                >
                  +1
                </q-btn>
                <q-btn 
                  flat 
                  dense 
                  color="green" 
                  icon="check"
                  @click="completeTask(1)"
                >
                  Hoàn thành
                </q-btn>
                <q-btn 
                  flat 
                  dense 
                  color="red" 
                  icon="delete"
                  @click="deleteTask(1)"
                >
                  Xóa
                </q-btn>
              </q-card-actions>
            </q-card>

            <!-- Task Card 3 -->
            <q-card class="task-card gradient-border">
              <q-card-section>
                <div class="task-header">
                  <div class="task-icon">
                    <q-icon name="local_fire_department" size="20px" color="red" />
                  </div>
                  <div class="task-info">
                    <h4>Streak 7 ngày liên tiếp</h4>
                    <p>Duy trì học tập 7 ngày kh��ng nghỉ</p>
                  </div>
                  <q-chip 
                    color="green" 
                    text-color="white" 
                    icon="trending_up"
                    size="sm"
                  >
                    Đang diễn ra
                  </q-chip>
                </div>

                <q-linear-progress
                  :value="0.85"
                  size="12px"
                  rounded
                  color="red"
                  track-color="red-1"
                  class="q-my-md"
                />

                <div class="progress-info">
                  <span class="progress-text">Tiến độ: 6/7</span>
                  <span class="progress-percent">85%</span>
                </div>

                <div class="rewards-section">
                  <q-chip color="green" text-color="white" icon="stars" size="sm">
                    +500 XP
                  </q-chip>
                  <q-chip color="amber" text-color="white" icon="monetization_on" size="sm">
                    +200 điểm
                  </q-chip>
                </div>
              </q-card-section>

              <q-card-actions class="task-actions">
                <q-btn 
                  flat 
                  dense 
                  color="primary" 
                  icon="add"
                  @click="incrementTask(2)"
                >
                  +1
                </q-btn>
                <q-btn 
                  flat 
                  dense 
                  color="green" 
                  icon="check"
                  @click="completeTask(2)"
                >
                  Hoàn thành
                </q-btn>
                <q-btn 
                  flat 
                  dense 
                  color="red" 
                  icon="delete"
                  @click="deleteTask(2)"
                >
                  Xóa
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>

        <!-- Exchange Tab -->
        <div v-else-if="activeTab === 'exchange'" class="content-section">
          <div class="section-header">
            <div class="header-title">
              <h3>🏪 Cửa hàng thẻ cào</h3>
              <p>Đổi điểm lấy thẻ cào và phần quà hấp dẫn</p>
            </div>
            <q-chip 
              color="amber" 
              text-color="white" 
              icon="account_balance_wallet"
              size="lg"
            >
              1,250 điểm
            </q-chip>
          </div>

          <div class="exchange-grid">
            <!-- Viettel Card -->
            <q-card class="exchange-card">
              <q-badge 
                color="blue" 
                floating 
                rounded 
                label="PHỔ BIẾN"
              />
              <q-card-section class="card-header">
                <q-avatar size="48px" color="red" text-color="white">
                  <q-icon name="sim_card" />
                </q-avatar>
                <h4>Thẻ Viettel</h4>
                <div class="card-value">10,000 đ</div>
              </q-card-section>

              <q-card-section>
                <div class="pricing-info">
                  <div class="price-row">
                    <span>Giá gốc:</span>
                    <span class="original-price">900 điểm</span>
                  </div>
                  <div class="price-row">
                    <span>Giá bán:</span>
                    <span class="sale-price">800 điểm</span>
                    <q-chip color="red" text-color="white" size="sm">-11%</q-chip>
                  </div>
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn 
                  color="primary" 
                  icon="shopping_cart"
                  label="Đổi ngay"
                  class="full-width"
                  unelevated
                  @click="exchangeCard('viettel')"
                />
              </q-card-actions>
            </q-card>

            <!-- Mobifone Card -->
            <q-card class="exchange-card disabled-card">
              <q-card-section class="card-header">
                <q-avatar size="48px" color="orange" text-color="white">
                  <q-icon name="sim_card" />
                </q-avatar>
                <h4>Thẻ Mobifone</h4>
                <div class="card-value">20,000 đ</div>
              </q-card-section>

              <q-card-section>
                <div class="pricing-info">
                  <div class="price-row">
                    <span>Giá gốc:</span>
                    <span class="original-price">1,700 điểm</span>
                  </div>
                  <div class="price-row">
                    <span>Giá bán:</span>
                    <span class="sale-price">1,500 điểm</span>
                    <q-chip color="red" text-color="white" size="sm">-12%</q-chip>
                  </div>
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn 
                  color="grey" 
                  icon="lock"
                  label="Không đủ điểm"
                  class="full-width"
                  disable
                />
              </q-card-actions>
            </q-card>

            <!-- Vietnamobile Card -->
            <q-card class="exchange-card disabled-card">
              <q-card-section class="card-header">
                <q-avatar size="48px" color="green" text-color="white">
                  <q-icon name="sim_card" />
                </q-avatar>
                <h4>Vietnamobile</h4>
                <div class="card-value">30,000 đ</div>
              </q-card-section>

              <q-card-section>
                <div class="pricing-info">
                  <div class="price-row">
                    <span>Giá gốc:</span>
                    <span class="original-price">2,500 điểm</span>
                  </div>
                  <div class="price-row">
                    <span>Giá bán:</span>
                    <span class="sale-price">2,300 điểm</span>
                    <q-chip color="red" text-color="white" size="sm">-8%</q-chip>
                  </div>
                </div>
              </q-card-section>

              <q-card-actions>
                <q-btn 
                  color="grey" 
                  icon="lock"
                  label="Không đủ điểm"
                  class="full-width"
                  disable
                />
              </q-card-actions>
            </q-card>
          </div>

          <!-- Exchange Rules -->
          <q-card class="rules-card">
            <q-card-section>
              <h4>💡 Cách tích điểm nhanh chóng</h4>
              <q-list>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="task_alt" color="green" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Hoàn thành nhiệm vụ hàng ngày: 25-50 điểm</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="event_repeat" color="blue" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Hoàn thành nhiệm vụ hàng tuần: 100-150 điểm</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="sports_esports" color="purple" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Thắng thách đấu với bạn bè: 20-30 điểm</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item>
                  <q-item-section avatar>
                    <q-icon name="local_fire_department" color="red" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Duy trì streak liên tục: 10 điểm/ngày</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>

        <!-- Dashboard Tab -->
        <div v-else-if="activeTab === 'dashboard'" class="content-section">
          <div class="section-header">
            <div class="header-title">
              <h3>📊 Tổng quan</h3>
              <p>Thống kê học tập và tiến độ của bạn</p>
            </div>
          </div>

          <div class="dashboard-stats">
            <q-card class="stat-card">
              <q-card-section>
                <div class="stat-header">
                  <q-icon name="local_fire_department" size="32px" color="red" />
                  <h4>Streak hiện tại</h4>
                </div>
                <div class="stat-number">7 ngày</div>
                <div class="stat-subtitle">Tuyệt vời! Hãy tiếp tục</div>
              </q-card-section>
            </q-card>

            <q-card class="stat-card">
              <q-card-section>
                <div class="stat-header">
                  <q-icon name="emoji_events" size="32px" color="gold" />
                  <h4>Hạng hiện tại</h4>
                </div>
                <div class="stat-number">#45</div>
                <div class="stat-subtitle">Top 20% người chơi</div>
              </q-card-section>
            </q-card>

            <q-card class="stat-card">
              <q-card-section>
                <div class="stat-header">
                  <q-icon name="monetization_on" size="32px" color="amber" />
                  <h4>Tổng điểm</h4>
                </div>
                <div class="stat-number">1,250</div>
                <div class="stat-subtitle">+100 từ tuần trước</div>
              </q-card-section>
            </q-card>

            <q-card class="stat-card">
              <q-card-section>
                <div class="stat-header">
                  <q-icon name="check_circle" size="32px" color="green" />
                  <h4>Đã hoàn thành</h4>
                </div>
                <div class="stat-number">523 câu</div>
                <div class="stat-subtitle">Độ chính xác 89%</div>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- Other tabs placeholder -->
        <div v-else class="content-section">
          <div class="placeholder-content">
            <q-avatar size="120px" color="grey-3" text-color="grey-6">
              <q-icon name="construction" size="60px" />
            </q-avatar>
            <h3>🚧 Đang phát triển</h3>
            <p>Chức năng này đang được phát triển và sẽ có sẵn sớm!</p>
            <q-btn 
              color="primary" 
              label="Quay lại Nhiệm vụ" 
              @click="setActiveTab('tasks')"
              unelevated
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useAuthStore } from '../stores/auth';

const $q = useQuasar();
const authStore = useAuthStore();

// State
const activeTab = ref('tasks'); // Default to tasks tab
const taskFilter = ref('weekly');

// Methods
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};

const incrementTask = (taskId: number) => {
  $q.notify({
    type: 'positive',
    message: '✅ Tiến độ nhiệm vụ đã được cập nhật!',
    position: 'top',
    timeout: 2000,
    actions: [{ icon: 'close', color: 'white' }]
  });
};

const completeTask = (taskId: number) => {
  $q.notify({
    type: 'positive',
    message: '🎉 Nhiệm vụ hoàn thành! Bạn nhận được phần thưởng.',
    position: 'top',
    timeout: 3000,
    actions: [{ icon: 'close', color: 'white' }]
  });
};

const deleteTask = (taskId: number) => {
  $q.dialog({
    title: '⚠️ Xác nhận xóa',
    message: 'Bạn có chắc chắn muốn xóa nhiệm vụ này không?',
    cancel: {
      label: 'Hủy',
      color: 'grey'
    },
    ok: {
      label: 'Xóa',
      color: 'red'
    },
    persistent: true
  }).onOk(() => {
    $q.notify({
      type: 'negative',
      message: '🗑️ Nhiệm vụ đã được xóa!',
      position: 'top',
      timeout: 2000
    });
  });
};

const exchangeCard = (cardType: string) => {
  $q.notify({
    type: 'positive',
    message: `🎁 Đổi thẻ ${cardType} thành công! Mã thẻ sẽ được gửi qua email.`,
    position: 'top',
    timeout: 3000,
    actions: [{ icon: 'close', color: 'white' }]
  });
};
</script>

<style scoped>
.profile-page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.profile-layout {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  gap: 24px;
  min-height: calc(100vh - 113px);
}

/* Beautiful Sidebar */
.sidebar-card {
  width: 320px;
  flex-shrink: 0;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.sidebar-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 16px 16px 0 0;
}

.user-avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.user-avatar {
  background: rgba(255, 255, 255, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.user-info h4 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.user-info p {
  margin: 0;
  opacity: 0.9;
  font-size: 14px;
}

.nav-list {
  padding: 12px;
}

.nav-list .q-item {
  border-radius: 12px;
  margin-bottom: 4px;
  transition: all 0.3s ease;
}

.nav-list .q-item:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateX(4px);
}

.active-nav {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
  color: white !important;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.active-nav .q-item__section--avatar .q-icon,
.active-nav .nav-label {
  color: white !important;
}

.nav-label {
  font-weight: 500;
  font-size: 15px;
}

/* Main Content Area */
.main-content-area {
  flex: 1;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.content-section {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 20px;
}

.header-title h3 {
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-title p {
  margin: 0;
  color: #6B7280;
  font-size: 16px;
}

/* Tasks Grid */
.tasks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;
}

.task-card {
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.task-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.gradient-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}

.task-header {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 16px;
}

.task-icon {
  padding: 12px;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  flex-shrink: 0;
}

.task-info {
  flex: 1;
}

.task-info h4 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #1F2937;
}

.task-info p {
  margin: 0;
  color: #6B7280;
  font-size: 14px;
  line-height: 1.5;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
}

.progress-text {
  color: #374151;
}

.progress-percent {
  color: #7C3AED;
  font-weight: 600;
}

.rewards-section {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.task-actions {
  justify-content: flex-end;
  gap: 8px;
  padding: 16px 16px 16px 16px;
  background: rgba(249, 250, 251, 0.8);
}

/* Exchange Grid */
.exchange-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.exchange-card {
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.exchange-card:hover:not(.disabled-card) {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.disabled-card {
  opacity: 0.6;
  filter: grayscale(0.5);
}

.card-header {
  text-align: center;
  padding: 24px 16px 16px 16px;
}

.card-header h4 {
  margin: 16px 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #1F2937;
}

.card-value {
  font-size: 24px;
  font-weight: 700;
  color: #059669;
}

.pricing-info {
  padding: 0 16px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
}

.original-price {
  text-decoration: line-through;
  color: #9CA3AF;
}

.sale-price {
  font-weight: 600;
  color: #059669;
  font-size: 16px;
}

/* Dashboard Stats */
.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.stat-card {
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.stat-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.stat-header h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: #6B7280;
}

.stat-number {
  font-size: 32px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 8px;
}

.stat-subtitle {
  color: #6B7280;
  font-size: 14px;
}

/* Rules Card */
.rules-card {
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: rgba(249, 250, 251, 0.8);
}

.rules-card h4 {
  margin: 0 0 16px 0;
  font-size: 20px;
  font-weight: 600;
  color: #374151;
}

/* Placeholder Content */
.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  gap: 24px;
}

.placeholder-content h3 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #6B7280;
}

.placeholder-content p {
  margin: 0;
  color: #9CA3AF;
  font-size: 16px;
  max-width: 400px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-page {
    padding: 12px;
  }
  
  .profile-layout {
    flex-direction: column;
    gap: 16px;
  }
  
  .sidebar-card {
    width: 100%;
  }
  
  .user-avatar-section {
    flex-direction: row;
    text-align: left;
  }
  
  .nav-list {
    display: flex;
    overflow-x: auto;
    gap: 8px;
    padding: 12px;
  }
  
  .nav-list .q-item {
    flex-shrink: 0;
    margin-bottom: 0;
    margin-right: 8px;
  }
  
  .main-content-area {
    padding: 20px;
  }
  
  .section-header {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
  
  .tasks-grid {
    grid-template-columns: 1fr;
  }
  
  .exchange-grid {
    grid-template-columns: 1fr;
  }
  
  .dashboard-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .dashboard-stats {
    grid-template-columns: 1fr;
  }
  
  .task-header {
    flex-direction: column;
    gap: 12px;
  }
  
  .task-actions {
    justify-content: center;
  }
}
</style>
