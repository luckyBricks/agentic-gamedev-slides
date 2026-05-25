---
layout: rider
chapter: magenta
page: 10
mandalaOpacity: 0.6
---

<div class="h-full flex flex-col gap-3">
  <div>
    <Kicker>Workflow 2</Kicker>
    <h1 class="!text-[36px] font-extrabold !leading-tight mt-2">
      Gameplay / Feature Implementation
    </h1>
  </div>

  <!-- Engine feature cards -->
  <div class="grid grid-cols-3 gap-4 shrink-0">
    <div class="rider-card px-4 py-3 flex flex-col" style="background: rgba(255,255,255,0.25);">
      <div class="flex items-center gap-2 mb-2">
        <img src="/docs/brand-assets/unity.svg" class="h-5 w-5" alt="Unity" />
        <span class="text-[15px] font-bold">Unity</span>
        <StatusChip label="C# + Shader" />
      </div>
      <div class="space-y-1 text-[12px] text-white/80">
        <p>❏ Profiling hints inline</p>
        <p>❏ Quick-fixes &amp; inspections</p>
        <p>❏ Shader file support</p>
        <p>❏ Unity tests &amp; debugger</p>
      </div>
    </div>
    <div class="rider-card px-4 py-3 flex flex-col" style="background: rgba(255,255,255,0.25);">
      <div class="flex items-center gap-2 mb-2">
        <img src="/docs/brand-assets/unreal-engine.svg" class="h-5 w-5" alt="Unreal" />
        <span class="text-[15px] font-bold">Unreal</span>
        <StatusChip label="C++ / BP" />
      </div>
      <div class="space-y-1 text-[12px] text-white/80">
        <p>❏ Engine-level debugger</p>
        <p>❏ Mobile / iOS deploy target</p>
        <p>❏ Macro &amp; Reflection insight</p>
        <p>❏ Blueprint awareness</p>
      </div>
    </div>
    <div class="rider-card px-4 py-3 flex flex-col" style="background: rgba(255,255,255,0.25);">
      <div class="flex items-center gap-2 mb-2">
        <img src="/docs/brand-assets/godot.svg" class="h-5 w-5" alt="Godot" />
        <span class="text-[15px] font-bold">Godot</span>
        <StatusChip label="C# + GDScript" />
      </div>
      <div class="space-y-1 text-[12px] text-white/80">
        <p>❏ C# language support</p>
        <p>❏ GDScript navigation</p>
        <p>❏ Debugging tools</p>
        <p>❏ Consistent workspace</p>
      </div>
    </div>
  </div>

  <!-- Feature screenshots grid -->
  <div class="flex-1 grid grid-cols-3 gap-3 min-h-0">
    <!-- Unity Profiling -->
    <div class="flex flex-col gap-2 min-h-0">
      <p class="text-[10px] font-semibold text-white/40 shrink-0">Unity Profiling</p>
      <div class="flex-1 grid grid-rows-2 gap-2 min-h-0">
        <div class="overflow-hidden rounded-lg border border-white/10 min-h-0">
          <img src="/pages/imgs/unity-profiler.png" class="w-full h-full object-cover object-top" />
        </div>
        <div class="overflow-hidden rounded-lg border border-white/10 min-h-0">
          <img src="/pages/imgs/unity-profiler-tool.png" class="w-full h-full object-cover object-center" />
        </div>
      </div>
    </div>
    <!-- Unreal Mobile Debug -->
    <div class="flex flex-col gap-2 min-h-0">
      <p class="text-[10px] font-semibold text-white/40 shrink-0">Unreal Mobile Debug</p>
      <div class="flex-1 grid grid-rows-2 gap-2 min-h-0">
        <div class="overflow-hidden rounded-lg border border-white/10 min-h-0">
          <img src="/pages/imgs/unreal-mobile-debug.png" class="w-full h-full object-cover object-top" />
        </div>
        <div class="overflow-hidden rounded-lg border border-white/10 min-h-0">
          <img src="/pages/imgs/unreal-ios-debug-device.png" class="w-full h-full object-cover object-center" />
        </div>
      </div>
    </div>
    <!-- Shader Debugging (cross-engine) -->
    <div class="flex flex-col gap-2 min-h-0">
      <p class="text-[10px] font-semibold text-white/40 shrink-0">Shader Debugging</p>
      <div class="flex-1 grid grid-rows-2 gap-2 min-h-0">
        <div class="overflow-hidden rounded-lg border border-white/10 min-h-0">
          <img src="/pages/imgs/shader-debug-renderdoc.png" class="w-full h-full object-cover object-top" />
        </div>
        <div class="overflow-hidden rounded-lg border border-white/10 min-h-0">
          <img src="/pages/imgs/shader-debug-static-analysis.png" class="w-full h-full object-cover object-top" />
        </div>
      </div>
    </div>
  </div>

  <p class="text-center text-[12px] text-white/40 italic shrink-0">Engine-aware context makes AI useful — not just available.</p>
</div>

<!--
Use "not any LLM has this context" frequently, but don't speak abstractly — ground it in prefab, Blueprint, shader, tests. Rider isn't a generic editor; it's an engine-aware workspace.
-->
