---
layout: rider
chapter: violet
page: 9
---

<div class="grid grid-cols-12 gap-5 h-full items-center">
  <!-- Left: secondary annotation column -->
  <div class="col-span-4 flex flex-col justify-center">
    <Kicker>Workflow 1</Kicker>
    <h1 class="!text-[30px] font-extrabold !leading-tight mt-3 text-white/90">
      Issue →<br>Impact Analysis → <br>Plan →
    </h1>
    <div class="mt-4 space-y-3 text-[12.5px] leading-relaxed text-white/55">
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p>任何来源 —
          <img src="/docs/brand-assets/YouTrack/YouTrack_icon.svg" class="h-3.5 inline align-[-2px]" />
          <span class="text-white/65">YouTrack</span>、
          <img src="/docs/brand-assets/jira.svg" class="h-3 inline align-[-2px]" />
          <span class="text-white/50">Jira</span>、
          原生 GitHub 插件、Slack，或<Highlight>任意 MCP connector / Agent Skills</Highlight>
        </p>
      </div>
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p>
          <img src="/docs/brand-assets/Rider/Rider_icon.svg" class="h-3.5 inline align-[-2px]" />
          <span class="text-white/65">Rider</span> 调用 agent，<em>同时</em>暴露 <Highlight>Rider MCP Server</Highlight> — agent 获得精确的语义 context，消耗更少 token，每次生成的变更都在 IDE 内<Highlight>实时评审</Highlight>
        </p>
      </div>
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p>Agent 产出可审阅的 plan，<em>并</em>持续丰富<Highlight>企业知识库</Highlight> — 每解决一个 issue，团队智能都在复利积累</p>
      </div>
    </div>
    <div class="mt-5 text-[12px] text-white/45">
      <TipChip /> 第一步：<em>理解</em>。最后一步：<em>知识沉淀</em>。
    </div>
  </div>
  <!-- Right: primary — the flow diagram -->
  <div class="col-span-8">
    <IssueToPlanFlow />
  </div>
</div>

<!--
强调：专业的 agentic workflow 从理解开始，以知识沉淀结束 — 而不是合并一个 commit 就完事。

输入来源：YouTrack（原生 VCS 关联）、Jira、GitHub Issues、Slack/聊天，或任意自定义 MCP connector — Rider 把它们统一成同一份 context。工作室无需放弃现有工具。

Rider 是 hub，不只是编辑器。任何 ACP 兼容的 agent 或 IntelliJ 插件都可以在同一份完整项目语义 context 中工作 — Junie、Claude Code、Codex，或你尚未部署的未来 agent。

影响分析是关键差异点：通用 AI agent 直接跳到代码生成，导致 plan 反复返工、影响面被遗漏。Rider 在写下第一行代码前就摸清整个变更面。

知识反馈闭环：agent 的解决产出应回流到企业知识库 — 解决日志、习得模式、文档条目。这让团队智能随时间复利，并在相似问题上指引后来的工程师和 agent。
-->
