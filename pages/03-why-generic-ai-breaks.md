---
layout: rider
chapter: magenta
page: 3
---

<div class="grid grid-cols-12 gap-8 h-full items-center">
  <!-- Left: narrative -->
  <div class="col-span-4 flex flex-col gap-5">
    <div>
      <Kicker>The Problem</Kicker>
      <h1 class="!text-[36px] font-extrabold !leading-[1.1] mt-3">
        Why Generic AI<br>Breaks in GameDev
      </h1>
    </div>
    <p class="text-[13.5px] text-white/65 leading-relaxed">
      File-scoped AI produces syntactically valid code — but has no view of engine semantics, asset dependency graphs, or delivery constraints that determine whether a change is actually shippable.
    </p>
    <div class="space-y-2 text-[13px]">
      <div class="flex items-center gap-2 text-white/55">
        <span class="text-[#ff4455] font-bold">✗</span>Blueprint / Prefab execution graphs
      </div>
      <div class="flex items-center gap-2 text-white/55">
        <span class="text-[#ff4455] font-bold">✗</span>Engine reflection & macro semantics
      </div>
      <div class="flex items-center gap-2 text-white/55">
        <span class="text-[#ff4455] font-bold">✗</span>Perforce changelist & lock context
      </div>
      <div class="flex items-center gap-2 text-white/55">
        <span class="text-[#ff4455] font-bold">✗</span>Build-graph perf regression signal
      </div>
    </div>
    <div class="border-l-2 border-[#FF0A67] pl-3 text-[13px] text-white/60 leading-snug">
      GameDev needs <Highlight>system-aware</Highlight> AI —<br>not file-only AI.
    </div>
    <div class="flex items-center gap-2 text-white/35 text-[11.5px] tracking-wide">
      <img src="/docs/brand-assets/Rider/Rider_icon.svg" class="h-4 opacity-50" />
      IDE-native context is the answer
    </div>
  </div>

  <!-- Right: engine quadrants with floating panel -->
  <div class="col-span-8 flex items-center justify-center">
    <div class="w-full border border-white/20 bg-white/[0.11] backdrop-blur-lg p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_16px_64px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.18)]">
      <EngineQuadrants />
    </div>
  </div>
</div>

<!--
Don't demean generic AI — point out it's optimized for general programming tasks, while game studios need engine-aware, asset-aware, pipeline-aware engineering context. This is the value starting point for IDE-native capability.
-->
