<script setup lang="ts">
const cells = [
  {
    title: 'Unreal Engine',
    logo: '/docs/brand-assets/unreal-engine.svg',
    context: 'C++ · Blueprint',
    layer: 'Engine Layer',
    blindSpots: ['Reflection macros', 'Blueprint graphs', 'Build modules'],
    needs: 'Semantic index + build graph',
    tone: 'violet',
  },
  {
    title: 'Unity',
    logo: '/docs/brand-assets/unity.svg',
    context: 'Scenes · Assets',
    layer: 'Asset Layer',
    blindSpots: ['Prefab hierarchy', 'Scene graphs', 'Shader variants'],
    needs: 'Asset dependency graph',
    tone: 'pink',
  },
  {
    title: 'Perforce Helix',
    logo: '/docs/brand-assets/perforce.svg',
    context: 'VCS · Streams',
    layer: 'VCS Layer',
    blindSpots: ['Changelists', 'Shelved diffs', 'File locks'],
    needs: 'Stream & changelist context',
    tone: 'amber',
  },
  {
    title: 'Build & Quality',
    logo: '/docs/brand-assets/Qodana/Qodana_icon.svg',
    context: 'CI · Delivery',
    layer: 'Pipeline Layer',
    blindSpots: ['Build graph', 'Quality gates', 'Perf regression'],
    needs: 'Delivery graph + gate signals',
    tone: 'cyan',
  },
] as const

const toneGradient: Record<string, string> = {
  violet: 'from-[#7C3AED44] to-[#8B5CF611] border-[#8B5CF655]',
  pink:   'from-[#C026D344] to-[#C026D311] border-[#C026D355]',
  amber:  'from-[#FF820044] to-[#FE990011] border-[#FE990055]',
  cyan:   'from-[#C026D344] to-[#7C3AED11] border-[#C026D355]',
}

const toneTag: Record<string, string> = {
  violet: 'bg-[#8B5CF622] text-[#C4B5FD] border-[#8B5CF644]',
  pink:   'bg-[#C026D322] text-[#F0ABFC] border-[#C026D344]',
  amber:  'bg-[#FE990022] text-[#FCD34D] border-[#FE990044]',
  cyan:   'bg-[#C026D322] text-[#F0ABFC] border-[#C026D344]',
}

const toneLabel: Record<string, string> = {
  violet: 'text-[#8B5CF6]',
  pink:   'text-[#C026D3]',
  amber:  'text-[#FE9900]',
  cyan:   'text-[#C026D3]',
}

const toneLayerBadge: Record<string, string> = {
  violet: 'bg-[#8B5CF628] text-[#C4B5FD] border-[#8B5CF650]',
  pink:   'bg-[#C026D328] text-[#F0ABFC] border-[#C026D350]',
  amber:  'bg-[#FE990028] text-[#FCD34D] border-[#FE990050]',
  cyan:   'bg-[#C026D328] text-[#F0ABFC] border-[#C026D350]',
}

const toneNeedsLine: Record<string, string> = {
  violet: 'border-[#8B5CF660] text-[#C4B5FD99]',
  pink:   'border-[#C026D360] text-[#F0ABFC99]',
  amber:  'border-[#FE990060] text-[#FCD34D99]',
  cyan:   'border-[#C026D360] text-[#F0ABFC99]',
}
</script>

<template>
  <div class="grid grid-cols-2 gap-3 w-full">
    <div
      v-for="c in cells"
      :key="c.title"
      :class="['rider-card bg-gradient-to-br border flex flex-col gap-0', toneGradient[c.tone]]"
    >
      <!-- Header: logo + title + layer badge -->
      <div class="flex items-center gap-2.5 mb-3">
        <img :src="c.logo" class="h-7 w-7 object-contain flex-shrink-0" />
        <div class="min-w-0">
          <div class="text-[15px] font-semibold leading-tight text-white">{{ c.title }}</div>
          <div :class="['text-[10px] font-medium tracking-wide mt-0.5', toneLabel[c.tone]]">{{ c.context }}</div>
        </div>
        <span :class="['ml-auto flex-shrink-0 px-1.5 py-0.5 border text-[9px] font-semibold tracking-widest uppercase rounded-sm', toneLayerBadge[c.tone]]">
          {{ c.layer }}
        </span>
      </div>

      <!-- Divider -->
      <div class="border-t border-white/8 mb-2.5" />

      <!-- Blind spots -->
      <div class="flex flex-wrap gap-1.5 mb-3">
        <span
          v-for="tag in c.blindSpots"
          :key="tag"
          :class="['inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] border', toneTag[c.tone]]"
        >
          <span class="opacity-60 text-[9px]">✕</span>{{ tag }}
        </span>
      </div>

      <!-- Needs line -->
      <div :class="['mt-auto border-t pt-2 text-[11px] leading-snug', toneNeedsLine[c.tone]]">
        <span class="opacity-55 mr-1 text-[9px] uppercase tracking-widest">Needs</span>{{ c.needs }}
      </div>
    </div>
  </div>
</template>
