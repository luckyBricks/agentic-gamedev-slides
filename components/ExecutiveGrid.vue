<script setup lang="ts">
const cards = [
  { title: 'Standardization', tags: ['Rider seat', 'Shared conventions'], tone: 'violet' },
  { title: 'Quality', tags: ['Qodana gate', 'Mainline stability'], tone: 'pink' },
  { title: 'Governance', tags: ['AI Enterprise', 'Budget · security · legal'], tone: 'amber' },
  { title: 'Visibility', tags: ['Unified KPIs', 'YouTrack insights'], tone: 'cyan' },
] as const

const toneMap: Record<string, string> = {
  violet: 'from-[#7C3AED]/45 to-transparent border-[#8B5CF699]',
  pink:   'from-[#C026D3]/45 to-transparent border-[#C026D399]',
  amber:  'from-[#FF8200]/45 to-transparent border-[#FE990099]',
  cyan:   'from-[#C026D3]/45 to-transparent border-[#C026D399]',
}
</script>

<template>
  <div class="grid grid-cols-2 gap-3">
    <div
      v-for="c in cards"
      :key="c.title"
      :class="['rider-card bg-gradient-to-br border', toneMap[c.tone]]"
    >
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Outcome</div>
      <div class="text-lg font-semibold mt-0.5">{{ c.title }}</div>
      <div class="mt-2 flex flex-wrap gap-1.5">
        <span v-for="t in c.tags" :key="t" class="rider-chip rider-chip--tag">{{ t }}</span>
      </div>
    </div>
  </div>
</template>
