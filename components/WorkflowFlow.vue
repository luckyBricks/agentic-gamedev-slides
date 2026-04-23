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
      :class="[accent === 'heat' ? 'border-[#ff3aa855]' : 'border-[#9a4bff55]']"
    >
      <div class="text-[10px] uppercase tracking-[0.25em] rider-muted">Step 0{{ i + 1 }}</div>
      <div class="mt-1 font-semibold text-sm">{{ s.label }}</div>
      <div v-if="s.detail" class="mt-1 text-[11px] rider-subtle leading-4">{{ s.detail }}</div>
      <span
        v-if="i < steps.length - 1"
        class="absolute top-1/2 -right-[10px] text-base"
        :class="accent === 'heat' ? 'text-[#ff3aa8]' : 'text-[#9a4bff]'"
        style="transform: translateY(-50%)"
      >
        →
      </span>
    </div>
  </div>
</template>
