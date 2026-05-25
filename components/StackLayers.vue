<script setup lang="ts">
interface LayerIcon { src: string; label: string }
interface LayerTag  { text: string }
interface Layer {
  title: string
  tone: string
  icons: LayerIcon[]
  tags?: LayerTag[]
}

const layers: Layer[] = [
  {
    title: 'Human Workspace',
    tone: 'violet',
    icons: [
      { src: '/docs/brand-assets/Rider/Rider_icon.svg',           label: 'Rider' },
      { src: '/docs/brand-assets/ReSharper/ReSharper_icon.svg',   label: 'ReSharper' },
    ],
  },
  {
    title: 'Agent Access Layer',
    tone: 'pink',
    icons: [
      { src: '/docs/brand-assets/Junie/Junie_icon.svg', label: 'Junie' },
      { src: '/docs/brand-assets/claude.svg',            label: 'Claude' },
      { src: '/docs/brand-assets/codex.svg',             label: 'Codex' },
    ],
  },
  {
    title: 'Quality Delivery Layer',
    tone: 'amber',
    icons: [
      { src: '/docs/brand-assets/Qodana/Qodana_icon.svg',         label: 'Qodana' },
      { src: '/docs/brand-assets/TeamCity/TeamCity_icon.svg',     label: 'TeamCity' },
      { src: '/docs/brand-assets/YouTrack/YouTrack_icon.svg',     label: 'YouTrack' },
      { src: '/docs/brand-assets/dotTrace/dotTrace_icon.svg',     label: 'dotTrace' },
      { src: '/docs/brand-assets/dotPeek/dotPeek_icon.svg',       label: 'dotPeek' },
      { src: '/docs/brand-assets/dotMemory/dotMemory_icon.svg',   label: 'dotMemory' },
      { src: '/docs/brand-assets/dotCover/dotCover_icon.svg',     label: 'dotCover' },
    ],
  },
  {
    title: 'Governance Layer',
    tone: 'cyan',
    icons: [
      { src: '/docs/brand-assets/Toolbox/Toolbox_icon.svg', label: 'Toolbox' },
      { src: '/docs/brand-assets/AI/AI_icon.svg',            label: 'AI Enterprise' },
    ],
  },
]

const toneMap: Record<string, string> = {
  violet: 'from-[#7C3AED66] via-[#8B5CF633] to-transparent border-[#8B5CF655]',
  pink:   'from-[#C026D366] via-[#C026D333] to-transparent border-[#C026D355]',
  amber:  'from-[#FF820055] via-[#FE990033] to-transparent border-[#FE990055]',
  cyan:   'from-[#C026D355] via-[#7C3AED33] to-transparent border-[#C026D355]',
}
</script>

<template>
  <div class="flex flex-col gap-2 w-full relative overflow-visible">
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

        <!-- product icons + text tags -->
        <div class="flex items-center gap-2">
          <img
            v-for="icon in layer.icons"
            :key="icon.label"
            :src="icon.src"
            :alt="icon.label"
            :title="icon.label"
            class="h-6 w-6 object-contain opacity-90"
          />
          <span
            v-for="tag in layer.tags ?? []"
            :key="tag.text"
            class="text-[10px] tracking-widest uppercase rider-muted border border-white/15 rounded px-1.5 py-0.5 leading-none"
          >{{ tag.text }}</span>
        </div>
      </div>
    </div>

    <!-- watermark -->
    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    >
      <span
        class="text-[88px] font-black text-white whitespace-nowrap"
        style="opacity:0.22; writing-mode: vertical-rl; transform: rotate(180deg); mix-blend-mode: overlay;"
      >dotUltimate</span>
    </div>
  </div>
</template>
