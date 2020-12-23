(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(8),l=(a(0),a(413)),b={id:"animatedvaluexy",title:"Animated.ValueXY"},c={unversionedId:"animatedvaluexy",id:"animatedvaluexy",isDocsHomePage:!1,title:"Animated.ValueXY",description:"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal Animated.Value, but multiplexed. Contains two regular Animated.Values under the hood.",source:"@site/../cndocs/animatedvaluexy.md",slug:"/animatedvaluexy",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/animatedvaluexy",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/animatedvaluexy.md",version:"current",lastUpdatedAt:1608733239,sidebar:"api",previous:{title:"Animated.Value",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/animatedvalue"},next:{title:"Appearance",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/appearance"}},i=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>setValue()</code>",id:"setvalue",children:[]},{value:"<code>setOffset()</code>",id:"setoffset",children:[]},{value:"<code>flattenOffset()</code>",id:"flattenoffset",children:[]},{value:"<code>extractOffset()</code>",id:"extractoffset",children:[]},{value:"<code>addListener()</code>",id:"addlistener",children:[]},{value:"<code>removeListener()</code>",id:"removelistener",children:[]},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[]},{value:"<code>stopAnimation()</code>",id:"stopanimation",children:[]},{value:"<code>resetAnimation()</code>",id:"resetanimation",children:[]},{value:"<code>getLayout()</code>",id:"getlayout",children:[]},{value:"<code>getTranslateTransform()</code>",id:"gettranslatetransform",children:[]}]}],o={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"2D Value for driving 2D animations, such as pan gestures. Almost identical API to normal ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/animatedvalue"}),Object(l.b)("inlineCode",{parentName:"a"},"Animated.Value")),", but multiplexed. Contains two regular ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.Value"),"s under the hood."),Object(l.b)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(l.b)("div",{className:"snack-player","data-snack-name":"Animated.ValueXY","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Animated%2C%20PanResponder%2C%20StyleSheet%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20DraggableView%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20pan%20%3D%20useRef(new%20Animated.ValueXY()).current%3B%0A%0A%20%20const%20panResponder%20%3D%20PanResponder.create(%7B%0A%20%20%20%20onStartShouldSetPanResponder%3A%20()%20%3D%3E%20true%2C%0A%20%20%20%20onPanResponderMove%3A%20Animated.event(%5B%0A%20%20%20%20%20%20null%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20dx%3A%20pan.x%2C%20%2F%2F%20x%2Cy%20are%20Animated.Value%0A%20%20%20%20%20%20%20%20dy%3A%20pan.y%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D)%2C%0A%20%20%20%20onPanResponderRelease%3A%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20Animated.spring(%0A%20%20%20%20%20%20%20%20pan%2C%20%2F%2F%20Auto-multiplexed%0A%20%20%20%20%20%20%20%20%7B%20toValue%3A%20%7B%20x%3A%200%2C%20y%3A%200%20%7D%20%7D%20%2F%2F%20Back%20to%20zero%0A%20%20%20%20%20%20).start()%3B%0A%20%20%20%20%7D%2C%0A%20%20%7D)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CAnimated.View%0A%20%20%20%20%20%20%20%20%7B...panResponder.panHandlers%7D%0A%20%20%20%20%20%20%20%20style%3D%7B%5Bpan.getLayout()%2C%20styles.box%5D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%20%20box%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%2361dafb%22%2C%0A%20%20%20%20width%3A%2080%2C%0A%20%20%20%20height%3A%2080%2C%0A%20%20%20%20borderRadius%3A%204%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20DraggableView%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),Object(l.b)("hr",null),Object(l.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(l.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(l.b)("h3",{id:"setvalue"},Object(l.b)("inlineCode",{parentName:"h3"},"setValue()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"setValue(value);\n")),Object(l.b)("p",null,"Directly set the value. This will stop any animations running on the value and update all the bound properties."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"setOffset()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"setOffset(offset);\n")),Object(l.b)("p",null,"Sets an offset that is applied on top of whatever value is set, whether via ",Object(l.b)("inlineCode",{parentName:"p"},"setValue"),", an animation, or ",Object(l.b)("inlineCode",{parentName:"p"},"Animated.event"),". Useful for compensating things like the start of a pan gesture."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"offset"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"flattenoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"flattenOffset()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"flattenOffset();\n")),Object(l.b)("p",null,"Merges the offset value into the base value and resets the offset to zero. The final output of the value is unchanged."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"extractoffset"},Object(l.b)("inlineCode",{parentName:"h3"},"extractOffset()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"extractOffset();\n")),Object(l.b)("p",null,"Sets the offset value to the base value, and resets the base value to zero. The final output of the value is unchanged."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"addlistener"},Object(l.b)("inlineCode",{parentName:"h3"},"addListener()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"addListener(callback);\n")),Object(l.b)("p",null,"Adds an asynchronous listener to the value so you can observe updates from animations. This is useful because there is no way to synchronously read the value because it might be driven natively."),Object(l.b)("p",null,"Returns a string that serves as an identifier for the listener."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The callback function which will receive an object with a ",Object(l.b)("inlineCode",{parentName:"td"},"value")," key set to the new value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removelistener"},Object(l.b)("inlineCode",{parentName:"h3"},"removeListener()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"removeListener(id);\n")),Object(l.b)("p",null,"Unregister a listener. The ",Object(l.b)("inlineCode",{parentName:"p"},"id")," param shall match the identifier previously returned by ",Object(l.b)("inlineCode",{parentName:"p"},"addListener()"),"."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u662f"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Id for the listener being removed.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"removealllisteners"},Object(l.b)("inlineCode",{parentName:"h3"},"removeAllListeners()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"removeAllListeners();\n")),Object(l.b)("p",null,"Remove all registered listeners."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"stopanimation"},Object(l.b)("inlineCode",{parentName:"h3"},"stopAnimation()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"stopAnimation([callback]);\n")),Object(l.b)("p",null,"Stops any running animation or tracking. ",Object(l.b)("inlineCode",{parentName:"p"},"callback")," is invoked with the final value after stopping the animation, which is useful for updating state to match the animation position with layout."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A function that will receive the final value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"resetanimation"},Object(l.b)("inlineCode",{parentName:"h3"},"resetAnimation()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"resetAnimation([callback]);\n")),Object(l.b)("p",null,"Stops any animation and resets the value to its original."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u540d\u79f0"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A function that will receive the original value.")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"getlayout"},Object(l.b)("inlineCode",{parentName:"h3"},"getLayout()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"getLayout();\n")),Object(l.b)("p",null,"Converts ",Object(l.b)("inlineCode",{parentName:"p"},"{x, y}")," into ",Object(l.b)("inlineCode",{parentName:"p"},"{left, top}")," for use in style, e.g."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"style={this.state.anim.getLayout()}\n")),Object(l.b)("hr",null),Object(l.b)("h3",{id:"gettranslatetransform"},Object(l.b)("inlineCode",{parentName:"h3"},"getTranslateTransform()")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"getTranslateTransform();\n")),Object(l.b)("p",null,"Converts ",Object(l.b)("inlineCode",{parentName:"p"},"{x, y}")," into a useable translation transform, e.g."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"style={{\n  transform: this.state.anim.getTranslateTransform()\n}}\n")))}s.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,O=u["".concat(b,".").concat(d)]||u[d]||p[d]||l;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,b[1]=c;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);