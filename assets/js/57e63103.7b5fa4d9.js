"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[86945],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),f=n,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||l;return a?r.createElement(d,i(i({ref:t},s),{},{components:a})):r.createElement(d,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68858:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return b}});var r=a(35318),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&s(e,a,t[a]);return e};const u={id:"javascript-environment",title:"JavaScript \u73af\u5883"},f=void 0,d={unversionedId:"javascript-environment",id:"version-0.65/javascript-environment",title:"JavaScript \u73af\u5883",description:"JavaScript \u8fd0\u884c\u65f6\u73af\u5883",source:"@site/versioned_docs/version-0.65/javascript-environment.md",sourceDirName:".",slug:"/javascript-environment",permalink:"/docs/0.65/javascript-environment",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/javascript-environment.md",tags:[],version:"0.65",frontMatter:{id:"javascript-environment",title:"JavaScript \u73af\u5883"},sidebar:"version-0.65/docs",previous:{title:"Profiling with Hermes",permalink:"/docs/0.65/profile-hermes"},next:{title:"\u5b9a\u65f6\u5668",permalink:"/docs/0.65/timers"}},k={},b=[{value:"JavaScript \u8fd0\u884c\u65f6\u73af\u5883",id:"javascript-\u8fd0\u884c\u65f6\u73af\u5883",level:2},{value:"JavaScript \u8bed\u6cd5\u8f6c\u6362\u5668",id:"javascript-\u8bed\u6cd5\u8f6c\u6362\u5668",level:2},{value:"\u63a5\u53e3\u517c\u5bb9\uff08Polyfills\uff09",id:"\u63a5\u53e3\u517c\u5bb9polyfills",level:2}],h={toc:b};function v(e){var t,a=e,{components:n}=a,s=((e,t)=>{var a={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=m(m({},h),s),l(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h2",m({},{id:"javascript-\u8fd0\u884c\u65f6\u73af\u5883"}),"JavaScript \u8fd0\u884c\u65f6\u73af\u5883"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528 React Native \u65f6\uff0c\u4f60\u7684 JavaScript \u4ee3\u7801\u5c06\u4f1a\u8fd0\u884c\u5728\u4e24\u4e2a\u4e0d\u540c\u7684\u73af\u5883\u4e0a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0cReact Native \u4f7f\u7528\u7684\u662f",(0,r.kt)("a",m({parentName:"li"},{href:"http://trac.webkit.org/wiki/JavaScriptCore"}),"JavaScriptCore"),"\uff0c\u4e5f\u5c31\u662f Safari \u6240\u4f7f\u7528\u7684 JavaScript \u5f15\u64ce\u3002\u4f46\u662f\u5728 iOS \u4e0a JavaScriptCore \u5e76\u6ca1\u6709\u4f7f\u7528\u5373\u65f6\u7f16\u8bd1\u6280\u672f\uff08JIT\uff09\uff0c\u56e0\u4e3a\u5728 iOS \u4e2d\u5e94\u7528\u65e0\u6743\u62e5\u6709\u53ef\u5199\u53ef\u6267\u884c\u7684\u5185\u5b58\u9875\uff08\u56e0\u6b64\u65e0\u6cd5\u52a8\u6001\u751f\u6210\u4ee3\u7801\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u4f7f\u7528 Chrome \u8c03\u8bd5\u65f6\uff0c\u6240\u6709\u7684 JavaScript \u4ee3\u7801\u90fd\u8fd0\u884c\u5728 Chrome \u4e2d\uff0c\u5e76\u4e14\u901a\u8fc7 WebSocket \u4e0e\u539f\u751f\u4ee3\u7801\u901a\u4fe1\u3002\u6b64\u65f6\u7684\u8fd0\u884c\u73af\u5883\u662f",(0,r.kt)("a",m({parentName:"li"},{href:"https://v8.dev"}),"V8 \u5f15\u64ce"),"\u3002")),(0,r.kt)("p",null,"\u867d\u7136\u4e24\u4e2a\u73af\u5883\u975e\u5e38\u7c7b\u4f3c\uff0c\u4f46\u5f00\u53d1\u8005\u8fd8\u662f\u53ef\u80fd\u78b0\u5230\u4e00\u4e9b\u4e0d\u4e00\u81f4\u7684\u5730\u65b9\u3002\u672a\u6765\u6211\u4eec\u5f88\u53ef\u80fd\u4f1a\u5c1d\u8bd5\u4e00\u4e9b\u5176\u4ed6\u7684 JS \u5f15\u64ce\uff0c\u6240\u4ee5\u8bf7\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u4f9d\u8d56\u4e8e\u7279\u5b9a\u8fd0\u884c\u73af\u5883\u7684\u4ee3\u7801\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5e38\u89c1\u7684\u4e0d\u4e00\u81f4\u6bd4\u5982\u6709\uff1aiOS \u4e0a\u6709\u90e8\u5206\u65e5\u671f\u6784\u9020\u51fd\u6570\u672a\u5b9e\u73b0\uff1bAndroid \u4e0a\u91cd\u590d\u5b9a\u4e49\u7684 props \u53ef\u80fd\u4f1a\u5bfc\u81f4\u62a5\u9519\u3002")),(0,r.kt)("h2",m({},{id:"javascript-\u8bed\u6cd5\u8f6c\u6362\u5668"}),"JavaScript \u8bed\u6cd5\u8f6c\u6362\u5668"),(0,r.kt)("p",null,"\u8bed\u6cd5\u8f6c\u6362\u5668\u53ef\u4ee5\u4f7f\u7f16\u5199\u4ee3\u7801\u7684\u8fc7\u7a0b\u66f4\u52a0\u4eab\u53d7\uff0c\u56e0\u4e3a\u5f00\u53d1\u8005\u53ef\u4ee5\u501f\u52a9\u8f6c\u6362\u5668\u76f4\u63a5\u4f7f\u7528\u65b0\u7684 JavaScript \u8bed\u6cd5\u6807\u51c6\uff0c\u800c\u65e0\u9700\u7b49\u5f85 JS \u89e3\u91ca\u5668\u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,"React Native \u5185\u7f6e\u4e86",(0,r.kt)("a",m({parentName:"p"},{href:"https://babeljs.io"}),"Babel \u8f6c\u6362\u5668"),"\u3002\u4f60\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",m({parentName:"p"},{href:"https://babeljs.io/docs/plugins/#transform-plugins"}),"Babel \u7684\u6587\u6863"),"\u6765\u4e86\u89e3\u6709\u5173\u5b83\u53ef\u4ee5\u8f6c\u6362\u7684\u8bed\u6cd5\u7684\u8be6\u60c5\u3002"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/metro/tree/master/packages/metro-react-native-babel-preset"}),"metro-react-native-babel-preset"),"\u4e2d\u53ef\u4ee5\u770b\u5230\u76ee\u524d React Native \u9ed8\u8ba4\u5f00\u542f\u7684\u8bed\u6cd5\u8f6c\u6362\u7279\u6027\u3002\u6ce8\uff1a\u82e5\u60f3\u5b66\u4e60\u76f8\u5173\u8bed\u6cd5\uff0c\u8bd1\u8005\u63a8\u8350\u962e\u4e00\u5cf0\u8001\u5e08\u7684",(0,r.kt)("a",m({parentName:"p"},{href:"http://es6.ruanyifeng.com/"}),"\u300aECMAScript 6 \u5165\u95e8\u300b"),"\u3002"),(0,r.kt)("p",null,"ES5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u7559\u5173\u952e\u5b57: ",(0,r.kt)("inlineCode",{parentName:"li"},"promise.catch(function() { });"))),(0,r.kt)("p",null,"ES6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#arrows"}),"\u7bad\u5934\u51fd\u6570 Arrow functions"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"<C onPress={() => this.setState({pressed: true})} />")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://babeljs.io/docs/learn-es2015/#let-const"}),"\u5757\u7ea7\u4f5c\u7528\u57df Block scoping"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"let greeting = 'hi';")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#default-rest-spread"}),"\u6570\u7ec4\u7684\u6269\u5c55\u8fd0\u7b97 Call spread"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Math.max(...array);")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#classes"}),"\u7c7b Classes"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"class C extends React.Component { render() { return <View />; } }")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://babeljs.io/docs/learn-es2015/#let-const"}),"\u5e38\u91cf Constants"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"const answer = 42;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#destructuring"}),"\u89e3\u6784 Destructuring"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"var {isActive, style} = this.props;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"}),"for...of"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"for (var num of [1, 2, 3]) {}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#modules"}),"\u6a21\u5757 Modules"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"import React, { Component } from 'react';")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals"}),"\u52a8\u6001\u5c5e\u6027\u952e Computed Properties"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"var key = 'abc'; var obj = {[key]: 10};")),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u65b9\u6cd5\u7684\u7b80\u5199 Object Consise Method: ",(0,r.kt)("inlineCode",{parentName:"li"},"var obj = { method() { return 10; } };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#enhanced-object-literals"}),"\u5bf9\u8c61\u5c5e\u6027\u7684\u7b80\u5199 Object Short Notation"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"var name = 'vjeux'; var obj = { name };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/sebmarkbage/ecmascript-rest-spread"}),"\u53c2\u6570\u7684\u6269\u5c55\u8fd0\u7b97 Rest Params"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"function(type, ...args) { }")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://babeljs.io/docs/learn-es2015/#template-strings"}),"\u5b57\u7b26\u4e32\u6a21\u677f Template Literals"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"var who = 'world'; var str = `Hello ${who}`;"))),(0,r.kt)("p",null,"ES8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/jeffmo/es-trailing-function-commas"}),"\u53c2\u6570\u5217\u8868\u672b\u5c3e\u5141\u8bb8\u653e\u7f6e\u9017\u53f7 Function Trailing Comma"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"function f(a, b, c,) { }")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/tc39/ecmascript-asyncawait"}),"\u5f02\u6b65\u51fd\u6570 Async Functions"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"async function doStuffAsync() { const foo = await doOtherStuffAsync(); };"))),(0,r.kt)("p",null,"Stage 3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/tc39/proposal-object-rest-spread"}),"\u5bf9\u8c61\u7684\u6269\u5c55\u8fd0\u7b97 Object Spread"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"var extended = { ...obj, a: 10 };")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/tc39/proposal-optional-chaining"}),"Optional Chaining"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"var name = obj.user?.name;"))),(0,r.kt)("p",null,"\u5176\u4ed6\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://zh-hans.reactjs.org/docs/jsx-in-depth.html"}),"JSX"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"<View style={{color: 'red'}} />")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://flowtype.org/"}),"Flow"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"function foo(x: ?number): string {}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"function foo(x: number | undefined): string {};")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://babeljs.io/docs/en/babel-template"}),"Babel Template"),": allows AST templating")),(0,r.kt)("h2",m({},{id:"\u63a5\u53e3\u517c\u5bb9polyfills"}),"\u63a5\u53e3\u517c\u5bb9\uff08Polyfills\uff09"),(0,r.kt)("p",null,"\u8bb8\u591a\u6807\u51c6\u529f\u80fd\u4e5f\u90fd\u5728\u652f\u6301\u7684 JavaScript \u8fd0\u884c\u73af\u5883\u4e0a\u505a\u4e86\u517c\u5bb9\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.chrome.com/devtools/docs/console-api"}),"console.{log, warn, error, info, trace, table, group, groupEnd}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://nodejs.org/docs/latest/api/modules.html"}),"CommonJS require")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/docs/0.65/network#content"}),"XMLHttpRequest, fetch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"/docs/0.65/timers#content"}),"{set, clear}{Timeout, Interval, Immediate}, {request, cancel}AnimationFrame"))),(0,r.kt)("p",null,"ES6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"}),"Object.assign")),(0,r.kt)("li",{parentName:"ul"},"String.prototype.{",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith"}),"startsWith"),", ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith"}),"endsWith"),", ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"}),"repeat"),", ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes"}),"includes"),"}"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from"}),"Array.from")),(0,r.kt)("li",{parentName:"ul"},"Array.prototype.{",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"}),"find"),", ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"}),"findIndex"),"}")),(0,r.kt)("p",null,"ES7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Array.prototype.{",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"}),"includes"),"}")),(0,r.kt)("p",null,"ES8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Object.{",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries"}),"entries"),", ",(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values"}),"values"),"}")),(0,r.kt)("p",null,"\u5176\u4ed6\u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__DEV__")," \u7528\u4e8e\u5224\u65ad\u5f53\u524d\u662f\u5426\u5f00\u53d1\u73af\u5883\u7684\u5168\u5c40\u53d8\u91cf")))}v.isMDXComponent=!0}}]);