---
layout: rider
chapter: amber
page: '13b'
mandalaOpacity: 0.55
---

<div class="h-full flex flex-col pr-2">
  <div class="flex items-center gap-3">
    <Kicker>Workflow 6</Kicker>
    <span class="rider-chip rider-chip--tag">Multi-Agent</span>
    <StatusChip label="New" />
  </div>
  <h1 class="!text-[34px] font-extrabold !leading-[1.06] mt-3">
    Multi-Agent Bake-off &amp; Follow-the-Sun
  </h1>
  <p class="mt-2 text-[13px] text-white/65 italic">
    Three patterns the Workbench unlocks — none of them existed before persistent multi-agent sessions.
  </p>
  <div class="flex-1 mt-4 flex items-center">
    <MultiAgentTimeline />
  </div>
  <div class="mt-3 text-[11.5px] leading-relaxed text-white/55">
    <TipChip /> Granularity of multi-agent collaboration drops from "open another tool" to <Highlight>tab switch</Highlight>. Workbench is the IDE surface that makes that possible.
  </div>
</div>

<!--
Workflow 6 不是又一个工作流细化——它是 Workbench 独有的「多 agent 协作模式」。三条 lane 互不重叠：
1) A/B Bake-off：同一 IDE context 内并排跑两个 agent 做公平对比——CTO 决策 license 时要的就是这种证据，不是供应商 marketing benchmark
2) Follow-the-Sun：persistent session 让 Tokyo 下班留的 plan tree、tool 调用、inspection 修复全部留给 Helsinki 次日接手——这是 agent 协作第一次真正支持跨时区
3) Junie + Claude 编排：把多 agent 协作的最小颗粒降到「tab 切换」级别——之前需要开三个工具、来回粘贴 stack；现在是同一面板里挑哪个 plan 更接近 studio coding style

讲完这三条要强调：这些工作流的前提是「共享同一份 IDE 真实 context」，离开 Workbench 都跑不通。
-->
