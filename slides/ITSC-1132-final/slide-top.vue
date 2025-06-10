<template>
  <footer v-if="$nav.currentPage !== 1" class="absolute bottom-4 right-6 p-2">
    {{ currentPage === $nav.currentPage ? page : $nav.currentPage }}
  </footer>
  <div class="abs-br m-6" v-else>
    <a
      :href="$slidev.configs.name"
      target="_blank"
      class="text-xl icon-btn flex items-center gap-2 !border-none hover:text-black dark:hover:text-gray cursor-pointer"
    >
      <span class="text-sm opacity-60">Slide here!</span>
      <carbon:video-player class="opacity-60" />
    </a>
  </div>
</template>

<script setup>
import { useSlideContext, useNav } from "@slidev/client";
import { watch, ref } from "vue";
const { $slidev, $nav, $renderContext } = useSlideContext();
const { currentPage } = useNav()

const page = ref(currentPage.value);

watch(currentPage, (val) => setTimeout(() => page.value = val, 400))
</script>
