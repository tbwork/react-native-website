"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[34764],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=l,k=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return a?n.createElement(k,o(o({ref:t},p),{},{components:a})):n.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:function(e,t,a){var n=a(63445);const l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=l?"ios":"android",i=l?"macos":r?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(27378),l=a(38944),r="tabItem_wHwb",o=Object.defineProperty,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function s({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))u.call(t,a)&&p(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,l.Z)(r,a)},{hidden:t}),e)}},27789:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(27378),l=a(38944),r=a(14185),o=a(27886),i=a(77184),u=a(12112),c="tabList_J5MA",p="tabItem_l0OV",s=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&h(e,a,t[a]);if(k)for(var a of k(t))f.call(t,a)&&h(e,a,t[a]);return e};function v(e){var t,a;const{lazy:r,block:s,defaultValue:k,values:b,groupId:f,className:h}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=b?b:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),A=(0,o.l)(N,((e,t)=>e.value===t.value));if(A.length>0)throw new Error(`Docusaurus error: Duplicate values "${A.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===k?k:null!=(a=null!=k?k:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?a:v[0].props.value;if(null!==g&&!N.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:C,setTabGroupChoices:w}=(0,i.U)(),[D,x]=(0,n.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=C[f];null!=e&&e!==D&&N.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=O.indexOf(t),n=N[a].value;n!==D&&(T(t),x(n),null!=f&&w(f,String(n)))},B=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;n=null!=(t=O[a])?t:O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},h)},N.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=y({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:e=>O.push(e),onKeyDown:B,onFocus:E,onClick:E},a),o={className:(0,l.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":D===e})},d(r,m(o))),null!=t?t:e);var r,o}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function N(e){const t=(0,r.Z)();return n.createElement(v,y({key:String(t)},e))}},47137:function(e,t,a){a.r(t),a.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return A},frontMatter:function(){return b},metadata:function(){return h},toc:function(){return v}});var n=a(35318),l=a(27789),r=a(86386),o=a(11674),i=Object.defineProperty,u=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&m(e,a,t[a]);return e};const b={id:"touchableopacity",title:"TouchableOpacity"},f=void 0,h={unversionedId:"touchableopacity",id:"version-0.68/touchableopacity",title:"TouchableOpacity",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/versioned_docs/version-0.68/touchableopacity.md",sourceDirName:".",slug:"/touchableopacity",permalink:"/docs/0.68/touchableopacity",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/touchableopacity.md",tags:[],version:"0.68",frontMatter:{id:"touchableopacity",title:"TouchableOpacity"},sidebar:"\u7ec4\u4ef6",previous:{title:"TouchableHighlight",permalink:"/docs/0.68/touchablehighlight"},next:{title:"TouchableWithoutFeedback",permalink:"/docs/0.68/touchablewithoutfeedback"}},y={},v=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>style</code>",id:"style",level:3},{value:"<code>activeOpacity</code>",id:"activeopacity",level:3},{value:"<code>tvParallaxProperties</code>",id:"tvparallaxproperties",level:3},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",level:3},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",level:3},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",level:3},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",level:3},{value:"<code>nextFocusRight</code>",id:"nextfocusright",level:3},{value:"<code>nextFocusUp</code>",id:"nextfocusup",level:3}],N={toc:v};function A(e){var t,a=e,{components:i}=a,m=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=k(k({},N),m),u(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/0.68/pressable"}),"Pressable")," API.")),(0,n.kt)("p",null,"\u672c\u7ec4\u4ef6\u7528\u4e8e\u5c01\u88c5\u89c6\u56fe\uff0c\u4f7f\u5176\u53ef\u4ee5\u6b63\u786e\u54cd\u5e94\u89e6\u6478\u64cd\u4f5c\u3002\u5f53\u6309\u4e0b\u7684\u65f6\u5019\uff0c\u5c01\u88c5\u7684\u89c6\u56fe\u7684\u4e0d\u900f\u660e\u5ea6\u4f1a\u964d\u4f4e\u3002"),(0,n.kt)("p",null,"\u4e0d\u900f\u660e\u5ea6\u7684\u53d8\u5316\u662f\u901a\u8fc7\u628a\u5b50\u5143\u7d20\u5c01\u88c5\u5728\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"Animated.View"),"\u4e2d\u6765\u5b9e\u73b0\u7684\uff0c\u8fd9\u4e2a\u52a8\u753b\u89c6\u56fe\u4f1a\u88ab\u6dfb\u52a0\u5230\u89c6\u56fe\u5c42\u7ea7\u4e2d\uff0c\u5c11\u6570\u60c5\u51b5\u4e0b\u6709\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u5e03\u5c40\u3002\uff08\u8bd1\u6ce8\uff1a\u6b64\u7ec4\u4ef6\u4e0e TouchableHighlight \u7684\u533a\u522b\u5728\u4e8e\u5e76\u6ca1\u6709\u989d\u5916\u7684\u989c\u8272\u53d8\u5316\uff0c\u66f4\u9002\u4e8e\u4e00\u822c\u573a\u666f\u3002\uff09"),(0,n.kt)("h2",k({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)(l.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",k({},{className:"snack-player","data-snack-name":"TouchableOpacity Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%20setCount(prevCount%20%3D%3E%20prevCount%20%2B%201)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7BonPress%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPress%20Here%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(r.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",k({},{className:"snack-player","data-snack-name":"TouchableOpacity Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20constructor(props)%20%7B%0A%20%20%20%20super(props)%3B%0A%20%20%20%20this.state%20%3D%20%7B%20count%3A%200%20%7D%3B%0A%20%20%7D%0A%0A%20%20onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20count%3A%20this.state.count%20%2B%201%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20count%20%7D%20%3D%20this.state%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis.onPress%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EPress%20Here%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("hr",null),(0,n.kt)("h1",k({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",k({},{id:"props"}),"Props"),(0,n.kt)("p",null,"Inherits ",(0,n.kt)("a",k({parentName:"p"},{href:"/docs/0.68/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props"),"."),(0,n.kt)("h3",k({},{id:"style"}),(0,n.kt)("inlineCode",{parentName:"h3"},"style")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"View.style"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"activeopacity"}),(0,n.kt)("inlineCode",{parentName:"h3"},"activeOpacity")),(0,n.kt)("p",null,"\u6307\u5b9a\u5c01\u88c5\u7684\u89c6\u56fe\u5728\u88ab\u89e6\u6478\u64cd\u4f5c\u6fc0\u6d3b\u65f6\u4ee5\u591a\u5c11\u4e0d\u900f\u660e\u5ea6\u663e\u793a\uff080 \u5230 1 \u4e4b\u95f4\uff09\u3002\u9ed8\u8ba4\u503c\u4e3a 0.2\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"tvparallaxproperties"}),(0,n.kt)("inlineCode",{parentName:"h3"},"tvParallaxProperties")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(Apple TV only)")," Object with properties to control Apple TV parallax effects."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"enabled"),": If ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", parallax effects are enabled. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shiftDistanceX"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"2.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"shiftDistanceY"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"2.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tiltAngle"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.05"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"magnification"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pressMagnification"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"1.0"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pressDuration"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.3"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pressDelay"),": Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"0.0"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"hastvpreferredfocus"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(Apple TV only)")," TV preferred focus (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"nextfocusdown"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusDown")),(0,n.kt)("p",null,"TV next focus down (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"nextfocusforward"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusForward")),(0,n.kt)("p",null,"TV next focus forward (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"nextfocusleft"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusLeft")),(0,n.kt)("p",null,"TV next focus left (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"nextfocusright"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusRight")),(0,n.kt)("p",null,"TV next focus right (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))),(0,n.kt)("hr",null),(0,n.kt)("h3",k({},{id:"nextfocusup"}),(0,n.kt)("inlineCode",{parentName:"h3"},"nextFocusUp")),(0,n.kt)("p",null,"TV next focus up (see documentation for the View component)."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"Android")))))}A.isMDXComponent=!0}}]);