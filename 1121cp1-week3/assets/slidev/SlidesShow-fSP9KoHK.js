function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-DP64oplk.js","assets/modules/unplugin-icons-Dh6VzJbx.js","assets/modules/vue-C1svXA8A.js","assets/modules/shiki-es5OhojV.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-CM4zUK_S.js","assets/index-kSOMcWZa.js","assets/index-CtxEPhKz.css","assets/slidev/bottom-ksCowomy.js","assets/bottom-BjZnNKJr.css","assets/slidev/context-BIcHlHYe.js","assets/DrawingControls-C5T1oZL5.css","assets/slidev/DrawingLayer-Dbob3Uhn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as D,a9 as Tt,aa as Pt,y as A,ab as N,ac as G,U as Ot,D as ge,ad as Dt,d as Y,ae as Ft,C as st,_ as jt,Y as Vt,b as _,e as L,f as ae,h as le,i as F,o as u,a7 as je,x as X,F as z,Z as ke,A as h,l as w,$ as Ee,a6 as Bt,af as Wt,c as C,g as S,a8 as Gt,k as R,ag as nt,v as Kt,M as Ie,r as zt,ah as Ht,ai as Ut,a1 as ot,aj as it,j as de,ak as Yt,N as Qt,m as Xt,al as Jt}from"../modules/vue-C1svXA8A.js";import{e as se,l as Zt,t as Le,f as we,a as be,s as qt,c as _e,g as es,b as H,m as ze,_ as rt,n as ts,o as He,d as ss,C as ns,q as Ue,k as Se,r as Ye}from"../index-kSOMcWZa.js";import{u as Ve,D as os}from"./DrawingPreview-CM4zUK_S.js";import{b as W,t as Re,m as q,n as at,o as lt,q as is,r as rs,u as as,v as ct,k as xe,x as Ae,s as he,p as ls,y as cs,f as Qe,z as re,w as Me,S as ut,g as dt,G as us,a as ds}from"./bottom-ksCowomy.js";import{e as hs,f as fs,g as ps,h as _s,i as vs,j as ms,k as gs,l as ys,m as ht,n as ks,o as ws,p as bs,q as Ss,r as xs,s as Ms,t as $s,u as Cs,v as Es,w as Is}from"../modules/unplugin-icons-Dh6VzJbx.js";import{u as Ls}from"./context-BIcHlHYe.js";import{t as Rs}from"../modules/shiki-es5OhojV.js";function Zo(t){const{next:e,nextSlide:s,prev:n,prevSlide:o}=se(),{isDrawing:i}=Ve(),r=D(0),{direction:a,distanceX:l,distanceY:c}=Tt(t,{pointerTypes:["touch"],onSwipeStart(){i.value||(r.value=Pt())},onSwipeEnd(){if(!r.value||i.value)return;const d=Math.abs(l.value),f=Math.abs(c.value);d/window.innerWidth>.3||d>75?a.value==="left"?e():n():(f/window.innerHeight>.4||f>200)&&(a.value==="down"?o():s())}})}const ve=D(1),me=A(()=>Zt.value.length),O=D(0),Be=D(0);function As(){O.value>ve.value&&(O.value-=1)}function Ns(){O.value<me.value&&(O.value+=1)}function Ts(){if(O.value>ve.value){let t=O.value-Be.value;t<ve.value&&(t=ve.value),O.value=t}}function Ps(){if(O.value<me.value){let t=O.value+Be.value;t>me.value&&(t=me.value),O.value=t}}const Os=[];function Ds(){const{go:t,goFirst:e,goLast:s,next:n,nextSlide:o,prev:i,prevSlide:r}=se(),{drawingEnabled:a}=Ve(),{escape:l,space:c,shift:d,left:f,right:p,up:v,down:b,enter:y,d:M,g:x,o:I,"`":k}=at,T={next:n,prev:i,nextSlide:o,prevSlide:r,go:t,goFirst:e,goLast:s,downloadPDF:lt,toggleDark:Le,toggleOverview:Re,toggleDrawing:()=>a.value=!a.value,escapeOverview:()=>W.value=!1,showGotoDialog:()=>q.value=!q.value};let m=[{name:"next_space",key:N(c,G(d)),fn:n,autoRepeat:!0},{name:"prev_space",key:N(c,d),fn:i,autoRepeat:!0},{name:"next_right",key:N(p,G(d),G(W)),fn:n,autoRepeat:!0},{name:"prev_left",key:N(f,G(d),G(W)),fn:i,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:n,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:i,autoRepeat:!0},{name:"next_down",key:N(b,G(W)),fn:o,autoRepeat:!0},{name:"prev_up",key:N(v,G(W)),fn:()=>r(!1),autoRepeat:!0},{name:"next_shift",key:N(p,d),fn:o,autoRepeat:!0},{name:"prev_shift",key:N(f,d),fn:()=>r(!1),autoRepeat:!0},{name:"toggle_dark",key:N(M,G(a)),fn:Le},{name:"toggle_overview",key:N(Ot(I,k),G(a)),fn:Re},{name:"hide_overview",key:N(l,G(a)),fn:()=>W.value=!1},{name:"goto",key:N(x,G(a)),fn:()=>q.value=!q.value},{name:"next_overview",key:N(p,W),fn:Ns},{name:"prev_overview",key:N(f,W),fn:As},{name:"up_overview",key:N(v,W),fn:Ts},{name:"down_overview",key:N(b,W),fn:Ps},{name:"goto_from_overview",key:N(y,W),fn:()=>{t(O.value),W.value=!1}}];const P=new Set(m.map($=>$.name));for(const $ of Os){const V=$(T,m);m=m.concat(V)}if(m.filter($=>$.name&&P.has($.name)).length===0){const $=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert($),console.warn($)}return m}const ft=N(G(as),G(rs),is);function Fs(t,e,s=!1){typeof t=="string"&&(t=at[t]);const n=N(t,ft);let o=0,i;const r=()=>{if(clearTimeout(i),!n.value){o=0;return}s&&(i=setTimeout(r,Math.max(1e3-o*250,150)),o++),e()};return ge(n,r,{flush:"sync"})}function js(t,e){return Dt(t,s=>{ft.value&&(s.repeat||e())})}function qo(){const t=Ds();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Fs(s.key,s.fn,s.autoRepeat)}),js("f",()=>ct.toggle())}const Vs=Y({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{clicksDirection:s,isPrintMode:n}=se(),o=D(),i=Ft(o),r=A(()=>e.width?e.width:i.width.value),a=A(()=>e.width?e.width/we.value:i.height.value);e.width&&st(()=>{o.value&&(o.value.style.width=`${r.value}px`,o.value.style.height=`${a.value}px`)});const l=A(()=>r.value/a.value),c=A(()=>e.scale&&!n.value?e.scale:l.value<we.value?r.value/be.value:a.value*we.value/be.value),d=A(()=>({height:`${qt.value}px`,width:`${be.value}px`,transform:`translate(-50%, -50%) scale(${c.value})`,"--slidev-slide-scale":c.value})),f=A(()=>({"select-none":!_e.selectable,"slidev-nav-go-forward":s.value>0,"slidev-nav-go-backward":s.value<0}));return e.isMain&&jt(A(()=>`
    :root {
      --slidev-slide-scale: ${c.value};
    }
  `)),Vt(es,c),(p,v)=>(u(),_("div",{id:"slide-container",ref_key:"root",ref:o,class:F(["slidev-slides-container",f.value])},[L("div",{id:"slide-content",class:"slidev-slide-content",style:le(d.value)},[ae(p.$slots,"default")],4),ae(p.$slots,"controls")],2))}}),Bs=H(Vs,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Ws={class:"select-list"},Gs={class:"title"},Ks={class:"items"},zs=["onClick"],Hs=Y({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const o=je(t,"modelValue",e,{passive:!0});return(i,r)=>{const a=hs;return u(),_("div",Ws,[L("div",Gs,X(t.title),1),L("div",Ks,[(u(!0),_(z,null,ke(t.items,l=>(u(),_("div",{key:l.value,class:F(["item",{active:h(o)===l.value}]),onClick:()=>{var c;o.value=l.value,(c=l.onClick)==null||c.call(l)}},[w(a,{class:F(["text-green-500",{"opacity-0":h(o)!==l.value}])},null,8,["class"]),Ee(" "+X(l.display||l.value),1)],10,zs))),128))])])}}}),Us=H(Hs,[["__scopeId","data-v-07575b19"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SelectList.vue"]]),Ys={class:"text-sm"},Qs=Y({__name:"Settings",setup(t){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,n)=>(u(),_("div",Ys,[w(Us,{modelValue:h(xe),"onUpdate:modelValue":n[0]||(n[0]=o=>Bt(xe)?xe.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Xs=H(Qs,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Settings.vue"]]),Js={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Zs=Y({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const o=je(t,"modelValue",e,{passive:!0}),i=D();return Wt(i,()=>{o.value=!1}),(r,a)=>(u(),_("div",{ref_key:"el",ref:i,class:"flex relative"},[L("button",{class:F({disabled:t.disabled}),onClick:a[0]||(a[0]=l=>o.value=!h(o))},[ae(r.$slots,"button",{class:F({disabled:t.disabled})})],2),(u(),C(Gt,null,[h(o)?(u(),_("div",Js,[ae(r.$slots,"menu")])):S("v-if",!0)],1024))],512))}}),qs=H(Zs,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/MenuButton.vue"]]),en={},tn={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function sn(t,e){return u(),_("div",tn)}const fe=H(en,[["render",sn],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),nn={class:"sr-only"},on=Y({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(t){return(e,s)=>(u(),C(nt(e.as||"button"),{class:"slidev-icon-btn",title:e.title},{default:R(()=>[L("span",nn,X(e.title),1),ae(e.$slots,"default",{},()=>[L("div",{class:F(e.icon)},null,2)])]),_:3},8,["title"]))}}),U=H(on,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/IconButton.vue"]]),rn=L("div",{class:"w-1px opacity-10 bg-current m-1 lg:m-2"},null,-1),an={class:"slidev-icon-btn mr-2",title:"Home",href:"https://slidev.andyjjrt.cc"},ln={__name:"custom-nav-controls",setup(t){return Ls(),(e,s)=>{const n=fs;return u(),_(z,null,[rn,L("a",an,[w(n)])],64)}}},cn=H(ln,[["__file","/home/runner/work/slides/slides/addon/custom-nav-controls.vue"]]),un={render(){return[Kt(cn)]}},dn={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},hn={class:"my-auto"},fn={class:"opacity-50"},pn=Y({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t,{currentRoute:s,currentSlideNo:n,hasNext:o,hasPrev:i,isEmbedded:r,isPresenter:a,isPresenterAvailable:l,next:c,prev:d,total:f}=se(),{brush:p,drawingEnabled:v}=Ve(),b=Ae.smaller("md"),{isFullscreen:y,toggle:M}=ct,x=A(()=>s.value.query.password),I=A(()=>x.value?`?password=${x.value}`:""),k=A(()=>`${ze(n.value,!0)}${I.value}`),T=A(()=>`${ze(n.value,!1)}${I.value}`),m=D();function P(){m.value&&re.value&&m.value.contains(re.value)&&re.value.blur()}const E=A(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),$=Ie(),V=Ie();return rt(()=>import("./DrawingControls-DP64oplk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(ie=>V.value=ie.default),(ie,j)=>{const Z=ps,Ge=_s,B=vs,ne=ms,ce=Ss,St=gs,xt=ys,Mt=ht,$t=ks,Ct=ws,Et=xs,Ke=zt("RouterLink"),It=Ms,Lt=$s,Rt=Cs,At=Es,Nt=bs;return u(),_("nav",{ref_key:"root",ref:m,class:"flex flex-col"},[L("div",{class:F(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E.value]),onMouseleave:P},[h(r)?S("v-if",!0):(u(),C(U,{key:0,title:h(y)?"Close fullscreen":"Enter fullscreen",onClick:h(M)},{default:R(()=>[h(y)?(u(),C(Z,{key:0})):(u(),C(Ge,{key:1}))]),_:1},8,["title","onClick"])),w(U,{class:F({disabled:!h(i)}),title:"Go to previous slide",onClick:h(d)},{default:R(()=>[w(B)]),_:1},8,["class","onClick"]),w(U,{class:F({disabled:!h(o)}),title:"Go to next slide",onClick:h(c)},{default:R(()=>[w(ne)]),_:1},8,["class","onClick"]),h(r)?S("v-if",!0):(u(),C(U,{key:1,title:"Show slide overview",onClick:j[0]||(j[0]=ue=>h(Re)())},{default:R(()=>[w(ce)]),_:1})),h(ts)?S("v-if",!0):(u(),C(U,{key:2,title:h(He)?"Switch to light mode theme":"Switch to dark mode theme",onClick:j[1]||(j[1]=ue=>h(Le)())},{default:R(()=>[h(He)?(u(),C(St,{key:0})):(u(),C(xt,{key:1}))]),_:1},8,["title"])),w(fe),h(r)?S("v-if",!0):(u(),_(z,{key:3},[!h(a)&&!h(b)&&$.value?(u(),_(z,{key:0},[w(h($)),w(fe)],64)):S("v-if",!0),h(a)?(u(),C(U,{key:1,title:h(he)?"Hide presenter cursor":"Show presenter cursor",onClick:j[2]||(j[2]=ue=>he.value=!h(he))},{default:R(()=>[h(he)?(u(),C(Mt,{key:0})):(u(),C($t,{key:1}))]),_:1},8,["title"])):S("v-if",!0)],64)),(!h(_e).drawings.presenterOnly||h(a))&&!h(r)?(u(),_(z,{key:4},[w(U,{class:"relative",title:h(v)?"Hide drawing toolbar":"Show drawing toolbar",onClick:j[3]||(j[3]=ue=>v.value=!h(v))},{default:R(()=>[w(Ct),h(v)?(u(),_("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:le({background:h(p).color})},null,4)):S("v-if",!0)]),_:1},8,["title"]),w(fe)],64)):S("v-if",!0),h(r)?S("v-if",!0):(u(),_(z,{key:5},[h(a)?(u(),C(Ke,{key:0,to:T.value,class:"slidev-icon-btn",title:"Play Mode"},{default:R(()=>[w(Et)]),_:1},8,["to"])):S("v-if",!0),h(l)?(u(),C(Ke,{key:1,to:k.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:R(()=>[w(It)]),_:1},8,["to"])):S("v-if",!0),S("v-if",!0),h(a)?(u(),C(U,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:h(cs)},{default:R(()=>[w(Lt),Ee(" "+X(h(ls)),1)]),_:1},8,["onClick"])):S("v-if",!0)],64)),(u(),_(z,{key:6},[h(_e).download?(u(),C(U,{key:0,title:"Download as PDF",onClick:h(lt)},{default:R(()=>[w(Rt)]),_:1},8,["onClick"])):S("v-if",!0)],64)),!h(a)&&h(_e).info&&!h(r)?(u(),C(U,{key:7,title:"Show info",onClick:j[5]||(j[5]=ue=>Qe.value=!h(Qe))},{default:R(()=>[w(At)]),_:1})):S("v-if",!0),!h(a)&&!h(r)?(u(),C(qs,{key:8},{button:R(()=>[w(U,{title:"Adjust settings"},{default:R(()=>[w(Nt)]),_:1})]),menu:R(()=>[w(Xs)]),_:1})):S("v-if",!0),h(r)?S("v-if",!0):(u(),C(fe,{key:9})),L("div",dn,[L("div",hn,[Ee(X(h(n))+" ",1),L("span",fn,"/ "+X(h(f)),1)])]),w(h(un))],34)],512)}}}),ei=H(pn,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/NavControls.vue"]]),_n=["onClick"],vn={class:"text-green font-bold"},mn={class:"opacity-50"},gn={key:1,class:"opacity-50"},yn={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},$e=4*16*2,Xe=2*16,kn=Y({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const o=je(t,"modelValue",e),{currentSlideNo:i,go:r,slides:a}=se();function l(){o.value=!1}function c(M){r(M),l()}function d(M){return M===O.value}const f=Ae.smaller("xs"),p=Ae.smaller("sm"),v=A(()=>f.value?Me.width.value-$e:p.value?(Me.width.value-$e-Xe)/2:300),b=A(()=>Math.floor((Me.width.value-$e)/(v.value+Xe))),y=D("");return Ht("keypress",M=>{if(!W.value){y.value="";return}if(M.key==="Enter"){M.preventDefault(),y.value?(c(+y.value),y.value=""):c(O.value);return}const x=Number.parseInt(M.key.replace(/[^0-9]/g,""));if(Number.isNaN(x)){y.value="";return}if(!y.value&&x===0)return;if(y.value+=String(x),+y.value>=a.value.length){y.value="";return}const I=a.value.findIndex(k=>`/${k.no}`===y.value);I!==-1&&(O.value=I+1),+y.value*10>a.value.length&&(c(+y.value),y.value="")}),st(()=>{O.value=i.value,Be.value=b.value}),(M,x)=>{const I=Is;return u(),_(z,null,[w(Ut,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:R(()=>[ot(L("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:x[0]||(x[0]=k=>l())},[L("div",{class:"grid gap-y-4 gap-x-8 w-full",style:le(`grid-template-columns: repeat(auto-fit,minmax(${v.value}px,1fr))`)},[(u(!0),_(z,null,ke(h(a),(k,T)=>(u(),_("div",{key:k.no,class:"relative"},[L("div",{class:F(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",d(T+1)||h(O)===T+1?"border-primary":"border-main"]),onClick:m=>c(k.no)},[(u(),C(Bs,{key:k.no,width:v.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:R(()=>[k!=null&&k.component?(u(),C(ut,{key:0,is:k.component,"clicks-context":h(ss)(k,h(ns)),class:F(h(dt)(k)),route:k,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):S("v-if",!0),w(os,{page:k.no},null,8,["page"])]),_:2},1032,["width"]))],10,_n),L("div",{class:"absolute top-0",style:le(`left: ${v.value+5}px`)},[y.value&&String(T+1).startsWith(y.value)?(u(),_(z,{key:0},[L("span",vn,X(y.value),1),L("span",mn,X(String(T+1).slice(y.value.length)),1)],64)):(u(),_("span",gn,X(T+1),1))],4)]))),128))],4)],512),[[it,h(o)]])]),_:1}),h(o)?(u(),_("div",yn,[w(U,{title:"Close",class:"text-2xl",onClick:l},{default:R(()=>[w(I)]),_:1}),S("v-if",!0)])):S("v-if",!0)],64)}}}),ti=H(kn,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function J(t){return Array.isArray?Array.isArray(t):vt(t)==="[object Array]"}const wn=1/0;function bn(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-wn?"-0":e}function Sn(t){return t==null?"":bn(t)}function Q(t){return typeof t=="string"}function pt(t){return typeof t=="number"}function xn(t){return t===!0||t===!1||Mn(t)&&vt(t)=="[object Boolean]"}function _t(t){return typeof t=="object"}function Mn(t){return _t(t)&&t!==null}function K(t){return t!=null}function Ce(t){return!t.trim().length}function vt(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const $n="Incorrect 'index' type",Cn=t=>`Invalid value for key ${t}`,En=t=>`Pattern length exceeds max of ${t}.`,In=t=>`Missing ${t} property in key`,Ln=t=>`Property 'weight' in key '${t}' must be a positive integer`,Je=Object.prototype.hasOwnProperty;class Rn{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let o=mt(n);this._keys.push(o),this._keyMap[o.id]=o,s+=o.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function mt(t){let e=null,s=null,n=null,o=1,i=null;if(Q(t)||J(t))n=t,e=Ze(t),s=Ne(t);else{if(!Je.call(t,"name"))throw new Error(In("name"));const r=t.name;if(n=r,Je.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(Ln(r));e=Ze(r),s=Ne(r),i=t.getFn}return{path:e,id:s,weight:o,src:n,getFn:i}}function Ze(t){return J(t)?t:t.split(".")}function Ne(t){return J(t)?t.join("."):t}function An(t,e){let s=[],n=!1;const o=(i,r,a)=>{if(K(i))if(!r[a])s.push(i);else{let l=r[a];const c=i[l];if(!K(c))return;if(a===r.length-1&&(Q(c)||pt(c)||xn(c)))s.push(Sn(c));else if(J(c)){n=!0;for(let d=0,f=c.length;d<f;d+=1)o(c[d],r,a+1)}else r.length&&o(c,r,a+1)}};return o(t,Q(e)?e.split("."):e,0),n?s:s[0]}const Nn={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Tn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Pn={location:0,threshold:.6,distance:100},On={useExtendedSearch:!1,getFn:An,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var g={...Tn,...Nn,...Pn,...On};const Dn=/[^ ]+/g;function Fn(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(o){const i=o.match(Dn).length;if(s.has(i))return s.get(i);const r=1/Math.pow(i,.5*t),a=parseFloat(Math.round(r*n)/n);return s.set(i,a),a},clear(){s.clear()}}}class We{constructor({getFn:e=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){this.norm=Fn(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Q(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();Q(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!K(e)||Ce(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((o,i)=>{let r=o.getFn?o.getFn(e):this.getFn(e,o.path);if(K(r)){if(J(r)){let a=[];const l=[{nestedArrIndex:-1,value:r}];for(;l.length;){const{nestedArrIndex:c,value:d}=l.pop();if(K(d))if(Q(d)&&!Ce(d)){let f={v:d,i:c,n:this.norm.get(d)};a.push(f)}else J(d)&&d.forEach((f,p)=>{l.push({nestedArrIndex:p,value:f})})}n.$[i]=a}else if(Q(r)&&!Ce(r)){let a={v:r,n:this.norm.get(r)};n.$[i]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function gt(t,e,{getFn:s=g.getFn,fieldNormWeight:n=g.fieldNormWeight}={}){const o=new We({getFn:s,fieldNormWeight:n});return o.setKeys(t.map(mt)),o.setSources(e),o.create(),o}function jn(t,{getFn:e=g.getFn,fieldNormWeight:s=g.fieldNormWeight}={}){const{keys:n,records:o}=t,i=new We({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(o),i}function pe(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:o=g.distance,ignoreLocation:i=g.ignoreLocation}={}){const r=e/t.length;if(i)return r;const a=Math.abs(n-s);return o?r+a/o:a?1:r}function Vn(t=[],e=g.minMatchCharLength){let s=[],n=-1,o=-1,i=0;for(let r=t.length;i<r;i+=1){let a=t[i];a&&n===-1?n=i:!a&&n!==-1&&(o=i-1,o-n+1>=e&&s.push([n,o]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const te=32;function Bn(t,e,s,{location:n=g.location,distance:o=g.distance,threshold:i=g.threshold,findAllMatches:r=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,includeMatches:l=g.includeMatches,ignoreLocation:c=g.ignoreLocation}={}){if(e.length>te)throw new Error(En(te));const d=e.length,f=t.length,p=Math.max(0,Math.min(n,f));let v=i,b=p;const y=a>1||l,M=y?Array(f):[];let x;for(;(x=t.indexOf(e,b))>-1;){let E=pe(e,{currentLocation:x,expectedLocation:p,distance:o,ignoreLocation:c});if(v=Math.min(E,v),b=x+d,y){let $=0;for(;$<d;)M[x+$]=1,$+=1}}b=-1;let I=[],k=1,T=d+f;const m=1<<d-1;for(let E=0;E<d;E+=1){let $=0,V=T;for(;$<V;)pe(e,{errors:E,currentLocation:p+V,expectedLocation:p,distance:o,ignoreLocation:c})<=v?$=V:T=V,V=Math.floor((T-$)/2+$);T=V;let ie=Math.max(1,p-V+1),j=r?f:Math.min(p+V,f)+d,Z=Array(j+2);Z[j+1]=(1<<E)-1;for(let B=j;B>=ie;B-=1){let ne=B-1,ce=s[t.charAt(ne)];if(y&&(M[ne]=+!!ce),Z[B]=(Z[B+1]<<1|1)&ce,E&&(Z[B]|=(I[B+1]|I[B])<<1|1|I[B+1]),Z[B]&m&&(k=pe(e,{errors:E,currentLocation:ne,expectedLocation:p,distance:o,ignoreLocation:c}),k<=v)){if(v=k,b=ne,b<=p)break;ie=Math.max(1,2*p-b)}}if(pe(e,{errors:E+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:c})>v)break;I=Z}const P={isMatch:b>=0,score:Math.max(.001,k)};if(y){const E=Vn(M,a);E.length?l&&(P.indices=E):P.isMatch=!1}return P}function Wn(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const o=t.charAt(s);e[o]=(e[o]||0)|1<<n-s-1}return e}class yt{constructor(e,{location:s=g.location,threshold:n=g.threshold,distance:o=g.distance,includeMatches:i=g.includeMatches,findAllMatches:r=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:c=g.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const d=(p,v)=>{this.chunks.push({pattern:p,alphabet:Wn(p),startIndex:v})},f=this.pattern.length;if(f>te){let p=0;const v=f%te,b=f-v;for(;p<b;)d(this.pattern.substr(p,te),p),p+=te;if(v){const y=f-te;d(this.pattern.substr(y),y)}}else d(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let b={isMatch:!0,score:0};return n&&(b.indices=[[0,e.length-1]]),b}const{location:o,distance:i,threshold:r,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let d=[],f=0,p=!1;this.chunks.forEach(({pattern:b,alphabet:y,startIndex:M})=>{const{isMatch:x,score:I,indices:k}=Bn(e,b,y,{location:o+M,distance:i,threshold:r,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:c});x&&(p=!0),f+=I,x&&k&&(d=[...d,...k])});let v={isMatch:p,score:p?f/this.chunks.length:1};return p&&n&&(v.indices=d),v}}class ee{constructor(e){this.pattern=e}static isMultiMatch(e){return qe(e,this.multiRegex)}static isSingleMatch(e){return qe(e,this.singleRegex)}search(){}}function qe(t,e){const s=t.match(e);return s?s[1]:null}class Gn extends ee{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Kn extends ee{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class zn extends ee{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Hn extends ee{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Un extends ee{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Yn extends ee{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class kt extends ee{constructor(e,{location:s=g.location,threshold:n=g.threshold,distance:o=g.distance,includeMatches:i=g.includeMatches,findAllMatches:r=g.findAllMatches,minMatchCharLength:a=g.minMatchCharLength,isCaseSensitive:l=g.isCaseSensitive,ignoreLocation:c=g.ignoreLocation}={}){super(e),this._bitapSearch=new yt(e,{location:s,threshold:n,distance:o,includeMatches:i,findAllMatches:r,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class wt extends ee{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const o=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,o.push([n,s-1]);const r=!!o.length;return{isMatch:r,score:r?0:1,indices:o}}}const Te=[Gn,wt,zn,Hn,Yn,Un,Kn,kt],et=Te.length,Qn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Xn="|";function Jn(t,e={}){return t.split(Xn).map(s=>{let n=s.trim().split(Qn).filter(i=>i&&!!i.trim()),o=[];for(let i=0,r=n.length;i<r;i+=1){const a=n[i];let l=!1,c=-1;for(;!l&&++c<et;){const d=Te[c];let f=d.isMultiMatch(a);f&&(o.push(new d(f,e)),l=!0)}if(!l)for(c=-1;++c<et;){const d=Te[c];let f=d.isSingleMatch(a);if(f){o.push(new d(f,e));break}}}return o})}const Zn=new Set([kt.type,wt.type]);class qn{constructor(e,{isCaseSensitive:s=g.isCaseSensitive,includeMatches:n=g.includeMatches,minMatchCharLength:o=g.minMatchCharLength,ignoreLocation:i=g.ignoreLocation,findAllMatches:r=g.findAllMatches,location:a=g.location,threshold:l=g.threshold,distance:c=g.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:o,findAllMatches:r,ignoreLocation:i,location:a,threshold:l,distance:c},this.pattern=s?e:e.toLowerCase(),this.query=Jn(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let i=0,r=[],a=0;for(let l=0,c=s.length;l<c;l+=1){const d=s[l];r.length=0,i=0;for(let f=0,p=d.length;f<p;f+=1){const v=d[f],{isMatch:b,indices:y,score:M}=v.search(e);if(b){if(i+=1,a+=M,n){const x=v.constructor.type;Zn.has(x)?r=[...r,...y]:r.push(y)}}else{a=0,i=0,r.length=0;break}}if(i){let f={isMatch:!0,score:a/i};return n&&(f.indices=r),f}}return{isMatch:!1,score:1}}}const Pe=[];function eo(...t){Pe.push(...t)}function Oe(t,e){for(let s=0,n=Pe.length;s<n;s+=1){let o=Pe[s];if(o.condition(t,e))return new o(t,e)}return new yt(t,e)}const ye={AND:"$and",OR:"$or"},De={PATH:"$path",PATTERN:"$val"},Fe=t=>!!(t[ye.AND]||t[ye.OR]),to=t=>!!t[De.PATH],so=t=>!J(t)&&_t(t)&&!Fe(t),tt=t=>({[ye.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function bt(t,e,{auto:s=!0}={}){const n=o=>{let i=Object.keys(o);const r=to(o);if(!r&&i.length>1&&!Fe(o))return n(tt(o));if(so(o)){const l=r?o[De.PATH]:i[0],c=r?o[De.PATTERN]:o[l];if(!Q(c))throw new Error(Cn(l));const d={keyId:Ne(l),pattern:c};return s&&(d.searcher=Oe(c,e)),d}let a={children:[],operator:i[0]};return i.forEach(l=>{const c=o[l];J(c)&&c.forEach(d=>{a.children.push(n(d))})}),a};return Fe(t)||(t=tt(t)),n(t)}function no(t,{ignoreFieldNorm:e=g.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:o,norm:i,score:r})=>{const a=o?o.weight:null;n*=Math.pow(r===0&&a?Number.EPSILON:r,(a||1)*(e?1:i))}),s.score=n})}function oo(t,e){const s=t.matches;e.matches=[],K(s)&&s.forEach(n=>{if(!K(n.indices)||!n.indices.length)return;const{indices:o,value:i}=n;let r={indices:o,value:i};n.key&&(r.key=n.key.src),n.idx>-1&&(r.refIndex=n.idx),e.matches.push(r)})}function io(t,e){e.score=t.score}function ro(t,e,{includeMatches:s=g.includeMatches,includeScore:n=g.includeScore}={}){const o=[];return s&&o.push(oo),n&&o.push(io),t.map(i=>{const{idx:r}=i,a={item:e[r],refIndex:r};return o.length&&o.forEach(l=>{l(i,a)}),a})}class oe{constructor(e,s={},n){this.options={...g,...s},this.options.useExtendedSearch,this._keyStore=new Rn(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof We))throw new Error($n);this._myIndex=s||gt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){K(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,o=this._docs.length;n<o;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,o-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:i,sortFn:r,ignoreFieldNorm:a}=this.options;let l=Q(e)?Q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return no(l,{ignoreFieldNorm:a}),i&&l.sort(r),pt(s)&&s>-1&&(l=l.slice(0,s)),ro(l,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const s=Oe(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:i,i:r,n:a})=>{if(!K(i))return;const{isMatch:l,score:c,indices:d}=s.searchIn(i);l&&o.push({item:i,idx:r,matches:[{score:c,value:i,norm:a,indices:d}]})}),o}_searchLogical(e){const s=bt(e,this.options),n=(a,l,c)=>{if(!a.children){const{keyId:f,searcher:p}=a,v=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(l,f),searcher:p});return v&&v.length?[{idx:c,item:l,matches:v}]:[]}const d=[];for(let f=0,p=a.children.length;f<p;f+=1){const v=a.children[f],b=n(v,l,c);if(b.length)d.push(...b);else if(a.operator===ye.AND)return[]}return d},o=this._myIndex.records,i={},r=[];return o.forEach(({$:a,i:l})=>{if(K(a)){let c=n(s,a,l);c.length&&(i[l]||(i[l]={idx:l,item:a,matches:[]},r.push(i[l])),c.forEach(({matches:d})=>{i[l].matches.push(...d)}))}}),r}_searchObjectList(e){const s=Oe(e,this.options),{keys:n,records:o}=this._myIndex,i=[];return o.forEach(({$:r,i:a})=>{if(!K(r))return;let l=[];n.forEach((c,d)=>{l.push(...this._findMatches({key:c,value:r[d],searcher:s}))}),l.length&&i.push({idx:a,item:r,matches:l})}),i}_findMatches({key:e,value:s,searcher:n}){if(!K(s))return[];let o=[];if(J(s))s.forEach(({v:i,i:r,n:a})=>{if(!K(i))return;const{isMatch:l,score:c,indices:d}=n.searchIn(i);l&&o.push({score:c,key:e,value:i,idx:r,norm:a,indices:d})});else{const{v:i,n:r}=s,{isMatch:a,score:l,indices:c}=n.searchIn(i);a&&o.push({score:l,key:e,value:i,norm:r,indices:c})}return o}}oe.version="7.0.0";oe.createIndex=gt;oe.parseIndex=jn;oe.config=g;oe.parseQuery=bt;eo(qn);const ao={key:0},lo=L("strong",null,"Computer Programming 1 Lab",-1),co=[lo],uo={key:1},ho={key:2},fo={key:3},po={key:4},_o={key:5},vo={key:6},mo={key:7},go={key:8},yo={key:9},ko={key:10},wo={key:11},bo={key:12},So={key:13},xo={key:14},Mo={key:15},$o={key:16},Co={key:17},Eo={key:18},Io={key:19},Lo={key:20},Ro={key:21},Ao={key:22},No=Y({__name:"title-renderer",props:{no:{type:[Number,String],required:!0}},setup(t){return(e,s)=>(u(),_("div",null,[+e.no==1?(u(),_("p",ao,[...co])):+e.no==2?(u(),_("p",uo,"Outline")):+e.no==3?(u(),_("p",ho,"undefined")):+e.no==4?(u(),_("p",fo,"WSL")):+e.no==5?(u(),_("p",po,"WSL Installation")):+e.no==6?(u(),_("p",_o,"WSL Installation")):+e.no==7?(u(),_("p",vo,"WSL Installation")):+e.no==8?(u(),_("p",mo,"WSL Installation")):+e.no==9?(u(),_("p",go,"WSL Installation")):+e.no==10?(u(),_("p",yo,"WSL Usage")):+e.no==11?(u(),_("p",ko,"Before You Update Your Packages…")):+e.no==12?(u(),_("p",wo,"Useful packages")):+e.no==13?(u(),_("p",bo,"Configuration File")):+e.no==14?(u(),_("p",So,"Configuration File")):+e.no==15?(u(),_("p",xo,"Unix Command Extend")):+e.no==16?(u(),_("p",Mo,"Unix Command Extend")):+e.no==17?(u(),_("p",$o,"oj-cli")):+e.no==18?(u(),_("p",Co,"oj-cli")):+e.no==19?(u(),_("p",Eo,"oj-cli")):+e.no==20?(u(),_("p",Io,"oj-cli")):+e.no==21?(u(),_("p",Lo,"oj-cli")):+e.no==22?(u(),_("p",Ro,"oj-cli")):+e.no==23?(u(),_("p",Ao,"Thanks for listening")):S("v-if",!0)]))}}),To=H(No,[["__file","/@slidev/title-renderer.md"]]),Po={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},Oo=["value","disabled"],Do=["border","onClick"],Fo={"w-4":"","text-right":"",op50:"","text-sm":""},jo=Y({__name:"Goto",setup(t){const e=D(),s=D(),n=D(),o=D(),i=D(""),r=D(0),{go:a,slides:l}=se();function c(m){return m!=null}const d=A(()=>new oe(l.value.map(m=>{var P;return(P=m.meta)==null?void 0:P.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),f=A(()=>i.value.startsWith("/")?i.value.substring(1):i.value),p=A(()=>d.value.search(f.value).map(m=>m.item)),v=A(()=>!!p.value.length);function b(){if(v.value){const m=p.value.at(r.value||0);m&&a(m.no)}y()}function y(){i.value="",q.value=!1}function M(m){m.preventDefault(),r.value++,r.value>=p.value.length&&(r.value=0),I()}function x(m){m.preventDefault(),r.value--,r.value<=-2&&(r.value=p.value.length-1),I()}function I(){var P;const m=(P=o.value)==null?void 0:P[r.value];m&&n.value&&(m.offsetTop+m.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:m.offsetTop+m.offsetHeight-n.value.offsetHeight+1}):m.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:m.offsetTop}))}function k(m){r.value=0,i.value=m.target.value}function T(m){a(m),y()}return ge(q,async m=>{var P;m?(i.value="",r.value=0,setTimeout(()=>{var E;return(E=s.value)==null?void 0:E.focus()},0)):(P=s.value)==null||P.blur()}),ge(re,()=>{var m;(m=e.value)!=null&&m.contains(re.value)||y()}),(m,P)=>(u(),_("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:F(["fixed right-5 transition-all",h(q)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[L("div",Po,[L("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:i.value,type:"text",disabled:!h(q),class:F(["outline-none bg-transparent",{"text-red-400":!v.value&&i.value}]),placeholder:"Goto...",onKeydown:[de(b,["enter"]),de(y,["escape"]),de(M,["down"]),de(x,["up"])],onInput:k},null,42,Oo)]),p.value.length>0?(u(),_("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(u(!0),_(z,null,ke(p.value,(E,$)=>(u(),_("li",{ref_for:!0,ref_key:"items",ref:o,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:$===0?"":"t main",class:F(r.value===$?"bg-active op100":"op80"),onClick:Yt(V=>T(E.no),["stop","prevent"])},[L("div",Fo,X(E.no),1),w(h(To),{no:E.no},null,8,["no"])],10,Do))),128))],512)):S("v-if",!0)],2))}}),si=H(jo,[["__scopeId","data-v-6ce0f09d"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Goto.vue"]]);function Vo(){const t=Qt(),e=D(!1);let s,n;const o=typeof document<"u"&&"startViewTransition"in document;return t.beforeResolve((i,r)=>{var y,M,x,I;const a=(y=Ue(r.params.no))==null?void 0:y.meta,l=(M=Ue(i.params.no))==null?void 0:M.meta,c=(x=a==null?void 0:a.slide)==null?void 0:x.no,d=(I=l==null?void 0:l.slide)==null?void 0:I.no;if(!(c!==void 0&&d!==void 0&&((a==null?void 0:a.transition)==="view-transition"&&c<d||(l==null?void 0:l.transition)==="view-transition"&&d<c))){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const f=new Promise((k,T)=>{s=k,n=T});let p;const v=new Promise(k=>p=k);return document.startViewTransition(()=>(p(),f)).finished.then(()=>{n=void 0,s=void 0}),v}),o&&t.afterEach(()=>{s==null||s(),n==null||n()}),e}const Bo={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Wo=Y({__name:"PresenterMouse",setup(t){return(e,s)=>{const n=ht;return h(Se).cursor?(u(),_("div",Bo,[w(n,{class:"absolute",style:le({left:`${h(Se).cursor.x}%`,top:`${h(Se).cursor.y}%`})},null,8,["style"])])):S("v-if",!0)}}}),Go=H(Wo,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Ko=Y({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(t){const{currentSlideRoute:e,currentTransition:s,getPrimaryClicks:n,isPresenter:o,nextRoute:i,slides:r}=se();ge(e,()=>{var f,p;(f=e.value)!=null&&f.meta&&e.value.meta.preload!==!1&&(e.value.meta.__preloaded=!0),(p=i.value)!=null&&p.meta&&i.value.meta.preload!==!1&&(i.value.meta.__preloaded=!0)},{immediate:!0});const a=Vo(),l=Ie();rt(()=>import("./DrawingLayer-Dbob3Uhn.js"),__vite__mapDeps([12,2,10,6,3,4,7,5,8,9])).then(f=>l.value=f.default);const c=A(()=>r.value.filter(f=>{var p;return((p=f.meta)==null?void 0:p.__preloaded)||f===e.value}));function d(){Ye.value=!0,Rs()}return(f,p)=>(u(),_(z,null,[S(" Global Bottom "),w(h(us)),S(" Slides "),(u(),C(nt(h(a)?"div":Jt),Xt(h(Ye)?{}:h(s),{id:"slideshow",tag:"div",onAfterLeave:d}),{default:R(()=>[(u(!0),_(z,null,ke(c.value,v=>ot((u(),_("div",{key:v.no},[w(ut,{is:v.component,"clicks-context":h(n)(v),class:F([h(dt)(v),"overflow-hidden"]),route:v,"render-context":f.renderContext},null,8,["is","clicks-context","class","route","render-context"])])),[[it,v===h(e)]])),128))]),_:1},16)),S(" Global Top "),w(h(ds)),l.value?(u(),C(h(l),{key:0})):S("v-if",!0),h(o)?S("v-if",!0):(u(),C(Go,{key:1}))],64))}}),ni=H(Ko,[["__scopeId","data-v-9156e924"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{si as G,U as I,ei as N,ti as Q,Bs as S,fe as V,ni as a,qo as r,Zo as u};
