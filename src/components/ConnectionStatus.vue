<template>
  <q-banner v-if="!isConnected" class="connection-banner bg-orange text-white" icon="cloud_off">
    <template v-slot:action>
      <q-btn flat color="white" label="Hướng dẫn" @click="showInstructions = true" icon="help" />
    </template>
    <div class="banner-content">
      <div class="banner-title">Đang sử dụng dữ liệu demo</div>
      <div class="banner-subtitle">
        Backend API chưa kết nối. Bạn bè và bảng xếp hạng hiển thị dữ liệu mẫu.
      </div>
    </div>
  </q-banner>

  <q-dialog v-model="showInstructions" persistent>
    <q-card style="min-width: 500px">
      <q-card-section>
        <div class="text-h6">🚀 Khởi động Backend Server</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="instructions">
          <p class="text-body1">
            Để sử dụng dữ liệu thật (bạn bè, bảng xếp hạng), bạn cần chạy backend server:
          </p>

          <div class="step">
            <div class="step-title">📂 Bước 1: Mở terminal mới</div>
            <q-banner class="code-banner bg-grey-2">
              <code>cd backend</code>
            </q-banner>
          </div>

          <div class="step">
            <div class="step-title">📦 Bước 2: Cài đặt dependencies</div>
            <q-banner class="code-banner bg-grey-2">
              <code>bun install</code>
            </q-banner>
          </div>

          <div class="step">
            <div class="step-title">🗄️ Bước 3: Setup database</div>
            <q-banner class="code-banner bg-grey-2">
              <code>bun run db:migrate<br />bun run db:seed</code>
            </q-banner>
          </div>

          <div class="step">
            <div class="step-title">🚀 Bư��c 4: Chạy backend</div>
            <q-banner class="code-banner bg-grey-2">
              <code>bun run dev</code>
            </q-banner>
          </div>

          <div class="step">
            <div class="step-title">✅ Bước 5: Refresh trang này</div>
            <p class="text-caption">Backend sẽ chạy trên http://localhost:3000</p>
          </div>

          <q-separator class="q-my-md" />

          <div class="quick-start">
            <div class="step-title">⚡ Quick Start (Tự động)</div>
            <p class="text-body2">Hoặc chạy script tự động:</p>
            <q-banner class="code-banner bg-blue-1">
              <code>./start-full-app.sh</code> (Linux/Mac)<br />
              <code>start-full-app.bat</code> (Windows)
            </q-banner>
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Đóng" color="primary" v-close-popup />
        <q-btn color="primary" label="Refresh" @click="refreshConnection" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isConnected = ref(false)
const showInstructions = ref(false)
let connectionCheckInterval = null

const checkConnection = async () => {
  // Skip connection check in cloud/hosted environments
  const isCloudEnvironment =
    window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'

  if (isCloudEnvironment) {
    isConnected.value = false
    return
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 2000)

    const response = await fetch('http://localhost:3000', {
      method: 'GET',
      mode: 'cors',
      signal: controller.signal,
    })

    clearTimeout(timeoutId)
    isConnected.value = response.ok
  } catch {
    // Silently handle connection errors - this is expected when backend isn't running
    isConnected.value = false
  }
}

const refreshConnection = async () => {
  await checkConnection()
  showInstructions.value = false
  if (isConnected.value) {
    // Trigger a page reload to use real API
    window.location.reload()
  }
}

onMounted(() => {
  checkConnection()
  // Check connection every 10 seconds
  connectionCheckInterval = setInterval(checkConnection, 10000)
})

onUnmounted(() => {
  if (connectionCheckInterval) {
    clearInterval(connectionCheckInterval)
  }
})
</script>

<style scoped>
.connection-banner {
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

.instructions {
  line-height: 1.6;
}

.step {
  margin-bottom: 1.5rem;
}

.step-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1976d2;
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

.quick-start {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  background: #f8f9fa;
}
</style>
