"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[87186],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,g=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5501:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return y}});var a=n(35318),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&c(e,n,t[n]);return e};const u={id:"integration-with-android-fragment",title:"\u96c6\u6210\u5230 Android Fragment"},m=void 0,g={unversionedId:"integration-with-android-fragment",id:"version-0.63/integration-with-android-fragment",title:"\u96c6\u6210\u5230 Android Fragment",description:"The guide for Integration with Existing Apps details how to integrate a full-screen React Native app into an existing Android app as an Activity. To use React Native components within Fragments in an existing app requires some additional setup. The benefit of this is that it allows for a native app to integrate React Native components alongside native fragments in an Activity.",source:"@site/versioned_docs/version-0.63/integration-with-android-fragment.md",sourceDirName:".",slug:"/integration-with-android-fragment",permalink:"/docs/0.63/integration-with-android-fragment",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/integration-with-android-fragment.md",tags:[],version:"0.63",frontMatter:{id:"integration-with-android-fragment",title:"\u96c6\u6210\u5230 Android Fragment"},sidebar:"version-0.63/docs",previous:{title:"\u96c6\u6210\u5230\u73b0\u6709\u539f\u751f\u5e94\u7528",permalink:"/docs/0.63/integration-with-existing-apps"},next:{title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",permalink:"/docs/0.63/building-for-tv"}},v={},y=[{value:"1. Add React Native to your app",id:"1-add-react-native-to-your-app",level:3},{value:"2. Integrating your App with a React Native Fragment",id:"2-integrating-your-app-with-a-react-native-fragment",level:3},{value:"Step 3. Add a FrameLayout for the React Native Fragment",id:"step-3-add-a-framelayout-for-the-react-native-fragment",level:3},{value:"Step 4. Add a React Native Fragment to the FrameLayout",id:"step-4-add-a-react-native-fragment-to-the-framelayout",level:3},{value:"Step 5. Test your integration",id:"step-5-test-your-integration",level:3},{value:"Step 6. Additional setup - Native modules",id:"step-6-additional-setup---native-modules",level:3},{value:"You may need to call out to existing Java code from your react component. Native modules allow you to call out to native code and run methods in your native app. Follow the setup here native-modules-android",id:"you-may-need-to-call-out-to-existing-java-code-from-your-react-component-native-modules-allow-you-to-call-out-to-native-code-and-run-methods-in-your-native-app-follow-the-setup-here-native-modules-android",level:2},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000",level:5}],f={toc:y};function h(e){var t,n=e,{components:i}=n,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=s(s({},f),c),o(t,r({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"The guide for ",(0,a.kt)("a",s({parentName:"p"},{href:"integration-with-existing-apps"}),"Integration with Existing Apps")," details how to integrate a full-screen React Native app into an existing Android app as an Activity. To use React Native components within Fragments in an existing app requires some additional setup. The benefit of this is that it allows for a native app to integrate React Native components alongside native fragments in an Activity."),(0,a.kt)("h3",s({},{id:"1-add-react-native-to-your-app"}),"1. Add React Native to your app"),(0,a.kt)("p",null,"Follow the guide for ",(0,a.kt)("a",s({parentName:"p"},{href:"integration-with-existing-apps"}),"Integration with Existing Apps")," until the Code integration section. Continue to follow Step 1. Create an ",(0,a.kt)("inlineCode",{parentName:"p"},"index.android.js")," file and Step 2. Add your React Native code from this section."),(0,a.kt)("h3",s({},{id:"2-integrating-your-app-with-a-react-native-fragment"}),"2. Integrating your App with a React Native Fragment"),(0,a.kt)("p",null,'You can render your React Native component into a Fragment instead of a full screen React Native Activity. The component may be termed a "screen" or "fragment" and it will function in the same manner as an Android fragment, likely containing child components. These components can be placed in a ',(0,a.kt)("inlineCode",{parentName:"p"},"/fragments")," folder and the child components used to compose the fragment can be placed in a ",(0,a.kt)("inlineCode",{parentName:"p"},"/components")," folder."),(0,a.kt)("p",null,"You will need to implement the ReactApplication interface in your main Application Java class. If you have created a new project from Android Studio with a default activity, you will need to create a new class e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"MyReactApplication.java"),". If it is an existing class you can find this main class in your ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file. Under the ",(0,a.kt)("inlineCode",{parentName:"p"},"<application />")," tag you should see a property ",(0,a.kt)("inlineCode",{parentName:"p"},"android:name")," e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},'android:name=".MyReactApplication"'),". This value is the class you want to implement and provide the required methods to."),(0,a.kt)("p",null,"Ensure your main Application Java class implements ReactApplication:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-java"}),"public class MyReactApplication extends Application implements ReactApplication {...}\n")),(0,a.kt)("p",null,"Override the required methods ",(0,a.kt)("inlineCode",{parentName:"p"},"getUseDeveloperSupport"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"getPackages")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"getReactNativeHost"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-java"}),"public class MyReactApplication extends Application implements ReactApplication {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        SoLoader.init(this, false);\n    }\n\n    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {\n        @Override\n        public boolean getUseDeveloperSupport() {\n            return BuildConfig.DEBUG;\n        }\n\n        protected List<ReactPackage> getPackages() {\n            List<ReactPackage> packages = new PackageList(this).getPackages();\n            // Packages that cannot be autolinked yet can be added manually here\n            return packages;\n        }\n    };\n\n    @Override\n    public ReactNativeHost getReactNativeHost() {\n        return mReactNativeHost;\n    }\n}\n")),(0,a.kt)("p",null,"If you are using Android Studio, use Alt + Enter to add all missing imports in your class. Alternatively these are the required imports to include manually:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-java"}),"import android.app.Application;\n\nimport com.facebook.react.PackageList;\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.soloader.SoLoader;\n\nimport java.util.List;\n")),(0,a.kt)("p",null,'Perform a "Sync Project files with Gradle" operation.'),(0,a.kt)("h3",s({},{id:"step-3-add-a-framelayout-for-the-react-native-fragment"}),"Step 3. Add a FrameLayout for the React Native Fragment"),(0,a.kt)("p",null,"You will now add your React Native Fragment to an Activity. For a new project this Activity will be ",(0,a.kt)("inlineCode",{parentName:"p"},"MainActivity")," but it could be any Activity and more fragments can be added to additional Activities as you integrate more React Native components into your app."),(0,a.kt)("p",null,"First add the React Native Fragment to your Activity's layout. For example ",(0,a.kt)("inlineCode",{parentName:"p"},"main_activity.xml")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"res/layouts")," folder."),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"<FrameLayout>")," with an id, width and height. This is the layout you will find and render your React Native Fragment into."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-xml"}),'<FrameLayout\n    android:id="@+id/reactNativeFragment"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent" />\n')),(0,a.kt)("h3",s({},{id:"step-4-add-a-react-native-fragment-to-the-framelayout"}),"Step 4. Add a React Native Fragment to the FrameLayout"),(0,a.kt)("p",null,"To add your React Native Fragment to your layout you need to have an Activity. As mentioned in a new project this will be ",(0,a.kt)("inlineCode",{parentName:"p"},"MainActivity"),". In this Activity add a button and an event listener. On button click you will render your React Native Fragment."),(0,a.kt)("p",null,"Modify your Activity layout to add the button:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-xml"}),'<Button\n    android:layout_margin="10dp"\n    android:id="@+id/button"\n    android:layout_width="match_parent"\n    android:layout_height="wrap_content"\n    android:text="Show react fragment" />\n')),(0,a.kt)("p",null,"Now in your Activity class e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"MainActivity.java")," you need to add an OnClickListener for the button, instantiate your ReactFragment and add it to the frame layout."),(0,a.kt)("p",null,"Add the button field to the top of your Activity:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-java"}),"private Button mButton;\n")),(0,a.kt)("p",null,"Update your Activity's onCreate method as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-java"}),'@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.main_activity);\n\n    mButton = findViewById(R.id.button);\n    mButton.setOnClickListener(new View.OnClickListener() {\n        public void onClick(View v) {\n            Fragment reactNativeFragment = new ReactFragment.Builder()\n                    .setComponentName("HelloWorld")\n                    .setLaunchOptions(getLaunchOptions("test message"))\n                    .build();\n\n            getSupportFragmentManager()\n                    .beginTransaction()\n                    .add(R.id.reactNativeFragment, reactNativeFragment)\n                    .commit();\n\n        }\n    });\n}\n')),(0,a.kt)("p",null,"In the code above ",(0,a.kt)("inlineCode",{parentName:"p"},"Fragment reactNativeFragment = new ReactFragment.Builder()")," creates the ReactFragment and ",(0,a.kt)("inlineCode",{parentName:"p"},"getSupportFragmentManager().beginTransaction().add()")," adds the Fragment to the Frame Layout."),(0,a.kt)("p",null,'If you are using a starter kit for React Native, replace the "HelloWorld" string with the one in your ',(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"index.android.js")," file (it\u2019s the first argument to the AppRegistry.registerComponent() method)."),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"getLaunchOptions")," method which will allow you to pass props through to your component. This is optional and you can remove ",(0,a.kt)("inlineCode",{parentName:"p"},"setLaunchOptions")," if you don't need to pass any props."),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-java"}),'private Bundle getLaunchOptions(String message) {\n    Bundle initialProperties = new Bundle();\n    initialProperties.putString("message", message);\n    return initialProperties;\n}\n')),(0,a.kt)("p",null,"Add all missing imports in your Activity class. Be careful to use your package\u2019s BuildConfig and not the one from the facebook package! Alternatively these are the required imports to include manually:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-java"}),"import android.app.Application;\n\nimport com.facebook.react.ReactApplication;\nimport com.facebook.react.ReactNativeHost;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.shell.MainReactPackage;\nimport com.facebook.soloader.SoLoader;\n")),(0,a.kt)("p",null,'Perform a "Sync Project files with Gradle" operation.'),(0,a.kt)("h3",s({},{id:"step-5-test-your-integration"}),"Step 5. Test your integration"),(0,a.kt)("p",null,"Make sure you run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," to install your react-native dependencies and run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn native")," to start the metro bundler. Run your android app in Android Studio and it should load the JavaScript code from the development server and display it in your React Native Fragment in the Activity."),(0,a.kt)("h3",s({},{id:"step-6-additional-setup---native-modules"}),"Step 6. Additional setup - Native modules"),(0,a.kt)("h2",s({},{id:"you-may-need-to-call-out-to-existing-java-code-from-your-react-component-native-modules-allow-you-to-call-out-to-native-code-and-run-methods-in-your-native-app-follow-the-setup-here-native-modules-android"}),"You may need to call out to existing Java code from your react component. Native modules allow you to call out to native code and run methods in your native app. Follow the setup here ",(0,a.kt)("a",s({parentName:"h2"},{href:"native-modules-android"}),"native-modules-android")),(0,a.kt)("h5",s({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",s({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"))}h.isMDXComponent=!0}}]);