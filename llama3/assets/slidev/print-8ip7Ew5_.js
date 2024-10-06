import{d as p,_ as u,y as f,b as i,e,x as a,F as h,Z as g,o as l,$ as v,l as x,g as b}from"../modules/vue-C2_u18UA.js";import{e as N,h as y,c as _,b as k}from"../index-C4o0QDrG.js";import{N as w}from"./NoteDisplay-BGeHbpGB.js";import"../modules/shiki-B_Yc-FM6.js";const S=p({__name:"print",setup(m,{expose:n}){n();const{slides:r,total:o}=N();u(`
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
`),y({title:`Notes - ${_.title}`});const d=f(()=>r.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),c={slides:r,total:o,slidesWithNote:d,get configs(){return _},NoteDisplay:w};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),D={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},H={class:"text-lg"},W={class:"font-bold flex gap-2"},j={class:"opacity-50"},C={key:0,class:"border-main mb-8"};function F(m,n,r,o,d,c){return l(),i("div",D,[e("div",L,[e("div",T,[e("h1",V,a(o.configs.title),1),e("div",B,a(new Date().toLocaleString()),1)]),(l(!0),i(h,null,g(o.slidesWithNote,(t,s)=>(l(),i("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",H,[e("div",W,[e("div",j,a(t==null?void 0:t.no)+"/"+a(o.total),1),v(" "+a(t==null?void 0:t.title)+" ",1),n[0]||(n[0]=e("div",{class:"flex-auto"},null,-1))])]),x(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(l(),i("hr",C)):b("v-if",!0)]))),128))])])}const O=k(S,[["render",F],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.47_vite@5.4.8/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{O as default};
