import{q as j,b as le,d as se,p as V,w as oe,H as ie,ae as ce,o as b,E as z,J as G,u as t,F as D,ai as E,U as M,z as L,c as _,Y as q,ag as K,M as de}from "./index-fe68f829.js";import{E as me}from "./el-input-08805023.js";import{c as pe,O as be,N as d,B as h,u as fe,P as ve,a5 as S,H as Ne,R as Ve,d as Ie,ab as he,E as J,a8 as ye,ac as ge,_ as we,I as W,w as Ee}from "./index-8f2c80ed.js";import{C as Q,X as P,U as I}from "./event-82466d06.js";import{u as _e}from "./index-31493d86.js";import{v as X}from "./el-date-picker-e1880471.js";const Se=pe({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:be,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator: u=>u===null||d(u)||["min","max"].includes(u),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator: u=>u>=0&&u===Number.parseInt(`${u}`,10)},validateEvent:{type:Boolean,default:!0}}),Pe={[Q]:(u, k)=>k!==u,blur: u=>u instanceof FocusEvent,focus: u=>u instanceof FocusEvent,[P]: u=>d(u)||h(u),[I]: u=>d(u)||h(u)},ke=["aria-label","onKeydown"],Ae=["aria-label","onKeydown"],Fe=j({name:"ElInputNumber"}),Ce=j({...Fe,props:Se,emits:Pe,setup(u, {expose:k,emit:c}){const a=u,{t:O}=_e(),m=fe("input-number"),v=le(),s=se({currentValue:a.modelValue,userInput:null}),{formItem:f}=ve(),U=V(()=>d(a.modelValue)&&a.modelValue<=a.min),H=V(()=>d(a.modelValue)&&a.modelValue>=a.max),Z=V(()=>{const e=Y(a.step);return S(a.precision)?Math.max(Y(a.modelValue),e):(e>a.precision,a.precision)}),A=V(()=>a.controls&&a.controlsPosition==="right"),R=Ne(),N=Ve(),F=V(()=>{if(s.userInput!==null)return s.userInput;let e=s.currentValue;if(h(e))return"";if(d(e)){if(Number.isNaN(e))return"";S(a.precision)||(e=e.toFixed(a.precision))}return e}),C=(e, n)=>{if(S(n)&&(n=Z.value),n===0)return Math.round(e);let r=String(e);const o=r.indexOf(".");if(o===-1||!r.replace(".","").split("")[o+n])return e;const g=r.length;return r.charAt(g-1)==="5"&&(r=`${r.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(r).toFixed(n))},Y= e=>{if(h(e))return 0;const n=e.toString(),r=n.indexOf(".");let o=0;return r!==-1&&(o=n.length-r-1),o},$=(e, n=1)=>d(e)?C(e+a.step*n):s.currentValue,B=()=>{if(a.readonly||N.value||H.value)return;const e=Number(F.value)||0,n=$(e);y(n),c(P,s.currentValue)},x=()=>{if(a.readonly||N.value||U.value)return;const e=Number(F.value)||0,n=$(e,-1);y(n),c(P,s.currentValue)},T=(e, n)=>{const{max:r,min:o,step:l,precision:p,stepStrictly:g,valueOnClear:w}=a;let i=Number(e);if(h(e)||Number.isNaN(i))return null;if(e===""){if(w===null)return null;i=de(w)?{min:o,max:r}[w]:w}return g&&(i=C(Math.round(i/l)*l,p)),S(p)||(i=C(i,p)),(i>r||i<o)&&(i=i>r?r:o,n&&c(I,i)),i},y=(e, n=!0)=>{var r;const o=s.currentValue,l=T(e);if(o!==l){if(!n){c(I,l);return}s.userInput=null,c(I,l),c(Q,l,o),a.validateEvent&&((r=f==null?void 0:f.validate)==null||r.call(f,"change").catch(p=>W())),s.currentValue=l}},ee= e=>{s.userInput=e;const n=e===""?null:Number(e);c(P,n),y(n,!1)},ne= e=>{const n=e!==""?Number(e):"";(d(n)&&!Number.isNaN(n)||e==="")&&y(n),s.userInput=null},te=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},re=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},ae= e=>{c("focus",e)},ue= e=>{var n;c("blur",e),a.validateEvent&&((n=f==null?void 0:f.validate)==null||n.call(f,"blur").catch(r=>W()))};return oe(()=>a.modelValue, e=>{const n=T(s.userInput),r=T(e,!0);!d(n)&&(!n||n!==r)&&(s.currentValue=r,s.userInput=null)},{immediate:!0}),ie(()=>{var e;const{min:n,max:r,modelValue:o}=a,l=(e=v.value)==null?void 0:e.input;if(l.setAttribute("role","spinbutton"),Number.isFinite(r)?l.setAttribute("aria-valuemax",String(r)):l.removeAttribute("aria-valuemax"),Number.isFinite(n)?l.setAttribute("aria-valuemin",String(n)):l.removeAttribute("aria-valuemin"),l.setAttribute("aria-valuenow",String(s.currentValue)),l.setAttribute("aria-disabled",String(N.value)),!d(o)&&o!=null){let p=Number(o);Number.isNaN(p)&&(p=null),c(I,p)}}),ce(()=>{var e;const n=(e=v.value)==null?void 0:e.input;n==null||n.setAttribute("aria-valuenow",`${s.currentValue}`)}),k({focus:te,blur:re}),(e, n)=>(b(),z("div",{class:D([t(m).b(),t(m).m(t(R)),t(m).is("disabled",t(N)),t(m).is("without-controls",!e.controls),t(m).is("controls-right",t(A))]),onDragstart:n[0]||(n[0]=K(()=>{},["prevent"]))},[e.controls?G((b(),z("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:D([t(m).e("decrease"),t(m).is("disabled",t(U))]),onKeydown:E(x,["enter"])},[M(t(J),null,{default:L(()=>[t(A)?(b(),_(t(Ie),{key:0})):(b(),_(t(he),{key:1}))]),_:1})],42,ke)),[[t(X),x]]):q("v-if",!0),e.controls?G((b(),z("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:D([t(m).e("increase"),t(m).is("disabled",t(H))]),onKeydown:E(B,["enter"])},[M(t(J),null,{default:L(()=>[t(A)?(b(),_(t(ye),{key:0})):(b(),_(t(ge),{key:1}))]),_:1})],42,Ae)),[[t(X),B]]):q("v-if",!0),M(t(me),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(F),placeholder:e.placeholder,readonly:e.readonly,disabled:t(N),size:t(R),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[E(K(B,["prevent"]),["up"]),E(K(x,["prevent"]),["down"])],onBlur:ue,onFocus:ae,onInput:ee,onChange:ne},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var Be=we(Ce,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);const Oe=Ee(Be);export{Oe as E};
