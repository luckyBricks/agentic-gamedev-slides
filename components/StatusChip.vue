<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <span class="rider-chip rider-chip--status">{{ label || 'New' }}</span>
</template>
