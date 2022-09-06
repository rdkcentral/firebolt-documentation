"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[5688],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},91433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],s={title:"Errors"},i="Errors Schema",c={unversionedId:"api/schemas/Errors",id:"version-0.6.0/api/schemas/Errors",title:"Errors",description:"---",source:"@site/versioned_docs/version-0.6.0/api/schemas/Errors.md",sourceDirName:"api/schemas",slug:"/api/schemas/Errors",permalink:"/firebolt-documentation/docs/0.6.0/api/schemas/Errors",draft:!1,tags:[],version:"0.6.0",frontMatter:{title:"Errors"},sidebar:"api",previous:{title:"Entertainment",permalink:"/firebolt-documentation/docs/0.6.0/api/schemas/Entertainment"},next:{title:"Intents",permalink:"/firebolt-documentation/docs/0.6.0/api/schemas/Intents"}},u={},p=[{value:"JSON-Schema",id:"json-schema",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Schemas",id:"schemas",level:2},{value:"FireboltError",id:"firebolterror",level:3},{value:"Details",id:"details",level:4},{value:"UserNotAuthenticatedError",id:"usernotauthenticatederror",level:3}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"errors-schema"},"Errors Schema"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Version 0.6.0"),(0,o.kt)("h2",{id:"json-schema"},"JSON-Schema"),(0,o.kt)("p",null,"This document was generated from a JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module."),(0,o.kt)("p",null,"For the full schema, see the link below."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/rdkcentral/firebolt-openrpc/blob/feature/badger-parity/src/schemas/errors.json"},"errors.json"))))),(0,o.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Schemas",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#firebolterror"},"FireboltError")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usernotauthenticatederror"},"UserNotAuthenticatedError"))))),(0,o.kt)("h2",{id:"schemas"},"Schemas"),(0,o.kt)("h3",{id:"firebolterror"},"FireboltError"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type FireboltError = {\n  code: number\n  message: string\n  data?: {\n  }\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Examples")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": -32601,\n  "message": "Method not found"\n}\n'))),(0,o.kt)("h4",{id:"details"},"Details"),(0,o.kt)("p",null,"An error resulting from calling a Firebolt method."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usernotauthenticatederror"},"UserNotAuthenticatedError"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type UserNotAuthenticatedError = {\n  code: number\n  message: string\n  data?: {\n  }\n}\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Examples")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": 401,\n  "message": "User is not authenticated."\n}\n'))),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);