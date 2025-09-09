import{d as _,aj as u,z as f,f as n,g as t,t as s,C as c,F as h,af as g,o as l,i as v,e as x,a9 as b}from"../modules/vue-DercX59r.js";import{a as y,u as N,y as m}from"../index-Ds0OfCrE.js";import{_ as k}from"./NoteDisplay.vue_vue_type_style_index_0_lang-BXh7fgwI.js";import"../modules/shiki-DlmV6jp8.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},j={key:0,class:"border-main mb-8"},A=_({__name:"print",setup(z){const{slides:d,total:p}=y();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),N({title:`Notes - ${m.title}`});const i=f(()=>d.value.map(o=>{var a;return(a=o.meta)==null?void 0:a.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,a)=>(l(),n("div",w,[t("div",L,[t("div",T,[t("h1",V,s(c(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(l(!0),n(h,null,g(i.value,(e,r)=>(l(),n("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",S,s(e==null?void 0:e.no)+"/"+s(c(p)),1),b(" "+s(e==null?void 0:e.title)+" ",1),a[0]||(a[0]=t("div",{class:"flex-auto"},null,-1))])]),x(k,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(l(),n("hr",j)):v("v-if",!0)]))),128))])]))}});export{A as default};
