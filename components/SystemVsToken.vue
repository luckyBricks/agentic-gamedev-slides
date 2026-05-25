<script setup lang="ts">
const layers = [
  { label: 'Tokens', detail: 'Character stream', tone: 'muted', width: 96 },
  { label: 'Symbols / PSI / AST', detail: 'Grammar-aware IR', tone: 'cool', width: 88 },
  { label: 'Dependency Graph', detail: 'Cross-file edges', tone: 'warm', width: 76 },
  { label: 'Flow / Value Analysis', detail: 'Real execution paths', tone: 'hot', width: 62 },
  { label: 'Runtime · Tests · Debugger · Quality Gate', detail: 'System truth', tone: 'heat', width: 44 },
]
</script>

<template>
  <div class="flex flex-col gap-2 w-full items-center">
    <div class="flex gap-4 text-[10px] uppercase tracking-[0.28em] rider-muted self-stretch justify-between px-8">
      <span>Token View</span>
      <span>System View</span>
    </div>
    <div
      v-for="(l, i) in layers"
      :key="l.label"
      class="relative h-[52px] flex items-center justify-between rounded-xl px-4"
      :class="[
        l.tone === 'muted' && 'bg-[#ffffff0d] border border-white/10',
        l.tone === 'cool'  && 'bg-gradient-to-r from-[#C026D333] to-[#7C3AED1a] border border-[#C026D355]',
        l.tone === 'warm'  && 'bg-gradient-to-r from-[#8B5CF633] to-[#C026D31a] border border-[#8B5CF655]',
        l.tone === 'hot'   && 'bg-gradient-to-r from-[#C026D333] to-[#C026D322] border border-[#C026D366]',
        l.tone === 'heat'  && 'bg-gradient-to-r from-[#C026D355] to-[#FF820033] border border-[#C026D388]',
      ]"
      :style="{ width: l.width + '%' }"
    >
      <div>
        <div class="text-sm font-semibold">{{ l.label }}</div>
        <div class="text-[10px] uppercase tracking-[0.22em] rider-muted">{{ l.detail }}</div>
      </div>
      <div class="text-[10px] rider-muted">Layer 0{{ i + 1 }}</div>
    </div>
  </div>
</template>
