import{d as o}from "./pinia-fc5ecdb0.js";import{b as t}from "./index-4cca8065.js";const n=o("user",()=>{const e=t("manager");return{role:e,setRole: r=>{e.value=r}}},{persist:{enabled:!0,strategies:[{key:"role",storage:localStorage}]}});export{n as u};