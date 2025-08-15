<template>
  <q-card v-if="!isBackendConnected && showStatus" class="development-status q-mb-md" flat bordered>
    <q-card-section class="row items-center">
      <q-avatar color="primary" text-color="white" icon="code" />
      <div class="q-ml-md">
        <div class="text-subtitle1">Development Mode</div>
        <div class="text-caption text-grey-6">
          App chạy với demo data. Backend cần được khởi động riêng.
        </div>
      </div>
      <q-space />
      <q-btn
        flat
        color="primary"
        label="Hướng dẫn"
        icon="help_outline"
        @click="showInstructions"
        size="sm"
      />
      <q-btn flat color="negative" icon="close" @click="hideStatus" size="sm" round />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { createNotification } from '../utils/notifications.js'

const isBackendConnected = ref(false)
const showStatus = ref(true)

const checkBackendConnection = async () => {
  // Skip connection check in cloud/hosted environments
  const isCloudEnvironment =
    window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'

  if (isCloudEnvironment) {
    isBackendConnected.value = false
    return
  }

  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3000)

    const response = await fetch('http://localhost:3001', {
      method: 'GET',
      mode: 'cors',
      signal: controller.signal,
    })

    clearTimeout(timeoutId)
    isBackendConnected.value = response.ok
  } catch {
    // Silently handle connection errors
    isBackendConnected.value = false
  }
}

const hideStatus = () => {
  showStatus.value = false
  localStorage.setItem('hide-dev-status', 'true')
}

const showInstructions = () => {
  createNotification('info', {
    message: 'Để kết nối backend: mở terminal mới → cd backend → bun install → bun run dev',
    timeout: 8000,
    actions: [
      {
        label: 'OK',
        color: 'white',
        handler: () => {},
      },
    ],
  })
}

onMounted(() => {
  const hidden = localStorage.getItem('hide-dev-status')
  if (hidden === 'true') {
    showStatus.value = false
  }
  checkBackendConnection()
})
</script>

<style scoped>
.development-status {
  border: 1px solid #e0e0e0;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}
</style>
