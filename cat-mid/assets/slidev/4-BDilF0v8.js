import{o as r,c as a,k as l,q as n,s as i,A as t,e,$ as s}from"../modules/vue-DyZq2K4x.js";import{I as c}from"./default-DewHh5Zo.js";import{b as p,G as o}from"../index-DZdOYPmO.js";import{p as d,u as m,f as u}from"./context-DxBAH59C.js";import"../modules/shiki-B_6wf9ke.js";const _=e("h1",null,"Telnet 發現的漏洞和風險評估",-1),f=e("ul",null,[e("li",null,"由於 Telnet 服務中的資訊是以明文傳輸，因此我們能夠透過 sniffer 監聽來獲得 Telnet 的帳號密碼，可能導致 root 權限帳號與密碼皆被竊取進而導致權限外洩 (CVE-2018-10698)"),e("li",null,[s("此漏洞在 CVSS 3.1 中獲得 9.8 分評估為"),e("span",{class:"text-black bg-white rounded px-1 mx-1"},"CRITICAL"),s("，CVSS 2.0中獲得10.0分評估為"),e("span",{class:"text-white bg-red rounded px-1 mx-1"},"HIGH")]),e("li",null,"Vector: AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H。")],-1),x={__name:"4",setup(C){return d(o),m(),(h,I)=>(r(),a(c,n(i(t(u)(t(o),3))),{default:l(()=>[_,f]),_:1},16))}},N=p(x,[["__file","/@slidev/slides/4.md"]]);export{N as default};