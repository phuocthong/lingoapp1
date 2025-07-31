<template>
  <router-view />
</template>

<script setup>
import { suppressResizeObserverErrors } from './utils/errorSuppression.js'

// Initialize error suppression immediately (before mounting)
suppressResizeObserverErrors()
</script>
