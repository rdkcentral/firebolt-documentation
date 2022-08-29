"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[1706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=i,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14463:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],o={title:"App Lifecycle"},p="App Lifecycle",s={unversionedId:"firebolt_docs/app-lifecycle/lifecycle-management",id:"version-0.8.0/firebolt_docs/app-lifecycle/lifecycle-management",title:"App Lifecycle",description:"The app lifecycle is how the platform informs your app how to behave based on its state. These lifecycle states determine which features and APIs should be used and when.",source:"@site/versioned_docs/version-0.8.0/firebolt_docs/app-lifecycle/lifecycle-management.md",sourceDirName:"firebolt_docs/app-lifecycle",slug:"/firebolt_docs/app-lifecycle/lifecycle-management",permalink:"/docs/firebolt_docs/app-lifecycle/lifecycle-management",draft:!1,tags:[],version:"0.8.0",frontMatter:{title:"App Lifecycle"},sidebar:"firebolt_docs",previous:{title:"App Lifecycle",permalink:"/docs/category/app-lifecycle"},next:{title:"Listening for Events",permalink:"/docs/firebolt_docs/app-lifecycle/listening-for-events"}},d={},u=[{value:"What are the App States",id:"what-are-the-app-states",level:2},{value:"What is an App State Transition",id:"what-is-an-app-state-transition",level:2},{value:"App Responsibility for each State",id:"app-responsibility-for-each-state",level:2},{value:"Managing your App&#39;s Lifecycle",id:"managing-your-apps-lifecycle",level:2},{value:"Getting your app Ready",id:"getting-your-app-ready",level:3},{value:"Responding to State Transitions",id:"responding-to-state-transitions",level:3},{value:"Closing your App",id:"closing-your-app",level:3},{value:"Unloading your App",id:"unloading-your-app",level:3},{value:"Navigation Intents",id:"navigation-intents",level:3},{value:"Fast App Switching",id:"fast-app-switching",level:3},{value:"Example State Flows",id:"example-state-flows",level:2},{value:"Cold Launch",id:"cold-launch",level:3},{value:"Hot Launch",id:"hot-launch",level:3},{value:"User Opens Platform Settings",id:"user-opens-platform-settings",level:3}],c={toc:u};function m(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-lifecycle"},"App Lifecycle"),(0,r.kt)("p",null,"The app lifecycle is how the platform informs your app how to behave based on its state. These lifecycle states determine which features and APIs should be used and when."),(0,r.kt)("h2",{id:"what-are-the-app-states"},"What are the App States"),(0,r.kt)("p",null,"States are how your app understands whether it is the user's primary focus and if certain capabilities, e.g. receiving remote key presses, are available. The states your app can be in are as follows."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Lifecycle State"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"not running")),(0,r.kt)("td",{parentName:"tr",align:null},"Application is not running and not loaded in memory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inactive")),(0,r.kt)("td",{parentName:"tr",align:null},"Application is loaded but not visible. It does not receive any remote/keyboard input and cannot play media. It must free any non-required memory (such as AV buffers) and minimize network and CPU usage (ie: disable or reduce the frequency of timers, disabling animations, closing web sockets). It should replace the UI with a full-screen loading splash screen so that this will be the first thing displayed when transitioning into Active or Background state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"suspended")),(0,r.kt)("td",{parentName:"tr",align:null},"Inactive app has been suspended to RAM so no resources are available, but will maintain state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"foreground"),"\xa0","(Active)"),(0,r.kt)("td",{parentName:"tr",align:null},"Application is visible full screen, receives inputs, and can play media.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"background"),"\xa0","(Active)"),(0,r.kt)("td",{parentName:"tr",align:null},"Application is ",(0,r.kt)("em",{parentName:"td"},"partially")," or ",(0,r.kt)("em",{parentName:"td"},"not")," visible, can play media, and ",(0,r.kt)("em",{parentName:"td"},"does not")," receive key press events except for play and pause.")))),(0,r.kt)("h2",{id:"what-is-an-app-state-transition"},"What is an App State Transition"),(0,r.kt)("p",null,"A state transition is when the platform moves your app from one state, for example going from ",(0,r.kt)("inlineCode",{parentName:"p"},"inactive"),", to another, ",(0,r.kt)("inlineCode",{parentName:"p"},"foreground"),"."),(0,r.kt)("center",null,"FIGURE 1: This image represents all of the possible states your App can transition to and from.",(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Firebolt App Lifecycle",src:a(43563).Z,width:"880",height:"491"}))),(0,r.kt)("p",null,"When your app is first loaded it will stay in the transitory ",(0,r.kt)("inlineCode",{parentName:"p"},"initializing")," state. The platform will never transition your app out of the ",(0,r.kt)("inlineCode",{parentName:"p"},"initializing")," state until you call ",(0,r.kt)("inlineCode",{parentName:"p"},"ready()"),". Once ",(0,r.kt)("inlineCode",{parentName:"p"},"ready()")," is called, your app will be moved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"inactive")," state. From there, ",(0,r.kt)("a",{parentName:"p",href:"#example-state-flows"},"several use cases")," are possible."),(0,r.kt)("p",null,"Your app will not transition to ",(0,r.kt)("inlineCode",{parentName:"p"},"foreground")," without going through either ",(0,r.kt)("inlineCode",{parentName:"p"},"inactive")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"background")," first."),(0,r.kt)("h2",{id:"app-responsibility-for-each-state"},"App Responsibility for each State"),(0,r.kt)("p",null,"When your app transitions into a new state, there are some responsibilities it should handle in order to ensure efficient running of all apps."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Lifecycle State"),(0,r.kt)("th",{parentName:"tr",align:null},"Responsibilities"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inactive")),(0,r.kt)("td",{parentName:"tr",align:null},"Free any unrequired memory (such as AV buffers) and minimize network and CPU usage (ie: disable or reduce the frequency of timers, disabling animations, closing web sockets). It may replace the UI with a full-screen loading splash screen so that this will be the first thing displayed when transitioning into the ",(0,r.kt)("inlineCode",{parentName:"td"},"foreground")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"background")," states.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inactive")," (from ",(0,r.kt)("inlineCode",{parentName:"td"},"suspended"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"When returning from ",(0,r.kt)("inlineCode",{parentName:"td"},"suspended")," your app may need to refresh any sessions, timers, or tokens that it uses to run smoothly. ",(0,r.kt)("inlineCode",{parentName:"td"},"suspended")," apps have had their CPU usage frozen for un unknown amount of time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"foreground")),(0,r.kt)("td",{parentName:"tr",align:null},"The only responsibility here is to provide a great experience for your users!")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"background")),(0,r.kt)("td",{parentName:"tr",align:null},"Consider reducing video quality")))),(0,r.kt)("h2",{id:"managing-your-apps-lifecycle"},"Managing your App's Lifecycle"),(0,r.kt)("h3",{id:"getting-your-app-ready"},"Getting your app Ready"),(0,r.kt)("p",null,"In order to give your app complete control over when it is presented to the user, the platform provides the ",(0,r.kt)("a",{parentName:"p",href:"/api/lifecycle/#ready"},(0,r.kt)("inlineCode",{parentName:"a"},"Lifecycle.ready()"))," method. This allows the platform to wait for your app to be functionally and visually prepared for the user, and prevents the platform from waiting any longer than necessary."),(0,r.kt)("p",null,"This needs to be called before your App can be put into the ",(0,r.kt)("inlineCode",{parentName:"p"},"foreground"),". This must only be called once. If your app is going to respond to any event(s) then it\u2019s a best practice to ",(0,r.kt)("a",{parentName:"p",href:"/docs/firebolt_docs/app-lifecycle/listening-for-events"},(0,r.kt)("inlineCode",{parentName:"a"},"listen()")," to those events")," before calling ",(0,r.kt)("inlineCode",{parentName:"p"},"ready()"),"."),(0,r.kt)("p",null,"Your app is ready when these three requirements are met."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Response Time"),(0,r.kt)("td",{parentName:"tr",align:null},"The time it takes for your app to show a response to a user key-press must be less than 100ms. For example, user selects 'play' and it either starts playing or a 'loading' icon appears within 100ms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Playback Start"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of time between a user requesting playback and the asset starting playback must be less than 3 seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deep Linking"),(0,r.kt)("td",{parentName:"tr",align:null},"Your app must support ",(0,r.kt)("a",{parentName:"td",href:"./deep-linking.md"},"Deep linking, via Navigation Intents"))))),(0,r.kt)("p",null,"Here is an example that listens for deep links, and then calls ",(0,r.kt)("inlineCode",{parentName:"p"},"ready()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle, Discovery } from '@firebolt-js/sdk'\n\nDiscovery.listen('navigateTo', (value) => {\n  if (value.action == 'entity') {\n    // navigate to the entity page\n    callMyCustomNavigateFunction(value.data.entityId)\n  }\n}\n\nLifecycle.ready()\n")),(0,r.kt)("p",null,"This example shows how an App can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Discovery.listen()")," to ready itself for when the user wants to go to a specific piece of content. When the app is .ready() it will give the user the ability to find that content."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"callMyCustomNavigateFunction")," is just a placeholder for your own, much better-named method."),(0,r.kt)("h3",{id:"responding-to-state-transitions"},"Responding to State Transitions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Lifecycle.listen()")," is how your app will know it\u2019s being moved from state to state. This allows your app to behave accordingly. Aside from calling ",(0,r.kt)("inlineCode",{parentName:"p"},"ready()")," it\u2019s the most fundamental aspect of using the App Lifecycle API."),(0,r.kt)("p",null,"Here is an example of an app that listens to ",(0,r.kt)("em",{parentName:"p"},"all")," of the Lifecycle events, and handles some of them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\u200b\nLifecycle.listen( (event, value) => {\n  // this code runs for every lifecycle event\n  if (value.state === 'foreground') {  \n    // the user is now being presented your app as the main experience\n  } else if (value.state === 'inactive') {  \n    // Stop playing video, e.g. video.src = \u2018\u2019\n    if (value.previous === 'suspended') {\n      // when your app goes from suspended to inactive, you probably want to refresh and tokens/sessions/timers, etc.\n    }\n  }\n})\n")),(0,r.kt)("p",null,"Note that each ",(0,r.kt)("inlineCode",{parentName:"p"},"if/else")," clause is left empty, as you know better what your app will do then we do!"),(0,r.kt)("h3",{id:"closing-your-app"},"Closing your App"),(0,r.kt)("p",null,"Once in a while you will need to close your app, for example the user pressed the ",(0,r.kt)("inlineCode",{parentName:"p"},"last")," remote button at the top of your app UX."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/api/lifecycle/#close"},(0,r.kt)("inlineCode",{parentName:"a"},"Lifecycle.close()")," method")," instructs the platform to stop presenting your app to the user. This method has a mandatory ",(0,r.kt)("inlineCode",{parentName:"p"},"reason")," parameter that gives your app a way to influence which state it might be transitioned to."),(0,r.kt)("p",null,"The platform will make the determination of how it will transition your app and it can be one of four possible transitions \u2013"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It could move your app into ",(0,r.kt)("inlineCode",{parentName:"li"},"background"),", so that video may continue playing"),(0,r.kt)("li",{parentName:"ul"},"It could move the App into ",(0,r.kt)("inlineCode",{parentName:"li"},"inactive"),", and then ",(0,r.kt)("a",{parentName:"li",href:"#unloading-your-app"},"unload it")," shortly after"),(0,r.kt)("li",{parentName:"ul"},"It could move the app into ",(0,r.kt)("inlineCode",{parentName:"li"},"inactive"),", and then ",(0,r.kt)("inlineCode",{parentName:"li"},"suspended")," shortly after"),(0,r.kt)("li",{parentName:"ul"},"It could move the App into ",(0,r.kt)("inlineCode",{parentName:"li"},"inactive"),", and leave it there until the user decides to return")),(0,r.kt)("p",null,"In order to help the platform determine why your app is requesting to be closed, one of the following values ",(0,r.kt)("strong",{parentName:"p"},"must")," be provided:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"userExit")),(0,r.kt)("td",{parentName:"tr",align:null},"The User explicitly selected an exit control that is rendered within your App UX.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"remoteButton")),(0,r.kt)("td",{parentName:"tr",align:null},"The User pressed the ",(0,r.kt)("inlineCode",{parentName:"td"},"last")," button on their remote from the App\u2019s Home page.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"error")),(0,r.kt)("td",{parentName:"tr",align:null},"Your App encountered an unrecoverable error, and needs to be exited. See ",(0,r.kt)("a",{parentName:"td",href:"/api/metrics/#error"},(0,r.kt)("inlineCode",{parentName:"a"},"Metrics.error()")),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Even if your App is closed it may not be unloaded."))),(0,r.kt)("h3",{id:"unloading-your-app"},"Unloading your App"),(0,r.kt)("p",null,"A User may need more CPU and/or memory, and if your App is not demanded, the platform will send an ",(0,r.kt)("inlineCode",{parentName:"p"},"unloading")," event. When that happens it is strongly recommended that you do any final operations your app needs to do, and then call ",(0,r.kt)("a",{parentName:"p",href:"/api/lifecycle/#finished"},(0,r.kt)("inlineCode",{parentName:"a"},"Lifecylce.finished()")),"."),(0,r.kt)("p",null,"After receiving the ",(0,r.kt)("inlineCode",{parentName:"p"},"unloading")," event, your app can handle any Metrics or other clean-up tasks.\nThere is a small amount of time that your App can perform these processes, so do them quickly."),(0,r.kt)("p",null,"It\u2019s also recommended that your app ",(0,r.kt)("a",{parentName:"p",href:"/docs/firebolt_docs/app-lifecycle/listening-for-events#clearing-listeners"},"clear out all Firebolt listeners")," during this time."),(0,r.kt)("p",null,"Once the App has gone through these phases it should call ",(0,r.kt)("a",{parentName:"p",href:"/api/lifecycle/#finished"},(0,r.kt)("inlineCode",{parentName:"a"},"Lifecylce.finished()")),"."),(0,r.kt)("p",null,"This allows the platform to ensure that the device optimizes memory and CPU giving users the best experience available."),(0,r.kt)("h3",{id:"navigation-intents"},"Navigation Intents"),(0,r.kt)("p",null,"Generally, when an application is deep-linked, the deep link parameters are sent via the initial launch URL. However, as an application may already be in an ",(0,r.kt)("inlineCode",{parentName:"p"},"inactive"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"foreground"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"background")," state, the app must also support responding to deep-links without a reload."),(0,r.kt)("p",null,'In the platform, these are called "Navigation Intents".'),(0,r.kt)("p",null,"Some of the use cases enabled via Navigation Intents are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allow a user click on your content in the platform EPG experience when your app is already loaded and in the ",(0,r.kt)("inlineCode",{parentName:"li"},"inactive")," state."),(0,r.kt)("li",{parentName:"ul"},"Allow a user to quickly go to their \u201cMost recently watched\u201d programs from the platform home screen into your app with a single action."),(0,r.kt)("li",{parentName:"ul"},"Allow a user to navigate from one part of your app to a particular piece of content by using the Voice Remote"),(0,r.kt)("li",{parentName:"ul"},"Allow a user to navigate from outside of your app to a particular piece of content by using the Voice Remote without waiting for a full cold launch of your app"),(0,r.kt)("li",{parentName:"ul"},'Allow a user to navigate to a specific non-entity "section" of your site, Example: Tell my app to pull up my \u201cRecently Watched List\u201d via my remote.')),(0,r.kt)("p",null,"Here is an example of handling Navigation Intents in your app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import {  Discovery } from '@firebolt-js/sdk'\n\nDiscovery.listen('navigateTo', (value) => {\n  // navigate to a specific program entity\n  if (value.action === 'entity') {\n    // navigate to the player page for episodes\n    if (value.data.programType === 'episode') {\n      myAppPlayContent(value.data.entityId, value.data.assetId)\n    }\n    // navigate to an entity details page for a series\n    else if (value.data.programType === 'series') {\n      myAppNavigateToEntityPage(value.data.entityId)\n    }\n  }\n  // navigate to a non-program section of the site\n  else if (value.action === 'section')\n  {\n    // navigate to the recently watched section of your app\n    if (value.data.sectionName === '<your custom recently watched section name>') {\n      myAppNavigateToSection(value.data.sectionName)\n    }\n  }\n}\n\nLifecycle.ready()\n")),(0,r.kt)("p",null,"Note that this is just an example to show usage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigateTo")," event. All of the ",(0,r.kt)("inlineCode",{parentName:"p"},"myAppXXX")," methods are made up."),(0,r.kt)("h3",{id:"fast-app-switching"},"Fast App Switching"),(0,r.kt)("p",null,"The platform allows your app to be pre-loaded on device start-up and suspended after use, allowing subsequent fast access to the application, collectively known as Quickstart. In order for your app to support Fast App Switching, you must implement the following functionality and the associated event handlers and APIs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getting-your-app-ready"},(0,r.kt)("inlineCode",{parentName:"a"},"Getting your App Ready"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#responding-to-state-transitions"},(0,r.kt)("inlineCode",{parentName:"a"},"Responding to State Transitions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#navigation-intents"},(0,r.kt)("inlineCode",{parentName:"a"},"Navigation Intents")))),(0,r.kt)("h2",{id:"example-state-flows"},"Example State Flows"),(0,r.kt)("h3",{id:"cold-launch"},"Cold Launch"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cold Launch",src:a(17763).Z,width:"1133",height:"438"})),(0,r.kt)("h3",{id:"hot-launch"},"Hot Launch"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hot Launch",src:a(52121).Z,width:"986",height:"497"})),(0,r.kt)("h3",{id:"user-opens-platform-settings"},"User Opens Platform Settings"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Background for Settings",src:a(84411).Z,width:"1106",height:"440"})))}m.isMDXComponent=!0},84411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lifecycle-background-settings-15d484bb55c68dcf929378a055f10c6c.png"},17763:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lifecycle-cold-launch-51d900ad763759a8021b2b9a63c74945.png"},52121:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lifecycle-hot-launch-8aa814c6dd909f9baaeedd01119900fc.png"},43563:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lifecycle-states-47901e843df18016590e02136dc8677e.png"}}]);