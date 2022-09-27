"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[5897],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,b=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={sidebar_position:1,sidebar_label:"API Intro"},c="Firebolt JS SDK",s={unversionedId:"api/schemas/intro",id:"api/schemas/intro",title:"Firebolt JS SDK",description:"For building Firebolt compliant apps.",source:"@site/docs/api/schemas/intro.md",sourceDirName:"api/schemas",slug:"/api/schemas/intro",permalink:"/firebolt-documentation/docs/next/api/schemas/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"API Intro"},sidebar:"defaultSidebar",previous:{title:"Schemas",permalink:"/firebolt-documentation/docs/next/category/schemas"},next:{title:"Discovery",permalink:"/firebolt-documentation/docs/next/api/schemas/Discovery"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Contributing",id:"contributing",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"firebolt-js-sdk"},"Firebolt JS SDK"),(0,i.kt)("p",null,"For building Firebolt compliant apps."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To install, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @firebolt-js/sdk\n")),(0,i.kt)("p",null,"To use the package, import one of it's modules, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Lifecycle } from '@firebolt-js/sdk'\n")),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"The Firebolt Core SDK is built using the Firebolt OpenRPC toolset:"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://www.github.com/rdkcentral/firebolt-openrpc/"},"Firebolt OpenRPC"),", for more info."))}f.isMDXComponent=!0}}]);