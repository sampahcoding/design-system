import{u as p}from"./chunks/use-singleton.1f42c29e.js";import{t as _}from"./chunks/index.0495baee.js";import{r as l,c as y,d as f,_ as v,a as u,b as h,f as n,p as g,o as k,g as o,h as i,i as b,q as m,s as w,j as T,k as O}from"./app.5ac59c93.js";import{B as x}from"./chunks/Button.27c4bac1.js";function S(a={elapsed:!0}){const e=l(0),t=l(a.elapsed!==!1),d=y({get(){return e.value>0||t.value},set(s){s===!0?e.value++:e.value--}});return _(()=>{if(a.elapsed!==!1){const s=a.elapsed===!0?200:a.elapsed;setTimeout(()=>{t.value=!1},s)}}),d}var C="/design-system/assets/icon-white.ed436f0e.svg";const I=f({setup(){const a=S({elapsed:!1});function e(){a.value=!0}function t(){a.value=!1}return{show:e,hide:t,loading:a,icon:C}}}),P={key:0,"data-testid":"overlay",class:"overlay"},V={class:"overlay__icon"},A=["src"];function D(a,e,t,d,s,c){return a.loading?(u(),h("div",P,[n("div",V,[n("img",{src:a.icon,alt:"overlay-icon"},null,8,A)])])):g("",!0)}var r=v(I,[["render",D]]);async function N(){(await p(r)).show()}async function $(){(await p(r)).hide()}const B=a=>(m("data-v-eb9a9d36"),a=a(),w(),a),U=b("",3),E=B(()=>n("p",null,[n("strong",null,"Try it:")],-1)),j=O(" Show "),M=b("",8),H='{"title":"Overlay","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Simple Usage","slug":"simple-usage"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"showOverlay","slug":"showoverlay"},{"level":3,"title":"hideOverlay","slug":"hideoverlay"}],"relativePath":"overlay/component.md"}',R={},q=Object.assign(R,{setup(a){const e=l();function t(){N(),setTimeout(()=>{$()},3e3)}return k(()=>{e.value.show()}),(d,s)=>{const c=T("preview");return u(),h("div",null,[U,o(c,null,{default:i(()=>[o(r,{ref_key:"overlay",ref:e},null,512)]),_:1}),E,n("div",null,[o(x,{onClick:t},{default:i(()=>[j]),_:1})]),M])}}});var J=v(q,[["__scopeId","data-v-eb9a9d36"]]);export{H as __pageData,J as default};
