---
layout: rider
chapter: violet
page: 19
---

<div class="grid grid-cols-12 gap-8 h-full items-center">
  <div class="col-span-5">
    <Kicker>技术差异化</Kicker>
    <h1 class="!text-[40px] font-extrabold !leading-tight mt-4">
      语义上下文<br>才是Agent护城河
    </h1>
    <div class="mt-6 space-y-3 text-[15px] leading-relaxed text-white/90">
      <p>❏ <strong>Flow / Value Analysis</strong> — 沿真实执行路径追踪值</p>
      <p>❏ <strong>Dependency Graph</strong> — 可视化项目内的变更传播</p>
      <p>❏ <strong>Refactoring Safety</strong> — 跨 symbol、跨类型、跨边界的安全变更</p>
    </div>
    <p class="mt-6 text-[15px] text-white/72 italic">
      LLM 看到的是 token。<Highlight>Rider 看到的是一个有机的代码系统。</Highlight>
    </p>
  </div>
  <div class="col-span-7 flex items-center justify-center">
    <SystemVsToken />
  </div>
</div>

<!--
这是讲技术护城河的一页。用具体例子展开：跨 50 个文件 rename、安全 change signature。没有 IDE 原生语义理解，这些是任何 LLM 都无法复刻的。
-->
