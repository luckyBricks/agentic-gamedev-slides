<script setup lang="ts">
const nodes = [
  {
    title: 'YouTrack Issue',
    body: 'Bug · feature · engine upgrade',
    tone: 'cool',
  },
  {
    title: 'Rider Impact Analysis',
    body: 'Symbols · dependencies · value flow',
    tone: 'hot',
    accent: true,
  },
  {
    title: 'Agent Plan',
    body: 'Scope · risks · validation checklist',
    tone: 'warm',
  },
]
</script>

<template>
  <div class="flex flex-col gap-3 w-full">
    <div
      v-for="(n, i) in nodes"
      :key="n.title"
      :class="['rider-card relative', n.accent && 'rider-card--accent']"
    >
      <div class="flex items-center justify-between">
        <div>
          <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Node {{ i + 1 }}</div>
          <div class="text-base font-semibold mt-0.5">{{ n.title }}</div>
          <div class="text-xs rider-subtle mt-0.5">{{ n.body }}</div>
        </div>
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-semibold"
          :class="[
            n.tone === 'cool' && 'bg-gradient-to-br from-[#3ad9ff] to-[#6c3bff]',
            n.tone === 'hot'  && 'bg-gradient-to-br from-[#ff3aa8] to-[#9a4bff]',
            n.tone === 'warm' && 'bg-gradient-to-br from-[#ffb547] to-[#ff7a3c]',
          ]"
        >
          {{ i + 1 }}
        </div>
      </div>
    </div>
  </div>
</template>
