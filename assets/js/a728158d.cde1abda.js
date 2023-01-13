"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[12152],{35318:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var t=n(27378);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),c=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(d.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},s=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,g=s["".concat(d,".").concat(m)]||s[m]||p[m]||r;return n?t.createElement(g,i(i({ref:a},u),{},{components:n})):t.createElement(g,i({ref:a},u))}));function m(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=s;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},11674:(e,a,n)=>{n.d(a,{Z:()=>i});var t=n(63445);const o=!!t.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!t.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:o?"macos":r?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:o?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,a,n)=>{n.d(a,{Z:()=>p});var t=n(27378),o=n(38944);const r="tabItem_wHwb";var i=Object.defineProperty,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,a,n)=>a in e?i(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;function p({children:e,hidden:a,className:n}){return t.createElement("div",((e,a)=>{for(var n in a||(a={}))d.call(a,n)&&u(e,n,a[n]);if(l)for(var n of l(a))c.call(a,n)&&u(e,n,a[n]);return e})({role:"tabpanel",className:(0,o.Z)(r,n)},{hidden:a}),e)}},27789:(e,a,n)=>{n.d(a,{Z:()=>y});var t=n(27378),o=n(38944),r=n(14185),i=n(27886),l=n(77184),d=n(12112);const c="tabList_J5MA",u="tabItem_l0OV";var p=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,k=(e,a,n)=>a in e?p(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,h=(e,a)=>{for(var n in a||(a={}))b.call(a,n)&&k(e,n,a[n]);if(g)for(var n of g(a))v.call(a,n)&&k(e,n,a[n]);return e};function f(e){var a,n;const{lazy:r,block:p,defaultValue:g,values:b,groupId:v,className:k}=e,f=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=null!=b?b:f.map((({props:{value:e,label:a,attributes:n}})=>({value:e,label:a,attributes:n}))),M=(0,i.l)(y,((e,a)=>e.value===a.value));if(M.length>0)throw new Error(`Docusaurus error: Duplicate values "${M.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===g?g:null!=(n=null!=g?g:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?n:f[0].props.value;if(null!==N&&!y.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:T,setTabGroupChoices:A}=(0,l.U)(),[w,D]=(0,t.useState)(N),R=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=v){const e=T[v];null!=e&&e!==w&&y.some((a=>a.value===e))&&D(e)}const O=e=>{const a=e.currentTarget,n=R.indexOf(a),t=y[n].value;t!==w&&(C(a),D(t),null!=v&&A(v,String(t)))},P=e=>{var a,n;let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=R.indexOf(e.currentTarget)+1;t=null!=(a=R[n])?a:R[0];break}case"ArrowLeft":{const a=R.indexOf(e.currentTarget)-1;t=null!=(n=R[a])?n:R[R.length-1];break}}null==t||t.focus()};return t.createElement("div",{className:(0,o.Z)("tabs-container",c)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},k)},y.map((({value:e,label:a,attributes:n})=>{return t.createElement("li",(r=h({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>R.push(e),onKeyDown:P,onClick:O},n),i={className:(0,o.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":w===e})},s(r,m(i))),null!=a?a:e);var r,i}))),r?(0,t.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function y(e){const a=(0,r.Z)();return t.createElement(f,h({key:String(a)},e))}},920:(e,a,n)=>{n.d(a,{ZP:()=>m});var t=n(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,a,n)=>a in e?o(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,p=(e,a)=>{for(var n in a||(a={}))d.call(a,n)&&u(e,n,a[n]);if(l)for(var n of l(a))c.call(a,n)&&u(e,n,a[n]);return e};const s={toc:[]};function m(e){var a,n=e,{components:o}=n,u=((e,a)=>{var n={};for(var t in e)d.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&l)for(var t of l(e))a.indexOf(t)<0&&c.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(a=p(p({},s),u),r(a,i({components:o,mdxType:"MDXLayout"}))),(0,t.kt)("admonition",p({},{title:"\u6ce8\u610f",type:"caution"}),(0,t.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u5185\u5bb9\u4ecd\u5904\u4e8e\u5b9e\u9a8c\u9636\u6bb5\uff0c\u5185\u5bb9\u4f1a\u968f\u7740\u7248\u672c\u7684\u8fed\u4ee3\u8fdb\u884c\u4fee\u6539\u3002\u60a8\u53ef\u968f\u65f6\u5728\u6211\u4eec\u7684",(0,t.kt)("a",p({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u7ec4\u7684\u8ba8\u8bba\u533a"),"\u53d1\u9001\u53cd\u9988\u3002\n\u6b64\u5916\uff0c\u672c\u6587\u6863\u8fd8\u5305\u542b\u4e86\u82e5\u5e72\u9700\u624b\u52a8\u914d\u7f6e\u7684\u6b65\u9aa4\uff0c\u4f46\u8fd9\u4e0d\u4ee3\u8868\u65b0\u67b6\u6784\u7a33\u5b9a\u7248\u7684\u6700\u7ec8\u5f00\u53d1\u4f53\u9a8c\u3002\u6211\u4eec\u4ecd\u5728\u5f00\u53d1\u76f8\u5173\u7684\u5de5\u5177\u3001\u6a21\u677f\u548c\u7b2c\u4e09\u65b9\u5e93\uff0c\u5e2e\u52a9\u4f60\u66f4\u5feb\u5730\u8fc1\u79fb\u5230\u65b0\u67b6\u6784\u4e0a\uff0c\u800c\u975e\u4ece\u5934\u5f00\u59cb\u914d\u7f6e\u73af\u5883\u3002")))}m.isMDXComponent=!0},24391:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>f,contentTitle:()=>k,default:()=>N,frontMatter:()=>v,metadata:()=>h,toc:()=>y});var t=n(35318),o=n(920),r=n(27789),i=n(86386),l=n(11674),d=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,a,n)=>a in e?d(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,b=(e,a)=>{for(var n in a||(a={}))s.call(a,n)&&g(e,n,a[n]);if(p)for(var n of p(a))m.call(a,n)&&g(e,n,a[n]);return e};const v={id:"new-architecture-app-modules-android",title:"\u5728 Android \u4e0a\u542f\u7528 TurboModule"},k=void 0,h={unversionedId:"new-architecture-app-modules-android",id:"version-0.70/new-architecture-app-modules-android",title:"\u5728 Android \u4e0a\u542f\u7528 TurboModule",description:"Make sure your application meets all the prerequisites.",source:"@site/versioned_docs/version-0.70/new-architecture-app-modules-android.md",sourceDirName:".",slug:"/new-architecture-app-modules-android",permalink:"/docs/0.70/new-architecture-app-modules-android",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-modules-android.md",tags:[],version:"0.70",frontMatter:{id:"new-architecture-app-modules-android",title:"\u5728 Android \u4e0a\u542f\u7528 TurboModule"},sidebar:"docs",previous:{title:"\u5728\u5e94\u7528\u4e2d\u542f\u7528\u7684\u9884\u5907\u5de5\u4f5c",permalink:"/docs/0.70/new-architecture-app-intro"},next:{title:"\u5728 iOS \u4e0a\u542f\u7528 TurboModule",permalink:"/docs/0.70/new-architecture-app-modules-ios"}},f={},y=[{value:"1. Enable NDK and the native build",id:"1-enable-ndk-and-the-native-build",level:2},{value:"2. Java/Kotlin - Provide a <code>ReactPackageTurboModuleManagerDelegate</code>",id:"2-javakotlin---provide-a-reactpackageturbomodulemanagerdelegate",level:2},{value:"3. Adapt your <code>ReactNativeHost</code> to use the <code>ReactPackageTurboModuleManagerDelegate</code>",id:"3-adapt-your-reactnativehost-to-use-the-reactpackageturbomodulemanagerdelegate",level:2},{value:"4. Extend the <code>getPackages()</code> from your <code>ReactNativeHost</code> to use the TurboModule",id:"4-extend-the-getpackages-from-your-reactnativehost-to-use-the-turbomodule",level:2},{value:"5. C++ Provide a native implementation for the methods in your <code>*TurboModuleDelegate</code> class",id:"5-c-provide-a-native-implementation-for-the-methods-in-your-turbomoduledelegate-class",level:2},{value:"MyApplicationTurboModuleManagerDelegate.h",id:"myapplicationturbomodulemanagerdelegateh",level:4},{value:"MyApplicationTurboModuleManagerDelegate.cpp",id:"myapplicationturbomodulemanagerdelegatecpp",level:4},{value:"MyApplicationModuleProvider.h",id:"myapplicationmoduleproviderh",level:4},{value:"MyApplicationModuleProvider.cpp",id:"myapplicationmoduleprovidercpp",level:4},{value:"OnLoad.cpp",id:"onloadcpp",level:4},{value:"6. Enable the <code>useTurboModules</code> flag in your Application <code>onCreate</code>",id:"6-enable-the-useturbomodules-flag-in-your-application-oncreate",level:2}],M={toc:y};function N(e){var a,n=e,{components:d}=n,g=((e,a)=>{var n={};for(var t in e)s.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&p)for(var t of p(e))a.indexOf(t)<0&&m.call(e,t)&&(n[t]=e[t]);return n})(n,["components"]);return(0,t.kt)("wrapper",(a=b(b({},M),g),c(a,u({components:d,mdxType:"MDXLayout"}))),(0,t.kt)(o.ZP,{mdxType:"NewArchitectureWarning"}),(0,t.kt)("p",null,"Make sure your application meets all the ",(0,t.kt)("a",b({parentName:"p"},{href:"new-architecture-app-intro"}),"prerequisites"),"."),(0,t.kt)("h2",b({},{id:"1-enable-ndk-and-the-native-build"}),"1. Enable NDK and the native build"),(0,t.kt)("admonition",b({},{type:"caution"}),(0,t.kt)("p",{parentName:"admonition"},"In this iteration of the guide we\u2019re setting up the project to let you build from source. You might notice an increase in your build time because of this.\nYou can mitigate this by following the approach described in ",(0,t.kt)("a",b({parentName:"p"},{href:"/docs/next/build-speed"}),"Speeding up your Build phase")," guide.")),(0,t.kt)("p",null,"The Codegen will output some Java and some C++ code that now we need to build."),(0,t.kt)("p",null,"Let\u2019s edit your ",(0,t.kt)("strong",{parentName:"p"},"module-level")," ",(0,t.kt)("inlineCode",{parentName:"p"},"build.gradle")," to include the ",(0,t.kt)("strong",{parentName:"p"},"two")," ",(0,t.kt)("inlineCode",{parentName:"p"},"externalNativeBuild")," blocks detailed below inside the ",(0,t.kt)("inlineCode",{parentName:"p"},"android{}")," block:"),(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-groovy"}),'android {\n    defaultConfig {\n        applicationId "com.awesomeproject"\n        // ...\n\n        // Add this block\n        externalNativeBuild {\n            ndkBuild {\n                arguments "APP_PLATFORM=android-21",\n                        "APP_STL=c++_shared",\n                        "NDK_TOOLCHAIN_VERSION=clang",\n                        "GENERATED_SRC_DIR=$buildDir/generated/source",\n                        "PROJECT_BUILD_DIR=$buildDir",\n                        "REACT_ANDROID_DIR=$rootDir/../node_modules/react-native/ReactAndroid",\n                        "REACT_ANDROID_BUILD_DIR=$rootDir/../node_modules/react-native/ReactAndroid/build",\n                        "NODE_MODULES_DIR=$rootDir/../node_modules"\n                cFlags "-Wall", "-Werror", "-fexceptions", "-frtti", "-DWITH_INSPECTOR=1"\n                cppFlags "-std=c++17"\n                targets "myapplication_appmodules"\n                // Fix for windows limit on number of character in file paths and in command lines\n                if (Os.isFamily(Os.FAMILY_WINDOWS)) {\n                    arguments "NDK_APP_SHORT_COMMANDS=true"\n                }\n            }\n        }\n    }\n\n    // Add this block\n    externalNativeBuild {\n        ndkBuild {\n            path "$projectDir/src/main/jni/Android.mk"\n        }\n    }\n}\n')),(0,t.kt)("p",null,"In the same ",(0,t.kt)("inlineCode",{parentName:"p"},"build.gradle")," file, inside the same ",(0,t.kt)("inlineCode",{parentName:"p"},"android{}")," let\u2019s add also the following section:"),(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-groovy"}),'android {\n    // ...\n\n    def reactAndroidProjectDir = project(\':ReactAndroid\').projectDir\n    def packageReactNdkLibs = tasks.register("packageReactNdkLibs", Copy) {\n        dependsOn(":ReactAndroid:packageReactNdkLibsForBuck")\n        dependsOn("generateCodegenArtifactsFromSchema")\n        from("$reactAndroidProjectDir/src/main/jni/prebuilt/lib")\n        into("$buildDir/react-ndk/exported")\n    }\n\n    afterEvaluate {\n        preBuild.dependsOn(packageReactNdkLibs)\n        configureNdkBuildDebug.dependsOn(preBuild)\n        configureNdkBuildRelease.dependsOn(preBuild)\n    }\n\n    packagingOptions {\n        pickFirst \'**/libhermes.so\'\n        pickFirst \'**/libjsc.so\'\n    }\n}\n')),(0,t.kt)("p",null,"Finally, we need to create a Makefile inside the ",(0,t.kt)("inlineCode",{parentName:"p"},"src/main/jni")," folder called ",(0,t.kt)("inlineCode",{parentName:"p"},"Android.mk")," with the following content:"),(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-makefile"}),'THIS_DIR := $(call my-dir)\n\ninclude $(REACT_ANDROID_DIR)/Android-prebuilt.mk\n\n# If you wish to add a custom TurboModule or Fabric component in your app you\n# will have to include the following autogenerated makefile.\n# include $(GENERATED_SRC_DIR)/codegen/jni/Android.mk\n\n# Includes the MK file for autolinked libraries\ninclude $(PROJECT_BUILD_DIR)/generated/rncli/src/main/jni/Android-rncli.mk\n\ninclude $(CLEAR_VARS)\n\nLOCAL_PATH := $(THIS_DIR)\n\n# You can customize the name of your application .so file here.\nLOCAL_MODULE := awesomeapp_appmodules\n\nLOCAL_C_INCLUDES := $(LOCAL_PATH) $(PROJECT_BUILD_DIR)/generated/rncli/src/main/jni\nLOCAL_SRC_FILES := $(wildcard $(LOCAL_PATH)/*.cpp) $(wildcard $(PROJECT_BUILD_DIR)/generated/rncli/src/main/jni/*.cpp)\nLOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH) $(PROJECT_BUILD_DIR)/generated/rncli/src/main/jni\n\n# If you wish to add a custom TurboModule or Fabric component in your app you\n# will have to uncomment those lines to include the generated source\n# files from the codegen (placed in $(GENERATED_SRC_DIR)/codegen/jni)\n#\n# LOCAL_C_INCLUDES += $(GENERATED_SRC_DIR)/codegen/jni\n# LOCAL_SRC_FILES += $(wildcard $(GENERATED_SRC_DIR)/codegen/jni/*.cpp)\n# LOCAL_EXPORT_C_INCLUDES += $(GENERATED_SRC_DIR)/codegen/jni\n\n# Here you should add any native library you wish to depend on.\nLOCAL_SHARED_LIBRARIES := \\\nlibfabricjni \\\nlibfbjni \\\nlibfolly_runtime \\\nlibglog \\\nlibjsi \\\nlibreact_codegen_rncore \\\nlibreact_debug \\\nlibreact_nativemodule_core \\\nlibreact_render_componentregistry \\\nlibreact_render_core \\\nlibreact_render_debug \\\nlibreact_render_graphics \\\nlibrrc_view \\\nlibruntimeexecutor \\\nlibturbomodulejsijni \\\nlibyoga\n\n# Autolinked libraries\nLOCAL_SHARED_LIBRARIES += $(call import-codegen-modules)\n\nLOCAL_CFLAGS := -DLOG_TAG=\\"ReactNative\\" -fexceptions -frtti -std=c++17\n\ninclude $(BUILD_SHARED_LIBRARY)\n')),(0,t.kt)("p",null,"This setup will run a native build on your project and will compile the C++ files that have been generated by the codegen. You will see the native build running with the Gradle task ",(0,t.kt)("inlineCode",{parentName:"p"},":app:externalNativeBuildDebug")),(0,t.kt)("p",null,"You can now verify that everything works correctly by running your android app:"),(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-bash"}),"yarn react-native run-android\n")),(0,t.kt)("h2",b({},{id:"2-javakotlin---provide-a-reactpackageturbomodulemanagerdelegate"}),"2. Java/Kotlin - Provide a ",(0,t.kt)("inlineCode",{parentName:"h2"},"ReactPackageTurboModuleManagerDelegate")),(0,t.kt)("p",null,"Now is time to actually use the TurboModule.\nFirst, we will need to create a ",(0,t.kt)("inlineCode",{parentName:"p"},"ReactPackageTurboModuleManagerDelegate")," subclass, like the following:"),(0,t.kt)(r.Z,{groupId:"android-language",defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-java"}),'package com.awesomeproject;\n\nimport com.facebook.jni.HybridData;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.ReactPackageTurboModuleManagerDelegate;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.soloader.SoLoader;\n\nimport java.util.List;\n\npublic class MyApplicationTurboModuleManagerDelegate extends ReactPackageTurboModuleManagerDelegate {\n\n    private static volatile boolean sIsSoLibraryLoaded;\n\n    protected MyApplicationTurboModuleManagerDelegate(ReactApplicationContext reactApplicationContext, List<ReactPackage> packages) {\n        super(reactApplicationContext, packages);\n    }\n\n    protected native HybridData initHybrid();\n\n    public static class Builder extends ReactPackageTurboModuleManagerDelegate.Builder {\n        protected MyApplicationTurboModuleManagerDelegate build(\n                ReactApplicationContext context, List<ReactPackage> packages) {\n            return new MyApplicationTurboModuleManagerDelegate(context, packages);\n        }\n    }\n\n    @Override\n    protected synchronized void maybeLoadOtherSoLibraries() {\n        // Prevents issues with initializer interruptions.\n        if (!sIsSoLibraryLoaded) {\n            SoLoader.loadLibrary("myapplication_appmodules");\n            sIsSoLibraryLoaded = true;\n        }\n    }\n}\n'))),(0,t.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-kotlin"}),'package com.awesomeproject\n\nimport com.facebook.jni.HybridData\nimport com.facebook.react.ReactPackage\nimport com.facebook.react.ReactPackageTurboModuleManagerDelegate\nimport com.facebook.react.bridge.ReactApplicationContext\nimport com.facebook.soloader.SoLoader\n\nclass MyApplicationTurboModuleManagerDelegate\nprotected constructor(\n    reactApplicationContext: ReactApplicationContext,\n    packages: List<ReactPackage>\n) : ReactPackageTurboModuleManagerDelegate(reactApplicationContext, packages) {\n\n    override protected external fun initHybrid(): HybridData?\n    class Builder : ReactPackageTurboModuleManagerDelegate.Builder() {\n        override protected fun build(\n            context: ReactApplicationContext,\n            packages: List<ReactPackage>\n        ): MyApplicationTurboModuleManagerDelegate =\n            MyApplicationTurboModuleManagerDelegate(context, packages)\n    }\n\n    @Synchronized\n    override protected fun maybeLoadOtherSoLibraries() {\n        // Prevents issues with initializer interruptions.\n        if (!isSoLibraryLoaded) {\n            SoLoader.loadLibrary("myapplication_appmodules")\n            isSoLibraryLoaded = true\n        }\n    }\n\n    companion object {\n        @Volatile private var isSoLibraryLoaded = false\n    }\n}\n')))),(0,t.kt)("p",null,"Please note that the ",(0,t.kt)("inlineCode",{parentName:"p"},"SoLoader.loadLibrary")," parameter (in this case ",(0,t.kt)("inlineCode",{parentName:"p"},'"myapplication_appmodules")')," should be the same as the one specified for ",(0,t.kt)("inlineCode",{parentName:"p"},"LOCAL_MODULE :=")," inside the ",(0,t.kt)("inlineCode",{parentName:"p"},"Android.mk")," file you created before."),(0,t.kt)("p",null,"This class will then be responsible of loading the TurboModules and will take care of loading the native library build with the NDK at runtime."),(0,t.kt)("h2",b({},{id:"3-adapt-your-reactnativehost-to-use-the-reactpackageturbomodulemanagerdelegate"}),"3. Adapt your ",(0,t.kt)("inlineCode",{parentName:"h2"},"ReactNativeHost")," to use the ",(0,t.kt)("inlineCode",{parentName:"h2"},"ReactPackageTurboModuleManagerDelegate")),(0,t.kt)("p",null,"Then, you can provide the class you created to your ",(0,t.kt)("inlineCode",{parentName:"p"},"ReactNativeHost"),". You can locate your ",(0,t.kt)("inlineCode",{parentName:"p"},"ReactNativeHost")," by searching for the ",(0,t.kt)("inlineCode",{parentName:"p"},"getReactNativeHost()"),". The ",(0,t.kt)("inlineCode",{parentName:"p"},"ReactNativeHost")," is usually located inside your ",(0,t.kt)("inlineCode",{parentName:"p"},"Application")," class."),(0,t.kt)("p",null,"Once you located it, you need to add the ",(0,t.kt)("inlineCode",{parentName:"p"},"getReactPackageTurboModuleManagerDelegateBuilder")," method as from the snippet below:"),(0,t.kt)(r.Z,{groupId:"android-language",defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-java"}),"public class MyApplication extends Application implements ReactApplication {\n\n    private final ReactNativeHost mReactNativeHost =\n        new ReactNativeHost(this) {\n            @Override\n            public boolean getUseDeveloperSupport() { /* ... */ }\n\n            @Override\n            protected List<ReactPackage> getPackages() { /* ... */ }\n\n            @Override\n            protected String getJSMainModuleName() {/* ... */ }\n\n            @NonNull\n            @Override\n            protected ReactPackageTurboModuleManagerDelegate.Builder getReactPackageTurboModuleManagerDelegateBuilder() {\n                return new MyApplicationTurboModuleManagerDelegate.Builder();\n            }\n        };\n}\n"))),(0,t.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-kotlin"}),"class MyApplication : Application(), ReactApplication {\n    private val reactNativeHost: ReactNativeHost =\n        object : ReactNativeHost(this) {\n\n            override fun getUseDeveloperSupport(): Boolean {\n                /* ... */\n            }\n\n            override fun getPackages(): List<ReactPackage?>? {\n                /* ... */\n            }\n\n            override fun getJSMainModuleName(): String? {\n                /* ... */\n            }\n\n            @NonNull\n            override fun getReactPackageTurboModuleManagerDelegateBuilder() =\n                ReactPackageTurboModuleManagerDelegate.Builder()\n        }\n}\n")))),(0,t.kt)("h2",b({},{id:"4-extend-the-getpackages-from-your-reactnativehost-to-use-the-turbomodule"}),"4. Extend the ",(0,t.kt)("inlineCode",{parentName:"h2"},"getPackages()")," from your ",(0,t.kt)("inlineCode",{parentName:"h2"},"ReactNativeHost")," to use the TurboModule"),(0,t.kt)("p",null,"Still on the ",(0,t.kt)("inlineCode",{parentName:"p"},"ReactNativeHost")," , we need to extend the the ",(0,t.kt)("inlineCode",{parentName:"p"},"getPackages()")," method to include the newly created TurboModule. Update the method to include the following:"),(0,t.kt)(r.Z,{groupId:"android-language",defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-java"}),'public class MyApplication extends Application implements ReactApplication {\n\n    private final ReactNativeHost mReactNativeHost =\n        new ReactNativeHost(this) {\n            @Override\n            public boolean getUseDeveloperSupport() { /* ... */ }\n\n            @Override\n            protected List<ReactPackage> getPackages() {\n                List<ReactPackage> packages = new PackageList(this).getPackages();\n\n                // Add those lines\n                packages.add(new TurboReactPackage() {\n                    @Nullable\n                    @Override\n                    public NativeModule getModule(String name, ReactApplicationContext reactContext) {\n                        if (name.equals(NativeAwesomeManager.NAME)) {\n                            return new NativeAwesomeManager(reactContext);\n                        } else {\n                            return null;\n                        }\n                    }\n\n                    @Override\n                    public ReactModuleInfoProvider getReactModuleInfoProvider() {\n                        return () -> {\n                            final Map<String, ReactModuleInfo> moduleInfos = new HashMap<>();\n                            moduleInfos.put(\n                                    NativeAwesomeManager.NAME,\n                                    new ReactModuleInfo(\n                                            NativeAwesomeManager.NAME,\n                                            "NativeAwesomeManager",\n                                            false, // canOverrideExistingModule\n                                            false, // needsEagerInit\n                                            true, // hasConstants\n                                            false, // isCxxModule\n                                            true // isTurboModule\n                                    )\n                            );\n                            return moduleInfos;\n                        };\n                    }\n                });\n                return packages;\n            }\n\n            @Override\n            protected String getJSMainModuleName() {/* ... */ }\n\n            @NonNull\n            @Override\n            protected ReactPackageTurboModuleManagerDelegate.Builder getReactPackageTurboModuleManagerDelegateBuilder() {\n                return new MyApplicationTurboModuleManagerDelegate.Builder();\n            }\n        };\n}\n'))),(0,t.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-kotlin"}),'class MyApplication() : Application(), ReactApplication {\n\n    private val reactNativeHost: ReactNativeHost =\n        object : ReactNativeHost(this) {\n            override fun getUseDeveloperSupport(): Boolean {\n                /* ... */\n            }\n\n            override protected fun getPackages(): List<ReactPackage>? {\n                val packages: MutableList<ReactPackage> = PackageList(this).getPackages()\n\n                // Add those lines\n                packages.add(\n                    object : TurboReactPackage() {\n                        @Nullable\n                        override fun getModule(\n                            name: String,\n                            reactContext: ReactApplicationContext?\n                        ): NativeModule? =\n                            if ((name == NativeAwesomeManager.NAME)) {\n                                NativeAwesomeManager(reactContext)\n                            } else {\n                                null\n                            }\n\n                        override fun getReactModuleInfoProvider() =\n                            mutableMapOf<String, ReactModuleInfo>(\n                                NativeAwesomeManager.NAME,\n                                ReactModuleInfo(\n                                    NativeAwesomeManager.NAME,\n                                    "NativeAwesomeManager",\n                                    false, // canOverrideExistingModule\n                                    false, // needsEagerInit\n                                    true, // hasConstants\n                                    false, // isCxxModule\n                                    true // isTurboModule\n                                )\n                            )\n                    }\n                )\n                return packages\n            }\n\n            override protected fun getJSMainModuleName(): String? {\n                /* ... */\n            }\n\n            @NonNull\n            override protected fun getReactPackageTurboModuleManagerDelegateBuilder():\n                ReactPackageTurboModuleManagerDelegate.Builder? {\n                return Builder()\n            }\n        }\n}\n')))),(0,t.kt)("h2",b({},{id:"5-c-provide-a-native-implementation-for-the-methods-in-your-turbomoduledelegate-class"}),"5. C++ Provide a native implementation for the methods in your ",(0,t.kt)("inlineCode",{parentName:"h2"},"*TurboModuleDelegate")," class"),(0,t.kt)("p",null,"If you take a closer look at the class ",(0,t.kt)("inlineCode",{parentName:"p"},"MyApplicationTurboModuleManagerDelegate")," that you created before, you will notice how some of the methods are ",(0,t.kt)("inlineCode",{parentName:"p"},"native"),"."),(0,t.kt)("p",null,"Therefore, you need to provide some C++ classes to implement those methods. Specifically you will need those files, to be added inside the ",(0,t.kt)("inlineCode",{parentName:"p"},"src/main/jni")," folder:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"MyApplicationTurboModuleManagerDelegate.h")," An header file for the TurboModule Delegate."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"MyApplicationTurboModuleManagerDelegate.cpp")," The implementation of the aforementioned header file."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"MyApplicationModuleProvider.h")," A header file for the TurboModule provider, where you can specify which TurboModules you want to load."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"MyApplicationModuleProvider.cpp")," The implementation for the aforementioned header file."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"OnLoad.cpp")," Where the initialisation code will be placed. Specifically TurboModule uses FBJNI so the initialisation for such library lives there.")),(0,t.kt)("p",null,"The content of those files should be the following:"),(0,t.kt)("h4",b({},{id:"myapplicationturbomodulemanagerdelegateh"}),"MyApplicationTurboModuleManagerDelegate.h"),(0,t.kt)("p",null,"Please note that the ",(0,t.kt)("inlineCode",{parentName:"p"},"kJavaDescriptor")," should be adapted to follow the package name you picked for your project."),(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),'#include <memory>\n#include <string>\n\n#include <ReactCommon/TurboModuleManagerDelegate.h>\n#include <fbjni/fbjni.h>\n\nnamespace facebook {\nnamespace react {\n\nclass MyApplicationTurboModuleManagerDelegate : public jni::HybridClass<MyApplicationTurboModuleManagerDelegate, TurboModuleManagerDelegate> {\npublic:\n  // Adapt it to the package you used for your Java class.\n  static constexpr auto kJavaDescriptor =\n      "Lcom/awesomeproject/MyApplicationTurboModuleManagerDelegate;";\n\n  static jni::local_ref<jhybriddata> initHybrid(jni::alias_ref<jhybridobject>);\n\n  static void registerNatives();\n\n  std::shared_ptr<TurboModule> getTurboModule(const std::string name, const std::shared_ptr<CallInvoker> jsInvoker) override;\n  std::shared_ptr<TurboModule> getTurboModule(const std::string name, const JavaTurboModule::InitParams &params) override;\n\nprivate:\n  friend HybridBase;\n  using HybridBase::HybridBase;\n\n};\n\n} // namespace react\n} // namespace facebook\n')),(0,t.kt)("h4",b({},{id:"myapplicationturbomodulemanagerdelegatecpp"}),"MyApplicationTurboModuleManagerDelegate.cpp"),(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),'#include "MyApplicationTurboModuleManagerDelegate.h"\n#include "MyApplicationModuleProvider.h"\n\nnamespace facebook {\nnamespace react {\n\njni::local_ref<MyApplicationTurboModuleManagerDelegate::jhybriddata> MyApplicationTurboModuleManagerDelegate::initHybrid(jni::alias_ref<jhybridobject>) {\n  return makeCxxInstance();\n}\n\nvoid MyApplicationTurboModuleManagerDelegate::registerNatives() {\n  registerHybrid({\n    makeNativeMethod("initHybrid", MyApplicationTurboModuleManagerDelegate::initHybrid),\n  });\n}\n\nstd::shared_ptr<TurboModule> MyApplicationTurboModuleManagerDelegate::getTurboModule(const std::string name, const std::shared_ptr<CallInvoker> jsInvoker) {\n  // Not implemented yet: provide pure-C++ NativeModules here.\n  return nullptr;\n}\n\nstd::shared_ptr<TurboModule> MyApplicationTurboModuleManagerDelegate::getTurboModule(const std::string name, const JavaTurboModule::InitParams &params) {\n  return MyApplicationModuleProvider(name, params);\n}\n\n} // namespace react\n} // namespace facebook\n')),(0,t.kt)("h4",b({},{id:"myapplicationmoduleproviderh"}),"MyApplicationModuleProvider.h"),(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"#pragma once\n\n#include <memory>\n#include <string>\n\n#include <ReactCommon/JavaTurboModule.h>\n\nnamespace facebook {\nnamespace react {\n\nstd::shared_ptr<TurboModule> MyApplicationModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params);\n\n} // namespace react\n} // namespace facebook\n")),(0,t.kt)("h4",b({},{id:"myapplicationmoduleprovidercpp"}),"MyApplicationModuleProvider.cpp"),(0,t.kt)("p",null,"Please adapt the ",(0,t.kt)("inlineCode",{parentName:"p"},"samplelibrary.h")," import to match the same library name you provided when building the apps.\nThis is the C++ generated file that is created by the codegen."),(0,t.kt)("p",null,"Here you can also specify more than one provider, should you have more than one TurboModule. Specifically in this example we look for a TurboModule from ",(0,t.kt)("inlineCode",{parentName:"p"},"samplelibrary")," (the one we specified) and we fallback to the ",(0,t.kt)("inlineCode",{parentName:"p"},"rncore")," Module Provider (containing all the Core modules)."),(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),'#include "MyApplicationModuleProvider.h"\n\n#include <rncore.h>\n#include <samplelibrary.h>\n\nnamespace facebook {\nnamespace react {\n\nstd::shared_ptr<TurboModule> MyApplicationModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params) {\n    auto module = samplelibrary_ModuleProvider(moduleName, params);\n    if (module != nullptr) {\n      return module;\n    }\n\n    return rncore_ModuleProvider(moduleName, params);\n}\n\n} // namespace react\n} // namespace facebook\n')),(0,t.kt)("h4",b({},{id:"onloadcpp"}),"OnLoad.cpp"),(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),'#include <fbjni/fbjni.h>\n#include "MyApplicationTurboModuleManagerDelegate.h"\n\nJNIEXPORT jint JNICALL JNI_OnLoad(JavaVM *vm, void *) {\n  return facebook::jni::initialize(vm, [] {\n    facebook::react::MyApplicationTurboModuleManagerDelegate::registerNatives();\n  });\n}\n')),(0,t.kt)("h2",b({},{id:"6-enable-the-useturbomodules-flag-in-your-application-oncreate"}),"6. Enable the ",(0,t.kt)("inlineCode",{parentName:"h2"},"useTurboModules")," flag in your Application ",(0,t.kt)("inlineCode",{parentName:"h2"},"onCreate")),(0,t.kt)("p",null,"Now you can finally enable the ",(0,t.kt)("inlineCode",{parentName:"p"},"TurboModule "),"support in your Application. To do so, you need to turn on the ",(0,t.kt)("inlineCode",{parentName:"p"},"useTurboModule")," flag inside your Application ",(0,t.kt)("inlineCode",{parentName:"p"},"onCreate")," method."),(0,t.kt)(r.Z,{groupId:"android-language",defaultValue:l.Z.defaultAndroidLanguage,values:l.Z.androidLanguages,mdxType:"Tabs"},(0,t.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-java"}),"public class MyApplication extends Application implements ReactApplication {\n\n    @Override\n    public void onCreate() {\n        ReactFeatureFlags.useTurboModules = true;\n        //...\n    }\n}\n"))),(0,t.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-kotlin"}),"class MyApplication : Application(), ReactApplication {\n\n    override fun onCreate() {\n        ReactFeatureFlags.useTurboModules = true\n        // ...\n    }\n}\n")))),(0,t.kt)("p",null,"It\u2019s now time to run again your Android app to verify that everything works correctly:"),(0,t.kt)("pre",null,(0,t.kt)("code",b({parentName:"pre"},{className:"language-bash"}),"yarn react-native run-android\n")))}N.isMDXComponent=!0}}]);