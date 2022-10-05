"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[58378],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,v=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(v,l(l({ref:t},s),{},{components:r})):n.createElement(v,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58265:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return g}});var n=r(35318),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&s(e,r,t[r]);return e};const d={id:"threading-model",title:"\u7ebf\u7a0b\u6a21\u578b"},m=void 0,v={unversionedId:"threading-model",id:"version-0.68/threading-model",title:"\u7ebf\u7a0b\u6a21\u578b",description:"\u6587\u6863\u4ecb\u7ecd\u4e86\u5373\u5c06\u53d1\u5e03\u7684\u65b0\u6e32\u67d3\u5668 Fabric \u7684\u67b6\u6784\u3002",source:"@site/versioned_docs/version-0.68/threading-model.md",sourceDirName:".",slug:"/threading-model",permalink:"/docs/0.68/threading-model",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/threading-model.md",tags:[],version:"0.68",frontMatter:{id:"threading-model",title:"\u7ebf\u7a0b\u6a21\u578b"},sidebar:"\u67b6\u6784",previous:{title:"\u89c6\u56fe\u62cd\u5e73",permalink:"/docs/0.68/view-flattening"},next:{title:"\u672f\u8bed\u8868",permalink:"/docs/0.68/architecture-glossary"}},f={},g=[{value:"React Native \u6e32\u67d3\u5668\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u5206\u914d\u6e32\u67d3\u6d41\u6c34\u7ebf\uff08render pipeline\uff09\u4efb\u52a1\u3002",id:"react-native-\u6e32\u67d3\u5668\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u5206\u914d\u6e32\u67d3\u6d41\u6c34\u7ebfrender-pipeline\u4efb\u52a1",level:4},{value:"\u6e32\u67d3\u573a\u666f",id:"\u6e32\u67d3\u573a\u666f",level:2},{value:"\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u6e32\u67d3",id:"\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u6e32\u67d3",level:3},{value:"\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u6e32\u67d3",id:"\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u6e32\u67d3",level:3},{value:"\u9ed8\u8ba4\u6216\u8fde\u7eed\u4e8b\u4ef6\u4e2d\u65ad",id:"\u9ed8\u8ba4\u6216\u8fde\u7eed\u4e8b\u4ef6\u4e2d\u65ad",level:3},{value:"\u4e0d\u76f8\u5e72\u7684\u4e8b\u4ef6\u4e2d\u65ad",id:"\u4e0d\u76f8\u5e72\u7684\u4e8b\u4ef6\u4e2d\u65ad",level:3},{value:"C++ \u72b6\u6001\u66f4\u65b0",id:"c-\u72b6\u6001\u66f4\u65b0",level:3}],h={toc:g};function b(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},h),s),i(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6587\u6863\u4ecb\u7ecd\u4e86\u5373\u5c06\u53d1\u5e03\u7684\u65b0\u6e32\u67d3\u5668 Fabric \u7684\u67b6\u6784\u3002")),(0,n.kt)("h4",u({},{id:"react-native-\u6e32\u67d3\u5668\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u5206\u914d\u6e32\u67d3\u6d41\u6c34\u7ebfrender-pipeline\u4efb\u52a1"}),"React Native \u6e32\u67d3\u5668\u5728\u591a\u4e2a\u7ebf\u7a0b\u4e4b\u95f4\u5206\u914d\u6e32\u67d3\u6d41\u6c34\u7ebf\uff08render pipeline\uff09\u4efb\u52a1\u3002"),(0,n.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u4f1a\u7ed9\u7ebf\u7a0b\u6a21\u578b\u4e0b\u5b9a\u4e49\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e9b\u793a\u4f8b\u6765\u8bf4\u660e\u6e32\u67d3\u6d41\u6c34\u7ebf\u7684\u7ebf\u7a0b\u7528\u6cd5\u3002"),(0,n.kt)("p",null,"React Native \u6e32\u67d3\u5668\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u3002\u4ece\u66f4\u9ad8\u7684\u89c6\u89d2\u770b\uff0c\u5728\u6846\u67b6\u5185\u90e8\u7ebf\u7a0b\u5b89\u5168\u662f\u901a\u8fc7\u4e0d\u53ef\u53d8\u7684\u6570\u636e\u7ed3\u679c\u4fdd\u969c\u7684\uff0c\u5176\u4f7f\u7528\u7684\u662f C++ \u7684 const correctness \u7279\u6027\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5728\u6e32\u67d3\u5668\u4e2d React \u7684\u6bcf\u6b21\u66f4\u65b0\u90fd\u4f1a\u91cd\u65b0\u521b\u5efa\u6216\u590d\u5236\u65b0\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u66f4\u65b0\u539f\u6709\u7684\u6570\u636e\u7ed3\u6784\u3002\u8fd9\u662f\u6846\u67b6\u628a\u7ebf\u7a0b\u5b89\u5168\u548c\u540c\u6b65 API \u66b4\u9732\u7ed9 React \u7684\u524d\u63d0\u3002"),(0,n.kt)("p",null,"\u6e32\u67d3\u5668\u4f7f\u7528\u4e09\u4e2a\u4e0d\u540c\u7684\u7ebf\u7a0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"UI \u7ebf\u7a0b\uff08\u4e3b\u7ebf\u7a0b\uff09\uff1a\u552f\u4e00\u53ef\u4ee5\u64cd\u4f5c\u5bbf\u4e3b\u89c6\u56fe\u7684\u7ebf\u7a0b\u3002"),(0,n.kt)("li",{parentName:"ul"},"JavaScript \u7ebf\u7a0b\uff1a\u8fd9\u662f\u6267\u884c React \u6e32\u67d3\u9636\u6bb5\u7684\u5730\u65b9\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u540e\u53f0\u7ebf\u7a0b\uff1a\u4e13\u95e8\u7528\u4e8e\u5e03\u5c40\u7684\u7ebf\u7a0b\u3002")),(0,n.kt)("p",null,"\u8ba9\u6211\u4eec\u56de\u987e\u4e00\u4e0b\u6bcf\u4e2a\u9636\u6bb5\u652f\u6301\u7684\u6267\u884c\u573a\u666f\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://reactnative.dev/docs/assets/Architecture/threading-model/symbols.png",alt:"Threading model symbols"}))),(0,n.kt)("h2",u({},{id:"\u6e32\u67d3\u573a\u666f"}),"\u6e32\u67d3\u573a\u666f"),(0,n.kt)("h3",u({},{id:"\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u6e32\u67d3"}),"\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u6e32\u67d3"),(0,n.kt)("p",null,"\u8fd9\u662f\u6700\u5e38\u89c1\u7684\u573a\u666f\uff0c\u5927\u591a\u6570\u7684\u6e32\u67d3\u6d41\u6c34\u7ebf\u53d1\u751f\u5728 JavaScript \u7ebf\u7a0b\u548c\u540e\u53f0\u7ebf\u7a0b\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://reactnative.dev/docs/assets/Architecture/threading-model/case-1.jpg",alt:"Threading model use case one"}))),(0,n.kt)("h3",u({},{id:"\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u6e32\u67d3"}),"\u5728\u4e3b\u7ebf\u7a0b\u4e2d\u6e32\u67d3"),(0,n.kt)("p",null,"\u5f53 UI \u7ebf\u7a0b\u4e0a\u6709\u9ad8\u4f18\u5148\u7ea7\u4e8b\u4ef6\u65f6\uff0c\u6e32\u67d3\u5668\u80fd\u591f\u5728 UI \u7ebf\u7a0b\u4e0a\u540c\u6b65\u6267\u884c\u6240\u6709\u6e32\u67d3\u6d41\u6c34\u7ebf\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://reactnative.dev/docs/assets/Architecture/threading-model/case-2.jpg",alt:"Threading model use case two"}))),(0,n.kt)("h3",u({},{id:"\u9ed8\u8ba4\u6216\u8fde\u7eed\u4e8b\u4ef6\u4e2d\u65ad"}),"\u9ed8\u8ba4\u6216\u8fde\u7eed\u4e8b\u4ef6\u4e2d\u65ad"),(0,n.kt)("p",null,"\u5728\u8fd9\u4e2a\u573a\u666f\u4e2d\uff0cUI \u7ebf\u7a0b\u7684\u4f4e\u4f18\u5148\u7ea7\u4e8b\u4ef6\u4e2d\u65ad\u4e86\u6e32\u67d3\u6b65\u9aa4\u3002React \u548c React Native \u6e32\u67d3\u5668\u80fd\u591f\u4e2d\u65ad\u6e32\u67d3\u6b65\u9aa4\uff0c\u5e76\u628a\u5b83\u7684\u72b6\u6001\u548c\u4e00\u4e2a\u5728 UI \u7ebf\u7a0b\u6267\u884c\u7684\u4f4e\u4f18\u5148\u7ea7\u4e8b\u4ef6\u5408\u5e76\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u6e32\u67d3\u8fc7\u7a0b\u4f1a\u7ee7\u7eed\u5728\u540e\u53f0\u7ebf\u7a0b\u4e2d\u6267\u884c\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://reactnative.dev/docs/assets/Architecture/threading-model/case-3.jpg",alt:"Threading model use case three"}))),(0,n.kt)("h3",u({},{id:"\u4e0d\u76f8\u5e72\u7684\u4e8b\u4ef6\u4e2d\u65ad"}),"\u4e0d\u76f8\u5e72\u7684\u4e8b\u4ef6\u4e2d\u65ad"),(0,n.kt)("p",null,"\u6e32\u67d3\u6b65\u9aa4\u662f\u53ef\u4e2d\u65ad\u7684\u3002\u5728\u8fd9\u4e2a\u573a\u666f\u4e2d\uff0c UI \u7ebf\u7a0b\u7684\u9ad8\u4f18\u5148\u7ea7\u4e8b\u4ef6\u4e2d\u65ad\u4e86\u6e32\u67d3\u6b65\u9aa4\u3002React \u548c\u6e32\u67d3\u5668\u662f\u80fd\u591f\u6253\u65ad\u6e32\u67d3\u6b65\u9aa4\u7684\uff0c\u5e76\u628a\u5b83\u7684\u72b6\u6001\u548c UI \u7ebf\u7a0b\u6267\u884c\u7684\u9ad8\u4f18\u5148\u7ea7\u4e8b\u4ef6\u5408\u5e76\u3002\u5728 UI \u7ebf\u7a0b\u6e32\u67d3\u6b65\u9aa4\u662f\u540c\u6b65\u6267\u884c\u7684\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://reactnative.dev/docs/assets/Architecture/threading-model/case-4.jpg",alt:"Threading model use case four"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6765\u81ea JavaScript \u7ebf\u7a0b\u7684\u540e\u53f0\u7ebf\u7a0b\u6279\u91cf\u66f4\u65b0")),(0,n.kt)("p",null,"\u5728\u540e\u53f0\u7ebf\u7a0b\u5c06\u66f4\u65b0\u5206\u6d3e\u7ed9 UI \u7ebf\u7a0b\u4e4b\u524d\uff0c\u5b83\u4f1a\u68c0\u67e5\u662f\u5426\u6709\u65b0\u7684\u66f4\u65b0\u6765\u81ea JavaScript\u3002 \u8fd9\u6837\uff0c\u5f53\u6e32\u67d3\u5668\u77e5\u9053\u65b0\u7684\u72b6\u6001\u8981\u5230\u6765\u65f6\uff0c\u5b83\u5c31\u4e0d\u4f1a\u76f4\u63a5\u6e32\u67d3\u65e7\u7684\u72b6\u6001\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://reactnative.dev/docs/assets/Architecture/threading-model/case-5.jpg",alt:"Threading model use case five"}))),(0,n.kt)("h3",u({},{id:"c-\u72b6\u6001\u66f4\u65b0"}),"C++ \u72b6\u6001\u66f4\u65b0"),(0,n.kt)("p",null,"\u66f4\u65b0\u6765\u81ea UI \u7ebf\u7a0b\uff0c\u5e76\u4f1a\u8df3\u8fc7\u6e32\u67d3\u6b65\u9aa4\u3002\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u8003 React Native \u6e32\u67d3\u5668\u72b6\u6001\u66f4\u65b0\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",u({parentName:"p"},{src:"https://reactnative.dev/docs/assets/Architecture/threading-model/case-6.jpg",alt:"Threading model use case six"}))))}b.isMDXComponent=!0}}]);