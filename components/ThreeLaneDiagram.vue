<script setup lang="ts">
const lanes = [
  {
    kicker: 'Discover',
    title: 'ACP Registry',
    body: 'Browse & plug in agents from the Rider UI — no vendor lock-in.',
    tone: 'violet',
  },
  {
    kicker: 'Connect',
    title: 'Built-in MCP Server',
    body: 'Expose Rider tools to Claude, Cursor, Codex, VS Code, Junie CLI.',
    tone: 'pink',
  },
  {
    kicker: 'Execute',
    title: 'Junie',
    body: 'Plan & run multi-step tasks, tests, and terminal commands in context.',
    tone: 'amber',
  },
] as const

const toneMap: Record<string, string> = {
  violet: 'from-[#6c3bff] to-[#9a4bff]',
  pink:   'from-[#e73cff] to-[#ff3aa8]',
  amber:  'from-[#ff7a3c] to-[#ffb547]',
}
</script>

<template>
  <div class="relative w-full flex flex-col gap-3">
    <div
      v-for="(l, i) in lanes"
      :key="l.title"
      class="relative flex items-center gap-4"
    >
      <div
        :class="['w-28 h-16 rounded-xl bg-gradient-to-br text-white flex flex-col items-center justify-center shadow-lg', toneMap[l.tone]]"
      >
        <div class="text-[10px] uppercase tracking-[0.2em] opacity-80">Lane {{ i + 1 }}</div>
        <div class="text-sm font-semibold">{{ l.kicker }}</div>
      </div>
      <div class="flex-1 rider-card">
        <div class="text-base font-semibold">{{ l.title }}</div>
        <div class="text-xs rider-subtle mt-1">{{ l.body }}</div>
      </div>
    </div>

    <div class="mt-2 text-[10px] uppercase tracking-[0.3em] rider-muted text-center">
      → Converges into Rider as the shared IDE
    </div>
  </div>
</template>
