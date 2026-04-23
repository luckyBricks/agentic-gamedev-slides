<script setup lang="ts">
const spokes = [
  { label: 'Indexing', angle: 0 },
  { label: 'Semantic Analysis', angle: 45 },
  { label: 'Refactoring', angle: 90 },
  { label: 'Tests', angle: 135 },
  { label: 'Debugger', angle: 180 },
  { label: 'Perforce / VCS', angle: 225 },
  { label: 'Engine Context', angle: 270 },
  { label: 'Quality Gate', angle: 315 },
]
const radius = 140
</script>

<template>
  <div class="relative w-full h-[340px] flex items-center justify-center">
    <div class="absolute w-[260px] h-[260px] rounded-full border border-white/10" />
    <div class="absolute w-[200px] h-[200px] rounded-full border border-white/5" />

    <div class="rider-card rider-card--accent px-5 py-3 font-semibold text-center">
      <div class="text-[10px] tracking-[0.3em] uppercase rider-muted">Shared IDE</div>
      <div class="text-xl mt-1">Rider</div>
      <div class="text-[10px] rider-subtle">Human + Agent</div>
    </div>

    <div
      v-for="s in spokes"
      :key="s.label"
      class="absolute text-[11px] tracking-wide"
      :style="{
        transform: `translate(${Math.cos((s.angle * Math.PI) / 180) * radius}px, ${Math.sin((s.angle * Math.PI) / 180) * radius}px)`,
      }"
    >
      <div class="rider-card px-2.5 py-1 text-xs flex items-center gap-1.5 whitespace-nowrap">
        <span class="rider-dot" />
        {{ s.label }}
      </div>
    </div>

    <div class="absolute left-3 top-3 rider-chip rider-chip--tag">Human</div>
    <div class="absolute right-3 bottom-3 rider-chip rider-chip--tag">Agent</div>
  </div>
</template>
