<script setup lang="ts">
defineProps<{ as?: string }>()
</script>

<template>
  <component :is="as || 'div'" class="rider-kicker">
    <slot />
  </component>
</template>
