<script setup lang="ts">
const quadrants = [
  { title: 'Unreal', tags: ['Reflection', 'Blueprints', 'Debug & Tests'], tone: 'violet' },
  { title: 'Unity', tags: ['Tests', 'Profiling', 'Shaders'], tone: 'pink' },
  { title: 'Perforce', tags: ['Changelists', 'Shelve', 'Conflict UI'], tone: 'amber' },
  { title: 'Godot', tags: ['C#', 'GDScript', 'Unified Workbench'], tone: 'cyan' },
] as const

const toneMap: Record<string, string> = {
  violet: 'from-[#6c3bff]/50 to-[#9a4bff]/20 border-[#9a4bff80]',
  pink:   'from-[#ff3aa8]/50 to-[#e73cff]/20 border-[#ff3aa880]',
  amber:  'from-[#ff7a3c]/50 to-[#ffb547]/20 border-[#ffb54780]',
  cyan:   'from-[#3ad9ff]/50 to-[#6c3bff]/20 border-[#3ad9ff80]',
}
</script>

<template>
  <div class="relative grid grid-cols-2 gap-3 w-full">
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div class="rider-card rider-card--accent px-3 py-2 text-center bg-[#0b0616]">
        <div class="text-[10px] uppercase tracking-[0.25em] rider-muted">Rider Core</div>
        <div class="text-sm font-semibold">Engine-aware IDE</div>
      </div>
    </div>
    <div
      v-for="q in quadrants"
      :key="q.title"
      :class="['rider-card bg-gradient-to-br border', toneMap[q.tone]]"
    >
      <div class="text-base font-semibold">{{ q.title }}</div>
      <div class="mt-2 flex flex-wrap gap-1.5">
        <span v-for="t in q.tags" :key="t" class="rider-chip">{{ t }}</span>
      </div>
    </div>
  </div>
</template>
