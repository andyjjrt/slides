function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-DNZEQHs_.js","assets/modules/vue-Cwp2c-0s.js","assets/index-C58Zyzw3.js","assets/modules/shiki-BVnGaOcM.js","assets/modules/shiki-BSchMNmt.css","assets/index-CeC5KRx_.css","assets/slidev/bottom-EY7j2SPY.js","assets/bottom-BjZnNKJr.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as _,y as i,M as F,Y as N,J as V,o as n,b as u,l as d,A as e,i as q,c as m,g as S,h as B,F as p,Z as L,e as R,f as j,C as z}from"../modules/vue-Cwp2c-0s.js";import{G,g as D,S as M,a as O,w as T}from"./bottom-EY7j2SPY.js";import{s as W,a as g,_ as H,c as k,i as I,b as f,d as b,u as x,e as A,f as h,p as J,g as Y}from"../index-C58Zyzw3.js";import{P as Z}from"./PrintStyle-1_Wl5v4a.js";import"../modules/shiki-BVnGaOcM.js";const K=["id"],Q=_({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(c){const{nav:s}=c,t=i(()=>s.currentSlideRoute.value),l=i(()=>({height:`${W.value}px`,width:`${g.value}px`})),a=F();H(()=>import("./DrawingPreview-DNZEQHs_.js").then(r=>r.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(r=>a.value=r.default);const o=i(()=>`${t.value.no.toString().padStart(3,"0")}-${(s.clicks.value+1).toString().padStart(2,"0")}`);return N(I,V({nav:s,configs:k,themeConfigs:i(()=>k.themeConfig)})),(r,w)=>(n(),u("div",{id:o.value,class:"print-slide-container",style:B(l.value)},[d(e(G)),d(M,{is:t.value.component,"clicks-context":r.nav.clicksContext.value,class:q(e(D)(t.value)),route:t.value},null,8,["is","clicks-context","class","route"]),a.value?(n(),m(e(a),{key:0,page:t.value.no},null,8,["page"])):S("v-if",!0),d(e(O))],12,K))}}),$=f(Q,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),U=_({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(c){const{route:s}=c,t=b(s,0);return(l,a)=>(n(),u(p,null,[d($,{"clicks-context":e(t),nav:e(x)(l.route,e(t))},null,8,["clicks-context","nav"]),e(t).disabled?S("v-if",!0):(n(!0),u(p,{key:0},L(e(t).total,o=>(n(),m($,{key:o,nav:e(x)(l.route,e(b)(l.route,o))},null,8,["nav"]))),128))],64))}}),X=f(U,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/PrintSlide.vue"]]),ee={id:"print-content"},te=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(c){const s=c,{slides:t,currentRoute:l}=A(),a=i(()=>s.width),o=i(()=>s.width/h.value),r=i(()=>a.value/o.value),w=i(()=>r.value<h.value?a.value/g.value:o.value*h.value/g.value);let v=t.value;l.value.query.range&&(v=J(v.length,l.value.query.range).map(C=>v[C-1]));const E=i(()=>({"select-none":!k.selectable}));return N(Y,w),(y,C)=>(n(),u("div",{id:"print-container",class:q(E.value)},[R("div",ee,[(n(!0),u(p,null,L(e(v),P=>(n(),m(X,{key:P.no,route:P},null,8,["route"]))),128))]),j(y.$slots,"controls")],2))}}),se=f(te,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ne={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},le=_({__name:"print",setup(c){const{isPrintMode:s}=A();return z(()=>{s?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,l)=>(n(),u(p,null,[e(s)?(n(),m(Z,{key:0})):S("v-if",!0),R("div",ne,[d(se,{class:"w-full h-full",style:B({background:"var(--slidev-slide-container-background, black)"}),width:e(T).width.value},null,8,["style","width"])])],64))}}),ue=f(le,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/pages/print.vue"]]);export{ue as default};
