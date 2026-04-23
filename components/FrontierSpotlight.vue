<script setup lang="ts">
const skills = ['refactor', 'inspect', 'debug', 'test', 'UI capture', 'profile']
</script>

<template>
  <div class="relative w-full h-[300px] rounded-2xl overflow-hidden rider-card rider-card--accent">
    <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-10">
      <span class="rider-chip rider-chip--tag">
        Frontier · Independent Research Project
      </span>
      <div class="mt-4 text-2xl font-bold rider-heat-text">
        Give AI the whole IDE, not just the files.
      </div>
      <div class="mt-3 grid grid-cols-6 gap-2 w-full max-w-[520px]">
        <span v-for="s in skills" :key="s" class="rider-card text-[11px] py-1 text-center uppercase tracking-wider">
          {{ s }}
        </span>
      </div>
      <div class="mt-4 text-xs rider-subtle">
        Human asks → Agent forges a skill → IDE runtime executes it
      </div>
    </div>
  </div>
</template>
