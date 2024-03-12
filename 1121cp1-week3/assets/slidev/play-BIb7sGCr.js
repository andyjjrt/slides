function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-DP64oplk.js","assets/modules/unplugin-icons-Dh6VzJbx.js","assets/modules/vue-C1svXA8A.js","assets/modules/shiki-es5OhojV.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-CM4zUK_S.js","assets/index-kSOMcWZa.js","assets/index-CtxEPhKz.css","assets/slidev/bottom-ksCowomy.js","assets/bottom-BjZnNKJr.css","assets/slidev/SlidesShow-fSP9KoHK.js","assets/slidev/context-BIcHlHYe.js","assets/SlidesShow-CVmRdIgj.css","assets/DrawingControls-C5T1oZL5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as y,c as g,e as I,_ as z}from"../index-kSOMcWZa.js";import{d as h,a7 as P,o as t,c as d,A as e,b as k,e as l,f as B,i as D,g as n,a8 as O,y as $,k as M,a6 as _,$ as R,M as w,l as u,F as E,t as A,h as T}from"../modules/vue-C1svXA8A.js";import{b as x,e as C,f as S,h as U,j as N,w as H,k as L,l as j}from"./bottom-ksCowomy.js";import{Q as F,G,r as Q,u as W,S as K,a as X,N as Y}from"./SlidesShow-fSP9KoHK.js";import{P as q}from"./PrintStyle-BDE-iDnz.js";import{u as J}from"./DrawingPreview-CM4zUK_S.js";import"../modules/shiki-es5OhojV.js";import"../modules/unplugin-icons-Dh6VzJbx.js";import"./context-BIcHlHYe.js";const Z="/1121cp1-week3/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},se=h({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(c,{emit:a}){const i=c,s=P(i,"modelValue",a);function o(){s.value=!1}return(m,r)=>(t(),d(O,null,[e(s)?(t(),k("div",ee,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=p=>o())}),l("div",{class:D(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[B(m.$slots,"default")],2)])):n("v-if",!0)],1024))}}),oe=y(se,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Modal.vue"]]),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},te=["innerHTML"],ae=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),R("dev ")])])],-1),ie=h({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(c,{emit:a}){const s=P(c,"modelValue",a),o=$(()=>typeof g.info=="string");return(m,r)=>(t(),d(oe,{modelValue:e(s),"onUpdate:modelValue":r[0]||(r[0]=p=>_(s)?s.value=p:null),class:"px-6 py-4"},{default:M(()=>[l("div",le,[o.value?(t(),k("div",{key:0,class:"mb-4",innerHTML:e(g).info},null,8,te)):n("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=y(ie,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=h({__name:"Controls",setup(c){const a=w(),i=w();return(f,s)=>(t(),k(E,null,[u(F,{modelValue:e(x),"onUpdate:modelValue":s[0]||(s[0]=o=>_(x)?x.value=o:null)},null,8,["modelValue"]),u(G),a.value?(t(),d(e(a),{key:0})):n("v-if",!0),i.value?(t(),d(e(i),{key:1,modelValue:e(C),"onUpdate:modelValue":s[1]||(s[1]=o=>_(C)?C.value=o:null)},null,8,["modelValue"])):n("v-if",!0),e(g).info?(t(),d(ne,{key:2,modelValue:e(S),"onUpdate:modelValue":s[2]||(s[2]=o=>_(S)?S.value=o:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),de=y(re,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Controls.vue"]]),ue=h({__name:"play",setup(c){Q();const{next:a,prev:i,isEmbedded:f,isPrintMode:s}=I(),{isDrawing:o}=J(),m=A();function r(v){var b;N.value||((b=v.target)==null?void 0:b.id)==="slide-container"&&(v.screenX/window.innerWidth>.6?a():i())}W(m);const p=$(()=>U.value||N.value);w();const V=w();return z(()=>import("./DrawingControls-DP64oplk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(v=>V.value=v.default),(v,b)=>(t(),k(E,null,[e(s)?(t(),d(q,{key:0})):n("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:m,class:D(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[u(K,{class:"w-full h-full",style:T({background:"var(--slidev-slide-container-background, black)"}),width:e(s)?e(H).width.value:void 0,scale:e(L),"is-main":!0,onPointerdown:r},{default:M(()=>[u(X,{"render-context":"slide"})]),controls:M(()=>[l("div",{class:D(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[p.value?"!opacity-100 right-0":"opacity-0 p-2",e(o)?"pointer-events-none":""]])},[u(Y,{class:"m-auto",persist:p.value},null,8,["persist"])],2),!e(g).drawings.presenterOnly&&!e(f)&&V.value?(t(),d(e(V),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],2),u(de)],64))}}),he=y(ue,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/pages/play.vue"]]);export{he as default};
