<script setup lang="ts"></script>

<template>
  <!-- ══ Outer stage frame ═══════════════════════════════════════════════ -->
  <div class="relative w-full overflow-hidden rider-stage"
    style="min-height: 456px;
           background: rgba(255,255,255,0.11);
           border: 1px solid rgba(255,255,255,0.20);
           border-radius: 14px;
           backdrop-filter: blur(16px);
           -webkit-backdrop-filter: blur(16px);
           box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 16px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.18);">

    <!-- Single quiet top rule — chapter-tinted, left-anchored -->
    <div class="absolute top-0 left-6 h-px"
      style="width: 72px; background: var(--mandala-c, #e73cff); opacity: 0.75;"></div>

    <!-- Stage caption -->
    <div class="absolute top-3 right-5 font-mono select-none"
      style="font-size: 9.5px; letter-spacing: 0.12em; color: rgba(255,255,255,0.3);">
      workflow-01.flow
    </div>

    <!-- ── MAIN FLOW ──────────────────────────────────────────────────── -->
    <div class="flex items-stretch gap-3 px-6 pt-10 pb-3">

      <!-- ─── 01 · Inputs (expanded) ─────────────────────────────────── -->
      <div class="flex flex-col flex-shrink-0" style="width: 156px;">
        <div class="font-mono mb-2.5"
          style="font-size: 10px; letter-spacing: 0.06em; color: rgba(255,255,255,0.38);">
          <span style="color: var(--mandala-b,#9a4bff);">01</span> · Inputs
        </div>
        <div class="flex flex-col gap-1.5 flex-1 justify-center">

          <div class="rider-card flex items-center gap-2.5" style="padding: 8px 11px;">
            <img src="/docs/brand-assets/YouTrack/YouTrack_icon.svg" class="flex-shrink-0" style="height: 26px; width: 26px;" alt="YouTrack" />
            <div class="leading-tight">
              <div class="text-white" style="font-size: 12px; font-weight: 700;">YouTrack</div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em;">native · VCS-linked</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2.5" style="padding: 8px 11px;">
            <img src="/docs/brand-assets/jira.svg" class="flex-shrink-0" style="height: 22px; width: 22px;" alt="Jira" />
            <div class="leading-tight">
              <div style="font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.75);">Jira</div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em;">integration</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2.5" style="padding: 8px 11px;">
            <div class="flex-shrink-0 flex items-center justify-center"
              style="width: 22px; height: 22px; background: rgba(255,255,255,0.07); border-radius: 5px; font-size: 13px; line-height: 1;">⚙</div>
            <div class="leading-tight">
              <div style="font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.65);">GitHub Issues</div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em;">plugin</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2.5" style="padding: 8px 11px;">
            <div class="flex-shrink-0 flex items-center justify-center"
              style="width: 22px; height: 22px; background: rgba(255,255,255,0.07); border-radius: 5px; font-size: 12px; line-height: 1;">💬</div>
            <div class="leading-tight">
              <div style="font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.65);">Slack / Chat</div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em;">MCP connector</div>
            </div>
          </div>

          <div class="flex items-center gap-2 rounded" style="padding: 7px 11px; border: 1px dashed rgba(255,255,255,0.16); background: rgba(255,255,255,0.03);">
            <div style="font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.38); letter-spacing: 0.01em;">+ Any via MCP / REST</div>
          </div>

        </div>
      </div>

      <!-- ── Arrow col → ── -->
      <div class="flex flex-col items-center justify-around flex-shrink-0" style="width: 22px; padding: 28px 0;">
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
      </div>

      <!-- ─── 02 · Rider Hub (dominant center) ───────────────────────── -->
      <div class="rider-card rider-card--accent flex-1 flex flex-col relative" style="padding: 16px 18px 14px 18px;">

        <!-- Subtle ambient glow behind hub -->
        <div class="absolute inset-0 rounded-[13px] pointer-events-none"
          style="box-shadow: inset 0 0 48px rgba(155,75,255,0.07);"></div>

        <!-- Header: Large Rider icon + wordmark + hub badge -->
        <div class="flex items-center gap-4 mb-4">
          <div class="relative flex-shrink-0">
            <div class="absolute inset-0 rounded-full pointer-events-none"
              style="background: var(--mandala-b,#9a4bff); opacity: 0.20; filter: blur(14px); transform: scale(1.7);"></div>
            <img src="/docs/brand-assets/Rider/Rider_icon.svg"
              style="height: 50px; width: 50px; position: relative;" alt="Rider" />
          </div>
          <div>
            <div class="text-white" style="font-size: 23px; font-weight: 800; line-height: 1; letter-spacing: -0.01em;">Rider</div>
            <div class="font-mono" style="font-size: 10px; font-weight: 700; letter-spacing: 0.14em; color: #FF0A67; margin-top: 4px;">
              SHARED EXECUTION HUB
            </div>
          </div>
          <div class="ml-auto">
            <div class="font-mono text-right" style="font-size: 8.5px; color: rgba(255,255,255,0.28); letter-spacing: 0.06em; line-height: 1.6;">
              unified context<br>unified tooling<br>unified control
            </div>
          </div>
        </div>

        <!-- Hub capability rows -->
        <div class="flex flex-col gap-2 flex-1">

          <div class="flex items-stretch gap-3" style="padding: 4px 0;">
            <div style="width: 3px; background: var(--mandala-b,#9a4bff); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em; line-height: 1;">Context</div>
              <div class="text-white" style="font-size: 12.5px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                Full project semantics — symbol graph, call-chain, dep tree
              </div>
            </div>
          </div>

          <div class="flex items-stretch gap-3" style="padding: 4px 0;">
            <div style="width: 3px; background: var(--mandala-b,#9a4bff); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em; line-height: 1;">Impact Analysis</div>
              <div class="text-white" style="font-size: 12.5px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                Blast radius · conflict preview · refactoring safety bounds
              </div>
            </div>
          </div>

          <div class="flex items-stretch gap-3" style="padding: 4px 0;">
            <div style="width: 3px; background: var(--mandala-b,#9a4bff); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em; line-height: 1;">Execution</div>
              <div class="text-white" style="font-size: 12.5px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                All agent tool calls via IDE — auditable, stoppable, reversible
              </div>
            </div>
          </div>

          <div class="flex items-stretch gap-3" style="padding: 4px 0;">
            <div style="width: 3px; background: var(--mandala-b,#9a4bff); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em; line-height: 1;">Human Control</div>
              <div class="text-white" style="font-size: 12.5px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                Reviewable plan — sensitive actions require human approval
              </div>
            </div>
          </div>

        </div>

        <!-- Footer bar -->
        <div class="flex items-center justify-between mt-3 pt-2.5" style="border-top: 1px solid rgba(255,255,255,0.06);">
          <div class="font-mono" style="font-size: 10px; letter-spacing: 0.06em; color: rgba(255,255,255,0.38);">
            <span style="color: var(--mandala-b,#9a4bff);">02</span> · Hub
          </div>
          <div class="font-mono" style="font-size: 10px; font-weight: 600; color: #FF0A67; letter-spacing: 0.02em;">
            ← generic AI skips this
          </div>
        </div>

      </div>

      <!-- ── Arrow col → ── -->
      <div class="flex flex-col items-center justify-around flex-shrink-0" style="width: 22px; padding: 28px 0;">
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
      </div>

      <!-- ─── 03 · Agents (expanded) + Plan Output ────────────────────── -->
      <div class="flex flex-col flex-shrink-0" style="width: 152px;">
        <div class="font-mono mb-2.5"
          style="font-size: 10px; letter-spacing: 0.06em; color: rgba(255,255,255,0.38);">
          <span style="color: var(--mandala-b,#9a4bff);">03</span> · Agents
        </div>
        <div class="flex flex-col gap-1.5">

          <div class="rider-card flex items-center gap-2" style="padding: 8px 10px;">
            <img src="/docs/brand-assets/Junie/Junie_icon.svg" class="flex-shrink-0" style="height: 24px; width: 24px;" alt="Junie" />
            <div class="leading-tight">
              <div class="text-white" style="font-size: 11.5px; font-weight: 700;">Junie</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em;">native</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2" style="padding: 8px 10px;">
            <img src="/docs/brand-assets/claude.svg" class="flex-shrink-0" style="height: 20px; width: 20px;" alt="Claude" />
            <div class="leading-tight">
              <div style="font-size: 11.5px; font-weight: 700; color: rgba(255,255,255,0.75);">Claude Code</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em;">ACP</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2" style="padding: 8px 10px;">
            <img src="/docs/brand-assets/codex.svg" class="flex-shrink-0" style="height: 20px; width: 20px;" alt="Codex" />
            <div class="leading-tight">
              <div style="font-size: 11.5px; font-weight: 700; color: rgba(255,255,255,0.75);">Codex</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.35); letter-spacing: 0.04em;">ACP</div>
            </div>
          </div>

          <div class="flex items-center rounded" style="padding: 6px 10px; border: 1px dashed rgba(255,255,255,0.16); background: rgba(255,255,255,0.03);">
            <div style="font-size: 10.5px; font-weight: 600; color: rgba(255,255,255,0.4);">Any ACP Agent</div>
          </div>

          <div class="flex items-center rounded" style="padding: 6px 10px; border: 1px dashed rgba(255,255,255,0.16); background: rgba(255,255,255,0.03);">
            <div style="font-size: 10.5px; font-weight: 600; color: rgba(255,255,255,0.4);">IntelliJ Plugins</div>
          </div>

        </div>

        <!-- Connector ↓ to plan output -->
        <div class="flex flex-col items-center" style="padding: 6px 0 4px;">
          <div style="width: 1px; height: 10px; background: var(--mandala-b,#9a4bff); opacity: 0.55;"></div>
          <span style="color: var(--mandala-b,#9a4bff); font-size: 10px; opacity: 0.75; line-height: 1;">▾</span>
        </div>

        <!-- Plan output card -->
        <div class="rider-card" style="padding: 10px 11px;">
          <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.38); letter-spacing: 0.04em;">Output</div>
          <div class="text-white" style="font-size: 12.5px; font-weight: 700; line-height: 1.3; margin-top: 3px;">Reviewable Plan</div>
          <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.38); margin-top: 3px; letter-spacing: 0.03em;">scope · risks · checklist</div>
        </div>

      </div>

    </div>

    <!-- ── KNOWLEDGE FEEDBACK LOOP ──────────────────────────────────────
         Agents resolve the issue → output enriches enterprise KB →
         KB becomes context for future inputs (compounding intelligence)
    ─────────────────────────────────────────────────────────────────── -->
    <div class="mx-6 mb-5 mt-1">

      <!-- Divider with left-pointing feedback arrow -->
      <div class="relative flex items-center" style="margin-bottom: 8px;">
        <!-- Arrow tip (pointing left — knowledge flows back to inputs) -->
        <div class="flex-shrink-0"
          style="width: 0; height: 0;
                 border-top: 4px solid transparent;
                 border-bottom: 4px solid transparent;
                 border-right: 7px solid rgba(155,75,255,0.55);"></div>
        <!-- Feedback track line -->
        <div class="flex-1"
          style="height: 1px; background: linear-gradient(to left, rgba(155,75,255,0.12), rgba(155,75,255,0.5));"></div>
        <!-- Right label -->
        <div class="flex-shrink-0 font-mono ml-3"
          style="font-size: 8.5px; letter-spacing: 0.08em; color: rgba(255,255,255,0.22);">
          KNOWLEDGE FEEDBACK
        </div>
      </div>

      <!-- Feedback content row -->
      <div class="flex items-center gap-3">

        <!-- Enterprise KB destination (left — where knowledge returns) -->
        <div class="flex items-center gap-2 flex-shrink-0">
          <div class="flex items-center justify-center rounded"
            style="width: 30px; height: 30px;
                   background: rgba(155,75,255,0.14);
                   border: 1px solid rgba(155,75,255,0.35);">
            <span class="font-mono" style="font-size: 9px; font-weight: 800; color: rgba(155,75,255,0.9); letter-spacing: -0.02em;">KB</span>
          </div>
          <div>
            <div class="text-white" style="font-size: 10.5px; font-weight: 700; line-height: 1.25;">Enterprise KB</div>
            <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.32); letter-spacing: 0.04em;">Knowledge Graph</div>
          </div>
        </div>

        <!-- Knowledge types flowing back -->
        <div class="flex items-center gap-2 flex-1">
          <div class="font-mono px-2 py-1 rounded"
            style="font-size: 8.5px; color: rgba(255,255,255,0.48); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); letter-spacing: 0.04em; white-space: nowrap;">
            Resolution Log
          </div>
          <span style="color: rgba(255,255,255,0.18); font-size: 10px;">·</span>
          <div class="font-mono px-2 py-1 rounded"
            style="font-size: 8.5px; color: rgba(255,255,255,0.48); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); letter-spacing: 0.04em; white-space: nowrap;">
            Learned Patterns
          </div>
          <span style="color: rgba(255,255,255,0.18); font-size: 10px;">·</span>
          <div class="font-mono px-2 py-1 rounded"
            style="font-size: 8.5px; color: rgba(255,255,255,0.48); background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); letter-spacing: 0.04em; white-space: nowrap;">
            Doc Entries
          </div>
        </div>

        <!-- Right note: feeds future inputs -->
        <div class="flex-shrink-0 font-mono text-right"
          style="font-size: 8px; color: rgba(255,255,255,0.25); letter-spacing: 0.04em; line-height: 1.5;">
          compounds team<br>intelligence ↑
        </div>

      </div>
    </div>

  </div>
</template>
