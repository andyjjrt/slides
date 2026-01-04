const e=[{id:`slides/eagle3`,path:`eagle3`,fullPath:`/home/runner/work/slides/slides/slides/eagle3/slides.md`,sourceDir:`/home/runner/work/slides/slides/slides`,frontmatter:{theme:`../../theme`,title:`EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty`,name:`eagle3`,themeConfig:{glowHue:100},addons:[`../addons/back-to-home`,`../addons/background-animation`,`../addons/page-number`]},content:`## EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty
Yuhui Li1, Fangyun Wei, Chao Zhang, Hongyang Zhang<br />
Peking University, Microsoft Research, University of Waterloo 4Vector Institute

NeurIPS 2025

2025/10/20<br />
Jun-Chen, Hung

<style>
h2 {
  @apply text-4xl font-bold;
}
</style>

---

# Introduction

- The remarkable capabilities of modern Large Language Models (LLMs) are often offset by a significant operational challenge: their [autoregressive]{color=red}, [token-by-token generation process]{color=red} makes inference slow and computationally expensive.

- Speculative sampling accelerates this process using a ["draft and verify"]{color=red} approach, where a smaller, faster model generates a sequence of draft tokens that are then validated in parallel by the larger target model, significantly reducing latency.

- EAGLE-3 stands as the culmination of the EAGLE series, a state-of-the-art speculative sampling method that achieves unprecedented speedups. It introduces a novel "Training-Time Test" (TTT) architecture and multi-layer feature fusion to overcome the performance plateaus of its predecessors.

<div class="flex justify-center">
  <img src="/x3.png" class="w-75%">
</div>

---
layout: image-right
image: /The-schematic-diagram-of-speculative-sampling-compared-with-original-generation-In-the.png
backgroundSize: contain 
---

# Related Work - Speculative Sampling
[Google Deepmind](https://arxiv.org/pdf/2302.01318)

- Involves using a smaller, faster draft model to generate a sequence of tokens. These tokens are then passed to the larger target model for parallel verification, accepting a prefix of the draft that matches the target model's predictions.

- Its primary limitation is that the [high overhead]{color=red} and [lower accuracy]{color=red} of the draft model can constrain acceleration gains, as the target model frequently rejects inaccurate drafts.

---
layout: image-right
image: /x6.png
backgroundSize: contain 
---

# Related Work - Eagle
[ICML 2024](https://arxiv.org/pdf/2401.15077v3)

- Instead of token prediction, EAGLE use [feature prediction]{color=red}, which proved to be a simpler and more effective prediction target.

- To fix feature uncertainty, EAGLE predict feature with token to make it stable

- Use [tree-structured]{color=red} predict chain instead of chain-structured => increase accept length $\\tau$

<!--

以下是 EAGLE 相對於標準 SpS 的主要增強點：

### 1. **在特徵層級（Feature Level）進行自迴歸**

標準 SpS 是在 **Token 層級**進行自迴歸預測。
EAGLE 的第一個觀察是：在**特徵層級（feature level）**進行自迴歸預測比在 Token 層級更簡單。這裡的「特徵」通常指的是目標 LLM 中 **LM Head 之前的倒數第二層特徵 (second-to-top-layer feature)**。

*   **優勢**：特徵序列相比於 Token 序列更具規律性。在特徵層級上進行自迴歸處理，然後再利用目標 LLM 的 LM Head 獲取 Token，能產生更好的結果。實驗證明，僅僅透過特徵層預測，速度提升比直接預測 Token 提升了約 1.9x 比 1.5x。

### 2. **解決採樣過程中的不確定性 (Feature Uncertainty)**

在 LLM 生成過程中，採樣（如 nucleus 採樣）會引入隨機性，導致特徵序列中產生不確定性。例如，在給定相同前綴 $f_I$ 後，採樣結果可能是 "am" 或 "always"，這將導致後續特徵 $f_{am}$ 和 $f_{always}$ 截然不同。

*   **EAGLE 的解決方案**：EAGLE 透過將**提前一個時間步的 Token 序列（包含採樣結果）**納入起草模型的輸入來解決這個不確定性。
*   **優勢**：加入提前的 Token 序列，能讓起草模型有效考慮採樣結果帶來的隨機性。實驗顯示，解決不確定性後，速度提升比僅使用特徵預測進一步提高到 2.8x。

### 3. **從鏈式草稿 (Chain-structured) 到樹狀草稿 (Tree-structured)**

標準 SpS 使用**鏈式結構（chain-structured）**的草稿。如果草稿中某個 Token 被拒絕，後續所有 Token 都必須被拋棄。
EAGLE 則採用**樹狀結構（tree-structured）**草稿。

*   **優勢**：樹狀結構允許在一個 Token 被拒絕時，嘗試**替代的分支**，潛在地提高平均接受長度 $\\tau$。EAGLE 利用 **Tree Attention** 在驗證階段平行處理這個樹狀草稿。

總結來說，EAGLE 結合了**特徵層預測**、**Token 序列輸入**來解決不確定性，以及**樹狀草稿**來最大化單次目標 LLM 呼叫的效益，從而實現了比標準投機採樣（SpS）更顯著的加速。


-->

---
layout: image-right
image: /x9.png
backgroundSize: contain 
---

# Related Work - Eagle2
[EMNLP 2024](https://arxiv.org/pdf/2401.15077v3)

- Identified the limitation of EAGLE's [static draft tree]{color=red}, which implicitly assumes that the acceptance rate of draft tokens depends only on their position in the tree structure.

- EAGLE-2's solution was a [context-aware dynamic draft tree]{color=red}. Use [Expand]{color=red} and [Rerank]{color=red} to dynamically adjust the shape of the draft tree based on the immediate context, allocating resources more efficiently.

---
layout: image-right
image: /image.png
backgroundSize: contain 
---

# Related Work - HASS
[ICLR 2025](https://arxiv.org/pdf/2408.15766v3)

- EAGLE2 uses target model feature as training data, but use self predicted feature as inference input, causes [Exposure Bias]{color=red} (暴露偏差)
- Previous training focus on target model vocabulary, but real target is predict [expect token]{color=red} by target model
- By modify training process and loss function, HASS gain [8% ~ 20%]{color=red} speed up compare to EAGLE2

---
layout: image-right
image: /image1.png
backgroundSize: contain 
---

# Problem

- Recent LLMs increase training tokens, but not for EAGLE draft model
  - Old EAGLE use feature loss $L_{fea}$ and token loss $L_{token}$ to train the model
  - Two losses cause [additional constraint]{color=red}

---

# Problem

-  These top-layer features correspond to the logits of the next token.
    - Relying solely on these limited features makes predicting the [next-next token]{color=red} a significant challenge for the draft model
- HASS mitigate the error accumulation caused by inaccurate feature predictions in EAGLE
  - But still use [feature prediction]{color=red}

![alt text](/image3.png){class=w-120}

---
layout: image-right
image: /image2.png
backgroundSize: contain 
---

# Solution

- Multi-Layer Feature Fusion
  - Concatenating [low]{color=green}, [middle]{color=yellow}, and [high]{color=orange}-level feature sequences from the target model.
  - Use an FC Layer reduce 3*k back to k dimension
  - When inference, use previous generated token to predict next token

---

# Solution

- Training-Time Test (TTT):
  - Removes the feature prediction constraint.
  - Simulates m ulti-step generation during the training phase by feeding the draft model's own outputs back into it.

<div class="flex justify-center pt-4">
  <img src="/image4.png" class="w-60%" />
</div>


---

# Experiment

- Models: Vicuna 13B, LLaMA-Instruct 3.1 8B, LLaMA-Instruct 3.3 70B, DeepSeek-R1-Distill-LLaMA 8B.
- Task: MT-bench(multi-turn conversation), HumanEval(code generation), GSM8K(mathematical reasoning), Alpaca(instruction following), CNN/DM(summarization), 
- Metrics:
  - Speedup ratio
  - Average Accept Length $\\tau$
  - Acceptance Rate $n-\\alpha$
- Training dataset: ShareGPT & Ultra-Chat200k

---

# Experiment

<div class="flex justify-center">
  <img src="/image5.png" class="w-65%" />
</div>

---

# Experiment

<div class="grid grid-cols-2 gap-4">
  <img src="/image6.png" />
  <img src="/image8.png" />
</div>

---

# Ablation Study

<div class="flex justify-center">
  <img src="/image7.png" class="w-65%" />
</div>

---

# Conclusion

- **Problem**: Earlier speculative sampling methods like EAGLE-2 were fundamentally limited by a feature prediction [constraint]{color=red} that prevented performance from improving with more training data.

- **Solution**: EAGLE-3 overcomes this by introducing a [Training-Time Test (TTT)]{color=red} architecture for direct token prediction and using [multi-layer feature fusion]{color=red} for richer contextual input.

- **Experiment**: Comprehensive benchmarks confirmed state-of-the-art performance, achieving up to a [6.5x]{color=red} speedup and demonstrating a unique scaling law where more data yields better acceleration.


**EAGLE-3 continues to benefit from the augmentation of training data, achieving a maximum speedup of 6.5x.**

---

# Pros and Cons

<div class="grid grid-cols-2">
<div>

## Pros

- SOTA in speculative decoding
- Ready to use model and can be reproduced
- Framework supported

</div>
<div>

## Cons

- Long context failure
- No in-domain training dataset analyst

</div>
</div>

`,baseUrl:``,hasOgImage:!1},{id:`slides/itsc-1141-final`,path:`itsc-1141-final`,fullPath:`/home/runner/work/slides/slides/slides/itsc-1141-final/slides.md`,sourceDir:`/home/runner/work/slides/slides/slides`,frontmatter:{theme:`../../theme`,title:`ITSC 1141 Final`,name:`itsc-1141-final`,themeConfig:{glowHue:100},addons:[`../addons/back-to-home`,`../addons/background-animation`,`../addons/page-number`]},content:`# 校務系統開發與管理

### 期末進度報告

<br />

學生：洪晙宸 <br />
專案導師：謝旻錚、施仁忠 <br />
協助同仁：傅俊城、尤淑芬

---

# 專案學期目標

- Oauth維護
  - 部屬至正式機
  - 修正上線後發現的問題
- 職務不法侵害預防計畫管理系統
  - 修正系統問題

---
layout: image-right
image: /image.png
backgroundSize: contain
---

# 工作項目：Oauth部屬至正式機

- 將期中前的進度部屬至正式機
- 為確保遷移正確，更新時僅將當前db資料複製出來，並用docker部屬
- 同時修正申請信件不會寄出的問題

---
layout: image-right
image: /image2.png
backgroundSize: contain
---

# 工作項目：Oauth更換明年度憑證

- 收到的憑證並沒有敘述如何使用，更新後經使用者回報才發現問題
- 將組合憑證的文件補齊，以便維護

---

# 工作項目：恢復之前代理人的單一結構

https://github.com/NYCUITSC/Prevention-backend/issues/67

- 期中所做的東西過於複雜，和使用者溝通後，將代理人系統變回更簡單的模式方便維護
  - 系統會定期從人事資料撈取預設的人事資料
  - 系統管理員可以根據實際情況設定代理人覆蓋人事資料問題
  - 不論是發送問卷前調查跟發送問卷後補救在系統內都可以正常運作


---
layout: image-right
image: /image4.png
backgroundSize: contain
---

# 工作項目：附件二若遇到主管調換，應封存當前的flow並派發新的flow

https://github.com/NYCUITSC/Prevention-backend/issues/64

- 因為花比較多的時間處理附件三/附件四，期望可以用類似的邏輯套用在附件二。所以原先附件二的實作方式較為簡單
- 問題：附件二在指派後會堆疊，同一個單位可能有多個附件二
- 目標：跟需求單位確認後，舊的表單要封存，再發新的表單給新的主管
- 方法：指派附件二時，先檢查有沒有正在進行的表單，有的話系統進行封存再指派新的表單出去

---

# 工作項目：文件撰寫

- 系統分析文件及各項模組文件
- ERM Model補齊
- 為方便部屬，簡化部屬流程並嘗試讓資中同仁有辦法部屬到正式機

<div class="flex gap-2 mx-4">
<div class="w-2/3 h-82 p-4 mt-4 bg-white">

\`\`\`mermaid
---
config:
  theme: base
---
erDiagram
	direction LR
	user {
		VARCHAR id PK "員工編號"  
		VARCHAR email  "電子郵件"  
		AdminType admin_type  "管理員類型"  
		datetime created_at  "建立時間"  
		datetime last_login  "最後登入時間"
	}
	project {
		UUID id PK "專案 ID"
		NVARCHAR name "專案名稱"
		datetime start_at "開始時間"
		datetime end_at "結束時間"
		ProjectStatus status "專案狀態"
		VARCHAR created_by FK "建立者"
		datetime created_at "建立時間"
		VARCHAR updated_by FK "更新者"
		datetime updated_at "更新時間"
	}
	project_form {
		int id PK ""
		UUID project_id FK "專案 ID"
		UUID form_id "表單 ID"
	}
	project_department {
		int id PK ""
		UUID project_id FK "專案 ID"
		VARCHAR department_id "部門 ID"
	}
	flow_queue {
		UUID id PK "流程佇列 ID"
		UUID flow_id "流程 ID"
		UUID project_id FK "專案 ID"
		UUID prev_id "前一關編號"
		NVARCHAR text "流程名稱"
		int order "流程順序"
		string parameter "流程步驟"
		FlowStateBase state "流程狀態"
		VARCHAR reviewer_id FK "審核人員 ID"
		NVARCHAR reviewer_name "審核人員名稱"
		datetime receive_date "瀏覽日期"
		datetime review_date "審核日期"
		NVARCHAR review_comment "審核意見"
		FlowResult result_type "審核結果"
		VARCHAR created_by FK "建立者"
		datetime created_at "建立時間"
		VARCHAR updated_by FK "更新者"
		datetime updated_at "更新時間"
	}
	flow_queue_log {
		UUID id PK "流程佇列日誌 ID"
		UUID flow_id "流程 ID"
		UUID project_id FK "專案 ID"
		UUID prev_id "前一關編號"
		NVARCHAR text "流程名稱"
		int order "流程順序"
		string parameter "流程步驟"
		FlowStateBase state "流程狀態"
		VARCHAR reviewer_id FK "審核人員 ID"
		NVARCHAR reviewer_name "審核人員名稱"
		datetime receive_date "瀏覽日期"
		datetime review_date "審核日期"
		NVARCHAR review_comment "審核意見"
		FlowResult result_type "審核結果"
		VARCHAR created_by FK "建立者"
		datetime created_at "建立時間"
		VARCHAR updated_by FK "更新者"
		datetime updated_at "更新時間"
	}
	flow_form {
		UUID id PK "流程表單 ID"
		datetime created_at "建立時間"
		UUID project_id "專案編號"
		UUID form_id "表單 ID"
		int form_serial "表單流水號"
		NVARCHAR form_name "表單名稱"
		NVARCHAR form_description "表單描述"
		VARCHAR department_id "單位代碼"
		NVARCHAR department_name "單位名稱"
		int department_level "單位層級"
		NVARCHAR department_manage_employee_name "單位主管"
		NVARCHAR assignee_name "指派人員"
	}
	flow_form_score {
		UUID id PK "流程表單分數 ID"
		int possibility "可能性(風險分數)"
		int severity "嚴重性(風險分數)"
		VARCHAR created_by FK "建立者"
		datetime created_at "建立時間"
		VARCHAR updated_by FK "更新者"
		datetime updated_at "更新時間"
	}
	VW_EMPLOYEE {
		VARCHAR id PK "員工編號"
		VARCHAR type "員工類型"
		UUID uid "員工UID"
		NVARCHAR name "中文姓名"
		VARCHAR name_en "英文姓名"
		VARCHAR zone_id "服務校區代號"
		NVARCHAR zone_name "服務校區名稱"
		VARCHAR department_id "佔缺單位代碼"
		NVARCHAR department_name "佔缺單位名稱"
		VARCHAR service_department_id "服務單位代碼"
		NVARCHAR service_department_name "服務單位名稱"
		VARCHAR class_id "人員類別代號"
		VARCHAR identity_id "人員身份別代號"
		VARCHAR position_id "職稱代號"
		NVARCHAR position_name "職稱名稱"
		date onboard_date "到職日期"
		date leave_date "離職日期"
		VARCHAR email "個人電子信箱"
		VARCHAR school_email "學校電子信箱"
		VARCHAR status "員工狀態"
		datetime created_at "建立日期時間"
		VARCHAR created_by "建立帳號"
		datetime updated_at "修改日期時間"
		VARCHAR updated_by "修改帳號"
		VARCHAR phone "行動電話"
	}
	VW_DEPARTMENT {
		VARCHAR id PK "單位代碼"
		NVARCHAR name "單位名稱"
		VARCHAR name_en "單位英文名稱"
		VARCHAR webhr_dept_no "WebHR單位代碼"
		VARCHAR type "單位類型"
		int level "單位層級"
		VARCHAR is_within_org "是否為編制內"
		VARCHAR parent_id "上層單位代碼"
		date app_start_date "核定生效日期"
		date app_stop_date "核定停用日期"
		date start_date "啟用日期"
		date stop_date "停用日期"
		VARCHAR status "狀態"
		date stop_recruit_date "停招日期"
		VARCHAR create_doc_no "建立文號"
		NVARCHAR end_remark "停用說明"
		VARCHAR manage_employee_no "單位主管"
		VARCHAR tel "電話"
		VARCHAR ext "分機"
		NVARCHAR remark "備註"
		int order_seq "排序"
		datetime create_time "建立日期時間"
		VARCHAR create_user_id "建立員工代碼"
		datetime update_time "修改日期時間"
		VARCHAR update_user_id "修改員工代碼"
	}
	Form {
		UUID id PK "表單 ID"
		string version "表單版本"
		datetime created_at "建立時間"
		string created_by FK "建立者"
	}
	Response {
		UUID id PK "回覆 ID"
		UUID flow_id "流程 ID"
		datetime response_at "回覆時間"
		string response_by FK "回覆者"
	}
	campus {
		UUID id PK "校區 ID"
		NVARCHAR name "校區名稱"
		datetime created_at "建立時間"
		datetime updated_at "更新時間"
	}
	building {
		UUID id PK "建築物 ID"
		NVARCHAR name "建築物名稱"
		VARCHAR code "建築物代碼"
		datetime created_at "建立時間"
		datetime updated_at "更新時間"
		UUID campus_id FK "校區 ID"
	}
	email_queue {
		UUID id PK "郵件佇列 ID"
		JSON to_emails "收件人"
		JSON cc_emails "副本"
		string subject "主旨"
		string body "內容"
		EmailStatus status "郵件狀態"
		int retries "重試次數"
		int max_retries "最大重試次數"
		datetime scheduled_at "預定發送時間"
		datetime next_attempt_at "下次嘗試時間"
		string last_error "最後錯誤"
		datetime created_at "建立時間"
		datetime updated_at "更新時間"
		datetime sent_at "發送時間"
		JSON extra_metadata "額外資料"
	}
	deputy {
		UUID id PK "代理 ID"
		VARCHAR user_id FK "使用者 ID"
		VARCHAR deputy_id FK "代理人 ID"
		DeputyType type "代理類型"
		DeputyModifyType modify_type "修改類別"
		VARCHAR modify_by FK "修改者"
		datetime modify_at "修改時間"
	}
	principal_declaration {
		UUID id PK "校長申報 ID"
		NVARCHAR name "申報名稱"
		NVARCHAR declarer "申報人"
		NVARCHAR reason "申報事由"
		datetime declared_at "申報時間"
		UUID asset_pdf_id "附件檔案 ID"
		UUID declaration_pdf_id "聲明檔案 ID"
		datetime created_at "建立時間"
	}
	department_declaration {
		UUID id PK "部門申報 ID"
		UUID form_id "表單 ID"
		VARCHAR create_by FK "創建人"
		datetime created_at "創建時間"
	}
	alembic_version {
		string version_num PK ""
	}

	VW_DEPARTMENT ||..|| user : "provides data"
	VW_EMPLOYEE ||..|| user : "provides data"
	project_department ||..|| VW_DEPARTMENT : "references"
	project_department }o--|| project : "belongs to"
	project ||--o{ project_form : "has"
	flow_queue ||--o{ Response : "has"
	flow_queue }o--|| project : "belongs to"
	flow_queue ||--|| flow_form : "has"
	flow_queue ||--o{ flow_queue_log : "logs"
	user ||--o{ Response : "responded by"
	user ||--o{ project : "created/updated by"
	user ||--o{ flow_queue : "created/updated by"
	user ||--o{ flow_queue : "reviewed by"
	user ||--o{ Form : "created by"
	Form ||..|| project_form : "referenced by"
	Form ||--|| flow_form : "hard copy of"
	campus ||--o{ building : "has"
	user ||--o{ deputy : "has deputy"
	user ||--o{ deputy : "is deputy of"
	user ||--o{ department_declaration : "created by"
	flow_form ||--o| flow_form_score : "has score"

\`\`\`

</div>

![alt text](/image3.png)

</div>

---

# 結論與建議

- 慢下腳步避免開發不必要的功能，等到需求明確且確定再開始作業
- AI可以幫助快速完成文件，但還是需要自己識別對錯

---
layout: cover
---

# 問題與討論`,baseUrl:``,hasOgImage:!1},{id:`slides/long-spec`,path:`long-spec`,fullPath:`/home/runner/work/slides/slides/slides/long-spec/slides.md`,sourceDir:`/home/runner/work/slides/slides/slides`,frontmatter:{theme:`../../theme`,title:`LONGSPEC: Long-Context Lossless Speculative Decoding with Efficient Drafting and Verification`,name:`long-spec`,themeConfig:{glowHue:100},addons:[`../addons/back-to-home`,`../addons/background-animation`,`../addons/page-number`]},content:`## **LONGSPEC: Long-Context Lossless Speculative Decoding with Efficient Drafting and Verification**
Penghui Yang, Cunxiao Du, Fengzhuo Zhang, Haonan Wang, Tianyu Pang, Chao Du, Bo An<br />
ICML 2025 Workshop (ES-FoMo III) Poster

2026/01/03<br />
Jun-Chen Hung<br />
Advisor: Wen-Chih Peng

---

# Introduction

- Challenge: While Speculative Decoding (SD) accelerates LLMs, state-of-the-art methods struggle with long contexts (100k+ tokens) due to prohibitive memory demands and training data scarcity.
- Solution: **LONGSPEC** provides a framework for lossless acceleration specifically designed for long-context scenarios
  - Memory-Efficient Architecture
  - Anchor-Offset Indices
  - Hybrid Tree Attention

---

# Related work
Speculative decoding

- Draft generation
- Parallel verification
- Rejection sampling

<div class="grid grid-cols-2 gap-4">

  ![](https://developer-blogs.nvidia.com/wp-content/uploads/2025/09/speculative-decoding-draft-target-approach.gif)

  ![](https://developer-blogs.nvidia.com/wp-content/uploads/2025/09/speculative-decoding-verification-phase-target-model.gif)

</div>

---

# Related Work
Retrieval & Training-Free Methods

**Overview:**
These approaches attempt to accelerate inference without the overhead of training extensive new draft models.

*   **Retrieval-Based Decoding:** Methods like **REST** and **Ouroboros** utilize $N$-gram matching or retrieval techniques.
*   **Mechanism:** Instead of generating tokens via a neural network, they draft sequences by identifying existing data patterns within the context.
*   **Benefit:** Bypasses the need for additional model training and leverages pre-existing context information.

---

# Related Work
Existing Long-Context Acceleration

**Overview:**
A few recent frameworks have attempted to adapt speculative decoding specifically for long-context scenarios.

*   **Target-as-Draft Approaches:** Methods like **TriForce**, **MagicDec**, and **QuantSpec** typically use the target model itself (or a version of it) as the draft model.
*   **Compression Techniques:** To make the target model faster for drafting, they employ techniques like sparse Key-Value (KV) caches or 4-bit quantization.
*   **Goal:** These aim to handle the extended memory requirements of long sequences without training a separate lightweight architecture.

---

# Problem

- Existing solutions cannot solve the specific problems addressed by **LONGSPEC** due to three critical limitations:

  1.  **Memory Bottlenecks (Standard SD)**: SoTA methods like EAGLE are trained on short texts (<4k tokens). Their KV cache grows linearly, causing prohibitive memory usage when applied to long contexts (100k+ tokens).
  2.  **Training-Inference Mismatch**: Models trained on abundant short sequences fail to generalize to long contexts due to "out-of-distribution" position indices. Standard RoPE extrapolation fails because draft models must match the target model's fixed base.
  3.  **Inefficient Drafting (Existing Long-Context SD)**: Methods like MagicDec rely on heavy target models (even with sparse KV). This remains computation-intensive, limiting speedups especially in low-batch scenarios compared to a dedicated lightweight drafter.

---

# Solution

<div class="grid grid-cols-2">
  <div>

  1.  **Memory-Efficient Architecture:** A lightweight draft model with **constant memory usage** that reuses the target model's cache.
  2.  **Anchor-Offset Indices:** A training strategy enabling models trained on short sequences to generalize to **long contexts**.
  3.  **Hybrid Tree Attention:** A verification mechanism combining **Flash Attention** with custom kernels for maximum speed.


  </div>
  <img src="./architecture.png" />
</div>

---

# Solution
Memory-Efficient Architecture

<div class="flex gap-4">
<div class="grow">

- **The Problem:** Standard autoregressive draft models maintain their own growing KV cache, creating a memory bottleneck in long-context tasks [2].
- **The Design:**
  - **Constant-Sized Cache:** The draft model uses **sliding-window self-attention** (window size = 512). This ensures memory usage remains constant regardless of input length.
  - **Cross-Attention Reuse:** Instead of storing a full history, the draft model uses cross-attention to directly access the **frozen KV cache of the target model**.
  - **Weight Sharing:** To further reduce memory overhead, the draft model shares the Embedding Layer and LM Head weights with the target model, similar to EAGLE.

</div>
<img src="./method1.png" class="h-100" />
</div>

---

# Solution
Anchor-Offset Indices

<div class="flex gap-4">
<div class="grow">

- **The Problem:** Draft models are trained on short data, but inference requires handling long position indices (e.g., token 100,000). Standard RoPE extrapolation fails because the target model's base is fixed.
- **The Strategy:**
  - **Simulated Long Positions:** During short-sequence training, the model reserves the first few tokens as **Anchors** (indices 0-3) to capture attention sinks.
  - **Random Offsets:** For subsequent tokens, it assigns large, random position indices (e.g., jumping to index 8192+) to simulate long-context distribution.
  - **Flash Noisy Training:** A technique that randomly shifts indices during training to simulate the visibility constraints (cache vs. speculation) seen during inference, without breaking Flash Attention compatibility.

</div>
<div>

<img src="./method2.png" class="w-250" />
</div>
</div>

---

# Solution
Hybrid Tree Attention

<div class="flex gap-4">
<div class="grow">

- **The Problem:** Existing tree verification methods rely on complex masks that are incompatible with optimized kernels like Flash Attention, causing slowdowns as sequence length increases.
- **The Mechanism:**
  - **Divide and Compute:** The attention computation is split into two parts:
    1.  **Cached History:** Uses **Flash Attention** for the long prefix (no masking required), ensuring high speed.
    2.  **Speculative Tokens:** Uses a custom **Triton kernel** (fused mask attention) for the small set of new tokens.
  - **Aggregation:** The results from both computations are merged using a log-sum-exp method to ensure mathematical correctness.
  - **Result:** This approach reduces attention computation latency by approximately 75% compared to standard implementations.

</div>
<div>
<img src="./method3.png" class="w-240" />
</div>
</div>

---

# Training
1.  **Stage 1: Short-Context Pretraining**
    *   **Dataset:** SlimPajama-6B (pretraining dataset).
    *   **Strategy:** Uses **Anchor-Offset Indices** to simulate long-context positions. Random offsets are set between 0–15k (for 7B models) or 0–30k (for larger models).
    *   **Goal:** Initialize the draft model and align it with the target model's representations.
2.  **Stage 2: Long-Context Adaptation**
    *   **Dataset:** A small subset of the Prolong-64k dataset.
    *   **Strategy:** Switches to **Vanilla Indexing** since the data provides naturally long contexts.
    *   **Goal:** Equip the model with the ability to handle extended sequences directly.
3.  **Stage 3: Supervised Fine-Tuning (SFT)**
    *   **Dataset:** A self-built long-context SFT dataset.
    *   **Strategy:** Continues with Vanilla Indexing.
    *   **Goal:** Further refine performance for instruction-following and specific tasks.

---

# Experiment

- **Datasets (Long-Context & Reasoning)**
  - **Summarization (LongBench):** GovReport, QMSum, Multi-News [1].
  - **Code Completion (LongBench):** LCC, RepoBench-P [1].
  - **Long Reasoning:** AIME24 (tested on the reasoning model QwQ-32B) [2].
- **Target Models**
  - Evaluated on **Vicuna** (7B, 13B), **LongChat** (7B, 13B), **LLaMA-3.1-8B-Instruct**, and **QwQ-32B** [3], [4].
- **Comparisons & Baselines**
  - **Vanilla HF:** Standard HuggingFace attention (PyTorch-based) [2].
  - **Vanilla FA:** Strong baseline using **Flash Attention** (FlashDecoding) [2].
  - **MagicDec:** A state-of-the-art method that uses the target model with sparse KV cache as the drafter [2].

---

# Experiment

<img src="./experiment.png" class="w-90%" />

---

# Experiment

<img src="./experiment2.png" class="pb-2" />

- **Superior Speedup:** Achieves up to **2.67×** speedup on summarization and **3.26×** on code completion tasks compared to Vanilla Flash Attention.
- **High Acceptance Rates:** Maintains an average acceptance length ($\\tau$) of ~3.5 tokens for summarization and ~4 tokens for code completion.

---

# Experiment
Long Reasoning Acceleration

"Reasoning" models (like QwQ) generate massive Chain-of-Thought outputs, making inference latency a critical bottleneck. Evaluated on **QwQ-32B** using the **AIME24** dataset with a maximum output length of **32k tokens***.
*   **Massive Speedup:** LONGSPEC achieves a **2.25×** wall-clock speedup compared to the strong Flash Attention baseline.
*   **Throughput Surge:** Increases generation speed from **18.92 tokens/s** (Vanilla) to **42.63 tokens/s**.
*   **High Efficiency:** Maintains a high mean accepted token count of **3.82**, proving effectiveness even on complex reasoning tasks.

![](./experiment7.png){width=40%}

---

# Experiment
Ablation Study - Anchor-Offset Indices

This experiment measured the impact of the novel **Anchor-Offset** training strategy versus standard indexing.

*   **Training Efficiency:** Models using Anchor-Offset Indices reach optimal loss levels **3.93× faster** than those without.
*   **Generalization:**
    *   **Lower Loss:** Achieves consistently lower initial and final loss on long-context datasets.
    *   **Performance Boost:** Increases acceptance length ($\\tau$) from 3.20 to **3.36** on Multi-News, directly translating to higher token throughput.

<div class="grid grid-cols-2 gap-4 px-16">

![](./experiment4.png)

![](./experiment3.png)

</div>

---

# Experiment
Ablation Study - Hybrid Tree Attention

This experiment analyzed the latency breakdown of the verification step.

*   **Latency Reduction:** Reduces the target model's attention computation latency by approximately **75%** (from ~49.92 ms to ~12.54 ms).
*   **The Bottleneck Fix:**
    *   Standard implementations (like EAGLE) cannot use Flash Attention for tree verification, causing slowdowns.
    *   **Hybrid Tree Attention** splits the workload, allowing Flash Attention to handle the long prefix while custom kernels handle the speculation tree.

![](./experiment5.png){width=60%}

---

# Experiment
 Throughput & Batch Size Analysis

Comparison of throughput (tokens/s) across different batch sizes (1, 2, 4, 8) on the RepoBench-P dataset.

*   **Low Batch Superiority:** At batch size 1, LONGSPEC significantly outperforms MagicDec, which struggles due to the overhead of using a heavy target-model-as-drafter.
*   **High Batch Scalability:** At batch size 8, LONGSPEC achieves **561.32 tokens/s**, nearly **2× higher** than Vanilla (286.96 tokens/s) and 1.8× higher than MagicDec.

![](./experiment6.png){width=40%}

---


# Conclusion

- **Problem**:
  - SOTA SD KV cache size grow linearly when context size grows.
  - Models trained on short sequences fail to generalize to long contexts
  - Potential speedups in ingrence time
- **Solution**:
  - **Memory-Efficient Architecture:** Utilizes a constant-sized Key-Value (KV) cache via sliding window self-attention and cache-free cross-attention to eliminate memory overhead during drafting.
  - **Anchor-Offset Indices:** A novel training strategy that allows draft models trained on short sequences to generalize robustly to long contexts.
  - **Hybrid Tree Attention:** Integrates Flash Attention with custom kernels to optimize the verification step, significantly reducing attention computation latency.
- **Experiment results**:
  - Achieves up to **3.26× speedup** over strong Flash Attention baselines on long-context understanding datasets.
  - Delivers **2.25× speedup** on long reasoning tasks (e.g., QwQ model on AIME24), proving effectiveness for computationally intensive logic tasks.

---

# Conclusion

- Pros
  - Focus on long context of speculative decoding
  - Combine existing speed up methods
  - Released code
- Cons
  - Lack of comparison accross existing methods`,baseUrl:``,hasOgImage:!0},{id:`slides/page-attention`,path:`page-attention`,fullPath:`/home/runner/work/slides/slides/slides/page-attention/slides.md`,sourceDir:`/home/runner/work/slides/slides/slides`,frontmatter:{theme:`../../theme`,title:`Efficient Memory Management for Large Language Model Serving with PagedAttention`,name:`page-attention`,themeConfig:{glowHue:-30},addons:[`../addons/back-to-home`,`../addons/background-animation`,`../addons/page-number`]},content:`SOSP 2023

# **Efficient Memory Management for Large Language Model Serving with PagedAttention**

Woosuk Kwon, Zhuohan Li, Siyuan Zhuang, Ying Sheng, Lianmin Zheng, Cody Hao Yu, Joseph E. Gonzalez, Hao Zhang, Ion Stoica

Presenter: Jun-Chen Hung<br />
2024/12/04

[https://arxiv.org/pdf/2309.06180](https://arxiv.org/pdf/2309.06180){class="abs-bl bottom-6 left-15 text-gray text-sm"}

<style>

h1 {
  @apply !text-4xl mb-8;
}

</style>

---

# Outline

- Introduction
- Backgrounds
- Problem
- Method
- Experiments
- Conclusion

---
layout: section
glowHue: 50
---

# **Introduction**

---
glowHue: 50
---

# Introduction

- Identify the challenges in memory allocation in serving LLMs and quantify their impact on serving performance.
- Propose [PagedAttention]{color=red}, an attention algorithm that operates on KV cache stored in non-contiguous paged memory, which is inspired by the virtual memory and paging in OS.
- Design and implement [vLLM]{color=red}, a distributed LLM serving engine built on top of PagedAttention.
- Evaluate vLLM on various scenarios and demonstrate that it substantially outperforms the previous state-of-the art solutions such as FasterTransformer and Orca

---
layout: section
glowHue: -220
---

# **Backgrounds**


---
layout: two-cols
transition: fade
glowHue: -200
---

# Backgrounds

- Transformer
  - $q_i=W_qx_i, k_i=W_kx_i, v_i=W_vx_i$
  - $a_{ij}=\\frac{exp(q_j^\\intercal k_t / \\sqrt{d})}{\\sum_{t=1}^iexp(q_i^\\intercal k_t / \\sqrt{d})}$
  - $o_{i}=\\displaystyle\\sum_{t=1}^ia_{ij}v_i$
- Autoregressive Generation
  - Depends on all previous tokens.
  - 2 phases: [prompt phase]{color=red} & [autoregressive generation phase]{color=orange}
- KV cache
  - Reduce compute count of previous tokens.


::right::

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*8xqD4AYTwn6mQXNw0uhDCg.gif){width=90%}

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*uyuyOW1VBqmF5Gtv225XHQ.gif){width=90%}


---
glowHue: -200
---

# Backgrounds

- Batching
  - Naive: Make earlier requests wait for later ones or delay the incoming requests until earlier ones finish.
  - Fine-grained: New requests can be processed after waiting for a single iteration, not waiting for the entire batch to complete. eg. Cellular batching, Iteration-level scheduling

<div class="grid grid-cols-2 gap-2">

![](https://images.ctfassets.net/xjan103pcp94/1LJioEsEdQQpDCxYNWirU6/82b9fbfc5b78b10c1d4508b60e72fdcf/cb_02_diagram-static-batching.png)

![](https://images.ctfassets.net/xjan103pcp94/744TAv4dJIQqeHcEaz5lko/b823cc2d92bbb0d82eb252901e1dce6d/cb_03_diagram-continuous-batching.png)

</div>

[https://www.anyscale.com/blog/continuous-batching-llm-inference](https://www.anyscale.com/blog/continuous-batching-llm-inference){class="abs-bl bottom-6 left-15 text-gray text-sm"}

---
layout: section
glowHue: -120
---

# **Problem**

---
transition: fade
glowHue: -120
---

# Problem

- **Large KV cache**
  - Single token KV cache of 13B OPT model: [800KB]{color=red}
    - [2]{color=red} (k&v vectors) × [5120]{color=red} (hidden state size) × [40]{color=red} (number of layers) × [2]{color=red} (bytes per FP16).
  - 2048 tokens costs [1.6GB]{color=orange} KV cache size
  - Memory will become an increasingly significant bottleneck
- **Complex decoding algorithms**
  - LLM services offer a range of decoding algorithms for users to select <br /> from, each with varying implications for memory management <br /> complexity.
- **Scheduling for unknown input & output lengths.**
  - Requires the memory management system to accommodate a wide <br />range of prompt lengths. 

<img src="/KV-cache.png" class="w-50 absolute right-12 bottom-22" />

---
glowHue: -120
---

# Example

<img src="/MemoryManagementProblem.png" />

- Reserved: For future tokens.
- Internal fragmentation: for potential maximum sequence lengths.
- External fragmentation: From the memory allocator like the buddy allocator.

---
layout: section
---

# **Method**


---
transition: fade
---

# PagedAttention

- Inspired by the classic idea of paging in operating systems.
- KV Block $(B)$: key and value vectors for a fixed number of tokens.
  - Key block: $K_j = (k_{(j-1)B+1},...,k_{jB})$
  - Value block: $V_j = (v_{(j-1)B+1},...,v_{jB})$
  - $A_{ij}=\\frac{exp(q_i^\\intercal K_j / \\sqrt{d})}{\\sum_{t=1}^{[i/B]}exp(q_i^\\intercal K_t 1 / \\sqrt{d})}, A_ij = (a_{i,(j-1)B+1},...,a_{i,jB})$
  - $o_{i}=\\displaystyle\\sum_{t=1}^{[i/B]}V_jA_{ij}^\\intercal$
- Allows the [KV blocks]{color=red} to be stored in [non-contiguous]{color=red} physical memory
- Enables more flexible paged memory management in vLLM.

<img src="/PageAttention.png" class="abs-tr top-24 right-5 h-36" />

---
transition: fade
---

# KV Cache Manager

- Analogous to the virtual memory
- Contiguous logical pages can correspond to non-<br/>contiguous physical memory pages.
- Enabled by PagedAttention, we organize the KV cache <br/> as fixed-size KV blocks, like pages in virtual memory.
- Can serve multiple requests at the same time
  

<img src="/KVCacheManager.png" class="abs-tr top-24 right-5 w-100" />

---
clicks: 2
transition: fade
---

# Decoding with PagedAttention and vLLM


<vllmExample />

---
transition: fade
---

# Multiple Decode

<img src="/MultiDecode.png" />

---
transition: fade
---

# Parallel sampling

<img src="/Parrellel.png" />

---
transition: fade
---

# Beam Search

<img src="/BeamSearch.png" />

---
transition: fade
---

# Shared Prefix

<img src="/SharedPrefix.png" />

---
transition: fade
---

# Scheduling and Preemption

- Scheduling policy: [first-come-first-serve]{color=red}
- Question: The input prompts for an LLM can [vary]{color=red} significantly in length, and the resulting output lengths are [not known a priori]{color=red}
  1. Which blocks should it evict?
  2. How to recover evicted blocks if needed again?

---
transition: fade
---

# Scheduling and Preemption

1. Which blocks should it evict?
   - Apply **all-or-nothing** eviction policy
      - Multiple sequences within one request are gang-scheduled as a **Sequence Group**.

---
transition: fade
---

# Scheduling and Preemption

1. How to recover evicted blocks if needed again?
   - **Swapping**
     - Classic technique used by most virtual memory implementations
     - Selects a set of sequences to evict and transfer their KV cache to the CPU, and stop accepting new requests.
     - Bring back and continue the processing of that sequence.
   - **Recomputation**
     - Recompute the KV cache when the preempted sequences are rescheduled.
     - Recomputation latency can be significantly lower than the original latency because they are in the Sequence Group.

---
transition: fade
---

# Distributed Execution

- Support Megatron-LM style tensor model parallelism  <br /> strategy on Transformers
- Scheduler: Calculate block table of evry worker(shard), <br /> broadcast block table when start computing  
-  GPU workers do not need to synchronize on memory <br /> management.

<img src="/vLLM.png"  class="abs-tr top-24 right-5 w-100" />

---

# Implementation

- Kernel-level Optimization
  - Optimize memory access patterns that are not efficiently supported by existing systems PagedAttention introduces.
- Supporting Various Decoding Algorithms
  - \`fork\`: Creates a new sequence from an existing one
  - \`append\`: Appends a new token to the sequence
  - \`delete\`: Deletes the sequence

---
layout: section
glowHue: 150
---

# **Experiments**

---
transition: fade
glowHue: 150
---

# Experimental Setup

- **Model**: OPT 13B, 66B, 175B, Llama 13B
- **Server**: A2 instance of NVIDIA A100 GPUs on Google Cloud
- **Workload**: ShareGPT, Alpaca
- **Baseline**: 
  - FasterTransformer: Distributed inference engine highly <br /> optimized for latency.
  - Orca: SOTA LLM serving system optimized for throughput.
    - Orca(Oracle): reserved space == real space
    - Orca(Pow2): reserved space <= 2x real space
    - Orca(Oracle): reserved space == \`MAX_LENGTH\`
- **Key metrics**: *normalized latency* of the system

<img src="/Experiment/Setup.png"  class="abs-tr top-24 right-5 w-96" />

<!--
- 13B, 66B: common size, 175B: GPT3
- shareGPT = 5.8x alpaca
-->

---
transition: fade
glowHue: 150
---

# Baseline sampling

<img src="/Experiment/Baseline.png" />

---
transition: fade
glowHue: 150
---

#  Parallel Sampling and Beam Search

<img src="/Experiment/Parallel.png" />

---
transition: fade
glowHue: 150
---

#  Parallel Sampling and Beam Search

<img src="/Experiment/ParallelMemoryReduce.png" />

---
transition: fade
glowHue: 150
---

#  Shared prefix

<img src="/Experiment/SharedPrefix.png" class="h-80%" />

<!--
- Model: llama-13B => multilingual
- Dataset: WMT14

3.58倍

-->

---
transition: fade
glowHue: 150
---

#  Chatbot

<img src="/Experiment/Chatbot.png" class="h-80%" />

---
glowHue: 150
---

#  Ablation Study

<div class="grid grid-cols-2 gap-4">
  <div>
    <img src="/Experiment/Ablation1.png" />
  </div>
  <div>
    <img src="/Experiment/Ablation2.png" />
  </div>
</div>

<!--

vLLM GPU kernel involve extra overheads of:
- accessing the block table
- executing extra branches
- handling variable sequencelengths.

-->

---
layout: section
glowHue: 0
---

# **Conclusion**

---
glowHue: 0
transition: fade
---

# Conclusion

- **Problem**
  - Large KV cache
  - Complex decoding algorithms
  - Scheduling for unknown input & output lengths.
- **Solution**
  -  Proposes PagedAttention, a new attention algorithm that allows attention keys and values to be stored in non-contiguous paged memory.
  -  Presents vLLM, a high-throughput LLM serving system with efficient memory management enabled by PagedAttention.
- **Experiment**
  - 2-4× throughput improvements over the SOTA systems.

---
glowHue: 0
layout: two-cols
---

# [Pros]{color=green}

- Key feature is inovative
- Support multi-node inference
- Opensource with Apache 2.0 licences

<br /><br />

# [Cons]{color=red}

- Quite unstable

::right::

![](/vLLMv1.png)


[The seventh vLLM meetup. 2024/11/14](https://docs.google.com/presentation/d/1e3CxQBV3JsfGp30SwyvS3eM_tW-ghOhJ9PAJGK6KR54/edit#slide=id.g31455c8bc1e_1_45){class="abs-bl bottom-6 left-15 text-gray text-sm"}

---
layout: section
glowHue: 100
---

# **Q&A**
`,baseUrl:``,hasOgImage:!0}];var t=e;export{t as default,e as slidesData};