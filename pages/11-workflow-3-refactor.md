---
layout: rider
chapter: violet
page: 11
---

<div class="grid grid-cols-12 gap-8 h-full items-center">
  <div class="col-span-5">
    <Kicker>Workflow 3</Kicker>
    <h1 class="!text-[40px] font-extrabold !leading-tight mt-4">
      Refactor / Engine Upgrade / API Migration
    </h1>
    <div class="mt-6 space-y-3 text-[15px] leading-relaxed text-white/90">
      <p>❏ AI drafts the migration — <Highlight>Rider ensures it's safe</Highlight></p>
      <p>❏ Solution-wide analysis, dependency graph, conflict preview</p>
      <p>❏ Refactorings that update Blueprints, metadata, and build files</p>
      <p>❏ Human review before merge</p>
    </div>
    <div class="mt-4 text-[14px] text-white/60">
      <TipChip /> Migration speed matters — post-migration defect leakage matters more.
    </div>
  </div>
  <div class="col-span-7 flex items-center justify-center">
    <WorkflowFlow :steps="[
      {label: 'Generate', detail: 'AI drafts changes'},
      {label: 'Analyze', detail: 'Whole-project impact'},
      {label: 'Apply', detail: 'Safe refactorings'},
      {label: 'Review', detail: 'Human approval'}
    ]" accent="violet" />
  </div>
</div>

<!--
Give a concrete example: from bulk rename to cross-project change signature to engine upgrade compatibility adjustments. AI gives speed; Rider gives the safety boundary.
-->
