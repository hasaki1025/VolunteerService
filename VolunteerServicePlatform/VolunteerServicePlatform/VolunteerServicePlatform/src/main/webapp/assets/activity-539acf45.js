import{n as a}from "./index-8666cb90.js";import{u as g}from "./upload-bb522c40.js";const h=()=>a({method:"GET",url:"/common/activities"}),v=async(t, c, s, i, r, n, o, d, u, e)=>{let l=null;e&&(l=(await g(e)).data.data);const m=Object.assign({aid:t,tag:c,a_num:s,activity_name:i,time:r,need_num:n,contact_person:o,contact_telephone:d,description:u},l?{picture:l}:{});return a({method:"POST",url:"/back/activity/changeInfo",data:m})},T= t=>(console.log("delete cId: ",t),a({method:"DELETE",url:"/back/activity",params:{cId:t}})),k=async(t, c, s, i, r, n, o, d, u)=>{const e=(await g(i)).data.data;return a({method:"POST",url:"/back/activity",data:{a_num:t,tag:c,activity_name:s,picture:e,time:r,need_num:n,description:o,contact_person:d,contact_telephone:u}})},E=()=>a({method:"GET",url:"/back/activity/tags"}),f= t=>a({method:"DELETE",url:"/back/activity/tags",params:{tid:t}}),p=(t, c)=>a({method:"POST",url:"/back/activity/tags/changeName",data:{t_id:t,name:c}}),O= t=>a({method:"POST",url:"/back/activity/tags/add",data:{tag:t}});export{h as a,k as b,v as c,T as d,O as e,p as f,E as g,f as h};