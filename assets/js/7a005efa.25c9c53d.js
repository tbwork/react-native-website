"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[63018],{35318:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return f}});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(a),f=n,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return a?r.createElement(d,i(i({ref:t},s),{},{components:a})):r.createElement(d,i({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45034:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return h}});var r=a(35318),n=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))p.call(t,a)&&s(e,a,t[a]);return e};const m={id:"out-of-tree-platforms",title:"\u591a\u5e73\u53f0\u652f\u6301"},f=void 0,d={unversionedId:"out-of-tree-platforms",id:"version-0.65/out-of-tree-platforms",title:"\u591a\u5e73\u53f0\u652f\u6301",description:"React Native is not just for Android and iOS - there are community-supported projects that bring it to other platforms, such as:",source:"@site/versioned_docs/version-0.65/out-of-tree-platforms.md",sourceDirName:".",slug:"/out-of-tree-platforms",permalink:"/docs/0.65/out-of-tree-platforms",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/out-of-tree-platforms.md",tags:[],version:"0.65",frontMatter:{id:"out-of-tree-platforms",title:"\u591a\u5e73\u53f0\u652f\u6301"},sidebar:"version-0.65/docs",previous:{title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",permalink:"/docs/0.65/building-for-tv"},next:{title:"\u5728\u8bbe\u5907\u4e0a\u8fd0\u884c",permalink:"/docs/0.65/running-on-device"}},v={},h=[{value:"Creating your own React Native platform",id:"creating-your-own-react-native-platform",level:2},{value:"Bundling",id:"bundling",level:3}],b={toc:h};function g(e){var t,a=e,{components:n}=a,s=((e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),s),o(t,i({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"React Native is not just for Android and iOS - there are community-supported projects that bring it to other platforms, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/Microsoft/react-native-windows"}),"React Native Windows")," - React Native support for Microsoft's Universal Windows Platform (UWP) and the Windows Presentation Foundation (WPF)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/vincentriemer/react-native-dom"}),"React Native DOM")," - An experimental, comprehensive port of React Native to the web. (Not to be confused with ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/necolas/react-native-web"}),"React Native Web"),", which has different goals)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/status-im/react-native-desktop"}),"React Native Desktop")," - A project aiming to bring React Native to the Desktop with Qt's QML. A fork of ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/CanonicalLtd/react-native/"}),"React Native Ubuntu"),", which is no longer maintained."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/ptmt/react-native-macos"}),"React Native macOS")," - An experimental React Native fork targeting macOS and Cocoa"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/react-native-community/react-native-tvos"}),"React Native tvOS")," - adaptation of React Native for Apple tvOS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/areslabs/alita"}),"alita")," - An experimental, comprehensive port of React Native to mini-program(\u5fae\u4fe1\u5c0f\u7a0b\u5e8f)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/kusti8/proton-native"}),"Proton Native")," - A wrapper for React Native, using Qt to target Linux, MacOS, and Windows.")),(0,r.kt)("h2",u({},{id:"creating-your-own-react-native-platform"}),"Creating your own React Native platform"),(0,r.kt)("p",null,"Right now the process of creating a React Native platform from scratch is not very well documented - one of the goals of the upcoming re-architecture (",(0,r.kt)("a",u({parentName:"p"},{href:"https://facebook.github.io/react-native/blog/2018/06/14/state-of-react-native-2018"}),"Fabric"),") is to make maintaining a platform easier."),(0,r.kt)("h3",u({},{id:"bundling"}),"Bundling"),(0,r.kt)("p",null,"As of React Native 0.57 you can now register your React Native platform with React Native's JavaScript bundler, ",(0,r.kt)("a",u({parentName:"p"},{href:"https://facebook.github.io/metro/"}),"Metro"),". This means you can pass ",(0,r.kt)("inlineCode",{parentName:"p"},"--platform example")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"npx react-native bundle"),", and it will look for JavaScript files with the ",(0,r.kt)("inlineCode",{parentName:"p"},".example.js")," suffix."),(0,r.kt)("p",null,"To register your platform with RNPM, your module's name must match one of these patterns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react-native-example")," - It will search all top-level modules that start with ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@org/react-native-example")," - It will search for modules that start with ",(0,r.kt)("inlineCode",{parentName:"li"},"react-native-")," under any scope"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@react-native-example/module")," - It will search in all modules under scopes with names starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"@react-native-"))),(0,r.kt)("p",null,"You must also have an entry in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "rnpm": {\n    "haste": {\n      "providesModuleNodeModules": ["react-native-example"],\n      "platforms": ["example"]\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"providesModuleNodeModules"')," is an array of modules that will get added to the Haste module search path, and ",(0,r.kt)("inlineCode",{parentName:"p"},'"platforms"')," is an array of platform suffixes that will be added as valid platforms."))}g.isMDXComponent=!0}}]);