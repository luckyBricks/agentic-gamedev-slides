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
      { src: '/docs/brand-assets/Qodana/Qodana_icon.svg',       label: 'Qodana' },
      { src: '/docs/brand-assets/TeamCity/TeamCity_icon.svg',     label: 'TeamCity' },
      { src: '/docs/brand-assets/YouTrack/YouTrack_icon.svg',     label: 'YouTrack' },
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
  violet: 'from-[#6c3bff66] via-[#9a4bff33] to-transparent border-[#9a4bff55]',
  pink:   'from-[#e73cff66] via-[#ff3aa833] to-transparent border-[#ff3aa855]',
  amber:  'from-[#ff7a3c55] via-[#ffb54733] to-transparent border-[#ffb54755]',
  cyan:   'from-[#3ad9ff55] via-[#6c3bff33] to-transparent border-[#3ad9ff55]',
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
