# 09｜Workflow 1｜Issue → Impact Analysis → Plan → Knowledge

## 页面目标
说明 JetBrains 生态如何把"需求/问题输入"与"代码影响面分析"连接起来，而不是让 agent 直接盲写。同时强调两个被通用 AI 工具忽略的关键环节：**Rider 作为统一执行枢纽**（任何 ACP agent / IntelliJ 插件均可接入），以及 **agent 解决问题后的知识反馈闭环**（输出物不只是合并的代码，还包括充实企业知识库的结构化知识）。

## 建议 Slidev 布局
- 推荐布局：左文（col-span-4）+ 右图（col-span-8），`items-center`
- 风格关键词：深色、紫黑主调、游戏研发控制台、工程系统感、信息密度高但秩序清晰。
- 建议比例：16:9，`<IssueToPlanFlow />` 组件填满右侧 8 列。

## 主视觉 / 结构图说明
图表分为三个纵向区域，底部附加知识反馈轨道：

```
[01 · Inputs]     →    [02 · Rider · SHARED EXECUTION HUB]    →    [03 · Agents]
YouTrack               符号图 · 调用链 · 依赖树                      Junie (native)
Jira                   影响面分析                                    Claude Code (ACP)
GitHub Issues          所有工具调用经由 IDE                          Codex (ACP)
Slack / Chat           人工审核 · 可停止 · 可回滚                    Any ACP Agent
+ Any via MCP                                                       IntelliJ Plugins
                                                                           ↓
                                                                    [Reviewable Plan]
                                                                  scope · risks · checklist

◄──────────── Knowledge Feedback ──────────────────────────────────────────────────
[KB / Knowledge Graph]   Resolution Log · Learned Patterns · Doc Entries
```

**核心差异化视觉逻辑**：
- Rider 枢纽需要视觉重量远大于两侧（大图标 + 紫色光晕 + 红色 "SHARED EXECUTION HUB" 标签）
- 底部知识反馈轨道用左向箭头贯穿全宽，强调"解决完问题不是终点"
- 输入侧和 Agent 侧各保留一张"开放式占位卡"（`+ Any via MCP / REST`、`Any ACP Agent`、`IntelliJ Plugins`），传达生态开放性

## 页面文案提示词

### 左列叙述（三条 bullet）
1. **任意输入来源** — YouTrack、Jira、GitHub Issues、Slack，或任何 MCP connector，统一汇入 Rider 上下文
2. **Rider 是枢纽，不是编辑器** — 任何 ACP agent 或 IntelliJ 插件均可在完整 IDE 语义上下文中行动；改动范围在动一行代码之前已被映射
3. **输出双轨** — agent 产出物包括可供人工审核的实施计划，*以及*充实企业知识库的结构化知识（化解决问题的过程为可复用资产）

### TipChip
> 第一步是 understanding，最后一步是 knowledge capture。

## 可直接改写的 Slidev 草图

```md
---
layout: rider
chapter: violet
page: 9
---

<div class="grid grid-cols-12 gap-5 h-full items-center">
  <div class="col-span-4 flex flex-col justify-center">
    <Kicker>Workflow 1</Kicker>
    <h1 class="!text-[30px] font-extrabold !leading-tight mt-3 text-white/90">
      Issue → Impact Analysis → Plan
    </h1>
    <div class="mt-4 space-y-3 text-[12.5px] leading-relaxed text-white/55">
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p>Any source — YouTrack, Jira, GitHub Issues, Slack, or <Highlight>any MCP connector</Highlight></p>
      </div>
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p>Rider is the hub — any <Highlight>ACP agent or IntelliJ plugin</Highlight> acts with full IDE context; blast radius mapped before a line is changed</p>
      </div>
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p>Agent output creates a reviewable plan <em>and</em> enriches the <Highlight>enterprise knowledge base</Highlight> — compounding team intelligence with every resolved issue</p>
      </div>
    </div>
    <div class="mt-5 text-[12px] text-white/45">
      <TipChip /> First step: <em>understanding</em>. Last step: <em>knowledge capture</em>.
    </div>
  </div>
  <div class="col-span-8">
    <IssueToPlanFlow />
  </div>
</div>
```

## 讲者备注
- **开场**：真正专业的 agentic workflow，第一步不是 coding，而是 understanding；而结尾不是 merge，而是 knowledge capture。
- **输入来源**：YouTrack 是 JetBrains 原生 tracker，天然与 VCS commit/branch 关联。Jira、GitHub Issues 等通过插件或 MCP connector 接入；Slack/Chat 可通过 MCP 拉取上下文。关键信息：工作室无需切换现有工具，Rider 统一读取。
- **Rider 作为枢纽**：强调"不只是文件编辑器"。任何遵循 ACP 协议的 agent，或任何 IntelliJ 插件，都可以在相同的语义上下文（符号图、调用链、依赖树）上行动——不是各自维护一份副本，而是共享同一套基础设施。这是与 Cursor/Copilot/Claude 单独使用的核心差距。
- **影响面分析**：通用 AI agent 直接跳到代码生成，导致方案返工和误判波及面。Rider 在写第一行代码前，就已经映射全项目改动范围。
- **知识反馈闭环**：agent 解决问题后，结构化输出（解决日志、学到的模式、文档条目）应反哺企业知识库/知识图谱。这不仅指导员工的知识素养积累，也让未来的 agent 在类似问题上有更好的上下文起点。"每次解决问题，企业智力资产就增加一分。"

## 事实锚点（不上屏，用于校正文案）
- YouTrack 可与版本控制关联 issue、commit 与分支（JetBrains 官方能力）
- Rider 提供项目级分析与依赖探索（符号图、调用层级、值流分析）
- ACP（Agent Communication Protocol）是 JetBrains 提出的开放协议，允许第三方 agent 接入 Rider 工具链
- IntelliJ 插件生态可扩展 Rider 的 agent 能力边界，支持企业自定义集成
- 知识图谱/企业知识库（Enterprise Knowledge Base）是 AI 治理层的标准组成部分，与 dotUltimate AI Enterprise 方向一致
