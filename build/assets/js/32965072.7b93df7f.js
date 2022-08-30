"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[5319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"Discovery"},s="Discovery Schema",c={unversionedId:"api/schemas/Discovery",id:"version-0.8.0/api/schemas/Discovery",title:"Discovery",description:"---",source:"@site/versioned_docs/version-0.8.0/api/schemas/Discovery.md",sourceDirName:"api/schemas",slug:"/api/schemas/Discovery",permalink:"/firebolt-documentation/docs/api/schemas/Discovery",draft:!1,tags:[],version:"0.8.0",frontMatter:{title:"Discovery"},sidebar:"api",previous:{title:"API Intro",permalink:"/firebolt-documentation/docs/api/schemas/intro"},next:{title:"Entertainment",permalink:"/firebolt-documentation/docs/api/schemas/Entertainment"}},u={},p=[{value:"JSON-Schema",id:"json-schema",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Schemas",id:"schemas",level:2},{value:"PurchasedContentResult",id:"purchasedcontentresult",level:3},{value:"EntityInfoResult",id:"entityinforesult",level:3},{value:"Details",id:"details",level:4}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"discovery-schema"},"Discovery Schema"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Version 0.8.0"),(0,l.kt)("h2",{id:"json-schema"},"JSON-Schema"),(0,l.kt)("p",null,"This document was generated from a JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module."),(0,l.kt)("p",null,"For the full schema, see the link below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rdkcentral/firebolt-openrpc/blob/feature/badger-parity/src/schemas/discovery.json"},"discovery.json"))))),(0,l.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Schemas",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#purchasedcontentresult"},"PurchasedContentResult")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#entityinforesult"},"EntityInfoResult"))))),(0,l.kt)("h2",{id:"schemas"},"Schemas"),(0,l.kt)("h3",{id:"purchasedcontentresult"},"PurchasedContentResult"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type PurchasedContentResult = {\n  expires: string\n  totalCount: number\n  entries: EntityInfo[]\n}\n")),(0,l.kt)("p",null,"See also: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../schemas/entertainment#entityinfo"},"EntityInfo"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"entityinforesult"},"EntityInfoResult"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'type EntityInfoResult = {\n  expires: string\n  entity: EntityInfo       // An EntityInfo object represents an "entity" on the platform. Currently, only entities of type `program` are supported. `programType` must be supplied to identify the program type.\n  related?: EntityInfo[]\n}\n')),(0,l.kt)("p",null,"See also: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../../schemas/entertainment#entityinfo"},"EntityInfo"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,l.kt)("h4",{id:"details"},"Details"),(0,l.kt)("p",null,"The result for an ",(0,l.kt)("inlineCode",{parentName:"p"},"entityInfo()")," push or pull."),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);