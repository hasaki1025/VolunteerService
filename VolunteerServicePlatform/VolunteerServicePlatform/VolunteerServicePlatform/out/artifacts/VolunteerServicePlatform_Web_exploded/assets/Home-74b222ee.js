import{b as pe,i as Me,u as $e,a as he,E as le,c as Be,d as He,_ as _e,e as Ve,w as De,f as Oe}from "./base-59bc21bd.js";import{t as ie,E as Pe}from "./el-image-viewer-d764d364.js";import{u as Re,A as ue}from "./Activity-e085c65e.js";import{u as ze}from "./activity-80797066.js";import{b as Ue}from "./index-abc4dcdb.js";import{r as ce}from "./index-69b80bec.js";import{c as de}from "./route-8ef748be.js";import{w as W,v as J,T as ve}from "./runtime-dom.esm-bundler-5dfda05a.js";import{f as We}from "./vnode-dc4413bd.js";import{U as ye,a2 as Fe,I as L,T as V,V as e,K as F,a3 as oe,a4 as Ke,X as Ye,b as je,C as ge,W as j,o as I,c as A,Y as E,a5 as Y,Z as O,a6 as Q,a7 as H,a as P,a8 as K,a9 as Ie,aa as Ce,F as q,ab as Z,ac as Xe,O as qe,L as G,ad as Ze,ae as me,a0 as Ge,a1 as Je,_ as Qe}from "./_plugin-vue_export-helper-db55c57b.js";import"./index-16fe3321.js";import"./pinia-753b0366.js";import"./el-button-7ad4376d.js";import"./el-tag-87de01b3.js";const ke=Symbol("carouselContextKey"),xe=(s, k, l)=>We(s.subTree).filter(i=>{var t;return Fe(i)&&((t=i.type)==null?void 0:t.name)===k&&!!i.component}).map(i=>i.component.uid).map(i=>l[i]).filter(i=>!!i),et=(s, k)=>{const l={},o=ye([]);return{children:o,addChild: t=>{l[t.uid]=t,o.value=xe(s,k,l)},removeChild: t=>{delete l[t],o.value=o.value.filter(f=>f.uid!==t)}}},tt=pe({initialIndex:{type:Number,default:0},height:{type:String,default:""},trigger:{type:String,values:["hover","click"],default:"hover"},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:3e3},indicatorPosition:{type:String,values:["","none","outside"],default:""},indicator:{type:Boolean,default:!0},arrow:{type:String,values:["always","hover","never"],default:"hover"},type:{type:String,values:["","card"],default:""},loop:{type:Boolean,default:!0},direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},pauseOnHover:{type:Boolean,default:!0}}),ot={change:(s, k)=>[s,k].every(Me)},fe=300,at=(s, k, l)=>{const{children:o,addChild:y,removeChild:i}=et(ge(),"ElCarouselItem"),t=L(-1),f=L(null),d=L(!1),C=L(),w=V(()=>s.arrow!=="never"&&!e(v)),N=V(()=>o.value.some(a=>a.props.label.toString().length>0)),g=V(()=>s.type==="card"),v=V(()=>s.direction==="vertical"),b=ie(a=>{n(a)},fe,{trailing:!0}),S=ie(a=>{D(a)},fe);function T(){f.value&&(clearInterval(f.value),f.value=null)}function M(){s.interval<=0||!s.autoplay||f.value||(f.value=setInterval(()=>R(),s.interval))}const R=()=>{t.value<o.value.length-1?t.value=t.value+1:s.loop&&(t.value=0)};function n(a){if(je(a)){const z=o.value.filter(X=>X.props.name===a);z.length>0&&(a=o.value.indexOf(z[0]))}if(a=Number(a),Number.isNaN(a)||a!==Math.floor(a))return;const _=o.value.length,B=t.value;a<0?t.value=s.loop?_-1:0:a>=_?t.value=s.loop?0:_-1:t.value=a,B===t.value&&u(B),ae()}function u(a){o.value.forEach((_, B)=>{_.translateItem(B,t.value,a)})}function r(a, _){var B,z,X,se;const U=e(o),ne=U.length;if(ne===0||!a.states.inStage)return!1;const Se=_+1,Ee=_-1,re=ne-1,Ne=U[re].states.active,Te=U[0].states.active,Le=(z=(B=U[Se])==null?void 0:B.states)==null?void 0:z.active,Ae=(se=(X=U[Ee])==null?void 0:X.states)==null?void 0:se.active;return _===re&&Te||Le?"left":_===0&&Ne||Ae?"right":!1}function p(){d.value=!0,s.pauseOnHover&&T()}function $(){d.value=!1,M()}function m(a){e(v)||o.value.forEach((_, B)=>{a===r(_,B)&&(_.states.hover=!0)})}function c(){e(v)||o.value.forEach(a=>{a.states.hover=!1})}function h(a){t.value=a}function D(a){s.trigger==="hover"&&a!==t.value&&(t.value=a)}function ee(){n(t.value-1)}function be(){n(t.value+1)}function ae(){T(),M()}F(()=>t.value,(a, _)=>{u(_),_>-1&&k("change",a,_)}),F(()=>s.autoplay, a=>{a?M():T()}),F(()=>s.loop,()=>{n(t.value)}),F(()=>s.interval,()=>{ae()}),F(()=>o.value,()=>{o.value.length>0&&n(s.initialIndex)});const te=ye();return oe(()=>{te.value=$e(C.value,()=>{u()}),M()}),Ke(()=>{T(),C.value&&te.value&&te.value.stop()}),Ye(ke,{root:C,isCardType:g,isVertical:v,items:o,loop:s.loop,addItem:y,removeItem:i,setActiveItem:n}),{root:C,activeIndex:t,arrowDisplay:w,hasLabel:N,hover:d,isCardType:g,items:o,handleButtonEnter:m,handleButtonLeave:c,handleIndicatorClick:h,handleMouseEnter:p,handleMouseLeave:$,setActiveItem:n,prev:ee,next:be,throttledArrowClick:b,throttledIndicatorHover:S}},st=["onMouseenter","onClick"],nt={key:0},rt="ElCarousel",lt=j({name:rt}),it=j({...lt,props:tt,emits:ot,setup(s, {expose:k,emit:l}){const o=s,{root:y,activeIndex:i,arrowDisplay:t,hasLabel:f,hover:d,isCardType:C,items:w,handleButtonEnter:N,handleButtonLeave:g,handleIndicatorClick:v,handleMouseEnter:b,handleMouseLeave:S,setActiveItem:T,prev:M,next:R,throttledArrowClick:n,throttledIndicatorHover:u}=at(o,l),r=he("carousel"),p=V(()=>{const m=[r.b(),r.m(o.direction)];return e(C)&&m.push(r.m("card")),m}),$=V(()=>{const m=[r.e("indicators"),r.em("indicators",o.direction)];return e(f)&&m.push(r.em("indicators","labels")),(o.indicatorPosition==="outside"||e(C))&&m.push(r.em("indicators","outside")),m});return k({setActiveItem:T,prev:M,next:R}),(m, c)=>(I(),A("div",{ref_key:"root",ref:y,class:H(e(p)),onMouseenter:c[6]||(c[6]=W((...h)=>e(b)&&e(b)(...h),["stop"])),onMouseleave:c[7]||(c[7]=W((...h)=>e(S)&&e(S)(...h),["stop"]))},[E("div",{class:H(e(r).e("container")),style:Ce({height:m.height})},[e(t)?(I(),Y(ve,{key:0,name:"carousel-arrow-left",persisted:""},{default:O(()=>[Q(E("button",{type:"button",class:H([e(r).e("arrow"),e(r).em("arrow","left")]),onMouseenter:c[0]||(c[0]= h=>e(N)("left")),onMouseleave:c[1]||(c[1]=(...h)=>e(g)&&e(g)(...h)),onClick:c[2]||(c[2]=W(h=>e(n)(e(i)-1),["stop"]))},[P(e(le),null,{default:O(()=>[P(e(Be))]),_:1})],34),[[J,(m.arrow==="always"||e(d))&&(o.loop||e(i)>0)]])]),_:1})):K("v-if",!0),e(t)?(I(),Y(ve,{key:1,name:"carousel-arrow-right",persisted:""},{default:O(()=>[Q(E("button",{type:"button",class:H([e(r).e("arrow"),e(r).em("arrow","right")]),onMouseenter:c[3]||(c[3]= h=>e(N)("right")),onMouseleave:c[4]||(c[4]=(...h)=>e(g)&&e(g)(...h)),onClick:c[5]||(c[5]=W(h=>e(n)(e(i)+1),["stop"]))},[P(e(le),null,{default:O(()=>[P(e(He))]),_:1})],34),[[J,(m.arrow==="always"||e(d))&&(o.loop||e(i)<e(w).length-1)]])]),_:1})):K("v-if",!0),Ie(m.$slots,"default")],6),m.indicatorPosition!=="none"?(I(),A("ul",{key:0,class:H(e($))},[(I(!0),A(q,null,Z(e(w),(h, D)=>(I(),A("li",{key:D,class:H([e(r).e("indicator"),e(r).em("indicator",m.direction),e(r).is("active",D===e(i))]),onMouseenter: ee=>e(u)(D),onClick:W(ee=>e(v)(D),["stop"])},[E("button",{class:H(e(r).e("button"))},[e(f)?(I(),A("span",nt,Xe(h.props.label),1)):K("v-if",!0)],2)],42,st))),128))],2)):K("v-if",!0)],34))}});var ut=_e(it,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue"]]);const ct=pe({name:{type:String,default:""},label:{type:[String,Number],default:""}}),dt=(s, k)=>{const l=qe(ke),o=ge(),y=.83,i=L(!1),t=L(0),f=L(1),d=L(!1),C=L(!1),w=L(!1),N=L(!1),{isCardType:g,isVertical:v}=l;function b(n, u, r){const p=r-1,$=u-1,m=u+1,c=r/2;return u===0&&n===p?-1:u===p&&n===0?r:n<$&&u-n>=c?r+1:n>m&&n-u>=c?-2:n}function S(n, u){var r;const p=((r=l.root.value)==null?void 0:r.offsetWidth)||0;return w.value?p*((2-y)*(n-u)+1)/4:n<u?-(1+y)*p/4:(3+y)*p/4}function T(n, u, r){const p=l.root.value;return p?((r?p.offsetHeight:p.offsetWidth)||0)*(n-u):0}const M=(n, u, r)=>{var p;const $=e(g),m=(p=l.items.value.length)!=null?p:Number.NaN,c=n===u;!$&&!Ve(r)&&(N.value=c||n===r),!c&&m>2&&l.loop&&(n=b(n,u,m));const h=e(v);d.value=c,$?(w.value=Math.round(Math.abs(n-u))<=1,t.value=S(n,u),f.value=e(d)?1:y):t.value=T(n,u,h),C.value=!0};function R(){if(l&&e(g)){const n=l.items.value.findIndex(({uid:u})=>u===o.uid);l.setActiveItem(n)}}return oe(()=>{l.addItem({props:s,states:G({hover:i,translate:t,scale:f,active:d,ready:C,inStage:w,animating:N}),uid:o.uid,translateItem:M})}),Ze(()=>{l.removeItem(o.uid)}),{active:d,animating:N,hover:i,inStage:w,isVertical:v,translate:t,isCardType:g,scale:f,ready:C,handleItemClick:R}},vt=j({name:"ElCarouselItem"}),mt=j({...vt,props:ct,setup(s){const k=s,l=he("carousel"),{active:o,animating:y,hover:i,inStage:t,isVertical:f,translate:d,isCardType:C,scale:w,ready:N,handleItemClick:g}=dt(k),v=V(()=>{const S=`${`translate${e(f)?"Y":"X"}`}(${e(d)}px)`,T=`scale(${e(w)})`;return{transform:[S,T].join(" ")}});return(b, S)=>Q((I(),A("div",{class:H([e(l).e("item"),e(l).is("active",e(o)),e(l).is("in-stage",e(t)),e(l).is("hover",e(i)),e(l).is("animating",e(y)),{[e(l).em("item","card")]:e(C)}]),style:Ce(e(v)),onClick:S[0]||(S[0]=(...T)=>e(g)&&e(g)(...T))},[e(C)?Q((I(),A("div",{key:0,class:H(e(l).e("mask"))},null,2)),[[J,!e(o)]]):K("v-if",!0),Ie(b.$slots,"default")],6)),[[J,e(N)]])}});var we=_e(mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue"]]);const ft=De(ut,{CarouselItem:we}),pt=Oe(we);const ht=()=>Ue({url:"/common/home",method:"get"}),x= s=>(Ge("data-v-d1e63faa"),s=s(),Je(),s),_t={class:"container"},yt={class:"round-images"},gt={class:"hot-recommend"},It=x(()=>E("h2",null,"热门推荐",-1)),Ct=x(()=>E("p",null,"Hot Recommend",-1)),kt={class:"activity-group"},wt={class:"activities"},bt=x(()=>E("h2",null,"志愿活动",-1)),St=x(()=>E("p",null,"Volunteering",-1)),Et={class:"activity-group"},Nt=j({__name:"Home",setup(s){const k=Re(),l=ze(),o=G([]),y=G([]),i=G([]);oe(()=>{ht().then(d=>{console.log("res",d),k.setTags(d.data.data.tags),o.push(...d.data.data.round_images),y.push(...d.data.data.recommend),i.push(...d.data.data.activities)})});const t= d=>{l.setNextLookActivity(y[d]),ce.push({name:de})},f= d=>{l.setNextLookActivity(i[d]),ce.push({name:de})};return(d, C)=>{const w=Pe,N=pt,g=ft;return I(),A("div",_t,[E("div",yt,[P(g,{height:"400px"},{default:O(()=>[(I(!0),A(q,null,Z(o, v=>(I(),Y(N,{key:v},{default:O(()=>[P(w,{style:{width:"100%",height:"400px"},src:v,fit:"cover"},null,8,["src"])]),_:2},1024))),128))]),_:1})]),E("div",gt,[It,Ct,E("div",kt,[(I(!0),A(q,null,Z(y,(v, b)=>(I(),Y(ue,me({key:v.a_id},v,{class:"activity-item",onLookDetail: S=>t(b)}),null,16,["onLookDetail"]))),128))])]),E("div",wt,[bt,St,E("div",Et,[(I(!0),A(q,null,Z(i,(v, b)=>(I(),Y(ue,me({key:v.a_id},v,{class:"activity-item",onLookDetail: S=>f(b)}),null,16,["onLookDetail"]))),128))])])])}}});const Wt=Qe(Nt,[["__scopeId","data-v-d1e63faa"]]);export{Wt as default};