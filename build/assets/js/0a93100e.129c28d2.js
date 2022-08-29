"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[3311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Parameters"},p="Parameters Module",s={unversionedId:"api/Parameters",id:"api/Parameters",title:"Parameters",description:"---",source:"@site/docs/api/Parameters.md",sourceDirName:"api",slug:"/api/Parameters",permalink:"/docs/next/api/Parameters",draft:!1,tags:[],version:"current",frontMatter:{title:"Parameters"},sidebar:"defaultSidebar",previous:{title:"Metrics",permalink:"/docs/next/api/Metrics"},next:{title:"Profile",permalink:"/docs/next/api/Profile"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"initialization",id:"initialization",level:3},{value:"Schemas",id:"schemas",level:2},{value:"AppInitialization",id:"appinitialization",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"parameters-module"},"Parameters Module"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Version 0.8.0"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null," Methods for getting initialization parameters for an app cold launch."),(0,i.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,i.kt)("p",null,"Firebolt APIs are maintained in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk"},"rdkcentral/firebolt-core-sdk")," GitHub repository."),(0,i.kt)("p",null,"You can see this API in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/parameters.json"},"parameters.json")," OpenRPC JSON-Schema document. "),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#openrpc"},"OpenRPC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#methods"},"Methods"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#initialization"},"initialization"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#schemas"},"Schemas"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#appinitialization"},"AppInitialization"))))),(0,i.kt)("span",null),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use the Parameters module, you can import it into your project from the Firebolt SDK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Parameters } from '@firebolt-js/sdk'\n")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"initialization"},"initialization"),(0,i.kt)("p",null,"Returns any initialization parameters for the app, e.g. initialial ",(0,i.kt)("inlineCode",{parentName:"p"},"NavigationIntent"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function initialization(): Promise<AppInitialization>\n")),(0,i.kt)("p",null,"Promise resolution:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#appinitialization"},(0,i.kt)("inlineCode",{parentName:"a"},"AppInitialization"))),(0,i.kt)("td",{parentName:"tr",align:null},"The initialization parameters.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Default Example"),(0,i.kt)("p",null,"JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Parameters } from '@firebolt-js/sdk'\n\nParameters.initialization()\n    .then(init => {\n        console.log(init)\n    })\n")),(0,i.kt)("p",null,"Value of ",(0,i.kt)("inlineCode",{parentName:"p"},"init"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "lmt": 0,\n  "us_privacy": "1-Y-",\n  "discovery": {\n    "navigateTo": {\n      "action": "entity",\n      "data": {\n        "entityId": "abc",\n        "entityType": "program",\n        "programType": "movie"\n      },\n      "context": {\n        "source": "voice"\n      }\n    }\n  }\n}\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"JSON-RPC:"),(0,i.kt)("p",null,"Request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "parameters.initialization",\n  "params": {}\n}\n')),(0,i.kt)("p",null,"Response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "lmt": 0,\n    "us_privacy": "1-Y-",\n    "discovery": {\n      "navigateTo": {\n        "action": "entity",\n        "data": {\n          "entityId": "abc",\n          "entityType": "program",\n          "programType": "movie"\n        },\n        "context": {\n          "source": "voice"\n        }\n      }\n    }\n  }\n}\n'))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"schemas"},"Schemas"),(0,i.kt)("h3",{id:"appinitialization"},"AppInitialization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type AppInitialization = {\n  us_privacy?: string                  // The IAB US Privacy string.\n  lmt?: number                         // The IAB limit ad tracking opt out value.\n  discovery?: {\n    navigateTo?: NavigationIntent      // A Firebolt compliant representation of a user intention to navigate to a specific place in an app.\n  }\n  secondScreen?: {\n    launchRequest?: SecondScreenEvent  // An a message notification from a second screen device\n  }\n}\n")),(0,i.kt)("p",null,"See also: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../schemas/intents#navigationintent"},"NavigationIntent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../schemas/secondscreen#secondscreenevent"},"SecondScreenEvent"))),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);