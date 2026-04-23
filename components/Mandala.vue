<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  /** 'right' (default) | 'left' | 'center' */
  position?: 'right' | 'left' | 'center'
  /** 'violet' | 'cyan' | 'amber' | 'green' | 'magenta' — overrides current chapter */
  color?: 'violet' | 'cyan' | 'amber' | 'green' | 'magenta'
  /** ring density (default 48) */
  rings?: number
  /** opacity multiplier (default 1) */
  opacity?: number
  /** visual variant: 'default' (tight torus) | 'wide' (open spirograph) */
  variant?: 'default' | 'wide'
}

const props = withDefaults(defineProps<Props>(), {
  position: 'right',
  rings: 48,
  opacity: 1,
  variant: 'default',
})

const positionClass = computed(() => {
  if (props.position === 'left') return 'rider-mandala--left'
  if (props.position === 'center') return 'rider-mandala--center'
  return ''
})

const paletteVars = computed(() => {
  if (!props.color) return {}
  const palettes = {
    violet: ['#6c3bff', '#9a4bff', '#e73cff'],
    cyan: ['#2d6ef0', '#22b8c0', '#3ad9ff'],
    amber: ['#ffb700', '#ff9419', '#ff0a67'],
    green: ['#22b8c0', '#48e054', '#a6f25c'],
    magenta: ['#7256ff', '#ff2d90', '#ff8200'],
  } as const
  const [a, b, c] = palettes[props.color]
  return { '--mandala-a': a, '--mandala-b': b, '--mandala-c': c }
})

const ringIndexes = computed(() => Array.from({ length: props.rings }, (_, i) => i))

const rx = computed(() => (props.variant === 'wide' ? 92 : 90))
const ry = computed(() => (props.variant === 'wide' ? 44 : 28))
</script>

<template>
  <svg
    :class="['rider-mandala', positionClass]"
    :style="{ ...paletteVars, opacity }"
    viewBox="-110 -110 220 220"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-hidden="true"
  >
    <defs>
      <radialGradient :id="`mandala-fill-${rings}`" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="var(--mandala-c)" stop-opacity="0.95" />
        <stop offset="45%" stop-color="var(--mandala-b)" stop-opacity="0.85" />
        <stop offset="100%" stop-color="var(--mandala-a)" stop-opacity="0.08" />
      </radialGradient>
      <radialGradient :id="`mandala-core-${rings}`" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#050510" stop-opacity="0.95" />
        <stop offset="55%" stop-color="#050510" stop-opacity="0.18" />
        <stop offset="100%" stop-color="#050510" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- Spirograph torus: many rotated ellipses sharing a center -->
    <g :stroke="`url(#mandala-fill-${rings})`" fill="none" stroke-width="0.55" stroke-linecap="round">
      <ellipse
        v-for="i in ringIndexes"
        :key="i"
        :rx="rx"
        :ry="ry"
        :transform="`rotate(${(i * 180) / rings})`"
      />
    </g>

    <!-- Inner dark core "lens" to emphasize the torus hole -->
    <circle r="34" :fill="`url(#mandala-core-${rings})`" />

    <!-- Outer glow ring (thin, brighter at top) -->
    <circle r="95" fill="none" stroke="var(--mandala-c)" stroke-width="0.3" stroke-opacity="0.55" />
  </svg>
</template>
