"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[28437],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return A}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),A=r,m=p["".concat(s,".").concat(A)]||p[A]||u[A]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function A(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),o=r?"ios":"android",i=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(27378),r=a(38944),l="tabItem_wHwb",o=Object.defineProperty,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(i)for(var a of i(t))c.call(t,a)&&d(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},27789:function(e,t,a){a.d(t,{Z:function(){return B}});var n=a(27378),r=a(38944),l=a(14185),o=a(27886),i=a(77184),s=a(12112),c="tabList_J5MA",d="tabItem_l0OV",u=Object.defineProperty,p=Object.defineProperties,A=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&v(e,a,t[a]);if(m)for(var a of m(t))f.call(t,a)&&v(e,a,t[a]);return e};function h(e){var t,a;const{lazy:l,block:u,defaultValue:m,values:k,groupId:f,className:v}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),B=null!=k?k:h.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),y=(0,o.l)(B,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===m?m:null!=(a=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?a:h[0].props.value;if(null!==C&&!B.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${B.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:g}=(0,i.U)(),[w,x]=(0,n.useState)(C),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=f){const e=D[f];null!=e&&e!==w&&B.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,a=E.indexOf(t),n=B[a].value;n!==w&&(O(t),x(n),null!=f&&g(f,String(n)))},P=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},v)},B.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=b({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:e=>E.push(e),onKeyDown:P,onFocus:N,onClick:N},a),o={className:(0,r.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":w===e})},p(l,A(o))),null!=t?t:e);var l,o}))),l?(0,n.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function B(e){const t=(0,l.Z)();return n.createElement(h,b({key:String(t)},e))}},11109:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return h}});var n=a(35318),r=a(27789),l=a(86386),o=a(11674),i=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,A=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&A(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&A(e,a,t[a]);return e};const k={id:"backhandler",title:"BackHandler"},f=void 0,v={unversionedId:"backhandler",id:"version-0.68/backhandler",title:"BackHandler",description:"BackHandler API \u7528\u4e8e\u76d1\u542c\u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u94ae\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u8c03\u7528\u4f60\u81ea\u5df1\u7684\u51fd\u6570\u6765\u5904\u7406\u540e\u9000\u884c\u4e3a\u3002\u6b64 API \u4ec5\u80fd\u5728 Android \u4e0a\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-0.68/backhandler.md",sourceDirName:".",slug:"/backhandler",permalink:"/docs/0.68/backhandler",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/backhandler.md",tags:[],version:"0.68",frontMatter:{id:"backhandler",title:"BackHandler"},sidebar:"api",previous:{title:"useWindowDimensions",permalink:"/docs/0.68/usewindowdimensions"},next:{title:"PermissionsAndroid",permalink:"/docs/0.68/permissionsandroid"}},b={},h=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Usage with React Navigation",id:"usage-with-react-navigation",level:2},{value:"Backhandler hook",id:"backhandler-hook",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>addEventListener()</code>",id:"addeventlistener",level:3},{value:"<code>exitApp()</code>",id:"exitapp",level:3},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",level:3}],B={toc:h};function y(e){var t,a=e,{components:i}=a,A=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=m(m({},B),A),s(t,c({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"BackHandler API \u7528\u4e8e\u76d1\u542c\u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u94ae\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u8c03\u7528\u4f60\u81ea\u5df1\u7684\u51fd\u6570\u6765\u5904\u7406\u540e\u9000\u884c\u4e3a\u3002\u6b64 API \u4ec5\u80fd\u5728 Android \u4e0a\u4f7f\u7528\u3002"),(0,n.kt)("p",null,"\u56de\u8c03\u51fd\u6570\u662f\u5012\u5e8f\u6267\u884c\u7684\uff08\u5373\u540e\u6dfb\u52a0\u7684\u51fd\u6570\u5148\u6267\u884c\uff09\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5982\u679c\u67d0\u4e00\u4e2a\u51fd\u6570\u8fd4\u56de true"),"\uff0c\u5219\u540e\u7eed\u7684\u51fd\u6570\u90fd\u4e0d\u4f1a\u88ab\u8c03\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5982\u679c\u6ca1\u6709\u6dfb\u52a0\u4efb\u4f55\u76d1\u542c\u51fd\u6570\uff0c\u6216\u8005\u6240\u6709\u7684\u76d1\u542c\u51fd\u6570\u90fd\u8fd4\u56de false"),"\uff0c\u5219\u4f1a\u6267\u884c\u9ed8\u8ba4\u884c\u4e3a\uff0c\u9000\u51fa\u5e94\u7528\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c app \u5f53\u524d\u6253\u5f00\u4e86\u4e00\u4e2a",(0,n.kt)("inlineCode",{parentName:"p"},"Modal"),"\u7a97\u53e3\uff0c\u5219 BackHandler \u4e0d\u4f1a\u89e6\u53d1\u4e8b\u4ef6\u3002(",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/0.68/modal#onrequestclose"}),"\u67e5\u770b",(0,n.kt)("inlineCode",{parentName:"a"},"Modal"),"\u7684\u6587\u6863"),").")),(0,n.kt)("h2",m({},{id:"\u7528\u6cd5"}),"\u7528\u6cd5"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"BackHandler.addEventListener('hardwareBackPress', function () {\n  /**\n   * this.onMainScreen()\u548cthis.goBack()\u4e24\u4e2a\u65b9\u6cd5\u90fd\u53ea\u662f\u4f2a\u65b9\u6cd5\uff0c\u9700\u8981\u4f60\u81ea\u5df1\u53bb\u5b9e\u73b0\n   * \u4e00\u822c\u6765\u8bf4\u90fd\u8981\u914d\u5408\u5bfc\u822a\u5668\u7ec4\u4ef6\u4f7f\u7528\n   */\n\n  if (!this.onMainScreen()) {\n    this.goBack();\n    /**\n     * \u8fd4\u56detrue\u65f6\u4f1a\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1\u4f20\u9012\uff0c\u56e0\u800c\u4e0d\u4f1a\u6267\u884c\u9ed8\u8ba4\u7684\u540e\u9000\u884c\u4e3a\n     */\n    return true;\n  }\n  /**\n   * \u8fd4\u56defalse\u65f6\u4f1a\u4f7f\u4e8b\u4ef6\u7ee7\u7eed\u4f20\u9012\uff0c\u89e6\u53d1\u5176\u4ed6\u6ce8\u518c\u7684\u76d1\u542c\u51fd\u6570\uff0c\u6216\u662f\u7cfb\u7edf\u9ed8\u8ba4\u7684\u540e\u9000\u884c\u4e3a\n   */\n  return false;\n});\n")),(0,n.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)("p",null,"The following example implements a scenario where you confirm if the user wants to exit the app:"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%20%20%5D)%3B%0A%20%20%20%20%20%20return%20true%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20const%20backHandler%20%3D%20BackHandler.addEventListener(%0A%20%20%20%20%20%20%22hardwareBackPress%22%2C%0A%20%20%20%20%20%20backAction%0A%20%20%20%20)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20backHandler.remove()%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20this.backHandler%20%3D%20BackHandler.addEventListener(%0A%20%20%20%20%20%20%22hardwareBackPress%22%2C%0A%20%20%20%20%20%20this.backAction%0A%20%20%20%20)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20this.backHandler.remove()%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"BackHandler.addEventListener")," creates an event listener & returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"NativeEventSubscription")," object which should be cleared using ",(0,n.kt)("inlineCode",{parentName:"p"},"NativeEventSubscription.remove")," method."),(0,n.kt)("p",null,"Additionally ",(0,n.kt)("inlineCode",{parentName:"p"},"BackHandler.removeEventListener")," can also be used to clear the event listener. Ensure the callback has the reference to the same function used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"addEventListener")," call as shown the following example \ufe63"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:o.Z.defaultSyntax,values:o.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20BackHandler.addEventListener(%22hardwareBackPress%22%2C%20backAction)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%0A%20%20%20%20%20%20BackHandler.removeEventListener(%22hardwareBackPress%22%2C%20backAction)%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",m({},{className:"snack-player","data-snack-name":"BackHandler","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20BackHandler%2C%20Alert%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20backAction%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Alert.alert(%22Hold%20on!%22%2C%20%22Are%20you%20sure%20you%20want%20to%20go%20back%3F%22%2C%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20text%3A%20%22Cancel%22%2C%0A%20%20%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20null%2C%0A%20%20%20%20%20%20%20%20style%3A%20%22cancel%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%20text%3A%20%22YES%22%2C%20onPress%3A%20()%20%3D%3E%20BackHandler.exitApp()%20%7D%0A%20%20%20%20%5D)%3B%0A%20%20%20%20return%20true%3B%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20BackHandler.addEventListener(%22hardwareBackPress%22%2C%20this.backAction)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20BackHandler.removeEventListener(%22hardwareBackPress%22%2C%20this.backAction)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EClick%20Back%20button!%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h2",m({},{id:"usage-with-react-navigation"}),"Usage with React Navigation"),(0,n.kt)("p",null,"If you are using React Navigation to navigate across different screens, you can follow their guide on ",(0,n.kt)("a",m({parentName:"p"},{href:"https://reactnavigation.org/docs/custom-android-back-button-handling/"}),"Custom Android back button behaviour")),(0,n.kt)("h2",m({},{id:"backhandler-hook"}),"Backhandler hook"),(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/react-native-community/hooks#usebackhandler"}),"React Native Hooks")," has a nice ",(0,n.kt)("inlineCode",{parentName:"p"},"useBackHandler")," hook which will simplify the process of setting up event listeners."),(0,n.kt)("hr",null),(0,n.kt)("h1",m({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",m({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,n.kt)("h3",m({},{id:"addeventlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(eventName, handler)\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"exitapp"}),(0,n.kt)("inlineCode",{parentName:"h3"},"exitApp()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static exitApp()\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",m({},{id:"removeeventlistener"}),(0,n.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(eventName, handler)\n")))}y.isMDXComponent=!0}}]);