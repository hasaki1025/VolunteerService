import{A as D,b as K,F as V,G as U,a as N,T as j,E as w,_ as G,w as L,f as M}from "./base-59bc21bd.js";import{K as O,V as e,T as g,O as R,I as W,am as X,an as Z,W as _,o as f,c as h,F as q,a9 as S,a5 as B,Z as z,ai as I,a7 as C,a8 as T,aa as H,X as J,L as Q,al as E}from "./_plugin-vue_export-helper-db55c57b.js";import{u as Y,a as oo,c as P,d as eo}from "./index-8ea7482c.js";const F=Symbol("buttonGroupContextKey"),to=({from:t,replacement:r,scope:s,version:n,ref:l,type:o="API"}, i)=>{O(()=>e(i), d=>{},{immediate:!0})},so=(t, r)=>{to({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},g(()=>t.type==="text"));const s=R(F,void 0),n=D("button"),{form:l}=Y(),o=oo(g(()=>s==null?void 0:s.size)),i=P(),d=W(),b=X(),u=g(()=>t.type||(s==null?void 0:s.type)||""),k=g(()=>{var c,p,v;return(v=(p=t.autoInsertSpace)!=null?p:(c=n.value)==null?void 0:c.autoInsertSpace)!=null?v:!1}),y=g(()=>{var c;const p=(c=b.default)==null?void 0:c.call(b);if(k.value&&(p==null?void 0:p.length)===1){const v=p[0];if((v==null?void 0:v.type)===Z){const A=v.children;return/^\p{Unified_Ideograph}{2}$/u.test(A.trim())}}return!1});return{_disabled:i,_size:o,_type:u,_ref:d,shouldAddSpace:y,handleClick: c=>{t.nativeType==="reset"&&(l==null||l.resetFields()),r("click",c)}}},ao=["default","primary","success","warning","info","danger","text",""],no=["button","submit","reset"],$=K({size:eo,disabled:Boolean,type:{type:String,values:ao,default:""},icon:{type:V},nativeType:{type:String,values:no,default:"button"},loading:Boolean,loadingIcon:{type:V,default:()=>U},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0}}),lo={click: t=>t instanceof MouseEvent};function m(t, r=20){return t.mix("#141414",r).toString()}function ro(t){const r=P(),s=N("button");return g(()=>{let n={};const l=t.color;if(l){const o=new j(l),i=t.dark?o.tint(20).toString():m(o,20);if(t.plain)n=s.cssVarBlock({"bg-color":t.dark?m(o,90):o.tint(90).toString(),"text-color":l,"border-color":t.dark?m(o,50):o.tint(50).toString(),"hover-text-color":`var(${s.cssVarName("color-white")})`,"hover-bg-color":l,"hover-border-color":l,"active-bg-color":i,"active-text-color":`var(${s.cssVarName("color-white")})`,"active-border-color":i}),r.value&&(n[s.cssVarBlockName("disabled-bg-color")]=t.dark?m(o,90):o.tint(90).toString(),n[s.cssVarBlockName("disabled-text-color")]=t.dark?m(o,50):o.tint(50).toString(),n[s.cssVarBlockName("disabled-border-color")]=t.dark?m(o,80):o.tint(80).toString());else{const d=t.dark?m(o,30):o.tint(30).toString(),b=o.isDark()?`var(${s.cssVarName("color-white")})`:`var(${s.cssVarName("color-black")})`;if(n=s.cssVarBlock({"bg-color":l,"text-color":b,"border-color":l,"hover-bg-color":d,"hover-text-color":b,"hover-border-color":d,"active-bg-color":i,"active-border-color":i}),r.value){const u=t.dark?m(o,50):o.tint(50).toString();n[s.cssVarBlockName("disabled-bg-color")]=u,n[s.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${s.cssVarName("color-white")})`,n[s.cssVarBlockName("disabled-border-color")]=u}}}return n})}const io=["aria-disabled","disabled","autofocus","type"],co=_({name:"ElButton"}),uo=_({...co,props:$,emits:lo,setup(t, {expose:r,emit:s}){const n=t,l=ro(n),o=N("button"),{_ref:i,_size:d,_type:b,_disabled:u,shouldAddSpace:k,handleClick:y}=so(n,s);return r({ref:i,size:d,type:b,disabled:u,shouldAddSpace:k}),(a, c)=>(f(),h("button",{ref_key:"_ref",ref:i,class:C([e(o).b(),e(o).m(e(b)),e(o).m(e(d)),e(o).is("disabled",e(u)),e(o).is("loading",a.loading),e(o).is("plain",a.plain),e(o).is("round",a.round),e(o).is("circle",a.circle),e(o).is("text",a.text),e(o).is("link",a.link),e(o).is("has-bg",a.bg)]),"aria-disabled":e(u)||a.loading,disabled:e(u)||a.loading,autofocus:a.autofocus,type:a.nativeType,style:H(e(l)),onClick:c[0]||(c[0]=(...p)=>e(y)&&e(y)(...p))},[a.loading?(f(),h(q,{key:0},[a.$slots.loading?S(a.$slots,"loading",{key:0}):(f(),B(e(w),{key:1,class:C(e(o).is("loading"))},{default:z(()=>[(f(),B(I(a.loadingIcon)))]),_:1},8,["class"]))],64)):a.icon||a.$slots.icon?(f(),B(e(w),{key:1},{default:z(()=>[a.icon?(f(),B(I(a.icon),{key:0})):S(a.$slots,"icon",{key:1})]),_:3})):T("v-if",!0),a.$slots.default?(f(),h("span",{key:2,class:C({[e(o).em("text","expand")]:e(k)})},[S(a.$slots,"default")],2)):T("v-if",!0)],14,io))}});var bo=G(uo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);const po={size:$.size,type:$.type},mo=_({name:"ElButtonGroup"}),fo=_({...mo,props:po,setup(t){const r=t;J(F,Q({size:E(r,"size"),type:E(r,"type")}));const s=N("button");return(n, l)=>(f(),h("div",{class:C(`${e(s).b("group")}`)},[S(n.$slots,"default")],2))}});var x=G(fo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);const yo=L(bo,{ButtonGroup:x});M(x);export{yo as E,to as u};
