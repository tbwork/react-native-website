(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{364:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return A}));var n=a(3),r=a(8),c=(a(0),a(413)),o=a(417),i=a(418),l=a(419),s={id:"backhandler",title:"BackHandler"},d={unversionedId:"backhandler",id:"version-0.63/backhandler",isDocsHomePage:!1,title:"BackHandler",description:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(95.25%), sunnylqm(4.75%)",source:"@site/versioned_docs/version-0.63/backhandler.md",slug:"/backhandler",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/backhandler",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/versioned_docs/version-0.63/backhandler.md",version:"0.63",lastUpdatedAt:1608733239,sidebar:"version-0.63/api",previous:{title:"useWindowDimensions",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/usewindowdimensions"},next:{title:"PermissionsAndroid",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/permissionsandroid"}},u=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Usage with React Navigation",id:"usage-with-react-navigation",children:[]},{value:"Backhandler hook",id:"backhandler-hook",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>exitApp()</code>",id:"exitapp",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]}],b={toc:u};function A(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9525-sunnylqm475"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",Object(c.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(95.25%), ",Object(c.b)("a",Object(n.a)({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(4.75%)"),Object(c.b)("p",null,"BackHandler API \u7528\u4e8e\u76d1\u542c\u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u94ae\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u8c03\u7528\u4f60\u81ea\u5df1\u7684\u51fd\u6570\u6765\u5904\u7406\u540e\u9000\u884c\u4e3a\u3002\u6b64 API \u4ec5\u80fd\u5728 Android \u4e0a\u4f7f\u7528\u3002"),Object(c.b)("p",null,"\u56de\u8c03\u51fd\u6570\u662f\u5012\u5e8f\u6267\u884c\u7684\uff08\u5373\u540e\u6dfb\u52a0\u7684\u51fd\u6570\u5148\u6267\u884c\uff09\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u5982\u679c\u67d0\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de true"),"\uff0c\u5219\u540e\u7eed\u7684\u51fd\u6570\u90fd\u4e0d\u4f1a\u88ab\u8c03\u7528\u3002"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u6dfb\u52a0\u4efb\u4f55\u76d1\u542c\u51fd\u6570\uff0c\u6216\u8005\u6240\u6709\u7684\u76d1\u542c\u51fd\u6570\u90fd\u8fd4\u56de false"),"\uff0c\u5219\u4f1a\u6267\u884c\u9ed8\u8ba4\u884c\u4e3a\uff0c\u9000\u51fa\u5e94\u7528\u3002")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c app \u5f53\u524d\u6253\u5f00\u4e86\u4e00\u4e2a",Object(c.b)("inlineCode",{parentName:"p"},"Modal"),"\u7a97\u53e3\uff0c\u5219 BackHandler \u4e0d\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u3002(",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/modal#onrequestclose"}),"\u67e5\u770b",Object(c.b)("inlineCode",{parentName:"a"},"Modal"),"\u7684\u6587\u6863"),").")),Object(c.b)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'BackHandler.addEventListener("hardwareBackPress", function() {\n  /**\n   * this.onMainScreen()\u548cthis.goBack()\u4e24\u4e2a\u65b9\u6cd5\u90fd\u53ea\u662f\u4f2a\u65b9\u6cd5\uff0c\u9700\u8981\u4f60\u81ea\u5df1\u53bb\u5b9e\u73b0\n   * \u4e00\u822c\u6765\u8bf4\u90fd\u8981\u914d\u5408\u5bfc\u822a\u5668\u7ec4\u4ef6\u4f7f\u7528\n   */\n\n  if (!this.onMainScreen()) {\n    this.goBack();\n    /**\n     * \u8fd4\u56detrue\u65f6\u4f1a\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u4f20\u9012\uff0c\u56e0\u800c\u4e0d\u4f1a\u6267\u884c\u9ed8\u8ba4\u7684\u540e\u9000\u884c\u4e3a\n     */\n    return true;\n  }\n  /**\n   * \u8fd4\u56defalse\u65f6\u4f1a\u4f7f\u4e8b\u4ef6\u7ee7\u7eed\u4f20\u9012\uff0c\u89e6\u53d1\u5176\u4ed6\u6ce8\u518c\u7684\u76d1\u542c\u51fd\u6570\uff0c\u6216\u662f\u7cfb\u7edf\u9ed8\u8ba4\u7684\u540e\u9000\u884c\u4e3a\n   */\n  return false;\n});\n')),Object(c.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(c.b)("p",null,"The following example implements a scenario where you confirm if the user wants to exit the app:"),Object(c.b)(o.a,{groupId:"syntax",defaultValue:l.a.defaultSyntax,values:l.a.syntax,mdxType:"Tabs"},Object(c.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(c.b)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%20%20%5D)%3B%0A%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20backHandler%20%3D%20BackHandler.addEventListener(%0A%20%20%20%20%20%20%22hardwareBackPress%22%2C%0A%20%20%20%20%20%20backAction%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20backHandler.remove()%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(c.b)(i.a,{value:"classical",mdxType:"TabItem"},Object(c.b)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.backHandler%20%3D%20BackHandler.addEventListener(%0A%20%20%20%20%20%20%22hardwareBackPress%22%2C%0A%20%20%20%20%20%20this.backAction%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.backHandler.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"BackHandler.addEventListener")," creates an event listener & returns a ",Object(c.b)("inlineCode",{parentName:"p"},"NativeEventSubscription")," object which should be cleared using ",Object(c.b)("inlineCode",{parentName:"p"},"NativeEventSubscription.remove")," method."),Object(c.b)("p",null,"Additionally ",Object(c.b)("inlineCode",{parentName:"p"},"BackHandler.removeEventListener")," can also be used to clear the event listener. Ensure the callback has the reference to the same function used in the ",Object(c.b)("inlineCode",{parentName:"p"},"addEventListener")," call as shown the following example \ufe63"),Object(c.b)(o.a,{groupId:"syntax",defaultValue:l.a.defaultSyntax,values:l.a.syntax,mdxType:"Tabs"},Object(c.b)(i.a,{value:"functional",mdxType:"TabItem"},Object(c.b)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20BackHandler.addEventListener(%22hardwareBackPress%22%2C%20backAction)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%0A%20%20%20%20%20%20BackHandler.removeEventListener(%22hardwareBackPress%22%2C%20backAction)%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),Object(c.b)(i.a,{value:"classical",mdxType:"TabItem"},Object(c.b)("div",{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20BackHandler.addEventListener(%22hardwareBackPress%22%2C%20this.backAction)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20BackHandler.removeEventListener(%22hardwareBackPress%22%2C%20this.backAction)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),Object(c.b)("h2",{id:"usage-with-react-navigation"},"Usage with React Navigation"),Object(c.b)("p",null,"If you are using React Navigation to navigate across different screens, you can follow their guide on ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnavigation.org/docs/custom-android-back-button-handling/"}),"Custom Android back button behaviour")),Object(c.b)("h2",{id:"backhandler-hook"},"Backhandler hook"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/hooks#usebackhandler"}),"React Native Hooks")," has a nice ",Object(c.b)("inlineCode",{parentName:"p"},"useBackHandler")," hook which will simplify the process of setting up event listeners."),Object(c.b)("hr",null),Object(c.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("h3",{id:"addeventlistener"},Object(c.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(eventName, handler)\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"exitapp"},Object(c.b)("inlineCode",{parentName:"h3"},"exitApp()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static exitApp()\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"removeeventlistener"},Object(c.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(eventName, handler)\n")))}A.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},A=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),A=n,p=u["".concat(o,".").concat(A)]||u[A]||b[A]||c;return a?r.a.createElement(p,i(i({ref:t},s),{},{components:a})):r.a.createElement(p,i({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=A;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}A.displayName="MDXCreateElement"},414:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},415:function(e,t,a){"use strict";var n=a(0),r=a(416);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},416:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},417:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(415),o=a(414),i=a(62),l=a.n(i),s=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,u=e.values,b=e.groupId,A=e.className,p=Object(c.a)(),m=p.tabGroupChoices,f=p.setTabGroupChoices,v=Object(n.useState)(i),h=v[0],B=v[1],k=n.Children.toArray(e.children);if(null!=b){var y=m[b];null!=y&&y!==h&&u.some((function(e){return e.value===y}))&&B(y)}var C=function(e){B(e),null!=b&&f(b,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},A)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return C(t)},onClick:function(){C(t)}},a)}))),t?Object(n.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},418:function(e,t,a){"use strict";var n=a(3),r=a(0),c=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return c.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},419:function(e,t,a){"use strict";var n=a(7),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),c=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macos":c?"windows":"linux";t.a={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}}}]);