"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[45620],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),h=l(r),m=o,f=h["".concat(c,".").concat(m)]||h[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},31043:(e,t,r)=>{r.d(t,{ZP:()=>m});var n=r(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&s(e,r,t[r]);return e};const h={toc:[]};function m(e){var t,r=e,{components:o}=r,s=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},h),s),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("admonition",u({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,n.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,n.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,n.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}m.isMDXComponent=!0},59539:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>d,toc:()=>y});var n=r(35318),o=r(31043),a=Object.defineProperty,i=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,h=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&u(e,r,t[r]);return e};const m={id:"pillars",title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u5927\u652f\u67f1\u201d"},f=void 0,d={unversionedId:"the-new-architecture/pillars",id:"version-0.71/the-new-architecture/pillars",title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u5927\u652f\u67f1\u201d",description:"The New Architecture is composed mainly by two pillars:",source:"@site/versioned_docs/version-0.71/the-new-architecture/pillars.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/pillars",permalink:"/docs/the-new-architecture/pillars",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/pillars.md",tags:[],version:"0.71",frontMatter:{id:"pillars",title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u5927\u652f\u67f1\u201d"},sidebar:"docs",previous:{title:"Creating a New Architecture App",permalink:"/docs/the-new-architecture/use-app-template"},next:{title:"TurboModules",permalink:"/docs/the-new-architecture/pillars-turbomodules"}},b={},y=[],w={toc:y};function g(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=h(h({},w),u),i(t,p({components:a,mdxType:"MDXLayout"}))),(0,n.kt)(o.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("p",null,"The New Architecture is composed mainly by two pillars:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"pillars-turbomodules"}),"TurboModules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",h({parentName:"li"},{href:"pillars-fabric-components"}),"Fabric Components"),".")),(0,n.kt)("p",null,"TurboModules are the preferred way to create libraries that leverage some platform specific API. Fabric Components are the preferred way to create reusable UI components, providing a native experience to the users."),(0,n.kt)("p",null,"The main goal of this section is to drive the reader through a step-by-step guide to create their first TurboModule or Fabric Component."),(0,n.kt)("p",null,"The next sections contain an high-level overview of the pillars, together with the steps to create them. To create one of these pillars, the steps are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Define a JavaScript specification using Flow or TypeScript."),(0,n.kt)("li",{parentName:"ol"},"Configure the dependencies management system to generate code from the provided spec."),(0,n.kt)("li",{parentName:"ol"},"Implement the Native code."),(0,n.kt)("li",{parentName:"ol"},"Integrate the code in the app.")),(0,n.kt)("p",null,"Finally, we dive a little deeper into the ",(0,n.kt)("a",h({parentName:"p"},{href:"pillars-codegen"}),"Codegen")," process that is required to create all the C++ types and files used by our components, including some useful steps to work comfortably while developing the component."),(0,n.kt)("admonition",h({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"To integrate a TurboModule or a Fabric Component in an app, the app has to run with the New Architecture enabled."),(0,n.kt)("p",{parentName:"admonition"},"To create a new app adopting the New Architecture, refer to the ",(0,n.kt)("a",h({parentName:"p"},{href:"use-app-template"}),"Using the App Template")," section.\nTo migrate an existing app to the New Architecture, refer to the ",(0,n.kt)("a",h({parentName:"p"},{href:"../new-architecture-intro"}),"Migration")," guide.")))}g.isMDXComponent=!0}}]);