---
theme: andyjjrt
transition: slide-left
title: Course Scheduling Presentation
mdc: true
---

# 一言不合就排課

范佳琦 田展禾 洪晙宸 莊維軒 盧奕潔 俞懿

---
layout: iframe

url: https://qrysub.nccu.edu.tw/
---
---
layout: two-cols
---

# 研究目標

<v-clicks>

- 網頁式的聊天機器人
  - 文字輸入、語音輸入
- 更精準的搜尋結果
- 直接產生出課表

</v-clicks>

::right::

<div class="flex justify-center">
  <img src="/demo.png" class="max-h-[460px]" />
</div>

---
layout: cover
---

# 實作流程

---
layout: iframe

url: https://qrysub.nccu.edu.tw/
---
---
layout: two-cols
---

# 資料處理
**歷年課程基本資料收集**

<v-clicks>

1. 取得所有課程
2. 取得所有課程評價網站
3. 擷取評價資料
4. 整理至資料庫

</v-clicks>

::right::

<div class="flex justify-center items-center h-full" v-click>
  <img src="/ERM.png" />
</div>

---
layout: two-cols
---

# 資料處理
**評價標籤化**

- Zero-shot Classification
- 容易、有趣、輕鬆、高分、困難、沉悶、繁重、低分

::right::

<div class="flex justify-center items-center h-full">
  <img src="/label.jpg" />
</div>

---
clicks: 2
---

# 資料處理
**資料向量化及建立檢索器**

<p class="py-1"></p>

text2vec-base-chinese：CoSENT model

<div class="flex items-center gap-4 py-10">
  <div class="flex flex-col gap-8">
    <div class="flex gap-4 items-center">
      <div class="h-15 w-40 p-2 rounded-lg bg-[#33ccff] flex items-center justify-center text-center">向量化資料</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"  v-click="1">
        <path d="M5 25 L45 25 M35 20 L45 25 L35 30" stroke="currentcolor" stroke-width="4" fill="none"/>
      </svg>
      <div class="h-15 w-20 p-2 rounded-lg bg-[#3399ff] flex items-center justify-center text-center" v-click="1">FAISS</div>
    </div>
    <div class="flex gap-4 items-center">
      <div class="h-15 w-40 p-2 rounded-lg bg-[#33ccff] flex items-center justify-center text-center">原始資料</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" v-click="1">
        <path d="M5 25 L45 25 M35 20 L45 25 L35 30" stroke="currentcolor" stroke-width="4" fill="none"/>
      </svg>
      <div class="h-15 w-20 max-w-30 p-2 rounded-lg bg-[#3399ff] flex items-center justify-center text-center" v-click="1">BM25</div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="150" viewBox="0 0 100 150" v-click="2">
    <path d="M5 38 L50 75 L5 113 M50 75 L95 75 M85 70 L95 75 L85 80" stroke="currentcolor" stroke-width="4" fill="none"/>
  </svg>
  <div class="p-2 rounded-lg bg-red flex items-center justify-center text-center" v-click="2">Emsemble Retriever<br />(Reciprocal Rank Fusion)</div>
</div>

---

# 模型壓縮

<p class="py-1"></p>

<span class="text-orange">Chinese-LLaMA-Alpaca-2-13B</span>: 經中文finetune的llama2

<span class="text-orange">llamacpp</span>: Port of Facebook's LLaMA model in C/C++

<div class="flex flex-col gap-4 py-4">
  <div class="flex">
    <div class="w-[131px] p-2 text-center border border-black">3.141592</div>
    <div class="w-[131px] p-2 text-center border border-black">3.141592</div>
    <div class="w-[131px] p-2 text-center border border-black">3.141592</div>
    <div class="w-[131px] p-2 text-center border border-black">3.141592</div>
  </div>
  <div class="flex">
    <div class="p-2 text-center border border-black">3.141</div>
    <div class="p-2 text-center border border-black">3.141</div>
    <div class="p-2 text-center border border-black">3.141</div>
    <div class="p-2 text-center border border-black">3.141</div>
    <div class="p-2 text-center border border-black">3.141</div>
    <div class="p-2 text-center border border-black">3.141</div>
    <div class="p-2 text-center border border-black">3.141</div>
    <div class="p-2 text-center border border-black">3.141</div>
  </div>
</div>

---

# 模型壓縮

<p class="py-1"></p>

硬體設備：NVIDIA RTX 3090 (24G VRAM)

1. 7B：13G VRAM，答非所問 
2. 13B：約24G VRAM，推估效果最好 
3. <span class="text-red">13B 8bit</span>：18G VRAM，在能力與記憶體用量之間取得較好的平衡

---

# 建構RAG

<div class="flex justify-center">
  <img src="/RAG.png" class="h-[400px]" />
</div>

---
transition: fade
---

# 建構服務

<div class="flex justify-center">
  <img src="/service1.png" class="h-[400px] rounded-lg" />
</div>

---

# 建構服務

<div class="flex justify-center">
  <img src="/service2.png" class="h-[400px] rounded-lg" />
</div>

---

# 研究成果

<div class="flex justify-center">
  <img src="/result.png" class="h-[400px] rounded-lg" />
</div>

---
layout: cover
---

# 問題與討論

---

# 模型的其他選擇

- mlcllm, llama, llama2
- 由於訓練資料為大陸的資料，用語時不出現<span class="text-red">簡體</span>及<span class="text-red">大陸用語</span>
- 以我們的資料微調模型，但因為硬體問題沒有嘗試

<div class="py-2" v-click>
  <img src="/CKIP.png" class="rounded" />
</div>

---


# 評價標籤優化

- 問題：大量<span class="text-red">冗詞</span>及<span class="text-red">口語用字</span>，導致標籤分數不準確
- 解法：摘要評價後再進行分類評分
- 目前沒有找到合適的方法與模型

---

# 檢索優化

- text2vec-base-chinese 效果不甚理想
- 借助 <span class="text-orange">Reciprocal Rank Fusion</span> 結合 BM25 的綜合分數
- 希望未來有其他更好的開源模型

---

# 強化否定詞判定

- 否定敘述會被拿去做搜尋
- 需要<span class="text-orange">理解</span>句子的真正含意
- 在輸入後列舉出在選課情境中常見的情況，並進行特殊情況判斷，將句子改寫為正面敘述。
- 可以使用<span class="text-orange"> Knowledge Graph </span>去真正的理解語意並判讀

---
layout: cover
---

# 未來展望

---

# 未來展望

- 服務分散式架構
- 提高評價分數的準確性
- Prompt優化
- 反義詞判斷與處理優化
- 以使用者回饋微調模型

---
layout: cover
---

# QA 時間