<script setup lang="ts">
const groups = [
  {
    title: 'Individual Workbench',
    products: [
      { name: 'Rider', tags: ['.NET + GameDev IDE', 'Engine-aware', 'Quick-fixes'] },
      { name: 'ReSharper', tags: ['Solution-wide refactors', 'Inspections'] },
      { name: 'ReSharper C++', tags: ['Unreal patterns', 'Engine macros'] },
    ],
    tone: 'violet',
  },
  {
    title: 'Agent Access & Execution',
    products: [
      { name: 'Junie', tags: ['Plan + execute', 'IDE / terminal / CI'] },
      { name: 'ACP Registry', tags: ['Discover agents', 'No lock-in'] },
      { name: 'MCP Server', tags: ['Expose IDE tools', 'Claude / Cursor / Codex'] },
    ],
    tone: 'pink',
  },
  {
    title: 'Quality & Delivery',
    products: [
      { name: 'Qodana', tags: ['JetBrains inspections in CI', 'Quality profiles'] },
      { name: 'TeamCity', tags: ['Perforce Helix', 'Unity · Unreal', 'Qodana runner'] },
      { name: 'YouTrack', tags: ['Issue · commit · branch linkage'] },
    ],
    tone: 'amber',
  },
  {
    title: 'Governance & Packaging',
    products: [
      { name: 'AI Enterprise', tags: ['Security', 'Spending', 'Legal compliance'] },
      { name: 'dotUltimate', tags: ['Single subscription', 'Rider + AI Pro + dotTrace/Memory/Cover'] },
    ],
    tone: 'cyan',
  },
] as const

const toneMap: Record<string, string> = {
  violet: 'border-[#9a4bff88]',
  pink:   'border-[#ff3aa888]',
  amber:  'border-[#ffb54788]',
  cyan:   'border-[#3ad9ff88]',
}
</script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <div
      v-for="g in groups"
      :key="g.title"
      :class="['rider-card border', toneMap[g.tone]]"
    >
      <div class="text-[10px] uppercase tracking-[0.25em] rider-muted">Group</div>
      <div class="text-base font-semibold mt-0.5">{{ g.title }}</div>
      <div class="mt-2 space-y-1.5">
        <div v-for="p in g.products" :key="p.name" class="flex items-baseline justify-between gap-3">
          <span class="text-sm font-semibold text-white">{{ p.name }}</span>
          <span class="text-[10px] rider-subtle text-right">{{ p.tags.join(' · ') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
