<template>
  <div class="flex items-center">
    <template v-for="item in values">
      <div
        class="h-15 w-15 rounded flex justify-center items-center text-black"
        :class="{
          'bg-green-500': item !== highlight,
          'bg-red-500': item === highlight,
        }"
      >
        {{ item }}
      </div>
      <div class="h-1 w-10 bg-slate-500" />
    </template>
    <div
      class="h-15 w-15 bg-green-500 rounded flex justify-center items-center text-black"
    >
      NULL
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  values: {
    type: Array,
    default: [],
  },
  highlight: {
    type: String,
  },
});
</script>
