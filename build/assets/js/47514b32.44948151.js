"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={title:"Types"},s="Types Schema",p={unversionedId:"api/schemas/Types",id:"version-0.5.3/api/schemas/Types",title:"Types",description:"---",source:"@site/versioned_docs/version-0.5.3/api/schemas/Types.md",sourceDirName:"api/schemas",slug:"/api/schemas/Types",permalink:"/firebolt-documentation/docs/0.5.3/api/schemas/Types",draft:!1,tags:[],version:"0.5.3",frontMatter:{title:"Types"},sidebar:"api",previous:{title:"SecondScreen",permalink:"/firebolt-documentation/docs/0.5.3/api/schemas/SecondScreen"},next:{title:"Accessibility",permalink:"/firebolt-documentation/docs/0.5.3/api/Accessibility"}},c={},u=[{value:"JSON-Schema",id:"json-schema",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Schemas",id:"schemas",level:2},{value:"SemanticVersion",id:"semanticversion",level:3},{value:"AudioProfile",id:"audioprofile",level:3},{value:"BooleanMap",id:"booleanmap",level:3},{value:"FlatMap",id:"flatmap",level:3},{value:"LocalizedString",id:"localizedstring",level:3},{value:"Details",id:"details",level:4},{value:"ListenResponse",id:"listenresponse",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"types-schema"},"Types Schema"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Version 0.6.0"),(0,r.kt)("h2",{id:"json-schema"},"JSON-Schema"),(0,r.kt)("p",null,"This document was generated from a JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module."),(0,r.kt)("p",null,"For the full schema, see the link below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/rdkcentral/firebolt-openrpc/blob/feature/badger-parity/src/schemas/types.json"},"types.json"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schemas",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#semanticversion"},"SemanticVersion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#audioprofile"},"AudioProfile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#booleanmap"},"BooleanMap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#flatmap"},"FlatMap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#localizedstring"},"LocalizedString")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#listenresponse"},"ListenResponse"))))),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("h3",{id:"semanticversion"},"SemanticVersion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type SemanticVersion = {\n  major: bigint\n  minor: bigint\n  patch: bigint\n  readable: string\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"audioprofile"},"AudioProfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type AudioProfile = 'stereo' | 'dolbyDigital5.1' | 'dolbyDigital7.1' | 'dolbyDigital5.1+' | 'dolbyDigital7.1+' | 'dolbyAtmos'\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"booleanmap"},"BooleanMap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type BooleanMap = {\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flatmap"},"FlatMap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type FlatMap = {\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"localizedstring"},"LocalizedString"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type LocalizedString = string | object\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"A simple string, with no language code"\n\n{\n  "en": "This is english",\n  "es": "esto es espa\xf1ol"\n}\n'))),(0,r.kt)("h4",{id:"details"},"Details"),(0,r.kt)("p",null,"Localized string supports either a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or a Map<string, string> of language codes to strings. When using a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", the current preferred langauge from ",(0,r.kt)("inlineCode",{parentName:"p"},"Localization.langauge()")," is assumed."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listenresponse"},"ListenResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ListenResponse = {\n  event: string\n  listening: boolean\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);