"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[41583],{35318:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>C});var a=t(27378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),C=r,m=c["".concat(s,".").concat(C)]||c[C]||d[C]||l;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function C(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},11674:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),o={defaultGuide:"native",defaultOs:r?"macos":l?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(27378),r=t(38944);const l="tabItem_wHwb";var o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;function d({children:e,hidden:n,className:t}){return a.createElement("div",((e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&u(e,t,n[t]);return e})({role:"tabpanel",className:(0,r.Z)(l,t)},{hidden:n}),e)}},27789:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(27378),r=t(38944),l=t(14185),o=t(27886),i=t(77184),s=t(12112);const p="tabList_J5MA",u="tabItem_l0OV";var d=Object.defineProperty,c=Object.defineProperties,C=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))k.call(n,t)&&f(e,t,n[t]);if(m)for(var t of m(n))v.call(n,t)&&f(e,t,n[t]);return e};function y(e){var n,t;const{lazy:l,block:d,defaultValue:m,values:k,groupId:v,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=k?k:y.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),h=(0,o.l)(g,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:S}=(0,i.U)(),[w,A]=(0,a.useState)(N),P=[],{blockElementScrollPositionUntilNextRender:R}=(0,s.o5)();if(null!=v){const e=D[v];null!=e&&e!==w&&g.some((n=>n.value===e))&&A(e)}const x=e=>{const n=e.currentTarget,t=P.indexOf(n),a=g[t].value;a!==w&&(R(n),A(a),null!=v&&S(v,String(a)))},B=e=>{var n,t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;a=null!=(n=P[t])?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;a=null!=(t=P[n])?t:P[P.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},f)},g.map((({value:e,label:n,attributes:t})=>{return a.createElement("li",(l=b({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>P.push(e),onKeyDown:B,onClick:x},t),o={className:(0,r.Z)("tabs__item",u,null==t?void 0:t.className,{"tabs__item--active":w===e})},c(l,C(o))),null!=n?n:e);var l,o}))),l?(0,a.cloneElement)(y.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function g(e){const n=(0,l.Z)();return a.createElement(y,b({key:String(n)},e))}},77873:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>k,metadata:()=>f,toc:()=>y});var a=t(35318),r=t(27789),l=t(86386),o=t(11674),i=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,C=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&C(e,t,n[t]);if(u)for(var t of u(n))c.call(n,t)&&C(e,t,n[t]);return e};const k={id:"panresponder",title:"PanResponder"},v=void 0,f={unversionedId:"panresponder",id:"version-0.71/panresponder",title:"PanResponder",description:"PanResponder\u7c7b\u53ef\u4ee5\u5c06\u591a\u70b9\u89e6\u6478\u64cd\u4f5c\u534f\u8c03\u6210\u4e00\u4e2a\u624b\u52bf\u3002\u5b83\u4f7f\u5f97\u4e00\u4e2a\u5355\u70b9\u89e6\u6478\u53ef\u4ee5\u63a5\u53d7\u66f4\u591a\u7684\u89e6\u6478\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u8bc6\u522b\u7b80\u5355\u7684\u591a\u70b9\u89e6\u6478\u624b\u52bf\u3002",source:"@site/versioned_docs/version-0.71/panresponder.md",sourceDirName:".",slug:"/panresponder",permalink:"/docs/panresponder",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/panresponder.md",tags:[],version:"0.71",frontMatter:{id:"panresponder",title:"PanResponder"},sidebar:"api",previous:{title:"Linking",permalink:"/docs/linking"},next:{title:"PixelRatio",permalink:"/docs/pixelratio"}},b={},y=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>create()</code>",id:"create",level:3}],g={toc:y};function h(e){var n,t=e,{components:i}=t,C=((e,n)=>{var t={};for(var a in e)d.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))n.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=m(m({},g),C),s(n,p({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder"),"\u7c7b\u53ef\u4ee5\u5c06\u591a\u70b9\u89e6\u6478\u64cd\u4f5c\u534f\u8c03\u6210\u4e00\u4e2a\u624b\u52bf\u3002\u5b83\u4f7f\u5f97\u4e00\u4e2a\u5355\u70b9\u89e6\u6478\u53ef\u4ee5\u63a5\u53d7\u66f4\u591a\u7684\u89e6\u6478\u64cd\u4f5c\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u8bc6\u522b\u7b80\u5355\u7684\u591a\u70b9\u89e6\u6478\u624b\u52bf\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b",(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder"),"\u4f1a\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"InteractionManager"),"\u6765\u963b\u6b62\u957f\u65f6\u95f4\u8fd0\u884c\u7684 JS \u4e8b\u4ef6\u6253\u65ad\u5f53\u524d\u7684\u624b\u52bf\u6d3b\u52a8\u3002"),(0,a.kt)("p",null,"\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5bf9",(0,a.kt)("a",m({parentName:"p"},{href:"/docs/gesture-responder-system"}),"\u89e6\u6478\u54cd\u5e94\u7cfb\u7edf"),"\u54cd\u5e94\u5668\u7684\u53ef\u9884\u6d4b\u7684\u5305\u88c5\u3002\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u5904\u7406\u51fd\u6570\uff0c\u5b83\u5728\u539f\u751f\u4e8b\u4ef6\u4e4b\u5916\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b0\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState"),"\u5bf9\u8c61\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"onPanResponderMove: (event, gestureState) => {}\n")),(0,a.kt)("p",null,"\u539f\u751f\u4e8b\u4ef6\u662f\u6307\u7531\u4ee5\u4e0b\u5b57\u6bb5\u7ec4\u6210\u7684\u5408\u6210\u89e6\u6478\u4e8b\u4ef6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nativeEvent"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"changedTouches")," - \u5728\u4e0a\u4e00\u6b21\u4e8b\u4ef6\u4e4b\u540e\uff0c\u6240\u6709\u53d1\u751f\u53d8\u5316\u7684\u89e6\u6478\u4e8b\u4ef6\u7684\u6570\u7ec4\u96c6\u5408\uff08\u5373\u4e0a\u4e00\u6b21\u4e8b\u4ef6\u540e\uff0c\u6240\u6709\u79fb\u52a8\u8fc7\u7684\u89e6\u6478\u70b9\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identifier")," - \u89e6\u6478\u70b9\u7684 ID"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"locationX")," - \u89e6\u6478\u70b9\u76f8\u5bf9\u4e8e\u7236\u5143\u7d20\u7684\u6a2a\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"locationY")," - \u89e6\u6478\u70b9\u76f8\u5bf9\u4e8e\u7236\u5143\u7d20\u7684\u7eb5\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pageX")," - \u89e6\u6478\u70b9\u76f8\u5bf9\u4e8e\u6839\u5143\u7d20\u7684\u6a2a\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pageY")," - \u89e6\u6478\u70b9\u76f8\u5bf9\u4e8e\u6839\u5143\u7d20\u7684\u7eb5\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"target")," - \u89e6\u6478\u70b9\u6240\u5728\u7684\u5143\u7d20 ID"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp")," - \u89e6\u6478\u4e8b\u4ef6\u7684\u65f6\u95f4\u6233\uff0c\u53ef\u7528\u4e8e\u79fb\u52a8\u901f\u5ea6\u7684\u8ba1\u7b97"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"touches")," - \u5f53\u524d\u5c4f\u5e55\u4e0a\u7684\u6240\u6709\u89e6\u6478\u70b9\u7684\u96c6\u5408")))),(0,a.kt)("p",null,"\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState"),"\u5bf9\u8c61\u6709\u5982\u4e0b\u7684\u5b57\u6bb5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stateID")," - \u89e6\u6478\u72b6\u6001\u7684 ID\u3002\u5728\u5c4f\u5e55\u4e0a\u6709\u81f3\u5c11\u4e00\u4e2a\u89e6\u6478\u70b9\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a ID \u4f1a\u4e00\u76f4\u6709\u6548\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"moveX")," - \u6700\u8fd1\u4e00\u6b21\u79fb\u52a8\u65f6\u7684\u5c4f\u5e55\u6a2a\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"moveY")," - \u6700\u8fd1\u4e00\u6b21\u79fb\u52a8\u65f6\u7684\u5c4f\u5e55\u7eb5\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x0")," - \u5f53\u54cd\u5e94\u5668\u4ea7\u751f\u65f6\u7684\u5c4f\u5e55\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"y0")," - \u5f53\u54cd\u5e94\u5668\u4ea7\u751f\u65f6\u7684\u5c4f\u5e55\u5750\u6807"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dx")," - \u4ece\u89e6\u6478\u64cd\u4f5c\u5f00\u59cb\u65f6\u7684\u7d2f\u8ba1\u6a2a\u5411\u8def\u7a0b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dy")," - \u4ece\u89e6\u6478\u64cd\u4f5c\u5f00\u59cb\u65f6\u7684\u7d2f\u8ba1\u7eb5\u5411\u8def\u7a0b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vx")," - \u5f53\u524d\u7684\u6a2a\u5411\u79fb\u52a8\u901f\u5ea6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vy")," - \u5f53\u524d\u7684\u7eb5\u5411\u79fb\u52a8\u901f\u5ea6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"numberActiveTouches")," - \u5f53\u524d\u5728\u5c4f\u5e55\u4e0a\u7684\u6709\u6548\u89e6\u6478\u70b9\u7684\u6570\u91cf")),(0,a.kt)("h3",m({},{id:"\u57fa\u672c\u7528\u6cd5"}),"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"  componentWillMount: function() {\n    this._panResponder = PanResponder.create({\n      // \u8981\u6c42\u6210\u4e3a\u54cd\u5e94\u8005\uff1a\n      onStartShouldSetPanResponder: (evt, gestureState) => true,\n      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,\n      onMoveShouldSetPanResponder: (evt, gestureState) => true,\n      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,\n\n      onPanResponderGrant: (evt, gestureState) => {\n        // \u5f00\u59cb\u624b\u52bf\u64cd\u4f5c\u3002\u7ed9\u7528\u6237\u4e00\u4e9b\u89c6\u89c9\u53cd\u9988\uff0c\u8ba9\u4ed6\u4eec\u77e5\u9053\u53d1\u751f\u4e86\u4ec0\u4e48\u4e8b\u60c5\uff01\n\n        // gestureState.{x,y} \u73b0\u5728\u4f1a\u88ab\u8bbe\u7f6e\u4e3a0\n      },\n      onPanResponderMove: (evt, gestureState) => {\n        // \u6700\u8fd1\u4e00\u6b21\u7684\u79fb\u52a8\u8ddd\u79bb\u4e3agestureState.move{X,Y}\n\n        // \u4ece\u6210\u4e3a\u54cd\u5e94\u8005\u5f00\u59cb\u65f6\u7684\u7d2f\u8ba1\u624b\u52bf\u79fb\u52a8\u8ddd\u79bb\u4e3agestureState.d{x,y}\n      },\n      onPanResponderTerminationRequest: (evt, gestureState) => true,\n      onPanResponderRelease: (evt, gestureState) => {\n        // \u7528\u6237\u653e\u5f00\u4e86\u6240\u6709\u7684\u89e6\u6478\u70b9\uff0c\u4e14\u6b64\u65f6\u89c6\u56fe\u5df2\u7ecf\u6210\u4e3a\u4e86\u54cd\u5e94\u8005\u3002\n        // \u4e00\u822c\u6765\u8bf4\u8fd9\u610f\u5473\u7740\u4e00\u4e2a\u624b\u52bf\u64cd\u4f5c\u5df2\u7ecf\u6210\u529f\u5b8c\u6210\u3002\n      },\n      onPanResponderTerminate: (evt, gestureState) => {\n        // \u53e6\u4e00\u4e2a\u7ec4\u4ef6\u5df2\u7ecf\u6210\u4e3a\u4e86\u65b0\u7684\u54cd\u5e94\u8005\uff0c\u6240\u4ee5\u5f53\u524d\u624b\u52bf\u5c06\u88ab\u53d6\u6d88\u3002\n      },\n      onShouldBlockNativeResponder: (evt, gestureState) => {\n        // \u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u51b3\u5b9a\u5f53\u524d\u7ec4\u4ef6\u662f\u5426\u5e94\u8be5\u963b\u6b62\u539f\u751f\u7ec4\u4ef6\u6210\u4e3aJS\u54cd\u5e94\u8005\n        // \u9ed8\u8ba4\u8fd4\u56detrue\u3002\u76ee\u524d\u6682\u65f6\u53ea\u652f\u6301android\u3002\n        return true;\n      },\n    });\n  },\n\n  render: function() {\n    return (\n      <View {...this._panResponder.panHandlers} />\n    );\n  },\n")),(0,a.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder")," works with ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," API to help build complex gestures in the UI. The following example contains an animated ",(0,a.kt)("inlineCode",{parentName:"p"},"View")," component which can be dragged freely across the screen"),(0,a.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"PanResponder","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20useRef%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Animated%2C%20View%2C%20StyleSheet%2C%20PanResponder%2C%20Text%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnconst%20App%20%3D%20()%20%3D%3E%20%7B%5Cn%20%20const%20pan%20%3D%20useRef(new%20Animated.ValueXY()).current%3B%5Cn%5Cn%20%20const%20panResponder%20%3D%20useRef(%5Cn%20%20%20%20PanResponder.create(%7B%5Cn%20%20%20%20%20%20onMoveShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%5Cn%20%20%20%20%20%20onPanResponderGrant%3A%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20pan.setOffset(%7B%5Cn%20%20%20%20%20%20%20%20%20%20x%3A%20pan.x._value%2C%5Cn%20%20%20%20%20%20%20%20%20%20y%3A%20pan.y._value%5Cn%20%20%20%20%20%20%20%20%7D)%3B%5Cn%20%20%20%20%20%20%7D%2C%5Cn%20%20%20%20%20%20onPanResponderMove%3A%20Animated.event(%5Cn%20%20%20%20%20%20%20%20%5B%5Cn%20%20%20%20%20%20%20%20%20%20null%2C%5Cn%20%20%20%20%20%20%20%20%20%20%7B%20dx%3A%20pan.x%2C%20dy%3A%20pan.y%20%7D%5Cn%20%20%20%20%20%20%20%20%5D%5Cn%20%20%20%20%20%20)%2C%5Cn%20%20%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20%20%20pan.flattenOffset()%3B%5Cn%20%20%20%20%20%20%7D%5Cn%20%20%20%20%7D)%5Cn%20%20).current%3B%5Cn%5Cn%20%20return%20(%5Cn%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.titleText%7D%3EDrag%20this%20box!%3C%2FText%3E%5Cn%20%20%20%20%20%20%3CAnimated.View%5Cn%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20pan.x%20%7D%2C%20%7B%20translateY%3A%20pan.y%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%7B...panResponder.panHandlers%7D%5Cn%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%5Cn%20%20%20%20%20%20%3C%2FAnimated.View%3E%5Cn%20%20%20%20%3C%2FView%3E%5Cn%20%20)%3B%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20titleText%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20lineHeight%3A%2024%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20150%2C%5Cn%20%20%20%20width%3A%20150%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%205%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,a.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"PanResponder","data-snack-description":"Example usage","data-snack-files":"%7B%22App.tsx%22%3A%7B%22type%22%3A%22CODE%22%2C%22contents%22%3A%22import%20React%2C%20%7B%20Component%20%7D%20from%20%5C%22react%5C%22%3B%5Cnimport%20%7B%20Animated%2C%20View%2C%20StyleSheet%2C%20PanResponder%2C%20Text%20%7D%20from%20%5C%22react-native%5C%22%3B%5Cn%5Cnclass%20App%20extends%20Component%20%7B%5Cn%20%20pan%20%3D%20new%20Animated.ValueXY()%3B%5Cn%20%20panResponder%20%3D%20PanResponder.create(%7B%5Cn%20%20%20%20onMoveShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%5Cn%20%20%20%20onPanResponderGrant%3A%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20this.pan.setOffset(%7B%5Cn%20%20%20%20%20%20%20%20x%3A%20this.pan.x._value%2C%5Cn%20%20%20%20%20%20%20%20y%3A%20this.pan.y._value%5Cn%20%20%20%20%20%20%7D)%3B%5Cn%20%20%20%20%7D%2C%5Cn%20%20%20%20onPanResponderMove%3A%20Animated.event(%5B%5Cn%20%20%20%20%20%20null%2C%5Cn%20%20%20%20%20%20%7B%20dx%3A%20this.pan.x%2C%20dy%3A%20this.pan.y%20%7D%5Cn%20%20%20%20%5D)%2C%5Cn%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%5Cn%20%20%20%20%20%20this.pan.flattenOffset()%3B%5Cn%20%20%20%20%7D%5Cn%20%20%7D)%3B%5Cn%5Cn%20%20render()%20%7B%5Cn%20%20%20%20return%20(%5Cn%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%5Cn%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.titleText%7D%3EDrag%20this%20box!%3C%2FText%3E%5Cn%20%20%20%20%20%20%20%20%3CAnimated.View%5Cn%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%5Cn%20%20%20%20%20%20%20%20%20%20%20%20transform%3A%20%5B%7B%20translateX%3A%20this.pan.x%20%7D%2C%20%7B%20translateY%3A%20this.pan.y%20%7D%5D%5Cn%20%20%20%20%20%20%20%20%20%20%7D%7D%5Cn%20%20%20%20%20%20%20%20%20%20%7B...this.panResponder.panHandlers%7D%5Cn%20%20%20%20%20%20%20%20%3E%5Cn%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.box%7D%20%2F%3E%5Cn%20%20%20%20%20%20%20%20%3C%2FAnimated.View%3E%5Cn%20%20%20%20%20%20%3C%2FView%3E%5Cn%20%20%20%20)%3B%5Cn%20%20%7D%5Cn%7D%5Cn%5Cnconst%20styles%20%3D%20StyleSheet.create(%7B%5Cn%20%20container%3A%20%7B%5Cn%20%20%20%20flex%3A%201%2C%5Cn%20%20%20%20alignItems%3A%20%5C%22center%5C%22%2C%5Cn%20%20%20%20justifyContent%3A%20%5C%22center%5C%22%5Cn%20%20%7D%2C%5Cn%20%20titleText%3A%20%7B%5Cn%20%20%20%20fontSize%3A%2014%2C%5Cn%20%20%20%20lineHeight%3A%2024%2C%5Cn%20%20%20%20fontWeight%3A%20%5C%22bold%5C%22%5Cn%20%20%7D%2C%5Cn%20%20box%3A%20%7B%5Cn%20%20%20%20height%3A%20150%2C%5Cn%20%20%20%20width%3A%20150%2C%5Cn%20%20%20%20backgroundColor%3A%20%5C%22blue%5C%22%2C%5Cn%20%20%20%20borderRadius%3A%205%5Cn%20%20%7D%5Cn%7D)%3B%5Cn%5Cnexport%20default%20App%3B%22%7D%7D","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,a.kt)("p",null,"\u8fd8\u53ef\u4ee5\u770b\u770b",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PanResponder/PanResponderExample.js"}),"\u5b98\u65b9\u793a\u4f8b RNTester \u4e2d\u7684 PanResponder"),"."),(0,a.kt)("hr",null),(0,a.kt)("h1",m({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",m({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,a.kt)("h3",m({},{id:"create"}),(0,a.kt)("inlineCode",{parentName:"h3"},"create()")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static create(config)\n")),(0,a.kt)("p",null,"@param {object} \u914d\u7f6e\u6240\u6709\u54cd\u5e94\u5668\u56de\u8c03\u7684\u52a0\u5f3a\u7248\u672c\uff0c\u4e0d\u4ec5\u4ec5\u5305\u62ec\u539f\u672c\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"ResponderSyntheticEvent"),"\uff0c\u8fd8\u5305\u62ec",(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder"),"\u624b\u52bf\u72b6\u6001\u7684\u56de\u8c03\u3002\u4f60\u53ea\u8981\u7b80\u5355\u7684\u628a",(0,a.kt)("inlineCode",{parentName:"p"},"onResponder*"),"\u56de\u8c03\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Responder"),"\u66ff\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"PanResponder"),"\u3002\u4e3e\u4f8b\u6765\u8bf4\uff0c\u8fd9\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"config<"),"\u5bf9\u8c61\u53ef\u80fd\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onMoveShouldSetPanResponder: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onStartShouldSetPanResponder: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onStartShouldSetPanResponderCapture: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderReject: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderGrant: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderStart: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderEnd: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderRelease: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderMove: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderTerminate: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onPanResponderTerminationRequest: (e, gestureState) => {...}")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onShouldBlockNativeResponder: (e, gestureState) => {...}"))),(0,a.kt)("p",null,"\u901a\u5e38\u6765\u8bf4\uff0c\u5bf9\u90a3\u4e9b\u6709\u5bf9\u5e94\u6355\u83b7\u4e8b\u4ef6\u7684\u4e8b\u4ef6\u6765\u8bf4\uff0c\u6211\u4eec\u5728\u6355\u83b7\u9636\u6bb5\u66f4\u65b0 gestureState \u4e00\u6b21\uff0c\u7136\u540e\u5728\u5192\u6ce1\u9636\u6bb5\u76f4\u63a5\u4f7f\u7528\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f onStartShould","*"," \u56de\u8c03\u3002\u4ed6\u4eec\u53ea\u4f1a\u5728\u6b64\u8282\u70b9\u5192\u6ce1/\u6355\u83b7\u7684\u5f00\u59cb/\u7ed3\u675f\u4e8b\u4ef6\u4e2d\u63d0\u4f9b\u5df2\u7ecf\u66f4\u65b0\u8fc7\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState"),"\u3002\u4e00\u65e6\u8fd9\u4e2a\u8282\u70b9\u6210\u4e3a\u4e86\u4e8b\u4ef6\u7684\u54cd\u5e94\u8005\uff0c\u5219\u6240\u6709\u7684\u5f00\u59cb/\u7ed3\u675f\u4e8b\u4ef6\u90fd\u4f1a\u88ab\u624b\u52bf\u6b63\u786e\u5904\u7406\uff0c\u5e76\u4e14",(0,a.kt)("inlineCode",{parentName:"p"},"gestureState"),"\u4e5f\u4f1a\u88ab\u6b63\u786e\u66f4\u65b0\u3002(numberActiveTouches)\u6709\u53ef\u80fd\u6ca1\u6709\u5305\u542b\u6240\u6709\u7684\u89e6\u6478\u70b9\uff0c\u9664\u975e\u4f60\u5c31\u662f\u89e6\u6478\u4e8b\u4ef6\u7684\u54cd\u5e94\u8005\u3002"))}h.isMDXComponent=!0}}]);