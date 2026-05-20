---
layout: rider
chapter: amber
page: '6b'
mandalaOpacity: 0.5
---

<div class="grid grid-cols-12 gap-5 h-full items-center">
  <!-- Left: narrative column -->
  <div class="col-span-4 flex flex-col justify-center">
    <div class="flex items-center gap-2 flex-wrap">
      <Kicker>Official Cockpit</Kicker>
      <StatusChip label="New" />
      <span class="rider-chip rider-chip--tag">Experimental</span>
    </div>
    <h1 class="!text-[30px] font-extrabold !leading-tight mt-3 text-white/95">
      Agent Workbench<br>
      <span class="text-white/72 font-bold text-[22px]">Many agents — one IDE context</span>
    </h1>
    <p class="mt-3 text-[12.5px] text-white/65 leading-relaxed italic">
      "Run and manage AI coding agents — Codex, Claude, Junie, and more — directly inside your IDE."
    </p>
    <div class="mt-4 space-y-2.5 text-[12px] leading-relaxed text-white/60">
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p><span class="text-white/85 font-bold">Persistent sessions</span> — agent state survives restarts and hand-offs</p>
      </div>
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p><span class="text-white/85 font-bold">Automatic code context</span> — every tab sees the same PSI, refactor, debugger</p>
      </div>
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p><span class="text-white/85 font-bold">Multi-agent in one cockpit</span> — Junie plans · Claude implements · Codex tests</p>
      </div>
    </div>
    <div class="mt-4 text-[11px] text-white/40 italic">
      <Highlight>Workbench</Highlight> = human cockpit · MCP Steroid = agent runtime · complementary, not competing.
    </div>
  </div>

  <!-- Right: cockpit visual -->
  <div class="col-span-8 flex flex-col gap-3">
    <AgentWorkbenchCockpit />
    <!-- Featured use cases -->
    <div class="grid grid-cols-3 gap-2 px-1">
      <div class="rounded-lg border border-white/8 bg-white/[0.03] p-2">
        <div class="text-[9px] uppercase tracking-[0.18em] text-[#ffb547] font-bold">#1 Live Ops</div>
        <div class="text-[10px] text-white/65 leading-snug mt-1">3 sessions on one crash · ~40 min context-rebuild saved</div>
      </div>
      <div class="rounded-lg border border-white/8 bg-white/[0.03] p-2">
        <div class="text-[9px] uppercase tracking-[0.18em] text-[#ffb547] font-bold">#5 A/B Bake-off</div>
        <div class="text-[10px] text-white/65 leading-snug mt-1">Junie vs Claude on same refactor · CTO-grade fairness</div>
      </div>
      <div class="rounded-lg border border-white/8 bg-white/[0.03] p-2">
        <div class="text-[9px] uppercase tracking-[0.18em] text-[#ffb547] font-bold">#8 Observatory</div>
        <div class="text-[10px] text-white/65 leading-snug mt-1">Per-team sessions · MCP-tool calls · policy-gate audit trail</div>
      </div>
    </div>
  </div>
</div>

<!--
Workbench 是 page 5 那个「共享驾驶舱」概念的具体 UI 形态。它解决一个被反复问到的问题——「我同时想用 Junie 规划、Claude 实现、Codex 写测试，是不是要开三个工具？」答案：不用，全在 Rider 一个面板里。强调三点：persistent sessions（不是临时聊天）、automatic code context（不用粘贴 stack）、multi-agent 在同一面板。区分 Workbench 与 MCP Steroid：前者是人类驾驶舱，后者是 agent 运行时——互补不竞争。Experimental + Apache 2.0 + JetBrains s.r.o. 三个信任锚点同框出现。
-->
