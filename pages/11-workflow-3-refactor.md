---
layout: rider
chapter: amber
page: 11
---

<div class="flex flex-col h-full gap-4">
  <!-- Header -->
  <div class="flex items-end justify-between gap-8">
    <div class="flex-1 min-w-0">
      <Kicker>Workflow 3</Kicker>
      <h1 class="!text-[40px] font-extrabold !leading-[1.05] !m-0 mt-2">
        以 Inspection 为枢纽的代码评审
      </h1>
    </div>
    <div class="text-[13.5px] text-white/55 leading-snug max-w-[400px] flex-shrink-0 text-right">
      AI 以机器速度产出代码。
      <span class="text-white font-semibold">逐 diff 评审无法扩展。</span>
      Rider 居中调度 — 把 engine-aware 的 inspection 同时暴露给<em>双方</em>。
    </div>
  </div>
  <!-- Three-surface bridge (fills most of the page) -->
  <div class="grid grid-cols-12 gap-4 flex-1 min-h-0 items-stretch">
    <!-- Agent surface (Junie · MCP) — strengthened tools -->
    <div class="col-span-4 flex flex-col gap-3 rounded-xl border border-white/[0.09] bg-white/[0.02] p-4">
      <div class="flex items-center gap-2.5">
        <img src="/docs/brand-assets/Junie/Junie_icon.svg" class="h-9 w-9 flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <div class="text-[10.5px] font-mono uppercase tracking-wider text-white/35">Agent 侧</div>
          <div class="text-[16px] font-bold text-white leading-none mt-1">Junie · MCP tools</div>
        </div>
        <div class="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.10] text-white/45 flex-shrink-0">native</div>
      </div>
      <!-- Read tools -->
      <div>
        <div class="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-2 flex items-center gap-1.5">
          <carbon-view class="text-[12px]" />
          <span>read · context</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex items-center gap-2 text-[12px] font-mono px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-search-locate class="text-[#ffb700]/80 text-[16px] flex-shrink-0" />
            <span class="truncate">inspect_code</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] font-mono px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-flow-connection class="text-[#ffb700]/80 text-[16px] flex-shrink-0" />
            <span class="truncate">find_usages</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] font-mono px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-tree-view-alt class="text-[#ffb700]/80 text-[16px] flex-shrink-0" />
            <span class="truncate">psi_tree</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] font-mono px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-rule class="text-[#ffb700]/80 text-[16px] flex-shrink-0" />
            <span class="truncate">list_rules</span>
          </div>
        </div>
      </div>
      <!-- Write tools -->
      <div>
        <div class="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-2 flex items-center gap-1.5">
          <carbon-edit class="text-[12px]" />
          <span>write · safe-apply</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex items-center gap-2 text-[12px] font-mono px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-flash class="text-[#48e054]/85 text-[16px] flex-shrink-0" />
            <span class="truncate">apply_fix</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] font-mono px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-machine-learning-model class="text-[#48e054]/85 text-[16px] flex-shrink-0" />
            <span class="truncate">refactor</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] font-mono px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80 col-span-2">
            <carbon-checkmark-outline class="text-[#48e054]/85 text-[16px] flex-shrink-0" />
            <span class="truncate">verify_clean — 变更后重新 inspect</span>
          </div>
        </div>
      </div>
      <div class="text-[11.5px] text-white/45 leading-snug mt-auto pt-1.5 border-t border-white/[0.06]">
        <carbon-renew class="inline text-[13px] align-[-2px] mr-1" />
        提交<span class="text-white/75">前</span>根据 engine 规则自我纠正
      </div>
    </div>
    <!-- Rider PSI core (center, amber) — with rich engine cards -->
    <div class="col-span-4 flex flex-col gap-3 rounded-xl p-4 relative" style="background:rgba(255,183,0,0.05);border:1px solid rgba(255,183,0,0.24)">
      <div class="flex items-center gap-2.5">
        <img src="/docs/brand-assets/Rider/Rider_icon.svg" class="h-10 w-10 flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <div class="text-[10.5px] font-mono uppercase tracking-wider" style="color:rgba(255,183,0,0.78)">Inspection 枢纽</div>
          <div class="text-[17px] font-extrabold text-white leading-none mt-1">Rider · PSI engine</div>
        </div>
      </div>
      <div class="flex items-center gap-2 text-[11px] font-mono px-2.5 py-1.5 rounded" style="background:rgba(255,183,0,0.08);border:1px solid rgba(255,183,0,0.22);color:rgba(255,183,0,0.85)">
        <img src="/docs/brand-assets/ReSharper/ReSharper_icon.svg" class="h-4 w-4" />
        <span>ReSharper · 20+ 年的 engine-aware 规则</span>
      </div>
      <div class="grid grid-cols-4 gap-1.5">
        <div class="flex flex-col items-center gap-1 text-[11px] py-2 rounded bg-white/[0.04] border border-white/[0.08] text-white/75">
          <carbon-search-locate class="text-white/65 text-[14px]" />
          <span>locate</span>
        </div>
        <div class="flex flex-col items-center gap-1 text-[11px] py-2 rounded bg-white/[0.04] border border-white/[0.08] text-white/75">
          <carbon-analytics class="text-white/65 text-[14px]" />
          <span>analyze</span>
        </div>
        <div class="flex flex-col items-center gap-1 text-[11px] py-2 rounded bg-white/[0.04] border border-white/[0.08] text-white/75">
          <carbon-export class="text-white/65 text-[14px]" />
          <span>expose</span>
        </div>
        <div class="flex flex-col items-center gap-1 text-[11px] py-2 rounded bg-white/[0.04] border border-white/[0.08] text-white/75">
          <carbon-collaborate class="text-white/65 text-[14px]" />
          <span>share</span>
        </div>
      </div>
      <div class="text-[10px] font-mono uppercase tracking-wider text-white/35 flex items-center gap-1.5 mt-1">
        <carbon-game-console class="text-[12px]" />
        <span>深度 engine 支持 · locate › fix</span>
      </div>
      <div class="flex flex-col gap-1.5 flex-1">
        <div class="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07]">
          <img src="/docs/brand-assets/unity.svg" class="h-5 opacity-80 invert flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="text-[11px] font-bold text-white/90 leading-tight">Unity · GC / Burst</div>
            <div class="text-[9.5px] font-mono text-white/40 leading-tight mt-0.5">Update 中 LINQ 分配 <span class="text-white/25">›</span> <span class="text-[#48e054]/85">pool · cache</span></div>
          </div>
        </div>
        <div class="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07]">
          <img src="/docs/brand-assets/unreal-engine.svg" class="h-5 opacity-80 flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="text-[11px] font-bold text-white/90 leading-tight">Unreal · BP · UPROPERTY · macro</div>
            <div class="text-[9.5px] font-mono text-white/40 leading-tight mt-0.5">EventGraph 200+ 节点 <span class="text-white/25">›</span> <span class="text-[#48e054]/85">extract C++</span></div>
          </div>
        </div>
        <div class="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07]">
          <img src="/docs/brand-assets/godot.svg" class="h-5 opacity-80 flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="text-[11px] font-bold text-white/90 leading-tight">Godot · GDScript typing</div>
            <div class="text-[9.5px] font-mono text-white/40 leading-tight mt-0.5">热循环中无类型 var <span class="text-white/25">›</span> <span class="text-[#48e054]/85">: int</span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Human surface (Qodana · aspect) -->
    <div class="col-span-4 flex flex-col gap-3 rounded-xl border border-white/[0.09] bg-white/[0.02] p-4">
      <div class="flex items-center gap-2.5">
        <img src="/docs/brand-assets/Qodana/Qodana_icon.svg" class="h-9 w-9 flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <div class="text-[10.5px] font-mono uppercase tracking-wider text-white/35">Human 侧</div>
          <div class="text-[16px] font-bold text-white leading-none mt-1">Qodana · aspect 视图</div>
        </div>
        <div class="text-[9px] font-mono px-2 py-0.5 rounded flex-shrink-0" style="background:rgba(72,224,84,0.08);border:1px solid rgba(72,224,84,0.20);color:rgba(72,224,84,0.78)">policy</div>
      </div>
      <!-- Insight aspects -->
      <div>
        <div class="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-2 flex items-center gap-1.5">
          <carbon-dashboard class="text-[12px]" />
          <span>insight · trends</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-chart-line-data class="text-[#48e054]/85 text-[16px] flex-shrink-0" />
            <span class="truncate">质量趋势</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-warning-alt class="text-[#ff5a8c]/85 text-[16px] flex-shrink-0" />
            <span class="truncate">阻塞项</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-meter class="text-white/60 text-[16px] flex-shrink-0" />
            <span class="truncate">漏出</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-rocket class="text-white/60 text-[16px] flex-shrink-0" />
            <span class="truncate">速度</span>
          </div>
        </div>
      </div>
      <!-- Action aspects -->
      <div>
        <div class="text-[10px] font-mono uppercase tracking-wider text-white/30 mb-2 flex items-center gap-1.5">
          <carbon-settings-adjust class="text-[12px]" />
          <span>control · gate</span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-rule-locked class="text-[#ffb700]/85 text-[16px] flex-shrink-0" />
            <span class="truncate">规则策略</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-task-complete class="text-[#48e054]/85 text-[16px] flex-shrink-0" />
            <span class="truncate">结论</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80 col-span-2">
            <carbon-flow-stream class="text-white/60 text-[16px] flex-shrink-0" />
            <span class="truncate">TeamCity gate · 合入编排</span>
          </div>
        </div>
      </div>
      <div class="text-[11.5px] text-white/45 leading-snug mt-auto pt-1.5 border-t border-white/[0.06]">
        <carbon-events class="inline text-[13px] align-[-2px] mr-1" />
        操作的是 <span class="text-white/75">policy</span> — 而不是 diff 队列
      </div>
    </div>
  </div>
  <!-- Comparison strip -->
  <div class="grid grid-cols-2 gap-4">
    <div class="flex items-center gap-3 rounded-lg px-4 py-3" style="background:rgba(255,10,103,0.05);border:1px solid rgba(255,10,103,0.20)">
      <carbon-close-outline class="text-[24px] flex-shrink-0" style="color:rgba(255,90,140,0.85)" />
      <div class="flex-1 min-w-0">
        <div class="text-[11px] font-mono uppercase tracking-wider" style="color:rgba(255,90,140,0.75)">无 context 的 agent</div>
        <div class="text-[13px] text-white/70 leading-snug mt-0.5">盲修 · 破坏 reflection · 缺陷漏出</div>
      </div>
    </div>
    <div class="flex items-center gap-3 rounded-lg px-4 py-3" style="background:rgba(72,224,84,0.05);border:1px solid rgba(72,224,84,0.22)">
      <carbon-checkmark-outline class="text-[24px] flex-shrink-0" style="color:rgba(72,224,84,0.85)" />
      <div class="flex-1 min-w-0">
        <div class="text-[11px] font-mono uppercase tracking-wider" style="color:rgba(72,224,84,0.78)">Inspection 中介</div>
        <div class="text-[13px] text-white/85 leading-snug mt-0.5">基于 PSI · engine-aware · 人类可审计的<Highlight>quick-fix 路径</Highlight></div>
      </div>
    </div>
  </div>
</div>

<!--
量级问题：AI 生成速度比人类评审快数个数量级。逐 diff 评审已无法作为质量 gate。
枢纽：Rider 的 PSI engine — 背靠 ReSharper 20+ 年的 game-engine 规则 — 把同一份 inspection 表面同时暴露给两类受众。Agent（通过 MCP）调用读工具（inspect_code、find_usages、psi_tree、list_rules）和写工具（apply_fix、refactor、verify_clean），针对 engine 专属模式自我纠正。人类（通过 Qodana + TeamCity）在 aspect 视图上工作 — 质量趋势、阻塞项、漏出、速度、规则策略、结论 — 而不是逐 diff 审批。
Engine 深度即护城河：Unity GC + Burst、Unreal Blueprint + UPROPERTY/macro/RPC、Godot GDScript 类型 — 这些对无 context 的 agent 都是不可见的。ReSharper 的规则库是 game-dev 语言领域独此一家。
Quick-fix 路径很关键：Rider 不只标记问题 — 它提供用户友好的修复路径（object pool、extract C++、补充类型标注），让 agent 和人类都能放心套用。
对比：纯 agent 是盲修；Rider 中介的 agent 是带 context 的修复。缺陷漏出下降，速度上升，人类摆脱 diff 流水线。
-->
