"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[4280],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(o,".").concat(k)]||u[k]||d[k]||l;return a?n.createElement(c,s(s({ref:t},m),{},{components:a})):n.createElement(c,s({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),s=["components"],i={title:"Keyboard"},o="Keyboard Module",p={unversionedId:"api/Keyboard",id:"version-0.6.0-alpha.2/api/Keyboard",title:"Keyboard",description:"---",source:"@site/versioned_docs/version-0.6.0-alpha.2/api/Keyboard.md",sourceDirName:"api",slug:"/api/Keyboard",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/api/Keyboard",draft:!1,tags:[],version:"0.6.0-alpha.2",frontMatter:{title:"Keyboard"},sidebar:"api",previous:{title:"Discovery",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/api/Discovery"},next:{title:"Lifecycle",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/api/Lifecycle"}},m={},d=[{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Overview",id:"overview",level:2},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"email",id:"email",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Promise Resolution",id:"promise-resolution",level:4},{value:"Examples",id:"examples",level:4},{value:"Prompt the user to select or type an email address",id:"prompt-the-user-to-select-or-type-an-email-address",level:5},{value:"Request",id:"request",level:6},{value:"Response",id:"response",level:6},{value:"Prompt the user to type an email address to sign up",id:"prompt-the-user-to-type-an-email-address-to-sign-up",level:5},{value:"Request",id:"request-1",level:6},{value:"Response",id:"response-1",level:6},{value:"password",id:"password",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Promise Resolution",id:"promise-resolution-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Prompt the user to enter their password",id:"prompt-the-user-to-enter-their-password",level:5},{value:"Request",id:"request-2",level:6},{value:"Response",id:"response-2",level:6},{value:"standard",id:"standard",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Promise Resolution",id:"promise-resolution-2",level:4},{value:"Examples",id:"examples-2",level:4},{value:"Prompt the user for an arbitrary string",id:"prompt-the-user-for-an-arbitrary-string",level:5},{value:"Request",id:"request-3",level:6},{value:"Response",id:"response-3",level:6},{value:"Schemas",id:"schemas",level:2},{value:"EmailUsage",id:"emailusage",level:3}],u={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"keyboard-module"},"Keyboard Module"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Version 0.6.0"),(0,l.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,l.kt)("p",null,"This document was generated from an OpenRPC JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module."),(0,l.kt)("p",null,"For the full schema, see the link below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/keyboard.json"},"keyboard.json"))))),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#usage"},"Usage"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#overview"},"Overview"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#events"},"Events"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#methods"},"Methods")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#email"},"email")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#password"},"password")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#standard"},"standard")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"#schemas"},"Schemas")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#emailusage"},"EmailUsage"))))),(0,l.kt)("span",null),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"To use the Keyboard module, you can import it into your project from the Firebolt SDK:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Keyboard } from '@firebolt-js/sdk'\n")),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Methods for prompting users to enter text with task-oriented UX"),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"email"},"email"),(0,l.kt)("p",null,"Prompt the user for their email address with a simplified list of choices."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function email(type: EmailUsage, message?: string): Promise<string>\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#emailusage"},(0,l.kt)("inlineCode",{parentName:"a"},"EmailUsage"))),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Why the email is being requested, e.g. sign on or sign up")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The message to display while prompting")))),(0,l.kt)("h4",{id:"promise-resolution"},"Promise Resolution"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"the selected or entered email")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"examples"},"Examples"),(0,l.kt)("h5",{id:"prompt-the-user-to-select-or-type-an-email-address"},"Prompt the user to select or type an email address"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"JavaScript")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Keyboard } from \'@firebolt-js/sdk\'\n\nKeyboard.email("signIn", "Enter your email to sign into this app")\n    .then(email => {\n        console.log(email)\n    })\n')),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"email")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"user@domain.com"\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"JSON-RPC")),(0,l.kt)("h6",{id:"request"},"Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "keyboard.email",\n  "params": {\n    "type": "signIn",\n    "message": "Enter your email to sign into this app"\n  }\n}\n')),(0,l.kt)("h6",{id:"response"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "user@domain.com"\n}\n'))),(0,l.kt)("h5",{id:"prompt-the-user-to-type-an-email-address-to-sign-up"},"Prompt the user to type an email address to sign up"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"JavaScript")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Keyboard } from \'@firebolt-js/sdk\'\n\nKeyboard.email("signUp", "Enter your email to sign up for this app")\n    .then(email => {\n        console.log(email)\n    })\n')),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"email")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"user@domain.com"\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"JSON-RPC")),(0,l.kt)("h6",{id:"request-1"},"Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "keyboard.email",\n  "params": {\n    "type": "signUp",\n    "message": "Enter your email to sign up for this app"\n  }\n}\n')),(0,l.kt)("h6",{id:"response-1"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "user@domain.com"\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"password"},"password"),(0,l.kt)("p",null,"Show the password entry keyboard, with typing obfuscated from visibility"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function password(message?: string): Promise<string>\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"The message to display while prompting")))),(0,l.kt)("h4",{id:"promise-resolution-1"},"Promise Resolution"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"the selected or entered password")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"examples-1"},"Examples"),(0,l.kt)("h5",{id:"prompt-the-user-to-enter-their-password"},"Prompt the user to enter their password"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"JavaScript")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Keyboard } from '@firebolt-js/sdk'\n\nKeyboard.password(\"Enter your password\")\n    .then(value => {\n        console.log(value)\n    })\n")),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"value")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"abc123"\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"JSON-RPC")),(0,l.kt)("h6",{id:"request-2"},"Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "keyboard.password",\n  "params": {\n    "message": "Enter your password"\n  }\n}\n')),(0,l.kt)("h6",{id:"response-2"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "abc123"\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"standard"},"standard"),(0,l.kt)("p",null,"Show the standard platform keyboard, and return the submitted value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"function standard(message: string): Promise<string>\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"message")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"The message to display while prompting")))),(0,l.kt)("h4",{id:"promise-resolution-2"},"Promise Resolution"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"the selected or entered text")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"examples-2"},"Examples"),(0,l.kt)("h5",{id:"prompt-the-user-for-an-arbitrary-string"},"Prompt the user for an arbitrary string"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"JavaScript")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Keyboard } from '@firebolt-js/sdk'\n\nKeyboard.standard(\"Enter the name you'd like to associate with this device\")\n    .then(value => {\n        console.log(value)\n    })\n")),(0,l.kt)("p",null,"Value of ",(0,l.kt)("inlineCode",{parentName:"p"},"value")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"Living Room"\n'))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"JSON-RPC")),(0,l.kt)("h6",{id:"request-3"},"Request"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "keyboard.standard",\n  "params": {\n    "message": "Enter the name you\'d like to associate with this device"\n  }\n}\n')),(0,l.kt)("h6",{id:"response-3"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "Living Room"\n}\n'))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"schemas"},"Schemas"),(0,l.kt)("h3",{id:"emailusage"},"EmailUsage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type EmailUsage = 'signIn' | 'signUp'\n")),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);