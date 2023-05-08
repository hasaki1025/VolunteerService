import{M as at,b as $e,j as de,U as Te,a as Fe,B as qe,_ as Be,C as ce,u as st,D as ot,av as ft,aa as Ee,aw as fe,w as lt,f as ut}from "./base-59bc21bd.js";import{e as Ce,a as De,b as ie}from "./index-8ea7482c.js";import{j as dt,b as pe,I as $,T as A,W as G,K as te,X as ze,L as Ue,S as ke,o as me,c as Ke,a9 as Q,a7 as k,V as O,i as Ye,O as re,a3 as Ze,a4 as Ge,n as ct,a as ne,F as pt,R as Je,am as mt,Z as le,a5 as vt,ai as ht,aa as Ae,$ as gt,ac as Pe,a8 as Se,Y as je}from "./_plugin-vue_export-helper-db55c57b.js";import{d as yt,t as bt}from "./error-f1912ce6.js";import{T as wt,s as Ft}from "./index-9b6ac78d.js";import{b as qt}from "./_baseClone-4dd72471.js";function ve(){if(!arguments.length)return[];var i=arguments[0];return at(i)?i:[i]}var xt=4;function Re(i){return qt(i,xt)}const Ot=$e({model:Object,rules:{type:de(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},size:{type:String,values:Ce},disabled:Boolean,validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:{type:Boolean,default:!1},scrollToError:Boolean}),_t={validate:(i, e, t)=>(dt(i)||pe(i))&&Te(e)&&pe(t)};function Et(){const i=$([]),e=A(()=>{if(!i.value.length)return"0";const s=Math.max(...i.value);return s?`${s}px`:""});function t(s){const a=i.value.indexOf(s);return a===-1&&e.value,a}function n(s, a){if(s&&a){const o=t(a);i.value.splice(o,1,s)}else s&&i.value.push(s)}function r(s){const a=t(s);a>-1&&i.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:r}}const X=(i, e)=>{const t=ve(e);return t.length>0?i.filter(n=>n.prop&&t.includes(n.prop)):i},At="ElForm",Pt=G({name:At}),St=G({...Pt,props:Ot,emits:_t,setup(i, {expose:e,emit:t}){const n=i,r=[],s=De(),a=Fe("form"),o=A(()=>{const{labelPosition:m,inline:f}=n;return[a.b(),a.m(s.value||"default"),{[a.m(`label-${m}`)]:m,[a.m("inline")]:f}]}),u= m=>{r.push(m)},b= m=>{m.prop&&r.splice(r.indexOf(m),1)},p=(m=[])=>{n.model&&X(r,m).forEach(f=>f.resetField())},g=(m=[])=>{X(r,m).forEach(f=>f.clearValidate())},w=A(()=>!!n.model),_= m=>{if(r.length===0)return[];const f=X(r,m);return f.length?f:[]},E=async m=>y(void 0,m),d=async(m=[])=>{if(!w.value)return!1;const f=_(m);if(f.length===0)return!0;let h={};for(const q of f)try{await q.validate("")}catch(x){h={...h,...x}}return Object.keys(h).length===0?!0:Promise.reject(h)},y=async(m=[], f)=>{const h=!Ye(f);try{const q=await d(m);return q===!0&&(f==null||f(q)),q}catch(q){if(q instanceof Error)throw q;const x=q;return n.scrollToError&&l(Object.keys(x)[0]),f==null||f(!1,x),h&&Promise.reject(x)}},l= m=>{var f;const h=X(r,m)[0];h&&((f=h.$el)==null||f.scrollIntoView())};return te(()=>n.rules,()=>{n.validateOnRuleChange&&E().catch(m=>yt())},{deep:!0}),ze(qe,Ue({...ke(n),emit:t,resetFields:p,clearValidate:g,validateField:y,addField:u,removeField:b,...Et()})),e({validate:E,validateField:y,resetFields:p,clearValidate:g,scrollToField:l}),(m, f)=>(me(),Ke("form",{class:k(O(o))},[Q(m.$slots,"default")],2))}});var jt=Be(St,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function T(){return T=Object.assign?Object.assign.bind():function(i){for(var e=1; e<arguments.length; e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},T.apply(this,arguments)}function Rt(i, e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,Z(i,e)}function he(i){return he=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},he(i)}function Z(i, e){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n, r){return n.__proto__=r,n},Z(i,e)}function Nt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ee(i, e, t){return Nt()?ee=Reflect.construct.bind():ee=function(r, s, a){var o=[null];o.push.apply(o,s);var u=Function.bind.apply(r,o),b=new u;return a&&Z(b,a.prototype),b},ee.apply(null,arguments)}function Vt(i){return Function.toString.call(i).indexOf("[native code]")!==-1}function ge(i){var e=typeof Map=="function"?new Map:void 0;return ge=function(n){if(n===null||!Vt(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return ee(n,arguments,he(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Z(r,n)},ge(i)}var Wt=/%[sdj%]/g,Mt=function(){};typeof process<"u"&&process.env;function ye(i){if(!i||!i.length)return null;var e={};return i.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function N(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1; n<e; n++)t[n-1]=arguments[n];var r=0,s=t.length;if(typeof i=="function")return i.apply(null,t);if(typeof i=="string"){var a=i.replace(Wt,function(o){if(o==="%%")return"%";if(r>=s)return o;switch(o){case"%s":return String(t[r++]);case"%d":return Number(t[r++]);case"%j":try{return JSON.stringify(t[r++])}catch{return"[Circular]"}break;default:return o}});return a}return i}function It(i){return i==="string"||i==="url"||i==="hex"||i==="email"||i==="date"||i==="pattern"}function P(i, e){return!!(i==null||e==="array"&&Array.isArray(i)&&!i.length||It(e)&&typeof i=="string"&&!i)}function Lt(i, e, t){var n=[],r=0,s=i.length;function a(o){n.push.apply(n,o||[]),r++,r===s&&t(n)}i.forEach(function(o){e(o,a)})}function Ne(i, e, t){var n=0,r=i.length;function s(a){if(a&&a.length){t(a);return}var o=n;n=n+1,o<r?e(i[o],s):t([])}s([])}function $t(i){var e=[];return Object.keys(i).forEach(function(t){e.push.apply(e,i[t]||[])}),e}var Ve=function(i){Rt(e,i);function e(t, n){var r;return r=i.call(this,"Async Validation Error")||this,r.errors=t,r.fields=n,r}return e}(ge(Error));function Tt(i, e, t, n, r){if(e.first){var s=new Promise(function(w, _){var E=function(l){return n(l),l.length?_(new Ve(l,ye(l))):w(r)},d=$t(i);Ne(d,t,E)});return s.catch(function(w){return w}),s}var a=e.firstFields===!0?Object.keys(i):e.firstFields||[],o=Object.keys(i),u=o.length,b=0,p=[],g=new Promise(function(w, _){var E=function(y){if(p.push.apply(p,y),b++,b===u)return n(p),p.length?_(new Ve(p,ye(p))):w(r)};o.length||(n(p),w(r)),o.forEach(function(d){var y=i[d];a.indexOf(d)!==-1?Ne(y,t,E):Lt(y,t,E)})});return g.catch(function(w){return w}),g}function Bt(i){return!!(i&&i.message!==void 0)}function Ct(i, e){for(var t=i,n=0; n<e.length; n++){if(t==null)return t;t=t[e[n]]}return t}function We(i, e){return function(t){var n;return i.fullFields?n=Ct(e,i.fullFields):n=e[t.field||i.fullField],Bt(t)?(t.field=t.field||i.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||i.fullField}}}function Me(i, e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof i[t]=="object"?i[t]=T({},i[t],n):i[t]=n}}return i}var Xe=function(e, t, n, r, s, a){e.required&&(!n.hasOwnProperty(e.field)||P(t,a||e.type))&&r.push(N(s.messages.required,e.fullField))},Dt=function(e, t, n, r, s){(/^\s+$/.test(t)||t==="")&&r.push(N(s.messages.whitespace,e.fullField))},H,zt=function(){if(H)return H;var i="[a-fA-F\\d:]",e=function(h){return h&&h.includeBoundaries?"(?:(?<=\\s|^)(?="+i+")|(?<="+i+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",r=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+r+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+r+"$"),u=function(h){return h&&h.exact?s:new RegExp("(?:"+e(h)+t+e(h)+")|(?:"+e(h)+r+e(h)+")","g")};u.v4=function(f){return f&&f.exact?a:new RegExp(""+e(f)+t+e(f),"g")},u.v6=function(f){return f&&f.exact?o:new RegExp(""+e(f)+r+e(f),"g")};var b="(?:(?:[a-z]+:)?//)",p="(?:\\S+(?::\\S*)?@)?",g=u.v4().source,w=u.v6().source,_="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",E="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",d="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",y="(?::\\d{2,5})?",l='(?:[/?#][^\\s"]*)?',m="(?:"+b+"|www\\.)"+p+"(?:localhost|"+g+"|"+w+"|"+_+E+d+")"+y+l;return H=new RegExp("(?:^"+m+"$)","i"),H},Ie={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},K={integer:function(e){return K.number(e)&&parseInt(e,10)===e},float:function(e){return K.number(e)&&!K.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!K.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Ie.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(zt())},hex:function(e){return typeof e=="string"&&!!e.match(Ie.hex)}},Ut=function(e,t,n,r,s){if(e.required&&t===void 0){Xe(e,t,n,r,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?K[o](t)||r.push(N(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&r.push(N(s.messages.types[o],e.fullField,e.type))},kt=function(e,t,n,r,s){var a=typeof e.len=="number",o=typeof e.min=="number",u=typeof e.max=="number",b=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,p=t,g=null,w=typeof t=="number",_=typeof t=="string",E=Array.isArray(t);if(w?g="number":_?g="string":E&&(g="array"),!g)return!1;E&&(p=t.length),_&&(p=t.replace(b,"_").length),a?p!==e.len&&r.push(N(s.messages[g].len,e.fullField,e.len)):o&&!u&&p<e.min?r.push(N(s.messages[g].min,e.fullField,e.min)):u&&!o&&p>e.max?r.push(N(s.messages[g].max,e.fullField,e.max)):o&&u&&(p<e.min||p>e.max)&&r.push(N(s.messages[g].range,e.fullField,e.min,e.max))},z="enum",Kt=function(e,t,n,r,s){e[z]=Array.isArray(e[z])?e[z]:[],e[z].indexOf(t)===-1&&r.push(N(s.messages[z],e.fullField,e[z].join(", ")))},Yt=function(e,t,n,r,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||r.push(N(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||r.push(N(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},v={required:Xe,whitespace:Dt,type:Ut,range:kt,enum:Kt,pattern:Yt},Zt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t,"string")&&!e.required)return n();v.required(e,t,r,a,s,"string"),P(t,"string")||(v.type(e,t,r,a,s),v.range(e,t,r,a,s),v.pattern(e,t,r,a,s),e.whitespace===!0&&v.whitespace(e,t,r,a,s))}n(a)},Gt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();v.required(e,t,r,a,s),t!==void 0&&v.type(e,t,r,a,s)}n(a)},Jt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),P(t)&&!e.required)return n();v.required(e,t,r,a,s),t!==void 0&&(v.type(e,t,r,a,s),v.range(e,t,r,a,s))}n(a)},Xt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();v.required(e,t,r,a,s),t!==void 0&&v.type(e,t,r,a,s)}n(a)},Ht=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();v.required(e,t,r,a,s),P(t)||v.type(e,t,r,a,s)}n(a)},Qt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();v.required(e,t,r,a,s),t!==void 0&&(v.type(e,t,r,a,s),v.range(e,t,r,a,s))}n(a)},er=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();v.required(e,t,r,a,s),t!==void 0&&(v.type(e,t,r,a,s),v.range(e,t,r,a,s))}n(a)},tr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return n();v.required(e,t,r,a,s,"array"),t!=null&&(v.type(e,t,r,a,s),v.range(e,t,r,a,s))}n(a)},rr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();v.required(e,t,r,a,s),t!==void 0&&v.type(e,t,r,a,s)}n(a)},nr="enum",ir=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();v.required(e,t,r,a,s),t!==void 0&&v[nr](e,t,r,a,s)}n(a)},ar=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t,"string")&&!e.required)return n();v.required(e,t,r,a,s),P(t,"string")||v.pattern(e,t,r,a,s)}n(a)},sr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t,"date")&&!e.required)return n();if(v.required(e,t,r,a,s),!P(t,"date")){var u;t instanceof Date?u=t:u=new Date(t),v.type(e,u,r,a,s),u&&v.range(e,u.getTime(),r,a,s)}}n(a)},or=function(e,t,n,r,s){var a=[],o=Array.isArray(t)?"array":typeof t;v.required(e,t,r,a,s,o),n(a)},ue=function(e,t,n,r,s){var a=e.type,o=[],u=e.required||!e.required&&r.hasOwnProperty(e.field);if(u){if(P(t,a)&&!e.required)return n();v.required(e,t,r,o,s,a),P(t,a)||v.type(e,t,r,o,s)}n(o)},fr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();v.required(e,t,r,a,s)}n(a)},Y={string:Zt,method:Gt,number:Jt,boolean:Xt,regexp:Ht,integer:Qt,float:er,array:tr,object:rr,enum:ir,pattern:ar,date:sr,url:ue,hex:ue,email:ue,required:or,any:fr};function be(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var we=be(),J=function(){function i(t){this.rules=null,this._messages=we,this.define(t)}var e=i.prototype;return e.define=function(n){var r=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(s){var a=n[s];r.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=Me(be(),n)),this._messages},e.validate=function(n,r,s){var a=this;r===void 0&&(r={}),s===void 0&&(s=function(){});var o=n,u=r,b=s;if(typeof u=="function"&&(b=u,u={}),!this.rules||Object.keys(this.rules).length===0)return b&&b(null,o),Promise.resolve(o);function p(d){var y=[],l={};function m(h){if(Array.isArray(h)){var q;y=(q=y).concat.apply(q,h)}else y.push(h)}for(var f=0;f<d.length;f++)m(d[f]);y.length?(l=ye(y),b(y,l)):b(null,o)}if(u.messages){var g=this.messages();g===we&&(g=be()),Me(g,u.messages),u.messages=g}else u.messages=this.messages();var w={},_=u.keys||Object.keys(this.rules);_.forEach(function(d){var y=a.rules[d],l=o[d];y.forEach(function(m){var f=m;typeof f.transform=="function"&&(o===n&&(o=T({},o)),l=o[d]=f.transform(l)),typeof f=="function"?f={validator:f}:f=T({},f),f.validator=a.getValidationMethod(f),f.validator&&(f.field=d,f.fullField=f.fullField||d,f.type=a.getType(f),w[d]=w[d]||[],w[d].push({rule:f,value:l,source:o,field:d}))})});var E={};return Tt(w,u,function(d,y){var l=d.rule,m=(l.type==="object"||l.type==="array")&&(typeof l.fields=="object"||typeof l.defaultField=="object");m=m&&(l.required||!l.required&&d.value),l.field=d.field;function f(x,W){return T({},W,{fullField:l.fullField+"."+x,fullFields:l.fullFields?[].concat(l.fullFields,[x]):[x]})}function h(x){x===void 0&&(x=[]);var W=Array.isArray(x)?x:[x];!u.suppressWarning&&W.length&&i.warning("async-validator:",W),W.length&&l.message!==void 0&&(W=[].concat(l.message));var R=W.map(We(l,o));if(u.first&&R.length)return E[l.field]=1,y(R);if(!m)y(R);else{if(l.required&&!d.value)return l.message!==void 0?R=[].concat(l.message).map(We(l,o)):u.error&&(R=[u.error(l,N(u.messages.required,l.field))]),y(R);var L={};l.defaultField&&Object.keys(d.value).map(function(M){L[M]=l.defaultField}),L=T({},L,d.rule.fields);var U={};Object.keys(L).forEach(function(M){var V=L[M],ae=Array.isArray(V)?V:[V];U[M]=ae.map(f.bind(null,M))});var B=new i(U);B.messages(u.messages),d.rule.options&&(d.rule.options.messages=u.messages,d.rule.options.error=u.error),B.validate(d.value,d.rule.options||u,function(M){var V=[];R&&R.length&&V.push.apply(V,R),M&&M.length&&V.push.apply(V,M),y(V.length?V:null)})}}var q;if(l.asyncValidator)q=l.asyncValidator(l,d.value,h,d.source,u);else if(l.validator){try{q=l.validator(l,d.value,h,d.source,u)}catch(x){console.error==null||console.error(x),u.suppressValidatorError||setTimeout(function(){throw x},0),h(x.message)}q===!0?h():q===!1?h(typeof l.message=="function"?l.message(l.fullField||l.field):l.message||(l.fullField||l.field)+" fails"):q instanceof Array?h(q):q instanceof Error&&h(q.message)}q&&q.then&&q.then(function(){return h()},function(x){return h(x)})},function(d){p(d)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!Y.hasOwnProperty(n.type))throw new Error(N("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var r=Object.keys(n),s=r.indexOf("message");return s!==-1&&r.splice(s,1),r.length===1&&r[0]==="required"?Y.required:Y[this.getType(n)]||void 0},i}();J.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");Y[e]=t};J.warning=Mt;J.messages=we;J.validators=Y;const lr=["","error","validating","success"],ur=$e({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:de([String,Array])},required:{type:Boolean,default:void 0},rules:{type:de([Object,Array])},error:String,validateStatus:{type:String,values:lr},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:Ce}}),Le="ElLabelWrap";var dr=G({name:Le,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(i,{slots:e}){const t=re(qe,void 0),n=re(ce);n||bt(Le,"usage: <el-form-item><label-wrap /></el-form-item>");const r=Fe("form"),s=$(),a=$(0),o=()=>{var p;if((p=s.value)!=null&&p.firstElementChild){const g=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(g))}else return 0},u=(p="update")=>{Je(()=>{e.default&&i.isAutoWidth&&(p==="update"?a.value=o():p==="remove"&&(t==null||t.deregisterLabelWidth(a.value)))})},b=()=>u("update");return Ze(()=>{b()}),Ge(()=>{u("remove")}),ct(()=>b()),te(a,(p,g)=>{i.updateAll&&(t==null||t.registerLabelWidth(p,g))}),st(A(()=>{var p,g;return(g=(p=s.value)==null?void 0:p.firstElementChild)!=null?g:null}),b),()=>{var p,g;if(!e)return null;const{isAutoWidth:w}=i;if(w){const _=t==null?void 0:t.autoLabelWidth,E=n==null?void 0:n.hasLabel,d={};if(E&&_&&_!=="auto"){const y=Math.max(0,Number.parseInt(_,10)-a.value),l=t.labelPosition==="left"?"marginRight":"marginLeft";y&&(d[l]=`${y}px`)}return ne("div",{ref:s,class:[r.be("item","label-wrap")],style:d},[(p=e.default)==null?void 0:p.call(e)])}else return ne(pt,{ref:s},[(g=e.default)==null?void 0:g.call(e)])}}});const cr=["role","aria-labelledby"],pr=G({name:"ElFormItem"}),mr=G({...pr,props:ur,setup(i,{expose:e}){const t=i,n=mt(),r=re(qe,void 0),s=re(ce,void 0),a=De(void 0,{formItem:!1}),o=Fe("form-item"),u=ot().value,b=$([]),p=$(""),g=ft(p,100),w=$(""),_=$();let E,d=!1;const y=A(()=>{if((r==null?void 0:r.labelPosition)==="top")return{};const c=Ee(t.labelWidth||(r==null?void 0:r.labelWidth)||"");return c?{width:c}:{}}),l=A(()=>{if((r==null?void 0:r.labelPosition)==="top"||r!=null&&r.inline)return{};if(!t.label&&!t.labelWidth&&L)return{};const c=Ee(t.labelWidth||(r==null?void 0:r.labelWidth)||"");return!t.label&&!n.label?{marginLeft:c}:{}}),m=A(()=>[o.b(),o.m(a.value),o.is("error",p.value==="error"),o.is("validating",p.value==="validating"),o.is("success",p.value==="success"),o.is("required",ae.value||t.required),o.is("no-asterisk",r==null?void 0:r.hideRequiredAsterisk),(r==null?void 0:r.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[o.m("feedback")]:r==null?void 0:r.statusIcon}]),f=A(()=>Te(t.inlineMessage)?t.inlineMessage:(r==null?void 0:r.inlineMessage)||!1),h=A(()=>[o.e("error"),{[o.em("error","inline")]:f.value}]),q=A(()=>t.prop?pe(t.prop)?t.prop:t.prop.join("."):""),x=A(()=>!!(t.label||n.label)),W=A(()=>t.for||b.value.length===1?b.value[0]:void 0),R=A(()=>!W.value&&x.value),L=!!s,U=A(()=>{const c=r==null?void 0:r.model;if(!(!c||!t.prop))return fe(c,t.prop).value}),B=A(()=>{const{required:c}=t,F=[];t.rules&&F.push(...ve(t.rules));const j=r==null?void 0:r.rules;if(j&&t.prop){const S=fe(j,t.prop).value;S&&F.push(...ve(S))}if(c!==void 0){const S=F.map((I,D)=>[I,D]).filter(([I])=>Object.keys(I).includes("required"));if(S.length>0)for(const[I,D]of S)I.required!==c&&(F[D]={...I,required:c});else F.push({required:c})}return F}),M=A(()=>B.value.length>0),V=c=>B.value.filter(j=>!j.trigger||!c?!0:Array.isArray(j.trigger)?j.trigger.includes(c):j.trigger===c).map(({trigger:j,...S})=>S),ae=A(()=>B.value.some(c=>c.required)),Qe=A(()=>{var c;return g.value==="error"&&t.showMessage&&((c=r==null?void 0:r.showMessage)!=null?c:!0)}),xe=A(()=>`${t.label||""}${(r==null?void 0:r.labelSuffix)||""}`),C=c=>{p.value=c},et=c=>{var F,j;const{errors:S,fields:I}=c;(!S||!I)&&console.error(c),C("error"),w.value=S?(j=(F=S==null?void 0:S[0])==null?void 0:F.message)!=null?j:`${t.prop} is required`:"",r==null||r.emit("validate",t.prop,!1,w.value)},tt=()=>{C("success"),r==null||r.emit("validate",t.prop,!0,"")},rt=async c=>{const F=q.value;return new J({[F]:c}).validate({[F]:U.value},{firstFields:!0}).then(()=>(tt(),!0)).catch(S=>(et(S),Promise.reject(S)))},Oe=async(c,F)=>{if(d||!t.prop)return!1;const j=Ye(F);if(!M.value)return F==null||F(!1),!1;const S=V(c);return S.length===0?(F==null||F(!0),!0):(C("validating"),rt(S).then(()=>(F==null||F(!0),!0)).catch(I=>{const{fields:D}=I;return F==null||F(!1,D),j?!1:Promise.reject(D)}))},se=()=>{C(""),w.value="",d=!1},_e=async()=>{const c=r==null?void 0:r.model;if(!c||!t.prop)return;const F=fe(c,t.prop);d=!0,F.value=Re(E),await Je(),se(),d=!1},nt=c=>{b.value.includes(c)||b.value.push(c)},it=c=>{b.value=b.value.filter(F=>F!==c)};te(()=>t.error,c=>{w.value=c||"",C(c?"error":"")},{immediate:!0}),te(()=>t.validateStatus,c=>C(c||""));const oe=Ue({...ke(t),$el:_,size:a,validateState:p,labelId:u,inputIds:b,isGroup:R,hasLabel:x,addInputId:nt,removeInputId:it,resetField:_e,clearValidate:se,validate:Oe});return ze(ce,oe),Ze(()=>{t.prop&&(r==null||r.addField(oe),E=Re(U.value))}),Ge(()=>{r==null||r.removeField(oe)}),e({size:a,validateMessage:w,validateState:p,validate:Oe,clearValidate:se,resetField:_e}),(c,F)=>{var j;return me(),Ke("div",{ref_key:"formItemRef",ref:_,class:k(O(m)),role:O(R)?"group":void 0,"aria-labelledby":O(R)?O(u):void 0},[ne(O(dr),{"is-auto-width":O(y).width==="auto","update-all":((j=O(r))==null?void 0:j.labelWidth)==="auto"},{default:le(()=>[O(x)?(me(),vt(ht(O(W)?"label":"div"),{key:0,id:O(u),for:O(W),class:k(O(o).e("label")),style:Ae(O(y))},{default:le(()=>[Q(c.$slots,"label",{label:O(xe)},()=>[gt(Pe(O(xe)),1)])]),_:3},8,["id","for","class","style"])):Se("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),je("div",{class:k(O(o).e("content")),style:Ae(O(l))},[Q(c.$slots,"default"),ne(wt,{name:`${O(o).namespace.value}-zoom-in-top`},{default:le(()=>[O(Qe)?Q(c.$slots,"error",{key:0,error:w.value},()=>[je("div",{class:k(O(h))},Pe(w.value),3)]):Se("v-if",!0)]),_:3},8,["name"])],6)],10,cr)}}});var He=Be(mr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const qr=lt(jt,{FormItem:He}),xr=ut(He);const vr=i=>ie({method:"POST",url:"/common/file",data:{file:i},headers:{"Content-Type":"multipart/form-data"}}),Or=(i,e)=>new Promise((t,n)=>{ie({url:"/common/user/login",method:"post",data:{username:i,password:e}}).then(r=>{Ft("TOKEN",r.data.data.token),t(r)}).catch(r=>{n(r)})}),_r=(i,e,t,n,r,s)=>ie({url:"/common/user/register",method:"post",data:{username:i,password:e,name:t,telephone:n,email:r,sex:s}}),Er=async i=>{console.log(i);let e=null;i.avatar&&(e=(await vr(i.avatar)).data.data);const{avatar:t,...n}=i,r=Object.assign({...n},e?{avatar:e}:{});return console.log("configObj",r),ie({method:"post",url:"/common/user/changeInfo",data:r})};export{xr as E,qr as a,_r as b,Er as c,Or as u};