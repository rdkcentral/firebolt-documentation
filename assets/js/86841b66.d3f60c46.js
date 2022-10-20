"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[7764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={title:"Account"},p="Account Module",u={unversionedId:"api/Account",id:"version-0.8.0/api/Account",title:"Account",description:"---",source:"@site/versioned_docs/version-0.8.0/api/Account.md",sourceDirName:"api",slug:"/api/Account",permalink:"/firebolt-documentation/docs/api/Account",draft:!1,tags:[],version:"0.8.0",frontMatter:{title:"Account"},sidebar:"api",previous:{title:"Accessibility",permalink:"/firebolt-documentation/docs/api/Accessibility"},next:{title:"Advertising",permalink:"/firebolt-documentation/docs/api/Advertising"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"id",id:"id",level:3},{value:"uid",id:"uid",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"account-module"},"Account Module"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Version 0.8.0"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null," A module for querying about the device account."),(0,l.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,l.kt)("p",null,"Firebolt APIs are maintained in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk"},"rdkcentral/firebolt-core-sdk")," GitHub repository."),(0,l.kt)("p",null,"You can see this API in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/account.json"},"account.json")," OpenRPC JSON-Schema document. "),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#openrpc"},"OpenRPC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#methods"},"Methods"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#id"},"id")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#uid"},"uid"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#schemas"},"Schemas"))),(0,l.kt)("span",null),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"To use the Account module, you can import it into your project from the Firebolt SDK:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Account } from '@firebolt-js/sdk'\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"id"},"id"),(0,l.kt)("p",null,"Get the platform back-office account identifier"),(0,l.kt)("p",null,"To get the value, call the method with no parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function id(): Promise<string>\n")),(0,l.kt)("p",null,"Promise resolution:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"the id")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Default Example"),(0,l.kt)("p",null,"JavaScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Account } from '@firebolt-js/sdk'\n\nAccount.id()\n    .then(id => {\n        console.log(id)\n    })\n")),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"123"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON-RPC:"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "account.id",\n  "params": {}\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "123"\n}\n'))),(0,l.kt)("h3",{id:"uid"},"uid"),(0,l.kt)("p",null,"Gets a unique id for the current app & account"),(0,l.kt)("p",null,"To get the value, call the method with no parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function uid(): Promise<string>\n")),(0,l.kt)("p",null,"Promise resolution:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"a unique ID")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Getting the unique ID"),(0,l.kt)("p",null,"JavaScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Account } from '@firebolt-js/sdk'\n\nAccount.uid()\n    .then(uniqueId => {\n        console.log(uniqueId)\n    })\n")),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"uniqueId"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"ee6723b8-7ab3-462c-8d93-dbf61227998e"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON-RPC:"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "account.uid",\n  "params": {}\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "ee6723b8-7ab3-462c-8d93-dbf61227998e"\n}\n'))))}m.isMDXComponent=!0}}]);