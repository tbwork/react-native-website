"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4729],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(v,o(o({ref:t},u),{},{components:a})):n.createElement(v,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(27378),r=a(38944);const l="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function p({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&u(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},27789:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(27378),r=a(38944),l=a(14185),o=a(27886),i=a(77184),s=a(12112);const c="tabList_J5MA",u="tabItem_l0OV";var p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,C=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&k(e,a,t[a]);if(v)for(var a of v(t))f.call(t,a)&&k(e,a,t[a]);return e};function y(e){var t,a;const{lazy:l,block:p,defaultValue:v,values:b,groupId:f,className:k}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=b?b:y.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),w=(0,o.l)(g,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===v?v:null!=(a=null!=v?v:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:x}=(0,i.U)(),[D,E]=(0,n.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=f){const e=O[f];null!=e&&e!==D&&g.some((t=>t.value===e))&&E(e)}const A=e=>{const t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==D&&(N(t),E(n),null!=f&&x(f,String(n)))},j=e=>{var t,a;let n=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;n=null!=(t=T[a])?t:T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=null!=(a=T[t])?a:T[T.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},k)},g.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=C({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:e=>T.push(e),onKeyDown:j,onClick:A},a),o={className:(0,r.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":D===e})},d(l,m(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(y.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function g(e){const t=(0,l.Z)();return n.createElement(y,C({key:String(t)},e))}},87446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>C,contentTitle:()=>f,default:()=>w,frontMatter:()=>b,metadata:()=>k,toc:()=>y});var n=a(35318),r=a(27789),l=a(86386),o=a(11674),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&m(e,a,t[a]);return e};const b={id:"getting-started",title:"\u7b80\u4ecb"},f=void 0,k={unversionedId:"getting-started",id:"version-0.71/getting-started",title:"\u7b80\u4ecb",description:"\u6b22\u8fce\u5f00\u542f React Native \u7684\u65c5\u7a0b\uff01\u5982\u679c\u4f60\u5728\u627e\u5982\u4f55\u642d\u5efa\u73af\u5883\u7684\u6587\u6863\uff0c\u8bf7\u79fb\u6b65\u642d\u5efa\u5f00\u53d1\u73af\u5883\u3002 \u7ee7\u7eed\u5f80\u4e0b\u9605\u8bfb\u53ef\u4e86\u89e3\u5173\u4e8e\u6587\u6863\u7ed3\u6784\u3001\u539f\u751f\u7ec4\u4ef6\u3001React\u7b49\u76f8\u5173\u7684\u4e00\u4e9b\u4ecb\u7ecd\u3002",source:"@site/versioned_docs/version-0.71/introduction.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/introduction.md",tags:[],version:"0.71",frontMatter:{id:"getting-started",title:"\u7b80\u4ecb"},sidebar:"docs",next:{title:"\u6838\u5fc3\u7ec4\u4ef6\u4e0e\u539f\u751f\u7ec4\u4ef6",permalink:"/docs/intro-react-native-components"}},C={},y=[{value:"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863",id:"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863",level:2},{value:"\u9884\u5907\u77e5\u8bc6",id:"\u9884\u5907\u77e5\u8bc6",level:2},{value:"\u4ea4\u4e92\u793a\u4f8b",id:"\u4ea4\u4e92\u793a\u4f8b",level:2},{value:"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e Class \u7ec4\u4ef6",id:"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e-class-\u7ec4\u4ef6",level:2},{value:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a",level:2},{value:"\u7279\u6b8a\u683c\u5f0f",id:"\u7279\u6b8a\u683c\u5f0f",level:2}],g={toc:y};function w(e){var t,a=e,{components:i}=a,m=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=v(v({},g),m),s(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("div",{className:"content-banner"},(0,n.kt)("p",null,"\u6b22\u8fce\u5f00\u542f React Native \u7684\u65c5\u7a0b\uff01\u5982\u679c\u4f60\u5728\u627e\u5982\u4f55\u642d\u5efa\u73af\u5883\u7684\u6587\u6863\uff0c\u8bf7\u79fb\u6b65",(0,n.kt)("a",{href:"environment-setup"},"\u642d\u5efa\u5f00\u53d1\u73af\u5883"),"\u3002 \u7ee7\u7eed\u5f80\u4e0b\u9605\u8bfb\u53ef\u4e86\u89e3\u5173\u4e8e\u6587\u6863\u7ed3\u6784\u3001\u539f\u751f\u7ec4\u4ef6\u3001React\u7b49\u76f8\u5173\u7684\u4e00\u4e9b\u4ecb\u7ecd\u3002"),(0,n.kt)("img",{className:"content-banner-img",src:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/assets/p_android-ios-devices.svg",alt:" "})),(0,n.kt)("p",null,"\u8bb8\u591a\u4e0d\u540c\u7c7b\u578b\u7684\u4eba\u90fd\u5728\u4f7f\u7528 React Native\uff1a\u4ece\u9ad8\u7ea7 iOS \u5f00\u53d1\u4eba\u5458\u5230 React \u521d\u5b66\u8005\uff0c\u518d\u5230\u804c\u4e1a\u751f\u6daf\u4e2d\u7b2c\u4e00\u6b21\u5f00\u59cb\u7f16\u7a0b\u7684\u4eba\u3002\u8fd9\u4e9b\u6587\u6863\u662f\u4e3a\u6240\u6709\u5b66\u4e60\u8005\u7f16\u5199\u7684\uff0c\u65e0\u8bba\u4ed6\u4eec\u7684\u7ecf\u9a8c\u6c34\u5e73\u6216\u80cc\u666f\u5982\u4f55\u3002"),(0,n.kt)("h2",v({},{id:"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863"}),"\u5982\u4f55\u4f7f\u7528\u672c\u7ad9\u6587\u6863"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u8fd9\u91cc\u5f00\u59cb\uff0c\u50cf\u770b\u4e66\u4e00\u6837\u7ebf\u6027\u9605\u8bfb\u8fd9\u4e9b\u6587\u6863\uff1b\u4e5f\u53ef\u4ee5\u9605\u8bfb\u4f60\u9700\u8981\u7684\u7279\u5b9a\u90e8\u5206\u3002\u5df2\u7ecf\u719f\u6089 React \u4e86\u5417\uff1f\u4f60\u53ef\u4ee5\u8df3\u8fc7",(0,n.kt)("a",v({parentName:"p"},{href:"intro-react"}),"\u8be5\u90e8\u5206"),"--\u6216\u8005\u9605\u8bfb\u5b83\u6765\u8fdb\u884c\u7b80\u5355\u7684\u590d\u4e60\u3002"),(0,n.kt)("h2",v({},{id:"\u9884\u5907\u77e5\u8bc6"}),"\u9884\u5907\u77e5\u8bc6"),(0,n.kt)("p",null,"\u8981\u4f7f\u7528 React Native\uff0c\u4f60\u9700\u8981\u5bf9 JavaScript \u57fa\u7840\u77e5\u8bc6\u6709\u6240\u4e86\u89e3\u3002\u5982\u679c\u4f60\u662f JavaScript \u65b0\u624b\u6216\u9700\u8981\u590d\u4e60\uff0c\u4f60\u53ef\u4ee5\u5728 MDN \u4e0a",(0,n.kt)("a",v({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}),"\u6df1\u5165\u5b66\u4e60"),"\u6216",(0,n.kt)("a",v({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"}),"\u590d\u4e60\u4e00\u4e0b"),"\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u867d\u7136\u6211\u4eec\u5c3d\u6700\u5927\u52aa\u529b\u5047\u8bbe\u8bfb\u8005\u5728\u8fd9\u4e4b\u524d\u6ca1\u6709\u592a\u591a React\u3001Android \u6216 iOS \u5f00\u53d1\u7684\u77e5\u8bc6\uff0c\u4f46\u5bf9\u4e8e\u6709\u62b1\u8d1f\u7684 React Native \u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u8fd9\u4e9b\u90fd\u662f\u6709\u4ef7\u503c\u7684\u5b66\u4e60\u4e3b\u9898\u3002\u6211\u4eec\u4f1a\u5c3d\u53ef\u80fd\u5730\u63d0\u4f9b\u6df1\u5165\u4e86\u89e3\u7684\u76f8\u5173\u6587\u7ae0\u94fe\u63a5\u3002")),(0,n.kt)("h2",v({},{id:"\u4ea4\u4e92\u793a\u4f8b"}),"\u4ea4\u4e92\u793a\u4f8b"),(0,n.kt)("p",null,"\u6587\u6863\u4e2d\u65f6\u5e38\u4f1a\u9644\u6709\u4e00\u4e9b\u53ef\u4ee5\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u7684\u4ea4\u4e92\u793a\u4f8b\uff0c\u4f8b\u5982\uff1a"),(0,n.kt)("div",v({},{className:"snack-player","data-snack-name":"Hello World","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20YourApp%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%20flex%3A%201%2C%20justifyContent%3A%20%5C%22center%5C%22%2C%20alignItems%3A%20%5C%22center%5C%22%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CText%3E%5Cn%20%20%20%20%20%20%20%20Try%20editing%20me!%20%F0%9F%8E%89%5Cn%20%20%20%20%20%20%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnexport%20default%20YourApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b\u4f7f\u7528\u4e86\u4e00\u4e2a\u53eb\u505a Snack Player \u7684\u5de5\u5177\uff08\u6211\u4eec\u4e5f\u4f1a\u7528\u201c\u6c99\u76d2\u73af\u5883\u201d\u4ee3\u6307\uff09\u3002\u8fd9\u662f\u7531 Expo \u516c\u53f8\u63d0\u4f9b\u7684\u4e13\u95e8\u7528\u4e8e\u6f14\u793a\u3001\u5b66\u4e60 React Native \u7684\u4ea4\u4e92\u5de5\u5177\u3002\u5b83\u96c6\u6210\u4e86 react-native-web \u517c\u5bb9\u5c42\uff0c\u4f1a\u5c3d\u53ef\u80fd\u628a React Native \u7684\u4ee3\u7801\u8f6c\u5316\u4e3a\u517c\u5bb9\u7684\u7f51\u9875\u6765\u8fd0\u884c\uff08\u5f53\u7136\u4f1a\u6709\u65e0\u6cd5\u8f6c\u5316\u7684\u60c5\u51b5\uff0c\u90a3\u79cd\u60c5\u51b5\u4e0b\u5219\u5fc5\u987b\u4f7f\u7528\u6a21\u62df\u5668\u6216\u8005\u624b\u673a\u6765\u8fd0\u884c\uff09\u3002\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u548c\u8fd0\u884c\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5728\u91cc\u9762\u76f4\u63a5\u7ec3\u4e60\u3002\u8bd5\u7740\u6539\u4e0b\u4e0a\u9762\u793a\u4f8b\u4e2d\u7684\u6587\u5b57\u770b\u770b\u6548\u679c\u5427\uff01"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6c99\u76d2\u73af\u5883\u901a\u5e38\u53ea\u7528\u4e8e\u7b80\u5355\u7684\u6f14\u793a\u3001\u5b66\u4e60\u9879\u76ee\uff0c\u5b83\u65e0\u6cd5\u6dfb\u52a0\u65b0\u7684\u539f\u751f\u6a21\u5757\u3002\u6240\u4ee5\u5bf9\u4e8e\u6b63\u5f0f\u7684\u9879\u76ee\uff0c\u6211\u4eec\u5efa\u8bae",(0,n.kt)("a",v({parentName:"p"},{href:"environment-setup"}),"\u642d\u5efa\u5b8c\u6574\u7684\u539f\u751f\u73af\u5883")," \u3002\u4e0a\u9762\u7684\u4ee3\u7801\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u590d\u5236\u7c98\u8d34\u5230\u5b8c\u6574\u9879\u76ee\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"App.js"),"\u6587\u4ef6\u4e2d\u6765\u8fd0\u884c\u3002")),(0,n.kt)("h2",v({},{id:"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e-class-\u7ec4\u4ef6"}),"\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e0e Class \u7ec4\u4ef6"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 React \u4e2d\u4f7f\u7528\u51fd\u6570\u5f0f\u7ec4\u4ef6\u6216 Class \u7ec4\u4ef6\u3002\u6700\u5f00\u59cb\u53ea\u6709 Class \u7ec4\u4ef6\u80fd\u591f\u4f7f\u7528 state \uff0c\u4f46\u81ea\u4ece\u6709\u4e86 React Hooks API, \u4f60\u53ef\u4ee5\u4e3a\u51fd\u6570\u7ec4\u4ef6\u6dfb\u52a0 state \u548c\u5f88\u591a\u5176\u5b83\u7684\u529f\u80fd\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",v({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/hooks-intro.html"}),"Hooks API \u662f React Native 0.59 \u63d0\u4f9b\u7684\u65b0\u7279\u6027"),", Hooks \u662f\u4e00\u79cd\u9762\u5411\u672a\u6765\u7684\u7f16\u5199 React \u7ec4\u4ef6\u7684\u65b9\u5f0f\uff0c\u56e0\u6b64\u6211\u4eec\u5728\u672c\u6587\u6863\u4e2d\u4f18\u5148\u4f7f\u7528\u51fd\u6570\u7ec4\u4ef6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u70b9\u51fb\u201cClass \u7ec4\u4ef6\u201d\u5207\u6362\u5230 Class \u7ec4\u4ef6\u4ee3\u7801\uff1a"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",v({},{className:"snack-player","data-snack-name":"Hello World Function Component","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20HelloWorldApp%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%20%20%20%20%20%20alignItems%3A%20'center'%5Cn%20%20%20%20%20%20%7D%7D%3E%5Cn%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnexport%20default%20HelloWorldApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",v({},{className:"snack-player","data-snack-name":"Hello World Class Component","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%5Cnimport%20%7B%20Text%2C%20View%20%7D%20from%20'react-native'%3B%5Cn%5Cnclass%20HelloWorldApp%20extends%20Component%20%7B%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20%20%20%20%20%20%20alignItems%3A%20%5C%22center%5C%22%5Cn%20%20%20%20%20%20%20%20%7D%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%3EHello%2C%20world!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnexport%20default%20HelloWorldApp%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h2",v({},{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"}),"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"),(0,n.kt)("p",null,"\u5b66\u4e60 React Native \u7684\u5f00\u53d1\u8005\u62e5\u6709\u4e0d\u540c\u7684\u5f00\u53d1\u80cc\u666f\uff0c\u4f60\u6216\u8bb8\u6709\u5f88\u591a\u6280\u672f\u7ecf\u9a8c\uff0c\u5305\u62ec Android\u3001iOS \u7b49\u7b49\uff0c\u6211\u4eec\u5728\u7f16\u5199\u6587\u6863\u7684\u65f6\u5019\u52aa\u529b\u7167\u987e\u5230\u5177\u6709\u4e0d\u540c\u77e5\u8bc6\u80cc\u666f\u7684\u5f00\u53d1\u8005\uff0c\u6709\u4e9b\u65f6\u5019\u6211\u4eec\u4f1a\u4e13\u95e8\u9488\u5bf9\u7279\u5b9a\u7684\u5e73\u53f0\u63d0\u4f9b\u7279\u5b9a\u7684\u8bb2\u89e3:"),(0,n.kt)(r.Z,{groupId:"guide",defaultValue:"web",values:o.Z.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"web",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Web \u5f00\u53d1\u8005\u770b\u5230\u7684\u5185\u5bb9\u3002"))),(0,n.kt)(l.Z,{value:"android",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Android \u5f00\u53d1\u8005\u770b\u5230\u7684\u5185\u5bb9\u3002"))),(0,n.kt)(l.Z,{value:"ios",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"iOS \u5f00\u53d1\u8005\u770b\u5230\u7684\u5185\u5bb9\u3002")))),(0,n.kt)("h2",v({},{id:"\u7279\u6b8a\u683c\u5f0f"}),"\u7279\u6b8a\u683c\u5f0f"),(0,n.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u7c97\u4f53\u5b57\u6765\u63cf\u8ff0\u83dc\u5355\u8def\u5f84\uff0c\u4f7f\u7528\u201c>\u201d\u7b26\u53f7\u8fde\u63a5\u5b50\u83dc\u5355\uff0c\u6bd4\u5982\uff1a ",(0,n.kt)("strong",{parentName:"p"},"Android Studio > Preferences")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u5f00\u59cb\u5b66\u4e60 React Native \u7684\u57fa\u7840\u77e5\u8bc6 ",(0,n.kt)("a",v({parentName:"p"},{href:"/docs/intro-react-native-components"}),"\u6838\u5fc3\u7ec4\u4ef6\u4e0e\u539f\u751f\u7ec4\u4ef6"),"."))}w.isMDXComponent=!0}}]);