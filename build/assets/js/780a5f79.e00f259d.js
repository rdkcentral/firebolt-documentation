"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[4602],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=m(n),u=l,c=k["".concat(o,".").concat(u)]||k[u]||s[u]||r;return n?a.createElement(c,p(p({ref:t},d),{},{components:n})):a.createElement(c,p({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var m=2;m<r;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),p=["components"],i={title:"SecondScreen"},o="SecondScreen Module",m={unversionedId:"api/SecondScreen",id:"version-0.8.0/api/SecondScreen",title:"SecondScreen",description:"---",source:"@site/versioned_docs/version-0.8.0/api/SecondScreen.md",sourceDirName:"api",slug:"/api/SecondScreen",permalink:"/docs/api/SecondScreen",draft:!1,tags:[],version:"0.8.0",frontMatter:{title:"SecondScreen"},sidebar:"api",previous:{title:"Profile",permalink:"/docs/api/Profile"},next:{title:"Firebolt Core SDK",permalink:"/docs/api/"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"device",id:"device",level:3},{value:"friendlyName",id:"friendlyname",level:3},{value:"listen",id:"listen",level:3},{value:"once",id:"once",level:3},{value:"protocols",id:"protocols",level:3},{value:"Events",id:"events",level:2},{value:"closeRequest",id:"closerequest",level:3},{value:"launchRequest",id:"launchrequest",level:3},{value:"Additional events",id:"additional-events",level:3}],k={toc:s};function u(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"secondscreen-module"},"SecondScreen Module"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Version 0.8.0"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null," Methods for communicating with second screen devices"),(0,r.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,r.kt)("p",null,"Firebolt APIs are maintained in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk"},"rdkcentral/firebolt-core-sdk")," GitHub repository."),(0,r.kt)("p",null,"You can see this API in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/secondscreen.json"},"secondscreen.json")," OpenRPC JSON-Schema document. "),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#overview"},"Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#openrpc"},"OpenRPC"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#usage"},"Usage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#methods"},"Methods")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#device"},"device")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#friendlyname"},"friendlyName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#listen"},"listen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#once"},"once")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#protocols"},"protocols")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#events"},"Events")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#additional-events"},"Additional Events")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#schemas"},"Schemas")))),(0,r.kt)("span",null),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the SecondScreen module, you can import it into your project from the Firebolt SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SecondScreen } from '@firebolt-js/sdk'\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"device"},"device"),(0,r.kt)("p",null,"Get the broadcasted id for the device"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function device(type?: string): Promise<string>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},'The type of second screen protocol, e.g. "dial"')))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"the device id")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SecondScreen } from '@firebolt-js/sdk'\n\nSecondScreen.device(null)\n    .then(deviceId => {\n        console.log(deviceId)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"deviceId"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"device-id"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "secondscreen.device",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "device-id"\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"friendlyname"},"friendlyName"),(0,r.kt)("p",null,"Get the broadcasted friendly name for the device"),(0,r.kt)("p",null,"To get the value, call the method with no parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function friendlyName(): Promise<string>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"the device friendly-name")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SecondScreen } from '@firebolt-js/sdk'\n\nSecondScreen.friendlyName(null)\n    .then(friendlyName => {\n        console.log(friendlyName)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"friendlyName"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"Living Room"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "secondscreen.friendlyName",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "Living Room"\n}\n'))),(0,r.kt)("p",null,"To subscribe to notifications when the value changes, pass a function as the only parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function friendlyName(subscriber: (friendlyName: string) => void): Promise<boolean>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subscriber")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback that gets invoked when the value for friendlyName changes")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"listenerId")),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the listener that can be used with SecondScreen.clear(listenerId) to unsubscribe")))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"friendlyName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the device friendly-name")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SecondScreen } from '@firebolt-js/sdk'\n\nSecondScreen.friendlyName(friendlyName => {\n  // property value was changed\n  console.log(friendlyName)\n}).then(listenerId => {\n  // you can clear this listener w/ SecondScreen.clear(listenerId)\n})\n")),(0,r.kt)("p",null,"value of ",(0,r.kt)("inlineCode",{parentName:"p"},"friendlyName"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"Living Room"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "secondscreen.onFriendlyNameChanged",\n  "params": {\n    "listen": true\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "1",\n  "result": {\n    "listening": "true"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "Living Room"\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listen"},"listen"),(0,r.kt)("p",null,"Listen for events from this module."),(0,r.kt)("p",null,"To listen to a specific event pass the event name as the first parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"SecondScreen.listen(event: string, (data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event to listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs.")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"SecondScreen.clear(id)"))))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"To listen to all events from this module  pass only a callback, without specifying an event name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"SecondScreen.listen((event: string, data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs. The event data depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event that has occured listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"SecondScreen.clear(id)"))))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../../docs/listening-for-events/"},"Listening for events")," for more information and examples."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"once"},"once"),(0,r.kt)("p",null,"Listen for only one occurance of an event from this module. The callback will be cleared after one event."),(0,r.kt)("p",null,"To listen to a specific event pass the event name as the first parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"SecondScreen.once(event: string, (data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event to listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs.")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"SecondScreen.clear(id)"))))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"To listen to all events from this module  pass only a callback, without specifying an event name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"SecondScreen.once((event: string, data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs. The event data depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event that has occured listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"SecondScreen.clear(id)"))))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../../docs/listening-for-events/"},"Listening for events")," for more information and examples."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"protocols"},"protocols"),(0,r.kt)("p",null,"Get the supported second screen discovery protocols"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function protocols(): Promise<BooleanMap>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../schemas/types#/definitions/booleanmap"},(0,r.kt)("inlineCode",{parentName:"a"},"BooleanMap"))),(0,r.kt)("td",{parentName:"tr",align:null},"the supported protocols")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SecondScreen } from '@firebolt-js/sdk'\n\nSecondScreen.protocols()\n    .then(protocols => {\n        console.log(protocols)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"protocols"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "dial1.7": true\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "secondscreen.protocols",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "dial1.7": true\n  }\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"closerequest"},"closeRequest"),(0,r.kt)("p",null,"Listen to the closeRequest event"),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"listen()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"once()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"clear()"),"."),(0,r.kt)("p",null,"Event value:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../schemas/secondscreen#/definitions/secondscreenevent"},(0,r.kt)("inlineCode",{parentName:"a"},"SecondScreenEvent"))),(0,r.kt)("td",{parentName:"tr",align:null},"An a message notification from a second screen device")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example:"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SecondScreen } from '@firebolt-js/sdk'\n\nSecondScreen.listen('closeRequest', closeRequestEvent => {\n  console.log(closeRequestEvent)\n})\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"closeRequestEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "dial",\n  "version": "1.7"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "secondscreen.onCloseRequest",\n  "params": {\n    "listen": true\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "type": "dial",\n    "version": "1.7"\n  }\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"launchrequest"},"launchRequest"),(0,r.kt)("p",null,"Listen to the launchRequest event"),(0,r.kt)("p",null,"See also: ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"listen()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"once()"),", ",(0,r.kt)("a",{parentName:"p",href:"#listen"},"clear()"),"."),(0,r.kt)("p",null,"Event value:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../schemas/secondscreen#/definitions/secondscreenevent"},(0,r.kt)("inlineCode",{parentName:"a"},"SecondScreenEvent"))),(0,r.kt)("td",{parentName:"tr",align:null},"An a message notification from a second screen device")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example:"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { SecondScreen } from '@firebolt-js/sdk'\n\nSecondScreen.listen('launchRequest', launchRequestEvent => {\n  console.log(launchRequestEvent)\n})\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"launchRequestEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "dial",\n  "version": "1.7",\n  "data": "{\\"code\\":\\"AQDPQZiQcb3KQ7gY7yy5tHTMbbkGHR9Zjp-KL53H3eKBZIeAt7O9UKYPu6B21l2UZVmIqkFXDXBmXvK4g2e3EgZtjMNmKPsTltgnRl95DImtOXjSpWtTjSaOkW4w1kZKUTwLKdwVWTzBVH8ERHorvLU6vCGOVHxXt65LNwdl5HKRweShVC1V9QsyvRnQS61ov0UclmrH_xZML2Bt-Q-rZFjey5MjwupIb4x4f53XUJMhjHpDHoIUKrjpdPDQvK2a\\",\\"friendlyName\\":\\"Operator_TX061AEI\\",\\"UDN\\":\\"608fef11-2800-482a-962b-23a6690c93c1\\"}"\n}\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "secondscreen.onLaunchRequest",\n  "params": {\n    "listen": true\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "type": "dial",\n    "version": "1.7",\n    "data": "{\\"code\\":\\"AQDPQZiQcb3KQ7gY7yy5tHTMbbkGHR9Zjp-KL53H3eKBZIeAt7O9UKYPu6B21l2UZVmIqkFXDXBmXvK4g2e3EgZtjMNmKPsTltgnRl95DImtOXjSpWtTjSaOkW4w1kZKUTwLKdwVWTzBVH8ERHorvLU6vCGOVHxXt65LNwdl5HKRweShVC1V9QsyvRnQS61ov0UclmrH_xZML2Bt-Q-rZFjey5MjwupIb4x4f53XUJMhjHpDHoIUKrjpdPDQvK2a\\",\\"friendlyName\\":\\"Operator_TX061AEI\\",\\"UDN\\":\\"608fef11-2800-482a-962b-23a6690c93c1\\"}"\n  }\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"additional-events"},"Additional events"),(0,r.kt)("p",null,"The following events are documented as part of a related set of method APIs."),(0,r.kt)("p",null,'For more information, follow the links under the "Documentation" column.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"JavaScript"),(0,r.kt)("th",{parentName:"tr",align:null},"RPC"),(0,r.kt)("th",{parentName:"tr",align:null},"Payload"),(0,r.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"friendlyNameChanged"),(0,r.kt)("td",{parentName:"tr",align:null},"onFriendlyNameChanged"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#friendlyname"},"friendlyName"))))))}u.isMDXComponent=!0}}]);