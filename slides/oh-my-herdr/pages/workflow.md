# ulw 迴圈

<LoopFlow />

下一 wave 要等前一 wave 的 gate 通過才會派送。

<!-- 講者備註：整個流程：先探索、起草計畫，人核准之後切成 waves 派工；lead 派完就結束這一輪，等 mod 叫醒再驗證；gate 通過才進下一 wave，全部完成就收工。 -->

---

# 先計畫，再分 wave

<script setup>
import WavePlan from '../components/WavePlan.vue'
</script>

<WavePlan />

<!-- 講者備註：重點是「先想清楚、再動手」。計畫是給人看的文字，人核准之後 lead 才把它切成 waves。同一 wave 的工作不碰同一個檔案，所以可以平行；每個 wave 結束都要通過 gate 才能往下。 -->

---

# Scouts 先探路

<script setup>
import ScoutFan from '../components/ScoutFan.vue'
</script>

<ScoutFan />

<!-- 講者備註：scout 是計畫前的偵察兵：平行、只讀、附證據、用便宜的模型。lead 不用自己讀完所有東西，等 scouts 都回來再寫計畫。 -->

---

# Lead 從不空等

<WakeLanes>
<code>額度用完</code><code>卡在權限詢問</code><code>設定錯誤</code><code>當掉</code><code>被中斷</code><code>不明</code>
</WakeLanes>

<!-- 講者備註：lead 派完工作就結束這一輪，不會在那邊 sleep 或輪詢。mod 在背後盯著每個 worker：wave 做完、或有 worker 出狀況，就把摘要和診斷送回去叫醒 lead。 -->
