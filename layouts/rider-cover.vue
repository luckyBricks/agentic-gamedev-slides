<script setup lang="ts">
import { computed } from 'vue'

interface Frontmatter {
  chapter?: 'violet' | 'cyan' | 'amber' | 'green' | 'magenta'
  mandala?: 'right' | 'left' | 'center' | 'hidden'
  mandalaOpacity?: number
  mandalaVariant?: 'default' | 'wide'
  page?: number | string
  total?: number | string
  product?: string
  badgeLabel?: string
  badgeSub?: string
}

const props = defineProps<{ frontmatter?: Frontmatter }>()

const chapterClass = computed(() => `rider-chapter--${props.frontmatter?.chapter || 'violet'}`)
const mandalaPos = computed(() => props.frontmatter?.mandala || 'right')
const showMandala = computed(() => mandalaPos.value !== 'hidden')
</script>

<template>
  <div :class="['rider-slide', 'rider-slide--cover', chapterClass]" class="relative w-full h-full overflow-hidden">
    <Mandala
      v-if="showMandala"
      :position="mandalaPos"
      :opacity="frontmatter?.mandalaOpacity ?? 1"
      :variant="frontmatter?.mandalaVariant ?? 'wide'"
    />

    <div class="rider-cover-jb absolute top-[26px] left-[48px] z-20">
      <img src="/docs/brand-assets/jetbrains/jetbrains.svg" alt="JetBrains" class="h-8" />
    </div>

    <CornerBadge
      :product="frontmatter?.product"
      :label="frontmatter?.badgeLabel"
      :sub="frontmatter?.badgeSub"
    />

    <div class="relative z-10 w-full h-full">
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
