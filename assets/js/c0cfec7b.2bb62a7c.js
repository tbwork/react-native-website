"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[14580],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},11674:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(27378),r=a(38944);const o="tabItem_wHwb";var i=Object.defineProperty,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function s({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&c(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(o,a)},{hidden:t}),e)}},27789:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(27378),r=a(38944),o=a(14185),i=a(27886),l=a(77184),p=a(12112);const u="tabList_J5MA",c="tabItem_l0OV";var s=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,w=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(h)for(var a of h(t))f.call(t,a)&&v(e,a,t[a]);return e};function k(e){var t,a;const{lazy:o,block:s,defaultValue:h,values:b,groupId:f,className:v}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=b?b:k.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===h?h:null!=(a=null!=h?h:null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)?a:k[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:C}=(0,l.U)(),[j,P]=(0,n.useState)(N),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=f){const e=O[f];null!=e&&e!==j&&g.some((t=>t.value===e))&&P(e)}const A=e=>{const t=e.currentTarget,a=E.indexOf(t),n=g[a].value;n!==j&&(T(t),P(n),null!=f&&C(f,String(n)))},x=e=>{var t,a;let n=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",u)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},v)},g.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(o=w({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>E.push(e),onKeyDown:x,onClick:A},a),i={className:(0,r.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":j===e})},d(o,m(i))),null!=t?t:e);var o,i}))),o?(0,n.cloneElement)(k.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function g(e){const t=(0,o.Z)();return n.createElement(k,w({key:String(t)},e))}},31043:(e,t,a)=>{a.d(t,{ZP:()=>m});var n=a(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&c(e,a,t[a]);return e};const d={toc:[]};function m(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=s(s({},d),c),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("admonition",s({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,n.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,n.kt)("a",s({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,n.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,n.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}m.isMDXComponent=!0},55540:(e,t,a)=>{a.d(t,{ZP:()=>m});var n=a(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&c(e,a,t[a]);return e};const d={toc:[]};function m(e){var t,a=e,{components:r}=a,c=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=s(s({},d),c),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u4e4b\u524d\u5168\u5c40\u5b89\u88c5\u8fc7\u65e7\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"react-native-cli"),"\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u8bf7\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"npm uninstall -g react-native-cli"),"\u5378\u8f7d\u6389\u5b83\u4ee5\u907f\u514d\u4e00\u4e9b\u51b2\u7a81\uff1a"),(0,n.kt)("pre",{parentName:"blockquote"},(0,n.kt)("code",s({parentName:"pre"},{className:"language-shell"}),"npm uninstall -g react-native-cli @react-native-community/cli\n"))))}m.isMDXComponent=!0},99322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>w,default:()=>O,frontMatter:()=>v,metadata:()=>k,toc:()=>y});var n=a(35318),r=a(27789),o=a(86386),i=a(11674),l=a(55540),p=a(31043),u=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,f=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&b(e,a,t[a]);if(d)for(var a of d(t))h.call(t,a)&&b(e,a,t[a]);return e};const v={id:"use-app-template",title:"Creating a New Architecture App"},w=void 0,k={unversionedId:"the-new-architecture/use-app-template",id:"version-0.71/the-new-architecture/use-app-template",title:"Creating a New Architecture App",description:"This page will help you create a new React Native app that uses the New Architecture.",source:"@site/versioned_docs/version-0.71/the-new-architecture/use-app-template.md",sourceDirName:"the-new-architecture",slug:"/the-new-architecture/use-app-template",permalink:"/docs/the-new-architecture/use-app-template",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/the-new-architecture/use-app-template.md",tags:[],version:"0.71",frontMatter:{id:"use-app-template",title:"Creating a New Architecture App"},sidebar:"docs",previous:{title:"\u4e3a\u4f55\u8981\u8bbe\u8ba1\u65b0\u67b6\u6784",permalink:"/docs/the-new-architecture/why"},next:{title:"\u65b0\u67b6\u6784\u7684\u201c\u4e24\u5927\u652f\u67f1\u201d",permalink:"/docs/the-new-architecture/pillars"}},g={},y=[{value:"Development environment",id:"development-environment",level:2},{value:"Creating a new application",id:"creating-a-new-application",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Enable Hermes",id:"enable-hermes",level:3},{value:"Enable the New Architecture",id:"enable-the-new-architecture",level:3},{value:"Target OS",id:"target-os",level:4},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"<code>react-native run-ios</code> fails",id:"react-native-run-ios-fails",level:5},{value:"Confirming the New Architecture is in use",id:"confirming-the-new-architecture-is-in-use",level:3},{value:"Want to know more?",id:"want-to-know-more",level:3},{value:"Android",id:"android",level:4},{value:"iOS",id:"ios",level:4}],N={toc:y};function O(e){var t,a=e,{components:u}=a,b=((e,t)=>{var a={};for(var n in e)m.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&h.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=f(f({},N),b),c(t,s({components:u,mdxType:"MDXLayout"}))),(0,n.kt)(p.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("p",null,"This page will help you create a new React Native app that uses the New Architecture."),(0,n.kt)("h2",f({},{id:"development-environment"}),"Development environment"),(0,n.kt)("p",null,"Before continuing, make sure you've followed all the steps in ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/environment-setup"}),"Setting up the development environment"),", under the ",(0,n.kt)("strong",{parentName:"p"},"React Native CLI Quickstart")," tab."),(0,n.kt)("p",null,"If following the setup guide, stop when you reach the section ",(0,n.kt)("strong",{parentName:"p"},"Running your React Native Application"),", and resume following this guide."),(0,n.kt)("admonition",f({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"If you're using Expo, you can't enable the New Architecture at the moment, and will have to wait for a future release of the Expo SDK.")),(0,n.kt)("h2",f({},{id:"creating-a-new-application"}),"Creating a new application"),(0,n.kt)(l.ZP,{mdxType:"RemoveGlobalCLI"}),(0,n.kt)("p",null,"If you already have your development environment set up, create a new React Native project from the template:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"npx react-native init AwesomeProject\n")),(0,n.kt)("admonition",f({},{type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"The New Architecture is available in React Native version 0.68 or later.")),(0,n.kt)("h2",f({},{id:"configuration"}),"Configuration"),(0,n.kt)("p",null,"Follow the steps below to enable the New Architecture and build the app."),(0,n.kt)("h3",f({},{id:"enable-hermes"}),"Enable Hermes"),(0,n.kt)("p",null,"Hermes is an open-source JavaScript engine optimized for React Native. ",(0,n.kt)("a",f({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/4"}),"Hermes will be the default engine in the future"),", and we highly recommend you use it."),(0,n.kt)("p",null,"Please ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/hermes"}),"follow the instructions on the React Native website")," in order to enable Hermes in your application."),(0,n.kt)("h3",f({},{id:"enable-the-new-architecture"}),"Enable the New Architecture"),(0,n.kt)("h4",f({},{id:"target-os"}),"Target OS"),(0,n.kt)(r.Z,{groupId:"platform",defaultValue:i.Z.defaultPlatform,values:i.Z.platforms,className:"pill-tabs",mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ios",mdxType:"TabItem"},(0,n.kt)("p",null,"Navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"ios")," directory and run the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"# from `ios` directory\nbundle install && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install\n")),(0,n.kt)("p",null,"Then build and run the app as usual:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"yarn ios\n")),(0,n.kt)("admonition",f({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"You will need to run ",(0,n.kt)("inlineCode",{parentName:"p"},"pod install")," each time a dependency with native code changes. Make this command easier to run by adding it to ",(0,n.kt)("inlineCode",{parentName:"p"},"scripts")," to your project's ",(0,n.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",f({parentName:"pre"},{}),'"scripts": {\n  "pod-install": "RCT_NEW_ARCH_ENABLED=1 bundle exec pod install"\n}\n')),(0,n.kt)("p",{parentName:"admonition"},"and run it with ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn pod-install"),". Note that ",(0,n.kt)("inlineCode",{parentName:"p"},"bundle install")," does not need to run a second time, as long as the Gemfile has not changed.")),(0,n.kt)("h4",f({},{id:"troubleshooting"}),"Troubleshooting"),(0,n.kt)("h5",f({},{id:"react-native-run-ios-fails"}),(0,n.kt)("inlineCode",{parentName:"h5"},"react-native run-ios")," fails"),(0,n.kt)("p",null,"If you see a build failure from ",(0,n.kt)("inlineCode",{parentName:"p"},"react-native run-ios"),", there may be cached files from a previous build with the old architecture. Clean the build cache and try again:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the project ",(0,n.kt)("inlineCode",{parentName:"li"},"ios/project.xcworkspace")," in Xcode"),(0,n.kt)("li",{parentName:"ol"},"In XCode, choose Product > Clean Build Folder"),(0,n.kt)("li",{parentName:"ol"},"In the project directory, remove the ",(0,n.kt)("inlineCode",{parentName:"li"},"ios/Podfile.lock")," file and ",(0,n.kt)("inlineCode",{parentName:"li"},"ios/Pods")," directory: ",(0,n.kt)("inlineCode",{parentName:"li"},"rm -rf ios/Podfile.lock ios/Pods")),(0,n.kt)("li",{parentName:"ol"},"Re-run ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn pod-install")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn ios")))),(0,n.kt)(o.Z,{value:"android",mdxType:"TabItem"},(0,n.kt)("p",null,"Set the ",(0,n.kt)("inlineCode",{parentName:"p"},"newArchEnabled")," property to ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," by ",(0,n.kt)("strong",{parentName:"p"},"either"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Changing the corresponding line in ",(0,n.kt)("inlineCode",{parentName:"li"},"android/gradle.properties")),(0,n.kt)("li",{parentName:"ul"},"Setting the environment variable ",(0,n.kt)("inlineCode",{parentName:"li"},"ORG_GRADLE_PROJECT_newArchEnabled=true"))),(0,n.kt)("p",null,"Then build and run the app as usual:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-shell"}),"yarn android\n")),(0,n.kt)("admonition",f({},{type:"note"}),(0,n.kt)("p",{parentName:"admonition"},"You may notice longer build times with the New Architecture, due to additional step of C++ compilation with the Android NDK. To improve your build time, see ",(0,n.kt)("a",f({parentName:"p"},{href:"/docs/build-speed"}),"Speeding Up Your Build Phase"),".")))),(0,n.kt)("h3",f({},{id:"confirming-the-new-architecture-is-in-use"}),"Confirming the New Architecture is in use"),(0,n.kt)("p",null,"After you build and run the app, when Metro serves the JavaScript bundle, you should see ",(0,n.kt)("inlineCode",{parentName:"p"},'"fabric": true')," in the Metro logs:"),(0,n.kt)("img",{src:"/docs/assets/metro-new-arch.png",alt:"Metro shows fabric: true",width:"600"}),(0,n.kt)("h3",f({},{id:"want-to-know-more"}),"Want to know more?"),(0,n.kt)("p",null,"If you'd like to view the code changes relevant for the New Architecture, take a look at the ",(0,n.kt)("a",f({parentName:"p"},{href:"https://react-native-community.github.io/upgrade-helper/?from=0.67.4&to=0.68.0"}),"upgrade helper from version 0.67.4 to 0.68.0"),". Files that were added for the New Architecture are marked with a yellow banner."),(0,n.kt)("p",null,"For further explanations of what each file is doing, check out these guides to walk through the changes step-by-step:"),(0,n.kt)("h4",f({},{id:"android"}),"Android"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"/docs/new-architecture-app-modules-android"}),"Enabling TurboModules on Android")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"/docs/new-architecture-app-renderer-android"}),"Enabling Fabric on Android"))),(0,n.kt)("h4",f({},{id:"ios"}),"iOS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"/docs/new-architecture-app-modules-ios"}),"Enabling TurboModules on iOS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"/docs/new-architecture-app-renderer-ios"}),"Enabling Fabric on iOS"))))}O.isMDXComponent=!0}}]);