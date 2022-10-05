"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[8666],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},11674:function(e,t,n){var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(27378),r=n(38944),i="tabItem_wHwb",l=Object.defineProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function u({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&p(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},27789:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(27378),r=n(38944),i=n(14185),l=n(27886),o=n(77184),s=n(12112),d="tabList_J5MA",p="tabItem_l0OV",u=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&v(e,n,t[n]);if(k)for(var n of k(t))h.call(t,n)&&v(e,n,t[n]);return e};function g(e){var t,n;const{lazy:i,block:u,defaultValue:k,values:b,groupId:h,className:v}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=b?b:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,l.l)(w,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===k?k:null!=(n=null!=k?k:null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)?n:g[0].props.value;if(null!==N&&!w.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:A}=(0,o.U)(),[C,B]=(0,a.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=h){const e=D[h];null!=e&&e!==C&&w.some((t=>t.value===e))&&B(e)}const x=e=>{const t=e.currentTarget,n=O.indexOf(t),a=w[n].value;a!==C&&(E(t),B(a),null!=h&&A(h,String(a)))},j=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;a=null!=(t=O[n])?t:O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=null!=(n=O[t])?n:O[O.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},v)},w.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(i=f({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>O.push(e),onKeyDown:j,onFocus:x,onClick:x},n),l={className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":C===e})},c(i,m(l))),null!=t?t:e);var i,l}))),i?(0,a.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function w(e){const t=(0,i.Z)();return a.createElement(g,f({key:String(t)},e))}},51:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return g}});var a=n(35318),r=n(27789),i=n(86386),l=n(11674),o=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))c.call(t,n)&&m(e,n,t[n]);return e};const b={id:"dimensions",title:"Dimensions"},h=void 0,v={unversionedId:"dimensions",id:"version-0.65/dimensions",title:"Dimensions",description:"\u672c\u6a21\u5757\u7528\u4e8e\u83b7\u53d6\u8bbe\u5907\u5c4f\u5e55\u7684\u5bbd\u9ad8\u3002",source:"@site/versioned_docs/version-0.65/dimensions.md",sourceDirName:".",slug:"/dimensions",permalink:"/docs/0.65/dimensions",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/dimensions.md",tags:[],version:"0.65",frontMatter:{id:"dimensions",title:"Dimensions"},sidebar:"version-0.65/api",previous:{title:"DevSettings",permalink:"/docs/0.65/devsettings"},next:{title:"Easing",permalink:"/docs/0.65/easing"}},f={},g=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>get()</code>",id:"get",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3},{value:"<code>set()</code>",id:"set",level:3},{value:"Type Definitions",id:"type-definitions",level:2},{value:"DimensionsValue",id:"dimensionsvalue",level:3},{value:"DisplayMetrics",id:"displaymetrics",level:3}],w={toc:g};function y(e){var t,n=e,{components:o}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},w),m),s(t,d({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u672c\u6a21\u5757\u7528\u4e8e\u83b7\u53d6\u8bbe\u5907\u5c4f\u5e55\u7684\u5bbd\u9ad8\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e React \u51fd\u6570\u7ec4\u4ef6\uff0c\u6211\u4eec\u66f4\u63a8\u8350\u4f7f\u7528",(0,a.kt)("a",k({parentName:"p"},{href:"usewindowdimensions"}),(0,a.kt)("inlineCode",{parentName:"a"},"useWindowDimensions")),"\u8fd9\u4e2a Hook API\u3002\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Dimensions")," \u4e0d\u540c\uff0c\u5b83\u4f1a\u5728\u5c4f\u5e55\u5c3a\u5bf8\u53d8\u5316\u65f6\u81ea\u52a8\u66f4\u65b0\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"import { Dimensions } from 'react-native';\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u6cd5\u6765\u83b7\u53d6\u8bbe\u5907\u7684\u5bbd\u9ad8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"const windowWidth = Dimensions.get('window').width;\nconst windowHeight = Dimensions.get('window').height;\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5c3d\u7ba1\u5c3a\u5bf8\u4fe1\u606f\u7acb\u5373\u5c31\u53ef\u7528\uff0c\u4f46\u5b83\u53ef\u80fd\u4f1a\u5728\u5c06\u6765\u88ab\u4fee\u6539\uff08\u8b6c\u5982\u8bbe\u5907\u7684\u65b9\u5411\u6539\u53d8\uff09\uff0c\u6240\u4ee5\u57fa\u4e8e\u8fd9\u4e9b\u5e38\u91cf\u7684\u6e32\u67d3\u903b\u8f91\u548c\u6837\u5f0f\u5e94\u5f53\u6bcf\u6b21 render \u4e4b\u540e\u90fd\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u5c06\u5bf9\u5e94\u7684\u503c\u4fdd\u5b58\u4e0b\u6765\u3002\uff08\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u5185\u8054\u7684\u6837\u5f0f\u800c\u4e0d\u662f\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"StyleSheet"),"\u4e2d\u4fdd\u5b58\u76f8\u5e94\u7684\u5c3a\u5bf8\uff09\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u8981\u8003\u8651\u53ef\u6298\u53e0\u7684\u8bbe\u5907\uff0c\u6216\u8005\u5176\u4ed6\u5c4f\u5e55\u5c3a\u5bf8\u53ef\u53d8\u7684\u8bbe\u5907\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u4f8b\u5b50\u4e2d\u6240\u4f7f\u7528\u7684\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u6216\u662f",(0,a.kt)("a",k({parentName:"p"},{href:"usewindowdimensions"}),(0,a.kt)("inlineCode",{parentName:"a"},"useWindowDimensions")),"\uff1a"),(0,a.kt)("h2",k({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:l.Z.defaultSyntax,values:l.Z.syntax,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",k({},{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bdimensions%2C%20setDimensions%5D%20%3D%20useState(%7B%20window%2C%20screen%20%7D)%3B%0A%0A%20%20const%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20setDimensions(%7B%20window%2C%20screen%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20Dimensions.addEventListener(%22change%22%2C%20onChange)%3B%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Dimensions.removeEventListener(%22change%22%2C%20onChange)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(i.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",k({},{className:"snack-player","data-snack-name":"Dimensions","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Text%2C%20Dimensions%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20window%20%3D%20Dimensions.get(%22window%22)%3B%0Aconst%20screen%20%3D%20Dimensions.get(%22screen%22)%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20dimensions%3A%20%7B%0A%20%20%20%20%20%20window%2C%0A%20%20%20%20%20%20screen%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20onChange%20%3D%20(%7B%20window%2C%20screen%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20dimensions%3A%20%7B%20window%2C%20screen%20%7D%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20Dimensions.addEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20Dimensions.removeEventListener(%22change%22%2C%20this.onChange)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20dimensions%20%7D%20%3D%20this.state%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Window%20Dimensions%3A%20height%20-%20%24%7Bdimensions.window.height%7D%2C%20width%20-%20%24%7Bdimensions.window.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%3E%7B%60Screen%20Dimensions%3A%20height%20-%20%24%7Bdimensions.screen.height%7D%2C%20width%20-%20%24%7Bdimensions.screen.width%7D%60%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",k({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",k({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",k({},{id:"addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(type, handler)\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002\u76ee\u524d\u652f\u6301\u7684\u4e8b\u4ef6\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"change"),": Fires when a property within the ",(0,a.kt)("inlineCode",{parentName:"li"},"Dimensions")," object changes. The argument to the event handler is an object with ",(0,a.kt)("inlineCode",{parentName:"li"},"window")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"screen")," properties whose values are the same as the return values of ",(0,a.kt)("inlineCode",{parentName:"li"},"Dimensions.get('window')")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Dimensions.get('screen')"),", respectively.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"window")," - Size of the visible Application window"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"screen")," - Size of the device's screen")))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"get"}),(0,a.kt)("inlineCode",{parentName:"h3"},"get()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static get(dim)\n")),(0,a.kt)("p",null,"\u521d\u59cb\u7684\u5c3a\u5bf8\u4fe1\u606f\u5e94\u8be5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"runApplication"),"\u4e4b\u540e\u88ab\u6267\u884c\uff0c\u8fd9\u6837\u624d\u53ef\u4ee5\u5728\u4efb\u4f55\u5176\u4ed6\u7684 require \u88ab\u6267\u884c\u4e4b\u524d\u4f7f\u7528\u3002\u4e0d\u8fc7\u5728\u7a0d\u540e\u53ef\u80fd\u8fd8\u4f1a\u66f4\u65b0\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"const {height, width} = Dimensions.get('window');")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"dim ",(0,a.kt)("div",{className:"label basic required two-lines"},"Required")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Name of dimension as defined when calling ",(0,a.kt)("inlineCode",{parentName:"td"},"set"),". Returns value for the dimension.")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For Android the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," dimension will exclude the size used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"status bar")," (if not translucent) and ",(0,a.kt)("inlineCode",{parentName:"p"},"bottom navigation bar"))),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"removeeventlistener"}),(0,a.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(type, handler)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Deprecated.")," Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"remove()")," method on the event subscription returned by ",(0,a.kt)("a",k({parentName:"p"},{href:"#addeventlistener"}),(0,a.kt)("inlineCode",{parentName:"a"},"addEventListener()")),".")),(0,a.kt)("hr",null),(0,a.kt)("h3",k({},{id:"set"}),(0,a.kt)("inlineCode",{parentName:"h3"},"set()")),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{className:"language-jsx"}),"static set(dims)\n")),(0,a.kt)("p",null,"This should only be called from native code by sending the ",(0,a.kt)("inlineCode",{parentName:"p"},"didUpdateDimensions")," event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"dims ",(0,a.kt)("div",{className:"label basic required"},"Required")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"String-keyed object of dimensions to set.")))),(0,a.kt)("hr",null),(0,a.kt)("h2",k({},{id:"type-definitions"}),"Type Definitions"),(0,a.kt)("h3",k({},{id:"dimensionsvalue"}),"DimensionsValue"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Properties:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"window"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"dimensions#displaymetrics"}),"DisplayMetrics")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Size of the visible Application window.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"screen"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("a",k({parentName:"td"},{href:"dimensions#displaymetrics"}),"DisplayMetrics")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"Size of the device's screen.")))),(0,a.kt)("h3",k({},{id:"displaymetrics"}),"DisplayMetrics"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"object")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Properties:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Name"),(0,a.kt)("th",k({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"width"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"height"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"scale"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:null}),"fontScale"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"number")))))}y.isMDXComponent=!0}}]);