import{d as a,y as n,o as c,b as d,e as r,f as u,i as f,h as p}from"../modules/vue-n0hHVRTh.js";import{b as m}from"../index-DKLZTaXu.js";function i(e){return e.startsWith("/")?"/1112cp2-lab4/"+e.slice(1):e}function g(e,s=!1,l="cover"){const t=e&&(e[0]==="#"||e.startsWith("rgb")),o={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?s?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:l};return o.background||delete o.background,o}const v={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},_=a({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(e){const s=e,l=n(()=>g(s.image,!1,s.backgroundSize));return(t,o)=>(c(),d("div",v,[r("div",{class:f(["slidev-layout default",s.class])},[u(t.$slots,"default")],2),r("div",{class:"w-full h-full",style:p(l.value)},null,4)]))}}),S=m(_,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/layouts/image-right.vue"]]);export{S as I};