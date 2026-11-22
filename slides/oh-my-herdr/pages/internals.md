# Intent Gate：每次派工先說明理由

<script setup>
import DispatchTicket from '../components/DispatchTicket.vue'
</script>

<DispatchTicket />

<div class="intent-future">
  <b>為什麼現在就要寫 intent？</b>現在由 lead 自己判斷；先把欄位與紀錄留下來，未來可以交給 <b>jev-like model</b> 做 intent 路由。
</div>

<style>
.intent-future { margin-top: 18px; text-align: left; padding: 12px 18px; border-radius: 12px; font-size: 16px; border: 2px dashed #f59e0b; background: color-mix(in srgb, #f59e0b 10%, transparent); }
.intent-future b:first-child { margin-right: 8px; }
</style>

<!-- 講者備註：這是從 OmO 繼承的 Intent Gate：每次派工都先講清楚意圖、類別和理由。現在 intent 是 lead 自己判斷的，保留這個欄位的真正原因是為未來鋪路：每次派工的 intent、category 與理由都留下紀錄，之後可以換成 jev-like model 來做 intent 路由，不必每次都靠 lead 判斷。 -->

---

# 路由與額度

<script setup>
import RouteDemo from '../components/RouteDemo.vue'
</script>

<RouteDemo />

<div class="go-callout2 mt-4">量大的工作預設先給 OpenCode Go 上的 DeepSeek；Claude 額度留給 lead 與 review。</div>

<style>
.go-callout2 { text-align: left; padding: 14px 20px; border-radius: 12px; font-size: 17px; border: 2px solid #10b981; background: color-mix(in srgb, #10b981 12%, transparent); }
</style>

<!-- 講者備註：路由的概念很簡單：每個類別是一串候選，從第一個開始挑，額度快用完的 provider 就跳過。審查則盡量換一個模型家族。預設設定裡量大的工作第一順位是 OpenCode Go 的 DeepSeek，因為每月約有 100 美金等值的額度可用（我的方案），Claude 額度留給 lead 與 review。 -->

---

# Pane worker 與 subagent worker

| | Pane worker | Subagent worker |
| --- | --- | --- |
| 跑在哪裡 | herdr pane／hc terminal | lead 的 Claude Code 裡 |
| 可用模型 | 任何 agent、任何 provider | 僅 Claude |
| 啟動 | 較慢（10–30 秒） | 即時 |
| 額度與權限 | 自己的 | 和 lead 共用 |
| 看得到過程 | 切過去就看得到 | 只有 transcript |

<!-- 講者備註：兩種 worker 各有用途：pane worker 可以用任何 agent、任何 provider，看得到它在做什麼；subagent 啟動快，但只能用 Claude，也共用 lead 的額度。長任務、便宜模型用 pane；快速的小探索用 subagent。 -->

---
hide: true
class: text-sm
---

# Worker 狀態機

<StateMachine />

`blocked`、`stalled`、`idle_no_result` 或 `gone` 都會喚醒 lead 並附上診斷。

<!-- 講者備註：（隱藏頁，細節備用）狀態來源不同，但 pane 與 subagent worker 共用同一套狀態機。 -->

---

# 安全護欄

<div class="rules">
  <div><carbon-locked class="r-i" /><b>沒核准不動工</b><span>計畫沒經過人核准，就不能切 wave、不能派工</span></div>
  <div><carbon-document class="r-i" /><b>檔案有主人</b><span>同一 wave 不會有兩個 worker 改同一個檔案</span></div>
  <div><carbon-checkmark-outline class="r-i" /><b>一關一關過</b><span>前一個 wave 的 gate 沒過，下一個不能開始</span></div>
  <div><carbon-user-avatar class="r-i" /><b>敏感操作問人</b><span>worker 要權限時，lead 不會替你按同意</span></div>
</div>

<!-- 講者備註：四道護欄：沒核准不動工、檔案有主人、gate 一關一關過、敏感操作一定問人。其他像 scout 只讀、同時最多幾個 worker、審查換家族，都是同一個精神。 -->

---
hide: true
layout: two-cols
class: text-xs
---

# 架構：模組與 `.omh/`

（隱藏頁，細節備用；見 docs/architecture.md）

<!-- 講者備註：（隱藏頁）模組與 .omh/ 目錄結構請見 docs/architecture.md。 -->
