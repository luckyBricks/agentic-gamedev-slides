<script setup lang="ts">
type Step = {
  agent: string
  agentIcon: string
  detail: string
}

type Lane = {
  id: string
  number: string
  kicker: string
  title: string
  subtitle: string
  tone: 'amber' | 'pink' | 'violet'
  steps: Step[]
  footer: string
}

const lanes: Lane[] = [
  {
    id: 'bakeoff',
    number: '01',
    kicker: 'A/B Bake-off',
    title: 'Junie vs Claude · ~200 file refactor',
    subtitle: 'Two agents, same IDE context — fair comparison the CTO can cite.',
    tone: 'amber',
    steps: [
      {
        agent: 'Junie',
        agentIcon: '/docs/brand-assets/Junie/Junie_icon.svg',
        detail: 'tab A — plan + execute UPROPERTY rewrite across modules',
      },
      {
        agent: 'Claude Code',
        agentIcon: '/docs/brand-assets/claude.svg',
        detail: 'tab B — same task, long-chain reasoning path',
      },
      {
        agent: 'Engineer',
        agentIcon: '/docs/brand-assets/Rider/Rider_icon.svg',
        detail: 'compare inspection delta · pick studio-fit agent',
      },
    ],
    footer: 'Not vendor marketing — bake-off inside one Rider.',
  },
  {
    id: 'followsun',
    number: '02',
    kicker: 'Follow-the-Sun',
    title: 'Tokyo → Helsinki tools-pipeline refactor',
    subtitle: 'Persistent sessions let agent work continue across time zones.',
    tone: 'pink',
    steps: [
      {
        agent: 'Tokyo · Tech Artist',
        agentIcon: '/docs/brand-assets/Junie/Junie_icon.svg',
        detail: 'leaves in-progress Workbench session at end of day',
      },
      {
        agent: 'persistent session',
        agentIcon: '/docs/brand-assets/Rider/Rider_icon.svg',
        detail: 'plan tree · tool calls · inspection fixes preserved',
      },
      {
        agent: 'Helsinki · Engineer',
        agentIcon: '/docs/brand-assets/Junie/Junie_icon.svg',
        detail: 'opens same session next morning · resumes mid-tree',
      },
    ],
    footer: 'First time agent collaboration truly supports follow-the-sun.',
  },
  {
    id: 'orchestrate',
    number: '03',
    kicker: 'Junie + Claude',
    title: 'Issue → Plan orchestration',
    subtitle: 'Each agent at its strength · human picks the better plan.',
    tone: 'violet',
    steps: [
      {
        agent: 'Junie',
        agentIcon: '/docs/brand-assets/Junie/Junie_icon.svg',
        detail: 'tab A — cross-file plan tree for the same issue',
      },
      {
        agent: 'Claude Code',
        agentIcon: '/docs/brand-assets/claude.svg',
        detail: 'tab B — long-chain reasoning over the same issue',
      },
      {
        agent: 'Lead',
        agentIcon: '/docs/brand-assets/Rider/Rider_icon.svg',
        detail: 'picks the plan that matches studio coding style',
      },
    ],
    footer: 'Multi-agent collab granularity = tab switch.',
  },
]

const toneBorder: Record<string, string> = {
  amber: 'border-[#ffb547]/45',
  pink: 'border-[#ff3aa8]/45',
  violet: 'border-[#9a4bff]/45',
}

const toneGrad: Record<string, string> = {
  amber: 'from-[#ff7a3c]/85 to-[#ffb547]/65',
  pink: 'from-[#d03cff]/85 to-[#ff3aa8]/65',
  violet: 'from-[#6c3bff]/85 to-[#9a4bff]/65',
}

const toneText: Record<string, string> = {
  amber: 'text-[#ffb547]',
  pink: 'text-[#ff8ae0]',
  violet: 'text-[#b07aff]',
}

const toneRail: Record<string, string> = {
  amber: 'bg-[#ffb547]/22',
  pink: 'bg-[#ff3aa8]/22',
  violet: 'bg-[#9a4bff]/22',
}
</script>

<template>
  <div class="grid grid-cols-3 gap-4 w-full">
    <div
      v-for="lane in lanes"
      :key="lane.id"
      :class="[
        'rounded-xl border bg-white/[0.035] backdrop-blur-sm flex flex-col overflow-hidden',
        toneBorder[lane.tone],
      ]"
    >
      <!-- Header -->
      <div
        :class="[
          'px-3.5 py-3 bg-gradient-to-b flex flex-col gap-1',
          toneGrad[lane.tone],
        ]"
      >
        <div class="flex items-center justify-between">
          <span class="text-[10px] uppercase tracking-[0.22em] text-white/75 rider-mono">
            Lane {{ lane.number }}
          </span>
          <span :class="['text-[10px] font-bold uppercase tracking-[0.14em] text-white']">
            {{ lane.kicker }}
          </span>
        </div>
        <h3 class="text-[14px] font-extrabold text-white leading-snug mt-0.5">
          {{ lane.title }}
        </h3>
        <p class="text-[10.5px] text-white/82 leading-snug">
          {{ lane.subtitle }}
        </p>
      </div>

      <!-- Steps timeline -->
      <div class="px-3 py-3 flex-1 flex flex-col gap-2 relative">
        <div
          :class="['absolute left-[22px] top-5 bottom-12 w-px', toneRail[lane.tone]]"
        />
        <div
          v-for="(step, i) in lane.steps"
          :key="i"
          class="relative flex items-start gap-2.5"
        >
          <div
            :class="[
              'relative z-10 flex-shrink-0 w-8 h-8 rounded-lg border bg-[rgba(8,6,18,0.92)] flex items-center justify-center',
              toneBorder[lane.tone],
            ]"
          >
            <img :src="step.agentIcon" :alt="step.agent" class="h-4 w-4" />
          </div>
          <div class="flex-1 pt-0.5">
            <div :class="['text-[10.5px] font-bold uppercase tracking-[0.06em]', toneText[lane.tone]]">
              {{ step.agent }}
            </div>
            <div class="text-[11px] text-white/65 leading-snug mt-0.5">
              {{ step.detail }}
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div
        :class="[
          'px-3.5 py-2 border-t text-[10px] text-white/55 leading-snug italic',
          toneBorder[lane.tone],
        ]"
      >
        {{ lane.footer }}
      </div>
    </div>
  </div>
</template>
