<script setup lang="ts">
import Pager from 'slidev-component-pager/components/Pager.vue'
</script>

<template>
  <div class="rider-pagenumber">
    <Pager />
  </div>
</template>

<style scoped>
.rider-pagenumber {
  position: absolute;
  bottom: 22px;
  right: 32px;
  z-index: 15;
  pointer-events: none;
}

.rider-pagenumber :deep(.pager) {
  position: static !important;
  font-family: Georgia, 'Times New Roman', serif !important;
  font-style: italic !important;
  font-size: 15px !important;
  color: rgba(255, 255, 255, 0.35) !important;
  padding: 0 !important;
  line-height: 1 !important;
  width: auto !important;
  height: auto !important;
}

.rider-pagenumber :deep(.pager__separator) {
  margin: 0 0.2em !important;
}
</style>
