import{q as re,p as v,o as h,E as $,Q as k,A as x,F as f,u as L,c as B,z as S,U as oe,ag as N,Z as z,G as Z,T as Sl,g as ke,t as Me,w as F,k as tl,d as $e,l as il,I as zl,n as M,J as he,K as al,S as Y,b as R,H as sl,s as pl,a7 as se,aq as me,ar as ll,O as fl,M as Bl,x as Ol,r as ne,ao as Pl,L as nl,Y as vl,ai as q,as as Dl,ak as ql,a5 as ml}from "./index-4cca8065.js";import{aj as Wl,G as wl,c as Fl,H as El,u as te,$ as hl,E as ol,_ as be,w as Il,j as Ll,a7 as Kl,P as Al,I as Nl,p as Rl,N as Hl,i as bl,W as jl,d as Ql,a as Tl}from "./index-8666cb90.js";import{E as Gl,a as Ul,d as Jl,e as Yl}from "./index-0bf99d73.js";import{i as Zl,E as Xl}from "./el-input-b1cbee16.js";import{u as rl,i as gl,d as yl,E as xl,C as _l}from "./index-67a21231.js";import{K as W,U as X,C as kl}from "./event-82466d06.js";import{s as en}from "./el-tag-ef70e8e0.js";const ln=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),nn= e=>Wl[e||"default"],on= e=>["",...wl].includes(e),tn= e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),Ml=Fl({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:wl,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),an={close: e=>e instanceof MouseEvent,click: e=>e instanceof MouseEvent},sn=re({name:"ElTag"}),rn=re({...sn,props:Ml,emits:an,setup(e, {emit:l}){const i=e,g=El(),u=te("tag"),p=v(()=>{const{type:c,hit:C,effect:m,closable:O,round:w}=i;return[u.b(),u.is("closable",O),u.m(c),u.m(g.value),u.m(m),u.is("hit",C),u.is("round",w)]}),s= c=>{l("close",c)},d= c=>{l("click",c)};return(c, C)=>c.disableTransitions?(h(),$("span",{key:0,class:f(L(p)),style:Z({backgroundColor:c.color}),onClick:d},[k("span",{class:f(L(u).e("content"))},[x(c.$slots,"default")],2),c.closable?(h(),B(L(ol),{key:0,class:f(L(u).e("close")),onClick:N(s,["stop"])},{default:S(()=>[oe(L(hl))]),_:1},8,["class","onClick"])):z("v-if",!0)],6)):(h(),B(Sl,{key:1,name:`${L(u).namespace.value}-zoom-in-center`,appear:""},{default:S(()=>[k("span",{class:f(L(p)),style:Z({backgroundColor:c.color}),onClick:d},[k("span",{class:f(L(u).e("content"))},[x(c.$slots,"default")],2),c.closable?(h(),B(L(ol),{key:0,class:f(L(u).e("close")),onClick:N(s,["stop"])},{default:S(()=>[oe(L(hl))]),_:1},8,["class","onClick"])):z("v-if",!0)],6)]),_:3},8,["name"]))}});var un=be(rn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const dn=Il(un),$l="ElSelectGroup",Ve="ElSelect";function cn(e, l){const i=ke(Ve),g=ke($l,{disabled:!1}),u=v(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),p=v(()=>i.props.multiple?O(i.props.modelValue,e.value):w(e.value,i.props.modelValue)),s=v(()=>{if(i.props.multiple){const b=i.props.modelValue||[];return!p.value&&b.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),d=v(()=>e.label||(u.value?"":e.value)),c=v(()=>e.value||e.label||""),C=v(()=>e.disabled||l.groupDisabled||s.value),m=tl(),O=(b=[], y)=>{if(u.value){const E=i.props.valueKey;return b&&b.some(K=>Me(W(K,E))===W(y,E))}else return b&&b.includes(y)},w=(b, y)=>{if(u.value){const{valueKey:E}=i.props;return W(b,E)===W(y,E)}else return b===y},V=()=>{!e.disabled&&!g.disabled&&(i.hoverIndex=i.optionsArray.indexOf(m.proxy))};F(()=>d.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),F(()=>e.value,(b, y)=>{const{remote:E,valueKey:K}=i.props;if(Object.is(b,y)||(i.onOptionDestroy(y,m.proxy),i.onOptionCreate(m.proxy)),!e.created&&!E){if(K&&typeof b=="object"&&typeof y=="object"&&b[K]===y[K])return;i.setSelected()}}),F(()=>g.disabled,()=>{l.groupDisabled=g.disabled},{immediate:!0});const{queryChange:t}=Me(i);return F(t, b=>{const{query:y}=L(b),E=new RegExp(ln(y),"i");l.visible=E.test(d.value)||e.created,l.visible||i.filteredOptionsCount--}),{select:i,currentLabel:d,currentValue:c,itemSelected:p,isDisabled:C,hoverItem:V}}const pn=re({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=te("select"),i=$e({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:g,itemSelected:u,isDisabled:p,select:s,hoverItem:d}=cn(e,i),{visible:c,hover:C}=il(i),m=tl().proxy;s.onOptionCreate(m),zl(()=>{const w=m.value,{selected:V}=s,b=(s.props.multiple?V:[V]).some(y=>y.value===m.value);M(()=>{s.cachedOptions.get(w)===m&&!b&&s.cachedOptions.delete(w)}),s.onOptionDestroy(w,m)});function O(){e.disabled!==!0&&i.groupDisabled!==!0&&s.handleOptionSelect(m,!0)}return{ns:l,currentLabel:g,itemSelected:u,isDisabled:p,select:s,hoverItem:d,visible:c,hover:C,selectOptionClick:O,states:i}}});function fn(e, l, i, g, u, p){return he((h(),$("li",{class:f([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...s)=>e.hoverItem&&e.hoverItem(...s)),onClick:l[1]||(l[1]=N((...s)=>e.selectOptionClick&&e.selectOptionClick(...s),["stop"]))},[x(e.$slots,"default",{},()=>[k("span",null,Y(e.currentLabel),1)])],34)),[[al,e.visible]])}var ul=be(pn,[["render",fn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const vn=re({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=ke(Ve),l=te("select"),i=v(()=>e.props.popperClass),g=v(()=>e.props.multiple),u=v(()=>e.props.fitInputWidth),p=R("");function s(){var d;p.value=`${(d=e.selectWrapper)==null?void 0:d.offsetWidth}px`}return sl(()=>{s(),Ll(e.selectWrapper,s)}),{ns:l,minWidth:p,popperClass:i,isMultiple:g,isFitInputWidth:u}}});function mn(e, l, i, g, u, p){return h(),$("div",{class:f([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:Z({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[x(e.$slots,"default")],6)}var hn=be(vn,[["render",mn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function bn(e){const{t:l}=rl();return $e({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}const gn=(e, l, i)=>{const{t:g}=rl(),u=te("select");Kl({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},v(()=>e.suffixTransition===!1));const p=R(null),s=R(null),d=R(null),c=R(null),C=R(null),m=R(null),O=R(-1),w=pl({query:""}),V=pl(""),{form:t,formItem:b}=Al(),y=v(()=>!e.filterable||e.multiple||!l.visible),E=v(()=>e.disabled||(t==null?void 0:t.disabled)),K=v(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!E.value&&l.inputHovering&&n}),ue=v(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),ze=v(()=>u.is("reverse",ue.value&&l.visible&&e.suffixTransition)),ge=v(()=>e.remote?300:0),de=v(()=>e.loading?e.loadingText||g("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||g("el.select.noMatch"):l.options.size===0?e.noDataText||g("el.select.noData"):null),T=v(()=>Array.from(l.options.values())),Be=v(()=>Array.from(l.cachedOptions.values())),Pe=v(()=>{const n=T.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ie=El(),De=v(()=>["small"].includes(ie.value)?"small":"default"),qe=v({get(){return l.visible&&de.value!==!1},set(n){l.visible=n}});F([()=>E.value,()=>ie.value,()=>t==null?void 0:t.size],()=>{M(()=>{A()})}),F(()=>e.placeholder, n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),F(()=>e.modelValue,(n, o)=>{e.multiple&&(A(),n&&n.length>0||s.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",j(l.query))),ce(),e.filterable&&!e.multiple&&(l.inputLength=20),!gl(n,o)&&e.validateEvent&&(b==null||b.validate("change").catch(a=>Nl()))},{flush:"post",deep:!0}),F(()=>l.visible, n=>{var o,a,r;n?((a=(o=d.value)==null?void 0:o.updatePopper)==null||a.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(r=s.value)==null||r.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),j(l.query),!e.multiple&&!e.remote&&(w.value.query="",me(w),me(V)))):(e.filterable&&(se(e.filterMethod)&&e.filterMethod(""),se(e.remoteMethod)&&e.remoteMethod("")),s.value&&s.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,We(),M(()=>{s.value&&s.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),F(()=>l.options.entries(),()=>{var n,o,a;if(!Rl)return;(o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&A();const r=((a=C.value)==null?void 0:a.querySelectorAll("input"))||[];Array.from(r).includes(document.activeElement)||ce(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Ce()},{flush:"post"}),F(()=>l.hoverIndex, n=>{Hl(n)&&n>-1?O.value=T.value[n]||{}:O.value={},T.value.forEach(o=>{o.hover=O.value===o})});const A=()=>{e.collapseTags&&!e.filterable||M(()=>{var n,o;if(!p.value)return;const a=p.value.$el.querySelector("input"),r=c.value,I=nn(ie.value||(t==null?void 0:t.size));a.style.height=`${(l.selected.length===0?I:Math.max(r?r.clientHeight+(r.clientHeight>I?6:0):0,I))-2}px`,l.tagInMultiLine=Number.parseFloat(a.style.height)>=I,l.visible&&de.value!==!1&&((o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n))})},j=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(se(e.filterMethod)||se(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,M(()=>{var o,a;l.visible&&((a=(o=d.value)==null?void 0:o.updatePopper)==null||a.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&M(()=>{const o=s.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,ye(),A()}),e.remote&&se(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):se(e.filterMethod)?(e.filterMethod(n),me(V)):(l.filteredOptionsCount=l.optionsCount,w.value.query=n,me(w),me(V)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await M(),Ce())}},ye=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},Ce=()=>{const n=T.value.filter(r=>r.visible&&!r.disabled&&!r.states.groupDisabled),o=n.find(r=>r.created),a=n[0];l.hoverIndex=pe(T.value,o||a)},ce=()=>{var n;if(e.multiple)l.selectedLabel="";else{const a=Se(e.modelValue);(n=a.props)!=null&&n.created?(l.createdLabel=a.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=a.currentLabel,l.selected=a,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(a=>{o.push(Se(a))}),l.selected=o,M(()=>{A()})},Se= n=>{let o;const a=ll(n).toLowerCase()==="object",r=ll(n).toLowerCase()==="null",I=ll(n).toLowerCase()==="undefined";for(let H=l.cachedOptions.size-1; H>=0; H--){const P=Be.value[H];if(a?W(P.value,e.valueKey)===W(n,e.valueKey):P.value===n){o={value:n,currentLabel:P.currentLabel,isDisabled:P.isDisabled};break}}if(o)return o;const U=a?n.label:!r&&!I?n:"",J={value:n,currentLabel:U};return e.multiple&&(J.hitState=!1),J},We=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>T.value.findIndex(a=>W(a,n)===W(o,n)))):l.hoverIndex=-1:l.hoverIndex=T.value.findIndex(o=>ve(o)===ve(l.selected))},300)},Fe=()=>{var n,o;Ke(),(o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&!e.filterable&&A()},Ke=()=>{var n;l.inputWidth=(n=p.value)==null?void 0:n.$el.getBoundingClientRect().width},Ae=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,j(l.query))},Ne=yl(()=>{Ae()},ge.value),Re=yl(n=>{j(n.target.value)},ge.value),_= n=>{gl(e.modelValue,n)||i.emit(kl,n)},He= n=>{if(n.target.value.length<=0&&!fe()){const o=e.modelValue.slice();o.pop(),i.emit(X,o),_(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},je=(n, o)=>{const a=l.selected.indexOf(o);if(a>-1&&!E.value){const r=e.modelValue.slice();r.splice(a,1),i.emit(X,r),_(r),i.emit("remove-tag",o.value)}n.stopPropagation()},ee= n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!Bl(o))for(const a of l.selected)a.isDisabled&&o.push(a.value);i.emit(X,o),_(o),l.hoverIndex=-1,l.visible=!1,i.emit("clear")},Oe=(n, o)=>{var a;if(e.multiple){const r=(e.modelValue||[]).slice(),I=pe(r,n.value);I>-1?r.splice(I,1):(e.multipleLimit<=0||r.length<e.multipleLimit)&&r.push(n.value),i.emit(X,r),_(r),n.created&&(l.query="",j(""),l.inputLength=20),e.filterable&&((a=s.value)==null||a.focus())}else i.emit(X,n.value),_(n.value),l.visible=!1;l.isSilentBlur=o,Qe(),!l.visible&&M(()=>{Q(n)})},pe=(n=[], o)=>{if(!fl(o))return n.indexOf(o);const a=e.valueKey;let r=-1;return n.some((I, U)=>Me(W(I,a))===W(o,a)?(r=U,!0):!1),r},Qe=()=>{l.softFocus=!0;const n=s.value||p.value;n&&(n==null||n.focus())},Q= n=>{var o,a,r,I,U;const J=Array.isArray(n)?n[0]:n;let H=null;if(J!=null&&J.value){const P=T.value.filter(Te=>Te.value===J.value);P.length>0&&(H=P[0].$el)}if(d.value&&H){const P=(I=(r=(a=(o=d.value)==null?void 0:o.popperRef)==null?void 0:a.contentRef)==null?void 0:r.querySelector)==null?void 0:I.call(r,`.${u.be("dropdown","wrap")}`);P&&en(P,H)}(U=m.value)==null||U.handleScroll()},Ge= n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Ue=(n, o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Je= n=>{n.code!==Gl.backspace&&fe(!1),l.inputLength=s.value.value.length*15+20,A()},fe= n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},Ye= n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,M(()=>j(o));else{const a=o[o.length-1]||"";l.isOnComposition=!Zl(a)}},Ze=()=>{M(()=>Q(l.selected))},G= n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},we=()=>{var n;l.visible=!1,(n=p.value)==null||n.blur()},Xe= n=>{M(()=>{l.isSilentBlur?l.isSilentBlur=!1:i.emit("blur",n)}),l.softFocus=!1},Ee= n=>{ee(n)},xe=()=>{l.visible=!1},_e= n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Ie= n=>{var o;n&&!l.mouseEnter||E.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!d.value||!d.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((o=s.value||p.value)==null||o.focus()))},Le=()=>{l.visible?T.value[l.hoverIndex]&&Oe(T.value[l.hoverIndex],void 0):Ie()},ve= n=>fl(n.value)?W(n.value,e.valueKey):n.value,el=v(()=>T.value.filter(n=>n.visible).every(n=>n.disabled)),ae= n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!el.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=T.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&ae(n),M(()=>Q(O.value))}};return{optionsArray:T,selectSize:ie,handleResize:Fe,debouncedOnInputChange:Ne,debouncedQueryChange:Re,deletePrevTag:He,deleteTag:je,deleteSelected:ee,handleOptionSelect:Oe,scrollToOption:Q,readonly:y,resetInputHeight:A,showClose:K,iconComponent:ue,iconReverse:ze,showNewOption:Pe,collapseTagSize:De,setSelected:ce,managePlaceholder:ye,selectDisabled:E,emptyText:de,toggleLastOptionHitState:fe,resetInputState:Je,handleComposition:Ye,onOptionCreate:Ge,onOptionDestroy:Ue,handleMenuEnter:Ze,handleFocus:G,blur:we,handleBlur:Xe,handleClearClick:Ee,handleClose:xe,handleKeydownEscape:_e,toggleMenu:Ie,selectOption:Le,getValueKey:ve,navigateOptions:ae,dropMenuVisible:qe,queryChange:w,groupQueryChange:V,reference:p,input:s,tooltipRef:d,tags:c,selectWrapper:C,scrollbar:m,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}},Cl="ElSelect",yn=re({name:Cl,componentName:Cl,components:{ElInput:Xl,ElSelectMenu:hn,ElOption:ul,ElTag:dn,ElScrollbar:xl,ElTooltip:Ul,ElIcon:ol},directives:{ClickOutside:_l},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:on},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Jl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:bl,default:jl},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:bl,default:Ql},tagType:{...Ml.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:Yl,default:"bottom-start"}},emits:[X,kl,"remove-tag","clear","visible-change","focus","blur"],setup(e, l){const i=te("select"),g=te("input"),{t:u}=rl(),p=bn(e),{optionsArray:s,selectSize:d,readonly:c,handleResize:C,collapseTagSize:m,debouncedOnInputChange:O,debouncedQueryChange:w,deletePrevTag:V,deleteTag:t,deleteSelected:b,handleOptionSelect:y,scrollToOption:E,setSelected:K,resetInputHeight:ue,managePlaceholder:ze,showClose:ge,selectDisabled:de,iconComponent:T,iconReverse:Be,showNewOption:Pe,emptyText:ie,toggleLastOptionHitState:De,resetInputState:qe,handleComposition:A,onOptionCreate:j,onOptionDestroy:ye,handleMenuEnter:Ce,handleFocus:ce,blur:Se,handleBlur:We,handleClearClick:Fe,handleClose:Ke,handleKeydownEscape:Ae,toggleMenu:Ne,selectOption:Re,getValueKey:_,navigateOptions:He,dropMenuVisible:je,reference:ee,input:Oe,tooltipRef:pe,tags:Qe,selectWrapper:Q,scrollbar:Ge,queryChange:Ue,groupQueryChange:Je,handleMouseEnter:fe,handleMouseLeave:Ye}=gn(e,p,l),{focus:Ze}=tn(ee),{inputWidth:G,selected:we,inputLength:Xe,filteredOptionsCount:Ee,visible:xe,softFocus:_e,selectedLabel:Ie,hoverIndex:Le,query:ve,inputHovering:el,currentPlaceholder:ae,menuVisibleOnFocus:dl,isOnComposition:cl,isSilentBlur:n,options:o,cachedOptions:a,optionsCount:r,prefixWidth:I,tagInMultiLine:U}=il(p),J=v(()=>{const D=[i.b()],le=L(d);return le&&D.push(i.m(le)),e.disabled&&D.push(i.m("disabled")),D}),H=v(()=>({maxWidth:`${L(G)-32}px`,width:"100%"})),P=v(()=>({maxWidth:`${L(G)>123?L(G)-123:L(G)-75}px`}));Ol(Ve,$e({props:e,options:o,optionsArray:s,cachedOptions:a,optionsCount:r,filteredOptionsCount:Ee,hoverIndex:Le,handleOptionSelect:y,onOptionCreate:j,onOptionDestroy:ye,selectWrapper:Q,selected:we,setSelected:K,queryChange:Ue,groupQueryChange:Je})),sl(()=>{p.cachedPlaceHolder=ae.value=e.placeholder||u("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(ae.value=""),Ll(Q,C),e.remote&&e.multiple&&ue(),M(()=>{const D=ee.value&&ee.value.$el;if(D&&(G.value=D.getBoundingClientRect().width,l.slots.prefix)){const le=D.querySelector(`.${g.e("prefix")}`);I.value=Math.max(le.getBoundingClientRect().width+5,30)}}),K()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(X,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(X,"");const Te=v(()=>{var D,le;return(le=(D=pe.value)==null?void 0:D.popperRef)==null?void 0:le.contentRef});return{tagInMultiLine:U,prefixWidth:I,selectSize:d,readonly:c,handleResize:C,collapseTagSize:m,debouncedOnInputChange:O,debouncedQueryChange:w,deletePrevTag:V,deleteTag:t,deleteSelected:b,handleOptionSelect:y,scrollToOption:E,inputWidth:G,selected:we,inputLength:Xe,filteredOptionsCount:Ee,visible:xe,softFocus:_e,selectedLabel:Ie,hoverIndex:Le,query:ve,inputHovering:el,currentPlaceholder:ae,menuVisibleOnFocus:dl,isOnComposition:cl,isSilentBlur:n,options:o,resetInputHeight:ue,managePlaceholder:ze,showClose:ge,selectDisabled:de,iconComponent:T,iconReverse:Be,showNewOption:Pe,emptyText:ie,toggleLastOptionHitState:De,resetInputState:qe,handleComposition:A,handleMenuEnter:Ce,handleFocus:ce,blur:Se,handleBlur:We,handleClearClick:Fe,handleClose:Ke,handleKeydownEscape:Ae,toggleMenu:Ne,selectOption:Re,getValueKey:_,navigateOptions:He,dropMenuVisible:je,focus:Ze,reference:ee,input:Oe,tooltipRef:pe,popperPaneRef:Te,tags:Qe,selectWrapper:Q,scrollbar:Ge,wrapperKls:J,selectTagsStyle:H,nsSelect:i,tagTextStyle:P,handleMouseEnter:fe,handleMouseLeave:Ye}}}),Cn=["disabled","autocomplete"],Sn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function On(e, l, i, g, u, p){const s=ne("el-tag"),d=ne("el-tooltip"),c=ne("el-icon"),C=ne("el-input"),m=ne("el-option"),O=ne("el-scrollbar"),w=ne("el-select-menu"),V=Pl("click-outside");return he((h(),$("div",{ref:"selectWrapper",class:f(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:l[23]||(l[23]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onClick:l[24]||(l[24]=N((...t)=>e.toggleMenu&&e.toggleMenu(...t),["stop"]))},[oe(d,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:S(()=>[k("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]= t=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]= t=>e.inputHovering=!1)},[e.multiple?(h(),$("div",{key:0,ref:"tags",class:f(e.nsSelect.e("tags")),style:Z(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(h(),$("span",{key:0,class:f([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[oe(s,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]= t=>e.deleteTag(t,e.selected[0]))},{default:S(()=>[k("span",{class:f(e.nsSelect.e("tags-text")),style:Z(e.tagTextStyle)},Y(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(h(),B(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:S(()=>[e.collapseTagsTooltip?(h(),B(d,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:S(()=>[k("span",{class:f(e.nsSelect.e("tags-text"))},"+ "+Y(e.selected.length-1),3)]),content:S(()=>[k("div",{class:f(e.nsSelect.e("collapse-tags"))},[(h(!0),$(nl,null,vl(e.selected.slice(1),(t, b)=>(h(),$("div",{key:b,class:f(e.nsSelect.e("collapse-tag"))},[(h(),B(s,{key:e.getValueKey(t),class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose: y=>e.deleteTag(y,t)},{default:S(()=>[k("span",{class:f(e.nsSelect.e("tags-text")),style:Z({maxWidth:e.inputWidth-75+"px"})},Y(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(h(),$("span",{key:1,class:f(e.nsSelect.e("tags-text"))},"+ "+Y(e.selected.length-1),3))]),_:1},8,["size","type"])):z("v-if",!0)],2)):z("v-if",!0),z(" <div> "),e.collapseTags?z("v-if",!0):(h(),B(Sl,{key:1,onAfterLeave:e.resetInputHeight},{default:S(()=>[k("span",{class:f([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(h(!0),$(nl,null,vl(e.selected, t=>(h(),B(s,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose: b=>e.deleteTag(b,t)},{default:S(()=>[k("span",{class:f(e.nsSelect.e("tags-text")),style:Z({maxWidth:e.inputWidth-75+"px"})},Y(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),z(" </div> "),e.filterable?he((h(),$("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]= t=>e.query=t),type:"text",class:f([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:Z({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[3]||(l[3]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[4]||(l[4]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[5]||(l[5]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[6]||(l[6]=q(N(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=q(N(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=q((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[9]||(l[9]=q(N((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[10]||(l[10]=q((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[11]||(l[11]=q(t=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[14]||(l[14]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[15]||(l[15]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,Cn)),[[Dl,e.query]]):z("v-if",!0)],6)):z("v-if",!0),oe(C,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]= t=>e.selectedLabel=t),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:f([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=q(N(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=q(N(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),q(N(e.selectOption,["stop","prevent"]),["enter"]),q(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=q(t=>e.visible=!1,["tab"]))]},ql({suffix:S(()=>[e.iconComponent&&!e.showClose?(h(),B(c,{key:0,class:f([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:S(()=>[(h(),B(ml(e.iconComponent)))]),_:1},8,["class"])):z("v-if",!0),e.showClose&&e.clearIcon?(h(),B(c,{key:1,class:f([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:S(()=>[(h(),B(ml(e.clearIcon)))]),_:1},8,["class","onClick"])):z("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:S(()=>[k("div",Sn,[x(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:S(()=>[oe(w,null,{default:S(()=>[he(oe(O,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:f([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:S(()=>[e.showNewOption?(h(),B(m,{key:0,value:e.query,created:!0},null,8,["value"])):z("v-if",!0),x(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[al,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(h(),$(nl,{key:0},[e.$slots.empty?x(e.$slots,"empty",{key:0}):(h(),$("p",{key:1,class:f(e.nsSelect.be("dropdown","empty"))},Y(e.emptyText),3))],64)):z("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","effect","transition","persistent","onShow"])],34)),[[V,e.handleClose,e.popperPaneRef]])}var wn=be(yn,[["render",On],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const En=re({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=te("select"),i=R(!0),g=tl(),u=R([]);Ol($l,$e({...il(e)}));const p=ke(Ve);sl(()=>{u.value=s(g.subTree)});const s= c=>{const C=[];return Array.isArray(c.children)&&c.children.forEach(m=>{var O;m.type&&m.type.name==="ElOption"&&m.component&&m.component.proxy?C.push(m.component.proxy):(O=m.children)!=null&&O.length&&C.push(...s(m))}),C},{groupQueryChange:d}=Me(p);return F(d,()=>{i.value=u.value.some(c=>c.visible===!0)},{flush:"post"}),{visible:i,ns:l}}});function In(e, l, i, g, u, p){return he((h(),$("ul",{class:f(e.ns.be("group","wrap"))},[k("li",{class:f(e.ns.be("group","title"))},Y(e.label),3),k("li",null,[k("ul",{class:f(e.ns.b("group"))},[x(e.$slots,"default")],2)])],2)),[[al,e.visible]])}var Vl=be(En,[["render",In],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Bn=Il(wn,{Option:ul,OptionGroup:Vl}),Pn=Tl(ul);Tl(Vl);export{Pn as E,Bn as a};
