---
theme: default
title: JetBrains for Agentic-Driven Game Development
info: |
  ## JetBrains Rider as the Shared IDE for Humans and Agents
  Why Rider becomes the control plane for agentic game development.
author: JetBrains .NET / GameDev
colorSchema: dark
aspectRatio: 16/9
canvasWidth: 1280
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: Inter
  mono: JetBrains Mono
  provider: google
defaults:
  class: text-white
routerMode: hash
---

<div class="absolute inset-0 overflow-hidden">
  <div class="rider-grid-lines" />
  <div class="rider-glow-ring" style="width:520px;height:520px;background:#e73cff;top:-140px;right:-80px" />
  <div class="rider-glow-ring" style="width:460px;height:460px;background:#6c3bff;bottom:-180px;left:-140px" />
</div>

<div class="relative z-10 flex flex-col justify-between h-full py-4">
  <div class="flex items-center gap-3">
    <span class="rider-chip">JetBrains · .NET &amp; GameDev</span>
    <span class="text-xs tracking-[0.2em] uppercase rider-muted">Keynote · 2026</span>
  </div>

  <div>
    <div class="text-[13px] uppercase tracking-[0.35em] rider-subtle mb-3">
      Why Rider Becomes the Shared IDE for Humans and Agents
    </div>
    <h1 class="text-6xl font-bold leading-[1.05] tracking-tight">
      JetBrains for <br>
      <span class="rider-gradient-text">Agentic-Driven</span>
      <span class="rider-heat-text">Game Development</span>
    </h1>
    <p class="mt-6 text-lg max-w-[680px] rider-subtle">
      From <em class="not-italic text-white">the IDE humans work in</em> to
      <em class="not-italic text-white">the workbench humans and agents share</em> — context, execution, and control on one plane.
    </p>
    <div class="mt-6 flex items-center gap-2 flex-wrap">
      <span class="rider-chip">Rider</span>
      <span class="rider-chip">dotUltimate</span>
      <span class="rider-chip">Junie</span>
      <span class="rider-chip">ACP · MCP</span>
      <span class="rider-chip">Qodana</span>
      <span class="rider-chip">TeamCity</span>
      <span class="rider-chip">AI Enterprise</span>
    </div>
  </div>

  <div class="grid grid-cols-3 gap-3">
    <div class="rider-card rider-card--accent">
      <div class="text-[10px] tracking-[0.3em] uppercase rider-muted">Plane 01</div>
      <div class="text-sm font-semibold mt-0.5">Human Workspace</div>
    </div>
    <div class="rider-card">
      <div class="text-[10px] tracking-[0.3em] uppercase rider-muted">Plane 02</div>
      <div class="text-sm font-semibold mt-0.5">Agent Runtime</div>
    </div>
    <div class="rider-card">
      <div class="text-[10px] tracking-[0.3em] uppercase rider-muted">Plane 03</div>
      <div class="text-sm font-semibold mt-0.5">Quality &amp; Governance</div>
    </div>
  </div>
</div>

<RiderFooter chapter="01 · Cover" index="01" total="26" />

<!--
Open with a paradigm shift, not a feature list. The real competition in agentic coding is not the chat box — it is who owns the context, execution, and verification loop between humans and agents. Rider is positioned there.
-->

---
layout: two-cols-header
layoutClass: gap-8
---

<ChapterBadge kicker="02 · Executive Thesis" label="Scarcity has moved" />

# The scarce resource <span class="rider-heat-text">is not generation</span>.

::left::

<div class="space-y-4 mt-4">
  <div class="rider-card">
    <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Thesis</div>
    <p class="mt-1 text-lg leading-snug">
      In agentic GameDev, the prize isn't writing code faster — it's
      <strong class="rider-gradient-text">shipping it correctly, tested, and safely into mainline</strong>
      under real engineering constraints.
    </p>
  </div>

  <ul class="space-y-2 text-sm">
    <li class="flex gap-3"><span class="rider-dot mt-1.5" /><span>GameDev is not single-file authoring. It is a system of code, engine, assets, and pipelines.</span></li>
    <li class="flex gap-3"><span class="rider-dot mt-1.5" /><span>The closer to mainline and release, the more validation, governance, and accountability dominate cost.</span></li>
    <li class="flex gap-3"><span class="rider-dot mt-1.5" /><span>Therefore Rider's value is not an IDE, it's a <em class="not-italic text-white">shared context &amp; control plane</em>.</span></li>
  </ul>
</div>

::right::

<div class="mt-4">
  <ValueFunnel />
  <div class="mt-3 text-xs rider-subtle text-center">
    Generation is abundant · context is scarce · governance is where the money lives.
  </div>
</div>

<RiderFooter chapter="02 · Executive Thesis" index="02" total="26" />

<!--
Land one takeaway management can repeat: AI makes writing code cheaper, which makes context, quality gates, and governance more expensive — not less.
-->

---
layout: default
---

<ChapterBadge kicker="03 · Problem" label="Why generic AI breaks in GameDev" />

# Generic AI is file-aware. <span class="rider-gradient-text">Games are system-aware.</span>

<div class="mt-6 grid grid-cols-12 gap-6">
  <div class="col-span-7">
    <EngineQuadrants />
  </div>
  <div class="col-span-5 flex flex-col gap-3">
    <div class="rider-card">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Symptom</div>
      <p class="mt-1 text-sm leading-snug">File-only AI cannot see Blueprints, Prefabs, Scenes, build graphs, or perf regressions.</p>
    </div>
    <div class="rider-card">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Consequence</div>
      <p class="mt-1 text-sm leading-snug">It produces code, not necessarily shippable game changes.</p>
    </div>
    <div class="rider-card rider-card--accent">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Conclusion</div>
      <p class="mt-1 text-sm leading-snug">
        GameDev needs <strong class="rider-heat-text">system-aware AI</strong>, not file-only AI.
        This is the starting line for IDE-native capability.
      </p>
    </div>
  </div>
</div>

<div class="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] rider-muted">
  <span>File View</span>
  <span class="rider-divider flex-1" />
  <span>Project View</span>
  <span class="rider-divider flex-1" />
  <span>Engine View</span>
  <span class="rider-divider flex-1" />
  <span>Delivery View</span>
</div>

<RiderFooter chapter="03 · Problem" index="03" total="26" />

<!--
Don't disparage generic AI — simply name what it optimizes for: general programming. Studios need engine-aware, asset-aware, pipeline-aware context. That is the IDE's home turf.
-->

---
layout: default
---

<ChapterBadge kicker="04 · The JetBrains Stack" label="From personal IDE to production infrastructure" />

# Four layers, <span class="rider-gradient-text">one stack</span>.

<div class="mt-5 grid grid-cols-12 gap-6">
  <div class="col-span-7">
    <StackLayers />
  </div>
  <div class="col-span-5 flex flex-col gap-2 text-sm">
    <div class="rider-card">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Human Workspace</div>
      <p class="rider-subtle mt-1 leading-snug">Rider handles high-fidelity coding, comprehension, debugging, and review.</p>
    </div>
    <div class="rider-card">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Agent Access Layer</div>
      <p class="rider-subtle mt-1 leading-snug">Junie, ACP Registry, MCP Server bring agents into the <em class="not-italic text-white">same</em> project context.</p>
    </div>
    <div class="rider-card">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Quality Delivery Layer</div>
      <p class="rider-subtle mt-1 leading-snug">Qodana, TeamCity, YouTrack extend IDE semantics into team workflow.</p>
    </div>
    <div class="rider-card rider-card--accent">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Governance Layer</div>
      <p class="rider-subtle mt-1 leading-snug">AI Enterprise governs budget, permissions, models, and compliance.</p>
    </div>
  </div>
</div>

<RiderFooter chapter="04 · Stack" index="04" total="26" />

<!--
Keyword for this page: "layered", not "product list". The point is that JetBrains already covers individual development → team delivery → organizational governance.
-->

---
layout: default
---

<ChapterBadge kicker="05 · Shared IDE" label="Humans + Agents in one workbench" />

# Rider = <span class="rider-heat-text">Shared IDE</span> for Human + Agent

<div class="mt-4 grid grid-cols-12 gap-6">
  <div class="col-span-5 flex flex-col gap-3">
    <div class="rider-card">
      <div class="text-sm font-semibold">Shared Context</div>
      <p class="text-xs rider-subtle mt-1 leading-5">Humans and agents see the same project semantics. No guessing, no drift.</p>
    </div>
    <div class="rider-card">
      <div class="text-sm font-semibold">Shared Tooling</div>
      <p class="text-xs rider-subtle mt-1 leading-5">Refactor, tests, debugger, VCS all come from one IDE substrate.</p>
    </div>
    <div class="rider-card rider-card--accent">
      <div class="text-sm font-semibold">Shared Control</div>
      <p class="text-xs rider-subtle mt-1 leading-5">Sensitive actions are reviewable, pausable, revertable. Humans stay in charge of merge.</p>
    </div>
    <div class="text-xs rider-subtle mt-1 italic">
      Humans and agents don't hold forked copies of context — they share the same workbench.
    </div>
  </div>
  <div class="col-span-7">
    <SharedIdeHub />
  </div>
</div>

<RiderFooter chapter="05 · Shared IDE" index="05" total="26" />

<!--
Lean on the word "shared". The differentiation is not whether agents can plug in — it's whether agents reuse the IDE's real context and tool chain.
-->

---
layout: default
---

<ChapterBadge kicker="06 · Official Path" label="ACP + Built-in MCP + Junie" />

# The main road: <span class="rider-gradient-text">discover · connect · execute</span>.

<div class="mt-4 grid grid-cols-12 gap-6">
  <div class="col-span-7">
    <ThreeLaneDiagram />
  </div>
  <div class="col-span-5 flex flex-col gap-2">
    <div class="rider-card">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">What shipped</div>
      <ul class="text-xs space-y-1 mt-1.5">
        <li><span class="rider-bracket">›</span> Rider 2026.1 — built-in ACP Registry</li>
        <li><span class="rider-bracket">›</span> Rider 2025.2+ — built-in MCP Server</li>
        <li><span class="rider-bracket">›</span> Junie — plans, executes, runs tests &amp; terminal</li>
      </ul>
    </div>
    <div class="rider-card rider-card--accent">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Why this matters</div>
      <p class="text-xs rider-subtle mt-1 leading-5">
        Procurable · standardizable · governable. This is the lane enterprise buyers can deploy today — no experiments required.
      </p>
    </div>
  </div>
</div>

<RiderFooter chapter="06 · Official Path" index="06" total="26" />

<!--
Do not mix MCP Steroid in here. This slide is about the JetBrains main road: capabilities that can be bought, rolled out, and governed.
-->

---
layout: default
---

<ChapterBadge kicker="07 · Frontier Path" label="MCP Steroid as Skill Factory" />

# <span class="rider-heat-text">Give AI the whole IDE</span>, not just the files.

<div class="mt-4 grid grid-cols-12 gap-6">
  <div class="col-span-7">
    <FrontierSpotlight />
  </div>
  <div class="col-span-5 flex flex-col gap-2 text-sm">
    <div class="rider-card">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Concept</div>
      <p class="rider-subtle mt-1 leading-snug">Not just letting agents use the IDE — letting the IDE be the agent's <em class="not-italic text-white">skill factory</em>.</p>
    </div>
    <div class="rider-card">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Value</div>
      <p class="rider-subtle mt-1 leading-snug">Studio-specific tools can be grown on demand, without a full plugin development cycle.</p>
    </div>
    <div class="rider-card !border-[#ffb547aa]">
      <div class="text-[10px] tracking-[0.28em] uppercase rider-muted">Boundary</div>
      <p class="rider-subtle mt-1 leading-snug">This is a frontier / independent research direction — a vision proof, not this deck's core commercial commitment.</p>
    </div>
  </div>
</div>

<RiderFooter chapter="07 · Frontier Path" index="07" total="26" />

<!--
Emphasize verbally: independent research project. Purpose is to raise the ceiling of imagination, not replace the official main road.
-->

---
layout: section
---

<div class="absolute inset-0">
  <div class="rider-grid-lines" />
  <div class="rider-glow-ring" style="width:420px;height:420px;background:#9a4bff;top:-100px;left:-140px" />
</div>

<div class="relative z-10">
  <div class="text-[12px] uppercase tracking-[0.4em] rider-muted">Act II</div>
  <h1 class="text-5xl font-bold mt-3 leading-tight">
    <span class="rider-gradient-text">Workflows</span><br>
    that cross the IDE → CI → mainline boundary.
  </h1>
  <p class="mt-4 rider-subtle max-w-[680px]">
    Six concrete loops that agentic tools have to beat file-only assistants on. Each one is where JetBrains semantics outperform generic generation.
  </p>
  <div class="mt-6 grid grid-cols-6 gap-2 text-[11px] tracking-widest uppercase rider-muted">
    <span class="rider-card text-center">Tool Gen</span>
    <span class="rider-card text-center">Plan</span>
    <span class="rider-card text-center">Feature</span>
    <span class="rider-card text-center">Refactor</span>
    <span class="rider-card text-center">Gate</span>
    <span class="rider-card text-center">Triage</span>
  </div>
</div>

<RiderFooter chapter="Act II" index="08" total="26" />

---
layout: default
---

<ChapterBadge kicker="08 · Workflow 0" label="Human Request → On-Demand Tool Generation" />

# Tools grown in the IDE, <span class="rider-gradient-text">at the speed of an ask</span>.

<div class="mt-5">
  <WorkflowFlow
    :steps="[
      { label: 'Prompt', detail: 'Studio-specific need from a human' },
      { label: 'Context', detail: 'Shared IDE: symbols, engine, VCS' },
      { label: 'Skill', detail: 'Agent synthesizes a one-off tool' },
      { label: 'Execute', detail: 'Runs inside Rider runtime' },
      { label: 'Review', detail: 'Human approves + merges' },
    ]"
  />
</div>

<div class="mt-6 grid grid-cols-3 gap-3">
  <div class="rider-card">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Example 01</div>
    <p class="text-sm mt-1">One-shot naming-convention checker for a specific studio's codebase.</p>
  </div>
  <div class="rider-card">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Example 02</div>
    <p class="text-sm mt-1">Pre-upgrade dependency &amp; risk scan tailored to the project.</p>
  </div>
  <div class="rider-card">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Example 03</div>
    <p class="text-sm mt-1">Bulk impact on Prefabs / Scenes / Blueprints from a proposed edit.</p>
  </div>
</div>

<div class="mt-4 rider-card rider-card--accent">
  <div class="flex items-center justify-between">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">ROI</div>
    <div class="rider-chip">No plugin development needed</div>
  </div>
  <p class="mt-1 text-sm">Fewer one-off scripts, fewer hand-rolled plugins, less repetitive human analysis.</p>
</div>

<RiderFooter chapter="08 · Workflow 0" index="08" total="26" />

<!--
Framing: we used to build an internal tool for every special need. Going forward, many lightweight tools will be synthesized on-the-fly against the shared IDE context.
-->

---
layout: default
---

<ChapterBadge kicker="09 · Workflow 1" label="Issue → Impact Analysis → Plan" />

# <span class="rider-gradient-text">Understanding</span> comes before coding.

<div class="mt-5 grid grid-cols-12 gap-6">
  <div class="col-span-5">
    <IssueToPlanFlow />
  </div>
  <div class="col-span-7 flex flex-col gap-3">
    <div class="rider-card">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Input</div>
      <p class="text-sm mt-1">Gameplay request · live bug · engine upgrade task — sourced from YouTrack.</p>
    </div>
    <div class="rider-card rider-card--accent">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Middle (the hard part)</div>
      <p class="text-sm mt-1">
        Rider's symbol navigation, dependency graph, and flow / value analysis scope the blast radius before a single line is generated.
      </p>
    </div>
    <div class="rider-card">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Output</div>
      <p class="text-sm mt-1">A reviewable plan: scope · risks · validation checklist. Not a speculative draft.</p>
    </div>
    <div class="text-xs rider-subtle italic pl-1">
      A professional agentic workflow starts with understanding — not coding.
    </div>
  </div>
</div>

<RiderFooter chapter="09 · Workflow 1" index="09" total="26" />

---
layout: default
---

<ChapterBadge kicker="10 · Workflow 2" label="Gameplay / Feature Implementation" />

# Engine-aware context makes AI <span class="rider-heat-text">useful</span>, not just available.

<div class="mt-5 grid grid-cols-3 gap-3">
  <div class="rider-card bg-gradient-to-br from-[#ff3aa822] to-transparent border-[#ff3aa888]">
    <div class="flex items-baseline justify-between">
      <div class="text-lg font-semibold">Unity</div>
      <span class="rider-chip">C#</span>
    </div>
    <ul class="mt-3 text-xs rider-subtle space-y-1">
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Quick-fixes &amp; inspections</span></li>
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Unity Tests runner</span></li>
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Profiling &amp; flame charts</span></li>
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Shaders &amp; assets workflow</span></li>
    </ul>
  </div>

  <div class="rider-card bg-gradient-to-br from-[#9a4bff22] to-transparent border-[#9a4bff88]">
    <div class="flex items-baseline justify-between">
      <div class="text-lg font-semibold">Unreal</div>
      <span class="rider-chip">C++</span>
    </div>
    <ul class="mt-3 text-xs rider-subtle space-y-1">
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Reflection &amp; macro awareness</span></li>
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Blueprint insight</span></li>
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Debugger &amp; automation tests</span></li>
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Build / metadata updates</span></li>
    </ul>
  </div>

  <div class="rider-card bg-gradient-to-br from-[#3ad9ff22] to-transparent border-[#3ad9ff88]">
    <div class="flex items-baseline justify-between">
      <div class="text-lg font-semibold">Godot</div>
      <span class="rider-chip">C# · GDScript</span>
    </div>
    <ul class="mt-3 text-xs rider-subtle space-y-1">
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Two-language parity</span></li>
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Navigation &amp; analysis</span></li>
      <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Consistent debugging</span></li>
    </ul>
  </div>
</div>

<div class="mt-5 rider-card rider-card--accent text-center">
  Rider is not a generic editor. It is an <span class="rider-gradient-text font-semibold">engine-aware workspace</span>.
</div>

<RiderFooter chapter="10 · Workflow 2" index="10" total="26" />

---
layout: default
---

<ChapterBadge kicker="11 · Workflow 3" label="Refactor / Engine Upgrade / API Migration" />

# AI gives speed. <span class="rider-gradient-text">Rider gives a safe boundary</span>.

<div class="mt-5 grid grid-cols-12 gap-6">
  <div class="col-span-7">
    <WorkflowFlow
      accent="heat"
      :steps="[
        { label: 'Generate', detail: 'First-draft migration from AI' },
        { label: 'Analyze', detail: 'Solution-wide impact + dependency graph' },
        { label: 'Safely Apply', detail: 'Rename · move · change signature' },
        { label: 'Review', detail: 'Diff + tests before merge' },
      ]"
    />
    <div class="mt-4 grid grid-cols-2 gap-3">
      <div class="rider-card">
        <div class="text-sm font-semibold">What AI is great at</div>
        <p class="text-xs rider-subtle mt-1">Drafting the migration sketch and large-batch edits quickly.</p>
      </div>
      <div class="rider-card rider-card--accent">
        <div class="text-sm font-semibold">What Rider guarantees</div>
        <p class="text-xs rider-subtle mt-1">Refactorings that update Blueprints, metadata, and build files — not plain text replace.</p>
      </div>
    </div>
  </div>
  <div class="col-span-5">
    <div class="rider-card h-full">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Concrete moves</div>
      <div class="mt-2 space-y-2 text-sm">
        <div class="flex items-center justify-between">
          <span>Rename across 50+ files</span>
          <span class="rider-chip">Safe</span>
        </div>
        <div class="flex items-center justify-between">
          <span>Change signature project-wide</span>
          <span class="rider-chip">Safe</span>
        </div>
        <div class="flex items-center justify-between">
          <span>Engine version migration</span>
          <span class="rider-chip">Planned</span>
        </div>
        <div class="flex items-center justify-between">
          <span>API deprecation sweep</span>
          <span class="rider-chip">Planned</span>
        </div>
      </div>
      <p class="mt-3 text-xs rider-subtle italic">
        For large game engines, migration speed matters — post-migration defect leakage matters more.
      </p>
    </div>
  </div>
</div>

<RiderFooter chapter="11 · Workflow 3" index="11" total="26" />

---
layout: default
---

<ChapterBadge kicker="12 · Workflow 4" label="Pre-Merge Quality Gate" />

# JetBrains doesn't just help you <em>write</em>. <span class="rider-heat-text">It helps you ship</span>.

<div class="mt-5">
  <QualityGate />
</div>

<div class="mt-6 grid grid-cols-4 gap-3">
  <div class="rider-card">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Dev time</div>
    <p class="text-sm mt-1">Rider inspections surface issues locally — before commit.</p>
  </div>
  <div class="rider-card">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Team time</div>
    <p class="text-sm mt-1">Qodana carries the same semantic rules into CI.</p>
  </div>
  <div class="rider-card">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Delivery</div>
    <p class="text-sm mt-1">TeamCity runs GameDev pipelines with Perforce + engine hooks.</p>
  </div>
  <div class="rider-card rider-card--accent">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Manager's lens</div>
    <p class="text-sm mt-1">Turn "AI-generated code" into <em class="not-italic text-white">verifiable mainline quality</em>.</p>
  </div>
</div>

<RiderFooter chapter="12 · Workflow 4" index="12" total="26" />

<!--
Best line for CTOs: the real question isn't whether 20% of code can be agent-written — it's whether you dare to merge 20% agent-written changes into mainline.
-->

---
layout: default
---

<ChapterBadge kicker="13 · Workflow 5" label="Performance / Memory / Regression Triage" />

# Fixing <span class="rider-gradient-text">the experience</span> is the expensive part.

<div class="mt-5 grid grid-cols-12 gap-6">
  <div class="col-span-7">
    <PerfDashboard />
  </div>
  <div class="col-span-5 flex flex-col gap-3">
    <div class="rider-card">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Reality</div>
      <p class="text-sm mt-1">In GameDev, writing the feature is rarely the costly part — fixing how it <em class="not-italic text-white">feels</em> is.</p>
    </div>
    <div class="rider-card rider-card--accent">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Integrated workbench</div>
      <p class="text-sm mt-1">dotTrace · dotMemory · dotCover · Unity Profiler all feed back into the same IDE surface humans and agents share.</p>
    </div>
    <div class="rider-card">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">In an agentic loop</div>
      <p class="text-sm mt-1">Analysis and review still need real tooling. Chat UIs alone cannot replace profilers and coverage data.</p>
    </div>
  </div>
</div>

<RiderFooter chapter="13 · Workflow 5" index="13" total="26" />

---
layout: section
---

<div class="absolute inset-0">
  <div class="rider-grid-lines" />
  <div class="rider-glow-ring" style="width:400px;height:400px;background:#ff3aa8;top:-80px;right:-100px" />
</div>

<div class="relative z-10">
  <div class="text-[12px] uppercase tracking-[0.4em] rider-muted">Act III</div>
  <h1 class="text-5xl font-bold mt-3 leading-tight">
    <span class="rider-heat-text">Who</span> adopts, <span class="rider-gradient-text">who</span> sees value,
    <br>and <span class="rider-gradient-text">who</span> signs the PO?
  </h1>
  <p class="mt-4 rider-subtle max-w-[680px]">
    Switching from the workflow line to the role line. Different roles experience the same stack very differently — and decision makers read it differently still.
  </p>
</div>

<RiderFooter chapter="Act III" index="14" total="26" />

---
layout: default
---

<ChapterBadge kicker="14 · Role Map" label="Concentric adoption" />

# <span class="rider-gradient-text">Core users</span> → <span class="rider-gradient-text">process owners</span> → <span class="rider-gradient-text">decision makers</span>

<div class="mt-4 grid grid-cols-12 gap-6 items-center">
  <div class="col-span-6">
    <RoleMap />
  </div>
  <div class="col-span-6 flex flex-col gap-3">
    <div class="rider-card">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Core Users</div>
      <p class="text-sm mt-1">Gameplay · Engine · Rendering · Tech Art — want shorter implement → debug loops.</p>
    </div>
    <div class="rider-card">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Process Owners</div>
      <p class="text-sm mt-1">Studio Tools · QA · Build · Leads — want stable mainline and faster feedback.</p>
    </div>
    <div class="rider-card rider-card--accent">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Decision Makers</div>
      <p class="text-sm mt-1">R&D Management · CTO — want toolchain consolidation, standards, and AI governance.</p>
    </div>
  </div>
</div>

<RiderFooter chapter="14 · Role Map" index="14" total="26" />

<!--
This is the nav page. Don't stack details — the point is that each role reads the same stack with different expectations.
-->

---
layout: default
---

<ChapterBadge kicker="15 · Persona 1" label="Gameplay Programmer + Technical Artist" />

# The roles that <span class="rider-heat-text">feel the speedup</span> first.

<div class="mt-4">
  <PersonaCards
    :personas="[
      {
        role: 'Hands-on · Daily Unity/Unreal',
        title: 'Gameplay Programmer',
        tone: 'pink',
        bullets: [
          'Iterate gameplay logic without leaving the IDE',
          'Debug scripts with Unity / Unreal-aware stops',
          'Run &amp; verify tests as part of the inner loop',
          'Local refactors that respect engine conventions',
        ],
        stack: ['Rider', 'Junie', 'Unity Tests'],
      },
      {
        role: 'Bridge between art and engine',
        title: 'Technical Artist',
        tone: 'violet',
        bullets: [
          'Syntax-aware shader editing &amp; navigation',
          'Material / rendering-script troubleshooting',
          'Visual-to-code round trip stays inside Rider',
          'Profiling assistance co-located with source',
        ],
        stack: ['Rider', 'Shader Tools', 'dotTrace'],
      },
    ]"
  />
</div>

<div class="mt-5 rider-card rider-card--accent">
  <div class="text-sm">
    Shared need: they don't want another chat assistant —
    <span class="rider-heat-text font-semibold">they want an assistant that already understands the engine</span>.
  </div>
</div>

<RiderFooter chapter="15 · Persona 1" index="15" total="26" />

---
layout: default
---

<ChapterBadge kicker="16 · Persona 2" label="Engine / Framework / Rendering Engineer" />

# The moat is most <span class="rider-gradient-text">visible</span> here.

<div class="mt-4 grid grid-cols-12 gap-6">
  <div class="col-span-7">
    <PersonaCards
      :personas="[
        {
          role: 'Deep-tech · Long-lived systems',
          title: 'Engine / Framework / Rendering',
          tone: 'cyan',
          bullets: [
            'Global architecture visibility across huge solutions',
            'Safe refactoring at project scale',
            'Engine-aware semantic understanding (macros, reflection)',
            'Risk-aware change preview before touching the graph',
          ],
          stack: ['Rider', 'ReSharper C++', 'dotTrace'],
        },
      ]"
    />
    <div class="mt-4 rider-card">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Reframe for seniors</div>
      <p class="text-sm mt-1">
        Do not sell them "AI productivity." Sell them
        <span class="rider-gradient-text font-semibold">reduced risk of changes in complex systems</span>.
      </p>
    </div>
  </div>
  <div class="col-span-5">
    <div class="rider-card h-full">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">What's hardest to replace</div>
      <ul class="mt-2 space-y-2 text-sm">
        <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Whole-project symbol graph</span></li>
        <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Cross-type dependency reasoning</span></li>
        <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Macro / Blueprint / build-file awareness</span></li>
        <li class="flex gap-2"><span class="rider-dot mt-1.5" /><span>Engine-specific idiomatic patterns</span></li>
      </ul>
      <div class="mt-4 rider-chip">Where agents need the IDE most</div>
    </div>
  </div>
</div>

<RiderFooter chapter="16 · Persona 2" index="16" total="26" />

---
layout: default
---

<ChapterBadge kicker="17 · Persona 3" label="Studio Tools · AI Platform · QA · Build & Release" />

# JetBrains ships to the <span class="rider-gradient-text">studio platform team</span>, not just to coders.

<div class="mt-4 grid grid-cols-2 gap-3">
  <div class="rider-card bg-gradient-to-br from-[#6c3bff22] to-transparent border-[#9a4bff66]">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Studio Tools · AI Platform</div>
    <div class="text-base font-semibold mt-1">Host the studio's skills</div>
    <ul class="text-xs rider-subtle mt-2 space-y-1">
      <li>Rider becomes the substrate for internal agents + skills.</li>
      <li>Curated MCP surfaces, safe execution, reusable templates.</li>
    </ul>
  </div>
  <div class="rider-card bg-gradient-to-br from-[#ff3aa822] to-transparent border-[#ff3aa866]">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">QA</div>
    <div class="text-base font-semibold mt-1">Shift validation left</div>
    <ul class="text-xs rider-subtle mt-2 space-y-1">
      <li>Tests, coverage, static analysis, and regression in one pipeline.</li>
      <li>Same rules in IDE and CI — no drift between local and gate.</li>
    </ul>
  </div>
  <div class="rider-card bg-gradient-to-br from-[#ff7a3c22] to-transparent border-[#ffb54766]">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Build &amp; Release</div>
    <div class="text-base font-semibold mt-1">Stabilize pre-merge</div>
    <ul class="text-xs rider-subtle mt-2 space-y-1">
      <li>TeamCity + Qodana as runners; Perforce-first integration.</li>
      <li>Faster feedback loops, protected mainline, game-specific pipelines.</li>
    </ul>
  </div>
  <div class="rider-card rider-card--accent">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">The shift</div>
    <div class="text-base font-semibold mt-1">From seat-sale to platform</div>
    <p class="text-xs rider-subtle mt-2">
      JetBrains is increasingly bought by the <em class="not-italic text-white">engineering platform</em> team, not just by individual coders.
    </p>
  </div>
</div>

<RiderFooter chapter="17 · Persona 3" index="17" total="26" />

---
layout: default
---

<ChapterBadge kicker="18 · Persona 4" label="R&D Management / CTO" />

# You're not buying a seat. <span class="rider-heat-text">You're buying a production control plane</span>.

<div class="mt-4 grid grid-cols-12 gap-6">
  <div class="col-span-7">
    <ExecutiveGrid />
  </div>
  <div class="col-span-5 flex flex-col gap-3">
    <div class="rider-card">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Purchase unit</div>
      <p class="text-base font-semibold mt-1">dotUltimate</p>
      <p class="text-xs rider-subtle mt-1">Rider · ReSharper · AI Pro · dotTrace · dotMemory · dotCover in one subscription.</p>
    </div>
    <div class="rider-card rider-card--accent">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Organizational outcome</div>
      <p class="text-sm mt-1">
        Unified toolchain · unified quality rules · unified AI governance · unified KPIs.
      </p>
    </div>
    <blockquote class="text-sm rider-subtle border-l-2 border-[#e73cff] pl-3 italic">
      dotUltimate handles seat procurement. The JetBrains stack handles platform standardization.
    </blockquote>
  </div>
</div>

<RiderFooter chapter="18 · Persona 4" index="18" total="26" />

---
layout: section
---

<div class="absolute inset-0">
  <div class="rider-grid-lines" />
  <div class="rider-glow-ring" style="width:460px;height:460px;background:#3ad9ff;bottom:-120px;right:-140px" />
</div>

<div class="relative z-10">
  <div class="text-[12px] uppercase tracking-[0.4em] rider-muted">Act IV</div>
  <h1 class="text-5xl font-bold mt-3 leading-tight">
    The <span class="rider-gradient-text">moat</span>, the <span class="rider-gradient-text">proof</span>,
    <br>and the <span class="rider-heat-text">road</span>.
  </h1>
  <p class="mt-4 rider-subtle max-w-[680px]">
    Why Rider's semantic foundation can't be reproduced by prompting a chat model, how deeply it already lives inside the existing stack, and how to adopt it without a big-bang rewrite.
  </p>
</div>

<RiderFooter chapter="Act IV" index="19" total="26" />

---
layout: default
---

<ChapterBadge kicker="19 · Semantic Context Moat" label="LLM sees tokens · Rider sees systems" />

# LLM sees tokens. <span class="rider-gradient-text">Rider sees a living system</span>.

<div class="mt-4 grid grid-cols-12 gap-6">
  <div class="col-span-7">
    <SystemVsToken />
  </div>
  <div class="col-span-5 flex flex-col gap-3">
    <div class="rider-card">
      <div class="text-sm font-semibold">Flow / Value Analysis</div>
      <p class="text-xs rider-subtle mt-1">Follow real execution paths — where values originate, flow, and can fail.</p>
    </div>
    <div class="rider-card">
      <div class="text-sm font-semibold">Dependency Graph</div>
      <p class="text-xs rider-subtle mt-1">Make blast radius explicit before the edit, not after the regression.</p>
    </div>
    <div class="rider-card rider-card--accent">
      <div class="text-sm font-semibold">Refactoring Safety</div>
      <p class="text-xs rider-subtle mt-1">Cross-symbol, cross-type, cross-project rewrites — not text replace.</p>
    </div>
    <div class="text-xs rider-muted italic mt-2">
      Example: rename across 50 files · safe change-signature across a Blueprint-aware solution.
    </div>
  </div>
</div>

<RiderFooter chapter="19 · Moat" index="19" total="26" />

---
layout: default
---

<ChapterBadge kicker="20 · Integration Proof" label="Unreal · Unity · Perforce · Godot" />

# Not a support matrix — <span class="rider-heat-text">a way of working</span>.

<div class="mt-5">
  <IntegrationProof />
</div>

<div class="mt-5 rider-card">
  <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">What this really says</div>
  <p class="text-sm mt-1">
    These integrations are not logo-wall checkmarks.
    They are
    <span class="rider-gradient-text font-semibold">deep embeddings into existing studio workflows</span> —
    version control, engine semantics, test runners, build pipelines.
  </p>
</div>

<RiderFooter chapter="20 · Proof" index="20" total="26" />

---
layout: default
---

<ChapterBadge kicker="21 · Adoption Roadmap" label="Team pilot → Standardization → Agentic platform" />

# Internally bold, <span class="rider-gradient-text">externally gradual</span>.

<div class="mt-5">
  <Roadmap />
</div>

<div class="mt-5 grid grid-cols-3 gap-3 text-xs rider-subtle">
  <div>Pilot: prove it on one team with pre-merge gate + engine-aware implementation.</div>
  <div>Standardize: chain Junie · MCP · Qodana · TeamCity · YouTrack into the default workflow.</div>
  <div>Platform: Rider as shared workbench; AI Enterprise governs; innovation teams try the frontier.</div>
</div>

<RiderFooter chapter="21 · Roadmap" index="21" total="26" />

---
layout: center
class: text-center
---

<div class="absolute inset-0">
  <div class="rider-grid-lines" />
  <div class="rider-glow-ring" style="width:540px;height:540px;background:#e73cff;top:-120px;left:-80px" />
  <div class="rider-glow-ring" style="width:460px;height:460px;background:#ff7a3c;bottom:-120px;right:-80px" />
</div>

<div class="relative z-10 max-w-[900px] mx-auto flex flex-col items-center gap-6">
  <span class="rider-chip">22 · Closing</span>
  <h1 class="text-5xl md:text-6xl font-bold leading-[1.05]">
    JetBrains Rider is not just<br>
    <span class="rider-gradient-text">where humans code</span>.
  </h1>
  <div class="text-3xl md:text-4xl font-semibold rider-heat-text leading-tight">
    It is where humans and agents build games together.
  </div>
  <div class="mt-6 flex items-center gap-4 text-sm uppercase tracking-[0.35em] rider-subtle">
    <span>Context</span>
    <span class="rider-bracket">·</span>
    <span>Execution</span>
    <span class="rider-bracket">·</span>
    <span>Control</span>
  </div>
  <div class="mt-6 rider-card">
    <p class="text-xs rider-muted">
      Start with a pilot team. Evaluate by workflow, not by plugin comparison.
    </p>
  </div>
</div>

<RiderFooter chapter="22 · Closing" index="22" total="26" />

<!--
Don't introduce new facts on the last slide. Crystallize value so the audience leaves able to repeat one sentence.
-->

---
layout: section
---

<div class="absolute inset-0">
  <div class="rider-grid-lines" />
  <div class="rider-glow-ring" style="width:360px;height:360px;background:#9a4bff;top:-80px;right:-80px" />
</div>

<div class="relative z-10">
  <div class="text-[12px] uppercase tracking-[0.4em] rider-muted">Appendix</div>
  <h1 class="text-5xl font-bold mt-3">Reference material.</h1>
  <p class="mt-4 rider-subtle max-w-[680px]">
    Product map, MCP Steroid deep dive, demo menu, KPI framework — keep in reserve and use for targeted Q&amp;A rather than up-front narrative.
  </p>
</div>

<RiderFooter chapter="Appendix" index="23" total="26" />

---
layout: default
---

<ChapterBadge kicker="23 · Appendix A1" label="Product Map / Capability Matrix" />

# Product × Capability × Role

<div class="mt-4">
  <ProductMap />
</div>

<div class="mt-4 rider-card">
  <div class="flex items-center justify-between">
    <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Entry of purchase</div>
    <div class="rider-chip">dotUltimate</div>
  </div>
  <p class="text-xs rider-subtle mt-1">Single subscription — Rider, ReSharper, AI Pro, dotTrace, dotMemory, dotCover.</p>
</div>

<RiderFooter chapter="23 · Appendix A1" index="23" total="26" />

---
layout: default
---

<ChapterBadge kicker="24 · Appendix A2" label="MCP Steroid Deep Dive" />

# Vision proof — <span class="rider-heat-text">position it precisely</span>.

<div class="mt-4 grid grid-cols-12 gap-6">
  <div class="col-span-7">
    <McpSteroidArch />
  </div>
  <div class="col-span-5 flex flex-col gap-2">
    <div class="rider-card">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">What it proves</div>
      <p class="text-sm mt-1">Giving agents full IDE runtime access measurably improves complex-task throughput.</p>
    </div>
    <div class="rider-card">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Where it shines</div>
      <p class="text-sm mt-1">Not completion — <em class="not-italic text-white">refactor, inspect, debug, test, UI state</em>.</p>
    </div>
    <div class="rider-card !border-[#ffb547aa]">
      <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">Caveat</div>
      <p class="text-sm mt-1">Independent research project — not an official JetBrains product commitment. Use to shape strategy, not to buy.</p>
    </div>
  </div>
</div>

<RiderFooter chapter="24 · Appendix A2" index="24" total="26" />

<!--
Good page to reply to "why not just use Cursor / Claude / Codex?" — but always lead back to the official main road.
-->

---
layout: default
---

<ChapterBadge kicker="25 · Appendix A3" label="Demo Menu" />

# Pick demos by audience, <span class="rider-gradient-text">not by muscle memory</span>.

<div class="mt-4">
  <DemoMenu />
</div>

<div class="mt-4 grid grid-cols-4 gap-3 text-[11px] rider-subtle">
  <div class="rider-card">For programmers: 01, 02</div>
  <div class="rider-card">For engine teams: 03</div>
  <div class="rider-card">For management: 04</div>
  <div class="rider-card">For innovation: 05, 06</div>
</div>

<RiderFooter chapter="25 · Appendix A3" index="25" total="26" />

---
layout: default
---

<ChapterBadge kicker="26 · Appendix A4" label="KPI Framework" />

# A shared <span class="rider-gradient-text">measurement vocabulary</span>.

<div class="mt-4">
  <KpiMatrix />
</div>

<div class="mt-4 rider-card rider-card--accent">
  <div class="text-[10px] uppercase tracking-[0.28em] rider-muted">How to use this</div>
  <p class="text-sm mt-1">
    Don't open with KPIs. But if you're moving toward a pilot or procurement, this page aligns everyone to the same definitions — so pilot outcomes are defensible.
  </p>
</div>

<RiderFooter chapter="26 · Appendix A4" index="26" total="26" />

---
layout: end
class: text-center
---

<div class="absolute inset-0">
  <div class="rider-grid-lines" />
  <div class="rider-glow-ring" style="width:480px;height:480px;background:#9a4bff;top:-120px;left:-80px" />
  <div class="rider-glow-ring" style="width:420px;height:420px;background:#ff3aa8;bottom:-120px;right:-80px" />
</div>

<div class="relative z-10">
  <div class="rider-chip mb-6">Thank you</div>
  <h1 class="text-5xl font-bold leading-tight">
    Build <span class="rider-gradient-text">games</span>.<br>
    Build them <span class="rider-heat-text">together</span>.
  </h1>
  <div class="mt-6 text-sm uppercase tracking-[0.3em] rider-subtle">
    Rider · dotUltimate · Junie · ACP · MCP · Qodana · TeamCity · AI Enterprise
  </div>
</div>
