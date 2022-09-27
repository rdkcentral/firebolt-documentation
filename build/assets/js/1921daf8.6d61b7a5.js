"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[6278],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>d});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),c=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=c(e.components);return o.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=n,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return t?o.createElement(m,a(a({ref:r},f),{},{components:t})):o.createElement(m,a({ref:r},f))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},80601:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>f,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),a=["components"],l={},s="Profile Flags",c={unversionedId:"firebolt_docs/profile/profile-flags",id:"version-0.6.1/firebolt_docs/profile/profile-flags",title:"Profile Flags",description:"Profile Flags are only necessary under specific circumstances. These are prescribed by distributors who may want to add flags that trigger specific user experiences based on distribution rights, etc.",source:"@site/versioned_docs/version-0.6.1/firebolt_docs/profile/profile-flags.md",sourceDirName:"firebolt_docs/profile",slug:"/firebolt_docs/profile/profile-flags",permalink:"/firebolt-documentation/docs/0.6.1/firebolt_docs/profile/profile-flags",draft:!1,tags:[],version:"0.6.1",frontMatter:{},sidebar:"firebolt_docs",previous:{title:"Parental Controls",permalink:"/firebolt-documentation/docs/0.6.1/firebolt_docs/profile/parental-controls"}},f={},p=[],u={toc:p};function d(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"profile-flags"},"Profile Flags"),(0,i.kt)("p",null,"Profile Flags are only necessary under specific circumstances. These are prescribed by distributors who may want to add flags that trigger specific user experiences based on distribution rights, etc."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"For more information, reach out to your platform account manager from the distributors you\u2019re working with.")),(0,i.kt)("p",null,"You can access the user's profile flags as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Profile } from '@firebolt-js/sdk'\n\nconst flags = Profile.flags().then( profileFlags => {\n    if (profileFlags['someFlag'] === 'someValue') {\n        // do something...\n    }\n})\n")))}d.isMDXComponent=!0}}]);