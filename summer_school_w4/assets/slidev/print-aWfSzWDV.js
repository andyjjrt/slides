const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingPreview-Ck5gD84R.js","assets/modules/vue-qgm8wDfn.js","assets/index-DBZ7fGWU.js","assets/modules/shiki-B-NGHVML.js","assets/modules/shiki-BPvBenZD.css","assets/index-wxC_L63d.css","assets/slidev/bottom-Bp-tG3x1.js","assets/bottom-DBgkLW-k.css"])))=>i.map(i=>d[i]);
import{d as m,y as a,M as q,Y as C,J as z,o as l,b as d,l as p,i as N,c as f,g as w,h as L,F as v,Z as F,e as j,f as R,C as A}from"../modules/vue-qgm8wDfn.js";import{g as D,S as E,G as T,a as V,w as M}from"./bottom-Bp-tG3x1.js";import{s as W,a as S,_ as H,c as k,i as I,b as h,d as x,u as J,e as B,f as g,g as Y}from"../index-DBZ7fGWU.js";import{P as Z}from"./PrintStyle-BtbP0XH_.js";import"../modules/shiki-B-NGHVML.js";function K(n){return Array.from(new Set(n))}function y(...n){let r,t,e;n.length===1?(r=0,e=1,[t]=n):[r,t,e=1]=n;const i=[];let s=r;for(;s<t;)i.push(s),s+=e||1;return i}function Q(n,r){if(!r||r==="all"||r==="*")return y(1,n+1);if(r==="none")return[];const t=[];for(const e of r.split(/[,;]/g))if(!e.includes("-"))t.push(+e);else{const[i,s]=e.split("-",2);t.push(...y(+i,s?+s+1:n+1))}return K(t).filter(e=>e<=n).sort((e,i)=>e-i)}const U=m({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(n,{expose:r}){r();const{nav:t}=n,e=a(()=>t.currentSlideRoute.value),i=a(()=>({height:`${W.value}px`,width:`${S.value}px`})),s=q();H(()=>import("./DrawingPreview-Ck5gD84R.js").then(c=>c.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(c=>s.value=c.default);const o=a(()=>`${e.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);C(I,z({nav:t,configs:k,themeConfigs:a(()=>k.themeConfig)}));const u={route:e,style:i,DrawingPreview:s,id:o,get getSlideClass(){return D},SlideWrapper:E,get GlobalTop(){return T},get GlobalBottom(){return V}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),X=["id"];function $(n,r,t,e,i,s){return l(),d("div",{id:e.id,class:"print-slide-container",style:L(e.style)},[p(e.GlobalBottom),p(e.SlideWrapper,{is:e.route.component,"clicks-context":t.nav.clicksContext.value,class:N(e.getSlideClass(e.route)),route:e.route},null,8,["is","clicks-context","class","route"]),e.DrawingPreview?(l(),f(e.DrawingPreview,{key:0,page:e.route.no},null,8,["page"])):w("v-if",!0),p(e.GlobalTop)],12,X)}const ee=h(U,[["render",$],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.42_vite@5.4.2/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),te=m({__name:"PrintSlide",props:{route:{type:Object,required:!0}},setup(n,{expose:r}){r();const{route:t}=n,i={clicks0:x(t,0),get useFixedNav(){return J},get createFixedClicks(){return x},PrintSlideClick:ee};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}});function ne(n,r,t,e,i,s){return l(),d(v,null,[p(e.PrintSlideClick,{"clicks-context":e.clicks0,nav:e.useFixedNav(t.route,e.clicks0)},null,8,["clicks-context","nav"]),e.clicks0.disabled?w("v-if",!0):(l(!0),d(v,{key:0},F(e.clicks0.total,o=>(l(),f(e.PrintSlideClick,{key:o,nav:e.useFixedNav(t.route,e.createFixedClicks(t.route,o))},null,8,["nav"]))),128))],64)}const re=h(te,[["render",ne],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.42_vite@5.4.2/node_modules/@slidev/client/internals/PrintSlide.vue"]]),ie=m({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n,{expose:r}){r();const t=n,{slides:e,currentRoute:i}=B(),s=a(()=>t.width),o=a(()=>t.width/g.value),u=a(()=>s.value/o.value),c=a(()=>u.value<g.value?s.value/S.value:o.value*g.value/S.value);let _=e.value;i.value.query.range&&(_=Q(_.length,i.value.query.range).map(O=>_[O-1]));const G=a(()=>({"select-none":!k.selectable}));C(Y,c);const P={props:t,slides:e,currentRoute:i,width:s,height:o,screenAspect:u,scale:c,get routes(){return _},set routes(b){_=b},className:G,PrintSlide:re};return Object.defineProperty(P,"__isScriptSetup",{enumerable:!1,value:!0}),P}}),se={id:"print-content"};function oe(n,r,t,e,i,s){return l(),d("div",{id:"print-container",class:N(e.className)},[j("div",se,[(l(!0),d(v,null,F(e.routes,o=>(l(),f(e.PrintSlide,{key:o.no,route:o},null,8,["route"]))),128))]),R(n.$slots,"controls")],2)}const le=h(ie,[["render",oe],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.42_vite@5.4.2/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ae=m({__name:"print",setup(n,{expose:r}){r();const{isPrintMode:t}=B();A(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")});const e={isPrintMode:t,get windowSize(){return M},PrintContainer:le,PrintStyle:Z};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),ce={id:"page-root",class:"grid grid-cols-[1fr_max-content]"};function de(n,r,t,e,i,s){return l(),d(v,null,[e.isPrintMode?(l(),f(e.PrintStyle,{key:0})):w("v-if",!0),j("div",ce,[p(e.PrintContainer,{class:"w-full h-full",style:{background:"var(--slidev-slide-container-background, black)"},width:e.windowSize.width.value},null,8,["width"])])],64)}const fe=h(ae,[["render",de],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.42_vite@5.4.2/node_modules/@slidev/client/pages/print.vue"]]);export{fe as default};
