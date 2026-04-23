<script setup lang="ts">
defineProps<{
  chapter?: string
  index?: string
  total?: string
}>()
</script>

<template>
  <div class="rider-footer">
    <div class="flex items-center gap-3">
      <span class="rider-bracket">[</span>
      <span class="font-semibold tracking-wider">JetBrains Rider</span>
      <span class="rider-bracket">/</span>
      <span class="opacity-70">Agentic GameDev</span>
      <span class="rider-bracket">]</span>
      <span v-if="chapter" class="opacity-60 ml-1">{{ chapter }}</span>
    </div>
    <div class="flex items-center gap-2 opacity-60">
      <span v-if="index">{{ index }}</span>
      <span v-if="index && total">/</span>
      <span v-if="total">{{ total }}</span>
    </div>
  </div>
</template>
