<script setup lang="ts">
const nodes = [
  { label: 'Rider + Agent', kind: 'start' },
  { label: 'Qodana Inspections', kind: 'gate' },
  { label: 'TeamCity Pipeline', kind: 'run' },
  { label: 'Mainline Merge', kind: 'goal' },
] as const
</script>

<template>
  <div class="relative rider-pipeline">
    <div
      v-for="n in nodes"
      :key="n.label"
      :class="['rider-pipeline__node', n.kind === 'gate' && 'rider-pipeline__node--gate']"
    >
      <div class="text-[10px] uppercase tracking-[0.2em] rider-muted">
        {{ n.kind === 'gate' ? 'Gate' : n.kind === 'goal' ? 'Target' : 'Stage' }}
      </div>
      <div class="mt-1 font-semibold">{{ n.label }}</div>
    </div>
    <div />
  </div>
</template>
