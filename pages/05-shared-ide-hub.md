---
layout: rider
chapter: violet
page: 5
---

<div class="grid grid-cols-12 gap-8 h-full items-center">
  <div class="col-span-5">
    <Kicker>核心概念</Kicker>
    <h1 class="!text-[40px] font-extrabold !leading-tight mt-4">
      Rider = Human + Agent<br>共享的 IDE
    </h1>
    <div class="mt-6 space-y-3 text-[15px] leading-relaxed text-white/90">
      <p>❏ <strong>Shared Context</strong> — 双方看到相同的项目语义</p>
      <p>❏ <strong>Shared Tooling</strong> — refactoring、tests、debugger、VCS 共享同一套基础设施</p>
      <p>❏ <strong>Shared Control</strong> — 敏感操作可审计、可中止、可撤回</p>
    </div>
  </div>
  <div class="col-span-7 flex items-center justify-center">
    <SharedIdeHub />
  </div>
</div>

<!--
强调「shared」这个词。真正的差异不在于能不能接一个 agent，而在于 agent 是否复用 IDE 真实的 context 与工具链 — 而不是一份脱节的副本。
-->
