import{x as V,y as $}from"../modules/unplugin-icons-BHZQd-aS.js";import{d as q,t as P,au as z,C,a3 as W,y as _,av as M,o as r,b as v,f as R,A as p,c as g,g as T,i as U,h as j,k as b,e as i,l as G,m as K,q as O,s as J,$ as s}from"../modules/vue-CwmjtZHK.js";import{c as E,D as Q,E as X,F as Y,b as N,G as x}from"../index-BfOhmem7.js";import{u as S,p as Z,f as ii}from"./context-D1h1ITl1.js";import{I as si}from"./default-DsYmg-_7.js";import"../modules/shiki-2R7PoEgo.js";const ti=["title"],ei=q({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:E.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(y){const t=y,{$clicksContext:a}=S(),e=P(),B=Q();z(()=>{a.unregister(B)}),C(()=>{var l;(l=e.value)==null||l.classList.toggle("slidev-code-line-numbers",t.lines)}),W(()=>{var m;if(!a||a.disabled||!((m=t.ranges)!=null&&m.length))return;const{start:l,end:h,delta:k}=a.resolve(t.at,t.ranges.length-1);a.register(B,{max:h,delta:k});const o=_(()=>a.disabled?t.ranges.length-1:Math.max(0,a.current-l+1)),d=_(()=>t.finally==="last"?t.ranges.at(-1):t.finally.toString());C(()=>{if(!e.value)return;let c=t.ranges[o.value]??d.value;const u=c==="hide";e.value.classList.toggle(X,u),u&&(c=t.ranges[o.value+1]??d.value);const D=e.value.querySelector(".shiki"),f=Array.from(D.querySelectorAll("code > .line")),L=f.length;if(Y(c,L,t.startLine,n=>[f[n]]),t.maxHeight){const n=Array.from(D.querySelectorAll(".line.highlighted"));n.reduce((A,I)=>I.offsetHeight+A,0)>e.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:F,copy:w}=M();function H(){var h,k;const l=(k=(h=e.value)==null?void 0:h.querySelector(".slidev-code"))==null?void 0:k.textContent;l&&w(l)}return(l,h)=>{const k=V,o=$;return r(),v("div",{ref_key:"el",ref:e,class:U(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":t.lines}]),style:j({"max-height":t.maxHeight,"overflow-y":t.maxHeight?"scroll":void 0,"--start":t.startLine})},[R(l.$slots,"default"),p(E).codeCopy?(r(),v("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:p(F)?"Copied":"Copy",onClick:h[0]||(h[0]=d=>H())},[p(F)?(r(),g(k,{key:0,class:"p-2 w-8 h-8"})):(r(),g(o,{key:1,class:"p-2 w-8 h-8"}))],8,ti)):T("v-if",!0)],6)}}}),li=N(ei,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),ai=i("h1",null,"HW01 solution",-1),hi={class:"h-[400px] pr-1 overflow-y-scroll"},ni=i("pre",{class:"shiki shiki-themes one-dark-pro light-plus slidev-code",style:{"--shiki-dark":"#abb2bf","--shiki-light":"#000000","--shiki-dark-bg":"#282c34","--shiki-light-bg":"#FFFFFF"}},[i("code",{class:"language-cpp"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#AF00DB"}},"#include"),i("span",{style:{"--shiki-dark":"#98C379","--shiki-light":"#A31515"}}," <iostream>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#AF00DB"}},"#include"),i("span",{style:{"--shiki-dark":"#98C379","--shiki-light":"#A31515"}}," <vector>")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#AF00DB"}},"#include"),i("span",{style:{"--shiki-dark":"#98C379","--shiki-light":"#A31515"}}," <limits>"),i("span",{style:{"--shiki-dark":"#7F848E","--shiki-light":"#008000","--shiki-dark-font-style":"italic","--shiki-light-font-style":"inherit"}}," // For numeric_limits")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#AF00DB"}},"using"),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#0000FF"}}," namespace"),i("span",{style:{"--shiki-dark":"#E5C07B","--shiki-light":"#267F99"}}," std"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#0000FF"}},"int"),i("span",{style:{"--shiki-dark":"#61AFEF","--shiki-light":"#795E26"}}," main"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#0000FF"}},"    int"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," N;"),i("span",{style:{"--shiki-dark":"#7F848E","--shiki-light":"#008000","--shiki-dark-font-style":"italic","--shiki-light-font-style":"inherit"}}," // Number of days")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"    cin "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},">>"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," N;")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"    vector"),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"<"),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#0000FF"}},"int"),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},">"),i("span",{style:{"--shiki-dark":"#61AFEF","--shiki-light":"#795E26"}}," prices"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"(N);"),i("span",{style:{"--shiki-dark":"#7F848E","--shiki-light":"#008000","--shiki-dark-font-style":"italic","--shiki-light-font-style":"inherit"}}," // Array to store the prices")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#AF00DB"}},"    for"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"("),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#0000FF"}},"int"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," i "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"="),i("span",{style:{"--shiki-dark":"#D19A66","--shiki-light":"#098658"}}," 0"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"; i "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"<"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," N; i"),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"++"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"        cin "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},">>"),i("span",{style:{"--shiki-dark":"#E5C07B","--shiki-light":"#001080"}}," prices"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"[i];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#7F848E","--shiki-light":"#008000","--shiki-dark-font-style":"italic","--shiki-light-font-style":"inherit"}},"    // Initialize variables for the minimum price so far and the maximum profit")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#0000FF"}},"    int"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," min_price "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"="),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#267F99"}}," numeric_limits"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"<"),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#0000FF"}},"int"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},">::"),i("span",{style:{"--shiki-dark":"#61AFEF","--shiki-light":"#795E26"}},"max"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"();")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#0000FF"}},"    int"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," max_profit "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"="),i("span",{style:{"--shiki-dark":"#D19A66","--shiki-light":"#098658"}}," 0"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#7F848E","--shiki-light":"#008000","--shiki-dark-font-style":"italic","--shiki-light-font-style":"inherit"}},"    // Loop through each day's price")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#AF00DB"}},"    for"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"("),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#0000FF"}},"int"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," i "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"="),i("span",{style:{"--shiki-dark":"#D19A66","--shiki-light":"#098658"}}," 0"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"; i "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"<"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," N; i"),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"++"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},") {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#7F848E","--shiki-light":"#008000","--shiki-dark-font-style":"italic","--shiki-light-font-style":"inherit"}},"        // Update the minimum price if the current price is lower")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#AF00DB"}},"        if"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," ("),i("span",{style:{"--shiki-dark":"#E5C07B","--shiki-light":"#001080"}},"prices"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"[i] "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"<"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," min_price) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"            min_price "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"="),i("span",{style:{"--shiki-dark":"#E5C07B","--shiki-light":"#001080"}}," prices"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"[i];")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"        } ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#7F848E","--shiki-light":"#008000","--shiki-dark-font-style":"italic","--shiki-light-font-style":"inherit"}},"        // Otherwise, check if selling on this day is more profitable")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#AF00DB"}},"        else"),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#AF00DB"}}," if"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," ("),i("span",{style:{"--shiki-dark":"#E5C07B","--shiki-light":"#001080"}},"prices"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"[i] "),i("span",{style:{"--shiki-dark":"#56B6C2","--shiki-light":"#000000"}},"-"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," min_price "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},">"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," max_profit) {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"            max_profit "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"="),i("span",{style:{"--shiki-dark":"#E5C07B","--shiki-light":"#001080"}}," prices"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"[i] "),i("span",{style:{"--shiki-dark":"#56B6C2","--shiki-light":"#000000"}},"-"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," min_price;")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"        }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"    }")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#7F848E","--shiki-light":"#008000","--shiki-dark-font-style":"italic","--shiki-light-font-style":"inherit"}},"    // Print the maximum profit")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"    cout "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"<<"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," max_profit "),i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#000000"}},"<<"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}}," endl;")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C678DD","--shiki-light":"#AF00DB"}},"    return"),i("span",{style:{"--shiki-dark":"#D19A66","--shiki-light":"#098658"}}," 0"),i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#ABB2BF","--shiki-light":"#000000"}},"}")])])],-1),ki={__name:"3",setup(y){return Z(x),S(),(t,a)=>{const e=li;return r(),g(si,O(J(p(ii)(p(x),2))),{default:b(()=>[ai,i("div",hi,[G(e,K({},{ranges:[]}),{default:b(()=>[ni]),_:1},16)])]),_:1},16)}}},Bi=N(ki,[["__file","/@slidev/slides/3.md"]]);export{Bi as default};
