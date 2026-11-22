<script setup lang="ts">
// The speaker's own OpenCode + OmO usage record (tokens_all report, 2026-11-22).
const stats = [
  ['5.1B', 'tokens'],
  ['$3,077', '依 list price 估算'],
  ['66.2K', 'messages'],
  ['3.5K', 'sessions'],
]
const max = 2.1
const rows = [
  { n: 'gpt-5.5', s: 'OpenAI', v: 2.1, t: '2.1B' },
  { n: 'gpt-5.4', s: 'OpenAI', v: 1.4, t: '1.4B' },
  { n: 'gpt-5.4-mini', s: 'OpenAI', v: 0.417, t: '417M' },
  { n: 'kimi-k2.6', s: 'OpenCode', v: 0.318, t: '318M' },
  { n: 'Mimo-V2.5-Pro', s: 'litellm', v: 0.315, t: '315M' },
  { n: 'deepseek-v4-flash', s: 'OpenCode', v: 0.135, t: '135M' },
]
const color: Record<string, string> = { OpenAI: '#10b981', OpenCode: '#6366f1', litellm: '#f59e0b' }
</script>

<template>
  <div class="tl">
    <div class="tl-stats">
      <div v-for="s in stats" :key="s[1]" class="tl-stat">
        <b>{{ s[0] }}</b><span>{{ s[1] }}</span>
      </div>
    </div>
    <div class="tl-rows">
      <div v-for="r in rows" :key="r.n" class="tl-row">
        <span class="tl-name">{{ r.n }}</span>
        <span class="tl-src" :style="{ color: color[r.s] }">{{ r.s }}</span>
        <div class="tl-track">
          <div class="tl-bar" :style="{ width: (r.v / max) * 100 + '%', background: color[r.s] }"></div>
          <span class="tl-val">{{ r.t }}</span>
        </div>
      </div>
    </div>
    <div class="tl-note">我的 OpenCode + OmO 紀錄（all time，前 6 名模型）</div>
  </div>
</template>

<style scoped>
.tl { text-align: left; }
.tl-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 14px; }
.tl-stat { display: flex; flex-direction: column; padding: 8px 10px; border-radius: 10px; background: color-mix(in srgb, currentColor 6%, transparent); }
.tl-stat b { font-size: 24px; line-height: 1.1; }
.tl-stat span { font-size: 12px; opacity: 0.7; }
.tl-rows { display: flex; flex-direction: column; gap: 7px; }
.tl-row { display: grid; grid-template-columns: 128px 62px 1fr; align-items: center; gap: 6px; font-size: 13px; }
.tl-name { font-family: var(--slidev-code-font-family, monospace); }
.tl-src { font-size: 11px; font-weight: 600; }
.tl-track { display: flex; align-items: center; gap: 6px; }
.tl-bar { height: 16px; border-radius: 4px; min-width: 3px; }
.tl-val { font-size: 12px; font-family: var(--slidev-code-font-family, monospace); white-space: nowrap; }
.tl-note { margin-top: 10px; font-size: 12px; opacity: 0.6; }
</style>
