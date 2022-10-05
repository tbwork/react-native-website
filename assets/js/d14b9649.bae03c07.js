"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[59764],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return h}});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const u={id:"imagebackground",title:"ImageBackground"},d=void 0,g={unversionedId:"imagebackground",id:"version-0.63/imagebackground",title:"ImageBackground",description:"A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the ` component, which has the same props as `, and add whatever children to it you would like to layer on top of it.",source:"@site/versioned_docs/version-0.63/imagebackground.md",sourceDirName:".",slug:"/imagebackground",permalink:"/docs/0.63/imagebackground",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/imagebackground.md",tags:[],version:"0.63",frontMatter:{id:"imagebackground",title:"ImageBackground"},sidebar:"version-0.63/\u7ec4\u4ef6",previous:{title:"Image",permalink:"/docs/0.63/image"},next:{title:"KeyboardAvoidingView",permalink:"/docs/0.63/keyboardavoidingview"}},f={},h=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"Image Props",id:"image-props",level:3},{value:"<code>imageStyle</code>",id:"imagestyle",level:3},{value:"<code>imageRef</code>",id:"imageref",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(84.21%), sunnylqm(15.79%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm8421-sunnylqm1579",level:5}],k={toc:h};function y(e){var t,n=e,{components:r}=n,p=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},k),p),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A common feature request from developers familiar with the web is ",(0,a.kt)("inlineCode",{parentName:"p"},"background-image"),". To handle this use case, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImageBackground>")," component, which has the same props as ",(0,a.kt)("inlineCode",{parentName:"p"},"<Image>"),", and add whatever children to it you would like to layer on top of it."),(0,a.kt)("p",null,"You might not want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImageBackground>")," in some cases, since the implementation is very simple. Refer to ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImageBackground>"),"'s ",(0,a.kt)("a",m({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js"}),"source code")," for more insight, and create your own custom component when needed."),(0,a.kt)("p",null,"Note that you must specify some width and height style attributes."),(0,a.kt)("h2",m({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("div",m({},{className:"snack-player","data-snack-name":"ImageBackground","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ImageBackground%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20image%20%3D%20%7B%20uri%3A%20%22https%3A%2F%2Fzh-hans.reactjs.org%2Flogo-og.png%22%20%7D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CImageBackground%20source%3D%7Bimage%7D%20style%3D%7Bstyles.image%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3EInside%3C%2FText%3E%0A%20%20%20%20%3C%2FImageBackground%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20flexDirection%3A%20%22column%22%0A%20%20%7D%2C%0A%20%20image%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20resizeMode%3A%20%22cover%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20text%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontSize%3A%2042%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%2C%0A%20%20%20%20background%3A%20%22%23000000a0%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,a.kt)("hr",null),(0,a.kt)("h1",m({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",m({},{id:"props"}),"Props"),(0,a.kt)("h3",m({},{id:"image-props"}),(0,a.kt)("a",m({parentName:"h3"},{href:"/docs/0.63/image#props"}),"Image Props")),(0,a.kt)("h3",m({},{id:"imagestyle"}),(0,a.kt)("inlineCode",{parentName:"h3"},"imageStyle")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/docs/0.63/image-style-props"}),"image styles")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("h3",m({},{id:"imageref"}),(0,a.kt)("inlineCode",{parentName:"h3"},"imageRef")),(0,a.kt)("p",null,"Allows to set a reference to the inner ",(0,a.kt)("inlineCode",{parentName:"p"},"Image")," component"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"https://zh-hans.reactjs.org/docs/refs-and-the-dom.html"}),"Ref")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("h3",m({},{id:"style"}),(0,a.kt)("inlineCode",{parentName:"h3"},"style")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("a",m({parentName:"td"},{href:"/docs/0.63/view-style-props"}),"View Style"))))),(0,a.kt)("hr",null),(0,a.kt)("h5",m({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm8421-sunnylqm1579"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",m({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(84.21%), ",(0,a.kt)("a",m({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(15.79%)"))}y.isMDXComponent=!0}}]);