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
  violet: 'from-[#7C3AED]/45 to-[#8B5CF6]/10 border-[#8B5CF688]',
  pink:   'from-[#C026D3]/45 to-[#C026D3]/10 border-[#C026D388]',
  amber:  'from-[#FF8200]/45 to-[#FE9900]/10 border-[#FE990088]',
  cyan:   'from-[#C026D3]/45 to-[#7C3AED]/10 border-[#C026D388]',
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
