(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return r})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var b=a(3),n=a(8),l=(a(0),a(413)),c={id:"touchablewithoutfeedback",title:"TouchableWithoutFeedback"},r={unversionedId:"touchablewithoutfeedback",id:"touchablewithoutfeedback",isDocsHomePage:!1,title:"TouchableWithoutFeedback",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/../cndocs/touchablewithoutfeedback.md",slug:"/touchablewithoutfeedback",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/touchablewithoutfeedback",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/touchablewithoutfeedback.md",version:"current",lastUpdatedAt:1608733239,sidebar:"\u7ec4\u4ef6",previous:{title:"TouchableOpacity",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/touchableopacity"},next:{title:"View",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/view"}},i=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>accessibilityComponentType</code>",id:"accessibilitycomponenttype",children:[]},{value:"<code>accessibilityHint</code>",id:"accessibilityhint",children:[]},{value:"<code>accessibilityLabel</code>",id:"accessibilitylabel",children:[]},{value:"<code>accessibilityRole</code>",id:"accessibilityrole",children:[]},{value:"<code>accessibilityStates</code>",id:"accessibilitystates",children:[]},{value:"<code>accessibilityTraits</code>",id:"accessibilitytraits",children:[]},{value:"<code>accessible</code>",id:"accessible",children:[]},{value:"<code>delayLongPress</code>",id:"delaylongpress",children:[]},{value:"<code>delayPressIn</code>",id:"delaypressin",children:[]},{value:"<code>delayPressOut</code>",id:"delaypressout",children:[]},{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>hitSlop</code>",id:"hitslop",children:[]},{value:"<code>onBlur</code>",id:"onblur",children:[]},{value:"<code>onFocus</code>",id:"onfocus",children:[]},{value:"<code>onLayout</code>",id:"onlayout",children:[]},{value:"<code>onLongPress</code>",id:"onlongpress",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>onPressIn</code>",id:"onpressin",children:[]},{value:"<code>onPressOut</code>",id:"onpressout",children:[]},{value:"<code>pressRetentionOffset</code>",id:"pressretentionoffset",children:[]},{value:"<code>testID</code>",id:"testid",children:[]}]},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",children:[{value:"Event",id:"event",children:[]}]}],o={toc:i};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(b.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/pressable"}),"Pressable")," API.")),Object(l.b)("p",null,'\u9664\u975e\u4f60\u6709\u4e00\u4e2a\u5f88\u597d\u7684\u7406\u7531\uff0c\u5426\u5219\u4e0d\u8981\u7528\u8fd9\u4e2a\u7ec4\u4ef6\u3002\u6240\u6709\u80fd\u591f\u54cd\u5e94\u89e6\u5c4f\u64cd\u4f5c\u7684\u5143\u7d20\u5728\u89e6\u5c4f\u540e\u90fd\u5e94\u8be5\u6709\u4e00\u4e2a\u89c6\u89c9\u4e0a\u7684\u53cd\u9988\uff08\u7136\u800c\u672c\u7ec4\u4ef6\u6ca1\u6709\u4efb\u4f55\u89c6\u89c9\u53cd\u9988\uff09\uff0c\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u4e00\u4e2a"web"\u5e94\u7528\u603b\u662f\u663e\u5f97\u4e0d\u591f"\u539f\u751f"\u7684\u4e3b\u8981\u539f\u56e0\u4e4b\u4e00\u3002'),Object(l.b)("p",null,"\u6ce8\u610f",Object(l.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),"\u53ea\u652f\u6301\u4e00\u4e2a\u5b50\u8282\u70b9\uff08\u4e0d\u80fd\u6ca1\u6709\u5b50\u8282\u70b9\u4e5f\u4e0d\u80fd\u591a\u4e8e\u4e00\u4e2a\uff09\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5305\u542b\u591a\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e00\u4e2a View \u6765\u5305\u88c5\u5b83\u4eec\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u8bd1\u6ce8\uff1a\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u666f\u6bd4\u5982\u60f3\u5b9e\u73b0\u70b9\u51fb\u7a7a\u767d\u5904\u89e6\u53d1\u67d0\u4e2a\u64cd\u4f5c\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u628a\u7a7a\u767d\u90e8\u5206\u7528",Object(l.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),"\u5305\u8d77\u6765\uff0c\u6216\u8005\u7edd\u5bf9\u5b9a\u4f4d\u8986\u76d6\u4f4f\u3002")),Object(l.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(l.b)("div",{className:"snack-player","data-snack-name":"TouchableWithoutFeedback","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20StyleSheet%2C%20TouchableWithoutFeedback%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20TouchableWithoutFeedbackExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bcount%2C%20setCount%5D%20%3D%20useState(0)%3B%0A%0A%20%20const%20onPress%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20setCount(count%20%2B%201)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.countContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.countText%7D%3ECount%3A%20%7Bcount%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3CTouchableWithoutFeedback%20onPress%3D%7BonPress%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3ETouch%20Here%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingHorizontal%3A%2010%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20backgroundColor%3A%20%22%23DDDDDD%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countContainer%3A%20%7B%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20countText%3A%20%7B%0A%20%20%20%20color%3A%20%22%23FF00FF%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20TouchableWithoutFeedbackExample%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"accessibilitycomponenttype"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityComponentType")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"> Note: ",Object(l.b)("inlineCode",{parentName:"em"},"accessibilityComponentType"),"will soon be deprecated. When possible, use ",Object(l.b)("inlineCode",{parentName:"em"},"accessibilityRole")," and ",Object(l.b)("inlineCode",{parentName:"em"},"accessibilityStates")," instead.")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AccessibilityComponentTypes"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilityhint"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityHint")),Object(l.b)("p",null,"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilitylabel"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityLabel")),Object(l.b)("p",null,"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the label is constructed by traversing all the children and accumulating all the ",Object(l.b)("inlineCode",{parentName:"p"},"Text")," nodes separated by space."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"node"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilityrole"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityRole")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AccessibilityRoles"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilitystates"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityStates")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"array of AccessibilityStates"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessibilitytraits"},Object(l.b)("inlineCode",{parentName:"h3"},"accessibilityTraits")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"AccessibilityTraits, ,array of AccessibilityTraits"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"accessible"},Object(l.b)("inlineCode",{parentName:"h3"},"accessible")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delaylongpress"},Object(l.b)("inlineCode",{parentName:"h3"},"delayLongPress")),Object(l.b)("p",null,"\u4ece onPressIn \u5f00\u59cb\uff0c\u5230 onLongPress \u88ab\u8c03\u7528\u7684\u5ef6\u8fdf\u3002\u5355\u4f4d\u662f\u6beb\u79d2."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delaypressin"},Object(l.b)("inlineCode",{parentName:"h3"},"delayPressIn")),Object(l.b)("p",null,"\u4ece\u89e6\u6478\u64cd\u4f5c\u5f00\u59cb\u5230 onPressIn \u88ab\u8c03\u7528\u7684\u5ef6\u8fdf\u3002\u5355\u4f4d\u662f\u6beb\u79d2\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"delaypressout"},Object(l.b)("inlineCode",{parentName:"h3"},"delayPressOut")),Object(l.b)("p",null,"\u4ece\u89e6\u6478\u64cd\u4f5c\u7ed3\u675f\u5f00\u59cb\u5230 onPressOut \u88ab\u8c03\u7528\u7684\u5ef6\u8fdf\u3002\u5355\u4f4d\u662f\u6beb\u79d2\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"disabled"},Object(l.b)("inlineCode",{parentName:"h3"},"disabled")),Object(l.b)("p",null,"\u5982\u679c\u8bbe\u4e3a true\uff0c\u5219\u7981\u6b62\u6b64\u7ec4\u4ef6\u7684\u4e00\u5207\u4ea4\u4e92\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"hitslop"},Object(l.b)("inlineCode",{parentName:"h3"},"hitSlop")),Object(l.b)("p",null,"\u8fd9\u4e00\u5c5e\u6027\u5b9a\u4e49\u4e86\u6309\u94ae\u7684\u5916\u5ef6\u8303\u56f4\u3002\u8fd9\u4e00\u8303\u56f4\u4e5f\u4f1a\u4f7f",Object(l.b)("inlineCode",{parentName:"p"},"pressRetentionOffset"),"\u53d8\u5f97\u66f4\u5927\u3002 ",Object(l.b)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u89e6\u6478\u8303\u56f4\u4e0d\u4f1a\u8d85\u8fc7\u7236\u89c6\u56fe\u7684\u8fb9\u754c\uff0c\u4e5f\u4e0d\u4f1a\u5f71\u54cd\u539f\u5148\u548c\u672c\u7ec4\u4ef6\u5c42\u53e0\u7684\u89c6\u56fe\uff08\u4fdd\u7559\u539f\u5148\u7684\u89e6\u6478\u4f18\u5148\u7ea7\uff09\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"object: {top: number, left: number, bottom: number, right: number}"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onblur"},Object(l.b)("inlineCode",{parentName:"h3"},"onBlur")),Object(l.b)("p",null,"Invoked when the item loses focus."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onfocus"},Object(l.b)("inlineCode",{parentName:"h3"},"onFocus")),Object(l.b)("p",null,"Invoked when the item receives focus."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onlayout"},Object(l.b)("inlineCode",{parentName:"h3"},"onLayout")),Object(l.b)("p",null,"\u5f53\u52a0\u8f7d\u6216\u8005\u5e03\u5c40\u6539\u53d8\u7684\u65f6\u5019\u88ab\u8c03\u7528\uff0c\u53c2\u6570\u4e3a\uff1a"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"{nativeEvent: {layout: {x, y, width, height}}}")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onlongpress"},Object(l.b)("inlineCode",{parentName:"h3"},"onLongPress")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpress"},Object(l.b)("inlineCode",{parentName:"h3"},"onPress")),Object(l.b)("p",null,"\u5f53\u89e6\u6478\u64cd\u4f5c\u7ed3\u675f\u65f6\u8c03\u7528\uff0c\u4f46\u5982\u679c\u88ab\u53d6\u6d88\u4e86\u5219\u4e0d\u8c03\u7528\uff08\u8b6c\u5982\u54cd\u5e94\u8005\u88ab\u4e00\u4e2a\u6eda\u52a8\u64cd\u4f5c\u53d6\u4ee3\uff09\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpressin"},Object(l.b)("inlineCode",{parentName:"h3"},"onPressIn")),Object(l.b)("p",null,"Called as soon as the touchable element is pressed and invoked even before onPress. This can be useful when making network requests."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpressout"},Object(l.b)("inlineCode",{parentName:"h3"},"onPressOut")),Object(l.b)("p",null,"Called as soon as the touch is released even before onPress."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"pressretentionoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"pressRetentionOffset")),Object(l.b)("p",null,"\u5728\u5f53\u524d\u89c6\u56fe\u4e0d\u80fd\u6eda\u52a8\u7684\u524d\u63d0\u4e0b\u6307\u5b9a\u8fd9\u4e2a\u5c5e\u6027\uff0c\u53ef\u4ee5\u51b3\u5b9a\u5f53\u624b\u6307\u79fb\u5f00\u591a\u8fdc\u8ddd\u79bb\u4e4b\u540e\uff0c\u4f1a\u4e0d\u518d\u6fc0\u6d3b\u6309\u94ae\u3002\u4f46\u5982\u679c\u624b\u6307\u518d\u6b21\u79fb\u56de\u8303\u56f4\u5185\uff0c\u6309\u94ae\u4f1a\u88ab\u518d\u6b21\u6fc0\u6d3b\u3002\u53ea\u8981\u89c6\u56fe\u4e0d\u80fd\u6eda\u52a8\uff0c\u4f60\u53ef\u4ee5\u6765\u56de\u591a\u6b21\u8fd9\u6837\u7684\u64cd\u4f5c\u3002\u786e\u4fdd\u4f60\u4f20\u5165\u4e00\u4e2a\u5e38\u91cf\u6765\u51cf\u5c11\u5185\u5b58\u5206\u914d\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"object: {top: number, left: number, bottom: number, right: number}"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"testid"},Object(l.b)("inlineCode",{parentName:"h3"},"testID")),Object(l.b)("p",null,"Used to locate this view in end-to-end tests."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"No")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),Object(l.b)("h3",{id:"event"},"Event"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Object")))))}d.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return u}));var b=a(0),n=a.n(b);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},l=Object.keys(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),d=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},O=function(e){var t=d(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=d(a),p=b,u=O["".concat(c,".").concat(p)]||O[p]||j[p]||l;return a?n.a.createElement(u,r(r({ref:t},o),{},{components:a})):n.a.createElement(u,r({ref:t},o))}));function u(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var l=a.length,c=new Array(l);c[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:b,c[1]=r;for(var o=2;o<l;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);