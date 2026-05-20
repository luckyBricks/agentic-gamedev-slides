# 06b｜Agent Workbench — 多 agent，同一份 IDE 上下文

## 页面目标
把 page 5 那个抽象的「Human + Agent 共享 IDE」概念，落地成一张可视化、可购买、可治理的具体 UI 表面。Workbench 是 JetBrains 2025-12「Bring Your Own AI Agent」战略下、与 ACP / MCP / Junie 同代的家族成员，定位更高一层：**多 agent 同时在 IDE 内运行的统一驾驶舱**。本页要回答受众脑中一个反复出现的问题——「我同时想用 Junie 规划、Claude 实现、Codex 写测试，是不是要开三个工具？」答案：不用，全在 Rider 一个面板里。

## 建议 Slidev 布局
- 推荐布局：rider 内建 layout，左 4col 文案 + 右 8col 主视觉（cockpit + 3 条精选用例）
- 章节色：**amber**（与 06 / 07 形成 agent 段视觉聚类）；mandalaOpacity 0.5（介于 06 的 0.7 与 07 的 0.8 之间，形成明暗韵律）
- 风格关键词：官方驾驶舱、Experimental + Apache 2.0、可观测、可治理、多 agent tab、共享底座

## 主视觉提示词
一个 IDE 风格的 cockpit 面板：顶部 4 个 agent tab（Junie 高亮 / Claude / Codex / + ACP 占位），中间一段 active session 状态行，底部一行 5 个 「Shared IDE base」节点（PSI Index / Refactoring / Debugger / VCS · Perforce / Inspection）。Kicker「Official Cockpit」+ StatusChip「New」+ neutral chip「Experimental」三件同框。

## 信息图 / 结构图提示词
cockpit 主视觉下方追加 3 张迷你卡片（小字 ≥10px），分别对应：
- #1 Live Ops — 3 sessions on one crash · ~40 min 上下文重建节省
- #5 A/B Bake-off — Junie vs Claude on same refactor · CTO-grade fairness
- #8 Observatory — per-team sessions · MCP-tool 调用计数 · policy-gate 审计轨迹

## 页面文案提示词
- 主标题：Agent Workbench — Many agents, one IDE context
- 引子（小字 italic）：直接引用官方 tagline「Run and manage AI coding agents — Codex, Claude, Junie, and more — directly inside your IDE.」
- 3 条价值 bullet：
  - Persistent sessions — agent state survives restarts and hand-offs
  - Automatic code context — every tab sees the same PSI, refactor, debugger
  - Multi-agent in one cockpit — Junie plans · Claude implements · Codex tests
- 区分注脚：Workbench = human cockpit · MCP Steroid = agent runtime · 互补不竞争

## 可直接改写的 Slidev 草图
```md
---
layout: rider
chapter: amber
page: '6b'
mandalaOpacity: 0.5
---
<div class="grid grid-cols-12 gap-5 h-full items-center">
  <div class="col-span-4">
    <Kicker>Official Cockpit</Kicker>
    <StatusChip label="New" />
    <h1>Agent Workbench — Many agents, one IDE context</h1>
    <!-- 3 bullets + 注脚 -->
  </div>
  <div class="col-span-8">
    <AgentWorkbenchCockpit />
    <!-- 3 mini use-case cards -->
  </div>
</div>
```

## 讲者备注
Workbench 是 page 5 那个「共享驾驶舱」概念的具体 UI 形态。讲完三个 bullet 后立刻把 Workbench 与 MCP Steroid 的关系点透——Workbench 是人类驾驶舱（看得到、可治理），Steroid 是 agent 运行时（agent 自合成 skill 的实验场）。两者互补不竞争，避免管理层听到「另一个 AI 产品」时心生疲劳。Experimental 标签必须主动提，并用「Apache 2.0 + JetBrains s.r.o. + IntelliJ Platform 同源」三个锚点作为信任替代——不引用下载量。

## 事实锚点（不上屏，用于校正文案）
- 插件 ID 30926，vendor JetBrains s.r.o.，状态 Experimental，许可 Apache 2.0
- 同家族成员：AgentBridge (30415) / Agent GUI (30428) / Agent CLI (31117) / Junie (26104)
- 战略背景：JetBrains 2025-12 公告「Bring your own AI agent to JetBrains IDEs」、2026-04「Our 2026 Direction: AI and classic workflows in JetBrains IDEs」
- 与 MCP Steroid (30019) 的关系：Workbench = 人类驾驶舱；Steroid = agent 运行时——互补
- 官方 tagline：「Run and manage AI coding agents — Codex, Claude, Junie, and more — directly inside your IDE.」
