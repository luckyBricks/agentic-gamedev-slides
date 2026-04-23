<script setup lang="ts">
defineProps<{
  personas: {
    title: string
    role: string
    bullets: string[]
    stack?: string[]
    tone?: 'violet' | 'pink' | 'amber' | 'cyan'
  }[]
}>()

const toneMap: Record<string, string> = {
  violet: 'from-[#6c3bff] to-[#9a4bff]',
  pink: 'from-[#ff3aa8] to-[#e73cff]',
  amber: 'from-[#ffb547] to-[#ff7a3c]',
  cyan: 'from-[#3ad9ff] to-[#6c3bff]',
}
</script>

<template>
  <div class="grid gap-3" :style="{ gridTemplateColumns: `repeat(${personas.length}, minmax(0, 1fr))` }">
    <div v-for="p in personas" :key="p.title" class="rider-card flex flex-col gap-2">
      <div class="flex items-center justify-between">
        <div>
          <div class="text-[10px] tracking-[0.25em] uppercase rider-muted">{{ p.role }}</div>
          <div class="text-base font-semibold mt-0.5">{{ p.title }}</div>
        </div>
        <div :class="['w-9 h-9 rounded-full bg-gradient-to-br', toneMap[p.tone || 'violet']]" />
      </div>
      <ul class="text-xs rider-subtle leading-5 list-none pl-0 space-y-1">
        <li v-for="b in p.bullets" :key="b" class="flex gap-2">
          <span class="rider-dot mt-1.5 shrink-0" />
          <span>{{ b }}</span>
        </li>
      </ul>
      <div v-if="p.stack" class="flex flex-wrap gap-1 mt-auto">
        <span v-for="s in p.stack" :key="s" class="rider-chip">{{ s }}</span>
      </div>
    </div>
  </div>
</template>
