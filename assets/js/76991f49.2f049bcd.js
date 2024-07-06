"use strict";(self.webpackChunkvaultexplorer_com=self.webpackChunkvaultexplorer_com||[]).push([[638],{7613:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>v,contentTitle:()=>p,default:()=>b,frontMatter:()=>h,metadata:()=>_,toc:()=>m});var t=r(4848),n=r(8453);r(6540);function a(){return(0,t.jsx)("a",{className:"button button--primary",href:"https://ko-fi.com/decaf_dev/shop",target:"_blank",rel:"noopener","data-umami-event":"Buy a license button",children:"Buy a license"})}const s={pricingComparison:"pricingComparison_rzRF",tierCard:"tierCard_V_8W",tierCard__title:"tierCard__title_l2hs",tierCard__description:"tierCard__description_NkA_",tierCard__price:"tierCard__price_ZSZE",tierCard__priceDescription:"tierCard__priceDescription_UvZF",tierCard__buttonPlaceholder:"tierCard__buttonPlaceholder_AC0N",tierCard__featuresTitle:"tierCard__featuresTitle_cXXO",tierCard__featuresContainer:"tierCard__featuresContainer_fAxh",tierCard__feature:"tierCard__feature_wYlU",tierCard__featureTitle:"tierCard__featureTitle_bQ79",tierCard__featureTitle_unavailable:"tierCard__featureTitle_unavailable_eB25",faicon:"faicon_URts",tierCard__featureIcon_unavailable:"tierCard__featureIcon_unavailable_YMmu",tierCard__featureIcon_available:"tierCard__featureIcon_available_td5B"};var l=r(4164);const c=[{title:"Grid view",available:["casual","basic","extended"]},{title:"List view",available:["casual","basic","extended"]},{title:"Feed view",available:["basic","extended"]},{title:"Filter by property",available:["casual","basic","extended"]},{title:"Filter by file name",available:["casual","basic","extended"]},{title:"Filter by folder name",available:["casual","basic","extended"]},{title:"Filter by content",available:["basic","extended"]},{title:"Filter by view count",available:["basic","extended"]}],d=[{id:"casual",title:"Casual",price:0,description:"For casual users"},{id:"basic",title:"Basic",price:15,description:"For power users",url:"https://ko-fi.com/s/a70932e3f4"},{id:"extended",title:"Extended",description:"For power users",price:20,url:"https://ko-fi.com/s/d26f793688"}];function o(e){let{id:i,title:r,description:n,price:a,url:d}=e;return(0,t.jsxs)("div",{className:s.tierCard,children:[(0,t.jsx)("div",{className:s.tierCard__title,children:r}),(0,t.jsx)("div",{className:s.tierCard__description,children:n}),(0,t.jsx)("div",{className:s.tierCard__price,children:0!==a?`$${a}`:"Free"}),(0,t.jsx)("div",{className:s.tierCard__priceDescription,children:void 0!==d?"One time payment":"No license required"}),void 0!==d?(0,t.jsxs)("a",{className:"button button--primary","data-umami-event":`${r} button`,href:d,target:"_blank",rel:"noopener",children:["Get ",r]}):(0,t.jsx)("div",{className:s.tierCard__buttonPlaceholder}),(0,t.jsx)("div",{className:s.tierCard__featuresTitle,children:"Features"}),(0,t.jsx)("div",{className:s.tierCard__featuresContainer,children:c.map(((e,r)=>{const{title:n}=e;return(0,t.jsxs)("div",{className:(0,l.A)(s.tierCardFeature,e.available.includes(i)?s.tierCard__feature_available:s.tierCard__feature_unavailable),children:[(0,t.jsx)("span",{className:(0,l.A)("faicon",e.available.includes(i)?s.tierCard__featureIcon_available:s.tierCard__featureIcon_unavailable)}),(0,t.jsx)("span",{className:(0,l.A)(s.tierCard__featureTitle,e.available.includes(i)?s.tierCard__featureTitle_available:s.tierCard__featureTitle_unavailable),children:n})]},r)}))})]})}function u(){return(0,t.jsx)("div",{className:s.pricingComparison,children:d.map(((e,i)=>(0,t.jsx)(o,{...e},i)))})}const h={sidebar_label:"Premium",sidebar_position:7,title:"Premium"},p=void 0,_={id:"premium",title:"Premium",description:"Premium features are available to users who purchase a Vault Explorer license.",source:"@site/docs/premium.md",sourceDirName:".",slug:"/premium",permalink:"/docs/premium",draft:!1,unlisted:!1,editUrl:"https://github.com/decaf-dev/vaultexplorer.com/tree/main/docs/premium.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Premium",sidebar_position:7,title:"Premium"},sidebar:"docsSidebar",previous:{title:"Settings",permalink:"/docs/settings"}},v={},m=[{value:"License",id:"license",level:2},{value:"License types",id:"license-types",level:3},{value:"Basic License",id:"basic-license",level:4},{value:"Extended License",id:"extended-license",level:4},{value:"License key",id:"license-key",level:3},{value:"Register your device",id:"register-your-device",level:4},{value:"Unregister your device",id:"unregister-your-device",level:4}];function x(e){const i={h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"large-text",children:"Premium features are available to users who purchase a Vault Explorer license."}),"\n",(0,t.jsx)(i.h2,{id:"license",children:"License"}),"\n",(0,t.jsxs)(i.p,{children:["A license gives you ",(0,t.jsx)(i.strong,{children:"lifetime access"})," to premium Vault Explorer features. Purchasing a license is also a way to support the development of the plugin."]}),"\n",(0,t.jsx)(u,{}),"\n",(0,t.jsx)(i.h3,{id:"license-types",children:"License types"}),"\n",(0,t.jsx)(i.p,{children:"Licenses can only be registered on a finite amounts of devices."}),"\n",(0,t.jsx)(i.p,{children:"A device is considered any physical machine such as a desktop, laptop, tablet, or mobile phone. If you have multiple vaults on a machine, they will only be considered as 1 device."}),"\n",(0,t.jsxs)(i.p,{children:["There are 2 types of licenses: ",(0,t.jsx)(i.strong,{children:"Basic"})," and ",(0,t.jsx)(i.strong,{children:"Extended"})]}),"\n",(0,t.jsx)(i.h4,{id:"basic-license",children:"Basic License"}),"\n",(0,t.jsx)(i.p,{children:"The basic license can be used on up to 2 devices."}),"\n",(0,t.jsx)(i.h4,{id:"extended-license",children:"Extended License"}),"\n",(0,t.jsx)(i.p,{children:"The extended license can be up on up to 5 devices."}),"\n",(0,t.jsx)(i.h3,{id:"license-key",children:"License key"}),"\n",(0,t.jsx)(i.p,{children:"When you purchase a license, you will receive an email with your license key within 24 hours. After receiving your license key, you will need to register your device with it."}),"\n",(0,t.jsx)(a,{}),"\n",(0,t.jsx)(i.h4,{id:"register-your-device",children:"Register your device"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open the plugin settings by clicking the gear icon in the upper right corner"}),"\n",(0,t.jsxs)(i.li,{children:["Scroll down to the ",(0,t.jsx)(i.strong,{children:"Premium"})," section"]}),"\n",(0,t.jsxs)(i.li,{children:["Find the ",(0,t.jsx)(i.strong,{children:"License key"})," setting"]}),"\n",(0,t.jsx)(i.li,{children:"Enter your license key received by email"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Congratulations! Your device is now registered to that license."}),"\n",(0,t.jsx)(i.h4,{id:"unregister-your-device",children:"Unregister your device"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Open the plugin settings by clicking the gear icon in the upper right corner"}),"\n",(0,t.jsxs)(i.li,{children:["Scroll down to the ",(0,t.jsx)(i.strong,{children:"Premium"})," section"]}),"\n",(0,t.jsxs)(i.li,{children:["Find the ",(0,t.jsx)(i.strong,{children:"License key"})," setting"]}),"\n",(0,t.jsxs)(i.li,{children:["Click the ",(0,t.jsx)(i.strong,{children:"Unregister device"})," button"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"When you unregister a device, you may use your license key on another device."})]})}function b(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},8453:(e,i,r)=>{r.d(i,{R:()=>s,x:()=>l});var t=r(6540);const n={},a=t.createContext(n);function s(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);