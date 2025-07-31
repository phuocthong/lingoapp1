<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { suppressResizeObserverErrors } from './utils/errorSuppression.js'

// Initialize error suppression
onMounted(() => {
  suppressResizeObserverErrors()
})
</script>
