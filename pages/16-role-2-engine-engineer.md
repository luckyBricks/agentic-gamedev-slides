---
layout: rider
chapter: violet
page: 16
---

<div class="h-full flex flex-col">
  <Kicker>角色 2</Kicker>
  <h1 class="!text-[40px] font-extrabold !leading-tight mt-3">
    Engine / Framework / Rendering Engineer
  </h1>
  <div class="flex-1 mt-5">
    <PersonaCards :gradient-bg="true" :personas="[
      {title: 'Engine Engineer', role: '核心用户', bullets: ['代码库范围内的架构级可视性', '大规模安全 refactor — 不是文本替换', '对 macro 与 reflection 的 engine-aware 语义理解', '降低复杂系统变更风险'], stack: ['C++', 'ReSharper C++', 'Unreal', 'Rider'], tone: 'violet'}
    ]" />
  </div>
  <div class="mt-4 text-[14px] text-white/60">
    <TipChip /> 面向资深工程师，把「AI 生产力」替换成「降低复杂系统变更风险」。
  </div>
</div>

<!--
专业游戏开发工具真正的护城河在这一角色上最清晰。这类工程师缺的不是 completion — 而是项目级可视性、依赖透明度和安全 refactor。
-->
