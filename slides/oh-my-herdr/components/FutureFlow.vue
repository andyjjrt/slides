<script setup lang="ts">
// Future work: requests → plan → approve, with the human only at both ends.
const auto = ['收集', '歸納', '擬定計畫']
const principles = [
  { t: '心流隔離', d: '測試的發散期與開發的收斂期，在時間與空間上分開；測試時只管 brain dump，不用想架構與分類' },
  { t: '低介入、高自動化', d: '收集 → 歸納 → 擬計畫在背景自己推進；人不參與整理，只保留最後的決策授權' },
  { t: '非同步儀表板', d: 'Discord 不只是聊天，而是 /ulw（Unit of Work）的決策儀表板與狀態通知中心' },
]
</script>

<template>
  <div class="ff">
    <div class="ff-row">
      <div class="ff-zone human">
        <span class="ff-tag">人・測試期</span>
        <div class="ff-node">Brain dump<small>隨手丟 request</small></div>
      </div>
      <div class="ff-arrow">→</div>
      <div class="ff-zone bg">
        <span class="ff-tag">背景・自動</span>
        <div class="ff-chain">
          <template v-for="(a, i) in auto" :key="a">
            <div class="ff-node sm">{{ a }}</div>
            <div v-if="i < auto.length - 1" class="ff-arrow sm">→</div>
          </template>
        </div>
      </div>
      <div class="ff-arrow">→</div>
      <div class="ff-zone human">
        <span class="ff-tag">人・決策</span>
        <div class="ff-node">omh approve<small>Discord 上核准</small></div>
      </div>
      <div class="ff-arrow">→</div>
      <div class="ff-zone bg">
        <span class="ff-tag">背景・執行</span>
        <div class="ff-node">/ulw<small>worktree + lead</small></div>
      </div>
    </div>
    <div class="ff-principles">
      <div v-for="p in principles" :key="p.t" class="ff-p"><b>{{ p.t }}</b><p>{{ p.d }}</p></div>
    </div>
  </div>
</template>

<style scoped>
.ff { margin-top: 1.2rem; text-align: left; }
.ff-row { display: flex; align-items: stretch; gap: 6px; }
.ff-zone { position: relative; border-radius: 12px; padding: 22px 10px 12px; display: flex; align-items: center; justify-content: center; }
.ff-zone.human { border: 2px solid #f59e0b; background: color-mix(in srgb, #f59e0b 12%, transparent); }
.ff-zone.bg { border: 2px dashed color-mix(in srgb, currentColor 40%, transparent); flex: 1; }
.ff-tag { position: absolute; top: 4px; left: 10px; font-size: 11px; opacity: 0.7; }
.ff-chain { display: flex; align-items: center; gap: 4px; }
.ff-node { display: flex; flex-direction: column; align-items: center; font-weight: 700; font-size: 16px; padding: 6px 10px; border-radius: 8px; background: color-mix(in srgb, currentColor 6%, transparent); white-space: nowrap; }
.ff-node small { font-weight: 400; font-size: 11px; opacity: 0.7; }
.ff-node.sm { font-size: 14px; padding: 8px 9px; }
.ff-arrow { align-self: center; opacity: 0.6; font-size: 20px; }
.ff-arrow.sm { font-size: 16px; }
.ff-principles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-top: 22px; }
.ff-p { padding: 14px 16px; border-radius: 12px; border: 1.5px solid color-mix(in srgb, currentColor 40%, transparent); background: color-mix(in srgb, currentColor 5%, transparent); }
.ff-p b { font-size: 18px; }
.ff-p p { margin: 6px 0 0; font-size: 14px; line-height: 1.45; opacity: 0.8; }
</style>
