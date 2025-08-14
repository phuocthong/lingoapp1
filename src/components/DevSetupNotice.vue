<template>
  <q-banner
    v-if="showNotice"
    class="setup-banner bg-info text-white"
    icon="developer_mode"
  >
    <template v-slot:action>
      <q-btn
        flat
        color="white"
        label="Đã hiểu"
        @click="dismissNotice"
        icon="check"
      />
      <q-btn
        flat
        color="white"
        label="Chi tiết"
        @click="showDetails = true"
        icon="info"
      />
    </template>
    <div class="banner-content">
      <div class="banner-title">🚀 Development Mode</div>
      <div class="banner-subtitle">
        App đang chạy với dữ liệu demo. Để kết nối backend thật, vui lòng làm theo hướng dẫn.
      </div>
    </div>
  </q-banner>

  <q-dialog v-model="showDetails" persistent>
    <q-card style="min-width: 600px">
      <q-card-section>
        <div class="text-h6">🛠️ Hướng dẫn Development Setup</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="setup-instructions">
          <q-banner class="info-banner bg-blue-1 text-dark q-mb-md">
            <template v-slot:avatar>
              <q-icon name="info" color="blue" />
            </template>
            Frontend đang chạy thành công trên <strong>http://localhost:9000</strong>
          </q-banner>

          <div class="step-section">
            <div class="step-title">📋 Để kết nối Backend API:</div>
            
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <div class="step-header">Mở Terminal mới</div>
                <q-banner class="code-banner bg-grey-2">
                  <code>cd backend</code>
                </q-banner>
              </div>
            </div>

            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <div class="step-header">Cài đặt Backend Dependencies (nếu chưa)</div>
                <q-banner class="code-banner bg-grey-2">
                  <code>bun install</code>
                </q-banner>
              </div>
            </div>

            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <div class="step-header">Setup Database</div>
                <q-banner class="code-banner bg-grey-2">
                  <code>bun run db:migrate && bun run db:seed</code>
                </q-banner>
              </div>
            </div>

            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <div class="step-header">Chạy Backend Server</div>
                <q-banner class="code-banner bg-grey-2">
                  <code>bun run dev</code>
                </q-banner>
              </div>
            </div>

            <div class="step">
              <div class="step-number">5</div>
              <div class="step-content">
                <div class="step-header">Refresh trang này</div>
                <p class="text-caption">Backend sẽ chạy trên http://localhost:3000</p>
              </div>
            </div>
          </div>

          <q-separator class="q-my-md" />

          <div class="quick-commands">
            <div class="step-title">⚡ Quick Commands:</div>
            <q-banner class="code-banner bg-green-1">
              <div class="quick-command">
                <strong>Setup một lần:</strong><br>
                <code>npm run setup</code>
              </div>
              <div class="quick-command">
                <strong>Chạy full app:</strong><br>
                <code>npm run dev:full</code>
              </div>
            </q-banner>
          </div>

          <q-banner class="warning-banner bg-orange-1 text-dark q-mt-md">
            <template v-slot:avatar>
              <q-icon name="warning" color="orange" />
            </template>
            <strong>Lưu ý:</strong> Hiện tại app đang sử dụng dữ liệu demo. 
            Bạn bè và bảng xếp hạng sẽ hiển thị dữ liệu thật sau khi backend kết nối.
          </q-banner>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Đóng" color="primary" v-close-popup />
        <q-btn 
          color="primary" 
          label="Test Connection" 
          @click="testConnection"
          :loading="testing"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { createNotification } from '../utils/notifications.js'

const showNotice = ref(true)
const showDetails = ref(false)
const testing = ref(false)

const dismissNotice = () => {
  showNotice.value = false
  localStorage.setItem('dev-setup-dismissed', 'true')
}

const testConnection = async () => {
  testing.value = true
  try {
    const response = await fetch('http://localhost:3000', {
      method: 'GET',
      mode: 'cors',
    })
    
    if (response.ok) {
      createNotification('success', '✅ Backend kết nối thành công!')
      showDetails.value = false
      showNotice.value = false
      // Optionally reload the page to use real API
      setTimeout(() => {
        if (confirm('Backend đã kết nối! Reload trang để sử dụng dữ liệu thật?')) {
          window.location.reload()
        }
      }, 1000)
    } else {
      createNotification('warning', '⚠️ Backend chưa sẵn sàng, vui lòng kiểm tra lại')
    }
  } catch (error) {
    createNotification('negative', '❌ Không thể kết nối backend. Vui lòng chạy backend server.')
  }
  testing.value = false
}

onMounted(() => {
  // Check if user has already dismissed the notice
  const dismissed = localStorage.getItem('dev-setup-dismissed')
  if (dismissed === 'true') {
    showNotice.value = false
  }
})
</script>

<style scoped>
.setup-banner {
  margin-bottom: 1rem;
}

.banner-content {
  display: flex;
  flex-direction: column;
}

.banner-title {
  font-weight: 600;
  font-size: 1rem;
}

.banner-subtitle {
  font-size: 0.875rem;
  opacity: 0.9;
  margin-top: 0.25rem;
}

.setup-instructions {
  line-height: 1.6;
}

.step-section {
  margin: 1rem 0;
}

.step-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #1976d2;
}

.step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.2rem;
  gap: 1rem;
}

.step-number {
  background: #1976d2;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-header {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.code-banner {
  margin: 0.5rem 0;
  border-radius: 4px;
}

.code-banner code {
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.4;
}

.quick-commands {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  background: #f8f9fa;
}

.quick-command {
  margin-bottom: 0.5rem;
}

.quick-command:last-child {
  margin-bottom: 0;
}

.info-banner,
.warning-banner {
  border-radius: 4px;
  border: none;
}
</style>
