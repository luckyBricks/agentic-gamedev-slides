<script setup lang="ts">
import { computed } from 'vue'

interface Frontmatter {
  chapter?: 'violet' | 'cyan' | 'amber' | 'green' | 'magenta'
  mandala?: 'right' | 'left' | 'center' | 'hidden' | 'corner-br'
  mandalaOpacity?: number
  mandalaVariant?: 'default' | 'wide'
  badge?: boolean
  product?: string
  badgeLabel?: string
  badgeSub?: string
}

const props = defineProps<{ frontmatter?: Frontmatter }>()

const chapterClass = computed(() => {
  const ch = props.frontmatter?.chapter || 'violet'
  return `rider-chapter--${ch}`
})

const bgPos = computed(() => {
  const m = props.frontmatter?.mandala || 'right'
  // map legacy 'right'/'left'/'center' directly; 'hidden' suppresses background
  return m as 'right' | 'left' | 'center' | 'corner-br' | 'hidden'
})
const showBg = computed(() => bgPos.value !== 'hidden')
const showBadge = computed(() => props.frontmatter?.badge !== false)
</script>

<template>
  <div :class="['rider-slide', chapterClass]" class="relative w-full h-full overflow-hidden">
    <DotUltimateBg
      v-if="showBg"
      :position="bgPos === 'hidden' ? 'right' : bgPos"
      :opacity="frontmatter?.mandalaOpacity ?? 0.82"
    />
    <CornerBadge
      v-if="showBadge"
      :product="frontmatter?.product"
      :label="frontmatter?.badgeLabel"
      :sub="frontmatter?.badgeSub"
    />
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
