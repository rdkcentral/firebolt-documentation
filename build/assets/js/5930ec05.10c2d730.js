"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[8793],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,b=f["".concat(p,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],l={title:"Firebolt Core SDK"},p="Firebolt JS SDK",c={unversionedId:"api/index",id:"version-0.7.0/api/index",title:"Firebolt Core SDK",description:"For building Firebolt compliant apps.",source:"@site/versioned_docs/version-0.7.0/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/firebolt-documentation/docs/0.7.0/api/",draft:!1,tags:[],version:"0.7.0",frontMatter:{title:"Firebolt Core SDK"},sidebar:"api",previous:{title:"SecondScreen",permalink:"/firebolt-documentation/docs/0.7.0/api/SecondScreen"}},u={},s=[{value:"Usage",id:"usage",level:2},{value:"Contributing",id:"contributing",level:2}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"firebolt-js-sdk"},"Firebolt JS SDK"),(0,i.kt)("p",null,"For building Firebolt compliant apps."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To install, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install @firebolt-js/sdk\n")),(0,i.kt)("p",null,"To use the package, import one of it's modules, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Lifecycle } from '@firebolt-js/sdk'\n")),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"The Firebolt Core SDK is built using the Firebolt OpenRPC toolset:"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://www.github.com/rdkcentral/firebolt-openrpc/"},"Firebolt OpenRPC"),", for more info."))}d.isMDXComponent=!0}}]);