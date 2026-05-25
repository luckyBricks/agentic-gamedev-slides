<script setup lang="ts">
const quadrants = [
  { title: 'Unreal', icon: '/docs/brand-assets/unreal-engine.svg', tags: ['Reflection', 'Blueprints', 'Debug & Tests'], tone: 'violet' },
  { title: 'Unity',  icon: '/docs/brand-assets/unity.svg',         tags: ['Tests', 'Profiling', 'Shaders'], tone: 'pink' },
  { title: 'Perforce', icon: '/docs/brand-assets/perforce.svg',    tags: ['Changelists', 'Shelve', 'Conflict UI'], tone: 'amber' },
  { title: 'Godot',  icon: '/docs/brand-assets/godot.svg',          tags: ['C#', 'GDScript', 'Unified Workbench'], tone: 'cyan' },
] as const

const toneMap: Record<string, string> = {
  violet: 'from-[#7C3AED]/50 to-[#8B5CF6]/20 border-[#8B5CF680]',
  pink:   'from-[#C026D3]/50 to-[#C026D3]/20 border-[#C026D380]',
  amber:  'from-[#FF8200]/50 to-[#FE9900]/20 border-[#FE990080]',
  cyan:   'from-[#C026D3]/50 to-[#7C3AED]/20 border-[#C026D380]',
}
</script>

<template>
  <div class="relative grid grid-cols-2 gap-3 w-full">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <div class="rider-card px-3 py-2 text-center bg-[var(--rider-bg-2,#1A1424)]">
        <div class="text-[10px] uppercase tracking-[0.25em] rider-muted">Rider Core</div>
        <div class="text-sm font-semibold">Engine-aware IDE</div>
      </div>
    </div>
    <div
      v-for="q in quadrants"
      :key="q.title"
      :class="['rider-card bg-gradient-to-br border', toneMap[q.tone]]"
    >
      <div class="flex items-center gap-2">
        <img v-if="q.icon" :src="q.icon" :alt="q.title" class="h-5 w-5 shrink-0" :class="q.title === 'Perforce' ? 'h-4 w-auto' : ''" />
        <div class="text-base font-semibold">{{ q.title }}</div>
      </div>
      <div class="mt-2 flex flex-wrap gap-1.5">
        <span v-for="t in q.tags" :key="t" class="rider-chip rider-chip--tag">{{ t }}</span>
      </div>
    </div>
  </div>
</template>
