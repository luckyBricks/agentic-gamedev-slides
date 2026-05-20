# JetBrains × Korean Game Studios — 2026 Strategic Sync 内部 Briefing

> Internal briefing for JetBrains account / DevRel / GameDev product leads. **Not** an outbound document, not slide content. Pair with the deck under `/Users/suntao/Projects/presentations/rider-agentic-gamedev/` as preread.

---

## Context

JetBrains 想与 Nexon、NCSoft、Netmarble、Krafton 在 2026 上半年做一轮战略 sync。原始提议是双向的——既听对方的 roadmap，又分享自己的 roadmap——但措辞偏通用，没有体现：

1. **四家厂商 2026 战略坐标已经显著分化**（Nexon Mono Lake / NCSoft 分拆 NC AI 与 VARCO B2B 化 / Netmarble UE5 现代化+移动 live-ops / Krafton $70M GPU AI-first），逐家定制 cut-in 才有信号强度。
2. **当前 deck 在韩国 enterprise studios 最关心的几个点上覆盖偏薄**——mobile workflows、live-ops、on-prem/air-gap、BYO-model、monorepo+Perforce 极限规模。这些是必须主动补位的盲区。
3. **四家厂商互为直接竞争对手**，sync 系列从一开始就必须设计反泄密机制，否则会变成一次性会议而非长期 channel。

这份 briefing 把通用提议升级为可执行的会议系列规划，输出四块增量：A. 每家厂商专属角度；B. Deck 盲区主动补位话术与 demo；C. 双向价值与具体可交付物；D. 会议节奏与跟进机制。

---

## A. 每家厂商专属 cut-in 角度

### A.1 Nexon — "Mono Lake 是 gameplay-side AI，开发侧 AI 是另一个问题"

**Opening hook**: Mono Lake 面向玩家体验/live-ops；JetBrains 关注 production-side AI——agent 怎么在工程师身边把代码、引擎、构建管线打通。互补不冲突。

**Anchor talking points**:
- Shared IDE Hub + Workbench 可同时承载 Nexon 内部 agent（基于 Mono Lake 训练数据派生的 skill）与外部 agent（Claude/Junie）在同一 IDE context 上协作（`pages/06b-agent-workbench.md`）。
- Mono Lake 拿玩家行为信号，Rider 拿代码系统语义。两套 context 拼在 Workbench 里，对 "bug 集群从遥测落到 IDE 行动项" 这条路有结构性优势（`pages/19-semantic-moat.md`）。

**Listening prompts**:
- Arc Raiders 的 "用更少人做出 AAA" 怎么拆解到工程团队 KPI？哪些 lead time 指标在被追踪？
- Mono Lake 训练数据有没有 dev-side 反向闭环计划（运行时数据 → IDE 内 agent action）？
- 现在 IDE 端工具链是 VS / VS Code / Rider 混合到什么比例？为什么？

**Concrete ask**: Mono Lake skill 通过 ACP Registry 暴露给 Rider Workbench 的可行性 PoC。

### A.2 NCSoft — "VARCO 不被替换；JetBrains 做 VARCO 的载体"

**Opening hook**: NCSoft 2025-02 把 AI 部门分拆为 NC AI，VARCO LLM 在做 B2B 化。**JetBrains 不是来卖一个竞争 LLM——而是来把 VARCO 变成 Workbench 里的一等公民**。这是 NC AI 商业化的分发通道，不是替代品。

**Anchor talking points**:
- ACP + MCP 的开放协议本来就支持 BYO endpoint。VARCO 接入 Workbench 后，studio 内的 Claude / Codex / Junie / VARCO 同台并行，CTO 拿到 governance 与 audit（`pages/06-acp-mcp-junie.md`、`pages/18-role-4-cto.md`）。
- NC AI 把 VARCO 卖给外部时装/媒体客户，对方需要一个标准开发载体——Rider 是合适的。

**Listening prompts**:
- VARCO 当前在内部 R&D 部署形态？on-prem / VPC / 完全 air-gap？
- B2B 客户用 VARCO 时主要痛点是什么——开发者集成成本？工具链碎片？
- NC AI 与 Game studio 之间工具复用边界画在哪？

**Concrete ask**: 共同设计 "VARCO × Rider Workbench" 集成 reference architecture；如可，联合发布。

### A.3 Netmarble — "UE5 现代化 + 移动 live-ops 是 deck 盲区的最高赔率受众"

**Opening hook**: Netmarble 双引擎 (Unity + UE5)、强移动、live-ops 节奏密集——deck 当前对移动与 live-ops 覆盖最薄的部分，恰恰是 Netmarble 最在意的部分。这次 sync 不是来 push 现有 deck，是来听 Netmarble 把这两个维度的 roadmap 信号注入 JetBrains。

**Anchor talking points**:
- UE5 现代化路径：Rider 对 UE5 C++/Blueprint 宏与反射的语义理解（`pages/15-role-1-programmer.md`、deck Workflow 2）。
- 双引擎下的统一工具链：dotUltimate 一份订阅同时覆盖 Unity/Unreal 团队（`pages/18-role-4-cto.md`）。

**Listening prompts**:
- B&S Revolution 从 UE4 到 UE5 升级的 dev-side 痛点排前三？
- 移动 live-ops "热更命中证书构建" 周期，从 commit 到玩家设备多久？哪一段最贵？
- AI Lab 当前在 live-ops 侧用 AI 做了什么？开发者侧能复用其中哪一层 context？

**Concrete ask**: 邀请 Netmarble 加入 JetBrains 2026 Mobile + Live-Ops design partner 计划（详见 §B.1 §B.2）。

### A.4 Krafton — "$70M GPU 是硬件赌注；JetBrains 是工程师侧的杠杆乘数"

**Opening hook**: Krafton 2025 宣布 AI-first、$70M GPU 集群、PUBG Ally、KRW 30B/年员工 AI 训练预算。他们已经在硬件和组织上 all-in 了——JetBrains 的位置是把这笔投入在工程师日常生产力上的回报放大。

**Anchor talking points**:
- 自训模型 + 内部 inference endpoint → Workbench 通过 ACP/MCP 直接挂载，Junie 路由到 Krafton 内部 model gateway（`pages/06-acp-mcp-junie.md`、deck appendix MCP deep dive）。
- PUBG Ally 是 in-game AI——做出 Ally 的工程团队自己需要 agentic 工作台。
- Telemetry-as-governance：Rider 语义遥测把 agent 行为变成 CTO 可审计指标（`pages/18-role-4-cto.md`）。

**Listening prompts**:
- $70M GPU 集群有没有规划面向 internal developer-AI workload 的预留容量？
- AI Learning Hub / Hackathon 的产出怎么从员工训练成果回流到工程工具链？
- PUBG Ally 这种 in-game agent 与 dev-side agent 共享了多少 infra 与 prompt 工程经验？

**Concrete ask**: 提供 Workbench 实验版 + ACP/MCP 对接 Krafton internal model 的 enterprise design partner 协议。

---

## B. Deck 盲区主动补位 (核心增量)

> 这些是 deck **当前讲得薄但韩国 studios 必然问到**的话题。每个盲区必须 (1) 自曝局限 (2) 给出 2026 roadmap 答复 (3) 准备 demo 或 reference。

### B.1 Mobile 工作流 (最大盲区)
- **现状**: deck Workflow 2 (`docs/10-workflow-2-gameplay-feature-implementation.md`) 仅在 Unreal 部分提 iOS deploy target，无完整移动链路叙事。
- **补位话术**: 承认 deck mobile 叙事不完整，这正是 sync 想听 input 的一块；2026 commit 提纲（与 PM team 对齐前不外泄）：Rider 对 Android target chain 的 attach-to-device profiler、ReSharper Unity Mobile target 的 inspection 规则集、Junie 对 platform-specific build variant agent 自动化。
- **Demo 资产**: Unity Android profiler attach via Rider + Junie 自动定位帧时间回归。

### B.2 Live-Ops / 持续运营节奏
- **现状**: deck 主要讲 "feature lead time" 与 "mainline breakage"，缺少 live game 的 "commit → cert → device" 与 hot-fix 闭环叙事。
- **补位话术**: Pre-merge Quality Gate（`docs/12-workflow-4-pre-merge-quality-gate.md`）扩展到 hot-fix 紧急路径下的 agent 行为约束。Workbench 多 agent A/B（`docs/13b-workflow-6-multi-agent.md`）可同时跑 "稳态 hot-fix candidate" vs "实验性 fix candidate"，CTO 拿到 risk-adjusted 决策。
- **Listening prompt**: hot-fix 周期 P50 / P95？瓶颈是 cert、build farm 还是 QA？

### B.3 On-prem / Air-gap & BYO-model
- **现状**: deck 假设 cloud-connected AI Enterprise（`docs/04-the-jetbrains-stack.md`），无显式 air-gap 或自训模型集成路径。
- **补位话术**: ACP 协议本身 endpoint-agnostic; MCP server 可 self-host；Junie CLI 可路由到 internal gateway。2026 roadmap commit（口径需与产品确认）：BYO-model registry、air-gapped Junie 部署、enterprise context vault。
- **关键反差**: NCSoft / Krafton 不会接受核心模型走 cloud。第一次会议就必须把 air-gap 立场亮明。

### B.4 Monorepo + Perforce 极限规模
- **现状**: deck 提及 Perforce changelist 但未展开 multi-TB depot、跨地域 sync、changelist-level CI gating。
- **补位**: Rider indexing strategy（cold/warm start time at 1TB+）、Junie 按 changelist 粒度执行 agent task、P4-native MCP tools。
- **Listening prompt**: Rider/IDE 全量 index 时长？热缓存命中率？跨地域 Perforce edge server 拓扑？

### B.5 TCO / 工具链整合 ROI
- **现状**: deck 提到 dotUltimate 整合（`pages/18-role-4-cto.md`）但未给出量化对比。
- **补位资产**: 准备 1 页 "VS + Resharper + OmniSharp + 散装 AI 插件" vs "dotUltimate + AI Enterprise" 的 per-seat TCO 对比（脱敏后客户数据，会前与法务确认外发口径）。

---

## C. 双向价值与可交付物

> 每次会议必须产出**具体物件**，否则 90 天后没有人记得发生过什么。

### C.1 Pre-read 包（会前 72 小时发送）
- 1 页 meeting purpose 单页：5 个我们想问的问题 + 5 个我们想分享的更新（按厂商剪裁）
- Deck 摘要：从 27 张完整 deck 抽出 5 张最相关的（按厂商不同）+ 1 张定制 closing
- 公开参考：1 个可比 studio 的脱敏 case

### C.2 Roadmap Influence Channel (NDA 保护)
- 指定 JetBrains PM 联络人 per studio：Rider GameDev PM、Junie PM、AI Enterprise PM 三人组
- 季度 roadmap preview：每季度首月，30 分钟 NDA call
- 共享 backlog：studio feature request 在 JetBrains 内部有可见 ticket

### C.3 Pilot 提案标准模板
- 范围: 1 team / 1 workflow / 90 天
- 基线指标: feature lead time、mainline breakage rate、MTTR、agent-driven PR ratio
- 激励: dotUltimate seat + AI Enterprise trial 免费
- 结束物: 联合 case study（双方都有审阅权）

### C.4 共同研究机会
- 联合论文 / 报告: "Agent Workbench in AAA pipelines"
- 会议联动: GDC 2026、Korea Games Conference (KGC)、Unite Seoul
- 学术合作: 通过 studio 的 university partner 设计 agentic gamedev 课程模块

### C.5 每次会议必须有的 1 页 deliverable — "Agentic Readiness Radar"
6 轴雷达图，会议中 30 分钟现场打分共识：
1. Semantic context coverage (engine awareness)
2. Multi-agent orchestration maturity
3. Pre-merge quality gate stringency
4. Mobile / live-ops AI integration
5. Governance & audit completeness
6. Tool consolidation degree

会后产物：1 页定制图 + 3 条优先级建议。

---

## D. 会议节奏与跟进机制

### D.1 单次会议结构（建议 90 分钟）

| 时间 | 环节 | 负责 |
|---|---|---|
| 0:00–0:10 | Opening：JetBrains "context & control" thesis (deck closing 1-2 slides) | JetBrains DevRel |
| 0:10–0:30 | Studio share：2026 priorities + pain + AI ambitions | Studio side |
| 0:30–0:55 | JetBrains roadmap preview (Workbench / ACP / mobile / on-prem) | JetBrains PM 团 |
| 0:55–1:20 | Mapping conversation + 雷达图共识 (§C.5) | 双方 |
| 1:20–1:30 | Action items + 下次时间敲定 | DevRel |

### D.2 反泄密 / Anti-Leak 隔离 (关键)
四家厂商互为竞争对手。硬规则：
- 永不在 A 厂商会议中引用 B 厂商的具体计划。可以泛泛说 "我们在与其他 AAA studios 看到 X 趋势"，不能说 "Y 公司也提到 Z"
- per-studio 独立 Slack channel 与 account folder，跨 studio 共享只允许 anonymized aggregate
- 会前 JetBrains 侧 internal 5 分钟 briefing：本场能说什么、不能说什么、本场目标
- Pilot case study 发布前双重审阅，studio 有完整否决权

### D.3 48 小时跟进单页（必须发出）
- 我们听到的（3-5 条）
- 双方承诺（明确 owner + 日期）
- 下次会议或 milestone 时间
- 雷达图 + 3 条建议（§C.5 deliverable）

### D.4 季度回访机制

| 季度 | 阶段 | 产物 |
|---|---|---|
| Q1 2026 | 首会 + pilot scoping | 雷达图 + pilot 范围 |
| Q2 2026 | Pilot 启动 | 基线指标 + onboarding 报告 |
| Q3 2026 | Pilot 中期 review | 中期 metrics + roadmap 反馈 |
| Q4 2026 | Pilot 收尾 + 2027 roadmap 影响 | 联合 case study + 续约/扩范围决策 |

与 Rider .1 release cadence 对齐（3-4 月 / 6-7 月 / 10-11 月），让 roadmap 反馈有可验证落点。

---

## 关键依赖文件 (准备会议时调阅 — 全部 read-only，本次不修改)

- `pages/02-executive-thesis.md` — opening thesis
- `pages/05-shared-ide-hub.md` — Shared IDE Hub 主张
- `pages/06-acp-mcp-junie.md` — 开放协议立场（BYO-model 的技术基础）
- `pages/06b-agent-workbench.md` — Workbench cockpit
- `pages/13b-workflow-6-multi-agent.md` — A/B bake-off & follow-the-sun
- `pages/18-role-4-cto.md` — CTO 价值面（governance / TCO）
- `pages/19-semantic-moat.md` — 语义护城河
- `docs/26-appendix-kpi-framework.md` — KPI 框架（雷达图 6 轴来源）

---

## 验证 / Verification

非代码型 verification，按对话产物检验：

1. **首会前 72 小时**: 每家厂商收到剪裁版 pre-read（§C.1）；JetBrains 内部 anti-leak briefing 完成（§D.2）。
2. **首会现场**: 90 分钟结构跑通 (§D.1)；现场完成 6 轴雷达图共识 (§C.5)。
3. **48 小时内**: 跟进单页发出，含双方 owner（§D.3）。
4. **30 天内**: 4 家厂商中至少 2 家进入 pilot scoping，至少 1 家敲定 Rider PM 名义联络人（§C.2）。
5. **季度回访**: Q2 时 4 家中至少 2 家进入 pilot 执行；雷达图 6 轴中至少 1 个轴出现可量化进展（§D.4）。
6. **跨厂商隔离**: 任何一次会议中 JetBrains 侧零次提及其他在沟通厂商的具体内容（§D.2 检验）。

任一项未达成，触发该厂商单独 retro，调整 cut-in 角度而不是重发 deck。