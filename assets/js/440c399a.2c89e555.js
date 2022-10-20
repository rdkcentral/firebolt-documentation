"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[5802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),k=r,c=d["".concat(o,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(c,p(p({ref:t},m),{},{components:a})):n.createElement(c,p({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7435:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),p=["components"],i={title:"Keyboard"},o="Keyboard Module",s={unversionedId:"api/Keyboard",id:"version-0.7.0/api/Keyboard",title:"Keyboard",description:"---",source:"@site/versioned_docs/version-0.7.0/api/Keyboard.md",sourceDirName:"api",slug:"/api/Keyboard",permalink:"/firebolt-documentation/docs/0.7.0/api/Keyboard",draft:!1,tags:[],version:"0.7.0",frontMatter:{title:"Keyboard"},sidebar:"api",previous:{title:"Discovery",permalink:"/firebolt-documentation/docs/0.7.0/api/Discovery"},next:{title:"Lifecycle",permalink:"/firebolt-documentation/docs/0.7.0/api/Lifecycle"}},m={},u=[{value:"Overview",id:"overview",level:2},{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"email",id:"email",level:3},{value:"password",id:"password",level:3},{value:"standard",id:"standard",level:3},{value:"Schemas",id:"schemas",level:2},{value:"EmailUsage",id:"emailusage",level:3}],d={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"keyboard-module"},"Keyboard Module"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Version 0.8.0"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null," Methods for prompting users to enter text with task-oriented UX"),(0,l.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,l.kt)("p",null,"Firebolt APIs are maintained in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk"},"rdkcentral/firebolt-core-sdk")," GitHub repository."),(0,l.kt)("p",null,"You can see this API in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/keyboard.json"},"keyboard.json")," OpenRPC JSON-Schema document. "),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#openrpc"},"OpenRPC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#methods"},"Methods"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#email"},"email")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#password"},"password")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#standard"},"standard"))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#schemas"},"Schemas"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#emailusage"},"EmailUsage"))))),(0,l.kt)("span",null),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"To use the Keyboard module, you can import it into your project from the Firebolt SDK:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Keyboard } from '@firebolt-js/sdk'\n")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"email"},"email"),(0,l.kt)("p",null,"Prompt the user for their email address with a simplified list of choices."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function email(type: EmailUsage, message?: string): Promise<string>\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#emailusage"},(0,l.kt)("inlineCode",{parentName:"a"},"EmailUsage"))),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Why the email is being requested, e.g. sign on or sign up")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The message to display while prompting")))),(0,l.kt)("p",null,"Promise resolution:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"the selected or entered email")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Prompt the user to select or type an email address"),(0,l.kt)("p",null,"JavaScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Keyboard } from \'@firebolt-js/sdk\'\n\nKeyboard.email("signIn", "Enter your email to sign into this app")\n    .then(email => {\n        console.log(email)\n    })\n')),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"email"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"user@domain.com"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON-RPC:"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "keyboard.email",\n  "params": {\n    "type": "signIn",\n    "message": "Enter your email to sign into this app"\n  }\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "user@domain.com"\n}\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"More examples..."),"Prompt the user to type an email address to sign up",(0,l.kt)("p",null,"JavaScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Keyboard } from \'@firebolt-js/sdk\'\n\nKeyboard.email("signUp", "Enter your email to sign up for this app")\n    .then(email => {\n        console.log(email)\n    })\n')),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"email"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"user@domain.com"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON-RPC:"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "keyboard.email",\n  "params": {\n    "type": "signUp",\n    "message": "Enter your email to sign up for this app"\n  }\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "user@domain.com"\n}\n')))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"password"},"password"),(0,l.kt)("p",null,"Show the password entry keyboard, with typing obfuscated from visibility"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function password(message?: string): Promise<string>\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The message to display while prompting")))),(0,l.kt)("p",null,"Promise resolution:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"the selected or entered password")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Prompt the user to enter their password"),(0,l.kt)("p",null,"JavaScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Keyboard } from '@firebolt-js/sdk'\n\nKeyboard.password(\"Enter your password\")\n    .then(value => {\n        console.log(value)\n    })\n")),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"abc123"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON-RPC:"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "keyboard.password",\n  "params": {\n    "message": "Enter your password"\n  }\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "abc123"\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"standard"},"standard"),(0,l.kt)("p",null,"Show the standard platform keyboard, and return the submitted value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function standard(message: string): Promise<string>\n")),(0,l.kt)("p",null,"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"The message to display while prompting")))),(0,l.kt)("p",null,"Promise resolution:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"the selected or entered text")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Prompt the user for an arbitrary string"),(0,l.kt)("p",null,"JavaScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Keyboard } from '@firebolt-js/sdk'\n\nKeyboard.standard(\"Enter the name you'd like to associate with this device\")\n    .then(value => {\n        console.log(value)\n    })\n")),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"Living Room"\n')),(0,l.kt)("details",null,(0,l.kt)("summary",null,"JSON-RPC:"),(0,l.kt)("p",null,"Request:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "keyboard.standard",\n  "params": {\n    "message": "Enter the name you\'d like to associate with this device"\n  }\n}\n')),(0,l.kt)("p",null,"Response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "Living Room"\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"schemas"},"Schemas"),(0,l.kt)("h3",{id:"emailusage"},"EmailUsage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type EmailUsage = 'signIn' | 'signUp'\n")),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);