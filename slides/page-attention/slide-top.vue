<template>
  <footer class="absolute bottom-4 right-6 p-2 flex gap-7">
    <a
      v-if="(currentPage === $nav.currentPage ? page : $nav.currentPage) == 1"
      :href="$slidev.configs.baseURL + $slidev.configs.name"
      target="_blank"
      class="text-xl icon-btn flex items-center gap-2 !border-none hover:text-black dark:hover:text-gray cursor-pointer"
    >
      <span class="text-sm opacity-60">Slide here!</span>
      <carbon:video-player class="opacity-60" />
    </a>
    <span>
      {{ currentPage === $nav.currentPage ? page : $nav.currentPage }}
    </span>
  </footer>
</template>

<script setup>
import { useSlideContext, useNav } from "@slidev/client";
import { watch, ref } from "vue";
const { $slidev, $nav, $renderContext } = useSlideContext();
const { currentPage } = useNav();

const page = ref(currentPage.value);

watch(currentPage, (val) => setTimeout(() => (page.value = val), 400));
</script>
