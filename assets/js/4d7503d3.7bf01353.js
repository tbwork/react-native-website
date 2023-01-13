"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[56451],{35318:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(27378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=p(t),v=o,b=f["".concat(l,".").concat(v)]||f[v]||s[v]||c;return t?n.createElement(b,i(i({ref:r},u),{},{components:t})):n.createElement(b,i({ref:r},u))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=f;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},79571:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>d});var n=t(35318),o=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(a)for(var t of a(r))p.call(r,t)&&u(e,t,r[t]);return e};const f={id:"architecture-overview",title:"\u67b6\u6784\u6982\u89c8"},v=void 0,b={unversionedId:"architecture-overview",id:"version-0.70/architecture-overview",title:"\u67b6\u6784\u6982\u89c8",description:"\u672c\u6587\u6863\u8fd8\u5728\u6301\u7eed\u66f4\u65b0\u4e2d\uff0c\u4f1a\u4ece\u6982\u5ff5\u4e0a\u4ecb\u7ecd React Native \u65b0\u67b6\u6784\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002\u76ee\u6807\u8bfb\u8005\u5305\u62ec\u751f\u6001\u5e93\u7684\u5f00\u53d1\u8005\u3001\u6838\u5fc3\u8d21\u732e\u8005\u548c\u7279\u522b\u6709\u597d\u5947\u5fc3\u7684\u4eba\u3002",source:"@site/versioned_docs/version-0.70/architecture-overview.md",sourceDirName:".",slug:"/architecture-overview",permalink:"/docs/0.70/architecture-overview",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/architecture-overview.md",tags:[],version:"0.70",frontMatter:{id:"architecture-overview",title:"\u67b6\u6784\u6982\u89c8"}},y={},d=[],m={toc:d};function O(e){var r,t=e,{components:o}=t,u=((e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&a)for(var n of a(e))r.indexOf(n)<0&&p.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=s(s({},m),u),c(r,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u672c\u6587\u6863\u8fd8\u5728\u6301\u7eed\u66f4\u65b0\u4e2d\uff0c\u4f1a\u4ece\u6982\u5ff5\u4e0a\u4ecb\u7ecd React Native \u65b0\u67b6\u6784\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002\u76ee\u6807\u8bfb\u8005\u5305\u62ec\u751f\u6001\u5e93\u7684\u5f00\u53d1\u8005\u3001\u6838\u5fc3\u8d21\u732e\u8005\u548c\u7279\u522b\u6709\u597d\u5947\u5fc3\u7684\u4eba\u3002"))}O.isMDXComponent=!0}}]);