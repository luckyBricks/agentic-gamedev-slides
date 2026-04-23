# 10｜Workflow 2｜Gameplay / Feature Implementation

## 页面目标
把 JetBrains 在 Unity、Unreal、Godot 三条路径上的引擎化上下文优势讲清楚。

## 建议 Slidev 布局
- 推荐布局：three-columns / engine-aware
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
三联屏海报：左 Unity（Prefab/Scene/Shader/Test/Profiler），中 Unreal（Reflection/Blueprint/Debugger/Test），右 Godot（C# + GDScript）。每栏都有 IDE 与引擎视窗的组合。

## 信息图 / 结构图提示词
三列卡片，每列四个关键词，底部统一一条结论：Engine-aware context makes AI useful, not just available.

## 页面文案提示词
- Unity：quick-fixes、tests、profiling、shader、assets workflow。
- Unreal：宏、Reflection、Blueprint insight、调试与测试。
- Godot：C# 与 GDScript 双栈的一致工作台。
- 结论：Rider 不是 generic editor，而是 engine-aware workspace。

## 可直接改写的 Slidev 草图
```md
---
layout: three-cols
---

# Workflow 2
## Gameplay / Feature Implementation

::col1::
### Unity
- quick-fixes
- tests
- profiling
- shaders

::col2::
### Unreal
- reflection
- Blueprints
- debugger
- tests

::col3::
### Godot
- C#
- GDScript
- navigation
- debugging
```

## 讲者备注
这页要多用“不是任何 LLM 都有的上下文”这句，但不要抽象讲，要具体落到 prefab、Blueprint、shader、tests 上。

## 事实锚点（不上屏，用于校正文案）
证据锚点：Unity 文档明确列出 quick-fixes、inspections、Unity tests、profiling、shader 支持；Unreal 落地页与文档强调 Blueprints、macros、Reflection、debugger、Automation Tests；Godot 由 Rider 官方游戏开发文档覆盖。
