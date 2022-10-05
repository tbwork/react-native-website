"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[61889],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return k}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))l.call(t,n)&&p(e,n,t[n]);return e};const d={id:"inputaccessoryview",title:"InputAccessoryView"},m=void 0,y={unversionedId:"inputaccessoryview",id:"version-0.63/inputaccessoryview",title:"InputAccessoryView",description:"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a TextInput has focus. This component can be used to create custom toolbars.",source:"@site/versioned_docs/version-0.63/inputaccessoryview.md",sourceDirName:".",slug:"/inputaccessoryview",permalink:"/docs/0.63/inputaccessoryview",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/inputaccessoryview.md",tags:[],version:"0.63",frontMatter:{id:"inputaccessoryview",title:"InputAccessoryView"},sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"TouchableNativeFeedback",permalink:"/docs/0.63/touchablenativefeedback"},next:{title:"SafeAreaView",permalink:"/docs/0.63/safeareaview"}},h={},k=[{value:"Props",id:"props",level:2},{value:"<code>backgroundColor</code>",id:"backgroundcolor",level:3},{value:"<code>nativeID</code>",id:"nativeid",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(79.75%), sunnylqm(20.25%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm7975-sunnylqm2025",level:5}],b={toc:k};function f(e){var t,n=e,{components:a}=n,p=((e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},b),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A component which enables customization of the keyboard input accessory view on iOS. The input accessory view is displayed above the keyboard whenever a ",(0,r.kt)("inlineCode",{parentName:"p"},"TextInput")," has focus. This component can be used to create custom toolbars."),(0,r.kt)("p",null,"To use this component wrap your custom toolbar with the InputAccessoryView component, and set a ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeID"),". Then, pass that ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeID")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputAccessoryViewID")," of whatever ",(0,r.kt)("inlineCode",{parentName:"p"},"TextInput")," you desire. A simple example:"),(0,r.kt)("div",u({},{className:"snack-player","data-snack-name":"InputAccessoryView","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20InputAccessoryView%2C%20ScrollView%2C%20TextInput%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20inputAccessoryViewID%20%3D%20'uniqueID'%3B%0A%20%20const%20initialText%20%3D%20''%3B%0A%20%20const%20%5Btext%2C%20setText%5D%20%3D%20useState(initialText)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%20keyboardDismissMode%3D%22interactive%22%3E%0A%20%20%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20padding%3A%2016%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2050%2C%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20inputAccessoryViewID%3D%7BinputAccessoryViewID%7D%0A%20%20%20%20%20%20%20%20%20%20onChangeText%3D%7BsetText%7D%0A%20%20%20%20%20%20%20%20%20%20value%3D%7Btext%7D%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%7B'Please%20type%20here%E2%80%A6'%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%20%20%3CInputAccessoryView%20nativeID%3D%7BinputAccessoryViewID%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setText(initialText)%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Clear%20text%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FInputAccessoryView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)("p",null,"This component can also be used to create sticky text inputs (text inputs which are anchored to the top of the keyboard). To do this, wrap a ",(0,r.kt)("inlineCode",{parentName:"p"},"TextInput")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"InputAccessoryView")," component, and don't set a ",(0,r.kt)("inlineCode",{parentName:"p"},"nativeID"),". For an example, look at ",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/InputAccessoryView/InputAccessoryViewExample.js"}),"InputAccessoryViewExample.js"),"."),(0,r.kt)("hr",null),(0,r.kt)("h1",u({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,r.kt)("h2",u({},{id:"props"}),"Props"),(0,r.kt)("h3",u({},{id:"backgroundcolor"}),(0,r.kt)("inlineCode",{parentName:"h3"},"backgroundColor")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/docs/0.63/colors"}),"color"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"nativeid"}),(0,r.kt)("inlineCode",{parentName:"h3"},"nativeID")),(0,r.kt)("p",null,"An ID which is used to associate this ",(0,r.kt)("inlineCode",{parentName:"p"},"InputAccessoryView")," to specified TextInput(s)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"string")))),(0,r.kt)("hr",null),(0,r.kt)("h3",u({},{id:"style"}),(0,r.kt)("inlineCode",{parentName:"h3"},"style")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),(0,r.kt)("a",u({parentName:"td"},{href:"/docs/0.63/view-style-props"}),"style"))))),(0,r.kt)("h1",u({},{id:"\u5df2\u77e5\u95ee\u9898"}),"\u5df2\u77e5\u95ee\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/18997"}),"react-native#18997"),": \u4e0d\u652f\u6301\u591a\u884c\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"TextInput")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/20157"}),"react-native#20157"),": \u4e0d\u80fd\u548c\u5e95\u90e8 tab \u680f\u4e00\u8d77\u4f7f\u7528")),(0,r.kt)("hr",null),(0,r.kt)("h5",u({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm7975-sunnylqm2025"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",u({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(79.75%), ",(0,r.kt)("a",u({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(20.25%)"))}f.isMDXComponent=!0}}]);