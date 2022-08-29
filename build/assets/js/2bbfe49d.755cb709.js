"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[9022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||c;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],l={title:"SecondScreen"},s="SecondScreen Schema",i={unversionedId:"api/schemas/SecondScreen",id:"api/schemas/SecondScreen",title:"SecondScreen",description:"---",source:"@site/docs/api/schemas/SecondScreen.md",sourceDirName:"api/schemas",slug:"/api/schemas/SecondScreen",permalink:"/docs/next/api/schemas/SecondScreen",draft:!1,tags:[],version:"current",frontMatter:{title:"SecondScreen"},sidebar:"defaultSidebar",previous:{title:"Lifecycle",permalink:"/docs/next/api/schemas/Lifecycle"},next:{title:"Types",permalink:"/docs/next/api/schemas/Types"}},p={},d=[{value:"JSON-Schema",id:"json-schema",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Schemas",id:"schemas",level:2},{value:"SecondScreenEvent",id:"secondscreenevent",level:3},{value:"Details",id:"details",level:4}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"secondscreen-schema"},"SecondScreen Schema"),(0,c.kt)("hr",null),(0,c.kt)("p",null,"Version 0.8.0"),(0,c.kt)("h2",{id:"json-schema"},"JSON-Schema"),(0,c.kt)("p",null,"This document was generated from a JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module."),(0,c.kt)("p",null,"For the full schema, see the link below."),(0,c.kt)("table",null,(0,c.kt)("thead",{parentName:"table"},(0,c.kt)("tr",{parentName:"thead"},(0,c.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,c.kt)("tbody",{parentName:"table"},(0,c.kt)("tr",{parentName:"tbody"},(0,c.kt)("td",{parentName:"tr",align:null},(0,c.kt)("a",{parentName:"td",href:"https://github.com/rdkcentral/firebolt-openrpc/blob/feature/badger-parity/src/schemas/secondscreen.json"},"secondscreen.json"))))),(0,c.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Schemas",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"#secondscreenevent"},"SecondScreenEvent"))))),(0,c.kt)("h2",{id:"schemas"},"Schemas"),(0,c.kt)("h3",{id:"secondscreenevent"},"SecondScreenEvent"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"type SecondScreenEvent = {\n  type: 'dial'\n  version?: string\n  data?: string\n}\n")),(0,c.kt)("details",null,(0,c.kt)("summary",null,(0,c.kt)("b",null,"Examples")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,c.kt)("h4",{id:"details"},"Details"),(0,c.kt)("p",null,"An a message notification from a second screen device"),(0,c.kt)("hr",null))}m.isMDXComponent=!0}}]);