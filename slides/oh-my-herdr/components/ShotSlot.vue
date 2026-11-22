<script setup lang="ts">
import { ref } from 'vue'
const props = withDefaults(defineProps<{ src: string; caption?: string; height?: string }>(), { height: '230px' })
// Prefix the deploy base (e.g. /oh-my-herdr/) for absolute public paths.
const url = props.src.startsWith('/') ? import.meta.env.BASE_URL.replace(/\/$/, '') + props.src : props.src
const failed = ref(false)
</script>

<template>
  <figure class="ss">
    <div class="ss-frame" :class="{ empty: failed }" :style="{ height }">
      <img v-if="!failed" :src="url" :alt="caption || ''" @error="failed = true" />
      <div v-else class="ss-ph">截圖待補：{{ src.split('/').pop() }}</div>
    </div>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.ss { margin: 0; display: flex; flex-direction: column; align-items: center; gap: 6px; }
.ss-frame { width: 100%; display: flex; align-items: center; justify-content: center; }
.ss-frame img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px; }
.ss-frame.empty {
  border: 2px dashed color-mix(in srgb, currentColor 40%, transparent); border-radius: 12px;
  background: color-mix(in srgb, currentColor 4%, transparent);
}
.ss-ph { font-size: 18px; opacity: 0.6; }
figcaption { font-size: 13px; opacity: 0.7; }
</style>
