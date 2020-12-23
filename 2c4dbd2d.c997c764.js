(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(8),b=(a(0),a(413)),l={id:"refreshcontrol",title:"RefreshControl"},c={unversionedId:"refreshcontrol",id:"version-0.63/refreshcontrol",isDocsHomePage:!1,title:"RefreshControl",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",source:"@site/versioned_docs/version-0.63/refreshcontrol.md",slug:"/refreshcontrol",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/refreshcontrol",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/refreshcontrol.md",version:"0.63",lastUpdatedAt:1608733239,sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"Pressable",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/pressable"},next:{title:"ScrollView",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/scrollview"}},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>refreshing</code>",id:"refreshing",children:[]},{value:"<code>onRefresh</code>",id:"onrefresh",children:[]},{value:"<code>colors</code>",id:"colors",children:[]},{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>progressBackgroundColor</code>",id:"progressbackgroundcolor",children:[]},{value:"<code>progressViewOffset</code>",id:"progressviewoffset",children:[]},{value:"<code>size</code>",id:"size",children:[]},{value:"<code>tintColor</code>",id:"tintcolor",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleColor</code>",id:"titlecolor",children:[]}]}],i={toc:o};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(b.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"),Object(b.b)("p",null,"\u8fd9\u4e00\u7ec4\u4ef6\u53ef\u4ee5\u7528\u5728 ScrollView \u6216 FlatList \u5185\u90e8\uff0c\u4e3a\u5176\u6dfb\u52a0\u4e0b\u62c9\u5237\u65b0\u7684\u529f\u80fd\u3002\u5f53 ScrollView \u5904\u4e8e\u7ad6\u76f4\u65b9\u5411\u7684\u8d77\u70b9\u4f4d\u7f6e\uff08scrollY: 0\uff09\uff0c\u6b64\u65f6\u4e0b\u62c9\u4f1a\u89e6\u53d1\u4e00\u4e2a",Object(b.b)("inlineCode",{parentName:"p"},"onRefresh"),"\u4e8b\u4ef6\u3002"),Object(b.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(b.b)("div",{className:"snack-player","data-snack-name":"RefreshControl","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20ScrollView%2C%0A%20%20RefreshControl%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20SafeAreaView%2C%0A%7D%20from%20'react-native'%3B%0Aimport%20Constants%20from%20'expo-constants'%3B%0A%0Aconst%20wait%20%3D%20(timeout)%20%3D%3E%20%7B%0A%20%20return%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20%20%20setTimeout(resolve%2C%20timeout)%3B%0A%20%20%7D)%3B%0A%7D%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Brefreshing%2C%20setRefreshing%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20const%20onRefresh%20%3D%20React.useCallback(()%20%3D%3E%20%7B%0A%20%20%20%20setRefreshing(true)%3B%0A%0A%20%20%20%20wait(2000).then(()%20%3D%3E%20setRefreshing(false))%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CScrollView%0A%20%20%20%20%20%20%20%20contentContainerStyle%3D%7Bstyles.scrollView%7D%0A%20%20%20%20%20%20%20%20refreshControl%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CRefreshControl%20refreshing%3D%7Brefreshing%7D%20onRefresh%3D%7BonRefresh%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%3EPull%20down%20to%20see%20RefreshControl%20indicator%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20marginTop%3A%20Constants.statusBarHeight%2C%0A%20%20%7D%2C%0A%20%20scrollView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20backgroundColor%3A%20'pink'%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," ",Object(b.b)("inlineCode",{parentName:"p"},"refreshing"),"\u662f\u4e00\u4e2a\u53d7\u63a7\u5c5e\u6027\uff0c \u6240\u4ee5\u5fc5\u987b\u5728",Object(b.b)("inlineCode",{parentName:"p"},"onRefresh"),"\u51fd\u6570\u4e2d\u8bbe\u7f6e\u4e3a true\uff0c\u5426\u5219 loading \u6307\u793a\u5668\u4f1a\u7acb\u5373\u505c\u6b62\u3002"),Object(b.b)("hr",null),Object(b.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"refreshing"},Object(b.b)("inlineCode",{parentName:"h3"},"refreshing")),Object(b.b)("p",null,"\u89c6\u56fe\u662f\u5426\u5e94\u8be5\u5728\u5237\u65b0\u65f6\u663e\u793a\u6307\u793a\u5668\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onrefresh"},Object(b.b)("inlineCode",{parentName:"h3"},"onRefresh")),Object(b.b)("p",null,"\u5728\u89c6\u56fe\u5f00\u59cb\u5237\u65b0\u65f6\u8c03\u7528\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"colors"},Object(b.b)("inlineCode",{parentName:"h3"},"colors")),Object(b.b)("p",null,"\u6307\u5b9a\u81f3\u5c11\u4e00\u79cd\u989c\u8272\u7528\u6765\u7ed8\u5236\u5237\u65b0\u6307\u793a\u5668\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"array of ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"enabled"},Object(b.b)("inlineCode",{parentName:"h3"},"enabled")),Object(b.b)("p",null,"\u6307\u5b9a\u662f\u5426\u8981\u542f\u7528\u5237\u65b0\u6307\u793a\u5668\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"progressbackgroundcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"progressBackgroundColor")),Object(b.b)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u80cc\u666f\u8272\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"progressviewoffset"},Object(b.b)("inlineCode",{parentName:"h3"},"progressViewOffset")),Object(b.b)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u5782\u76f4\u8d77\u59cb\u4f4d\u7f6e(top offset)\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"size"},Object(b.b)("inlineCode",{parentName:"h3"},"size")),Object(b.b)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u5927\u5c0f\uff0c\u5177\u4f53\u6570\u503c\u53ef\u53c2\u9605 RefreshControl.SIZE."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum(RefreshLayoutConsts.SIZE.DEFAULT, RefreshLayoutConsts.SIZE.LARGE)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tintcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"tintColor")),Object(b.b)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u7684\u989c\u8272\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"title"},Object(b.b)("inlineCode",{parentName:"h3"},"title")),Object(b.b)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u4e0b\u663e\u793a\u7684\u6587\u5b57\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"titlecolor"},Object(b.b)("inlineCode",{parentName:"h3"},"titleColor")),Object(b.b)("p",null,"\u6307\u5b9a\u5237\u65b0\u6307\u793a\u5668\u4e0b\u663e\u793a\u7684\u6587\u5b57\u7684\u989c\u8272\u3002"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/colors"}),"color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))))}O.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),O=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},j=function(e){var t=O(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),j=O(a),d=n,s=j["".concat(l,".").concat(d)]||j[d]||p[d]||b;return a?r.a.createElement(s,c(c({ref:t},i),{},{components:a})):r.a.createElement(s,c({ref:t},i))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);