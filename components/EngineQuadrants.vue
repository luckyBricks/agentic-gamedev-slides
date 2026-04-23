<script setup lang="ts">
const cells = [
  { title: 'Unreal', tags: ['Macros', 'Reflection', 'Blueprints'], tone: 'violet' },
  { title: 'Unity', tags: ['Prefabs', 'Scenes', 'Shaders', 'Profiler'], tone: 'pink' },
  { title: 'Perforce', tags: ['Changelists', 'Shelve', 'Locks'], tone: 'amber' },
  { title: 'Shipping', tags: ['Build', 'Quality Gate', 'Perf Regression'], tone: 'cyan' },
] as const

const tone = {
  violet: 'from-[#6c3bff55] to-[#9a4bff1a] border-[#9a4bff66]',
  pink:   'from-[#ff3aa855] to-[#e73cff1a] border-[#ff3aa866]',
  amber:  'from-[#ff7a3c55] to-[#ffb5471a] border-[#ffb54766]',
  cyan:   'from-[#3ad9ff55] to-[#6c3bff1a] border-[#3ad9ff66]',
} as Record<string, string>
</script>

<template>
  <div class="grid grid-cols-2 gap-3 w-full">
    <div
      v-for="c in cells"
      :key="c.title"
      :class="['rider-card bg-gradient-to-br', tone[c.tone], 'border']"
    >
      <div class="flex items-baseline justify-between">
        <div class="text-lg font-semibold">{{ c.title }}</div>
        <div class="text-[10px] uppercase tracking-widest rider-muted">Surface</div>
      </div>
      <div class="mt-2 flex flex-wrap gap-1.5">
        <span v-for="t in c.tags" :key="t" class="rider-chip">{{ t }}</span>
      </div>
    </div>
  </div>
</template>
