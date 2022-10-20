"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[3598],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=o(n),c=l,d=k["".concat(s,".").concat(c)]||k[c]||m[c]||r;return n?a.createElement(d,p(p({ref:t},u),{},{components:n})):a.createElement(d,p({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<r;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),p=["components"],i={title:"Lifecycle"},s="Lifecycle Module",o={unversionedId:"api/Lifecycle",id:"version-0.7.0/api/Lifecycle",title:"Lifecycle",description:"---",source:"@site/versioned_docs/version-0.7.0/api/Lifecycle.md",sourceDirName:"api",slug:"/api/Lifecycle",permalink:"/firebolt-documentation/docs/0.7.0/api/Lifecycle",draft:!1,tags:[],version:"0.7.0",frontMatter:{title:"Lifecycle"},sidebar:"api",previous:{title:"Keyboard",permalink:"/firebolt-documentation/docs/0.7.0/api/Keyboard"},next:{title:"Localization",permalink:"/firebolt-documentation/docs/0.7.0/api/Localization"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"close",id:"close",level:3},{value:"finished",id:"finished",level:3},{value:"listen",id:"listen",level:3},{value:"once",id:"once",level:3},{value:"ready",id:"ready",level:3},{value:"state",id:"state",level:3},{value:"Events",id:"events",level:2},{value:"background",id:"background",level:3},{value:"foreground",id:"foreground",level:3},{value:"inactive",id:"inactive",level:3},{value:"suspended",id:"suspended",level:3},{value:"unloading",id:"unloading",level:3},{value:"Schemas",id:"schemas",level:2},{value:"LifecycleEvent",id:"lifecycleevent",level:3}],k={toc:m};function c(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lifecycle-module"},"Lifecycle Module"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Version 0.8.0"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null," Methods and events for responding to lifecycle changes in your app"),(0,r.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,r.kt)("p",null,"Firebolt APIs are maintained in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk"},"rdkcentral/firebolt-core-sdk")," GitHub repository."),(0,r.kt)("p",null,"You can see this API in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/lifecycle.json"},"lifecycle.json")," OpenRPC JSON-Schema document. "),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#overview"},"Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#openrpc"},"OpenRPC"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#usage"},"Usage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#methods"},"Methods")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#close"},"close")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#finished"},"finished")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#listen"},"listen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#once"},"once")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ready"},"ready")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#state"},"state")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#events"},"Events")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#schemas"},"Schemas"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#lifecycleevent"},"LifecycleEvent"))))),(0,r.kt)("span",null),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the Lifecycle module, you can import it into your project from the Firebolt SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"close"},"close"),(0,r.kt)("p",null,"Request that the platform move your app out of focus"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function close(reason: CloseReason): Promise<void>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reason")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../schemas/lifecycle#/definitions/closereason"},(0,r.kt)("inlineCode",{parentName:"a"},"CloseReason"))),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"The reason the app is requesting to be closed")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"void\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Close the app when the user presses back on the app home screen"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\nLifecycle.close(\"remoteButton\")\n    .then(success => {\n        console.log(success)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"null\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.close",\n  "params": {\n    "reason": "remoteButton"\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": null\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"More examples..."),"Close the app when the user selects an exit menu item",(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\nLifecycle.close(\"userExit\")\n    .then(success => {\n        console.log(success)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"null\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.close",\n  "params": {\n    "reason": "userExit"\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": null\n}\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"finished"},"finished"),(0,r.kt)("p",null,"Notify the platform that the app is done unloading"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function finished(): Promise<void>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"void\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\nLifecycle.finished()\n    .then(results => {\n        console.log(results)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"results"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"null\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.finished",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": null\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listen"},"listen"),(0,r.kt)("p",null,"Listen for events from this module."),(0,r.kt)("p",null,"To listen to a specific event pass the event name as the first parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Lifecycle.listen(event: string, (data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event to listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs.")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Lifecycle.clear(id)"))))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"To listen to all events from this module  pass only a callback, without specifying an event name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Lifecycle.listen((event: string, data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs. The event data depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event that has occured listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Lifecycle.clear(id)"))))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../../docs/listening-for-events/"},"Listening for events")," for more information and examples."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"once"},"once"),(0,r.kt)("p",null,"Listen for only one occurance of an event from this module. The callback will be cleared after one event."),(0,r.kt)("p",null,"To listen to a specific event pass the event name as the first parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Lifecycle.once(event: string, (data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event to listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs.")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Lifecycle.clear(id)"))))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"To listen to all events from this module  pass only a callback, without specifying an event name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Lifecycle.once((event: string, data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs. The event data depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event that has occured listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Lifecycle.clear(id)"))))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../../docs/listening-for-events/"},"Listening for events")," for more information and examples."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ready"},"ready"),(0,r.kt)("p",null,"Notify the platform that the app is ready"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function ready(): Promise<void>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"void\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Let the platform know that your app is ready"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\nLifecycle.ready()\n    .then(result => {\n        console.log(result)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"null\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.ready",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": null\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"state"},"state"),(0,r.kt)("p",null,"Get the current state of the app. This function is ",(0,r.kt)("strong",{parentName:"p"},"synchronous"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function state(): LifecycleState\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../schemas/lifecycle#/definitions/lifecyclestate"},(0,r.kt)("inlineCode",{parentName:"a"},"LifecycleState"))),(0,r.kt)("td",{parentName:"tr",align:null},"The application lifecycle state")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from ''\n\nconst state = Lifecycle.state()\nconsole.log(state)\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"state"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"foreground"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.state",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "foreground"\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"background"},"background"),(0,r.kt)("p",null,"Listen to the background event"),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"listen()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"once()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"clear()"),"."),(0,r.kt)("p",null,"Event value:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#lifecycleevent"},(0,r.kt)("inlineCode",{parentName:"a"},"LifecycleEvent"))),(0,r.kt)("td",{parentName:"tr",align:null},"A an object describing the previous and current states")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example:"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\nLifecycle.listen('background', value => {\n  console.log(value)\n})\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"value")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "state": "background",\n  "previous": "foreground"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.onBackground",\n  "params": {\n    "listen": true\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "state": "background",\n    "previous": "foreground"\n  }\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"foreground"},"foreground"),(0,r.kt)("p",null,"Listen to the foreground event"),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"listen()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"once()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"clear()"),"."),(0,r.kt)("p",null,"Event value:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#lifecycleevent"},(0,r.kt)("inlineCode",{parentName:"a"},"LifecycleEvent"))),(0,r.kt)("td",{parentName:"tr",align:null},"A an object describing the previous and current states")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example:"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\nLifecycle.listen('foreground', value => {\n  console.log(value)\n})\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"value")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "state": "foreground",\n  "previous": "inactive"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.onForeground",\n  "params": {\n    "listen": true\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "state": "foreground",\n    "previous": "inactive"\n  }\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"More examples..."),"Move to foreground via remote branded buton:",(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\nLifecycle.listen('foreground', value => {\n  console.log(value)\n})\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"value")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "state": "foreground",\n  "previous": "inactive",\n  "source": "remote"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.onForeground",\n  "params": {\n    "listen": true\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "state": "foreground",\n    "previous": "inactive",\n    "source": "remote"\n  }\n}\n')))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"inactive"},"inactive"),(0,r.kt)("p",null,"Listen to the inactive event"),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"listen()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"once()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"clear()"),"."),(0,r.kt)("p",null,"Event value:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#lifecycleevent"},(0,r.kt)("inlineCode",{parentName:"a"},"LifecycleEvent"))),(0,r.kt)("td",{parentName:"tr",align:null},"A an object describing the previous and current states")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example:"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\nLifecycle.listen('inactive', value => {\n  console.log(value)\n})\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"value")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "state": "inactive",\n  "previous": "initializing"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.onInactive",\n  "params": {\n    "listen": true\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "state": "inactive",\n    "previous": "initializing"\n  }\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"suspended"},"suspended"),(0,r.kt)("p",null,"Listen to the suspended event"),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"listen()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"once()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"clear()"),"."),(0,r.kt)("p",null,"Event value:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#lifecycleevent"},(0,r.kt)("inlineCode",{parentName:"a"},"LifecycleEvent"))),(0,r.kt)("td",{parentName:"tr",align:null},"A an object describing the previous and current states")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example:"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\nLifecycle.listen('suspended', value => {\n  console.log(value)\n})\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"value")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "state": "suspended",\n  "previous": "inactive"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.onSuspended",\n  "params": {\n    "listen": true\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "state": "suspended",\n    "previous": "inactive"\n  }\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"unloading"},"unloading"),(0,r.kt)("p",null,"Listen to the unloading event"),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"listen()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"once()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"clear()"),"."),(0,r.kt)("p",null,"Event value:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#lifecycleevent"},(0,r.kt)("inlineCode",{parentName:"a"},"LifecycleEvent"))),(0,r.kt)("td",{parentName:"tr",align:null},"A an object describing the previous and current states")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example:"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Lifecycle } from '@firebolt-js/sdk'\n\nLifecycle.listen('unloading', value => {\n  console.log(value)\n})\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"value")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "state": "unloading",\n  "previous": "inactive"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "lifecycle.onUnloading",\n  "params": {\n    "listen": true\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "state": "unloading",\n    "previous": "inactive"\n  }\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("h3",{id:"lifecycleevent"},"LifecycleEvent"),(0,r.kt)("p",null,"A an object describing the previous and current states"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type LifecycleEvent = {\n  state: LifecycleState        // The application lifecycle state\n  previous: LifecycleState     // The application lifecycle state\n  source?: 'voice' | 'remote'  // The source of the lifecycle change.\n}\n")),(0,r.kt)("p",null,"See also: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../schemas/lifecycle#lifecyclestate"},"LifecycleState"))),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);