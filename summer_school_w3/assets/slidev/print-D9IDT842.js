import{d as p,_ as h,y as u,b as n,e,x as a,F as f,Z as g,o as i,$ as v,l as x,g as b}from"../modules/vue-jJv3i-5y.js";import{e as N,h as y,c as d,b as k}from"../index-CHd_ipKT.js";import{N as w}from"./NoteDisplay-BIYwH-nV.js";import"../modules/shiki-DNME4isg.js";const S=p({__name:"print",setup(m,{expose:c}){c();const{slides:l,total:o}=N();h(`
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
`),y({title:`Notes - ${d.title}`});const _=u(()=>l.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),r={slides:l,total:o,slidesWithNote:_,get configs(){return d},NoteDisplay:w};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),D={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},W={class:"font-bold flex gap-2"},j={class:"opacity-50"},C=e("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"};function M(m,c,l,o,_,r){return i(),n("div",D,[e("div",L,[e("div",T,[e("h1",V,a(o.configs.title),1),e("div",B,a(new Date().toLocaleString()),1)]),(i(!0),n(f,null,g(o.slidesWithNote,(t,s)=>(i(),n("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",H,[e("div",W,[e("div",j,a(t==null?void 0:t.no)+"/"+a(o.total),1),v(" "+a(t==null?void 0:t.title)+" ",1),C])]),x(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(i(),n("hr",F)):b("v-if",!0)]))),128))])])}const P=k(S,[["render",M],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.42_vite@5.4.2/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{P as default};
