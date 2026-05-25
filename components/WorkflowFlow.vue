<script setup lang="ts">
defineProps<{
  steps: { label: string; detail?: string }[]
  accent?: 'violet' | 'heat'
}>()
</script>

<template>
  <div class="grid gap-2" :style="{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }">
    <div
      v-for="(s, i) in steps"
      :key="s.label"
      class="relative rider-card text-center"
      :style="{ borderColor: accent === 'heat' ? 'var(--mandala-c, rgba(255,255,255,0.2))' : 'var(--mandala-b, rgba(255,255,255,0.2))' }"
    >
      <div class="text-[10px] uppercase tracking-[0.25em] rider-muted">Step 0{{ i + 1 }}</div>
      <div class="mt-1 font-semibold text-sm">{{ s.label }}</div>
      <div v-if="s.detail" class="mt-1 text-[11px] rider-subtle leading-4">{{ s.detail }}</div>
      <span
        v-if="i < steps.length - 1"
        class="absolute top-1/2 -right-[10px] text-base"
        :style="{
          transform: 'translateY(-50%)',
          color: accent === 'heat' ? 'var(--mandala-c, #C026D3)' : 'var(--mandala-b, #8B5CF6)',
        }"
      >
        →
      </span>
    </div>
  </div>
</template>
