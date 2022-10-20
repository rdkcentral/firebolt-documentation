"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[9447],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=m(a),s=l,c=d["".concat(o,".").concat(s)]||d[s]||k[s]||r;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],p={title:"Localization"},o="Localization Module",m={unversionedId:"api/Localization",id:"version-0.7.0/api/Localization",title:"Localization",description:"---",source:"@site/versioned_docs/version-0.7.0/api/Localization.md",sourceDirName:"api",slug:"/api/Localization",permalink:"/firebolt-documentation/docs/0.7.0/api/Localization",draft:!1,tags:[],version:"0.7.0",frontMatter:{title:"Localization"},sidebar:"api",previous:{title:"Lifecycle",permalink:"/firebolt-documentation/docs/0.7.0/api/Lifecycle"},next:{title:"Metrics",permalink:"/firebolt-documentation/docs/0.7.0/api/Metrics"}},u={},k=[{value:"Overview",id:"overview",level:2},{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"additionalInfo",id:"additionalinfo",level:3},{value:"countryCode",id:"countrycode",level:3},{value:"language",id:"language",level:3},{value:"latlon",id:"latlon",level:3},{value:"listen",id:"listen",level:3},{value:"locale",id:"locale",level:3},{value:"locality",id:"locality",level:3},{value:"once",id:"once",level:3},{value:"postalCode",id:"postalcode",level:3},{value:"Events",id:"events",level:2},{value:"Additional events",id:"additional-events",level:3},{value:"Schemas",id:"schemas",level:2},{value:"LatLon",id:"latlon-1",level:3}],d={toc:k};function s(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"localization-module"},"Localization Module"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Version 0.8.0"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null," Methods for accessessing location and language preferences"),(0,r.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,r.kt)("p",null,"Firebolt APIs are maintained in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk"},"rdkcentral/firebolt-core-sdk")," GitHub repository."),(0,r.kt)("p",null,"You can see this API in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/localization.json"},"localization.json")," OpenRPC JSON-Schema document. "),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#overview"},"Overview"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#openrpc"},"OpenRPC"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#usage"},"Usage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#methods"},"Methods")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#additionalinfo"},"additionalInfo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#countrycode"},"countryCode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#language"},"language")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#latlon"},"latlon")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#listen"},"listen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#locale"},"locale")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#locality"},"locality")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#once"},"once")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#postalcode"},"postalCode")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#events"},"Events")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#additional-events"},"Additional Events")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#schemas"},"Schemas")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#latlon"},"LatLon"))))),(0,r.kt)("span",null),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use the Localization module, you can import it into your project from the Firebolt SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Localization } from '@firebolt-js/sdk'\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"additionalinfo"},"additionalInfo"),(0,r.kt)("p",null,"Get any platform-specific localization information, in an Map<string, string>"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function additionalInfo(): Promise<object>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"the additional info")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Localization } from '@firebolt-js/sdk'\n\nLocalization.additionalInfo()\n    .then(info => {\n        console.log(info)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "localization.additionalInfo",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {}\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"countrycode"},"countryCode"),(0,r.kt)("p",null,"Get the ISO 3166 code for the counrty device is located in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function countryCode(): Promise<string>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"the device country code")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Localization } from '@firebolt-js/sdk'\n\nLocalization.countryCode()\n    .then(code => {\n        console.log(code)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"US"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "localization.countryCode",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "US"\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"language"},"language"),(0,r.kt)("p",null,"Get the ISO 639 1/2 code for the preferred language"),(0,r.kt)("p",null,"To get the value, call the method with no parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function language(): Promise<string>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"the device language")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Localization } from '@firebolt-js/sdk'\n\nLocalization.language()\n    .then(lang => {\n        console.log(lang)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"lang"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"en"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "localization.language",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "en"\n}\n'))),(0,r.kt)("p",null,"To subscribe to notifications when the value changes, pass a function as the only parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function language(subscriber: (lang: string) => void): Promise<boolean>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subscriber")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback that gets invoked when the value for language changes")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"listenerId")),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the listener that can be used with Localization.clear(listenerId) to unsubscribe")))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lang")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the device language")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Localization } from '@firebolt-js/sdk'\n\nLocalization.language(lang => {\n  // property value was changed\n  console.log(lang)\n}).then(listenerId => {\n  // you can clear this listener w/ Localization.clear(listenerId)\n})\n")),(0,r.kt)("p",null,"value of ",(0,r.kt)("inlineCode",{parentName:"p"},"lang"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"en"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "localization.onLanguageChanged",\n  "params": {\n    "listen": true\n  }\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": "1",\n  "result": {\n    "listening": "true"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "en"\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"latlon"},"latlon"),(0,r.kt)("p",null,"Get the approximate latitude and longitude coordinates of the device location"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function latlon(): Promise<[number, number]>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[number, number]")),(0,r.kt)("td",{parentName:"tr",align:null},"lat/long tuple")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Localization } from '@firebolt-js/sdk'\n\nLocalization.latlon()\n    .then(latlong => {\n        console.log(latlong)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"latlong"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"[\n  39.9549,\n  75.1699\n]\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "localization.latlon",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    39.9549,\n    75.1699\n  ]\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listen"},"listen"),(0,r.kt)("p",null,"Listen for events from this module."),(0,r.kt)("p",null,"To listen to a specific event pass the event name as the first parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Localization.listen(event: string, (data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event to listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs.")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Localization.clear(id)"))))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"To listen to all events from this module  pass only a callback, without specifying an event name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Localization.listen((event: string, data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs. The event data depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event that has occured listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Localization.clear(id)"))))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../../docs/listening-for-events/"},"Listening for events")," for more information and examples."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"locale"},"locale"),(0,r.kt)("p",null,"Get the ",(0,r.kt)("em",{parentName:"p"},"full")," BCP 47 code, including script, region, variant, etc., for the preferred langauage/locale"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function locale(): Promise<string>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"the device locale")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Localization } from '@firebolt-js/sdk'\n\nLocalization.locale()\n    .then(locale => {\n        console.log(locale)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"locale"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"en-US"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "localization.locale",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "en-US"\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"locality"},"locality"),(0,r.kt)("p",null,"Get the locality/city the device is located in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function locality(): Promise<string>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"the device city")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Localization } from '@firebolt-js/sdk'\n\nLocalization.locality()\n    .then(locality => {\n        console.log(locality)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"locality"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"Philadelphia"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "localization.locality",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "Philadelphia"\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"once"},"once"),(0,r.kt)("p",null,"Listen for only one occurance of an event from this module. The callback will be cleared after one event."),(0,r.kt)("p",null,"To listen to a specific event pass the event name as the first parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Localization.once(event: string, (data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event to listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs.")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Localization.clear(id)"))))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"To listen to all events from this module  pass only a callback, without specifying an event name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"Localization.once((event: string, data: any) => void): Promise<number>\n")),(0,r.kt)("p",null,"Parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"callback")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that will be invoked when the event occurs. The event data depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Callback parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"event")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event that has occured listen for, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The event data, which depends on which event is firing, see ",(0,r.kt)("a",{parentName:"td",href:"#events"},"Events"),".")))),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Listener ID to clear the callback method and stop receiving the event, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"Localization.clear(id)"))))),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"../../docs/listening-for-events/"},"Listening for events")," for more information and examples."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"postalcode"},"postalCode"),(0,r.kt)("p",null,"Get the postal code the device is located in"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function postalCode(): Promise<string>\n")),(0,r.kt)("p",null,"Promise resolution:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"the device postal code")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples")),(0,r.kt)("p",null,"Default Example"),(0,r.kt)("p",null,"JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Localization } from '@firebolt-js/sdk'\n\nLocalization.postalCode()\n    .then(postalCode => {\n        console.log(postalCode)\n    })\n")),(0,r.kt)("p",null,"Value of ",(0,r.kt)("inlineCode",{parentName:"p"},"postalCode"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'"19103"\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"JSON-RPC:"),(0,r.kt)("p",null,"Request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "localization.postalCode",\n  "params": {}\n}\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "19103"\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"additional-events"},"Additional events"),(0,r.kt)("p",null,"The following events are documented as part of a related set of method APIs."),(0,r.kt)("p",null,'For more information, follow the links under the "Documentation" column.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"JavaScript"),(0,r.kt)("th",{parentName:"tr",align:null},"RPC"),(0,r.kt)("th",{parentName:"tr",align:null},"Payload"),(0,r.kt)("th",{parentName:"tr",align:null},"Documentation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"languageChanged"),(0,r.kt)("td",{parentName:"tr",align:null},"onLanguageChanged"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#language"},"language"))))),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("h3",{id:"latlon-1"},"LatLon"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type LatLon = [number, number]\n")),(0,r.kt)("hr",null))}s.isMDXComponent=!0}}]);