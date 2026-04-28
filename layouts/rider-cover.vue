<script setup lang="ts">
import { computed } from 'vue'

interface Frontmatter {
  chapter?: 'violet' | 'cyan' | 'amber' | 'green' | 'magenta'
  mandala?: 'right' | 'left' | 'center' | 'hidden'
  mandalaOpacity?: number
  mandalaVariant?: 'default' | 'wide'
}

const props = defineProps<{ frontmatter?: Frontmatter }>()

const chapterClass = computed(() => `rider-chapter--${props.frontmatter?.chapter || 'violet'}`)
const mandalaPos = computed(() => props.frontmatter?.mandala || 'right')
const showMandala = computed(() => mandalaPos.value !== 'hidden')
</script>

<template>
  <div :class="['rider-slide', 'rider-slide--cover', chapterClass]" class="relative w-full h-full overflow-hidden">
    <DotUltimateBg
      v-if="showMandala"
      :position="mandalaPos === 'hidden' ? 'right' : mandalaPos"
      :opacity="frontmatter?.mandalaOpacity ?? 1"
    />

    <div class="rider-cover-jb absolute top-[26px] left-[48px] z-20">
      <img src="/docs/brand-assets/jetbrains/jetbrains.svg" alt="JetBrains" class="h-8" />
    </div>

    <CornerBadge />

    <div class="relative z-10 w-full h-full">
      <slot />
    </div>

    <PageNumber />
  </div>
</template>

<style scoped>
.rider-slide {
  padding: 48px 56px 40px 56px;
  color: #ffffff !important;
  background: #050510 !important;
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
