"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25951],{35318:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97083:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(35318),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&d(e,n,t[n]);return e};const c={toc:[]};function u(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},c),d),i(t,r({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",m({},{type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,a.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,a.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,a.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}u.isMDXComponent=!0},13642:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return h},default:function(){return N},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return v}});var a=n(35318),o=n(97083),i=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&m(e,n,t[n]);return e};const u={id:"new-architecture-library-intro",title:"\u5728\u5e93\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c"},h=void 0,f={unversionedId:"new-architecture-library-intro",id:"version-0.69/new-architecture-library-intro",title:"\u5728\u5e93\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c",description:"The following steps will help ensure your modules and components are ready for the New Architecture.",source:"@site/versioned_docs/version-0.69/new-architecture-library-intro.md",sourceDirName:".",slug:"/new-architecture-library-intro",permalink:"/docs/0.69/new-architecture-library-intro",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-library-intro.md",tags:[],version:"0.69",frontMatter:{id:"new-architecture-library-intro",title:"\u5728\u5e93\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c"},sidebar:"docs",previous:{title:"\u542f\u7528\u65b0\u67b6\u6784",permalink:"/docs/0.69/new-architecture-intro"},next:{title:"\u5728 Android \u5e93\u4e2d\u542f\u7528",permalink:"/docs/0.69/new-architecture-library-android"}},g={},v=[{value:"TurboModules: Define Specs in JavaScript",id:"turbomodules-define-specs-in-javascript",level:2},{value:"Writing the JavaScript Spec",id:"writing-the-javascript-spec",level:3},{value:"Turbomodules",id:"turbomodules",level:4},{value:"Fabric Components",id:"fabric-components",level:4},{value:"Supported Flow Types",id:"supported-flow-types",level:3},{value:"Be Consistent Across Platforms and Eliminate Type Ambiguity",id:"be-consistent-across-platforms-and-eliminate-type-ambiguity",level:3},{value:"Make sure <em>autolinking</em> is enabled",id:"make-sure-autolinking-is-enabled",level:2},{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"Preparing your JavaScript codebase for the new React Native Renderer (Fabric)",id:"preparing-your-javascript-codebase-for-the-new-react-native-renderer-fabric",level:2},{value:"Migrating <code>findNodeHandle</code> / getting a <code>HostComponent</code>",id:"migrating-findnodehandle--getting-a-hostcomponent",level:3},{value:"Using <code>forwardRef</code>",id:"using-forwardref",level:3},{value:"Using a getter, (note the addition of <code>getViewRef</code>)",id:"using-a-getter-note-the-addition-of-getviewref",level:3},{value:"Migrating <code>.measure*()</code>",id:"migrating-measure",level:3},{value:"Migrating off <code>setNativeProps</code>",id:"migrating-off-setnativeprops",level:3},{value:"Pre-Fabric, Component Props Persist",id:"pre-fabric-component-props-persist",level:3},{value:"Moving <code>setNativeProps</code> to state",id:"moving-setnativeprops-to-state",level:3},{value:"Move the call to <code>requireNativeComponent</code> to a separate file",id:"move-the-call-to-requirenativecomponent-to-a-separate-file",level:3},{value:"Old way",id:"old-way",level:4},{value:"New way",id:"new-way",level:4},{value:"Flow support",id:"flow-support",level:4},{value:"Migrating off <code>dispatchViewManagerCommand</code>",id:"migrating-off-dispatchviewmanagercommand",level:3},{value:"Using Your Command",id:"using-your-command",level:3},{value:"Updating Native implementation iOS",id:"updating-native-implementation-ios",level:3}],y={toc:v};function N(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},y),m),r(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)(o.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,"The following steps will help ensure your modules and components are ready for the New Architecture."),(0,a.kt)("h2",c({},{id:"turbomodules-define-specs-in-javascript"}),"TurboModules: Define Specs in JavaScript"),(0,a.kt)("p",null,"Under the TurboModule system, the JavaScript spec will serve as the source of truth for the methods that are provided by each native module. Without the JavaScript spec, it is up to you to ensure your public method signatures are equivalent on Android and iOS."),(0,a.kt)("p",null,"As the first step to adopting the new architecture, you will start by creating these specs for your native modules. You can do this, right now, prior to actually migrating your native module library to the new architecture. Your JavaScript spec will be used later on to generate native interface code for all the supported platforms, as a way to enforce uniform APIs across platforms."),(0,a.kt)("h3",c({},{id:"writing-the-javascript-spec"}),"Writing the JavaScript Spec"),(0,a.kt)("p",null,"The JavaScript spec defines all APIs that are provided by the native module, along with the types of those constants and functions.\nUsing a ",(0,a.kt)("strong",{parentName:"p"},"typed")," spec file allows to be intentional and declare all the input arguments and outputs of your native module\u2019s methods."),(0,a.kt)("admonition",c({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Currently, this guide is written under the assumption that you will be using ",(0,a.kt)("a",c({parentName:"p"},{href:"https://flow.org/"}),"Flow"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-codegen")," package is also currently working only with Flow source as input. We know that a lot of our users are using ",(0,a.kt)("strong",{parentName:"p"},"TypeScript")," instead and we hope to release TypeScript support really soon. This guide will be updated once the TypeScript support is also available.")),(0,a.kt)("h4",c({},{id:"turbomodules"}),"Turbomodules"),(0,a.kt)("p",null,"JavaScript spec files ",(0,a.kt)("strong",{parentName:"p"},"must")," be named ",(0,a.kt)("inlineCode",{parentName:"p"},"Native<MODULE_NAME>.js")," and they export a ",(0,a.kt)("inlineCode",{parentName:"p"},"TurboModuleRegistry")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Spec")," object. The name convention is important because the Codegen process looks for modules whose ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," spec file starts with the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"Native"),"."),(0,a.kt)("p",null,"The following is a basic JavaScript spec template, written using the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://flow.org/"}),"Flow")," syntax."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"// @flow\n\nimport type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';\nimport {TurboModuleRegistry} from 'react-native';\n\nexport interface Spec extends TurboModule {\n  +getConstants: () => {||};\n\n  // your module methods go here, for example:\n  getString(id: string): Promise<string>;\n}\n\nexport default (TurboModuleRegistry.get<Spec>('<MODULE_NAME>'): ?Spec);\n")),(0,a.kt)("h4",c({},{id:"fabric-components"}),"Fabric Components"),(0,a.kt)("p",null,"JavaScript spec files ",(0,a.kt)("strong",{parentName:"p"},"must")," be named ",(0,a.kt)("inlineCode",{parentName:"p"},"<FABRIC COMPONENT>NativeComponent.js")," and they export a ",(0,a.kt)("inlineCode",{parentName:"p"},"HostComponent")," object. The name convention is important: the Codegen process looks for components whose ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," spec file ends with the keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeComponent"),"."),(0,a.kt)("p",null,"The following is a basic JavaScript spec template, written using the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://flow.org/"}),"Flow")," syntax."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"// @flow strict-local\n\nimport type {ViewProps} from 'react-native/Libraries/Components/View/ViewPropTypes';\nimport type {HostComponent} from 'react-native';\nimport codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';\n\ntype NativeProps = $ReadOnly<{|\n  ...ViewProps,\n  // add other props here\n|}>;\n\nexport default (codegenNativeComponent<NativeProps>(\n   '<FABRIC COMPONENT>',\n): HostComponent<NativeProps>);\n")),(0,a.kt)("h3",c({},{id:"supported-flow-types"}),"Supported Flow Types"),(0,a.kt)("p",null,"When using Flow, you will be using ",(0,a.kt)("a",c({parentName:"p"},{href:"https://flow.org/en/docs/types/"}),"type annotations")," to define your spec. Keeping in mind that the goal of defining a JavaScript spec is to ensure the generated native interface code is type safe, the set of supported Flow types will be those that can be mapped one-to-one to a corresponding type on the native platform."),(0,a.kt)("p",null,"In general, this means you can use primitive types (strings, numbers, booleans), as well as function types, object types, and array types. Union types, on the other hand, are not supported. All types must be read-only in Flow: either ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"$ReadOnly<>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"{||}")," objects."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"See Appendix ",(0,a.kt)("a",c({parentName:"p"},{href:"#i-flow-type-to-native-type-mapping"}),"I. Flow Type to Native Type Mapping"),".")),(0,a.kt)("h3",c({},{id:"be-consistent-across-platforms-and-eliminate-type-ambiguity"}),"Be Consistent Across Platforms and Eliminate Type Ambiguity"),(0,a.kt)("p",null,"Before adopting the new architecture in your native module, you will need to ensure your methods are consistent across platforms. This is something you will realize as you set out to write the JavaScript spec for your native module - remember, that JavaScript spec defines what the methods will look like on all supported platforms."),(0,a.kt)("p",null,"If your existing native module has methods with the same name on multiple platforms, but with different numbers or types of arguments across platforms, you will need to find a way to make these consistent. If you have methods that can take two or more different types for the same argument, you will also need to find a way to resolve this type ambiguity as type unions are intentionally not supported."),(0,a.kt)("h2",c({},{id:"make-sure-autolinking-is-enabled"}),"Make sure ",(0,a.kt)("em",{parentName:"h2"},"autolinking")," is enabled"),(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"}),"Autolinking")," is a feature of the React Native CLI that simplifies the installation of third-party React Native libraries. Instructions to enable ",(0,a.kt)("em",{parentName:"p"},"autolinking")," are available at ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"}),"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"),"."),(0,a.kt)("h3",c({},{id:"android"}),"Android"),(0,a.kt)("p",null,"On Android, this generally requires you to include ",(0,a.kt)("inlineCode",{parentName:"p"},"native_modules.gradle")," in both your ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.gradle[.kts]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle[.kts]"),"."),(0,a.kt)("p",null,"If you used the default template provided with React Native (i.e. you used ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn react-native init <Project>"),"), then you have autolinking already enabled."),(0,a.kt)("p",null,"You can anyway verify that you have it enabled with:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'$ grep -r "native_modules.gradle" android\n\nandroid/app/build.gradle:apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)\nandroid/settings.gradle:apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)\n...\n')),(0,a.kt)("h3",c({},{id:"ios"}),"iOS"),(0,a.kt)("p",null,"On iOS, this generally requires your library to provide a Podspec (see ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/react-native-community/react-native-webview/blob/master/react-native-webview.podspec"}),(0,a.kt)("inlineCode",{parentName:"a"},"react-native-webview"))," for an example)."),(0,a.kt)("admonition",c({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"To determine if your library is set up for autolinking, check the CocoaPods output after running ",(0,a.kt)("inlineCode",{parentName:"p"},"pod install")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"arch -x86_64 pod install"),' in case of a Mac M1) on an iOS project. If you see "auto linking library name", you are all set to go.')),(0,a.kt)("h2",c({},{id:"preparing-your-javascript-codebase-for-the-new-react-native-renderer-fabric"}),"Preparing your JavaScript codebase for the new React Native Renderer (Fabric)"),(0,a.kt)("p",null,"The new renderer also known as Fabric doesn\u2019t use the UIManager so direct calls to UIManager will need to be migrated. Historically, calls to UIManager had some pretty complicated patterns. Fortunately, we\u2019ve created new APIs that are much cleaner. These new APIs are forwards compatible with Fabric so you can migrate your code today and they will work properly when you turn on Fabric!"),(0,a.kt)("p",null,"Fabric will be providing new type safe JS APIs that are much more ergonomic than some of the patterns we've seen in product code today. These APIs require references to the underlying component, no longer using the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"findNodeHandle"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"findNodeHandle")," is used to search the tree for a native component given a class instance. This was breaking the React abstraction model. ",(0,a.kt)("inlineCode",{parentName:"p"},"findNodeHandle")," won\u2019t be compatible with React 18 once we are ready to roll that out. Deprecation of ",(0,a.kt)("inlineCode",{parentName:"p"},"findNodeHandle")," in React Native is similar to the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage"}),"deprecation of ",(0,a.kt)("inlineCode",{parentName:"a"},"findDOMNode")," in React DOM"),"."),(0,a.kt)("p",null,"While we know that all deprecations are a hassle, this guide is intended to help people update components as smoothly as possible. Here are the steps you need to take to get your JS codebase ready for Fabric:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Migrating findNodeHandle / getting a HostComponent"),(0,a.kt)("li",{parentName:"ol"},"Migrating ",(0,a.kt)("inlineCode",{parentName:"li"},".measure*()")),(0,a.kt)("li",{parentName:"ol"},"Migrating off ",(0,a.kt)("inlineCode",{parentName:"li"},"setNativeProps")),(0,a.kt)("li",{parentName:"ol"},"Move the call to ",(0,a.kt)("inlineCode",{parentName:"li"},"requireNativeComponent")," to a separate file"),(0,a.kt)("li",{parentName:"ol"},"Migrating off ",(0,a.kt)("inlineCode",{parentName:"li"},"dispatchViewManagerCommand")),(0,a.kt)("li",{parentName:"ol"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},"codegenNativeComponent"))),(0,a.kt)("h3",c({},{id:"migrating-findnodehandle--getting-a-hostcomponent"}),"Migrating ",(0,a.kt)("inlineCode",{parentName:"h3"},"findNodeHandle")," / getting a ",(0,a.kt)("inlineCode",{parentName:"h3"},"HostComponent")),(0,a.kt)("p",null,"Much of the migration work requires a HostComponent ref to access certain APIs that are only attached to host components (like View, Text, or ScrollView). HostComponents are the return value of calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"requireNativeComponent"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"findNodeHandle")," tunnels through multiple levels of component hierarchy to find the nearest native component."),(0,a.kt)("p",null,"As a concrete example, this code uses ",(0,a.kt)("inlineCode",{parentName:"p"},"findNodeHandle")," to tunnel from ",(0,a.kt)("inlineCode",{parentName:"p"},"ParentComponent")," through to the ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," rendered by ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"class ParentComponent extends React.Component<Props> {\n  _ref: ?React.ElementRef<typeof ChildComponent>;\n\n  render() {\n    return <ChildComponent ref={this._captureRef} onSubmit={this._onSubmit} />\n  }\n\n  _captureRef: (ref) => {\n    this._ref = ref;\n  }\n\n  _onSubmit: () => {\n    const nodeHandle = findNodeHandle(this._ref);\n\n    if (nodeHandle) {\n      UIManager.measure(nodeHandle, () => {});\n    }\n  }\n}\n\nclass ChildComponent extends React.Component<Props> {\n  render() {\n    return (\n      <View>\n        <SubmitButton onSubmit={props.onSubmit} />\n      </View>\n    );\n  }\n}\n")),(0,a.kt)("p",null,"We can\u2019t convert this call to ",(0,a.kt)("inlineCode",{parentName:"p"},"this._ref.measure")," because ",(0,a.kt)("inlineCode",{parentName:"p"},"this._ref")," is an instance to ",(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent"),", which is not a HostComponent and thus does not have a ",(0,a.kt)("inlineCode",{parentName:"p"},"measure")," function."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ChildComponent")," renders a ",(0,a.kt)("inlineCode",{parentName:"p"},"View"),", which is a HostComponent, so we need to get a reference to ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," instead. There are typically two approaches to get what we need. If the component we need to get the ref from is a function component using ",(0,a.kt)("inlineCode",{parentName:"p"},"forwardRef")," is probably the right choice. If it is a class component with other public methods, adding a public method for getting the ref is an option. Here are examples of those two forms:"),(0,a.kt)("h3",c({},{id:"using-forwardref"}),"Using ",(0,a.kt)("inlineCode",{parentName:"h3"},"forwardRef")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"class ParentComponent extends React.Component<Props> {\n  _ref: ?React.ElementRef<typeof ChildComponent>;\n\n  render() {\n    return <ChildComponent ref={this._captureRef} onSubmit={this._onSubmit} />\n  }\n\n  _captureRef: (ref) => {\n    this._ref = ref;\n  }\n\n  _onSubmit: () => {\n    if (this._ref != null)\n      this._ref.measure(() => {});\n    }\n  }\n}\n\nconst ChildComponent = React.forwardRef((props, forwardedRef) => {\n  return (\n    <View ref={forwardedRef}>\n      <SubmitButton onSubmit={props.onSubmit} />\n    </View>\n  );\n});\n")),(0,a.kt)("h3",c({},{id:"using-a-getter-note-the-addition-of-getviewref"}),"Using a getter, (note the addition of ",(0,a.kt)("inlineCode",{parentName:"h3"},"getViewRef"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"class ParentComponent extends React.Component<Props> {\n  _ref: ?React.ElementRef<typeof ChildComponent>;\n\n  render() {\n    return <ChildComponent ref={this._captureRef} onSubmit={this._onSubmit} />\n  }\n\n  _captureRef: (ref) => {\n    this._ref = ref;\n  }\n\n  _onSubmit: () => {\n    if (this._ref != null)\n      this._ref.getViewRef().measure(() => {});\n    }\n  }\n}\n\nclass ChildComponent extends React.Component<Props> {\n  _ref: ?React.ElementRef<typeof View>;\n\n  render() {\n    return (\n      <View ref={this._captureRef}>\n        <SubmitButton onSubmit={props.onSubmit} />\n      </View>\n    );\n  }\n\n  getViewRef(): ?React.ElementRef<typeof View> {\n    return this._ref;\n  }\n\n  _captureRef: (ref) => {\n    this._ref = ref;\n  }\n}\n")),(0,a.kt)("h3",c({},{id:"migrating-measure"}),"Migrating ",(0,a.kt)("inlineCode",{parentName:"h3"},".measure*()")),(0,a.kt)("p",null,"Let\u2019s take a look at an example calling ",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager.measure"),". This code might look something like this"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const viewRef: React.ElementRef<typeof View> =  /* ... */;\nconst viewHandle = ReactNative.findNodeHandle(viewRef);\n\nUIManager.measure(viewHandle, (x, y, width, height) => {\n  // Use layout metrics.\n});\n")),(0,a.kt)("p",null,"In order to call ",(0,a.kt)("inlineCode",{parentName:"p"},"UIManager.measure*")," we need to call ",(0,a.kt)("inlineCode",{parentName:"p"},"findNodeHandle")," first and pass in those handles. With the new API, we instead call ",(0,a.kt)("inlineCode",{parentName:"p"},"measure")," directly on native refs without ",(0,a.kt)("inlineCode",{parentName:"p"},"findNodeHandle"),". The example above with the new API looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const viewRef: React.ElementRef<typeof View> = /* ... */;\n\nviewRef.measure((x, y, width, height) => {\n  // Use layout metrics.\n});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"findNodeHandle")," can be called with any component as an argument, but the new ",(0,a.kt)("inlineCode",{parentName:"p"},".measure*")," can only be called on native refs. If the ref originally passed into ",(0,a.kt)("inlineCode",{parentName:"p"},"findNodeHandle")," is not a native ref to start with, use the strategies above in ",(0,a.kt)("em",{parentName:"p"},"getting a HostComponent")," to find the native ref."),(0,a.kt)("h3",c({},{id:"migrating-off-setnativeprops"}),"Migrating off ",(0,a.kt)("inlineCode",{parentName:"h3"},"setNativeProps")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps")," will not be supported in the post-Fabric world. To migrate, move all ",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProp")," values to component state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts"}),"class MyComponent extends React.Component<Props> {\n  _viewRef: ?React.ElementRef<typeof View>;\n\n  render() {\n    const {somePropValue} = this.props;\n    return <View\n       onPress={this._onSubmit}\n       ref={this._captureRef}\n       someProp={somePropValue}\n       style={styles.view} />\n  }\n\n  _captureRef: (ref) => {\n    this._viewRef = ref;\n  }\n\n  _onSubmit: () => {\n    this._viewRef.setNativeProps({\n       style: styles.submittedView,\n       accessibility: true\n    });\n    // ...other logic for onSubmit\n  }\n}\n\nconst styles = StyleSheet.create({\n  view: { backgroundColor: 'white'},\n  submittedView: {borderWidth: 1}\n});\n")),(0,a.kt)("p",null,"In this example when the View is pressed there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps")," call to update the style and accessibility props of the component. To migrate this component it\u2019s important to understand its current behavior using ",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps"),"."),(0,a.kt)("h3",c({},{id:"pre-fabric-component-props-persist"}),"Pre-Fabric, Component Props Persist"),(0,a.kt)("p",null,"On first render, the component props are those declared in the render function. After the View is pressed ",(0,a.kt)("inlineCode",{parentName:"p"},"_onSubmit")," calls ",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps")," with updated prop values.\nThe resulting component can be represented as such:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"<View\n  accessibility={true}\n  onPress={this._onSubmit}\n  ref={this._captureRef}\n  someProp={somePropValue}\n  style={[styles.view, styles.submittedView]}\n/>\n")),(0,a.kt)("p",null,"Note that all prop values set in the render function are unchanged even though ",(0,a.kt)("inlineCode",{parentName:"p"},"setNativeProps")," didn\u2019t pass those props. Also, ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," is now the merged value of its value prior to ",(0,a.kt)("inlineCode",{parentName:"p"},"_onSubmit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"styles.submittedView"),". This is the important takeaway: in our current pre-Fabric world, ",(0,a.kt)("strong",{parentName:"p"},"component props persist.")," The platform view caches the prop values its passed from the JS side. If this wasn\u2019t the case then following the setNativeProps call, React Native would have rendered a component like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"<View accessibility={true} style={styles.submittedView} />\n")),(0,a.kt)("p",null,"The fact that React Native stores some internal state of each component that isn\u2019t explicitly declared in last render is what Fabric intends to fix."),(0,a.kt)("h3",c({},{id:"moving-setnativeprops-to-state"}),"Moving ",(0,a.kt)("inlineCode",{parentName:"h3"},"setNativeProps")," to state"),(0,a.kt)("p",null,"Taking those caveats into account, a proper migration would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"class MyComponent extends React.Component<Props> {\n  state = {\n    hasSubmitted: false,\n    accessibility: false\n  };\n\n  render() {\n    const {somePropValue} = this.props;\n    const submittedStyle = this.state.hasSubmitted ? styles.submittedView: null;\n    return <View\n       accessibility={this.state.accessibility}\n       onPress={this._onSubmit}\n       someProp={somePropValue}\n       style={[styles.view, submittedStyle]} />\n  }\n\n  _onSubmit: () => {\n    this.setState(state => ({ ...state, hasSubmitted: true }));\n    // ...other logic for onSubmit\n  }\n}\n\n\nconst styles = StyleSheet.create({\n  view: { backgroundColor: 'white'},\n  submittedView: {borderWidth: 1}\n});\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We are using the ",(0,a.kt)("inlineCode",{parentName:"li"},"hasSubmitted")," flag to represent whether or not we want to apply ",(0,a.kt)("inlineCode",{parentName:"li"},"styles.submittedView"),". If the style was dynamic then it makes sense to store the style object in state"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accessibility")," is now explicitly passed to the View component as a boolean. This differs from the prior implementation where ",(0,a.kt)("inlineCode",{parentName:"li"},"accessibility")," wasn\u2019t passed as a prop in initial render but in this case we know the non-specification of ",(0,a.kt)("inlineCode",{parentName:"li"},"accessibility")," is handled in the same way as ",(0,a.kt)("inlineCode",{parentName:"li"},"accessibilty={false}"))),(0,a.kt)("p",null,"Be wary of your assumptions as uncaught subtleties can introduce differences in behavior! It\u2019s a good idea to have snapshot tests of your component as they will highlight any differences pre and post your migration."),(0,a.kt)("h3",c({},{id:"move-the-call-to-requirenativecomponent-to-a-separate-file"}),"Move the call to ",(0,a.kt)("inlineCode",{parentName:"h3"},"requireNativeComponent")," to a separate file"),(0,a.kt)("p",null,"This will prepare for the JS to be ready for the new codegen system for the new architecture. The new file should be named ",(0,a.kt)("inlineCode",{parentName:"p"},"<ComponentName>NativeComponent.js.")),(0,a.kt)("h4",c({},{id:"old-way"}),"Old way"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"const RNTMyNativeView = requireNativeComponent('RNTMyNativeView');\n\n[...]\n\nreturn <RNTMyNativeView />;\n")),(0,a.kt)("h4",c({},{id:"new-way"}),"New way"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="RNTMyNativeNativeComponent.js"',title:'"RNTMyNativeNativeComponent.js"'}),"import RNTMyNativeViewNativeComponent from './RNTMyNativeViewNativeComponent';\n\n[...]\n\nreturn <RNTMyNativeViewNativeComponent />;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js",metastring:'title="RNTMyNativeViewNativeComponent.js"',title:'"RNTMyNativeViewNativeComponent.js"'}),"import { requireNativeComponent } from 'react-native';\nconst RNTMyNativeViewNativeComponent = requireNativeComponent(\n  'RNTMyNativeView'\n);\nexport default RNTMyNativeViewNativeComponent;\n")),(0,a.kt)("h4",c({},{id:"flow-support"}),"Flow support"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"requireNativeComponent")," is not typed, you can temporarily use the ",(0,a.kt)("inlineCode",{parentName:"p"},"mixed")," type to fix the Flow warning, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"import type { HostComponent } from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';\n// ...\nconst RCTWebViewNativeComponent: HostComponent<mixed> =\n  requireNativeComponent < mixed > 'RNTMyNativeView';\n")),(0,a.kt)("h3",c({},{id:"migrating-off-dispatchviewmanagercommand"}),"Migrating off ",(0,a.kt)("inlineCode",{parentName:"h3"},"dispatchViewManagerCommand")),(0,a.kt)("p",null,"Similar to one above, in an effort to avoid calling methods on the UIManager, all view manager methods are now called through an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeCommands"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"codegenNativeCommands")," is a new API to code-generate ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeCommands")," given an interface of your view manager\u2019s commands."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Before")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"class MyComponent extends React.Component<Props> {\n  _moveToRegion: (region: Region, duration: number) => {\n    UIManager.dispatchViewManagerCommand(\n      ReactNative.findNodeHandle(this),\n      'moveToRegion',\n      [region, duration]\n    );\n  }\n\n  render() {\n    return <MyCustomMapNativeComponent onPress={this._moveToRegion} />\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Creating the NativeCommands with ",(0,a.kt)("inlineCode",{parentName:"strong"},"codegenNativeCommands"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-ts",metastring:'title="MyCustomMapNativeComponent.js"',title:'"MyCustomMapNativeComponent.js"'}),"import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';\nimport type { HostComponent } from 'react-native/Libraries/Renderer/shims/ReactNativeTypes';\n\ntype MyCustomMapNativeComponentType = HostComponent<NativeProps>;\n\ninterface NativeCommands {\n  +moveToRegion: (\n     viewRef: React.ElementRef<MyCustomMapNativeComponentType>,\n      region: MapRegion,\n      duration: number,\n   ) => void;\n }\n\nexport const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({\n  supportedCommands: ['moveToRegion'],\n});\n")),(0,a.kt)("p",null,"Note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first argument in the ",(0,a.kt)("inlineCode",{parentName:"li"},"moveToRegion")," command is a HostComponent ref of the native component"),(0,a.kt)("li",{parentName:"ul"},"The arguments to the ",(0,a.kt)("inlineCode",{parentName:"li"},"moveToRegion")," command are enumerated in the signature"),(0,a.kt)("li",{parentName:"ul"},"The command definition is co-located with the native component. This is an encouraged pattern"),(0,a.kt)("li",{parentName:"ul"},"Ensure you have included your command name in ",(0,a.kt)("inlineCode",{parentName:"li"},"supportedCommands")," array")),(0,a.kt)("h3",c({},{id:"using-your-command"}),"Using Your Command"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-tsx"}),"import {Commands, ... } from './MyCustomMapNativeComponent';\n\nclass MyComponent extends React.Component<Props> {\n  _ref: ?React.ElementRef<typeof MyCustomMapNativeComponent>;\n\n  _captureRef: (ref) => {\n    this._ref = ref;\n  }\n\n  _moveToRegion: (region: Region, duration: number) => {\n    if (this._ref != null) {\n      Commands.moveToRegion(this._ref, region, duration);\n    }\n  }\n\n  render() {\n    return <MyCustomMapNativeComponent\n       ref={this._captureRef}\n       onPress={this._moveToRegion} />\n  }\n}\n")),(0,a.kt)("h3",c({},{id:"updating-native-implementation-ios"}),"Updating Native implementation ","[iOS]"),(0,a.kt)("p",null,"In the example the code-generated ",(0,a.kt)("inlineCode",{parentName:"p"},"Commands")," will dispatch ",(0,a.kt)("inlineCode",{parentName:"p"},"moveToRegion")," call to the native component\u2019s view manager. In addition to writing the JS interface, you\u2019ll need to update your native implementation signatures to match the dispatched method call. See the mapping for ",(0,a.kt)("a",c({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/native-modules-android#argument-types"}),"Android argument types")," and",(0,a.kt)("a",c({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/native-modules-ios#argument-types"}),"iOS argument types")," for reference."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"iOS")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-objc"}),"RCT_EXPORT_METHOD(moveToRegion:(nonnull NSNumber *)reactTag\n                        region:(NSDictionary *)region\n                      duration:(double)duration\n{\n   ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Android")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-java"}),'// receiveCommand signature has changed to receive String commandId\n@Override\n  public void receiveCommand(\n      ReactMapDrawerView view, String commandId, @Nullable ReadableArray args) {\n    switch (commandId) {\n      case "moveToRegion":\n        if (args == null) {\n          break;\n        }\n\n        ReadableMap region = args.getMap(0);\n        int durationMs = args.getInt(1);\n        // ... act on the view...\n        break;\n    }\n  }\n')))}N.isMDXComponent=!0}}]);