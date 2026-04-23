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
        <p>Any source —
          <img src="/docs/brand-assets/YouTrack/YouTrack_icon.svg" class="h-3.5 inline align-[-2px]" />
          <span class="text-white/65">YouTrack</span>,
          <img src="/docs/brand-assets/jira.svg" class="h-3 inline align-[-2px]" />
          <span class="text-white/50">Jira</span>,
          native GitHub plugin, Slack, or <Highlight>any MCP connector</Highlight>
        </p>
      </div>
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p>
          <img src="/docs/brand-assets/Rider/Rider_icon.svg" class="h-3.5 inline align-[-2px]" />
          <span class="text-white/65">Rider</span> is the hub — any <Highlight>ACP agent or IntelliJ plugin</Highlight> acts with full IDE context; blast radius mapped before a line is changed
        </p>
      </div>
      <div class="flex gap-2">
        <span class="text-white/25 mt-1 text-[10px] flex-shrink-0">●</span>
        <p>Agent output produces a reviewable plan <em>and</em> enriches the <Highlight>enterprise knowledge base</Highlight> — compounding team intelligence with every resolved issue</p>
      </div>
    </div>
    <div class="mt-5 text-[12px] text-white/45">
      <TipChip /> First step: <em>understanding</em>. Last step: <em>knowledge capture</em>.
    </div>
  </div>
  <!-- Right: primary — the flow diagram -->
  <div class="col-span-8">
    <IssueToPlanFlow />
  </div>
</div>

<!--
Emphasize: professional agentic workflows start with understanding and end with knowledge capture — not just a merged commit.

Input sources: YouTrack (native VCS-linked), Jira, GitHub Issues, Slack/chat, or any custom MCP connector — Rider unifies them all into one context. Studios don't need to abandon existing tools.

Rider is the hub, not just an editor. Any ACP-compatible agent or IntelliJ plugin can act within the same full-project semantic context — Junie, Claude Code, Codex, or future agents you haven't deployed yet.

Impact analysis is the critical differentiator: generic AI agents jump straight to code generation, which leads to plan rework and missed blast radius. Rider maps the full change surface before a line is written.

Knowledge feedback loop: agent resolution output should feed back into the enterprise knowledge base — resolution logs, learned patterns, and documentation entries. This compounds team intelligence over time and guides future engineers and agents on similar problems.
-->
