<script setup lang="ts">
const groups = [
  {
    title: 'Flow',
    tone: 'violet',
    kpis: [
      { label: 'Feature lead time', unit: 'days' },
      { label: 'Requirement clarification time', unit: 'hrs' },
      { label: 'Migration cycle time', unit: 'days' },
    ],
  },
  {
    title: 'Quality',
    tone: 'pink',
    kpis: [
      { label: 'Mainline breakage rate', unit: '%' },
      { label: 'Pre-merge intercepted issues', unit: 'count' },
      { label: 'Perf regression MTTR', unit: 'hrs' },
    ],
  },
  {
    title: 'Adoption',
    tone: 'amber',
    kpis: [
      { label: 'AI-assisted completion rate', unit: '%' },
      { label: 'Toolchain consolidation / seat efficiency', unit: 'ratio' },
    ],
  },
] as const

const toneMap: Record<string, string> = {
  violet: 'from-[#7C3AED]/40 to-[#8B5CF6]/10 border-[#8B5CF688]',
  pink:   'from-[#C026D3]/40 to-[#C026D3]/10 border-[#C026D388]',
  amber:  'from-[#FF8200]/40 to-[#FE9900]/10 border-[#FE990088]',
}
</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <div v-for="g in groups" :key="g.title" :class="['rider-card bg-gradient-to-br border', toneMap[g.tone]]">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Category</div>
      <div class="text-lg font-semibold">{{ g.title }}</div>
      <div class="mt-3 flex flex-col gap-2">
        <div v-for="k in g.kpis" :key="k.label" class="flex items-baseline justify-between">
          <span class="text-xs rider-subtle">{{ k.label }}</span>
          <span class="rider-chip rider-chip--tag">{{ k.unit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
