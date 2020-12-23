(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{356:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return l})),a.d(e,"metadata",(function(){return c})),a.d(e,"toc",(function(){return i})),a.d(e,"default",(function(){return j}));var n=a(3),b=a(8),r=(a(0),a(413)),l={id:"statusbar",title:"StatusBar"},c={unversionedId:"statusbar",id:"statusbar",isDocsHomePage:!1,title:"StatusBar",description:"\u63a7\u5236\u5e94\u7528\u72b6\u6001\u680f\u7684\u7ec4\u4ef6\u3002",source:"@site/../cndocs/statusbar.md",slug:"/statusbar",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/statusbar",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/statusbar.md",version:"current",lastUpdatedAt:1608733239,sidebar:"\u7ec4\u4ef6",previous:{title:"SectionList",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/sectionlist"},next:{title:"Switch",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/switch"}},i=[{value:"\u548c\u5bfc\u822a\u5668\u4e00\u8d77\u4f7f\u7528\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u548c\u5bfc\u822a\u5668\u4e00\u8d77\u4f7f\u7528\u7684\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u9759\u6001 API",id:"\u9759\u6001-api",children:[]},{value:"\u5e38\u91cf",id:"\u5e38\u91cf",children:[]},{value:"Props",id:"props",children:[{value:"<code>animated</code>",id:"animated",children:[]},{value:"<code>backgroundColor</code>",id:"backgroundcolor",children:[]},{value:"<code>barStyle</code>",id:"barstyle",children:[]},{value:"<code>hidden</code>",id:"hidden",children:[]},{value:"<code>networkActivityIndicatorVisible</code>",id:"networkactivityindicatorvisible",children:[]},{value:"<code>showHideTransition</code>",id:"showhidetransition",children:[]},{value:"<code>translucent</code>",id:"translucent",children:[]}]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>popStackEntry()</code>",id:"popstackentry",children:[]},{value:"<code>pushStackEntry()</code>",id:"pushstackentry",children:[]},{value:"<code>replaceStackEntry()</code>",id:"replacestackentry",children:[]},{value:"<code>setBackgroundColor()</code>",id:"setbackgroundcolor",children:[]},{value:"<code>setBarStyle()</code>",id:"setbarstyle",children:[]},{value:"<code>setHidden()</code>",id:"sethidden",children:[]},{value:"<code>setNetworkActivityIndicatorVisible()</code>",id:"setnetworkactivityindicatorvisible",children:[]},{value:"<code>setTranslucent()</code>",id:"settranslucent",children:[]}]},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",children:[{value:"StatusBarAnimation",id:"statusbaranimation",children:[]},{value:"StatusBarStyle",id:"statusbarstyle",children:[]}]}],O={toc:i};function j(t){var e=t.components,a=Object(b.a)(t,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u63a7\u5236\u5e94\u7528\u72b6\u6001\u680f\u7684\u7ec4\u4ef6\u3002"),Object(r.b)("h3",{id:"\u548c\u5bfc\u822a\u5668\u4e00\u8d77\u4f7f\u7528\u7684\u6ce8\u610f\u4e8b\u9879"},"\u548c\u5bfc\u822a\u5668\u4e00\u8d77\u4f7f\u7528\u7684\u6ce8\u610f\u4e8b\u9879"),Object(r.b)("p",null,"\u7531\u4e8e",Object(r.b)("inlineCode",{parentName:"p"},"StatusBar"),"\u53ef\u4ee5\u5728\u4efb\u610f\u89c6\u56fe\u4e2d\u52a0\u8f7d\uff0c\u53ef\u4ee5\u653e\u7f6e\u591a\u4e2a\u4e14\u540e\u52a0\u8f7d\u7684\u4f1a\u8986\u76d6\u5148\u52a0\u8f7d\u7684\u3002\u56e0\u6b64\u5728\u914d\u5408\u5bfc\u822a\u5668\u4f7f\u7528\u65f6\uff0c\u8bf7\u52a1\u5fc5\u8003\u8651\u6e05\u695a",Object(r.b)("inlineCode",{parentName:"p"},"StatusBar"),"\u7684\u653e\u7f6e\u987a\u5e8f\u3002"),Object(r.b)("div",{className:"snack-player","data-snack-name":"StatusBar Android and iOS Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Button%2C%20Text%2C%20StyleSheet%2C%20StatusBar%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20styleTypes%20%3D%20%5B'default'%2C'dark-content'%2C%20'light-content'%5D%3B%0A%20%20const%20%5BvisibleStatusBar%2C%20setVisibleStatusBar%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BstyleStatusBar%2C%20setStyleStatusBar%5D%20%3D%20useState(styleTypes%5B0%5D)%3B%0A%0A%20%20const%20changeVisibilityStatusBar%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setVisibleStatusBar(!visibleStatusBar)%3B%0A%20%20%7D%3B%0A%0A%20%20const%20changeStyleStatusBar%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20styleId%20%3D%20styleTypes.indexOf(styleStatusBar)%20%2B%201%3B%0A%0A%20%20%20%20if(styleId%20%3D%3D%3D%20styleTypes.length)%7B%0A%20%20%20%20%20%20return%20setStyleStatusBar(styleTypes%5B0%5D)%3B%0A%20%20%20%20%7D%0A%20%20%20%20return%20setStyleStatusBar(styleTypes%5BstyleId%5D)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EStatusBar%20Style%3A%20%7BstyleStatusBar%7D%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EStatusBar%20Visibility%3A%20%7B!visibleStatusBar%20%3F%20'Visible'%3A%20'Hidden'%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CStatusBar%20backgroundColor%3D%22blue%22%20barStyle%3D%7BstyleStatusBar%7D%20%2F%3E%0A%20%20%20%20%20%20%3CView%3E%0A%20%20%20%20%20%20%20%20%3CStatusBar%20hidden%3D%7BvisibleStatusBar%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Toggle%20StatusBar%22%20onPress%3D%7B()%20%3D%3E%20changeVisibilityStatusBar()%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%20title%3D%22Change%20StatusBar%20Style%22%20onPress%3D%7B()%20%3D%3E%20changeStyleStatusBar()%7D%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20'%23ECF0F1'%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%7B%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20textStyle%3A%7B%0A%20%20%20%20textAlign%3A%20'center'%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(r.b)("h3",{id:"\u9759\u6001-api"},"\u9759\u6001 API"),Object(r.b)("p",null,"\u6709\u4e9b\u573a\u666f\u5e76\u4e0d\u9002\u5408\u4f7f\u7528\u7ec4\u4ef6\uff0c\u56e0\u6b64",Object(r.b)("inlineCode",{parentName:"p"},"StatusBar"),"\u4e5f\u66b4\u9732\u4e86\u4e00\u4e2a\u9759\u6001 API\u3002\u7136\u800c\u4e0d\u63a8\u8350\u5927\u5bb6\u540c\u65f6\u901a\u8fc7\u9759\u6001 API \u548c\u7ec4\u4ef6\u6765\u5b9a\u4e49\u76f8\u540c\u7684\u5c5e\u6027\uff0c\u56e0\u4e3a\u9759\u6001 API \u5b9a\u4e49\u7684\u5c5e\u6027\u503c\u5728\u540e\u7eed\u7684\u6e32\u67d3\u4e2d\u4f1a\u88ab\u7ec4\u4ef6\u4e2d\u5b9a\u4e49\u7684\u503c\u6240\u8986\u76d6\u3002"),Object(r.b)("hr",null),Object(r.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(r.b)("h2",{id:"\u5e38\u91cf"},"\u5e38\u91cf"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"currentHeight")," (\u4ec5\u9650 Android)\u72b6\u6001\u680f\u7684\u5f53\u524d\u9ad8\u5ea6\u3002"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"animated"},Object(r.b)("inlineCode",{parentName:"h3"},"animated")),Object(r.b)("p",null,"\u6307\u5b9a\u72b6\u6001\u680f\u7684\u53d8\u5316\u662f\u5426\u5e94\u4ee5\u52a8\u753b\u5f62\u5f0f\u5448\u73b0\u3002\u76ee\u524d\u652f\u6301\u8fd9\u51e0\u79cd\u6837\u5f0f\uff1abackgroundColor, barStyle \u548c hidden\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"backgroundcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"backgroundColor")),Object(r.b)("p",null,"\u72b6\u6001\u680f\u7684\u80cc\u666f\u8272\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/colors"}),"color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"barstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"barStyle")),Object(r.b)("p",null,"\u8bbe\u7f6e\u72b6\u6001\u680f\u6587\u672c\u7684\u989c\u8272\u3002"),Object(r.b)("p",null,"On Android, this will only have an impact on API versions 23 and above."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('default', 'light-content', 'dark-content')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hidden"},Object(r.b)("inlineCode",{parentName:"h3"},"hidden")),Object(r.b)("p",null,"\u662f\u5426\u9690\u85cf\u72b6\u6001\u680f\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"networkactivityindicatorvisible"},Object(r.b)("inlineCode",{parentName:"h3"},"networkActivityIndicatorVisible")),Object(r.b)("p",null,"\u6307\u5b9a\u662f\u5426\u663e\u793a\u7f51\u7edc\u6d3b\u52a8\u63d0\u793a\u7b26\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"showhidetransition"},Object(r.b)("inlineCode",{parentName:"h3"},"showHideTransition")),Object(r.b)("p",null,"\u901a\u8fc7",Object(r.b)("inlineCode",{parentName:"p"},"hidden"),"\u5c5e\u6027\u6765\u663e\u793a\u6216\u9690\u85cf\u72b6\u6001\u680f\u65f6\u6240\u4f7f\u7528\u7684\u52a8\u753b\u6548\u679c\u3002\u9ed8\u8ba4\u503c\u4e3a'fade'\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('fade', 'slide')"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"iOS")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"translucent"},Object(r.b)("inlineCode",{parentName:"h3"},"translucent")),Object(r.b)("p",null,"\u6307\u5b9a\u72b6\u6001\u680f\u662f\u5426\u900f\u660e\u3002\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u5e94\u7528\u4f1a\u5ef6\u4f38\u5230\u72b6\u6001\u680f\u4e4b\u4e0b\u7ed8\u5236\uff08\u5373\u6240\u8c13\u201c\u6c89\u6d78\u5f0f\u201d\u2014\u2014\u88ab\u72b6\u6001\u680f\u906e\u4f4f\u4e00\u90e8\u5206\uff09\u3002\u5e38\u548c\u5e26\u6709\u534a\u900f\u660e\u80cc\u666f\u8272\u7684\u72b6\u6001\u680f\u642d\u914d\u4f7f\u7528\u3002"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5e73\u53f0"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(r.b)("h3",{id:"popstackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"popStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static popStackEntry(entry: any)\n")),Object(r.b)("p",null,"Get and remove the last StatusBar entry from the stack."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"entry"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Entry returned from ",Object(r.b)("inlineCode",{parentName:"td"},"pushStackEntry"),".")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"pushstackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"pushStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static pushStackEntry(props: any)\n")),Object(r.b)("p",null,"Push a StatusBar entry onto the stack. The return value should be passed to ",Object(r.b)("inlineCode",{parentName:"p"},"popStackEntry")," when complete."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"props"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object containing the StatusBar props to use in the stack entry.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"replacestackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"replaceStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static replaceStackEntry(entry: any, props: any)\n")),Object(r.b)("p",null,"Replace an existing StatusBar stack entry with new props."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"entry"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Entry returned from ",Object(r.b)("inlineCode",{parentName:"td"},"pushStackEntry")," to replace.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"props"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object containing the StatusBar props to use in the replacement stack entry.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setbackgroundcolor"},Object(r.b)("inlineCode",{parentName:"h3"},"setBackgroundColor()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setBackgroundColor(color: string, [animated]: boolean)\n")),Object(r.b)("p",null,"\u8bbe\u7f6e\u72b6\u6001\u680f\u7684\u80cc\u666f\u8272\u3002\u4ec5\u9650 Android\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u80cc\u666f\u8272")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u542f\u7528\u8fc7\u6e21\u52a8\u753b")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setbarstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"setBarStyle()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setBarStyle(style: StatusBarStyle, [animated]: boolean)\n")),Object(r.b)("p",null,"\u8bbe\u7f6e\u72b6\u6001\u680f\u7684\u6837\u5f0f"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"style"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/statusbar#statusbarstyle"}),"StatusBarStyle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u8981\u8bbe\u7f6e\u7684\u72b6\u6001\u680f\u6837\u5f0f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u542f\u7528\u8fc7\u6e21\u52a8\u753b")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sethidden"},Object(r.b)("inlineCode",{parentName:"h3"},"setHidden()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setHidden(hidden: boolean, [animation]: StatusBarAnimation)\n")),Object(r.b)("p",null,"\u663e\u793a\uff0f\u9690\u85cf\u72b6\u6001\u680f"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hidden"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u9690\u85cf\u72b6\u6001\u680f")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animation"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/statusbar#statusbaranimation"}),"StatusBarAnimation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6539\u53d8\u72b6\u6001\u680f\u663e\u793a\u72b6\u6001\u7684\u52a8\u753b\u8fc7\u6e21\u6548\u679c")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setnetworkactivityindicatorvisible"},Object(r.b)("inlineCode",{parentName:"h3"},"setNetworkActivityIndicatorVisible()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setNetworkActivityIndicatorVisible(visible: boolean)\n")),Object(r.b)("p",null,"\u663e\u793a\uff0f\u9690\u85cf\u7f51\u7edc\u6d3b\u52a8\u6307\u793a\u5668\u3002\u4ec5\u9650 iOS\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visible"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u663e\u793a\u7f51\u7edc\u6d3b\u52a8\u6307\u793a\u5668")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"settranslucent"},Object(r.b)("inlineCode",{parentName:"h3"},"setTranslucent()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setTranslucent(translucent: boolean)\n")),Object(r.b)("p",null,"\u6307\u5b9a\u72b6\u6001\u680f\u662f\u5426\u900f\u660e\u3002\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u5e94\u7528\u4f1a\u5728\u72b6\u6001\u680f\u4e4b\u4e0b\u7ed8\u5236\uff08\u5373\u6240\u8c13\u201c\u6c89\u6d78\u5f0f\u201d\u2014\u2014\u88ab\u72b6\u6001\u680f\u906e\u4f4f\u4e00\u90e8\u5206\uff09\u3002\u5e38\u548c\u5e26\u6709\u534a\u900f\u660e\u80cc\u666f\u8272\u7684\u72b6\u6001\u680f\u642d\u914d\u4f7f\u7528\u3002\u4ec5\u9650 Android\u3002"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"translucent"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set as translucent.")))),Object(r.b)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),Object(r.b)("h3",{id:"statusbaranimation"},"StatusBarAnimation"),Object(r.b)("p",null,"\u72b6\u6001\u680f\u52a8\u753b\u8fc7\u6e21\u6548\u679c"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$Enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"none"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6ca1\u6709\u52a8\u753b")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"fade"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6e10\u53d8\u6548\u679c")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"slide"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u6ed1\u52a8\u6548\u679c")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"statusbarstyle"},"StatusBarStyle"),Object(r.b)("p",null,"\u72b6\u6001\u680f\u6837\u5f0f"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$Enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"\u5e38\u91cf\uff1a")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u7684\u6837\u5f0f\uff08IOS \u4e3a\u767d\u5e95\u9ed1\u5b57\u3001Android \u4e3a\u9ed1\u5e95\u767d\u5b57\uff09")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"light-content"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u9ed1\u5e95\u767d\u5b57")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dark-content"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u767d\u5e95\u9ed1\u5b57\uff08\u9700\u8981 Android API>=23\uff09")))),Object(r.b)("hr",null))}j.isMDXComponent=!0},413:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return o}));var n=a(0),b=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,b=function(t,e){if(null==t)return{};var a,n,b={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(b[a]=t[a]);return b}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(b[a]=t[a])}return b}var O=b.a.createContext({}),j=function(t){var e=b.a.useContext(O),a=e;return t&&(a="function"==typeof t?t(e):c(c({},e),t)),a},d=function(t){var e=j(t.components);return b.a.createElement(O.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},u=b.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,O=i(t,["components","mdxType","originalType","parentName"]),d=j(a),u=n,o=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return a?b.a.createElement(o,c(c({ref:e},O),{},{components:a})):b.a.createElement(o,c({ref:e},O))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,l=new Array(r);l[0]=u;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:n,l[1]=c;for(var O=2;O<r;O++)l[O]=a[O];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);