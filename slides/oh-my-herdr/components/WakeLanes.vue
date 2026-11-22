<script setup lang="ts">
const lanes = [
  { name: 'Lead', y: 0 },
  { name: 'Mod', y: 120 },
  { name: 'Worker', y: 240 },
]
const LX = 90
const LW = 830
const H = 52
</script>

<template>
  <div class="wl">
    <svg viewBox="0 0 924 360" role="img" aria-label="Lead / Mod / Worker 喚醒流程">
      <defs>
        <marker id="wl-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
        <marker id="wl-arrow-amber" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="#d97706" />
        </marker>
      </defs>
      <!-- lanes -->
      <g v-for="l in lanes" :key="l.name">
        <rect :x="0" :y="l.y" :width="924" :height="H + 24" rx="10" fill="currentColor" fill-opacity=".05" stroke="currentColor" stroke-opacity=".25" />
        <text :x="45" :y="l.y + 43" text-anchor="middle" class="ln" font-weight="700" fill="currentColor">{{ l.name }}</text>
      </g>
      <!-- Lead boxes -->
      <g fill="currentColor">
        <rect x="100" y="12" width="170" height="52" rx="8" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-opacity=".5" />
        <text x="185" y="34" text-anchor="middle">① 派出</text>
        <text x="185" y="53" text-anchor="middle">wave／scout</text>

        <rect x="300" y="12" width="190" height="52" rx="8" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-opacity=".5" />
        <text x="395" y="34" text-anchor="middle">② 結束這一輪</text>
        <text x="395" y="53" text-anchor="middle">不 sleep／poll</text>

        <rect x="520" y="12" width="180" height="52" rx="8" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-opacity=".5" />
        <text x="610" y="34" text-anchor="middle">④a 被喚醒</text>
        <text x="610" y="53" text-anchor="middle" class="sm">摘要表</text>

        <rect x="720" y="12" width="190" height="52" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
        <text x="815" y="34" text-anchor="middle" fill="#1f2937">④b 收到 alert</text>
        <text x="815" y="53" text-anchor="middle" fill="#1f2937" class="sm">+ diagnosis</text>
      </g>
      <!-- Mod boxes -->
      <g fill="currentColor">
        <rect x="100" y="132" width="180" height="52" rx="8" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-opacity=".5" />
        <text x="190" y="163" text-anchor="middle">③ 啟動並監看 Worker</text>
        <rect x="520" y="132" width="180" height="52" rx="8" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-opacity=".5" />
        <text x="610" y="153" text-anchor="middle">wave settled／</text>
        <text x="610" y="172" text-anchor="middle">scouts 全數返回</text>
        <rect x="720" y="132" width="190" height="52" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
        <text x="815" y="163" text-anchor="middle" fill="#1f2937">worker alert</text>
      </g>
      <!-- Worker boxes -->
      <g fill="currentColor">
        <rect x="520" y="252" width="180" height="52" rx="8" fill="currentColor" fill-opacity=".1" stroke="currentColor" stroke-opacity=".5" />
        <text x="610" y="273" text-anchor="middle">回報結果</text>
        <text x="610" y="292" text-anchor="middle" class="sm" opacity=".8">(a) 完成</text>
        <rect x="720" y="252" width="190" height="52" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
        <text x="815" y="273" text-anchor="middle" fill="#1f2937" class="sm">卡住／沒動／</text>
        <text x="815" y="292" text-anchor="middle" fill="#1f2937" class="sm">沒交結果／消失</text>
      </g>
      <!-- arrows -->
      <g fill="none" stroke="currentColor" stroke-width="2" stroke-opacity=".7" marker-end="url(#wl-arrow)">
        <path d="M185,64 V132" />              <!-- 1 Lead -> Mod -->
        <path d="M270,38 H294" />              <!-- 1 -> 2 -->
        <path d="M190,184 V220 H555 V252" stroke-dasharray="0" />
        <path d="M610,252 V184" />             <!-- W -> Mod (a) -->
        <path d="M610,132 V64" />              <!-- Mod -> Lead (a) -->
        <path d="M815,252 V184" stroke="#d97706" marker-end="url(#wl-arrow-amber)" />
        <path d="M815,132 V64" stroke="#d97706" marker-end="url(#wl-arrow-amber)" />
      </g>
      <text x="395" y="100" text-anchor="middle" class="sm" fill="currentColor" opacity=".8">⏳ 之後由 Mod 喚醒</text>
      <text x="372" y="214" text-anchor="middle" class="sm" fill="currentColor" opacity=".8">監看中</text>
      <rect x="100" y="326" width="810" height="30" rx="6" fill="currentColor" fill-opacity=".06" />
      <text x="505" y="347" text-anchor="middle" class="nt" fill="currentColor">喚醒訊息會排隊、合併，重新載入也不會遺失</text>
    </svg>
    <div class="diag"><span>診斷：</span><slot /></div>
  </div>
</template>

<style scoped>
.wl text { font-size: 15px; }
.wl text.sm { font-size: 14px; }
.wl text.ln { font-size: 18px; }
.wl svg { width: 100%; max-height: 330px; }
.diag { display: flex; flex-wrap: wrap; gap: .4rem; align-items: center; margin-top: .5rem; font-size: 15px; }
.diag :deep(code), .diag .b { padding: 1px 8px; border-radius: 999px; border: 1px solid currentColor; font-size: 14px; opacity: .85; }
</style>
