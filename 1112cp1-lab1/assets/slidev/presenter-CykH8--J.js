import{_ as X,a as Z,b as Y,c as ee,d as te}from"../modules/unplugin-icons-D2cp9unf.js";import{t as M,a0 as se,d as V,c as x,i as f,A as s,o as i,y as k,b as h,e as t,l as r,F as j,x as $,g as N,Z as oe,a1 as ne,a2 as le,h as z,p as H,a as J,D as A,M as ae,a3 as re,J as ie,a4 as ce,a5 as ue,k as S,a6 as de}from"../modules/vue-B7qjCGy3.js";import{b as q,C as pe,e as me,c as L,h as ve,j as _e,d as fe,k as xe}from"../index-DucVZdZM.js";import{r as he,u as ke,S as O,I as G,Q as ye,a as be,N as ge,G as Ce}from"./SlidesShow-loN4xyeu.js";import{s as we,b as T,p as Se,S as $e,g as Ne,c as ze,i as Fe,d as Ie}from"./bottom-_b1flpeC.js";import{N as De}from"./NoteDisplay-Bgyr58Lj.js";import Te from"./DrawingControls-Ceg-QiT3.js";import{u as Me}from"./DrawingPreview-DOtapvfd.js";import"../modules/shiki-CDqluCOt.js";import"./context-CnCwP3fW.js";function je(n){if(n==null)return{info:M(),update:async()=>{}};const a=`/@slidev/slide/${n}.json`,{data:e,execute:o}=se(a).json().get();return o(),{info:e,update:async p=>await fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(p)}).then(c=>c.json())}}const Ve=V({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(n){const a=n,{info:e}=je(a.no);return(o,d)=>{var p,c;return i(),x(De,{class:f(a.class),note:(p=s(e))==null?void 0:p.note,"note-html":(c=s(e))==null?void 0:c.noteHTML,"clicks-context":o.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),qe=q(Ve,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/NoteStatic.vue"]]),Q=n=>(H("data-v-e5039404"),n=n(),J(),n),Be=["title"],Pe={class:"flex gap-1 items-center min-w-16 tabular-nums"},Re=Q(()=>t("div",{"flex-auto":""},null,-1)),Ae={"text-primary":""},Le=Q(()=>t("span",{op25:""},"/",-1)),Oe={op50:""},Ge=["max"],He=V({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(n){const a=n,e=k(()=>a.clicksContext.total),o=k({get(){return a.clicksContext.current>e.value?-1:a.clicksContext.current},set(c){a.clicksContext.current=c}}),d=k(()=>Array.from({length:e.value+1},(c,u)=>u));function p(){(o.value<0||o.value>e.value)&&(o.value=0)}return(c,u)=>{const F=X;return i(),h("div",{class:f(["flex gap-0.5 items-center select-none",e.value?"":"op50"]),title:`Clicks in this slide: ${e.value}`},[t("div",Pe,[r(F,{"text-sm":"",op50:""}),o.value>=0&&o.value!==s(pe)?(i(),h(j,{key:0},[Re,t("span",Ae,$(o.value),1),Le],64)):N("v-if",!0),t("span",Oe,$(e.value),1)]),t("div",{relative:"","flex-auto":"",h5:"",flex:"~",onDblclick:u[2]||(u[2]=l=>o.value=c.clicksContext.total)},[(i(!0),h(j,null,oe(d.value,l=>(i(),h("div",{key:l,border:"y main","of-hidden":"",relative:"",class:f([l===0?"rounded-l border-l":"",l===e.value?"rounded-r border-r":""]),style:z({width:e.value>0?`${1/e.value*100}%`:"100%"})},[t("div",{absolute:"","inset-0":"",class:f(l<=o.value?"bg-primary op20":"")},null,2),t("div",{class:f([+l==+o.value?"text-primary font-bold op100 border-primary":"op30 border-main",l===0?"rounded-l":"",l===e.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},$(l),3)],6))),128)),ne(t("input",{"onUpdate:modelValue":u[0]||(u[0]=l=>o.value=l),class:"range",absolute:"","inset-0":"",type:"range",min:0,max:e.value,step:1,"z-10":"",op0:"",style:z({"--thumb-width":`${1/(e.value+1)*100}%`}),onMousedown:p,onFocus:u[1]||(u[1]=l=>{var g;return(g=l.currentTarget)==null?void 0:g.blur()})},null,44,Ge),[[le,o.value]])],32)],10,Be)}}}),Je=q(He,[["__scopeId","data-v-e5039404"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/ClicksSlider.vue"]]),B=n=>(H("data-v-4b5e766a"),n=n(),J(),n),Qe={class:"bg-main h-full slidev-presenter"},Ue=B(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),We={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Ee=B(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Ke={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Xe={class:"border-t border-main py-1 px-2 text-sm"},Ze={class:"grid-section bottom flex"},Ye=B(()=>t("div",{"flex-auto":""},null,-1)),et={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},tt={class:"progress-bar"},st=V({__name:"presenter",setup(n){const a=M();he(),ke(a);const{clicksContext:e,currentSlideNo:o,currentSlideRoute:d,hasNext:p,nextRoute:c,slides:u,queryClicks:F,getPrimaryClicks:l,total:g}=me(),{isDrawing:U}=Me(),W=L.titleTemplate.replace("%s",L.title||"Slidev");ve({title:`Presenter - ${W}`}),M(!1);const{timer:E,resetTimer:P}=_e(),K=k(()=>u.value.map(w=>fe(w))),m=k(()=>e.value.current<e.value.total?[d.value,e.value.current+1]:p.value?[c.value,0]:null),C=k(()=>m.value&&K.value[m.value[0].no-1]);return A([d,F],()=>{C.value&&(C.value.current=m.value[1])},{immediate:!0}),ae(),re(()=>{const w=a.value.querySelector("#slide-content"),_=ie(ce()),I=ue();A(()=>{if(!I.value||U.value||!we.value)return;const v=w.getBoundingClientRect(),y=(_.x-v.left)/v.width*100,b=(_.y-v.top)/v.height*100;if(!(y<0||y>100||b<0||b>100))return{x:y,y:b}},v=>{xe.cursor=v})}),(w,_)=>{var R;const I=Z,v=Y,y=ee,b=te;return i(),h(j,null,[t("div",Qe,[t("div",{class:f(["grid-container",`layout${s(Se)}`])},[t("div",{ref_key:"main",ref:a,class:"relative grid-section main flex flex-col"},[r(O,{key:"main",class:"h-full w-full p-2 lg:p-4 flex-auto"},{default:S(()=>[r(be,{"render-context":"presenter"})]),_:1}),(i(),x(Je,{key:(R=s(d))==null?void 0:R.no,"clicks-context":s(l)(s(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Ue],512),t("div",We,[m.value&&C.value?(i(),x(O,{key:"next",class:"h-full w-full"},{default:S(()=>[(i(),x($e,{is:m.value[0].component,key:m.value[0].no,"clicks-context":C.value,class:f(s(Ne)(m.value[0])),route:m.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):N("v-if",!0),Ee]),N(" Notes "),(i(),h("div",Ke,[(i(),x(qe,{key:`static-${s(o)}`,no:s(o),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:z({fontSize:`${s(ze)}em`}),"clicks-context":s(e)},null,8,["no","style","clicks-context"])),t("div",Xe,[r(G,{title:"Increase font size",onClick:s(Fe)},{default:S(()=>[r(I)]),_:1},8,["onClick"]),r(G,{title:"Decrease font size",onClick:s(Ie)},{default:S(()=>[r(v)]),_:1},8,["onClick"]),N("v-if",!0)])])),t("div",Ze,[r(ge,{persist:!0}),Ye,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:_[2]||(_[2]=(...D)=>s(P)&&s(P)(...D))},[r(y,{class:"absolute"}),r(b,{class:"absolute opacity-0"})]),t("div",et,$(s(E)),1)]),(i(),x(Te,{key:2}))],2),t("div",tt,[t("div",{class:"progress h-3px bg-primary transition-all",style:z({width:`${(s(o)-1)/(s(g)-1)*100}%`})},null,4)])]),r(Ce),r(ye,{modelValue:s(T),"onUpdate:modelValue":_[3]||(_[3]=D=>de(T)?T.value=D:null)},null,8,["modelValue"])],64)}}}),mt=q(st,[["__scopeId","data-v-4b5e766a"],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/pages/presenter.vue"]]);export{mt as default};
