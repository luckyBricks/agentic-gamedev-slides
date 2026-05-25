<script setup lang="ts"></script>

<template>
  <!-- ══ Outer stage frame ════════════════════════════════════════════════ -->
  <div class="relative w-full overflow-hidden rider-stage"
    style="background: rgba(255,255,255,0.11);
           border: 1px solid rgba(255,255,255,0.20);
           border-radius: 14px;
           backdrop-filter: blur(16px);
           -webkit-backdrop-filter: blur(16px);
           box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 16px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.18);">

    <!-- Top accent rule -->
    <div class="absolute top-0 left-6 h-px"
      style="width: 72px; background: var(--mandala-c, #C026D3); opacity: 0.75;"></div>

    <!-- Stage caption -->
    <div class="absolute top-3 right-5 font-mono select-none"
      style="font-size: 9.5px; letter-spacing: 0.12em; color: rgba(255,255,255,0.28);">
      AI workflow
    </div>

    <!-- ── MAIN FLOW ─────────────────────────────────────────────────────── -->
    <div class="flex items-stretch gap-0 px-6 pt-10 pb-3">

      <!-- ─── 01 · Inputs ──────────────────────────────────────────────── -->
      <div class="flex flex-col flex-shrink-0" style="width: 148px;">
        <div class="font-mono mb-2.5"
          style="font-size: 10px; letter-spacing: 0.06em; color: rgba(255,255,255,0.38);">
          <span style="color: var(--mandala-b,#8B5CF6);">01</span> · Inputs
        </div>
        <div class="flex flex-col gap-1.5 flex-1 justify-center">

          <div class="rider-card flex items-center gap-2.5" style="padding: 7px 10px;">
            <img src="/docs/brand-assets/YouTrack/YouTrack_icon.svg" class="flex-shrink-0" style="height: 24px; width: 24px;" alt="YouTrack" />
            <div class="leading-tight">
              <div class="text-white" style="font-size: 11.5px; font-weight: 700;">YouTrack</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.32);">native · VCS-linked</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2.5" style="padding: 7px 10px;">
            <img src="/docs/brand-assets/jira.svg" class="flex-shrink-0" style="height: 21px; width: 21px;" alt="Jira" />
            <div class="leading-tight">
              <div style="font-size: 11.5px; font-weight: 700; color: rgba(255,255,255,0.75);">Jira</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.32);">integration</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2.5" style="padding: 7px 10px;">
            <img src="/docs/brand-assets/GitHub.svg" class="flex-shrink-0" style="height: 21px; width: 21px; filter: invert(1) opacity(0.85);" alt="GitHub" />
            <div class="leading-tight">
              <div style="font-size: 11.5px; font-weight: 700; color: rgba(255,255,255,0.65);">GitHub Issues</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.32);">plugin</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2.5" style="padding: 7px 10px;">
            <div class="flex-shrink-0 flex items-center justify-center"
              style="width: 21px; height: 21px; background: rgba(255,255,255,0.07); border-radius: 5px; font-size: 12px; line-height: 1;">💬</div>
            <div class="leading-tight">
              <div style="font-size: 11.5px; font-weight: 700; color: rgba(255,255,255,0.65);">Slack / Chat</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.32);">MCP connector</div>
            </div>
          </div>

          <div class="flex items-center rounded" style="padding: 6px 10px; border: 1px dashed rgba(255,255,255,0.14); background: rgba(255,255,255,0.03);">
            <div style="font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.35);">+ More on IJ Platform</div>
          </div>

        </div>
      </div>

      <!-- ── Arrow → ── -->
      <div class="flex items-center justify-center flex-shrink-0" style="width: 32px;">
        <span style="color: var(--mandala-b,#8B5CF6); font-size: 20px; opacity: 0.65;">›</span>
      </div>

      <!-- ─── 02 · Rider Hub ───────────────────────────────────────────── -->
      <div class="rider-card rider-card--accent flex-1 flex flex-col relative" style="padding: 15px 17px 13px 17px;">

        <div class="absolute inset-0 rounded-[13px] pointer-events-none"
          style="box-shadow: inset 0 0 48px rgba(155,75,255,0.07);"></div>

        <!-- Header -->
        <div class="flex items-center gap-3 mb-4">
          <div class="relative flex-shrink-0">
            <div class="absolute inset-0 rounded-full pointer-events-none"
              style="background: var(--mandala-b,#8B5CF6); opacity: 0.18; filter: blur(14px); transform: scale(1.7);"></div>
            <img src="/docs/brand-assets/Rider/Rider_icon.svg"
              style="height: 46px; width: 46px; position: relative;" alt="Rider" />
          </div>
          <div class="flex-1">
            <div class="text-white" style="font-size: 22px; font-weight: 800; line-height: 1; letter-spacing: -0.01em;">Rider</div>
            <div style="font-size: 10px; color: #FF0A67; margin-top: 4px;">Shared Execution Hub</div>
          </div>
          <div class="flex-shrink-0">
            <div class="font-mono px-2 py-1 rounded"
              style="font-size: 8px; font-weight: 600; letter-spacing: 0.06em;
                     color: rgba(175,110,255,0.9);
                     background: rgba(155,75,255,0.14);
                     border: 1px solid rgba(155,75,255,0.35);
                     white-space: nowrap;">
              MCP Server
            </div>
          </div>
        </div>

        <!-- Capability rows -->
        <div class="flex flex-col gap-2 flex-1">

          <div class="flex items-stretch gap-3" style="padding: 3px 0;">
            <div style="width: 3px; background: var(--mandala-b,#8B5CF6); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.30); letter-spacing: 0.04em; line-height: 1;">Context</div>
              <div class="text-white" style="font-size: 12px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                Full project semantics — symbol graph, call-chain, dep tree
              </div>
            </div>
          </div>

          <div class="flex items-stretch gap-3" style="padding: 3px 0;">
            <div style="width: 3px; background: var(--mandala-b,#8B5CF6); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.30); letter-spacing: 0.04em; line-height: 1;">Impact Analysis</div>
              <div class="text-white" style="font-size: 12px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                Blast radius · conflict preview · refactoring safety bounds
              </div>
            </div>
          </div>

          <div class="flex items-stretch gap-3" style="padding: 3px 0;">
            <div style="width: 3px; background: var(--mandala-b,#8B5CF6); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.30); letter-spacing: 0.04em; line-height: 1;">Execution</div>
              <div class="text-white" style="font-size: 12px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                All agent tool calls via IDE — auditable, stoppable, reversible
              </div>
            </div>
          </div>

          <div class="flex items-stretch gap-3" style="padding: 3px 0;">
            <div style="width: 3px; background: var(--mandala-b,#8B5CF6); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.30); letter-spacing: 0.04em; line-height: 1;">Human Control</div>
              <div class="text-white" style="font-size: 12px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                Reviewable plan — sensitive actions require human approval
              </div>
            </div>
          </div>

        </div>

        <!-- Footer -->
        <div class="flex items-center justify-between mt-3 pt-2.5"
          style="border-top: 1px solid rgba(255,255,255,0.06);">
          <div class="font-mono" style="font-size: 10px; letter-spacing: 0.06em; color: rgba(255,255,255,0.35);">
            <span style="color: var(--mandala-b,#8B5CF6);">02</span> · Hub
          </div>
          <div class="font-mono" style="font-size: 10px; font-weight: 600; color: #FF0A67; letter-spacing: 0.02em;">
            ← generic AI skips this
          </div>
        </div>

      </div>

      <!-- ── Bidirectional Bridge: Rider ↔ Agents ──────────────────────── -->
      <div class="flex flex-col justify-center flex-shrink-0" style="width: 88px; gap: 6px; padding: 0 2px;">

        <!-- Rider → Agent call -->
        <div class="flex flex-col items-end" style="gap: 3px;">
          <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.42); letter-spacing: 0.05em; white-space: nowrap;">Call Agent</div>
          <div class="flex items-center w-full">
            <div style="flex:1; height: 1px; background: linear-gradient(to right, rgba(155,75,255,0.45), rgba(155,75,255,0.85));"></div>
            <span style="color: rgba(155,75,255,0.9); font-size: 15px; line-height: 1;">›</span>
          </div>
        </div>

        <!-- Value props -->
        <div class="flex flex-col gap-1 items-stretch">
          <div class="px-1.5 py-0.5 rounded font-mono text-center"
            style="font-size: 7px; background: rgba(155,75,255,0.12); border: 1px solid rgba(155,75,255,0.32); color: rgba(185,130,255,0.9); white-space: nowrap;">
            Richer Context
          </div>
          <div class="px-1.5 py-0.5 rounded font-mono text-center"
            style="font-size: 7px; background: rgba(155,75,255,0.12); border: 1px solid rgba(155,75,255,0.32); color: rgba(185,130,255,0.9); white-space: nowrap;">
            Token-Efficient
          </div>
          <div class="px-1.5 py-0.5 rounded font-mono text-center"
            style="font-size: 7px; background: rgba(255,10,103,0.13); border: 1px solid rgba(255,10,103,0.32); color: rgba(255,90,140,0.9); white-space: nowrap;">
            Live Review
          </div>
        </div>

        <!-- Agent → Rider MCP Server -->
        <div class="flex flex-col items-start" style="gap: 3px;">
          <div class="flex items-center w-full">
            <span style="color: rgba(155,75,255,0.65); font-size: 15px; line-height: 1; display: inline-block; transform: scaleX(-1);">›</span>
            <div style="flex:1; height: 1px; background: linear-gradient(to left, rgba(155,75,255,0.45), rgba(155,75,255,0.85));"></div>
          </div>
          <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.42); letter-spacing: 0.05em; white-space: nowrap;">Rider MCP Server</div>
        </div>

      </div>

      <!-- ─── 03 · Agents + Plan Output ────────────────────────────────── -->
      <div class="flex flex-col flex-shrink-0" style="width: 148px;">
        <div class="font-mono mb-2.5"
          style="font-size: 10px; letter-spacing: 0.06em; color: rgba(255,255,255,0.38);">
          <span style="color: var(--mandala-b,#8B5CF6);">03</span> · Coding Agents
        </div>
        <div class="flex flex-col gap-1.5">

          <div class="rider-card flex items-center gap-2" style="padding: 7px 10px;">
            <img src="/docs/brand-assets/Junie/Junie_icon.svg" class="flex-shrink-0" style="height: 22px; width: 22px;" alt="Junie" />
            <div class="leading-tight">
              <div class="text-white" style="font-size: 11.5px; font-weight: 700;">Junie</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.32);">native</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2" style="padding: 7px 10px;">
            <img src="/docs/brand-assets/claude.svg" class="flex-shrink-0" style="height: 20px; width: 20px;" alt="Claude" />
            <div class="leading-tight">
              <div style="font-size: 11.5px; font-weight: 700; color: rgba(255,255,255,0.75);">Claude Code</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.32);">ACP</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2" style="padding: 7px 10px;">
            <img src="/docs/brand-assets/codex.svg" class="flex-shrink-0" style="height: 20px; width: 20px;" alt="Codex" />
            <div class="leading-tight">
              <div style="font-size: 11.5px; font-weight: 700; color: rgba(255,255,255,0.75);">Codex</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.32);">ACP</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2" style="padding: 7px 10px;">
            <div class="flex-shrink-0 overflow-hidden" style="width: 20px; height: 20px;">
              <img src="/docs/brand-assets/cursor.svg" style="height: 20px; width: auto; max-width: none;" alt="Cursor" />
            </div>
            <div class="leading-tight">
              <div style="font-size: 11.5px; font-weight: 700; color: rgba(255,255,255,0.75);">Cursor Composer</div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.32);">ACP</div>
            </div>
          </div>

          <div class="flex items-center rounded" style="padding: 6px 10px; border: 1px dashed rgba(255,255,255,0.14); background: rgba(255,255,255,0.03);">
            <div style="font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.35);">Any ACP Agent</div>
          </div>

          <div class="flex items-center rounded" style="padding: 6px 10px; border: 1px dashed rgba(255,255,255,0.14); background: rgba(255,255,255,0.03);">
            <div style="font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.35);">IntelliJ Plugins</div>
          </div>

        </div>

        <!-- Connector ↓ to plan output -->
        <div class="flex flex-col items-center" style="padding: 5px 0 3px;">
          <div style="width: 1px; height: 10px; background: var(--mandala-b,#8B5CF6); opacity: 0.45;"></div>
          <span style="color: var(--mandala-b,#8B5CF6); font-size: 10px; opacity: 0.65; line-height: 1;">▾</span>
        </div>

        <!-- Plan output card -->
        <div class="rider-card" style="padding: 10px 11px;">
          <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.32); letter-spacing: 0.04em;">Output</div>
          <div class="text-white" style="font-size: 12.5px; font-weight: 700; line-height: 1.3; margin-top: 3px;">Reviewable Plan</div>
          <div class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.32); margin-top: 3px;">scope · risks · checklist</div>
        </div>

      </div>

    </div>

    <!-- ── KNOWLEDGE FEEDBACK ─────────────────────────────────────────────
         Agents resolve → enriches KB → KB feeds Rider context & Inputs
    ──────────────────────────────────────────────────────────────────── -->
    <div class="mx-6 mb-5 mt-0">

      <!-- Header rule -->
      <div class="flex items-center gap-2 mb-2">
        <div style="width: 0; height: 0;
                    border-top: 3px solid transparent;
                    border-bottom: 3px solid transparent;
                    border-right: 5px solid rgba(155,75,255,0.5);
                    flex-shrink: 0;"></div>
        <div class="font-mono" style="font-size: 8px; letter-spacing: 0.10em; color: rgba(255,255,255,0.20); white-space: nowrap; flex-shrink: 0;">KNOWLEDGE FEEDBACK</div>
        <div style="flex: 1; height: 1px; background: linear-gradient(to right, rgba(155,75,255,0.28), transparent);"></div>
        <div class="font-mono flex-shrink-0" style="font-size: 7.5px; color: rgba(255,255,255,0.18);">compounds team intelligence ↑</div>
      </div>

      <!-- Flow row: Agents → KB → Rider · Inputs -->
      <div class="flex items-center gap-2">

        <div class="flex items-center gap-1.5 px-2.5 py-1.5 rounded flex-shrink-0"
          style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);">
          <img src="/docs/brand-assets/Junie/Junie_icon.svg" style="height: 13px; width: 13px;" alt="" />
          <span class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.42);">Agents</span>
        </div>

        <span style="color: rgba(155,75,255,0.5); font-size: 14px; line-height: 1;">›</span>

        <div class="flex items-center gap-1.5 px-2.5 py-1.5 rounded flex-shrink-0"
          style="background: rgba(155,75,255,0.10); border: 1px solid rgba(155,75,255,0.30);">
          <span class="font-mono" style="font-size: 8.5px; font-weight: 700; color: rgba(155,75,255,0.9);">KB</span>
          <span class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.30);">enriched</span>
        </div>

        <span style="color: rgba(155,75,255,0.5); font-size: 14px; line-height: 1;">›</span>

        <div class="flex items-center gap-1.5 px-2.5 py-1.5 rounded flex-shrink-0"
          style="background: rgba(155,75,255,0.07); border: 1px solid rgba(155,75,255,0.20);">
          <img src="/docs/brand-assets/Rider/Rider_icon.svg" style="height: 13px; width: 13px;" alt="" />
          <span class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.42);">Rider context</span>
        </div>

        <span style="color: rgba(255,255,255,0.15); font-size: 11px; line-height: 1;">+</span>

        <div class="flex items-center px-2.5 py-1.5 rounded flex-shrink-0"
          style="background: rgba(155,75,255,0.07); border: 1px solid rgba(155,75,255,0.20);">
          <span class="font-mono" style="font-size: 8px; color: rgba(255,255,255,0.42);">Inputs triage</span>
        </div>

        <!-- Knowledge type chips — pushed right -->
        <div class="flex items-center gap-1.5 ml-auto">
          <div class="font-mono px-2 py-1 rounded"
            style="font-size: 7.5px; color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); white-space: nowrap;">
            Resolution Log
          </div>
          <div class="font-mono px-2 py-1 rounded"
            style="font-size: 7.5px; color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); white-space: nowrap;">
            Patterns
          </div>
          <div class="font-mono px-2 py-1 rounded"
            style="font-size: 7.5px; color: rgba(255,255,255,0.35); background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); white-space: nowrap;">
            Doc Entries
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
