import{l as V}from "./index-8f2c80ed.js";import{E as w,a as B,b as T,d as L,c as S}from "./el-col-685e98bf.js";/* empty css                 */import"./el-tag-5def1315.js";import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     */import{E as z}from "./el-avatar-92af8c54.js";import{E as A}from "./el-input-08805023.js";import{g as D,d as O}from "./notice-2327765a.js";import{r as E}from "./index-8be7bc5b.js";import{f as U,g as $}from "./routes-88cdf169.js";import{u as q}from "./notices-7d7b5b9e.js";import{q as G,b,d as P,p as R,E as W,Q as s,U as e,z as t,u as i,L as F,o as Q,R as c,V as j,W as H}from "./index-fe68f829.js";import{_ as J}from "./_plugin-vue_export-helper-c27b6911.js";import"./vnode-9a7076ee.js";import"./index-31493d86.js";import"./event-82466d06.js";import"./index-2bc64b82.js";import"./upload-ae68905d.js";import"./pinia-251ef24e.js";const N= p=>(j("data-v-46c5ba3a"),p=p(),H(),p),K={class:"tags-container"},M={class:"head"},X={class:"item"},Y=N(()=>s("p",null,"标题",-1)),Z={class:"item buttons"},ee={class:"table-lists"},te=N(()=>s("span",null,"确定删除吗",-1)),oe={class:"dialog-footer"},ae=G({__name:"NoticeList",setup(p){const g=q(),_=b(""),m=P([]),n=b(!1),f=b(-1);D().then(o=>{console.log("getNotices result: ",o.data),m.push(...o.data.data)}).catch(o=>{console.log("getNotices",o)});const u=R(()=>m.reduce((o, a, v)=>((_.value===""||a.title.indexOf(_.value)!==-1)&&o.push({data:a,index:v}),o),[])),y=()=>{O(u.value[f.value].data.n_id).then(o=>{console.log("deleteNoticeById result: ",o.data),m.splice(u.value[f.value].index,1)}).catch(o=>{console.log("deleteNoticeById error",o)}).finally(()=>{n.value=!1})};return(o, a)=>{const v=A,h=w,d=V,x=B,r=T,C=z,k=L,I=S;return Q(),W(F,null,[s("div",K,[s("div",M,[e(x,null,{default:t(()=>[e(h,{span:6},{default:t(()=>[s("div",X,[Y,e(v,{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]= l=>_.value=l),placeholder:"标题",class:"input"},null,8,["modelValue"])])]),_:1}),e(h,{span:8},{default:t(()=>[s("div",Z,[e(d,{type:"primary",onClick:a[1]||(a[1]=()=>{i(E).push({name:i(U)})})},{default:t(()=>[c("添加")]),_:1})])]),_:1})]),_:1})]),s("div",ee,[e(k,{stripe:"",border:"",data:i(u),style:{width:"100%"}},{default:t(()=>[e(r,{label:"标题",prop:"data.title"}),e(r,{label:"图片",prop:"data.picture"},{default:t(l=>[e(C,{shape:"square",size:50,src:l.row.data.picture},null,8,["src"])]),_:1}),e(r,{label:"公告内容",prop:"data.content"}),e(r,{label:"发布时间",prop:"data.publish_time"}),e(r,{fixed:"right",label:"操作",width:"120"},{default:t(l=>[e(d,{link:"",type:"primary",size:"small",onClick:()=>{i(g).setWaitEditNotice(i(u)[l.$index].data),i(E).push({name:i($)})}},{default:t(()=>[c("修改")]),_:2},1032,["onClick"]),e(d,{link:"",type:"primary",size:"small",onClick:()=>{f.value=l.$index,n.value=!0}},{default:t(()=>[c("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),e(I,{modelValue:n.value,"onUpdate:modelValue":a[3]||(a[3]= l=>n.value=l),title:"警告",width:"30%"},{footer:t(()=>[s("span",oe,[e(d,{onClick:a[2]||(a[2]= l=>n.value=!1)},{default:t(()=>[c("取消")]),_:1}),e(d,{type:"primary",onClick:y},{default:t(()=>[c(" 确定 ")]),_:1})])]),default:t(()=>[te]),_:1},8,["modelValue"])],64)}}});const ke=J(ae,[["__scopeId","data-v-46c5ba3a"]]);export{ke as default};
