"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[98811],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return m},metadata:function(){return k},toc:function(){return f}});var a=n(35318),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&u(e,n,t[n]);return e};const m={id:"viewtoken",title:"ViewToken \u5bf9\u8c61"},s=void 0,k={unversionedId:"viewtoken",id:"version-0.69/viewtoken",title:"ViewToken \u5bf9\u8c61",description:"ViewToken object is returned as one of properties in the onViewableItemsChanged callback, for example in FlatList component. It is exported by ViewabilityHelper.js.",source:"@site/versioned_docs/version-0.69/viewtoken.md",sourceDirName:".",slug:"/viewtoken",permalink:"/docs/0.69/viewtoken",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/viewtoken.md",tags:[],version:"0.69",frontMatter:{id:"viewtoken",title:"ViewToken \u5bf9\u8c61"},sidebar:"\u7ec4\u4ef6",previous:{title:"\u77e9\u5f62\u533a\u57df\u5bf9\u8c61",permalink:"/docs/0.69/rect"}},b={},f=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5c5e\u6027\u4e0e\u503c",id:"\u5c5e\u6027\u4e0e\u503c",level:2},{value:"<code>index</code>",id:"index",level:3},{value:"<code>isViewable</code>",id:"isviewable",level:3},{value:"<code>item</code>",id:"item",level:3},{value:"<code>key</code>",id:"key",level:3},{value:"<code>section</code>",id:"section",level:3},{value:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",level:2}],y={toc:f};function v(e){var t,n=e,{components:r}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},y),u),i(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ViewToken")," object is returned as one of properties in the ",(0,a.kt)("inlineCode",{parentName:"p"},"onViewableItemsChanged")," callback, for example in ",(0,a.kt)("a",d({parentName:"p"},{href:"flatlist"}),"FlatList")," component. It is exported by ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Lists/ViewabilityHelper.js"}),(0,a.kt)("inlineCode",{parentName:"a"},"ViewabilityHelper.js")),"."),(0,a.kt)("h2",d({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),'{\n  item: { key: "key-12" },\n  key: "key-12",\n  index: 11,\n  isViewable: true\n}\n')),(0,a.kt)("h2",d({},{id:"\u5c5e\u6027\u4e0e\u503c"}),"\u5c5e\u6027\u4e0e\u503c"),(0,a.kt)("h3",d({},{id:"index"}),(0,a.kt)("inlineCode",{parentName:"h3"},"index")),(0,a.kt)("p",null,"Unique numeric identifier assigned to the data element."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Yes")))),(0,a.kt)("h3",d({},{id:"isviewable"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isViewable")),(0,a.kt)("p",null,"Specifies if at least some part of list element is visible in the viewport."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",d({},{id:"item"}),(0,a.kt)("inlineCode",{parentName:"h3"},"item")),(0,a.kt)("p",null,"Item data"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"any"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",d({},{id:"key"}),(0,a.kt)("inlineCode",{parentName:"h3"},"key")),(0,a.kt)("p",null,"Key identifier assigned of the data element extracted to the top level."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("h3",d({},{id:"section"}),(0,a.kt)("inlineCode",{parentName:"h3"},"section")),(0,a.kt)("p",null,"Item section data when used with ",(0,a.kt)("inlineCode",{parentName:"p"},"SectionList"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"any"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Yes")))),(0,a.kt)("h2",d({},{id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"}),"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"flatlist"}),(0,a.kt)("inlineCode",{parentName:"a"},"FlatList"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"sectionlist"}),(0,a.kt)("inlineCode",{parentName:"a"},"SectionList"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"virtualizedlist"}),(0,a.kt)("inlineCode",{parentName:"a"},"VirtualizedList")))))}v.isMDXComponent=!0}}]);