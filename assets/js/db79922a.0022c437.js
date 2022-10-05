"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[79294],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11674:function(e,t,n){var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",l=r?"macos":o?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(27378),r=n(38944),o="tabItem_wHwb",i=Object.defineProperty,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function c({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},27789:function(e,t,n){n.d(t,{Z:function(){return y}});var a=n(27378),r=n(38944),o=n(14185),i=n(27886),l=n(77184),p=n(12112),s="tabList_J5MA",d="tabItem_l0OV",c=Object.defineProperty,u=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&g(e,n,t[n]);if(m)for(var n of m(t))b.call(t,n)&&g(e,n,t[n]);return e};function k(e){var t,n;const{lazy:o,block:c,defaultValue:m,values:f,groupId:b,className:g}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=f?f:k.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),w=(0,i.l)(y,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===m?m:null!=(n=null!=m?m:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?n:k[0].props.value;if(null!==C&&!y.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:T}=(0,l.U)(),[O,M]=(0,a.useState)(C),P=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=b){const e=N[b];null!=e&&e!==O&&y.some((t=>t.value===e))&&M(e)}const F=e=>{const t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==O&&(j(t),M(a),null!=b&&T(b,String(a)))},S=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;a=null!=(t=P[n])?t:P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;a=null!=(n=P[t])?n:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},g)},y.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=v({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>P.push(e),onKeyDown:S,onFocus:F,onClick:F},n),i={className:(0,r.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":O===e})},u(o,h(i))),null!=t?t:e);var o,i}))),o?(0,a.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function y(e){const t=(0,o.Z)();return a.createElement(k,v({key:String(t)},e))}},38286:function(e,t,n){n.d(t,{ZP:function(){return h}});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&d(e,n,t[n]);return e};const u={toc:[]};function h(e){var t,n=e,{components:r}=n,d=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},u),d),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",c({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,a.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,a.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,a.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}h.isMDXComponent=!0},39642:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return C},frontMatter:function(){return b},metadata:function(){return v},toc:function(){return y}});var a=n(35318),r=n(38286),o=n(27789),i=n(86386),l=n(11674),p=Object.defineProperty,s=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(c)for(var n of c(t))h.call(t,n)&&m(e,n,t[n]);return e};const b={id:"pillars-codegen",title:"Codegen"},g=void 0,v={unversionedId:"the-new-architecture/pillars-codegen",id:"the-new-architecture/pillars-codegen",title:"Codegen",description:"The Codegen is not a proper pillar, but it is a tool that can be used to avoid writing of a lot of repetitive code. Using the Codegen is not mandatory: all the code that is generated by it can also be written manually. However, it generates scaffolding code that could save you a lot of time.",source:"@site/../cndocs/the-new-architecture/pillars-codegen.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/pillars-codegen",permalink:"/docs/next/the-new-architecture/pillars-codegen",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/pillars-codegen.md",tags:[],version:"current",frontMatter:{id:"pillars-codegen",title:"Codegen"},sidebar:"docs",previous:{title:"Fabric Components",permalink:"/docs/next/the-new-architecture/pillars-fabric-components"},next:{title:"What Backward Compatibility Is",permalink:"/docs/next/the-new-architecture/backward-compatibility"}},k={},y=[{value:"Running the Codegen",id:"running-the-codegen",level:2},{value:"The Generated Code",id:"the-generated-code",level:2},{value:"TurboModules",id:"turbomodules",level:3},{value:"Fabric Components",id:"fabric-components",level:3},{value:"RCTThirdPartyFabricComponentsProvider",id:"rctthirdpartyfabriccomponentsprovider",level:3},{value:"Running the Codegen",id:"running-the-codegen-1",level:2},{value:"The Generated Code",id:"the-generated-code-1",level:2},{value:"TurboModule",id:"turbomodule",level:3},{value:"Fabric Component",id:"fabric-component",level:3}],w={toc:y};function C(e){var t,n=e,{components:p}=n,m=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},w),m),s(t,d({components:p,mdxType:"MDXLayout"}))),(0,a.kt)(r.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," is not a proper pillar, but it is a tool that can be used to avoid writing of a lot of repetitive code. Using the ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," is not mandatory: all the code that is generated by it can also be written manually. However, it generates scaffolding code that could save you a lot of time."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," is invoked automatically by React Native every time an iOS or an Android app is built. Occasionally, you would like to run the scripts that generate the code manually to know which types and files are actually generated: this is a common scenario when developing ",(0,a.kt)("a",f({parentName:"p"},{href:"./pillars-turbomodules"}),(0,a.kt)("strong",{parentName:"a"},"TurboModules"))," and ",(0,a.kt)("a",f({parentName:"p"},{href:"./pillars-fabric-components"}),(0,a.kt)("strong",{parentName:"a"},"Fabric Components")),", for example."),(0,a.kt)("p",null,"This guide teaches how to configure the ",(0,a.kt)("strong",{parentName:"p"},"Codegen"),", how to invoke it manually for each platform, and it describes the generated code."),(0,a.kt)("h1",f({},{id:"prerequisites"}),"Prerequisites"),(0,a.kt)("p",null,"You always need a React Native app to generate the code properly, even when invoking the ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," manually."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," process is tightly coupled with the build of the app and the scripts are located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native")," NPM package."),(0,a.kt)("p",null,"For the sake of this guide, create a project using the React Native CLI as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-sh"}),"npx react-native init SampleApp --version 0.70.0\n")),(0,a.kt)("admonition",f({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"This guide assumes that the React Native version in use is 0.70.0 or greater.\nPrevious versions of React Native uses a version of ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," that requires a slightly different setup.")),(0,a.kt)("p",null,"Then, add the module that requires the ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," as an NPM dependency of the app:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-sh"}),"yarn add <path/to/your/TurboModule_or_FabricComponent>\n")),(0,a.kt)("p",null,"See how to create a ",(0,a.kt)("a",f({parentName:"p"},{href:"pillars-turbomodules"}),"TurboModule")," or a ",(0,a.kt)("a",f({parentName:"p"},{href:"pillars-fabric-components"}),"Fabric Component")," to get more information on how to configure them."),(0,a.kt)("p",null,"The rest of this guide assumes that you have a ",(0,a.kt)("inlineCode",{parentName:"p"},"TurboModule")," and/or a ",(0,a.kt)("inlineCode",{parentName:"p"},"Fabric Component")," properly set up."),(0,a.kt)("h1",f({},{id:"ios"}),"iOS"),(0,a.kt)("h2",f({},{id:"running-the-codegen"}),"Running the Codegen"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," for iOS relies on some Node scripts that are invoked during the build process. The scripts are located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyApp/node_modules/react_native/scripts/")," folder."),(0,a.kt)("p",null,"The script that you have to run is the ",(0,a.kt)("inlineCode",{parentName:"p"},"generate-artifacts.js")," script. This searches among all the dependencies of the app, looking for JS files which respects some specific conventions (look at ",(0,a.kt)("a",f({parentName:"p"},{href:"pillars-turbomodules"}),"TurboModules")," and ",(0,a.kt)("a",f({parentName:"p"},{href:"pillars-fabric-components"}),"Fabric Components")," sections for details) and it generates the required code."),(0,a.kt)("p",null,"To invoke the script you can run this command from the root folder of your app:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-sh"}),"node node_modules/react_native/scripts/generate-artifacts.js \\\n    --path SampleApp/ \\\n    --outputPath <an/output/path> \\\n")),(0,a.kt)("p",null,"Given that the app has ",(0,a.kt)("inlineCode",{parentName:"p"},"TurboModules")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"Fabric Components")," configured as a dependency, the ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," will look for all of them and it will generate the code in the path you provided."),(0,a.kt)("h2",f({},{id:"the-generated-code"}),"The Generated Code"),(0,a.kt)("p",null,"If you run the ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," in your app with an output path of ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen"),", for example, you obtain the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:'language-title="iOS',metastring:'Codegen output"',Codegen:!0,'output"':!0}),"codegen\n\u2514\u2500\u2500 build\n    \u2514\u2500\u2500 generated\n        \u2514\u2500\u2500 ios\n            \u251c\u2500\u2500 MyTurboModuleSpecs\n            \u2502   \u251c\u2500\u2500 MyTurboModuleSpecs-generated.mm\n            \u2502   \u2514\u2500\u2500 MyTurboModuleSpecs.h\n            \u251c\u2500\u2500 FBReactNativeSpec\n            \u2502   \u251c\u2500\u2500 FBReactNativeSpec-generated.mm\n            \u2502   \u2514\u2500\u2500 FBReactNativeSpec.h\n            \u251c\u2500\u2500 RCTThirdPartyFabricComponentsProvider.h\n            \u251c\u2500\u2500 RCTThirdPartyFabricComponentsProvider.mm\n            \u2514\u2500\u2500 react\n                \u2514\u2500\u2500 renderer\n                    \u2514\u2500\u2500 components\n                        \u251c\u2500\u2500 MyFabricComponent\n                        \u2502   \u251c\u2500\u2500 ComponentDescriptors.h\n                        \u2502   \u251c\u2500\u2500 EventEmitters.cpp\n                        \u2502   \u251c\u2500\u2500 EventEmitters.h\n                        \u2502   \u251c\u2500\u2500 Props.cpp\n                        \u2502   \u251c\u2500\u2500 Props.h\n                        \u2502   \u251c\u2500\u2500 RCTComponentViewHelpers.h\n                        \u2502   \u251c\u2500\u2500 ShadowNodes.cpp\n                        \u2502   \u2514\u2500\u2500 ShadowNodes.h\n                        \u2514\u2500\u2500 rncore\n                            \u251c\u2500\u2500 ComponentDescriptors.h\n                            \u251c\u2500\u2500 EventEmitters.cpp\n                            \u251c\u2500\u2500 EventEmitters.h\n                            \u251c\u2500\u2500 Props.cpp\n                            \u251c\u2500\u2500 Props.h\n                            \u251c\u2500\u2500 RCTComponentViewHelpers.h\n                            \u251c\u2500\u2500 ShadowNodes.cpp\n                            \u2514\u2500\u2500 ShadowNodes.h\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"codegen")," folder sits at the root of the hierarchy, as expected. Nested into it there are two more folders: ",(0,a.kt)("inlineCode",{parentName:"p"},"build/generated"),"."),(0,a.kt)("p",null,"Then, there is an ",(0,a.kt)("inlineCode",{parentName:"p"},"ios")," folder which contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A custom folder for each TurboModule."),(0,a.kt)("li",{parentName:"ul"},"The header (",(0,a.kt)("inlineCode",{parentName:"li"},".h"),") and implementation (",(0,a.kt)("inlineCode",{parentName:"li"},".mm"),") files for the ",(0,a.kt)("inlineCode",{parentName:"li"},"RCTThirdPartyFabricComponentsProvider"),"."),(0,a.kt)("li",{parentName:"ul"},"A base ",(0,a.kt)("inlineCode",{parentName:"li"},"react/renderer/components")," folder which contains a custom folder for each ",(0,a.kt)("inlineCode",{parentName:"li"},"Fabric Component"),".")),(0,a.kt)("p",null,"In the example above, there are both a TurboModule and a set of Fabric Components. These are generated by React Native itself: ",(0,a.kt)("inlineCode",{parentName:"p"},"FBReactNativeSpec")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rncore"),". These modules will always appear even if you don't have any extra TurboModule or Fabric Component: React Native requires them in order to work properly."),(0,a.kt)("h3",f({},{id:"turbomodules"}),"TurboModules"),(0,a.kt)("p",null,"Each TurboModule's folder contains two files: an interface file and an implementation file."),(0,a.kt)("p",null,"The interface files have the same name of the TurboModule and they contain methods to initialize the JSI interface."),(0,a.kt)("p",null,"The implementation files, instead, have the ",(0,a.kt)("inlineCode",{parentName:"p"},"-generated")," suffix and they contains the logic to invoke the native methods from JS and viceversa."),(0,a.kt)("h3",f({},{id:"fabric-components"}),"Fabric Components"),(0,a.kt)("p",null,"The content of each Fabric Component folder contains several files. The basic element for a Fabric Componenent is the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShadowNode"),": it represents a node in the React absract tree. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ShadowNode")," represents a React entity, therefore it could need some props, which are defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Props")," files and, sometimes, an ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitter"),", defined in the corresponding file."),(0,a.kt)("p",null,"Additionally, the ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," also creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentDescriptor.h")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTComponentViewHelpers.h")," files: the first one is used by React Native and Fabric to properly get a reference to the Component, while the latter contains some helper methods and protocols that can be implemented by the Native View to properly respond to JSI invocations."),(0,a.kt)("p",null,"For further details about how Fabric works, have a look at the ",(0,a.kt)("a",f({parentName:"p"},{href:"/architecture/fabric-renderer"}),"Renderer")," section."),(0,a.kt)("h3",f({},{id:"rctthirdpartyfabriccomponentsprovider"}),"RCTThirdPartyFabricComponentsProvider"),(0,a.kt)("p",null,"These are an interface and an implementation files for a registry. React Native uses this registry at runtime to retrieve the right class for a required Fabric Component. Once React Native has an handle to that class, it can instantiate it."),(0,a.kt)("h1",f({},{id:"android"}),"Android"),(0,a.kt)("h2",f({},{id:"running-the-codegen-1"}),"Running the Codegen"),(0,a.kt)("p",null,"Android ",(0,a.kt)("inlineCode",{parentName:"p"},"Codegen")," relies on a Gradle task to generate the required code. First, you need to configure the Android app to work with the New Architecture, otherwise the Gradle task fails."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"MyApp/android/gradle.properties")," file."),(0,a.kt)("li",{parentName:"ol"},"Flip the ",(0,a.kt)("inlineCode",{parentName:"li"},"newArchEnabled")," flag from ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")),(0,a.kt)("p",null,"After that, you can navigate into the ",(0,a.kt)("inlineCode",{parentName:"p"},"SampleApp/android")," folder and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-sh"}),"./gradlew generateCodegenArtifactsFromSchema\n")),(0,a.kt)("p",null,"This tasks invokes the ",(0,a.kt)("inlineCode",{parentName:"p"},"generateCodegenArtifactsFromSchema")," on all the the imported projects of the app (the app and all the node modules which are linked to it). It generates the code in the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules/<dependency>")," folder. So, for example, if you have a Fabric Component whose node module is called ",(0,a.kt)("inlineCode",{parentName:"p"},"my-fabric-component"),", the generated code is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"SampleApp/node_modules/my-fabric-component/android/build/generated/source/codegen")," path."),(0,a.kt)("h2",f({},{id:"the-generated-code-1"}),"The Generated Code"),(0,a.kt)("p",null,"Once the Gradle task completes, you can see different structures for a TurboModule or for a Fabric Component. The following tab shows how they appear:"),(0,a.kt)(o.Z,{groupId:"android-codegen",defaultValue:l.Z.defaultNewArchFeature,values:l.Z.newArchFeatures,mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"turbomodules",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-sh"}),"codegen\n\u251c\u2500\u2500 java\n\u2502   \u2514\u2500\u2500 com\n\u2502       \u2514\u2500\u2500 MyTurbomodule\n\u2502           \u2514\u2500\u2500 MyTurbomodule.java\n\u251c\u2500\u2500 jni\n\u2502   \u251c\u2500\u2500 Android.mk\n\u2502   \u251c\u2500\u2500 MyTurbomodule-generated.cpp\n\u2502   \u251c\u2500\u2500 MyTurbomodule.h\n\u2502   \u2514\u2500\u2500 react\n\u2502       \u2514\u2500\u2500 renderer\n\u2502           \u2514\u2500\u2500 components\n\u2502               \u2514\u2500\u2500 MyTurbomodule\n\u2502                   \u251c\u2500\u2500 ComponentDescriptors.h\n\u2502                   \u251c\u2500\u2500 EventEmitters.cpp\n\u2502                   \u251c\u2500\u2500 EventEmitters.h\n\u2502                   \u251c\u2500\u2500 Props.cpp\n\u2502                   \u251c\u2500\u2500 Props.h\n\u2502                   \u251c\u2500\u2500 ShadowNodes.cpp\n\u2502                   \u2514\u2500\u2500 ShadowNodes.h\n\u2514\u2500\u2500 schema.json\n"))),(0,a.kt)(i.Z,{value:"fabric-components",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-sh"}),"codegen\n\u251c\u2500\u2500 java\n\u2502   \u2514\u2500\u2500 com\n\u2502       \u2514\u2500\u2500 facebook\n\u2502           \u2514\u2500\u2500 react\n\u2502               \u2514\u2500\u2500 viewmanagers\n\u2502                   \u251c\u2500\u2500 MyFabricComponentManagerDelegate.java\n\u2502                   \u2514\u2500\u2500 MyFabricComponentManagerInterface.java\n\u251c\u2500\u2500 jni\n\u2502   \u251c\u2500\u2500 Android.mk\n\u2502   \u251c\u2500\u2500 CMakeLists.txt\n\u2502   \u251c\u2500\u2500 MyFabricComponent-generated.cpp\n\u2502   \u251c\u2500\u2500 MyFabricComponent.h\n\u2502   \u2514\u2500\u2500 react\n\u2502       \u2514\u2500\u2500 renderer\n\u2502           \u2514\u2500\u2500 components\n\u2502               \u2514\u2500\u2500 MyFabricComponent\n\u2502                   \u251c\u2500\u2500 ComponentDescriptors.h\n\u2502                   \u251c\u2500\u2500 EventEmitters.cpp\n\u2502                   \u251c\u2500\u2500 EventEmitters.h\n\u2502                   \u251c\u2500\u2500 Props.cpp\n\u2502                   \u251c\u2500\u2500 Props.h\n\u2502                   \u251c\u2500\u2500 ShadowNodes.cpp\n\u2502                   \u2514\u2500\u2500 ShadowNodes.h\n\u2514\u2500\u2500 schema.json\n")))),(0,a.kt)("p",null,"Java can't interoperate seamlessly with C++ as Objective-C++ does. To work properly, the ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," creates some bridging between the Java and the C++ world in the ",(0,a.kt)("inlineCode",{parentName:"p"},"jni")," folder, where the Java Native Interfaces are defined."),(0,a.kt)("p",null,"Notice that both TurboModules and Fabric Components comes with two build file descriptors: the ",(0,a.kt)("inlineCode",{parentName:"p"},"Android.mk")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"CMakeLists.txt"),". These are used by the Android app to actually build the external modules."),(0,a.kt)("h3",f({},{id:"turbomodule"}),"TurboModule"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," generates a Java abstract class in the ",(0,a.kt)("inlineCode",{parentName:"p"},"java")," package with the same name of the TurboModule. This abstract class has to be implemented by the JNI C++ implementation."),(0,a.kt)("p",null,"Then, it generates the C++ files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"jni")," folder. They follow the same iOS convention: there is an interface called ",(0,a.kt)("inlineCode",{parentName:"p"},"MyTurbomodule.h")," and an implementation file called ",(0,a.kt)("inlineCode",{parentName:"p"},"MyTurbomodule-generated.cpp"),". The former is an interface that allows React Natvie to initialize the JSI interface for the TurboModule. The latter is the implementation file which contains the logic to invoke the native method from JS and viceversa."),(0,a.kt)("h3",f({},{id:"fabric-component"}),"Fabric Component"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," for a Fabric Component contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"MyFabricComponentManagerInterface.java")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"MyFabricComponentManagerDelegate.java")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"java")," package. They are implemented and used by the native ",(0,a.kt)("inlineCode",{parentName:"p"},"MyFabricComponentManager")," required to properly load the component at runtime (See the guide on how to create a ",(0,a.kt)("a",f({parentName:"p"},{href:"./pillars-fabric-components"}),"Fabric Component")," for details)."),(0,a.kt)("p",null,"Then, there is a layer of JNI C++ files that are used by Fabric to render the components. The basic element for a Fabric Componenent is the ",(0,a.kt)("inlineCode",{parentName:"p"},"ShadowNode"),": it represents a node in the React absract tree. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ShadowNode")," represents a React entity, therefore it could need some props, which are defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Props")," files and, sometimes, an ",(0,a.kt)("inlineCode",{parentName:"p"},"EventEmitter"),", defined in the corresponding file."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Codegen")," also creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"ComponentDescriptor.h")," which is required to get a proper handle to the Fabric Component."))}C.isMDXComponent=!0}}]);