"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[20589],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83527:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return v},default:function(){return w},frontMatter:function(){return f},metadata:function(){return m},toc:function(){return y}});var n=r(35318),a=r(86527),i=Object.defineProperty,o=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e};const f={id:"native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb"},v=void 0,m={unversionedId:"native-modules-intro",id:"native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb",description:"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing.",source:"@site/../cndocs/native-modules-intro.md",sourceDirName:".",slug:"/native-modules-intro",permalink:"/docs/next/native-modules-intro",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-modules-intro.md",tags:[],version:"current",frontMatter:{id:"native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb"},sidebar:"docs",previous:{title:"\u4f7f\u7528\u65b0\u7684 Hermes \u5f15\u64ce",permalink:"/docs/next/hermes"},next:{title:"Android \u539f\u751f\u6a21\u5757",permalink:"/docs/next/native-modules-android"}},h={},y=[{value:"\u521b\u5efa\u539f\u751f\u6a21\u5757",id:"\u521b\u5efa\u539f\u751f\u6a21\u5757",level:2},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",level:2}],b={toc:y};function w(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),p),o(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)(a.ZP,{mdxType:"NativeDeprecated"}),(0,n.kt)("p",null,"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing."),(0,n.kt)("p",null,"The NativeModule system exposes instances of Java/Objective-C/C++ (native) classes to JavaScript (JS) as JS objects, thereby allowing you to execute arbitrary native code from within JS. While we don't expect this feature to be part of the usual development process, it is essential that it exists. If React Native doesn't export a native API that your JS app needs you should be able to export it yourself!"),(0,n.kt)("h2",d({},{id:"\u521b\u5efa\u539f\u751f\u6a21\u5757"}),"\u521b\u5efa\u539f\u751f\u6a21\u5757"),(0,n.kt)("p",null,"There are two ways to write a native module for your React Native application:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Directly within your React Native application\u2019s iOS/Android projects"),(0,n.kt)("li",{parentName:"ol"},"As a NPM package that can be installed as a dependency by your/other React Native applications")),(0,n.kt)("p",null,"This guide will first walk you through implementing a native module directly within a React Native application. However the native module you build in the following guide can be distributed as an NPM package. Check out the ",(0,n.kt)("a",d({parentName:"p"},{href:"native-modules-setup"}),"Setting Up a Native Module as a NPM Package")," guide if you are interested in doing so."),(0,n.kt)("h2",d({},{id:"\u6559\u7a0b"}),"\u6559\u7a0b"),(0,n.kt)("p",null,"In the following sections we will walk you through guides on how to build a native module directly within a React Native application. As a prerequisite, you will need a React Native application to work within. You can follow the steps ",(0,n.kt)("a",d({parentName:"p"},{href:"getting-started"}),"here")," to setup a React Native application if you do not already have one."),(0,n.kt)("p",null,"Imagine that you want to access the iOS/Android native calendar APIs from JavaScript within a React Native application in order to create calendar events. React Native does not expose a JavaScript API to communicate with the native calendar libraries. However, through native modules, you can write native code that communicates with native calendar APIs. Then you can invoke that native code through JavaScript in your React Native application."),(0,n.kt)("p",null,"In the following sections you will create such a Calendar native module for both ",(0,n.kt)("a",d({parentName:"p"},{href:"native-modules-android"}),"Android")," and ",(0,n.kt)("a",d({parentName:"p"},{href:"native-modules-ios"}),"iOS"),"."))}w.isMDXComponent=!0},86527:function(e,t,r){r.d(t,{ZP:function(){return f}});var n=r(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&u(e,r,t[r]);return e};const d={toc:[]};function f(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},d),u),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("admonition",p({},{type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"Native Module and Native Components are our stable technologies used by the legacy architecture.\nThey will be deprecated in the future when the New Architecture will be stable. The New Architecture uses ",(0,n.kt)("a",p({parentName:"p"},{href:"./the-new-architecture/pillars-turbomodules"}),"TurboModule")," and ",(0,n.kt)("a",p({parentName:"p"},{href:"./the-new-architecture/pillars-fabric-components"}),"Fabric Components")," to achieve similar results.")))}f.isMDXComponent=!0}}]);