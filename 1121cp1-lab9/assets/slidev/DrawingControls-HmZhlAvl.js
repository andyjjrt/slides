import{o as Q,y as T,z as Y,A as Z,B as J,C as W,D as X,E as ee,F as ne,G as se,H as te,I as oe}from"../modules/unplugin-icons-BFZUSbD2.js";import{d as B,t as $,Q as le,ay as ae,b as L,f as ie,h as z,A as e,o as g,c as x,k as o,i as l,l as n,e as r,x as re,a1 as m,a2 as ue,Z as ce,F as de,aj as b,g as _e}from"../modules/vue-BYWgGKSk.js";import{L as pe}from"../modules/shiki-CwGwPBIn.js";import{u as me}from"./DrawingPreview-MPwT1lvE.js";import{I as a,V as D}from"./SlidesShow-BdKxtUUZ.js";import{b as M}from"../index-_5bBqOWG.js";import"./bottom-CSCw5PAf.js";import"./context-BL98Gkxk.js";const ge=B({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(h){const u=h,w=$(null),f=u.initial??{x:0,y:0},k=u.storageKey?le(u.storageKey,f):$(f),{style:y}=ae(w,{initialValue:k});return(v,d)=>(g(),L("div",{ref_key:"el",ref:w,class:"fixed",style:z(e(y))},[ie(v.$slots,"default")],4))}}),we=M(ge,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/Draggable.vue"]]),fe=r("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[r("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),ve=r("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[r("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),r("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),r("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),be={class:"flex bg-main p-2"},ke={class:"inline-block w-7 text-center"},ye={class:"pt-.5"},Ce=B({__name:"DrawingControls",setup(h){const{brush:u,canClear:w,canRedo:f,canUndo:k,clear:y,drauu:v,drawingEnabled:d,drawingMode:i,drawingPinned:c,brushColors:S}=me();function V(){v.undo()}function A(){v.redo()}let C="stylus";function _(p){i.value=p,d.value=!0,p!=="eraseLine"&&(C=p)}function E(p){u.color=p,d.value=!0,i.value=C}return(p,s)=>{const U=Q,j=T,F=Y,I=Z,K=J,N=W,R=X,q=ee,P=ne,G=se,H=te,O=oe;return g(),x(we,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(d)?"":e(c)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[n(a,{title:"Draw with stylus",class:l({shallow:e(i)!=="stylus"}),onClick:s[0]||(s[0]=t=>_("stylus"))},{default:o(()=>[n(U)]),_:1},8,["class"]),n(a,{title:"Draw a line",class:l({shallow:e(i)!=="line"}),onClick:s[1]||(s[1]=t=>_("line"))},{default:o(()=>[fe]),_:1},8,["class"]),n(a,{title:"Draw an arrow",class:l({shallow:e(i)!=="arrow"}),onClick:s[2]||(s[2]=t=>_("arrow"))},{default:o(()=>[n(j)]),_:1},8,["class"]),n(a,{title:"Draw an ellipse",class:l({shallow:e(i)!=="ellipse"}),onClick:s[3]||(s[3]=t=>_("ellipse"))},{default:o(()=>[n(F)]),_:1},8,["class"]),n(a,{title:"Draw a rectangle",class:l({shallow:e(i)!=="rectangle"}),onClick:s[4]||(s[4]=t=>_("rectangle"))},{default:o(()=>[n(I)]),_:1},8,["class"]),n(a,{title:"Erase",class:l({shallow:e(i)!=="eraseLine"}),onClick:s[5]||(s[5]=t=>_("eraseLine"))},{default:o(()=>[n(K)]),_:1},8,["class"]),n(D),n(e(pe),null,{popper:o(()=>[r("div",be,[r("div",ke,re(e(u).size),1),r("div",ye,[m(r("input",{"onUpdate:modelValue":s[6]||(s[6]=t=>e(u).size=t),type:"range",min:"1",max:"15",onChange:s[7]||(s[7]=t=>i.value=e(C))},null,544),[[ue,e(u).size]])])])]),default:o(()=>[n(a,{title:"Adjust stroke width",class:l({shallow:e(i)==="eraseLine"})},{default:o(()=>[ve]),_:1},8,["class"])]),_:1}),(g(!0),L(de,null,ce(e(S),t=>(g(),x(a,{key:t,title:"Set brush color",class:l(e(u).color===t&&e(i)!=="eraseLine"?"active":"shallow"),onClick:xe=>E(t)},{default:o(()=>[r("div",{class:l(["w-6 h-6 transition-all transform border",e(u).color!==t?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:z(e(d)?{background:t}:{borderColor:t})},null,6)]),_:2},1032,["class","onClick"]))),128)),n(D),n(a,{title:"Undo",class:l({disabled:!e(k)}),onClick:s[8]||(s[8]=t=>V())},{default:o(()=>[n(N)]),_:1},8,["class"]),n(a,{title:"Redo",class:l({disabled:!e(f)}),onClick:s[9]||(s[9]=t=>A())},{default:o(()=>[n(R)]),_:1},8,["class"]),n(a,{title:"Delete",class:l({disabled:!e(w)}),onClick:s[10]||(s[10]=t=>e(y)())},{default:o(()=>[n(q)]),_:1},8,["class"]),n(D),n(a,{title:e(c)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(c)}),onClick:s[11]||(s[11]=t=>c.value=!e(c))},{default:o(()=>[m(n(P,{class:"transform -rotate-45"},null,512),[[b,e(c)]]),m(n(G,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"]),e(d)?(g(),x(a,{key:0,title:e(c)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(d)}),onClick:s[12]||(s[12]=t=>d.value=!e(d))},{default:o(()=>[m(n(H,null,null,512),[[b,e(c)]]),m(n(O,null,null,512),[[b,!e(c)]])]),_:1},8,["title","class"])):_e("v-if",!0)]),_:1},8,["class"])}}}),Ve=M(Ce,[["__file","/home/runner/work/slides/slides/node_modules/.pnpm/@slidev+client@0.48.1_postcss@8.4.35_vite@5.1.5/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{Ve as default};
