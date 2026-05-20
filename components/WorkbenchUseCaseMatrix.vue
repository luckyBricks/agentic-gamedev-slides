<script setup lang="ts">
type Cell = {
  workflow: string
  title: string
  detail: string
  agents: string[]
}

type Row = {
  role: string
  roleSub: string
  roleIcon: string
  tone: 'amber' | 'pink' | 'violet' | 'cyan' | 'green'
  cells: Cell[]
}

const agentIcon = {
  junie: '/docs/brand-assets/Junie/Junie_icon.svg',
  claude: '/docs/brand-assets/claude.svg',
  codex: '/docs/brand-assets/codex.svg',
  rider: '/docs/brand-assets/Rider/Rider_icon.svg',
  qodana: '/docs/brand-assets/Qodana/Qodana_icon.svg',
  ai: '/docs/brand-assets/AI/AI_icon.svg',
} as const

const rows: Row[] = [
  {
    role: 'Gameplay × Tech Artist',
    roleSub: 'Pairing',
    roleIcon: agentIcon.rider,
    tone: 'cyan',
    cells: [
      {
        workflow: 'Shader pairing',
        title: 'Two sessions, one PSI',
        detail: 'Tech artist · Junie inspects shader GC; programmer · Claude rewires C# binding. Handoff = tab switch.',
        agents: [agentIcon.junie, agentIcon.claude],
      },
    ],
  },
  {
    role: 'Engine Engineer',
    roleSub: 'Kernel refactor',
    roleIcon: agentIcon.rider,
    tone: 'violet',
    cells: [
      {
        workflow: 'Render-graph rewrite',
        title: 'Refactor + tests in parallel',
        detail: 'Session A pauses at unsafe casts; session B writes regression tests against the new interface.',
        agents: [agentIcon.junie, agentIcon.codex],
      },
    ],
  },
  {
    role: 'Tech Lead',
    roleSub: 'Milestone refactor',
    roleIcon: agentIcon.rider,
    tone: 'amber',
    cells: [
      {
        workflow: 'Refactor Swarm',
        title: 'One agent · many branches',
        detail: 'Each member runs the same DOTS-migration agent in their branch. Lead compares inspection-delta trends.',
        agents: [agentIcon.junie, agentIcon.qodana],
      },
    ],
  },
  {
    role: 'AI Platform Engineer',
    roleSub: 'Skill Factory',
    roleIcon: agentIcon.ai,
    tone: 'amber',
    cells: [
      {
        workflow: 'Curate skills',
        title: 'Workbench observes · Steroid forges',
        detail: 'Watch which Steroid-synthesised skills are worth promoting to a studio-approved MCP server tool.',
        agents: [agentIcon.junie, agentIcon.ai],
      },
    ],
  },
  {
    role: 'QA Engineer',
    roleSub: 'Fuzz triage',
    roleIcon: agentIcon.qodana,
    tone: 'green',
    cells: [
      {
        workflow: 'Fuzz → triage → PR',
        title: 'One pane, full chain',
        detail: 'Tab A fuzzes; tab B Junie consumes the dotTrace snapshot, writes minimal repro; tab C opens PR.',
        agents: [agentIcon.junie, agentIcon.qodana],
      },
    ],
  },
  {
    role: 'CTO · R&D',
    roleSub: 'Observatory',
    roleIcon: agentIcon.rider,
    tone: 'pink',
    cells: [
      {
        workflow: 'Workbench observatory',
        title: 'Active sessions · policy gates',
        detail: 'Active sessions per team · MCP-tool call counts · sessions tripping policy gates — audit trail for free.',
        agents: [agentIcon.ai, agentIcon.qodana],
      },
    ],
  },
  {
    role: 'Live Ops · SRE',
    roleSub: 'Hotfix · backup demo',
    roleIcon: agentIcon.rider,
    tone: 'amber',
    cells: [
      {
        workflow: 'Live Ops crash',
        title: '3 sessions · 40 min saved',
        detail: 'Junie reads telemetry+dotTrace · Claude finds usages · Codex writes repro test. Shared symbol index.',
        agents: [agentIcon.junie, agentIcon.claude, agentIcon.codex],
      },
    ],
  },
]

const toneText: Record<string, string> = {
  amber: 'text-[#ffb547]',
  pink: 'text-[#ff8ae0]',
  violet: 'text-[#b07aff]',
  cyan: 'text-[#7be4ff]',
  green: 'text-[#7befaa]',
}

const toneBorder: Record<string, string> = {
  amber: 'border-[#ffb547]/42',
  pink: 'border-[#ff3aa8]/42',
  violet: 'border-[#9a4bff]/42',
  cyan: 'border-[#3ad9ff]/42',
  green: 'border-[#48e054]/42',
}

const toneGlow: Record<string, string> = {
  amber: 'from-[#ffb547]/14 to-transparent',
  pink: 'from-[#ff3aa8]/14 to-transparent',
  violet: 'from-[#9a4bff]/14 to-transparent',
  cyan: 'from-[#3ad9ff]/14 to-transparent',
  green: 'from-[#48e054]/14 to-transparent',
}
</script>

<template>
  <div class="grid grid-cols-7 gap-2.5 w-full">
    <div
      v-for="row in rows"
      :key="row.role"
      :class="[
        'rounded-xl border bg-gradient-to-b backdrop-blur-sm p-3 flex flex-col gap-2 min-h-[210px]',
        toneBorder[row.tone],
        toneGlow[row.tone],
      ]"
    >
      <!-- Role header -->
      <div class="flex items-start gap-2 pb-2 border-b border-white/8">
        <img :src="row.roleIcon" :alt="row.role" class="h-4 w-4 mt-0.5 opacity-90" />
        <div class="flex-1 min-w-0">
          <div :class="['text-[9px] uppercase tracking-[0.18em] font-bold', toneText[row.tone]]">
            {{ row.roleSub }}
          </div>
          <div class="text-[11.5px] font-bold text-white leading-tight mt-0.5">
            {{ row.role }}
          </div>
        </div>
      </div>

      <!-- Workflow cell -->
      <div
        v-for="cell in row.cells"
        :key="cell.workflow"
        class="flex flex-col gap-1.5 flex-1"
      >
        <div :class="['text-[8.5px] uppercase tracking-[0.18em] font-semibold', toneText[row.tone]]">
          {{ cell.workflow }}
        </div>
        <div class="text-[11px] font-bold text-white leading-tight">
          {{ cell.title }}
        </div>
        <div class="text-[10px] text-white/55 leading-snug">
          {{ cell.detail }}
        </div>
        <div class="mt-auto flex items-center gap-1 pt-1.5">
          <img
            v-for="(a, i) in cell.agents"
            :key="i"
            :src="a"
            class="h-3.5 w-3.5 opacity-80"
          />
        </div>
      </div>
    </div>
  </div>
</template>
