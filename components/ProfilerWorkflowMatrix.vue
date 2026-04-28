<script setup lang="ts">
type Stage = {
  label: string
  detail: string
  icons: string[]
}

type Workflow = {
  title: string
  subtitle: string
  chips: string[]
  stages: [Stage, Stage, Stage]
}

const iconPaths = {
  unity: '/docs/brand-assets/unity.svg',
  unreal: '/docs/brand-assets/unreal-engine.svg',
  rider: '/docs/brand-assets/Rider/Rider_icon.svg',
  dotTrace: '/docs/brand-assets/dotTrace/dotTrace_icon.svg',
  dotMemory: '/docs/brand-assets/dotMemory/dotMemory_icon.svg',
  dotCover: '/docs/brand-assets/dotCover/dotCover_icon.svg',
  teamCity: '/docs/brand-assets/TeamCity/TeamCity_icon.svg',
} as const

const workflows: Workflow[] = [
  {
    title: 'Unity frame hitch',
    subtitle: 'Find the spike, then jump into managed/source call paths.',
    chips: ['Unity: direct', 'dotTrace: direct', 'CPU first'],
    stages: [
      {
        label: 'Unity Profiler frame spike',
        detail: 'CPU frame evidence from Editor or Player run',
        icons: [iconPaths.unity],
      },
      {
        label: 'Rider CPU hints + dotTrace',
        detail: 'Timeline / Call Tree, Unity 2018.3+ profiling',
        icons: [iconPaths.rider, iconPaths.dotTrace],
      },
      {
        label: 'Compare snapshot / rerun scenario',
        detail: 'Keep the repro loop small before CI hardening',
        icons: [iconPaths.dotTrace],
      },
    ],
  },
  {
    title: 'Memory regression',
    subtitle: 'Use engine snapshots for runtime truth, then inspect managed pressure.',
    chips: ['Memory: native tool first', 'dotMemory: managed', 'Coverage: caveat'],
    stages: [
      {
        label: 'Unity Memory Profiler or Memory Insights',
        detail: 'Native/engine snapshot, asset and allocation evidence',
        icons: [iconPaths.unity, iconPaths.unreal],
      },
      {
        label: 'dotMemory managed drill-down',
        detail: 'Allocations, retained objects, GC pressure in .NET processes',
        icons: [iconPaths.dotMemory],
      },
      {
        label: 'Coverage or smoke test guard',
        detail: 'Managed / Unity-test coverage where supported',
        icons: [iconPaths.dotCover],
      },
    ],
  },
  {
    title: 'Unreal native perf',
    subtitle: 'Keep Insights first, then profile an Unreal standalone app with symbols.',
    chips: ['Unreal: dotTrace direct', 'PDB required', 'Native allocations'],
    stages: [
      {
        label: 'Unreal Insights trace',
        detail: 'CPU/GPU timing, trace sessions, engine telemetry',
        icons: [iconPaths.unreal],
      },
      {
        label: 'dotTrace Unreal application',
        detail: 'PDB symbols, Timeline native stacks, allocation collection',
        icons: [iconPaths.rider, iconPaths.dotTrace],
      },
      {
        label: 'Rider UE tests / TeamCity perf gate',
        detail: 'Repeatable scenario checks without C++ coverage claims',
        icons: [iconPaths.rider, iconPaths.teamCity],
      },
    ],
  },
]
</script>

<template>
  <div class="flex flex-col gap-2.5">
    <div
      v-for="(workflow, index) in workflows"
      :key="workflow.title"
      class="rider-card workflow-card overflow-hidden"
    >
      <div class="relative z-10 grid grid-cols-[146px_1fr] gap-2.5 items-stretch">
        <div class="flex flex-col justify-between">
          <div>
            <div class="text-[10px] font-semibold text-white/44">Use case 0{{ index + 1 }}</div>
            <div class="mt-1 text-[16px] font-extrabold leading-tight">{{ workflow.title }}</div>
            <p class="mt-1 text-[10.5px] leading-snug text-white/58">{{ workflow.subtitle }}</p>
          </div>
          <div class="mt-2 flex flex-wrap gap-1.5">
            <span
              v-for="chip in workflow.chips"
              :key="chip"
              class="rounded px-1.5 py-0.5 text-[9.5px] font-semibold border border-cyan-300/22 bg-cyan-300/8 text-cyan-100/78"
            >
              {{ chip }}
            </span>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-2">
          <div
            v-for="(stage, stageIndex) in workflow.stages"
            :key="stage.label"
            class="relative rounded-xl border border-white/10 bg-black/22 px-2.5 py-2 min-h-[88px]"
          >
            <div class="flex items-center justify-between gap-2">
              <span class="text-[9.5px] font-semibold text-white/43">
                {{ stageIndex === 0 ? 'Native evidence' : stageIndex === 1 ? 'JetBrains drill-down' : 'Regression guard' }}
              </span>
              <span class="flex items-center gap-1">
                <img
                  v-for="icon in stage.icons"
                  :key="icon"
                  :src="icon"
                  class="h-[15px] w-[15px] object-contain"
                />
              </span>
            </div>
            <div class="mt-1.5 text-[12.5px] font-bold leading-tight text-white/92">{{ stage.label }}</div>
            <p class="mt-1 text-[10px] leading-snug text-white/55">{{ stage.detail }}</p>
            <div
              v-if="stageIndex < 2"
              class="absolute top-1/2 -right-[11px] z-20 h-5 w-5 rounded-full border border-cyan-200/25 bg-[#06151d] text-center text-[16px] leading-[18px] text-cyan-100/75"
            >
              ›
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.workflow-card {
  padding: 10px 12px;
  background:
    radial-gradient(circle at 3% 12%, rgba(58, 217, 255, 0.15), transparent 26%),
    linear-gradient(110deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.055));
  border-color: rgba(58, 217, 255, 0.2);
  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);
}

.workflow-card::after {
  content: '';
  position: absolute;
  inset: auto 0 0 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--mandala-c, #3ad9ff), transparent);
  opacity: 0.5;
}
</style>
