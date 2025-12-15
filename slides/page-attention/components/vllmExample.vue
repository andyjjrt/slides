<template>
  <div class="grid grid-cols-3 gap-4 py-4 text-xs">
    <div class="pl-12 relative mt-14">
      <table class="table-fixed border-collapse text-center">
        <caption class="caption-top p-2 text-sm dark:text-gray">
          <span text-red>Logical</span>
          KV blocks
        </caption>
        <tbody>
          <tr>
            <td class="border border-color-black dark:border-color-white">Four</td>
            <td class="border border-color-black dark:border-color-white">score</td>
            <td class="border border-color-black dark:border-color-white">and</td>
            <td class="border border-color-black dark:border-color-white">seven</td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">years</td>
            <td class="border border-color-black dark:border-color-white">ago</td>
            <td class="border border-color-black dark:border-color-white">our</td>
            <td class="border border-color-black dark:border-color-white" :class="{ 'text-orange': $clicks == 1 }">
              {{ $clicks >= 1 ? "fathers" : "&nbsp;" }}
            </td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white" :class="{ 'text-orange': $clicks == 2 }">
              {{ $clicks >= 2 ? "brought" : "&nbsp;" }}
            </td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <div class="flex flex-col abs-tl top-9 text-center gap-[1px] text-xs">
        <span class="py-3">Block 0</span>
        <span class="py-3">Block 1</span>
        <span class="py-3">Block 2</span>
        <span class="py-3">Block 3</span>
      </div>
    </div>
    <div class="p-10">
      <table class="table-auto border-collapse text-center">
        <caption class="caption-top p-2 text-sm dark:text-gray">
          Block table
        </caption>
        <thead>
          <tr class="text-xs">
            <th class="border border-color-black dark:border-color-white">Physical Block Number</th>
            <th class="border border-color-black dark:border-color-white">#filled</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-color-black dark:border-color-white">7</td>
            <td class="border border-color-black dark:border-color-white">4</td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">1</td>
            <td class="border border-color-black dark:border-color-white" :class="{ 'text-orange': $clicks == 1 }">
              {{ $clicks >= 1 ? 4 : 3 }}
            </td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white" :class="{ 'text-orange': $clicks == 2 }">
              {{ $clicks >= 2 ? 3 : "-" }}
            </td>
            <td class="border border-color-black dark:border-color-white" :class="{ 'text-orange': $clicks == 2 }">
              {{ $clicks >= 2 ? 1 : "-" }}
            </td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">-</td>
            <td class="border border-color-black dark:border-color-white">-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pl-12 relative mt-[-60px]">
      <table class="table-fixed border-collapse text-center">
        <caption class="caption-top p-2 text-sm dark:text-gray">
          <span text-red>Physical</span>
          KV blocks
        </caption>
        <tbody>
          <tr>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">years</td>
            <td class="border border-color-black dark:border-color-white">ago</td>
            <td class="border border-color-black dark:border-color-white">our</td>
            <td class="border border-color-black dark:border-color-white" :class="{ 'text-orange': $clicks == 1 }">
              {{ $clicks >= 1 ? "fathers" : "&nbsp;" }}
            </td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white" :class="{ 'text-orange': $clicks == 2 }">
              {{ $clicks >= 2 ? "brought" : "&nbsp;" }}
            </td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">Four</td>
            <td class="border border-color-black dark:border-color-white">score</td>
            <td class="border border-color-black dark:border-color-white">and</td>
            <td class="border border-color-black dark:border-color-white">seven</td>
          </tr>
          <tr>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
            <td class="border border-color-black dark:border-color-white">&nbsp;</td>
          </tr>
        </tbody>
      </table>
      <div class="flex flex-col abs-tl top-9 text-center gap-[1px] text-xs">
        <span class="py-3">Block 0</span>
        <span class="py-3">Block 1</span>
        <span class="py-3">Block 2</span>
        <span class="py-3">Block 3</span>
        <span class="py-3">Block 4</span>
        <span class="py-3">Block 5</span>
        <span class="py-3">Block 6</span>
        <span class="py-3">Block 7</span>
        <span class="py-3">Block 8</span>
      </div>
    </div>
    <Arrow x1="334" y1="258" x2="390" y2="283" />
    <Arrow x1="334" y1="300" x2="390" y2="325" />
    <Arrow v-click="2" x1="334" y1="342" x2="390" y2="367" />
    <Arrow x1="590" y1="283" x2="638" y2="425" />
    <Arrow x1="590" y1="325" x2="638" y2="190" />
    <Arrow v-click="2" x1="590" y1="367" x2="638" y2="270" />
  </div>
</template>

<script lang="ts" setup>
import { $clicks } from "@slidev/client";
</script>
