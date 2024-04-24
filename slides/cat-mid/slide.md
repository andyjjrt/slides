---
_title: "資安檢測技術與實務"
addons:
  - slidev-addon-addon
---

# 資安檢測技術與實務

期中滲透測試報告&nbsp;&nbsp;&nbsp;&nbsp;洪晙宸, 邵靖翔

---
layout: image-right
image: /nmap.png
backgroundSize: contain
---

# 開始測試

<v-clicks>

- 使用`nmap`對 Metasploitable 2 進行掃描
  - Telnet
  - UnrealIRCd (3.2.8.1)
  - Sambz (3.0.20-Debian)
- 使用CVSS評分作為嚴重性參考
  ![](/cvss.png){class=mt-2}

</v-clicks>


---

# Telnet 滲透測試過程

因telnet中的資訊是未加密的，可利用此漏洞加以 sniff 來獲得 Telnet Metasploitable2 的帳號密碼

![](/telnet.png){width=500px}

在結果中可看到`with msfadmin/msfadmin to get started`文字，經檢查 msfadmin/msfadmin 為 Metasploitable2 的 root 身分

---

# Telnet 發現的漏洞和風險評估

- 由於 Telnet 服務中的資訊是以明文傳輸，因此我們能夠透過 sniffer 監聽來獲得 Telnet 的帳號密碼，可能導致 root 權限帳號與密碼皆被竊取進而導致權限外洩 (CVE-2018-10698)
- 此漏洞在 CVSS 3.1 中獲得 9.8 分評估為<span class="text-black bg-white rounded px-1 mx-1">CRITICAL</span>，CVSS 2.0中獲得10.0分評估為<span class="text-white bg-red rounded px-1 mx-1">HIGH</span>
- Vector: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H。

---

# Telnet 弱點修復建議和策略

- 由於此弱點是由telnet的實現造成的，因此我們建議棄用telnet改為使用ssh或https等加密傳輸訊息的工具來連線遠端主機。

---

# UnrealIRCd 滲透測試過程

- 經查詢為3.2.8.1版本，為一有漏洞的版本
- 在 Metasploit 中查詢此版本 UnrealIRCd 的 exploit，可用 `unix/irc/unreal_ircd_3281_backdoor`。

![](/ircd-1.png){width=450px}

---

# UnrealIRCd 滲透測試過程

利用此exploit進行滲透並獲得Metasploitable2的root身分

![](/ircd-2.png){width=420px}

---

# UnrealIRCd 發現的漏洞和風險評估

- UnrealIRCd 3.2.8.1 在 `DEBUG3_DOLOG_SYSTEM` 巨集中包含外部引入的修改（特洛伊木馬），該修改允許遠端攻擊者執行任意命令 (CVE-2010-2075)
- 此漏洞在 CVSS 3.x 中尚未評分，CVSS 2.0 中獲得 7.5 分評估為<span class="text-white bg-red rounded px-1 mx-1">HIGH</span>
- Vector: (AV:N/AC:L/Au:N/C:P/I:P/A:P)。

---

# UnrealIRCd 弱點修復建議和策略

- 保持 UnrealIRCd 更新
- 使用專用帳戶和機器
- 備份和文件權限
- 謹慎選擇管理員
- 使用 DNS 黑名單
- 防禦垃圾郵件和洪水攻擊

---

# Samba 滲透測試過程

- 先了解靶機samba版本，查詢Metasploitable2後確認其版本為3.0.20，為一有漏洞可以利用的版本。在metasploit中找到該版本的exploit。
![](/samba-1.png)

---

# Samba 滲透測試過程

- 設定此exploit的options
![](/samba-2.png)

---

# Samba 滲透測試過程

- 在metasploit中run此exploit並得到root身分
![](/samba-3.png)

---

# Samba 發現的漏洞和風險評估

- 當啟用 `username map script` smb.conf 選項時，Samba `3.0.0` 到 `3.0.25rc3` 中 `smbd` 中的 `MS-RPC` 功能允許遠端攻擊者透過涉及 `SamrChangePassword` 函數的 `shell metacharacters` 執行任意命令，並允許遠端經過驗證的使用者可以透過 `shell metacharacters` 執行命令，並涉及遠端印表機和檔案共用管理中的其他 `MS-RPC` 功能 (CVE-2007-2447)
- 此漏洞在CVSS 3.x 中尚未評分，CVSS 2.0 中獲得 6.0 分評估為<span class="text-black bg-yellow rounded px-1 mx-1">MEDIUM</span>
- Vector: (AV:N/AC:M/Au:S/C:P/I:P/A:P)

---

# Samba 弱點修復建議和策略

- 升級到最新版本
- 使用加密密碼
- 選擇適當的安全級別
- 使用有效的用戶列表
- 實施服務器級別安全性
- 使用 ADS 安全模式
- 定期檢查和更新配置

---


# 結論

- 這些弱點對 Metasploitable 2 系統具有非常嚴重的安全威脅，我們也提供了一些關於這些弱點以及Metasploitable 2 的修改建議以消除這些弱點，包含棄用 Telnet, 升級 UnrealIRCd 和 Samba 服務等等。

|發現的漏洞|弱點編號|CVSS 3.x評分/嚴重性|CVSS 2.0評分/嚴重性|
|----|----|----|----|
|telnet明文傳輸|CVE-2018-10698|9.8 / <span class="text-black bg-white rounded px-1 mx-1">CRITICAL</span>|10 / <span class="text-white bg-red rounded px-1 mx-1">HIGH</span>|
|UnrealIRCd後門程式|CVE-2010-2075|NA|7.5 / <span class="text-white bg-red rounded px-1 mx-1">HIGH</span>|
|Samba username map script|CVE-2007-2447|NA|6.0 / <span class="text-black bg-yellow rounded px-1 mx-1">MEDIUM</span>|

