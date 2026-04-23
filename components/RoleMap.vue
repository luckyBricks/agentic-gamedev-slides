<script setup lang="ts">
const core = ['Gameplay Programmer', 'Technical Artist', 'Engine Engineer', 'Rendering Engineer']
const process = ['Studio Tools', 'AI Platform', 'QA', 'Build & Release']
const decision = ['R&D Management', 'CTO']
</script>

<template>
  <div class="relative w-full h-[340px] flex items-center justify-center">
    <div class="rider-glow-ring" style="width:380px;height:380px;background:#9a4bff" />

    <div class="absolute w-[320px] h-[320px] rounded-full border border-[#3ad9ff44]" />
    <div class="absolute w-[220px] h-[220px] rounded-full border border-[#e73cff66]" />
    <div class="absolute w-[120px] h-[120px] rounded-full border border-[#ff3aa8aa] bg-[#ff3aa812]" />

    <div class="relative z-10 rider-card rider-card--accent text-center px-5 py-3">
      <div class="text-[10px] tracking-[0.25em] uppercase rider-muted">Core Users</div>
      <div class="text-sm font-semibold mt-1">Hands-on Dev</div>
    </div>

    <div
      v-for="(r, i) in core"
      :key="r"
      class="absolute text-[11px] rider-card px-2 py-1 whitespace-nowrap"
      :style="{
        transform: `translate(${Math.cos((i / core.length) * Math.PI * 2) * 95}px, ${Math.sin((i / core.length) * Math.PI * 2) * 95}px)`,
      }"
    >
      {{ r }}
    </div>

    <div
      v-for="(r, i) in process"
      :key="r"
      class="absolute text-[11px] rider-card px-2 py-1 whitespace-nowrap border-[#e73cff55]"
      :style="{
        transform: `translate(${Math.cos(((i + 0.5) / process.length) * Math.PI * 2) * 160}px, ${Math.sin(((i + 0.5) / process.length) * Math.PI * 2) * 160}px)`,
      }"
    >
      {{ r }}
    </div>

    <div
      v-for="(r, i) in decision"
      :key="r"
      class="absolute text-[11px] rider-card px-2 py-1 whitespace-nowrap border-[#3ad9ff55]"
      :style="{
        transform: `translate(${Math.cos(((i + 0.25) / decision.length) * Math.PI * 2) * 220}px, ${Math.sin(((i + 0.25) / decision.length) * Math.PI * 2) * 220}px)`,
      }"
    >
      {{ r }}
    </div>

    <div class="absolute -bottom-1 left-0 right-0 flex justify-between text-[10px] uppercase tracking-[0.2em] rider-muted px-2">
      <span><span class="rider-dot" /> Core Users</span>
      <span><span class="rider-dot" style="background: linear-gradient(135deg,#e73cff,#9a4bff)" /> Process Owners</span>
      <span><span class="rider-dot" style="background: linear-gradient(135deg,#3ad9ff,#6c3bff)" /> Decision Makers</span>
    </div>
  </div>
</template>
