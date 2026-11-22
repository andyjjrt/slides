<script setup lang="ts">
// Worker state machine — mirrors docs/architecture.md "A worker's life".
type Kind = 'neutral' | 'warn' | 'ok'
interface St { id: string; x: number; y: number; w: number; kind: Kind }
interface Edge {
  from: string; to: string; label?: string; d: string
  lx?: number; ly?: number; anchor?: 'start' | 'middle' | 'end'
  lines?: string[] // display-only wrap of label
}

const H = 30
const states: St[] = [
  { id: 'idle', x: 80, y: 150, w: 70, kind: 'neutral' },
  { id: 'dispatched', x: 250, y: 150, w: 110, kind: 'neutral' },
  { id: 'running', x: 470, y: 150, w: 100, kind: 'neutral' },
  { id: 'finished', x: 860, y: 150, w: 100, kind: 'ok' },
  { id: 'stalled', x: 250, y: 45, w: 100, kind: 'warn' },
  { id: 'blocked', x: 640, y: 45, w: 100, kind: 'warn' },
  { id: 'gone', x: 300, y: 280, w: 80, kind: 'warn' },
  { id: 'checking', x: 470, y: 280, w: 100, kind: 'neutral' },
  { id: 'idle_no_result', x: 720, y: 280, w: 140, kind: 'warn' },
]

const edges: Edge[] = [
  { from: '[*]', to: 'idle', d: 'M28,150 L43,150' },
  { from: 'idle', to: 'dispatched', label: 'dispatch', d: 'M115,150 L193,150', lx: 154, ly: 141, anchor: 'middle' },
  { from: 'dispatched', to: 'running', label: 'working', d: 'M305,150 L418,150', lx: 362, ly: 141, anchor: 'middle' },
  { from: 'dispatched', to: 'stalled', label: 'no work within stall_seconds', d: 'M250,135 L250,62', lx: 242, ly: 102, anchor: 'end' },
  { from: 'running', to: 'blocked', label: 'dialog / waiting', d: 'M488,135 L610,61', lx: 530, ly: 98, anchor: 'end' },
  { from: 'blocked', to: 'running', label: 'working again', d: 'M655,61 L515,135', lx: 606, ly: 100, anchor: 'start' },
  { from: 'running', to: 'finished', label: 'idle or done, result.md', d: 'M520,150 L808,150', lx: 665, ly: 141, anchor: 'middle' },
  { from: 'running', to: 'checking', label: 'idle or done, no result.md', lines: ['idle or done,', 'no result.md'], d: 'M470,165 L470,263', lx: 478, ly: 200, anchor: 'start' },
  { from: 'checking', to: 'finished', label: 'result.md arrives', d: 'M470,295 L470,322 L885,322 L885,167', lx: 600, ly: 316, anchor: 'middle' },
  { from: 'checking', to: 'idle_no_result', label: 'grace period over', d: 'M520,280 L648,280', lx: 584, ly: 272, anchor: 'middle' },
  { from: 'stalled', to: 'running', label: 'working (live status rechecked)', d: 'M290,60 L440,135', lx: 312, ly: 66, anchor: 'start' },
  { from: 'stalled', to: 'finished', label: 'idle or done, result.md', d: 'M250,30 L250,10 L860,10 L860,133', lx: 555, ly: 23, anchor: 'middle' },
  { from: 'idle_no_result', to: 'running', label: 'working again', d: 'M680,265 L522,162', lx: 612, ly: 236, anchor: 'end' },
  { from: 'idle_no_result', to: 'finished', label: 'result.md arrives', d: 'M790,280 L830,280 L830,167', lx: 822, ly: 228, anchor: 'end' },
  { from: 'running', to: 'gone', label: 'pane closed / subagent died', d: 'M440,165 L330,263', lx: 372, ly: 222, anchor: 'end' },
  { from: 'finished', to: 'dispatched', label: 'next task (pane workers)', d: 'M910,150 L945,150 L945,352 L230,352 L230,167', lx: 560, ly: 345, anchor: 'middle' },
]

const kindOf = (id: string): Kind => states.find((s) => s.id === id)?.kind ?? 'neutral'
const edgeKind = (e: Edge) => (kindOf(e.to) === 'warn' ? 'warn' : 'neutral')
</script>

<template>
  <svg class="sm" viewBox="0 0 960 362" role="img" aria-label="Worker state machine">
    <defs>
      <marker id="sm-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
      </marker>
      <marker id="sm-ah-warn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
        <path d="M0,0 L10,5 L0,10 z" fill="#f59e0b" />
      </marker>
    </defs>

    <g fill="none" stroke-width="1.5">
      <g v-for="e in edges" :key="e.from + e.to + (e.label ?? '')">
        <title>{{ e.from }} → {{ e.to }}{{ e.label ? ': ' + e.label : '' }}</title>
        <path
          :d="e.d"
          :class="['sm-edge', edgeKind(e)]"
          :marker-end="edgeKind(e) === 'warn' ? 'url(#sm-ah-warn)' : 'url(#sm-ah)'"
        />
      </g>
    </g>

    <circle class="sm-start" cx="20" cy="150" r="7" />

    <g v-for="s in states" :key="s.id" :class="['sm-node', s.kind]">
      <rect :x="s.x - s.w / 2" :y="s.y - H / 2" :width="s.w" :height="H" rx="8" />
      <text :x="s.x" :y="s.y + 4.5" text-anchor="middle">{{ s.id }}</text>
    </g>

    <g class="sm-labels">
      <text
        v-for="e in edges.filter((x) => x.label)"
        :key="'l' + e.from + e.to + e.label"
        :x="e.lx"
        :y="e.ly"
        :text-anchor="e.anchor"
      >
        <template v-if="e.lines">
          <tspan v-for="(t, i) in e.lines" :key="i" :x="e.lx" :dy="i ? 15 : 0">{{ t }}</tspan>
        </template>
        <template v-else>{{ e.label }}</template>
      </text>
    </g>
  </svg>
</template>

<style scoped>
.sm { width: 100%; height: auto; display: block; margin-top: 0.4rem; font-size: 12px; }
.sm-edge { stroke: currentColor; stroke-opacity: 0.6; }
.sm-edge.warn { stroke: #f59e0b; stroke-opacity: 0.9; }
.sm-start { fill: currentColor; opacity: 0.7; }
.sm-node rect { fill: color-mix(in srgb, currentColor 6%, transparent); stroke: currentColor; stroke-width: 2; }
.sm-node text { fill: currentColor; font-family: var(--slidev-code-font-family, monospace); font-size: 13px; font-weight: 600; }
.sm-node.warn rect { stroke: #f59e0b; fill: color-mix(in srgb, #f59e0b 16%, transparent); }
.sm-node.ok rect { stroke: #10b981; fill: color-mix(in srgb, #10b981 16%, transparent); }
.sm-node.ok text { fill: #10b981; }
.sm-labels text {
  fill: currentColor; font-size: 13px; opacity: 0.9;
  paint-order: stroke; stroke: #fff; stroke-width: 4px; stroke-linejoin: round;
}
:global(.dark .sm-labels text) { stroke: #121212; }
</style>
