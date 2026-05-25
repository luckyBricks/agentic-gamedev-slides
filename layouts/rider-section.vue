<script setup lang="ts">
import { computed } from 'vue'

interface Frontmatter {
  chapter?: 'violet' | 'magenta' | 'red' | 'green' | 'cyan' | 'amber'
  mandala?: 'right' | 'left' | 'center' | 'hidden'
  mandalaOpacity?: number
}

const props = defineProps<{ frontmatter?: Frontmatter }>()
const chapterClass = computed(() => `rider-chapter--${props.frontmatter?.chapter || 'violet'}`)
</script>

<template>
  <div :class="['rider-slide', 'rider-slide--section', chapterClass]" class="relative w-full h-full overflow-hidden flex items-center">
    <DotUltimateBg
      position="right"
      :opacity="frontmatter?.mandalaOpacity ?? 0.55"
    />
    <CornerBadge />
    <div class="relative z-10 w-full max-w-[58%] pl-4">
      <slot />
    </div>
    <PageNumber />
  </div>
</template>

<style scoped>
.rider-slide {
  padding: 48px 56px 40px 56px;
  color: var(--rider-ink) !important;
  background: var(--rider-bg) !important;
}

.rider-slide :deep(h1),
.rider-slide :deep(h2),
.rider-slide :deep(h3),
.rider-slide :deep(h4),
.rider-slide :deep(p),
.rider-slide :deep(li),
.rider-slide :deep(span),
.rider-slide :deep(div),
.rider-slide :deep(strong) {
  color: inherit;
}
</style>
