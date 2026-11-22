<script setup lang="ts">
const left = [
  { n: 'Oracle', r: '架構、除錯顧問' },
  { n: 'Librarian', r: '查文件、搜程式碼' },
  { n: 'Explore', r: '快速搜尋 codebase' },
]
const right = [
  { n: 'Prometheus', r: '規劃' },
  { n: 'Hephaestus', r: '自主深度工作' },
]
</script>

<template>
  <div class="oc">
    <div class="oc-col">
      <div v-for="a in left" :key="a.n" class="oc-card">
        <b>{{ a.n }}</b><span>{{ a.r }}</span>
      </div>
    </div>
    <div class="oc-link"><span>delegate</span></div>
    <div class="oc-core">
      <div class="oc-name">Sisyphus</div>
      <div class="oc-sub">main orchestrator</div>
    </div>
    <div class="oc-link"><span>delegate</span></div>
    <div class="oc-col">
      <div v-for="a in right" :key="a.n" class="oc-card">
        <b>{{ a.n }}</b><span>{{ a.r }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.oc { display: flex; align-items: center; justify-content: center; gap: 0; margin-top: 1.4rem; }
.oc-col { display: flex; flex-direction: column; gap: 10px; width: 250px; }
.oc-card {
  display: flex; flex-direction: column; gap: 2px; text-align: left;
  padding: 9px 14px; border: 1.5px solid color-mix(in srgb, currentColor 45%, transparent);
  border-radius: 10px; background: color-mix(in srgb, currentColor 5%, transparent);
}
.oc-card b { font-size: 17px; line-height: 1.2; }
.oc-card span { font-size: 13px; opacity: 0.75; line-height: 1.3; }
.oc-link { width: 70px; display: flex; flex-direction: column; align-items: center; }
.oc-link::before { content: ''; display: block; width: 100%; border-top: 2px dashed color-mix(in srgb, currentColor 50%, transparent); }
.oc-link span { font-size: 11px; opacity: 0.6; margin-top: 3px; }
.oc-core { text-align: center;
  width: 190px; padding: 26px 12px; border-radius: 14px; border: 2.5px solid #f59e0b;
  background: color-mix(in srgb, #f59e0b 16%, transparent);
}
.oc-name { font-size: 26px; font-weight: 700; line-height: 1.2; }
.oc-sub { font-size: 13px; opacity: 0.75; margin-top: 4px; }
</style>
