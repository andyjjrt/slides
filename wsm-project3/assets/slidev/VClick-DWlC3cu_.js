import{d as n,v as o,av as p}from"../modules/vue-BG5_Ruuw.js";import{C as s}from"../index-Baj6bX1h.js";import{_ as r}from"./VClicks-3tLglMTD.js";const l=n({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:e=>o("span",e)}},render(){return o(r,{every:s,at:this.at,hide:this.hide,fade:this.fade},{default:()=>{var e,a;return(a=(e=this.$slots).default)==null?void 0:a.call(e).map(t=>t.type===p?this.wrapText(t):t)}})}});export{l as _};