# 27（A5）｜附录 — Agent Workbench Use Cases

## 页面目标
作为附录页给售前 / 管理层 / 平台 Owner 在 Q&A 提供弹药库——把 Workbench 在游戏研发场景下的 7 条具体用例铺开成「角色 × 工作流」矩阵。主线讲解中不主动翻到，遇到具体场景问题（"我们的 tech artist 怎么用？" "QA 怎么接入？" "CTO 想看 governance 凭据"）时翻出来直接回答。

## 建议 Slidev 布局
- 推荐布局：rider 内建 layout，标题区 + 7 列网格主体
- 章节色：**amber**（延续 06b / 07 / 13b 的 agent 段聚类，并向 A6 之后的 green 段过渡）；mandalaOpacity 0.45
- 风格关键词：Q&A 弹药、Roles × Workflows 矩阵、信息密度高但单格 ≤18 字

## 主视觉提示词
WorkbenchUseCaseMatrix 组件：横向 7 列（每列对应一个角色 + 一个核心工作流），每格内含：
- 顶部：角色名 + 角色子标签（如 "Pairing" / "Kernel refactor"）+ 角色 icon
- 中段：workflow kicker（小字大写描色）+ 一句核心标题
- 描述：≤18 字解释
- 底部：参与该用例的 agent icon row（最多 3 个）

每列章节色按角色对应：cyan / violet / amber / amber / green / pink / amber。

## 信息图 / 结构图提示词
单格内严格 4 层：role header → workflow kicker → 1-line title → 1-line detail → agent icons。整页 7 格在 16:9 canvas 内紧凑排布，单格最小高度 210px。

## 页面文案提示词
7 条用例文案（按 reading order）：
1. **Gameplay × Tech Artist · Pairing** — Shader pairing：Two sessions, one PSI — Tech artist · Junie inspects shader GC; programmer · Claude rewires C# binding. Handoff = tab switch.
2. **Engine Engineer · Kernel refactor** — Render-graph rewrite：Refactor + tests in parallel — Session A pauses at unsafe casts; session B writes regression tests against the new interface.
3. **Tech Lead · Milestone refactor** — Refactor Swarm：One agent · many branches — Each member runs the same DOTS-migration agent in their branch. Lead compares inspection-delta trends.
4. **AI Platform Engineer · Skill Factory** — Curate skills：Workbench observes · Steroid forges — Watch which Steroid-synthesised skills are worth promoting to a studio-approved MCP server tool.
5. **QA Engineer · Fuzz triage** — Fuzz → triage → PR：One pane, full chain — Tab A fuzzes; tab B Junie consumes the dotTrace snapshot, writes minimal repro; tab C opens PR.
6. **CTO · R&D · Observatory** — Workbench observatory：Active sessions · policy gates — Active sessions per team · MCP-tool call counts · sessions tripping policy gates — audit trail for free.
7. **Live Ops · SRE · Hotfix（备份 demo 主线）** — Live Ops crash：3 sessions · 40 min saved — Junie reads telemetry+dotTrace · Claude finds usages · Codex writes repro test. Shared symbol index.

## 可直接改写的 Slidev 草图
```md
---
layout: rider
chapter: amber
page: 'A5'
mandalaOpacity: 0.45
---
<div class="h-full flex flex-col">
  <Kicker>附录 A5</Kicker>
  <h1>Roles × Workflows — where Workbench earns its keep</h1>
  <WorkbenchUseCaseMatrix />
</div>
```

## 讲者备注
这页只在 Q&A 翻——主线讲解一律不展开，避免信息过载。每条用例的逻辑共性：「离开 Workbench 跑不通」（要么因为 multi-agent 需要共享 IDE context，要么因为 persistent session 跨时段 / 跨人员协作）。在售前 / 管理层 / 平台 Owner 问到具体场景时，按对应那一格直接答；Live Ops 是 demo 主线的备份——售前 demo 需要重新铺垫上下文时讲它。

## 事实锚点（不上屏，用于校正文案）
- 每条用例都基于「只有共享同一 IDE 真实 context 的 Workbench 才能跑通」前提
- AI Platform 双轨：Workbench 用于观察，MCP Steroid 用于 agent 自合成 skill
- CTO Observatory：Workbench + ACP Registry 提供的 telemetry / 调用计数 / policy-gate 触发列表是合规审计的免费副产品
- Follow-the-sun 模式：persistent session 是支撑 Tokyo / Helsinki / SF 三班接力的必要条件
- Refactor Swarm：Workbench 与 ACP Registry 配合保证全员只能选 studio-approved agent，避免「员工乱接外部 agent」风险
