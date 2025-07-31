<template>
  <div class="profile-page">
    <!-- Sidebar Navigation -->
    <div class="profile-sidebar" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
      <div class="sidebar-toggle" @click="toggleSidebar">
        <q-icon :name="sidebarCollapsed ? 'menu' : 'close'" />
      </div>

      <div class="sidebar-content" v-if="!sidebarCollapsed">
        <nav class="sidebar-nav">
          <div class="nav-item" :class="{ active: activeTab === 'dashboard' }" @click="navigateToTab('dashboard', '/dashboard')">
            <q-icon name="home" />
            <span>Dashboard</span>
          </div>
          <div class="nav-item" :class="{ active: activeTab === 'friends' }" @click="navigateToTab('friends', '/dashboard/friends')">
            <q-icon name="people" />
            <span>Bạn bè</span>
          </div>
          <div class="nav-item" :class="{ active: activeTab === 'add-friends' }" @click="navigateToTab('add-friends', '/dashboard/add-friends')">
            <q-icon name="person_add" />
            <span>Thêm bạn bè</span>
          </div>
          <div class="nav-item" :class="{ active: activeTab === 'tasks' }" @click="navigateToTab('tasks', '/dashboard/tasks')">
            <q-icon name="task" />
            <span>Nhiệm vụ</span>
          </div>
          <div class="nav-item" :class="{ active: activeTab === 'rewards' }" @click="navigateToTab('rewards', '/dashboard/rewards')">
            <q-icon name="card_giftcard" />
            <span>Đổi điểm</span>
          </div>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="profile-content" :class="{ 'content-expanded': sidebarCollapsed }">
      <!-- User Profile Header -->
      <div class="profile-header">
        <div class="profile-avatar-section">
          <div class="avatar-container">
            <q-avatar size="81px" class="profile-avatar">
              <img :src="userAvatar" alt="User Avatar" />
            </q-avatar>
            <div class="verified-badge">
              <q-icon name="check_circle" color="green" size="18px" />
            </div>
          </div>

          <h1 class="user-name">Người dùng</h1>
          <p class="user-handle">@nguoidung</p>

          <div class="join-date">
            <q-icon name="calendar_today" />
            <span>Tham gia từ 1/1/2025</span>
          </div>

          <!-- Action Buttons -->
          <div class="profile-actions">
            <q-btn class="action-btn level-btn" no-caps>
              <q-icon name="emoji_events" />
              <div class="btn-content">
                <span class="btn-label">Cấp độ</span>
                <span class="btn-value">Level 10</span>
              </div>
            </q-btn>

            <q-btn class="action-btn xp-btn" no-caps disable>
              <q-icon name="star" />
              <div class="btn-content">
                <span class="btn-label">Điểm kinh nghiệm</span>
                <span class="btn-value">1,000 XP</span>
              </div>
            </q-btn>

            <q-btn class="action-btn edit-btn" no-caps @click="editProfile">
              <q-icon name="edit" />
              <span>Chỉnh sửa thông tin</span>
            </q-btn>

            <q-btn class="action-btn password-btn" no-caps disable>
              <q-icon name="lock" />
              <span>Đổi mật khẩu</span>
            </q-btn>
          </div>
        </div>
      </div>

      <!-- Statistics Grid -->
      <div class="stats-grid">
        <!-- Row 1 -->
        <div class="stat-card">
          <div class="stat-icon">
            <q-icon name="help" />
          </div>
          <div class="stat-value">1,000</div>
          <div class="stat-label">Tổng câu trả lời</div>
        </div>

        <div class="stat-card">
          <div class="stat-icon accuracy">
            <q-icon name="check" />
          </div>
          <div class="stat-value">82%</div>
          <div class="stat-label">Tỷ lệ chính xác</div>
        </div>

        <div class="stat-card">
          <div class="stat-icon vocabulary">
            <q-icon name="book" />
          </div>
          <div class="stat-value">2,125</div>
          <div class="stat-label">Từ đã học</div>
        </div>

        <div class="stat-card">
          <div class="stat-icon streak">
            <q-icon name="local_fire_department" />
          </div>
          <div class="stat-value">28</div>
          <div class="stat-label">Chuỗi dài nhất</div>
        </div>
      </div>

      <!-- Statistics Row 2 -->
      <div class="stats-row">
        <div class="stat-card-large current-streak">
          <div class="stat-large-icon">
            <q-icon name="local_fire_department" />
          </div>
          <div class="stat-large-content">
            <div class="stat-large-label">Chuỗi hiện tại</div>
            <div class="stat-large-sublabel">Ngày liên tiếp</div>
          </div>
          <div class="stat-large-value">15</div>
        </div>

        <div class="stat-card-large avg-time">
          <div class="stat-large-icon">
            <q-icon name="schedule" />
          </div>
          <div class="stat-large-content">
            <div class="stat-large-label">Thời gian trung bình</div>
            <div class="stat-large-sublabel">Mỗi câu hỏi</div>
          </div>
          <div class="stat-large-value">2.5s</div>
        </div>

        <div class="stat-card-large study-days">
          <div class="stat-large-icon">
            <q-icon name="calendar_month" />
          </div>
          <div class="stat-large-content">
            <div class="stat-large-label">Ngày học tập</div>
            <div class="stat-large-sublabel">Tổng số ngày</div>
          </div>
          <div class="stat-large-value">45</div>
        </div>
      </div>

      <!-- Progress Chart -->
      <div class="progress-chart">
        <h3 class="chart-title">Biểu đồ tiến bộ</h3>
        <div class="chart-container">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff046890c17ca436cab38cffc651fb9cb%2F447e5d8b31224c1187498477057c7f95?format=webp&width=800"
            alt="Progress Chart"
            class="chart-image"
          />
        </div>
      </div>

      <!-- Contact Information -->
      <div class="contact-section">
        <h3 class="section-title">Thông tin liên hệ</h3>
        <div class="contact-info">
          <div class="contact-item">
            <q-icon name="email" />
            <span>nguoidung@gmail.com</span>
          </div>
          <div class="contact-item">
            <q-icon name="phone" />
            <span>12345678910</span>
          </div>
        </div>
      </div>

      <!-- Logout Section -->
      <div class="logout-section">
        <div class="logout-info">
          <h3 class="logout-title">Đăng xuất</h3>
          <p class="logout-description">Thoát khỏi tài khoản hiện tại</p>
        </div>
        <q-btn color="negative" class="logout-btn" no-caps @click="logout">
          <q-icon name="logout" />
          Đăng xuất
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const sidebarCollapsed = ref(false)
const activeTab = ref('dashboard')
const userAvatar = ref(
  'https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fd0e1a2af26da485f8609e3080da7d7b8?alt=media&token=aca82dee-2b72-4297-9d9d-7921d490a327&apiKey=f046890c17ca436cab38cffc651fb9cb',
)

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

const setActiveTab = (tab) => {
  activeTab.value = tab
  // Handle tab navigation logic here
}

const editProfile = () => {
  // Handle edit profile logic
  console.log('Edit profile clicked')
}

const logout = () => {
  // Handle logout logic
  router.push('/')
}
</script>

<style scoped>
.profile-page {
  display: flex;
  min-height: 100vh;
  background: #ffffff;
}

/* Sidebar */
.profile-sidebar {
  width: 285px;
  background: white;
  border-right: 1px solid rgba(92, 94, 100, 0.7);
  transition: all 0.3s ease;
  position: relative;
}

.sidebar-collapsed {
  width: 60px;
}

.sidebar-toggle {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;
  background: #f5f3ff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sidebar-toggle:hover {
  background: #ede9fe;
}

.sidebar-content {
  padding: 20px 0;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 16px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 15px 18px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #5c5e64;
}

.nav-item:hover,
.nav-item.active {
  background: #f5f3ff;
  color: #6d28d9;
}

.nav-item .q-icon {
  font-size: 24px;
}

.nav-item span {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.4px;
}

/* Main Content */
.profile-content {
  flex: 1;
  padding: 20px 32px;
  margin-left: 0;
  transition: all 0.3s ease;
  max-width: 915px;
}

.content-expanded {
  margin-left: 0;
}

/* Profile Header */
.profile-header {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 11px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 24px;
  margin-bottom: 24px;
  text-align: center;
}

.profile-avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.avatar-container {
  position: relative;
}

.profile-avatar {
  border: 2px solid #858597;
}

.verified-badge {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: white;
  border-radius: 50%;
  padding: 2px;
}

.user-name {
  font-size: 30px;
  font-weight: 500;
  color: #000;
  margin: 0;
}

.user-handle {
  font-size: 20px;
  font-weight: 300;
  color: #000;
  margin: 0;
}

.join-date {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(0, 0, 0, 0.75);
  font-size: 16px;
}

.profile-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
}

.action-btn {
  height: 47px;
  border-radius: 7px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
}

.level-btn {
  background: rgba(37, 99, 235, 0.3);
  color: #2563eb;
  min-width: 193px;
}

.xp-btn {
  background: rgba(37, 99, 235, 0.3);
  color: #2563eb;
  opacity: 0.5;
  min-width: 251px;
}

.edit-btn {
  background: rgba(37, 99, 235, 0.7);
  color: white;
  min-width: 193px;
}

.password-btn {
  background: rgba(107, 114, 128, 0.5);
  color: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  min-width: 156px;
}

.btn-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 8px;
}

.btn-label {
  font-size: 16px;
  font-weight: 400;
}

.btn-value {
  font-size: 16px;
  font-weight: 700;
}

/* Statistics Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.stat-icon {
  width: 53px;
  height: 53px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #bed0f9;
}

.stat-icon.accuracy {
  background: rgba(22, 163, 74, 0.25);
}

.stat-icon.vocabulary {
  background: rgba(109, 40, 217, 0.29);
}

.stat-icon.streak {
  background: rgba(217, 119, 6, 0.3);
}

.stat-icon .q-icon {
  font-size: 24px;
  color: #2563eb;
}

.stat-icon.accuracy .q-icon {
  color: #16a34a;
}

.stat-icon.vocabulary .q-icon {
  color: #6d28d9;
}

.stat-icon.streak .q-icon {
  color: #d97706;
}

.stat-value {
  font-size: 27px;
  font-weight: 700;
  color: #000;
}

.stat-label {
  font-size: 17px;
  font-weight: 300;
  color: #000;
}

/* Statistics Row 2 */
.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.stat-card-large {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: 118px;
}

.stat-large-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #bed0f9;
}

.avg-time .stat-large-icon {
  background: rgba(22, 163, 74, 0.3);
}

.study-days .stat-large-icon {
  background: rgba(109, 40, 217, 0.5);
}

.stat-large-icon .q-icon {
  font-size: 24px;
  color: #2563eb;
}

.avg-time .stat-large-icon .q-icon {
  color: #16a34a;
}

.study-days .stat-large-icon .q-icon {
  color: #6d28d9;
}

.stat-large-content {
  flex: 1;
}

.stat-large-label {
  font-size: 16px;
  font-weight: 400;
  color: #000;
  margin-bottom: 4px;
}

.stat-large-sublabel {
  font-size: 14px;
  font-weight: 300;
  color: #000;
}

.stat-large-value {
  font-size: 26px;
  font-weight: 700;
  color: #2563eb;
}

.avg-time .stat-large-value {
  color: #16a34a;
}

.study-days .stat-large-value {
  color: #6d28d9;
}

/* Progress Chart */
.progress-chart {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 24px;
  margin-bottom: 24px;
}

.chart-title {
  font-size: 26px;
  font-weight: 700;
  color: #000;
  margin-bottom: 24px;
}

.chart-container {
  width: 100%;
  height: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chart-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Contact Section */
.contact-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 11px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 24px;
  margin-bottom: 24px;
}

.section-title {
  font-size: 24px;
  font-weight: 500;
  color: #000;
  margin-bottom: 16px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(0, 0, 0, 0.75);
  font-size: 16px;
}

.contact-item .q-icon {
  font-size: 23px;
  color: rgba(0, 0, 0, 0.5);
}

/* Logout Section */
.logout-section {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logout-info {
  flex: 1;
}

.logout-title {
  font-size: 22px;
  font-weight: 700;
  color: #000;
  margin-bottom: 8px;
}

.logout-description {
  font-size: 21px;
  font-weight: 400;
  color: #000;
  margin: 0;
}

.logout-btn {
  background: #fd2c2c;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 400;
  min-width: 192px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .profile-page {
    flex-direction: column;
  }

  .profile-sidebar {
    width: 100%;
    height: auto;
  }

  .sidebar-collapsed {
    height: 60px;
    overflow: hidden;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stats-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .profile-content {
    padding: 16px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .profile-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .action-btn {
    min-width: auto;
    width: 100%;
  }

  .logout-section {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .chart-container {
    height: 200px;
  }

  .stat-card-large {
    flex-direction: column;
    text-align: center;
  }
}
</style>
