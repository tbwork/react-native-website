(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{413:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.a.createElement(u,o(o({ref:t},b),{},{components:n})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},414:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},415:function(e,t,n){"use strict";var a=n(0),r=n(416);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},416:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},417:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(415),l=n(414),o=n(62),c=n.n(o),b=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,d=e.values,p=e.groupId,m=e.className,u=Object(i.a)(),O=u.tabGroupChoices,j=u.setTabGroupChoices,A=Object(a.useState)(o),N=A[0],C=A[1],g=a.Children.toArray(e.children);if(null!=p){var f=O[p];null!=f&&f!==N&&d.some((function(e){return e.value===f}))&&C(f)}var E=function(e){C(e),null!=p&&j(p,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":N===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return E(t)},onClick:function(){E(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},418:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},419:function(e,t,n){"use strict";var a=n(7),r=!!a.a.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.a.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.a={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(8),i=(n(0),n(413)),l=n(417),o=n(418),c=n(419),b={id:"permissionsandroid",title:"PermissionsAndroid"},s={unversionedId:"permissionsandroid",id:"version-0.63/permissionsandroid",isDocsHomePage:!1,title:"PermissionsAndroid",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(95.29%), sunnylqm(4.71%)",source:"@site/versioned_docs/version-0.63/permissionsandroid.md",slug:"/permissionsandroid",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/permissionsandroid",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/permissionsandroid.md",version:"0.63",lastUpdatedAt:1608733239,sidebar:"version-0.63/api",previous:{title:"BackHandler",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/backhandler"},next:{title:"ToastAndroid",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/toastandroid"}},d=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868",id:"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868",children:[]},{value:"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c",id:"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>constructor()</code>",id:"constructor",children:[]},{value:"<code>check()</code>",id:"check",children:[]},{value:"<code>request()</code>",id:"request",children:[]},{value:"<code>requestMultiple()</code>",id:"requestmultiple",children:[]}]}],p={toc:d};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9529-sunnylqm471"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(i.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(95.29%), ",Object(i.b)("a",Object(a.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(4.71%)"),Object(i.b)("div",{className:"banner-native-code-required"},Object(i.b)("h3",null,"\u4ec5\u9002\u7528\u4e8e\u975e\u6c99\u76d2\u9879\u76ee"),Object(i.b)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",Object(i.b)("code",null,"expo-cli")," workflow, see the guide on ",Object(i.b)("a",{href:"https://docs.expo.io/versions/latest/sdk/permissions/"},"Permissions")," in the Expo documentation for the appropriate alternative.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid")," \u53ef\u4ee5\u8bbf\u95ee Android M(\u4e5f\u5c31\u662f 6.0)\u5f00\u59cb\u63d0\u4f9b\u7684\u6743\u9650\u6a21\u578b\u3002\u6709\u4e00\u4e9b\u6743\u9650\u5199\u5728",Object(i.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u5c31\u53ef\u4ee5\u5728\u5b89\u88c5\u65f6\u81ea\u52a8\u83b7\u5f97\uff0c\u4f46\u6709\u4e00\u4e9b\u201c\u5371\u9669\u201d\u7684\u6743\u9650\u5219\u9700\u8981\u5f39\u51fa\u63d0\u793a\u6846\u4f9b\u7528\u6237\u9009\u62e9\u3002\u672c API \u5373\u7528\u4e8e\u540e\u4e00\u79cd\u60c5\u5f62\u3002"),Object(i.b)("p",null,"\u5728\u4f4e\u4e8e Android 6.0 \u7684\u8bbe\u5907\u4e0a\uff0c\u6743\u9650\u53ea\u8981\u5199\u5728",Object(i.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),"\u91cc\u5c31\u4f1a\u81ea\u52a8\u83b7\u5f97\uff0c\u6b64\u60c5\u5f62\u4e0b",Object(i.b)("inlineCode",{parentName:"p"},"check"),"\u4f1a\u59cb\u7ec8\u8fd4\u56de",Object(i.b)("inlineCode",{parentName:"p"},"true"),"\u548c\u800c",Object(i.b)("inlineCode",{parentName:"p"},"request"),"\u65b9\u6cd5\u5c06\u59cb\u7ec8\u89e3\u6790\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS.GRANTED"),"\u3002"),Object(i.b)("p",null,"\u5982\u679c\u7528\u6237\u4e4b\u524d\u62d2\u7edd\u8fc7\u4f60\u7684\u67d0\u9879\u6743\u9650\u8bf7\u6c42\uff0c\u90a3\u4e48\u7cfb\u7edf\u4f1a\u5efa\u8bae\u4f60\u663e\u793a\u4e00\u4e2a\u4e3a\u4ec0\u4e48\u9700\u8981\u8fd9\u4e2a\u6743\u9650\u7684\u201c\u8be6\u7ec6\u89e3\u91ca\u201d\uff08",Object(i.b)("inlineCode",{parentName:"p"},"rationale"),"\u53c2\u6570\uff09\u3002\u5982\u679c\u7528\u6237\u4e4b\u524d\u62d2\u7edd\u8fc7\uff0c\u90a3\u4e48\u5f53\u4f60\u518d\u6b21\u7533\u8bf7\u7684\u65f6\u5019\uff0c\u5f39\u51fa\u7684\u5c31\u53ef\u80fd\u4e0d\u662f\u539f\u5148\u7684\u7533\u8bf7\u4fe1\u606f\uff0c\u800c\u662f",Object(i.b)("inlineCode",{parentName:"p"},"rationale"),"\u53c2\u6570\u91cc\u63d0\u4f9b\u7684\u8fdb\u4e00\u6b65\u89e3\u91ca\u3002"),Object(i.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(i.b)(l.a,{groupId:"syntax",defaultValue:c.a.defaultSyntax,values:c.a.syntax,mdxType:"Tabs"},Object(i.b)(o.a,{value:"functional",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20SafeAreaView%2C%20PermissionsAndroid%2C%20Button%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20try%20%7B%0A%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%0A%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20%22Cool%20Photo%20App%20Camera%20Permission%22%2C%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20%22Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20%22%20%2B%0A%20%20%20%20%20%20%20%20%20%20%22so%20you%20can%20take%20awesome%20pictures.%22%2C%0A%20%20%20%20%20%20%20%20buttonNeutral%3A%20%22Ask%20Me%20Later%22%2C%0A%20%20%20%20%20%20%20%20buttonNegative%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20buttonPositive%3A%20%22OK%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%0A%20%20%20%20%20%20console.log(%22You%20can%20use%20the%20camera%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20console.log(%22Camera%20permission%20denied%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D%20catch%20(err)%20%7B%0A%20%20%20%20console.warn(err)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%0A%20%20%20%20%3CButton%20title%3D%22request%20permissions%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(i.b)(o.a,{value:"classical",mdxType:"TabItem"},Object(i.b)("div",{className:"snack-player","data-snack-name":"PermissionsAndroid Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20SafeAreaView%2C%20PermissionsAndroid%2C%20Button%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20requestCameraPermission%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20try%20%7B%0A%20%20%20%20const%20granted%20%3D%20await%20PermissionsAndroid.request(%0A%20%20%20%20%20%20PermissionsAndroid.PERMISSIONS.CAMERA%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20title%3A%20%22Cool%20Photo%20App%20Camera%20Permission%22%2C%0A%20%20%20%20%20%20%20%20message%3A%0A%20%20%20%20%20%20%20%20%20%20%22Cool%20Photo%20App%20needs%20access%20to%20your%20camera%20%22%20%2B%0A%20%20%20%20%20%20%20%20%20%20%22so%20you%20can%20take%20awesome%20pictures.%22%2C%0A%20%20%20%20%20%20%20%20buttonNeutral%3A%20%22Ask%20Me%20Later%22%2C%0A%20%20%20%20%20%20%20%20buttonNegative%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20buttonPositive%3A%20%22OK%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20)%3B%0A%20%20%20%20if%20(granted%20%3D%3D%3D%20PermissionsAndroid.RESULTS.GRANTED)%20%7B%0A%20%20%20%20%20%20console.log(%22You%20can%20use%20the%20camera%22)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20console.log(%22Camera%20permission%20denied%22)%3B%0A%20%20%20%20%7D%0A%20%20%7D%20catch%20(err)%20%7B%0A%20%20%20%20console.warn(err)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.item%7D%3ETry%20permissions%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22request%20permissions%22%20onPress%3D%7BrequestCameraPermission%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20margin%3A%2024%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(i.b)("h3",{id:"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868"},"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u5217\u8868"),Object(i.b)("p",null,"\u9700\u8981\u63d0\u793a\u7528\u6237\u7684\u6743\u9650\u90fd\u4ee5\u5e38\u91cf\u5f62\u5f0f\u5217\u5728",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.PERMISSIONS"),"\u4e2d\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_CALENDAR"),": 'android.permission.READ_CALENDAR'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_CALENDAR"),": 'android.permission.WRITE_CALENDAR'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CAMERA"),": 'android.permission.CAMERA'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_CONTACTS"),": 'android.permission.READ_CONTACTS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_CONTACTS"),": 'android.permission.WRITE_CONTACTS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET_ACCOUNTS"),": 'android.permission.GET_ACCOUNTS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ACCESS_BACKGROUND_LOCATION"),": 'android.permission.ACCESS_BACKGROUND_LOCATION`"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ACCESS_FINE_LOCATION"),": 'android.permission.ACCESS_FINE_LOCATION'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ACCESS_COARSE_LOCATION"),": 'android.permission.ACCESS_COARSE_LOCATION'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECORD_AUDIO"),": 'android.permission.RECORD_AUDIO'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_PHONE_STATE"),": 'android.permission.READ_PHONE_STATE'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CALL_PHONE"),": 'android.permission.CALL_PHONE'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_CALL_LOG"),": 'android.permission.READ_CALL_LOG'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_CALL_LOG"),": 'android.permission.WRITE_CALL_LOG'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ADD_VOICEMAIL"),": 'com.android.voicemail.permission.ADD_VOICEMAIL'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"USE_SIP"),": 'android.permission.USE_SIP'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PROCESS_OUTGOING_CALLS"),": 'android.permission.PROCESS_OUTGOING_CALLS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BODY_SENSORS"),": 'android.permission.BODY_SENSORS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SEND_SMS"),": 'android.permission.SEND_SMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECEIVE_SMS"),": 'android.permission.RECEIVE_SMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_SMS"),": 'android.permission.READ_SMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECEIVE_WAP_PUSH"),": 'android.permission.RECEIVE_WAP_PUSH'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECEIVE_MMS"),": 'android.permission.RECEIVE_MMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_EXTERNAL_STORAGE"),": 'android.permission.READ_EXTERNAL_STORAGE'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_EXTERNAL_STORAGE"),": 'android.permission.WRITE_EXTERNAL_STORAGE'")),Object(i.b)("h3",{id:"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c"},"\u8bf7\u6c42\u6743\u9650\u7684\u8fd4\u56de\u503c"),Object(i.b)("p",null,"\u8fd4\u56de\u503c\u90fd\u4ee5\u5e38\u91cf\u5f62\u5f0f\u8bb0\u5f55\u5728",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),"\u4e2d\uff1a"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GRANTED"),": 'granted'\uff0c \u8868\u793a\u7528\u6237\u5df2\u6388\u6743"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DENIED"),": 'denied'\uff0c \u8868\u793a\u7528\u6237\u5df2\u62d2\u7edd"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NEVER_ASK_AGAIN"),": 'never_ask_again'\uff0c\u8868\u793a\u7528\u6237\u5df2\u62d2\u7edd\uff0c\u4e14\u4e0d\u613f\u88ab\u518d\u6b21\u8be2\u95ee\u3002")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(i.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(i.b)("h3",{id:"constructor"},Object(i.b)("inlineCode",{parentName:"h3"},"constructor()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"constructor();\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"check"},Object(i.b)("inlineCode",{parentName:"h3"},"check()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"check(permission);\n")),Object(i.b)("p",null,"\u68c0\u67e5\u67d0\u9879\u6743\u9650\u662f\u5426\u7ecf\u8fc7\u7528\u6237\u6388\u6743\u3002\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u89e3\u6790\u4e3a\u5e03\u5c14\u503c\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u53c2\u6570:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"permission"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8981\u68c0\u67e5\u7684\u6743\u9650")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"request"},Object(i.b)("inlineCode",{parentName:"h3"},"request()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"request(permission, [rationale]);\n")),Object(i.b)("p",null,"\u5f39\u51fa\u63d0\u793a\u6846\u5411\u7528\u6237\u8bf7\u6c42\u67d0\u9879\u6743\u9650\u3002\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u6700\u7ec8\u503c\u4e3a\u4e0a\u6587\u6240\u8bf4\u7684",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),"\u3002"),Object(i.b)("p",null,"\u5982\u679c\u63d0\u4f9b\u4e86",Object(i.b)("inlineCode",{parentName:"p"},"rationale"),"\u53c2\u6570\uff0c\u5219\u6b64\u65b9\u6cd5\u4f1a\u548c\u7cfb\u7edf\u534f\u5546\uff0c\u662f\u5f39\u51fa\u7cfb\u7edf\u5185\u7f6e\u7684\u6743\u9650\u7533\u8bf7\u5bf9\u8bdd\u6846\uff0c\u8fd8\u662f\u663e\u793a",Object(i.b)("inlineCode",{parentName:"p"},"rationale"),"\u4e2d\u7684\u4fe1\u606f\u4ee5\u5411\u7528\u6237\u8fdb\u884c\u89e3\u91ca\u3002\u5177\u4f53\u539f\u7406\u8bf7\u53c2\u9605 android \u5b98\u65b9\u6587\u6863(",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/training/permissions/requesting.html#explain)%E3%80%82"}),"https://developer.android.com/training/permissions/requesting.html#explain)\u3002")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u53c2\u6570:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"permission"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8981\u8bf7\u6c42\u7684\u6743\u9650")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"rationale"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u89c1\u4e0b\u9762\u7684",Object(i.b)("inlineCode",{parentName:"td"},"rationale"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Rationale:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5bf9\u8bdd\u6846\u7684\u6807\u9898\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"message"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5bf9\u8bdd\u6846\u7684\u6b63\u6587\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonPositive"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u662f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u540c\u610f\u6309\u94ae\u7684\u6587\u672c\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonNegative"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u62d2\u7edd\u6309\u94ae\u7684\u6587\u672c\u3002")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonNeutral"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8df3\u8fc7\u6309\u94ae\u7684\u6587\u672c\u3002")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"requestmultiple"},Object(i.b)("inlineCode",{parentName:"h3"},"requestMultiple()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"requestMultiple(permissions);\n")),Object(i.b)("p",null,"\u5728\u4e00\u4e2a\u5f39\u51fa\u6846\u4e2d\u5411\u7528\u6237\u8bf7\u6c42\u591a\u4e2a\u6743\u9650\u3002\u8fd4\u56de\u503c\u4e3a\u4e00\u4e2a object\uff0ckey \u4e3a\u5404\u6743\u9650\u540d\u79f0\uff0c\u503c\u4e3a",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),"\u3002"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"\u53c2\u6570:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"permissions"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"array"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8981\u7533\u8bf7\u7684\u6743\u9650\u7684\u6570\u7ec4")))))}m.isMDXComponent=!0}}]);