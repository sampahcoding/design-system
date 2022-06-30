import{B as o}from"./chunks/Button.f4ac4b92.js";import{M as b}from"./chunks/Modal.1907463d.js";import{H as i}from"./chunks/Heading.eb1c0592.js";import{_ as q,r as f,b as T,f as a,g as d,h as s,i as c,M as y,N as S,k as t,j as M,a as V}from"./app.6e319942.js";import"./chunks/index.380e51fd.js";import"./chunks/index.c604b949.js";import"./chunks/16.da18c861.js";import"./chunks/utils-6ba05f5b.cdee46a6.js";import"./chunks/use-input.8e912f88.js";var m="/design-system/assets/img-modal-banner-sheet.c2e3dac4.jpg";const p=u=>(y("data-v-7dbaeffb"),u=u(),S(),u),C=c("",3),w={class:"flex mt-5"},B=t("Show Modal"),A={class:"flex items-center justify-end"},E=t(" Submit "),H=c("",1),I=p(()=>a("p",null," This is place holder text. The basic dialog for modals should contain only valuable and relevant information. ",-1)),N={class:"flex items-center justify-end"},P=t(" Submit "),j=p(()=>a("h2",{id:"hide-close-button",tabindex:"-1"},[t("Hide close button "),a("a",{class:"header-anchor",href:"#hide-close-button","aria-hidden":"true"},"#")],-1)),D=p(()=>a("p",null,[t("You can hide close button with "),a("code",null,"dismissable"),t(" set to "),a("code",null,"false")],-1)),U={class:"flex mt-5"},G=t("Show Modal"),$={class:"text-center px-16 py-7"},R=t("Give Me Title Here"),F=p(()=>a("p",null,[t(" Explain what this menu to do, "),a("br"),t(" descriptive but as short as possible ")],-1)),O={class:"flex items-center px-16 pb-7 justify-between"},Y=t(" Button Text "),z=t(" Button Text "),J=c("",1),K={class:"text-center px-16 py-7"},L=t("Give Me Title Here"),Q=p(()=>a("p",null,[t(" Explain what this menu to do, "),a("br"),t(" descriptive but as short as possible ")],-1)),W={class:"flex items-center px-16 pb-7 justify-between"},X=t(" Button Text "),Z=t(" Button Text "),aa=p(()=>a("h2",{id:"no-close-modal",tabindex:"-1"},[t("No Close Modal "),a("a",{class:"header-anchor",href:"#no-close-modal","aria-hidden":"true"},"#")],-1)),ta=p(()=>a("p",null,[t("Modal will not close while Escape button was pressed by props "),a("code",null,"no-close-on-esc"),t(". Also you can make modal can't close while backdrop was clicked by props "),a("code",null,"no-close-on-backdrop"),t(".")],-1)),sa={class:"flex mt-5"},na=t("Show Modal"),ea=p(()=>a("img",{src:m},null,-1)),da={class:"text-center p-6"},oa=t("Give Me Title Here"),pa=p(()=>a("p",null,[t(" Explain what this menu to do, "),a("br"),t(" descriptive but as short as possible ")],-1)),ba={class:"flex items-center justify-center"},fa=t(" Button Text "),la=c("",1),ca=p(()=>a("img",{src:m},null,-1)),ua={class:"text-center p-6"},va=t("Give Me Title Here"),ia=p(()=>a("p",null,[t(" Explain what this menu to do, "),a("br"),t(" descriptive but as short as possible ")],-1)),ka={class:"flex items-center justify-center"},ra=t(" Button Text "),ga=c("",7),Ba='{"title":"Modal","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Simple Usage","slug":"simple-usage"},{"level":2,"title":"Hide close button","slug":"hide-close-button"},{"level":2,"title":"No Close Modal","slug":"no-close-modal"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"modal/component.md"}',_a={},ha=Object.assign(_a,{setup(u){const _=f(!0),k=f(!1),h=f(!0),r=f(!1),v=f(!0),l=f(!1);function x(){k.value=!0}return(ma,e)=>{const g=M("preview");return V(),T("div",null,[C,a("div",w,[d(o,{onClick:x},{default:s(()=>[B]),_:1})]),d(g,null,{default:s(()=>[d(b,{"no-close-on-esc":"","no-close-on-backdrop":"",modelValue:_.value,"onUpdate:modelValue":e[0]||(e[0]=n=>_.value=n),title:"Modal Title",text:`This is place holder text. The basic dialog for modals
      should contain only valuable and relevant information.`},{footer:s(({close:n})=>[a("div",A,[d(o,{onClick:n},{default:s(()=>[E]),_:2},1032,["onClick"])])]),_:1},8,["modelValue"])]),_:1}),H,d(b,{modelValue:k.value,"onUpdate:modelValue":e[1]||(e[1]=n=>k.value=n),title:"Modal Title"},{footer:s(({close:n})=>[a("div",N,[d(o,{onClick:n},{default:s(()=>[P]),_:2},1032,["onClick"])])]),default:s(()=>[I]),_:1},8,["modelValue"]),j,D,a("div",U,[d(o,{onClick:e[2]||(e[2]=n=>l.value=!0)},{default:s(()=>[G]),_:1})]),d(g,null,{default:s(()=>[d(b,{"no-close-on-esc":"","no-close-on-backdrop":"",modelValue:v.value,"onUpdate:modelValue":e[5]||(e[5]=n=>v.value=n),class:"modal--banner",dismissable:!1},{default:s(()=>[a("div",$,[d(i,{element:"h6"},{default:s(()=>[R]),_:1}),F]),a("div",O,[d(o,{variant:"ghost",onClick:e[3]||(e[3]=n=>v.value=!1)},{default:s(()=>[Y]),_:1}),d(o,{variant:"ghost",onClick:e[4]||(e[4]=n=>v.value=!1)},{default:s(()=>[z]),_:1})])]),_:1},8,["modelValue"])]),_:1}),J,d(b,{modelValue:l.value,"onUpdate:modelValue":e[8]||(e[8]=n=>l.value=n),class:"modal--banner",dismissable:!1},{default:s(()=>[a("div",K,[d(i,{element:"h6"},{default:s(()=>[L]),_:1}),Q]),a("div",W,[d(o,{variant:"ghost",onClick:e[6]||(e[6]=n=>l.value=!1)},{default:s(()=>[X]),_:1}),d(o,{variant:"ghost",onClick:e[7]||(e[7]=n=>l.value=!1)},{default:s(()=>[Z]),_:1})])]),_:1},8,["modelValue"]),aa,ta,a("div",sa,[d(o,{onClick:e[9]||(e[9]=n=>r.value=!0)},{default:s(()=>[na]),_:1})]),d(g,{class:"banner"},{default:s(()=>[d(b,{modelValue:h.value,"onUpdate:modelValue":e[10]||(e[10]=n=>h.value=n),class:"modal--banner",dismissable:!1,"no-close-on-esc":"","no-close-on-backdrop":""},{footer:s(({close:n})=>[a("div",ba,[d(o,{variant:"ghost",onClick:n},{default:s(()=>[fa]),_:2},1032,["onClick"])])]),default:s(()=>[ea,a("div",da,[d(i,{element:"h6"},{default:s(()=>[oa]),_:1}),pa])]),_:1},8,["modelValue"])]),_:1}),la,d(b,{modelValue:r.value,"onUpdate:modelValue":e[11]||(e[11]=n=>r.value=n),class:"modal--banner",dismissable:!1,"no-close-on-esc":"","no-close-on-backdrop":""},{footer:s(({close:n})=>[a("div",ka,[d(o,{variant:"ghost",onClick:n},{default:s(()=>[ra]),_:2},1032,["onClick"])])]),default:s(()=>[ca,a("div",ua,[d(i,{element:"h6"},{default:s(()=>[va]),_:1}),ia])]),_:1},8,["modelValue"]),ga])}}});var Aa=q(ha,[["__scopeId","data-v-7dbaeffb"]]);export{Ba as __pageData,Aa as default};