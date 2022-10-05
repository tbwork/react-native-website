"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[4487],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11674:function(e,t,n){var a=n(63445);const o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=o?"ios":"android",l=o?"macos":r?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:l,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(27378),o=n(38944),r="tabItem_wHwb",i=Object.defineProperty,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function d({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,o.Z)(r,n)},{hidden:t}),e)}},27789:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(27378),o=n(38944),r=n(14185),i=n(27886),l=n(77184),u=n(12112),s="tabList_J5MA",c="tabItem_l0OV",d=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&k(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&k(e,n,t[n]);return e};function y(e){var t,n;const{lazy:r,block:d,defaultValue:h,values:b,groupId:f,className:k}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=b?b:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),w=(0,i.l)(g,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===h?h:null!=(n=null!=h?h:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:M,setTabGroupChoices:T}=(0,l.U)(),[O,C]=(0,a.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=f){const e=M[f];null!=e&&e!==O&&g.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=E.indexOf(t),a=g[n].value;a!==O&&(_(t),C(a),null!=f&&T(f,String(a)))},A=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;a=null!=(t=E[n])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=null!=(n=E[t])?n:E[E.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},k)},g.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(r=v({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:e=>E.push(e),onKeyDown:A,onFocus:j,onClick:j},n),i={className:(0,o.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":O===e})},p(r,m(i))),null!=t?t:e);var r,i}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function g(e){const t=(0,r.Z)();return a.createElement(y,v({key:String(t)},e))}},920:function(e,t,n){n.d(t,{ZP:function(){return m}});var a=n(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const p={toc:[]};function m(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},p),c),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",d({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u5185\u5bb9\u4ecd\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u5185\u5bb9\u4f1a\u968f\u7740\u7248\u672c\u7684\u8fed\u4ee3\u8fdb\u884c\u4fee\u6539\u3002\u60a8\u53ef\u968f\u65f6\u5728\u6211\u4eec\u7684",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u7ec4\u7684\u8ba8\u8bba\u533a"),"\u53d1\u9001\u53cd\u9988\u3002\n\u6b64\u5916\uff0c\u672c\u6587\u6863\u8fd8\u5305\u542b\u4e86\u82e5\u5e72\u9700\u624b\u52a8\u914d\u7f6e\u7684\u6b65\u9aa4\uff0c\u4f46\u8fd9\u4e0d\u4ee3\u8868\u65b0\u67b6\u6784\u7a33\u5b9a\u7248\u7684\u6700\u7ec8\u5f00\u53d1\u4f53\u9a8c\u3002\u6211\u4eec\u4ecd\u5728\u5f00\u53d1\u76f8\u5173\u7684\u5de5\u5177\u3001\u6a21\u677f\u548c\u7b2c\u4e09\u65b9\u5e93\uff0c\u5e2e\u52a9\u4f60\u66f4\u5feb\u5730\u8fc1\u79fb\u5230\u65b0\u67b6\u6784\u4e0a\uff0c\u800c\u975e\u4ece\u5934\u5f00\u59cb\u914d\u7f6e\u73af\u5883\u3002")))}m.isMDXComponent=!0},38495:function(e,t,n){n.d(t,{ZP:function(){return m}});var a=n(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e};const p={toc:[]};function m(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},p),c),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",d({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"The TypeScript support for the New Architecture is still in beta.")))}m.isMDXComponent=!0},85039:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return v},default:function(){return M},frontMatter:function(){return k},metadata:function(){return y},toc:function(){return w}});var a=n(35318),o=n(27789),r=n(86386),i=n(11674),l=n(38495),u=n(920),s=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&b(e,n,t[n]);if(p)for(var n of p(t))h.call(t,n)&&b(e,n,t[n]);return e};const k={id:"backward-compatibility-turbomodules",title:"TurboModules as Native Modules"},v=void 0,y={unversionedId:"the-new-architecture/backward-compatibility-turbomodules",id:"version-0.70/the-new-architecture/backward-compatibility-turbomodules",title:"TurboModules as Native Modules",description:"The creation of a backward compatible TurboModule requires the knowledge of how to create a TurboModule. To recall these concepts, have a look at this guide.",source:"@site/versioned_docs/version-0.70/the-new-architecture/backward-compatibility-turbomodules.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/backward-compatibility-turbomodules",permalink:"/docs/the-new-architecture/backward-compatibility-turbomodules",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/backward-compatibility-turbomodules.md",tags:[],version:"0.70",frontMatter:{id:"backward-compatibility-turbomodules",title:"TurboModules as Native Modules"},sidebar:"docs",previous:{title:"What Backward Compatibility Is",permalink:"/docs/the-new-architecture/backward-compatibility"},next:{title:"Fabric Components as Native Components",permalink:"/docs/the-new-architecture/backward-compatibility-fabric-components"}},g={},w=[{value:"Configure the TurboModule Dependencies",id:"configure-the-turbomodule-dependencies",level:2},{value:'<a name="dependencies-ios" />iOS',id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"Update the codebase",id:"update-the-codebase",level:2},{value:"iOS",id:"ios-1",level:3},{value:"Android",id:"android-1",level:3},{value:"Unify the JavaScript specs",id:"unify-the-javascript-specs",level:2}],N={toc:w};function M(e){var t,n=e,{components:s}=n,b=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=f(f({},N),b),c(t,d({components:s,mdxType:"MDXLayout"}))),(0,a.kt)(u.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("admonition",f({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"The creation of a backward compatible TurboModule requires the knowledge of how to create a TurboModule. To recall these concepts, have a look at this ",(0,a.kt)("a",f({parentName:"p"},{href:"pillars-turbomodules"}),"guide"),"."),(0,a.kt)("p",{parentName:"admonition"},"TurboModules only works when the New Architecture is properly setup. If you already have a library that you want to migrate to the New Architecture, have a look at the ",(0,a.kt)("a",f({parentName:"p"},{href:"../new-architecture-intro"}),"migration guide")," as well.")),(0,a.kt)("p",null,"Creating a backward compatible TurboModule lets your users continue leverage your library, independently from the architecture they use. The creation of such a module requires a few steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure the library so that dependencies are prepared set up properly for both the Old and the New Architecture."),(0,a.kt)("li",{parentName:"ol"},"Update the codebase so that the New Architecture types are not compiled when not available."),(0,a.kt)("li",{parentName:"ol"},"Uniform the JavaScript API so that your user code won't need changes.")),(0,a.kt)(l.ZP,{mdxType:"BetaTS"}),(0,a.kt)("p",null,"While the last step is the same for all the platforms, the first two steps are different for iOS and Android."),(0,a.kt)("h2",f({},{id:"configure-the-turbomodule-dependencies"}),"Configure the TurboModule Dependencies"),(0,a.kt)("h3",f({},{id:"ios"}),(0,a.kt)("a",{name:"dependencies-ios"}),"iOS"),(0,a.kt)("p",null,"The Apple platform installs TurboModules using ",(0,a.kt)("a",f({parentName:"p"},{href:"https://cocoapods.org"}),"Cocoapods")," as dependency manager."),(0,a.kt)("p",null,"Every TurboModule defines a ",(0,a.kt)("inlineCode",{parentName:"p"},"podspec")," that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ruby"}),'require "json"\n\npackage = JSON.parse(File.read(File.join(__dir__, "package.json")))\n\nfolly_version = \'2021.07.22.00\'\nfolly_compiler_flags = \'-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32\'\n\nPod::Spec.new do |s|\n  # Default fields for a valid podspec\n  s.name            = "<TM Name>"\n  s.version         = package["version"]\n  s.summary         = package["description"]\n  s.description     = package["description"]\n  s.homepage        = package["homepage"]\n  s.license         = package["license"]\n  s.platforms       = { :ios => "11.0" }\n  s.author          = package["author"]\n  s.source          = { :git => package["repository"], :tag => "#{s.version}" }\n\n  s.source_files    = "ios/**/*.{h,m,mm,swift}"\n  # React Native Core dependency\n  s.dependency "React-Core"\n\n  #\xa0The following lines are required by the New Architecture.\n  s.compiler_flags = folly_compiler_flags + " -DRCT_NEW_ARCH_ENABLED=1"\n  s.pod_target_xcconfig    = {\n      "HEADER_SEARCH_PATHS" => "\\"$(PODS_ROOT)/boost\\"",\n      "CLANG_CXX_LANGUAGE_STANDARD" => "c++17"\n  }\n\n  s.dependency "React-Codegen"\n  s.dependency "RCT-Folly", folly_version\n  s.dependency "RCTRequired"\n  s.dependency "RCTTypeSafety"\n  s.dependency "ReactCommon/turbomodule/core"\n\nend\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"goal")," is to avoid installing the dependencies when the app is prepared for the Old Architecture."),(0,a.kt)("p",null,"When we want to install the dependencies we use the following commands, depending on the architecture:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-sh"}),"# For the Old Architecture, we use:\npod install\n\n# For the New Architecture, we use:\nRCT_NEW_ARCH_ENABLED=1 pod install\n")),(0,a.kt)("p",null,"Therefore, we can leverage this environment variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"podspec")," to exclude the settings and the dependencies that are related to the New Architecture:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-diff"}),"+ if ENV['RCT_NEW_ARCH_ENABLED'] == '1' then\n    # The following lines are required by the New Architecture.\n    s.compiler_flags = folly_compiler_flags + \" -DRCT_NEW_ARCH_ENABLED=1\"\n    # ... other dependencies ...\n    s.dependency \"ReactCommon/turbomodule/core\"\n+ end\nend\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," guard prevents the dependencies from being installed when the environment variable is not set."),(0,a.kt)("h3",f({},{id:"android"}),"Android"),(0,a.kt)("p",null,"To create a module that can work with both architectures, you need to configure Gradle to choose which files need to be compiled depending on the chosen architecture. This can be achieved by using ",(0,a.kt)("strong",{parentName:"p"},"different source sets")," in the Gradle configuration."),(0,a.kt)("admonition",f({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"Please note that this is currently the suggested approach. While it might lead to some code duplication, it will ensure the maximum compatibility with both architectures. You will see how to reduce the duplication in the next section.")),(0,a.kt)("p",null,"To configure the TurboModule so that it picks the proper sourceset, you have to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle")," file in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-diff",metastring:'title="build.gradle"',title:'"build.gradle"'}),"+// Add this function in case you don't have it already\n+ def isNewArchitectureEnabled() {\n+    return project.hasProperty(\"newArchEnabled\") && project.newArchEnabled == \"true\"\n+}\n\n\n// ... other parts of the build file\n\ndefaultConfig {\n        minSdkVersion safeExtGet('minSdkVersion', 21)\n        targetSdkVersion safeExtGet('targetSdkVersion', 31)\n+        buildConfigField(\"boolean\", \"IS_NEW_ARCHITECTURE_ENABLED\", isNewArchitectureEnabled().toString())\n+    }\n+\n+    sourceSets {\n+        main {\n+            if (isNewArchitectureEnabled()) {\n+                java.srcDirs += ['src/newarch']\n+            } else {\n+                java.srcDirs += ['src/oldarch']\n+            }\n+        }\n    }\n}\n")),(0,a.kt)("p",null,"This changes do three main things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The first lines define a function that returns whether the New Architecture is enabled or not."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"buildConfigField")," line defines a build configuration boolean field called ",(0,a.kt)("inlineCode",{parentName:"li"},"IS_NEW_ARCHITECTURE_ENABLED"),", and initialize it using the function declared in the first step. This allows you to check at runtime if a user has specified the ",(0,a.kt)("inlineCode",{parentName:"li"},"newArchEnabled")," property or not."),(0,a.kt)("li",{parentName:"ol"},"The last lines leverage the function declared in step one to decide which source sets we need to build, depending on the choosen architecture.")),(0,a.kt)("h2",f({},{id:"update-the-codebase"}),"Update the codebase"),(0,a.kt)("h3",f({},{id:"ios-1"}),"iOS"),(0,a.kt)("p",null,"The second step is to instruct Xcode to avoid compiling all the lines using the New Architecture types and files when we are building an app with the Old Architecture."),(0,a.kt)("p",null,"The file to change is the module implementation file, which is usually a ",(0,a.kt)("inlineCode",{parentName:"p"},"<your-module>.mm")," file. That file is structured as follow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some ",(0,a.kt)("inlineCode",{parentName:"li"},"#import")," statements, among which there is a ",(0,a.kt)("inlineCode",{parentName:"li"},"<GeneratedSpec>.h")," file."),(0,a.kt)("li",{parentName:"ul"},"The module implementation, using the various ",(0,a.kt)("inlineCode",{parentName:"li"},"RCT_EXPORT_xxx")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"RCT_REMAP_xxx")," macros."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"getTurboModule:")," function, which uses the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyModuleSpecJSI>")," type, generated by The New Architecture.")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"goal")," is to make sure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"TurboModule")," still builds with the Old Architecture. To achieve that, we can wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},'#import "<GeneratedSpec>.h"')," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"getTurboModule:")," function into an ",(0,a.kt)("inlineCode",{parentName:"p"},"#ifdef RCT_NEW_ARCH_ENABLED")," compilation directive, as shown in the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-diff"}),'#import "<MyModuleHeader>.h"\n+ #ifdef RCT_NEW_ARCH_ENABLED\n#import "<GeneratedSpec>.h"\n+ #endif\n\n// ... rest of your module\n\n+ #ifdef RCT_NEW_ARCH_ENABLED\n - (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:\n    (const facebook::react::ObjCTurboModule::InitParams &)params\n {\n    return std::make_shared<facebook::react::<MyModuleSpecJSI>>(params);\n }\n+ #endif\n\n@end\n')),(0,a.kt)("p",null,"This snippet uses the same ",(0,a.kt)("inlineCode",{parentName:"p"},"RCT_NEW_ARCH_ENABLED")," flag used in the previous ",(0,a.kt)("a",f({parentName:"p"},{href:"#dependencies-ios"}),"section"),". When this flag is not set, Xcode skips the lines within the ",(0,a.kt)("inlineCode",{parentName:"p"},"#ifdef")," during compilation and it does not include them into the compiled binary."),(0,a.kt)("h3",f({},{id:"android-1"}),"Android"),(0,a.kt)("p",null,"As we can't use conditional compilation blocks on Android, we will define two different source sets. This will allow to create a backward compatible TurboModule with the proper source that is loaded and compiled depending on the used architecture."),(0,a.kt)("p",null,"Therefore, you have to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a Native Module in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src/oldarch")," path. See ",(0,a.kt)("a",f({parentName:"li"},{href:"../native-modules-intro"}),"this guide")," to learn how to create a Native Module."),(0,a.kt)("li",{parentName:"ol"},"Create a TurboModule in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src/newarch")," path. See ",(0,a.kt)("a",f({parentName:"li"},{href:"./pillars-turbomodules"}),"this guide")," to learn how to create a TurboModule")),(0,a.kt)("p",null,"and then instruct Gradle to decide which implementation to pick."),(0,a.kt)("p",null,"Some files can be shared between a Native Module and a TurboModule: these should be created or moved into a folder that is loaded by both the architectures. These files are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyModule>Package.java")," file used to load the module."),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"<MyTurboModule>Impl.java")," file where we can put the code that both the Native Module and the TurboModule has to execute.")),(0,a.kt)("p",null,"The final folder structure looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-sh"}),"my-module\n\u251c\u2500\u2500 android\n\u2502   \u251c\u2500\u2500 build.gradle\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u251c\u2500\u2500 main\n\u2502       \u2502   \u251c\u2500\u2500 AndroidManifest.xml\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyModule\n\u2502       \u2502               \u251c\u2500\u2500 MyModuleImpl.java\n\u2502       \u2502               \u2514\u2500\u2500 MyModulePackage.java\n\u2502       \u251c\u2500\u2500 newarch\n\u2502       \u2502   \u2514\u2500\u2500 java\n\u2502       \u2502       \u2514\u2500\u2500 com\n\u2502       \u2502           \u2514\u2500\u2500 MyModule.java\n\u2502       \u2514\u2500\u2500 oldarch\n\u2502           \u2514\u2500\u2500 java\n\u2502               \u2514\u2500\u2500 com\n\u2502                   \u2514\u2500\u2500 MyModule.java\n\u251c\u2500\u2500 ios\n\u251c\u2500\u2500 js\n\u2514\u2500\u2500 package.json\n")),(0,a.kt)("p",null,"The code that should go in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyModuleImpl.java")," and that can be shared by the Native Module and the TurboModule is, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-java",metastring:'title="example of MyModuleImple.java"',title:'"example',of:!0,'MyModuleImple.java"':!0}),'package com.MyModule;\n\nimport androidx.annotation.NonNull;\nimport com.facebook.react.bridge.Promise;\nimport java.util.Map;\nimport java.util.HashMap;\n\npublic class MyModuleImpl {\n\n    public static final String NAME = "MyModule";\n\n    public void foo(double a, double b, Promise promise) {\n        // implement the logic for foo and then invoke promise.resolve or\n        // promise.reject.\n    }\n}\n')),(0,a.kt)("p",null,"Then, the Native Module and the TurboModule can be updated with the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a private instance of the ",(0,a.kt)("inlineCode",{parentName:"li"},"MyModuleImpl")," class."),(0,a.kt)("li",{parentName:"ol"},"Initialize the instance in the module constructor."),(0,a.kt)("li",{parentName:"ol"},"Use the private instance in the modules methods.")),(0,a.kt)("p",null,"For example, for a Native Module:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-java",metastring:'title="Native Module using the Impl module"',title:'"Native',Module:!0,using:!0,the:!0,Impl:!0,'module"':!0}),"public class MyModule extends ReactContextBaseJavaModule {\n\n    // declare an instance of the implementation\n    private MyModuleImpl implementation;\n\n    CalculatorModule(ReactApplicationContext context) {\n        super(context);\n        // initialize the implementation of the module\n        implementation = MyModuleImpl();\n    }\n\n    @Override\n    public String getName() {\n        // NAME is a static variable, so we can access it using the class name.\n        return MyModuleImpl.NAME;\n    }\n\n    @ReactMethod\n    public void foo(int a, int b, Promise promise) {\n        // Use the implementation instance to execute the function.\n        implementation.foo(a, b, promise);\n    }\n}\n")),(0,a.kt)("p",null,"And, for a TurboModule:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-java",metastring:'title="TurboModule using the Impl module"',title:'"TurboModule',using:!0,the:!0,Impl:!0,'module"':!0}),"public class MyModule extends MyModuleSpec {\n    // declare an instance of the implementation\n    private MyModuleImpl implementation;\n\n    CalculatorModule(ReactApplicationContext context) {\n        super(context);\n        // initialize the implementation of the module\n        implementation = MyModuleImpl();\n    }\n\n    @Override\n    @NonNull\n    public String getName() {\n        // NAME is a static variable, so we can access it using the class name.\n        return MyModuleImpl.NAME;\n    }\n\n    @Override\n    public void foo(double a, double b, Promise promise) {\n        // Use the implementation instance to execute the function.\n        implementation.foo(a, b, promise);\n    }\n}\n")),(0,a.kt)("p",null,"For a step-by-step example on how to achieve this, have a look at ",(0,a.kt)("a",f({parentName:"p"},{href:"https://github.com/react-native-community/RNNewArchitectureLibraries/tree/feat/back-turbomodule"}),"this repo"),"."),(0,a.kt)("h2",f({},{id:"unify-the-javascript-specs"}),"Unify the JavaScript specs"),(0,a.kt)(l.ZP,{mdxType:"BetaTS"}),(0,a.kt)("p",null,"The last step makes sure that the JavaScript behaves transparently to chosen architecture."),(0,a.kt)("p",null,"For a TurboModule, the source of truth is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Native<MyModule>.js")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},".ts"),") spec file. The app accesses the spec file like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"import MyModule from 'your-module/src/index';\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"goal")," is to conditionally ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," file the proper object, given the architecture chosen by the user. We can achieve this with a code that looks like this:"),(0,a.kt)(o.Z,{groupId:"turbomodule-backward-compatibility",defaultValue:i.Z.defaultTurboModuleSpecLanguage,values:i.Z.turboModuleSpecLanguages,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Flow",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"// @flow\n\nimport { NativeModules } from 'react-native'\n\nconst isTurboModuleEnabled = global.__turboModuleProxy != null;\n\nconst myModule = isTurboModuleEnabled ?\n    require('./Native<MyModule>').default :\n    NativeModules.<MyModule>;\n\nexport default myModule;\n"))),(0,a.kt)(r.Z,{value:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",f({parentName:"pre"},{className:"language-ts"}),"const isTurboModuleEnabled = global.__turboModuleProxy != null;\n\nconst myModule = isTurboModuleEnabled\n  ? require('./Native<MyModule>').default\n  : require('./<MyModule>').default;\n\nexport default myModule;\n")))),(0,a.kt)("admonition",f({},{type:"note"}),(0,a.kt)("p",{parentName:"admonition"},"If you are using TypeScript and you want to follow the example, make sure to ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeModule")," in a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"ts")," file called ",(0,a.kt)("inlineCode",{parentName:"p"},"<MyModule>.ts"),".")),(0,a.kt)("p",null,"Whether you are using Flow or TypeScript for your specs, we understand which architecture is running by checking whether the ",(0,a.kt)("inlineCode",{parentName:"p"},"global.__turboModuleProxy")," object has been set or not."),(0,a.kt)("admonition",f({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"global.__turboModuleProxy")," API may change in the future for a function that encapsulate this check.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If that object is ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),", the app has not enabled the TurboModule feature. It's running on the Old Architecture, and the fallback is to use the default ",(0,a.kt)("a",f({parentName:"li"},{href:"../native-modules-intro"}),(0,a.kt)("inlineCode",{parentName:"a"},"NativeModule")," implementation"),"."),(0,a.kt)("li",{parentName:"ul"},"If that object is set, the app is running with the TurboModules enabled and it should use the ",(0,a.kt)("inlineCode",{parentName:"li"},"Native<MyModule>")," spec to access the TurboModule.")))}M.isMDXComponent=!0}}]);