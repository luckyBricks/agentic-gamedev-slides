<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <span class="rider-chip rider-chip--tip">{{ label || 'Tip:' }}</span>
</template>
