"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[71115],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return A}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),A=o,h=d["".concat(l,".").concat(A)]||d[A]||p[A]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function A(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return A},default:function(){return k},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return m}});var a=n(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&u(e,n,t[n]);return e};const d={id:"handling-touches",title:"\u5904\u7406\u89e6\u6478\u4e8b\u4ef6"},A=void 0,h={unversionedId:"handling-touches",id:"handling-touches",title:"\u5904\u7406\u89e6\u6478\u4e8b\u4ef6",description:"\u79fb\u52a8\u5e94\u7528\u4e0a\u7684\u7528\u6237\u4ea4\u4e92\u57fa\u672c\u9760\u201c\u6478\u201d\u3002\u5f53\u7136\uff0c\u201c\u6478\u201d\u4e5f\u662f\u6709\u5404\u79cd\u59ff\u52bf\u7684\uff1a\u5728\u4e00\u4e2a\u6309\u94ae\u4e0a\u70b9\u51fb\uff0c\u5728\u4e00\u4e2a\u5217\u8868\u4e0a\u6ed1\u52a8\uff0c\u6216\u662f\u5728\u4e00\u4e2a\u5730\u56fe\u4e0a\u7f29\u653e\u3002React Native \u63d0\u4f9b\u4e86\u53ef\u4ee5\u5904\u7406\u5e38\u89c1\u89e6\u6478\u624b\u52bf\uff08\u4f8b\u5982\u70b9\u51fb\u6216\u6ed1\u52a8\uff09\u7684\u7ec4\u4ef6\uff0c \u4ee5\u53ca\u53ef\u7528\u4e8e\u8bc6\u522b\u66f4\u590d\u6742\u7684\u624b\u52bf\u7684\u5b8c\u6574\u7684\u624b\u52bf\u54cd\u5e94\u7cfb\u7edf\u3002",source:"@site/../cndocs/handling-touches.md",sourceDirName:".",slug:"/handling-touches",permalink:"/docs/next/handling-touches",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/handling-touches.md",tags:[],version:"current",frontMatter:{id:"handling-touches",title:"\u5904\u7406\u89e6\u6478\u4e8b\u4ef6"},sidebar:"docs",previous:{title:"\u989c\u8272",permalink:"/docs/next/colors"},next:{title:"\u4f7f\u7528\u5bfc\u822a\u5668\u8df3\u8f6c\u9875\u9762",permalink:"/docs/next/navigation"}},b={},m=[{value:"\u663e\u793a\u4e00\u4e2a\u7b80\u5355\u7684\u6309\u94ae",id:"\u663e\u793a\u4e00\u4e2a\u7b80\u5355\u7684\u6309\u94ae",level:2},{value:"Touchable \u7cfb\u5217\u7ec4\u4ef6",id:"touchable-\u7cfb\u5217\u7ec4\u4ef6",level:2},{value:"\u5728\u5217\u8868\u4e2d\u4e0a\u4e0b\u6ed1\u52a8\u3001\u5728\u89c6\u56fe\u4e0a\u5de6\u53f3\u6ed1\u52a8\u4ee5\u53ca\u53cc\u6307\u7f29\u653e",id:"\u5728\u5217\u8868\u4e2d\u4e0a\u4e0b\u6ed1\u52a8\u5728\u89c6\u56fe\u4e0a\u5de6\u53f3\u6ed1\u52a8\u4ee5\u53ca\u53cc\u6307\u7f29\u653e",level:2},{value:"Known issues",id:"known-issues",level:2}],f={toc:m};function k(e){var t,o=e,{components:u}=o,d=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(o,["components"]);return(0,a.kt)("wrapper",(t=p(p({},f),d),r(t,i({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u79fb\u52a8\u5e94\u7528\u4e0a\u7684\u7528\u6237\u4ea4\u4e92\u57fa\u672c\u9760\u201c\u6478\u201d\u3002\u5f53\u7136\uff0c\u201c\u6478\u201d\u4e5f\u662f\u6709\u5404\u79cd\u59ff\u52bf\u7684\uff1a\u5728\u4e00\u4e2a\u6309\u94ae\u4e0a\u70b9\u51fb\uff0c\u5728\u4e00\u4e2a\u5217\u8868\u4e0a\u6ed1\u52a8\uff0c\u6216\u662f\u5728\u4e00\u4e2a\u5730\u56fe\u4e0a\u7f29\u653e\u3002React Native \u63d0\u4f9b\u4e86\u53ef\u4ee5\u5904\u7406\u5e38\u89c1\u89e6\u6478\u624b\u52bf\uff08\u4f8b\u5982\u70b9\u51fb\u6216\u6ed1\u52a8\uff09\u7684\u7ec4\u4ef6\uff0c \u4ee5\u53ca\u53ef\u7528\u4e8e\u8bc6\u522b\u66f4\u590d\u6742\u7684\u624b\u52bf\u7684\u5b8c\u6574\u7684",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/next/gesture-responder-system"}),"\u624b\u52bf\u54cd\u5e94\u7cfb\u7edf"),"\u3002"),(0,a.kt)("h2",p({},{id:"\u663e\u793a\u4e00\u4e2a\u7b80\u5355\u7684\u6309\u94ae"}),"\u663e\u793a\u4e00\u4e2a\u7b80\u5355\u7684\u6309\u94ae"),(0,a.kt)("p",null,(0,a.kt)("a",p({parentName:"p"},{href:"/docs/next/button"}),"Button"),"\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u8de8\u5e73\u53f0\u7684\u6309\u94ae\u7ec4\u4ef6\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u6700\u7b80\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-jsx"}),"<Button\n  onPress={() => {\n    Alert.alert('\u4f60\u70b9\u51fb\u4e86\u6309\u94ae\uff01');\n  }}\n  title=\"\u70b9\u6211\uff01\"\n/>\n")),(0,a.kt)("p",null,'\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u5728 iOS \u4e0a\u6e32\u67d3\u4e00\u4e2a\u84dd\u8272\u7684\u6807\u7b7e\u72b6\u6309\u94ae\uff0c\u5728 Android \u4e0a\u5219\u4f1a\u6e32\u67d3\u4e00\u4e2a\u84dd\u8272\u5706\u89d2\u77e9\u5f62\u5e26\u767d\u5b57\u7684\u6309\u94ae\u3002\u70b9\u51fb\u8fd9\u4e2a\u6309\u94ae\u4f1a\u8c03\u7528"onPress"\u51fd\u6570\uff0c\u5177\u4f53\u4f5c\u7528\u5c31\u662f\u663e\u793a\u4e00\u4e2a alert \u5f39\u51fa\u6846\u3002\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a"color"\u5c5e\u6027\u6765\u4fee\u6539\u6309\u94ae\u7684\u989c\u8272\u3002'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(88469).Z,width:"467",height:"97"})),(0,a.kt)("p",null,"\u518d\u8bd5\u8bd5\u4e0b\u9762\u8fd9\u4e2a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"Button"),'\u7684\u4f8b\u5b50\u5427\u3002\u4f60\u53ef\u4ee5\u70b9\u51fb"Tap to Play"\u6765\u9884\u89c8\u771f\u5b9e\u6548\u679c\u3002'),(0,a.kt)("div",p({},{className:"snack-player","data-snack-name":"Button Basics","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Alert%2C%20Button%2C%20StyleSheet%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20ButtonBasics%20extends%20Component%20%7B%0A%20%20_onPressButton()%20%7B%0A%20%20%20%20Alert.alert('You%20tapped%20the%20button!')%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20Me%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Press%20Me%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23841584%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.alternativeLayoutButtonContainer%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22This%20looks%20great!%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22OK!%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22%23841584%22%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20flex%3A%201%2C%0A%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%2C%0A%20%20buttonContainer%3A%20%7B%0A%20%20%20%20margin%3A%2020%0A%20%20%7D%2C%0A%20%20alternativeLayoutButtonContainer%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20justifyContent%3A%20'space-between'%0A%20%20%7D%0A%7D)%0A","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("h2",p({},{id:"touchable-\u7cfb\u5217\u7ec4\u4ef6"}),"Touchable \u7cfb\u5217\u7ec4\u4ef6"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u6837\u5f0f\u662f\u56fa\u5b9a\u7684\u3002\u6240\u4ee5\u5982\u679c\u5b83\u7684\u5916\u89c2\u5e76\u4e0d\u600e\u4e48\u642d\u914d\u4f60\u7684\u8bbe\u8ba1\uff0c\u90a3\u5c31\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity"),"\u6216\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableNativeFeedback"),"\u7ec4\u4ef6\u6765\u5b9a\u5236\u81ea\u5df1\u6240\u9700\u8981\u7684\u6309\u94ae\uff0c\u89c6\u9891\u6559\u7a0b",(0,a.kt)("a",p({parentName:"p"},{href:"http://v.youku.com/v_show/id_XMTQ5OTE3MjkzNg==.html?f=26822355&from=y1.7-1.3"}),"\u5982\u4f55\u5236\u4f5c\u4e00\u4e2a\u6309\u94ae"),"\u8bb2\u8ff0\u4e86\u5b8c\u6574\u7684\u8fc7\u7a0b\u3002\u6216\u8005\u4f60\u4e5f\u53ef\u4ee5\u5728 github.com \u7f51\u7ad9\u4e0a\u641c\u7d22 'react native button' \u6765\u770b\u770b\u793e\u533a\u5176\u4ed6\u4eba\u7684\u4f5c\u54c1\u3002"),(0,a.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u54ea\u79cd\u7ec4\u4ef6\uff0c\u53d6\u51b3\u4e8e\u4f60\u5e0c\u671b\u7ed9\u7528\u6237\u4ec0\u4e48\u6837\u7684\u89c6\u89c9\u53cd\u9988\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u822c\u6765\u8bf4\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/next/touchablehighlight"}),(0,a.kt)("strong",{parentName:"a"},"TouchableHighlight")),"\u6765\u5236\u4f5c\u6309\u94ae\u6216\u8005\u94fe\u63a5\u3002\u6ce8\u610f\u6b64\u7ec4\u4ef6\u7684\u80cc\u666f\u4f1a\u5728\u7528\u6237\u624b\u6307\u6309\u4e0b\u65f6\u53d8\u6697\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728 Android \u4e0a\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/next/touchablenativefeedback"}),(0,a.kt)("strong",{parentName:"a"},"TouchableNativeFeedback")),"\uff0c\u5b83\u4f1a\u5728\u7528\u6237\u624b\u6307\u6309\u4e0b\u65f6\u5f62\u6210\u7c7b\u4f3c\u58a8\u6c34\u6d9f\u6f2a\u7684\u89c6\u89c9\u6548\u679c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",p({parentName:"p"},{href:"/docs/next/touchableopacity"}),(0,a.kt)("strong",{parentName:"a"},"TouchableOpacity")),"\u4f1a\u5728\u7528\u6237\u624b\u6307\u6309\u4e0b\u65f6\u964d\u4f4e\u6309\u94ae\u7684\u900f\u660e\u5ea6\uff0c\u800c\u4e0d\u4f1a\u6539\u53d8\u80cc\u666f\u7684\u989c\u8272\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u60f3\u5728\u5904\u7406\u70b9\u51fb\u4e8b\u4ef6\u7684\u540c\u65f6\u4e0d\u663e\u793a\u4efb\u4f55\u89c6\u89c9\u53cd\u9988\uff0c\u5219\u9700\u8981\u4f7f\u7528",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/next/touchablewithoutfeedback"}),(0,a.kt)("strong",{parentName:"a"},"TouchableWithoutFeedback")),"\u3002"))),(0,a.kt)("p",null,"\u67d0\u4e9b\u573a\u666f\u4e2d\u4f60\u53ef\u80fd\u9700\u8981\u68c0\u6d4b\u7528\u6237\u662f\u5426\u8fdb\u884c\u4e86\u957f\u6309\u64cd\u4f5c\u3002\u53ef\u4ee5\u5728\u4e0a\u9762\u5217\u51fa\u7684\u4efb\u610f\u7ec4\u4ef6\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"onLongPress"),"\u5c5e\u6027\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u793a\u4f8b\uff1a"),(0,a.kt)("div",p({},{className:"snack-player","data-snack-name":"Touchables","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Alert%2C%20Platform%2C%20StyleSheet%2C%20Text%2C%20TouchableHighlight%2C%20TouchableOpacity%2C%20TouchableNativeFeedback%2C%20TouchableWithoutFeedback%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20Touchables%20extends%20Component%20%7B%0A%20%20_onPressButton()%20%7B%0A%20%20%20%20Alert.alert('You%20tapped%20the%20button!')%0A%20%20%7D%0A%0A%20%20_onLongPressButton()%20%7B%0A%20%20%20%20Alert.alert('You%20long-pressed%20the%20button!')%0A%20%20%7D%0A%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis._onPressButton%7D%20underlayColor%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableHighlight%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7Bthis._onPressButton%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableOpacity%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CTouchableNativeFeedback%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20background%3D%7BPlatform.OS%20%3D%3D%3D%20'android'%20%3F%20TouchableNativeFeedback.SelectableBackground()%20%3A%20''%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableNativeFeedback%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableNativeFeedback%3E%0A%20%20%20%20%20%20%20%20%3CTouchableWithoutFeedback%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bthis._onPressButton%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchableWithoutFeedback%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableWithoutFeedback%3E%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%20onPress%3D%7Bthis._onPressButton%7D%20onLongPress%3D%7Bthis._onLongPressButton%7D%20underlayColor%3D%22white%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.button%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.buttonText%7D%3ETouchable%20with%20Long%20Press%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20paddingTop%3A%2060%2C%0A%20%20%20%20alignItems%3A%20'center'%0A%20%20%7D%2C%0A%20%20button%3A%20%7B%0A%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20width%3A%20260%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20backgroundColor%3A%20'%232196F3'%0A%20%20%7D%2C%0A%20%20buttonText%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20padding%3A%2020%2C%0A%20%20%20%20color%3A%20'white'%0A%20%20%7D%0A%7D)","data-snack-dependencies":"","data-snack-platform":"android","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("h2",p({},{id:"\u5728\u5217\u8868\u4e2d\u4e0a\u4e0b\u6ed1\u52a8\u5728\u89c6\u56fe\u4e0a\u5de6\u53f3\u6ed1\u52a8\u4ee5\u53ca\u53cc\u6307\u7f29\u653e"}),"\u5728\u5217\u8868\u4e2d\u4e0a\u4e0b\u6ed1\u52a8\u3001\u5728\u89c6\u56fe\u4e0a\u5de6\u53f3\u6ed1\u52a8\u4ee5\u53ca\u53cc\u6307\u7f29\u653e"),(0,a.kt)("p",null,"\u53e6\u4e00\u4e2a\u5728\u79fb\u52a8\u5e94\u7528\u4e2d\u5e38\u89c1\u7684\u624b\u52bf\u5c31\u662f\u6ed1\u52a8\u3002\u7528\u6237\u4f1a\u5728\u5217\u8868\u4e2d\u4e0a\u4e0b\u6ed1\u52a8\uff0c\u6216\u662f\u5728\u89c6\u56fe\u4e0a\u5de6\u53f3\u6ed1\u52a8\u3002\u8981\u5904\u7406\u8fd9\u6837\u7684\u624b\u52bf\uff0c\u4f60\u53ef\u4ee5\u770b\u4e00\u4e0b",(0,a.kt)("a",p({parentName:"p"},{href:"/docs/next/using-a-scrollview"}),"\u5982\u4f55\u4f7f\u7528\u6eda\u52a8\u89c6\u56fe"),"\u8fd9\u7bc7\u6587\u6863\u3002"),(0,a.kt)("h2",p({},{id:"known-issues"}),"Known issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/facebook/react-native/issues/29308#issuecomment-792864162"}),"react-native#29308"),": The touch area never extends past the parent view bounds and on Android negative margin is not supported.")))}k.isMDXComponent=!0},88469:function(e,t,n){t.Z=n.p+"assets/images/Button-b053d1b4ecdc78a87ce72711549ba2ca.png"}}]);