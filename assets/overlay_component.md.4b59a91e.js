import{u as p}from"./chunks/use-singleton.1f42c29e.js";import{t as _}from"./chunks/index.0495baee.js";import{r as l,c as y,d as f,_ as v,a as u,b as h,f as n,p as g,o as k,g as o,h as i,i as b,q as m,s as w,j as T,k as O}from"./app.5ac59c93.js";import{B as x}from"./chunks/Button.27c4bac1.js";function S(a={elapsed:!0}){const e=l(0),t=l(a.elapsed!==!1),d=y({get(){return e.value>0||t.value},set(s){s===!0?e.value++:e.value--}});return _(()=>{if(a.elapsed!==!1){const s=a.elapsed===!0?200:a.elapsed;setTimeout(()=>{t.value=!1},s)}}),d}var C="/design-system/assets/icon-white.ed436f0e.svg";const I=f({setup(){const a=S({elapsed:!1});function e(){a.value=!0}function t(){a.value=!1}return{show:e,hide:t,loading:a,icon:C}}}),P={key:0,"data-testid":"overlay",class:"overlay"},V={class:"overlay__icon"},A=["src"];function D(a,e,t,d,s,c){return a.loading?(u(),h("div",P,[n("div",V,[n("img",{src:a.icon,alt:"overlay-icon"},null,8,A)])])):g("",!0)}var r=v(I,[["render",D]]);async function N(){(await p(r)).show()}async function $(){(await p(r)).hide()}const B=a=>(m("data-v-eb9a9d36"),a=a(),w(),a),U=b('<h1 id="overlay" tabindex="-1" data-v-eb9a9d36>Overlay <a class="header-anchor" href="#overlay" aria-hidden="true" data-v-eb9a9d36>#</a></h1><h2 id="usage" tabindex="-1" data-v-eb9a9d36>Usage <a class="header-anchor" href="#usage" aria-hidden="true" data-v-eb9a9d36>#</a></h2><h3 id="simple-usage" tabindex="-1" data-v-eb9a9d36>Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true" data-v-eb9a9d36>#</a></h3>',3),E=B(()=>n("p",null,[n("strong",null,"Try it:")],-1)),j=O(" Show "),M=b(`<div class="language-ts" data-v-eb9a9d36><pre data-v-eb9a9d36><code data-v-eb9a9d36><span class="token keyword" data-v-eb9a9d36>import</span> <span class="token punctuation" data-v-eb9a9d36>{</span> showOverlay<span class="token punctuation" data-v-eb9a9d36>,</span> hideOverlay <span class="token punctuation" data-v-eb9a9d36>}</span> <span class="token keyword" data-v-eb9a9d36>from</span> <span class="token string" data-v-eb9a9d36>&#39;./use-overlay&#39;</span>

<span class="token keyword" data-v-eb9a9d36>function</span> <span class="token function" data-v-eb9a9d36>onClick</span> <span class="token punctuation" data-v-eb9a9d36>(</span><span class="token punctuation" data-v-eb9a9d36>)</span> <span class="token punctuation" data-v-eb9a9d36>{</span>
  <span class="token function" data-v-eb9a9d36>showOverlay</span><span class="token punctuation" data-v-eb9a9d36>(</span><span class="token punctuation" data-v-eb9a9d36>)</span>

  <span class="token function" data-v-eb9a9d36>setTimeout</span><span class="token punctuation" data-v-eb9a9d36>(</span><span class="token punctuation" data-v-eb9a9d36>(</span><span class="token punctuation" data-v-eb9a9d36>)</span> <span class="token operator" data-v-eb9a9d36>=&gt;</span> <span class="token punctuation" data-v-eb9a9d36>{</span>
    <span class="token function" data-v-eb9a9d36>hideOverlay</span><span class="token punctuation" data-v-eb9a9d36>(</span><span class="token punctuation" data-v-eb9a9d36>)</span>
  <span class="token punctuation" data-v-eb9a9d36>}</span><span class="token punctuation" data-v-eb9a9d36>,</span> <span class="token number" data-v-eb9a9d36>3000</span><span class="token punctuation" data-v-eb9a9d36>)</span>
<span class="token punctuation" data-v-eb9a9d36>}</span>
</code></pre></div><h2 id="api" tabindex="-1" data-v-eb9a9d36>API <a class="header-anchor" href="#api" aria-hidden="true" data-v-eb9a9d36>#</a></h2><h3 id="showoverlay" tabindex="-1" data-v-eb9a9d36>showOverlay <a class="header-anchor" href="#showoverlay" aria-hidden="true" data-v-eb9a9d36>#</a></h3><p data-v-eb9a9d36><code data-v-eb9a9d36>showOverlay(): Promise&lt;void&gt;</code></p><table data-v-eb9a9d36><thead data-v-eb9a9d36><tr data-v-eb9a9d36><th data-v-eb9a9d36>Options</th><th style="text-align:center;" data-v-eb9a9d36>Type</th><th style="text-align:center;" data-v-eb9a9d36>Default</th><th data-v-eb9a9d36>Description</th></tr></thead><tbody data-v-eb9a9d36><tr data-v-eb9a9d36><td colspan="4" class="text-center" data-v-eb9a9d36>There no options here</td></tr></tbody></table><h3 id="hideoverlay" tabindex="-1" data-v-eb9a9d36>hideOverlay <a class="header-anchor" href="#hideoverlay" aria-hidden="true" data-v-eb9a9d36>#</a></h3><p data-v-eb9a9d36><code data-v-eb9a9d36>hideOverlay(): Promise&lt;void&gt;</code></p><table data-v-eb9a9d36><thead data-v-eb9a9d36><tr data-v-eb9a9d36><th data-v-eb9a9d36>Options</th><th style="text-align:center;" data-v-eb9a9d36>Type</th><th style="text-align:center;" data-v-eb9a9d36>Default</th><th data-v-eb9a9d36>Description</th></tr></thead><tbody data-v-eb9a9d36><tr data-v-eb9a9d36><td colspan="4" class="text-center" data-v-eb9a9d36>There no options here</td></tr></tbody></table>`,8),H='{"title":"Overlay","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Simple Usage","slug":"simple-usage"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"showOverlay","slug":"showoverlay"},{"level":3,"title":"hideOverlay","slug":"hideoverlay"}],"relativePath":"overlay/component.md"}',R={},q=Object.assign(R,{setup(a){const e=l();function t(){N(),setTimeout(()=>{$()},3e3)}return k(()=>{e.value.show()}),(d,s)=>{const c=T("preview");return u(),h("div",null,[U,o(c,null,{default:i(()=>[o(r,{ref_key:"overlay",ref:e},null,512)]),_:1}),E,n("div",null,[o(x,{onClick:t},{default:i(()=>[j]),_:1})]),M])}}});var J=v(q,[["__scopeId","data-v-eb9a9d36"]]);export{H as __pageData,J as default};
