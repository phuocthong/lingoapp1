<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'

// Suppress ResizeObserver errors
onMounted(() => {
  // Catch ResizeObserver loop errors and suppress them
  const resizeObserverErr = (e) => {
    if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
      const resizeObserverErrDiv = document.getElementById('webpack-dev-server-client-overlay-div')
      const resizeObserverErr = document.getElementById('webpack-dev-server-client-overlay')
      if (resizeObserverErr) {
        resizeObserverErr.setAttribute('style', 'display: none')
      }
      if (resizeObserverErrDiv) {
        resizeObserverErrDiv.setAttribute('style', 'display: none')
      }
    }
  }
  window.addEventListener('error', resizeObserverErr)

  // Also catch and suppress in console
  const originalError = console.error
  console.error = (...args) => {
    if (args[0] && args[0].includes && args[0].includes('ResizeObserver loop completed')) {
      return
    }
    originalError.apply(console, args)
  }
})
</script>
