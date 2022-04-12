import{d as y,r as b,c as g,w as x,o as A,_ as T,a as m,b as v,e as q,f as w,n as k,g as n,h as i,i as l,j as S,u as C}from"./app.b3c5b416.js";import{u as F}from"./chunks/utils-6ba05f5b.9c5a31b1.js";var E="/design-system/assets/avatar.fa17e344.png";const d=[["#F2F7FD","#0065D1"],["#F8F8F8","#737373"],["#F4FBF6","#23B242"],["#F2FBFC","#02AEC5"],["#FFFBF4","#F5A623"],["#FEF5F4","#E42E2C"],["#FBFAF2","#B79A00"],["#FEFDF4","#EFD52C"],["#FAFEF5","#A3E635"],["#F3FBFA","#12B89C"],["#F7F2FD","#5E00D1"]];function I(a){let t=0;for(let e=0;e<a.length;++e)t=(t<<5)-t+a.charCodeAt(e)|0;return d.at(Math.abs(t)%d.length)}function N(){return d.at(Math.floor(Math.random()*d.length))}function z(a,t,e,s){return`data:image/svg+xml,<svg height="${t}" width="${t}" xmlns="http://www.w3.org/2000/svg"><rect fill="${encodeURIComponent(e)}" x="0" y="0" height="${t}" width="${t}"></rect><text fill="${encodeURIComponent(s)}" dominant-baseline="central" text-anchor="middle" x="50%" y="50%" font-family="sans-serif" font-weight="600">${encodeURIComponent(a)}</text></svg>`}function h(a=50,t=a){return`data:image/svg+xml,<svg class="lds-spinner" width="${a}" height="${t}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background:0 0"><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(30 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(60 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(90 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(120 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(150 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(180 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(210 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(240 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(270 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(300 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/></rect><rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="%23ebecf0" transform="rotate(330 50 50)"><animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/></rect></svg>`}function V(a){return a.split(" ").slice(0,2).map(t=>t.at(0)).join("").toUpperCase()}function D(a,t=50){const e=a?V(a):"\uFF65\u1D17\uFF65",[s,p]=a?I(a):N();return z(e,t,s,p)}function P(){return E}function R(a){return a?new Promise((t,e)=>{const s=new window.Image,p=()=>{u(),t(a)},r=()=>{u(),e(new Error("ERR_FAILED_LOAD_IMAGE"))},u=()=>{s.removeEventListener("load",p),s.removeEventListener("error",r)};s.addEventListener("load",p),s.addEventListener("error",r),s.src=a}):Promise.reject(new Error("ERR_INVALID_IMAGE_SRC"))}const U=y({props:{variant:{type:String},src:{type:String},fallbackSrc:{type:String,default:P()},name:{type:String},size:{type:String,default:"md"},imgClass:{}},emits:["imgloaded","imgerror"],setup(a,{emit:t}){const e=b(h(50)),s=g(()=>{const c=["avatar"];return a.size&&c.push(`avatar--${a.size}`),c}),p=g(()=>a.variant?a.variant:!a.src&&a.name?"alias":"image");function r(){p.value==="alias"?f():u()}function u(){e.value=h(50),R(a.src).then(c=>{e.value=c,t("imgloaded",c)}).catch(c=>{e.value=a.fallbackSrc,t("imgerror",c)})}function f(){e.value=D(a.name)}return x(()=>[a.src,a.name,a.variant],()=>{r()}),A(()=>{r()}),{classNames:s,type:p,imageSrc:e}}}),$=["data-type","src"];function M(a,t,e,s,p,r){return m(),v("div",{"data-testid":"avatar",class:k(a.classNames)},[q(a.$slots,"default",{},()=>[w("img",{"data-testid":"avatar-image",class:k(["avatar__image",a.imgClass]),"data-type":a.type,src:a.imageSrc,alt:"Avatar Image"},null,10,$)])],2)}var o=T(U,[["render",M]]),B=F,_=B.createSVGComponent(_,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor",width:20,height:20},[{elem:"path",attrs:{d:"M26 14H24v2h2a3.0033 3.0033 0 013 3v4h2V19A5.0058 5.0058 0 0026 14zM24 4a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0024 2zM23 30H21V28a3.0033 3.0033 0 00-3-3H14a3.0033 3.0033 0 00-3 3v2H9V28a5.0059 5.0059 0 015-5h4a5.0059 5.0059 0 015 5zM16 13a3 3 0 11-3 3 3 3 0 013-3m0-2a5 5 0 105 5A5 5 0 0016 11zM8 14H6a5.0059 5.0059 0 00-5 5v4H3V19a3.0033 3.0033 0 013-3H8zM8 4A3 3 0 115 7 3 3 0 018 4M8 2a5 5 0 105 5A5 5 0 008 2z"}}]),j=_,L=j;const H=l("",3),O=l("",2),G=l("",2),Y=l("",3),J=l("",3),K=l("",6),Q=l("",7),aa='{"title":"Avatar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Using image","slug":"using-image"},{"level":3,"title":"Using alias","slug":"using-alias"},{"level":3,"title":"Using icon","slug":"using-icon"},{"level":2,"title":"Sizing","slug":"sizing"},{"level":2,"title":"Variant","slug":"variant"},{"level":3,"title":"Auto-detect variant","slug":"auto-detect-variant"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"avatar/component.md"}',W={},ta=Object.assign(W,{setup(a){return(t,e)=>{const s=S("preview");return m(),v("div",null,[H,n(s,null,{default:i(()=>[n(o,{src:"https://picsum.photos/50"})]),_:1}),O,n(s,null,{default:i(()=>[n(o,{variant:"alias",name:"Tarjono Smith"})]),_:1}),G,n(s,null,{default:i(()=>[n(o,null,{default:i(()=>[n(C(L))]),_:1})]),_:1}),Y,n(s,{class:"items-center gap-3"},{default:i(()=>[n(o,{src:"https://picsum.photos/24",size:"xs"}),n(o,{src:"https://picsum.photos/32",size:"sm"}),n(o,{src:"https://picsum.photos/40",size:"md"}),n(o,{src:"https://picsum.photos/56",size:"lg"}),n(o,{src:"https://picsum.photos/96",size:"xl"})]),_:1}),J,n(s,{class:"gap-3"},{default:i(()=>[n(o,{variant:"image",src:"https://picsum.photos/40"}),n(o,{variant:"alias",name:"Tarjono Smith"})]),_:1}),K,n(s,{class:"gap-3"},{default:i(()=>[n(o,{variant:"image",src:"https://picsum.photos/40"}),n(o,{variant:"alias",name:"Tarjono Smith"}),n(o)]),_:1}),Q])}}});export{aa as __pageData,ta as default};
