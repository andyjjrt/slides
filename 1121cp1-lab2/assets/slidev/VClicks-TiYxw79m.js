import{X as C,b as S,Y as V,Z as w}from"../index-cka-qXg8.js";import{d as k,a3 as z,C as G,o as I,c as $,F as B,av as M,v as a,aw as f,ax as D,l as F,a1 as L}from"../modules/vue-BYWgGKSk.js";import{u as T}from"./context-DGQ6YoZ3.js";const E=k({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(c){const d=c,{$clicksContext:n}=T();return z(()=>{G(u=>{if(!n||n.disabled)return;let l=+d.size;Number.isNaN(l)&&(console.warn(`[slidev] Invalid size for VClickGap: ${d.size}`),l=1);const o=n.currentOffset+l-1,t=C();n.register(t,{max:o,delta:l}),u(()=>n.unregister(t))})}),(u,l)=>(I(),$(B))}}),O=S(E,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/builtin/VClickGap.vue"]]),_=["ul","ol"],Y=k({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1}},render(){var A,b;const c=+this.every,[d,n]=V(this.at),u=M("click"),l=(s,e)=>L(s,[[u,e,"",{hide:this.hide,fade:this.fade}]]),o=s=>s.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?o(e.children):[e]);let t=(b=(A=this.$slots).default)==null?void 0:b.call(A);if(!t)return;t=o(w(t));const g=(s,e=1)=>o(s).map(r=>{if(!f(r))return r;if(_.includes(r.type)&&Array.isArray(r.children)){const i=p(r.children,e+1);return a(r,{},i)}return a(r)});let N=1,h=0;const p=(s,e=1)=>o(s).map(r=>{if(!f(r)||r.type===D)return r;const i=+n+Math.ceil(N++/c)-1;let m;e<+this.depth&&Array.isArray(r.children)?m=a(r,{},g(r.children,e)):m=a(r);const v=i-h;return h=i,l(m,d?v>=0?`+${v}`:`${v}`:i)}),y=()=>F(O,{size:+n+Math.ceil((N-1)/c)-1-h});if(t.length===1&&_.includes(t[0].type)&&Array.isArray(t[0].children))return a(t[0],{},[...p(t[0].children),y()]);if(t.length===1&&t[0].type==="table"){const s=t[0];if(Array.isArray(s.children))return a(s,{},s.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?a(e,{},[...p(e.children),y()]):a(e):e))}return[...p(t),y()]}});export{Y as V};