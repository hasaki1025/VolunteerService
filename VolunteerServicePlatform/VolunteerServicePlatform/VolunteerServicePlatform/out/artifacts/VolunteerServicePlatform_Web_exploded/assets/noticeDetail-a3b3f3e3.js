import"./base-59bc21bd.js";import{E as p,a as m}from "./el-menu-item-93068572.js";import"./el-popper-44cd3356.js";import{E as d}from "./el-image-viewer-d764d364.js";import{u}from "./notice-6fb91979.js";import{W as f,c as h,Y as e,a as s,V as n,Z as i,ac as c,F as v,o as x,$ as S,a0 as E,a1 as g,_ as I}from "./_plugin-vue_export-helper-db55c57b.js";import"./index-16fe3321.js";import"./aria-06e80a3d.js";import"./runtime-dom.esm-bundler-5dfda05a.js";import"./error-f1912ce6.js";import"./vnode-dc4413bd.js";import"./pinia-753b0366.js";const a= t=>(E("data-v-03d7b8f2"),t=t(),g(),t),D=a(()=>e("div",{class:"header"},[e("h2",null,"公告详情PAGE")],-1)),N={class:"picture"},b={class:"information"},M=a(()=>e("h3",null,"网站公告信息",-1)),V=a(()=>e("h3",null,"公告内容",-1)),k=["innerHTML"],w=f({__name:"noticeDetail",setup(t){const o=u().nextLookNotice;return(B, L)=>{const _=d,l=p,r=m;return x(),h(v,null,[D,e("div",N,[s(_,{src:n(o).picture},null,8,["src"])]),s(r,{class:"el-menu-demo",mode:"horizontal","default-active":"info"},{default:i(()=>[s(l,{index:"info"},{default:i(()=>[S("网站公告信息")]),_:1})]),_:1}),e("div",b,[M,e("p",null,"标题: "+c(n(o).title),1),V,e("div",{class:"content",innerHTML:n(o).content},null,8,k),e("p",null,"发布时间: "+c(new Date(n(o).publish_time).toString()),1)])],64)}}});const j=I(w,[["__scopeId","data-v-03d7b8f2"]]);export{j as default};
