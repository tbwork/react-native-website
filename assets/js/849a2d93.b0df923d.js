"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[32215],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),b=a,d=m["".concat(p,".").concat(b)]||m[b]||u[b]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},31043:(e,t,r)=>{r.d(t,{ZP:()=>b});var n=r(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&s(e,r,t[r]);return e};const m={toc:[]};function b(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},m),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("admonition",u({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,n.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,n.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,n.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}b.isMDXComponent=!0},70454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>k,frontMatter:()=>b,metadata:()=>f,toc:()=>h});var n=r(35318),a=r(31043),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&u(e,r,t[r]);return e};const b={id:"backward-compatibility",title:"\u5411\u540e\u517c\u5bb9\u7684\u610f\u4e49"},d=void 0,f={unversionedId:"the-new-architecture/backward-compatibility",id:"version-0.71/the-new-architecture/backward-compatibility",title:"\u5411\u540e\u517c\u5bb9\u7684\u610f\u4e49",description:"\u521b\u5efa\u4e00\u4e2a\u5411\u540e\u517c\u5bb9\u7684\u6a21\u5757\u5f88\u91cd\u8981\uff0c\u8fd9\u6837\u53ef\u4ee5\u5b9e\u73b0\u5728\u65e7\u67b6\u6784\u548c\u65b0\u67b6\u6784\u4e2d\u90fd\u80fd\u5de5\u4f5c\u7684\u5e93\u3002\u5e76\u4e0d\u662f\u6240\u6709\u7528\u6237\u90fd\u4f1a\u7acb\u523b\u8f6c\u5230\u65b0\u67b6\u6784\uff0c\u6700\u597d\u5728\u4ed6\u4eec\u4f7f\u7528\u65e7\u67b6\u6784\u65f6\u4ecd\u7136\u4fdd\u6301\u517c\u5bb9\u3002",source:"@site/versioned_docs/version-0.71/the-new-architecture/backward-compatibility.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/backward-compatibility",permalink:"/docs/the-new-architecture/backward-compatibility",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/backward-compatibility.md",tags:[],version:"0.71",frontMatter:{id:"backward-compatibility",title:"\u5411\u540e\u517c\u5bb9\u7684\u610f\u4e49"},sidebar:"docs",previous:{title:"Supporting Custom C++ Types",permalink:"/docs/the-new-architecture/cxx-custom-types"},next:{title:"TurboModules as Native Modules",permalink:"/docs/the-new-architecture/backward-compatibility-turbomodules"}},y={},h=[],w={toc:h};function k(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},w),u),i(t,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)(a.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5411\u540e\u517c\u5bb9\u7684\u6a21\u5757\u5f88\u91cd\u8981\uff0c\u8fd9\u6837\u53ef\u4ee5\u5b9e\u73b0\u5728",(0,n.kt)("strong",{parentName:"p"},"\u65e7\u67b6\u6784"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"\u65b0\u67b6\u6784"),"\u4e2d\u90fd\u80fd\u5de5\u4f5c\u7684\u5e93\u3002\u5e76\u4e0d\u662f\u6240\u6709\u7528\u6237\u90fd\u4f1a\u7acb\u523b\u8f6c\u5230\u65b0\u67b6\u6784\uff0c\u6700\u597d\u5728\u4ed6\u4eec\u4f7f\u7528\u65e7\u67b6\u6784\u65f6\u4ecd\u7136\u4fdd\u6301\u517c\u5bb9\u3002"),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u826f\u597d\u7684\u5411\u540e\u517c\u5bb9\u6a21\u5757\u7684\u8981\u70b9\u662f\u5c3d\u53ef\u80fd\u51cf\u5c11\u8fc1\u79fb\u5230\u65b0\u7248\u672c\u6240\u9700\u7684\u66f4\u6539\u3002\u8fd9\u6837\u7528\u6237\u5c31\u53ef\u4ee5\u5e73\u7a33\u5730\u8f6c\u5230\u65b0\u7248\u672c\uff0c\u5e76\u5728\u51c6\u5907\u597d\u65f6\u8fc1\u79fb\u5230\u65b0\u67b6\u6784\uff0c\u7406\u60f3\u60c5\u51b5\u4e0b\u6700\u597d\u53ea\u7528\u8f93\u5165\u4e00\u884c\u4e0d\u540c\u7684\u547d\u4ee4\u3002"),(0,n.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u7ed3\u679c\uff0c\u6211\u4eec\u5fc5\u987b\u5bf9",(0,n.kt)("strong",{parentName:"p"},"TurboModule"),"\u548c",(0,n.kt)("strong",{parentName:"p"},"Fabric Component"),"\u7684\u914d\u7f6e\u8fdb\u884c\u51e0\u6b21\u66f4\u6539\u3002\u4e0b\u9762\u662f\u9700\u8981\u7684\u6b65\u9aa4\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u66f4\u65b0\u5b89\u88c5\u914d\u7f6e"),"\uff0c\u4ee5\u907f\u514d\u4f7f\u7528\u65e7\u67b6\u6784\u4e0d\u9700\u8981\u7684\u4ee3\u7801\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u66f4\u65b0\u4ee3\u7801"),"\uff0c\u4ee5\u652f\u6301\u4e24\u4e2a\u67b6\u6784\u3002Android \u548c iOS \u6784\u5efa\u6d41\u6c34\u7ebf\u90fd\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u6cd5\uff0c\u4f7f\u5f97\u5e93\u80fd\u591f\u4e0e\u6b63\u786e\u7684 React Native \u67b6\u6784\u4e00\u8d77\u7f16\u8bd1\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u914d\u7f6e\u52a0\u8f7d\u6b63\u786e\u5b9e\u73b0\u7684\u89c4\u8303"),"\uff0c\u4ee5\u4fbf JavaScript \u5c42\u5728\u53ef\u7528\u65f6\u5229\u7528\u65b0\u67b6\u6784\u3002")),(0,n.kt)("admonition",m({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"\u63a5\u4e0b\u6765\u7684\u90e8\u5206\u8981\u6c42\u60a8\u719f\u6089",(0,n.kt)("strong",{parentName:"p"},"\u65b0\u67b6\u6784"),"\u7684",(0,n.kt)("a",m({parentName:"p"},{href:"pillars"}),"\u652f\u67f1"),"\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8981\u521b\u5efa\u5411\u540e\u517c\u5bb9\u7684",(0,n.kt)("strong",{parentName:"li"},"TurboModule"),"\uff0c\u8bf7\u9075\u5faa\u6b64",(0,n.kt)("a",m({parentName:"li"},{href:"backward-compatibility-turbomodules"}),"\u6307\u5357"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8981\u521b\u5efa\u5411\u540e\u517c\u5bb9\u7684",(0,n.kt)("strong",{parentName:"li"},"Fabric \u7ec4\u4ef6"),", \u8bf7\u9075\u5faa\u6b64",(0,n.kt)("a",m({parentName:"li"},{href:"backward-compatibility-fabric-components"}),"\u6307\u5357"),"\u3002")))}k.isMDXComponent=!0}}]);