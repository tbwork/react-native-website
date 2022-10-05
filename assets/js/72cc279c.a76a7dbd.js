"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[46263],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,f=m["".concat(p,".").concat(s)]||m[s]||c[s]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64753:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return b}});var r=n(35318),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&d(e,n,t[n]);return e};const m={id:"rect",title:"\u77e9\u5f62\u533a\u57df\u5bf9\u8c61"},s=void 0,f={unversionedId:"rect",id:"version-0.64/rect",title:"\u77e9\u5f62\u533a\u57df\u5bf9\u8c61",description:"Rect accepts numeric pixel values to describe how far to extend a rectangular area. These values are added to the original area's size to expand it.",source:"@site/versioned_docs/version-0.64/rect.md",sourceDirName:".",slug:"/rect",permalink:"/docs/0.64/rect",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/rect.md",tags:[],version:"0.64",frontMatter:{id:"rect",title:"\u77e9\u5f62\u533a\u57df\u5bf9\u8c61"},sidebar:"version-0.64/\u7ec4\u4ef6",previous:{title:"React \u8282\u70b9\u5bf9\u8c61",permalink:"/docs/0.64/react-node"},next:{title:"ViewToken \u5bf9\u8c61",permalink:"/docs/0.64/viewtoken"}},k={},b=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5c5e\u6027\u4e0e\u503c",id:"\u5c5e\u6027\u4e0e\u503c",level:2},{value:"<code>bottom</code>",id:"bottom",level:3},{value:"<code>left</code>",id:"left",level:3},{value:"<code>right</code>",id:"right",level:3},{value:"<code>top</code>",id:"top",level:3},{value:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",level:2}],N={toc:b};function h(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=c(c({},N),d),l(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Rect")," accepts numeric pixel values to describe how far to extend a rectangular area. These values are added to the original area's size to expand it."),(0,r.kt)("h2",c({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js"}),"{\n    bottom: 20,\n    left: null,\n    right: undefined,\n    top: 50\n}\n")),(0,r.kt)("h2",c({},{id:"\u5c5e\u6027\u4e0e\u503c"}),"\u5c5e\u6027\u4e0e\u503c"),(0,r.kt)("h3",c({},{id:"bottom"}),(0,r.kt)("inlineCode",{parentName:"h3"},"bottom")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"number, ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,r.kt)("h3",c({},{id:"left"}),(0,r.kt)("inlineCode",{parentName:"h3"},"left")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"number, ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,r.kt)("h3",c({},{id:"right"}),(0,r.kt)("inlineCode",{parentName:"h3"},"right")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"number, ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,r.kt)("h3",c({},{id:"top"}),(0,r.kt)("inlineCode",{parentName:"h3"},"top")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"number, ",(0,r.kt)("inlineCode",{parentName:"td"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"No")))),(0,r.kt)("h2",c({},{id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"}),"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"image"}),(0,r.kt)("inlineCode",{parentName:"a"},"Image"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"pressable"}),(0,r.kt)("inlineCode",{parentName:"a"},"Pressable"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"text"}),(0,r.kt)("inlineCode",{parentName:"a"},"Text"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"touchablewithoutfeedback"}),(0,r.kt)("inlineCode",{parentName:"a"},"TouchableWithoutFeedback")))))}h.isMDXComponent=!0}}]);