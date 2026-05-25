<script setup lang="ts">
import { getCurrentInstance } from 'vue'

withDefaults(defineProps<{
  position?: 'right' | 'left' | 'center' | 'corner-br'
  opacity?: number
}>(), {
  position: 'right',
  opacity: 0.5,
})

// Unique gradient ID per instance — SVG IDs are document-global in inline SVG
const uid = getCurrentInstance()!.uid
const gId = `du-g${uid}`

// 18 evenly-spaced rotations matching the original dotUltimate-animation.svg
const rotations = [-180, -160, -140, -120, -100, -80, -60, -40, -20, 0, 20, 40, 60, 80, 100, 120, 140, 160]
</script>

<template>
  <!--
    Static final-frame of docs/brand-assets/dotUltimate-animation.svg.
    Gradient baked at end state (scale 1.2, translate -0.18).
    Chapter color shift applied via CSS hue-rotate (--du-hue from rider-chapter--* parent).
  -->
  <div
    :class="['dot-ultimate-bg', `dot-ultimate-bg--${position}`]"
    :style="{ opacity }"
    aria-hidden="true"
  >
    <svg viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient :id="gId" gradientTransform="translate(-0.18 -0.18) scale(1.2)">
          <stop offset="0.65" stop-color="#6B57FF" stop-opacity="0"/>
          <stop offset="0.7"  stop-color="#6C55FE" stop-opacity="0.01"/>
          <stop offset="0.74" stop-color="#7151FE" stop-opacity="0.06"/>
          <stop offset="0.78" stop-color="#794AFC" stop-opacity="0.13"/>
          <stop offset="0.82" stop-color="#8540FB" stop-opacity="0.23"/>
          <stop offset="0.86" stop-color="#9334F8" stop-opacity="0.36"/>
          <stop offset="0.89" stop-color="#A524F6" stop-opacity="0.52"/>
          <stop offset="0.91" stop-color="#AF1DF5" stop-opacity="0.6"/>
          <stop offset="0.93" stop-color="#C628F2" stop-opacity="0.72"/>
          <stop offset="0.98" stop-color="#EE3CEE" stop-opacity="0.92"/>
          <stop offset="1"    stop-color="#FF45ED" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <g>
        <circle
          v-for="rot in rotations"
          :key="rot"
          cx="1200" cy="1280" r="320"
          :fill="`url(#${gId})`"
          :transform="`rotate(${rot} 1020 1020)`"
        />
      </g>
    </svg>
  </div>
</template>
