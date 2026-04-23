<script setup lang="ts">
const agents = [
  { label: 'Junie', x: 12, y: 18 },
  { label: 'ACP Agent', x: 76, y: 12 },
  { label: 'MCP Client', x: 82, y: 62 },
  { label: 'Claude', x: 8, y: 66 },
]
</script>

<template>
  <div class="relative w-full h-[340px] rounded-2xl overflow-hidden rider-card">
    <div class="rider-grid-lines" />

    <div class="absolute inset-6 flex flex-col">
      <div class="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] rider-muted">
        <span>RIDER · Shared Workbench</span>
        <span class="flex gap-1.5">
          <span class="w-2 h-2 rounded-full bg-[#ff3aa8]" />
          <span class="w-2 h-2 rounded-full bg-[#ffb547]" />
          <span class="w-2 h-2 rounded-full bg-[#3ad9ff]" />
        </span>
      </div>

      <div class="mt-4 grid grid-cols-5 gap-3 flex-1">
        <div class="col-span-2 relative rider-card p-3 text-[11px] font-mono leading-5 overflow-hidden">
          <div class="rider-muted mb-1">PlayerController.cs</div>
          <div><span class="text-[#ff7a3c]">public</span> <span class="text-[#3ad9ff]">void</span> <span class="text-white">Dash</span>()</div>
          <div class="opacity-70 pl-3">// engine-aware AI edits</div>
          <div class="pl-3"><span class="text-[#e73cff]">rb</span>.<span class="text-[#ffb547]">AddForce</span>(dir * power);</div>
          <div class="rider-scanline" />
        </div>
        <div class="col-span-2 rider-card p-3 text-[11px] leading-5">
          <div class="rider-muted mb-1 uppercase tracking-widest text-[9px]">Engine Context</div>
          <div class="flex flex-wrap gap-1.5">
            <span class="rider-chip rider-chip--tag">Unity Prefab</span>
            <span class="rider-chip rider-chip--tag">Blueprint</span>
            <span class="rider-chip rider-chip--tag">Shader</span>
            <span class="rider-chip rider-chip--tag">Perforce</span>
          </div>
          <div class="mt-3 text-[10px] rider-subtle">Index · Symbols · Flow · Dependencies</div>
        </div>
        <div class="col-span-1 rider-card p-3 text-[11px] leading-5">
          <div class="rider-muted mb-1 uppercase tracking-widest text-[9px]">Agents</div>
          <div v-for="a in agents" :key="a.label" class="flex items-center gap-1.5 mt-1.5">
            <span class="rider-dot" />
            <span class="text-white">{{ a.label }}</span>
          </div>
        </div>
      </div>

      <div class="mt-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]">
        <span class="rider-chip rider-chip--tag">Human Workspace</span>
        <span class="flex-1 rider-divider" />
        <span class="rider-chip rider-chip--tag">Agent Runtime</span>
        <span class="flex-1 rider-divider" />
        <span class="rider-chip rider-chip--tag">Quality &amp; Governance</span>
      </div>
    </div>
  </div>
</template>
