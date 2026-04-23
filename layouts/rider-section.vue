<script setup lang="ts">
import { computed } from 'vue'

interface Frontmatter {
  chapter?: 'violet' | 'cyan' | 'amber' | 'green' | 'magenta'
  mandala?: 'right' | 'left' | 'center' | 'hidden'
  mandalaOpacity?: number
  page?: number | string
  total?: number | string
}

const props = defineProps<{ frontmatter?: Frontmatter }>()
const chapterClass = computed(() => `rider-chapter--${props.frontmatter?.chapter || 'violet'}`)
</script>

<template>
  <div :class="['rider-slide', 'rider-slide--section', chapterClass]" class="relative w-full h-full overflow-hidden flex items-center">
    <Mandala
      position="right"
      :opacity="frontmatter?.mandalaOpacity ?? 1"
      variant="wide"
    />
    <CornerBadge />
    <div class="relative z-10 w-full max-w-[58%] pl-4">
      <slot />
    </div>
    <PageNumber v-if="frontmatter?.page !== undefined" :index="frontmatter.page" :total="frontmatter?.total" />
  </div>
</template>

<style scoped>
.rider-slide {
  padding: 48px 56px 40px 56px;
  color: #ffffff;
}
</style>
