"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[1203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,c(c({ref:t},p),{},{components:n})):a.createElement(f,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),c=["components"],o={title:"Lifecycle"},i="Lifecycle Schema",s={unversionedId:"api/schemas/Lifecycle",id:"version-0.6.0/api/schemas/Lifecycle",title:"Lifecycle",description:"---",source:"@site/versioned_docs/version-0.6.0/api/schemas/Lifecycle.md",sourceDirName:"api/schemas",slug:"/api/schemas/Lifecycle",permalink:"/firebolt-documentation/docs/0.6.0/api/schemas/Lifecycle",draft:!1,tags:[],version:"0.6.0",frontMatter:{title:"Lifecycle"},sidebar:"api",previous:{title:"Intents",permalink:"/firebolt-documentation/docs/0.6.0/api/schemas/Intents"},next:{title:"SecondScreen",permalink:"/firebolt-documentation/docs/0.6.0/api/schemas/SecondScreen"}},p={},u=[{value:"JSON-Schema",id:"json-schema",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Schemas",id:"schemas",level:2},{value:"LifecycleState",id:"lifecyclestate",level:3},{value:"Details",id:"details",level:4},{value:"CloseReason",id:"closereason",level:3},{value:"Details",id:"details-1",level:4}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lifecycle-schema"},"Lifecycle Schema"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Version 0.8.0"),(0,l.kt)("h2",{id:"json-schema"},"JSON-Schema"),(0,l.kt)("p",null,"This document was generated from a JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module."),(0,l.kt)("p",null,"For the full schema, see the link below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rdkcentral/firebolt-openrpc/blob/feature/badger-parity/src/schemas/lifecycle.json"},"lifecycle.json"))))),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Schemas",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#lifecyclestate"},"LifecycleState")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#closereason"},"CloseReason"))))),(0,l.kt)("h2",{id:"schemas"},"Schemas"),(0,l.kt)("h3",{id:"lifecyclestate"},"LifecycleState"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type LifecycleState = 'initializing' | 'inactive' | 'foreground' | 'background' | 'unloading' | 'suspended'\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,l.kt)("h4",{id:"details"},"Details"),(0,l.kt)("p",null,"The application lifecycle state"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"closereason"},"CloseReason"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type CloseReason = 'remoteButton' | 'userExit' | 'error'\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,l.kt)("h4",{id:"details-1"},"Details"),(0,l.kt)("p",null,"The application close reason"),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);