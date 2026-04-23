# 06｜Official Path｜ACP + Built-in MCP + Junie

## 页面目标
把正式主产品路径讲成可落地能力，而不是实验性概念。

## 建议 Slidev 布局
- 推荐布局：timeline / three-lane
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，尽量保持“左文右图”或“中心结构图 + 少量文案”的演讲风格。

## 主视觉提示词
三条发光轨道并行：ACP Registry（发现与接入 agent）、MCP Server（外部客户端调用 IDE 工具）、Junie（在 IDE/终端/CI 中执行多步任务）。三轨最终汇聚到 Rider。

## 信息图 / 结构图提示词
用一个三泳道图：Discover agents / Connect tools / Execute tasks。每条泳道配一句简洁解释。

## 页面文案提示词
- ACP Registry：让团队在 IDE 里发现并接入 agent，不被单一供应商绑定。
- Built-in MCP Server：让 Claude、Cursor、Codex、VS Code 等外部客户端直接调用 IDE 工具。
- Junie：让 agent 能计划并执行复杂多步任务，并运行测试或终端命令。

## 可直接改写的 Slidev 草图
```md
---
layout: two-cols-header
---

# Official Path

::left::
- ACP Registry：接入更多 agent
- Built-in MCP Server：向外暴露 IDE 工具
- Junie：执行复杂多步任务

::right::
<ThreeLaneDiagram />
```

## 讲者备注
这页不要混入 MCP Steroid。要明确：这里讲的是 JetBrains 官方主干能力，是能采购、能推广、能治理的能力。

## 事实锚点（不上屏，用于校正文案）
证据锚点：Rider 2026.1 官方新特性包含 built-in ACP Registry；Rider 文档说明 2025.2 起内置 MCP Server；Junie 文档说明其可规划并执行复杂多步任务、运行测试或终端命令。
