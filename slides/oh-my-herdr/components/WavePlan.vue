<script setup lang="ts">
// Slide "先計畫，再分 wave": draft → human approval → waves of parallel tasks separated by gates.
const waves = [
  { n: 'Wave 1', tasks: ['API', '資料表', '前端'] },
  { n: 'Wave 2', tasks: ['測試', 'review'] },
]
</script>

<template>
  <div class="wp">
    <div class="wp-step"><span class="wp-k">寫</span><b>計畫</b><small>目標・做法・驗收</small></div>
    <div class="wp-arrow">→</div>
    <div class="wp-step human"><span class="wp-k">人</span><b>核准</b><small>看過才生效</small></div>
    <template v-for="w in waves" :key="w.n">
      <div class="wp-arrow">→</div>
      <div class="wp-wave">
        <div class="wp-wn">{{ w.n }}</div>
        <div v-for="t in w.tasks" :key="t" class="wp-task">{{ t }}</div>
        <div class="wp-par">平行・不碰同一個檔案</div>
      </div>
      <div class="wp-gate" title="gate">gate</div>
    </template>
    <div class="wp-arrow">→</div>
    <div class="wp-done">完成</div>
  </div>
</template>

<style scoped>
.wp { display: flex; align-items: center; gap: 8px; margin-top: 3.5rem; zoom: 1.15; }
.wp-arrow { opacity: 0.5; font-size: 20px; }
.wp-step { display: flex; flex-direction: column; align-items: center; padding: 14px 12px; border-radius: 12px; background: color-mix(in srgb, currentColor 6%, transparent); min-width: 96px; }
.wp-step.human { background: color-mix(in srgb, #f59e0b 18%, transparent); outline: 2px solid #f59e0b; }
.wp-k { font-size: 12px; opacity: 0.6; }
.wp-step b { font-size: 20px; }
.wp-step small { font-size: 11px; opacity: 0.7; }
.wp-wave { display: flex; flex-direction: column; gap: 6px; padding: 10px; border-radius: 12px; border: 2px dashed color-mix(in srgb, #6366f1 60%, transparent); min-width: 128px; }
.wp-wn { font-size: 13px; font-weight: 700; color: #6366f1; }
.wp-task { padding: 6px 10px; border-radius: 6px; font-size: 14px; background: color-mix(in srgb, #6366f1 16%, transparent); }
.wp-par { font-size: 10.5px; opacity: 0.65; }
.wp-gate {
  writing-mode: vertical-rl; padding: 14px 6px; border-radius: 6px; font-size: 13px; font-weight: 700; letter-spacing: 2px;
  background: #10b981; color: #fff;
}
.wp-done { padding: 14px 16px; border-radius: 999px; font-weight: 700; border: 2px solid #10b981; color: #10b981; }
</style>
