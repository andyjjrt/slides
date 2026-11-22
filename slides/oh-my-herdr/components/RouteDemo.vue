<script setup lang="ts">
// Slide "路由與額度": one category walked in order, skipping a provider that is nearly out (illustrative numbers).
const profiles = [
  { n: 'go-deepseek', p: 'OpenCode Go', used: 97, state: 'skip' },
  { n: 'claude-sonnet', p: 'Claude', used: 42, state: 'pick' },
  { n: 'sub-sonnet', p: 'Claude subagent', used: 42, state: 'wait' },
]
</script>

<template>
  <div class="rd">
    <div class="rd-cat"><small>category</small><b>deep</b></div>
    <div class="rd-list">
      <div v-for="(p, i) in profiles" :key="p.n" class="rd-row" :class="p.state">
        <span class="rd-i">{{ i + 1 }}</span>
        <div class="rd-name"><b>{{ p.n }}</b><small>{{ p.p }}</small></div>
        <div class="rd-bar"><div :style="{ width: p.used + '%' }"></div><span class="rd-th"></span></div>
        <span class="rd-pct">{{ p.used }}%</span>
        <span class="rd-tag">{{ p.state === 'skip' ? '額度快用完，跳過' : p.state === 'pick' ? '✓ 派給它' : '備用' }}</span>
      </div>
      <div class="rd-legend">虛線＝95% 門檻・數字為示意</div>
    </div>
  </div>
</template>

<style scoped>
.rd { display: grid; grid-template-columns: 120px 1fr; gap: 20px; align-items: center; margin-top: 1.4rem; text-align: left; }
.rd-cat { display: flex; flex-direction: column; align-items: center; padding: 22px 10px; border-radius: 14px; background: color-mix(in srgb, #6366f1 16%, transparent); border: 2px solid #6366f1; }
.rd-cat b { font-size: 24px; font-family: var(--slidev-code-font-family, monospace); }
small { font-size: 12px; opacity: 0.7; }
.rd-list { display: flex; flex-direction: column; gap: 10px; }
.rd-row { display: grid; grid-template-columns: 28px 150px 1fr 46px 150px; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; }
.rd-row.skip { opacity: 0.55; }
.rd-row.skip .rd-name b { text-decoration: line-through; }
.rd-row.pick { background: color-mix(in srgb, #10b981 14%, transparent); outline: 2px solid #10b981; }
.rd-i { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; background: color-mix(in srgb, currentColor 12%, transparent); }
.rd-name { display: flex; flex-direction: column; }
.rd-name b { font-family: var(--slidev-code-font-family, monospace); font-size: 15px; }
.rd-bar { position: relative; height: 12px; border-radius: 6px; background: color-mix(in srgb, currentColor 10%, transparent); }
.rd-bar div { height: 100%; border-radius: 6px; background: #10b981; }
.rd-row.skip .rd-bar div { background: #ef4444; }
.rd-th { position: absolute; top: -4px; bottom: -4px; left: 95%; border-left: 2px dashed currentColor; opacity: 0.6; }
.rd-pct { font-size: 13px; font-family: var(--slidev-code-font-family, monospace); }
.rd-tag { font-size: 14px; font-weight: 600; }
.rd-row.skip .rd-tag { color: #ef4444; }
.rd-row.pick .rd-tag { color: #10b981; }
.rd-legend { font-size: 12px; opacity: 0.55; padding-left: 14px; }
</style>
