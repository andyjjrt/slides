<script setup lang="ts">
const main = [
  { t: '/ulw goal', mono: true },
  { t: 'explore' },
  { t: 'plan.md', mono: true },
  { t: '/omh approve', mono: true, human: true },
  { t: 'waves of tasks' },
  { t: 'verify · gate' },
  { t: 'done', done: true },
]
</script>

<template>
  <div class="sf">
    <div class="sf-row">
      <template v-for="(n, i) in main.slice(0, 4)" :key="n.t">
        <span v-if="i" class="sf-arrow">→</span>
        <div class="sf-node" :class="{ human: n.human, mono: n.mono }">
          <span v-if="n.human" class="sf-tag">人</span>{{ n.t }}
        </div>
      </template>
      <span class="sf-arrow">→</span>
      <div class="sf-pair">
        <div class="sf-pair-top">
          <div class="sf-node fixed">waves of tasks</div>
          <span class="sf-arrow">→</span>
          <div class="sf-node fixed">verify · gate</div>
        </div>
        <div class="sf-branch">
          <span class="sf-label l">panes · subagents</span>
          <div class="sf-node workers">workers</div>
          <span class="sf-label r">wake the lead</span>
        </div>
      </div>
      <span class="sf-arrow">→</span>
      <div class="sf-node done">done</div>
    </div>
  </div>
</template>

<style scoped>
.sf { margin-top: 3.5rem; font-size: 17px; line-height: 1.2; }
.sf-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 3px; }
.sf-row > .sf-arrow { margin-top: 16px; }
.sf-node {
  position: relative; white-space: nowrap; font-weight: 600; text-align: center;
  padding: 18px 8px; border: 2px solid currentColor; border-radius: 10px;
  background: color-mix(in srgb, currentColor 6%, transparent);
}
.sf-node.mono { font-family: var(--slidev-code-font-family, monospace); font-size: 15px; padding-top: 19px; padding-bottom: 19px; }
.sf-node.fixed { width: 128px; padding-left: 0; padding-right: 0; }
.sf-node.done { border-color: #10b981; color: #10b981; }
.sf-node.human { border-color: #f59e0b; background: color-mix(in srgb, #f59e0b 16%, transparent); }
.sf-tag {
  position: absolute; top: -14px; right: -8px; font-size: 14px; padding: 1px 7px;
  border-radius: 999px; background: #f59e0b; color: #1a1a1a; font-family: sans-serif; line-height: 1.3;
}
.sf-arrow { opacity: 0.6; font-size: 20px; line-height: 1.2; }
.sf-pair-top { display: flex; align-items: center; gap: 3px; }
.sf-pair-top .sf-arrow { margin-top: 0; }
/* dashed elbow: waves centre (64px) down, across to verify centre, up */
.sf-branch {
  position: relative; display: flex; justify-content: center; align-items: flex-end;
  height: 200px; margin: 0 64px; border: 2px dashed currentColor; border-top: 0;
  border-radius: 0 0 12px 12px; opacity: 1; color: inherit;
}
.sf-branch::before, .sf-branch::after { content: ''; position: absolute; top: -2px; left: -9px; border: 7px solid transparent; }
.sf-branch::after { left: auto; right: -9px; border-bottom-color: currentColor; top: -6px; opacity: .8; }
.sf-branch::before { display: none; }
.workers { position: absolute; bottom: -30px; border-style: dashed; background: #fff; padding: 16px 44px; font-size: 20px; }
:global(html.dark .workers) { background: #121212; }
.sf-label { position: absolute; top: 70px; font-size: 17px; opacity: .75; white-space: nowrap; }
.sf-label.l { right: calc(100% + 10px); }
.sf-label.r { left: calc(100% + 10px); }
</style>
