"use strict";(self.webpackChunkvaultexplorer_com=self.webpackChunkvaultexplorer_com||[]).push([[638],{7613:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>h,contentTitle:()=>p,default:()=>b,frontMatter:()=>_,metadata:()=>m,toc:()=>v});var t=r(4848),a=r(8453);r(6540);const l={pricingComparison:"pricingComparison_rzRF",tierCard:"tierCard_V_8W",tierCard__title:"tierCard__title_l2hs",tierCard__description:"tierCard__description_NkA_",tierCard__price:"tierCard__price_ZSZE",tierCard__priceDescription:"tierCard__priceDescription_UvZF",tierCard__buttonPlaceholder:"tierCard__buttonPlaceholder_AC0N",tierCard__featuresTitle:"tierCard__featuresTitle_cXXO",tierCard__featuresContainer:"tierCard__featuresContainer_fAxh",tierCard__feature:"tierCard__feature_wYlU",tierCard__featureTitle:"tierCard__featureTitle_bQ79",tierCard__featureTitle_available:"tierCard__featureTitle_available_TTuz",tierCard__featureTitle_unavailable:"tierCard__featureTitle_unavailable_eB25",faicon:"faicon_URts",tierCard__featureIcon_unavailable:"tierCard__featureIcon_unavailable_YMmu",tierCard__featureIcon_available:"tierCard__featureIcon_available_td5B"};var n=r(4164),s=function(e){return e[e.CASUAL=0]="CASUAL",e[e.LITE=1]="LITE",e[e.PLUS=2]="PLUS",e}(s||{});const c=[{id:s.CASUAL,title:"Basic",price:0,description:"For casual users",priceDescription:"No license required"},{id:s.PLUS,title:"Plus",description:"For users who want lifetime access to premium features",priceDescription:"One time payment",price:19,url:"https://ko-fi.com/s/d26f793688"}],o=[{title:"Grid view",available:[s.CASUAL,s.LITE,s.PLUS],url:"/docs/views/grid"},{title:"List view",available:[s.CASUAL,s.LITE,s.PLUS],url:"/docs/views/list"},{title:"Feed view",available:[s.LITE,s.PLUS],url:"/docs/views/feed"},{title:"Filter by property",available:[s.CASUAL,s.LITE,s.PLUS],url:"/docs/filters/custom-filter/#property"},{title:"Filter by file name",available:[s.CASUAL,s.LITE,s.PLUS],url:"/docs/filters/custom-filter/#file-name"},{title:"Filter by folder name",available:[s.CASUAL,s.LITE,s.PLUS],url:"/docs/filters/custom-filter/#folder-name"},{title:"Filter by content",available:[s.LITE,s.PLUS],url:"/docs/filters/custom-filter/#content"}];function d(e){let{id:i,title:r,description:a,priceDescription:s,price:c,url:d}=e;return(0,t.jsxs)("div",{className:l.tierCard,children:[(0,t.jsx)("div",{className:l.tierCard__title,children:r}),(0,t.jsx)("div",{className:l.tierCard__description,children:a}),(0,t.jsx)("div",{className:l.tierCard__price,children:0!==c?`$${c}`:"Free"}),(0,t.jsx)("div",{className:l.tierCard__priceDescription,children:s}),void 0!==d?(0,t.jsxs)("a",{className:"button button--primary","data-umami-event":`${r} button`,href:d,target:"_blank",rel:"noopener",children:["Get ",r]}):(0,t.jsx)("div",{className:l.tierCard__buttonPlaceholder}),(0,t.jsx)("div",{className:l.tierCard__featuresTitle,children:"Features"}),(0,t.jsx)("div",{className:l.tierCard__featuresContainer,children:o.map(((e,r)=>{const{title:a}=e;return(0,t.jsxs)("div",{className:(0,n.A)(l.tierCardFeature,e.available.includes(i)?l.tierCard__feature_available:l.tierCard__feature_unavailable),children:[(0,t.jsx)("span",{className:(0,n.A)("faicon",e.available.includes(i)?l.tierCard__featureIcon_available:l.tierCard__featureIcon_unavailable)}),(0,t.jsx)("a",{href:e.url,target:"_blank",rel:"noopener",className:(0,n.A)(l.tierCard__featureTitle,e.available.includes(i)?l.tierCard__featureTitle_available:l.tierCard__featureTitle_unavailable),children:a})]},r)}))})]})}function u(){return(0,t.jsx)("div",{className:l.pricingComparison,children:c.map(((e,i)=>(0,t.jsx)(d,{...e},i)))})}const _={sidebar_label:"Premium",sidebar_position:7,title:"Premium"},p=void 0,m={id:"premium",title:"Premium",description:"Enable premium features by purchasing a Vault Explorer license.",source:"@site/docs/premium.md",sourceDirName:".",slug:"/premium",permalink:"/docs/premium",draft:!1,unlisted:!1,editUrl:"https://github.com/decaf-dev/vaultexplorer.com/tree/main/docs/premium.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Premium",sidebar_position:7,title:"Premium"},sidebar:"docsSidebar",previous:{title:"Settings",permalink:"/docs/settings"}},h={},v=[{value:"License",id:"license",level:2},{value:"Key distribution",id:"key-distribution",level:2},{value:"Key usage",id:"key-usage",level:2},{value:"Network requests",id:"network-requests",level:2},{value:"Key sharing",id:"key-sharing",level:2},{value:"Old keys",id:"old-keys",level:2},{value:"Activate your key",id:"activate-your-key",level:2}];function f(e){const i={h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"large-text",children:"Enable premium features by purchasing a Vault Explorer license."}),"\n",(0,t.jsx)(i.h2,{id:"license",children:"License"}),"\n",(0,t.jsx)(i.p,{children:"A license gives you access to premium Vault Explorer features. Purchasing a license is also a way to support development of the plugin."}),"\n",(0,t.jsx)(u,{}),"\n",(0,t.jsx)(i.h2,{id:"key-distribution",children:"Key distribution"}),"\n",(0,t.jsx)(i.p,{children:"When you purchase a license, you will receive an email with a license key within 24 hours."}),"\n",(0,t.jsx)(i.h2,{id:"key-usage",children:"Key usage"}),"\n",(0,t.jsx)(i.p,{children:"Once a license key is activated, it is activated for all vaults on your device."}),"\n",(0,t.jsx)(i.h2,{id:"network-requests",children:"Network requests"}),"\n",(0,t.jsx)(i.p,{children:"No network requests are needed for key validation. Keys are validated through an offline algorithm."}),"\n",(0,t.jsx)(i.h2,{id:"key-sharing",children:"Key sharing"}),"\n",(0,t.jsx)(i.p,{children:"Please do not share your license key with anyone. Shared license keys will be deactivated."}),"\n",(0,t.jsx)(i.h2,{id:"old-keys",children:"Old keys"}),"\n",(0,t.jsxs)(i.p,{children:["If you bought a license before version ",(0,t.jsx)(i.strong,{children:"1.36.0"}),", you will need to enter a new license key. You will be sent a new key by email. This is because the license system has been upgraded."]}),"\n",(0,t.jsx)(i.h2,{id:"activate-your-key",children:"Activate your key"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open the plugin settings by clicking the gear icon in the upper right corner"}),"\n",(0,t.jsxs)(i.li,{children:["Scroll down to the ",(0,t.jsx)(i.strong,{children:"Premium"})," section"]}),"\n",(0,t.jsxs)(i.li,{children:["Find the ",(0,t.jsx)(i.strong,{children:"License key"})," setting"]}),"\n",(0,t.jsx)(i.li,{children:"Enter your license key received by email"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Congratulations! Premium features are now enabled on your device"})]})}function b(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>n,x:()=>s});var t=r(6540);const a={},l=t.createContext(a);function n(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);