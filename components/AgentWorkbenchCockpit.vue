<script setup lang="ts">
const tabs = [
  {
    id: 'junie',
    label: 'Junie',
    icon: '/docs/brand-assets/Junie/Junie_icon.svg',
    role: 'Plan',
    session: 'session A · planning hotfix',
    tone: 'amber',
    active: true,
  },
  {
    id: 'claude',
    label: 'Claude Code',
    icon: '/docs/brand-assets/claude.svg',
    role: 'Implement',
    session: 'session B · find_usages → refactor',
    tone: 'pink',
    active: false,
  },
  {
    id: 'codex',
    label: 'Codex',
    icon: '/docs/brand-assets/codex.svg',
    role: 'Test',
    session: 'session C · writing repro test',
    tone: 'violet',
    active: false,
  },
  {
    id: 'more',
    label: 'BYO Agent',
    icon: '/docs/brand-assets/AI/AI_icon.svg',
    role: '+ ACP',
    session: 'plug another agent · no lock-in',
    tone: 'cyan',
    active: false,
  },
] as const

const sharedBase = [
  { label: 'PSI Index', icon: '/docs/brand-assets/Rider/Rider_icon.svg' },
  { label: 'Refactoring', icon: '/docs/brand-assets/ReSharper/ReSharper_icon.svg' },
  { label: 'Debugger', icon: '/docs/brand-assets/Rider/Rider_icon.svg' },
  { label: 'VCS · Perforce', icon: '/docs/brand-assets/perforce.svg' },
  { label: 'Inspection', icon: '/docs/brand-assets/Qodana/Qodana_icon.svg' },
]

const toneBorder: Record<string, string> = {
  amber: 'border-[#ffb547]/55',
  pink: 'border-[#ff3aa8]/55',
  violet: 'border-[#9a4bff]/55',
  cyan: 'border-[#3ad9ff]/55',
}

const toneGlow: Record<string, string> = {
  amber: 'from-[#ffb547]/25 to-[#ff7a3c]/10',
  pink: 'from-[#ff3aa8]/22 to-[#d03cff]/8',
  violet: 'from-[#9a4bff]/22 to-[#6c3bff]/8',
  cyan: 'from-[#3ad9ff]/22 to-[#22b8c0]/8',
}

const toneText: Record<string, string> = {
  amber: 'text-[#ffb547]',
  pink: 'text-[#ff8ae0]',
  violet: 'text-[#b07aff]',
  cyan: 'text-[#7be4ff]',
}
</script>

<template>
  <div class="workbench-cockpit w-full rounded-2xl border border-white/12 bg-[rgba(8,6,18,0.62)] backdrop-blur-sm overflow-hidden">
    <!-- Title bar -->
    <div class="flex items-center justify-between px-3.5 py-2 border-b border-white/8 bg-white/[0.025]">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#ff5f56]/70" />
        <span class="w-2 h-2 rounded-full bg-[#ffbd2e]/70" />
        <span class="w-2 h-2 rounded-full bg-[#27c93f]/70" />
        <span class="ml-2 text-[10px] uppercase tracking-[0.22em] text-white/40 rider-mono">
          Rider · Agent Workbench
        </span>
      </div>
      <div class="flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/35">
        <span class="rider-chip rider-chip--status !text-[9px] !py-[1px] !px-[5px]">New</span>
        <span>Experimental · Apache 2.0</span>
      </div>
    </div>

    <!-- Agent tabs -->
    <div class="grid grid-cols-4 gap-2 px-3 pt-3 pb-2 border-b border-white/6">
      <div
        v-for="t in tabs"
        :key="t.id"
        :class="[
          'relative rounded-lg border bg-gradient-to-b p-2.5 flex flex-col gap-1',
          toneBorder[t.tone],
          toneGlow[t.tone],
          t.active ? 'shadow-[inset_0_-2px_0_0_currentColor]' : 'opacity-78',
        ]"
      >
        <div class="flex items-center gap-1.5">
          <img :src="t.icon" :alt="t.label" class="h-4 w-4" />
          <span class="text-[11.5px] font-bold text-white truncate">{{ t.label }}</span>
        </div>
        <div :class="['text-[9px] uppercase tracking-[0.16em] font-semibold', toneText[t.tone]]">
          {{ t.role }}
        </div>
        <div class="text-[9.5px] text-white/45 leading-snug truncate">
          {{ t.session }}
        </div>
      </div>
    </div>

    <!-- Active panel body -->
    <div class="px-3.5 py-2.5 border-b border-white/6">
      <div class="flex items-center gap-2 text-[10px] text-white/45 rider-mono">
        <span class="text-[#ffb547]">●</span>
        <span>session A · Junie</span>
        <span class="text-white/20">|</span>
        <span>persistent · auto code context</span>
      </div>
      <div class="mt-1.5 text-[11px] text-white/72 leading-relaxed">
        plan: read <span class="text-white/95 font-semibold">MatchService.cs</span> + dotTrace snapshot →
        propose hotfix · run tests
      </div>
    </div>

    <!-- Shared IDE base -->
    <div class="px-3.5 py-3">
      <div class="text-[9px] uppercase tracking-[0.24em] text-white/30 mb-2">
        Shared IDE base — same project context for every tab
      </div>
      <div class="grid grid-cols-5 gap-1.5">
        <div
          v-for="b in sharedBase"
          :key="b.label"
          class="flex items-center gap-1.5 px-1.5 py-1.5 rounded-md bg-white/[0.05] border border-white/8"
        >
          <img :src="b.icon" :alt="b.label" class="h-3.5 w-3.5 opacity-85" />
          <span class="text-[9.5px] text-white/65 truncate">{{ b.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.workbench-cockpit {
  box-shadow: 0 30px 60px -30px rgba(255, 122, 60, 0.28);
}
</style>
