import{I as f}from"./default-aFPF9ihK.js";import{b as g,R as s}from"../index-CHd_ipKT.js";import{p as i,u,f as x}from"./context-C9gyYOJl.js";import{o as v,c as h,k,q as $,s as b,e,$ as c}from"../modules/vue-jJv3i-5y.js";import"../modules/shiki-DNME4isg.js";const C={__name:"18",setup(d,{expose:o}){o(),i(s);const{$slidev:r,$nav:t,$clicksContext:n,$clicks:l,$page:m,$renderContext:_,$frontmatter:p}=u(),a={$slidev:r,$nav:t,$clicksContext:n,$clicks:l,$page:m,$renderContext:_,$frontmatter:p,InjectedLayout:f,get frontmatter(){return s},get useSlideContext(){return u},get _provideFrontmatter(){return i},get _frontmatterToProps(){return x}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},P=e("h1",null,"Repetition Solutions",-1),j=e("ul",null,[e("li",null,[e("strong",null,"n-gram detection"),e("ul",null,[e("li",null,"It’ll kill some things we really want to repeat.")])]),e("li",null,[e("strong",null,"Use a different training objective"),e("ul",null,[e("li",null,"Unlikelihood objective (Welleck et al., 2020) penalize generation of already-seen tokens"),e("li",null,"Coverage loss (See et al., 2017) Prevents attention mechanism from attending to the same words")])]),e("li",null,[e("strong",null,"Use a different decoding objective"),e("ul",null,[e("li",null,[c("Contrastive decoding (Li et al, 2022) searches for strings x that maximize "),e("code",null,"logprob_largeLM (x) – logprob_smallLM (x)"),c(".")])])])],-1);function S(d,o,r,t,n,l){return v(),h(t.InjectedLayout,$(b(t._frontmatterToProps(t.frontmatter,17))),{default:k(()=>[P,j]),_:1},16)}const z=g(C,[["render",S],["__file","/@slidev/slides/18.md"]]);export{z as default};