<script setup lang="ts">
const phases = [
  {
    phase: 'Phase 1',
    title: 'Team Pilot',
    goal: 'Validate feature work, refactors, quality gate on one team.',
    capabilities: ['Rider + Junie', 'Qodana local', 'YouTrack issues'],
    kpi: 'Lead time · clarification time',
    tone: 'violet',
  },
  {
    phase: 'Phase 2',
    title: 'Workflow Standardization',
    goal: 'Chain Junie, MCP, Qodana, TeamCity, YouTrack into a standard workflow.',
    capabilities: ['ACP Registry', 'MCP Server', 'TeamCity + Qodana runner'],
    kpi: 'Mainline breakage · pre-merge intercepts',
    tone: 'pink',
  },
  {
    phase: 'Phase 3',
    title: 'Agentic Studio Platform',
    goal: 'Rider is the shared workbench; AI Enterprise governs; innovation teams test frontier.',
    capabilities: ['AI Enterprise', 'Platform-owned skills', 'MCP Steroid sandbox'],
    kpi: 'AI-assisted completion · toolchain consolidation',
    tone: 'amber',
  },
] as const

const toneMap: Record<string, string> = {
  violet: 'from-[#7C3AED]/40 to-[#8B5CF6]/10 border-[#8B5CF688]',
  pink:   'from-[#C026D3]/40 to-[#C026D3]/10 border-[#C026D388]',
  amber:  'from-[#FF8200]/40 to-[#FE9900]/10 border-[#FE990088]',
}
</script>

<template>
  <div class="grid grid-cols-3 gap-3">
    <div
      v-for="(p, i) in phases"
      :key="p.title"
      :class="['rider-card bg-gradient-to-br border relative', toneMap[p.tone]]"
      :style="{ marginTop: i * 24 + 'px' }"
    >
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">{{ p.phase }}</div>
      <div class="text-lg font-semibold mt-1">{{ p.title }}</div>
      <div class="text-xs rider-subtle mt-1 leading-5">{{ p.goal }}</div>
      <div class="mt-3">
        <div class="text-[10px] uppercase tracking-[0.22em] rider-muted">Enable</div>
        <div class="mt-1 flex flex-wrap gap-1.5">
          <span v-for="c in p.capabilities" :key="c" class="rider-chip rider-chip--tag">{{ c }}</span>
        </div>
      </div>
      <div class="mt-3">
        <div class="text-[10px] uppercase tracking-[0.22em] rider-muted">Watch KPI</div>
        <div class="text-xs mt-1">{{ p.kpi }}</div>
      </div>
    </div>
  </div>
</template>
