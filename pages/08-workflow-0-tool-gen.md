---
layout: rider
chapter: amber
page: 8
---

<div class="h-full flex flex-col">
  <div class="flex items-start gap-3">
    <Kicker>Workflow 0</Kicker>
    <TipChip label="Alpha" class="!bg-sky-300 !text-white" />
  </div>
  <h1 class="!text-[40px] font-extrabold !leading-tight mt-3">
    Human Request → On-Demand Tool Generation
  </h1>
  <p class="mt-2 text-[15px] text-white/60">Many lightweight tools will be agent-generated on-the-fly in shared IDE context.</p>
  <div class="flex-1 mt-6 flex items-center">
    <WorkflowFlow :steps="[
      {label: 'Prompt', detail: 'Human request'},
      {label: 'Context', detail: 'Shared IDE activates'},
      {label: 'Skill', detail: 'Agent generates tool'},
      {label: 'Review', detail: 'Human verifies'}
    ]" accent="heat" />
  </div>
  <div class="mt-4 text-[14px] text-white/60">
    <TipChip /> Examples: naming convention checker · pre-upgrade dependency scan · Prefab / Blueprint impact analysis
  </div>
</div>

<!--
In the past we had to develop internal tools for every special need. In the future, many lightweight tools will be agent-generated on-the-fly in shared IDE context. ROI: reduce one-off scripts, manual plugins, and repetitive analysis.
-->
