"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[3794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?o.createElement(k,r(r({ref:t},u),{},{components:n})):o.createElement(k,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(87462),a=n(63366),l=(n(67294),n(3905)),r=["components"],i={},p="How to Use Mock Firebolt",s={unversionedId:"firebolt_docs/getting-started/how-to-use-mock-firebolt",id:"version-0.6.0-alpha.1/firebolt_docs/getting-started/how-to-use-mock-firebolt",title:"How to Use Mock Firebolt",description:"In this practical guide, you'll learn how to set up and use Mock Firebolt.",source:"@site/versioned_docs/version-0.6.0-alpha.1/firebolt_docs/getting-started/how-to-use-mock-firebolt.md",sourceDirName:"firebolt_docs/getting-started",slug:"/firebolt_docs/getting-started/how-to-use-mock-firebolt",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/getting-started/how-to-use-mock-firebolt",draft:!1,tags:[],version:"0.6.0-alpha.1",frontMatter:{},sidebar:"firebolt_docs",previous:{title:"Hello World Guide",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/getting-started/hello-world-guide"},next:{title:"Prerequisites",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/getting-started/prerequisites"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"What you&#39;ll learn",id:"what-youll-learn",level:2},{value:"What you&#39;ll do",id:"what-youll-do",level:2},{value:"Step 1 - Clone the Git repository",id:"step-1---clone-the-git-repository",level:3},{value:"Step 2 - Start the Mock Firebolt server",id:"step-2---start-the-mock-firebolt-server",level:3},{value:"Step 3 - Run the server",id:"step-3---run-the-server",level:3},{value:"Step 4 - Connect Mock Firebolt to your app",id:"step-4---connect-mock-firebolt-to-your-app",level:3},{value:"Step 5 - Use Mock Firebolt with your app",id:"step-5---use-mock-firebolt-with-your-app",level:3},{value:"Examples",id:"examples",level:4},{value:"Testing Events",id:"testing-events",level:3},{value:"Example: Testing your app&#39;s reaction to Accessibility setting changes",id:"example-testing-your-apps-reaction-to-accessibility-setting-changes",level:4}],d={toc:c};function m(e){var t=e.components,i=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"how-to-use-mock-firebolt"},"How to Use Mock Firebolt"),(0,l.kt)("p",null,"In this practical guide, you'll learn how to set up and use Mock Firebolt. "),(0,l.kt)("p",null,"Mock Firebolt is an app test tool that allows you to write a Firebolt\xae app to test the app's behavior. For instance, it will enable testing of unexpected error responses from Firebolt\xae across any code branch. This means you can test mock responses from devices normally unavailable to test. It allows complete control of your app's responses from the Firebolt SDK, and you can change these responses at any time to anything (",(0,l.kt)("em",{parentName:"p"},"that's valid per the Firebolt API  definitions"),")."),(0,l.kt)("p",null,"For example, this might be used:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"by a developer with only an STB to get Firebolt\xae to answer as if it is a TV (or vice versa).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"to test variations of accessibility settings, advertising settings, etc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"to send and test events in your app to ensure your code handles events correctly. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"to test how the app responds to errors from the Firebolt\xae SDK.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"to test slow responses from the Firebolt\xae SDK.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"to test deep links (",(0,l.kt)("inlineCode",{parentName:"p"},"navigateTo"),") within the app."))),(0,l.kt)("p",null,"Note: The standard Firebolt\xae SDK has a set of static mock responses built-in, but it is not controllable or extensible."),(0,l.kt)("p",null,"Since the Firebolt\xae SDK does not validate parameters on method calls, you can also use Mock Firebolt to validate that your invocations of Firebolt\xae methods are correct."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"This ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Mock Firebolt"))," guide is designed with the following assumptions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You have some experience with the basics of programming (building apps, working with APIs, etc.) and have some experience working with the JavaScript programming language. This guide does not explain the JavaScript language.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You understand the basics of app file structures and concepts like repositories.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You understand how Git repos work and how to clone repositories.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You understand how to use the command-line interface (CLI) and common CLI tools.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You understand JavaScript run-time tools like Node and NPM.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"You understand how to install and use JavaScript packages on your local machine."))),(0,l.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A computer running Windows or Linux, or a Mac running macOS."),(0,l.kt)("li",{parentName:"ul"},"Ensure you have a package manager like Node available on your machine. To learn more, check out our ",(0,l.kt)("a",{parentName:"li",href:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/getting-started/prerequisites"},"Prerequisites guide")),(0,l.kt)("li",{parentName:"ul"},"Internet access or an alternative way of loading the latest Firebolt\xae SDK and Lighting\u2122 JavaScript framework onto your computer.")),(0,l.kt)("h2",{id:"what-youll-learn"},"What you'll learn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"How to install Mock Firebolt on your local machine."),(0,l.kt)("li",{parentName:"ul"},"How to connect your app to Mock Firebolt.")),(0,l.kt)("h2",{id:"what-youll-do"},"What you'll do"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Clone the Mock Firebolt Repo."),(0,l.kt)("li",{parentName:"ul"},"Get the Mock Firebolt server up and running locally on your machine."),(0,l.kt)("li",{parentName:"ul"},"Connect your app to Mock Firebolt."),(0,l.kt)("li",{parentName:"ul"},"Adjust how Mock Firebolt responds to your app's Firebolt\xae calls and test how your app responds to those responses.")),(0,l.kt)("h1",{id:"important-dependency-note"},"Important dependency note"),(0,l.kt)("p",null,"Mock Firebolt requires that your client app import 0.6.0-alpha.1 or later of the Firebolt\xae SDK."),(0,l.kt)("p",null,"If you use an older SDK version (e.g., 0.5.3), no traffic will make it from the SDK to the Mock Firebolt."),(0,l.kt)("h1",{id:"sdk-support"},"SDK support"),(0,l.kt)("p",null,"Mock Firebolt supports these Firebolt\xae SDKs: ",(0,l.kt)("strong",{parentName:"p"},"core"),", ",(0,l.kt)("strong",{parentName:"p"},"manage"),", ",(0,l.kt)("strong",{parentName:"p"},"discovery"),"."),(0,l.kt)("p",null,"By default, only the core SDK is enabled, meaning if you try to make calls to methods in the other SDKs, MFOS will display an error."),(0,l.kt)("p",null,"This default mode is appropriate for app developers developing third-party content apps that don't need (nor get) the permissions necessary to use the other SDKs."),(0,l.kt)("p",null,'For developers building \\"operator apps\\" / \\"search and discover apps\\" which need one or more of these SDKs, when running the Mock Firebolt server, you can pass flags like ',(0,l.kt)("inlineCode",{parentName:"p"},"--manage")," and/or ",(0,l.kt)("inlineCode",{parentName:"p"},"--discovery")," to enable the specific SDK(s) desired",(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,l.kt)("h1",{id:"getting-started---get-the-mock-firebolt-on-your-machine"},"Getting Started - Get the Mock Firebolt on your machine"),(0,l.kt)("h3",{id:"step-1---clone-the-git-repository"},"Step 1 - Clone the Git repository"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set your directory where you want to clone the repositories you'll need. You can name the local folder whatever you'd like.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone the Mock Firebolt repository from Github: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/mock-firebolt"},"https://github.com/rdkcentral/mock-firebolt")),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"Clone it via GitHub desktop")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"clone github repo",src:n(38196).Z,width:"2504",height:"1556"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone these two repositories using the same method."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rdkcentral/firebolt-openrpc.git"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rdkcentral/firebolt-core-sdk.git"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use your CLI to change your directory to Mock Firebolt OS (MFOS) using the command ",(0,l.kt)("inlineCode",{parentName:"p"},"cd [filepath]\\mock-firebolt-os"),"."))),(0,l.kt)("p",null,"The file structure should place the Firebolt\xae Mock repo alongside the Firebolt\xae Core SDK and Firebolt\xae Open RPC repos."),(0,l.kt)("h3",{id:"step-2---start-the-mock-firebolt-server"},"Step 2 - Start the Mock Firebolt server"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use the CLI command ",(0,l.kt)("inlineCode",{parentName:"p"},"cd server")," to start the Mock Firebolt server (if you're running locally)."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cd server\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the one-time install command(s) to clean, create, and build a sub-directory."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"npm install\nnpm run clean\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This command will build the Core Firebolt\xae SDK:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"npm run build:core\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"This command will build the source code within your project:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"npm run build:mf\n")))))),(0,l.kt)("h3",{id:"step-3---run-the-server"},"Step 3 - Run the server"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In your CLI, open a new window/tab respectively. Run the command"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cd [filepath]\\mock-firebolt\nnpm run dev\n")))),(0,l.kt)("h3",{id:"step-4---connect-mock-firebolt-to-your-app"},"Step 4 - Connect Mock Firebolt to your app"),(0,l.kt)("p",null,"Mock Firebolt is a server that runs on your computer. The app needs to talk to Mock Firebolt to start getting responses. The requests that the app makes go to Mock Firebolt and Mock Firebolt will answer those requests like the SDK would without configuration. "),(0,l.kt)("p",null,"To connect Mock Firebolt to your app, you'll need to do the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Import the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/rdkcentral/firebolt-hello-world/blob/main/pt3-firebolt_hello_world-mock/scripts/activateMockFirebolt.js"},"Activate Mock Firebolt script")," into your app. This script must execute before the Firebolt\xae SDK does, so you'll want to import the script into your ",(0,l.kt)("inlineCode",{parentName:"li"},"index.html")," file. This prevents the script from being bundled if you're using a bundler such as Webpack. "),(0,l.kt)("li",{parentName:"ol"},"When you run your app, you'll need to include ",(0,l.kt)("inlineCode",{parentName:"li"},"mf=true")," in your query string.")),(0,l.kt)("p",null,"You can view the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/mock-firebolt/blob/main/docs/UsageWithinApps.md"},"Using Mock Firebolt Within Apps")," documentation for further information on how this works. If you have any troubles getting Mock Firebolt to work on your app, you can check out the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/comcast/firebolt-hello-world/"},"Hello World")," example."),(0,l.kt)("h3",{id:"step-5---use-mock-firebolt-with-your-app"},"Step 5 - Use Mock Firebolt with your app"),(0,l.kt)("p",null,'Now that your Mock Firebolt session is up and running and connected to your app, you can use the Mock Firebolt commands. This is a useful way to simulate app responses by providing "Mock Overrides." '),(0,l.kt)("p",null,"These responses will only affect your app if your app is built to react to the response. For example, let's say you built your app to have a blue background when the device is a TV, but a red background when the device is a set-top box. If you use ",(0,l.kt)("inlineCode",{parentName:"p"},'node cli.mjs --method device.type --result "TV"'),", then you are telling Firebolt that the device is a TV, so when you refresh your app, it should show a blue background. If your app does not specify differences between devices, then you will not see any changes. "),(0,l.kt)("p",null,"Anytime you execute a command successfully, your CLI terminal will show ",(0,l.kt)("inlineCode",{parentName:"p"},"status: SUCCESS"),". "),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Use Mock Firebolt to simulate a set-top box:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'node cli.mjs --method device.type --result "STB" \n')),(0,l.kt)("p",null,"Now when your app calls ",(0,l.kt)("inlineCode",{parentName:"p"},"Device.type"),", the response will be ",(0,l.kt)("inlineCode",{parentName:"p"},"STB"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Simulate a Smart TV:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'node cli.mjs --method device.type --result "TV" \n')),(0,l.kt)("p",null,"Now when your app calls ",(0,l.kt)("inlineCode",{parentName:"p"},"Device.type"),", the response will be ",(0,l.kt)("inlineCode",{parentName:"p"},"TV"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Simulate a user who prefers Spanish"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'node cli.mjs --method localization.language --result "es" \n')),(0,l.kt)("p",null,"Now when your app calls ",(0,l.kt)("inlineCode",{parentName:"p"},"Localization.language"),", the response will be ",(0,l.kt)("inlineCode",{parentName:"p"},"ES"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Simulate a user who prefers French"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'node cli.mjs --method localization.language --result "fr" \n')),(0,l.kt)("p",null,"Now when your app calls ",(0,l.kt)("inlineCode",{parentName:"p"},"Localization.language"),", the response will be ",(0,l.kt)("inlineCode",{parentName:"p"},"FR"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Simulate Closed Captions being on:")),(0,l.kt)("p",null,"Create a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"accessibilityClosedCaptionsOn.json")," containing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"methods": {\n    "accessibility.closedCaptionsSettings": {\n      "result": {\n        "enabled": true,\n        "styles": {\n          "fontFamily": "Monospace sans-serif",\n          "fontSize": 1,\n          "fontColor": "#ffffff",\n          "fontEdge": "none",\n          "fontEdgeColor": "#7F7F7F",\n          "fontOpacity": 100,\n          "backgroundColor": "#000000",\n          "backgroundOpacity": 100,\n          "textAlign": "center",\n          "textAlignVertical": "middle"\n        }\n      }\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Then execute the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node cli.mjs --upload /path/to/accessibilityClosedCaptionsOn.json\n")),(0,l.kt)("p",null,"Now, when your app calls ",(0,l.kt)("inlineCode",{parentName:"p"},"Accessibility.closedCaptionsSettings"),", the response will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'        "enabled": true,\n        "styles": {\n          "fontFamily": "Monospace sans-serif",\n          "fontSize": 1,\n          "fontColor": "#ffffff",\n          "fontEdge": "none",\n          "fontEdgeColor": "#7F7F7F",\n          "fontOpacity": 100,\n          "backgroundColor": "#000000",\n          "backgroundOpacity": 100,\n          "textAlign": "center",\n          "textAlignVertical": "middle"\n        }\n      }\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Simulate Voice Guidance being off:")),(0,l.kt)("p",null,"Create a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"accessibilityVoiceGuidanceOff.json")," containing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "methods": {\n    "accessibility.voiceGuidanceSettings": {\n      "result": {\n        "enabled": false,\n        "speed": 5\n      }\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Then execute the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node cli.mjs --upload /path/to/accessibilityVoiceGuidanceOff.json\n")),(0,l.kt)("p",null,"Now, when your app calls ",(0,l.kt)("inlineCode",{parentName:"p"},"Accessibility.voiceGuidanceSettings"),", the response will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "enabled": false,\n        "speed": 5\n      }\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Simulate a 1920x1080 screen resolution:")),(0,l.kt)("p",null,"Create a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"screenResolution1920by1080.json")," containing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "methods": {\n    "device.screenResolution": {\n      "result": [ 1920, 1080 ]\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Then execute the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node cli.mjs --upload /path/to/screenResolution1920by1080.json\n")),(0,l.kt)("p",null,"Now, when your app calls ",(0,l.kt)("inlineCode",{parentName:"p"},"Device.screenResolution"),", the response will be ",(0,l.kt)("inlineCode",{parentName:"p"},"1920, 1080"),"."),(0,l.kt)("h3",{id:"testing-events"},"Testing Events"),(0,l.kt)("h4",{id:"example-testing-your-apps-reaction-to-accessibility-setting-changes"},"Example: Testing your app's reaction to Accessibility setting changes"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Simulate a user turning closed captioning on"),":"),(0,l.kt)("p",null,"Create a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"closedCaptioningOn.event.json")," containing:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "method": "accessibility.onClosedCaptionsSettingsChanged",\n  "result": {\n    "enabled": true,\n    "styles": {\n      "fontFamily": "Monospace sans-serif",\n      "fontSize": 1,\n      "fontColor": "#ffffff",\n      "fontEdge": "none",\n      "fontEdgeColor": "#7F7F7F",\n      "fontOpacity": 100,\n      "backgroundColor": "#000000",\n      "backgroundOpacity": 100,\n      "textAlign": "center",\n      "textAlignVertical": "middle"\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Then execute the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"node cli.mjs --upload /path/to/closedCaptioningOn.event.json\n")),(0,l.kt)("p",null,"Now, when your app calls ",(0,l.kt)("inlineCode",{parentName:"p"},"Accessibility.onClosedCaptionsSettingsChanged"),", the response will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "enabled": true,\n    "styles": {\n      "fontFamily": "Monospace sans-serif",\n      "fontSize": 1,\n      "fontColor": "#ffffff",\n      "fontEdge": "none",\n      "fontEdgeColor": "#7F7F7F",\n      "fontOpacity": 100,\n      "backgroundColor": "#000000",\n      "backgroundOpacity": 100,\n      "textAlign": "center",\n      "textAlignVertical": "middle"\n    }\n')),(0,l.kt)("h1",{id:"commands-for-mock-firebolt"},"Commands for Mock Firebolt"),(0,l.kt)("p",null,"To see a list of commands in your terminal window, use the following: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"node cli.mjs --help\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Intent"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --help"),(0,l.kt)("td",{parentName:"tr",align:null},"Use this to pull up the how to use info")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --user ",(0,l.kt)("inlineCode",{parentName:"td"},"<userId>")),(0,l.kt)("td",{parentName:"tr",align:null},"Target the given user; Overrides the .mf.config.json file, if present. See below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --port 3333"),(0,l.kt)("td",{parentName:"tr",align:null},"If running Mock Firebolt on a non-standard port. See below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --quiet"),(0,l.kt)("td",{parentName:"tr",align:null},"Don't emit command summary text; helpful for exporting state. See below")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --health"),(0,l.kt)("td",{parentName:"tr",align:null},"Performs health check on Mock Firebolt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --state"),(0,l.kt)("td",{parentName:"tr",align:null},"Asks Mock Firebolt to dump its state; handy for debugging")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --revert"),(0,l.kt)("td",{parentName:"tr",align:null},"Go back to the way things were when server started (w.r.t. state)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --latency 0"),(0,l.kt)("td",{parentName:"tr",align:null},"Set min and max latency values to given value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --latency 50 --latency  100"),(0,l.kt)("td",{parentName:"tr",align:null},"Set min and max latency values to given values; min 1st, max 2nd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --method device.type  --latency 3000"),(0,l.kt)("td",{parentName:"tr",align:null},"Set min and max latency values to given value for given method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --method device.type  --latency 2500 --latency 3500"),(0,l.kt)("td",{parentName:"tr",align:null},"Set min and max latency values to given values for given method; min 1st,  max 2nd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --mode default"),(0,l.kt)("td",{parentName:"tr",align:null},"Set mode to DEFAULT; mock overrides used first, OpenRPC examples second")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --mode box"),(0,l.kt)("td",{parentName:"tr",align:null},"Set mode to BOX; Only OpenRPC examples used/returned. Overrides unused")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --method account.id --result  \"'111'\""),(0,l.kt)("td",{parentName:"tr",align:null},"Set result for given method the next time it is called")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'node cli.mjs --method device.id --errCode  -32888 --errMsg "Sad day for you"'),(0,l.kt)("td",{parentName:"tr",align:null},"Set error code & msg for method")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --upload  ../examples/slow.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Use this to upload information to the your App.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --event  ../examples/device-onDeviceNameChanged1.event.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Send events (methods, result keys expected)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"node cli.mjs --sequence  ../examples/events1.sequence.json"),(0,l.kt)("td",{parentName:"tr",align:null},"Send a timed sequence of events.")))),(0,l.kt)("p",null,"Note: You can also use commands that look like: ",(0,l.kt)("inlineCode",{parentName:"p"},"./mf.sh  --help")),(0,l.kt)("h1",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"Congratulations, you set up Mock Firebolt to test your app!"),(0,l.kt)("p",null,"You now know how to:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Clone the Mock Firebolt repo"),(0,l.kt)("li",{parentName:"ol"},"Set it up and connect Mock Firebolt to your app"),(0,l.kt)("li",{parentName:"ol"},"Specify how various Firebolt methods should respond when called, and see how your app reacts.")),(0,l.kt)("p",null,"To continue learning more about Firebolt\xae, check out our ",(0,l.kt)("a",{parentName:"p",href:"https://developer.comcast.com/firebolt/core/sdk/latest/api/"},"API")," docs and our ",(0,l.kt)("a",{parentName:"p",href:"https://developer.comcast.com/firebolt/core/sdk/latest/docs/quick-start-guide/"},"Quickstart")," guide."),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},"When running on an actual device, your app will only have the permissions it has been given.",(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},38196:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/clone-github-repo-28cb0070758bb9d5b97f044c19f58799.jpg"}}]);