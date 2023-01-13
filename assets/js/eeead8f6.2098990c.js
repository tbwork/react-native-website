"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[66082],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,w=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return n?o.createElement(w,r(r({ref:t},u),{},{components:n})):o.createElement(w,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>d,default:()=>C,frontMatter:()=>c,metadata:()=>w,toc:()=>b});var o=n(35318),i=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&u(e,n,t[n]);return e};const c={id:"custom-webview-ios",title:"Custom WebView"},d=void 0,w={unversionedId:"custom-webview-ios",id:"version-0.71/custom-webview-ios",title:"Custom WebView",description:"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code.",source:"@site/versioned_docs/version-0.71/custom-webview-ios.md",sourceDirName:".",slug:"/custom-webview-ios",permalink:"/docs/custom-webview-ios",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/custom-webview-ios.md",tags:[],version:"0.71",frontMatter:{id:"custom-webview-ios",title:"Custom WebView"}},v={},b=[{value:"Native Code",id:"native-code",level:2},{value:"Adding New Events and Properties",id:"adding-new-events-and-properties",level:3},{value:"Extending Existing Events",id:"extending-existing-events",level:3},{value:"JavaScript Interface",id:"javascript-interface",level:2}],h={toc:b};function C(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var o in e)l.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=m(m({},h),u),a(t,r({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"While the built-in web view has a lot of features, it is not possible to handle every use-case in React Native. You can, however, extend the web view with native code without forking React Native or duplicating all the existing web view code."),(0,o.kt)("p",null,"Before you do this, you should be familiar with the concepts in ",(0,o.kt)("a",m({parentName:"p"},{href:"native-components-ios"}),"native UI components"),". You should also familiarise yourself with the ",(0,o.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/Views/RCTWebViewManager.m"}),"native code for web views"),", as you will have to use this as a reference when implementing new features\u2014although a deep understanding is not required."),(0,o.kt)("h2",m({},{id:"native-code"}),"Native Code"),(0,o.kt)("p",null,"Like for regular native components, you need a view manager and an web view."),(0,o.kt)("p",null,"For the view, you'll need to make a subclass of ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTWebView"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),'// RCTCustomWebView.h\n#import <React/RCTWebView.h>\n\n@interface RCTCustomWebView : RCTWebView\n\n@end\n\n// RCTCustomWebView.m\n#import "RCTCustomWebView.h"\n\n@interface RCTCustomWebView ()\n\n@end\n\n@implementation RCTCustomWebView { }\n\n@end\n')),(0,o.kt)("p",null,"For the view manager, you need to make a subclass ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTWebViewManager"),". You must still include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"(UIView *)view")," that returns your custom view"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"RCT_EXPORT_MODULE()")," tag")),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),'// RCTCustomWebViewManager.h\n#import <React/RCTWebViewManager.h>\n\n@interface RCTCustomWebViewManager : RCTWebViewManager\n\n@end\n\n// RCTCustomWebViewManager.m\n#import "RCTCustomWebViewManager.h"\n#import "RCTCustomWebView.h"\n\n@interface RCTCustomWebViewManager () <RCTWebViewDelegate>\n\n@end\n\n@implementation RCTCustomWebViewManager { }\n\nRCT_EXPORT_MODULE()\n\n- (UIView *)view\n{\n  RCTCustomWebView *webView = [RCTCustomWebView new];\n  webView.delegate = self;\n  return webView;\n}\n\n@end\n')),(0,o.kt)("h3",m({},{id:"adding-new-events-and-properties"}),"Adding New Events and Properties"),(0,o.kt)("p",null,"Adding new properties and events is the same as regular UI components. For properties, you define an ",(0,o.kt)("inlineCode",{parentName:"p"},"@property")," in the header. For events, you define a ",(0,o.kt)("inlineCode",{parentName:"p"},"RCTDirectEventBlock")," in the view's ",(0,o.kt)("inlineCode",{parentName:"p"},"@interface"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),"// RCTCustomWebView.h\n@property (nonatomic, copy) NSString *finalUrl;\n\n// RCTCustomWebView.m\n@interface RCTCustomWebView ()\n\n@property (nonatomic, copy) RCTDirectEventBlock onNavigationCompleted;\n\n@end\n")),(0,o.kt)("p",null,"Then expose it in the view manager's ",(0,o.kt)("inlineCode",{parentName:"p"},"@implementation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),"// RCTCustomWebViewManager.m\nRCT_EXPORT_VIEW_PROPERTY(onNavigationCompleted, RCTDirectEventBlock)\nRCT_EXPORT_VIEW_PROPERTY(finalUrl, NSString)\n")),(0,o.kt)("h3",m({},{id:"extending-existing-events"}),"Extending Existing Events"),(0,o.kt)("p",null,"You should refer to ",(0,o.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/React/Views/RCTWebView.m"}),"RCTWebView.m")," in the React Native codebase to see what handlers are available and how they are implemented. You can extend any methods here to provide extra functionality."),(0,o.kt)("p",null,"By default, most methods aren't exposed from RCTWebView. If you need to expose them, you need to create an ",(0,o.kt)("a",m({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/CustomizingExistingClasses/CustomizingExistingClasses.html"}),"Objective C category"),", and then expose all the methods you need to use."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),"// RCTWebView+Custom.h\n#import <React/RCTWebView.h>\n\n@interface RCTWebView (Custom)\n- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType;\n- (NSMutableDictionary<NSString *, id> *)baseEvent;\n@end\n")),(0,o.kt)("p",null,"Once these are exposed, you can reference them in your custom web view class."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-objc"}),'// RCTCustomWebView.m\n\n// Remember to import the category file.\n#import "RCTWebView+Custom.h"\n\n- (BOOL)webView:(__unused UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request\n navigationType:(UIWebViewNavigationType)navigationType\n{\n  BOOL allowed = [super webView:webView shouldStartLoadWithRequest:request navigationType:navigationType];\n\n  if (allowed) {\n    NSString* url = request.URL.absoluteString;\n    if (url && [url isEqualToString:_finalUrl]) {\n      if (_onNavigationCompleted) {\n        NSMutableDictionary<NSString *, id> *event = [self baseEvent];\n        _onNavigationCompleted(event);\n      }\n    }\n  }\n\n  return allowed;\n}\n')),(0,o.kt)("h2",m({},{id:"javascript-interface"}),"JavaScript Interface"),(0,o.kt)("p",null,"To use your custom web view, you'll need to create a class for it. Your class must:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Export all the prop types from ",(0,o.kt)("inlineCode",{parentName:"li"},"WebView.propTypes")),(0,o.kt)("li",{parentName:"ul"},"Return a ",(0,o.kt)("inlineCode",{parentName:"li"},"WebView")," component with the prop ",(0,o.kt)("inlineCode",{parentName:"li"},"nativeConfig.component")," set to your native component (see below)")),(0,o.kt)("p",null,"To get your native component, you must use ",(0,o.kt)("inlineCode",{parentName:"p"},"requireNativeComponent"),": the same as for regular custom components. However, you must pass in an extra third argument, ",(0,o.kt)("inlineCode",{parentName:"p"},"WebView.extraNativeComponentConfig"),". This third argument contains prop types that are only required for native code."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"import React, {Component, PropTypes} from 'react';\nimport {WebView, requireNativeComponent, NativeModules} from 'react-native';\nconst {CustomWebViewManager} = NativeModules;\n\nexport default class CustomWebView extends Component {\n  static propTypes = WebView.propTypes;\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          viewManager: CustomWebViewManager,\n        }}\n      />\n    );\n  }\n}\n\nconst RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  WebView.extraNativeComponentConfig\n);\n")),(0,o.kt)("p",null,"If you want to add custom props to your native component, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeConfig.props")," on the web view. For iOS, you should also set the ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeConfig.viewManager")," prop with your custom WebView ViewManager as in the example above."),(0,o.kt)("p",null,"For events, the event handler must always be set to a function. This means it isn't safe to use the event handler directly from ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props"),", as the user might not have provided one. The standard approach is to create a event handler in your class, and then invoking the event handler given in ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props")," if it exists."),(0,o.kt)("p",null,"If you are unsure how something should be implemented from the JS side, look at ",(0,o.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Components/WebView/WebView.ios.js"}),"WebView.ios.js")," in the React Native source."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"export default class CustomWebView extends Component {\n  static propTypes = {\n    ...WebView.propTypes,\n    finalUrl: PropTypes.string,\n    onNavigationCompleted: PropTypes.func,\n  };\n\n  static defaultProps = {\n    finalUrl: 'about:blank',\n  };\n\n  _onNavigationCompleted = (event) => {\n    const {onNavigationCompleted} = this.props;\n    onNavigationCompleted && onNavigationCompleted(event);\n  };\n\n  render() {\n    return (\n      <WebView\n        {...this.props}\n        nativeConfig={{\n          component: RCTCustomWebView,\n          props: {\n            finalUrl: this.props.finalUrl,\n            onNavigationCompleted: this._onNavigationCompleted,\n          },\n          viewManager: CustomWebViewManager,\n        }}\n      />\n    );\n  }\n}\n")),(0,o.kt)("p",null,"Just like for regular native components, you must provide all your prop types in the component to have them forwarded on to the native component. However, if you have some prop types that are only used internally in component, you can add them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeOnly")," property of the third argument previously mentioned. For event handlers, you have to use the value ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," instead of a regular prop type."),(0,o.kt)("p",null,"For example, if you wanted to add an internal event handler called ",(0,o.kt)("inlineCode",{parentName:"p"},"onScrollToBottom"),", you would use,"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"const RCTCustomWebView = requireNativeComponent(\n  'RCTCustomWebView',\n  CustomWebView,\n  {\n    ...WebView.extraNativeComponentConfig,\n    nativeOnly: {\n      ...WebView.extraNativeComponentConfig.nativeOnly,\n      onScrollToBottom: true,\n    },\n  }\n);\n")))}C.isMDXComponent=!0}}]);