<script setup lang="ts">
import { computed } from 'vue'

interface Frontmatter {
  chapter?: 'violet' | 'cyan' | 'amber' | 'green' | 'magenta'
  mandala?: 'right' | 'left' | 'center' | 'hidden'
  mandalaOpacity?: number
  mandalaVariant?: 'default' | 'wide'
  page?: number | string
  total?: number | string
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

const mandalaPos = computed(() => props.frontmatter?.mandala || 'right')
const showMandala = computed(() => mandalaPos.value !== 'hidden')
const showBadge = computed(() => props.frontmatter?.badge !== false)
const pageIndex = computed(() => props.frontmatter?.page)
const pageTotal = computed(() => props.frontmatter?.total)
</script>

<template>
  <div :class="['rider-slide', chapterClass]" class="relative w-full h-full overflow-hidden">
    <Mandala
      v-if="showMandala"
      :position="mandalaPos"
      :opacity="frontmatter?.mandalaOpacity ?? 0.92"
      :variant="frontmatter?.mandalaVariant ?? 'default'"
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
    <PageNumber v-if="pageIndex !== undefined" :index="pageIndex" :total="pageTotal" />
  </div>
</template>

<style scoped>
.rider-slide {
  padding: 48px 56px 40px 56px;
  color: #ffffff;
}
</style>
