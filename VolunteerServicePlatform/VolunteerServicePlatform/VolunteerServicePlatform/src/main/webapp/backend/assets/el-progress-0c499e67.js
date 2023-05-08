import{q as B,p as R,a7 as ke,M as ee,o as y,E,F as m,u as e,Q as O,G as A,A as P,S as K,Y as k,c as U,z as F,a4 as $e,a1 as _,b as ie,L as we,X as Ee,ai as ue,ag as M,U as D,aj as Se,Z as _e,g as Ce,s as Z,w as te,D as Re,I as Pe,x as Fe,P as Le,ak as se,B as ae}from "./index-fe68f829.js";import{c as W,g as b,u as q,X as Ue,Y as de,W as Te,Z as ce,$ as pe,E as I,_ as H,w as fe,t as x,B as ve,m as J,R as X,a0 as De,a1 as Oe,a2 as Be,a3 as Ne,I as je}from "./index-8f2c80ed.js";import{u as Ae}from "./index-31493d86.js";import{y as Ie}from "./event-82466d06.js";const me=Symbol("uploadContextKey"),Me=W({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator: o=>o>=0&&o<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:b(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:b([String,Array,Function]),default:""},format:{type:b(Function),default: o=>`${o}%`}}),qe=["aria-valuenow"],We={viewBox:"0 0 100 100"},ze=["d","stroke","stroke-width"],He=["d","stroke","opacity","stroke-linecap","stroke-width"],Ke={key:0},Xe=B({name:"ElProgress"}),Ve=B({...Xe,props:Me,setup(o){const s=o,n={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},a=q("progress"),f=R(()=>({width:`${s.percentage}%`,animationDuration:`${s.duration}s`,backgroundColor:j(s.percentage)})),p=R(()=>(s.strokeWidth/s.width*100).toFixed(1)),v=R(()=>["circle","dashboard"].includes(s.type)?Number.parseInt(`${50-Number.parseFloat(p.value)/2}`,10):0),S=R(()=>{const l=v.value,L=s.type==="dashboard";return`
          M 50 50
          m 0 ${L?"":"-"}${l}
          a ${l} ${l} 0 1 1 0 ${L?"-":""}${l*2}
          a ${l} ${l} 0 1 1 0 ${L?"":"-"}${l*2}
          `}),$=R(()=>2*Math.PI*v.value),d=R(()=>s.type==="dashboard"?.75:1),w=R(()=>`${-1*$.value*(1-d.value)/2}px`),g=R(()=>({strokeDasharray:`${$.value*d.value}px, ${$.value}px`,strokeDashoffset:w.value})),r=R(()=>({strokeDasharray:`${$.value*d.value*(s.percentage/100)}px, ${$.value}px`,strokeDashoffset:w.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),u=R(()=>{let l;return s.color?l=j(s.percentage):l=n[s.status]||n.default,l}),t=R(()=>s.status==="warning"?Ue:s.type==="line"?s.status==="success"?de:Te:s.status==="success"?ce:pe),c=R(()=>s.type==="line"?12+s.strokeWidth*.4:s.width*.111111+2),h=R(()=>s.format(s.percentage));function i(l){const L=100/l.length;return l.map((C,N)=>ee(C)?{color:C,percentage:(N+1)*L}:C).sort((C,N)=>C.percentage-N.percentage)}const j=l=>{var L;const{color:T}=s;if(ke(T))return T(l);if(ee(T))return T;{const C=i(T);for(const N of C)if(N.percentage>l)return N.color;return(L=C[C.length-1])==null?void 0:L.color}};return(l,L)=>(y(),E("div",{class:m([e(a).b(),e(a).m(l.type),e(a).is(l.status),{[e(a).m("without-text")]:!l.showText,[e(a).m("text-inside")]:l.textInside}]),role:"progressbar","aria-valuenow":l.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[l.type==="line"?(y(),E("div",{key:0,class:m(e(a).b("bar"))},[O("div",{class:m(e(a).be("bar","outer")),style:A({height:`${l.strokeWidth}px`})},[O("div",{class:m([e(a).be("bar","inner"),{[e(a).bem("bar","inner","indeterminate")]:l.indeterminate}]),style:A(e(f))},[(l.showText||l.$slots.default)&&l.textInside?(y(),E("div",{key:0,class:m(e(a).be("bar","innerText"))},[P(l.$slots,"default",{percentage:l.percentage},()=>[O("span",null,K(e(h)),1)])],2)):k("v-if",!0)],6)],6)],2)):(y(),E("div",{key:1,class:m(e(a).b("circle")),style:A({height:`${l.width}px`,width:`${l.width}px`})},[(y(),E("svg",We,[O("path",{class:m(e(a).be("circle","track")),d:e(S),stroke:`var(${e(a).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-width":e(p),fill:"none",style:A(e(g))},null,14,ze),O("path",{class:m(e(a).be("circle","path")),d:e(S),stroke:e(u),fill:"none",opacity:l.percentage?1:0,"stroke-linecap":l.strokeLinecap,"stroke-width":e(p),style:A(e(r))},null,14,He)]))],6)),(l.showText||l.$slots.default)&&!l.textInside?(y(),E("div",{key:2,class:m(e(a).e("text")),style:A({fontSize:`${e(c)}px`})},[P(l.$slots,"default",{percentage:l.percentage},()=>[l.status?(y(),U(e(I),{key:1},{default:F(()=>[(y(),U($e(e(t))))]),_:1})):(y(),E("span",Ke,K(e(h)),1))])],6)):k("v-if",!0)],10,qe))}});var Ge=H(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const Ye=fe(Ge),Ze="ElUpload";class Je extends Error{constructor(s,n,a,f){super(s),this.name="UploadAjaxError",this.status=n,this.method=a,this.url=f}}function oe(o,s,n){let a;return n.response?a=`${n.response.error||n.response}`:n.responseText?a=`${n.responseText}`:a=`fail to ${s.method} ${o} ${n.status}`,new Je(a,n.status,s.method,o)}function Qe(o){const s=o.responseText||o.response;if(!s)return s;try{return JSON.parse(s)}catch{return s}}const xe=o=>{typeof XMLHttpRequest>"u"&&x(Ze,"XMLHttpRequest is undefined");const s=new XMLHttpRequest,n=o.action;s.upload&&s.upload.addEventListener("progress",p=>{const v=p;v.percent=p.total>0?p.loaded/p.total*100:0,o.onProgress(v)});const a=new FormData;if(o.data)for(const[p,v]of Object.entries(o.data))Array.isArray(v)?a.append(p,...v):a.append(p,v);a.append(o.filename,o.file,o.file.name),s.addEventListener("error",()=>{o.onError(oe(n,o,s))}),s.addEventListener("load",()=>{if(s.status<200||s.status>=300)return o.onError(oe(n,o,s));o.onSuccess(Qe(s))}),s.open(o.method,n,!0),o.withCredentials&&"withCredentials"in s&&(s.withCredentials=!0);const f=o.headers||{};if(f instanceof Headers)f.forEach((p,v)=>s.setRequestHeader(v,p));else for(const[p,v]of Object.entries(f))ve(v)||s.setRequestHeader(p,String(v));return s.send(a),s},ye=["text","picture","picture-card"];let et=1;const Q=()=>Date.now()+et++,ge=W({action:{type:String,default:"#"},headers:{type:b(Object)},method:{type:String,default:"post"},data:{type:Object,default:()=>J({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},type:{type:String,default:"select"},fileList:{type:b(Array),default:()=>J([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:ye,default:"text"},httpRequest:{type:b(Function),default:xe},disabled:Boolean,limit:Number}),tt=W({...ge,beforeUpload:{type:b(Function),default:_},beforeRemove:{type:b(Function)},onRemove:{type:b(Function),default:_},onChange:{type:b(Function),default:_},onPreview:{type:b(Function),default:_},onSuccess:{type:b(Function),default:_},onProgress:{type:b(Function),default:_},onError:{type:b(Function),default:_},onExceed:{type:b(Function),default:_}}),st=W({files:{type:b(Array),default:()=>J([])},disabled:{type:Boolean,default:!1},handlePreview:{type:b(Function),default:_},listType:{type:String,values:ye,default:"text"}}),at={remove:o=>!!o},ot=["onKeydown"],nt=["src"],rt=["onClick"],lt=["onClick"],it=["onClick"],ut=B({name:"ElUploadList"}),dt=B({...ut,props:st,emits:at,setup(o,{emit:s}){const{t:n}=Ae(),a=q("upload"),f=q("icon"),p=q("list"),v=X(),S=ie(!1),$=d=>{s("remove",d)};return(d,w)=>(y(),U(Se,{tag:"ul",class:m([e(a).b("list"),e(a).bm("list",d.listType),e(a).is("disabled",e(v))]),name:e(p).b()},{default:F(()=>[(y(!0),E(we,null,Ee(d.files,g=>(y(),E("li",{key:g.uid||g.name,class:m([e(a).be("list","item"),e(a).is(g.status),{focusing:S.value}]),tabindex:"0",onKeydown:ue(r=>!e(v)&&$(g),["delete"]),onFocus:w[0]||(w[0]=r=>S.value=!0),onBlur:w[1]||(w[1]=r=>S.value=!1),onClick:w[2]||(w[2]=r=>S.value=!1)},[P(d.$slots,"default",{file:g},()=>[d.listType==="picture"||g.status!=="uploading"&&d.listType==="picture-card"?(y(),E("img",{key:0,class:m(e(a).be("list","item-thumbnail")),src:g.url,alt:""},null,10,nt)):k("v-if",!0),g.status==="uploading"||d.listType!=="picture-card"?(y(),E("div",{key:1,class:m(e(a).be("list","item-info"))},[O("a",{class:m(e(a).be("list","item-name")),onClick:M(r=>d.handlePreview(g),["prevent"])},[D(e(I),{class:m(e(f).m("document"))},{default:F(()=>[D(e(De))]),_:1},8,["class"]),O("span",{class:m(e(a).be("list","item-file-name"))},K(g.name),3)],10,rt),g.status==="uploading"?(y(),U(e(Ye),{key:0,type:d.listType==="picture-card"?"circle":"line","stroke-width":d.listType==="picture-card"?6:2,percentage:Number(g.percentage),style:A(d.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):k("v-if",!0)],2)):k("v-if",!0),O("label",{class:m(e(a).be("list","item-status-label"))},[d.listType==="text"?(y(),U(e(I),{key:0,class:m([e(f).m("upload-success"),e(f).m("circle-check")])},{default:F(()=>[D(e(de))]),_:1},8,["class"])):["picture-card","picture"].includes(d.listType)?(y(),U(e(I),{key:1,class:m([e(f).m("upload-success"),e(f).m("check")])},{default:F(()=>[D(e(ce))]),_:1},8,["class"])):k("v-if",!0)],2),e(v)?k("v-if",!0):(y(),U(e(I),{key:2,class:m(e(f).m("close")),onClick:r=>$(g)},{default:F(()=>[D(e(pe))]),_:2},1032,["class","onClick"])),k(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),k(" This is a bug which needs to be fixed "),k(" TODO: Fix the incorrect navigation interaction "),e(v)?k("v-if",!0):(y(),E("i",{key:3,class:m(e(f).m("close-tip"))},K(e(n)("el.upload.deleteTip")),3)),d.listType==="picture-card"?(y(),E("span",{key:4,class:m(e(a).be("list","item-actions"))},[O("span",{class:m(e(a).be("list","item-preview")),onClick:r=>d.handlePreview(g)},[D(e(I),{class:m(e(f).m("zoom-in"))},{default:F(()=>[D(e(Oe))]),_:1},8,["class"])],10,lt),e(v)?k("v-if",!0):(y(),E("span",{key:0,class:m(e(a).be("list","item-delete")),onClick:r=>$(g)},[D(e(I),{class:m(e(f).m("delete"))},{default:F(()=>[D(e(Be))]),_:1},8,["class"])],10,it))],2)):k("v-if",!0)])],42,ot))),128)),P(d.$slots,"append")]),_:3},8,["class","name"]))}});var ne=H(dt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-list.vue"]]);const ct=W({disabled:{type:Boolean,default:!1}}),pt={file:o=>_e(o)},ft=["onDrop","onDragover"],he="ElUploadDrag",vt=B({name:he}),mt=B({...vt,props:ct,emits:pt,setup(o,{emit:s}){const n=Ce(me);n||x(he,"usage: <el-upload><el-upload-dragger /></el-upload>");const a=q("upload"),f=ie(!1),p=X(),v=$=>{if(p.value)return;f.value=!1;const d=Array.from($.dataTransfer.files),w=n.accept.value;if(!w){s("file",d);return}const g=d.filter(r=>{const{type:u,name:t}=r,c=t.includes(".")?`.${t.split(".").pop()}`:"",h=u.replace(/\/.*$/,"");return w.split(",").map(i=>i.trim()).filter(i=>i).some(i=>i.startsWith(".")?c===i:/\/\*$/.test(i)?h===i.replace(/\/\*$/,""):/^[^/]+\/[^/]+$/.test(i)?u===i:!1)});s("file",g)},S=()=>{p.value||(f.value=!0)};return($,d)=>(y(),E("div",{class:m([e(a).b("dragger"),e(a).is("dragover",f.value)]),onDrop:M(v,["prevent"]),onDragover:M(S,["prevent"]),onDragleave:d[0]||(d[0]=M(w=>f.value=!1,["prevent"]))},[P($.$slots,"default")],42,ft))}});var yt=H(mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-dragger.vue"]]);const gt=W({...ge,beforeUpload:{type:b(Function),default:_},onRemove:{type:b(Function),default:_},onStart:{type:b(Function),default:_},onSuccess:{type:b(Function),default:_},onProgress:{type:b(Function),default:_},onError:{type:b(Function),default:_},onExceed:{type:b(Function),default:_}}),ht=["onKeydown"],bt=["name","multiple","accept"],kt=B({name:"ElUploadContent",inheritAttrs:!1}),$t=B({...kt,props:gt,setup(o,{expose:s}){const n=o,a=q("upload"),f=X(),p=Z({}),v=Z(),S=t=>{if(t.length===0)return;const{autoUpload:c,limit:h,fileList:i,multiple:j,onStart:l,onExceed:L}=n;if(h&&i.length+t.length>h){L(t,i);return}j||(t=t.slice(0,1));for(const T of t){const C=T;C.uid=Q(),l(C),c&&$(C)}},$=async t=>{if(v.value.value="",!n.beforeUpload)return d(t);let c;try{c=await n.beforeUpload(t)}catch{c=!1}if(c===!1){n.onRemove(t);return}let h=t;c instanceof Blob&&(c instanceof File?h=c:h=new File([c],t.name,{type:t.type})),d(Object.assign(h,{uid:t.uid}))},d=t=>{const{headers:c,data:h,method:i,withCredentials:j,name:l,action:L,onProgress:T,onSuccess:C,onError:N,httpRequest:be}=n,{uid:V}=t,G={headers:c||{},withCredentials:j,file:t,data:h,method:i,filename:l,action:L,onProgress:z=>{T(z,t)},onSuccess:z=>{C(z,t),delete p.value[V]},onError:z=>{N(z,t),delete p.value[V]}},Y=be(G);p.value[V]=Y,Y instanceof Promise&&Y.then(G.onSuccess,G.onError)},w=t=>{const c=t.target.files;c&&S(Array.from(c))},g=()=>{f.value||(v.value.value="",v.value.click())},r=()=>{g()};return s({abort:t=>{Ie(p.value).filter(t?([h])=>String(t.uid)===h:()=>!0).forEach(([h,i])=>{i instanceof XMLHttpRequest&&i.abort(),delete p.value[h]})},upload:$}),(t,c)=>(y(),E("div",{class:m([e(a).b(),e(a).m(t.listType),e(a).is("drag",t.drag)]),tabindex:"0",onClick:g,onKeydown:ue(M(r,["self"]),["enter","space"])},[t.drag?(y(),U(yt,{key:0,disabled:e(f),onFile:S},{default:F(()=>[P(t.$slots,"default")]),_:3},8,["disabled"])):P(t.$slots,"default",{key:1}),O("input",{ref_key:"inputRef",ref:v,class:m(e(a).e("input")),name:t.name,multiple:t.multiple,accept:t.accept,type:"file",onChange:w,onClick:c[0]||(c[0]=M(()=>{},["stop"]))},null,42,bt)],42,ht))}});var re=H($t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload-content.vue"]]);const le="ElUpload",wt=o=>{var s;(s=o.url)!=null&&s.startsWith("blob:")&&URL.revokeObjectURL(o.url)},Et=(o,s)=>{const n=Ne(o,"fileList",void 0,{passive:!0}),a=r=>n.value.find(u=>u.uid===r.uid);function f(r){var u;(u=s.value)==null||u.abort(r)}function p(r=["ready","uploading","success","fail"]){n.value=n.value.filter(u=>!r.includes(u.status))}const v=(r,u)=>{const t=a(u);t&&(console.error(r),t.status="fail",n.value.splice(n.value.indexOf(t),1),o.onError(r,t,n.value),o.onChange(t,n.value))},S=(r,u)=>{const t=a(u);t&&(o.onProgress(r,t,n.value),t.status="uploading",t.percentage=Math.round(r.percent))},$=(r,u)=>{const t=a(u);t&&(t.status="success",t.response=r,o.onSuccess(r,t,n.value),o.onChange(t,n.value))},d=r=>{ve(r.uid)&&(r.uid=Q());const u={name:r.name,percentage:0,status:"ready",size:r.size,raw:r,uid:r.uid};if(o.listType==="picture-card"||o.listType==="picture")try{u.url=URL.createObjectURL(r)}catch(t){je(le,t.message),o.onError(t,u,n.value)}n.value=[...n.value,u],o.onChange(u,n.value)},w=async r=>{const u=r instanceof File?a(r):r;u||x(le,"file to be removed not found");const t=c=>{f(c);const h=n.value;h.splice(h.indexOf(c),1),o.onRemove(c,h),wt(c)};o.beforeRemove?await o.beforeRemove(u,n.value)!==!1&&t(u):t(u)};function g(){n.value.filter(({status:r})=>r==="ready").forEach(({raw:r})=>{var u;return r&&((u=s.value)==null?void 0:u.upload(r))})}return te(()=>o.listType,r=>{r!=="picture-card"&&r!=="picture"||(n.value=n.value.map(u=>{const{raw:t,url:c}=u;if(!c&&t)try{u.url=URL.createObjectURL(t)}catch(h){o.onError(h,u,n.value)}return u}))}),te(n,r=>{for(const u of r)u.uid||(u.uid=Q()),u.status||(u.status="success")},{immediate:!0,deep:!0}),{uploadFiles:n,abort:f,clearFiles:p,handleError:v,handleProgress:S,handleStart:d,handleSuccess:$,handleRemove:w,submit:g}},St=B({name:"ElUpload"}),_t=B({...St,props:tt,setup(o,{expose:s}){const n=o,a=Re(),f=X(),p=Z(),{abort:v,submit:S,clearFiles:$,uploadFiles:d,handleStart:w,handleError:g,handleRemove:r,handleSuccess:u,handleProgress:t}=Et(n,p),c=R(()=>n.listType==="picture-card"),h=R(()=>({...n,fileList:d.value,onStart:w,onProgress:t,onSuccess:u,onError:g,onRemove:r}));return Pe(()=>{d.value.forEach(({url:i})=>{i!=null&&i.startsWith("blob:")&&URL.revokeObjectURL(i)})}),Fe(me,{accept:Le(n,"accept")}),s({abort:v,submit:S,clearFiles:$,handleStart:w,handleRemove:r}),(i,j)=>(y(),E("div",null,[e(c)&&i.showFileList?(y(),U(ne,{key:0,disabled:e(f),"list-type":i.listType,files:e(d),"handle-preview":i.onPreview,onRemove:e(r)},se({append:F(()=>[D(re,ae({ref_key:"uploadRef",ref:p},e(h)),{default:F(()=>[e(a).trigger?P(i.$slots,"trigger",{key:0}):k("v-if",!0),!e(a).trigger&&e(a).default?P(i.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)]),_:2},[i.$slots.file?{name:"default",fn:F(({file:l})=>[P(i.$slots,"file",{file:l})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0),!e(c)||e(c)&&!i.showFileList?(y(),U(re,ae({key:1,ref_key:"uploadRef",ref:p},e(h)),{default:F(()=>[e(a).trigger?P(i.$slots,"trigger",{key:0}):k("v-if",!0),!e(a).trigger&&e(a).default?P(i.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)):k("v-if",!0),i.$slots.trigger?P(i.$slots,"default",{key:2}):k("v-if",!0),P(i.$slots,"tip"),!e(c)&&i.showFileList?(y(),U(ne,{key:3,disabled:e(f),"list-type":i.listType,files:e(d),"handle-preview":i.onPreview,onRemove:e(r)},se({_:2},[i.$slots.file?{name:"default",fn:F(({file:l})=>[P(i.$slots,"file",{file:l})])}:void 0]),1032,["disabled","list-type","files","handle-preview","onRemove"])):k("v-if",!0)]))}});var Ct=H(_t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/upload/src/upload.vue"]]);const Ut=fe(Ct);export{Ut as E};
