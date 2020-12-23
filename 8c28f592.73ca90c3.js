(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{271:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(3),b=a(8),l=(a(0),a(413)),r={id:"viewpagerandroid",title:"\ud83d\udea7 ViewPagerAndroid"},c={unversionedId:"viewpagerandroid",id:"viewpagerandroid",isDocsHomePage:!1,title:"\ud83d\udea7 ViewPagerAndroid",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/viewpager instead.",source:"@site/../cndocs/viewpagerandroid.md",slug:"/viewpagerandroid",permalink:"https://cdn.jsdelivr.net/gh/reactnativecn/react-native-website@gh-pages/docs/next/viewpagerandroid",editUrl:"/github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/viewpagerandroid.md",version:"current",lastUpdatedAt:1608733239},i=[{value:"Props",id:"props",children:[{value:"<code>initialPage</code>",id:"initialpage",children:[]},{value:"<code>keyboardDismissMode</code>",id:"keyboarddismissmode",children:[]},{value:"<code>onPageScroll</code>",id:"onpagescroll",children:[]},{value:"<code>onPageScrollStateChanged</code>",id:"onpagescrollstatechanged",children:[]},{value:"<code>onPageSelected</code>",id:"onpageselected",children:[]},{value:"<code>pageMargin</code>",id:"pagemargin",children:[]},{value:"<code>peekEnabled</code>",id:"peekenabled",children:[]},{value:"<code>scrollEnabled</code>",id:"scrollenabled",children:[]},{value:"<code>setPage</code>",id:"setpage",children:[]},{value:"<code>setPageWithoutAnimation</code>",id:"setpagewithoutanimation",children:[]}]},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",children:[{value:"ViewPagerScrollState",id:"viewpagerscrollstate",children:[]}]}],o={toc:i};function p(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-viewpager"}),"@react-native-community/viewpager")," instead.")),Object(l.b)("p",null,"\u4e00\u4e2a\u5141\u8bb8\u5728\u5b50\u89c6\u56fe\u4e4b\u95f4\u5de6\u53f3\u7ffb\u9875\u7684\u5bb9\u5668\u3002\u6bcf\u4e00\u4e2a ViewPagerAndroid \u7684\u5b50\u5bb9\u5668\u4f1a\u88ab\u89c6\u4f5c\u4e00\u4e2a\u5355\u72ec\u7684\u9875\uff0c\u5e76\u4e14\u4f1a\u88ab\u62c9\u4f38\u586b\u6ee1 ViewPagerAndroid\u3002"),Object(l.b)("p",null,"\u6ce8\u610f\u6240\u6709\u7684\u5b50\u89c6\u56fe\u90fd\u5fc5\u987b\u662f\u7eaf View\uff0c\u800c\u4e0d\u80fd\u662f\u81ea\u5b9a\u4e49\u7684\u590d\u5408\u5bb9\u5668\u3002\u4f60\u53ef\u4ee5\u7ed9\u6bcf\u4e2a\u5b50\u89c6\u56fe\u8bbe\u7f6e\u6837\u5f0f\u5c5e\u6027\u8b6c\u5982 padding \u6216 backgroundColor\u3002"),Object(l.b)("p",null,"\u4f8b\u5982:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),'render() {\n  return (\n    <ViewPagerAndroid\n      style={styles.viewPager}\n      initialPage={0}>\n      <View style={styles.pageStyle} key="1">\n        <Text>First page</Text>\n      </View>\n      <View style={styles.pageStyle} key="2">\n        <Text>Second page</Text>\n      </View>\n    </ViewPagerAndroid>\n  );\n}\n\n...\n\nconst styles = {\n  ...\n  viewPager: {\n    flex: 1\n  },\n  pageStyle: {\n    alignItems: \'center\',\n    padding: 20,\n  }\n}\n')),Object(l.b)("hr",null),Object(l.b)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("h3",{id:"initialpage"},Object(l.b)("inlineCode",{parentName:"h3"},"initialPage")),Object(l.b)("p",null,"\u521d\u59cb\u9009\u4e2d\u7684\u9875\u7684\u4e0b\u6807\u3002\u4f60\u53ef\u4ee5\u7528 setPage \u51fd\u6570\u6765\u7ffb\u9875\uff0c\u5e76\u4e14\u7528 onPageSelected \u6765\u76d1\u542c\u9875\u7684\u53d8\u5316\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"keyboarddismissmode"},Object(l.b)("inlineCode",{parentName:"h3"},"keyboardDismissMode")),Object(l.b)("p",null,"\u51b3\u5b9a\u5728\u6ed1\u52a8\u7684\u65f6\u5019\u662f\u5426\u8981\u8ba9\u8f6f\u952e\u76d8\u6d88\u5931\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"none \uff08\u9ed8\u8ba4\u503c\uff09\uff0c\u62d6\u62fd\u4e0d\u4f1a\u8ba9\u952e\u76d8\u6d88\u5931\u3002"),Object(l.b)("li",{parentName:"ul"},"on-drag\uff0c \u5f53\u62d6\u62fd\u5f00\u59cb\u7684\u65f6\u5019\u4f1a\u8ba9\u952e\u76d8\u6d88\u5931\u3002")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum('none', 'on-drag')"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpagescroll"},Object(l.b)("inlineCode",{parentName:"h3"},"onPageScroll")),Object(l.b)("p",null,"\u5f53\u5728\u9875\u95f4\u5207\u6362\u65f6\uff08\u4e0d\u8bba\u662f\u7531\u4e8e\u52a8\u753b\u8fd8\u662f\u7531\u4e8e\u7528\u6237\u5728\u9875\u95f4\u6ed1\u52a8/\u62d6\u62fd\uff09\u6267\u884c\u3002"),Object(l.b)("p",null,"\u56de\u8c03\u53c2\u6570\u4e2d\u7684 event.nativeEvent \u5bf9\u8c61\u4f1a\u5305\u542b\u5982\u4e0b\u6570\u636e\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"position \u4ece\u5de6\u6570\u8d77\u7b2c\u4e00\u4e2a\u5f53\u524d\u53ef\u89c1\u7684\u9875\u9762\u7684\u4e0b\u6807\u3002"),Object(l.b)("li",{parentName:"ul"},"offset \u4e00\u4e2a\u5728","[0,1]",'\u4e4b\u5185\u7684\u8303\u56f4(\u53ef\u4ee5\u7b49\u4e8e 0 \u6216 1)\uff0c\u4ee3\u8868\u5f53\u524d\u9875\u9762\u5207\u6362\u7684\u72b6\u6001\u3002\u503c x \u8868\u793a\u73b0\u5728"position"\u6240\u8868\u793a\u7684\u9875\u6709(1 - x)\u7684\u90e8\u5206\u53ef\u89c1\uff0c\u800c\u4e0b\u4e00\u9875\u6709 x \u7684\u90e8\u5206\u53ef\u89c1\u3002')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpagescrollstatechanged"},Object(l.b)("inlineCode",{parentName:"h3"},"onPageScrollStateChanged")),Object(l.b)("p",null,"\u9875\u9762\u6ed1\u52a8\u72b6\u6001\u53d8\u5316\u65f6\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\u3002\u9875\u9762\u6ed1\u52a8\u72b6\u6001\u53ef\u80fd\u4e3a\u4ee5\u4e0b\u4e09\u79cd\u4e4b\u4e00\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"idle \u7a7a\u95f2\uff0c\u610f\u5473\u7740\u5f53\u524d\u6ca1\u6709\u4ea4\u4e92\u3002"),Object(l.b)("li",{parentName:"ul"},"dragging \u62d6\u52a8\u4e2d\uff0c\u610f\u5473\u7740\u5f53\u524d\u9875\u9762\u6b63\u5728\u88ab\u62d6\u52a8\u3002"),Object(l.b)("li",{parentName:"ul"},"settling \u5904\u7406\u4e2d\uff0c\u610f\u5473\u7740\u5f53\u524d\u9875\u9762\u53d1\u751f\u8fc7\u4ea4\u4e92\uff0c\u4e14\u6b63\u5728\u7ed3\u675f\u5f00\u5934\u6216\u6536\u5c3e\u7684\u52a8\u753b\u3002")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onpageselected"},Object(l.b)("inlineCode",{parentName:"h3"},"onPageSelected")),Object(l.b)("p",null,"\u8fd9\u4e2a\u56de\u8c03\u4f1a\u5728\u9875\u9762\u5207\u6362\u5b8c\u6210\u540e\uff08\u5f53\u7528\u6237\u5728\u9875\u9762\u95f4\u6ed1\u52a8\uff09\u8c03\u7528\u3002"),Object(l.b)("p",null,"\u56de\u8c03\u53c2\u6570\u4e2d\u7684 event.nativeEvent \u5bf9\u8c61\u4f1a\u5305\u542b\u5982\u4e0b\u7684\u5b57\u6bb5\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"position \u5f53\u524d\u88ab\u9009\u4e2d\u7684\u9875\u9762\u4e0b\u6807")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"pagemargin"},Object(l.b)("inlineCode",{parentName:"h3"},"pageMargin")),Object(l.b)("p",null,"\u9875\u9762\u6ed1\u52a8\u65f6\u4e24\u4e2a\u9875\u9762\u4e4b\u95f4\u7684\u95f4\u8ddd\u3002\u4ec5\u4ec5\u5728\u6ed1\u52a8\u65f6\u53ef\u89c1\uff0c\u9875\u9762\u4e4b\u95f4\u4ecd\u7136\u65f6\u8fb9\u5bf9\u8fb9\u7684\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"peekenabled"},Object(l.b)("inlineCode",{parentName:"h3"},"peekEnabled")),Object(l.b)("p",null,"\u662f\u5426\u5728\u5f53\u524d\u9875\u6ed1\u52a8\u65f6\u5c55\u793a\u524d\u4e00\u9875\u6216\u8005\u540e\u4e00\u9875\uff0c\u9ed8\u8ba4\u4e3a false"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"scrollenabled"},Object(l.b)("inlineCode",{parentName:"h3"},"scrollEnabled")),Object(l.b)("p",null,"\u8bbe\u4e3a false \u65f6\u53ef\u7981\u6b62\u6eda\u52a8\u3002\u9ed8\u8ba4\u503c\u4e3a true"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5fc5\u586b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u5426")))),Object(l.b)("h3",{id:"setpage"},Object(l.b)("inlineCode",{parentName:"h3"},"setPage")),Object(l.b)("p",null,"A helper function to scroll to a specific page in the ViewPager. The transition between pages will be animated."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"position - index of page that will be selected")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"setpagewithoutanimation"},Object(l.b)("inlineCode",{parentName:"h3"},"setPageWithoutAnimation")),Object(l.b)("p",null,"A helper function to scroll to a specific page in the ViewPager. The transition between pages will ",Object(l.b)("em",{parentName:"p"},"not")," be animated."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"position - index of page that will be selected")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(l.b)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),Object(l.b)("h3",{id:"viewpagerscrollstate"},"ViewPagerScrollState"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$Enum")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u5e38\u91cf:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"idle"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dragging"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"settling"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))))}p.isMDXComponent=!0},413:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),b=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var o=b.a.createContext({}),p=function(e){var t=b.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=p(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),j=n,u=d["".concat(r,".").concat(j)]||d[j]||O[j]||l;return a?b.a.createElement(u,c(c({ref:t},o),{},{components:a})):b.a.createElement(u,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var o=2;o<l;o++)r[o]=a[o];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);