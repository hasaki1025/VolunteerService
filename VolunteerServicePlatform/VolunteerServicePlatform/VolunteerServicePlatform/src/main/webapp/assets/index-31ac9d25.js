import{o as m,c as g,r as v,a as y}from "./index-fe68f829.js";import{c as h}from "./pinia-251ef24e.js";import{_ as S}from "./_plugin-vue_export-helper-c27b6911.js";import{r as b}from "./index-8be7bc5b.js";import"./routes-88cdf169.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=(r, o)=>{const s=r.storage||sessionStorage,n=r.key||o.$id;if(r.paths){const e=r.paths.reduce((t, i)=>(t[i]=o.$state[i],t),{});s.setItem(n,JSON.stringify(e))}else s.setItem(n,JSON.stringify(o.$state))};var $=({options:r,store:o})=>{var s,n,e,t;if((s=r.persist)!=null&&s.enabled){const i=[{key:o.$id,storage:sessionStorage}],l=(e=(n=r.persist)==null?void 0:n.strategies)!=null&&e.length?(t=r.persist)==null?void 0:t.strategies:i;l.forEach(c=>{const f=c.storage||sessionStorage,_=c.key||o.$id,u=f.getItem(_);u&&(o.$patch(JSON.parse(u)),p(c,o))}),o.$subscribe(()=>{l.forEach(c=>{p(c,o)})})}};const N={};function O(r, o){const s=v("router-view");return m(),g(s)}const x=S(N,[["render",O],["__scopeId","data-v-1e38b3c3"]]),a=y(x),d=h();d.use($);a.use(d);a.use(b);a.mount("#app");
