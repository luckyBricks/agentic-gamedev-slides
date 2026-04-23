<script setup lang="ts">
interface Props {
  /** product icon in docs/brand-assets; default Rider */
  product?: string
  label?: string
  sub?: string
}

withDefaults(defineProps<Props>(), {
  product: 'Rider',
  label: 'Rider',
  sub: 'JetBrains IDE',
})
</script>

<template>
  <div class="rider-corner-badge">
    <img
      :src="`/docs/brand-assets/${product}/${product}_icon.svg`"
      :alt="label"
      class="rider-corner-badge__icon"
    />
    <div class="rider-corner-badge__text">
      <span class="rider-corner-badge__label">{{ label }}</span>
      <span class="rider-corner-badge__sub">{{ sub }}</span>
    </div>
  </div>
</template>
