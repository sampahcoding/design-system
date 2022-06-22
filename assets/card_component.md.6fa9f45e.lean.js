import{I}from"./chunks/16.c9063de9.js";import{H as B}from"./chunks/Heading.9b40169b.js";import{d as w,r as $,c as m,_ as y,j as h,a as e,l as A,h as t,b as c,e as p,g as n,k as s,q,p as u,n as C,m as x,f,i as b,D as N,E as H}from"./app.649dfcf2.js";import{B as v}from"./chunks/Button.4f43a6fa.js";import{S as W}from"./chunks/Subheading.0551f3c9.js";import"./chunks/utils-6ba05f5b.8826550b.js";var P="/design-system/assets/img-card-callout-01.c5d31835.svg";const D=w({components:{Heading:B,IconClose:I},props:{element:{type:String,default:"section"},title:{type:String,default:void 0},sectioned:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},callout:{type:Boolean,default:!1},dismissable:{type:Boolean,default:!0}},emits:["dismissed"],setup(a,{emit:i}){const d=$(!0),o=m(()=>{const l=["card"];return a.sectioned&&l.push("card--sectioned"),a.disabled&&l.push("card--disabled"),a.callout&&l.push("card--callout"),l}),g=m(()=>a.element);function _(){d.value=!1,i("dismissed")}return{classNames:o,elementNames:g,show:d,close:_}}}),E={key:0,"data-testid":"card-header",class:"card__header"},V={key:1,class:"card__header card__header--default"},R={key:0,"data-testid":"card-header-action",class:"card__header__action"},j={key:2,class:"card__body"},U={key:4,"data-testid":"card-footer",class:"card__footer"};function Y(a,i,d,o,g,_){const l=h("Heading"),T=h("IconClose");return a.show?(e(),A(x(a.elementNames),{key:0,"data-testid":"card",class:C(a.classNames)},{default:t(()=>[a.$slots.header?(e(),c("header",E,[p(a.$slots,"header")])):a.title?(e(),c("header",V,[n(l,{element:"h6"},{default:t(()=>[s(q(a.title),1)]),_:1}),a.$slots.action&&!a.callout?(e(),c("span",R,[p(a.$slots,"action")])):u("",!0),a.dismissable&&a.callout?(e(),c("span",{key:1,"data-testid":"card-callout-dismiss",class:"card__header__dismiss",onClick:i[0]||(i[0]=Sa=>a.close())},[n(T)])):u("",!0)])):u("",!0),a.sectioned?p(a.$slots,"default",{key:3}):(e(),c("div",j,[p(a.$slots,"default")])),a.$slots.footer?(e(),c("footer",U,[p(a.$slots,"footer")])):u("",!0)]),_:3},8,["class"])):u("",!0)}var r=y(D,[["render",Y]]);const z=w({components:{Subheading:W},props:{title:{type:String,default:void 0},disabled:{type:Boolean,default:!1}},setup(a){return{classNames:m(()=>{const d=["card__section"];return a.disabled&&d.push("card__section--disabled"),d})}}}),F={key:0,"data-testid":"card-header",class:"card__header"},L={key:1,class:"card__header card__header--default"},M={key:0,"data-testid":"card-header-action",class:"card__header__action"},O={class:"card__body"},G={key:2,"data-testid":"card-footer",class:"card__footer"};function J(a,i,d,o,g,_){const l=h("Subheading");return e(),c("div",{"data-testid":"card-section",class:C(a.classNames)},[a.$slots.header?(e(),c("div",F,[p(a.$slots,"header")])):a.title?(e(),c("div",L,[n(l,{overline:"medium"},{default:t(()=>[s(q(a.title),1)]),_:1}),a.$slots.action?(e(),c("span",M,[p(a.$slots,"action")])):u("",!0)])):u("",!0),f("div",O,[p(a.$slots,"default")]),a.$slots.footer?(e(),c("footer",G,[p(a.$slots,"footer")])):u("",!0)],2)}var k=y(z,[["render",J]]);const S=a=>(N("data-v-3ac8b70f"),a=a(),H(),a),K=b("",3),Q=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),X=b("",2),Z=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),aa=s("Button Text"),ta=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),na=b("",2),sa=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),ea=s("Enable Sample Button"),ca=s("Button Text"),oa=b("",2),pa=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),da=S(()=>f("a",{href:"#",class:"underline text-primary-100 hover:text-primary-hovered"},"Edit",-1)),la=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),ua=s("Button Text"),ia=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),ra=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),fa=s(" While here you will see the content of cards, everything goes here. If you need custom cards, take the component which more represent to what you need and detach it. "),va=b("",2),ba={class:"flex items-start gap-x-8"},ka={class:"w-3/4"},ha=s(" What amazing growth you achieved this year, Tarjono! You deserve every bit of it and we\u2019re sure you\u2019ll do even better next year. There\u2019s a 30% membership renewal discount waiting for you when you come back. "),ga={class:"pt-8"},_a=s("Collect Discount"),ma=s("Learn More"),ya=S(()=>f("div",{class:"w-1/4"},[f("img",{src:P})],-1)),wa=b("",8),Na='{"title":"Card","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Card with Header","slug":"card-with-header"},{"level":3,"title":"Card with Footer","slug":"card-with-footer"},{"level":2,"title":"Sectioned","slug":"sectioned"},{"level":2,"title":"Callout","slug":"callout"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"card/component.md"}',qa={},Ca=Object.assign(qa,{setup(a){return(i,d)=>{const o=h("preview");return e(),c("div",null,[K,n(o,null,{default:t(()=>[n(r,null,{default:t(()=>[Q]),_:1})]),_:1}),X,n(o,null,{default:t(()=>[n(r,{title:"Any Title Should Here"},{default:t(()=>[Z]),_:1}),n(r,{title:"Any Title Should Here"},{action:t(()=>[n(v,{color:"primary",variant:"link"},{default:t(()=>[aa]),_:1})]),default:t(()=>[ta]),_:1})]),_:1}),na,n(o,null,{default:t(()=>[n(r,{title:"Any Title Should Here"},{footer:t(()=>[n(v,{variant:"outline",color:"primary"},{default:t(()=>[ea]),_:1}),n(v,{variant:"link",color:"primary"},{default:t(()=>[ca]),_:1})]),default:t(()=>[sa]),_:1})]),_:1}),oa,n(o,null,{default:t(()=>[n(r,{title:"Card with Section",sectioned:""},{default:t(()=>[n(k,null,{default:t(()=>[pa]),_:1}),n(k,{title:"Subtitle supposedly here"},{action:t(()=>[da]),default:t(()=>[la]),_:1})]),_:1}),n(r,{title:"Card with Sub-Section",sectioned:""},{action:t(()=>[n(v,{variant:"link",color:"primary"},{default:t(()=>[ua]),_:1})]),default:t(()=>[n(k,null,{default:t(()=>[ia]),_:1}),n(k,{title:"Subtitle supposedly here"},{default:t(()=>[ra,n(k,null,{default:t(()=>[fa]),_:1})]),_:1})]),_:1})]),_:1}),va,n(o,null,{default:t(()=>[n(r,{title:"Hello and Happy New Year!",element:"div",callout:""},{default:t(()=>[f("div",ba,[f("div",ka,[ha,f("div",ga,[n(v,{variant:"outline",color:"secondary"},{default:t(()=>[_a]),_:1}),n(v,{variant:"link",color:"primary"},{default:t(()=>[ma]),_:1})])]),ya])]),_:1})]),_:1}),wa])}}});var Ha=y(Ca,[["__scopeId","data-v-3ac8b70f"]]);export{Na as __pageData,Ha as default};
