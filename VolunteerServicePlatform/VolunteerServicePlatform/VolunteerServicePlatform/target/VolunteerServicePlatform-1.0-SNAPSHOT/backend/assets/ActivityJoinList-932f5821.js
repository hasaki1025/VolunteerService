import{n as x,l as Q}from "./index-8f2c80ed.js";import{E as W}from "./el-date-picker-e1880471.js";import{E as H}from "./el-input-08805023.js";/* empty css                     *//* empty css                  */import{E as K}from "./el-input-number-79c27181.js";import{E as X,a as Z}from "./el-form-item-eb9f0a15.js";import{E as ee,a as le}from "./el-radio-89ce49b7.js";import{E as ae,a as te,b as oe,d as ne,c as se}from "./el-col-685e98bf.js";/* empty css                 */import"./el-tag-5def1315.js";import"./el-tooltip-4ed993c7.js";import{u as ie}from "./user-5fd29a76.js";import{q as de,d as B,b as p,p as ue,E as re,Q as i,U as e,z as l,u as g,L as me,o as S,R as n,S as L,c as D,Y as R,V as pe,W as _e}from "./index-fe68f829.js";import{_ as ce}from "./_plugin-vue_export-helper-c27b6911.js";import"./index-31493d86.js";import"./event-82466d06.js";import"./index-2bc64b82.js";import"./vnode-9a7076ee.js";import"./pinia-251ef24e.js";const fe=()=>x({method:"GET",url:"/back/joins"}),ve= d=>x({method:"DELETE",url:"/back/joins",params:{jId:d}}),be=(d, f, m)=>(console.log("configObj: ",{jId:d,status:f,reply:m}),x({method:"POST",url:"/back/joins/audit",data:{jId:d,status:f,reply:m}})),ge= d=>x({method:"POST",url:"/back/joins/sign",data:{jId:d}}),ye=(d, f, m, $)=>x({method:"POST",url:"/back/joins/changeInfo",data:{jId:d,status:f,service_time:m,join_time:$}}),E= d=>(pe("data-v-31b2bada"),d=d(),_e(),d),Ve={class:"activity-lists-container"},he={class:"head"},ke={class:"item"},xe=E(()=>i("p",null,"活动编号",-1)),Ee={class:"item"},Ce=E(()=>i("p",null,"活动名称",-1)),Ie={class:"item"},je=E(()=>i("p",null,"活动类型",-1)),Ue=E(()=>i("div",{class:"item buttons"},null,-1)),we={class:"table-lists"},Je=E(()=>i("span",null,"确定删除该记录吗?",-1)),Se={class:"dialog-footer"},$e={class:"dialog-footer"},ze={class:"dialog-footer"},Te=de({__name:"ActivityJoinList",setup(d){const f=ie().role,m=B([]),$=()=>{ve(r.value[z.value].data.j_id).then(o=>{console.log("deleteJoinById result: ",o.data),m.splice(r.value[z.value].index,1)}).catch(o=>{console.log(`deleteJoinById error ${o}`)}).finally(()=>{y.value=!1})},y=p(!1),z=p(0),V=p(!1),C=p(-1),c=B({pass:!0,reply:""}),Y=()=>{be(r.value[C.value].data.j_id,c.pass,c.reply).then(o=>{console.log("auditJoinItem result: ",o),m[r.value[C.value].index].audit=!0,m[r.value[C.value].index].audit_text=c.reply}).catch(o=>{console.log("auditJoinItem error: ",o)}).finally(()=>{V.value=!1})},h=p(!1),v=p(-1),u=B({join_time:"",service_time:0,status:!1}),A=()=>{ye(r.value[v.value].data.j_id,u.status,u.service_time,u.join_time).then(o=>{console.log("changeJoinItem result: ",o.data),m.splice(r.value[v.value].index,1,o.data.data)}).catch(o=>{console.log(`changeJoinItem error ${o}`)}).finally(()=>{h.value=!1})},P= o=>{ge(r.value[o].data.j_id).then(a=>{m[r.value[o].index].status=!0}).catch(a=>{console.log(`joinSignUp error ${a}`)})};p(),p(!1);const I=p(""),j=p(""),U=p("");fe().then(o=>{console.log("res",o),m.push(...o.data.data)}).catch(o=>{console.log("getUserList",o)});const r=ue(()=>m.reduce((o, a, b)=>((I.value.length===0||a.a_num===I.value)&&(j.value.length===0||a.activity_name.indexOf(j.value)!==-1)&&(U.value.length===0||a.tag===U.value)&&o.push({data:a,index:b}),o),[]));return(o, a)=>{const b=H,w=ae,F=te,s=oe,_=Q,q=ne,T=se,J=ee,N=le,k=X,O=Z,G=K,M=W;return S(),re(me,null,[i("div",Ve,[i("div",he,[e(F,null,{default:l(()=>[e(w,{span:6},{default:l(()=>[i("div",ke,[xe,e(b,{modelValue:I.value,"onUpdate:modelValue":a[0]||(a[0]= t=>I.value=t),placeholder:"活动编号",class:"input"},null,8,["modelValue"])])]),_:1}),e(w,{span:6},{default:l(()=>[i("div",Ee,[Ce,e(b,{modelValue:j.value,"onUpdate:modelValue":a[1]||(a[1]= t=>j.value=t),placeholder:"活动名称",class:"input"},null,8,["modelValue"])])]),_:1}),e(w,{span:6},{default:l(()=>[i("div",Ie,[je,e(b,{modelValue:U.value,"onUpdate:modelValue":a[2]||(a[2]= t=>U.value=t),placeholder:"活动名称",class:"input"},null,8,["modelValue"])])]),_:1}),e(w,{span:6},{default:l(()=>[Ue]),_:1})]),_:1})]),i("div",we,[e(q,{ref:"multipleTableRef",stripe:"",border:"",data:g(r),style:{width:"100%"}},{default:l(()=>[e(s,{label:"活动编号",prop:"data.a_num"}),e(s,{label:"活动名称",prop:"data.activity_name"}),e(s,{label:"活动类型",prop:"data.tag"}),e(s,{label:"活动时间",prop:"data.time"}),e(s,{label:"用户名",prop:"data.username"}),e(s,{label:"姓名",prop:"data.name"}),e(s,{label:"服务时长(小时)",prop:"data.service_time"}),e(s,{label:"性别",prop:"data.sex"}),e(s,{label:"电话号码",prop:"data.telephone"}),e(s,{label:"报名时间",prop:"data.join_time"}),e(s,{label:"是否签到",prop:"data.status"},{default:l(t=>[n(L(t.row.data.status?"已签到":"未签到"),1)]),_:1}),e(s,{label:"审核状态",prop:"data.audit"},{default:l(t=>[n(L(t.row.data.audit?"已审核":"未审核"),1)]),_:1}),e(s,{label:"审核回复",prop:"data.audit_text"},{default:l(t=>[n(L(t.row.data.audit_text),1)]),_:1}),e(s,{fixed:"right",label:"操作",width:"180"},{default:l(t=>[t.row.data.status?R("",!0):(S(),D(_,{key:0,link:"",type:"primary",size:"small",onClick: Be=>P(t.$index)},{default:l(()=>[n("签到")]),_:2},1032,["onClick"])),g(f)==="manager"?(S(),D(_,{key:1,link:"",type:"primary",size:"small",onClick:()=>{V.value=!0,C.value=t.$index}},{default:l(()=>[n("审核")]),_:2},1032,["onClick"])):R("",!0),g(f)==="manager"?(S(),D(_,{key:2,link:"",type:"primary",size:"small",onClick:()=>{h.value=!0,v.value=t.$index,u.service_time=g(r)[v.value].data.service_time,u.status=g(r)[v.value].data.status,u.join_time=g(r)[v.value].data.join_time}},{default:l(()=>[n("修改")]),_:2},1032,["onClick"])):R("",!0),e(_,{link:"",type:"primary",size:"small",onClick:()=>{y.value=!0,z.value=t.$index}},{default:l(()=>[n("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),e(T,{modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]= t=>y.value=t),title:"警告",width:"30%"},{footer:l(()=>[i("span",Se,[e(_,{onClick:a[3]||(a[3]= t=>y.value=!1)},{default:l(()=>[n("取消")]),_:1}),e(_,{type:"primary",onClick:$},{default:l(()=>[n(" 确定 ")]),_:1})])]),default:l(()=>[Je]),_:1},8,["modelValue"]),e(T,{modelValue:V.value,"onUpdate:modelValue":a[8]||(a[8]= t=>V.value=t),title:"审核",width:"30%"},{footer:l(()=>[i("span",$e,[e(_,{onClick:a[7]||(a[7]= t=>V.value=!1)},{default:l(()=>[n("取消")]),_:1}),e(_,{type:"primary",onClick:Y},{default:l(()=>[n(" 确定 ")]),_:1})])]),default:l(()=>[e(O,{model:c,"label-width":"120px"},{default:l(()=>[e(k,{label:"是否通过"},{default:l(()=>[e(N,{modelValue:c.pass,"onUpdate:modelValue":a[5]||(a[5]= t=>c.pass=t),class:"ml-4"},{default:l(()=>[e(J,{label:!0,size:"small"},{default:l(()=>[n("是")]),_:1}),e(J,{label:!1,size:"small"},{default:l(()=>[n("否")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(k,{label:"回复"},{default:l(()=>[e(b,{modelValue:c.reply,"onUpdate:modelValue":a[6]||(a[6]= t=>c.reply=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(T,{modelValue:h.value,"onUpdate:modelValue":a[13]||(a[13]= t=>h.value=t),title:"修改活动信息",width:"50%"},{footer:l(()=>[i("span",ze,[e(_,{onClick:a[12]||(a[12]= t=>h.value=!1)},{default:l(()=>[n("取消")]),_:1}),e(_,{type:"primary",onClick:A},{default:l(()=>[n(" 确定 ")]),_:1})])]),default:l(()=>[e(O,{model:u,"label-width":"120px"},{default:l(()=>[e(k,{label:"服务时长"},{default:l(()=>[e(G,{modelValue:u.service_time,"onUpdate:modelValue":a[9]||(a[9]= t=>u.service_time=t)},null,8,["modelValue"])]),_:1}),e(k,{label:"报名时间"},{default:l(()=>[e(M,{modelValue:u.join_time,"onUpdate:modelValue":a[10]||(a[10]= t=>u.join_time=t),type:"datetime","value-format":"YYYY-MM-DD h:m:s ",placeholder:"选择报名时间"},null,8,["modelValue"])]),_:1}),e(k,{label:"是否签到"},{default:l(()=>[e(N,{modelValue:u.status,"onUpdate:modelValue":a[11]||(a[11]= t=>u.status=t),class:"ml-4"},{default:l(()=>[e(J,{label:!0,size:"large"},{default:l(()=>[n("是")]),_:1}),e(J,{label:!1,size:"large"},{default:l(()=>[n("否")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}});const al=ce(Te,[["__scopeId","data-v-31b2bada"]]);export{al as default};
