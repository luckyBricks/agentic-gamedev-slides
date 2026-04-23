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
  violet: 'from-[#6c3bff44] to-[#9a4bff11] border-[#9a4bff55]',
  pink:   'from-[#ff3aa844] to-[#e73cff11] border-[#ff3aa855]',
  amber:  'from-[#ff7a3c44] to-[#ffb54711] border-[#ffb54755]',
  cyan:   'from-[#3ad9ff44] to-[#6c3bff11] border-[#3ad9ff55]',
}

const toneTag: Record<string, string> = {
  violet: 'bg-[#9a4bff22] text-[#c89bff] border-[#9a4bff44]',
  pink:   'bg-[#ff3aa822] text-[#ff9ad0] border-[#ff3aa844]',
  amber:  'bg-[#ffb54722] text-[#ffd280] border-[#ffb54744]',
  cyan:   'bg-[#3ad9ff22] text-[#80eeff] border-[#3ad9ff44]',
}

const toneLabel: Record<string, string> = {
  violet: 'text-[#9a4bff]',
  pink:   'text-[#ff3aa8]',
  amber:  'text-[#ffb547]',
  cyan:   'text-[#3ad9ff]',
}

const toneLayerBadge: Record<string, string> = {
  violet: 'bg-[#9a4bff28] text-[#b57aff] border-[#9a4bff50]',
  pink:   'bg-[#ff3aa828] text-[#ff7dc0] border-[#ff3aa850]',
  amber:  'bg-[#ffb54728] text-[#ffc860] border-[#ffb54750]',
  cyan:   'bg-[#3ad9ff28] text-[#60e8ff] border-[#3ad9ff50]',
}

const toneNeedsLine: Record<string, string> = {
  violet: 'border-[#9a4bff60] text-[#b57aff99]',
  pink:   'border-[#ff3aa860] text-[#ff7dc099]',
  amber:  'border-[#ffb54760] text-[#ffc86099]',
  cyan:   'border-[#3ad9ff60] text-[#60e8ff99]',
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
