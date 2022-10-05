"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[65042],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return v}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),v=r,f=p["".concat(s,".").concat(v)]||p[v]||u[v]||l;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11674:function(e,t,n){var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(27378),r=n(38944),l="tabItem_wHwb",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function u({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},27789:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(27378),r=n(38944),l=n(14185),o=n(27886),i=n(77184),s=n(12112),c="tabList_J5MA",d="tabItem_l0OV",u=Object.defineProperty,p=Object.defineProperties,v=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,A=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&y(e,n,t[n]);if(f)for(var n of f(t))b.call(t,n)&&y(e,n,t[n]);return e};function h(e){var t,n;const{lazy:l,block:u,defaultValue:f,values:m,groupId:b,className:y}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=m?m:h.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),k=(0,o.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===f?f:null!=(n=null!=f?f:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==E&&!g.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:C}=(0,i.U)(),[D,O]=(0,a.useState)(E),x=[],{blockElementScrollPositionUntilNextRender:S}=(0,s.o5)();if(null!=b){const e=w[b];null!=e&&e!==D&&g.some((t=>t.value===e))&&O(e)}const B=e=>{const t=e.currentTarget,n=x.indexOf(t),a=g[n].value;a!==D&&(S(t),O(a),null!=b&&C(b,String(a)))},N=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;a=null!=(t=x[n])?t:x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=null!=(n=x[t])?n:x[x.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},y)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=A({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:e=>x.push(e),onKeyDown:N,onFocus:B,onClick:B},n),o={className:(0,r.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":D===e})},p(l,v(o))),null!=t?t:e);var l,o}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function g(e){const t=(0,l.Z)();return a.createElement(h,A({key:String(t)},e))}},64787:function(e,t,n){n.r(t),n.d(t,{assets:function(){return A},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return h}});var a=n(35318),r=n(27789),l=n(86386),o=n(11674),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&v(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&v(e,n,t[n]);return e};const m={id:"systrace",title:"Systrace"},b=void 0,y={unversionedId:"systrace",id:"version-0.66/systrace",title:"Systrace",description:"Systrace is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize.",source:"@site/versioned_docs/version-0.66/systrace.md",sourceDirName:".",slug:"/systrace",permalink:"/docs/0.66/systrace",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/systrace.md",tags:[],version:"0.66",frontMatter:{id:"systrace",title:"Systrace"},sidebar:"api",previous:{title:"StyleSheet",permalink:"/docs/0.66/stylesheet"},next:{title:"Transforms",permalink:"/docs/0.66/transforms"}},A={},h=[{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>installReactHook()</code>",id:"installreacthook",level:3},{value:"<code>setEnabled()</code>",id:"setenabled",level:3},{value:"<code>isEnabled()</code>",id:"isenabled",level:3},{value:"<code>beginEvent()</code>",id:"beginevent",level:3},{value:"<code>endEvent()</code>",id:"endevent",level:3},{value:"<code>beginAsyncEvent()</code>",id:"beginasyncevent",level:3},{value:"<code>endAsyncEvent()</code>",id:"endasyncevent",level:3},{value:"<code>counterEvent()</code>",id:"counterevent",level:3}],g={toc:h};function k(e){var t,n=e,{components:i}=n,v=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&d)for(var a of d(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},g),v),s(t,c({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Systrace")," is a standard Android marker-based profiling tool (and is installed when you install the Android platform-tools package). Profiled code blocks are surrounded by start/end markers which are then visualized in a colorful chart format. Both the Android SDK and React Native framework provide standard markers that you can visualize."),(0,a.kt)("h2",f({},{id:"example"}),"Example"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Systrace")," allows you to mark JavaScript (JS) events with a tag and an integer value. Capture the non-Timed JS events in EasyProfiler."),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",f({},{className:"snack-player","data-snack-name":"Systrace Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%20%7B%0A%0A%20%20const%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%0A%20%20%20%20Systrace.beginEvent('event_label')%0A%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%0A%20%20%7D%0A%0A%20%20const%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.endEvent()%0A%20%20%7D%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%22%20onPress%3D%7B()%3D%3E%20enableProfiling()%7D%2F%3E%0A%20%20%20%20%20%20%3CButton%20title%3D%22Stop%20capturing%22%20onPress%3D%7B()%3D%3E%20stopProfiling()%7D%20color%3D%22%23FF0000%22%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",f({},{className:"snack-player","data-snack-name":"Systrace Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20View%2C%20StyleSheet%2C%20Systrace%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%0A%20%20enableProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.setEnabled(true)%3B%20%2F%2F%20Call%20setEnabled%20to%20turn%20on%20the%20profiling.%0A%20%20%20%20Systrace.beginEvent('event_label')%0A%20%20%20%20Systrace.counterEvent('event_label'%2C%2010)%3B%0A%20%20%7D%0A%0A%20%20stopProfiling%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Systrace.endEvent()%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%5Bstyles.header%2C%20styles.paragraph%5D%7D%3EReact%20Native%20Systrace%20API%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Capture%20the%20non-Timed%20JS%20events%20in%20EasyProfiler%22%20onPress%3D%7B()%3D%3E%20this.enableProfiling()%7D%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Stop%20capturing%22%20onPress%3D%7B()%3D%3E%20this.stopProfiling()%7D%20color%3D%22%23FF0000%22%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'%23fff'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20paddingTop%3A%2044%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20%20header%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20paragraph%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("hr",null),(0,a.kt)("h1",f({},{id:"reference"}),"Reference"),(0,a.kt)("h2",f({},{id:"methods"}),"Methods"),(0,a.kt)("h3",f({},{id:"installreacthook"}),(0,a.kt)("inlineCode",{parentName:"h3"},"installReactHook()")),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"static installReactHook(useFiber)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",f({},{id:"setenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"setEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"static setEnabled(enabled)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",f({},{id:"isenabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"isEnabled()")),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"static isEnabled()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",f({},{id:"beginevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"beginEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"static beginEvent(profileName?, args?)\n")),(0,a.kt)("p",null,"beginEvent/endEvent for starting and then ending a profile within the same call stack frame."),(0,a.kt)("hr",null),(0,a.kt)("h3",f({},{id:"endevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"endEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"static endEvent()\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",f({},{id:"beginasyncevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"beginAsyncEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"static beginAsyncEvent(profileName?)\n")),(0,a.kt)("p",null,"beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either occur on another thread or out of the current stack frame, eg await the returned cookie variable should be used as input into the endAsyncEvent call to end the profile."),(0,a.kt)("hr",null),(0,a.kt)("h3",f({},{id:"endasyncevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"endAsyncEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"static endAsyncEvent(profileName?, cookie?)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",f({},{id:"counterevent"}),(0,a.kt)("inlineCode",{parentName:"h3"},"counterEvent()")),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-jsx"}),"static counterEvent(profileName?, value?)\n")),(0,a.kt)("p",null,"Register the value to the profileName on the systrace timeline."))}k.isMDXComponent=!0}}]);