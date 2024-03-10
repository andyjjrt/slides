import{o as i,e as _,f as e,d as A,b as k,p as $,q as h,s as C,_ as D,v as y,w as I,x as R,c as N,a as E,y as q,z as M,A as O,B as U,C as W,D as Z,E as G,G as X,H as j,I as J,J as K,K as Q,L as Y,M as ee,g as t,N as te,l as o,t as se,n as v,i as V,O as P,S as B,m as S,P as oe,Q as H,R as T,T as L,U as ne,V as le,j as ae,W as ie,X as b,Y as re,Z as ce,F as ue,$ as de,a0 as _e,a1 as pe,a2 as me,a3 as ve}from"./index-15xEOiZY.js";import{N as he}from"./NoteDisplay-OS5edjTp.js";import fe from"./DrawingControls-z7aejaEA.js";const ge={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xe=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),we=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"},null,-1),ye=[xe,we];function Se(l,r){return i(),_("svg",ge,[...ye])}const be={name:"carbon-zoom-out",render:Se},ke={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$e=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4z"},null,-1),Ce=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"},null,-1),ze=[$e,Ce];function Ne(l,r){return i(),_("svg",ke,[...ze])}const Me={name:"carbon-zoom-in",render:Ne},Ve={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Pe=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),Be=[Pe];function He(l,r){return i(),_("svg",Ve,[...Be])}const Te={name:"carbon-renew",render:He},Le={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ae=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"},null,-1),De=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01z"},null,-1),Fe=[Ae,De];function Ie(l,r){return i(),_("svg",Le,[...Fe])}const Re={name:"carbon-time",render:Ie},Ee="/1121cp1-lab9/assets/logo-title-horizontal-XSaaVPPu.png",qe=A({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(l){const r=l,g=k(()=>{var c,u,n;return(n=(u=(c=$.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.note}),x=k(()=>{var c,u,n;return(n=(u=(c=$.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.noteHTML});return(c,u)=>(i(),h(he,{class:C(r.class),note:g.value,"note-html":x.value},null,8,["class","note","note-html"]))}}),Oe=D(qe,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.46.1_postcss@8.4.35_typescript@5.3.3_vite@5.0.11/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=l=>(me("data-v-8cefd2a7"),l=l(),ve(),l),Ue={class:"bg-main h-full slidev-presenter"},We={class:"grid-section top flex"},Ze=f(()=>e("img",{src:Ee,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Ge=f(()=>e("div",{class:"flex-auto"},null,-1)),Xe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},je=f(()=>e("div",{class:"context"}," current ",-1)),Je=f(()=>e("div",{class:"context"}," next ",-1)),Ke={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Qe={class:"border-t border-main py-1 px-2 text-sm"},Ye={class:"grid-section bottom"},et={class:"progress-bar"},tt=A({__name:"Presenter",setup(l){const r=y();I(),R(r);const g=N.titleTemplate.replace("%s",N.title||"Slidev");E({title:`Presenter - ${g}`}),y(!1);const{timer:x,resetTimer:c}=q(),u=y([]),n=k(()=>M.value<O.value?{route:$.value,clicks:M.value+1}:U.value?{route:W.value,clicks:0}:null);return Z(),G(()=>{const z=r.value.querySelector("#slide-content"),s=X(j()),w=J();K(()=>{if(!w.value||Y.value||!ee.value)return;const d=z.getBoundingClientRect(),p=(s.x-d.left)/d.width*100,m=(s.y-d.top)/d.height*100;if(!(p<0||p>100||m<0||m>100))return{x:p,y:m}},d=>{Q.cursor=d})}),(z,s)=>{const w=Re,d=Te,p=Me,m=be;return i(),_(ue,null,[e("div",Ue,[e("div",{class:C(["grid-container",`layout${t(te)}`])},[e("div",We,[Ze,Ge,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[0]||(s[0]=(...a)=>t(c)&&t(c)(...a))},[o(w,{class:"absolute"}),o(d,{class:"absolute opacity-0"})]),e("div",Xe,se(t(x)),1)]),e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:v(t(V))},[o(B,{key:"main",class:"h-full w-full"},{default:P(()=>[o(de,{"render-context":"presenter"})]),_:1}),je],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:v(t(V))},[n.value?(i(),h(B,{key:"next",class:"h-full w-full"},{default:P(()=>{var a;return[o(t(pe),{is:(a=n.value.route)==null?void 0:a.component,"clicks-elements":u.value,"onUpdate:clicksElements":s[1]||(s[1]=F=>u.value=F),clicks:n.value.clicks,"clicks-disabled":!1,class:C(t(_e)(n.value.route)),route:n.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):S("v-if",!0),Je],4),S(" Notes "),(i(),_("div",Ke,[(i(),h(Oe,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:v({fontSize:`${t(oe)}em`})},null,8,["style"])),e("div",Qe,[e("button",{class:"slidev-icon-btn",onClick:s[2]||(s[2]=(...a)=>t(H)&&t(H)(...a))},[o(T,{text:"Increase font size"}),o(p)]),e("button",{class:"slidev-icon-btn",onClick:s[3]||(s[3]=(...a)=>t(L)&&t(L)(...a))},[o(T,{text:"Decrease font size"}),o(m)]),S("v-if",!0)])])),e("div",Ye,[o(ne,{persist:!0})]),(i(),h(fe,{key:2}))],2),e("div",et,[e("div",{class:"progress h-2px bg-primary transition-all",style:v({width:`${(t(le)-1)/(t(ae)-1)*100}%`})},null,4)])]),o(ie),o(ce,{modelValue:t(b),"onUpdate:modelValue":s[5]||(s[5]=a=>re(b)?b.value=a:null)},null,8,["modelValue"])],64)}}}),lt=D(tt,[["__scopeId","data-v-8cefd2a7"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.46.1_postcss@8.4.35_typescript@5.3.3_vite@5.0.11/node_modules/@slidev/client/internals/Presenter.vue"]]);export{lt as default};
