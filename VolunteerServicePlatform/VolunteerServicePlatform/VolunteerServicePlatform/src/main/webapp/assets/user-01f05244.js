import{d as r}from "./pinia-753b0366.js";import{L as s}from "./_plugin-vue_export-helper-db55c57b.js";const m=r("user",()=>{const e=s({username:"",avatar:"",name:"",sex:"",email:"",telephone:""});return{userInfo:e,saveUserInfo: a=>{e.username=a.username,e.avatar=a.avatar,e.name=a.name,e.sex=a.sex,e.email=a.email,e.telephone=a.telephone}}},{persist:{enabled:!0,strategies:[{key:"user-info",storage:localStorage}]}});export{m as u};