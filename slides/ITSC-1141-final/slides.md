---
theme: ../../theme
############################
title: ITSC 1141 Final
name: itsc-1141-final
themeConfig:
  glowHue: 100
addons:
  - ../addons/back-to-home
  - ../addons/background-animation
  - ../addons/page-number
---

# 校務系統開發與管理

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

```mermaid
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

```

</div>

![alt text](/image3.png)

</div>

---
layout: cover
---

# 問題與討論