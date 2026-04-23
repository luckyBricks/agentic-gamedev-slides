# 19｜Semantic Context Moat｜Rider 对 AI 的真正赋能

## 页面目标
深入浅出解释 flow analysis、dependency graph、refactoring safety，为何它们不是任何 LLM 都能替代的。

## 建议 Slidev 布局
- 推荐布局：moat / layered comparison
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
一个多层剖面图：最表层是 token 文本，中层是 symbols / PSI / AST，下一层是 dependency graph 与 project model，最深层是 runtime、tests、debugger、quality gate。像技术护城河剖面。

## 信息图 / 结构图提示词
左边 Token View，右边 System View。把 Flow Analysis、Dependency Graph、Refactoring Safety 放在 System View 下方。

## 页面文案提示词
- Flow / Value Analysis：沿真实执行路径理解值从哪里来、流到哪里去、哪里会出错。
- Dependency Graph：把项目依赖与变更波及面显式可视化。
- Refactoring Safety：不是文本替换，而是跨符号、跨类型、跨工程边界的安全变更。
- 结论：LLM sees tokens. Rider sees the codebase as a living system.

## 可直接改写的 Slidev 草图
```md
---
layout: two-cols-header
---

# Semantic Context Moat

::left::
- Flow / Value Analysis
- Dependency Graph
- Refactoring Safety

::right::
<SystemVsTokenDiagram />
```

## 讲者备注
这是技术护城河页。讲解时务必举一个“rename across 50 files”和“safe change signature”的例子，让抽象概念落地。

## 事实锚点（不上屏，用于校正文案）
证据锚点：Rider 官方文档涵盖 Value Analysis、dependency exploration、solution-wide refactorings；Rider for Unreal 页面强调 refactorings 会更新 Blueprints、metadata、build files。
