function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-qergN9d2.js","assets/modules/unplugin-icons-BmEEPOHl.js","assets/modules/vue-5UMnXfo7.js","assets/modules/shiki-C61wTNu3.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-oejWMz03.js","assets/index-CEehcl22.js","assets/index-ga797ira.css","assets/slidev/bottom-DW2LwQLB.js","assets/bottom-BjZnNKJr.css","assets/slidev/context-D8O9q8p8.js","assets/DrawingControls-C5T1oZL5.css","assets/slidev/DrawingLayer-ZYN5sQJf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{t as D,a9 as Tt,aa as Ot,y as L,ab as N,ac as K,U as Pt,D as ge,ad as Dt,d as Y,ae as Ft,C as st,_ as Vt,Y as jt,b as y,e as R,f as ae,h as le,i as F,o as f,a7 as Ve,x as X,F as z,Z as ke,A as d,l as w,$ as Ee,a6 as Bt,af as Gt,c as C,g as x,a8 as Kt,k as A,ag as nt,v as Wt,M as Ie,r as zt,ah as Ht,ai as Ut,a1 as ot,aj as rt,j as de,ak as Yt,N as Qt,m as Xt,al as Jt}from"../modules/vue-5UMnXfo7.js";import{e as se,l as Zt,t as Re,f as we,a as be,s as qt,c as ve,g as es,b as H,m as ze,_ as it,n as ts,o as He,d as ss,C as ns,p as Ue,k as xe,q as Ye}from"../index-CEehcl22.js";import{u as je,D as os}from"./DrawingPreview-oejWMz03.js";import{b as G,t as Ae,m as q,n as at,o as lt,q as rs,r as is,u as as,v as ct,k as Se,x as Le,s as he,p as ls,y as cs,f as Qe,z as ie,w as Me,S as ut,g as dt,G as us,a as ds}from"./bottom-DW2LwQLB.js";import{e as hs,f as fs,g as ps,h as vs,i as _s,j as ms,k as gs,l as ys,m as ht,n as ks,o as ws,p as bs,q as xs,r as Ss,s as Ms,t as $s,u as Cs,v as Es,w as Is}from"../modules/unplugin-icons-BmEEPOHl.js";import{u as Rs}from"./context-D8O9q8p8.js";import{t as As}from"../modules/shiki-C61wTNu3.js";function jo(t){const{next:e,nextSlide:s,prev:n,prevSlide:o}=se(),{isDrawing:r}=je(),i=D(0),{direction:a,distanceX:l,distanceY:c}=Tt(t,{pointerTypes:["touch"],onSwipeStart(){r.value||(i.value=Ot())},onSwipeEnd(){if(!i.value||r.value)return;const u=Math.abs(l.value),h=Math.abs(c.value);u/window.innerWidth>.3||u>75?a.value==="left"?e():n():(h/window.innerHeight>.4||h>200)&&(a.value==="down"?o():s())}})}const _e=D(1),me=L(()=>Zt.value.length),P=D(0),Be=D(0);function Ls(){P.value>_e.value&&(P.value-=1)}function Ns(){P.value<me.value&&(P.value+=1)}function Ts(){if(P.value>_e.value){let t=P.value-Be.value;t<_e.value&&(t=_e.value),P.value=t}}function Os(){if(P.value<me.value){let t=P.value+Be.value;t>me.value&&(t=me.value),P.value=t}}const Ps=[];function Ds(){const{go:t,goFirst:e,goLast:s,next:n,nextSlide:o,prev:r,prevSlide:i}=se(),{drawingEnabled:a}=je(),{escape:l,space:c,shift:u,left:h,right:p,up:v,down:b,enter:g,d:M,g:S,o:I,"`":k}=at,T={next:n,prev:r,nextSlide:o,prevSlide:i,go:t,goFirst:e,goLast:s,downloadPDF:lt,toggleDark:Re,toggleOverview:Ae,toggleDrawing:()=>a.value=!a.value,escapeOverview:()=>G.value=!1,showGotoDialog:()=>q.value=!q.value};let _=[{name:"next_space",key:N(c,K(u)),fn:n,autoRepeat:!0},{name:"prev_space",key:N(c,u),fn:r,autoRepeat:!0},{name:"next_right",key:N(p,K(u),K(G)),fn:n,autoRepeat:!0},{name:"prev_left",key:N(h,K(u),K(G)),fn:r,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:n,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:r,autoRepeat:!0},{name:"next_down",key:N(b,K(G)),fn:o,autoRepeat:!0},{name:"prev_up",key:N(v,K(G)),fn:()=>i(!1),autoRepeat:!0},{name:"next_shift",key:N(p,u),fn:o,autoRepeat:!0},{name:"prev_shift",key:N(h,u),fn:()=>i(!1),autoRepeat:!0},{name:"toggle_dark",key:N(M,K(a)),fn:Re},{name:"toggle_overview",key:N(Pt(I,k),K(a)),fn:Ae},{name:"hide_overview",key:N(l,K(a)),fn:()=>G.value=!1},{name:"goto",key:N(S,K(a)),fn:()=>q.value=!q.value},{name:"next_overview",key:N(p,G),fn:Ns},{name:"prev_overview",key:N(h,G),fn:Ls},{name:"up_overview",key:N(v,G),fn:Ts},{name:"down_overview",key:N(b,G),fn:Os},{name:"goto_from_overview",key:N(g,G),fn:()=>{t(P.value),G.value=!1}}];const O=new Set(_.map($=>$.name));for(const $ of Ps){const j=$(T,_);_=_.concat(j)}if(_.filter($=>$.name&&O.has($.name)).length===0){const $=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert($),console.warn($)}return _}const ft=N(K(as),K(is),rs);function Fs(t,e,s=!1){typeof t=="string"&&(t=at[t]);const n=N(t,ft);let o=0,r;const i=()=>{if(clearTimeout(r),!n.value){o=0;return}s&&(r=setTimeout(i,Math.max(1e3-o*250,150)),o++),e()};return ge(n,i,{flush:"sync"})}function Vs(t,e){return Dt(t,s=>{ft.value&&(s.repeat||e())})}function Bo(){const t=Ds();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&Fs(s.key,s.fn,s.autoRepeat)}),Vs("f",()=>ct.toggle())}const js=Y({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{clicksDirection:s,isPrintMode:n}=se(),o=D(),r=Ft(o),i=L(()=>e.width?e.width:r.width.value),a=L(()=>e.width?e.width/we.value:r.height.value);e.width&&st(()=>{o.value&&(o.value.style.width=`${i.value}px`,o.value.style.height=`${a.value}px`)});const l=L(()=>i.value/a.value),c=L(()=>e.scale&&!n.value?e.scale:l.value<we.value?i.value/be.value:a.value*we.value/be.value),u=L(()=>({height:`${qt.value}px`,width:`${be.value}px`,transform:`translate(-50%, -50%) scale(${c.value})`,"--slidev-slide-scale":c.value})),h=L(()=>({"select-none":!ve.selectable,"slidev-nav-go-forward":s.value>0,"slidev-nav-go-backward":s.value<0}));return e.isMain&&Vt(L(()=>`
    :root {
      --slidev-slide-scale: ${c.value};
    }
  `)),jt(es,c),(p,v)=>(f(),y("div",{id:"slide-container",ref_key:"root",ref:o,class:F(["slidev-slides-container",h.value])},[R("div",{id:"slide-content",class:"slidev-slide-content",style:le(u.value)},[ae(p.$slots,"default")],4),ae(p.$slots,"controls")],2))}}),Bs=H(js,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SlideContainer.vue"]]),Gs={class:"select-list"},Ks={class:"title"},Ws={class:"items"},zs=["onClick"],Hs=Y({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:e}){const o=Ve(t,"modelValue",e,{passive:!0});return(r,i)=>{const a=hs;return f(),y("div",Gs,[R("div",Ks,X(t.title),1),R("div",Ws,[(f(!0),y(z,null,ke(t.items,l=>(f(),y("div",{key:l.value,class:F(["item",{active:d(o)===l.value}]),onClick:()=>{var c;o.value=l.value,(c=l.onClick)==null||c.call(l)}},[w(a,{class:F(["text-green-500",{"opacity-0":d(o)!==l.value}])},null,8,["class"]),Ee(" "+X(l.display||l.value),1)],10,zs))),128))])])}}}),Us=H(Hs,[["__scopeId","data-v-07575b19"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SelectList.vue"]]),Ys={class:"text-sm"},Qs=Y({__name:"Settings",setup(t){const e=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,n)=>(f(),y("div",Ys,[w(Us,{modelValue:d(Se),"onUpdate:modelValue":n[0]||(n[0]=o=>Bt(Se)?Se.value=o:null),title:"Scale",items:e},null,8,["modelValue"])]))}}),Xs=H(Qs,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Settings.vue"]]),Js={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ main"},Zs=Y({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:e}){const o=Ve(t,"modelValue",e,{passive:!0}),r=D();return Gt(r,()=>{o.value=!1}),(i,a)=>(f(),y("div",{ref_key:"el",ref:r,class:"flex relative"},[R("button",{class:F({disabled:t.disabled}),onClick:a[0]||(a[0]=l=>o.value=!d(o))},[ae(i.$slots,"button",{class:F({disabled:t.disabled})})],2),(f(),C(Kt,null,[d(o)?(f(),y("div",Js,[ae(i.$slots,"menu")])):x("v-if",!0)],1024))],512))}}),qs=H(Zs,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/MenuButton.vue"]]),en={},tn={class:"w-1px opacity-10 bg-current m-1 lg:m-2"};function sn(t,e){return f(),y("div",tn)}const fe=H(en,[["render",sn],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),nn={class:"sr-only"},on=Y({__name:"IconButton",props:{title:{type:String,required:!0},icon:{type:String,required:!1},as:{type:String,required:!1}},setup(t){return(e,s)=>(f(),C(nt(e.as||"button"),{class:"slidev-icon-btn",title:e.title},{default:A(()=>[R("span",nn,X(e.title),1),ae(e.$slots,"default",{},()=>[R("div",{class:F(e.icon)},null,2)])]),_:3},8,["title"]))}}),U=H(on,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/IconButton.vue"]]),rn=R("div",{class:"w-1px opacity-10 bg-current m-1 lg:m-2"},null,-1),an={class:"slidev-icon-btn mr-2",title:"Home",href:"https://slidev.andyjjrt.cc"},ln={__name:"custom-nav-controls",setup(t){return Rs(),(e,s)=>{const n=fs;return f(),y(z,null,[rn,R("a",an,[w(n)])],64)}}},cn=H(ln,[["__file","/home/runner/work/slides/slides/addon/custom-nav-controls.vue"]]),un={render(){return[Wt(cn)]}},dn={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},hn={class:"my-auto"},fn={class:"opacity-50"},pn=Y({__name:"NavControls",props:{persist:{default:!1}},setup(t){const e=t,{currentRoute:s,currentSlideNo:n,hasNext:o,hasPrev:r,isEmbedded:i,isPresenter:a,isPresenterAvailable:l,next:c,prev:u,total:h}=se(),{brush:p,drawingEnabled:v}=je(),b=Le.smaller("md"),{isFullscreen:g,toggle:M}=ct,S=L(()=>s.value.query.password),I=L(()=>S.value?`?password=${S.value}`:""),k=L(()=>`${ze(n.value,!0)}${I.value}`),T=L(()=>`${ze(n.value,!1)}${I.value}`),_=D();function O(){_.value&&ie.value&&_.value.contains(ie.value)&&ie.value.blur()}const E=L(()=>e.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-main"),$=Ie(),j=Ie();return it(()=>import("./DrawingControls-qergN9d2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(re=>j.value=re.default),(re,V)=>{const Z=ps,Ke=vs,B=_s,ne=ms,ce=xs,xt=gs,St=ys,Mt=ht,$t=ks,Ct=ws,Et=Ss,We=zt("RouterLink"),It=Ms,Rt=$s,At=Cs,Lt=Es,Nt=bs;return f(),y("nav",{ref_key:"root",ref:_,class:"flex flex-col"},[R("div",{class:F(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",E.value]),onMouseleave:O},[d(i)?x("v-if",!0):(f(),C(U,{key:0,title:d(g)?"Close fullscreen":"Enter fullscreen",onClick:d(M)},{default:A(()=>[d(g)?(f(),C(Z,{key:0})):(f(),C(Ke,{key:1}))]),_:1},8,["title","onClick"])),w(U,{class:F({disabled:!d(r)}),title:"Go to previous slide",onClick:d(u)},{default:A(()=>[w(B)]),_:1},8,["class","onClick"]),w(U,{class:F({disabled:!d(o)}),title:"Go to next slide",onClick:d(c)},{default:A(()=>[w(ne)]),_:1},8,["class","onClick"]),d(i)?x("v-if",!0):(f(),C(U,{key:1,title:"Show slide overview",onClick:V[0]||(V[0]=ue=>d(Ae)())},{default:A(()=>[w(ce)]),_:1})),d(ts)?x("v-if",!0):(f(),C(U,{key:2,title:d(He)?"Switch to light mode theme":"Switch to dark mode theme",onClick:V[1]||(V[1]=ue=>d(Re)())},{default:A(()=>[d(He)?(f(),C(xt,{key:0})):(f(),C(St,{key:1}))]),_:1},8,["title"])),w(fe),d(i)?x("v-if",!0):(f(),y(z,{key:3},[!d(a)&&!d(b)&&$.value?(f(),y(z,{key:0},[w(d($)),w(fe)],64)):x("v-if",!0),d(a)?(f(),C(U,{key:1,title:d(he)?"Hide presenter cursor":"Show presenter cursor",onClick:V[2]||(V[2]=ue=>he.value=!d(he))},{default:A(()=>[d(he)?(f(),C(Mt,{key:0})):(f(),C($t,{key:1}))]),_:1},8,["title"])):x("v-if",!0)],64)),(!d(ve).drawings.presenterOnly||d(a))&&!d(i)?(f(),y(z,{key:4},[w(U,{class:"relative",title:d(v)?"Hide drawing toolbar":"Show drawing toolbar",onClick:V[3]||(V[3]=ue=>v.value=!d(v))},{default:A(()=>[w(Ct),d(v)?(f(),y("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:le({background:d(p).color})},null,4)):x("v-if",!0)]),_:1},8,["title"]),w(fe)],64)):x("v-if",!0),d(i)?x("v-if",!0):(f(),y(z,{key:5},[d(a)?(f(),C(We,{key:0,to:T.value,class:"slidev-icon-btn",title:"Play Mode"},{default:A(()=>[w(Et)]),_:1},8,["to"])):x("v-if",!0),d(l)?(f(),C(We,{key:1,to:k.value,class:"slidev-icon-btn",title:"Presenter Mode"},{default:A(()=>[w(It)]),_:1},8,["to"])):x("v-if",!0),x("v-if",!0),d(a)?(f(),C(U,{key:3,title:"Toggle Presenter Layout",class:"aspect-ratio-initial",onClick:d(cs)},{default:A(()=>[w(Rt),Ee(" "+X(d(ls)),1)]),_:1},8,["onClick"])):x("v-if",!0)],64)),(f(),y(z,{key:6},[d(ve).download?(f(),C(U,{key:0,title:"Download as PDF",onClick:d(lt)},{default:A(()=>[w(At)]),_:1},8,["onClick"])):x("v-if",!0)],64)),!d(a)&&d(ve).info&&!d(i)?(f(),C(U,{key:7,title:"Show info",onClick:V[5]||(V[5]=ue=>Qe.value=!d(Qe))},{default:A(()=>[w(Lt)]),_:1})):x("v-if",!0),!d(a)&&!d(i)?(f(),C(qs,{key:8},{button:A(()=>[w(U,{title:"Adjust settings"},{default:A(()=>[w(Nt)]),_:1})]),menu:A(()=>[w(Xs)]),_:1})):x("v-if",!0),d(i)?x("v-if",!0):(f(),C(fe,{key:9})),R("div",dn,[R("div",hn,[Ee(X(d(n))+" ",1),R("span",fn,"/ "+X(d(h)),1)])]),w(d(un))],34)],512)}}}),Go=H(pn,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/NavControls.vue"]]),vn=["onClick"],_n={class:"text-green font-bold"},mn={class:"opacity-50"},gn={key:1,class:"opacity-50"},yn={key:0,class:"fixed top-4 right-4 text-gray-400 flex flex-col items-center gap-2"},$e=4*16*2,Xe=2*16,kn=Y({__name:"QuickOverview",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const o=Ve(t,"modelValue",e),{currentSlideNo:r,go:i,slides:a}=se();function l(){o.value=!1}function c(M){i(M),l()}function u(M){return M===P.value}const h=Le.smaller("xs"),p=Le.smaller("sm"),v=L(()=>h.value?Me.width.value-$e:p.value?(Me.width.value-$e-Xe)/2:300),b=L(()=>Math.floor((Me.width.value-$e)/(v.value+Xe))),g=D("");return Ht("keypress",M=>{if(!G.value){g.value="";return}if(M.key==="Enter"){M.preventDefault(),g.value?(c(+g.value),g.value=""):c(P.value);return}const S=Number.parseInt(M.key.replace(/[^0-9]/g,""));if(Number.isNaN(S)){g.value="";return}if(!g.value&&S===0)return;if(g.value+=String(S),+g.value>=a.value.length){g.value="";return}const I=a.value.findIndex(k=>`/${k.no}`===g.value);I!==-1&&(P.value=I+1),+g.value*10>a.value.length&&(c(+g.value),g.value="")}),st(()=>{P.value=r.value,Be.value=b.value}),(M,S)=>{const I=Is;return f(),y(z,null,[w(Ut,{"enter-active-class":"duration-150 ease-out","enter-from-class":"opacity-0 scale-102 !backdrop-blur-0px","leave-active-class":"duration-200 ease-in","leave-to-class":"opacity-0 scale-102 !backdrop-blur-0px",persisted:""},{default:A(()=>[ot(R("div",{class:"bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)]",onClick:S[0]||(S[0]=k=>l())},[R("div",{class:"grid gap-y-4 gap-x-8 w-full",style:le(`grid-template-columns: repeat(auto-fit,minmax(${v.value}px,1fr))`)},[(f(!0),y(z,null,ke(d(a),(k,T)=>(f(),y("div",{key:k.no,class:"relative"},[R("div",{class:F(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition",u(T+1)||d(P)===T+1?"border-primary":"border-main"]),onClick:_=>c(k.no)},[(f(),C(Bs,{key:k.no,width:v.value,"clicks-disabled":!0,class:"pointer-events-none"},{default:A(()=>[k!=null&&k.component?(f(),C(ut,{key:0,is:k.component,"clicks-context":d(ss)(k,d(ns)),class:F(d(dt)(k)),route:k,"render-context":"overview"},null,8,["is","clicks-context","class","route"])):x("v-if",!0),w(os,{page:k.no},null,8,["page"])]),_:2},1032,["width"]))],10,vn),R("div",{class:"absolute top-0",style:le(`left: ${v.value+5}px`)},[g.value&&String(T+1).startsWith(g.value)?(f(),y(z,{key:0},[R("span",_n,X(g.value),1),R("span",mn,X(String(T+1).slice(g.value.length)),1)],64)):(f(),y("span",gn,X(T+1),1))],4)]))),128))],4)],512),[[rt,d(o)]])]),_:1}),d(o)?(f(),y("div",yn,[w(U,{title:"Close",class:"text-2xl",onClick:l},{default:A(()=>[w(I)]),_:1}),x("v-if",!0)])):x("v-if",!0)],64)}}}),Ko=H(kn,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/QuickOverview.vue"]]);function J(t){return Array.isArray?Array.isArray(t):_t(t)==="[object Array]"}const wn=1/0;function bn(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-wn?"-0":e}function xn(t){return t==null?"":bn(t)}function Q(t){return typeof t=="string"}function pt(t){return typeof t=="number"}function Sn(t){return t===!0||t===!1||Mn(t)&&_t(t)=="[object Boolean]"}function vt(t){return typeof t=="object"}function Mn(t){return vt(t)&&t!==null}function W(t){return t!=null}function Ce(t){return!t.trim().length}function _t(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const $n="Incorrect 'index' type",Cn=t=>`Invalid value for key ${t}`,En=t=>`Pattern length exceeds max of ${t}.`,In=t=>`Missing ${t} property in key`,Rn=t=>`Property 'weight' in key '${t}' must be a positive integer`,Je=Object.prototype.hasOwnProperty;class An{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let o=mt(n);this._keys.push(o),this._keyMap[o.id]=o,s+=o.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function mt(t){let e=null,s=null,n=null,o=1,r=null;if(Q(t)||J(t))n=t,e=Ze(t),s=Ne(t);else{if(!Je.call(t,"name"))throw new Error(In("name"));const i=t.name;if(n=i,Je.call(t,"weight")&&(o=t.weight,o<=0))throw new Error(Rn(i));e=Ze(i),s=Ne(i),r=t.getFn}return{path:e,id:s,weight:o,src:n,getFn:r}}function Ze(t){return J(t)?t:t.split(".")}function Ne(t){return J(t)?t.join("."):t}function Ln(t,e){let s=[],n=!1;const o=(r,i,a)=>{if(W(r))if(!i[a])s.push(r);else{let l=i[a];const c=r[l];if(!W(c))return;if(a===i.length-1&&(Q(c)||pt(c)||Sn(c)))s.push(xn(c));else if(J(c)){n=!0;for(let u=0,h=c.length;u<h;u+=1)o(c[u],i,a+1)}else i.length&&o(c,i,a+1)}};return o(t,Q(e)?e.split("."):e,0),n?s:s[0]}const Nn={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Tn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},On={location:0,threshold:.6,distance:100},Pn={useExtendedSearch:!1,getFn:Ln,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var m={...Tn,...Nn,...On,...Pn};const Dn=/[^ ]+/g;function Fn(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(o){const r=o.match(Dn).length;if(s.has(r))return s.get(r);const i=1/Math.pow(r,.5*t),a=parseFloat(Math.round(i*n)/n);return s.set(r,a),a},clear(){s.clear()}}}class Ge{constructor({getFn:e=m.getFn,fieldNormWeight:s=m.fieldNormWeight}={}){this.norm=Fn(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,Q(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();Q(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!W(e)||Ce(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((o,r)=>{let i=o.getFn?o.getFn(e):this.getFn(e,o.path);if(W(i)){if(J(i)){let a=[];const l=[{nestedArrIndex:-1,value:i}];for(;l.length;){const{nestedArrIndex:c,value:u}=l.pop();if(W(u))if(Q(u)&&!Ce(u)){let h={v:u,i:c,n:this.norm.get(u)};a.push(h)}else J(u)&&u.forEach((h,p)=>{l.push({nestedArrIndex:p,value:h})})}n.$[r]=a}else if(Q(i)&&!Ce(i)){let a={v:i,n:this.norm.get(i)};n.$[r]=a}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function gt(t,e,{getFn:s=m.getFn,fieldNormWeight:n=m.fieldNormWeight}={}){const o=new Ge({getFn:s,fieldNormWeight:n});return o.setKeys(t.map(mt)),o.setSources(e),o.create(),o}function Vn(t,{getFn:e=m.getFn,fieldNormWeight:s=m.fieldNormWeight}={}){const{keys:n,records:o}=t,r=new Ge({getFn:e,fieldNormWeight:s});return r.setKeys(n),r.setIndexRecords(o),r}function pe(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:o=m.distance,ignoreLocation:r=m.ignoreLocation}={}){const i=e/t.length;if(r)return i;const a=Math.abs(n-s);return o?i+a/o:a?1:i}function jn(t=[],e=m.minMatchCharLength){let s=[],n=-1,o=-1,r=0;for(let i=t.length;r<i;r+=1){let a=t[r];a&&n===-1?n=r:!a&&n!==-1&&(o=r-1,o-n+1>=e&&s.push([n,o]),n=-1)}return t[r-1]&&r-n>=e&&s.push([n,r-1]),s}const te=32;function Bn(t,e,s,{location:n=m.location,distance:o=m.distance,threshold:r=m.threshold,findAllMatches:i=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,includeMatches:l=m.includeMatches,ignoreLocation:c=m.ignoreLocation}={}){if(e.length>te)throw new Error(En(te));const u=e.length,h=t.length,p=Math.max(0,Math.min(n,h));let v=r,b=p;const g=a>1||l,M=g?Array(h):[];let S;for(;(S=t.indexOf(e,b))>-1;){let E=pe(e,{currentLocation:S,expectedLocation:p,distance:o,ignoreLocation:c});if(v=Math.min(E,v),b=S+u,g){let $=0;for(;$<u;)M[S+$]=1,$+=1}}b=-1;let I=[],k=1,T=u+h;const _=1<<u-1;for(let E=0;E<u;E+=1){let $=0,j=T;for(;$<j;)pe(e,{errors:E,currentLocation:p+j,expectedLocation:p,distance:o,ignoreLocation:c})<=v?$=j:T=j,j=Math.floor((T-$)/2+$);T=j;let re=Math.max(1,p-j+1),V=i?h:Math.min(p+j,h)+u,Z=Array(V+2);Z[V+1]=(1<<E)-1;for(let B=V;B>=re;B-=1){let ne=B-1,ce=s[t.charAt(ne)];if(g&&(M[ne]=+!!ce),Z[B]=(Z[B+1]<<1|1)&ce,E&&(Z[B]|=(I[B+1]|I[B])<<1|1|I[B+1]),Z[B]&_&&(k=pe(e,{errors:E,currentLocation:ne,expectedLocation:p,distance:o,ignoreLocation:c}),k<=v)){if(v=k,b=ne,b<=p)break;re=Math.max(1,2*p-b)}}if(pe(e,{errors:E+1,currentLocation:p,expectedLocation:p,distance:o,ignoreLocation:c})>v)break;I=Z}const O={isMatch:b>=0,score:Math.max(.001,k)};if(g){const E=jn(M,a);E.length?l&&(O.indices=E):O.isMatch=!1}return O}function Gn(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const o=t.charAt(s);e[o]=(e[o]||0)|1<<n-s-1}return e}class yt{constructor(e,{location:s=m.location,threshold:n=m.threshold,distance:o=m.distance,includeMatches:r=m.includeMatches,findAllMatches:i=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,isCaseSensitive:l=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const u=(p,v)=>{this.chunks.push({pattern:p,alphabet:Gn(p),startIndex:v})},h=this.pattern.length;if(h>te){let p=0;const v=h%te,b=h-v;for(;p<b;)u(this.pattern.substr(p,te),p),p+=te;if(v){const g=h-te;u(this.pattern.substr(g),g)}}else u(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let b={isMatch:!0,score:0};return n&&(b.indices=[[0,e.length-1]]),b}const{location:o,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:l,ignoreLocation:c}=this.options;let u=[],h=0,p=!1;this.chunks.forEach(({pattern:b,alphabet:g,startIndex:M})=>{const{isMatch:S,score:I,indices:k}=Bn(e,b,g,{location:o+M,distance:r,threshold:i,findAllMatches:a,minMatchCharLength:l,includeMatches:n,ignoreLocation:c});S&&(p=!0),h+=I,S&&k&&(u=[...u,...k])});let v={isMatch:p,score:p?h/this.chunks.length:1};return p&&n&&(v.indices=u),v}}class ee{constructor(e){this.pattern=e}static isMultiMatch(e){return qe(e,this.multiRegex)}static isSingleMatch(e){return qe(e,this.singleRegex)}search(){}}function qe(t,e){const s=t.match(e);return s?s[1]:null}class Kn extends ee{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Wn extends ee{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class zn extends ee{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Hn extends ee{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Un extends ee{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Yn extends ee{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class kt extends ee{constructor(e,{location:s=m.location,threshold:n=m.threshold,distance:o=m.distance,includeMatches:r=m.includeMatches,findAllMatches:i=m.findAllMatches,minMatchCharLength:a=m.minMatchCharLength,isCaseSensitive:l=m.isCaseSensitive,ignoreLocation:c=m.ignoreLocation}={}){super(e),this._bitapSearch=new yt(e,{location:s,threshold:n,distance:o,includeMatches:r,findAllMatches:i,minMatchCharLength:a,isCaseSensitive:l,ignoreLocation:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class wt extends ee{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const o=[],r=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+r,o.push([n,s-1]);const i=!!o.length;return{isMatch:i,score:i?0:1,indices:o}}}const Te=[Kn,wt,zn,Hn,Yn,Un,Wn,kt],et=Te.length,Qn=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Xn="|";function Jn(t,e={}){return t.split(Xn).map(s=>{let n=s.trim().split(Qn).filter(r=>r&&!!r.trim()),o=[];for(let r=0,i=n.length;r<i;r+=1){const a=n[r];let l=!1,c=-1;for(;!l&&++c<et;){const u=Te[c];let h=u.isMultiMatch(a);h&&(o.push(new u(h,e)),l=!0)}if(!l)for(c=-1;++c<et;){const u=Te[c];let h=u.isSingleMatch(a);if(h){o.push(new u(h,e));break}}}return o})}const Zn=new Set([kt.type,wt.type]);class qn{constructor(e,{isCaseSensitive:s=m.isCaseSensitive,includeMatches:n=m.includeMatches,minMatchCharLength:o=m.minMatchCharLength,ignoreLocation:r=m.ignoreLocation,findAllMatches:i=m.findAllMatches,location:a=m.location,threshold:l=m.threshold,distance:c=m.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:o,findAllMatches:i,ignoreLocation:r,location:a,threshold:l,distance:c},this.pattern=s?e:e.toLowerCase(),this.query=Jn(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:o}=this.options;e=o?e:e.toLowerCase();let r=0,i=[],a=0;for(let l=0,c=s.length;l<c;l+=1){const u=s[l];i.length=0,r=0;for(let h=0,p=u.length;h<p;h+=1){const v=u[h],{isMatch:b,indices:g,score:M}=v.search(e);if(b){if(r+=1,a+=M,n){const S=v.constructor.type;Zn.has(S)?i=[...i,...g]:i.push(g)}}else{a=0,r=0,i.length=0;break}}if(r){let h={isMatch:!0,score:a/r};return n&&(h.indices=i),h}}return{isMatch:!1,score:1}}}const Oe=[];function eo(...t){Oe.push(...t)}function Pe(t,e){for(let s=0,n=Oe.length;s<n;s+=1){let o=Oe[s];if(o.condition(t,e))return new o(t,e)}return new yt(t,e)}const ye={AND:"$and",OR:"$or"},De={PATH:"$path",PATTERN:"$val"},Fe=t=>!!(t[ye.AND]||t[ye.OR]),to=t=>!!t[De.PATH],so=t=>!J(t)&&vt(t)&&!Fe(t),tt=t=>({[ye.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function bt(t,e,{auto:s=!0}={}){const n=o=>{let r=Object.keys(o);const i=to(o);if(!i&&r.length>1&&!Fe(o))return n(tt(o));if(so(o)){const l=i?o[De.PATH]:r[0],c=i?o[De.PATTERN]:o[l];if(!Q(c))throw new Error(Cn(l));const u={keyId:Ne(l),pattern:c};return s&&(u.searcher=Pe(c,e)),u}let a={children:[],operator:r[0]};return r.forEach(l=>{const c=o[l];J(c)&&c.forEach(u=>{a.children.push(n(u))})}),a};return Fe(t)||(t=tt(t)),n(t)}function no(t,{ignoreFieldNorm:e=m.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:o,norm:r,score:i})=>{const a=o?o.weight:null;n*=Math.pow(i===0&&a?Number.EPSILON:i,(a||1)*(e?1:r))}),s.score=n})}function oo(t,e){const s=t.matches;e.matches=[],W(s)&&s.forEach(n=>{if(!W(n.indices)||!n.indices.length)return;const{indices:o,value:r}=n;let i={indices:o,value:r};n.key&&(i.key=n.key.src),n.idx>-1&&(i.refIndex=n.idx),e.matches.push(i)})}function ro(t,e){e.score=t.score}function io(t,e,{includeMatches:s=m.includeMatches,includeScore:n=m.includeScore}={}){const o=[];return s&&o.push(oo),n&&o.push(ro),t.map(r=>{const{idx:i}=r,a={item:e[i],refIndex:i};return o.length&&o.forEach(l=>{l(r,a)}),a})}class oe{constructor(e,s={},n){this.options={...m,...s},this.options.useExtendedSearch,this._keyStore=new An(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof Ge))throw new Error($n);this._myIndex=s||gt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){W(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,o=this._docs.length;n<o;n+=1){const r=this._docs[n];e(r,n)&&(this.removeAt(n),n-=1,o-=1,s.push(r))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:o,shouldSort:r,sortFn:i,ignoreFieldNorm:a}=this.options;let l=Q(e)?Q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return no(l,{ignoreFieldNorm:a}),r&&l.sort(i),pt(s)&&s>-1&&(l=l.slice(0,s)),io(l,this._docs,{includeMatches:n,includeScore:o})}_searchStringList(e){const s=Pe(e,this.options),{records:n}=this._myIndex,o=[];return n.forEach(({v:r,i,n:a})=>{if(!W(r))return;const{isMatch:l,score:c,indices:u}=s.searchIn(r);l&&o.push({item:r,idx:i,matches:[{score:c,value:r,norm:a,indices:u}]})}),o}_searchLogical(e){const s=bt(e,this.options),n=(a,l,c)=>{if(!a.children){const{keyId:h,searcher:p}=a,v=this._findMatches({key:this._keyStore.get(h),value:this._myIndex.getValueForItemAtKeyId(l,h),searcher:p});return v&&v.length?[{idx:c,item:l,matches:v}]:[]}const u=[];for(let h=0,p=a.children.length;h<p;h+=1){const v=a.children[h],b=n(v,l,c);if(b.length)u.push(...b);else if(a.operator===ye.AND)return[]}return u},o=this._myIndex.records,r={},i=[];return o.forEach(({$:a,i:l})=>{if(W(a)){let c=n(s,a,l);c.length&&(r[l]||(r[l]={idx:l,item:a,matches:[]},i.push(r[l])),c.forEach(({matches:u})=>{r[l].matches.push(...u)}))}}),i}_searchObjectList(e){const s=Pe(e,this.options),{keys:n,records:o}=this._myIndex,r=[];return o.forEach(({$:i,i:a})=>{if(!W(i))return;let l=[];n.forEach((c,u)=>{l.push(...this._findMatches({key:c,value:i[u],searcher:s}))}),l.length&&r.push({idx:a,item:i,matches:l})}),r}_findMatches({key:e,value:s,searcher:n}){if(!W(s))return[];let o=[];if(J(s))s.forEach(({v:r,i,n:a})=>{if(!W(r))return;const{isMatch:l,score:c,indices:u}=n.searchIn(r);l&&o.push({score:c,key:e,value:r,idx:i,norm:a,indices:u})});else{const{v:r,n:i}=s,{isMatch:a,score:l,indices:c}=n.searchIn(r);a&&o.push({score:l,key:e,value:r,norm:i,indices:c})}return o}}oe.version="7.0.0";oe.createIndex=gt;oe.parseIndex=Vn;oe.config=m;oe.parseQuery=bt;eo(qn);const ao={key:0},lo=R("strong",null,"Computer Programming 2 Lab",-1),co=[lo],uo={key:1},ho={key:2},fo={key:3},po={key:4},vo={key:5},_o={key:6},mo={key:7},go={key:8},yo={key:9},ko={key:10},wo=Y({__name:"title-renderer",props:{no:{type:[Number,String],required:!0}},setup(t){return(e,s)=>(f(),y("div",null,[+e.no==1?(f(),y("p",ao,[...co])):+e.no==2?(f(),y("p",uo,"Outline")):+e.no==3?(f(),y("p",ho,"hw7")):+e.no==4?(f(),y("p",fo,"Prefix, Infix & Suffix")):+e.no==5?(f(),y("p",po,"Count 1 2 + 3 4 + * with Suffix")):+e.no==6?(f(),y("p",vo,"First contribution")):+e.no==7?(f(),y("p",_o,"ex5")):+e.no==8?(f(),y("p",mo,"ex5 - Input")):+e.no==9?(f(),y("p",go,"ex5 - Output")):+e.no==10?(f(),y("p",yo,"ojtest")):+e.no==11?(f(),y("p",ko,"undefined")):x("v-if",!0)]))}}),bo=H(wo,[["__file","/@slidev/title-renderer.md"]]),xo={class:"bg-main transform",shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:main"},So=["value","disabled"],Mo=["border","onClick"],$o={"w-4":"","text-right":"",op50:"","text-sm":""},Co=Y({__name:"Goto",setup(t){const e=D(),s=D(),n=D(),o=D(),r=D(""),i=D(0),{go:a,slides:l}=se();function c(_){return _!=null}const u=L(()=>new oe(l.value.map(_=>{var O;return(O=_.meta)==null?void 0:O.slide}).filter(c),{keys:["no","title"],threshold:.3,shouldSort:!0,minMatchCharLength:1})),h=L(()=>r.value.startsWith("/")?r.value.substring(1):r.value),p=L(()=>u.value.search(h.value).map(_=>_.item)),v=L(()=>!!p.value.length);function b(){if(v.value){const _=p.value.at(i.value||0);_&&a(_.no)}g()}function g(){r.value="",q.value=!1}function M(_){_.preventDefault(),i.value++,i.value>=p.value.length&&(i.value=0),I()}function S(_){_.preventDefault(),i.value--,i.value<=-2&&(i.value=p.value.length-1),I()}function I(){var O;const _=(O=o.value)==null?void 0:O[i.value];_&&n.value&&(_.offsetTop+_.offsetHeight>n.value.offsetHeight+n.value.scrollTop?n.value.scrollTo({behavior:"smooth",top:_.offsetTop+_.offsetHeight-n.value.offsetHeight+1}):_.offsetTop<n.value.scrollTop&&n.value.scrollTo({behavior:"smooth",top:_.offsetTop}))}function k(_){i.value=0,r.value=_.target.value}function T(_){a(_),g()}return ge(q,async _=>{var O;_?(r.value="",i.value=0,setTimeout(()=>{var E;return(E=s.value)==null?void 0:E.focus()},0)):(O=s.value)==null||O.blur()}),ge(ie,()=>{var _;(_=e.value)!=null&&_.contains(ie.value)||g()}),(_,O)=>(f(),y("div",{id:"slidev-goto-dialog",ref_key:"container",ref:e,class:F(["fixed right-5 transition-all",d(q)?"top-5":"-top-20"]),"w-90":"","max-w-90":"","min-w-90":""},[R("div",xo,[R("input",{id:"slidev-goto-input",ref_key:"input",ref:s,value:r.value,type:"text",disabled:!d(q),class:F(["outline-none bg-transparent",{"text-red-400":!v.value&&r.value}]),placeholder:"Goto...",onKeydown:[de(b,["enter"]),de(g,["escape"]),de(M,["down"]),de(S,["up"])],onInput:k},null,42,So)]),p.value.length>0?(f(),y("ul",{key:0,ref_key:"list",ref:n,class:"autocomplete-list",shadow:"~",border:"~ transparent rounded dark:main"},[(f(!0),y(z,null,ke(p.value,(E,$)=>(f(),y("li",{ref_for:!0,ref_key:"items",ref:o,key:E.id,role:"button",tabindex:"0",p:"x-4 y-2","cursor-pointer":"",hover:"op100",flex:"~ gap-2","w-90":"","items-center":"",border:$===0?"":"t main",class:F(i.value===$?"bg-active op100":"op80"),onClick:Yt(j=>T(E.no),["stop","prevent"])},[R("div",$o,X(E.no),1),w(d(bo),{no:E.no},null,8,["no"])],10,Mo))),128))],512)):x("v-if",!0)],2))}}),Wo=H(Co,[["__scopeId","data-v-6ce0f09d"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Goto.vue"]]);function Eo(){const t=Qt(),e=D(!1);let s,n;const o=typeof document<"u"&&"startViewTransition"in document;return t.beforeResolve((r,i)=>{var g,M,S,I;const a=(g=Ue(i.params.no))==null?void 0:g.meta,l=(M=Ue(r.params.no))==null?void 0:M.meta,c=(S=a==null?void 0:a.slide)==null?void 0:S.no,u=(I=l==null?void 0:l.slide)==null?void 0:I.no;if(!(c!==void 0&&u!==void 0&&((a==null?void 0:a.transition)==="view-transition"&&c<u||(l==null?void 0:l.transition)==="view-transition"&&u<c))){e.value=!1;return}if(!o){e.value=!1,console.warn("View transition is not supported in your browser, fallback to normal transition.");return}e.value=!0;const h=new Promise((k,T)=>{s=k,n=T});let p;const v=new Promise(k=>p=k);return document.startViewTransition(()=>(p(),h)).finished.then(()=>{n=void 0,s=void 0}),v}),o&&t.afterEach(()=>{s==null||s(),n==null||n()}),e}const Io={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Ro=Y({__name:"PresenterMouse",setup(t){return(e,s)=>{const n=ht;return d(xe).cursor?(f(),y("div",Io,[w(n,{class:"absolute",style:le({left:`${d(xe).cursor.x}%`,top:`${d(xe).cursor.y}%`})},null,8,["style"])])):x("v-if",!0)}}}),Ao=H(Ro,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),Lo=Y({__name:"SlidesShow",props:{renderContext:{type:String,required:!0}},setup(t){const{currentSlideRoute:e,currentTransition:s,getPrimaryClicks:n,isPresenter:o,nextRoute:r,slides:i}=se();ge(e,()=>{var h,p;(h=e.value)!=null&&h.meta&&e.value.meta.preload!==!1&&(e.value.meta.__preloaded=!0),(p=r.value)!=null&&p.meta&&r.value.meta.preload!==!1&&(r.value.meta.__preloaded=!0)},{immediate:!0});const a=Eo(),l=Ie();it(()=>import("./DrawingLayer-ZYN5sQJf.js"),__vite__mapDeps([12,2,10,6,3,4,7,5,8,9])).then(h=>l.value=h.default);const c=L(()=>i.value.filter(h=>{var p;return((p=h.meta)==null?void 0:p.__preloaded)||h===e.value}));function u(){Ye.value=!0,As()}return(h,p)=>(f(),y(z,null,[x(" Global Bottom "),w(d(us)),x(" Slides "),(f(),C(nt(d(a)?"div":Jt),Xt(d(Ye)?{}:d(s),{id:"slideshow",tag:"div",onAfterLeave:u}),{default:A(()=>[(f(!0),y(z,null,ke(c.value,v=>ot((f(),y("div",{key:v.no},[w(ut,{is:v.component,"clicks-context":d(n)(v),class:F([d(dt)(v),"overflow-hidden"]),route:v,"render-context":h.renderContext},null,8,["is","clicks-context","class","route","render-context"])])),[[rt,v===d(e)]])),128))]),_:1},16)),x(" Global Top "),w(d(ds)),l.value?(f(),C(d(l),{key:0})):x("v-if",!0),d(o)?x("v-if",!0):(f(),C(Ao,{key:1}))],64))}}),zo=H(Lo,[["__scopeId","data-v-9156e924"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/SlidesShow.vue"]]);export{Wo as G,U as I,Go as N,Ko as Q,Bs as S,fe as V,zo as a,Bo as r,jo as u};
