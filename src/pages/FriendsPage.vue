<template>
  <q-page class="friends-page">
    <div class="tasks-container">
      <div class="sidebar">
        <div class="nav-links">
          <div class="nav-link" @click="$router.push('/dashboard')">
            <!-- SVG Dashboard -->
            <span class="nav-label">Dashboard</span>
          </div>
          <div class="nav-link active">
            <!-- SVG Friends -->
            <span class="nav-label">Bạn bè</span>
          </div>
          <div class="nav-link" @click="$router.push('/dashboard/add-friends')">
            <!-- SVG Add Friends -->
            <span class="nav-label">Thêm bạn bè</span>
          </div>
          <div class="nav-link" @click="$router.push('/dashboard/tasks')">
            <!-- SVG Tasks -->
            <span class="nav-label">Nhiệm vụ</span>
          </div>
          <div class="nav-link" @click="$router.push('/dashboard/rewards')">
            <!-- SVG Rewards -->
            <span class="nav-label">Đổi điểm</span>
          </div>
        </div>
      </div>
      <div class="main-content">
        <div class="page-header">
          <h1 class="page-title">Bạn bè</h1>
        </div>
        <div class="card">
          <div class="search-container">
            <div class="search-input">
              <!-- SVG Search -->
              <input type="text" placeholder="Tìm kiếm bạn bè" class="search-field" />
            </div>
          </div>
          <div class="friends-list">
            <div v-for="friend in friends" :key="friend.id" class="friend-item">
              <div class="friend-avatar">
                <img :src="friend.avatar" :alt="friend.name" />
                <div class="online-indicator"></div>
              </div>
              <div class="friend-info">
                <div class="friend-name">{{ friend.name }}</div>
                <div class="friend-username">{{ friend.username }}</div>
                <div class="friend-status">
                  <!-- SVG Fire -->
                  <span class="status-text">{{ friend.streak }} ngày • {{ friend.status }}</span>
                </div>
              </div>
              <div class="friend-actions">
                <q-btn class="challenge-btn" color="primary">
                  <!-- SVG Sword -->
                  Thử thách
                </q-btn>
                <div class="menu-btn">•••</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const friends = ref([
  { id: 1, name: 'Người dùng', username: '@nguoidung', avatar: 'https://via.placeholder.com/55', streak: '15', status: 'Đang hoạt động' },
  // ...thêm bạn bè khác...
])
</script>

<style scoped>
.friends-page {
  background: #f8fafc;
  min-height: 100vh;
}
.tasks-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}
.sidebar {
  width: 285px;
  background: white;
  padding: 20px 0;
  border-right: 1px solid #e2e8f0;
}
.nav-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.nav-link {
  display: flex;
  align-items: center;
  gap: 17px;
  padding: 15px 17px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.nav-link:hover {
  background: rgba(109, 40, 217, 0.1);
}
.nav-link.active {
  background: rgba(109, 40, 217, 0.1);
}
.nav-link.active .nav-label {
  color: #6d28d9;
  font-weight: 600;
}
.nav-label {
  font-size: 20px;
  font-weight: 500;
  color: #5c5e64;
  line-height: 29px;
  letter-spacing: -0.4px;
}
.main-content {
  flex: 1;
  padding: 32px;
}
.page-header {
  margin-bottom: 24px;
}
.page-title {
  font-size: 28px;
  font-weight: 700;
  color: #0ea5e9;
  margin: 0;
}
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  padding: 24px;
}
.search-container {
  width: 100%;
  max-width: 895px;
  margin-bottom: 24px;
}
.search-input {
  position: relative;
  width: 100%;
  height: 43px;
}
.search-field {
  width: 100%;
  height: 100%;
  padding: 0 32px 0 40px;
  border: 1px solid rgba(107, 114, 128, 0.3);
  border-radius: 8px;
  background: #fff;
  font-size: 14px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
  outline: none;
}
.friends-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 895px;
}
.friend-item {
  display: flex;
  align-items: center;
  padding: 22px;
  background: #f1f5f9;
  border-radius: 8px;
  position: relative;
  border: none;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.friend-avatar {
  position: relative;
  margin-right: 18px;
}
.friend-avatar img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: 1.6px solid #858597;
  object-fit: cover;
}
.online-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 9px;
  height: 9px;
  background: #24da67;
  border: 1px solid #fff;
  border-radius: 50%;
}
.friend-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.friend-name {
  font-size: 18px;
  font-weight: 500;
  color: #000;
  line-height: normal;
}
.friend-username {
  font-size: 16px;
  font-weight: 300;
  color: #000;
  line-height: normal;
}
.friend-status {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
}
.status-text {
  font-size: 13px;
  font-weight: 400;
  color: #a16207;
  line-height: 180%;
}
.friend-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
}
.challenge-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #0ea5e9;
  color: #fff;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  height: 36px;
  min-width: 143px;
}
.menu-btn {
  font-size: 18px;
  color: #a16207;
  cursor: pointer;
  padding: 4px 8px;
  line-height: 180%;
}
@media (max-width: 1024px) {
  .sidebar {
    width: 240px;
  }
  .nav-label {
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  .tasks-container {
    flex-direction: column;
  }
  .sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }
  .nav-links {
    flex-direction: row;
    overflow-x: auto;
    padding: 0 16px;
  }
  .nav-link {
    flex-direction: column;
    min-width: 80px;
    text-align: center;
    gap: 8px;
    padding: 12px 8px;
  }
  .nav-label {
    font-size: 12px;
    white-space: nowrap;
  }
  .main-content {
    padding: 16px;
  }
  .page-title {
    font-size: 24px;
  }
  .friend-item {
    padding: 16px;
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }
  .friend-actions {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
  .challenge-btn {
    flex: 1;
    max-width: 200px;
  }
}
</style>