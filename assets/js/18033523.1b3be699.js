"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[8744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,d=c["".concat(p,".").concat(m)]||c[m]||k[m]||l;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>k});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Authentication"},p="Authentication Module",u={unversionedId:"api/Authentication",id:"version-0.8.0/api/Authentication",title:"Authentication",description:"---",source:"@site/versioned_docs/version-0.8.0/api/Authentication.md",sourceDirName:"api",slug:"/api/Authentication",permalink:"/firebolt-documentation/docs/api/Authentication",draft:!1,tags:[],version:"0.8.0",frontMatter:{title:"Authentication"},sidebar:"api",previous:{title:"Advertising",permalink:"/firebolt-documentation/docs/api/Advertising"},next:{title:"Device",permalink:"/firebolt-documentation/docs/api/Device"}},s={},k=[{value:"Overview",id:"overview",level:2},{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"token",id:"token",level:3},{value:"Schemas",id:"schemas",level:2},{value:"TokenType",id:"tokentype",level:3}],c={toc:k};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"authentication-module"},"Authentication Module"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Version 0.8.0"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null," A module for acquiring authentication tokens."),(0,l.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,l.kt)("p",null,"Firebolt APIs are maintained in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk"},"rdkcentral/firebolt-core-sdk")," GitHub repository."),(0,l.kt)("p",null,"You can see this API in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/authentication.json"},"authentication.json")," OpenRPC JSON-Schema document. "),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#openrpc"},"OpenRPC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#methods"},"Methods"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#token"},"token"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#schemas"},"Schemas"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tokentype"},"TokenType"))))),(0,l.kt)("span",null),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"To use the Authentication module, you can import it into your project from the Firebolt SDK:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Authentication } from '@firebolt-js/sdk'\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"token"},"token"),(0,l.kt)("p",null,"Get a specific ",(0,l.kt)("inlineCode",{parentName:"p"},"type")," of authentication token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function token(type: TokenType, options?: object): Promise<object>\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#tokentype"},(0,l.kt)("inlineCode",{parentName:"a"},"TokenType"))),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"What type of token to get")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional options for acquiring the token.")))),(0,l.kt)("p",null,"Promise resolution:"),(0,l.kt)("p",null,"the token value, type, and expiration"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"expires")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Acquire a Firebolt platform token"),(0,l.kt)("p",null,"JavaScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Authentication } from '@firebolt-js/sdk'\n\nAuthentication.token(\"platform\", null)\n    .then(token => {\n        console.log(token)\n    })\n")),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"token"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",\n  "expires": "2022-04-23T18:25:43.511Z",\n  "type": "platform"\n}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON-RPC:"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "authentication.token",\n  "params": {\n    "type": "platform"\n  }\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",\n    "expires": "2022-04-23T18:25:43.511Z",\n    "type": "platform"\n  }\n}\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"More examples..."),"Acquire a Firebolt device identity (XACT) token",(0,l.kt)("p",null,"JavaScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Authentication } from '@firebolt-js/sdk'\n\nAuthentication.token(\"device\", null)\n    .then(token => {\n        console.log(token)\n    })\n")),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"token"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",\n  "expires": "2022-04-23T18:25:43.511Z",\n  "type": "device"\n}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON-RPC:"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "authentication.token",\n  "params": {\n    "type": "device"\n  }\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",\n    "expires": "2022-04-23T18:25:43.511Z",\n    "type": "device"\n  }\n}\n'))),(0,l.kt)("p",null,"Acquire a Firebolt distributor token"),(0,l.kt)("p",null,"JavaScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Authentication } from \'@firebolt-js/sdk\'\n\nAuthentication.token("distributor", {"clientId":"xyz"})\n    .then(token => {\n        console.log(token)\n    })\n')),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"token"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",\n  "expires": "2022-04-23T18:25:43.511Z",\n  "type": "distributor",\n  "data": {\n    "tid": "EB00E9230AB2A35F57DB4EFDDC4908F6446D38F08F4FF0BD57FE6A61E21EEFD9",\n    "scope": "scope"\n  }\n}\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON-RPC:"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "authentication.token",\n  "params": {\n    "type": "distributor",\n    "options": {\n      "clientId": "xyz"\n    }\n  }\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",\n    "expires": "2022-04-23T18:25:43.511Z",\n    "type": "distributor",\n    "data": {\n      "tid": "EB00E9230AB2A35F57DB4EFDDC4908F6446D38F08F4FF0BD57FE6A61E21EEFD9",\n      "scope": "scope"\n    }\n  }\n}\n')))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"schemas"},"Schemas"),(0,l.kt)("h3",{id:"tokentype"},"TokenType"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type TokenType = 'platform' | 'device' | 'distributor'\n")),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);