<script setup lang="ts">
const W = 200
const H = 64
const cx = [0, 240, 480, 720]
const ry = [0, 125, 250]
type N = { c: number; r: number; l: string[]; human?: boolean }
const nodes: N[] = [
  { c: 0, r: 0, l: ['探索／scouts'] },
  { c: 1, r: 0, l: ['起草計畫'] },
  { c: 2, r: 0, l: ['人：/omh approve'], human: true },
  { c: 3, r: 0, l: ['切成 waves'] },
  { c: 3, r: 1, l: ['派工'] },
  { c: 2, r: 1, l: ['Lead 結束這一輪'] },
  { c: 1, r: 1, l: ['Mod 喚醒 Lead', '完成或出狀況'] },
  { c: 0, r: 1, l: ['驗證結果'] },
  { c: 0, r: 2, l: ['gate 通過？'] },
  { c: 2, r: 2, l: ['收工'] },
]
const arrows = [
  'M200,32 H240', 'M440,32 H480', 'M680,32 H720',
  'M820,64 V125',
  'M720,157 H680', 'M480,157 H440', 'M240,157 H200',
  'M100,189 V250',
  'M200,282 H480',
]
const loop = 'M100,314 V342 H820 V189'
</script>

<template>
  <svg viewBox="-4 -4 928 356" class="loopflow" role="img" aria-label="ulw 迴圈">
    <defs>
      <marker id="lf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
      </marker>
    </defs>
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-opacity=".7" marker-end="url(#lf-arrow)">
      <path v-for="a in arrows" :key="a" :d="a" />
      <path :d="loop" stroke-dasharray="7 5" />
    </g>
    <g v-for="n in nodes" :key="n.c + '-' + n.r">
      <rect
        :x="cx[n.c]" :y="ry[n.r]" :width="W" :height="H" rx="10"
        :fill="n.human ? '#fef3c7' : 'currentColor'" :fill-opacity="n.human ? 1 : 0.07"
        :stroke="n.human ? '#b45309' : 'currentColor'" :stroke-opacity="n.human ? 1 : 0.5"
        :stroke-width="n.human ? 3 : 1.5"
      />
      <text
        :x="cx[n.c] + W / 2" text-anchor="middle" :fill="n.human ? '#1f2937' : 'currentColor'"
        :font-weight="n.human ? 700 : 500"
      >
        <tspan
          v-for="(t, i) in n.l" :key="i" :x="cx[n.c] + W / 2"
          :y="ry[n.r] + H / 2 + (i - (n.l.length - 1) / 2) * 20 + 5"
          :class="n.l.length > 1 && i === 1 && t.length > 14 ? 'sm' : ''"
        >{{ t }}</tspan>
      </text>
    </g>
    <text x="340" y="270" text-anchor="middle" fill="currentColor" class="lbl">通過，最後一 wave</text>
    <text x="460" y="334" text-anchor="middle" fill="currentColor" class="lbl">通過，尚有 wave → 回到派工</text>
  </svg>
</template>

<style scoped>
.loopflow text { font-size: 16px; }
.loopflow text .sm, .loopflow tspan.sm { font-size: 14px; }
.loopflow text.lbl { font-size: 15px; }
.loopflow { width: 100%; max-height: 360px; margin: 0.25rem 0; font-family: inherit; }
</style>
