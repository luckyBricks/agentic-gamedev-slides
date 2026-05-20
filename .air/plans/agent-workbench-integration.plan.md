# 计划：将 Agent Workbench (插件 30926) 融入 Slidev deck

## Context

`https://plugins.jetbrains.com/plugin/30926-agent-workbench` 是 JetBrains 官方刚发布的实验性插件（Apache 2.0），其官方描述与定位：

> **"Run and manage AI coding agents — Codex, Claude, Junie, and more — directly inside your IDE."**
> Tagline: persistent chat sessions + automatic code context

它是 JetBrains "Bring Your Own AI Agent" 战略（2025-12）下、与 ACP / MCP / Junie / AgentBridge / Agent CLI / Agent GUI 同代的家族成员，定位更高一层：**多 agent 同时在 IDE 内运行的统一驾驶舱**。它把抽象的 "Shared IDE Hub" 概念（当前 page 5）落地成具体可见的 UI 表面，并把 page 6 的 ACP+MCP+Junie 三条泳道串成一个真正可用的容器。

deck 核心论点 "**Rider = Human + Agent 共享 IDE / agentic gamedev 中枢**"，需要把 Workbench 纳入作为 2026 年最新、官方背书、与论点完美对齐的证据锚点。

参考事实：
- 插件 ID 30926，vendor **JetBrains s.r.o.**，状态 **Experimental**，Apache 2.0
- 同家族：AgentBridge (30415) / Agent GUI (30428) / Agent CLI (31117) / Junie (26104)
- 战略背景：[Bring your own AI agent (2025-12)](https://blog.jetbrains.com/ai/2025/12/bring-your-own-ai-agent-to-jetbrains-ides/) · [2026 Direction](https://blog.jetbrains.com/ai/2026/04/our-2026-direction-ai-and-classic-workflows-in-jetbrains-ides/)
- 区别于 MCP Steroid (30019)：Workbench = 人类驾驶舱；Steroid = agent 运行时。互补不竞争。

## Goal

**已锁定 3 张新页 + 5 处既有页轻量增量**：

1. 核心叙事页 `pages/06b-agent-workbench.md` — Workbench 作为 Shared IDE 的 UI 落地
2. 新工作流页 `pages/13b-workflow-6-multi-agent.md` — Workflow 6 "Multi-Agent Bake-off & 跨时区接力"
3. 用例附录页 `pages/A5-workbench-use-cases.md` — 剩余 7 条 gamedev 用例矩阵
4. 5 处既有工作流/角色页轻量增量

## Approach（已锁定）

deck 从 22 主 + 4 附录 = 26 页扩为 **24 主 + 5 附录 = 29 页**。

| # | 新页 | slides.md 位置 | 章节色 | 角色 |
|---|---|---|---|---|
| 1 | `pages/06b-agent-workbench.md` | line 65 (06 后 / 07 前) | **amber** mandalaOpacity 0.5 | 驾驶舱核心叙事 |
| 2 | `pages/13b-workflow-6-multi-agent.md` | line 92 (13 后 / 14 前) | **amber** | Workflow 6：多 agent 协作模式 |
| 3 | `pages/A5-workbench-use-cases.md` | line 144 末尾追加 | **amber → green** | 用例附录（Q&A 弹药） |

叙事链：
> 05 概念 → 06 协议 → **06b 驾驶舱** → 07 前沿
> 08~13 工作流 1-5 → **13b 工作流 6** → 14 角色地图
> A4 KPI → **A5 用例库**

设计理由：
- 06 已讲清"三条泳道是什么"，**06b 回答"在哪里被使用"**
- 06b 与 07 对仗："官方 cockpit ↔ 前沿 skill factory"
- 13b 紧贴 5 个 workflow 后、role map 前，让 Workbench 独有的工作流（A/B / 跨时区 / 并发编排）与前 5 个并列
- A5 给售前/管理层 Q&A 提供弹药库
- amber 段连贯，mandala 色调形成 agent 段视觉聚类

## File Changes

### 新增

| 文件 | 类型 | 说明 |
|---|---|---|
| `pages/06b-agent-workbench.md` | Create | 核心页：cockpit + 4 agent tabs + persistent session/auto context；右下 3 条精选用例 (#1/5/8) |
| `pages/13b-workflow-6-multi-agent.md` | Create | 工作流页：3 列时间轴 — Bake-off / 跨时区 / Junie+Claude 编排 (#4/5/10) |
| `pages/A5-workbench-use-cases.md` | Create | 附录页：7 条用例 "角色 × 工作流" 矩阵 (#2/3/6/7/8/9 + #1 备份) |
| `docs/06b-agent-workbench.md` | Create | 中文 brief（7 段式） |
| `docs/13b-workflow-6-multi-agent.md` | Create | 中文 brief |
| `docs/27-appendix-workbench-use-cases.md` | Create | 中文 brief |

### 修改

| 文件 | 位置 | 改动 |
|---|---|---|
| `slides.md` | line 65 / 92 后、144 末尾 | 插入 3 个 `--- src: ... ---` 块 |
| `pages/05-shared-ide-hub.md` | Shared Control 行 | 末尾加 "— 由 Agent Workbench 提供具体表面" |
| `pages/06-acp-mcp-junie.md` | line 51 StatusChip | 改为 "Rider 2026.1 + Agent Workbench — 多 agent 驾驶舱已就绪" |
| `pages/15-role-1-programmer.md` | bullets | gameplay programmer 行加 "Workbench 中同时挂 Junie + Claude" |
| `pages/17-role-3-studio-tools.md` | 讲者备注 | "AI Platform 在 Workbench 中策展 studio-approved agents" |
| `pages/18-role-4-cto.md` | bullets | "Workbench 提供 agent 使用 telemetry → 治理可见性" |
| `pages/A1-product-map.md` | ProductMap 数据 | AI 行增加 Agent Workbench 项 |

### 新增组件

| 文件 | 说明 |
|---|---|
| `components/AgentWorkbenchCockpit.vue` | 06b 主视觉：4 agent tab + 共享 IDE 底座 (CSS grid + brand-assets) |
| `components/MultiAgentTimeline.vue` | 13b 主视觉：3 列时间轴 |
| `components/WorkbenchUseCaseMatrix.vue` | A5 用例矩阵：行=角色，列=工作流 |
| `components/ProductMap.vue` | 数据修改：加入 Workbench |

## Slide 内容草案：06b-agent-workbench

- 章节色 **amber**，mandalaOpacity 0.5
- Kicker: **官方驾驶舱** · StatusChip: New · Experimental · Apache 2.0
- 标题：**Agent Workbench — 多 agent，同一份 IDE 上下文**
- 引子：「在 IDE 内运行 Codex · Claude · Junie 等多个 agent，会话持久化 · 代码上下文自动接入」
- 主视觉：左 4col 文案 + 右 8col cockpit (4 agent tab → 共享底座 PSI/Refactor/Debugger/VCS/Inspection)
- 价值三条：persistent sessions / automatic code context / multi-agent in one cockpit
- 右下 3 条精选用例：#1 #5 #8（小字）

口播稿（≤90s）：
> Workbench 是 page 5 那个"共享驾驶舱"概念的具体 UI 形态。它解决一个被反复问到的问题——"我同时想用 Junie 规划、Claude 实现、Codex 写测试，是不是要开三个工具？"答案：不用，全在 Rider 一个面板里。

## 面向 GameDev 的高密度用例清单（10 条）

每条都基于 "只有共享同一 IDE 真实 context 的 Workbench 才能跑通" 这一前提。

### 1. Live Ops 崩溃响应（06b 上屏 + A5 售前 demo 主线）
线上崩溃。Workbench 同时拉 3 session：A Junie 读 telemetry + dotTrace 规划 hotfix；B Claude `find_usages` 搜历史相似回归；C Codex 写复现单测。共享 `MatchService` 符号索引，省 ~40min 上下文重建。

### 2. 里程碑前 Refactor Swarm（A5 / Workflow 3 增强）
Unity DOTS 升级前，tech lead 给每位组员 feature 分支开 1 个 session 跑同一 migration agent。Lead 横向比较各分支 "inspection delta 趋势"。ACP Registry 策略保证全员只能选 studio-approved agent。

### 3. Tech Artist × Programmer Shader 配对（A5 / Role 1 增强）
Tech artist session: Junie 查 shader 热循环 GC 分配；Programmer session: Claude 改消费 shader 的 C# 端。共享 PSI → 两 agent 看到同一份 shader-bind 元数据。Handoff = tab 切换，不是粘贴 stack。

### 4. 跨时区接力 R&D（13b 时间轴）
Tokyo tech artist 下班前留 in-progress Workbench session 跑 tools-pipeline refactor；Helsinki 次日打开同 session — Junie 的 plan tree、tool 调用记录、inspection 修复全在。Persistent session 首次让 agent 协作支持真正的 follow-the-sun。

### 5. Agent A/B Bake-off（06b 上屏 + 13b 时间轴）
引擎工程师在 Workbench 并排跑 Junie 与 Claude 改一个 UPROPERTY 注解大改造（~200 file）。在同一 IDE 公平 bake-off — 不是供应商 marketing benchmark。CTO 拿数据决定企业级 license。

### 6. AI Platform "Skill Factory" 双轨（A5 / Role 3 增强）
Workbench（官方）= 人类观察 agent 的窗口；MCP Steroid（前沿）= agent 自合成 skill 的运行时。AI Platform engineer 在 Workbench 筛选哪些 Steroid 合成的 skill 值得提升为官方 MCP server 工具。

### 7. QA Fuzz Triage（A5 / Workflow 4 增强）
Workbench tab A 跑 fuzz → 崩溃自动捕 dotTrace snapshot → tab B 自动开 Junie 接住 snapshot 跑 inspection + 写最小复现测试 → tab C 提 PR 触发 TeamCity gate。整条链路在一个 Workbench 视图留痕。

### 8. R&D Workbench Observatory（06b 上屏 + A5）
CTO 视角附录：每团队 active sessions、调用的 MCP tools 计数（refactor/inspection-fix/test-run）、触发 policy gate 的 session 列表。企业风控官要的 agent 审计轨迹 = Workbench + ACP Registry 白送。

### 9. Engine Engineer 双 agent 内核改造（A5 / Role 2 增强）
渲染引擎工程师跨 200 文件改 render graph 接口。Workbench: session A agent 跑 refactor 在不安全转换点 pause；session B agent 写新接口单测和回归。共享 PSI 保证两 session 看到的 "新接口" 一致。

### 10. Junie + Claude 编排（13b 时间轴 / Workflow 1 增强）
Issue→Plan 阶段：Junie 擅长跨文件 plan，Claude 擅长长链推理。Workbench 让两者在不同 tab 各跑同一 issue 的 plan，让人类挑出更接近 studio coding style 的方案。多 agent 协作最小颗粒 = tab 切换。

## Critical Files to Reference

实施时优先复用既有原语：
- 章节色 / mandala：[DESIGN.md](/Users/suntao/Projects/presentations/rider-agentic-gamedev/DESIGN.md)
- Kicker/StatusChip/TipChip 用法：参考 `pages/06-acp-mcp-junie.md` line 10-52
- ThreeLaneDiagram 风格：`pages/06-acp-mcp-junie.md` line 56
- brand-assets 嵌入：参考 `pages/06-acp-mcp-junie.md` line 27-32 (Claude/Codex/Cursor/Junie 图标)
- docs brief 7 段式：参考 `docs/06-official-path-acp-mcp-junie.md`

## Verification

1. `pnpm dev` 启动 http://localhost:3030
2. **06b** (slide 7)：amber mandala 与 06 同段；StatusChip "New" + "Experimental" 同显；4 agent 图标加载；右下 3 用例字号 ≥10px
3. **13b** (slide 14)：3 列时间轴并列；每列标题清楚（Bake-off / 跨时区 / Junie+Claude）；3-4 步骤可读
4. **A5** (slide 30)：7 用例矩阵；"角色 × 工作流" 轴线清楚
5. 顺读 05→06→06b→07，13→13b→14 两段链条，确认无重复无断裂
6. 翻 15/17/18/A1 确认增量批注不喧宾夺主
7. `pnpm build` 通过；`pnpm export` PDF 无越界
8. 演讲彩排：06b ≤90s；13b ≤120s；A5 仅 Q&A 翻到

## Risks & Mitigations

- **Deck +3 页 (26→29)**：30min 演讲仍可承载（A5 默认不讲、留 Q&A）。13b/06b 各 ~2min，是论点核心证据。
- **Experimental 标签管理层警惕**：StatusChip 同时显示 "Experimental + Apache 2.0 + 由 JetBrains 维护"；备注强调与 Junie 同团队路线图。
- **与 MCP Steroid 混淆**：06b/07/A2 各放对照行 "Workbench = 人类驾驶舱；Steroid = agent 运行时"。
- **下载量仅 1,261**：台上不引用下载数据；用 "官方 vendor + Apache 2.0 + IntelliJ Platform 同源" 作为信任锚点。
- **amber 三连 (06/06b/07) 视觉疲劳**：06b mandalaOpacity 0.5；07 已有 0.8 — 形成 0.7→0.5→0.8 明暗韵律。
- **A5 矩阵信息密度过高**：抽 `WorkbenchUseCaseMatrix.vue` 组件强制网格化（≤7 单元、每个 ≤18 字）。
- **13b 与 12/13 主题相近**：13b 主轴是"多 agent 协作模式"，标题与 Kicker 反复强调 "Workflow 6 / Multi-Agent"，避免被理解为又一个工作流细化。

## Resolved Decisions

- ✅ 整合范围 = **新页 06b + 工作流 6 新页 13b + 附录用例页 A5**（用户确认）
- ✅ 用例呈现 = **06b 上屏 3 条 + A5 铺剩余 7 条**（用户确认）
- ✅ 章节色 = **amber**（06/06b/07/13b 形成 agent 段聚类；A5 amber→green 过渡）
- ✅ 06b 上屏 3 条 = **#1 Live Ops · #5 A/B Bake-off · #8 Workbench Observatory**
- ✅ 13b 主时间轴 3 条 = **#4 跨时区接力 · #5 A/B Bake-off · #10 Junie+Claude 编排**
- ✅ A5 矩阵 7 条 = **#2 Refactor Swarm · #3 Shader 配对 · #6 AI Platform Skill Factory · #7 QA Fuzz Triage · #8 Workbench Observatory · #9 Engine 内核改造 · #1 Live Ops（售前 demo 主线备份）**
