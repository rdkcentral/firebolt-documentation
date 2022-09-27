"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[5729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=r(87462),o=r(63366),n=(r(67294),r(3905)),i=["components"],l={},s="Email Prefill",u={unversionedId:"firebolt_docs/authentication/email-prefill",id:"version-0.7.0/firebolt_docs/authentication/email-prefill",title:"Email Prefill",description:"Your users have the ability to save email addresses to their account on the platform. The Email Prefill feature enables your app to request an email address from the user without requiring them to type it out using a remote.",source:"@site/versioned_docs/version-0.7.0/firebolt_docs/authentication/email-prefill.md",sourceDirName:"firebolt_docs/authentication",slug:"/firebolt_docs/authentication/email-prefill",permalink:"/firebolt-documentation/docs/0.7.0/firebolt_docs/authentication/email-prefill",draft:!1,tags:[],version:"0.7.0",frontMatter:{},sidebar:"firebolt_docs",previous:{title:"Authentication",permalink:"/firebolt-documentation/docs/0.7.0/category/authentication"},next:{title:"Sign In & Sign Up",permalink:"/firebolt-documentation/docs/0.7.0/firebolt_docs/authentication/sign-in-and-sign-up"}},c={},p=[{value:"Use cases",id:"use-cases",level:2},{value:"How to implement",id:"how-to-implement",level:2}],d={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"email-prefill"},"Email Prefill"),(0,n.kt)("p",null,"Your users have the ability to save email addresses to their account on the platform. The Email Prefill feature enables your app to request an email address from the user without requiring them to type it out using a remote."),(0,n.kt)("p",null,"While the UI may differ between distributors, the basic flow is that your app asks for the API to present email addresses to the user, then the user selects an email address, and then the API sends the selection back to the app to be used as demonstrated below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Call Flow",src:r(37316).Z,width:"601",height:"328"})),(0,n.kt)("h2",{id:"use-cases"},"Use cases"),(0,n.kt)("p",null,"Entering email addresses manually using an on-screen keyboard takes a lot of time and can be a frustrating process for many users. With Email Prefill, your users can sign in or register with ease and start enjoying your app almost instantly."),(0,n.kt)("h2",{id:"how-to-implement"},"How to implement"),(0,n.kt)("p",null,"When using the Email Prefill, your user may be prompted to allow your app access to their email address to sign-in or sign-up with your app. This prompt may also allow your user to select an email address from a dropdown or some other interface of saved emails. Once your user makes a selection, your user's selection will return the email address to your app so you can populate the email field for them."),(0,n.kt)("p",null,"When using the Email Prefill, your app must display the selected email to the user and require the user to confirm that they want to use that email to sign in/ sign up."),(0,n.kt)("p",null,"Your user may also choose to manually enter their email address which may be the case if they have not saved the desired address to their account."),(0,n.kt)("p",null,"You can integrate with the Email Prefill API as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Keyboard } from '@firebolt-js/sdk'\n\nKeyboard.email('signUp').then( emailAddress => {\n    // at this point your app has access to the email address the user selected\n    console.log('The user entered the following email address: ' + emailAddress)\n}).catch( error => {\n    // The user canceled, or an error occurred, fall back to some other plan, e.g. dismiss the sign up UI\n    console.error('The user decided not to provide an email address')\n})\n")),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/api/keyboard#email"},"Keyboard API")," for more info."))}m.isMDXComponent=!0},37316:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/email-prefill-callflow-e4d4ebdaa9661db7fc2d2bdcaace5817.png"}}]);