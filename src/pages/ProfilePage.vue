<template>
  <q-page class="profile-page">
    <div class="profile-container">
      <!-- Sidebar Navigation -->
      <div class="sidebar">
        <div class="sidebar-nav">
          <div 
            class="nav-item" 
            :class="{ active: activeTab === 'dashboard' }"
            @click="activeTab = 'dashboard'"
          >
            <q-icon name="home" size="28px" />
            <span>Dashboard</span>
          </div>
          
          <div 
            class="nav-item"
            :class="{ active: activeTab === 'friends' }"
            @click="activeTab = 'friends'"
          >
            <q-icon name="people" size="28px" />
            <span>Bạn bè</span>
          </div>
          
          <div 
            class="nav-item"
            :class="{ active: activeTab === 'add-friends' }"
            @click="activeTab = 'add-friends'"
          >
            <q-icon name="person_add" size="28px" />
            <span>Thêm bạn bè</span>
          </div>
          
          <div 
            class="nav-item"
            :class="{ active: activeTab === 'tasks' }"
            @click="activeTab = 'tasks'"
          >
            <q-icon name="assignment" size="28px" />
            <span>Nhiệm vụ</span>
          </div>
          
          <div 
            class="nav-item"
            :class="{ active: activeTab === 'exchange' }"
            @click="activeTab = 'exchange'"
          >
            <q-icon name="redeem" size="28px" />
            <span>Đổi điểm</span>
          </div>
        </div>
      </div>

      <!-- Main Content Area -->
      <div class="main-content">
        <!-- Tasks Tab -->
        <div v-if="activeTab === 'tasks'" class="tasks-content">
          <div class="tasks-header">
            <h2 class="tasks-title">Nhiệm vụ của tôi</h2>
          </div>

          <!-- Tab Switcher -->
          <div class="task-tabs">
            <div class="tab-container">
              <div 
                class="tab-item" 
                :class="{ active: taskTab === 'daily' }"
                @click="taskTab = 'daily'"
              >
                Hàng ngày ( 1 )
              </div>
              <div 
                class="tab-item" 
                :class="{ active: taskTab === 'weekly' }"
                @click="taskTab = 'weekly'"
              >
                Hàng tuần ( 2 )
              </div>
            </div>
          </div>

          <!-- Task List -->
          <div class="task-list">
            <!-- Task 1 -->
            <div class="task-card">
              <div class="task-main">
                <div class="task-info">
                  <div class="task-header">
                    <q-icon name="event" size="16px" />
                    <h3 class="task-name">Thách đấu với 5 bạn bè</h3>
                  </div>
                  <p class="task-description">
                    Tham gia thách đấu với ít nhất 5 người bạn trong tuần
                  </p>
                  
                  <div class="task-progress-section">
                    <div class="progress-info">
                      <div class="progress-stats">
                        <span class="progress-text">Tiến độ: 2/5</span>
                        <span class="progress-percent">40 %</span>
                      </div>
                      <q-linear-progress
                        :value="0.4"
                        color="purple"
                        track-color="grey-3"
                        size="16px"
                        rounded
                        class="progress-bar"
                      />
                    </div>
                    
                    <div class="task-rewards">
                      <div class="reward-badge xp">+ 200 XP</div>
                      <div class="reward-badge points">+ 100 điểm</div>
                    </div>
                  </div>
                  
                  <div class="task-deadline">
                    <q-icon name="schedule" size="12px" />
                    <span>Hạn: 1/8/2025</span>
                  </div>
                </div>
                
                <div class="task-actions">
                  <q-btn
                    flat
                    dense
                    class="action-btn"
                    @click="incrementTask(0)"
                  >
                    +1
                  </q-btn>
                  <q-btn
                    flat
                    dense
                    class="action-btn complete-btn"
                    @click="completeTask(0)"
                  >
                    Hoàn thành
                  </q-btn>
                  <q-btn
                    flat
                    dense
                    class="action-btn delete-btn"
                    @click="deleteTask(0)"
                  >
                    Xóa
                  </q-btn>
                </div>
              </div>
            </div>

            <!-- Task 2 -->
            <div class="task-card">
              <div class="task-main">
                <div class="task-info">
                  <div class="task-header">
                    <q-icon name="emoji_events" size="16px" />
                    <h3 class="task-name">Đạt top 10 leaderboard</h3>
                  </div>
                  <p class="task-description">
                    Leo lên top 10 bảng xếp hạng tuần này
                  </p>
                  
                  <div class="task-progress-section">
                    <div class="progress-info">
                      <div class="progress-stats">
                        <span class="progress-text">Tiến độ: 0 / 1</span>
                        <span class="progress-percent">0 %</span>
                      </div>
                      <q-linear-progress
                        :value="0"
                        color="purple"
                        track-color="grey-3"
                        size="16px"
                        rounded
                        class="progress-bar"
                      />
                    </div>
                    
                    <div class="task-rewards">
                      <div class="reward-badge xp">+ 300 XP</div>
                      <div class="reward-badge points">+ 150 điểm</div>
                    </div>
                  </div>
                  
                  <div class="task-deadline">
                    <q-icon name="schedule" size="12px" />
                    <span>Hạn: 1/8/2025</span>
                  </div>
                </div>
                
                <div class="task-actions">
                  <q-btn
                    flat
                    dense
                    class="action-btn"
                    @click="incrementTask(1)"
                  >
                    +1
                  </q-btn>
                  <q-btn
                    flat
                    dense
                    class="action-btn complete-btn"
                    @click="completeTask(1)"
                  >
                    Hoàn thành
                  </q-btn>
                  <q-btn
                    flat
                    dense
                    class="action-btn delete-btn"
                    @click="deleteTask(1)"
                  >
                    Xóa
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Exchange Tab -->
        <div v-else-if="activeTab === 'exchange'" class="exchange-content">
          <div class="exchange-header">
            <h2 class="exchange-title">Cửa hàng thẻ cào</h2>
            <div class="user-points">
              <q-icon name="monetization_on" />
              <span>1,250 điểm</span>
            </div>
          </div>

          <div class="exchange-grid">
            <!-- Viettel Card -->
            <div class="exchange-card">
              <div class="card-header">
                <div class="card-badge">PHỔ BIẾN</div>
                <q-icon name="phone" size="24px" class="card-icon" />
                <div class="card-info">
                  <h3>Viettel</h3>
                  <div class="card-value">10,000 đ</div>
                </div>
              </div>
              <div class="card-pricing">
                <div class="price-row">
                  <span>Giá gốc:</span>
                  <span>800 điểm</span>
                </div>
                <div class="price-row">
                  <span>Giá bán:</span>
                  <span class="price-sale">800 điểm</span>
                </div>
              </div>
              <q-btn class="exchange-btn" color="primary" @click="exchangeCard('viettel')">
                <q-icon name="shopping_cart" />
                Đổi ngay
              </q-btn>
            </div>

            <!-- Mobifone Card -->
            <div class="exchange-card">
              <div class="card-header">
                <q-icon name="phone" size="24px" class="card-icon" />
                <div class="card-info">
                  <h3>Mobifone</h3>
                  <div class="card-value">20,000 đ</div>
                </div>
              </div>
              <div class="card-pricing">
                <div class="price-row">
                  <span>Giá gốc:</span>
                  <span>1,600 điểm</span>
                  <span class="discount">-10%</span>
                </div>
                <div class="price-row">
                  <span>Giá bán:</span>
                  <span class="price-sale">1,500 điểm</span>
                </div>
              </div>
              <q-btn class="exchange-btn-disabled" disable>
                Không đủ điểm
              </q-btn>
            </div>

            <!-- Vietnamobile Card -->
            <div class="exchange-card">
              <div class="card-header">
                <q-icon name="phone" size="24px" class="card-icon" />
                <div class="card-info">
                  <h3>Vietnamobile</h3>
                  <div class="card-value">30,000 đ</div>
                </div>
              </div>
              <div class="card-pricing">
                <div class="price-row">
                  <span>Giá gốc:</span>
                  <span>2,300 điểm</span>
                </div>
                <div class="price-row">
                  <span>Giá bán:</span>
                  <span class="price-sale">2,300 điểm</span>
                </div>
              </div>
              <q-btn class="exchange-btn-disabled" disable>
                Không đủ điểm
              </q-btn>
            </div>
          </div>

          <div class="exchange-rules">
            <h4>📋 Cách tích điểm:</h4>
            <ul>
              <li>Hoàn thành nhiệm vụ hàng ngày: 25-50 điểm</li>
              <li>Hoàn thành nhiệm vụ hàng tuần: 100-150 điểm</li>
              <li>Thách đấu với bạn bè và thắng: 20-30 điểm</li>
              <li>Duy trì streak liên tục: 10 điểm/ngày</li>
              <li>Đạt thành tích đặc biệt: 50-200 điểm</li>
            </ul>
          </div>
        </div>

        <!-- Other tabs placeholder -->
        <div v-else class="placeholder-content">
          <div class="placeholder-message">
            <q-icon name="construction" size="48px" color="grey-5" />
            <h3>Đang phát triển</h3>
            <p>Chức năng này đang được phát triển và sẽ có sẵn sớm!</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const activeTab = ref('tasks');
const taskTab = ref('weekly');

const incrementTask = (taskId: number) => {
  $q.notify({
    type: 'positive',
    message: 'Tiến độ nhiệm vụ đã được cập nhật!',
    position: 'top',
  });
};

const completeTask = (taskId: number) => {
  $q.notify({
    type: 'positive',
    message: 'Nhiệm vụ đã hoàn thành! Bạn nhận được phần thưởng.',
    position: 'top',
  });
};

const deleteTask = (taskId: number) => {
  $q.dialog({
    title: 'Xác nhận',
    message: 'Bạn có chắc chắn muốn xóa nhiệm vụ này?',
    cancel: true,
    persistent: true
  }).onOk(() => {
    $q.notify({
      type: 'negative',
      message: 'Nhiệm vụ đã được xóa!',
      position: 'top',
    });
  });
};

const exchangeCard = (cardType: string) => {
  $q.notify({
    type: 'positive',
    message: `Đổi thẻ ${cardType} thành công! Mã thẻ sẽ được gửi qua email.`,
    position: 'top',
  });
};
</script>

<style scoped>
.profile-page {
  background: #FFFFFF;
  min-height: 100vh;
}

.profile-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 73px);
}

/* Sidebar Styles */
.sidebar {
  width: 285px;
  background: #FFFFFF;
  border-right: 1px solid #E2E8F0;
  padding: 24px 0;
  flex-shrink: 0;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 14.5px 17.5px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  color: #5C5E64;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: -0.4px;
}

.nav-item:hover {
  background: #F1F5F9;
}

.nav-item.active {
  background: #EDE9FE;
  color: #6D28D9;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  padding: 24px 32px;
  background: #FFFFFF;
}

/* Tasks Content */
.tasks-content {
  max-width: 720px;
}

.tasks-header {
  margin-bottom: 16px;
}

.tasks-title {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: #000000;
  margin: 0;
}

/* Task Tabs */
.task-tabs {
  margin-bottom: 24px;
}

.tab-container {
  display: flex;
  width: 251px;
  height: 40px;
  border-radius: 6px;
  background: #F1F5F9;
  padding: 4px;
  position: relative;
}

.tab-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border-radius: 4px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #64748B;
  cursor: pointer;
  transition: all 0.2s;
}

.tab-item.active {
  background: #FFFFFF;
  color: #64748B;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

/* Task List */
.task-list {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.task-card {
  padding: 16px 24px 25px 24px;
  border-radius: 8px;
  border: 1px solid #E2E8F0;
  background: #FFFFFF;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.task-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.task-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.task-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.task-name {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #000000;
  margin: 0;
}

.task-description {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #4B5563;
  margin: 0;
}

.task-progress-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin: 8px 0;
}

.progress-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 258px;
}

.progress-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress-text,
.progress-percent {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #000000;
}

.progress-bar {
  margin-top: 4px;
}

.task-rewards {
  display: flex;
  gap: 8px;
}

.reward-badge {
  padding: 3px 10px;
  border-radius: 9999px;
  border: 1px solid #E2E8F0;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  white-space: nowrap;
}

.reward-badge.xp {
  color: #000000;
  background: #FFFFFF;
}

.reward-badge.points {
  color: #A16207;
  background: #FEFCE8;
}

.task-deadline {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #6B7280;
}

.task-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.action-btn {
  padding: 8px 12px;
  border: 1px solid #E2E8F0;
  background: #FFFFFF;
  border-radius: 6px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #000000;
  min-width: 80px;
}

.action-btn:hover {
  background: #F8F9FA;
}

.complete-btn {
  min-width: 100px;
}

.delete-btn {
  color: #EF4444;
  border: none;
  background: transparent;
}

.delete-btn:hover {
  background: #FEF2F2;
}

/* Exchange Content */
.exchange-content {
  max-width: 800px;
}

.exchange-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.exchange-title {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: #000000;
  margin: 0;
}

.user-points {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #FEF3C7;
  border-radius: 8px;
  font-weight: 600;
  color: #D97706;
}

.exchange-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.exchange-card {
  padding: 20px;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  background: #FFFFFF;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
}

.card-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #3B82F6;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
}

.card-icon {
  margin-bottom: 8px;
  color: #6B7280;
}

.card-info {
  text-align: center;
}

.card-info h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 4px 0;
  color: #111827;
}

.card-value {
  font-size: 24px;
  font-weight: 700;
  color: #10B981;
}

.card-pricing {
  margin-bottom: 16px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  font-size: 14px;
}

.price-sale {
  font-weight: 600;
  color: #059669;
}

.discount {
  background: #FECACA;
  color: #DC2626;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
}

.exchange-btn {
  width: 100%;
  padding: 12px;
  font-weight: 600;
}

.exchange-btn-disabled {
  width: 100%;
  padding: 12px;
  background: #F3F4F6;
  color: #9CA3AF;
  border: 1px solid #E5E7EB;
}

.exchange-rules {
  background: #F9FAFB;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #E5E7EB;
}

.exchange-rules h4 {
  margin: 0 0 12px 0;
  color: #374151;
}

.exchange-rules ul {
  margin: 0;
  padding-left: 20px;
}

.exchange-rules li {
  margin-bottom: 6px;
  color: #6B7280;
  font-size: 14px;
}

/* Placeholder Content */
.placeholder-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

.placeholder-message {
  text-align: center;
  color: #6B7280;
}

.placeholder-message h3 {
  margin: 16px 0 8px 0;
  font-size: 24px;
  font-weight: 600;
}

.placeholder-message p {
  margin: 0;
  font-size: 16px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    padding: 16px;
  }
  
  .sidebar-nav {
    flex-direction: row;
    overflow-x: auto;
    gap: 4px;
  }
  
  .nav-item {
    flex-shrink: 0;
    padding: 12px 16px;
    font-size: 14px;
  }
  
  .nav-item span {
    display: none;
  }
  
  .main-content {
    padding: 16px;
  }
  
  .task-main {
    flex-direction: column;
    align-items: stretch;
  }
  
  .task-actions {
    flex-direction: row;
    justify-content: flex-end;
  }
  
  .exchange-grid {
    grid-template-columns: 1fr;
  }
}
</style>
