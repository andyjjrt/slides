import{x as B,y as E}from"../modules/unplugin-icons-XXPq_Opt.js";import{d as N,t as I,aw as q,C as v,a3 as V,y as C,ax as $,o as i,b,f as M,A as u,c as k,g as R,i as z,h as D}from"../modules/vue-BG5_Ruuw.js";import{c as x,Q as W,R as K,S as Q,b as U}from"../index-Baj6bX1h.js";import{u as j}from"./context-C1I9yFn3.js";const F=["title"],G=N({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:x.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(S){const e=S,{$clicksContext:o}=j(),s=I(),p=W();q(()=>{o.unregister(p)}),v(()=>{var t;(t=s.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),V(()=>{var m;if(!o||o.disabled||!((m=e.ranges)!=null&&m.length))return;const{start:t,end:n,delta:r}=o.resolve(e.at,e.ranges.length-1);o.register(p,{max:n,delta:r});const a=C(()=>o.disabled?e.ranges.length-1:Math.max(0,o.current-t+1)),c=C(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());v(()=>{if(!s.value)return;let d=e.ranges[a.value]??c.value;const h=d==="hide";s.value.classList.toggle(K,h),h&&(d=e.ranges[a.value+1]??c.value);const f=s.value.querySelector(".shiki"),_=Array.from(f.querySelectorAll("code > .line")),A=_.length;if(Q(d,A,e.startLine,l=>[_[l]]),e.maxHeight){const l=Array.from(f.querySelectorAll(".line.highlighted"));l.reduce((y,L)=>L.offsetHeight+y,0)>s.value.offsetHeight?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l.length>0&&l[Math.round((l.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:g,copy:w}=$();function H(){var n,r;const t=(r=(n=s.value)==null?void 0:n.querySelector(".slidev-code"))==null?void 0:r.textContent;t&&w(t)}return(t,n)=>{const r=B,a=E;return i(),b("div",{ref_key:"el",ref:s,class:z(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:D({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[M(t.$slots,"default"),u(x).codeCopy?(i(),b("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(g)?"Copied":"Copy",onClick:n[0]||(n[0]=c=>H())},[u(g)?(i(),k(r,{key:0,class:"p-2 w-8 h-8"})):(i(),k(a,{key:1,class:"p-2 w-8 h-8"}))],8,F)):R("v-if",!0)],6)}}}),Y=U(G,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);export{Y as _};