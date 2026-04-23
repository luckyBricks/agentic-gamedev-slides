<script setup lang="ts">
const demos = [
  { num: '01', title: 'Unreal Blueprint + Reflection', audience: 'Engine / Gameplay', tone: 'violet' },
  { num: '02', title: 'Unity Tests + Profiling', audience: 'Gameplay / QA', tone: 'pink' },
  { num: '03', title: 'Safe Refactor + Dependency Graph', audience: 'Engine / Framework', tone: 'amber' },
  { num: '04', title: 'Qodana + TeamCity Gate', audience: 'R&D Mgmt / Build', tone: 'cyan' },
  { num: '05', title: 'Shared IDE via Junie + MCP', audience: 'Platform / Tools', tone: 'violet' },
  { num: '06', title: 'MCP Steroid Vision Demo', audience: 'Innovation / Research', tone: 'pink' },
] as const

const toneMap: Record<string, string> = {
  violet: 'from-[#6c3bff]/40 to-[#9a4bff]/10',
  pink:   'from-[#ff3aa8]/40 to-[#e73cff]/10',
  amber:  'from-[#ff7a3c]/40 to-[#ffb547]/10',
  cyan:   'from-[#3ad9ff]/40 to-[#6c3bff]/10',
}
</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <div
      v-for="d in demos"
      :key="d.num"
      :class="['rider-card bg-gradient-to-br relative', toneMap[d.tone]]"
    >
      <div class="flex items-baseline justify-between">
        <span class="text-[10px] tracking-[0.28em] uppercase rider-muted">Demo {{ d.num }}</span>
        <span class="rider-chip rider-chip--tag">{{ d.audience }}</span>
      </div>
      <div class="mt-2 text-sm font-semibold leading-snug">{{ d.title }}</div>
    </div>
  </div>
</template>
