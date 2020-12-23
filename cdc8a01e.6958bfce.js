(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{346:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(413)),c={id:"handling-touches",title:"\u5904\u7406\u89e6\u6478\u4e8b\u4ef6"},i={unversionedId:"handling-touches",id:"handling-touches",isDocsHomePage:!1,title:"\u5904\u7406\u89e6\u6478\u4e8b\u4ef6",description:"\u79fb\u52a8\u5e94\u7528\u4e0a\u7684\u7528\u6237\u4ea4\u4e92\u57fa\u672c\u9760\u201c\u6478\u201d\u3002\u5f53\u7136\uff0c\u201c\u6478\u201d\u4e5f\u662f\u6709\u5404\u79cd\u59ff\u52bf\u7684\uff1a\u5728\u4e00\u4e2a\u6309\u94ae\u4e0a\u70b9\u51fb\uff0c\u5728\u4e00\u4e2a\u5217\u8868\u4e0a\u6ed1\u52a8\uff0c\u6216\u662f\u5728\u4e00\u4e2a\u5730\u56fe\u4e0a\u7f29\u653e\u3002React Native \u63d0\u4f9b\u4e86\u53ef\u4ee5\u5904\u7406\u5e38\u89c1\u89e6\u6478\u624b\u52bf\uff08\u4f8b\u5982\u70b9\u51fb\u6216\u6ed1\u52a8\uff09\u7684\u7ec4\u4ef6\uff0c \u4ee5\u53ca\u53ef\u7528\u4e8e\u8bc6\u522b\u66f4\u590d\u6742\u7684\u624b\u52bf\u7684\u5b8c\u6574\u7684\u624b\u52bf\u54cd\u5e94\u7cfb\u7edf\u3002",source:"@site/../cndocs/handling-touches.md",slug:"/handling-touches",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/handling-touches",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/handling-touches.md",version:"current",lastUpdatedAt:1608733239,sidebar:"docs",previous:{title:"\u989c\u8272",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/colors"},next:{title:"\u4f7f\u7528\u5bfc\u822a\u5668\u8df3\u8f6c\u9875\u9762",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/navigation"}},s=[{value:"\u663e\u793a\u4e00\u4e2a\u7b80\u5355\u7684\u6309\u94ae",id:"\u663e\u793a\u4e00\u4e2a\u7b80\u5355\u7684\u6309\u94ae",children:[]},{value:"Touchable \u7cfb\u5217\u7ec4\u4ef6",id:"touchable-\u7cfb\u5217\u7ec4\u4ef6",children:[]},{value:"\u5728\u5217\u8868\u4e2d\u4e0a\u4e0b\u6ed1\u52a8\u3001\u5728\u89c6\u56fe\u4e0a\u5de6\u53f3\u6ed1\u52a8\u4ee5\u53ca\u53cc\u6307\u7f29\u653e",id:"\u5728\u5217\u8868\u4e2d\u4e0a\u4e0b\u6ed1\u52a8\u3001\u5728\u89c6\u56fe\u4e0a\u5de6\u53f3\u6ed1\u52a8\u4ee5\u53ca\u53cc\u6307\u7f29\u653e",children:[]}],l={toc:s};function b(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"\u79fb\u52a8\u5e94\u7528\u4e0a\u7684\u7528\u6237\u4ea4\u4e92\u57fa\u672c\u9760\u201c\u6478\u201d\u3002\u5f53\u7136\uff0c\u201c\u6478\u201d\u4e5f\u662f\u6709\u5404\u79cd\u59ff\u52bf\u7684\uff1a\u5728\u4e00\u4e2a\u6309\u94ae\u4e0a\u70b9\u51fb\uff0c\u5728\u4e00\u4e2a\u5217\u8868\u4e0a\u6ed1\u52a8\uff0c\u6216\u662f\u5728\u4e00\u4e2a\u5730\u56fe\u4e0a\u7f29\u653e\u3002React Native \u63d0\u4f9b\u4e86\u53ef\u4ee5\u5904\u7406\u5e38\u89c1\u89e6\u6478\u624b\u52bf\uff08\u4f8b\u5982\u70b9\u51fb\u6216\u6ed1\u52a8\uff09\u7684\u7ec4\u4ef6\uff0c \u4ee5\u53ca\u53ef\u7528\u4e8e\u8bc6\u522b\u66f4\u590d\u6742\u7684\u624b\u52bf\u7684\u5b8c\u6574\u7684",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/gesture-responder-system"}),"\u624b\u52bf\u54cd\u5e94\u7cfb\u7edf"),"\u3002"),Object(o.b)("h2",{id:"\u663e\u793a\u4e00\u4e2a\u7b80\u5355\u7684\u6309\u94ae"},"\u663e\u793a\u4e00\u4e2a\u7b80\u5355\u7684\u6309\u94ae"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/button"}),"Button"),"\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u8de8\u5e73\u53f0\u7684\u6309\u94ae\u7ec4\u4ef6\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u6700\u7b80\u793a\u4f8b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Button\n  onPress={() => {\n    Alert.alert("\u4f60\u70b9\u51fb\u4e86\u6309\u94ae\uff01");\n  }}\n  title="\u70b9\u6211\uff01"\n/>\n')),Object(o.b)("p",null,'\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u5728 iOS \u4e0a\u6e32\u67d3\u4e00\u4e2a\u84dd\u8272\u7684\u6807\u7b7e\u72b6\u6309\u94ae\uff0c\u5728 Android \u4e0a\u5219\u4f1a\u6e32\u67d3\u4e00\u4e2a\u84dd\u8272\u5706\u89d2\u77e9\u5f62\u5e26\u767d\u5b57\u7684\u6309\u94ae\u3002\u70b9\u51fb\u8fd9\u4e2a\u6309\u94ae\u4f1a\u8c03\u7528"onPress"\u51fd\u6570\uff0c\u5177\u4f53\u4f5c\u7528\u5c31\u662f\u663e\u793a\u4e00\u4e2a alert \u5f39\u51fa\u6846\u3002\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a"color"\u5c5e\u6027\u6765\u4fee\u6539\u6309\u94ae\u7684\u989c\u8272\u3002'),Object(o.b)("p",null,Object(o.b)("img",{src:n(549).default})),Object(o.b)("p",null,"\u518d\u8bd5\u8bd5\u4e0b\u9762\u8fd9\u4e2a\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"Button"),'\u7684\u4f8b\u5b50\u5427\u3002\u4f60\u53ef\u4ee5\u70b9\u51fb"Tap to Play"\u6765\u9884\u89c8\u771f\u5b9e\u6548\u679c\u3002'),Object(o.b)("div",{className:"snack-player","data-snack-name":"Button Basics","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Alert%2C%20Button%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20ButtonBasics%20extends%20Component%20%7B%0A%20%20_onPressButton()%20%7B%0A%20%20%20%20Alert.alert('You%20tapped%20the%20button!')%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20Me%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20Me%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23841584%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.alternativeLayoutButtonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22This%20looks%20great!%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22OK!%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23841584%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20flex%3A%201%2C%0A%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20margin%3A%2020%0A%20%20%7D%2C%0A%20%20alternativeLayoutButtonContainer%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20justifyContent%3A%20'space-between'%0A%20%20%7D%0A%7D)%0A","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("h2",{id:"touchable-\u7cfb\u5217\u7ec4\u4ef6"},"Touchable \u7cfb\u5217\u7ec4\u4ef6"),Object(o.b)("p",null,"\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u6837\u5f0f\u662f\u56fa\u5b9a\u7684\u3002\u6240\u4ee5\u5982\u679c\u5b83\u7684\u5916\u89c2\u5e76\u4e0d\u600e\u4e48\u642d\u914d\u4f60\u7684\u8bbe\u8ba1\uff0c\u90a3\u5c31\u9700\u8981\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"TouchableOpacity"),"\u6216\u662f",Object(o.b)("inlineCode",{parentName:"p"},"TouchableNativeFeedback"),"\u7ec4\u4ef6\u6765\u5b9a\u5236\u81ea\u5df1\u6240\u9700\u8981\u7684\u6309\u94ae\uff0c\u89c6\u9891\u6559\u7a0b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://v.youku.com/v_show/id_XMTQ5OTE3MjkzNg==.html?f=26822355&from=y1.7-1.3"}),"\u5982\u4f55\u5236\u4f5c\u4e00\u4e2a\u6309\u94ae"),"\u8bb2\u8ff0\u4e86\u5b8c\u6574\u7684\u8fc7\u7a0b\u3002\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u5728 github.com \u7f51\u7ad9\u4e0a\u641c\u7d22 'react native button' \u6765\u770b\u770b\u793e\u533a\u5176\u4ed6\u4eba\u7684\u4f5c\u54c1\u3002"),Object(o.b)("p",null,"\u5177\u4f53\u4f7f\u7528\u54ea\u79cd\u7ec4\u4ef6\uff0c\u53d6\u51b3\u4e8e\u4f60\u5e0c\u671b\u7ed9\u7528\u6237\u4ec0\u4e48\u6837\u7684\u89c6\u89c9\u53cd\u9988\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u4e00\u822c\u6765\u8bf4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/touchablehighlight"}),Object(o.b)("strong",{parentName:"a"},"TouchableHighlight")),"\u6765\u5236\u4f5c\u6309\u94ae\u6216\u8005\u94fe\u63a5\u3002\u6ce8\u610f\u6b64\u7ec4\u4ef6\u7684\u80cc\u666f\u4f1a\u5728\u7528\u6237\u624b\u6307\u6309\u4e0b\u65f6\u53d8\u6697\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5728 Android \u4e0a\u8fd8\u53ef\u4ee5\u4f7f\u7528",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/touchablenativefeedback"}),Object(o.b)("strong",{parentName:"a"},"TouchableNativeFeedback")),"\uff0c\u5b83\u4f1a\u5728\u7528\u6237\u624b\u6307\u6309\u4e0b\u65f6\u5f62\u6210\u7c7b\u4f3c\u58a8\u6c34\u6d9f\u6f2a\u7684\u89c6\u89c9\u6548\u679c\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/touchableopacity"}),Object(o.b)("strong",{parentName:"a"},"TouchableOpacity")),"\u4f1a\u5728\u7528\u6237\u624b\u6307\u6309\u4e0b\u65f6\u964d\u4f4e\u6309\u94ae\u7684\u900f\u660e\u5ea6\uff0c\u800c\u4e0d\u4f1a\u6539\u53d8\u80cc\u666f\u7684\u989c\u8272\u3002")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u5982\u679c\u4f60\u60f3\u5728\u5904\u7406\u70b9\u51fb\u4e8b\u4ef6\u7684\u540c\u65f6\u4e0d\u663e\u793a\u4efb\u4f55\u89c6\u89c9\u53cd\u9988\uff0c\u5219\u9700\u8981\u4f7f\u7528",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/touchablewithoutfeedback"}),Object(o.b)("strong",{parentName:"a"},"TouchableWithoutFeedback")),"\u3002"))),Object(o.b)("p",null,"\u67d0\u4e9b\u573a\u666f\u4e2d\u4f60\u53ef\u80fd\u9700\u8981\u68c0\u6d4b\u7528\u6237\u662f\u5426\u8fdb\u884c\u4e86\u957f\u6309\u64cd\u4f5c\u3002\u53ef\u4ee5\u5728\u4e0a\u9762\u5217\u51fa\u7684\u4efb\u610f\u7ec4\u4ef6\u4e2d\u4f7f\u7528",Object(o.b)("inlineCode",{parentName:"p"},"onLongPress"),"\u5c5e\u6027\u6765\u5b9e\u73b0\u3002"),Object(o.b)("p",null,"\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u793a\u4f8b\uff1a"),Object(o.b)("div",{className:"snack-player","data-snack-name":"Touchables","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Alert%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20TouchableOpacity%2C%20TouchableNativeFeedback%2C%20TouchableWithoutFeedback%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20Touchables%20extends%20Component%20%7B%0A%20%20_onPressButton()%20%7B%0A%20%20%20%20Alert.alert('You%20tapped%20the%20button!')%0A%20%20%7D%0A%0A%20%20_onLongPressButton()%20%7B%0A%20%20%20%20Alert.alert('You%20long-pressed%20the%20button!')%0A%20%20%7D%0A%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis._onPressButton%7D%20underlayColor%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableHighlight%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7Bthis._onPressButton%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableOpacity%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CTouchableNativeFeedback%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3D%7BPlatform.OS%20%3D%3D%3D%20'android'%20%3F%20TouchableNativeFeedback.SelectableBackground()%20%3A%20''%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableNativeFeedback%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableNativeFeedback%3E%0A%20%20%20%20%20%20%20%20%3CTouchableWithoutFeedback%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableWithoutFeedback%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis._onPressButton%7D%20onLongPress%3D%7Bthis._onLongPressButton%7D%20underlayColor%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchable%20with%20Long%20Press%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20paddingTop%3A%2060%2C%0A%20%20%20%20alignItems%3A%20'center'%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20width%3A%20260%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20backgroundColor%3A%20'%232196F3'%0A%20%20%7D%2C%0A%20%20buttonText%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20color%3A%20'white'%0A%20%20%7D%0A%7D)","data-snack-platform":"android","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(o.b)("h2",{id:"\u5728\u5217\u8868\u4e2d\u4e0a\u4e0b\u6ed1\u52a8\u3001\u5728\u89c6\u56fe\u4e0a\u5de6\u53f3\u6ed1\u52a8\u4ee5\u53ca\u53cc\u6307\u7f29\u653e"},"\u5728\u5217\u8868\u4e2d\u4e0a\u4e0b\u6ed1\u52a8\u3001\u5728\u89c6\u56fe\u4e0a\u5de6\u53f3\u6ed1\u52a8\u4ee5\u53ca\u53cc\u6307\u7f29\u653e"),Object(o.b)("p",null,"\u53e6\u4e00\u4e2a\u5728\u79fb\u52a8\u5e94\u7528\u4e2d\u5e38\u89c1\u7684\u624b\u52bf\u5c31\u662f\u6ed1\u52a8\u3002\u7528\u6237\u4f1a\u5728\u5217\u8868\u4e2d\u4e0a\u4e0b\u6ed1\u52a8\uff0c\u6216\u662f\u5728\u89c6\u56fe\u4e0a\u5de6\u53f3\u6ed1\u52a8\u3002\u8981\u5904\u7406\u8fd9\u6837\u7684\u624b\u52bf\uff0c\u4f60\u53ef\u4ee5\u770b\u4e00\u4e0b",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/using-a-scrollview"}),"\u5982\u4f55\u4f7f\u7528\u6eda\u52a8\u89c6\u56fe"),"\u8fd9\u7bc7\u6587\u6863\u3002"))}b.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(h,i(i({ref:t},l),{},{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},549:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Button-b053d1b4ecdc78a87ce72711549ba2ca.png"}}]);