"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[20925],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38286:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&u(e,n,t[n]);return e};const m={toc:[]};function s(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},m),u),l(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",c({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,a.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,a.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,a.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}s.isMDXComponent=!0},71131:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return h}});var a=n(35318),r=n(38286),l=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&c(e,n,t[n]);return e};const s={id:"new-architecture-appendix",title:"Appendix"},k=void 0,g={unversionedId:"new-architecture-appendix",id:"new-architecture-appendix",title:"Appendix",description:"I. Flow Type to Native Type Mapping",source:"@site/../cndocs/new-architecture-appendix.md",sourceDirName:".",slug:"/new-architecture-appendix",permalink:"/docs/next/new-architecture-appendix",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-appendix.md",tags:[],version:"current",frontMatter:{id:"new-architecture-appendix",title:"Appendix"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/next/new-architecture-troubleshooting"},next:{title:"Headless JS\uff08\u540e\u53f0\u4efb\u52a1\uff09",permalink:"/docs/next/headless-js-android"}},N={},h=[{value:"I. Flow Type to Native Type Mapping",id:"i-flow-type-to-native-type-mapping",level:2},{value:"<code>string</code>",id:"string",level:3},{value:"<code>boolean</code>",id:"boolean",level:3},{value:"Object literal",id:"object-literal",level:3},{value:"<code>Object</code>",id:"object",level:3},{value:"<code>Array&lt;*&gt;</code>",id:"array",level:3},{value:"<code>Function</code>",id:"function",level:3},{value:"<code>Promise&lt;*&gt;</code>",id:"promise",level:3},{value:"Type Unions",id:"type-unions",level:3},{value:"Callbacks",id:"callbacks",level:3},{value:"II. TypeScript to Native Type Mapping",id:"ii-typescript-to-native-type-mapping",level:2},{value:"III. Invoking the code-gen during development",id:"iii-invoking-the-code-gen-during-development",level:2},{value:"Invoking a Gradle task directly",id:"invoking-a-gradle-task-directly",level:3},{value:"Invoking the script manually",id:"invoking-the-script-manually",level:3},{value:"Generating the schema file",id:"generating-the-schema-file",level:4},{value:"Generating the native code artifacts",id:"generating-the-native-code-artifacts",level:4},{value:"Example",id:"example",level:5},{value:"IV. Note on Existing Apps",id:"iv-note-on-existing-apps",level:2},{value:"Finding your bridge delegate",id:"finding-your-bridge-delegate",level:3}],b={toc:h};function y(e){var t,n=e,{components:l}=n,c=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},b),c),i(t,o({components:l,mdxType:"MDXLayout"}))),(0,a.kt)(r.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("h2",m({},{id:"i-flow-type-to-native-type-mapping"}),"I. Flow Type to Native Type Mapping"),(0,a.kt)("p",null,"You may use the following table as a reference for which types are supported and what they map to in each platform:"),(0,a.kt)("h3",m({},{id:"string"}),(0,a.kt)("inlineCode",{parentName:"h3"},"string")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nullable Support?"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android (Java)"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?string")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"NSString"))))),(0,a.kt)("h3",m({},{id:"boolean"}),(0,a.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nullable Support?"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android (Java)"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?boolean")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"NSNumber"))))),(0,a.kt)("h3",m({},{id:"object-literal"}),"Object literal"),(0,a.kt)("p",null,"This is recommended over using plain ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),", for type safety."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"{| foo: string, ... |}")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nullable Support?"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android (Java)"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"?{","|"," foo: string, ...","|","}")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h3",m({},{id:"object"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Object")),(0,a.kt)("admonition",m({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Recommended to use ",(0,a.kt)("a",m({parentName:"p"},{href:"#object-literal"}),"Object literal")," instead.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nullable Support?"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android (Java)"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?Object")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ReadableMap")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"@{}")," (untyped dictionary)")))),(0,a.kt)("h3",m({},{id:"array"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Array<*>")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nullable Support?"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android (Java)"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?Array<*>")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ReadableArray")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"NSArray")," (or ",(0,a.kt)("inlineCode",{parentName:"td"},"RCTConvertVecToArray")," when used inside objects)")))),(0,a.kt)("h3",m({},{id:"function"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Function")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nullable Support?"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android (Java)"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?Function")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h3",m({},{id:"promise"}),(0,a.kt)("inlineCode",{parentName:"h3"},"Promise<*>")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nullable Support?"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android (Java)"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"?Promise<*>")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"com.facebook.react.bridge.Promise")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RCTPromiseResolve")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"RCTPromiseRejectBlock"))))),(0,a.kt)("h3",m({},{id:"type-unions"}),"Type Unions"),(0,a.kt)("p",null,"Type unions are only supported as callbacks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"'SUCCESS' | 'FAIL'")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nullable Support?"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android (Java)"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Only as callbacks."),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("h3",m({},{id:"callbacks"}),"Callbacks"),(0,a.kt)("p",null,"Callback functions are not type checked, and are generalized as ",(0,a.kt)("inlineCode",{parentName:"p"},"Object"),"s."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"() =>")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nullable Support?"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android (Java)"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"com.facebook.react.bridge.Callback")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RCTResponseSenderBlock"))))),(0,a.kt)("admonition",m({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"You may also find it useful to refer to the JavaScript specifications for the core modules in React Native. These are located inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Libraries/")," directory in the React Native repository.")),(0,a.kt)("h2",m({},{id:"ii-typescript-to-native-type-mapping"}),"II. TypeScript to Native Type Mapping"),(0,a.kt)("p",null,"You may use the following table as a reference for which types are supported and what they map to in each platform:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"TypeScript Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Nullable Support?"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Android (Java)"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"iOS"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Note"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"string ","|"," null ")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"String")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"NSString")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"boolean ","|"," null ")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"NSNumber")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Float"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Double"),", or ",(0,a.kt)("inlineCode",{parentName:"td"},"Int32")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"No"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"double")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"NSNumber")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"{","|"," foo: string, ... ","|","}")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"{","|"," foo: string, ...","|","} ","|"," null")),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Object literal. This is recommended over simply using Object, for type safety.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Object")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"Object ","|"," null ")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ReadableMap")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"@{} (untyped dictionary)")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Recommended to use object literal (see above).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Array<*>")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"Array<","*","> ","|"," null ")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"ReadableArray")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"NSArray")," (or ",(0,a.kt)("inlineCode",{parentName:"td"},"RCTConvertVecToArray")," when used inside objects)"),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Function")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"Function ","|"," null ")),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Promise<*>")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("code",null,"Promise<","*","> ","|"," null ")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"com.facebook.react.bridge.Promise")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RCTPromiseResolve")," and ",(0,a.kt)("inlineCode",{parentName:"td"},"RCTPromiseRejectBlock")),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Type aliases of the above"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Type Unions ",(0,a.kt)("code",null,"'SUCCESS'","|","'FAIL'")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Only as callbacks."),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null})),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Type unions only supported as callbacks.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Callbacks: ",(0,a.kt)("inlineCode",{parentName:"td"},"( ) =>")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Yes"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"com.facebook.react.bridge.Callback")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"RCTResponseSenderBlock")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Callback functions are not type checked, and are generalized as Objects.")))),(0,a.kt)("p",null,"You may also find it useful to refer to the JavaScript specifications for the core modules in React Native. These are located inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"Libraries/")," directory in the React Native repository."),(0,a.kt)("h2",m({},{id:"iii-invoking-the-code-gen-during-development"}),"III. Invoking the code-gen during development"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This section contains information specific to v0.66 of React Native.")),(0,a.kt)("p",null,"The Codegen is typically invoked at build time, but you may find it useful to generate your native interface code on demand for troubleshooting."),(0,a.kt)("p",null,"If you wish to invoke the codegen manually, you have two options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Invoking a Gradle task directly (Android)."),(0,a.kt)("li",{parentName:"ol"},"Invoking a script manually.")),(0,a.kt)("h3",m({},{id:"invoking-a-gradle-task-directly"}),"Invoking a Gradle task directly"),(0,a.kt)("p",null,"You can trigger the Codegen by invoking the following task:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"./gradlew generateCodegenArtifactsFromSchema --rerun-tasks\n")),(0,a.kt)("p",null,"The extra ",(0,a.kt)("inlineCode",{parentName:"p"},"--rerun-tasks")," flag is added to make sure Gradle is ignoring the ",(0,a.kt)("inlineCode",{parentName:"p"},"UP-TO-DATE")," checks for this task. You should not need it during normal development."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"generateCodegenArtifactsFromSchema")," task normally runs before the ",(0,a.kt)("inlineCode",{parentName:"p"},"preBuild")," task, so you should not need to invoke it manually, but it will be triggered before your builds."),(0,a.kt)("h3",m({},{id:"invoking-the-script-manually"}),"Invoking the script manually"),(0,a.kt)("p",null,"Alternatively, you can invoke the Codegen directly, bypassing the Gradle Plugin or CocoaPods infrastructure.\nThis can be done with the following commands."),(0,a.kt)("p",null,"The parameters to provide will look quite familiar to you now that you have already configured the Gradle plugin or CocoaPods library."),(0,a.kt)("h4",m({},{id:"generating-the-schema-file"}),"Generating the schema file"),(0,a.kt)("p",null,"First, you\u2019ll need to generate a schema file from your JavaScript sources. You only need to do this whenever your JavaScript specs change. The script to generate this schema is provided as part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-codegen")," package. If running this from within your React Native application, you can use the package from ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"node node_modules/react-native-codegen/lib/cli/combine/combine-js-to-schema-cli.js \\\n  <output_file_schema_json> <javascript_sources_dir>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The source for the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-codegen")," is available in the React Native repository, under ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/react-native-codegen"),". Run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn install")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," in that directory to build your own ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-codegen")," package from source. In most cases, you will not want to do this as the guide assumes the use of the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-codegen")," package version that is associated with the relevant React Native nightly release.")),(0,a.kt)("h4",m({},{id:"generating-the-native-code-artifacts"}),"Generating the native code artifacts"),(0,a.kt)("p",null,"Once you have a schema file for your native modules or components, you can use a second script to generate the actual native code artifacts for your library. You can use the same schema file generated by the previous script."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"node node_modules/react-native/scripts/generate-specs-cli.js \\\n  --platform <ios|android> \\\n  --schemaPath <generated_schema_json_file> \\\n  --outputDir <output_dir> \\\n  [--libraryName library_name] \\\n  [--javaPackageName java_package_name] \\\n  [--libraryType all(default)|modules|components]\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"NOTE:")," The output artifacts of the Codegen are inside the build folder and should not be committed.\nThey should be considered only for reference.")),(0,a.kt)("h5",m({},{id:"example"}),"Example"),(0,a.kt)("p",null,"The following is a basic example of invoking the Codegen script to generate native iOS interface code for a library that provides native modules. The JavaScript spec sources for this library are located in a ",(0,a.kt)("inlineCode",{parentName:"p"},"js/")," subdirectory, and this library\u2019s native code expects the native interfaces to be available in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ios")," subdirectory."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# Generate schema - only needs to be done whenever JS specs change\nnode node_modules/react-native-codegen/lib/cli/combine/combine-js-to-schema-cli.js /tmp/schema.json ./js\n\n# Generate native code artifacts\nnode node_modules/react-native/scripts/generate-specs-cli.js \\\n  --platform ios \\\n  --schemaPath /tmp/schema.json \\\n  --outputDir ./ios \\\n  --libraryName MyLibSpecs \\\n  --libraryType modules\n")),(0,a.kt)("p",null,"In the above example, the code-gen script will generate several files: ",(0,a.kt)("inlineCode",{parentName:"p"},"MyLibSpecs.h")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"MyLibSpecs-generated.mm"),", as well as a handful of ",(0,a.kt)("inlineCode",{parentName:"p"},".h")," and ",(0,a.kt)("inlineCode",{parentName:"p"},".cpp")," files, all located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ios")," directory."),(0,a.kt)("h2",m({},{id:"iv-note-on-existing-apps"}),"IV. Note on Existing Apps"),(0,a.kt)("p",null,"This guide provides instructions for migrating an application that is based on the default app template that is provided by React Native. If your app has deviated from the template, or you are working with an application that was never based off the template, then the following sections might help."),(0,a.kt)("h3",m({},{id:"finding-your-bridge-delegate"}),"Finding your bridge delegate"),(0,a.kt)("p",null,"This guide assumes that the ",(0,a.kt)("inlineCode",{parentName:"p"},"AppDelegate")," is configured as the bridge delegate. If you are not sure which is your bridge delegate, then place a breakpoint in ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTBridge")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTCxxBridge"),", run your app, and inspect ",(0,a.kt)("inlineCode",{parentName:"p"},"self.delegate"),"."))}y.isMDXComponent=!0}}]);