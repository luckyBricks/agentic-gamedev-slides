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
        Inspection-Mediated Code Review
      </h1>
    </div>
    <div class="text-[13.5px] text-white/55 leading-snug max-w-[400px] flex-shrink-0 text-right">
      AI ships code at machine speed.
      <span class="text-white font-semibold">Diff-by-diff review can't scale.</span>
      Rider mediates — exposing engine-aware inspections to <em>both sides</em>.
    </div>
  </div>
  <!-- Three-surface bridge (fills most of the page) -->
  <div class="grid grid-cols-12 gap-4 flex-1 min-h-0 items-stretch">
    <!-- Agent surface (Junie · MCP) — strengthened tools -->
    <div class="col-span-4 flex flex-col gap-3 rounded-xl border border-white/[0.09] bg-white/[0.02] p-4">
      <div class="flex items-center gap-2.5">
        <img src="/docs/brand-assets/Junie/Junie_icon.svg" class="h-9 w-9 flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <div class="text-[10.5px] font-mono uppercase tracking-wider text-white/35">Agent surface</div>
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
            <span class="truncate">verify_clean — re-inspect after change</span>
          </div>
        </div>
      </div>
      <div class="text-[11.5px] text-white/45 leading-snug mt-auto pt-1.5 border-t border-white/[0.06]">
        <carbon-renew class="inline text-[13px] align-[-2px] mr-1" />
        self-corrects against engine rules <span class="text-white/75">before</span> submit
      </div>
    </div>
    <!-- Rider PSI core (center, amber) — with rich engine cards -->
    <div class="col-span-4 flex flex-col gap-3 rounded-xl p-4 relative" style="background:rgba(255,183,0,0.05);border:1px solid rgba(255,183,0,0.24)">
      <div class="flex items-center gap-2.5">
        <img src="/docs/brand-assets/Rider/Rider_icon.svg" class="h-10 w-10 flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <div class="text-[10.5px] font-mono uppercase tracking-wider" style="color:rgba(255,183,0,0.78)">Inspection bridge</div>
          <div class="text-[17px] font-extrabold text-white leading-none mt-1">Rider · PSI engine</div>
        </div>
      </div>
      <div class="flex items-center gap-2 text-[11px] font-mono px-2.5 py-1.5 rounded" style="background:rgba(255,183,0,0.08);border:1px solid rgba(255,183,0,0.22);color:rgba(255,183,0,0.85)">
        <img src="/docs/brand-assets/ReSharper/ReSharper_icon.svg" class="h-4 w-4" />
        <span>ReSharper · 20yr+ engine-aware rules</span>
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
        <span>deep engine support · locate › fix</span>
      </div>
      <div class="flex flex-col gap-1.5 flex-1">
        <div class="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07]">
          <img src="/docs/brand-assets/unity.svg" class="h-5 opacity-80 invert flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="text-[11px] font-bold text-white/90 leading-tight">Unity · GC / Burst</div>
            <div class="text-[9.5px] font-mono text-white/40 leading-tight mt-0.5">Update LINQ alloc <span class="text-white/25">›</span> <span class="text-[#48e054]/85">pool · cache</span></div>
          </div>
        </div>
        <div class="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07]">
          <img src="/docs/brand-assets/unreal-engine.svg" class="h-5 opacity-80 flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="text-[11px] font-bold text-white/90 leading-tight">Unreal · BP · UPROPERTY · macro</div>
            <div class="text-[9.5px] font-mono text-white/40 leading-tight mt-0.5">EventGraph 200+ nodes <span class="text-white/25">›</span> <span class="text-[#48e054]/85">extract C++</span></div>
          </div>
        </div>
        <div class="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.07]">
          <img src="/docs/brand-assets/godot.svg" class="h-5 opacity-80 flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="text-[11px] font-bold text-white/90 leading-tight">Godot · GDScript typing</div>
            <div class="text-[9.5px] font-mono text-white/40 leading-tight mt-0.5">untyped var in tight loop <span class="text-white/25">›</span> <span class="text-[#48e054]/85">: int</span></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Human surface (Qodana · aspect) -->
    <div class="col-span-4 flex flex-col gap-3 rounded-xl border border-white/[0.09] bg-white/[0.02] p-4">
      <div class="flex items-center gap-2.5">
        <img src="/docs/brand-assets/Qodana/Qodana_icon.svg" class="h-9 w-9 flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <div class="text-[10.5px] font-mono uppercase tracking-wider text-white/35">Human surface</div>
          <div class="text-[16px] font-bold text-white leading-none mt-1">Qodana · aspect view</div>
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
            <span class="truncate">quality trend</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-warning-alt class="text-[#ff5a8c]/85 text-[16px] flex-shrink-0" />
            <span class="truncate">blockers</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-meter class="text-white/60 text-[16px] flex-shrink-0" />
            <span class="truncate">leakage</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-rocket class="text-white/60 text-[16px] flex-shrink-0" />
            <span class="truncate">velocity</span>
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
            <span class="truncate">rule policy</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80">
            <carbon-task-complete class="text-[#48e054]/85 text-[16px] flex-shrink-0" />
            <span class="truncate">verdict</span>
          </div>
          <div class="flex items-center gap-2 text-[12px] px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/[0.08] text-white/80 col-span-2">
            <carbon-flow-stream class="text-white/60 text-[16px] flex-shrink-0" />
            <span class="truncate">TeamCity gate · merge orchestration</span>
          </div>
        </div>
      </div>
      <div class="text-[11.5px] text-white/45 leading-snug mt-auto pt-1.5 border-t border-white/[0.06]">
        <carbon-events class="inline text-[13px] align-[-2px] mr-1" />
        operate on <span class="text-white/75">policy</span> — not the diff queue
      </div>
    </div>
  </div>
  <!-- Comparison strip -->
  <div class="grid grid-cols-2 gap-4">
    <div class="flex items-center gap-3 rounded-lg px-4 py-3" style="background:rgba(255,10,103,0.05);border:1px solid rgba(255,10,103,0.20)">
      <carbon-close-outline class="text-[24px] flex-shrink-0" style="color:rgba(255,90,140,0.85)" />
      <div class="flex-1 min-w-0">
        <div class="text-[11px] font-mono uppercase tracking-wider" style="color:rgba(255,90,140,0.75)">Context-less agent</div>
        <div class="text-[13px] text-white/70 leading-snug mt-0.5">guesses fixes · breaks reflection · defect leakage</div>
      </div>
    </div>
    <div class="flex items-center gap-3 rounded-lg px-4 py-3" style="background:rgba(72,224,84,0.05);border:1px solid rgba(72,224,84,0.22)">
      <carbon-checkmark-outline class="text-[24px] flex-shrink-0" style="color:rgba(72,224,84,0.85)" />
      <div class="flex-1 min-w-0">
        <div class="text-[11px] font-mono uppercase tracking-wider" style="color:rgba(72,224,84,0.78)">Inspection-mediated</div>
        <div class="text-[13px] text-white/85 leading-snug mt-0.5">PSI-grounded · engine-aware · <Highlight>quick-fix paths</Highlight> humans audit</div>
      </div>
    </div>
  </div>
</div>

<!--
The volume problem: AI generation outpaces human review by orders of magnitude. Diff-by-diff review is no longer viable as a quality gate.
The bridge: Rider's PSI engine — backed by ReSharper's 20+ years of game-engine rules — exposes the same inspection surface to two audiences. Agents (via MCP) call read tools (inspect_code, find_usages, psi_tree, list_rules) and write tools (apply_fix, refactor, verify_clean) to self-correct against engine-specific patterns. Humans (via Qodana + TeamCity) operate on aspect views — quality trend, blockers, leakage, velocity, rule policy, verdict — instead of approving every diff.
Engine depth is the moat: Unity GC + Burst, Unreal Blueprint + UPROPERTY/macro/RPC, Godot GDScript typing — none of these are visible to a context-less agent. ReSharper's rule library is the only one of its kind for game-dev languages.
Quick-fix paths matter: Rider doesn't just flag — it offers a user-friendly remediation route (object pool, extract C++, add type annotation) that both agents and humans can apply confidently.
The comparison: pure agents fix blindly; Rider-mediated agents fix with grounded context. Defect leakage drops, velocity rises, humans escape the diff treadmill.
-->
