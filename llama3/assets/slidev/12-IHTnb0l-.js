import{_}from"./SlideCurrentNo-DXh9C2ha.js";import{I as g}from"./default-C78aYwz8.js";import{b as x,L as u}from"../index-9B86silg.js";import{p as d,u as c,f as b}from"./context-BT4Oe31f.js";import{o as v,c as $,k as y,e,$ as t,l as C,q as P,s as k}from"../modules/vue-C2_u18UA.js";import"../modules/shiki-B_Yc-FM6.js";const w={__name:"12",setup(p,{expose:o}){o(),d(u);const{$slidev:a,$nav:r,$clicksContext:l,$clicks:i,$page:n,$renderContext:m,$frontmatter:f}=c(),s={$slidev:a,$nav:r,$clicksContext:l,$clicks:i,$page:n,$renderContext:m,$frontmatter:f,InjectedLayout:g,get frontmatter(){return u},get useSlideContext(){return c},get _provideFrontmatter(){return d},get _frontmatterToProps(){return b}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}};function I(p,o,a,r,l,i){const n=_;return v(),$(r.InjectedLayout,P(k(r._frontmatterToProps(r.frontmatter,11))),{default:y(()=>[o[0]||(o[0]=e("h1",null,"Pre-training - Data",-1)),o[1]||(o[1]=e("ul",null,[e("li",null,"Knowledge-cutoff: the end of 2023"),e("li",null,[t("Web Data Curation: "),e("ul",null,[e("li",null,"PII & safety filtering, Text extraction & cleaning, De-duplication, Heuristic filtering"),e("li",null,[t("Model-based quality filtering "),e("ul",null,[e("li",null,[t("Use "),e("code",null,"fasttext"),t(" to recognize if a given text would be referenced by Wikipedia.")]),e("li",null,[e("span",{color:"red"},"Roberta-based classifiers"),t(" trained on "),e("span",{color:"orange"},"Llama 2"),t(" predictions.")])])]),e("li",null,[t("Code and reasoning data "),e("ul",null,[e("li",null,"Build domain-specific pipelines that extract code and math-relevant web pages."),e("li",null,[e("span",{color:"red"},"DistilRoberta models"),t(" trained on web data annotated by "),e("span",{color:"orange"},"Llama 2"),t(".")])])]),e("li",null,[t("Multilingual data: "),e("code",null,"fasttext"),t("-based model to categorize documents into 176 languages.")])])])],-1)),C(n,{class:"absolute bottom-4 right-6 text-sm text-gray-400"})]),_:1},16)}const h=x(w,[["render",I],["__file","/@slidev/slides/12.md"]]);export{h as default};