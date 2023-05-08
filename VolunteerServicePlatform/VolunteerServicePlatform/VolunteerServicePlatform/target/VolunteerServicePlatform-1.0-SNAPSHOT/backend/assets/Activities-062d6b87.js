import{l as z}from "./index-8f2c80ed.js";import{E as N,a as F}from "./el-form-item-eb9f0a15.js";import{E as L}from "./el-progress-0c499e67.js";import{E as R,a as Y,b as q,d as G,c as P}from "./el-col-685e98bf.js";/* empty css                 */import"./el-tag-5def1315.js";import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     */import{E as W}from "./el-avatar-92af8c54.js";import{E as O}from "./el-input-08805023.js";import{a as Q,d as j}from "./activity-15866316.js";import{u as H}from "./activity-5d6fe052.js";import{r as x}from "./index-8be7bc5b.js";import{b as J,c as K}from "./routes-88cdf169.js";import{q as M,b as m,d as X,p as Z,E as ee,Q as d,U as e,z as a,u as r,L as le,o as I,R as _,c as te,Y as ae,V as oe,W as ne}from "./index-fe68f829.js";import{_ as de}from "./_plugin-vue_export-helper-c27b6911.js";import"./event-82466d06.js";import"./index-31493d86.js";import"./vnode-9a7076ee.js";import"./index-2bc64b82.js";import"./upload-ae68905d.js";import"./pinia-251ef24e.js";const g= v=>(oe("data-v-216a99c5"),v=v(),ne(),v),se={class:"activity-lists-container"},ue={class:"head"},ie={class:"item"},pe=g(()=>d("p",null,"活动编号",-1)),me={class:"item"},re=g(()=>d("p",null,"活动名称",-1)),_e={class:"item"},ce=g(()=>d("p",null,"活动类型",-1)),ve={class:"item buttons"},fe={class:"table-lists"},Ve=g(()=>d("span",null,"确定删除该活动吗?",-1)),be={class:"dialog-footer"},ye={class:"dialog-footer"},Ee=M({__name:"Activities",setup(v){const w=H(),c=m(!1),C=m(0),o=m(),U=m(!1),f=m(""),V=m(""),b=m(""),k=X([]);Q().then(s=>{console.log("activity lists: ",s),k.push(...s.data.data)}).catch(s=>{console.log("getUserList",s)});const y=Z(()=>k.reduce((s, l, n)=>((f.value.length===0||f.value===l.a_num)&&(V.value.length===0||l.activity_name.indexOf(V.value)!==-1)&&(b.value.length===0||l.tag===b.value)&&s.push({data:l,index:n}),s),[])),h=()=>{j(y.value[C.value].data.a_id).then(s=>{console.log("delete result: ",s.data),k.splice(y.value[C.value].index,1)}).catch(s=>{console.log(`delteActivityById error ${s}`)}).finally(()=>{c.value=!1})};return(s, l)=>{const n=O,E=R,p=z,T=Y,u=q,B=W,D=G,A=P,i=N,S=L,$=F;return I(),ee(le,null,[d("div",se,[d("div",ue,[e(T,null,{default:a(()=>[e(E,{span:6},{default:a(()=>[d("div",ie,[pe,e(n,{modelValue:f.value,"onUpdate:modelValue":l[0]||(l[0]= t=>f.value=t),placeholder:"活动编号",class:"input"},null,8,["modelValue"])])]),_:1}),e(E,{span:6},{default:a(()=>[d("div",me,[re,e(n,{modelValue:V.value,"onUpdate:modelValue":l[1]||(l[1]= t=>V.value=t),placeholder:"活动名称",class:"input"},null,8,["modelValue"])])]),_:1}),e(E,{span:6},{default:a(()=>[d("div",_e,[ce,e(n,{modelValue:b.value,"onUpdate:modelValue":l[2]||(l[2]= t=>b.value=t),placeholder:"活动名称",class:"input"},null,8,["modelValue"])])]),_:1}),e(E,{span:6},{default:a(()=>[d("div",ve,[e(p,{type:"primary",onClick:l[3]||(l[3]=()=>{r(x).push({name:r(J)})})},{default:a(()=>[_("新增")]),_:1})])]),_:1})]),_:1})]),d("div",fe,[e(D,{ref:"multipleTableRef",stripe:"",border:"",data:r(y),style:{width:"100%"}},{default:a(()=>[e(u,{label:"活动编号",prop:"data.a_num"}),e(u,{label:"活动名称",prop:"data.activity_name"}),e(u,{label:"活动海报",prop:"data.picture"},{default:a(t=>[e(B,{shape:"square",size:50,src:t.row.data.picture},null,8,["src"])]),_:1}),e(u,{label:"活动类型",prop:"data.tag"}),e(u,{label:"活动时间",prop:"data.time"}),e(u,{label:"总招募人数",prop:"data.need_num"}),e(u,{label:"活动介绍",prop:"data.description"}),e(u,{label:"联系人",prop:"data.contact_person"}),e(u,{label:"联系电话",prop:"data.contact_telephone"}),e(u,{fixed:"right",label:"操作",width:"120"},{default:a(t=>[e(p,{link:"",type:"primary",size:"small",onClick:()=>{r(w).setWaitEditActivity(r(y)[t.$index].data),r(x).push({name:r(K)})}},{default:a(()=>[_("修改")]),_:2},1032,["onClick"]),e(p,{link:"",type:"primary",size:"small",onClick:()=>{c.value=!0,C.value=t.$index}},{default:a(()=>[_("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])]),e(A,{modelValue:c.value,"onUpdate:modelValue":l[5]||(l[5]= t=>c.value=t),title:"警告",width:"30%"},{footer:a(()=>[d("span",be,[e(p,{onClick:l[4]||(l[4]= t=>c.value=!1)},{default:a(()=>[_("取消")]),_:1}),e(p,{type:"primary",onClick:h},{default:a(()=>[_(" 确定 ")]),_:1})])]),default:a(()=>[Ve]),_:1},8,["modelValue"]),e(A,{modelValue:U.value,"onUpdate:modelValue":l[16]||(l[16]= t=>U.value=t),title:"修改活动信息",width:"50%"},{footer:a(()=>[d("span",ye,[e(p,{onClick:l[14]||(l[14]= t=>U.value=!1)},{default:a(()=>[_("取消")]),_:1}),e(p,{type:"primary",onClick:l[15]||(l[15]=()=>{})},{default:a(()=>[_(" 确定 ")]),_:1})])]),default:a(()=>[o.value?(I(),te($,{key:0,model:o.value,"label-width":"120px"},{default:a(()=>[e(i,{label:"活动编号"},{default:a(()=>[e(n,{modelValue:o.value.a_num,"onUpdate:modelValue":l[6]||(l[6]= t=>o.value.a_num=t)},null,8,["modelValue"])]),_:1}),e(i,{label:"活动名称"},{default:a(()=>[e(n,{modelValue:o.value.activity_name,"onUpdate:modelValue":l[7]||(l[7]= t=>o.value.activity_name=t)},null,8,["modelValue"])]),_:1}),e(i,{label:"活动类型"},{default:a(()=>[e(n,{modelValue:o.value.tag,"onUpdate:modelValue":l[8]||(l[8]= t=>o.value.tag=t)},null,8,["modelValue"])]),_:1}),e(i,{label:"活动时间"},{default:a(()=>[e(n,{modelValue:o.value.time,"onUpdate:modelValue":l[9]||(l[9]= t=>o.value.time=t)},null,8,["modelValue"])]),_:1}),e(i,{label:"总招募人数"},{default:a(()=>[e(n,{modelValue:o.value.need_num,"onUpdate:modelValue":l[10]||(l[10]= t=>o.value.need_num=t)},null,8,["modelValue"])]),_:1}),e(i,{label:"活动介绍"},{default:a(()=>[e(n,{modelValue:o.value.description,"onUpdate:modelValue":l[11]||(l[11]= t=>o.value.description=t)},null,8,["modelValue"])]),_:1}),e(i,{label:"联系人"},{default:a(()=>[e(n,{modelValue:o.value.contact_person,"onUpdate:modelValue":l[12]||(l[12]= t=>o.value.contact_person=t)},null,8,["modelValue"])]),_:1}),e(i,{label:"联系人电话"},{default:a(()=>[e(n,{modelValue:o.value.contact_telephone,"onUpdate:modelValue":l[13]||(l[13]= t=>o.value.contact_telephone=t)},null,8,["modelValue"])]),_:1}),e(i,{label:"图片"},{default:a(()=>[e(S,{"list-type":"picture-card","auto-upload":!1,limit:1,drag:""})]),_:1})]),_:1},8,["model"])):ae("",!0)]),_:1},8,["modelValue"])],64)}}});const We=de(Ee,[["__scopeId","data-v-216a99c5"]]);export{We as default};