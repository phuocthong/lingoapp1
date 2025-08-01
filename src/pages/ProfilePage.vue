<template>
  <div class="profile-page">
    <!-- Modern Sidebar Navigation -->
    <div class="profile-sidebar" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
      <div class="sidebar-header">
        <div class="logo-section">
          <div class="logo-icon">
            <q-icon name="account_circle" />
          </div>
          <div class="logo-text" v-show="!sidebarCollapsed">Profile</div>
        </div>
        <button class="sidebar-toggle" @click="toggleSidebar">
          <q-icon :name="sidebarCollapsed ? 'menu' : 'close'" />
        </button>
      </div>

      <nav class="sidebar-nav" v-show="!sidebarCollapsed">
        <div
          class="nav-item"
          :class="{ active: activeTab === 'profile' }"
          @click="navigateToTab('profile', '/dashboard/profile')"
        >
          <div class="nav-icon">
            <q-icon name="person" />
          </div>
          <span class="nav-text">Hồ sơ</span>
          <div class="nav-indicator"></div>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeTab === 'friends' }"
          @click="navigateToTab('friends', '/dashboard/friends')"
        >
          <div class="nav-icon">
            <q-icon name="people" />
          </div>
          <span class="nav-text">Bạn bè</span>
          <div class="nav-indicator"></div>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeTab === 'add-friends' }"
          @click="navigateToTab('add-friends', '/dashboard/add-friends')"
        >
          <div class="nav-icon">
            <q-icon name="person_add" />
          </div>
          <span class="nav-text">Thêm bạn bè</span>
          <div class="nav-indicator"></div>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeTab === 'tasks' }"
          @click="navigateToTab('tasks', '/dashboard/tasks')"
        >
          <div class="nav-icon">
            <q-icon name="task" />
          </div>
          <span class="nav-text">Nhiệm vụ</span>
          <div class="nav-indicator"></div>
        </div>
        <div
          class="nav-item"
          :class="{ active: activeTab === 'rewards' }"
          @click="navigateToTab('rewards', '/dashboard/rewards')"
        >
          <div class="nav-icon">
            <q-icon name="card_giftcard" />
          </div>
          <span class="nav-text">Đổi điểm</span>
          <div class="nav-indicator"></div>
        </div>
      </nav>

      <div class="sidebar-footer" v-show="!sidebarCollapsed">
        <div class="user-card">
          <q-avatar size="32px" class="user-mini-avatar">
            <img :src="userAvatar" alt="User" />
          </q-avatar>
          <div class="user-mini-info">
            <div class="user-mini-name">Người dùng</div>
            <div class="user-mini-status">Online</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="profile-content" :class="{ 'content-expanded': sidebarCollapsed }">
      <!-- Hero Section -->
      <div class="profile-hero">
        <div class="hero-background">
          <div class="hero-gradient"></div>
          <div class="hero-pattern"></div>
        </div>
        
        <div class="hero-content">
          <div class="profile-main">
            <div class="avatar-section">
              <div class="avatar-container">
                <q-avatar size="120px" class="profile-avatar">
                  <img :src="userAvatar" alt="User Avatar" />
                </q-avatar>
                <div class="status-indicator online"></div>
                <div class="verified-badge">
                  <q-icon name="verified" />
                </div>
              </div>
              
              <div class="profile-info">
                <h1 class="user-name">Người dùng</h1>
                <p class="user-handle">@nguoidung</p>
                <div class="user-stats-inline">
                  <div class="stat-pill">
                    <q-icon name="emoji_events" />
                    <span>Level 10</span>
                  </div>
                  <div class="stat-pill">
                    <q-icon name="local_fire_department" />
                    <span>15 days streak</span>
                  </div>
                  <div class="stat-pill">
                    <q-icon name="star" />
                    <span>1,000 XP</span>
                  </div>
                </div>
                <div class="join-info">
                  <q-icon name="calendar_today" />
                  <span>Tham gia từ 1/1/2025</span>
                </div>
              </div>
            </div>
            
            <div class="profile-actions">
              <q-btn 
                unelevated 
                rounded 
                color="primary" 
                class="action-btn primary-btn"
                @click="editProfile"
              >
                <q-icon name="edit" class="q-mr-sm" />
                Chỉnh sửa
              </q-btn>
              <q-btn 
                unelevated 
                rounded 
                outline 
                color="primary" 
                class="action-btn secondary-btn"
              >
                <q-icon name="share" class="q-mr-sm" />
                Chia sẻ
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics Section -->
      <div class="stats-section">
        <div class="section-header">
          <h2 class="section-title">Thống kê học tập</h2>
          <div class="section-subtitle">Theo dõi tiến trình học tập của bạn</div>
        </div>

        <!-- Main Stats Grid -->
        <div class="main-stats-grid">
          <div class="stat-card featured">
            <div class="stat-header">
              <div class="stat-icon accuracy">
                <q-icon name="check_circle" />
              </div>
              <div class="stat-trend up">
                <q-icon name="trending_up" />
                <span>+5%</span>
              </div>
            </div>
            <div class="stat-content">
              <div class="stat-value">82%</div>
              <div class="stat-label">Tỷ lệ chính xác</div>
              <div class="stat-progress">
                <div class="progress-bar">
                  <div class="progress-fill" style="width: 82%"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-header">
              <div class="stat-icon questions">
                <q-icon name="quiz" />
              </div>
            </div>
            <div class="stat-content">
              <div class="stat-value">1,000</div>
              <div class="stat-label">Câu trả lời</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-header">
              <div class="stat-icon vocabulary">
                <q-icon name="book" />
              </div>
            </div>
            <div class="stat-content">
              <div class="stat-value">2,125</div>
              <div class="stat-label">Từ đã học</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-header">
              <div class="stat-icon time">
                <q-icon name="schedule" />
              </div>
            </div>
            <div class="stat-content">
              <div class="stat-value">2.5s</div>
              <div class="stat-label">Thời gian/câu</div>
            </div>
          </div>
        </div>

        <!-- Secondary Stats -->
        <div class="secondary-stats">
          <div class="streak-card">
            <div class="streak-header">
              <div class="streak-icon">
                <q-icon name="local_fire_department" />
              </div>
              <div class="streak-info">
                <div class="streak-title">Chuỗi học tập</div>
                <div class="streak-subtitle">Ngày liên tiếp</div>
              </div>
            </div>
            <div class="streak-values">
              <div class="streak-current">
                <div class="streak-number">15</div>
                <div class="streak-label">Hiện tại</div>
              </div>
              <div class="streak-divider"></div>
              <div class="streak-best">
                <div class="streak-number">28</div>
                <div class="streak-label">Tốt nhất</div>
              </div>
            </div>
          </div>

          <div class="achievement-card">
            <div class="achievement-header">
              <q-icon name="military_tech" />
              <span>Thành tích gần đây</span>
            </div>
            <div class="achievement-list">
              <div class="achievement-item">
                <div class="achievement-icon">🏆</div>
                <div class="achievement-text">Streak Master - 15 ngày</div>
              </div>
              <div class="achievement-item">
                <div class="achievement-icon">🎯</div>
                <div class="achievement-text">Accuracy Expert - 80%+</div>
              </div>
              <div class="achievement-item">
                <div class="achievement-icon">📚</div>
                <div class="achievement-text">Word Collector - 2000+</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress Chart -->
      <div class="chart-section">
        <div class="section-header">
          <h2 class="section-title">Tiến trình học tập</h2>
          <div class="chart-controls">
            <q-btn-toggle
              v-model="chartPeriod"
              :options="[
                {label: '7 ngày', value: '7d'},
                {label: '30 ngày', value: '30d'},
                {label: '90 ngày', value: '90d'}
              ]"
              rounded
              unelevated
              color="primary"
              text-color="grey-7"
            />
          </div>
        </div>
        
        <div class="chart-card">
          <div class="chart-container">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets%2Ff046890c17ca436cab38cffc651fb9cb%2F447e5d8b31224c1187498477057c7f95?format=webp&width=800" 
              alt="Progress Chart" 
              class="chart-image"
            />
            <div class="chart-overlay">
              <div class="chart-stats">
                <div class="chart-stat">
                  <div class="chart-stat-value">+23%</div>
                  <div class="chart-stat-label">Cải thiện</div>
                </div>
                <div class="chart-stat">
                  <div class="chart-stat-value">127</div>
                  <div class="chart-stat-label">Điểm cao nhất</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact & Settings -->
      <div class="bottom-section">
        <div class="contact-card">
          <div class="card-header">
            <q-icon name="contact_mail" />
            <span>Thông tin liên hệ</span>
          </div>
          <div class="contact-list">
            <div class="contact-item">
              <div class="contact-icon">
                <q-icon name="email" />
              </div>
              <div class="contact-info">
                <div class="contact-value">nguoidung@gmail.com</div>
                <div class="contact-type">Email chính</div>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">
                <q-icon name="phone" />
              </div>
              <div class="contact-info">
                <div class="contact-value">+84 123 456 7890</div>
                <div class="contact-type">Số điện thoại</div>
              </div>
            </div>
          </div>
        </div>

        <div class="settings-card">
          <div class="card-header">
            <q-icon name="settings" />
            <span>Cài đặt tài khoản</span>
          </div>
          <div class="settings-list">
            <div class="setting-item">
              <q-icon name="lock" />
              <span>Đổi mật khẩu</span>
              <q-icon name="chevron_right" />
            </div>
            <div class="setting-item">
              <q-icon name="notifications" />
              <span>Thông báo</span>
              <q-icon name="chevron_right" />
            </div>
            <div class="setting-item">
              <q-icon name="privacy_tip" />
              <span>Quyền riêng tư</span>
              <q-icon name="chevron_right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const sidebarCollapsed = ref(false)
const activeTab = ref('profile')
const chartPeriod = ref('30d')

const userAvatar = ref(
  'https://cdn.builder.io/o/assets%2Ff046890c17ca436cab38cffc651fb9cb%2Fd0e1a2af26da485f8609e3080da7d7b8?alt=media&token=aca82dee-2b72-4297-9d9d-7921d490a327&apiKey=f046890c17ca436cab38cffc651fb9cb',
)

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

const setActiveTab = (tab) => {
  activeTab.value = tab
}

const navigateToTab = (tab, routePath) => {
  setActiveTab(tab)
  router.push(routePath)
}

// Set active tab based on current route
const updateActiveTabFromRoute = () => {
  const currentPath = route.path
  if (currentPath.includes('/dashboard/friends')) {
    activeTab.value = 'friends'
  } else if (currentPath.includes('/dashboard/add-friends')) {
    activeTab.value = 'add-friends'
  } else if (currentPath.includes('/dashboard/tasks')) {
    activeTab.value = 'tasks'
  } else if (currentPath.includes('/dashboard/rewards')) {
    activeTab.value = 'rewards'
  } else if (currentPath.includes('/dashboard/profile')) {
    activeTab.value = 'profile'
  } else {
    // Default to profile for any other dashboard route
    activeTab.value = 'profile'
  }
}

// Watch for route changes
watch(route, () => {
  updateActiveTabFromRoute()
})

// Set initial active tab on mount
onMounted(() => {
  updateActiveTabFromRoute()
})

const editProfile = () => {
  console.log('Edit profile clicked')
}

const logout = () => {
  router.push('/')
}
</script>

<style scoped>
.profile-page {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Modern Sidebar */
.profile-sidebar {
  width: 280px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 100;
}

.sidebar-collapsed {
  width: 80px;
}

.sidebar-header {
  padding: 24px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}

.logo-text {
  font-size: 18px;
  font-weight: 700;
  color: #1a202c;
}

.sidebar-toggle {
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #4a5568;
}

.sidebar-toggle:hover {
  background: rgba(0, 0, 0, 0.1);
  transform: scale(1.05);
}

.sidebar-nav {
  flex: 1;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #4a5568;
  overflow: hidden;
}

.nav-item:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  transform: translateX(4px);
}

.nav-item.active {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  transform: translateX(8px);
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.nav-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.nav-text {
  font-size: 14px;
  font-weight: 500;
  flex: 1;
}

.nav-indicator {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.nav-item.active .nav-indicator {
  opacity: 1;
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.user-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
}

.user-mini-avatar {
  border: 2px solid rgba(102, 126, 234, 0.3);
}

.user-mini-info {
  flex: 1;
}

.user-mini-name {
  font-size: 13px;
  font-weight: 600;
  color: #1a202c;
  line-height: 1.2;
}

.user-mini-status {
  font-size: 11px;
  color: #10b981;
  line-height: 1.2;
}

/* Main Content */
.profile-content {
  flex: 1;
  overflow-y: auto;
  background: transparent;
}

.content-expanded {
  margin-left: 0;
}

/* Hero Section */
.profile-hero {
  position: relative;
  padding: 40px 32px 60px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.profile-main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
}

.avatar-section {
  display: flex;
  align-items: center;
  gap: 24px;
}

.avatar-container {
  position: relative;
}

.profile-avatar {
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.status-indicator {
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 3px solid white;
}

.status-indicator.online {
  background: #10b981;
}

.verified-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  width: 32px;
  height: 32px;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 3px solid white;
  font-size: 16px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.user-name {
  font-size: 32px;
  font-weight: 800;
  color: white;
  margin: 0;
  line-height: 1.2;
}

.user-handle {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.user-stats-inline {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.stat-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  color: white;
  font-size: 13px;
  font-weight: 500;
}

.join-info {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-top: 8px;
}

.profile-actions {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.action-btn {
  padding: 12px 24px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(102, 126, 234, 0.4);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Statistics Section */
.stats-section {
  padding: 0 32px 40px;
}

.section-header {
  margin-bottom: 24px;
}

.section-title {
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0 0 4px 0;
}

.section-subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

.main-stats-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.15);
}

.stat-card.featured {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.1));
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.stat-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
}

.stat-icon.accuracy {
  background: linear-gradient(135deg, #10b981, #059669);
}

.stat-icon.questions {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
}

.stat-icon.vocabulary {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.stat-icon.time {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.stat-trend {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.stat-trend.up {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.stat-content {
  color: white;
}

.stat-value {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 12px;
}

.stat-progress {
  width: 100%;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #10b981, #059669);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.secondary-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.streak-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.streak-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.streak-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
}

.streak-info {
  color: white;
}

.streak-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 2px;
}

.streak-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.streak-values {
  display: flex;
  align-items: center;
  gap: 20px;
}

.streak-current,
.streak-best {
  text-align: center;
  color: white;
}

.streak-number {
  font-size: 24px;
  font-weight: 800;
  line-height: 1.2;
}

.streak-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.streak-divider {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
}

.achievement-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
}

.achievement-header {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
}

.achievement-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.achievement-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
}

/* Chart Section */
.chart-section {
  padding: 0 32px 40px;
}

.chart-controls {
  display: flex;
  gap: 8px;
}

.chart-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.chart-container {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.chart-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
}

.chart-overlay {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 16px;
}

.chart-stats {
  display: flex;
  gap: 16px;
}

.chart-stat {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 12px 16px;
  border-radius: 8px;
  text-align: center;
  color: white;
}

.chart-stat-value {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;
}

.chart-stat-label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
}

/* Bottom Section */
.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0 32px 40px;
}

.contact-card,
.settings-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 24px;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
}

.contact-list,
.settings-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-icon {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.contact-info {
  flex: 1;
  color: white;
}

.contact-value {
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 2px;
}

.contact-type {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.setting-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.setting-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(4px);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .main-stats-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .profile-page {
    flex-direction: column;
  }

  .profile-sidebar {
    width: 100%;
    height: auto;
  }

  .sidebar-collapsed {
    width: 100%;
  }

  .profile-main {
    flex-direction: column;
    text-align: center;
  }

  .avatar-section {
    flex-direction: column;
    text-align: center;
  }

  .main-stats-grid {
    grid-template-columns: 1fr;
  }

  .secondary-stats {
    grid-template-columns: 1fr;
  }

  .bottom-section {
    grid-template-columns: 1fr;
  }

  .user-stats-inline {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
