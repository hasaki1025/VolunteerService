import{d as y}from "./pinia-17c3ee78.js";import{W as p,T as l,X as v,o as f,a5 as w,Z as n,a9 as S,a7 as h,V as d,aa as b,ai as k,L as x,c as $,a as o,Y as u,ac as m,$ as _,_ as E}from "./_plugin-vue_export-helper-64f54b45.js";import{b as N,u as C,_ as R,w as A}from "./base-f09cc819.js";import{E as B}from "./el-button-f8f4aa68.js";import{E as T}from "./el-tag-136f9334.js";import{E as j}from "./el-image-viewer-62f0fd3e.js";const z=Symbol("rowContextKey"),D=["start","center","end","space-around","space-between","space-evenly"],I=["top","middle","bottom"],V=N({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:D,default:"start"},align:{type:String,values:I,default:"top"}}),K=p({name:"ElRow"}),L=p({...K,props:V,setup(t){const e=t,a=C("row"),i=l(()=>e.gutter);v(z,{gutter:i});const c=l(()=>{const s={};return e.gutter&&(s.marginRight=s.marginLeft=`-${e.gutter/2}px`),s}),r=l(()=>[a.b(),a.is(`justify-${e.justify}`,e.justify!=="start"),a.is(`align-${e.align}`,e.align!=="top")]);return(s, g)=>(f(),w(k(s.tag),{class:h(d(r)),style:b(d(c))},{default:n(()=>[S(s.$slots,"default")]),_:3},8,["class","style"]))}});var P=R(L,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const J=A(P),tt=y("configs",()=>{const t=x([]);return{tags:t,setTags: a=>{t.splice(0,t.length,...a)}}},{persist:{enabled:!0,strategies:[{key:"tags",storage:sessionStorage}]}});const W={class:"activity-item"},X={class:"right"},Y={class:"text-area"},Z={class:"name"},q=p({__name:"Activity",props:{a_id:Number,a_num:String,activity_name:String,tag:String,time:String,need_num:Number,left_num:Number,late_click_time:String,click_times:Number,contact_person:String,contact_telephone:String,picture:String,description:String},emits:["lookDetail"],setup(t, {emit:e}){return(a, i)=>{const c=j,r=T,s=J,g=B;return f(),$("div",W,[o(c,{style:{width:"200px",height:"150px"},src:t.picture,fit:"fill"},null,8,["src"]),u("div",X,[u("div",Y,[u("p",Z,m(t.activity_name),1),o(s,{class:"tags"},{default:n(()=>[o(r,{size:"large",style:{"margin-right":"1em"}},{default:n(()=>[_(m(`总人数: ${t.need_num}`),1)]),_:1}),o(r,{size:"large"},{default:n(()=>[_(m(`还需人数: ${t.left_num}`),1)]),_:1})]),_:1}),o(g,{type:"success",class:"button",onClick:i[0]||(i[0]= F=>a.$emit("lookDetail"))},{default:n(()=>[_("查看详情")]),_:1})])])])}}});const et=E(q,[["__scopeId","data-v-cf252708"]]);export{et as A,tt as u};