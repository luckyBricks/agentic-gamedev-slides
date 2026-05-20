---
layout: rider
chapter: cyan
page: 15
---

<div class="h-full flex flex-col">
  <Kicker>角色 1</Kicker>
  <h1 class="!text-[40px] font-extrabold !leading-tight mt-3">
    Gameplay Programmer + Technical Artist
  </h1>
  <div class="flex-1 mt-5">
    <PersonaCards :gradient-bg="true" :personas="[
      {title: 'Gameplay Programmer', role: '核心用户', bullets: ['更快的 gameplay 实现', '更稳定的 debug 循环', '更短的验证回路', 'Engine-aware 代码生成', 'Workbench 中同时挂 Junie + Claude'], stack: ['Unity', 'Unreal', 'C#', 'C++'], tone: 'cyan'},
      {title: 'Technical Artist', role: '核心用户', bullets: ['Shader 与 material 支持', 'Engine 内 context 感知', '视觉问题定位', '渲染管线调试'], stack: ['Shader', 'HLSL', 'Materials', 'VFX'], tone: 'pink'}
    ]" />
  </div>
</div>

<!--
这两类角色能立刻感受到效率提升。建议搭配一个 Unity 或 Unreal 的 shader/test/debug 现场 demo。他们需要的是 engine-context-aware 的 AI，而不是通用聊天助手。
-->
