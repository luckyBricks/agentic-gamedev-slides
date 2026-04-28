<script setup lang="ts">
const issues = [
  { id: 'GC', label: 'GC Alloc', color: 'rgba(255,183,0,0.85)' },
  { id: 'BLK', label: 'Blocking call', color: 'rgba(255,148,25,0.85)' },
  { id: 'BP', label: 'BP complexity', color: 'rgba(255,10,103,0.85)' },
]
</script>

<template>
  <!-- ══ Outer stage frame ════════════════════════════════════════════════ -->
  <div class="relative w-full overflow-hidden"
    style="background: rgba(255,255,255,0.06);
           border: 1px solid rgba(255,255,255,0.14);
           border-radius: 14px;
           backdrop-filter: blur(16px);
           -webkit-backdrop-filter: blur(16px);
           box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 16px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12);">

    <!-- Top accent rule (amber) -->
    <div class="absolute top-0 left-6 h-px"
      style="width: 72px; background: #ffb700; opacity: 0.8;"></div>

    <!-- Stage caption -->
    <div class="absolute top-3 right-5 font-mono select-none"
      style="font-size: 9.5px; letter-spacing: 0.12em; color: rgba(255,255,255,0.28);">
      inspection flow
    </div>

    <!-- ── MAIN FLOW ─────────────────────────────────────────────────── -->
    <div class="flex items-stretch gap-0 px-5 pt-9 pb-4" style="min-height: 0; flex: 1;">

      <!-- ─── Agent Side ────────────────────────────────────────────── -->
      <div class="flex flex-col flex-shrink-0 justify-start" style="width: 118px;">
        <div class="font-mono mb-2"
          style="font-size: 9.5px; letter-spacing: 0.06em; color: rgba(255,255,255,0.35);">
          <span style="color: #ffb700;">01</span> · Agent
        </div>
        <div class="flex flex-col gap-2">

          <!-- Junie -->
          <div class="flex items-center gap-2 rounded-[10px]"
            style="padding: 7px 10px;
                   background: rgba(255,255,255,0.05);
                   border: 1px solid rgba(255,255,255,0.11);">
            <img src="/docs/brand-assets/Junie/Junie_icon.svg"
              style="height: 20px; width: 20px; flex-shrink: 0;" alt="Junie" />
            <div class="leading-tight">
              <div class="text-white" style="font-size: 11px; font-weight: 700;">Junie</div>
              <div class="font-mono" style="font-size: 7px; color: rgba(255,255,255,0.30);">native agent</div>
            </div>
          </div>

          <!-- Change submitted chip -->
          <div class="rounded-[8px] px-2 py-1.5"
            style="background: rgba(255,183,0,0.10); border: 1px solid rgba(255,183,0,0.30);">
            <div class="font-mono" style="font-size: 7.5px; color: rgba(255,183,0,0.85); letter-spacing: 0.05em;">↑ change ready</div>
            <div class="mt-0.5 font-mono" style="font-size: 7px; color: rgba(255,255,255,0.30);">auto-triggered MCP call</div>
          </div>

          <!-- Self-correct chip (appears on loop back) -->
          <div class="rounded-[8px] px-2 py-1.5 mt-1"
            style="background: rgba(255,10,103,0.08); border: 1px solid rgba(255,10,103,0.25);">
            <div class="font-mono" style="font-size: 7.5px; color: rgba(255,90,140,0.85); letter-spacing: 0.05em;">↺ self-correct</div>
            <div class="mt-0.5 font-mono" style="font-size: 7px; color: rgba(255,255,255,0.25);">no human in loop</div>
          </div>

        </div>
      </div>

      <!-- ── Arrow → ── -->
      <div class="flex flex-col items-center justify-center flex-shrink-0" style="width: 28px; padding-top: 18px;">
        <div style="flex: 1; width: 1px; background: linear-gradient(to bottom, transparent, rgba(255,183,0,0.45) 30%, rgba(255,183,0,0.45) 70%, transparent);"></div>
        <div style="flex: 1; display: flex; align-items: center;">
          <span style="color: rgba(255,183,0,0.7); font-size: 16px; line-height: 1; transform: rotate(-90deg); display: block;">›</span>
        </div>
        <div style="flex: 1; width: 1px; background: transparent;"></div>
      </div>

      <!-- ─── Rider Inspection Bridge (center) ─────────────────────── -->
      <div class="flex flex-col flex-1 relative rounded-[12px]"
        style="padding: 13px 15px 12px;
               background: rgba(255,183,0,0.05);
               border: 1px solid rgba(255,183,0,0.22);
               box-shadow: inset 0 0 32px rgba(255,183,0,0.04);">

        <!-- Glow -->
        <div class="absolute inset-0 rounded-[12px] pointer-events-none"
          style="box-shadow: 0 0 0 1px rgba(255,183,0,0.10);"></div>

        <!-- Header -->
        <div class="flex items-center gap-2.5 mb-3">
          <div class="relative flex-shrink-0">
            <div class="absolute inset-0 rounded-full pointer-events-none"
              style="background: #ffb700; opacity: 0.15; filter: blur(12px); transform: scale(1.8);"></div>
            <img src="/docs/brand-assets/Rider/Rider_icon.svg"
              style="height: 36px; width: 36px; position: relative;" alt="Rider" />
          </div>
          <div class="flex-1">
            <div class="text-white" style="font-size: 17px; font-weight: 800; line-height: 1; letter-spacing: -0.01em;">Rider</div>
            <div style="font-size: 9px; color: #FF0A67; margin-top: 3px; font-weight: 600;">Inspection Bridge · MCP</div>
          </div>
          <div class="font-mono px-2 py-0.5 rounded flex-shrink-0"
            style="font-size: 7.5px; font-weight: 600; letter-spacing: 0.06em;
                   color: rgba(255,183,0,0.9);
                   background: rgba(255,183,0,0.14);
                   border: 1px solid rgba(255,183,0,0.38);">
            PSI · full context
          </div>
        </div>

        <!-- Capability rows -->
        <div class="flex flex-col gap-1.5 flex-1">

          <div class="flex items-start gap-2.5" style="padding: 2px 0;">
            <div style="width: 2.5px; background: #ffb700; flex-shrink: 0; border-radius: 1.5px; height: 32px; margin-top: 2px;"></div>
            <div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.28); letter-spacing: 0.04em; line-height: 1;">Semantic Scope</div>
              <div class="text-white" style="font-size: 11px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                Symbol graph · call-chain · dep tree
              </div>
            </div>
          </div>

          <div class="flex items-start gap-2.5" style="padding: 2px 0;">
            <div style="width: 2.5px; background: #ff9419; flex-shrink: 0; border-radius: 1.5px; height: 32px; margin-top: 2px;"></div>
            <div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.28); letter-spacing: 0.04em; line-height: 1;">Engine Rules</div>
              <div class="text-white" style="font-size: 11px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                ReSharper 20 yr+ rules · Unity GC · UE Blueprint
              </div>
            </div>
          </div>

          <div class="flex items-start gap-2.5" style="padding: 2px 0;">
            <div style="width: 2.5px; background: #FF0A67; flex-shrink: 0; border-radius: 1.5px; height: 32px; margin-top: 2px;"></div>
            <div>
              <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.28); letter-spacing: 0.04em; line-height: 1;">Verdict</div>
              <div class="text-white" style="font-size: 11px; font-weight: 600; line-height: 1.3; margin-top: 2px;">
                Structured findings before submit — not after merge
              </div>
            </div>
          </div>

        </div>

        <!-- Issue finding chips -->
        <div class="flex items-center gap-1.5 mt-3 pt-2.5 flex-wrap"
          style="border-top: 1px solid rgba(255,255,255,0.06);">
          <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.25); letter-spacing: 0.06em; white-space: nowrap;">detected →</div>
          <div v-for="issue in issues" :key="issue.id"
            class="font-mono px-1.5 py-0.5 rounded"
            :style="`font-size: 7.5px; font-weight: 600; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); color: ${issue.color}; white-space: nowrap;`">
            {{ issue.label }}
          </div>
        </div>

      </div>

      <!-- ── Arrow → ── -->
      <div class="flex flex-col items-center justify-center flex-shrink-0" style="width: 28px; padding-top: 18px;">
        <div style="flex: 1; width: 1px; background: linear-gradient(to bottom, transparent, rgba(255,183,0,0.35) 30%, rgba(255,183,0,0.35) 70%, transparent);"></div>
        <div style="flex: 1; display: flex; align-items: center;">
          <span style="color: rgba(255,183,0,0.6); font-size: 16px; line-height: 1; transform: rotate(-90deg); display: block;">›</span>
        </div>
        <div style="flex: 1; width: 1px; background: transparent;"></div>
      </div>

      <!-- ─── Policy Dashboard (right) ─────────────────────────────── -->
      <div class="flex flex-col flex-shrink-0 justify-start" style="width: 112px;">
        <div class="font-mono mb-2"
          style="font-size: 9.5px; letter-spacing: 0.06em; color: rgba(255,255,255,0.35);">
          <span style="color: #ffb700;">02</span> · Human
        </div>
        <div class="flex flex-col gap-2">

          <!-- Policy Dashboard card -->
          <div class="rounded-[10px]"
            style="padding: 10px 11px;
                   background: rgba(255,255,255,0.05);
                   border: 1px solid rgba(255,255,255,0.11);">
            <div class="font-mono" style="font-size: 7.5px; color: rgba(255,255,255,0.28); letter-spacing: 0.04em;">Policy Dashboard</div>
            <div class="text-white" style="font-size: 11.5px; font-weight: 700; line-height: 1.3; margin-top: 4px;">Trends & blockers</div>
            <div class="font-mono mt-1" style="font-size: 7px; color: rgba(255,255,255,0.25);">not a diff queue</div>
          </div>

          <!-- Metrics row -->
          <div class="grid grid-cols-2 gap-1">
            <div class="rounded-[7px] p-1.5 text-center"
              style="background: rgba(72,224,84,0.08); border: 1px solid rgba(72,224,84,0.22);">
              <div style="font-size: 14px; font-weight: 800; color: rgba(72,224,84,0.9); line-height: 1;">↓</div>
              <div class="font-mono" style="font-size: 6.5px; color: rgba(255,255,255,0.30); margin-top: 2px;">leakage</div>
            </div>
            <div class="rounded-[7px] p-1.5 text-center"
              style="background: rgba(255,183,0,0.08); border: 1px solid rgba(255,183,0,0.22);">
              <div style="font-size: 14px; font-weight: 800; color: rgba(255,183,0,0.9); line-height: 1;">↑</div>
              <div class="font-mono" style="font-size: 6.5px; color: rgba(255,255,255,0.30); margin-top: 2px;">velocity</div>
            </div>
          </div>

          <!-- Clean badge -->
          <div class="rounded-[8px] px-2 py-1.5"
            style="background: rgba(72,224,84,0.07); border: 1px solid rgba(72,224,84,0.22);">
            <div class="font-mono" style="font-size: 7.5px; color: rgba(72,224,84,0.85); font-weight: 600;">✓ clean → merge</div>
            <div class="font-mono mt-0.5" style="font-size: 7px; color: rgba(255,255,255,0.25);">zero review queue</div>
          </div>

        </div>
      </div>

    </div>

    <!-- ── SELF-CORRECT LOOP ─────────────────────────────────────────────── -->
    <div class="mx-5 mb-4 mt-0">
      <div class="flex items-center gap-2">
        <div style="flex: 0 0 auto; width: 0; height: 0;
                    border-top: 3px solid transparent;
                    border-bottom: 3px solid transparent;
                    border-right: 5px solid rgba(255,10,103,0.50);"></div>
        <div class="font-mono" style="font-size: 8px; letter-spacing: 0.10em; color: rgba(255,255,255,0.20); white-space: nowrap; flex-shrink: 0;">
          SELF-CORRECT LOOP
        </div>
        <div style="flex: 1; height: 1px; background: linear-gradient(to right, rgba(255,10,103,0.28), transparent);"></div>
        <div class="font-mono flex-shrink-0" style="font-size: 7.5px; color: rgba(255,255,255,0.18);">
          agent fixes against engine rules, no human reviewer needed
        </div>
      </div>
    </div>

  </div>
</template>
