<script setup lang="ts">
// Slide "Intent Gate": one dispatch drawn as a ticket, each field annotated with the question it answers.
const fields = [
  { k: 'task', v: 'api-pagination', q: '做哪一件事' },
  { k: 'intent', v: 'implement', q: '這是什麼工作？', hot: true },
  { k: 'category', v: 'deep', q: '交給哪一類 worker？', hot: true },
  { k: 'rationale', v: '分頁邏輯中等複雜，交給 DeepSeek', q: '為什麼這樣配？', hot: true },
  { k: 'owns', v: 'src/api/orders.ts', q: '只有它能改這個檔案' },
]
</script>

<template>
  <div class="dt">
    <div class="dt-ticket">
      <div class="dt-head">dispatch</div>
      <div v-for="f in fields" :key="f.k" class="dt-row" :class="{ hot: f.hot }">
        <span class="dt-k">{{ f.k }}</span><span class="dt-v">{{ f.v }}</span>
      </div>
    </div>
    <div class="dt-notes">
      <div v-for="f in fields" :key="f.k" class="dt-note" :class="{ hot: f.hot }">← {{ f.q }}</div>
    </div>
  </div>
</template>

<style scoped>
.dt { display: grid; grid-template-columns: 1.35fr 1fr; gap: 18px; margin-top: 1.6rem; text-align: left; }
.dt-ticket { border-radius: 14px; overflow: hidden; border: 2px solid color-mix(in srgb, currentColor 30%, transparent); font-family: var(--slidev-code-font-family, monospace); }
.dt-head { padding: 8px 18px; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; background: color-mix(in srgb, currentColor 10%, transparent); }
.dt-row { display: grid; grid-template-columns: 110px 1fr; padding: 11px 18px; font-size: 16px; border-top: 1px dashed color-mix(in srgb, currentColor 22%, transparent); height: 46px; align-items: center; }
.dt-row.hot { background: color-mix(in srgb, #f59e0b 13%, transparent); }
.dt-k { opacity: 0.6; }
.dt-notes { display: flex; flex-direction: column; padding-top: 36px; }
.dt-note { height: 46px; display: flex; align-items: center; font-size: 17px; opacity: 0.6; }
.dt-note.hot { opacity: 1; font-weight: 700; color: #d97706; }
</style>
