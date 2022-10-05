"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[25189],{35318:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return m}});var t=a(27378);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=t.createContext({}),c=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(a),m=o,g=s["".concat(d,".").concat(m)]||s[m]||u[m]||r;return a?t.createElement(g,i(i({ref:n},p),{},{components:a})):t.createElement(g,i({ref:n},p))}));function m(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=s;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},38299:function(e,n,a){a.d(n,{ZP:function(){return m}});var t=a(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,n,a)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,u=(e,n)=>{for(var a in n||(n={}))d.call(n,a)&&p(e,a,n[a]);if(l)for(var a of l(n))c.call(n,a)&&p(e,a,n[a]);return e};const s={toc:[]};function m(e){var n,a=e,{components:o}=a,p=((e,n)=>{var a={};for(var t in e)d.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&l)for(var t of l(e))n.indexOf(t)<0&&c.call(e,t)&&(a[t]=e[t]);return a})(a,["components"]);return(0,t.kt)("wrapper",(n=u(u({},s),p),r(n,i({components:o,mdxType:"MDXLayout"}))),(0,t.kt)("admonition",u({},{type:"caution"}),(0,t.kt)("p",{parentName:"admonition"},"This documentation is still ",(0,t.kt)("strong",{parentName:"p"},"experimental")," and details are subject to changes as we iterate. Feel free to share your feedback on the ",(0,t.kt)("a",u({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"discussion inside the working group")," for this page."),(0,t.kt)("p",{parentName:"admonition"},"Moreover, it contains several ",(0,t.kt)("strong",{parentName:"p"},"manual steps"),". Please note that this won't be representative of the final developer experience once the New Architecture is stable. We're working on tools, templates and libraries to help you get started fast on the New Architecture, without having to go through the whole setup.")))}m.isMDXComponent=!0},99025:function(e,n,a){a.r(n),a.d(n,{assets:function(){return h},contentTitle:function(){return g},default:function(){return f},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return k}});var t=a(35318),o=a(38299),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,a)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,s=(e,n)=>{for(var a in n||(n={}))c.call(n,a)&&u(e,a,n[a]);if(d)for(var a of d(n))p.call(n,a)&&u(e,a,n[a]);return e};const m={id:"new-architecture-app-modules-android",title:"Enabling TurboModule on Android"},g=void 0,b={unversionedId:"new-architecture-app-modules-android",id:"version-0.67/new-architecture-app-modules-android",title:"Enabling TurboModule on Android",description:"Make sure your application meets all the prerequisites.",source:"@site/versioned_docs/version-0.67/new-architecture-app-modules-android.md",sourceDirName:".",slug:"/new-architecture-app-modules-android",permalink:"/docs/0.67/new-architecture-app-modules-android",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-app-modules-android.md",tags:[],version:"0.67",frontMatter:{id:"new-architecture-app-modules-android",title:"Enabling TurboModule on Android"}},h={},k=[{value:"1. Enable NDK and the native build",id:"1-enable-ndk-and-the-native-build",level:2},{value:"2. Java - Provide a <code>ReactPackageTurboModuleManagerDelegate</code>",id:"2-java---provide-a-reactpackageturbomodulemanagerdelegate",level:2},{value:"3. Adapt your <code>ReactNativeHost</code> to use the <code>ReactPackageTurboModuleManagerDelegate</code>",id:"3-adapt-your-reactnativehost-to-use-the-reactpackageturbomodulemanagerdelegate",level:2},{value:"4. Extend the <code>getPackages()</code> from your <code>ReactNativeHost</code> to use the TurboModule",id:"4-extend-the-getpackages-from-your-reactnativehost-to-use-the-turbomodule",level:2},{value:"5. C++ Provide a native implementation for the methods in your <code>*TurboModuleDelegate</code> class",id:"5-c-provide-a-native-implementation-for-the-methods-in-your-turbomoduledelegate-class",level:2},{value:"MyApplicationTurboModuleManagerDelegate.h",id:"myapplicationturbomodulemanagerdelegateh",level:4},{value:"MyApplicationTurboModuleManagerDelegate.cpp",id:"myapplicationturbomodulemanagerdelegatecpp",level:4},{value:"MyApplicationModuleProvider.h",id:"myapplicationmoduleproviderh",level:4},{value:"MyApplicationModuleProvider.cpp",id:"myapplicationmoduleprovidercpp",level:4},{value:"OnLoad.cpp",id:"onloadcpp",level:4},{value:"6. Enable the <code>useTurboModules</code> flag in your Application <code>onCreate</code>",id:"6-enable-the-useturbomodules-flag-in-your-application-oncreate",level:2}],y={toc:k};function f(e){var n,a=e,{components:r}=a,u=((e,n)=>{var a={};for(var t in e)c.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&d)for(var t of d(e))n.indexOf(t)<0&&p.call(e,t)&&(a[t]=e[t]);return a})(a,["components"]);return(0,t.kt)("wrapper",(n=s(s({},y),u),i(n,l({components:r,mdxType:"MDXLayout"}))),(0,t.kt)(o.ZP,{mdxType:"NewArchitectureWarning"}),(0,t.kt)("p",null,"Make sure your application meets all the ",(0,t.kt)("a",s({parentName:"p"},{href:"new-architecture-app-intro"}),"prerequisites"),"."),(0,t.kt)("h2",s({},{id:"1-enable-ndk-and-the-native-build"}),"1. Enable NDK and the native build"),(0,t.kt)("admonition",s({},{type:"caution"}),(0,t.kt)("p",{parentName:"admonition"},"In this iteration of the guide we\u2019re setting up the project to let you build from source. You might notice an increase in your build time because of this. We\u2019re looking into what would be the preferred approach here so please feel free to share your feedbacks.")),(0,t.kt)("p",null,"The code-gen will output some Java and some C++ code that now we need to build."),(0,t.kt)("p",null,"Let\u2019s edit your ",(0,t.kt)("strong",{parentName:"p"},"module level")," ",(0,t.kt)("inlineCode",{parentName:"p"},"build.gradle")," to include the ",(0,t.kt)("strong",{parentName:"p"},"two")," ",(0,t.kt)("inlineCode",{parentName:"p"},"externalNativeBuild")," blocks detailed below inside the ",(0,t.kt)("inlineCode",{parentName:"p"},"android{}")," block:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-groovy"}),'android {\n    defaultConfig {\n        applicationId "com.awesomeproject"\n        // ...\n\n        // Add this block\n        externalNativeBuild {\n            ndkBuild {\n                arguments "APP_PLATFORM=android-21",\n                        "APP_STL=c++_shared",\n                        "NDK_TOOLCHAIN_VERSION=clang",\n                        "GENERATED_SRC_DIR=$buildDir/generated/source",\n                        "PROJECT_BUILD_DIR=$buildDir",\n                        "REACT_ANDROID_DIR=$rootDir/../node_modules/react-native/ReactAndroid",\n                        "REACT_ANDROID_BUILD_DIR=$rootDir/../node_modules/react-native/ReactAndroid/build"\n                cFlags "-Wall", "-Werror", "-fexceptions", "-frtti", "-DWITH_INSPECTOR=1"\n                cppFlags "-std=c++17"\n                targets "myapplication_appmodules"\n            }\n        }\n    }\n\n    // Add this block\n    externalNativeBuild {\n        ndkBuild {\n            path "$projectDir/src/main/jni/Android.mk"\n        }\n    }\n}\n')),(0,t.kt)("p",null,"In the same ",(0,t.kt)("inlineCode",{parentName:"p"},"build.gradle")," file, inside the same ",(0,t.kt)("inlineCode",{parentName:"p"},"android{}")," let\u2019s add also the following section:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-groovy"}),'android {\n    // ...\n\n    def reactAndroidProjectDir = project(\':ReactAndroid\').projectDir\n    def packageReactNdkLibs = tasks.register("packageReactNdkLibs", Copy) {\n        dependsOn(":ReactAndroid:packageReactNdkLibsForBuck")\n        dependsOn("generateCodegenArtifactsFromSchema")\n        from("$reactAndroidProjectDir/src/main/jni/prebuilt/lib")\n        into("$buildDir/react-ndk/exported")\n    }\n\n    afterEvaluate {\n        preBuild.dependsOn(packageReactNdkLibs)\n        configureNdkBuildDebug.dependsOn(preBuild)\n        configureNdkBuildRelease.dependsOn(preBuild)\n    }\n\n    packagingOptions {\n        pickFirst \'**/libhermes.so\'\n        pickFirst \'**/libjsc.so\'\n    }\n}\n')),(0,t.kt)("p",null,"Finally, we need to create a Makefile inside the ",(0,t.kt)("inlineCode",{parentName:"p"},"src/main/jni")," folder called ",(0,t.kt)("inlineCode",{parentName:"p"},"Android.mk")," with the following content:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-makefile"}),'THIS_DIR := $(call my-dir)\n\ninclude $(REACT_ANDROID_DIR)/Android-prebuilt.mk\ninclude $(GENERATED_SRC_DIR)/codegen/jni/Android.mk\n\ninclude $(CLEAR_VARS)\n\nLOCAL_PATH := $(THIS_DIR)\nLOCAL_MODULE := myapplication_appmodules\n\nLOCAL_C_INCLUDES := $(LOCAL_PATH) $(GENERATED_SRC_DIR)/codegen/jni\nLOCAL_SRC_FILES := $(wildcard $(LOCAL_PATH)/*.cpp) $(wildcard $(GENERATED_SRC_DIR)/codegen/jni/*.cpp)\nLOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH) $(GENERATED_SRC_DIR)/codegen/jni\n\n# Please note as one of the library listed is libreact_codegen_samplelibrary\n# This name will be generated as libreact_codegen_<library-name>\n# where <library-name> is the one you specified in the Gradle configuration\nLOCAL_SHARED_LIBRARIES := libjsi \\\n    libfbjni \\\n    libglog \\\n    libfolly_json \\\n    libyoga \\\n    libreact_nativemodule_core \\\n    libturbomodulejsijni \\\n    librrc_view \\\n    libreact_render_core \\\n    libreact_render_graphics \\\n    libfabricjni \\\n    libfolly_futures \\\n    libreact_debug \\\n    libreact_render_componentregistry \\\n    libreact_render_debug \\\n    libruntimeexecutor \\\n    libreact_codegen_rncore \\\n    libreact_codegen_samplelibrary\n\nLOCAL_CFLAGS := \\\n    -DLOG_TAG=\\"ReactNative\\"\nLOCAL_CFLAGS += -fexceptions -frtti -std=c++17 -Wall\n\ninclude $(BUILD_SHARED_LIBRARY)\n')),(0,t.kt)("p",null,"This setup will run a native build on your project and will compile the C++ files that have been generated by the codegen. You will see the native build running with the Gradle task ",(0,t.kt)("inlineCode",{parentName:"p"},":app:externalNativeBuildDebug")),(0,t.kt)("p",null,"You can now verify that everything works correctly by running your android app:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn react-native run-android\n")),(0,t.kt)("h2",s({},{id:"2-java---provide-a-reactpackageturbomodulemanagerdelegate"}),"2. Java - Provide a ",(0,t.kt)("inlineCode",{parentName:"h2"},"ReactPackageTurboModuleManagerDelegate")),(0,t.kt)("p",null,"Now is time to actually use the TurboModule.\nFirst, we will need to create a ",(0,t.kt)("inlineCode",{parentName:"p"},"ReactPackageTurboModuleManagerDelegate")," subclass, like the following:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-java"}),'package com.awesomeproject;\n\nimport com.facebook.jni.HybridData;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.ReactPackageTurboModuleManagerDelegate;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.soloader.SoLoader;\n\nimport java.util.List;\n\npublic class MyApplicationTurboModuleManagerDelegate extends ReactPackageTurboModuleManagerDelegate {\n\n    private static volatile boolean sIsSoLibraryLoaded;\n\n    protected MyApplicationTurboModuleManagerDelegate(ReactApplicationContext reactApplicationContext, List<ReactPackage> packages) {\n        super(reactApplicationContext, packages);\n    }\n\n    protected native HybridData initHybrid();\n\n    public static class Builder extends ReactPackageTurboModuleManagerDelegate.Builder {\n        protected MyApplicationTurboModuleManagerDelegate build(\n                ReactApplicationContext context, List<ReactPackage> packages) {\n            return new MyApplicationTurboModuleManagerDelegate(context, packages);\n        }\n    }\n\n    @Override\n    protected synchronized void maybeLoadOtherSoLibraries() {\n        // Prevents issues with initializer interruptions.\n        if (!sIsSoLibraryLoaded) {\n            SoLoader.loadLibrary("myapplication_appmodules");\n            sIsSoLibraryLoaded = true;\n        }\n    }\n}\n')),(0,t.kt)("p",null,"Please note that the ",(0,t.kt)("inlineCode",{parentName:"p"},"SoLoader.loadLibrary")," parameter (in this case ",(0,t.kt)("inlineCode",{parentName:"p"},'"myapplication_appmodules")')," should be the same as the one specified for ",(0,t.kt)("inlineCode",{parentName:"p"},"LOCAL_MODULE :=")," inside the ",(0,t.kt)("inlineCode",{parentName:"p"},"Android.mk")," file you created before."),(0,t.kt)("p",null,"This class will then be responsible of loading the TurboModules and will take care of loading the native library build with the NDK at runtime."),(0,t.kt)("h2",s({},{id:"3-adapt-your-reactnativehost-to-use-the-reactpackageturbomodulemanagerdelegate"}),"3. Adapt your ",(0,t.kt)("inlineCode",{parentName:"h2"},"ReactNativeHost")," to use the ",(0,t.kt)("inlineCode",{parentName:"h2"},"ReactPackageTurboModuleManagerDelegate")),(0,t.kt)("p",null,"Then, you can provide the class you created to your ",(0,t.kt)("inlineCode",{parentName:"p"},"ReactNativeHost"),". You can locate your ",(0,t.kt)("inlineCode",{parentName:"p"},"ReactNativeHost")," by searching for the ",(0,t.kt)("inlineCode",{parentName:"p"},"getReactNativeHost()"),". The ",(0,t.kt)("inlineCode",{parentName:"p"},"ReactNativeHost")," is usually located inside your ",(0,t.kt)("inlineCode",{parentName:"p"},"Application")," class."),(0,t.kt)("p",null,"Once you located it, you need to add the ",(0,t.kt)("inlineCode",{parentName:"p"},"getReactPackageTurboModuleManagerDelegateBuilder")," method as from the snippet below:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-java"}),"public class MyApplication extends Application implements ReactApplication {\n\n    private final ReactNativeHost mReactNativeHost =\n        new ReactNativeHost(this) {\n            @Override\n            public boolean getUseDeveloperSupport() { /* ... */ }\n\n            @Override\n            protected List<ReactPackage> getPackages() { /* ... */ }\n\n            @Override\n            protected String getJSMainModuleName() {/* ... */ }\n\n            @NonNull\n            @Override\n            protected ReactPackageTurboModuleManagerDelegate.Builder getReactPackageTurboModuleManagerDelegateBuilder() {\n                return new MyApplicationTurboModuleManagerDelegate.Builder();\n            }\n        };\n}\n")),(0,t.kt)("h2",s({},{id:"4-extend-the-getpackages-from-your-reactnativehost-to-use-the-turbomodule"}),"4. Extend the ",(0,t.kt)("inlineCode",{parentName:"h2"},"getPackages()")," from your ",(0,t.kt)("inlineCode",{parentName:"h2"},"ReactNativeHost")," to use the TurboModule"),(0,t.kt)("p",null,"Still on the ",(0,t.kt)("inlineCode",{parentName:"p"},"ReactNativeHost")," , we need to extend the the ",(0,t.kt)("inlineCode",{parentName:"p"},"getPackages()")," method to include the newly created TurboModule. Update the method to include the following:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-java"}),'public class MyApplication extends Application implements ReactApplication {\n\n    private final ReactNativeHost mReactNativeHost =\n        new ReactNativeHost(this) {\n            @Override\n            public boolean getUseDeveloperSupport() { /* ... */ }\n\n            @Override\n            protected List<ReactPackage> getPackages() {\n                List<ReactPackage> packages = new PackageList(this).getPackages();\n\n                // Add those lines\n                packages.add(new TurboReactPackage() {\n                    @Nullable\n                    @Override\n                    public NativeModule getModule(String name, ReactApplicationContext reactContext) {\n                        if (name.equals(NativeAwesomeManager.NAME)) {\n                            return new NativeAwesomeManager(reactContext);\n                        } else {\n                            return null;\n                        }\n                    }\n\n                    @Override\n                    public ReactModuleInfoProvider getReactModuleInfoProvider() {\n                        return () -> {\n                            final Map<String, ReactModuleInfo> moduleInfos = new HashMap<>();\n                            moduleInfos.put(\n                                    NativeAwesomeManager.NAME,\n                                    new ReactModuleInfo(\n                                            NativeAwesomeManager.NAME,\n                                            "NativeAwesomeManager",\n                                            false, // canOverrideExistingModule\n                                            false, // needsEagerInit\n                                            true, // hasConstants\n                                            false, // isCxxModule\n                                            true // isTurboModule\n                                    )\n                            );\n                            return moduleInfos;\n                        };\n                    }\n                });\n                return packages;\n            }\n\n            @Override\n            protected String getJSMainModuleName() {/* ... */ }\n\n            @NonNull\n            @Override\n            protected ReactPackageTurboModuleManagerDelegate.Builder getReactPackageTurboModuleManagerDelegateBuilder() {\n                return new MyApplicationTurboModuleManagerDelegate.Builder();\n            }\n        };\n')),(0,t.kt)("h2",s({},{id:"5-c-provide-a-native-implementation-for-the-methods-in-your-turbomoduledelegate-class"}),"5. C++ Provide a native implementation for the methods in your ",(0,t.kt)("inlineCode",{parentName:"h2"},"*TurboModuleDelegate")," class"),(0,t.kt)("p",null,"If you take a closer look at the class ",(0,t.kt)("inlineCode",{parentName:"p"},"MyApplicationTurboModuleManagerDelegate")," that you created before, you will notice how some of the methods are ",(0,t.kt)("inlineCode",{parentName:"p"},"native"),"."),(0,t.kt)("p",null,"Therefore, you need to provide some C++ classes to implement those methods. Specifically you will need those files, to be added inside the ",(0,t.kt)("inlineCode",{parentName:"p"},"src/main/jni")," folder:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"MyApplicationTurboModuleManagerDelegate.h")," An header file for the TurboModule Delegate."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"MyApplicationTurboModuleManagerDelegate.cpp")," The implementation of the aforementioned header file."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"MyApplicationModuleProvider.h")," A header file for the TurboModule provider, where you can specify which TurboModules you want to load."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"MyApplicationModuleProvider.cpp")," The implementation for the aforementioned header file."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"OnLoad.cpp")," Where the initialisation code will be placed. Specifically TurboModule uses FBJNI so the initialisation for such library lives there.")),(0,t.kt)("p",null,"The content of those files should be the following:"),(0,t.kt)("h4",s({},{id:"myapplicationturbomodulemanagerdelegateh"}),"MyApplicationTurboModuleManagerDelegate.h"),(0,t.kt)("p",null,"Please note that the ",(0,t.kt)("inlineCode",{parentName:"p"},"kJavaDescriptor")," should be adapted to follow the package name you picked for your project."),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),'#include <memory>\n#include <string>\n\n#include <ReactCommon/TurboModuleManagerDelegate.h>\n#include <fbjni/fbjni.h>\n\nnamespace facebook {\nnamespace react {\n\nclass MyApplicationTurboModuleManagerDelegate : public jni::HybridClass<MyApplicationTurboModuleManagerDelegate, TurboModuleManagerDelegate> {\npublic:\n  // Adapt it to the package you used for your Java class.\n  static constexpr auto kJavaDescriptor =\n      "Lcom/awesomeproject/MyApplicationTurboModuleManagerDelegate;";\n\n  static jni::local_ref<jhybriddata> initHybrid(jni::alias_ref<jhybridobject>);\n\n  static void registerNatives();\n\n  std::shared_ptr<TurboModule> getTurboModule(const std::string name, const std::shared_ptr<CallInvoker> jsInvoker) override;\n  std::shared_ptr<TurboModule> getTurboModule(const std::string name, const JavaTurboModule::InitParams &params) override;\n\nprivate:\n  friend HybridBase;\n  using HybridBase::HybridBase;\n\n};\n\n} // namespace react\n} // namespace facebook\n')),(0,t.kt)("h4",s({},{id:"myapplicationturbomodulemanagerdelegatecpp"}),"MyApplicationTurboModuleManagerDelegate.cpp"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),'#include "MyApplicationTurboModuleManagerDelegate.h"\n#include "MyApplicationModuleProvider.h"\n\nnamespace facebook {\nnamespace react {\n\njni::local_ref<MyApplicationTurboModuleManagerDelegate::jhybriddata> MyApplicationTurboModuleManagerDelegate::initHybrid(jni::alias_ref<jhybridobject>) {\n  return makeCxxInstance();\n}\n\nvoid MyApplicationTurboModuleManagerDelegate::registerNatives() {\n  registerHybrid({\n    makeNativeMethod("initHybrid", MyApplicationTurboModuleManagerDelegate::initHybrid),\n  });\n}\n\nstd::shared_ptr<TurboModule> MyApplicationTurboModuleManagerDelegate::getTurboModule(const std::string name, const std::shared_ptr<CallInvoker> jsInvoker) {\n  // Not implemented yet: provide pure-C++ NativeModules here.\n  return nullptr;\n}\n\nstd::shared_ptr<TurboModule> MyApplicationTurboModuleManagerDelegate::getTurboModule(const std::string name, const JavaTurboModule::InitParams &params) {\n  return MyApplicationModuleProvider(name, params);\n}\n\n} // namespace react\n} // namespace facebook\n')),(0,t.kt)("h4",s({},{id:"myapplicationmoduleproviderh"}),"MyApplicationModuleProvider.h"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),"#pragma once\n\n#include <memory>\n#include <string>\n\n#include <ReactCommon/JavaTurboModule.h>\n\nnamespace facebook {\nnamespace react {\n\nstd::shared_ptr<TurboModule> MyApplicationModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params);\n\n} // namespace react\n} // namespace facebook\n")),(0,t.kt)("h4",s({},{id:"myapplicationmoduleprovidercpp"}),"MyApplicationModuleProvider.cpp"),(0,t.kt)("p",null,"Please adapt the ",(0,t.kt)("inlineCode",{parentName:"p"},"samplelibrary.h")," import to match the same library name you provided when building the apps.\nThis is the C++ generated file that is created by the codegen."),(0,t.kt)("p",null,"Here you can also specify more than one provider, should you have more than one TurboModule. Specifically in this example we look for a TurboModule from ",(0,t.kt)("inlineCode",{parentName:"p"},"samplelibrary")," (the one we specified) and we fallback to the ",(0,t.kt)("inlineCode",{parentName:"p"},"rncore")," Module Provider (containing all the Core modules)."),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),'#include "MyApplicationModuleProvider.h"\n\n#include <rncore.h>\n#include <samplelibrary.h>\n\nnamespace facebook {\nnamespace react {\n\nstd::shared_ptr<TurboModule> MyApplicationModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params) {\n    auto module = samplelibrary_ModuleProvider(moduleName, params);\n    if (module != nullptr) {\n      return module;\n    }\n\n    return rncore_ModuleProvider(moduleName, params);\n}\n\n} // namespace react\n} // namespace facebook\n')),(0,t.kt)("h4",s({},{id:"onloadcpp"}),"OnLoad.cpp"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-cpp"}),'#include <fbjni/fbjni.h>\n#include "MyApplicationTurboModuleManagerDelegate.h"\n\nJNIEXPORT jint JNICALL JNI_OnLoad(JavaVM *vm, void *) {\n  return facebook::jni::initialize(vm, [] {\n    facebook::react::MyApplicationTurboModuleManagerDelegate::registerNatives();\n  });\n}\n')),(0,t.kt)("h2",s({},{id:"6-enable-the-useturbomodules-flag-in-your-application-oncreate"}),"6. Enable the ",(0,t.kt)("inlineCode",{parentName:"h2"},"useTurboModules")," flag in your Application ",(0,t.kt)("inlineCode",{parentName:"h2"},"onCreate")),(0,t.kt)("p",null,"Now you can finally enable the ",(0,t.kt)("inlineCode",{parentName:"p"},"TurboModule "),"support in your Application. To do so, you need to turn on the ",(0,t.kt)("inlineCode",{parentName:"p"},"useTurboModule")," flag inside your Application ",(0,t.kt)("inlineCode",{parentName:"p"},"onCreate")," method."),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-java"}),"public class MyApplication extends Application implements ReactApplication {\n\n    @Override\n    public void onCreate() {\n        ReactFeatureFlags.useTurboModules = true;\n        //...\n    }\n")),(0,t.kt)("p",null,"It\u2019s now time to run again your Android app to verify that everything works correctly:"),(0,t.kt)("pre",null,(0,t.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"yarn react-native run-android\n")))}f.isMDXComponent=!0}}]);