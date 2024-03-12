function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-Cub4jNuY.js","assets/modules/unplugin-icons-BFZUSbD2.js","assets/modules/vue-BYWgGKSk.js","assets/modules/shiki-CwGwPBIn.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-CoJ5wGcg.js","assets/index-cka-qXg8.js","assets/index-mNDUxCk9.css","assets/slidev/bottom-bU4d-uCc.js","assets/bottom-BjZnNKJr.css","assets/slidev/context-DGQ6YoZ3.js","assets/DrawingControls-C5T1oZL5.css","assets/slidev/DrawingLayer-D_yf_uTW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as D,a9 as Tt,aa as Ot,y as A,ab as R,ac as G,U as Pt,D as ge,ad as Dt,d as X,ae as Bt,C as st,_ as Ft,Y as Vt,b as f,e as L,f as ae,h as le,i as B,o as c,a7 as Fe,x as Q,F as U,Z as ke,A as h,l as w,$ as Ie,a6 as jt,af as Wt,c as C,g as S,a8 as Gt,k as N,ag as nt,v as Kt,M as Ee,r as Ut,ah as Ht,ai as zt,a1 as ot,aj as it,j as de,ak as Xt,N as Yt,m as Qt,al as Jt}from"../modules/vue-BYWgGKSk.js";import{e as se,l as Zt,t as Le,f as we,a as be,s as qt,c as _e,g as es,b as H,m as Ue,_ as rt,n as ts,o as He,d as ss,C as ns,q as ze,k as Se,r as Xe}from"../index-cka-qXg8.js";import{u as Ve,D as os}from"./DrawingPreview-CoJ5wGcg.js";import{b as W,t as Ne,m as q,n as at,o as lt,q as is,r as rs,u as as,v as ct,k as xe,x as Ae,s as he,p as ls,y as cs,f as Ye,z as re,w as Me,S as ut,g as dt,G as us,a as ds}from"./bottom-bU4d-uCc.js";import{e as hs,f as fs,g as ps,h as _s,i as vs,j as ms,k as gs,l as ys,m as ht,n as ks,o as ws,p as bs,q as Ss,r as xs,s as Ms,t as $s,u as Cs,v as Is,w as Es}from"../modules/unplugin-icons-BFZUSbD2.js";import{u as Ls}from"./context-DGQ6YoZ3.js";import{t as Ns}from"../modules/shiki-CwGwPBIn.js";function di(t){const{next:e,nextSlide:s,prev:n,prevSlide:o}=se(),{isDrawing:i}=Ve(),r=D(0),{direction:a,distanceX:l,distanceY:u}=Tt(t,{pointerTypes:["touch"],onSwipeStart(){i.value||(r.value=Ot())},onSwipeEnd(){if(!r.value||i.value)return;const d=Math.abs(l.value),p=Math.abs(u.value);d/window.innerWidth>.3||d>75?a.value==="left"?e():n():(p/window.innerHeight>.4||p>200)&&(a.value==="down"?o():s())}})}const ve=D(1),me=A(()=>Zt.value.length),P=D(0),je=D(0);function As(){P.value>ve.value&&(P.value-=1)}function Rs(){P.value<me.value&&(P.value+=1)}function Ts(){if(P.value>ve.value){let t=P.value-je.value;t<ve.value&&(t=ve.value),P.value=t}}function Os(){if(P.value<me.value){let t=P.value+je.value;t>me.value&&(t=me.value),P.value=t}}const Ps=[];function Ds(){const{go:t,goFirst:e,goLast:s,next:n,nextSlide:o,prev:i,prevSlide:r}=se(),{drawingEnabled:a}=Ve(),{escape:l,space:u,shift:d,left:p,right:_,up:v,down:b,enter:y,d:M,g:x,o:E,"`":k}=at,T={next:n,prev:i,nextSlide:o,prevSlide:r,go:t,goFirst:e,goLast:s,downloadPDF:lt,toggleDark:Le,toggleOverview:Ne,toggleDrawing:()=>a.value=!a.value,escapeOverview:()=>W.value=!1,showGotoDialog:()=>q.value=!q.value};let m=[{name:"next_space",key:R(u,G(d)),fn:n,autoRepeat:!0},{name:"prev_space",key:R(u,d),fn:i,autoRepeat:!0},{name:"next_right",key:R(_,G(d),G(W)),fn:n,autoRepeat:!0},{name:"prev_left",key:R(p,G(d),G(W)),fn:i,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:n,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:i,autoRepeat:!0},{name:"next_down",key:R(b,G(W)),fn:o,autoRepeat:!0},{name:"prev_up",key:R(v,G(W)),fn:()=>r(!1),autoRepeat:!0},{name:"next_shift",key:R(_,d),fn:o,autoRepeat:!0},{name:"prev_shift",key:R(p,d),fn:()=>r(!1),autoRepeat:!0},{name:"toggle_dark",key:R(M,G(a)),fn:Le},{name:"toggle_overview",key:R(Pt(E,k),G(a)),fn:Ne},{name:"hide_overview",key:R(l,G(a)),fn:()=>W.value=!1},{name:"goto",key:R(x,G(a)),fn:()=>q.value=!q.value},{name:"next_overview",key:R(_,W),fn:Rs},{name:"prev_overview",key:R(p,W),fn:As},{name:"up_overview",key:R(v,W),fn:Ts},{name:"down_overview",key:R(b,W),fn:Os},{name:"goto_from_overview",key:R(y,W),fn:()=>{t(P.value),W.value=!1}}];const O=new Set(m.map($=>$.name));for(const $ of Ps){const V=$(T,m);m=m.concat(V)}if(m.filter($=>$.name&&O.has($.name)).length===0){const $=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert($),console.warn($)}return m}const ft=R(G(as),G(rs),is);function Bs(t,e,s=!1){typeof t=="string"&&(t=at[t]);const n=R(t,ft);let o=0,i;const r=()=>{if(clearTimeout(i),!n.value){o=0;return}s&&(i=setTimeout(r,Math.max(1e3-o*250,150)),o++),e()};return ge(n,r,{flush:"sync"})}function Fs(t,e){return Dt(t,s=>{ft.value&&(s.repeat||e())})}function hi(){const t=Ds();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Bs(s.key,s.fn,s.autoRepeat)}),Fs("f",()=>ct.toggle())}const Vs=X({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{clicksDirection:s,isPrintMode:n}=se(),o=D(),i=Bt(o),r=A(()=>e.width?e.width:i.width.value),a=A(()=>e.width?e.width/we.value:i.height.value);e.width&&st(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${a.value}px`)});const l=A(()=>r.value/a.value),u=A(()=>e.scale&&!n.value?e.scale:l.value<we.value?r.value/be.value:a.value*we.value/be.value),d=A(()=>({height:`${qt.value}px`,width:`${be.value}px`,transform:`translate(-50%, -50%) scale(${u.value})`,"--slidev-slide-scale":u.value})),p=A(()=>({"select-none":!_e.selectable,"slidev-nav-go-forward":s.value>0,"slidev-nav-go-backward":s.value<0}));return e.isMain&&Ft(A(()=>`
    :root {
      --slidev-slide-scale: ${u.value};
    }
  `)),Vt(es,u),(_,v)=>(c(),f("div",{id:"slide-container",ref_key:"root",ref:o,class:B(["slidev-slides-container",p.value])},[L("div",{id:"slide-content",class:"slidev-slide-content",style:le(d.value)},[ae(_.$slots,"default")],4),ae(_.$slots,"controls")],2))}}),js=H(Vs,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ws={class:"select-list"},Gs={class:"title"},Ks={class:"items"},Us=["onClick"],Hs=X({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const o=Fe(t,"modelValue",e,{passive:!0});return(i,r)=>{const a=hs;return c(),f("div",Ws,[L("div",Gs,Q(t.title),1),L("div",Ks,[(c(!0),f(U,null,ke(t.items,l=>(c(),f("div",{key:l.value,class:B(["item",{active:h(o)===l.value}]),onClick:()=>{var u;o.value=l.value,(u=l.onClick)==null||u.call(l)}},[w(a,{class:B(["text-green-500",{"opacity-0":h(o)!==l.value}])},null,8,["class"]),Ie(" "+Q(l.display||l.value),1)],10,Us))),128))])])}}}),zs=H(Hs,[["__scopeId","data-v-07575b19"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SelectList.vue"]]),Xs={class:"text-sm"},Ys=X({__name:"Settings",setup(t){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,n)=>(c(),f("div",Xs,[w(zs,{modelValue:h(xe),"onUpdate:modelValue":n[0]||(n[0]=o=>jt(xe)?xe.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Qs=H(Ys,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Settings.vue"]]),Js={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Zs=X({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const o=Fe(t,"modelValue",e,{passive:!0}),i=D();return Wt(i,()=>{o.value=!1}),(r,a)=>(c(),f("div",{ref_key:"el",ref:i,class:"flex relative"},[L("button",{class:B({disabled:t.disabled}),onClick:a[0]||(a[0]=l=>o.value=!h(o))},[ae(r.$slots,"button",{class:B({disabled:t.disabled})})],2),(c(),C(Gt,null,[h(o)?(c(),f("div",Js,[ae(r.$slots,"menu")])):S("v-if",!0)],1024))],512))}}),qs=H(Zs,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/MenuButton.vue"]]),en={},tn={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function sn(t,e){return c(),f("div",tn)}const fe=H(en,[["render",sn],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),nn={class:"sr-only"},on=X({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(t){return(e,s)=>(c(),C(nt(e.as||"button"),{class:"slidev-icon-btn",title:e.title},{default:N(()=>[L("span",nn,Q(e.title),1),ae(e.$slots,"default",{},()=>[L("div",{class:B(e.icon)},null,2)])]),_:3},8,["title"]))}}),z=H(on,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/IconButton.vue"]]),rn=L("div",{class:"w-1px opacity-10 bg-current m-1 lg:m-2"},null,-1),an={class:"slidev-icon-btn mr-2",title:"Home",href:"https://slidev.andyjjrt.cc"},ln={__name:"custom-nav-controls",setup(t){return Ls(),(e,s)=>{const n=fs;return c(),f(U,null,[rn,L("a",an,[w(n)])],64)}}},cn=H(ln,[["__file","/home/runner/work/slides/slides/addon/custom-nav-controls.vue"]]),un={render(){return[Kt(cn)]}},dn={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},hn={class:"my-auto"},fn={class:"opacity-50"},pn=X({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t,{currentRoute:s,currentSlideNo:n,hasNext:o,hasPrev:i,isEmbedded:r,isPresenter:a,isPresenterAvailable:l,next:u,prev:d,total:p}=se(),{brush:_,drawingEnabled:v}=Ve(),b=Ae.smaller("md"),{isFullscreen:y,toggle:M}=ct,x=A(()=>s.value.query.password),E=A(()=>x.value?`?password=${x.value}`:""),k=A(()=>`${Ue(n.value,!0)}${E.value}`),T=A(()=>`${Ue(n.value,!1)}${E.value}`),m=D();function O(){m.value&&re.value&&m.value.contains(re.value)&&re.value.blur()}const I=A(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),$=Ee(),V=Ee();return rt(()=>import("./DrawingControls-Cub4jNuY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(ie=>V.value=ie.default),(ie,F)=>{const Z=ps,Ge=_s,j=vs,ne=ms,ce=Ss,St=gs,xt=ys,Mt=ht,$t=ks,Ct=ws,It=xs,Ke=Ut("RouterLink"),Et=Ms,Lt=$s,Nt=Cs,At=Is,Rt=bs;return c(),f("nav",{ref_key:"root",ref:m,class:"flex flex-col"},[L("div",{class:B(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",I.value]),onMouseleave:O},[h(r)?S("v-if",!0):(c(),C(z,{key:0,title:h(y)?"Close fullscreen":"Enter fullscreen",onClick:h(M)},{default:N(()=>[h(y)?(c(),C(Z,{key:0})):(c(),C(Ge,{key:1}))]),_:1},8,["title","onClick"])),w(z,{class:B({disabled:!h(i)}),title:"Go to previous slide",onClick:h(d)},{default:N(()=>[w(j)]),_:1},8,["class","onClick"]),w(z,{class:B({disabled:!h(o)}),title:"Go to next slide",onClick:h(u)},{default:N(()=>[w(ne)]),_:1},8,["class","onClick"]),h(r)?S("v-if",!0):(c(),C(z,{key:1,title:"Show slide overview",onClick:F[0]||(F[0]=ue=>h(Ne)())},{default:N(()=>[w(ce)]),_:1})),h(ts)?S("v-if",!0):(c(),C(z,{key:2,title:h(He)?"Switch to light mode theme":"Switch to dark mode theme",onClick:F[1]||(F[1]=ue=>h(Le)())},{default:N(()=>[h(He)?(c(),C(St,{key:0})):(c(),C(xt,{key:1}))]),_:1},8,["title"])),w(fe),h(r)?S("v-if",!0):(c(),f(U,{key:3},[!h(a)&&!h(b)&&$.value?(c(),f(U,{key:0},[w(h($)),w(fe)],64)):S("v-if",!0),h(a)?(c(),C(z,{key:1,title:h(he)?"Hide presenter cursor":"Show presenter cursor",onClick:F[2]||(F[2]=ue=>he.value=!h(he))},{default:N(()=>[h(he)?(c(),C(Mt,{key:0})):(c(),C($t,{key:1}))]),_:1},8,["title"])):S("v-if",!0)],64)),(!h(_e).drawings.presenterOnly||h(a))&&!h(r)?(c(),f(U,{key:4},[w(z,{class:"relative",title:h(v)?"Hide drawing toolbar":"Show drawing toolbar",onClick:F[3]||(F[3]=ue=>v.value=!h(v))},{default:N(()=>[w(Ct),h(v)?(c(),f("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:le({background:h(_).color})},null,4)):S("v-if",!0)]),_:1},8,["title"]),w(fe)],64)):S("v-if",!0),h(r)?S("v-if",!0):(c(),f(U,{key:5},[h(a)?(c(),C(Ke,{key:0,to:T.value,class:"slidev-icon-btn",title:"Play Mode"},{default:N(()=>[w(It)]),_:1},8,["to"])):S("v-if",!0),h(l)?(c(),C(Ke,{key:1,to:k.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:N(()=>[w(Et)]),_:1},8,["to"])):S("v-if",!0),S("v-if",!0),h(a)?(c(),C(z,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:h(cs)},{default:N(()=>[w(Lt),Ie(" "+Q(h(ls)),1)]),_:1},8,["onClick"])):S("v-if",!0)],64)),(c(),f(U,{key:6},[h(_e).download?(c(),C(z,{key:0,title:"Download as PDF",onClick:h(lt)},{default:N(()=>[w(Nt)]),_:1},8,["onClick"])):S("v-if",!0)],64)),!h(a)&&h(_e).info&&!h(r)?(c(),C(z,{key:7,title:"Show info",onClick:F[5]||(F[5]=ue=>Ye.value=!h(Ye))},{default:N(()=>[w(At)]),_:1})):S("v-if",!0),!h(a)&&!h(r)?(c(),C(qs,{key:8},{button:N(()=>[w(z,{title:"Adjust settings"},{default:N(()=>[w(Rt)]),_:1})]),menu:N(()=>[w(Qs)]),_:1})):S("v-if",!0),h(r)?S("v-if",!0):(c(),C(fe,{key:9})),L("div",dn,[L("div",hn,[Ie(Q(h(n))+" ",1),L("span",fn,"/ "+Q(h(p)),1)])]),w(h(un))],34)],512)}}}),fi=H(pn,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/NavControls.vue"]]),_n=["onClick"],vn={class:"text-green font-bold"},mn={class:"opacity-50"},gn={key:1,class:"opacity-50"},yn={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},$e=4*16*2,Qe=2*16,kn=X({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const o=Fe(t,"modelValue",e),{currentSlideNo:i,go:r,slides:a}=se();function l(){o.value=!1}function u(M){r(M),l()}function d(M){return M===P.value}const p=Ae.smaller("xs"),_=Ae.smaller("sm"),v=A(()=>p.value?Me.width.value-$e:_.value?(Me.width.value-$e-Qe)/2:300),b=A(()=>Math.floor((Me.width.value-$e)/(v.value+Qe))),y=D("");return Ht("keypress",M=>{if(!W.value){y.value="";return}if(M.key==="Enter"){M.preventDefault(),y.value?(u(+y.value),y.value=""):u(P.value);return}const x=Number.parseInt(M.key.replace(/[^0-9]/g,""));if(Number.isNaN(x)){y.value="";return}if(!y.value&&x===0)return;if(y.value+=String(x),+y.value>=a.value.length){y.value="";return}const E=a.value.findIndex(k=>`/${k.no}`===y.value);E!==-1&&(P.value=E+1),+y.value*10>a.value.length&&(u(+y.value),y.value="")}),st(()=>{P.value=i.value,je.value=b.value}),(M,x)=>{const E=Es;return c(),f(U,null,[w(zt,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:N(()=>[ot(L("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:x[0]||(x[0]=k=>l())},[L("div",{class:"grid gap-y-4 gap-x-8 w-full",style:le(`grid-template-columns: repeat(auto-fit,minmax(${v.value}px,1fr))`)},[(c(!0),f(U,null,ke(h(a),(k,T)=>(c(),f("div",{key:k.no,class:"relative"},[L("div",{class:B(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",d(T+1)||h(P)===T+1?"border-primary":"border-main"]),onClick:m=>u(k.no)},[(c(),C(js,{key:k.no,width:v.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:N(()=>[k!=null&&k.component?(c(),C(ut,{key:0,is:k.component,"clicks-context":h(ss)(k,h(ns)),class:B(h(dt)(k)),route:k,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):S("v-if",!0),w(os,{page:k.no},null,8,["page"])]),_:2},1032,["width"]))],10,_n),L("div",{class:"absolute top-0",style:le(`left: ${v.value+5}px`)},[y.value&&String(T+1).startsWith(y.value)?(c(),f(U,{key:0},[L("span",vn,Q(y.value),1),L("span",mn,Q(String(T+1).slice(y.value.length)),1)],64)):(c(),f("span",gn,Q(T+1),1))],4)]))),128))],4)],512),[[it,h(o)]])]),_:1}),h(o)?(c(),f("div",yn,[w(z,{title:"Close",class:"text-2xl",onClick:l},{default:N(()=>[w(E)]),_:1}),S("v-if",!0)])):S("v-if",!0)],64)}}}),pi=H(kn,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function J(t){return Array.isArray?Array.isArray(t):vt(t)==="[object Array]"}const wn=1/0;function bn(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-wn?"-0":e}function Sn(t){return t==null?"":bn(t)}function Y(t){return typeof t=="string"}function pt(t){return typeof t=="number"}function xn(t){return t===!0||t===!1||Mn(t)&&vt(t)=="[object Boolean]"}function _t(t){return typeof t=="object"}function Mn(t){return _t(t)&&t!==null}function K(t){return t!=null}function Ce(t){return!t.trim().length}function vt(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const $n="Incorrect 'index' type",Cn=t=>`Invalid value for key ${t}`,In=t=>`Pattern length exceeds max of ${t}.`,En=t=>`Missing ${t} property in key`,Ln=t=>`Property 'weight' in key '${t}' must be a positive integer`,Je=Object.prototype.hasOwnProperty;class Nn{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let o=mt(n);this._keys.push(o),this._keyMap[o.id]=o,s+=o.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function mt(t){let e=null,s=null,n=null,o=1,i=null;if(Y(t)||J(t))n=t,e=Ze(t),s=Re(t);else{if(!Je.call(t,"name"))throw new Error(En("name"));const r=t.name;if(n=r,Je.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(Ln(r));e=Ze(r),s=Re(r),i=t.getFn}return{path:e,id:s,weight:o,src:n,getFn:i}}function Ze(t){return J(t)?t:t.split(".")}function Re(t){return J(t)?t.join("."):t}function An(t,e){let s=[],n=!1;const o=(i,r,a)=>{if(K(i))if(!r[a])s.push(i);else{let l=r[a];const u=i[l];if(!K(u))return;if(a===r.length-1&&(Y(u)||pt(u)||xn(u)))s.push(Sn(u));else if(J(u)){n=!0;for(let d=0,p=u.length;d<p;d+=1)o(u[d],r,a+1)}else r.length&&o(u,r,a+1)}};return o(t,Y(e)?e.split("."):e,0),n?s:s[0]}const Rn={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Tn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},On={location:0,threshold:.6,distance:100},Pn={useExtendedSearch:!1,getFn:An,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var g={...Tn,...Rn,...On,...Pn};const Dn=/[^ ]+/g;function Bn(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(o){const i=o.match(Dn).length;if(s.has(i))return s.get(i);const r=1/Math.pow(i,.5*t),a=parseFloat(Math.round(r*n)/n);return s.set(i,a),a},clear(){s.clear()}}}class We{constructor({getFn:e=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){this.norm=Bn(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Y(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();Y(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!K(e)||Ce(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((o,i)=>{let r=o.getFn?o.getFn(e):this.getFn(e,o.path);if(K(r)){if(J(r)){let a=[];const l=[{nestedArrIndex:-1,value:r}];for(;l.length;){const{nestedArrIndex:u,value:d}=l.pop();if(K(d))if(Y(d)&&!Ce(d)){let p={v:d,i:u,n:this.norm.get(d)};a.push(p)}else J(d)&&d.forEach((p,_)=>{l.push({nestedArrIndex:_,value:p})})}n.$[i]=a}else if(Y(r)&&!Ce(r)){let a={v:r,n:this.norm.get(r)};n.$[i]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function gt(t,e,{getFn:s=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){const o=new We({getFn:s,fieldNormWeight:n});return o.setKeys(t.map(mt)),o.setSources(e),o.create(),o}function Fn(t,{getFn:e=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){const{keys:n,records:o}=t,i=new We({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(o),i}function pe(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:o=g.distance,ignoreLocation:i=g.ignoreLocation}={}){const r=e/t.length;if(i)return r;const a=Math.abs(n-s);return o?r+a/o:a?1:r}function Vn(t=[],e=g.minMatchCharLength){let s=[],n=-1,o=-1,i=0;for(let r=t.length;i<r;i+=1){let a=t[i];a&&n===-1?n=i:!a&&n!==-1&&(o=i-1,o-n+1>=e&&s.push([n,o]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const te=32;function jn(t,e,s,{location:n=g.location,distance:o=g.distance,threshold:i=g.threshold,findAllMatches:r=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,includeMatches:l=g.includeMatches,ignoreLocation:u=g.ignoreLocation}={}){if(e.length>te)throw new Error(In(te));const d=e.length,p=t.length,_=Math.max(0,Math.min(n,p));let v=i,b=_;const y=a>1||l,M=y?Array(p):[];let x;for(;(x=t.indexOf(e,b))>-1;){let I=pe(e,{currentLocation:x,expectedLocation:_,distance:o,ignoreLocation:u});if(v=Math.min(I,v),b=x+d,y){let $=0;for(;$<d;)M[x+$]=1,$+=1}}b=-1;let E=[],k=1,T=d+p;const m=1<<d-1;for(let I=0;I<d;I+=1){let $=0,V=T;for(;$<V;)pe(e,{errors:I,currentLocation:_+V,expectedLocation:_,distance:o,ignoreLocation:u})<=v?$=V:T=V,V=Math.floor((T-$)/2+$);T=V;let ie=Math.max(1,_-V+1),F=r?p:Math.min(_+V,p)+d,Z=Array(F+2);Z[F+1]=(1<<I)-1;for(let j=F;j>=ie;j-=1){let ne=j-1,ce=s[t.charAt(ne)];if(y&&(M[ne]=+!!ce),Z[j]=(Z[j+1]<<1|1)&ce,I&&(Z[j]|=(E[j+1]|E[j])<<1|1|E[j+1]),Z[j]&m&&(k=pe(e,{errors:I,currentLocation:ne,expectedLocation:_,distance:o,ignoreLocation:u}),k<=v)){if(v=k,b=ne,b<=_)break;ie=Math.max(1,2*_-b)}}if(pe(e,{errors:I+1,currentLocation:_,expectedLocation:_,distance:o,ignoreLocation:u})>v)break;E=Z}const O={isMatch:b>=0,score:Math.max(.001,k)};if(y){const I=Vn(M,a);I.length?l&&(O.indices=I):O.isMatch=!1}return O}function Wn(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const o=t.charAt(s);e[o]=(e[o]||0)|1<<n-s-1}return e}class yt{constructor(e,{location:s=g.location,threshold:n=g.threshold,distance:o=g.distance,includeMatches:i=g.includeMatches,findAllMatches:r=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:u=g.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:u},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(_,v)=>{this.chunks.push({pattern:_,alphabet:Wn(_),startIndex:v})},p=this.pattern.length;if(p>te){let _=0;const v=p%te,b=p-v;for(;_<b;)d(this.pattern.substr(_,te),_),_+=te;if(v){const y=p-te;d(this.pattern.substr(y),y)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let b={isMatch:!0,score:0};return n&&(b.indices=[[0,e.length-1]]),b}const{location:o,distance:i,threshold:r,findAllMatches:a,minMatchCharLength:l,ignoreLocation:u}=this.options;let d=[],p=0,_=!1;this.chunks.forEach(({pattern:b,alphabet:y,startIndex:M})=>{const{isMatch:x,score:E,indices:k}=jn(e,b,y,{location:o+M,distance:i,threshold:r,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:u});x&&(_=!0),p+=E,x&&k&&(d=[...d,...k])});let v={isMatch:_,score:_?p/this.chunks.length:1};return _&&n&&(v.indices=d),v}}class ee{constructor(e){this.pattern=e}static isMultiMatch(e){return qe(e,this.multiRegex)}static isSingleMatch(e){return qe(e,this.singleRegex)}search(){}}function qe(t,e){const s=t.match(e);return s?s[1]:null}class Gn extends ee{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Kn extends ee{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Un extends ee{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Hn extends ee{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class zn extends ee{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Xn extends ee{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class kt extends ee{constructor(e,{location:s=g.location,threshold:n=g.threshold,distance:o=g.distance,includeMatches:i=g.includeMatches,findAllMatches:r=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:u=g.ignoreLocation}={}){super(e),this._bitapSearch=new yt(e,{location:s,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class wt extends ee{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const o=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,o.push([n,s-1]);const r=!!o.length;return{isMatch:r,score:r?0:1,indices:o}}}const Te=[Gn,wt,Un,Hn,Xn,zn,Kn,kt],et=Te.length,Yn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Qn="|";function Jn(t,e={}){return t.split(Qn).map(s=>{let n=s.trim().split(Yn).filter(i=>i&&!!i.trim()),o=[];for(let i=0,r=n.length;i<r;i+=1){const a=n[i];let l=!1,u=-1;for(;!l&&++u<et;){const d=Te[u];let p=d.isMultiMatch(a);p&&(o.push(new d(p,e)),l=!0)}if(!l)for(u=-1;++u<et;){const d=Te[u];let p=d.isSingleMatch(a);if(p){o.push(new d(p,e));break}}}return o})}const Zn=new Set([kt.type,wt.type]);class qn{constructor(e,{isCaseSensitive:s=g.isCaseSensitive,includeMatches:n=g.includeMatches,minMatchCharLength:o=g.minMatchCharLength,ignoreLocation:i=g.ignoreLocation,findAllMatches:r=g.findAllMatches,location:a=g.location,threshold:l=g.threshold,distance:u=g.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:o,findAllMatches:r,ignoreLocation:i,location:a,threshold:l,distance:u},this.pattern=s?e:e.toLowerCase(),this.query=Jn(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let i=0,r=[],a=0;for(let l=0,u=s.length;l<u;l+=1){const d=s[l];r.length=0,i=0;for(let p=0,_=d.length;p<_;p+=1){const v=d[p],{isMatch:b,indices:y,score:M}=v.search(e);if(b){if(i+=1,a+=M,n){const x=v.constructor.type;Zn.has(x)?r=[...r,...y]:r.push(y)}}else{a=0,i=0,r.length=0;break}}if(i){let p={isMatch:!0,score:a/i};return n&&(p.indices=r),p}}return{isMatch:!1,score:1}}}const Oe=[];function eo(...t){Oe.push(...t)}function Pe(t,e){for(let s=0,n=Oe.length;s<n;s+=1){let o=Oe[s];if(o.condition(t,e))return new o(t,e)}return new yt(t,e)}const ye={AND:"$and",OR:"$or"},De={PATH:"$path",PATTERN:"$val"},Be=t=>!!(t[ye.AND]||t[ye.OR]),to=t=>!!t[De.PATH],so=t=>!J(t)&&_t(t)&&!Be(t),tt=t=>({[ye.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function bt(t,e,{auto:s=!0}={}){const n=o=>{let i=Object.keys(o);const r=to(o);if(!r&&i.length>1&&!Be(o))return n(tt(o));if(so(o)){const l=r?o[De.PATH]:i[0],u=r?o[De.PATTERN]:o[l];if(!Y(u))throw new Error(Cn(l));const d={keyId:Re(l),pattern:u};return s&&(d.searcher=Pe(u,e)),d}let a={children:[],operator:i[0]};return i.forEach(l=>{const u=o[l];J(u)&&u.forEach(d=>{a.children.push(n(d))})}),a};return Be(t)||(t=tt(t)),n(t)}function no(t,{ignoreFieldNorm:e=g.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:o,norm:i,score:r})=>{const a=o?o.weight:null;n*=Math.pow(r===0&&a?Number.EPSILON:r,(a||1)*(e?1:i))}),s.score=n})}function oo(t,e){const s=t.matches;e.matches=[],K(s)&&s.forEach(n=>{if(!K(n.indices)||!n.indices.length)return;const{indices:o,value:i}=n;let r={indices:o,value:i};n.key&&(r.key=n.key.src),n.idx>-1&&(r.refIndex=n.idx),e.matches.push(r)})}function io(t,e){e.score=t.score}function ro(t,e,{includeMatches:s=g.includeMatches,includeScore:n=g.includeScore}={}){const o=[];return s&&o.push(oo),n&&o.push(io),t.map(i=>{const{idx:r}=i,a={item:e[r],refIndex:r};return o.length&&o.forEach(l=>{l(i,a)}),a})}class oe{constructor(e,s={},n){this.options={...g,...s},this.options.useExtendedSearch,this._keyStore=new Nn(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof We))throw new Error($n);this._myIndex=s||gt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){K(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,o=this._docs.length;n<o;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,o-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:i,sortFn:r,ignoreFieldNorm:a}=this.options;let l=Y(e)?Y(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return no(l,{ignoreFieldNorm:a}),i&&l.sort(r),pt(s)&&s>-1&&(l=l.slice(0,s)),ro(l,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const s=Pe(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:i,i:r,n:a})=>{if(!K(i))return;const{isMatch:l,score:u,indices:d}=s.searchIn(i);l&&o.push({item:i,idx:r,matches:[{score:u,value:i,norm:a,indices:d}]})}),o}_searchLogical(e){const s=bt(e,this.options),n=(a,l,u)=>{if(!a.children){const{keyId:p,searcher:_}=a,v=this._findMatches({key:this._keyStore.get(p),value:this._myIndex.getValueForItemAtKeyId(l,p),searcher:_});return v&&v.length?[{idx:u,item:l,matches:v}]:[]}const d=[];for(let p=0,_=a.children.length;p<_;p+=1){const v=a.children[p],b=n(v,l,u);if(b.length)d.push(...b);else if(a.operator===ye.AND)return[]}return d},o=this._myIndex.records,i={},r=[];return o.forEach(({$:a,i:l})=>{if(K(a)){let u=n(s,a,l);u.length&&(i[l]||(i[l]={idx:l,item:a,matches:[]},r.push(i[l])),u.forEach(({matches:d})=>{i[l].matches.push(...d)}))}}),r}_searchObjectList(e){const s=Pe(e,this.options),{keys:n,records:o}=this._myIndex,i=[];return o.forEach(({$:r,i:a})=>{if(!K(r))return;let l=[];n.forEach((u,d)=>{l.push(...this._findMatches({key:u,value:r[d],searcher:s}))}),l.length&&i.push({idx:a,item:r,matches:l})}),i}_findMatches({key:e,value:s,searcher:n}){if(!K(s))return[];let o=[];if(J(s))s.forEach(({v:i,i:r,n:a})=>{if(!K(i))return;const{isMatch:l,score:u,indices:d}=n.searchIn(i);l&&o.push({score:u,key:e,value:i,idx:r,norm:a,indices:d})});else{const{v:i,n:r}=s,{isMatch:a,score:l,indices:u}=n.searchIn(i);a&&o.push({score:l,key:e,value:i,norm:r,indices:u})}return o}}oe.version="7.0.0";oe.createIndex=gt;oe.parseIndex=Fn;oe.config=g;oe.parseQuery=bt;eo(qn);const ao={key:0},lo=L("strong",null,"Computer Programming 1 Lab",-1),co=[lo],uo={key:1},ho={key:2},fo={key:3},po={key:4},_o={key:5},vo={key:6},mo={key:7},go={key:8},yo={key:9},ko={key:10},wo={key:11},bo={key:12},So={key:13},xo={key:14},Mo={key:15},$o={key:16},Co={key:17},Io={key:18},Eo={key:19},Lo={key:20},No={key:21},Ao={key:22},Ro={key:23},To={key:24},Oo={key:25},Po={key:26},Do={key:27},Bo={key:28},Fo={key:29},Vo={key:30},jo={key:31},Wo={key:32},Go={key:33},Ko={key:34},Uo={key:35},Ho=X({__name:"title-renderer",props:{no:{type:[Number,String],required:!0}},setup(t){return(e,s)=>(c(),f("div",null,[+e.no==1?(c(),f("p",ao,[...co])):+e.no==2?(c(),f("p",uo,"Outline")):+e.no==3?(c(),f("p",ho,"TA Hours")):+e.no==4?(c(),f("p",fo,"WSL")):+e.no==5?(c(),f("p",po,"WSL Installation")):+e.no==6?(c(),f("p",_o,"WSL Installation")):+e.no==7?(c(),f("p",vo,"WSL Installation")):+e.no==8?(c(),f("p",mo,"WSL Installation")):+e.no==9?(c(),f("p",go,"WSL Installation")):+e.no==10?(c(),f("p",yo,"WSL Usage")):+e.no==11?(c(),f("p",ko,"Basic UNIX Command")):+e.no==12?(c(),f("p",wo,"Basic UNIX Command")):+e.no==13?(c(),f("p",bo,"Basic UNIX Command")):+e.no==14?(c(),f("p",So,"Basic UNIX Command")):+e.no==15?(c(),f("p",xo,"Basic UNIX Command")):+e.no==16?(c(),f("p",Mo,"Basic UNIX Command")):+e.no==17?(c(),f("p",$o,"Basic UNIX Command - Others")):+e.no==18?(c(),f("p",Co,"Basic Vim")):+e.no==19?(c(),f("p",Io,"Basic Vim")):+e.no==20?(c(),f("p",Eo,"Basic Vim")):+e.no==21?(c(),f("p",Lo,"Basic Vim")):+e.no==22?(c(),f("p",No,"Basic Vim")):+e.no==23?(c(),f("p",Ao,"First step into C")):+e.no==24?(c(),f("p",Ro,"Compile")):+e.no==25?(c(),f("p",To,"How to Lock Your Directory?")):+e.no==26?(c(),f("p",Oo,"Unix File Permissions")):+e.no==27?(c(),f("p",Po,"Unix File Permissions")):+e.no==28?(c(),f("p",Do,"Unix File Permissions")):+e.no==29?(c(),f("p",Bo,"Data Types")):+e.no==30?(c(),f("p",Fo,"Operators")):+e.no==31?(c(),f("p",Vo,"Operators")):+e.no==32?(c(),f("p",jo,"Operators")):+e.no==33?(c(),f("p",Wo,"ex02")):+e.no==34?(c(),f("p",Go,"ex02")):+e.no==35?(c(),f("p",Ko,"ex02")):+e.no==36?(c(),f("p",Uo,"Thanks for listening")):S("v-if",!0)]))}}),zo=H(Ho,[["__file","/@slidev/title-renderer.md"]]),Xo={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Yo=["value","disabled"],Qo=["border","onClick"],Jo={"w-4":"","text-right":"",op50:"","text-sm":""},Zo=X({__name:"Goto",setup(t){const e=D(),s=D(),n=D(),o=D(),i=D(""),r=D(0),{go:a,slides:l}=se();function u(m){return m!=null}const d=A(()=>new oe(l.value.map(m=>{var O;return(O=m.meta)==null?void 0:O.slide}).filter(u),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),p=A(()=>i.value.startsWith("/")?i.value.substring(1):i.value),_=A(()=>d.value.search(p.value).map(m=>m.item)),v=A(()=>!!_.value.length);function b(){if(v.value){const m=_.value.at(r.value||0);m&&a(m.no)}y()}function y(){i.value="",q.value=!1}function M(m){m.preventDefault(),r.value++,r.value>=_.value.length&&(r.value=0),E()}function x(m){m.preventDefault(),r.value--,r.value<=-2&&(r.value=_.value.length-1),E()}function E(){var O;const m=(O=o.value)==null?void 0:O[r.value];m&&n.value&&(m.offsetTop+m.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:m.offsetTop+m.offsetHeight-n.value.offsetHeight+1}):m.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:m.offsetTop}))}function k(m){r.value=0,i.value=m.target.value}function T(m){a(m),y()}return ge(q,async m=>{var O;m?(i.value="",r.value=0,setTimeout(()=>{var I;return(I=s.value)==null?void 0:I.focus()},0)):(O=s.value)==null||O.blur()}),ge(re,()=>{var m;(m=e.value)!=null&&m.contains(re.value)||y()}),(m,O)=>(c(),f("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:B(["fixed right-5 transition-all",h(q)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[L("div",Xo,[L("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:i.value,type:"text",disabled:!h(q),class:B(["outline-none bg-transparent",{"text-red-400":!v.value&&i.value}]),placeholder:"Goto...",onKeydown:[de(b,["enter"]),de(y,["escape"]),de(M,["down"]),de(x,["up"])],onInput:k},null,42,Yo)]),_.value.length>0?(c(),f("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(c(!0),f(U,null,ke(_.value,(I,$)=>(c(),f("li",{ref_for:!0,ref_key:"items",ref:o,key:I.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:$===0?"":"t main",class:B(r.value===$?"bg-active op100":"op80"),onClick:Xt(V=>T(I.no),["stop","prevent"])},[L("div",Jo,Q(I.no),1),w(h(zo),{no:I.no},null,8,["no"])],10,Qo))),128))],512)):S("v-if",!0)],2))}}),_i=H(Zo,[["__scopeId","data-v-6ce0f09d"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Goto.vue"]]);function qo(){const t=Yt(),e=D(!1);let s,n;const o=typeof document<"u"&&"startViewTransition"in document;return t.beforeResolve((i,r)=>{var y,M,x,E;const a=(y=ze(r.params.no))==null?void 0:y.meta,l=(M=ze(i.params.no))==null?void 0:M.meta,u=(x=a==null?void 0:a.slide)==null?void 0:x.no,d=(E=l==null?void 0:l.slide)==null?void 0:E.no;if(!(u!==void 0&&d!==void 0&&((a==null?void 0:a.transition)==="view-transition"&&u<d||(l==null?void 0:l.transition)==="view-transition"&&d<u))){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const p=new Promise((k,T)=>{s=k,n=T});let _;const v=new Promise(k=>_=k);return document.startViewTransition(()=>(_(),p)).finished.then(()=>{n=void 0,s=void 0}),v}),o&&t.afterEach(()=>{s==null||s(),n==null||n()}),e}const ei={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},ti=X({__name:"PresenterMouse",setup(t){return(e,s)=>{const n=ht;return h(Se).cursor?(c(),f("div",ei,[w(n,{class:"absolute",style:le({left:`${h(Se).cursor.x}%`,top:`${h(Se).cursor.y}%`})},null,8,["style"])])):S("v-if",!0)}}}),si=H(ti,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),ni=X({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(t){const{currentSlideRoute:e,currentTransition:s,getPrimaryClicks:n,isPresenter:o,nextRoute:i,slides:r}=se();ge(e,()=>{var p,_;(p=e.value)!=null&&p.meta&&e.value.meta.preload!==!1&&(e.value.meta.__preloaded=!0),(_=i.value)!=null&&_.meta&&i.value.meta.preload!==!1&&(i.value.meta.__preloaded=!0)},{immediate:!0});const a=qo(),l=Ee();rt(()=>import("./DrawingLayer-D_yf_uTW.js"),__vite__mapDeps([12,2,10,6,3,4,7,5,8,9])).then(p=>l.value=p.default);const u=A(()=>r.value.filter(p=>{var _;return((_=p.meta)==null?void 0:_.__preloaded)||p===e.value}));function d(){Xe.value=!0,Ns()}return(p,_)=>(c(),f(U,null,[S(" Global Bottom "),w(h(us)),S(" Slides "),(c(),C(nt(h(a)?"div":Jt),Qt(h(Xe)?{}:h(s),{id:"slideshow",tag:"div",onAfterLeave:d}),{default:N(()=>[(c(!0),f(U,null,ke(u.value,v=>ot((c(),f("div",{key:v.no},[w(ut,{is:v.component,"clicks-context":h(n)(v),class:B([h(dt)(v),"overflow-hidden"]),route:v,"render-context":p.renderContext},null,8,["is","clicks-context","class","route","render-context"])])),[[it,v===h(e)]])),128))]),_:1},16)),S(" Global Top "),w(h(ds)),l.value?(c(),C(h(l),{key:0})):S("v-if",!0),h(o)?S("v-if",!0):(c(),C(si,{key:1}))],64))}}),vi=H(ni,[["__scopeId","data-v-9156e924"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{_i as G,z as I,fi as N,pi as Q,js as S,fe as V,vi as a,hi as r,di as u};
