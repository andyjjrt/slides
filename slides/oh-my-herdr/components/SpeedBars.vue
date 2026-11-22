<script setup lang="ts">
const max = 140
const rows = [
  { n: 'Codex', v: 40, c: '#ef4444' },
  { n: 'Claude', v: 100, c: '#f59e0b' },
  { n: 'DeepSeek (OpenCode Go)', v: 140, c: '#10b981' },
]
</script>

<template>
  <div class="sb">
    <div class="sb-title">輸出速度（我的實測，約略）</div>
    <div v-for="r in rows" :key="r.n" class="sb-row">
      <div class="sb-name">{{ r.n }}</div>
      <div class="sb-track">
        <div class="sb-bar" :style="{ width: (r.v / max) * 100 + '%', background: r.c }"></div>
        <span class="sb-val">~{{ r.v }} tps</span>
      </div>
    </div>
    <div class="sb-note">delegate 出去：DeepSeek 做完，都在等 Codex</div>
  </div>
</template>

<style scoped>
.sb { text-align: left; height: 100%; display: flex; flex-direction: column; }
.sb-title { font-weight: 700; font-size: 18px; margin-bottom: 10px; }
.sb-row { flex: 1; display: flex; flex-direction: column; justify-content: center; margin-bottom: 0; }
.sb-name { font-size: 15px; opacity: 0.85; margin-bottom: 4px; }
.sb-track { display: flex; align-items: center; gap: 8px; }
.sb-bar { height: 26px; border-radius: 5px; min-width: 4px; }
.sb-val { font-size: 15px; font-family: var(--slidev-code-font-family, monospace); white-space: nowrap; }
.sb-note { margin-top: 8px; font-weight: 600; font-size: 17px; color: #ef4444; }
</style>
