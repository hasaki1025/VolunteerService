import{b as t}from "./index-abc4dcdb.js";import{d as n}from "./pinia-753b0366.js";import{I as r}from "./_plugin-vue_export-helper-db55c57b.js";const u=()=>t({url:"/common/news",method:"get"}),c= e=>t({method:"get",url:"/common/news/comment"}),d=(e, o)=>t({method:"post",url:"/common/news/comment",data:{newId:e,content:o}}),N=n("news",()=>{const e=r();return{nextLookNew:e,setNextLookNew: s=>{e.value=s}}},{persist:{enabled:!0,strategies:[{key:"news",storage:sessionStorage}]}});export{c as a,u as g,d as s,N as u};
