<script setup lang="ts">
const layers = [
  { title: 'Human Workspace', sub: 'Rider · ReSharper · ReSharper C++', tone: 'violet' },
  { title: 'Agent Access Layer', sub: 'Junie · ACP Registry · MCP Server', tone: 'pink' },
  { title: 'Quality Delivery Layer', sub: 'Qodana · TeamCity · YouTrack', tone: 'amber' },
  { title: 'Governance Layer', sub: 'JetBrains AI Enterprise', tone: 'cyan' },
] as const

const toneMap: Record<string, string> = {
  violet: 'from-[#6c3bff66] via-[#9a4bff33] to-transparent border-[#9a4bff55]',
  pink:   'from-[#e73cff66] via-[#ff3aa833] to-transparent border-[#ff3aa855]',
  amber:  'from-[#ff7a3c55] via-[#ffb54733] to-transparent border-[#ffb54755]',
  cyan:   'from-[#3ad9ff55] via-[#6c3bff33] to-transparent border-[#3ad9ff55]',
}
</script>

<template>
  <div class="flex flex-col gap-2 w-full relative">
    <div
      v-for="(layer, i) in layers"
      :key="layer.title"
      :class="['relative rider-card bg-gradient-to-r border', toneMap[layer.tone]]"
      :style="{ marginLeft: i * 14 + 'px', marginRight: i * 14 + 'px' }"
    >
      <div class="flex items-center justify-between">
        <div>
          <div class="text-[10px] tracking-[0.25em] uppercase rider-muted">Layer 0{{ i + 1 }}</div>
          <div class="text-lg font-semibold mt-0.5">{{ layer.title }}</div>
        </div>
        <div class="text-xs rider-subtle text-right max-w-[50%]">{{ layer.sub }}</div>
      </div>
    </div>
    <div class="absolute -right-4 top-0 bottom-0 flex items-center">
      <div class="rotate-90 origin-center text-[10px] tracking-[0.3em] uppercase rider-muted whitespace-nowrap">
        dotUltimate · Developer Toolkit
      </div>
    </div>
  </div>
</template>
