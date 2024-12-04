import{o as s,c as a,k as i,e,a9 as l,q as c,s as u,B as n}from"./modules/vue-6mTy9ZQF.js";import{I as m}from"./slidev/default-ByL96hJ_.js";import{u as p,f as d}from"./slidev/context-Bbi7IJum.js";import"./index-C1Y2yAzn.js";import"./modules/shiki-BzntFxfw.js";const g="/page-attention/KV-cache.png",V={__name:"slide.md__slidev_9",setup(f){const{$slidev:h,$nav:_,$clicksContext:t,$clicks:b,$page:k,$renderContext:y,$frontmatter:r}=p();return t.setup(),(x,o)=>(s(),a(m,c(u(n(d)(n(r),8))),{default:i(()=>o[0]||(o[0]=[e("h1",null,"Problem",-1),e("ul",null,[e("li",null,[e("strong",null,"Large KV cache"),e("ul",null,[e("li",null,[l("Single token KV cache of 13B OPT model: "),e("span",{color:"red"},"800KB"),e("ul",null,[e("li",null,[e("span",{color:"red"},"2"),l(" (k&v vectors) × "),e("span",{color:"red"},"5120"),l(" (hidden state size) × "),e("span",{color:"red"},"40"),l(" (number of layers) × "),e("span",{color:"red"},"2"),l(" (bytes per FP16).")])])]),e("li",null,[l("2048 tokens costs "),e("span",{color:"orange"},"1.6GB"),l(" KV cache size")]),e("li",null,"Memory will become an increasingly significant bottleneck")])]),e("li",null,[e("strong",null,"Complex decoding algorithms"),e("ul",null,[e("li",null,[l("LLM services offer a range of decoding algorithms for users to select "),e("br"),l(" from, each with varying implications for memory management "),e("br"),l(" complexity.")])])]),e("li",null,[e("strong",null,"Scheduling for unknown input & output lengths."),e("ul",null,[e("li",null,[l("Requires the memory management system to accommodate a wide "),e("br"),l("range of prompt lengths.")])])])],-1),e("img",{src:g,class:"w-50 absolute right-12 bottom-22"},null,-1)])),_:1},16))}};export{V as default};
