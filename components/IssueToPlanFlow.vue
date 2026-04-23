<script setup lang="ts"></script>

<template>
  <!-- ══ Outer stage frame ═════════════════════════════════════════════════
       Neutral glass card (per DESIGN §4 "Cards"): rgba(255,255,255,0.04)
       surface, 1px neutral border, 14px radius. No plum tint (forbidden by
       §2), no drop shadow (forbidden by §6). The mandala behind the slide
       supplies the ambient chapter color.
  ═══════════════════════════════════════════════════════════════════════ -->
  <div class="relative w-full overflow-hidden rider-stage"
    style="min-height: 392px;
           background: rgba(255,255,255,0.11);
           border: 1px solid rgba(255,255,255,0.20);
           border-radius: 14px;
           backdrop-filter: blur(16px);
           -webkit-backdrop-filter: blur(16px);
           box-shadow: 0 0 0 1px rgba(255,255,255,0.08), 0 16px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.18);">

    <!-- Single quiet top rule — 1px, chapter-tinted, left-anchored -->
    <div class="absolute top-0 left-6 h-px"
      style="width: 72px; background: var(--mandala-c, #e73cff); opacity: 0.75;"></div>

    <!-- Stage caption (top-right, JetBrains Mono, muted — like a file marker) -->
    <div class="absolute top-3 right-5 font-mono select-none"
      style="font-size: 9.5px; letter-spacing: 0.12em; color: rgba(255,255,255,0.3);">
      workflow-01.flow
    </div>

    <!-- ── Inner flow ────────────────────────────────────────────────── -->
    <div class="flex items-stretch gap-3 px-6 pt-10 pb-6" style="min-height: 392px;">

      <!-- ─── LEFT: Inputs ──────────────────────────────────────────── -->
      <div class="flex flex-col flex-shrink-0 w-[158px]">
        <div class="font-mono mb-3"
          style="font-size: 10px; letter-spacing: 0.06em; color: rgba(255,255,255,0.38);">
          <span style="color: var(--mandala-b,#9a4bff);">01</span> · Inputs
        </div>
        <div class="flex flex-col gap-3 flex-1 justify-center">

          <div class="rider-card flex items-center gap-3" style="padding: 12px 14px;">
            <img src="/docs/brand-assets/YouTrack/YouTrack_icon.svg"
              class="h-9 w-9 flex-shrink-0" alt="YouTrack" />
            <div class="leading-tight">
              <div class="text-white" style="font-size: 13px; font-weight: 700;">YouTrack</div>
              <div class="font-mono" style="font-size: 9.5px; color: rgba(255,255,255,0.4); letter-spacing: 0.04em;">native</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-3" style="padding: 12px 14px;">
            <img src="/docs/brand-assets/jira.svg"
              class="h-8 w-8 flex-shrink-0" alt="Jira" />
            <div class="leading-tight">
              <div style="font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.7);">Jira</div>
              <div class="font-mono" style="font-size: 9.5px; color: rgba(255,255,255,0.4); letter-spacing: 0.04em;">integration</div>
            </div>
          </div>

        </div>
      </div>

      <!-- ─── ARROWS → Rider ────────────────────────────────────────── -->
      <div class="flex flex-col items-center justify-around flex-shrink-0 py-10"
        style="width: 22px;">
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
      </div>

      <!-- ─── CENTER: Rider Hub ─────────────────────────────────────── -->
      <!--
        Glass card + .rider-card--accent gradient border (per DESIGN §4).
        No tinted fill, no drop shadow: the accent border + hub content
        do the emphasizing. The mandala's chapter color flows through
        the gradient border automatically.
      -->
      <div class="rider-card rider-card--accent flex-1 flex flex-col relative"
        style="padding: 18px 18px 16px 18px;">

        <!-- Header: Rider logo + wordmark + HUB subtitle -->
        <div class="flex items-center gap-3 mb-4">
          <img src="/docs/brand-assets/Rider/Rider_icon.svg"
            class="flex-shrink-0" style="height: 46px; width: 46px;" alt="Rider" />
          <div>
            <div class="text-white" style="font-size: 22px; font-weight: 800; line-height: 1; letter-spacing: -0.01em;">Rider</div>
            <div class="font-mono" style="font-size: 10px; font-weight: 700; letter-spacing: 0.12em; color: #FF0A67; margin-top: 4px;">
              Central Hub
            </div>
          </div>
        </div>

        <!-- Three hub statements — NO tinted row bg. Left accent bar only. -->
        <div class="flex flex-col gap-2 flex-1">

          <div class="flex items-stretch gap-3 py-1">
            <div style="width: 3px; background: var(--mandala-b,#9a4bff); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 9.5px; color: rgba(255,255,255,0.4); letter-spacing: 0.04em; line-height: 1;">
                Integrations
              </div>
              <div class="text-white" style="font-size: 13.5px; font-weight: 600; line-height: 1.35; margin-top: 3px;">
                All integrations through Rider
              </div>
            </div>
          </div>

          <div class="flex items-stretch gap-3 py-1">
            <div style="width: 3px; background: var(--mandala-b,#9a4bff); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 9.5px; color: rgba(255,255,255,0.4); letter-spacing: 0.04em; line-height: 1;">
                Context
              </div>
              <div class="text-white" style="font-size: 13.5px; font-weight: 600; line-height: 1.35; margin-top: 3px;">
                All content confirmed in Rider
              </div>
            </div>
          </div>

          <div class="flex items-stretch gap-3 py-1">
            <div style="width: 3px; background: var(--mandala-b,#9a4bff); flex-shrink: 0; border-radius: 1.5px;"></div>
            <div>
              <div class="font-mono" style="font-size: 9.5px; color: rgba(255,255,255,0.4); letter-spacing: 0.04em; line-height: 1;">
                Tool Calls
              </div>
              <div class="text-white" style="font-size: 13.5px; font-weight: 600; line-height: 1.35; margin-top: 3px;">
                All tool calls via Rider
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom row: step marker + critical note -->
        <div class="flex items-center justify-between mt-3 pt-2.5" style="border-top: 1px solid rgba(255,255,255,0.06);">
          <div class="font-mono" style="font-size: 10px; letter-spacing: 0.06em; color: rgba(255,255,255,0.38);">
            <span style="color: var(--mandala-b,#9a4bff);">02</span> · Hub
          </div>
          <div class="font-mono" style="font-size: 10px; font-weight: 600; color: #FF0A67; letter-spacing: 0.02em;">
            ← generic AI skips this
          </div>
        </div>

      </div>

      <!-- ─── ARROWS Rider → ────────────────────────────────────────── -->
      <div class="flex flex-col items-center justify-around flex-shrink-0 py-10"
        style="width: 22px;">
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
        <span style="color: var(--mandala-b,#9a4bff); font-size: 14px; opacity: 0.85; line-height: 1;">›</span>
      </div>

      <!-- ─── RIGHT: Agents + Plan ──────────────────────────────────── -->
      <div class="flex flex-col flex-shrink-0 w-[150px]">
        <div class="font-mono mb-3"
          style="font-size: 10px; letter-spacing: 0.06em; color: rgba(255,255,255,0.38);">
          <span style="color: var(--mandala-b,#9a4bff);">03</span> · Agents
        </div>
        <div class="flex flex-col gap-2 flex-1 justify-center">

          <div class="rider-card flex items-center gap-2.5" style="padding: 10px 12px;">
            <img src="/docs/brand-assets/Junie/Junie_icon.svg"
              class="h-8 w-8 flex-shrink-0" alt="Junie" />
            <div class="leading-tight">
              <div class="text-white" style="font-size: 13px; font-weight: 700;">Junie</div>
              <div class="font-mono" style="font-size: 9.5px; color: rgba(255,255,255,0.4); letter-spacing: 0.04em;">native</div>
            </div>
          </div>

          <div class="rider-card flex items-center gap-2.5" style="padding: 10px 12px;">
            <img src="/docs/brand-assets/claude.svg"
              class="h-7 w-7 flex-shrink-0" alt="Claude" />
            <div style="font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.7);">Claude</div>
          </div>

          <div class="rider-card flex items-center gap-2.5" style="padding: 10px 12px;">
            <img src="/docs/brand-assets/codex.svg"
              class="h-7 w-7 flex-shrink-0" alt="Codex" />
            <div style="font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.7);">Codex</div>
          </div>

        </div>

        <!-- Vertical connector -->
        <div class="flex flex-col items-center py-2">
          <div style="width: 1px; height: 14px; background: var(--mandala-b,#9a4bff); opacity: 0.55;"></div>
          <span style="color: var(--mandala-b,#9a4bff); font-size: 11px; opacity: 0.75; line-height: 1;">▾</span>
        </div>

        <!-- Plan output card -->
        <div class="rider-card" style="padding: 10px 12px;">
          <div class="font-mono" style="font-size: 9.5px; color: rgba(255,255,255,0.4); letter-spacing: 0.04em;">
            Output
          </div>
          <div class="text-white" style="font-size: 13px; font-weight: 700; line-height: 1.3; margin-top: 3px;">
            Reviewable Plan
          </div>
          <div class="font-mono" style="font-size: 9.5px; color: rgba(255,255,255,0.45); margin-top: 3px; letter-spacing: 0.04em;">
            scope · risks · checklist
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
