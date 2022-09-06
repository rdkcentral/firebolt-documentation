"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[346],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=l,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15464:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],s={title:"Types"},o="Types Schema",p={unversionedId:"api/schemas/Types",id:"version-0.7.0/api/schemas/Types",title:"Types",description:"---",source:"@site/versioned_docs/version-0.7.0/api/schemas/Types.md",sourceDirName:"api/schemas",slug:"/api/schemas/Types",permalink:"/firebolt-documentation/docs/0.7.0/api/schemas/Types",draft:!1,tags:[],version:"0.7.0",frontMatter:{title:"Types"},sidebar:"api",previous:{title:"Lifecycle",permalink:"/firebolt-documentation/docs/0.7.0/api/schemas/Lifecycle"},next:{title:"Accessibility",permalink:"/firebolt-documentation/docs/0.7.0/api/Accessibility"}},u={},m=[{value:"JSON-Schema",id:"json-schema",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Schemas",id:"schemas",level:2},{value:"SemanticVersion",id:"semanticversion",level:3},{value:"AudioProfile",id:"audioprofile",level:3},{value:"BooleanMap",id:"booleanmap",level:3},{value:"FlatMap",id:"flatmap",level:3},{value:"LocalizedString",id:"localizedstring",level:3},{value:"Details",id:"details",level:4},{value:"ListenResponse",id:"listenresponse",level:3},{value:"ProviderRequest",id:"providerrequest",level:3},{value:"ProviderResponse",id:"providerresponse",level:3},{value:"Timeout",id:"timeout",level:3},{value:"Details",id:"details-1",level:4}],c={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"types-schema"},"Types Schema"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Version 0.8.0"),(0,r.kt)("h2",{id:"json-schema"},"JSON-Schema"),(0,r.kt)("p",null,"This document was generated from a JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module."),(0,r.kt)("p",null,"For the full schema, see the link below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/rdkcentral/firebolt-openrpc/blob/feature/badger-parity/src/schemas/types.json"},"types.json"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schemas",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#semanticversion"},"SemanticVersion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#audioprofile"},"AudioProfile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#booleanmap"},"BooleanMap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#flatmap"},"FlatMap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#localizedstring"},"LocalizedString")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#listenresponse"},"ListenResponse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#providerrequest"},"ProviderRequest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#providerresponse"},"ProviderResponse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#timeout"},"Timeout"))))),(0,r.kt)("h2",{id:"schemas"},"Schemas"),(0,r.kt)("h3",{id:"semanticversion"},"SemanticVersion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type SemanticVersion = {\n  major: number\n  minor: number\n  patch: number\n  readable: string\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"audioprofile"},"AudioProfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type AudioProfile = 'stereo' | 'dolbyDigital5.1' | 'dolbyDigital7.1' | 'dolbyDigital5.1+' | 'dolbyDigital7.1+' | 'dolbyAtmos'\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"booleanmap"},"BooleanMap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type BooleanMap = {\n  [property: string]: boolean\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"flatmap"},"FlatMap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type FlatMap = {\n  [property: string]: string | number | boolean\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"localizedstring"},"LocalizedString"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type LocalizedString = string | object\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"A simple string, with no language code"\n\n{\n  "en": "This is english",\n  "es": "esto es espa\xf1ol"\n}\n'))),(0,r.kt)("h4",{id:"details"},"Details"),(0,r.kt)("p",null,"Localized string supports either a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or a Map<string, string> of language codes to strings. When using a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", the current preferred langauge from ",(0,r.kt)("inlineCode",{parentName:"p"},"Localization.langauge()")," is assumed."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listenresponse"},"ListenResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ListenResponse = {\n  event: string\n  listening: boolean\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"providerrequest"},"ProviderRequest"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ProviderRequest = {\n  correlationId: string   // The id that was passed in to the event that triggered a provider method to be called\n  parameters?: object     // The result of the provider response.\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"providerresponse"},"ProviderResponse"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type ProviderResponse = {\n  correlationId: string    // The id that was passed in to the event that triggered a provider method to be called\n\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"timeout"},"Timeout"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type Timeout = number\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Examples")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},""))),(0,r.kt)("h4",{id:"details-1"},"Details"),(0,r.kt)("p",null,"Defines the timeout in seconds. If the threshold for timeout is passed for any operation without a result it will throw an error."),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);