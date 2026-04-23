<script setup lang="ts">
const clients = ['Claude', 'Cursor', 'Codex', 'Junie CLI']
const surfaces = [
  { label: 'PSI / Symbols', tone: 'violet' },
  { label: 'Refactor API', tone: 'violet' },
  { label: 'Inspections', tone: 'pink' },
  { label: 'Debugger State', tone: 'pink' },
  { label: 'Tests Runner', tone: 'amber' },
  { label: 'UI / Viewport', tone: 'amber' },
  { label: 'Runtime Context', tone: 'cyan' },
]
const toneMap: Record<string, string> = {
  violet: 'from-[#6c3bff]/45 to-[#9a4bff]/10 border-[#9a4bff88]',
  pink:   'from-[#ff3aa8]/45 to-[#e73cff]/10 border-[#ff3aa888]',
  amber:  'from-[#ff7a3c]/45 to-[#ffb547]/10 border-[#ffb54788]',
  cyan:   'from-[#3ad9ff]/45 to-[#6c3bff]/10 border-[#3ad9ff88]',
}
</script>

<template>
  <div class="flex flex-col gap-3 w-full">
    <div class="flex gap-2 items-center justify-center flex-wrap">
      <span v-for="c in clients" :key="c" class="rider-chip rider-chip--tag">{{ c }}</span>
    </div>
    <div class="text-center text-[10px] uppercase tracking-[0.3em] rider-muted">
      ↓ MCP Steroid protocol
    </div>
    <div class="grid grid-cols-4 gap-2">
      <div
        v-for="s in surfaces"
        :key="s.label"
        :class="['rider-card bg-gradient-to-br border text-center py-2 text-xs font-semibold', toneMap[s.tone]]"
      >
        {{ s.label }}
      </div>
    </div>
    <div class="text-center text-[10px] uppercase tracking-[0.3em] rider-muted">
      ↓ Mounted inside Rider runtime
    </div>
    <div class="rider-card rider-card--accent text-center py-2 font-semibold">
      IDE-native execution: refactor · inspect · debug · test · UI state
    </div>
  </div>
</template>
