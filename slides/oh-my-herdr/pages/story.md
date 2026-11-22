# OmO 是什麼

**Oh My OpenAgent**（舊名 Oh My OpenCode，OpenCode plugin）· by `code-yeongyu`

> “Install OmO. Type `ultrawork`. Done.”

<OmoCrew />

<!-- 講者備註：OmO 是 oh-my-openagent，早期叫 oh-my-opencode，作者是 code-yeongyu。主 agent Sisyphus 把工作委派給 Oracle（架構與除錯）、Librarian（查文件與程式碼）、Explore（快速搜尋）、Prometheus（規劃）、Hephaestus（自主深度工作）。官方的宣傳句就是「裝好、打 ultrawork、完成」。 -->

---

# 為什麼我大量用 OmO

<div class="grid grid-cols-5 gap-8 mt-4 items-start">
<div class="col-span-2 text-left">
  <div class="story-card mb-4"><b>5 月 Codex 大放送</b><p>額度給得很大方，放手讓 agent 跑</p></div>
  <div class="story-card"><b>不想被單一 provider 綁住</b><p>喜歡自由切換各種 coding agent 與模型，OmO 在 OpenCode 上剛好做得到</p></div>
</div>
<div class="col-span-3">
  <TokenLedger />
</div>
</div>

<!-- 講者備註：五月 Codex 大放送，加上我本來就喜歡自由使用各種 coding agent、不想被單一 provider 綁住，所以在 OpenCode 上大量使用 OmO。右邊是我自己的 OpenCode 用量紀錄（all time）：約 5.1B tokens、66.2K 則訊息、3.5K 個 session；金額 $3,076.71 是工具依 list price 估算的，不是實際帳單。大頭是 OpenAI 的 gpt-5.5（2.1B）與 gpt-5.4（1.4B）。 -->

---

# OpenCode 時代帶給我的好東西

<div class="icon-list">
  <div><carbon-flash class="il-i" style="color:#f59e0b" /><b><code>ulw</code> / ultrawork</b><span>一句話觸發整套流程，不用手動調度</span></div>
  <div><carbon-direction-fork class="il-i" style="color:#6366f1" /><b>Intent Gate</b><span>先判斷真正的意圖，再決定怎麼做</span></div>
  <div><carbon-flow class="il-i" style="color:#0ea5e9" /><b>category → model 路由</b><span>依工作類型挑合適的模型</span></div>
  <div><carbon-group class="il-i" style="color:#10b981" /><b>平行 background agents</b><span>多個 specialist 同時在背景工作</span></div>
  <div><carbon-view class="il-i" style="color:#ef4444" /><b>獨立 review</b><span>由另一個 agent 驗證，不自己改自己考</span></div>
</div>

<!-- 講者備註：這五樣是我在 OpenCode 時代最依賴的：ulw 一鍵觸發、Intent Gate 先判斷意圖、依 category 路由到不同模型、背景平行的 agents，以及獨立 review。omh 之後保留的就是這些概念。 -->

---

# 換成 senpi 版之後：痛點

<p class="text-sm opacity-70 -mt-2">OmO v5.0.0（2026-09-26）起，主力是跑在 senpi 引擎上的 <b>OmO Native</b>；OpenCode 版繼續維護但支援降級。</p>

<div class="grid grid-cols-3 gap-5 mt-6 text-left">
  <div class="story-card pain"><span class="pain-n">1</span><b>預設要 Claude + Codex</b><p>作者的設計給我的感覺是兩家都要有；但 Claude Code 管得很嚴，訂閱不能代理給其他 agent 用</p></div>
  <div class="story-card pain"><span class="pain-n">2</span><b>不用 Claude，用量就爆</b><p>OpenCode 還有其他 agent 可以接，但實際跑下來用量驚人</p></div>
  <div class="story-card pain"><span class="pain-n">3</span><b>OpenCode 版被留在後面</b><p>senpi 版快速迭代，新 model 支援只做在 senpi 版；OpenCode 出了 v2，也暫時沒有支援計畫</p></div>
</div>

<style>
.pain { position: relative; padding-top: 34px; min-height: 250px; }
.pain-n { position: absolute; top: -16px; left: 20px; width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; background: #ef4444; color: #fff; }
</style>

<!-- 講者備註：三個痛點都是我的使用經驗，不是官方說法。第一，作者的設計給我的感覺是預設要有 Claude 加 Codex，但 Claude Code 抓得很嚴，訂閱不能代理給其他 agent。第二，不用 Claude 之後雖然 OpenCode 還有其他 agent 可以用，用量卻很驚人。補充：官方 v5.0.0 release notes 說 Native 版每個 round trip 的 context 反而較少（約 0.39 倍／0.69 倍，作者自己回報），所以我的總用量高「可能是」fan-out 造成呼叫次數變多，這是推測。第三，senpi 版迭代很快，新 model 的支援只做在 senpi 版上；OpenCode 出了 v2，OmO 也暫時沒有支援計畫。 -->

---

# 轉折①：Codex 這邊越來越難用

<div class="grid grid-cols-2 gap-10 mt-4 story-turn">
  <SpeedBars />
  <div class="flex flex-col gap-4 text-left">
    <div class="story-card"><b>模型：GPT-6 sol 非常爛</b><p>6.1 好一點，但沒有 5.5 那麼驚豔</p></div>
    <div class="story-card"><b>額度：嚴重不足</b><p>有時一個 request 就燒掉整管 5 小時 quota，事情卻還沒做完</p></div>
  </div>
</div>

<style>
.story-turn { min-height: 385px; }
</style>

<!-- 講者備註：轉折其實更曲折，以下都是我的使用經驗。第一是模型：GPT-6 sol 非常爛，6.1 稍微好一點，但沒有 5.5 那麼驚豔。第二是速度：tps 是我自己的約略實測，不是官方 benchmark，Codex 約 40、Claude 約 100、OpenCode Go 上的 DeepSeek 約 140；delegate 出去的工作，常常是 DeepSeek 都做完了還在等 Codex。第三是額度：有時候一個 request 就燒掉整管 5 小時的 quota，事情卻沒做完。 -->

---

# 轉折②：Claude 這邊，Opus 5.5 之後

<ShotSlot src="/claude-pro-lineup.png" height="350px" caption="Claude Pro $20／月，飽和使用下每月可用 tokens 的估算（非官方 quota）" />

<!-- 講者備註：另一邊，Opus 5.5 出來之後，Claude Pro 20 美金的額度非常驚人。這張圖是飽和使用下的估算：以 Opus 5.5 為基準，每月約 3.05B tokens，換成 Sonnet 5.5、Haiku 5.5 還能更多。注意這是估算，不是官方公布的 quota。 -->

---

# 於是：把 OmO 移植成 omh

<div class="story-pivot mt-6">
  <PivotFlow />
</div>

<style>
.story-pivot { min-height: 340px; max-width: 760px; margin-left: auto; margin-right: auto; display: flex; flex-direction: column; }
.story-pivot > * { flex: 1; }
</style>

<!-- 講者備註：三件事湊在一起：Codex 模型退步、慢、額度不夠；Opus 5.5 夠強、能當 lead，Claude Pro 的額度又很大方；herdr 讓每個 agent 都有自己的 pane。所以我把 OmO 的概念移植到 Claude Code + herdr，就是 omh。注意 omh 本身並沒有整合 Codex。時間線：2025-12 OmO repo 建立、2026-05 Codex 大放送、2026-09 OmO Native 與 Opus 5.5、2026-11-14 omh 0.1.0、2026-11-21 omh 0.4.3。 -->

---

# OmO 啟發了我們什麼

<div class="omh-map mt-4">

| OmO 的概念 | 在 omh 裡變成 |
| --- | --- |
| Sisyphus：不會半途停下的 lead | lead 帶著 plan，所有 tasks 與 gates 都關閉才算完成 |
| Intent Gate | 每次派工都寫明 intent、category 與理由 |
| category → model 路由 | `categories` → 一串 `profiles`，跳過沒額度的 provider |
| 平行 background agents | 每個 worker 是一個真的 herdr pane，完成時喚醒 lead |
| `ulw` / `mass ulw` | `/ulw`；工作切成 waves，wave 之間有 gate |
| 獨立 review | reviewer 避開實作者的 model family |

</div>

<style>
.omh-map table { font-size: 18px; width: 100%; }
.omh-map td, .omh-map th { padding: 11px 14px !important; }
</style>

<!-- 講者備註：OmO 給我的不是某個工具，而是一套工作方式：一個不會半途而廢的 lead、派工前先講清楚意圖、依工作類型挑模型、背景平行跑、讓別的模型來 review。omh 把這些概念都保留下來，只是換了實作方式。對照來源是 skills/oh-my-herdr/SKILL.md 的表。 -->

---

# omh 的 approach

<div class="feature-grid">
  <div><carbon-user-admin class="fg-i" /><b>Claude Code 當 lead</b><span>Opus 5.5 規劃、派工、驗收</span></div>
  <div><carbon-terminal class="fg-i" /><b>worker 是真的 pane</b><span>任何 agent、任何 provider；或 Claude subagent</span></div>
  <div><carbon-task-approved class="fg-i" /><b>計畫要人核准</b><span>人看過，才切成 waves</span></div>
  <div><carbon-checkmark-outline class="fg-i" /><b>wave 之間有 gate</b><span>驗證過才派下一 wave</span></div>
  <div><carbon-meter class="fg-i" /><b>依額度路由</b><span>跳過快用完的 provider</span></div>
  <div><carbon-notification class="fg-i" /><b>lead 不空等</b><span>派完就結束這一輪，由 mod 喚醒</span></div>
</div>

<div class="go-callout mt-5">
  <b>為什麼要 delegate？</b> OpenCode Go 一個月約可用 <b>$100</b> 等值的 <code>deepseek-v4.1-flash</code>：雜務交給它，Claude 額度留給 lead 與 review。
</div>

<style>
.go-callout { text-align: left; padding: 14px 20px; border-radius: 12px; font-size: 17px; border: 2px solid #10b981; background: color-mix(in srgb, #10b981 12%, transparent); }
</style>

<!-- 講者備註：omh 的做法：Claude Code 當 lead；worker 是真的 herdr pane 或 hc terminal，可以是任何 agent、任何 provider，也可以是 Claude subagent；計畫要人核准；wave 之間有 gate；派工前先看 quota；lead 派完就結束這一輪，等 mod 叫醒。為什麼要 delegate：現在 OpenCode Go 一個月大約可以打 100 美金等值的 deepseek-v4.1-flash，又快又便宜，雜務交給它，Claude 的額度留給規劃與審查。這是我自己的方案與用量，不是官方保證。 -->
