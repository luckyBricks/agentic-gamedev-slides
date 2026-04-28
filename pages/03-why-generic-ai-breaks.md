---
layout: rider
chapter: magenta
page: 3
transition: slide-up 
---

<div class="grid grid-cols-12 gap-8 h-full items-center">
  <!-- Left: narrative -->
  <div class="col-span-4 flex flex-col gap-5">
    <div>
      <Kicker>The Problem</Kicker>
      <h1 class="!text-[36px] font-extrabold !leading-[1.1] mt-3">
        通用 AI 为什么<br>在 GameDev 中失灵
      </h1>
    </div>
    <p class="text-[13.5px] text-white/65 leading-relaxed">
      文件级的 AI 能生成语法正确的代码 — 但它看不到 engine 语义、资产依赖图，也看不到决定一次变更能否真正交付的交付约束。
    </p>
    <div class="space-y-2 text-[13px]">
      <div class="flex items-center gap-2 text-white/55">
        <span class="text-[#ff4455] font-bold">✗</span>Blueprint / Prefab 执行图
      </div>
      <div class="flex items-center gap-2 text-white/55">
        <span class="text-[#ff4455] font-bold">✗</span>Engine reflection 与 macro 语义
      </div>
      <div class="flex items-center gap-2 text-white/55">
        <span class="text-[#ff4455] font-bold">✗</span>Perforce changelist 与文件锁 context
      </div>
      <div class="flex items-center gap-2 text-white/55">
        <span class="text-[#ff4455] font-bold">✗</span>Build-graph 性能回归信号
      </div>
    </div>
    <div class="border-l-2 border-[#FF0A67] pl-3 text-[13px] text-white/60 leading-snug">
      GameDev 需要 <Highlight>system-aware</Highlight> 的 AI —<br>而不是只看单文件的 AI。
    </div>
    <div class="flex items-center gap-2 text-white/35 text-[11.5px] tracking-wide">
      <img src="/docs/brand-assets/Rider/Rider_icon.svg" class="h-4 opacity-50" />
      IDE 原生 context 才是答案
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
不要贬低通用 AI — 而是指出它是为通用编程任务而优化的，而游戏工作室需要的是 engine-aware、asset-aware、pipeline-aware 的工程 context。这是 IDE 原生能力的价值起点。
-->
