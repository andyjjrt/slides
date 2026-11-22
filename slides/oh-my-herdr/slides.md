---
theme: ../../theme
title: oh-my-herdr
name: oh-my-herdr
themeConfig:
  glowHue: 100
addons:
  - ../addons/back-to-home
  - ../addons/background-animation
  - ../addons/page-number
info: 介紹 Claude Code 如何擔任 lead，協調多個 agent 與模型
class: text-center
transition: slide-left
mdc: true
drawings:
  persist: false
duration: 15min
---

# oh-my-herdr

## 讓 Claude Code 當 lead，把大工作拆給多個 agent 與模型

<p class="text-sm opacity-70">Claude Code plugin · on top of herdr · v0.4.3</p>

<!-- 講者備註：開場介紹這份約 15 分鐘的簡報，聚焦 lead 如何拆解並協調工作。 -->

---
src: ./pages/story.md
---

---

# 一句話：把目標交給 lead

輸入 `/ulw <goal>`；lead 規劃、派工、等待並驗證。你核准 plan，並看著 progress bar。

<StepFlow />

<!-- 講者備註：帶大家走過從探索、核准 plan 到 wave 驗證與完成的流程。 -->

---

# 建立在什麼之上

<script setup>
import LayerStack from './components/LayerStack.vue'
</script>

<LayerStack />

<!-- 講者備註：區分提供工作空間的 herdr 與負責協調流程的 mod、skill。 -->

---
src: ./pages/workflow.md
---

---
src: ./pages/internals.md
---

---

# 看得到的進度

<img src="/statusline.png" alt="Claude Code status line 加上 oh-my-herdr 進度" class="w-full rounded mb-6" />

<div class="icon-list cols-3">
  <div><carbon-chart-line-smooth class="il-i" style="color:#6366f1" /><b>進度條</b><span>status line 直接看到 <code>2/5</code>，需要你時亮警示</span></div>
  <div><carbon-dashboard class="il-i" style="color:#0ea5e9" /><b>看板</b><span>另開一個 pane 看 waves、workers 與額度</span></div>
  <div><carbon-catalog class="il-i" style="color:#10b981" /><b>品質紀錄</b><span>每個 task 的評語、模型與耗時都記下</span></div>
</div>

<!-- 講者備註：不用盯著畫面也知道進度：status line 有進度條，細節開看板，每個 task 的品質評語也會記下來，累積之後就知道哪個模型適合哪種工作。 -->

---
hide: true
---

# 版本演進

| 版本 | 里程碑 |
| --- | --- |
| **0.1.0 · 11-14** | First release |
| **0.2.0** | `/omh approve`、status line progress |
| **0.3.0** | scouts、subagent workers、worker tabs、quota by command |
| **0.4.0** | per-run dirs、herdr-core backend、pi agent |
| **0.4.1** | worker backend option |
| **0.4.2** | 修正 false stall alerts；`omh_status recheck` |
| **0.4.3** | lead 的 subagents 遵循 config；herdr-core skill |

<!-- 講者備註：版本持續補上核准、平行工作、進度、後端選擇與可靠度機制。 -->

---

# Demo

<video src="/demo.mp4" class="demo-video" controls muted loop playsinline></video>

<style>
.demo-video { display: block; margin: 0.6rem auto 0; height: 410px; max-width: 100%; border-radius: 10px; box-shadow: 0 6px 24px rgba(0,0,0,.25); }
/* theme dims "h1 + p" as a subtitle; the video's wrapping paragraph follows the h1, so undo it */
.slidev-layout h1 + p:has(> .demo-video) { opacity: 1; margin-top: 0; }
</style>

<!-- 講者備註：實際跑一次 omh 的畫面（約 17 秒，靜音循環播放）。 -->

---

# Future work：讓 plan 從 request 長出來

<script setup>
import FutureFlow from './components/FutureFlow.vue'
</script>

<FutureFlow />

<!-- 講者備註：下一步是讓計畫不再從我坐下來打 /ulw 開始，而是從平常丟進來的 request 長出來。三個原則：第一，心流隔離，測試時只管丟、不用想架構與分類；第二，低介入、高自動化，收集、歸納、擬計畫都在背景跑，人只保留最後的核准；第三，非同步儀表板，Discord 變成 ulw 的決策與通知中心。 -->

---

# Future work：0.5.0-beta1 已經鋪好的路

<div class="roadmap">
  <div class="rm-col done">
    <div class="rm-h"><carbon-checkmark-filled /> 0.5.0-beta1 已完成</div>
    <div class="rm-i"><b>多個 run 同時存在</b>各自核准、各自執行</div>
    <div class="rm-i"><b>核准即綁定</b>在哪個 worktree 核准，那個 session 就負責那個 run</div>
    <div class="rm-i"><b>生命週期事件</b>起草、核准、wave 完成、警示…都寫成事件</div>
    <div class="rm-i"><b>從外部核准</b>外部程式放一個核准檔就能核准計畫</div>
  </div>
  <div class="rm-arrow">→</div>
  <div class="rm-col next">
    <div class="rm-h"><carbon-arrow-right /> 下一步</div>
    <div class="rm-i"><b>inbox</b>request 隨手丟進來</div>
    <div class="rm-i"><b>背景歸納、擬計畫</b>訂閱事件，自己推進</div>
    <div class="rm-i"><b>Discord plugin</b>在 Discord 上核准，自動開 worktree 與 lead</div>
    <div class="rm-i"><b>jev-like model 做 intent 路由</b>派工時的 intent 判斷交給專門的模型</div>
  </div>
</div>

<p class="mt-6 text-sm opacity-60">細節：<code>git checkout v0.5.0-beta1</code>，見 CHANGELOG</p>

<!-- 講者備註：0.5.0-beta1 已經把地基打好：同時可以有好幾個 run，核准時會把 session 綁到那個 run，可以各自在自己的 worktree 跑；整個生命週期都會寫成事件；也可以從外部放一個核准檔來核准計畫。CHANGELOG 裡直接寫了：未來的 inbox／Discord plugin 可以自己開 worktree 和 lead，再送出 /omh approve。 -->

---

# 結語

<div class="outro">
  <div class="outro-lead">
    <div class="outro-big">平行工作，<br>也要有 <span>gate</span></div>
    <p>Claude Code 當 lead，便宜的模型做量，<br>人只在關鍵處核准。</p>
  </div>
  <div class="outro-points">
    <div><carbon-flow-stream class="op-i" style="color:#0ea5e9" /><b>平行</b><span>獨立工作同時進行，縮短 wall-clock time</span></div>
    <div><carbon-chart-relationship class="op-i" style="color:#6366f1" /><b>模型分工</b><span>便宜模型做雜務，強模型規劃與審查</span></div>
    <div><carbon-view class="op-i" style="color:#ef4444" /><b>跨模型 review</b><span>不同 model family 互相檢查</span></div>
    <div><carbon-checkmark-outline class="op-i" style="color:#10b981" /><b>結構化驗證</b><span>通過 wave 的 gate 才算完成</span></div>
  </div>
</div>

<div class="outro-tradeoff"><b>取捨</b>每個 worker 啟動約 10–30 秒；小型、序列的工作直接做就好。</div>

<div class="outro-foot">
  <span class="outro-qa">Q &amp; A</span>
  <span class="outro-links"><carbon-logo-github /> <a href="https://github.com/andyjjrt/oh-my-herdr">andyjjrt/oh-my-herdr</a> · <a href="https://herdr.dev">herdr.dev</a></span>
</div>

<style>
.outro { display: grid; grid-template-columns: 1fr 1.35fr; gap: 32px; align-items: center; margin-top: 2.2rem; text-align: left; }
.outro-big { font-size: 44px; font-weight: 700; line-height: 1.2; }
.outro-big span { color: #10b981; }
.outro-lead p { margin-top: 14px; font-size: 17px; opacity: 0.7; line-height: 1.5; }
.outro-points { display: flex; flex-direction: column; gap: 20px; }
.outro-points > div { display: grid; grid-template-columns: 38px 158px 1fr; align-items: center; }
.outro-points .op-i { font-size: 26px; }
.outro-points b { font-size: 19px; }
.outro-points span { font-size: 15px; opacity: 0.75; }
.outro-tradeoff { margin-top: 44px; text-align: left; font-size: 15px; opacity: 0.75; padding-left: 12px; border-left: 3px solid #f59e0b; }
.outro-tradeoff b { margin-right: 10px; color: #f59e0b; }
.outro-foot { position: absolute; left: 3.5rem; right: 3.5rem; bottom: 2rem; display: flex; justify-content: space-between; align-items: baseline; border-top: 1px solid color-mix(in srgb, currentColor 20%, transparent); padding-top: 12px; }
.outro-qa { font-size: 30px; font-weight: 700; }
.outro-links { display: inline-flex; align-items: center; gap: 6px; font-size: 15px; }
</style>

<!-- 講者備註：總結並行、模型分工與 gate 的價值，也坦白說明 worker 啟動成本。 -->
