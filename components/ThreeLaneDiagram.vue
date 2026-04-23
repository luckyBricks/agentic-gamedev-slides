<script setup lang="ts">
const lanes = [
  {
    step: '01',
    kicker: 'Discover',
    title: 'ACP Registry',
    body: 'Browse & plug in agents from the Rider UI — no vendor lock-in.',
    tone: 'violet',
    icons: [
      { src: '/docs/brand-assets/AI/AI_icon.svg', label: 'Rider' },
    ],
    agentRow: null,
  },
  {
    step: '02',
    kicker: 'Connect',
    title: 'Built-in MCP Server',
    body: 'Expose Rider IDE tools to external agents via the Model Context Protocol.',
    tone: 'pink',
    icons: [
      { src: '/docs/brand-assets/Rider/Rider_icon.svg', label: 'Rider' },
    ],
    agentRow: [
      { src: '/docs/brand-assets/claude.svg', label: 'Claude Code' },
      { src: '/docs/brand-assets/codex.svg', label: 'Codex' },
    ],
  },
  {
    step: '03',
    kicker: 'Execute',
    title: 'Junie',
    body: 'Plan & run multi-step tasks, tests, and terminal commands in shared context.',
    tone: 'amber',
    icons: [
      { src: '/docs/brand-assets/Junie/Junie_icon.svg', label: 'Junie' },
    ],
    agentRow: null,
  },
] as const

const toneGrad: Record<string, string> = {
  violet: 'from-[#6c3bff]/80 to-[#9a4bff]/60',
  pink:   'from-[#d03cff]/80 to-[#ff3aa8]/60',
  amber:  'from-[#ff7a3c]/80 to-[#ffb547]/60',
}

const toneBorder: Record<string, string> = {
  violet: 'border-[#9a4bff]/40',
  pink:   'border-[#ff3aa8]/40',
  amber:  'border-[#ffb547]/40',
}

const toneText: Record<string, string> = {
  violet: 'text-[#b07aff]',
  pink:   'text-[#ff8ae0]',
  amber:  'text-[#ffb547]',
}
</script>

<template>
  <div class="w-full flex flex-col gap-4">
    <div
      v-for="(l, i) in lanes"
      :key="l.title"
      class="relative flex items-stretch gap-4"
    >
      <!-- Step badge -->
      <div
        :class="[
          'flex-shrink-0 w-14 rounded-xl bg-gradient-to-b flex flex-col items-center justify-center gap-1 shadow-lg',
          toneGrad[l.tone]
        ]"
      >
        <div class="text-[9px] uppercase tracking-[0.2em] text-white/60">Step</div>
        <div class="text-[22px] font-extrabold text-white leading-none">{{ l.step }}</div>
        <div :class="['text-[9px] uppercase tracking-[0.12em] font-semibold', toneText[l.tone]]">{{ l.kicker }}</div>
      </div>

      <!-- Card body -->
      <div :class="['flex-1 rounded-xl border bg-white/[0.04] backdrop-blur-sm p-4 flex flex-col gap-2', toneBorder[l.tone]]">
        <!-- Header row: title + primary product icon(s) -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img
              v-for="icon in l.icons"
              :key="icon.label"
              :src="icon.src"
              :alt="icon.label"
              class="h-5 w-5"
            />
            <span class="text-[16px] font-bold text-white">{{ l.title }}</span>
          </div>
          <!-- Agent icons for lane 2 -->
          <div v-if="l.agentRow" class="flex items-center gap-1.5">
            <span class="text-[9px] text-white/30 mr-1 uppercase tracking-widest">connects</span>
            <div
              v-for="agent in l.agentRow"
              :key="agent.label"
              class="flex items-center gap-1 bg-white/[0.06] rounded-md px-2 py-0.5"
            >
              <img :src="agent.src" :alt="agent.label" class="h-3.5 w-3.5" />
              <span class="text-[10px] text-white/55">{{ agent.label }}</span>
            </div>
          </div>
        </div>

        <!-- Body text -->
        <p class="text-[12.5px] text-white/50 leading-relaxed">{{ l.body }}</p>
      </div>

      <!-- Connector arrow (not after last item) -->
      <div
        v-if="i < lanes.length - 1"
        class="absolute -bottom-2.5 left-[27px] text-white/20 text-[10px] leading-none z-10"
      >▼</div>
    </div>

    <!-- Footer label -->
    <div class="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/25 text-center">
      → Converges into <img src="/docs/brand-assets/Rider/Rider-white.svg" alt="Rider" class="h-3 inline align-[-1px] mx-1 opacity-50" /> as the shared IDE
    </div>
  </div>
</template>
