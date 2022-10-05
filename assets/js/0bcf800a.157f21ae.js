"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[49115],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,v=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(v,i(i({ref:t},c),{},{components:n})):a.createElement(v,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86386:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(27378),r=n(38944),l="tabItem_wHwb",i=Object.defineProperty,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function u({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&c(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(l,n)},{hidden:t}),e)}},27789:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(27378),r=n(38944),l=n(14185),i=n(27886),o=n(77184),p=n(12112),s="tabList_J5MA",c="tabItem_l0OV",u=Object.defineProperty,m=Object.defineProperties,d=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&h(e,n,t[n]);if(v)for(var n of v(t))f.call(t,n)&&h(e,n,t[n]);return e};function N(e){var t,n;const{lazy:l,block:u,defaultValue:v,values:b,groupId:f,className:h}=e,N=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),T=null!=b?b:N.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,i.l)(T,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===v?v:null!=(n=null!=v?v:null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)?n:N[0].props.value;if(null!==g&&!T.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${T.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,o.U)(),[E,V]=(0,a.useState)(g),C=[],{blockElementScrollPositionUntilNextRender:_}=(0,p.o5)();if(null!=f){const e=w[f];null!=e&&e!==E&&T.some((t=>t.value===e))&&V(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),a=T[n].value;a!==E&&(_(t),V(a),null!=f&&O(f,String(a)))},S=e=>{var t,n;let a=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;a=null!=(t=C[n])?t:C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;a=null!=(n=C[t])?n:C[C.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},h)},T.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(l=k({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:e=>C.push(e),onKeyDown:S,onFocus:x,onClick:x},n),i={className:(0,r.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":E===e})},m(l,d(i))),null!=t?t:e);var l,i}))),l?(0,a.cloneElement)(N.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function T(e){const t=(0,l.Z)();return a.createElement(N,k({key:String(t)},e))}},45063:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return b},default:function(){return T},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return k}});var a=n(35318),r=n(27789),l=n(86386),i=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&m(e,n,t[n]);return e};const v={id:"building-for-tv",title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",hide_table_of_contents:!0},b=void 0,f={unversionedId:"building-for-tv",id:"building-for-tv",title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",description:"\u76ee\u524d\u7684 React Native \u5e94\u7528\u53ea\u9700\u5728 JavaScript \u7aef\u7b80\u5355\u4fee\u6539\u751a\u81f3\u65e0\u9700\u4fee\u6539\uff0c\u5728\u7535\u89c6\u548c\u673a\u9876\u76d2\u8bbe\u5907\u4e0a\u5c31\u57fa\u672c\u53ef\u7528\u4e86\u3002",source:"@site/../cndocs/building-for-tv.md",sourceDirName:".",slug:"/building-for-tv",permalink:"/docs/next/building-for-tv",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/building-for-tv.md",tags:[],version:"current",frontMatter:{id:"building-for-tv",title:"\u4e3a\u7535\u89c6\u548c\u673a\u9876\u76d2\u5236\u4f5c\u5e94\u7528",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"\u96c6\u6210\u5230 Android Fragment",permalink:"/docs/next/integration-with-android-fragment"},next:{title:"\u591a\u5e73\u53f0\u652f\u6301",permalink:"/docs/next/out-of-tree-platforms"}},h={},k=[{value:"\u7f16\u8bd1\u4fee\u6539",id:"\u7f16\u8bd1\u4fee\u6539",level:2},{value:"\u4ee3\u7801\u4fee\u6539",id:"\u4ee3\u7801\u4fee\u6539",level:2},{value:"\u7f16\u8bd1\u53d8\u66f4",id:"\u7f16\u8bd1\u53d8\u66f4",level:2},{value:"\u4ee3\u7801\u4fee\u6539",id:"\u4ee3\u7801\u4fee\u6539-1",level:2}],N={toc:k};function T(e){var t,n=e,{components:i}=n,m=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},N),m),o(t,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"\u76ee\u524d\u7684 React Native \u5e94\u7528\u53ea\u9700\u5728 JavaScript \u7aef\u7b80\u5355\u4fee\u6539\u751a\u81f3\u65e0\u9700\u4fee\u6539\uff0c\u5728\u7535\u89c6\u548c\u673a\u9876\u76d2\u8bbe\u5907\u4e0a\u5c31\u57fa\u672c\u53ef\u7528\u4e86\u3002"),(0,a.kt)(r.Z,{groupId:"tv",defaultValue:"androidtv",values:[{label:"Android TV",value:"androidtv"},{label:"\ud83d\udea7 tvOS",value:"tvos"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"androidtv",mdxType:"TabItem"},(0,a.kt)("h2",d({},{id:"\u7f16\u8bd1\u4fee\u6539"}),"\u7f16\u8bd1\u4fee\u6539"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"\u539f\u751f\u7aef"),": \u5728 Android TV \u4e0a\u8fd0\u884c React Native \u9879\u76ee\u8bf7\u5148\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),"\u4e2d\u52a0\u5165\u4e0b\u5217\u914d\u7f6e\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-xml"}),'  \x3c!-- \u52a0\u5165\u81ea\u5b9a\u4e49\u7684banner\u56fe\u4f5c\u4e3aTV\u8bbe\u5907\u4e0a\u7684\u56fe\u6807 --\x3e\n <application\n  ...\n  android:banner="@drawable/tv_banner"\n  >\n    ...\n    <intent-filter>\n      ...\n      \x3c!-- Needed to properly create a launch intent when running on Android TV --\x3e\n      <category android:name="android.intent.category.LEANBACK_LAUNCHER"/>\n    </intent-filter>\n    ...\n  </application>\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"JavaScript \u7aef"),": \u5bf9\u4e8e\u7535\u89c6\u8bbe\u5907\u7684\u68c0\u6d4b\u4ee3\u7801\u5df2\u7ecf\u52a0\u5165\u5230\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"Platform"),"\u6a21\u5757\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u68c0\u6d4b\u5f53\u524d\u8fd0\u884c\u8bbe\u5907\u662f\u5426\u662f\u7535\u89c6\u8bbe\u5907\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),"import { Platform } from 'react-native';\nconst running_on_tv = Platform.isTV;\n")),(0,a.kt)("h2",d({},{id:"\u4ee3\u7801\u4fee\u6539"}),"\u4ee3\u7801\u4fee\u6539"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"\u8bbf\u95ee\u53ef\u70b9\u51fb\u7684\u63a7\u4ef6"),"\uff1a\u5728Android TV\u4e0a\u8fd0\u884c\u65f6\uff0cAndroid \u6846\u67b6\u5c06\u6839\u636e\u89c6\u56fe\u4e2d\u53ef\u805a\u7126\u5143\u7d20\u7684\u76f8\u5bf9\u4f4d\u7f6e\u81ea\u52a8\u5e94\u7528\u5b9a\u5411\u5bfc\u822a\u65b9\u6848\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"Touchable"),"\u7cfb\u5217\u7ec4\u4ef6\u6dfb\u52a0\u4e86\u68c0\u6d4b\u7126\u70b9\u53d8\u5316\u7684\u4ee3\u7801\uff0c\u5e76\u4f7f\u7528\u73b0\u6709\u65b9\u6cd5\u6b63\u786e\u8bbe\u7f6e\u7ec4\u4ef6\u7684\u6837\u5f0f\uff0c\u4ee5\u53ca\u5728\u4f7f\u7528\u7535\u89c6\u9065\u63a7\u5668\u9009\u62e9\u89c6\u56fe\u65f6\u542f\u52a8\u6b63\u786e\u7684\u64cd\u4f5c\uff0c\u56e0\u6b64",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableHighlight"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableNativeFeedback"),"\u5c06\u6309\u9884\u671f\u5de5\u4f5c\u3002\u7279\u522b\u5730\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onFocus"),"\u4f1a\u5728\u53ef\u89e6\u6478\u89c6\u56fe\u6210\u4e3a\u7126\u70b9\u65f6\u6267\u884c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onBlur"),"\u4f1a\u5728\u53ef\u89e6\u6478\u89c6\u56fe\u5931\u53bb\u7126\u70b9\u65f6\u6267\u884c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPress"),"\u4f1a\u5728\u6309\u4e0b\u7535\u89c6\u9065\u63a7\u5668\u4e0a\u7684\u201c\u9009\u62e9\u201d\u6309\u94ae\u5b9e\u9645\u9009\u62e9\u53ef\u89e6\u6478\u89c6\u56fe\u65f6\u6267\u884c\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"\u7535\u89c6\u9065\u63a7\u5668/\u952e\u76d8\u8f93\u5165"),"\uff1a\u4e00\u4e2a\u65b0\u7684\u539f\u751f\u7c7b",(0,a.kt)("inlineCode",{parentName:"p"},"ReactAndroidTVRootViewHelper"),"\u4e3a\u7535\u89c6\u9065\u63a7\u5668\u4e8b\u4ef6\u8bbe\u7f6e\u6309\u952e\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u3002 \u5f53\u7535\u89c6\u9065\u63a7\u5668\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u8be5\u7c7b\u4f1a\u89e6\u53d1\u4e00\u4e2a JS \u4e8b\u4ef6\u3002\u6b64\u4e8b\u4ef6\u5c06\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript \u5bf9\u8c61\u7684\u5b9e\u4f8b\u83b7\u53d6\u3002\u9700\u8981\u5b9e\u73b0\u81ea\u5b9a\u4e49\u5904\u7406\u7535\u89c6\u9065\u63a7\u5668\u4e8b\u4ef6\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler"),"\u7684\u5b9e\u4f8b\u5e76\u76d1\u542c\u8fd9\u4e9b\u4e8b\u4ef6\uff0c\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"const TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function(cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({board: cmp.state.board.move(2)});\n      } else if(evt && evt.eventType === 'up') {\n        cmp.setState({board: cmp.state.board.move(1)});\n      } else if(evt && evt.eventType === 'left') {\n        cmp.setState({board: cmp.state.board.move(0)});\n      } else if(evt && evt.eventType === 'down') {\n        cmp.setState({board: cmp.state.board.move(3)});\n      } else if(evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"\u5f00\u53d1\u8005\u83dc\u5355\u652f\u6301"),"\uff1a\u5728\u6a21\u62df\u5668\u4e0a\uff0ccmd-M \u4f1a\u8c03\u51fa\u5f00\u53d1\u8005\u83dc\u5355\uff0c\u7c7b\u4f3c\u4e8e\u5b89\u5353\u3002\u8981\u5728\u5b9e\u9645\u7684 Android TV \u8bbe\u5907\u4e0a\u542f\u52a8\u5b83\uff0c\u8bf7\u6309\u83dc\u5355\u6309\u94ae\u6216\u957f\u6309\u9065\u63a7\u5668\u4e0a\u7684\u5feb\u8fdb\u6309\u94ae\u3002\uff08\u8bf7\u4e0d\u8981\u6447\u6643 Android TV \u8bbe\u5907\uff0c\u8fd9\u5c06\u4e0d\u8d77\u4f5c\u7528 :) \uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"\u5df2\u77e5\u95ee\u9898"),":"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TextInput"),"\u7ec4\u4ef6\u4e0d\u80fd\u83b7\u5f97\u7126\u70b9\uff0c\u8bf7\u53c2\u8003\u8fd9\u91cc\u8ba8\u8bba\u7684",(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/facebook/react-native/pull/16500#issuecomment-629285638"}),"\u4e34\u65f6\u89e3\u51b3\u65b9\u6848"),"\u3002"))))),(0,a.kt)(l.Z,{value:"tvos",mdxType:"TabItem"},(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," \u8bf7\u4f7f\u7528",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/react-native-community/react-native-tvos"}),"react-native-tvos"),"\u4ee3\u66ff\u3002")),(0,a.kt)("h2",d({},{id:"\u7f16\u8bd1\u53d8\u66f4"}),"\u7f16\u8bd1\u53d8\u66f4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"\u539f\u751f\u7aef"),": React Native \u751f\u6210\u7684 Xcode \u9879\u76ee\u73b0\u90fd\u5df2\u5305\u542b Apple TV \u7f16\u8bd1\u76ee\u6807\uff0c\u5176\u540d\u5b57\u90fd\u5e26\u6709'-tvOS'\u540e\u7f00\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"react-native init"),": \u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"react-native init"),"\u547d\u4ee4\u521b\u5efa\u7684\u65b0\u9879\u76ee\u4f1a\u81ea\u52a8\u5728 Xcode \u65b0\u9879\u76ee\u4e2d\u5305\u542b Apple TV \u7f16\u8bd1\u76ee\u6807\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"JavaScript \u7aef"),": \u5bf9\u4e8e\u7535\u89c6\u8bbe\u5907\u7684\u68c0\u6d4b\u4ee3\u7801\u5df2\u7ecf\u52a0\u5165\u5230\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"Platform"),"\u6a21\u5757\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\u6765\u68c0\u6d4b\u5f53\u524d\u8fd0\u884c\u8bbe\u5907\u662f\u5426\u662f\u7535\u89c6\u8bbe\u5907\uff1a"))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"import { Platform } from 'react-native';\nconst running_on_tv = Platform.isTV;\n\n// \u5982\u679c\u4f60\u60f3\u66f4\u7cbe\u786e\u5730\u9488\u5bf9tvOS\u8bbe\u5907\uff08\u5373\u6392\u9664Android\u8bbe\u5907\uff09\uff0c\n// \u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u7801\uff1a\nconst running_on_apple_tv = Platform.isTVOS;\n")),(0,a.kt)("h2",d({},{id:"\u4ee3\u7801\u4fee\u6539-1"}),"\u4ee3\u7801\u4fee\u6539"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"General support for tvOS"),": Apple TV specific changes in native code are all wrapped by the TARGET_OS_TV define. These include changes to suppress APIs that are not supported on tvOS (e.g. web views, sliders, switches, status bar, etc.), and changes to support user input from the TV remote or keyboard.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Common codebase"),": Since tvOS and iOS share most Objective-C and JavaScript code in common, most documentation for iOS applies equally to tvOS.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"\u8bbf\u95ee\u53ef\u70b9\u51fb\u7684\u63a7\u4ef6"),": When running on Apple TV, the native view class is ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVView"),", which has additional methods to make use of the tvOS focus engine. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Touchable")," mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableHighlight")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchableOpacity")," will work as expected. In particular:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onFocus")," will be executed when the touchable view goes into focus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onBlur")," will be executed when the touchable view goes out of focus"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPress"),' will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"TV remote/keyboard input"),": A new native class, ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVRemoteHandler"),", sets up gesture recognizers for TV remote events. When TV remote events occur, this class fires notifications that are picked up by ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVNavigationEventEmitter")," (a subclass of ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTEventEmitter"),"), that fires a JS event. This event will be picked up by instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"TVEventHandler")," and listen for these events, as in the following code:"))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"var TVEventHandler = require('TVEventHandler');\n\nclass Game2048 extends React.Component {\n  _tvEventHandler: any;\n\n  _enableTVEventHandler() {\n    this._tvEventHandler = new TVEventHandler();\n    this._tvEventHandler.enable(this, function(cmp, evt) {\n      if (evt && evt.eventType === 'right') {\n        cmp.setState({ board: cmp.state.board.move(2) });\n      } else if (evt && evt.eventType === 'up') {\n        cmp.setState({ board: cmp.state.board.move(1) });\n      } else if (evt && evt.eventType === 'left') {\n        cmp.setState({ board: cmp.state.board.move(0) });\n      } else if (evt && evt.eventType === 'down') {\n        cmp.setState({ board: cmp.state.board.move(3) });\n      } else if (evt && evt.eventType === 'playPause') {\n        cmp.restartGame();\n      }\n    });\n  }\n\n  _disableTVEventHandler() {\n    if (this._tvEventHandler) {\n      this._tvEventHandler.disable();\n      delete this._tvEventHandler;\n    }\n  }\n\n  componentDidMount() {\n    this._enableTVEventHandler();\n  }\n\n  componentWillUnmount() {\n    this._disableTVEventHandler();\n  }\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Dev Menu support"),": On the simulator, cmd-D will bring up the developer menu, similar to iOS. To bring it up on a real Apple TV device, make a long press on the play/pause button on the remote. (Please do not shake the Apple TV device, that will not work :) )")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"TV remote animations"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"RCTTVView")," native code implements Apple-recommended parallax animations to help guide the eye as the user navigates through views. The animations can be disabled or adjusted with new optional view properties.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Back navigation with the TV remote menu button"),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"BackHandler")," component, originally written to support the Android back button, now also supports back navigation on the Apple TV using the menu button on the TV remote."))))))}T.isMDXComponent=!0}}]);