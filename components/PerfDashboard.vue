<script setup lang="ts">
const rows = [
  { title: 'Frame Time', tool: 'dotTrace · Unity Profiler', items: ['Discover', 'Locate', 'Fix', 'Regression'] },
  { title: 'Memory', tool: 'dotMemory', items: ['Snapshot', 'Leak path', 'GC spikes', 'Retained set'] },
  { title: 'Test Coverage', tool: 'dotCover', items: ['Hit matrix', 'Uncovered paths', 'Regression guard'] },
]
</script>

<template>
  <div class="flex flex-col gap-2">
    <div v-for="r in rows" :key="r.title" class="rider-card">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-sm font-semibold">{{ r.title }}</div>
          <div class="text-[10px] uppercase tracking-[0.2em] rider-muted">{{ r.tool }}</div>
        </div>
        <div class="flex gap-1 items-center h-6">
          <span
            v-for="(_, idx) in 16"
            :key="idx"
            class="w-1 rounded-sm"
            :style="{
              height: 8 + Math.abs(Math.sin(idx * (r.title.length % 3 + 0.7))) * 18 + 'px',
              background: idx % 4 === 0
                ? 'linear-gradient(180deg, var(--mandala-c, #ff3aa8), var(--mandala-b, #ff7a3c))'
                : 'linear-gradient(180deg, var(--mandala-a, #9a4bff), var(--mandala-b, #3ad9ff))',
            }"
          />
        </div>
      </div>
      <div class="mt-2 flex gap-2 flex-wrap">
        <span v-for="it in r.items" :key="it" class="rider-chip rider-chip--tag">{{ it }}</span>
      </div>
    </div>
  </div>
</template>
