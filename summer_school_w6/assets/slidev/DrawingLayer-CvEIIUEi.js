import{d as u,t as c,a7 as d,D as m,E as p,o as _,b as f,i as v}from"../modules/vue-jJv3i-5y.js";import{u as g}from"./context-DLoM1jUq.js";import{u as w}from"./DrawingPreview-DfKYBNxk.js";import{b}from"../index-CzxDjOKc.js";import"./bottom-C_cAqf8k.js";import"../modules/shiki-DNME4isg.js";const E=u({__name:"DrawingLayer",setup(l,{expose:t}){t();const{drauu:e,drawingEnabled:n,loadCanvas:o}=w(),s=g().$scale,a=c();d(()=>{e.mount(a.value,a.value.parentElement),m(s,i=>e.options.coordinateScale=1/i,{immediate:!0}),o()}),p(()=>{e.unmount()});const r={drauu:e,drawingEnabled:n,loadCanvas:o,scale:s,svg:a};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function h(l,t,e,n,o,s){return _(),f("svg",{ref:"svg",class:v(["w-full h-full absolute top-0",{"pointer-events-none":!n.drawingEnabled,"touch-none":n.drawingEnabled}])},null,2)}const B=b(E,[["render",h],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.42_vite@5.4.2/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{B as default};
