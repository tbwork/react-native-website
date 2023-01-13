"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[51093],{35318:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var r=o(27378);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(o),f=n,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return o?r.createElement(d,l(l({ref:t},s),{},{components:o})):r.createElement(d,l({ref:t},s))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},66021:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>C,contentTitle:()=>f,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var r=o(35318),n=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,m=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&s(e,o,t[o]);if(i)for(var o of i(t))c.call(t,o)&&s(e,o,t[o]);return e};const u={id:"platformcolor",title:"PlatformColor"},f=void 0,d={unversionedId:"platformcolor",id:"version-0.70/platformcolor",title:"PlatformColor",description:"You can use the PlatformColor function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the PlatformColor function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application.",source:"@site/versioned_docs/version-0.70/platformcolor.md",sourceDirName:".",slug:"/platformcolor",permalink:"/docs/0.70/platformcolor",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/platformcolor.md",tags:[],version:"0.70",frontMatter:{id:"platformcolor",title:"PlatformColor"},sidebar:"api",previous:{title:"Platform",permalink:"/docs/0.70/platform"},next:{title:"RootTag",permalink:"/docs/0.70/roottag"}},C={},h=[{value:"Supported colors",id:"supported-colors",level:3},{value:"Example",id:"example",level:2}],v={toc:h};function y(e){var t,o=e,{components:n}=o,s=((e,t)=>{var o={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(o[r]=e[r]);return o})(o,["components"]);return(0,r.kt)("wrapper",(t=m(m({},v),s),a(t,l({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"PlatformColor(color1, [color2, ...colorN]);\n")),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application."),(0,r.kt)("p",null,"If you pass more than one string value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function, it will treat the first value as the default and the rest as fallback."),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-js"}),"PlatformColor('bogusName', 'linkColor');\n")),(0,r.kt)("p",null,"Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components."),(0,r.kt)("h3",m({},{id:"supported-colors"}),"Supported colors"),(0,r.kt)("p",null,"For a full list of the types of system colors supported, see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.android.com/reference/android/R.attr"}),"R.attr")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"?attr")," prefix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.android.com/reference/android/R.color"}),"R.color")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"@android:color")," prefix"))),(0,r.kt)("li",{parentName:"ul"},"iOS (Objective-C and Swift notations):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors"}),"UIColor Standard Colors")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"}),"UIColor UI Element Colors"))))),(0,r.kt)("h2",m({},{id:"example"}),"Example"),(0,r.kt)("div",m({},{className:"snack-player","data-snack-name":"PlatformColor Example","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%20from%20'react'%3B%5Cnimport%20%7B%5Cn%20%20Platform%2C%5Cn%20%20PlatformColor%2C%5Cn%20%20StyleSheet%2C%5Cn%20%20Text%2C%5Cn%20%20View%5Cn%7D%20from%20'react-native'%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20(%5Cn%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%5Cn%20%20%20%20%20%20I%20am%20a%20special%20label%20color!%5Cn%20%20%20%20%3C%2FText%3E%5Cn%20%20%3C%2FView%3E%5Cn)%3B%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20label%3A%20%7B%5Cn%20%20%20%20padding%3A%2016%2C%5Cn%20%20%20%20...Platform.select(%7B%5Cn%20%20%20%20%20%20ios%3A%20%7B%5Cn%20%20%20%20%20%20%20%20color%3A%20PlatformColor('label')%2C%5Cn%20%20%20%20%20%20%20%20backgroundColor%3A%5Cn%20%20%20%20%20%20%20%20%20%20PlatformColor('systemTealColor')%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20android%3A%20%7B%5Cn%20%20%20%20%20%20%20%20color%3A%20PlatformColor('%3Fandroid%3Aattr%2FtextColor')%2C%5Cn%20%20%20%20%20%20%20%20backgroundColor%3A%5Cn%20%20%20%20%20%20%20%20%20%20PlatformColor('%40android%3Acolor%2Fholo_blue_bright')%2C%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20default%3A%20%7B%20color%3A%20'black'%20%7D%5Cn%20%20%20%20%7D)%5Cn%20%20%7D%2C%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20'center'%2C%5Cn%20%20%20%20justifyContent%3A%20'center'%2C%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)("p",null,"The string value provided to the ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a ",(0,r.kt)("inlineCode",{parentName:"p"},"Platform.OS === 'platform'")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"Platform.select()"),", as shown on the example above."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," You can find a complete example that demonstrates proper, intended use of ",(0,r.kt)("inlineCode",{parentName:"p"},"PlatformColor")," in ",(0,r.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js"}),"PlatformColorExample.js"),".")))}y.isMDXComponent=!0}}]);