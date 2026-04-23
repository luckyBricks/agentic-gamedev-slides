<script setup lang="ts">
const cards = [
  { title: 'Standardization', tags: ['Rider seat', 'Shared conventions'], tone: 'violet' },
  { title: 'Quality', tags: ['Qodana gate', 'Mainline stability'], tone: 'pink' },
  { title: 'Governance', tags: ['AI Enterprise', 'Budget · security · legal'], tone: 'amber' },
  { title: 'Visibility', tags: ['Unified KPIs', 'YouTrack insights'], tone: 'cyan' },
] as const

const toneMap: Record<string, string> = {
  violet: 'from-[#6c3bff]/45 to-transparent border-[#9a4bff99]',
  pink:   'from-[#ff3aa8]/45 to-transparent border-[#ff3aa899]',
  amber:  'from-[#ff7a3c]/45 to-transparent border-[#ffb54799]',
  cyan:   'from-[#3ad9ff]/45 to-transparent border-[#3ad9ff99]',
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
