<template>
  <div class="slidev-layout cover">
    <div class="my-auto w-full">
      <slot />
    </div>
    <div class="abs-br m-6" v-if="url">
      <a
        :href="url"
        target="_blank"
        class="text-xl icon-btn opacity-50 flex items-center gap-2 !border-none !hover:text-white"
      >
        <span class="opacity-50 text-sm">Slide here!</span>
        <bx-bxs-slideshow />
      </a>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  url?: string;
}>();
</script>
