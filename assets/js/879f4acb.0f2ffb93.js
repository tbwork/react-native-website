"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[46140],{35318:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return s}});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(t),s=r,g=u["".concat(l,".").concat(s)]||u[s]||d[s]||i;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1123:function(e,n,t){t.r(n),t.d(n,{assets:function(){return w},contentTitle:function(){return g},default:function(){return h},frontMatter:function(){return s},metadata:function(){return v},toc:function(){return k}});var a=t(35318),r=t(86527),i=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&d(e,t,n[t]);if(l)for(var t of l(n))m.call(n,t)&&d(e,t,n[t]);return e};const s={id:"native-components-android",title:"Android \u539f\u751fUI\u7ec4\u4ef6"},g=void 0,v={unversionedId:"native-components-android",id:"native-components-android",title:"Android \u539f\u751fUI\u7ec4\u4ef6",description:"\u5728\u5982\u4eca\u7684 App \u4e2d\uff0c\u5df2\u7ecf\u6709\u6210\u5343\u4e0a\u4e07\u7684\u539f\u751f UI \u90e8\u4ef6\u4e86\u2014\u2014\u5176\u4e2d\u7684\u4e00\u4e9b\u662f\u5e73\u53f0\u7684\u4e00\u90e8\u5206\uff0c\u53e6\u4e00\u4e9b\u53ef\u80fd\u6765\u81ea\u4e8e\u4e00\u4e9b\u7b2c\u4e09\u65b9\u5e93\uff0c\u800c\u4e14\u53ef\u80fd\u4f60\u81ea\u5df1\u8fd8\u6536\u85cf\u4e86\u5f88\u591a\u3002React Native \u5df2\u7ecf\u5c01\u88c5\u4e86\u5927\u90e8\u5206\u6700\u5e38\u89c1\u7684\u7ec4\u4ef6\uff0c\u8b6c\u5982ScrollView\u548cTextInput\uff0c\u4f46\u4e0d\u53ef\u80fd\u5c01\u88c5\u5168\u90e8\u7ec4\u4ef6\u3002\u800c\u4e14\uff0c\u8bf4\u4e0d\u5b9a\u4f60\u66fe\u7ecf\u4e3a\u81ea\u5df1\u4ee5\u524d\u7684 App \u8fd8\u5c01\u88c5\u8fc7\u4e00\u4e9b\u7ec4\u4ef6\uff0cReact Native \u80af\u5b9a\u6ca1\u6cd5\u5305\u542b\u5b83\u4eec\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u5728 React Naitve \u5e94\u7528\u7a0b\u5e8f\u4e2d\u5c01\u88c5\u548c\u690d\u5165\u5df2\u6709\u7684\u7ec4\u4ef6\u975e\u5e38\u7b80\u5355\u3002",source:"@site/../cndocs/native-components-android.md",sourceDirName:".",slug:"/native-components-android",permalink:"/docs/next/native-components-android",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-components-android.md",tags:[],version:"current",frontMatter:{id:"native-components-android",title:"Android \u539f\u751fUI\u7ec4\u4ef6"},sidebar:"docs",previous:{title:"\u539f\u751f\u6a21\u5757\u914d\u7f6e",permalink:"/docs/next/native-modules-setup"},next:{title:"iOS \u539f\u751fUI\u7ec4\u4ef6",permalink:"/docs/next/native-components-ios"}},w={},k=[{value:"ImageView \u793a\u4f8b",id:"imageview-\u793a\u4f8b",level:2},{value:"1. \u521b\u5efa<code>ViewManager</code>\u7684\u5b50\u7c7b",id:"1-\u521b\u5efaviewmanager\u7684\u5b50\u7c7b",level:2},{value:"2. \u5b9e\u73b0\u65b9\u6cd5<code>createViewInstance</code>",id:"2-\u5b9e\u73b0\u65b9\u6cd5createviewinstance",level:2},{value:"3. \u901a\u8fc7<code>@ReactProp</code>\uff08\u6216<code>@ReactPropGroup</code>\uff09\u6ce8\u89e3\u6765\u5bfc\u51fa\u5c5e\u6027\u7684\u8bbe\u7f6e\u65b9\u6cd5\u3002",id:"3-\u901a\u8fc7reactprop\u6216reactpropgroup\u6ce8\u89e3\u6765\u5bfc\u51fa\u5c5e\u6027\u7684\u8bbe\u7f6e\u65b9\u6cd5",level:2},{value:"4. Register the <code>ViewManager</code>",id:"4-register-the-viewmanager",level:2},{value:"5. \u5b9e\u73b0\u5bf9\u5e94\u7684 JavaScript \u6a21\u5757",id:"5-\u5b9e\u73b0\u5bf9\u5e94\u7684-javascript-\u6a21\u5757",level:2},{value:"1. Create a <code>Fragment</code>",id:"1-create-a-fragment",level:2},{value:"2. Create the <code>ViewManager</code> subclass",id:"2-create-the-viewmanager-subclass",level:2},{value:"3. Register the <code>ViewManager</code>",id:"3-register-the-viewmanager",level:2},{value:"4. Register the <code>Package</code>",id:"4-register-the-package",level:2},{value:"5. Implement the JavaScript module",id:"5-implement-the-javascript-module",level:2}],C={toc:k};function h(e){var n,t=e,{components:i}=t,d=((e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))n.indexOf(a)<0&&m.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=u(u({},C),d),o(n,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)(r.ZP,{mdxType:"NativeDeprecated"}),(0,a.kt)("p",null,"\u5728\u5982\u4eca\u7684 App \u4e2d\uff0c\u5df2\u7ecf\u6709\u6210\u5343\u4e0a\u4e07\u7684\u539f\u751f UI \u90e8\u4ef6\u4e86\u2014\u2014\u5176\u4e2d\u7684\u4e00\u4e9b\u662f\u5e73\u53f0\u7684\u4e00\u90e8\u5206\uff0c\u53e6\u4e00\u4e9b\u53ef\u80fd\u6765\u81ea\u4e8e\u4e00\u4e9b\u7b2c\u4e09\u65b9\u5e93\uff0c\u800c\u4e14\u53ef\u80fd\u4f60\u81ea\u5df1\u8fd8\u6536\u85cf\u4e86\u5f88\u591a\u3002React Native \u5df2\u7ecf\u5c01\u88c5\u4e86\u5927\u90e8\u5206\u6700\u5e38\u89c1\u7684\u7ec4\u4ef6\uff0c\u8b6c\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput"),"\uff0c\u4f46\u4e0d\u53ef\u80fd\u5c01\u88c5\u5168\u90e8\u7ec4\u4ef6\u3002\u800c\u4e14\uff0c\u8bf4\u4e0d\u5b9a\u4f60\u66fe\u7ecf\u4e3a\u81ea\u5df1\u4ee5\u524d\u7684 App \u8fd8\u5c01\u88c5\u8fc7\u4e00\u4e9b\u7ec4\u4ef6\uff0cReact Native \u80af\u5b9a\u6ca1\u6cd5\u5305\u542b\u5b83\u4eec\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u5728 React Naitve \u5e94\u7528\u7a0b\u5e8f\u4e2d\u5c01\u88c5\u548c\u690d\u5165\u5df2\u6709\u7684\u7ec4\u4ef6\u975e\u5e38\u7b80\u5355\u3002"),(0,a.kt)("p",null,"\u548c\u539f\u751f\u6a21\u5757\u5411\u5bfc\u4e00\u6837\uff0c\u672c\u5411\u5bfc\u4e5f\u662f\u4e00\u4e2a\u76f8\u5bf9\u9ad8\u7ea7\u7684\u5411\u5bfc\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5df2\u7ecf\u5bf9 Android \u7f16\u7a0b\u9887\u6709\u7ecf\u9a8c\u3002\u672c\u5411\u5bfc\u4f1a\u5f15\u5bfc\u4f60\u5982\u4f55\u6784\u5efa\u4e00\u4e2a\u539f\u751f UI \u7ec4\u4ef6\uff0c\u5e26\u9886\u4f60\u4e86\u89e3 React Native \u6838\u5fc3\u5e93\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"ImageView"),"\u7ec4\u4ef6\u7684\u5177\u4f53\u5b9e\u73b0\u3002"),(0,a.kt)("h2",u({},{id:"imageview-\u793a\u4f8b"}),"ImageView \u793a\u4f8b"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u91cc\uff0c\u6211\u4eec\u6765\u770b\u770b\u4e3a\u4e86\u8ba9 JavaScript \u4e2d\u53ef\u4ee5\u4f7f\u7528 ImageView\uff0c\u9700\u8981\u505a\u54ea\u4e9b\u51c6\u5907\u5de5\u4f5c\u3002"),(0,a.kt)("p",null,"\u539f\u751f\u89c6\u56fe\u9700\u8981\u88ab\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager"),"\u7684\u6d3e\u751f\u7c7b\uff08\u6216\u8005\u66f4\u5e38\u89c1\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleViewManager"),"\u7684\u6d3e\u751f\u7c7b\uff09\u521b\u5efa\u548c\u7ba1\u7406\u3002\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleViewManager"),"\u53ef\u4ee5\u7528\u4e8e\u8fd9\u4e2a\u573a\u666f\uff0c\u662f\u56e0\u4e3a\u5b83\u80fd\u591f\u5305\u542b\u66f4\u591a\u516c\u5171\u7684\u5c5e\u6027\uff0c\u8b6c\u5982\u80cc\u666f\u989c\u8272\u3001\u900f\u660e\u5ea6\u3001Flexbox \u5e03\u5c40\u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u5b50\u7c7b\u672c\u8d28\u4e0a\u90fd\u662f\u5355\u4f8b\u2014\u2014React Native \u53ea\u4f1a\u4e3a\u6bcf\u4e2a\u7ba1\u7406\u5668\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f8b\u3002\u5b83\u4eec\u521b\u5efa\u539f\u751f\u7684\u89c6\u56fe\u5e76\u63d0\u4f9b\u7ed9",(0,a.kt)("inlineCode",{parentName:"p"},"NativeViewHierarchyManager"),"\uff0cNativeViewHierarchyManager \u5219\u4f1a\u53cd\u8fc7\u6765\u59d4\u6258\u5b83\u4eec\u5728\u9700\u8981\u7684\u65f6\u5019\u53bb\u8bbe\u7f6e\u548c\u66f4\u65b0\u89c6\u56fe\u7684\u5c5e\u6027\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager"),"\u8fd8\u4f1a\u4ee3\u7406\u89c6\u56fe\u7684\u6240\u6709\u59d4\u6258\uff0c\u5e76\u7ed9 JavaScript \u53d1\u56de\u5bf9\u5e94\u7684\u4e8b\u4ef6\u3002"),(0,a.kt)("p",null,"\u63d0\u4f9b\u539f\u751f\u89c6\u56fe\u5f88\u7b80\u5355\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a ViewManager \u7684\u5b50\u7c7b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"createViewInstance"),"\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bfc\u51fa\u89c6\u56fe\u7684\u5c5e\u6027\u8bbe\u7f6e\u5668\uff1a\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"@ReactProp"),"\uff08\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"@ReactPropGroup"),"\uff09\u6ce8\u89e3\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u628a\u8fd9\u4e2a\u89c6\u56fe\u7ba1\u7406\u7c7b\u6ce8\u518c\u5230\u5e94\u7528\u7a0b\u5e8f\u5305\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"createViewManagers"),"\u91cc\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 JavaScript \u6a21\u5757\u3002")),(0,a.kt)("h2",u({},{id:"1-\u521b\u5efaviewmanager\u7684\u5b50\u7c7b"}),"1. \u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"h2"},"ViewManager"),"\u7684\u5b50\u7c7b"),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u91cc\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u89c6\u56fe\u7ba1\u7406\u7c7b",(0,a.kt)("inlineCode",{parentName:"p"},"ReactImageManager"),"\uff0c\u5b83\u7ee7\u627f\u81ea",(0,a.kt)("inlineCode",{parentName:"p"},"SimpleViewManager<ReactImageView>"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"ReactImageView"),"\u662f\u8fd9\u4e2a\u89c6\u56fe\u7ba1\u7406\u7c7b\u6240\u7ba1\u7406\u7684\u5bf9\u8c61\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u81ea\u5b9a\u4e49\u7684\u539f\u751f\u89c6\u56fe\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"getName"),"\u65b9\u6cd5\u8fd4\u56de\u7684\u540d\u5b57\u4f1a\u7528\u4e8e\u5728 JavaScript \u7aef\u5f15\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'...\n\npublic class ReactImageManager extends SimpleViewManager<ReactImageView> {\n\n  public static final String REACT_CLASS = "RCTImageView";\n  ReactApplicationContext mCallerContext;\n\n  public ReactImageManager(ReactApplicationContext reactContext) {\n    mCallerContext = reactContext;\n  }\n\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n')),(0,a.kt)("h2",u({},{id:"2-\u5b9e\u73b0\u65b9\u6cd5createviewinstance"}),"2. \u5b9e\u73b0\u65b9\u6cd5",(0,a.kt)("inlineCode",{parentName:"h2"},"createViewInstance")),(0,a.kt)("p",null,"\u89c6\u56fe\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"createViewInstance"),"\u4e2d\u521b\u5efa\uff0c\u4e14\u5e94\u5f53\u628a\u81ea\u5df1\u521d\u59cb\u5316\u4e3a\u9ed8\u8ba4\u7684\u72b6\u6001\u3002\u6240\u6709\u5c5e\u6027\u7684\u8bbe\u7f6e\u90fd\u901a\u8fc7\u540e\u7eed\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"updateView"),"\u6765\u8fdb\u884c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"  @Override\n  public ReactImageView createViewInstance(ThemedReactContext context) {\n    return new ReactImageView(context, Fresco.newDraweeControllerBuilder(), null, mCallerContext);\n  }\n")),(0,a.kt)("h2",u({},{id:"3-\u901a\u8fc7reactprop\u6216reactpropgroup\u6ce8\u89e3\u6765\u5bfc\u51fa\u5c5e\u6027\u7684\u8bbe\u7f6e\u65b9\u6cd5"}),"3. \u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"h2"},"@ReactProp"),"\uff08\u6216",(0,a.kt)("inlineCode",{parentName:"h2"},"@ReactPropGroup"),"\uff09\u6ce8\u89e3\u6765\u5bfc\u51fa\u5c5e\u6027\u7684\u8bbe\u7f6e\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u8981\u5bfc\u51fa\u7ed9 JavaScript \u4f7f\u7528\u7684\u5c5e\u6027\uff0c\u9700\u8981\u7533\u660e\u5e26\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp"),"\uff08\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup"),"\uff09\u6ce8\u89e3\u7684\u8bbe\u7f6e\u65b9\u6cd5\u3002\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u8981\u4fee\u6539\u5c5e\u6027\u7684\u89c6\u56fe\u5b9e\u4f8b\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8981\u8bbe\u7f6e\u7684\u5c5e\u6027\u503c\u3002\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u5fc5\u987b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"void"),"\uff0c\u800c\u4e14\u8bbf\u95ee\u63a7\u5236\u5fc5\u987b\u88ab\u58f0\u660e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"public"),"\u3002JavaScript \u6240\u5f97\u77e5\u7684\u5c5e\u6027\u7c7b\u578b\u4f1a\u7531\u8be5\u65b9\u6cd5\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u7c7b\u578b\u6765\u81ea\u52a8\u51b3\u5b9a\u3002\u652f\u6301\u7684\u7c7b\u578b\u6709\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"double"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Integer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadableArray"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadableMap"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp"),"\u6ce8\u89e3\u5fc5\u987b\u5305\u542b\u4e00\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u53c2\u6570",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"\u3002\u8fd9\u4e2a\u53c2\u6570\u6307\u5b9a\u4e86\u5bf9\u5e94\u5c5e\u6027\u5728 JavaScript \u7aef\u7684\u540d\u5b57\u3002"),(0,a.kt)("p",null,"\u9664\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"name"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp"),"\u6ce8\u89e3\u8fd8\u63a5\u53d7\u8fd9\u4e9b\u53ef\u9009\u7684\u53c2\u6570\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"defaultBoolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultInt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultFloat"),"\u3002\u8fd9\u4e9b\u53c2\u6570\u5fc5\u987b\u662f\u5bf9\u5e94\u7684\u57fa\u7840\u7c7b\u578b\u7684\u503c\uff08\u4e5f\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),'\uff09\uff0c\u8fd9\u4e9b\u503c\u4f1a\u88ab\u4f20\u9012\u7ed9 setter \u65b9\u6cd5\uff0c\u4ee5\u514d JavaScript \u7aef\u67d0\u4e9b\u60c5\u51b5\u4e0b\u5728\u7ec4\u4ef6\u4e2d\u79fb\u9664\u4e86\u5bf9\u5e94\u7684\u5c5e\u6027\u3002\u6ce8\u610f\u8fd9\u4e2a"\u9ed8\u8ba4"\u503c\u53ea\u5bf9\u57fa\u672c\u7c7b\u578b\u751f\u6548\uff0c\u5bf9\u4e8e\u5176\u4ed6\u7684\u7c7b\u578b\u800c\u8a00\uff0c\u5f53\u5bf9\u5e94\u7684\u5c5e\u6027\u5220\u9664\u65f6\uff0c',(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\u4f1a\u4f5c\u4e3a\u9ed8\u8ba4\u503c\u63d0\u4f9b\u7ed9\u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup"),"\u6765\u6ce8\u89e3\u7684\u8bbe\u7f6e\u65b9\u6cd5\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp"),"\u4e0d\u540c\u3002\u8bf7\u53c2\u89c1",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup"),"\u6ce8\u89e3\u7c7b\u6e90\u4ee3\u7801\u4e2d\u7684\u6587\u6863\u6765\u83b7\u53d6\u66f4\u591a\u8be6\u60c5\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u91cd\u8981\uff01")," \u5728 ReactJS \u91cc\uff0c\u4fee\u6539\u4e00\u4e2a\u5c5e\u6027\u4f1a\u5f15\u53d1\u4e00\u6b21\u5bf9\u8bbe\u7f6e\u65b9\u6cd5\u7684\u8c03\u7528\u3002\u6709\u4e00\u79cd\u4fee\u6539\u60c5\u51b5\u662f\uff0c\u79fb\u9664\u6389\u4e4b\u524d\u8bbe\u7f6e\u7684\u5c5e\u6027\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u8bbe\u7f6e\u65b9\u6cd5\u4e5f\u4e00\u6837\u4f1a\u88ab\u8c03\u7528\uff0c\u5e76\u4e14\u201c\u9ed8\u8ba4\u201d\u503c\u4f1a\u88ab\u4f5c\u4e3a\u53c2\u6570\u63d0\u4f9b\uff08\u5bf9\u4e8e\u57fa\u7840\u7c7b\u578b\u6765\u8bf4\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"defaultBoolean"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"defaultFloat"),"\u7b49",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp"),"\u7684\u5c5e\u6027\u63d0\u4f9b\uff0c\u800c\u5bf9\u4e8e\u590d\u6742\u7c7b\u578b\u6765\u8bf4\u53c2\u6570\u5219\u4f1a\u8bbe\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'  @ReactProp(name = "src")\n  public void setSrc(ReactImageView view, @Nullable ReadableArray sources) {\n    view.setSource(sources);\n  }\n\n  @ReactProp(name = "borderRadius", defaultFloat = 0f)\n  public void setBorderRadius(ReactImageView view, float borderRadius) {\n    view.setBorderRadius(borderRadius);\n  }\n\n  @ReactProp(name = ViewProps.RESIZE_MODE)\n  public void setResizeMode(ReactImageView view, @Nullable String resizeMode) {\n    view.setScaleType(ImageResizeMode.toScaleType(resizeMode));\n  }\n')),(0,a.kt)("h2",u({},{id:"4-register-the-viewmanager"}),"4. Register the ",(0,a.kt)("inlineCode",{parentName:"h2"},"ViewManager")),(0,a.kt)("p",null,"\u6ce8\u518c",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager")),(0,a.kt)("p",null,"\u5728 Java \u4e2d\u7684\u6700\u540e\u4e00\u6b65\u5c31\u662f\u628a\u89c6\u56fe\u63a7\u5236\u5668\u6ce8\u518c\u5230\u5e94\u7528\u4e2d\u3002\u8fd9\u548c",(0,a.kt)("a",u({parentName:"p"},{href:"/docs/next/native-modules-android"}),"\u539f\u751f\u6a21\u5757"),"\u7684\u6ce8\u518c\u65b9\u6cd5\u7c7b\u4f3c\uff0c\u552f\u4e00\u7684\u533a\u522b\u662f\u6211\u4eec\u628a\u5b83\u653e\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"createViewManagers"),"\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u91cc\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"  @Override\n  public List<ViewManager> createViewManagers(\n                            ReactApplicationContext reactContext) {\n    return Arrays.<ViewManager>asList(\n      new ReactImageManager(reactContext)\n    );\n  }\n")),(0,a.kt)("p",null,"\u5b8c\u6210\u4e0a\u9762\u8fd9\u4e9b\u4ee3\u7801\u540e\uff0c\u8bf7\u4e00\u5b9a\u8bb0\u5f97\u8981\u91cd\u65b0\u7f16\u8bd1\uff01\uff08\u8fd0\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"yarn android"),"\u547d\u4ee4\uff09"),(0,a.kt)("h2",u({},{id:"5-\u5b9e\u73b0\u5bf9\u5e94\u7684-javascript-\u6a21\u5757"}),"5. \u5b9e\u73b0\u5bf9\u5e94\u7684 JavaScript \u6a21\u5757"),(0,a.kt)("p",null,"\u6574\u4e2a\u8fc7\u7a0b\u7684\u6700\u540e\u4e00\u6b65\u5c31\u662f\u521b\u5efa JavaScript \u6a21\u5757\u5e76\u4e14\u5b9a\u4e49 Java \u548c JavaScript \u4e4b\u95f4\u7684\u63a5\u53e3\u5c42\u3002\u6211\u4eec\u5efa\u8bae\u4f60\u4f7f\u7528 Flow \u6216\u662f TypeScript \u6765\u89c4\u8303\u5b9a\u4e49\u63a5\u53e3\u7684\u5177\u4f53\u7ed3\u6784\uff0c\u6216\u8005\u81f3\u5c11\u7528\u6ce8\u91ca\u8bf4\u660e\u6e05\u695a\uff08\u8001\u7248\u672c\u7684 RN \u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"propTypes"),"\u6765\u89c4\u8303\u63a5\u53e3\u5b9a\u4e49\uff0c\u8fd9\u4e00\u505a\u6cd5\u5df2\u4e0d\u518d\u652f\u6301\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"// ImageView.js\n\nimport { requireNativeComponent } from 'react-native';\n\n/**\n * Composes `View`.\n *\n * - src: string\n * - borderRadius: number\n * - resizeMode: 'cover' | 'contain' | 'stretch'\n */\nmodule.exports = requireNativeComponent('RCTImageView');\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"requireNativeComponent"),"\u76ee\u524d\u53ea\u63a5\u53d7\u4e00\u4e2a\u53c2\u6570\uff0c\u5373\u539f\u751f\u89c6\u56fe\u7684\u540d\u5b57\u3002\u5982\u679c\u4f60\u8fd8\u9700\u8981\u505a\u4e00\u4e9b\u590d\u6742\u7684\u903b\u8f91\u8b6c\u5982\u4e8b\u4ef6\u5904\u7406\uff0c\u90a3\u4e48\u53ef\u4ee5\u628a\u539f\u751f\u7ec4\u4ef6\u7528\u4e00\u4e2a\u666e\u901a React \u7ec4\u4ef6\u5c01\u88c5\u3002\u540e\u6587\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"MyCustomView"),"\u4f8b\u5b50\u91cc\u6f14\u793a\u4e86\u8fd9\u79cd\u7528\u6cd5\u3002"),(0,a.kt)("h1",u({},{id:"\u4e8b\u4ef6"}),"\u4e8b\u4ef6"),(0,a.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u77e5\u9053\u4e86\u600e\u4e48\u5bfc\u51fa\u4e00\u4e2a\u539f\u751f\u89c6\u56fe\u7ec4\u4ef6\uff0c\u5e76\u4e14\u6211\u4eec\u53ef\u4ee5\u5728 JS \u91cc\u5f88\u65b9\u4fbf\u7684\u63a7\u5236\u5b83\u4e86\u3002\u4e0d\u8fc7\u6211\u4eec\u600e\u4e48\u624d\u80fd\u5904\u7406\u6765\u81ea\u7528\u6237\u7684\u4e8b\u4ef6\uff0c\u8b6c\u5982\u7f29\u653e\u64cd\u4f5c\u6216\u8005\u62d6\u52a8\uff1f\u5f53\u4e00\u4e2a\u539f\u751f\u4e8b\u4ef6\u53d1\u751f\u7684\u65f6\u5019\uff0c\u5b83\u5e94\u8be5\u4e5f\u80fd\u89e6\u53d1 JavaScript \u7aef\u89c6\u56fe\u4e0a\u7684\u4e8b\u4ef6\uff0c\u8fd9\u4e24\u4e2a\u89c6\u56fe\u4f1a\u4f9d\u636e",(0,a.kt)("inlineCode",{parentName:"p"},"getId()"),"\u800c\u5173\u8054\u5728\u4e00\u8d77\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'class MyCustomView extends View {\n   ...\n   public void onReceiveNativeEvent() {\n      WritableMap event = Arguments.createMap();\n      event.putString("message", "MyMessage");\n      ReactContext reactContext = (ReactContext)getContext();\n      reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(\n          getId(),\n          "topChange",\n          event);\n    }\n}\n')),(0,a.kt)("p",null,"\u8981\u628a\u4e8b\u4ef6\u540d",(0,a.kt)("inlineCode",{parentName:"p"},"topChange"),"\u6620\u5c04\u5230 JavaScript \u7aef\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"onChange"),"\u56de\u8c03\u5c5e\u6027\u4e0a\uff0c\u9700\u8981\u5728\u4f60\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager"),"\u4e2d\u8986\u76d6",(0,a.kt)("inlineCode",{parentName:"p"},"getExportedCustomBubblingEventTypeConstants"),"\u65b9\u6cd5\uff0c\u5e76\u5728\u5176\u4e2d\u8fdb\u884c\u6ce8\u518c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'public class ReactImageManager extends SimpleViewManager<MyCustomView> {\n    ...\n    public Map getExportedCustomBubblingEventTypeConstants() {\n        return MapBuilder.builder()\n            .put(\n                "topChange",\n                MapBuilder.of(\n                    "phasedRegistrationNames",\n                    MapBuilder.of("bubbled", "onChange")))\n                    .build();\n    }\n}\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u56de\u8c03\u4f1a\u4f20\u9012\u4e00\u4e2a\u539f\u751f\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u4e00\u822c\u6765\u8bf4\u6211\u4eec\u4f1a\u5728\u5c01\u88c5\u7ec4\u4ef6\u91cc\u8fdb\u884c\u5904\u7406\u4ee5\u4fbf\u5916\u90e8\u4f7f\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"// MyCustomView.js\n\nclass MyCustomView extends React.Component {\n  constructor(props) {\n    super(props);\n    this._onChange = this._onChange.bind(this);\n  }\n  _onChange(event: Event) {\n    if (!this.props.onChangeMessage) {\n      return;\n    }\n    this.props.onChangeMessage(event.nativeEvent.message);\n  }\n  render() {\n    return (\n      <RCTMyCustomView\n        {...this.props}\n        onChange={this._onChange}\n      />\n    );\n  }\n}\n\nconst RCTMyCustomView = requireNativeComponent(`RCTMyCustomView`);\n")),(0,a.kt)("h1",u({},{id:"integration-with-an-android-fragment-example"}),"Integration with an Android Fragment Example"),(0,a.kt)("p",null,"In order to integrate existing Native UI elements to your React Native app, you might need to use Android Fragments to give you a more granular control over your native component than returning a ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," from your ",(0,a.kt)("inlineCode",{parentName:"p"},"ViewManager"),". You will need this if you want to add custom logic that is tied to your view with the help of ",(0,a.kt)("a",u({parentName:"p"},{href:"https://developer.android.com/guide/fragments/lifecycle"}),"lifecycle methods"),", such as ",(0,a.kt)("inlineCode",{parentName:"p"},"onViewCreated"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onPause"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"onResume"),". The following steps will show you how to do it:"),(0,a.kt)("h2",u({},{id:"1-create-a-fragment"}),"1. Create a ",(0,a.kt)("inlineCode",{parentName:"h2"},"Fragment")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MyFragment.java")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"// replace with your package\npackage com.mypackage;\nimport android.os.Bundle;\nimport android.view.LayoutInflater;\nimport android.view.View;\nimport android.view.ViewGroup;\nimport androidx.fragment.app.Fragment;\n// replace with your view's import\nimport com.mypackage.CustomView;\npublic class MyFragment extends Fragment {\n    CustomView customView;\n    @Override\n    public View onCreateView(LayoutInflater inflater, ViewGroup parent, Bundle savedInstanceState) {\n        super.onCreateView(inflater, parent, savedInstanceState);\n        customView = new CustomView();\n        return customView; // this CustomView could be any view that you want to render\n    }\n    @Override\n    public void onViewCreated(View view, Bundle savedInstanceState) {\n        super.onViewCreated(view, savedInstanceState);\n        // do any logic that should happen in an `onCreate` method, e.g:\n        // customView.onCreate(savedInstanceState);\n    }\n    @Override\n    public void onPause() {\n        super.onPause();\n        // do any logic that should happen in an `onPause` method\n        // e.g.: customView.onPause();\n    }\n    @Override\n    public void onResume() {\n        super.onResume();\n       // do any logic that should happen in an `onResume` method\n       // e.g.: customView.onResume();\n    }\n    @Override\n    public void onDestroy() {\n        super.onDestroy();\n        // do any logic that should happen in an `onDestroy` method\n        // e.g.: customView.onDestroy();\n    }\n}\n")),(0,a.kt)("h2",u({},{id:"2-create-the-viewmanager-subclass"}),"2. Create the ",(0,a.kt)("inlineCode",{parentName:"h2"},"ViewManager")," subclass"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MyViewManager.java")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),'// replace with your package\npackage com.mypackage;\nimport android.view.Choreographer;\nimport android.view.View;\nimport android.widget.FrameLayout;\nimport androidx.annotation.NonNull;\nimport androidx.annotation.Nullable;\nimport androidx.fragment.app.FragmentActivity;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.bridge.ReadableArray;\nimport com.facebook.react.common.MapBuilder;\nimport com.facebook.react.uimanager.annotations.ReactProp;\nimport com.facebook.react.uimanager.annotations.ReactPropGroup;\nimport com.facebook.react.uimanager.ViewGroupManager;\nimport com.facebook.react.uimanager.ThemedReactContext;\nimport java.util.Map;\npublic class MyViewManager extends ViewGroupManager<FrameLayout> {\n  public static final String REACT_CLASS = "MyViewManager";\n  public final int COMMAND_CREATE = 1;\n  ReactApplicationContext reactContext;\n  public MyViewManager(ReactApplicationContext reactContext) {\n    this.reactContext = reactContext;\n  }\n  @Override\n  public String getName() {\n    return REACT_CLASS;\n  }\n  /**\n   * Return a FrameLayout which will later hold the Fragment\n   */\n  @Override\n  public FrameLayout createViewInstance(ThemedReactContext reactContext) {\n    return new FrameLayout(reactContext);\n  }\n  /**\n   * Map the "create" command to an integer\n   */\n  @Nullable\n  @Override\n  public Map<String, Integer> getCommandsMap() {\n    return MapBuilder.of("create", COMMAND_CREATE);\n  }\n  /**\n   * Handle "create" command (called from JS) and call createFragment method\n   */\n  @Override\n  public void receiveCommand(@NonNull FrameLayout root, String commandId, @Nullable ReadableArray args) {\n    super.receiveCommand(root, commandId, args);\n    int reactNativeViewId = args.getInt(0);\n    int commandIdInt = Integer.parseInt(commandId);\n    switch (commandIdInt) {\n      case COMMAND_CREATE:\n        createFragment(root, reactNativeViewId);\n        break;\n      default: {}\n    }\n  }\n  /**\n   * Replace your React Native view with a custom fragment\n   */\n  public void createFragment(FrameLayout root, int reactNativeViewId) {\n    ViewGroup parentView = (ViewGroup) root.findViewById(reactNativeViewId).getParent();\n    setupLayout(parentView);\n    final MyFragment myFragment = new MyFragment();\n    FragmentActivity activity = (FragmentActivity) reactContext.getCurrentActivity();\n    activity.getSupportFragmentManager()\n            .beginTransaction()\n            .replace(reactNativeViewId, myFragment, String.valueOf(reactNativeViewId))\n            .commit();\n  }\n  public void setupLayout(View view) {\n    Choreographer.getInstance().postFrameCallback(new Choreographer.FrameCallback() {\n      @Override\n      public void doFrame(long frameTimeNanos) {\n        manuallyLayoutChildren(view);\n        view.getViewTreeObserver().dispatchOnGlobalLayout();\n        Choreographer.getInstance().postFrameCallback(this);\n      }\n    });\n  }\n  /**\n   * Layout all children properly\n   */\n  public void manuallyLayoutChildren(View view) {\n      // propWidth and propHeight coming from react-native props\n      int width = propWidth;\n      int height = propHeight;\n      view.measure(\n              View.MeasureSpec.makeMeasureSpec(width, View.MeasureSpec.EXACTLY),\n              View.MeasureSpec.makeMeasureSpec(height, View.MeasureSpec.EXACTLY));\n      view.layout(0, 0, width, height);\n  }\n')),(0,a.kt)("h2",u({},{id:"3-register-the-viewmanager"}),"3. Register the ",(0,a.kt)("inlineCode",{parentName:"h2"},"ViewManager")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MyPackage.java")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"// replace with your package\npackage com.mypackage;\nimport com.facebook.react.ReactPackage;\nimport com.facebook.react.bridge.ReactApplicationContext;\nimport com.facebook.react.uimanager.ViewManager;\nimport java.util.Arrays;\nimport java.util.List;\npublic class MyPackage implements ReactPackage {\n   @Override\n   public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {\n       return Arrays.<ViewManager>asList(\n            new MyViewManager(reactContext)\n       );\n   }\n}\n")),(0,a.kt)("h2",u({},{id:"4-register-the-package"}),"4. Register the ",(0,a.kt)("inlineCode",{parentName:"h2"},"Package")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MainApplication.java")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-java"}),"    @Override\n    protected List<ReactPackage> getPackages() {\n      List<ReactPackage> packages = new PackageList(this).getPackages();\n      ...\n      packages.add(new MyPackage());\n      return packages;\n    }\n")),(0,a.kt)("h2",u({},{id:"5-implement-the-javascript-module"}),"5. Implement the JavaScript module"),(0,a.kt)("p",null,"I. ",(0,a.kt)("inlineCode",{parentName:"p"},"MyViewManager.jsx")),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"import { requireNativeComponent } from 'react-native';\nexport const MyViewManager =\n  requireNativeComponent('MyViewManager');\n")),(0,a.kt)("p",null,"II. ",(0,a.kt)("inlineCode",{parentName:"p"}," MyView.jsx")," calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React, { useEffect, useRef } from 'react';\nimport { UIManager, findNodeHandle } from 'react-native';\nimport { MyViewManager } from './my-view-manager';\nconst createFragment = (viewId) =>\n  UIManager.dispatchViewManagerCommand(\n    viewId,\n    UIManager.MyViewManager.Commands.create.toString(), // we are calling the 'create' command\n    [viewId]\n  );\nexport const MyView = ({ style }) => {\n  const ref = useRef(null);\n  useEffect(() => {\n    const viewId = findNodeHandle(ref.current);\n    createFragment(viewId!);\n  }, []);\n  return (\n    <MyViewManager\n      style={{\n        ...(style || {}),\n        height: style && style.height !== undefined ? style.height || '100%',\n        width: style && style.width !== undefined ? style.width || '100%'\n      }}\n      ref={ref}\n    />\n  );\n};\n")),(0,a.kt)("p",null,"If you want to expose property setters using ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactProp")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"@ReactPropGroup"),") annotation: ",(0,a.kt)("em",{parentName:"p"},"see ImageView example above")))}h.isMDXComponent=!0},86527:function(e,n,t){t.d(n,{ZP:function(){return s}});var a=t(35318),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&m(e,t,n[t]);if(p)for(var t of p(n))c.call(n,t)&&m(e,t,n[t]);return e};const u={toc:[]};function s(e){var n,t=e,{components:r}=t,m=((e,n)=>{var t={};for(var a in e)l.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&p)for(var a of p(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=d(d({},u),m),i(n,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",d({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Native Module and Native Components are our stable technologies used by the legacy architecture.\nThey will be deprecated in the future when the New Architecture will be stable. The New Architecture uses ",(0,a.kt)("a",d({parentName:"p"},{href:"./the-new-architecture/pillars-turbomodules"}),"TurboModule")," and ",(0,a.kt)("a",d({parentName:"p"},{href:"./the-new-architecture/pillars-fabric-components"}),"Fabric Components")," to achieve similar results.")))}s.isMDXComponent=!0}}]);