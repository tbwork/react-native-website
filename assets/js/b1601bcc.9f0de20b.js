"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[84481],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||s;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84014:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return h},metadata:function(){return m},toc:function(){return y}});var a=n(35318),o=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(r)for(var n of r(t))u.call(t,n)&&p(e,n,t[n]);return e};const h={id:"testing-overview",title:"Testing",author:"Vojtech Novak",authorURL:"https://twitter.com/vonovak",description:"This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow."},d=void 0,m={unversionedId:"testing-overview",id:"version-0.64/testing-overview",title:"Testing",description:"This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow.",source:"@site/versioned_docs/version-0.64/testing-overview.md",sourceDirName:".",slug:"/testing-overview",permalink:"/docs/0.64/testing-overview",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/testing-overview.md",tags:[],version:"0.64",frontMatter:{id:"testing-overview",title:"Testing",author:"Vojtech Novak",authorURL:"https://twitter.com/vonovak",description:"This guide introduces React Native developers to the key concepts behind testing, how to write good tests, and what kinds of tests you can incorporate into your workflow."},sidebar:"version-0.64/docs",previous:{title:"Symbolicating a stack trace",permalink:"/docs/0.64/symbolication"},next:{title:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",permalink:"/docs/0.64/libraries"}},g={},y=[{value:"Why Test",id:"why-test",level:2},{value:"Static Analysis",id:"static-analysis",level:2},{value:"Writing Testable Code",id:"writing-testable-code",level:2},{value:"Writing Tests",id:"writing-tests",level:2},{value:"Structuring Tests",id:"structuring-tests",level:3},{value:"Unit tests",id:"unit-tests",level:2},{value:"Mocking",id:"mocking",level:3},{value:"Integration Tests",id:"integration-tests",level:2},{value:"Component Tests",id:"component-tests",level:2},{value:"Testing User Interactions",id:"testing-user-interactions",level:3},{value:"Testing Rendered Output",id:"testing-rendered-output",level:3},{value:"End-to-End Tests",id:"end-to-end-tests",level:2},{value:"Summary",id:"summary",level:2},{value:"Links",id:"links",level:3}],k={toc:y};function f(e){var t,n=e,{components:o}=n,p=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=c(c({},k),p),s(t,i({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"As your codebase expands, small errors and edge cases you don\u2019t expect can cascade into larger failures. Bugs lead to bad user experience and ultimately, business losses. One way to prevent fragile programming is to test your code before releasing it into the wild."),(0,a.kt)("p",null,"In this guide, we will cover different, automated ways to ensure your app works as expected, ranging from static analysis to end-to-end tests."),(0,a.kt)("img",{src:"assets/diagram_testing.svg",alt:"Testing is a cycle of fixing, testing, and either passing to release or failing back into testing."}),(0,a.kt)("h2",c({},{id:"why-test"}),"Why Test"),(0,a.kt)("p",null,"We're humans, and humans make mistakes. Testing is important because it helps you uncover these mistakes and verifies that your code is working. Perhaps even more importantly, testing ensures that your code continues to work in the future as you add new features, refactor the existing ones, or upgrade major dependencies of your project."),(0,a.kt)("p",null,"There is more value in testing than you might realize. One of the best ways to fix a bug in your code is to write a failing test that exposes it. Then when you fix the bug and re-run the test, if it passes it means the bug is fixed, never reintroduced into the code base."),(0,a.kt)("p",null,"Tests can also serve as documentation for new people joining your team. For people who have never seen a codebase before, reading tests can help them understand how the existing code works."),(0,a.kt)("p",null,"Last but not least, more automated testing means less time spent with manual ",(0,a.kt)("abbr",{title:"Quality Assurance"},"QA"),", freeing up valuable time."),(0,a.kt)("h2",c({},{id:"static-analysis"}),"Static Analysis"),(0,a.kt)("p",null,"The first step to improve your code quality is to start using static analysis tools. Static analysis checks your code for errors as you write it, but without running any of that code."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Linters")," analyze code to catch common errors such as unused code and to help avoid pitfalls, to flag style guide no-nos like using tabs instead of spaces (or vice versa, depending on your configuration)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Type checking")," ensures that the construct you\u2019re passing to a function matches what the function was designed to accept, preventing passing a string to a counting function that expects a number, for instance.")),(0,a.kt)("p",null,"React Native comes with two such tools configured out of the box: ",(0,a.kt)("a",c({parentName:"p"},{href:"https://eslint.org/"}),"ESLint")," for linting and ",(0,a.kt)("a",c({parentName:"p"},{href:"https://flow.org/en/docs/"}),"Flow")," for type checking. You can also use ",(0,a.kt)("a",c({parentName:"p"},{href:"typescript"}),"TypeScript"),", which is a typed language that compiles to plain JavaScript."),(0,a.kt)("h2",c({},{id:"writing-testable-code"}),"Writing Testable Code"),(0,a.kt)("p",null,"To start with tests, you first need to write code that is testable. Consider an aircraft manufacturing process - before any model first takes off to show that all of its complex systems work well together, individual parts are tested to guarantee they are safe and function correctly. For example, wings are tested by bending them under extreme load; engine parts are tested for their durability; the windshield is tested against simulated bird impact."),(0,a.kt)("p",null,"Software is similar. Instead of writing your entire program in one huge file with many lines of code, you write your code in multiple small modules that you can test more thoroughly than if you tested the assembled whole. In this way, writing testable code is intertwined with writing clean, modular code."),(0,a.kt)("p",null,"To make your app more testable, start by separating the view part of your app\u2014your React components\u2014from your business logic and app state (regardless of whether you use Redux, MobX or other solutions). This way, you can keep your business logic testing\u2014which shouldn\u2019t rely on your React components\u2014independent of the components themselves, whose job is primarily rendering your app\u2019s UI!"),(0,a.kt)("p",null,"Theoretically, you could go so far as to move all logic and data fetching out of your components. This way your components would be solely dedicated to rendering. Your state would be entirely independent of your components. Your app\u2019s logic would work without any React components at all!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"We encourage you to further explore the topic of testable code in other learning resources.")),(0,a.kt)("h2",c({},{id:"writing-tests"}),"Writing Tests"),(0,a.kt)("p",null,"After writing testable code, it\u2019s time to write some actual tests! The default template of React Native ships with ",(0,a.kt)("a",c({parentName:"p"},{href:"https://jestjs.io"}),"Jest")," testing framework. It includes a preset that's tailored to this environment so you can get productive without tweaking the configuration and mocks straight away\u2014",(0,a.kt)("a",c({parentName:"p"},{href:"#mocking"}),"more on mocks")," shortly. You can use Jest to write all types of tests featured in this guide."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you do test-driven development, you actually write tests first! That way, testability of your code is given.")),(0,a.kt)("h3",c({},{id:"structuring-tests"}),"Structuring Tests"),(0,a.kt)("p",null,"Your tests should be short and ideally test only one thing. Let's start with an example unit test written with Jest:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-js"}),"it('given a date in the past, colorForDueDate() returns red', () => {\n  expect(colorForDueDate('2000-10-20')).toBe('red');\n});\n")),(0,a.kt)("p",null,"The test is described by the string passed to the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://jestjs.io/docs/en/api#testname-fn-timeout"}),(0,a.kt)("inlineCode",{parentName:"a"},"it"))," function. Take good care writing the description so that it\u2019s clear what is being tested. Do your best to cover the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Given")," - some precondition"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"When")," - some action executed by the function that you\u2019re testing"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Then")," - the expected outcome")),(0,a.kt)("p",null,"This is also known as AAA (Arrange, Act, Assert)."),(0,a.kt)("p",null,"Jest offers ",(0,a.kt)("a",c({parentName:"p"},{href:"https://jestjs.io/docs/en/api#describename-fn"}),(0,a.kt)("inlineCode",{parentName:"a"},"describe"))," function to help structure your tests. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," to group together all tests that belong to one functionality. Describes can be nested, if you need that. Other functions you'll commonly use are ",(0,a.kt)("a",c({parentName:"p"},{href:"https://jestjs.io/docs/en/api#beforeeachfn-timeout"}),(0,a.kt)("inlineCode",{parentName:"a"},"beforeEach"))," or ",(0,a.kt)("a",c({parentName:"p"},{href:"https://jestjs.io/docs/en/api#beforeallfn-timeout"}),(0,a.kt)("inlineCode",{parentName:"a"},"beforeAll"))," that you can use for setting up the objects you're testing. Read more in the ",(0,a.kt)("a",c({parentName:"p"},{href:"https://jestjs.io/docs/en/api"}),"Jest api reference"),"."),(0,a.kt)("p",null,"If your test has many steps or many expectations, you probably want to split it into multiple smaller ones. Also, ensure that your tests are completely independent of one another. Each test in your suite must be executable on its own without first running some other test. Conversely, if you run all your tests together, the first test must not influence the output of the second one."),(0,a.kt)("p",null,"Lastly, as developers we like when our code works great and doesn't crash. With tests, this is often the opposite. Think of a failed test as of a ",(0,a.kt)("em",{parentName:"p"},"good thing!")," When a test fails, it often means something is not right. This gives you an opportunity to fix the problem before it impacts the users."),(0,a.kt)("h2",c({},{id:"unit-tests"}),"Unit tests"),(0,a.kt)("p",null,"Unit tests cover the smallest parts of code, like individual functions or classes."),(0,a.kt)("p",null,"When the object being tested has any dependencies, you\u2019ll often need to mock them out, as described in the next paragraph."),(0,a.kt)("p",null,"The great thing about unit tests is that they are quick to write and run. Therefore, as you work, you get fast feedback about whether your tests are passing. Jest even has an option to continuously run tests that are related to code you\u2019re editing: ",(0,a.kt)("a",c({parentName:"p"},{href:"https://jestjs.io/docs/en/cli#watch"}),"Watch mode"),"."),(0,a.kt)("img",{src:"assets/p_tests-unit.svg",alt:" "}),(0,a.kt)("h3",c({},{id:"mocking"}),"Mocking"),(0,a.kt)("p",null,"Sometimes, when your tested objects have external dependencies, you\u2019ll want to \u201cmock them out.\u201d \u201cMocking\u201d is when you replace some dependency of your code with your own implementation."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Generally, using real objects in your tests is better than using mocks but there are situations where this is not possible. For example: when your JS unit test relies on a native module written in Java or Objective-C.")),(0,a.kt)("p",null,"Imagine you\u2019re writing an app that shows the current weather in your city and you\u2019re using some external service or other dependency that provides you with the weather information. If the service tells you that it\u2019s raining, you want to show an image with a rainy cloud. You don\u2019t want to call that service in your tests, because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It could make the tests slow and unstable (because of the network requests involved)"),(0,a.kt)("li",{parentName:"ul"},"The service may return different data every time you run the test"),(0,a.kt)("li",{parentName:"ul"},"Third party services can go offline when you really need to run tests!")),(0,a.kt)("p",null,"Therefore, you can provide a mock implementation of the service, effectively replacing thousands of lines of code and some internet-connected thermometers!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Jest comes with ",(0,a.kt)("a",c({parentName:"p"},{href:"https://jestjs.io/docs/en/mock-functions#mocking-modules"}),"support for mocking")," from function level all the way to module level mocking.")),(0,a.kt)("h2",c({},{id:"integration-tests"}),"Integration Tests"),(0,a.kt)("p",null,"When writing larger software systems, individual pieces of it need to interact with each other. In unit testing, if your unit depends on another one, you\u2019ll sometimes end up mocking the dependency, replacing it with a fake one."),(0,a.kt)("p",null,"In integration testing, real individual units are combined (same as in your app) and tested together to ensure that their cooperation works as expected. This is not to say that mocking does not happen here: you\u2019ll still need mocks (for example, to mock communication with a weather service), but you'll need them much less than in unit testing."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Please note that the terminology around what integration testing means is not always consistent. Also, the line between what is a unit test and what is an integration test may not always be clear. For this guide, your test falls into "integration testing" if it:'),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Combines several modules of your app as described above"),(0,a.kt)("li",{parentName:"ul"},"Uses an external system"),(0,a.kt)("li",{parentName:"ul"},"Makes a network call to other application (such as the weather service API)"),(0,a.kt)("li",{parentName:"ul"},"Does any kind of file or database ",(0,a.kt)("abbr",{title:"Input/Output"},"I/O")))),(0,a.kt)("img",{src:"assets/p_tests-integration.svg",alt:" "}),(0,a.kt)("h2",c({},{id:"component-tests"}),"Component Tests"),(0,a.kt)("p",null,"React components are responsible for rendering your app, and users will directly interact with their output. Even if your app's business logic has high testing coverage and is correct, without component tests you may still deliver a broken UI to your users. Component tests could fall into both unit and integration testing, but because they are such a core part of React Native, we'll cover them separately."),(0,a.kt)("p",null,"For testing React components, there are two things you may want to test:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interaction: to ensure the component behaves correctly when interacted with by a user (eg. when user presses a button)"),(0,a.kt)("li",{parentName:"ul"},"Rendering: to ensure the component render output used by React is correct (eg. the button's appearance and placement in the UI)")),(0,a.kt)("p",null,"For example, if you have a button that has an ",(0,a.kt)("inlineCode",{parentName:"p"},"onPress")," listener, you want to test that the button both appears correctly and that tapping the button is correctly handled by the component."),(0,a.kt)("p",null,"There are several libraries that can help you testing these:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"React\u2019s ",(0,a.kt)("a",c({parentName:"li"},{href:"https://zh-hans.reactjs.org/docs/test-renderer.html"}),"Test Renderer"),", developed alongside its core, provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/callstack/react-native-testing-library"}),(0,a.kt)("inlineCode",{parentName:"a"},"react-native-testing-library"))," builds on top of React\u2019s test renderer and adds ",(0,a.kt)("inlineCode",{parentName:"li"},"fireEvent")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"query")," APIs described in the next paragraph."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://www.native-testing-library.com/"}),(0,a.kt)("inlineCode",{parentName:"a"},"@testing-library/react-native"))," is another alternative that also builds on top of React\u2019s test renderer and adds ",(0,a.kt)("inlineCode",{parentName:"li"},"fireEvent")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"query")," APIs described in the next paragraph.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Component tests are only JavaScript tests running in Node.js environment. They do ",(0,a.kt)("em",{parentName:"p"},"not")," take into account any iOS, Android, or other platform code which is backing the React Native components. It follows that they cannot give you a 100% confidence that everything works for the user. If there is a bug in the iOS or Android code, they will not find it.")),(0,a.kt)("img",{src:"assets/p_tests-component.svg",alt:" "}),(0,a.kt)("h3",c({},{id:"testing-user-interactions"}),"Testing User Interactions"),(0,a.kt)("p",null,"Aside from rendering some UI, your components handle events like ",(0,a.kt)("inlineCode",{parentName:"p"},"onChangeText")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"onPress")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"Button"),". They may also contain other functions and event callbacks. Consider the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"function GroceryShoppingList() {\n  const [groceryItem, setGroceryItem] = useState('');\n  const [items, setItems] = useState([]);\n\n  const addNewItemToShoppingList = useCallback(() => {\n    setItems([groceryItem, ...items]);\n    setGroceryItem('');\n  }, [groceryItem, items]);\n\n  return (\n    <>\n      <TextInput\n        value={groceryItem}\n        placeholder=\"Enter grocery item\"\n        onChangeText={(text) => setGroceryItem(text)}\n      />\n      <Button\n        title=\"Add the item to list\"\n        onPress={addNewItemToShoppingList}\n      />\n      {items.map((item) => (\n        <Text key={item}>{item}</Text>\n      ))}\n    </>\n  );\n}\n")),(0,a.kt)("p",null,"When testing user interactions, test the component from the user perspective\u2014what's on the page? What changes when interacted with?"),(0,a.kt)("p",null,"As a rule of thumb, prefer using things users can see or hear:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"make assertions using rendered text or ",(0,a.kt)("a",c({parentName:"li"},{href:"accessibility#accessibility-properties"}),"accessibility helpers"))),(0,a.kt)("p",null,"Conversely, you should avoid:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"making assertions on component props or state"),(0,a.kt)("li",{parentName:"ul"},"testID queries")),(0,a.kt)("p",null,"Avoid testing implementation details like props or state\u2014while such tests work, they are not oriented toward how users will interact with the component and tend to break by refactoring (for example when you'd like to rename some things or rewrite class component using hooks)."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"React class components are especially prone to testing their implementation details such as internal state, props or event handlers. To avoid testing implementation details, prefer using function components with Hooks, which make relying on component internals ",(0,a.kt)("em",{parentName:"p"},"harder"),".")),(0,a.kt)("p",null,"Component testing libraries such as ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/callstack/react-native-testing-library"}),(0,a.kt)("inlineCode",{parentName:"a"},"react-native-testing-library"))," facilitate writing user-centric tests by careful choice of provided APIs. The following example uses ",(0,a.kt)("inlineCode",{parentName:"p"},"fireEvent")," methods ",(0,a.kt)("inlineCode",{parentName:"p"},"changeText")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"press")," that simulate a user interacting with the component and a query function ",(0,a.kt)("inlineCode",{parentName:"p"},"getAllByText")," that finds matching ",(0,a.kt)("inlineCode",{parentName:"p"},"Text")," nodes in the rendered output."),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),"test('given empty GroceryShoppingList, user can add an item to it', () => {\n  const { getByPlaceholder, getByText, getAllByText } = render(\n    <GroceryShoppingList />\n  );\n\n  fireEvent.changeText(\n    getByPlaceholder('Enter grocery item'),\n    'banana'\n  );\n  fireEvent.press(getByText('Add the item to list'));\n\n  const bananaElements = getAllByText('banana');\n  expect(bananaElements).toHaveLength(1); // expect 'banana' to be on the list\n});\n")),(0,a.kt)("p",null,"This example is not testing how some state changes when you call a function. It tests what happens when a user changes text in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInput")," and presses the ",(0,a.kt)("inlineCode",{parentName:"p"},"Button"),"!"),(0,a.kt)("h3",c({},{id:"testing-rendered-output"}),"Testing Rendered Output"),(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"https://jestjs.io/docs/en/snapshot-testing"}),"Snapshot testing")," is an advanced kind of testing enabled by Jest. It is a very powerful and low-level tool, so extra attention is advised when using it."),(0,a.kt)("p",null,'A "component snapshot" is a JSX-like string created by a custom React serializer built into Jest. This serializer lets Jest translate React component trees to string that\'s human-readable. Put another way: a component snapshot is a textual representation of your component\u2019s render output ',(0,a.kt)("em",{parentName:"p"},"generated")," during a test run. It may look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-jsx"}),'<Text\n  style={\n    Object {\n      "fontSize": 20,\n      "textAlign": "center",\n    }\n  }>\n  Welcome to React Native!\n</Text>\n')),(0,a.kt)("p",null,"With snapshot testing, you typically first implement your component and then run the snapshot test. The snapshot test then creates a snapshot and saves it to a file in your repo as a reference snapshot. ",(0,a.kt)("strong",{parentName:"p"},"The file is then committed and checked during code review"),". Any future changes to the component render output will change its snapshot, which will cause the test to fail. You then need to update the stored reference snapshot for the test to pass. That change again needs to be committed and reviewed."),(0,a.kt)("p",null,"Snapshots have several weak points:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For you as a developer or reviewer, it can be hard to tell whether a change in snapshot is intended or whether it's evidence of a bug. Especially large snapshots can quickly become hard to understand and their added value becomes low."),(0,a.kt)("li",{parentName:"ul"},"When snapshot is created, at that point it is considered to be correct-even in the case when the rendered output is actually wrong."),(0,a.kt)("li",{parentName:"ul"},"When a snapshot fails, it's tempting to update it using the ",(0,a.kt)("inlineCode",{parentName:"li"},"--updateSnapshot")," jest option without taking proper care to investigate whether the change is expected. Certain developer discipline is thus needed.")),(0,a.kt)("p",null,"Snapshots themselves do not ensure that your component render logic is correct, they are merely good at guarding against unexpected changes and for checking that the components in the React tree under test receive the expected props (styles and etc.)."),(0,a.kt)("p",null,"We recommend that you only use small snapshots (see ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md"}),(0,a.kt)("inlineCode",{parentName:"a"},"no-large-snapshots")," rule"),"). If you want to test a ",(0,a.kt)("em",{parentName:"p"},"change")," between two React component states, use ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/jest-community/snapshot-diff"}),(0,a.kt)("inlineCode",{parentName:"a"},"snapshot-diff")),". When in doubt, prefer explicit expectations as described in the previous paragraph."),(0,a.kt)("img",{src:"assets/p_tests-snapshot.svg",alt:" "}),(0,a.kt)("h2",c({},{id:"end-to-end-tests"}),"End-to-End Tests"),(0,a.kt)("p",null,"In end-to-end (E2E) tests, you verify your app is working as expected on a device (or a simulator / emulator) from the user perspective."),(0,a.kt)("p",null,"This is done by building your app in the release configuration and running the tests against it. In E2E tests, you no longer think about React components, React Native APIs, Redux stores or any business logic. That is not the purpose of E2E tests and those are not even accessible to you during E2E testing."),(0,a.kt)("p",null,"Instead, E2E testing libraries allow you to find and control elements in the screen of your app: for example, you can ",(0,a.kt)("em",{parentName:"p"},"actually")," tap buttons or insert text into ",(0,a.kt)("inlineCode",{parentName:"p"},"TextInputs")," the same way a real user would. Then you can make assertions about whether or not a certain element exists in the app\u2019s screen, whether or not it\u2019s visible, what text it contains, and so on."),(0,a.kt)("p",null,"E2E tests give you the highest possible confidence that part of your app is working. The tradeoffs include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"writing them is more time consuming compared to the other types of tests"),(0,a.kt)("li",{parentName:"ul"},"they are slower to run"),(0,a.kt)("li",{parentName:"ul"},'they are more prone to flakiness (a "flaky" test is a test which randomly passes and fails without any change to code)')),(0,a.kt)("p",null,"Try to cover the vital parts of your app with E2E tests: authentication flow, core functionalities, payments, etc. Use faster JS tests for the non-vital parts of your app. The more tests you add, the higher your confidence, but also, the more time you'll spend maintaining and running them. Consider the tradeoffs and decide what's best for you."),(0,a.kt)("p",null,"There are several E2E testing tools available: in the React Native community, ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/wix/detox/"}),"Detox")," is a popular framework because it\u2019s tailored for React Native apps. Another popular library in the space of iOS and Android apps is ",(0,a.kt)("a",c({parentName:"p"},{href:"http://appium.io/"}),"Appium"),"."),(0,a.kt)("img",{src:"assets/p_tests-e2e.svg",alt:" "}),(0,a.kt)("h2",c({},{id:"summary"}),"Summary"),(0,a.kt)("p",null,"We hope you enjoyed reading and learned something from this guide. There are many ways you can test your apps. It may be hard to decide what to use at first. However, we believe it all will make sense once you start adding tests to your awesome React Native app. So what are you waiting for? Get your coverage up!"),(0,a.kt)("h3",c({},{id:"links"}),"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://zh-hans.reactjs.org/docs/testing.html"}),"React testing overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/callstack/react-native-testing-library"}),(0,a.kt)("inlineCode",{parentName:"a"},"react-native-testing-library"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://www.native-testing-library.com/"}),(0,a.kt)("inlineCode",{parentName:"a"},"@testing-library/react-native"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://jestjs.io/docs/en/tutorial-react-native"}),"Jest docs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/wix/detox/"}),"Detox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"http://appium.io/"}),"Appium"))),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"This guide originally authored and contributed in full by ",(0,a.kt)("a",c({parentName:"em"},{href:"https://twitter.com/vonovak"}),"Vojtech Novak"),".")))}f.isMDXComponent=!0}}]);