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
      <span class="rounded border border-white/18 px-2 py-0.5 text-[11px] font-semibold text-white/62">Profiling 闭环</span>
    </div>
    <h1 class="!text-[35px] font-extrabold !leading-[1.06] mt-4">
      复杂性能问题的诊断<br>在dotUltimate内闭环
    </h1>
    <div class="mt-4 rider-card rider-card--dark text-[12px] leading-relaxed text-white/64">
      <strong class="text-white/90">支持边界：</strong>
      原生 Engine profiler 仍是 GPU、渲染、资产和遥测的事实来源。
    </div>
  </div>
  <div class="col-span-8">
    <ProfilerWorkflowMatrix />
  </div>
</div>
<div class="-mb-1 text-[12.5px] leading-relaxed text-white/62">
  <TipChip /> 原生 profiler + JetBrains profiler：运行时证据变成代码导航、托管内存诊断、测试覆盖率，以及 CI 回归 gate。
</div>
</div>

<!--
承诺要精准。Unity/Unreal 的原生 profiler 仍是 engine telemetry、GPU、渲染、资产、原生内存的权威来源。JetBrains 工具承接源码级跟进：dotTrace 用于 Unity 和 Unreal 性能 profiling，dotMemory 用于 managed/.NET 内存，dotCover 只覆盖 managed 或 Unity-test 中支持的覆盖率场景。

Unity Profiler / Unreal Insights 找到运行时症状；dotTrace / dotMemory / dotCover 把它转化为源码级诊断与回归控制。
-->
