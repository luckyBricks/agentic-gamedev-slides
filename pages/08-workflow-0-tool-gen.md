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
    人类需求 → 按需生成工具
  </h1>
  <p class="mt-2 text-[15px] text-white/60">很多轻量工具会由 agent 在共享 IDE context 中即时生成。</p>
  <div class="flex-1 mt-6 flex items-center">
    <WorkflowFlow :steps="[
      {label: 'Prompt', detail: '人类需求'},
      {label: 'Context', detail: 'Shared IDE 激活'},
      {label: 'Skill', detail: 'Agent 生成工具'},
      {label: 'Review', detail: '人类校验'}
    ]" accent="heat" />
  </div>
  <div class="mt-4 text-[14px] text-white/60">
    <TipChip /> 示例：命名规范检查 · 升级前依赖扫描 · Prefab / Blueprint 影响分析
  </div>
</div>

<!--
过去我们为每个特殊需求都得开发内部工具。未来，很多轻量工具会由 agent 在共享 IDE context 中即时生成。ROI：减少一次性脚本、手工插件与重复分析。
-->
