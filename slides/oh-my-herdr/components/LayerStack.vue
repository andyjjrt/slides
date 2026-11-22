<script setup lang="ts">
// Slide "建立在什麼之上": the layers from the human down to the workers, with .omh/ beside them.
const layers = [
  { t: '你', d: '核准計畫、看進度', c: '#f59e0b' },
  { t: 'Claude Code lead + omh', d: 'Opus 5.5 規劃與驗收；mod 記帳、派工、叫醒；skill 教它流程', c: '#6366f1' },
  { t: 'herdr / herdr-core', d: '每個 worker 一個 pane 或 terminal', c: '#0ea5e9' },
  { t: 'workers', d: 'Claude · senpi（DeepSeek）· pi · Claude subagent', c: '#10b981' },
]
const style = (i: number) => ({ '--c': layers[i].c, marginLeft: i * 18 + 'px', marginRight: i * 18 + 'px' })
</script>

<template>
  <div class="ls">
    <div class="ls-stack">
      <div class="ls-layer" :style="style(0)"><b>{{ layers[0].t }}</b><span>{{ layers[0].d }}</span></div>
      <div v-for="i in [1, 2, 3]" :key="i" class="ls-layer" :style="style(i)">
        <b>{{ layers[i].t }}</b><span>{{ layers[i].d }}</span>
      </div>
    </div>
    <div class="ls-side">
      <div class="ls-file">.omh/</div>
      <p>plan、brief、result、狀態都寫成檔案</p>
      <p class="ls-strong">source of truth</p>
      <p>重新載入也接得回來</p>
    </div>
  </div>
</template>

<style scoped>
.ls { display: grid; grid-template-columns: 1fr 190px; gap: 22px; margin-top: 1.6rem; text-align: left; }
.ls-stack { display: flex; flex-direction: column; gap: 10px; }
.ls-layer {
  display: flex; align-items: baseline; gap: 14px; padding: 16px 20px; border-radius: 10px;
  border-left: 6px solid var(--c); background: color-mix(in srgb, var(--c) 13%, transparent);
}
.ls-layer b { font-size: 20px; white-space: nowrap; }
.ls-layer span { font-size: 15px; opacity: 0.8; }
.ls-side {
  display: flex; flex-direction: column; justify-content: center; gap: 6px; padding: 16px; border-radius: 12px;
  border: 2px dashed color-mix(in srgb, currentColor 35%, transparent);
}
.ls-file { font-family: var(--slidev-code-font-family, monospace); font-size: 26px; font-weight: 700; }
.ls-side p { margin: 0; font-size: 14px; opacity: 0.75; line-height: 1.4; }
.ls-side .ls-strong { font-size: 17px; font-weight: 700; opacity: 1; }
</style>
