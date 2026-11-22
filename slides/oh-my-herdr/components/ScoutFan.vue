<script setup lang="ts">
// Slide "Scouts 先探路": the lead fans out read-only scouts before any plan exists.
const scouts = [
  { t: 'scout・code', d: '讀相關的程式碼' },
  { t: 'scout・docs', d: '查外部文件' },
  { t: 'scout・repo', d: '翻 repo 與歷史' },
]
</script>

<template>
  <div class="sf2">
    <div class="sf2-lead"><b>Lead</b><small>還沒有計畫</small></div>
    <svg class="sf2-svg" viewBox="0 0 100 300" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-opacity=".45" stroke-width="2" stroke-dasharray="6 5" vector-effect="non-scaling-stroke">
        <path d="M0 150 C50 150 50 50 100 50" /><path d="M0 150 L100 150" /><path d="M0 150 C50 150 50 250 100 250" />
      </g>
    </svg>
    <div class="sf2-scouts">
      <div v-for="s in scouts" :key="s.t" class="sf2-scout">
        <span class="sf2-eye">👁</span><div><b>{{ s.t }}</b><small>{{ s.d }}</small></div>
      </div>
    </div>
    <svg class="sf2-svg" viewBox="0 0 100 300" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="#10b981" stroke-opacity=".8" stroke-width="2" vector-effect="non-scaling-stroke">
        <path d="M0 50 C50 50 50 150 100 150" /><path d="M0 150 L100 150" /><path d="M0 250 C50 250 50 150 100 150" />
      </g>
    </svg>
    <div class="sf2-plan"><b>寫計畫</b><small>拿著附出處的發現</small></div>
  </div>
  <div class="sf2-tags">
    <span>只讀，不改檔案</span><span>每個發現附 file:line</span><span>跑在便宜的模型</span><span>全部回來才叫醒 lead</span>
  </div>
</template>

<style scoped>
.sf2 { display: grid; grid-template-columns: 130px 70px 1fr 70px 140px; align-items: center; height: 270px; margin-top: 1.2rem; text-align: left; }
.sf2-svg { width: 100%; height: 100%; }
.sf2-lead, .sf2-plan { display: flex; flex-direction: column; align-items: center; padding: 18px 10px; border-radius: 14px; }
.sf2-lead { background: color-mix(in srgb, #6366f1 16%, transparent); border: 2px solid #6366f1; }
.sf2-plan { background: color-mix(in srgb, #10b981 14%, transparent); border: 2px solid #10b981; }
.sf2-lead b, .sf2-plan b { font-size: 20px; }
small { font-size: 12px; opacity: 0.7; }
.sf2-scouts { display: flex; flex-direction: column; justify-content: space-between; height: 100%; padding: 6px 0; }
.sf2-scout { display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 999px; background: color-mix(in srgb, currentColor 6%, transparent); }
.sf2-scout div { display: flex; flex-direction: column; }
.sf2-scout b { font-size: 16px; font-family: var(--slidev-code-font-family, monospace); }
.sf2-eye { font-size: 20px; }
.sf2-tags { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
.sf2-tags span { padding: 4px 12px; border-radius: 999px; font-size: 14px; border: 1.5px solid color-mix(in srgb, currentColor 35%, transparent); }
</style>
