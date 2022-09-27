"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[8955],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=i,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},44400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={},l="Sign In & Sign Up",c={unversionedId:"firebolt_docs/authentication/sign-in-and-sign-up",id:"version-0.6.0/firebolt_docs/authentication/sign-in-and-sign-up",title:"Sign In & Sign Up",description:'There are two ways to sign-in or sign-up for an app including "2nd screen sign-in" (which is the preferred method) and the "on-screen keyboard".',source:"@site/versioned_docs/version-0.6.0/firebolt_docs/authentication/sign-in-and-sign-up.md",sourceDirName:"firebolt_docs/authentication",slug:"/firebolt_docs/authentication/sign-in-and-sign-up",permalink:"/firebolt-documentation/docs/0.6.0/firebolt_docs/authentication/sign-in-and-sign-up",draft:!1,tags:[],version:"0.6.0",frontMatter:{},sidebar:"firebolt_docs",previous:{title:"Email Prefill",permalink:"/firebolt-documentation/docs/0.6.0/firebolt_docs/authentication/email-prefill"},next:{title:"Discovery",permalink:"/firebolt-documentation/docs/0.6.0/category/discovery"}},p={},d=[{value:"2nd screen sign-in (preferred)",id:"2nd-screen-sign-in-preferred",level:2},{value:"On-screen Keyboard w/ Email Prefill",id:"on-screen-keyboard-w-email-prefill",level:2}],u={toc:d};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sign-in--sign-up"},"Sign In & Sign Up"),(0,o.kt)("p",null,'There are two ways to sign-in or sign-up for an app including "2nd screen sign-in" (which is the preferred method) and the "on-screen keyboard". '),(0,o.kt)("h2",{id:"2nd-screen-sign-in-preferred"},"2nd screen sign-in (preferred)"),(0,o.kt)("p",null,"We encourage you to use this method since it is the preferred method of sign-in among your users. This method displays a code, instructing the user to go to another device's web browser and enter the code displayed. After entering the code, the user is signed into your app on their tv. Since this requires your private systems to generate and verify credentials, we do not have an API solution for this method."),(0,o.kt)("h2",{id:"on-screen-keyboard-w-email-prefill"},"On-screen Keyboard w/ Email Prefill"),(0,o.kt)("p",null," We've made the sign-in/sign-up process significantly faster for your users by implementing an Email Prefill feature, which allows your users to pick one of their saved emails from their device rather than manually typing it in. Users will have this prefill option if they provide an email when they set up their TV. Otherwise, they will have to use the on-screen keyboard."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.6.0/firebolt_docs/authentication/email-prefill"},"Email Prefill")," for more info."),(0,o.kt)("p",null,"You can then use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Keyboard.password()")," API to prompt for the users password in a way that doesn't display on screen."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/api/keyboard"},"Keyboard API")," for more info."))}f.isMDXComponent=!0}}]);