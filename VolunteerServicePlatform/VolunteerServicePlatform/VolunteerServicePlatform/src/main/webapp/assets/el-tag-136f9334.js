import{w as d,T as w}from "./runtime-dom.esm-bundler-f55edbfc.js";import{b as z,u as N,j as g,E as k,_ as V,w as M}from "./base-f09cc819.js";import{c as $}from "./index-db7bb12c.js";import{a as I}from "./index-c49dfe0b.js";import{W as v,T as P,o as l,c as j,Y as n,a9 as C,a7 as o,V as a,a5 as c,Z as r,a as y,a8 as b,aa as h}from "./_plugin-vue_export-helper-64f54b45.js";const W=z({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:$,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),Y={close: t=>t instanceof MouseEvent,click: t=>t instanceof MouseEvent},Z=v({name:"ElTag"}),q=v({...Z,props:W,emits:Y,setup(t, {emit:i}){const _=t,E=I(),s=N("tag"),u=P(()=>{const{type:e,hit:f,effect:S,closable:T,round:B}=_;return[s.b(),s.is("closable",T),s.m(e),s.m(E.value),s.m(S),s.is("hit",f),s.is("round",B)]}),p= e=>{i("close",e)},m= e=>{i("click",e)};return(e, f)=>e.disableTransitions?(l(),j("span",{key:0,class:o(a(u)),style:h({backgroundColor:e.color}),onClick:m},[n("span",{class:o(a(s).e("content"))},[C(e.$slots,"default")],2),e.closable?(l(),c(a(k),{key:0,class:o(a(s).e("close")),onClick:d(p,["stop"])},{default:r(()=>[y(a(g))]),_:1},8,["class","onClick"])):b("v-if",!0)],6)):(l(),c(w,{key:1,name:`${a(s).namespace.value}-zoom-in-center`,appear:""},{default:r(()=>[n("span",{class:o(a(u)),style:h({backgroundColor:e.color}),onClick:m},[n("span",{class:o(a(s).e("content"))},[C(e.$slots,"default")],2),e.closable?(l(),c(a(k),{key:0,class:o(a(s).e("close")),onClick:d(p,["stop"])},{default:r(()=>[y(a(g))]),_:1},8,["class","onClick"])):b("v-if",!0)],6)]),_:3},8,["name"]))}});var A=V(q,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const K=M(A);export{K as E,W as t};