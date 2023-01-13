"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[21740],{35318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?a.createElement(b,l(l({ref:t},d),{},{components:n})):a.createElement(b,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l={defaultGuide:"native",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(27378),r=n(38944);const o="tabItem_wHwb";var l=Object.defineProperty,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function s({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},27789:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(27378),r=n(38944),o=n(14185),l=n(27886),i=n(77184),p=n(12112);const c="tabList_J5MA",d="tabItem_l0OV";var s=Object.defineProperty,u=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&h(e,n,t[n]);if(b)for(var n of b(t))k.call(t,n)&&h(e,n,t[n]);return e};function f(e){var t,n;const{lazy:o,block:s,defaultValue:b,values:v,groupId:k,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=null!=v?v:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),C=(0,l.l)(N,((e,t)=>e.value===t.value));if(C.length>0)throw new Error(`Docusaurus error: Duplicate values "${C.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===b?b:null!=(n=null!=b?b:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?n:f[0].props.value;if(null!==y&&!N.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,i.U)(),[T,M]=(0,a.useState)(y),P=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=k){const e=w[k];null!=e&&e!==T&&N.some((t=>t.value===e))&&M(e)}const F=e=>{const t=e.currentTarget,n=P.indexOf(t),a=N[n].value;a!==T&&(j(t),M(a),null!=k&&O(k,String(a)))},S=e=>{var t,n;let a=null;switch(e.key){case"Enter":F(e);break;case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=null!=(n=P[t])?n:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},h)},N.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=g({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:e=>P.push(e),onKeyDown:S,onClick:F},n),l={className:(0,r.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":T===e})},u(o,m(l))),null!=t?t:e);var o,l}))),o?(0,a.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function N(e){const t=(0,o.Z)();return a.createElement(f,g({key:String(t)},e))}},31043:(e,t,n)=>{n.d(t,{ZP:()=>m});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e};const u={toc:[]};function m(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},u),d),o(t,l({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",s({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,a.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,a.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,a.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}m.isMDXComponent=!0},76538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>y,frontMatter:()=>k,metadata:()=>g,toc:()=>N});var a=n(35318),r=n(31043),o=n(27789),l=n(86386),i=n(11674),p=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&b(e,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&b(e,n,t[n]);return e};const k={id:"pillars-codegen",title:"Codegen"},h=void 0,g={unversionedId:"the-new-architecture/pillars-codegen",id:"version-0.71/the-new-architecture/pillars-codegen",title:"Codegen",description:"Codegen \u4e0d\u7b97\u662f\u65b0\u67b6\u6784\u7684\u4e3b\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u5b83\u662f\u4e00\u4e2a\u5e2e\u52a9\u6211\u4eec\u907f\u514d\u7f16\u5199\u91cd\u590d\u4ee3\u7801\u7684\u5de5\u5177\u3002Codegen \u5e76\u975e\u5fc5\u9009\u9879\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u624b\u5199\u5b83\u6240\u751f\u6210\u7684\u4ee3\u7801\uff0c\u4f46\u662f\u4f7f\u7528\u5b83\u6765\u751f\u6210\u811a\u624b\u67b6\u4ee3\u7801\u53ef\u4ee5\u5e2e\u60a8\u8282\u7701\u4e0d\u5c11\u65f6\u95f4\u3002",source:"@site/versioned_docs/version-0.71/the-new-architecture/pillars-codegen.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/pillars-codegen",permalink:"/docs/the-new-architecture/pillars-codegen",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/pillars-codegen.md",tags:[],version:"0.71",frontMatter:{id:"pillars-codegen",title:"Codegen"},sidebar:"docs",previous:{title:"Fabric \u7ec4\u4ef6",permalink:"/docs/the-new-architecture/pillars-fabric-components"},next:{title:"C++ Turbo Native Modules",permalink:"/docs/the-new-architecture/cxx-cxxturbomodules"}},f={},N=[{value:"\u8fd0\u884c Codegen",id:"\u8fd0\u884c-codegen",level:2},{value:"\u751f\u6210\u7684\u4ee3\u7801",id:"\u751f\u6210\u7684\u4ee3\u7801",level:2},{value:"TurboModules",id:"turbomodules",level:3},{value:"Fabric \u7ec4\u4ef6",id:"fabric-\u7ec4\u4ef6",level:3},{value:"RCTThirdPartyFabricComponentsProvider",id:"rctthirdpartyfabriccomponentsprovider",level:3},{value:"\u8fd0\u884c Codegen",id:"\u8fd0\u884c-codegen-1",level:2},{value:"\u751f\u6210\u7684\u4ee3\u7801",id:"\u751f\u6210\u7684\u4ee3\u7801-1",level:2},{value:"TurboModule",id:"turbomodule",level:3},{value:"Fabric \u7ec4\u4ef6",id:"fabric-\u7ec4\u4ef6-1",level:3}],C={toc:N};function y(e){var t,n=e,{components:p}=n,b=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},C),b),c(t,d({components:p,mdxType:"MDXLayout"}))),(0,a.kt)(r.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u4e0d\u7b97\u662f\u65b0\u67b6\u6784\u7684\u4e3b\u8981\u7ec4\u6210\u90e8\u5206\uff0c\u5b83\u662f\u4e00\u4e2a\u5e2e\u52a9\u6211\u4eec\u907f\u514d\u7f16\u5199\u91cd\u590d\u4ee3\u7801\u7684\u5de5\u5177\u3002",(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u5e76\u975e\u5fc5\u9009\u9879\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u624b\u5199\u5b83\u6240\u751f\u6210\u7684\u4ee3\u7801\uff0c\u4f46\u662f\u4f7f\u7528\u5b83\u6765\u751f\u6210\u811a\u624b\u67b6\u4ee3\u7801\u53ef\u4ee5\u5e2e\u60a8\u8282\u7701\u4e0d\u5c11\u65f6\u95f4\u3002"),(0,a.kt)("p",null,"React Native \u4f1a\u5728\u6bcf\u6b21\u6784\u5efa iOS \u6216 Android App \u65f6\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Codegen"),"\u3002\u60a8\u53ea\u9700\u5076\u5c14\u624b\u52a8\u6267\u884c\u751f\u6210\u4ee3\u7801\u7684\u811a\u672c\uff0c\u4ee5\u6b64\u58f0\u660e\u9700\u8981\u751f\u6210\u54ea\u4e9b\u7c7b\u578b\u548c\u6587\u4ef6\u3002\u6bd4\u65b9\u8bf4\uff0c\u6709\u4e2a\u5e38\u89c1\u7684\u573a\u666f\u5c31\u662f\u5f00\u53d1 ",(0,a.kt)("a",v({parentName:"p"},{href:"./pillars-turbomodules"}),(0,a.kt)("strong",{parentName:"a"},"TurboModule"))," \u548c ",(0,a.kt)("a",v({parentName:"p"},{href:"./pillars-fabric-components"}),(0,a.kt)("strong",{parentName:"a"},"Fabric \u7ec4\u4ef6")),"\u3002"),(0,a.kt)("p",null,"\u672c\u6307\u5f15\u5c06\u6307\u5bfc\u60a8\u914d\u7f6e ",(0,a.kt)("strong",{parentName:"p"},"Codegen"),"\uff0c\u60a8\u5c06\u4e86\u89e3\u5982\u4f55\u624b\u52a8\u4e3a\u6bcf\u4e2a\u5e73\u53f0\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Codegen"),"\uff0c\u4ee5\u53ca\u5b83\u6240\u751f\u6210\u7684\u4ee3\u7801\u3002"),(0,a.kt)("h1",v({},{id:"\u51c6\u5907\u5de5\u4f5c"}),"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u60a8\u9700\u8981\u4e00\u4e2a\u7528\u4e8e\u751f\u6210\u4ee3\u7801\u7684 React Native App\uff0c\u5373\u4fbf\u60a8\u8981\u81ea\u5df1\u624b\u52a8\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Codegen"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u4ee3\u7801\u751f\u6210\u8fc7\u7a0b\u4e0e App \u7684\u6784\u5efa\u7d27\u5bc6\u76f8\u5173\uff0c\u5176\u811a\u672c\u4fdd\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native")," \u7684 NPM \u5305\u4e2d\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u6307\u5f15\u4e2d\uff0c\u60a8\u9700\u8981\u4f7f\u7528 React Native CLI \u521b\u5efa\u4e00\u4e2a\u5de5\u7a0b\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-sh"}),"npx react-native init SampleApp --version 0.70.0\n")),(0,a.kt)("admonition",v({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6307\u5f15\u5c06\u9884\u8bbe\u60a8\u4f7f\u7528\u7684\u662f 0.70.0 \u53ca\u4ee5\u4e0a\u7248\u672c\u3002\u5bf9\u4e8e\u4e4b\u524d\u7684\u7248\u672c\uff0cCodegen \u7684\u914d\u7f6e\u5185\u5bb9\u7a0d\u6709\u4e0d\u540c\u3002")),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u5c06\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u7684\u6a21\u5757\u6dfb\u52a0\u4e3a App \u7684\u4e00\u4e2a NPM \u4f9d\u8d56\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-sh"}),"yarn add <path/to/your/TurboModule_or_FabricComponent>\n")),(0,a.kt)("p",null,"\u60a8\u53ef\u9605\u8bfb ",(0,a.kt)("a",v({parentName:"p"},{href:"pillars-turbomodules"}),"TurboModule")," \u6216 ",(0,a.kt)("a",v({parentName:"p"},{href:"pillars-fabric-components"}),"Fabric \u7ec4\u4ef6")," \u7684\u5f00\u53d1\u7ae0\u8282\uff0c\u4e86\u89e3\u66f4\u591a\u914d\u7f6e\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u7684\u6307\u5f15\u5c06\u9ed8\u8ba4\u60a8\u5df2\u7ecf\u6709\u4e2a\u914d\u7f6e\u597d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"TurboModule")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"Fabric \u7ec4\u4ef6"),"\u3002"),(0,a.kt)("h1",v({},{id:"ios"}),"iOS"),(0,a.kt)("h2",v({},{id:"\u8fd0\u884c-codegen"}),"\u8fd0\u884c Codegen"),(0,a.kt)("p",null,"\u9488\u5bf9 iOS \u5e73\u53f0\uff0c\u9700\u8981\u5728\u6784\u5efa\u65f6\u8c03\u7528 Node \u811a\u672c\u4ee5\u8c03\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u751f\u6210\u4ee3\u7801\u3002\u811a\u672c\u4fdd\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"MyApp/node_modules/react_native/scripts/")," \u76ee\u5f55\u3002"),(0,a.kt)("p",null,"\u60a8\u9700\u8981\u8fd0\u884c\u7684\u811a\u672c\u6587\u4ef6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"generate-artifacts.js"),"\uff0c\u6b64\u811a\u672c\u5c06\u5728 App \u7684\u6240\u6709\u4f9d\u8d56\u4e2d\u68c0\u7d22\u7b26\u5408\u7279\u5b9a\u8981\u6c42\u7684 JS \u6587\u4ef6\uff08\u67e5\u770b ",(0,a.kt)("a",v({parentName:"p"},{href:"pillars-turbomodules"}),"TurboModules")," \u548c ",(0,a.kt)("a",v({parentName:"p"},{href:"pillars-fabric-components"}),"Fabric \u7ec4\u4ef6")," \u7ae0\u8282\uff0c\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\uff09\uff0c\u5e76\u751f\u6210 App \u6240\u9700\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 App \u7684\u6839\u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8c03\u7528\u811a\u672c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-sh"}),"node node_modules/react_native/scripts/generate-artifacts.js \\\n    --path SampleApp/ \\\n    --outputPath <an/output/path> \\\n")),(0,a.kt)("p",null,"\u9274\u4e8e App \u5185\u5df2\u7ecf\u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"TurboModules")," \u6216/\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Fabric \u7ec4\u4ef6")," \u7684\u4f9d\u8d56\uff0c",(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u5c06\u627e\u5230\u8fd9\u4e9b\u4f9d\u8d56\uff0c\u5e76\u751f\u6210\u4ee3\u7801\u81f3\u60a8\u6307\u5b9a\u7684\u8def\u5f84\u3002"),(0,a.kt)("h2",v({},{id:"\u751f\u6210\u7684\u4ee3\u7801"}),"\u751f\u6210\u7684\u4ee3\u7801"),(0,a.kt)("p",null,"\u5047\u8bbe\u60a8\u5728 App \u5185\u8fd0\u884c ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u5e76\u6307\u5b9a\u8f93\u51fa\u8def\u5f84\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen"),"\uff0c\u751f\u6210\u7684\u76ee\u5f55\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:'language-title="iOS',metastring:'Codegen output"',Codegen:!0,'output"':!0}),"codegen\n\u2514\u2500\u2500 build\n    \u2514\u2500\u2500 generated\n        \u2514\u2500\u2500 ios\n            \u251c\u2500\u2500 MyTurboModuleSpecs\n            \u2502   \u251c\u2500\u2500 MyTurboModuleSpecs-generated.mm\n            \u2502   \u2514\u2500\u2500 MyTurboModuleSpecs.h\n            \u251c\u2500\u2500 FBReactNativeSpec\n            \u2502   \u251c\u2500\u2500 FBReactNativeSpec-generated.mm\n            \u2502   \u2514\u2500\u2500 FBReactNativeSpec.h\n            \u251c\u2500\u2500 RCTThirdPartyFabricComponentsProvider.h\n            \u251c\u2500\u2500 RCTThirdPartyFabricComponentsProvider.mm\n            \u2514\u2500\u2500 react\n                \u2514\u2500\u2500 renderer\n                    \u2514\u2500\u2500 components\n                        \u251c\u2500\u2500 MyFabricComponent\n                        \u2502   \u251c\u2500\u2500 ComponentDescriptors.h\n                        \u2502   \u251c\u2500\u2500 EventEmitters.cpp\n                        \u2502   \u251c\u2500\u2500 EventEmitters.h\n                        \u2502   \u251c\u2500\u2500 Props.cpp\n                        \u2502   \u251c\u2500\u2500 Props.h\n                        \u2502   \u251c\u2500\u2500 RCTComponentViewHelpers.h\n                        \u2502   \u251c\u2500\u2500 ShadowNodes.cpp\n                        \u2502   \u2514\u2500\u2500 ShadowNodes.h\n                        \u2514\u2500\u2500 rncore\n                            \u251c\u2500\u2500 ComponentDescriptors.h\n                            \u251c\u2500\u2500 EventEmitters.cpp\n                            \u251c\u2500\u2500 EventEmitters.h\n                            \u251c\u2500\u2500 Props.cpp\n                            \u251c\u2500\u2500 Props.h\n                            \u251c\u2500\u2500 RCTComponentViewHelpers.h\n                            \u251c\u2500\u2500 ShadowNodes.cpp\n                            \u2514\u2500\u2500 ShadowNodes.h\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"codegen")," \u76ee\u5f55\u81ea\u7136\u662f\u6574\u4e2a\u7ed3\u6784\u7684\u6839\u57fa\uff0c\u91cc\u9762\u8fd8\u6709\u4e24\u4e2a\u4ee5\u4e0a\u7684\u5d4c\u5957\u76ee\u5f55\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"build/generated"),"\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u91cc\u9762\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"ios")," \u76ee\u5f55\uff0c\u5305\u542b\u4e86\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u4e2a TurboModule \u5355\u72ec\u521b\u5efa\u7684\u76ee\u5f55\uff1b"),(0,a.kt)("li",{parentName:"ul"},"RCTThirdPartyFabricComponentsProvider \u7684\u5934\u6587\u4ef6\uff08.h\uff09\u548c\u5b9e\u73b0\u6587\u4ef6\uff08.mm\uff09\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u4e86\u6240\u6709 Fabric \u7ec4\u4ef6\u7684\u57fa\u672c\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"li"},"react/renderer/components"),"\u3002")),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c\u91cc\u9762\u5305\u542b\u4e86\u4e00\u4e2a TurboModule \u8fd8\u6709\u4e00\u7ec4 Fabric \u7ec4\u4ef6\u3002\u91cc\u9762\u7684\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"FBReactNativeSpec")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"rncore")," \u90fd\u662f\u7531 React Native \u751f\u6210\u7684\u3002\u8fd9\u4e9b\u6a21\u5757\u5373\u4fbf\u60a8\u6ca1\u6709\u4f7f\u7528 TurbuModule \u6216 Fabric \u7ec4\u4ef6\u90fd\u4f1a\u81ea\u52a8\u751f\u6210\uff0c\u56e0\u4e3a React Native \u9700\u8981\u4f7f\u7528\u5b83\u4eec\u6765\u6b63\u5e38\u8fd0\u884c\u3002"),(0,a.kt)("h3",v({},{id:"turbomodules"}),"TurboModules"),(0,a.kt)("p",null,"\u6bcf\u4e2a TurboModule \u7684\u76ee\u5f55\u90fd\u5305\u542b\u4e24\u4e2a\u6587\u4ef6\uff1a\u63a5\u53e3\u6587\u4ef6\u548c\u5b9e\u73b0\u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u63a5\u53e3\u6587\u4ef6\u7684\u547d\u540d\u4e0e TurboModule \u76f8\u540c\uff0c\u91cc\u9762\u5305\u542b\u4e86\u7528\u4e8e\u521d\u59cb\u5316 JSI \u63a5\u53e3\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u800c\u63a5\u53e3\u6587\u4ef6\u7684\u547d\u540d\u53e6\u5916\u52a0\u4e0a\u4e86 -generated \u7684\u540e\u7f00\uff0c\u91cc\u9762\u5305\u542b\u4e86\u7528\u4e8e\u539f\u751f\u5e73\u53f0\u548c JS \u4e4b\u95f4\u4ea4\u4e92\u7684\u903b\u8f91\u4ee3\u7801\u3002"),(0,a.kt)("h3",v({},{id:"fabric-\u7ec4\u4ef6"}),"Fabric \u7ec4\u4ef6"),(0,a.kt)("p",null,"\u6bcf\u4e2a Fabric \u7ec4\u4ef6\u76ee\u5f55\u5185\u90fd\u5305\u542b\u4e86\u82e5\u5e72\u4e2a\u6587\u4ef6\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ShadowNode")," \u662f Fabric \u7ec4\u4ef6\u7684\u57fa\u672c\u5143\u7d20\uff0c\u5b83\u4ee3\u8868\u5728 React \u62bd\u8c61\u6811\u4e0a\u7684\u4e00\u4e2a\u8282\u70b9\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ShadowNode")," \u8868\u793a\u7684\u662f\u4e00\u4e2a React \u5b9e\u4f53\uff0c\u56e0\u6b64\u5b83\u9700\u8981\u4f20\u5165\u4e00\u4e9b\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Props")," \u6587\u4ef6\u5b9a\u4e49\u7684\u53c2\u6570\u3002\u6709\u65f6\u5019\u8fd8\u53e6\u5916\u9700\u8981\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitter"),"\uff0c\u5b83\u5728\u76f8\u5e94\u7684\u6587\u4ef6\u4e2d\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c",(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u8fd8\u751f\u6210\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentDescriptor.h")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTComponentViewHelpers.h")," \u6587\u4ef6\uff0c\u524d\u8005\u7528\u4e8e React Native \u548c Fabric \u6b63\u786e\u83b7\u53d6\u7ec4\u4ef6\u7684\u5f15\u7528\uff1b\u540e\u8005\u5305\u542b\u4e86\u4e00\u4e9b\u8f85\u52a9\u51fd\u6570\u548c\u534f\u8bae\uff0c\u7528\u4e8e\u5728\u539f\u751f\u89c6\u56fe\u4e0a\u88ab JSI \u6b63\u786e\u8c03\u7528\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u53c2\u8003",(0,a.kt)("a",v({parentName:"p"},{href:"/architecture/fabric-renderer"}),"\u6e32\u67d3\u5668"),"\u7ae0\u8282\uff0c\u4e86\u89e3\u66f4\u591a\u5173\u4e8e Fabric \u8fd0\u884c\u673a\u5236\u7684\u7ec6\u8282\uff0c"),(0,a.kt)("h3",v({},{id:"rctthirdpartyfabriccomponentsprovider"}),"RCTThirdPartyFabricComponentsProvider"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RCTThirdPartyFabricComponentsProvider")," \u7531\u63a5\u53e3\u6587\u4ef6\u4e0e\u5b9e\u73b0\u6587\u4ef6\u7ec4\u6210\uff0c\u7528\u4e8e\u6ce8\u518c Fabric \u7ec4\u4ef6\u3002React Native \u5728\u8fd0\u884c\u65f6\u901a\u8fc7\u6b64\u6ce8\u518c\u5668\u83b7\u53d6\u76f8\u5e94 Fabric \u7ec4\u4ef6\u7684\u7c7b\uff0c\u4e00\u65e6 React Native \u83b7\u53d6\u4e86\u7ec4\u4ef6\u7684\u7c7b\uff0c\u5c31\u53ef\u4ee5\u5c06\u5176\u8fdb\u884c\u5b9e\u4f8b\u5316\u3002"),(0,a.kt)("h1",v({},{id:"android"}),"Android"),(0,a.kt)("h2",v({},{id:"\u8fd0\u884c-codegen-1"}),"\u8fd0\u884c Codegen"),(0,a.kt)("p",null,"\u9488\u5bf9 Android \u5e73\u53f0\uff0c\u751f\u6210\u4ee3\u7801\u9700\u8981\u6267\u884c\u4e00\u4e2a Gradle \u4efb\u52a1\u3002\u9996\u5148\uff0c\u60a8\u9700\u8981\u5728 Android App \u542f\u7528\u65b0\u67b6\u6784\uff0c\u5426\u5219 Gradle \u5c06\u6267\u884c\u5931\u8d25\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"li"},"MyApp/android/gradle.properties"),"\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"newArchEnabled")," \u7531 ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," \u4fee\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,a.kt)("p",null,"\u4e4b\u540e\uff0c\u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"SampleApp/android")," \u76ee\u5f55\u5e76\u6267\u884c\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-sh"}),"./gradlew generateCodegenArtifactsFromSchema\n")),(0,a.kt)("p",null,"\u6b64\u547d\u4ee4\u5c06\u5728\u6240\u6709 App \u5bfc\u5165\u7684\u9879\u76ee\uff08\u5305\u62ec App \u53ca\u5176\u5173\u8054\u7684 npm \u6a21\u5757\uff09\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"generateCodegenArtifactsFromSchema ")," \u4efb\u52a1\uff0c\u5b83\u4f1a\u5c06\u4ee3\u7801\u751f\u6210\u5230\u76f8\u5e94\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/<dependency>")," \u76ee\u5f55\u3002\u5047\u5982\u60a8\u6709\u4e00\u4e2a Fabric \u7ec4\u4ef6\uff0c\u5176 npm \u6a21\u5757\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"my-fabric-component"),"\uff0c\u5b83\u7684\u4ee3\u7801\u4f1a\u751f\u6210\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"SampleApp/node_modules/my-fabric-component/android/build/generated/source/codegen")," \u76ee\u5f55\u3002"),(0,a.kt)("h2",v({},{id:"\u751f\u6210\u7684\u4ee3\u7801-1"}),"\u751f\u6210\u7684\u4ee3\u7801"),(0,a.kt)("p",null,"\u4e00\u65e6 Gradle \u4efb\u52a1\u6267\u884c\u5b8c\u6bd5\uff0c\u60a8\u5c31\u80fd\u770b\u5230\u6240\u751f\u6210\u7684\u4e0d\u540c\u7ed3\u6784\u7684 TurboModule \u6216 Fabric \u7ec4\u4ef6\u4ee3\u7801\u6587\u4ef6\u3002\u4ee5\u4e0b\u6807\u7b7e\u9875\u5c55\u793a\u5b83\u4eec\u5404\u81ea\u7684\u76ee\u5f55\u6587\u4ef6\u7ed3\u6784\uff1a"),(0,a.kt)(o.Z,{groupId:"android-codegen",defaultValue:i.Z.defaultNewArchFeature,values:i.Z.newArchFeatures,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"turbomodules",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-sh"}),"codegen\n\u251c\u2500\u2500 java\n\u2502   \u2514\u2500\u2500 com\n\u2502       \u2514\u2500\u2500 MyTurbomodule\n\u2502           \u2514\u2500\u2500 MyTurbomodule.java\n\u251c\u2500\u2500 jni\n\u2502   \u251c\u2500\u2500 Android.mk\n\u2502   \u251c\u2500\u2500 MyTurbomodule-generated.cpp\n\u2502   \u251c\u2500\u2500 MyTurbomodule.h\n\u2502   \u2514\u2500\u2500 react\n\u2502       \u2514\u2500\u2500 renderer\n\u2502           \u2514\u2500\u2500 components\n\u2502               \u2514\u2500\u2500 MyTurbomodule\n\u2502                   \u251c\u2500\u2500 ComponentDescriptors.h\n\u2502                   \u251c\u2500\u2500 EventEmitters.cpp\n\u2502                   \u251c\u2500\u2500 EventEmitters.h\n\u2502                   \u251c\u2500\u2500 Props.cpp\n\u2502                   \u251c\u2500\u2500 Props.h\n\u2502                   \u251c\u2500\u2500 ShadowNodes.cpp\n\u2502                   \u2514\u2500\u2500 ShadowNodes.h\n\u2514\u2500\u2500 schema.json\n"))),(0,a.kt)(l.Z,{value:"fabric-components",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-sh"}),"codegen\n\u251c\u2500\u2500 java\n\u2502   \u2514\u2500\u2500 com\n\u2502       \u2514\u2500\u2500 facebook\n\u2502           \u2514\u2500\u2500 react\n\u2502               \u2514\u2500\u2500 viewmanagers\n\u2502                   \u251c\u2500\u2500 MyFabricComponentManagerDelegate.java\n\u2502                   \u2514\u2500\u2500 MyFabricComponentManagerInterface.java\n\u251c\u2500\u2500 jni\n\u2502   \u251c\u2500\u2500 Android.mk\n\u2502   \u251c\u2500\u2500 CMakeLists.txt\n\u2502   \u251c\u2500\u2500 MyFabricComponent-generated.cpp\n\u2502   \u251c\u2500\u2500 MyFabricComponent.h\n\u2502   \u2514\u2500\u2500 react\n\u2502       \u2514\u2500\u2500 renderer\n\u2502           \u2514\u2500\u2500 components\n\u2502               \u2514\u2500\u2500 MyFabricComponent\n\u2502                   \u251c\u2500\u2500 ComponentDescriptors.h\n\u2502                   \u251c\u2500\u2500 EventEmitters.cpp\n\u2502                   \u251c\u2500\u2500 EventEmitters.h\n\u2502                   \u251c\u2500\u2500 Props.cpp\n\u2502                   \u251c\u2500\u2500 Props.h\n\u2502                   \u251c\u2500\u2500 ShadowNodes.cpp\n\u2502                   \u2514\u2500\u2500 ShadowNodes.h\n\u2514\u2500\u2500 schema.json\n")))),(0,a.kt)("p",null,"Java \u4e0d\u80fd\u50cf Objective-C++ \u90a3\u6837\u4e1d\u6ed1\u65e0\u7f1d\u5730\u6267\u884c C++ \u4ee3\u7801\u3002\u4e3a\u4e86\u786e\u4fdd\u6b63\u5e38\u8fd0\u884c\uff0c",(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u4f1a\u5728\u5b9a\u4e49\u4e86 Java \u539f\u751f\u63a5\u53e3\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"jni")," \u76ee\u5f55\uff0c\u751f\u6210\u4e00\u4e9b Java \u548c C++ \u4e4b\u95f4\u7684\u80f6\u6c34\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cTurboModule \u548c Fabric \u7ec4\u4ef6\u5206\u522b\u4f7f\u7528\u4e0d\u540c\u7684\u6784\u5efa\u6587\u4ef6\u63cf\u8ff0\u7b26\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"Android.mk")," \u548c",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt"),"\u3002Android App \u5c06\u4f7f\u7528\u8fd9\u4e24\u4e2a\u63cf\u8ff0\u7b26\u6784\u5efa\u5916\u90e8\u6a21\u5757\u3002"),(0,a.kt)("h3",v({},{id:"turbomodule"}),"TurboModule"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Codegen")," \u4f1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"java")," \u5305\u4e2d\u521b\u5efa\u4e00\u4e2a\u62bd\u8c61\u7c7b\uff0c\u5e76\u4e0e TurboModule \u4f7f\u7528\u76f8\u540c\u547d\u540d\uff0c\u8fd9\u4e2a\u62bd\u8c61\u7c7b\u5fc5\u987b\u4f7f\u7528 JNI C++ \u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u63a5\u7740\uff0cC++ \u6587\u4ef6\u5c06\u751f\u6210\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"jni")," \u76ee\u5f55\u3002\u5b83\u4eec\u548c iOS \u5e73\u53f0\u4e0a\u7684\u5185\u5bb9\u4e00\u6837\uff0c\u91cc\u9762\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"MyTurbomodule.h")," \u7684\u63a5\u53e3\u6587\u4ef6\uff0c\u8fd8\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"MyTurbomodule-generated.cpp")," \u7684\u5b9e\u73b0\u6587\u4ef6\u3002\u524d\u8005\u662f\u4e00\u4e2a\u63a5\u53e3\uff0c\u7528\u4e8e\u8ba9 React Native \u4e3a TurboModule \u521d\u59cb\u5316 JSI \u63a5\u53e3\uff1b\u540e\u8005\u662f\u4e00\u4e2a\u5b9e\u73b0\u6587\u4ef6\uff0c\u91cc\u9762\u5305\u542b\u4e86 JS \u4e0e\u539f\u751f\u5e73\u53f0\u4ea4\u4e92\u7684\u903b\u8f91\u4ee3\u7801\u3002"),(0,a.kt)("h3",v({},{id:"fabric-\u7ec4\u4ef6-1"}),"Fabric \u7ec4\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u7684 Fabric \u7ec4\u4ef6\u5305\u542b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"MyFabricComponentManagerInterface.java")," \u548c",(0,a.kt)("inlineCode",{parentName:"p"},"MyFabricComponentManagerDelegate.java"),"\uff0c\u4e24\u8005\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"java")," \u5305\u5185\u90e8\u3002\u5b83\u4eec\u7531\u539f\u751f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"MyFabricComponentManager")," \u5b9e\u73b0\u548c\u8c03\u7528\uff0c\u4ee5\u4fbf\u4e8e\u5728\u8fd0\u884c\u65f6\u80fd\u88ab\u6b63\u786e\u52a0\u8f7d\uff08\u53c2\u8003 ",(0,a.kt)("a",v({parentName:"p"},{href:"./pillars-fabric-components"}),"Fabric \u7ec4\u4ef6")," \u7ae0\u8282\u7684\u6307\u5f15\uff0c\u4e86\u89e3\u66f4\u591a\u76f8\u5173\u7ec6\u8282\uff09 \u3002"),(0,a.kt)("p",null,"\u4e4b\u540e\uff0c\u6709\u4e00\u5c42 JNI C++ \u6587\u4ef6\u7528\u4e8e Fabric \u6e32\u67d3\u7ec4\u4ef6\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ShadowNode")," \u662f Fabric \u7ec4\u4ef6\u7684\u57fa\u672c\u5143\u7d20\uff0c\u5b83\u4ee3\u8868\u5728 React \u62bd\u8c61\u6811\u4e0a\u7684\u4e00\u4e2a\u8282\u70b9\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ShadowNode")," \u8868\u793a\u7684\u662f\u4e00\u4e2a React \u5b9e\u4f53\uff0c\u56e0\u6b64\u5b83\u9700\u8981\u4f20\u5165\u4e00\u4e9b\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Props")," \u6587\u4ef6\u5b9a\u4e49\u7684\u53c2\u6570\u3002\u6709\u65f6\u5019\u8fd8\u53e6\u5916\u9700\u8981\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitter"),"\uff0c\u5b83\u5728\u76f8\u5e94\u7684\u6587\u4ef6\u4e2d\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Codegen")," \u8fd8\u521b\u5efa\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentDescriptor.h")," \uff0c\u7528\u4e8e\u6b63\u786e\u83b7\u53d6 Fabric \u7ec4\u4ef6\u5bf9\u8c61\u3002"))}y.isMDXComponent=!0}}]);