"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[82702],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),A=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=A(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=A(a),c=i,m=p["".concat(s,".").concat(c)]||p[c]||d[c]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var A=2;A<o;A++)r[A]=a[A];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11674:function(e,t,a){var n=a(63445);const i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),r=i?"ios":"android",l=i?"macos":o?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:r,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(27378),i=a(38944),o="tabItem_wHwb",r=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function d({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&u(e,a,t[a]);if(l)for(var a of l(t))A.call(t,a)&&u(e,a,t[a]);return e})({role:"tabpanel",className:(0,i.Z)(o,a)},{hidden:t}),e)}},27789:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(27378),i=a(38944),o=a(14185),r=a(27886),l=a(77184),s=a(12112),A="tabList_J5MA",u="tabItem_l0OV",d=Object.defineProperty,p=Object.defineProperties,c=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,D=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&g(e,a,t[a]);if(m)for(var a of m(t))y.call(t,a)&&g(e,a,t[a]);return e};function k(e){var t,a;const{lazy:o,block:d,defaultValue:m,values:f,groupId:y,className:g}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=null!=f?f:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),B=(0,r.l)(b,((e,t)=>e.value===t.value));if(B.length>0)throw new Error(`Docusaurus error: Duplicate values "${B.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===m?m:null!=(a=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:k[0].props.value;if(null!==C&&!b.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:x}=(0,l.U)(),[v,N]=(0,n.useState)(C),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,s.o5)();if(null!=y){const e=h[y];null!=e&&e!==v&&b.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,a=E.indexOf(t),n=b[a].value;n!==v&&(w(t),N(n),null!=y&&x(y,String(n)))},O=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",A)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},g)},b.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(o=D({role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,key:e,ref:e=>E.push(e),onKeyDown:O,onFocus:P,onClick:P},a),r={className:(0,i.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":v===e})},p(o,c(r))),null!=t?t:e);var o,r}))),o?(0,n.cloneElement)(k.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function b(e){const t=(0,o.Z)();return n.createElement(k,D({key:String(t)},e))}},44710:function(e,t,a){a.r(t),a.d(t,{assets:function(){return D},contentTitle:function(){return y},default:function(){return B},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return k}});var n=a(35318),i=a(27789),o=a(86386),r=a(11674),l=Object.defineProperty,s=Object.defineProperties,A=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&c(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&c(e,a,t[a]);return e};const f={id:"layoutanimation",title:"LayoutAnimation"},y=void 0,g={unversionedId:"layoutanimation",id:"version-0.64/layoutanimation",title:"LayoutAnimation",description:"\u5f53\u5e03\u5c40\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u5c06\u89c6\u56fe\u8fd0\u52a8\u5230\u5b83\u4eec\u65b0\u7684\u4f4d\u7f6e\u4e0a\u3002",source:"@site/versioned_docs/version-0.64/layoutanimation.md",sourceDirName:".",slug:"/layoutanimation",permalink:"/docs/0.64/layoutanimation",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/layoutanimation.md",tags:[],version:"0.64",frontMatter:{id:"layoutanimation",title:"LayoutAnimation"},sidebar:"version-0.64/api",previous:{title:"Keyboard",permalink:"/docs/0.64/keyboard"},next:{title:"Linking",permalink:"/docs/0.64/linking"}},D={},k=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>configureNext()</code>",id:"configurenext",level:3},{value:"\u53c2\u6570\uff1a",id:"\u53c2\u6570",level:4},{value:"config",id:"config",level:5},{value:"<code>create()</code>",id:"create",level:3},{value:"Properties",id:"properties",level:2},{value:"Types",id:"types",level:3},{value:"Properties",id:"properties-1",level:3},{value:"Presets",id:"presets",level:3},{value:"easeInEaseOut",id:"easeineaseout",level:3},{value:"linear",id:"linear",level:3},{value:"spring",id:"spring",level:3}],b={toc:k};function B(e){var t,a=e,{components:l}=a,c=((e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},b),c),s(t,A({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u5f53\u5e03\u5c40\u53d8\u5316\u65f6\uff0c\u81ea\u52a8\u5c06\u89c6\u56fe\u8fd0\u52a8\u5230\u5b83\u4eec\u65b0\u7684\u4f4d\u7f6e\u4e0a\u3002"),(0,n.kt)("p",null,"\u4e00\u4e2a\u5e38\u7528\u7684\u8c03\u7528\u6b64 API \u7684\u529e\u6cd5\u662f\u5728\u72b6\u6001\u66f4\u65b0\u524d\u8c03\u7528\u3002"),(0,n.kt)("p",null,"\u6ce8\u610f\u5982\u679c\u8981\u5728",(0,n.kt)("strong",{parentName:"p"},"Android"),"\u4e0a\u4f7f\u7528\u6b64\u52a8\u753b\uff0c\u5219\u9700\u8981\u5728\u4ee3\u7801\u4e2d\u542f\u7528\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"import { UIManager } from 'react-native';\n\nif (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n")),(0,n.kt)("p",null,"\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u5e94\u8be5\u5199\u5728\u4efb\u4f55\u7ec4\u4ef6\u52a0\u8f7d\u4e4b\u524d\uff0c\u6bd4\u5982\u53ef\u4ee5\u5199\u5230 index.js \u7684\u5f00\u5934\u3002"),(0,n.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20LayoutAnimation%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableOpacity%2C%20UIManager%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20useState(false)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyle.container%7D%3E%0A%20%20%20%20%20%20%3CTouchableOpacity%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPress%20me%20to%20%7Bexpanded%20%3F%20%22collapse%22%20%3A%20%22expand%22%7D!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%7Bexpanded%20%26%26%20(%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyle.tile%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EI%20disappear%20sometimes!%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20)%7D%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20style%20%3D%20StyleSheet.create(%7B%0A%20%20tile%3A%20%7B%0A%20%20%20%20background%3A%20%22lightGrey%22%2C%0A%20%20%20%20borderWidth%3A%200.5%2C%0A%20%20%20%20borderColor%3A%20%22%23d6d7da%22%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20overflow%3A%20%22hidden%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,n.kt)("hr",null),(0,n.kt)("h1",m({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",m({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",m({},{id:"configurenext"}),(0,n.kt)("inlineCode",{parentName:"h3"},"configureNext()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)\n")),(0,n.kt)("p",null,"\u8ba1\u5212\u4e0b\u4e00\u6b21\u5e03\u5c40\u8981\u53d1\u751f\u7684\u52a8\u753b\u3002"),(0,n.kt)("h4",m({},{id:"\u53c2\u6570"}),"\u53c2\u6570\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"config"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u662f"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u770b\u4e0b\u9762\u7684\u8bf4\u660e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"onAnimationDidEnd"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u52a8\u753b\u7ed3\u675f\u540e\u7684\u56de\u8c03")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"onAnimationDidFail"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"function"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u5426"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\u52a8\u753b\u5931\u8d25\u540e\u7684\u56de\u8c03")))),(0,n.kt)("h5",m({},{id:"config"}),"config"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," \u52a8\u753b\u6301\u7eed\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"create"),"\uff0c\u914d\u7f6e\u521b\u5efa\u65b0\u89c6\u56fe\u65f6\u7684\u52a8\u753b\u3002\uff08\u53c2\u9605",(0,n.kt)("inlineCode",{parentName:"li"},"Anim"),"\u7c7b\u578b\uff09"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"update"),"\uff0c\u914d\u7f6e\u88ab\u66f4\u65b0\u7684\u89c6\u56fe\u7684\u52a8\u753b\u3002\uff08\u53c2\u9605",(0,n.kt)("inlineCode",{parentName:"li"},"Anim"),"\u7c7b\u578b\uff09")),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"create"}),(0,n.kt)("inlineCode",{parentName:"h3"},"create()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static create(duration, type, creationProp)\n")),(0,n.kt)("p",null,"\u7528\u6765\u521b\u5efa",(0,n.kt)("inlineCode",{parentName:"p"},"configureNext"),"\u6240\u9700\u7684 config \u53c2\u6570\u7684\u8f85\u52a9\u51fd\u6570\u3002"),(0,n.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,n.kt)(i.Z,{groupId:"syntax",defaultValue:r.Z.defaultSyntax,values:r.Z.syntax,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BboxPosition%2C%20setBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%0A%20%20const%20toggleBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(%0A%20%20%20%20%20%20LayoutAnimation.create(%0A%20%20%20%20%20%20%20%20500%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%0A%20%20%20%20%20%20)%0A%20%20%20%20)%3B%0A%20%20%20%20setBoxPosition(boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Layout%22%20onPress%3D%7BtoggleBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5Bstyles.box%2C%20boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20width%3A%20200%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20boxPosition%3A%20%22left%22%0A%20%20%7D%3B%0A%0A%20%20toggleBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(%0A%20%20%20%20%20%20LayoutAnimation.create(%0A%20%20%20%20%20%20%20%20500%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Types.spring%2C%0A%20%20%20%20%20%20%20%20LayoutAnimation.Properties.scaleXY%0A%20%20%20%20%20%20)%0A%20%20%20%20)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20boxPosition%3A%20this.state.boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20Layout%22%20onPress%3D%7Bthis.toggleBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.boxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%2C%0A%20%20%20%20height%3A%20200%2C%0A%20%20%20%20width%3A%20200%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h2",m({},{id:"properties"}),"Properties"),(0,n.kt)("h3",m({},{id:"types"}),"Types"),(0,n.kt)("p",null,"An enumeration of animation types to be used in the ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.64/layoutanimation#create"}),(0,n.kt)("inlineCode",{parentName:"a"},"create"))," method, or in the ",(0,n.kt)("inlineCode",{parentName:"p"},"create"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"update"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"delete")," configs for ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.64/layoutanimation#configurenext"}),(0,n.kt)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"LayoutAnimation.Types.easeIn"),")"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Types"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"spring")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"linear")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"easeInEaseOut")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"easeIn")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"easeOut")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"keyboard")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"properties-1"}),"Properties"),(0,n.kt)("p",null,"An enumeration of layout properties to be animated to be used in the ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.64/layoutanimation#create"}),(0,n.kt)("inlineCode",{parentName:"a"},"create"))," method, or in the ",(0,n.kt)("inlineCode",{parentName:"p"},"create"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"update"),"/",(0,n.kt)("inlineCode",{parentName:"p"},"delete")," configs for ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.64/layoutanimation#configurenext"}),(0,n.kt)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"LayoutAnimation.Properties.opacity"),")"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Properties"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"opacity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"scaleX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"scaleY")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"scaleXY")))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"presets"}),"Presets"),(0,n.kt)("p",null,"A set of predefined animation config."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Presets"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"easeInEaseOut"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"create(300, 'easeInEaseOut', 'opacity')"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"linear"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"create(500, 'linear', 'opacity')"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"spring"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"{ duration: 700, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"easeineaseout"}),"easeInEaseOut"),(0,n.kt)("p",null,"Shortcut to bind ",(0,n.kt)("inlineCode",{parentName:"p"},"configureNext()")," methods with ",(0,n.kt)("inlineCode",{parentName:"p"},"Presets.easeInEaseOut"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"linear"}),"linear"),(0,n.kt)("p",null,"Shortcut to bind ",(0,n.kt)("inlineCode",{parentName:"p"},"configureNext()")," methods with ",(0,n.kt)("inlineCode",{parentName:"p"},"Presets.linear"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"spring"}),"spring"),(0,n.kt)("p",null,"Shortcut to bind ",(0,n.kt)("inlineCode",{parentName:"p"},"configureNext()")," methods with ",(0,n.kt)("inlineCode",{parentName:"p"},"Presets.spring"),"."),(0,n.kt)("p",null,"Example usage:"),(0,n.kt)(i.Z,{groupId:"syntax",defaultValue:r.Z.defaultSyntax,values:r.Z.syntax,mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BfirstBoxPosition%2C%20setFirstBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%20%20const%20%5BsecondBoxPosition%2C%20setSecondBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%20%20const%20%5BthirdBoxPosition%2C%20setThirdBoxPosition%5D%20%3D%20useState(%22left%22)%3B%0A%0A%20%20const%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%0A%20%20%20%20setFirstBoxPosition(firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%0A%20%20%20%20setSecondBoxPosition(secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20setThirdBoxPosition(thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22EaseInEaseOut%22%20onPress%3D%7BtoggleFirstBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Linear%22%20onPress%3D%7BtoggleSecondBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Spring%22%20onPress%3D%7BtoggleThirdBox%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"LayoutAnimation","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20View%2C%0A%20%20Platform%2C%0A%20%20UIManager%2C%0A%20%20LayoutAnimation%2C%0A%20%20StyleSheet%2C%0A%20%20Button%0A%7D%20from%20%22react-native%22%3B%0A%0Aif%20(%0A%20%20Platform.OS%20%3D%3D%3D%20%22android%22%20%26%26%0A%20%20UIManager.setLayoutAnimationEnabledExperimental%0A)%20%7B%0A%20%20UIManager.setLayoutAnimationEnabledExperimental(true)%3B%0A%7D%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20firstBoxPosition%3A%20%22left%22%2C%0A%20%20%20%20secondBoxPosition%3A%20%22left%22%2C%0A%20%20%20%20thirdBoxPosition%3A%20%22left%22%0A%20%20%7D%3B%0A%0A%20%20toggleFirstBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20firstBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20toggleSecondBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20secondBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20toggleThirdBox%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)%3B%0A%20%20%20%20this.setState(%7B%0A%20%20%20%20%20%20thirdBoxPosition%3A%0A%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20%22right%22%20%3A%20%22left%22%0A%20%20%20%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22EaseInEaseOut%22%20onPress%3D%7Bthis.toggleFirstBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.firstBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Linear%22%20onPress%3D%7Bthis.toggleSecondBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.secondBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Spring%22%20onPress%3D%7Bthis.toggleThirdBox%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20styles.box%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20this.state.thirdBoxPosition%20%3D%3D%3D%20%22left%22%20%3F%20null%20%3A%20styles.moveRight%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22flex-start%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20height%3A%20100%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%20%20borderRadius%3A%205%2C%0A%20%20%20%20margin%3A%208%2C%0A%20%20%20%20backgroundColor%3A%20%22blue%22%0A%20%20%7D%2C%0A%20%20moveRight%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22flex-end%22%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20alignSelf%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))))}B.isMDXComponent=!0}}]);