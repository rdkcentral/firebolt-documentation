"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[9004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),m=l,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),l=n(63366),a=(n(67294),n(3905)),i=["components"],r={},p="Hello World Guide",s={unversionedId:"firebolt_docs/getting-started/hello-world-guide",id:"version-0.6.0/firebolt_docs/getting-started/hello-world-guide",title:"Hello World Guide",description:"In this practical guide, you'll learn how to get up and running so you can build a simple single-page app using Firebolt\xae. This guide will show you fundamentals like importing modules and how to use the Device and Lifecycle modules.",source:"@site/versioned_docs/version-0.6.0/firebolt_docs/getting-started/hello-world-guide.md",sourceDirName:"firebolt_docs/getting-started",slug:"/firebolt_docs/getting-started/hello-world-guide",permalink:"/firebolt-documentation/docs/0.6.0/firebolt_docs/getting-started/hello-world-guide",draft:!1,tags:[],version:"0.6.0",frontMatter:{},sidebar:"firebolt_docs",previous:{title:"Getting Started",permalink:"/firebolt-documentation/docs/0.6.0/firebolt_docs/getting-started/quick-start-guide"},next:{title:"How to Use Mock Firebolt",permalink:"/firebolt-documentation/docs/0.6.0/firebolt_docs/getting-started/how-to-use-mock-firebolt"}},d={},c=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"What you&#39;ll learn",id:"what-youll-learn",level:2},{value:"What you&#39;ll do",id:"what-youll-do",level:2},{value:"Step 1: Clone the Hello World Github repo",id:"step-1-clone-the-hello-world-github-repo",level:3},{value:"Step 2: Install the Firebolt\xae SDK",id:"step-2-install-the-firebolt-sdk",level:3},{value:"Step 3: Import the Device and Lifecycle Modules from Firebolt\xae",id:"step-3-import-the-device-and-lifecycle-modules-from-firebolt",level:3},{value:"Step 4: Add some functionality to your app",id:"step-4-add-some-functionality-to-your-app",level:3},{value:"Step 4: Listening for events",id:"step-4-listening-for-events",level:3},{value:"Using the Firebolt Mock Application",id:"using-the-firebolt-mock-application",level:2},{value:"Connect Hello World with Mock Firebolt",id:"connect-hello-world-with-mock-firebolt",level:3},{value:"Example: Changing the distributor from <em>Company</em> to <em>Videos R US</em>",id:"example-changing-the-distributor-from-company-to-videos-r-us",level:3},{value:"Hello World Examples - Let&#39;s play",id:"hello-world-examples---lets-play",level:2}],u={toc:c};function m(e){var t=e.components,r=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hello-world-guide"},"Hello World Guide"),(0,a.kt)("p",null,"In this practical guide, you'll learn how to get up and running so you can build a simple single-page app using Firebolt\xae. This guide will show you fundamentals like importing modules and how to use the Device and Lifecycle modules."),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},'"Hello World"')," guide is designed with the following assumptions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You have some experience with the basics of programming (building apps, working with APIs, etc.) and have some experience working with the JavaScript programming language. This guide does not explain object-oriented programming or the JavaScript language.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'You know what a "Single-Page App" is and how they work.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You understand JavaScript runtime tools like Node and NPM.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You understand how to install and use JavaScript packages on your local machine."))),(0,a.kt)("h2",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A computer running Windows or Linux, or a Mac running macOS.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Internet access or an alternative way of loading the latest Firebolt\xae SDK and Lightning\u2122 JavaScript framework onto your computer.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install Lightning\u2122. No prior knowledge of Lightning\u2122 is required, but it is a required dependency for this project."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using your machine's command-line interface (CLI), input the command: "),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"npm install -g @lightningjs/cli\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For more detail on installing Lightning\u2122 go here: "),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"}," ",(0,a.kt)("a",{parentName:"p",href:"https://lightningjs.io/docs/#/getting-started/index"},"https://lightningjs.io/docs/#/getting-started/index")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ensure you have some package manager like NPM or YARN. "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For further instructions go here ",(0,a.kt)("a",{parentName:"li",href:"/firebolt-documentation/docs/0.6.0/firebolt_docs/getting-started/prerequisites"},"Prerequisites"))))),(0,a.kt)("h2",{id:"what-youll-learn"},"What you'll learn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to import Firebolt\xae modules."),(0,a.kt)("li",{parentName:"ul"},"How to register your Firebolt\xae events for the Lifecycle & Device modules.")),(0,a.kt)("h2",{id:"what-youll-do"},"What you'll do"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the necessary dependencies for this tutorial."),(0,a.kt)("li",{parentName:"ul"},"Create a blank project using Lightning, which is the UX framework this guide uses."),(0,a.kt)("li",{parentName:"ul"},"Install the Firebolt\xae SDK, allowing you to build a Firebolt\xae App."),(0,a.kt)("li",{parentName:"ul"},"Generate and build your app in a browser."),(0,a.kt)("li",{parentName:"ul"},"Explore and view the app you've built.")),(0,a.kt)("h1",{id:"app-overview"},"App Overview"),(0,a.kt)("p",null,"After successfully installing Lighting Studio, get Firebolt\xae up and running and create your app. At the end of all that, your finished app should look something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello World - End State Video",src:n(80192).Z,width:"1280",height:"720"})),(0,a.kt)("h1",{id:"getting-started---install-lightning--firebolt"},"Getting Started - Install Lightning & Firebolt\xae"),(0,a.kt)("h3",{id:"step-1-clone-the-hello-world-github-repo"},"Step 1: Clone the Hello World Github repo"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using any method you prefer, ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone")," or the Github desktop client, or a third way, use the URL ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-hello-world"},"https://github.com/rdkcentral/firebolt-hello-world")," and clone the ",(0,a.kt)("em",{parentName:"p"},"Hello World")," repo."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/rdkcentral/firebolt-hello-world.git\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Cloning hello world",src:n(26918).Z,width:"3584",height:"1684"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open your command-line interface (CLI) tool and change your directory to the repo you just cloned."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cd firebolt-hello-world/pt1-firebolt_hello_world-start\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'With CLI in the "hello_world" directory, run the command. This will install the ',(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file and any other dependencies."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"npm install\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional:")," Depending on your machine, you may need to install what is called ",(0,a.kt)("inlineCode",{parentName:"p"},"pug"),", which is an HTML pre-processor. If you're curious and want to learn more, go here ",(0,a.kt)("a",{parentName:"p",href:"https://www.sitepoint.com/a-beginners-guide-to-pug"},"https://www.sitepoint.com/a-beginners-guide-to-pug"),". In the meantime, run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install pug"),". If step 4 continues to show up as an error or you see something like ",(0,a.kt)("inlineCode",{parentName:"p"},"Error: Cannot find module 'pug'"),", then run the above command.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your CLI, use the commands"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"npm run build\nnpm run dev\n")))),(0,a.kt)("p",null,"This will build the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file in the directory and compile it with all the assets, including a source map. Ideally, making it easier to check for errors. After you've run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev"),", your default browser should pop up, and you should see,"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Step 1 of the project",src:n(18079).Z,width:"3578",height:"1820"})),(0,a.kt)("h3",{id:"step-2-install-the-firebolt-sdk"},"Step 2: Install the Firebolt\xae SDK"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the CLI use the command use the command"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"npm install @firebolt-js/sdk\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once that's done, use the same commands as above"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"npm run build\nnpm run dev\n")))),(0,a.kt)("h3",{id:"step-3-import-the-device-and-lifecycle-modules-from-firebolt"},"Step 3: Import the Device and Lifecycle Modules from Firebolt\xae"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the ",(0,a.kt)("em",{parentName:"li"},"Hello World")," repo you downloaded and open ",(0,a.kt)("inlineCode",{parentName:"li"},"firebolt-hello-world/pt1-firebolt_hello_world-start/src/App.js"),". Within the ",(0,a.kt)("inlineCode",{parentName:"li"},"App.js")," file, add the following line of code right below the other import(s) to add the modules ",(0,a.kt)("strong",{parentName:"li"},"Device")," and ",(0,a.kt)("strong",{parentName:"li"},"Lifecycle")," to your app:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle, Device } from '@firebolt-js/sdk';\n")),(0,a.kt)("h3",{id:"step-4-add-some-functionality-to-your-app"},"Step 4: Add some functionality to your app"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"While still in the ",(0,a.kt)("inlineCode",{parentName:"li"},"App.js")," file, go to the following line:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{...\n  _active() {\n  }\n}\n")),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"_active()")," method is how the Lightning\u2122 framework initiates your app and is not part of Firebolt\xae. "),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After ",(0,a.kt)("inlineCode",{parentName:"li"},"_active() {"),", is where you put your Firebolt\xae code! Add the following Firebolt\xae code on a new line:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Device.distributor()\n.then(distributor => {\n  const deviceDistributor = 'distributor:' + distributor;\n  this.tag('Device').text.text = deviceDistributor + ' :: '; \n});\n\nDevice.model()\n.then(model => {\n  const deviceModel = 'model:' + model;\n  this.tag('Device').text.text += deviceModel + ' :: '; \n});\n\nDevice.platform()\n.then(platform => {\n  const devicePlatform = 'platform:' + platform;\n  this.tag('Device').text.text += devicePlatform + ' :: '; \n});\n\nDevice.version()\n.then(version => {\n  const deviceVersion = 'version:' + version.sdk.readable + ' : v' + version.sdk.major + '.' + version.sdk.minor + '.' + version.sdk.patch;\n  this.tag('Device').text.text += deviceVersion; \n});  \n")),(0,a.kt)("p",null,"This will append the ",(0,a.kt)("inlineCode",{parentName:"p"},"Device")," text field with the appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"firebolt Device")," information and show it on your screen. This is also the module you'd use to check details such as device IDs and manufacturer makes and models."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Refresh your browser, and you should now see\n",(0,a.kt)("img",{alt:"Adding device info",src:n(49711).Z,width:"3578",height:"1820"}))),(0,a.kt)("h3",{id:"step-4-listening-for-events"},"Step 4: Listening for events"),(0,a.kt)("p",null,"Let's add the Lifecycle event listeners to your app. This will allow it to respond to the various Lifecycle states an app may go through."),(0,a.kt)("p",null,"For more information on listening to events, please reference the API documentation:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developer.comcast.com/firebolt/core/sdk/latest/docs/listening-for-events/"},"https://developer.comcast.com/firebolt/core/sdk/latest/docs/listening-for-events/"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"App.js")," file, add the following code at the same level as ",(0,a.kt)("inlineCode",{parentName:"li"},"_active()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"_init()"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"_registerLifecycleCallbacks() {\n  Lifecycle.listen((event, value) => {\n    console.log('Lifecycle.listen:', event, value);\n\n    if (value.state) {\n      console.log('Lifecycle: >> : previous state :' + value.previous, value);\n      console.log('Lifecycle: >> : current state :' + value.state, value);\n    }\n\n    if (value.state == 'foreground') {\n      console.log('Lifecycle : Foreground State');\n      this.tag('HelloWorld').color = LifecycleColors.FOREGROUND;\n      this.tag('Lifecycle').text.text = 'Lifecycle : Foreground State';\n      this.tag('Complete').visible = true;\n    }\n    if (value.state == 'inactive') {\n      console.log('Lifecycle : Inactive State');\n      this.tag('HelloWorld').color = LifecycleColors.INACTIVE;\n      this.tag('Lifecycle').text.text = 'Lifecycle : Inactive State';\n    }\n    if (value.state == 'background') {\n      console.log('Lifecycle : Background State');\n      this.tag('HelloWorld').color = LifecycleColors.BACKGROUND;\n      this.tag('Lifecycle').text.text = 'Lifecycle : Background State';\n    }\n  });\n}\n")),(0,a.kt)("p",null,"Using the functions you've added we're going to call ",(0,a.kt)("inlineCode",{parentName:"p"},"_registerLifecycleCallbacks")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"_active()")," function. By adding the following code within the ",(0,a.kt)("inlineCode",{parentName:"p"},"_active()"),", your app will register Lifecycle events and inform Firebolt\xae when your app is ready to launch, also known as ",(0,a.kt)("inlineCode",{parentName:"p"},"'Lifecycle.ready'")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Next, add the following code to the ",(0,a.kt)("inlineCode",{parentName:"li"},"_active()")," function.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"this._registerLifecycleCallbacks();\nLifecycle.ready();\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Now refresh your browser, and your app should display the following:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Lifecycle state and background color change to reflect the transitions to the 'Foreground' state")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Inactive state",src:n(49711).Z,width:"3578",height:"1820"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Lifecycle inactive State",src:n(12663).Z,width:"3432",height:"1914"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Foreground State",src:n(91443).Z,width:"1249",height:"698"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hello World - End State Video",src:n(80192).Z,width:"1280",height:"720"})),(0,a.kt)("p",null,"The Lifecycle state and background color change to reflect the transitions to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Foreground")," state."),(0,a.kt)("p",null,"You're almost finished! Right now, your app is running in the mock transport layer provided by the Firebolt\xae SDK. That means you can test your app and the Firebolt\xae API, but static pre-determined values will be returned. They won't change based on your input. It's a good sanity check but not particularly robust. However, if you'd like to test your app and see dynamic values, you can use Firebolts Mock application."),(0,a.kt)("h2",{id:"using-the-firebolt-mock-application"},"Using the Firebolt Mock Application"),(0,a.kt)("p",null,"For a more in-depth overview of how to set up Mock Firebolt, read our setup guide here: ",(0,a.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.6.0/firebolt_docs/getting-started/how-to-use-mock-firebolt"},"How to use Mock Firebolt")),(0,a.kt)("p",null,"To use Firebolt's mock application, repeat all the steps above but make these changes."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("a",{parentName:"p",href:"#step-1---clone-the-hello-world-github-repo"},"Step 1"),". Clone the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/mock-firebolt"},"https://github.com/rdkcentral/mock-firebolt")," repository instead of the one provided. This contains the dependencies that allow your app to connect to Mock Firebolt."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/rdkcentral/mock-firebolt\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In Step 1.2 change the directory to reflect the newly cloned repo."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cd pt3-Firebolt_hello_world-mock\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the rest of the steps as written above. With your browser open, append ",(0,a.kt)("inlineCode",{parentName:"p"},"?mf=true")," to the end of the URL above."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"localhost mf=true Closeup",src:n(31869).Z,width:"3584",height:"1922"})),(0,a.kt)("h3",{id:"connect-hello-world-with-mock-firebolt"},"Connect Hello World with Mock Firebolt"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open a new window/tab in your command-line interface (CLI) tool and change the directory to ",(0,a.kt)("inlineCode",{parentName:"p"},"cd [filepath]\\mock-firebolt-os"),", then run"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"cd server\n")))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"You should still have another CLI window open to the Hello World repo.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run these commands in the order below")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install\nnpm run clean\nnpm run build:core\nnpm run build:mf\n")),(0,a.kt)("p",null,"3 . In the same CLI window, run the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm run dev\n")),(0,a.kt)("p",null,"Now mock OS is up and running."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Open a new CLI window and type in the command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd cli\nnpm install\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Change the directory to")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd src\n")),(0,a.kt)("p",null,"Now you can modify the Hello World Firebolt\xae app using the CLI."),(0,a.kt)("h3",{id:"example-changing-the-distributor-from-company-to-videos-r-us"},"Example: Changing the distributor from ",(0,a.kt)("em",{parentName:"h3"},"Company")," to ",(0,a.kt)("em",{parentName:"h3"},"Videos R US")),(0,a.kt)("p",null,"In the CLI window where you're current directory is ",(0,a.kt)("inlineCode",{parentName:"p"},"$ src %")," use the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node cli.mjs --upload ../examples/device-distributor-1.json\n")),(0,a.kt)("p",null,"Refresh your browser, and you'll see the distributor go from ",(0,a.kt)("inlineCode",{parentName:"p"},"distributor: Company")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"distributor: Videos R Us"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"localhost mf=true",src:n(29491).Z,width:"3584",height:"1922"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"localhost change distributor",src:n(43963).Z,width:"3572",height:"1930"})),(0,a.kt)("h2",{id:"hello-world-examples---lets-play"},"Hello World Examples - Let's play"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Change the device model")),(0,a.kt)("p",null,"To change the model of the device from ",(0,a.kt)("inlineCode",{parentName:"p"},"model: xi6")," to say ",(0,a.kt)("inlineCode",{parentName:"p"},"xi3000")," use the command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node cli.mjs --upload\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Change your app's Lifecycle")),(0,a.kt)("p",null,"To send events such as methods, result keys, etc., use the command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node cli.mjs --event\n")),(0,a.kt)("p",null,"To change the lifecycle, use the command above along with an example file path and a lifecycle ",(0,a.kt)("inlineCode",{parentName:"p"},".json"),' file to change the state of the "Hello World App".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node cli.mjs --event ../examples/lifecycle-initializing-to-inactive.event.json\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"inatctive state",src:n(77283).Z,width:"3572",height:"1930"})),(0,a.kt)("p",null,"As an example going from inactive to the foreground state would be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node cli.mjs --event ../examples/../examples/lifecycle-inactive-to-foreground.event.json\n")),(0,a.kt)("h1",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Congratulations"),", you did it! You made your very first Firebolt\xae app!"),(0,a.kt)("p",null,"Now you know how to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install Firebolt\xae onto your device")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import Firebolt\xae modules")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the Device module to get the device information your app is running on")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the Lifecycle module to ensure your app is ready to run."))),(0,a.kt)("p",null,"To continue learning more about Firebolt\xae, check out our ",(0,a.kt)("a",{parentName:"p",href:"https://developer.comcast.com/firebolt/core/sdk/latest/api/"},"API")," docs and guides."))}m.isMDXComponent=!0},49711:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Adding-device-info-93b555e36db8dce512667f077067a044.png"},80192:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Hello-World-Video-e83ec83039976084e263c3d66974ae94.gif"},18079:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step-1-of-the-project-cdd7970eae1593577aeba96a13d8f1c9.png"},26918:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/cloning-hello-world-19b6cfffc59200426422a7714db02fe6.jpg"},77283:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/inatctive-state-d4bff3d78d39f2d80464f6597282c08b.jpg"},91443:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lifecycle-foreground-517f3f8dc1edc0f50828390433c0c2d2.png"},12663:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lifecycle-inactive-262715d274eba89c7d221ca97a6473bc.png"},43963:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/localhost-change-distributor-8c2979c43d17f92af597e1d84b26e912.jpg"},31869:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/localhost-mfistrue-Closeup-bec9a61b1993f96c80be97cc258e3f17.jpg"},29491:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/localhost-mfistrue-dfe14f1d0a121da723e5c0f83fc24f54.jpg"}}]);