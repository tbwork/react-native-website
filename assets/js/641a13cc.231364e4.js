"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[51394],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},40963:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return p},metadata:function(){return h},toc:function(){return g}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&s(e,n,t[n]);return e};const p={id:"segmentedcontrolios",title:"\ud83d\udea7 SegmentedControlIOS"},m=void 0,h={unversionedId:"segmentedcontrolios",id:"version-0.63/segmentedcontrolios",title:"\ud83d\udea7 SegmentedControlIOS",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/segmented-control instead.",source:"@site/versioned_docs/version-0.63/segmentedcontrolios.md",sourceDirName:".",slug:"/segmentedcontrolios",permalink:"/docs/0.63/segmentedcontrolios",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/segmentedcontrolios.md",tags:[],version:"0.63",frontMatter:{id:"segmentedcontrolios",title:"\ud83d\udea7 SegmentedControlIOS"}},k={},g=[{value:"Programmatically changing selected index",id:"programmatically-changing-selected-index",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"<code>momentary</code>",id:"momentary",level:3},{value:"<code>onChange</code>",id:"onchange",level:3},{value:"<code>onValueChange</code>",id:"onvaluechange",level:3},{value:"<code>selectedIndex</code>",id:"selectedindex",level:3},{value:"<code>tintColor</code>",id:"tintcolor",level:3},{value:"<code>values</code>",id:"values",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(99.06%), sunnylqm(0.94%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9906-sunnylqm094",level:5}],b={toc:g};function f(e){var t,n=e,{components:r}=n,s=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},b),s),l(t,o({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/react-native-community/segmented-control"}),"@react-native-community/segmented-control")," instead.")),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"SegmentedControlIOS"),"\u6765\u5728 iOS \u8bbe\u5907\u4e0a\u6e32\u67d3\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"UISegmentedControl"),"\u7ec4\u4ef6\u3002\u8fd9\u662f\u4e00\u4e2a\u5206\u6bb5\u663e\u793a\u591a\u4e2a\u9009\u9879\u7684\u7ec4\u4ef6\u3002"),(0,a.kt)("h4",u({},{id:"programmatically-changing-selected-index"}),"Programmatically changing selected index"),(0,a.kt)("p",null,"The selected index can be changed on the fly by assigning the selectedIndex prop to a state variable, then changing that variable. Note that the state variable would need to be updated as the user selects a value and changes the index, as shown in the example below."),(0,a.kt)("h2",u({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{}),"<SegmentedControlIOS\n  values={['One', 'Two']}\n  selectedIndex={this.state.selectedIndex}\n  onChange={(event) => {\n    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});\n  }}\n/>\n")),(0,a.kt)("center",null,(0,a.kt)("img",{src:"assets/SegmentedControlIOS/example.gif",width:"360"})),(0,a.kt)("hr",null),(0,a.kt)("h1",u({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",u({},{id:"props"}),"Props"),(0,a.kt)("h3",u({},{id:"enabled"}),(0,a.kt)("inlineCode",{parentName:"h3"},"enabled")),(0,a.kt)("p",null,"If false the user won't be able to interact with the control. Default value is true."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("center",null,(0,a.kt)("img",{src:"assets/SegmentedControlIOS/enabled.png",width:"360"})),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"momentary"}),(0,a.kt)("inlineCode",{parentName:"h3"},"momentary")),(0,a.kt)("p",null,"If true, then selecting a segment won't persist visually. The ",(0,a.kt)("inlineCode",{parentName:"p"},"onValueChange")," callback will still work as expected."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"bool"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("center",null,(0,a.kt)("img",{src:"assets/SegmentedControlIOS/momentary.gif",width:"360"})),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"onchange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onChange")),(0,a.kt)("p",null,"Callback that is called when the user taps a segment; passes the event as an argument"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"onvaluechange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onValueChange")),(0,a.kt)("p",null,"Callback that is called when the user taps a segment; passes the segment's value as an argument"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"selectedindex"}),(0,a.kt)("inlineCode",{parentName:"h3"},"selectedIndex")),(0,a.kt)("p",null,"The index in ",(0,a.kt)("inlineCode",{parentName:"p"},"props.values")," of the segment to be (pre)selected."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"tintcolor"}),(0,a.kt)("inlineCode",{parentName:"h3"},"tintColor")),(0,a.kt)("p",null,"Accent color of the control."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("center",null,(0,a.kt)("img",{src:"assets/SegmentedControlIOS/tintColor.png",width:"360"})),(0,a.kt)("hr",null),(0,a.kt)("h3",u({},{id:"values"}),(0,a.kt)("inlineCode",{parentName:"h3"},"values")),(0,a.kt)("p",null,"The labels for the control's segment buttons, in order."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"array of string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h5",u({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9906-sunnylqm094"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",u({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(99.06%), ",(0,a.kt)("a",u({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(0.94%)"))}f.isMDXComponent=!0}}]);