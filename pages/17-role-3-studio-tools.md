---
layout: rider
chapter: green
page: 17
---

<div class="h-full flex flex-col">
  <Kicker>角色 3</Kicker>
  <h1 class="!text-[36px] font-extrabold !leading-tight mt-3">
    Studio Tools / AI Platform / QA / Build &amp; Release
  </h1>
  <div class="flex-1 mt-5">
    <PersonaCards :gradient-bg="true" :personas="[
      {title: 'Studio Tools & AI Platform', role: '流程负责人', bullets: ['把 Rider 变成内部 agent 与 skill 的基座', '把工作室专属工具统合到同一平台', '治理 agent 能力与模型访问权限'], stack: ['MCP', 'ACP', 'Junie', 'AI Enterprise'], tone: 'amber'},
      {title: 'QA & Build / Release', role: '流程负责人', bullets: ['把测试、覆盖率、静态分析整合到同一条流水线', '通过合入前 quality gate 缩短反馈闭环', '通过自动化校验保护主干稳定'], stack: ['Qodana', 'TeamCity', 'dotCover', 'Perforce'], tone: 'cyan'}
    ]" />
  </div>
</div>

<!--
最关键的一句话：JetBrains 不只是卖给 coder — 它也卖给工作室的平台团队。价值范围从编程延伸到交付基础设施。AI Platform 在 Agent Workbench 中策展 studio-approved agents——Workbench 是「观察驾驶舱」、MCP Steroid 是「skill 合成实验场」，两条轨并行：前者治理可见的合规 agent，后者孵化高价值的 skill 候选。
-->
