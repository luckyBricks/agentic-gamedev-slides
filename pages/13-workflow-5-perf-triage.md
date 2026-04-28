---
layout: rider
chapter: cyan
page: 13
mandalaOpacity: 0.7
---

<div class="h-full flex flex-col pr-2">
<div class="grid grid-cols-12 gap-6 flex-1 min-h-0 items-center pb-6">
  <div class="col-span-4 pb-8">
    <div class="flex items-center gap-3">
      <Kicker>Workflow 5</Kicker>
      <span class="rounded border border-white/18 px-2 py-0.5 text-[11px] font-semibold text-white/62">Profiling loop</span>
    </div>
    <h1 class="!text-[35px] font-extrabold !leading-[1.06] mt-4">
      Performance Triage Is a Loop, Not a Tool Window
    </h1>
    <div class="mt-4 rider-card rider-card--dark text-[12px] leading-relaxed text-white/64">
      <strong class="text-white/90">Support boundary:</strong>
      native engine profilers stay the source of truth for GPU, rendering, assets, and engine-level telemetry.
    </div>
  </div>
  <div class="col-span-8">
    <ProfilerWorkflowMatrix />
  </div>
</div>
<div class="-mb-1 text-[12.5px] leading-relaxed text-white/62">
  <TipChip /> Native profiler + JetBrains profiler: runtime evidence becomes code navigation, managed-memory diagnosis, test coverage, and CI regression gates.
</div>
</div>

<!--
Keep the promise precise. Unity/Unreal native profilers remain authoritative for engine telemetry, GPU, rendering, assets, and native memory. JetBrains tools add source-level follow-up: dotTrace for Unity and Unreal performance profiling, dotMemory for managed/.NET memory, and dotCover only for managed or Unity-test coverage where supported.
  
Unity Profiler / Unreal Insights find the runtime symptom; dotTrace / dotMemory / dotCover turn it into source-level diagnosis and regression control.
    
-->
