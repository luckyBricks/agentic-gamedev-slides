<script setup lang="ts">
defineProps<{
  kicker?: string
  label?: string
}>()
</script>

<template>
  <div class="flex items-center gap-3 mb-4">
    <span class="rider-chip">
      <span class="rider-dot" />
      {{ kicker || 'CHAPTER' }}
    </span>
    <span v-if="label" class="text-xs tracking-[0.2em] uppercase rider-muted">{{ label }}</span>
  </div>
</template>
