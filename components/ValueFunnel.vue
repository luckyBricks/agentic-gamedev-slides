<script setup lang="ts">
// Bar heights for the animated "volume wave" glyph
const bars = [6, 10, 14, 18, 14, 18, 22, 16, 20, 14, 10, 7]
</script>

<template>
  <div class="relative w-full flex flex-col gap-0 select-none">

    <!-- ① Generation layer: full-width, visually subdued -->
    <div class="flex flex-col gap-1.5 mb-4">
      <div class="flex items-center gap-2">
        <span class="text-[9px] font-medium text-white/25 tracking-widest">What AI does effortlessly</span>
        <div class="h-px flex-1 bg-white/8"></div>
        <span class="text-[9px] text-white/20 italic">now commoditized</span>
      </div>
      <div class="h-[56px] flex items-center justify-between px-4 rounded-lg border border-white/[0.07] bg-white/[0.03]">
        <div class="flex items-center gap-3">
          <!-- Mini volume-wave glyph -->
          <div class="flex items-end gap-[2px] opacity-20">
            <div
              v-for="(h, i) in bars" :key="i"
              class="w-[3px] rounded-full bg-white"
              :style="{ height: h + 'px' }"
            />
          </div>
          <div>
            <div class="text-[15px] font-semibold text-white/40 leading-tight">Code Generation</div>
            <div class="text-[10px] text-white/22 mt-0.5">Volume: unbounded &nbsp;·&nbsp; Marginal cost approaches zero</div>
          </div>
        </div>
        <div class="text-[38px] font-thin text-white/10 leading-none pr-1">∞</div>
      </div>
    </div>

    <!-- ② Separator: the human-review gap insight -->
    <div class="flex items-center gap-2.5 mb-4">
      <div class="flex-1 border-t border-dashed border-[#FF0A67]/20"></div>
      <div class="flex items-center gap-1.5 text-[9.5px] italic text-[#FF0A67]/55 whitespace-nowrap">
        <svg class="w-3 h-3 opacity-70 shrink-0" viewBox="0 0 16 16" fill="none">
          <path d="M8 2v12M3 9l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Humans cannot review all AI output — governance fills the gap
      </div>
      <div class="flex-1 border-t border-dashed border-[#FF0A67]/20"></div>
    </div>

    <!-- ③ Value layer: two equal cards, visually prominent -->
    <div class="grid grid-cols-2 gap-3">

      <!-- Quality Control -->
      <div class="flex flex-col gap-2 p-4 rounded-xl border border-[#7C3AED]/35 bg-gradient-to-br from-[#7C3AED]/10 to-[#7C3AED]/5">
        <div class="flex items-center justify-between">
          <span class="text-[9px] font-semibold text-[#8B5CF6]/60 tracking-widest">Verification Layer</span>
          <img src="/docs/brand-assets/Qodana/Qodana_icon.svg" class="h-3.5 opacity-55" />
        </div>
        <div class="text-[16px] font-bold text-white/90 leading-snug">Quality Control</div>
        <div class="h-px bg-white/[0.07]"></div>
        <div class="text-[10.5px] text-white/50 leading-relaxed flex-1">
          Automated gates catch what human review misses. Every generated line must pass before it ships.
        </div>
        <div class="text-[11px] font-semibold text-[#8B5CF6]">Unavoidable bottleneck</div>
      </div>

      <!-- AI Governance -->
      <div class="flex flex-col gap-2 p-4 rounded-xl border border-[#FF0A67]/40 bg-gradient-to-br from-[#FF0A67]/12 to-[#FF8200]/6 shadow-[0_0_20px_rgba(255,10,103,0.12)]">
        <div class="flex items-center justify-between">
          <span class="text-[9px] font-semibold text-[#FF0A67]/65 tracking-widest">Strategic Layer</span>
          <img src="/docs/brand-assets/Junie/Junie_icon.svg" class="h-3.5 opacity-65" />
        </div>
        <div class="text-[16px] font-extrabold text-white leading-snug">AI Governance</div>
        <div class="h-px bg-[#FF0A67]/15"></div>
        <div class="text-[10.5px] text-white/55 leading-relaxed flex-1">
          Controls how LLM resources are consumed. Determines delivery quality across the entire studio.
        </div>
        <div class="text-[11px] font-bold text-[#FF0A67]">Where ROI is decided</div>
      </div>
    </div>

    <!-- ④ Closing axiom -->
    <div class="mt-3.5 flex items-center gap-2">
      <div class="h-px flex-1 bg-white/[0.06]"></div>
      <span class="text-[9.5px] text-white/28 italic">
        The less humans review, the more governance infrastructure determines outcome
      </span>
      <div class="h-px flex-1 bg-white/[0.06]"></div>
    </div>

  </div>
</template>
