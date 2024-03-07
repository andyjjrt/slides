<template>
  <div class="h-screen flex flex-col">
    <div class="navbar bg-base-200 shrink-0">
      <div class="flex-1 gap-4">
        <div class="avatar">
          <div class="w-10 rounded-full">
            <img :src="SlidevLogo" />
          </div>
        </div>
        <h1 class="font-bold text-xl">Andy's Slidev Hub</h1>
      </div>
      <div class="flex-none gap-2">
        <div class="form-control">
          <input
            type="text"
            placeholder="Search"
            class="input input-bordered w-40 md:w-auto"
            v-model="keyword"
          />
        </div>
      </div>
    </div>
    <div class="grow p-2 overflow-hidden">
      <div class="flex flex-col gap-4 h-full overflow-auto">
        <div
          class="card w-full bg-base-100 shadow-xl"
          v-for="slide in filteredSlides"
          :key="slide"
        >
          <div class="p-4 flex justify-between">
            <h2 class="card-title">{{ slide }}</h2>
            <div class="card-actions justify-end">
              <a :href="'/' + slide" class="btn btn-primary">View</a>
            </div>
          </div>
        </div>
        <div class="hero" v-if="filteredSlides.length == 0">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-2xl font-bold">Empty Here</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import SlidevLogo from "./assets/slidev.png";
import ajax from "./util/api";

const slides = ref<string[]>([]);
const keyword = ref<string>("");

const filteredSlides = computed(() =>
  slides.value.filter((slide) => slide.includes(keyword.value))
);

onMounted(() => {
  ajax("/slides.json", "GET").then((res) => {
    if (res.data instanceof Array) {
      slides.value = res.data[0].contents.map((r: any) => r.name);
    }
  });
});
</script>
