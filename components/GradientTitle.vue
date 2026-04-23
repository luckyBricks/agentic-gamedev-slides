<script setup lang="ts">
defineProps<{
  text: string
  tone?: 'cool' | 'heat'
}>()
</script>

<template>
  <h1 :class="['font-bold leading-tight', tone === 'heat' ? 'rider-heat-text' : 'rider-gradient-text']">
    {{ text }}
  </h1>
</template>
