<template>
  <q-layout view="lHh lpr lFf">
    <!-- Header for logged-in users -->
    <q-header class="dashboard-header" elevated>
      <q-toolbar class="dashboard-toolbar">
        <!-- Logo -->
        <div class="header-logo">
          <q-icon name="extension" class="logo-icon" />
          <div class="logo-text">Logo</div>
        </div>

        <!-- Navigation -->
        <div class="header-nav">
          <q-btn flat no-caps class="nav-btn" @click="$router.push('/dashboard')">
            Trang chủ
          </q-btn>
          <q-btn flat no-caps class="nav-btn" @click="$router.push('/dashboard/introduction')">
            Giới thiệu
          </q-btn>
          <q-btn flat no-caps class="nav-btn" @click="$router.push('/dashboard/challenges')">
            Thử thách
          </q-btn>
        </div>

        <q-space />

        <!-- User Stats -->
        <div class="user-stats">
          <div class="stat-item">
            <q-icon name="emoji_events" class="stat-icon" />
            <span class="stat-text"># 45</span>
          </div>
          <div class="stat-item">
            <span class="stat-number correct">523</span>
            <span class="stat-label">đúng</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Streak:</span>
            <span class="stat-number streak">7</span>
          </div>
        </div>

        <!-- User Profile -->
        <div class="user-profile">
          <q-avatar
            class="user-avatar clickable"
            size="32px"
            @click="$router.push('/dashboard/profile')"
          >
            ND
          </q-avatar>
          <span class="user-name clickable" @click="$router.push('/dashboard/profile')">
            Người dùng
          </span>

          <q-btn flat dense class="logout-btn" @click="logout">
            <q-icon name="logout" size="16px" class="q-mr-xs" />
            Đăng xuất
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <!-- Main content -->
    <q-page-container class="dashboard-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { auth } from '../utils/auth.js'

const router = useRouter()

// Auto-login for demo purposes
// Authentication is now handled by router guards

const logout = () => {
  // Handle logout logic
  auth.logout()
  router.push('/')
}
</script>

<style scoped>
.dashboard-header {
  background: linear-gradient(135deg, #f0f9ff 0%, #f0fdfa 100%);
  border-bottom: 1px solid #e2e8f0;
  color: #0f172a;
  backdrop-filter: blur(10px);
}

.dashboard-toolbar {
  padding: 0 24px;
  min-height: 73px;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%);
  color: white;
  padding: 8px;
  border-radius: 8px;
  font-size: 24px;
  box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
}

.header-nav {
  display: flex;
  gap: 24px;
  margin-left: 148px;
}

.nav-btn {
  color: #475569;
  font-size: 14px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.nav-btn:hover {
  color: #0ea5e9;
  background: rgba(14, 165, 233, 0.1);
}

.user-stats {
  display: flex;
  align-items: center;
  gap: 16px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.stat-icon {
  color: #14b8a6;
  font-size: 16px;
}

.stat-text {
  color: #334155;
  font-size: 14px;
}

.stat-number {
  font-size: 14px;
  font-weight: 500;
}

.stat-number.correct {
  color: #10b981;
}

.stat-number.streak {
  color: #0ea5e9;
}

.stat-label {
  color: #334155;
  font-size: 14px;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
}

.user-avatar {
  background: linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%);
  color: white;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.2);
}

.user-name {
  color: #0f172a;
  font-size: 16px;
  font-weight: 500;
}

.clickable {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.clickable:hover {
  opacity: 0.8;
}

.logout-btn {
  color: #475569;
  font-size: 12px;
  font-weight: 500;
  padding: 10px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  margin-left: 8px;
  transition: all 0.2s ease;
}

.logout-btn:hover {
  background: rgba(240, 249, 255, 0.5);
  border-color: #ccfbf1;
  color: #0ea5e9;
}

.dashboard-container {
  background: linear-gradient(135deg, #f8fafc 0%, #f0fdfa 100%);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .header-nav {
    margin-left: 48px;
    gap: 16px;
  }

  .user-stats {
    gap: 12px;
  }
}

@media (max-width: 768px) {
  .dashboard-toolbar {
    padding: 0 16px;
    min-height: 64px;
  }

  .header-nav {
    display: none;
  }

  .user-stats {
    flex-direction: column;
    gap: 4px;
    align-items: flex-end;
  }

  .stat-item {
    font-size: 12px;
  }

  .user-name {
    display: none;
  }
}
</style>
