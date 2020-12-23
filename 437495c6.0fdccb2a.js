(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(413)),i={id:"troubleshooting",title:"Troubleshooting"},c={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"These are some common issues you may run into while setting up React Native. If you encounter something that is not listed here, try searching for the issue in GitHub.",source:"@site/../cndocs/troubleshooting.md",slug:"/troubleshooting",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/troubleshooting",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/troubleshooting.md",version:"current",lastUpdatedAt:1608733239},s=[{value:"Port already in use",id:"port-already-in-use",children:[]},{value:"NPM locking error",id:"npm-locking-error",children:[]},{value:"Missing libraries for React",id:"missing-libraries-for-react",children:[]},{value:"No transports available",id:"no-transports-available",children:[]},{value:"Shell Command Unresponsive Exception",id:"shell-command-unresponsive-exception",children:[]},{value:"react-native init hangs",id:"react-native-init-hangs",children:[]},{value:"Unable to start react-native package manager (on Linux)",id:"unable-to-start-react-native-package-manager-on-linux",children:[{value:"Case 1: Error &quot;code&quot;:&quot;ENOSPC&quot;,&quot;errno&quot;:&quot;ENOSPC&quot;",id:"case-1-error-codeenospcerrnoenospc",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"These are some common issues you may run into while setting up React Native. If you encounter something that is not listed here, try ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/"}),"searching for the issue in GitHub"),"."),Object(a.b)("h3",{id:"port-already-in-use"},"Port already in use"),Object(a.b)("p",null,"The ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/metro/"}),"Metro bundler")," runs on port 8081. If another process is already using that port, you can either terminate that process, or change the port that the bundler uses."),Object(a.b)("h4",{id:"terminating-a-process-on-port-8081"},"Terminating a process on port 8081"),Object(a.b)("p",null,"Run the following command to find the id for the process that is listening on port 8081:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ sudo lsof -i :8081\n")),Object(a.b)("p",null,"Then run the following to terminate the process:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ kill -9 <PID>\n")),Object(a.b)("p",null,"On Windows you can find the process using port 8081 using ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/48198/how-can-you-find-out-which-process-is-listening-on-a-port-on-windows"}),"Resource Monitor")," and stop it using Task Manager."),Object(a.b)("h4",{id:"using-a-port-other-than-8081"},"Using a port other than 8081"),Object(a.b)("p",null,"You can configure the bundler to use a port other than 8081 by using the ",Object(a.b)("inlineCode",{parentName:"p"},"port")," parameter:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ npx react-native start --port=8088\n")),Object(a.b)("p",null,"You will also need to update your applications to load the JavaScript bundle from the new port. If running on device from Xcode, you can do this by updating occurrences of ",Object(a.b)("inlineCode",{parentName:"p"},"8081")," to your chosen port in the ",Object(a.b)("inlineCode",{parentName:"p"},"node_modules/react-native/React/React.xcodeproj/project.pbxproj")," file."),Object(a.b)("h3",{id:"npm-locking-error"},"NPM locking error"),Object(a.b)("p",null,"If you encounter an error such as ",Object(a.b)("inlineCode",{parentName:"p"},"npm WARN locking Error: EACCES")," while using the React Native CLI, try running the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo chown -R $USER ~/.npm\nsudo chown -R $USER /usr/local/lib/node_modules\n")),Object(a.b)("h3",{id:"missing-libraries-for-react"},"Missing libraries for React"),Object(a.b)("p",null,"If you added React Native manually to your project, make sure you have included all the relevant dependencies that you are using, like ",Object(a.b)("inlineCode",{parentName:"p"},"RCTText.xcodeproj"),", ",Object(a.b)("inlineCode",{parentName:"p"},"RCTImage.xcodeproj"),". Next, the binaries built by these dependencies have to be linked to your app binary. Use the ",Object(a.b)("inlineCode",{parentName:"p"},"Linked Frameworks and Binaries")," section in the Xcode project settings. More detailed steps are here: ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/linking-libraries-ios#content"}),"Linking Libraries"),"."),Object(a.b)("p",null,"If you are using CocoaPods, verify that you have added React along with the subspecs to the ",Object(a.b)("inlineCode",{parentName:"p"},"Podfile"),". For example, if you were using the ",Object(a.b)("inlineCode",{parentName:"p"},"<Text />"),", ",Object(a.b)("inlineCode",{parentName:"p"},"<Image />")," and ",Object(a.b)("inlineCode",{parentName:"p"},"fetch()")," APIs, you would need to add these in your ",Object(a.b)("inlineCode",{parentName:"p"},"Podfile"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"pod 'React', :path => '../node_modules/react-native', :subspecs => [\n  'RCTText',\n  'RCTImage',\n  'RCTNetwork',\n  'RCTWebSocket',\n]\n")),Object(a.b)("p",null,"Next, make sure you have run ",Object(a.b)("inlineCode",{parentName:"p"},"pod install")," and that a ",Object(a.b)("inlineCode",{parentName:"p"},"Pods/")," directory has been created in your project with React installed. CocoaPods will instruct you to use the generated ",Object(a.b)("inlineCode",{parentName:"p"},".xcworkspace")," file henceforth to be able to use these installed dependencies."),Object(a.b)("h4",{id:"react-native-does-not-compile-when-being-used-as-a-cocoapod"},"React Native does not compile when being used as a CocoaPod"),Object(a.b)("p",null,"There is a CocoaPods plugin called ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/orta/cocoapods-fix-react-native"}),"cocoapods-fix-react-native")," which handles any potential post-fixing of the source code due to differences when using a dependency manager."),Object(a.b)("h4",{id:"argument-list-too-long-recursive-header-expansion-failed"},"Argument list too long: recursive header expansion failed"),Object(a.b)("p",null,"In the project's build settings, ",Object(a.b)("inlineCode",{parentName:"p"},"User Search Header Paths")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Header Search Paths")," are two configs that specify where Xcode should look for ",Object(a.b)("inlineCode",{parentName:"p"},"#import")," header files specified in the code. For Pods, CocoaPods uses a default array of specific folders to look in. Verify that this particular config is not overwritten, and that none of the folders configured are too large. If one of the folders is a large folder, Xcode will attempt to recursively search the entire directory and throw above error at some point."),Object(a.b)("p",null,"To revert the ",Object(a.b)("inlineCode",{parentName:"p"},"User Search Header Paths")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Header Search Paths")," build settings to their defaults set by CocoaPods - select the entry in the Build Settings panel, and hit delete. It will remove the custom override and return to the CocoaPod defaults."),Object(a.b)("h3",{id:"no-transports-available"},"No transports available"),Object(a.b)("p",null,"React Native implements a polyfill for WebSockets. These ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Core/InitializeCore.js"}),"polyfills")," are initialized as part of the react-native module that you include in your application through ",Object(a.b)("inlineCode",{parentName:"p"},"import React from 'react'"),". If you load another module that requires WebSockets, such as ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/3645"}),"Firebase"),", be sure to load/require it after react-native:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"import React from 'react';\nimport Firebase from 'firebase';\n")),Object(a.b)("h2",{id:"shell-command-unresponsive-exception"},"Shell Command Unresponsive Exception"),Object(a.b)("p",null,"If you encounter a ShellCommandUnresponsiveException exception such as:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"Execution failed for task ':app:installDebug'.\n  com.android.builder.testing.api.DeviceException: com.android.ddmlib.ShellCommandUnresponsiveException\n")),Object(a.b)("p",null,"Try ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/2720"}),"downgrading your Gradle version to 1.2.3")," in ",Object(a.b)("inlineCode",{parentName:"p"},"android/build.gradle"),"."),Object(a.b)("h2",{id:"react-native-init-hangs"},"react-native init hangs"),Object(a.b)("p",null,"If you run into issues where running ",Object(a.b)("inlineCode",{parentName:"p"},"npx react-native init")," hangs in your system, try running it again in verbose mode and referring to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/issues/2797"}),"#2797")," for common causes:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npx react-native init --verbose\n")),Object(a.b)("h2",{id:"unable-to-start-react-native-package-manager-on-linux"},"Unable to start react-native package manager (on Linux)"),Object(a.b)("h3",{id:"case-1-error-codeenospcerrnoenospc"},'Case 1: Error "code":"ENOSPC","errno":"ENOSPC"'),Object(a.b)("p",null,"Issue caused by the number of directories ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers"}),"inotify")," (used by watchman on Linux) can monitor. To solve it, run this command in your terminal window"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p\n")))}p.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);