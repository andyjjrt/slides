<script setup lang="ts">
const causes = ['Codex：模型退步、慢、額度不夠', 'Opus 5.5 + $20 Pro 額度驚人', 'herdr 讓 agent 各有自己的 pane']
const tl = [
  ['2025-12', 'OmO repo'],
  ['2026-05', 'Codex 大放送'],
  ['2026-09', 'OmO Native／Opus 5.5'],
  ['2026-11-14', 'omh 0.1.0'],
  ['2026-11-21', 'omh 0.4.3'],
]
</script>

<template>
  <div class="pf">
    <div class="pf-main">
      <div class="pf-causes">
        <div v-for="c in causes" :key="c" class="pf-cause">{{ c }}</div>
      </div>
      <div class="pf-link"><svg class="pf-svg" viewBox="0 0 50 100" preserveAspectRatio="none">
        <path d="M0 17 C25 17 25 50 50 50 M0 50 L50 50 M0 83 C25 83 25 50 50 50" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.5" vector-effect="non-scaling-stroke" />
      </svg></div>
      <div class="pf-goal"><span>把 OmO 移植成 <b>omh</b></span></div>
    </div>
    <div class="pf-tl">
      <div v-for="t in tl" :key="t[0]" class="pf-ev">
        <span class="pf-dot"></span><b>{{ t[0] }}</b><span>{{ t[1] }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pf { text-align: left; height: 100%; display: flex; flex-direction: column; }
.pf-main { display: flex; align-items: stretch; flex: 1; min-height: 190px; }
/* three equal rows, boxes centred: centres sit at 1/6, 1/2, 5/6 of the height, matching the SVG curve ends (17 / 50 / 83) */
.pf-causes { display: grid; grid-template-rows: repeat(3, 1fr); align-items: center; width: 58%; }
.pf-cause {
  font-size: 14px; line-height: 1.3; padding: 9px 12px; border-radius: 9px;
  border: 1.5px solid color-mix(in srgb, currentColor 45%, transparent);
  background: color-mix(in srgb, currentColor 5%, transparent);
}
/* the wrapper stretches with the row; the SVG fills it absolutely so its curve ends track the cause boxes */
.pf-link { width: 8%; flex: none; position: relative; }
.pf-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.pf-goal {
  flex: 1; display: flex; align-items: center; justify-content: center; text-align: center;
  font-size: 15px; font-weight: 600; padding: 8px; border-radius: 12px;
  border: 2.5px solid #10b981; background: color-mix(in srgb, #10b981 14%, transparent);
}
.pf-tl {
  display: flex; justify-content: space-between; gap: 4px; margin-top: 16px; padding-top: 10px;
  border-top: 2px solid color-mix(in srgb, currentColor 35%, transparent);
}
.pf-ev { display: flex; flex-direction: column; font-size: 11px; line-height: 1.3; position: relative; flex: 1; }
.pf-ev b { font-size: 11.5px; }
.pf-ev span:last-child { opacity: 0.75; }
.pf-dot { position: absolute; top: -17px; left: 0; width: 8px; height: 8px; border-radius: 50%; background: currentColor; }
</style>
