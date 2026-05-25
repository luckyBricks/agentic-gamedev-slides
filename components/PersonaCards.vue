<script setup lang="ts">
defineProps<{
  personas: {
    title: string
    role: string
    bullets: string[]
    stack?: string[]
    tone?: 'violet' | 'pink' | 'amber' | 'cyan'
  }[]
  gradientBg?: boolean
}>()

const toneMap: Record<string, string> = {
  violet: 'from-[#7C3AED] to-[#8B5CF6]',
  pink: 'from-[#C026D3] to-[#C026D3]',
  amber: 'from-[#FE9900] to-[#FF8200]',
  cyan: 'from-[#C026D3] to-[#7C3AED]',
}

const bgGradientMap: Record<string, string> = {
  violet: 'linear-gradient(135deg, rgba(124, 58, 237,0.25), rgba(139, 92, 246,0.25))',
  pink:   'linear-gradient(135deg, rgba(192, 38, 211,0.25), rgba(192, 38, 211,0.25))',
  amber:  'linear-gradient(135deg, rgba(255,181,71,0.25), rgba(255,122,60,0.25))',
  cyan:   'linear-gradient(135deg, rgba(192, 38, 211,0.25), rgba(124, 58, 237,0.25))',
}
</script>

<template>
  <div class="grid gap-3" :style="{ gridTemplateColumns: `repeat(${personas.length}, minmax(0, 1fr))` }">
    <div v-for="p in personas" :key="p.title" class="rider-card flex flex-col gap-2"
         :style="{ background: gradientBg ? bgGradientMap[p.tone || 'violet'] : 'rgba(255,255,255,0.25)' }">
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
        <span v-for="s in p.stack" :key="s" class="rider-chip rider-chip--tag">{{ s }}</span>
      </div>
    </div>
  </div>
</template>
