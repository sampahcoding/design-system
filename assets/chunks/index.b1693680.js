import{z as v,o as F,A as y,w as c,B as x,C as S,u as _,r as D,D as T,E}from"../app.d5253b79.js";function k(e){return T()?(E(e),!0):!1}var d;const I=typeof window!="undefined",ee=e=>typeof e=="string",te=()=>{};I&&((d=window==null?void 0:window.navigator)==null?void 0:d.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function A(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const P=e=>e();function W(e,t={}){let n,r;return a=>{const o=_(e),s=_(t.maxWait);if(n&&clearTimeout(n),o<=0||s!==void 0&&s<=0)return r&&(clearTimeout(r),r=null),a();s&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,a()},s)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,a()},o)}}function C(e=P){const t=D(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:n,resume:r,eventFilter:(...a)=>{t.value&&e(...a)}}}function re(e,t,n={}){const{flush:r="sync",deep:i=!1,immediate:a=!0,direction:o="both"}=n;let s,l;return(o==="both"||o==="ltr")&&(s=c(e,f=>t.value=f,{flush:r,deep:i,immediate:a})),(o==="both"||o==="rtl")&&(l=c(t,f=>e.value=f,{flush:r,deep:i,immediate:a})),()=>{s==null||s(),l==null||l()}}function ne(e,t=!0){v()?S(e):t?e():y(e)}function ae(e,t=!0){v()?F(e):t?e():y(e)}function oe(e){v()&&x(e)}var O=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,B=(e,t)=>{var n={};for(var r in e)M.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&O)for(var r of O(e))t.indexOf(r)<0&&R.call(e,r)&&(n[r]=e[r]);return n};function b(e,t,n={}){const r=n,{eventFilter:i=P}=r,a=B(r,["eventFilter"]);return c(e,A(i,t),a)}var N=Object.defineProperty,U=Object.defineProperties,V=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t)=>{for(var n in t||(t={}))$.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))g.call(t,n)&&m(e,n,t[n]);return e},q=(e,t)=>U(e,V(t)),G=(e,t)=>{var n={};for(var r in e)$.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&u)for(var r of u(e))t.indexOf(r)<0&&g.call(e,r)&&(n[r]=e[r]);return n};function ie(e,t,n={}){const r=n,{debounce:i=0,maxWait:a=void 0}=r,o=G(r,["debounce","maxWait"]);return b(e,t,q(z({},o),{eventFilter:W(i,{maxWait:a})}))}var H=Object.defineProperty,J=Object.defineProperties,K=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&w(e,n,t[n]);if(p)for(var n of p(t))j.call(t,n)&&w(e,n,t[n]);return e},Q=(e,t)=>J(e,K(t)),X=(e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&p)for(var r of p(e))t.indexOf(r)<0&&j.call(e,r)&&(n[r]=e[r]);return n};function se(e,t,n={}){const r=n,{eventFilter:i}=r,a=X(r,["eventFilter"]),{eventFilter:o,pause:s,resume:l,isActive:f}=C(i);return{stop:b(e,t,Q(L({},a),{eventFilter:o})),pause:s,resume:l,isActive:f}}export{oe as a,ee as b,ne as c,k as d,ie as e,I as i,te as n,re as s,ae as t,se as w};