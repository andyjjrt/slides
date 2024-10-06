import{d as M,y as H,t as B,D as P,n as T,a7 as I,o as v,b as h,i as y,e as D,x as E}from"../modules/vue-Bf2pOx8P.js";import{C as N,b as j}from"../index-BMzeCiwC.js";const m="slidev-note-fade",r="slidev-note-click-mark",K=M({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1},clicksContext:{type:Object,required:!1},autoScroll:{type:Boolean,required:!1}},emits:["markerDblclick","markerClick"],setup(g,{expose:C,emit:c}){C();const s=g,f=c,k=H(()=>{var l,n;return((l=s.clicksContext)==null?void 0:l.current)!=null&&((n=s.noteHtml)==null?void 0:n.includes("slidev-note-click-mark"))}),a=B(null);function _(){var w;if(!a.value||!k.value)return;const l=Array.from(a.value.querySelectorAll(`.${r}`)),n=+(((w=s.clicksContext)==null?void 0:w.current)??N),i=n<0||n>=N,S=new Set;function b(e){!e||e===a.value||(S.add(e),e.parentElement&&b(e.parentElement))}const L=new Map;for(const e of l){const t=e.parentElement,o=Number(e.dataset.clicks);L.set(o,e),b(t),Array.from(t.childNodes).forEach(d=>{if(d.nodeType===3){const A=document.createElement("span");A.textContent=d.textContent,t.insertBefore(A,d),d.remove()}})}const q=Array.from(a.value.querySelectorAll("*"));let u=0;const p=new Map;for(const e of q)p.has(u)||p.set(u,[]),p.get(u).push(e),e.classList.contains(r)&&(u=Number(e.dataset.clicks)||u+1);for(const[e,t]of p)i?t.forEach(o=>o.classList.remove(m)):t.forEach(o=>o.classList.toggle(m,S.has(o)?!1:e!==n));for(const[e,t]of L)t.classList.remove(m),t.classList.toggle(`${r}-past`,i?!1:e<n),t.classList.toggle(`${r}-active`,i?!1:e===n),t.classList.toggle(`${r}-next`,i?!1:e===n+1),t.classList.toggle(`${r}-future`,i?!1:e>n+1),t.ondblclick=o=>{f("markerDblclick",o,e),!o.defaultPrevented&&(s.clicksContext.current=e,o.stopPropagation(),o.stopImmediatePropagation())},t.onclick=o=>{f("markerClick",o,e)},s.autoScroll&&e===n&&t.scrollIntoView({block:"center",behavior:"smooth"})}P(()=>{var l;return[s.noteHtml,(l=s.clicksContext)==null?void 0:l.current]},()=>{T(()=>{_()})},{immediate:!0}),I(()=>{_()});const x={props:s,emit:f,withClicks:k,noteDisplay:a,CLASS_FADE:m,CLASS_MARKER:r,highlightNote:_};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),O=["innerHTML"],R=["textContent"],V=["textContent"];function z(g,C,c,s,f,k){return c.noteHtml?(v(),h("div",{key:0,ref:"noteDisplay",class:y(["prose overflow-auto outline-none slidev-note",[s.props.class,s.withClicks?"slidev-note-with-clicks":""]]),innerHTML:c.noteHtml},null,10,O)):c.note?(v(),h("div",{key:1,class:y(["prose overflow-auto outline-none slidev-note",s.props.class])},[D("p",{textContent:E(c.note)},null,8,R)],2)):(v(),h("div",{key:2,class:y(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",s.props.class])},[D("p",{textContent:E(s.props.placeholder||"No notes.")},null,8,V)],2))}const G=j(K,[["render",z],["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.47_vite@5.4.8/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{G as N};
