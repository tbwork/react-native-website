"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[41576],{35318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return A}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),A=r,b=d["".concat(s,".").concat(A)]||d[A]||c[A]||i;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function A(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",l=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(27378),r=a(38944),i="tabItem_wHwb",o=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&p(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(i,a)},{hidden:t}),e)}},27789:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(27378),r=a(38944),i=a(14185),o=a(27886),l=a(77184),s=a(12112),u="tabList_J5MA",p="tabItem_l0OV",c=Object.defineProperty,d=Object.defineProperties,A=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,D=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&v(e,a,t[a]);if(b)for(var a of b(t))f.call(t,a)&&v(e,a,t[a]);return e};function C(e){var t,a;const{lazy:i,block:c,defaultValue:b,values:m,groupId:f,className:v}=e,C=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:C.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===b?b:null!=(a=null!=b?b:null==(t=C.find((e=>e.props.default)))?void 0:t.props.value)?a:C[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:g}=(0,l.U)(),[N,w]=(0,n.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=f){const e=E[f];null!=e&&e!==N&&h.some((t=>t.value===e))&&w(e)}const B=e=>{const t=e.currentTarget,a=O.indexOf(t),n=h[a].value;n!==N&&(S(t),w(n),null!=f&&g(f,String(n)))},T=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;n=null!=(t=O[a])?t:O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=null!=(a=O[t])?a:O[O.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},v)},h.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(i=D({role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,key:e,ref:e=>O.push(e),onKeyDown:T,onFocus:B,onClick:B},a),o={className:(0,r.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":N===e})},d(i,A(o))),null!=t?t:e);var i,o}))),i?(0,n.cloneElement)(C.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},C.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,i.Z)();return n.createElement(C,D({key:String(t)},e))}},21403:function(e,t,a){a.r(t),a.d(t,{assets:function(){return D},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return C}});var n=a(35318),r=a(27789),i=a(86386),o=a(11674),l=Object.defineProperty,s=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&A(e,a,t[a]);if(p)for(var a of p(t))d.call(t,a)&&A(e,a,t[a]);return e};const m={id:"vibration",title:"Vibration"},f=void 0,v={unversionedId:"vibration",id:"version-0.64/vibration",title:"Vibration",description:"Vibrates the device.",source:"@site/versioned_docs/version-0.64/vibration.md",sourceDirName:".",slug:"/vibration",permalink:"/docs/0.64/vibration",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/vibration.md",tags:[],version:"0.64",frontMatter:{id:"vibration",title:"Vibration"},sidebar:"version-0.64/api",previous:{title:"Transforms",permalink:"/docs/0.64/transforms"},next:{title:"useColorScheme",permalink:"/docs/0.64/usecolorscheme"}},D={},C=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>vibrate()</code>",id:"vibrate",level:3},{value:"<code>cancel()</code>",id:"cancel",level:3}],h={toc:C};function y(e){var t,a=e,{components:l}=a,A=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=b(b({},h),A),s(t,u({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Vibrates the device."),(0,n.kt)("h2",b({},{id:"example"}),"Example"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20Separator%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%22android%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%0A%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%0A%0A%20%20const%20PATTERN%20%3D%20%5B%0A%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%203%20*%20ONE_SECOND_IN_MS%0A%20%20%5D%3B%0A%0A%20%20const%20PATTERN_DESC%20%3D%0A%20%20%20%20Platform.OS%20%3D%3D%3D%20%22android%22%0A%20%20%20%20%20%20%3F%20%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%22%0A%20%20%20%20%20%20%3A%20%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%22%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Vibrate%20once%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%22android%22%0A%20%20%20%20%20%20%20%20%3F%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20for%2010%20seconds%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%3A%20null%7D%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%20until%20cancelled%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Stop%20vibration%20pattern%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%0A%20%20%20%20%20%20%20%20color%3D%22%23FF0000%22%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20separator%3A%20%7B%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20borderBottomColor%3A%20%22%23737373%22%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(i.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"Vibration","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Platform%2C%20Text%2C%20Vibration%2C%20View%2C%20SafeAreaView%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20Separator%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%3CView%20style%3D%7BPlatform.OS%20%3D%3D%3D%20%22android%22%20%3F%20styles.separator%20%3A%20null%7D%20%2F%3E%3B%0A%7D%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20const%20ONE_SECOND_IN_MS%20%3D%201000%3B%0A%0A%20%20%20%20const%20PATTERN%20%3D%20%5B%0A%20%20%20%20%20%201%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%20%20%202%20*%20ONE_SECOND_IN_MS%2C%0A%20%20%20%20%20%203%20*%20ONE_SECOND_IN_MS%0A%20%20%20%20%5D%3B%0A%0A%20%20%20%20const%20PATTERN_DESC%20%3D%0A%20%20%20%20%20%20Platform.OS%20%3D%3D%3D%20%22android%22%0A%20%20%20%20%20%20%20%20%3F%20%22wait%201s%2C%20vibrate%202s%2C%20wait%203s%22%0A%20%20%20%20%20%20%20%20%3A%20%22wait%201s%2C%20vibrate%2C%20wait%202s%2C%20vibrate%2C%20wait%203s%22%3B%0A%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EVibration%20API%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Vibrate%20once%22%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate()%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%20%22android%22%0A%20%20%20%20%20%20%20%20%20%20%3F%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20for%2010%20seconds%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(10%20*%20ONE_SECOND_IN_MS)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%3A%20null%7D%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.paragraph%7D%3EPattern%3A%20%7BPATTERN_DESC%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Vibrate%20with%20pattern%20until%20cancelled%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.vibrate(PATTERN%2C%20true)%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CSeparator%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Stop%20vibration%20pattern%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20Vibration.cancel()%7D%0A%20%20%20%20%20%20%20%20%20%20color%3D%22%23FF0000%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20separator%3A%20%7B%0A%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20borderBottomColor%3A%20%22%23737373%22%2C%0A%20%20%20%20borderBottomWidth%3A%20StyleSheet.hairlineWidth%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Android apps should request the ",(0,n.kt)("inlineCode",{parentName:"p"},"android.permission.VIBRATE")," permission by adding ",(0,n.kt)("inlineCode",{parentName:"p"},'<uses-permission android:name="android.permission.VIBRATE"/>')," to ",(0,n.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),".")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The Vibration API is implemented as a ",(0,n.kt)("inlineCode",{parentName:"p"},"AudioServicesPlaySystemSound(kSystemSoundID_Vibrate)")," call on iOS.")),(0,n.kt)("hr",null),(0,n.kt)("h1",b({},{id:"reference"}),"Reference"),(0,n.kt)("h2",b({},{id:"methods"}),"Methods"),(0,n.kt)("h3",b({},{id:"vibrate"}),(0,n.kt)("inlineCode",{parentName:"h3"},"vibrate()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"Vibration.vibrate(?pattern: number | Array<number>, ?repeat: boolean)\n")),(0,n.kt)("p",null,"Triggers a vibration with a fixed duration."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On Android,")," the vibration duration defaults to 400 milliseconds, and an arbitrary vibration duration can be specified by passing a number as the value for the ",(0,n.kt)("inlineCode",{parentName:"p"},"pattern")," argument. ",(0,n.kt)("strong",{parentName:"p"},"On iOS,")," the vibration duration is fixed at roughly 400 milliseconds."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"vibrate()")," method can take a ",(0,n.kt)("inlineCode",{parentName:"p"},"pattern")," argument with an array of numbers that represent time in milliseconds. You may set ",(0,n.kt)("inlineCode",{parentName:"p"},"repeat")," to true to run through the vibration pattern in a loop until ",(0,n.kt)("inlineCode",{parentName:"p"},"cancel()")," is called."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On Android,")," the odd indices of the ",(0,n.kt)("inlineCode",{parentName:"p"},"pattern")," array represent the vibration duration, while the even ones represent the separation time. ",(0,n.kt)("strong",{parentName:"p"},"On iOS,")," the numbers in the ",(0,n.kt)("inlineCode",{parentName:"p"},"pattern")," array represent the separation time, as the vibration duration is fixed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameters:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Name"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Required"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"Platform"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"pattern"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"number"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Vibration duration in milliseconds. Defaults to 400 ms."),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Android")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"pattern"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Array of numbers"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Vibration pattern as an array of numbers in milliseconds."),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Android, iOS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"repeat"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"boolean"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"No"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Repeat vibration pattern until cancel(), default to false."),(0,n.kt)("td",b({parentName:"tr"},{align:null}),"Android, iOS")))),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"cancel"}),(0,n.kt)("inlineCode",{parentName:"h3"},"cancel()")),(0,n.kt)("pre",null,(0,n.kt)("code",b({parentName:"pre"},{className:"language-jsx"}),"Vibration.cancel();\n")),(0,n.kt)("p",null,"Call this to stop vibrating after having invoked ",(0,n.kt)("inlineCode",{parentName:"p"},"vibrate()")," with repetition enabled."))}y.isMDXComponent=!0}}]);