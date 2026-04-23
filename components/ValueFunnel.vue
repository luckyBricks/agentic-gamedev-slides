<script setup lang="ts">
const tiers = [
  { label: 'Code Generation', detail: 'Abundant · Cheap', width: 100, tone: 'cool' },
  { label: 'Project Context', detail: 'Scarce · Engine-aware', width: 72, tone: 'mid' },
  { label: 'Quality & Governance', detail: 'Most Valuable', width: 44, tone: 'heat' },
] as const
</script>

<template>
  <div class="flex flex-col items-center gap-3 w-full">
    <div
      v-for="tier in tiers"
      :key="tier.label"
      class="relative h-[74px] flex items-center justify-between px-5 rounded-xl"
      :class="[
        tier.tone === 'cool' && 'bg-gradient-to-r from-[#3ad9ff22] via-[#9a4bff1a] to-[#e73cff1a] border border-[#3ad9ff55]',
        tier.tone === 'mid'  && 'bg-gradient-to-r from-[#9a4bff2e] via-[#e73cff22] to-[#ff7a3c22] border border-[#e73cff66]',
        tier.tone === 'heat' && 'bg-gradient-to-r from-[#ff3aa83d] via-[#ff7a3c2e] to-[#ffb5472e] border border-[#ff3aa899]',
      ]"
      :style="{ width: tier.width + '%' }"
    >
      <div>
        <div class="text-base font-semibold">{{ tier.label }}</div>
        <div class="text-[11px] tracking-widest uppercase rider-muted">{{ tier.detail }}</div>
      </div>
      <span class="text-2xl opacity-70">{{ tier.width }}%</span>
    </div>
  </div>
</template>
