"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[93],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(a),u=o,f=h["".concat(i,".").concat(u)]||h[u]||d[u]||n;return a?r.createElement(f,p(p({ref:t},c),{},{components:a})):r.createElement(f,p({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,p=new Array(n);p[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var s=2;s<n;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},77941:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),p=["components"],l={},i="Parental Controls",s={unversionedId:"firebolt_docs/profile/parental-controls",id:"version-0.6.0-alpha.2/firebolt_docs/profile/parental-controls",title:"Parental Controls",description:"Parental controls are the settings that enable your users to block specific actions from being taken without first verifying that they are approved to do so. For example, this allows an account owner to lock content such as specific ratings, titles, channels, and even entire apps. Another core function of parental controls is the ability to lock purchases made on the device.",source:"@site/versioned_docs/version-0.6.0-alpha.2/firebolt_docs/profile/parental-controls.md",sourceDirName:"firebolt_docs/profile",slug:"/firebolt_docs/profile/parental-controls",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/firebolt_docs/profile/parental-controls",draft:!1,tags:[],version:"0.6.0-alpha.2",frontMatter:{},sidebar:"firebolt_docs",previous:{title:"Profiles",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/category/profiles"},next:{title:"Profile Flags",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/firebolt_docs/profile/profile-flags"}},c={},d=[{value:"Content Ratings Approval",id:"content-ratings-approval",level:2},{value:"Platform-provided Content Ratings Approval",id:"platform-provided-content-ratings-approval",level:3},{value:"App-provided Content Ratings Approval",id:"app-provided-content-ratings-approval",level:3},{value:"Purchase Approval",id:"purchase-approval",level:2},{value:"Platform-provided Purchase Approval",id:"platform-provided-purchase-approval",level:3},{value:"App-provided Purchase Approval",id:"app-provided-purchase-approval",level:3},{value:"App-provided Approval Considerations",id:"app-provided-approval-considerations",level:2}],h={toc:d};function u(e){var t=e.components,a=(0,o.Z)(e,p);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parental-controls"},"Parental Controls"),(0,n.kt)("p",null,"Parental controls are the settings that enable your users to block specific actions from being taken without first verifying that they are approved to do so. For example, this allows an account owner to lock content such as specific ratings, titles, channels, and even entire apps. Another core function of parental controls is the ability to lock purchases made on the device.\nImplementing parental controls within your app will create a sense of security for those sharing devices with children, roommates, or guests. Parents want to know their children are not in danger of watching mature content or making dozens of unauthorized in-app purchases. In addition to saving your users and your support team from dealing with unnecessary cancellations and refunds, parental controls create a safe, secure, and family-friendly experience which many households consider a modern-day requirement."),(0,n.kt)("p",null,"It's important that your app provides the ability only to allow authorized users to make purchases or watch mature content."),(0,n.kt)("h2",{id:"content-ratings-approval"},"Content Ratings Approval"),(0,n.kt)("p",null,"See either the ",(0,n.kt)("a",{parentName:"p",href:"platform-provided-content-ratings-approval"},"Platform-provided")," or ",(0,n.kt)("a",{parentName:"p",href:"app-provided-content-ratings-approval"},"App-provided")," solutions below."),(0,n.kt)("h3",{id:"platform-provided-content-ratings-approval"},"Platform-provided Content Ratings Approval"),(0,n.kt)("p",null,"Integrating with the platform's Content Ratings Approval feature requires calling the ",(0,n.kt)("a",{parentName:"p",href:"/api/profile/#approvecontentrating"},"Profile.approveContentRating() API"),"."),(0,n.kt)("p",null,"Before initiating mature content, your app should ensure that the current user has approval to view it."),(0,n.kt)("p",null,"To do this, simply call the ",(0,n.kt)("inlineCode",{parentName:"p"},"Profile.approveContentRating()")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Profile } from '@firebolt-js/sdk'\nProfile.approveContentRating()\n    .then(allow => {\n        if (allow) {\n            // the user successfully passed the approval challenge\n            // and can now view whatever content they're trying to access\n        }\n        else {\n            // the user did not successfully pass the challenge\n            // and should not be allowed to view the selected content\n        }\n    }).catch(error => {\n        // something went wrong, for example a timeout on the challenge UX\n        // the user MUST NOT be allowed access in this case\n    })\n")),(0,n.kt)("p",null,"When called, the platform will present a UX to challenge the current user, for example a prompt for a secret PIN. The platform may also decide to cache a successful challenge for a short amount of time, and skip the UX. In either case, your app's call will resolve to a ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")," dictating whether or not the challenge was passed."),(0,n.kt)("h3",{id:"app-provided-content-ratings-approval"},"App-provided Content Ratings Approval"),(0,n.kt)("p",null,"If your app does not provide a way for your users to prevent access to mature content, then the entire app itself will be gated by the platform's aggregated content and app discovery UX. To avoid this, consider using the ",(0,n.kt)("a",{parentName:"p",href:"platform-provided-content-ratings-approval"},"Platform-provided Content Ratings Approval")," feature."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"#app-provided-approval-considerations"},"App-provided Approval Considerations"),", for additional details on implementing your own purchase approval feature."),(0,n.kt)("h2",{id:"purchase-approval"},"Purchase Approval"),(0,n.kt)("p",null,"The news is rife with horror stories where parents find that their bills are astronomical because unauthorized users, usually their children, have been allowed to make purchases without restrictions."),(0,n.kt)("p",null,"It's important that your app implement a method where only authorized users are allowed to make purchases."),(0,n.kt)("p",null,"See either the ",(0,n.kt)("a",{parentName:"p",href:"platform-provided-purchase-approval"},"Platform-provided")," or ",(0,n.kt)("a",{parentName:"p",href:"app-provided-purchase-approval"},"App-provided")," solutions below."),(0,n.kt)("h3",{id:"platform-provided-purchase-approval"},"Platform-provided Purchase Approval"),(0,n.kt)("p",null,"Integrating with the platform's Purchase Approval feature requires calling the ",(0,n.kt)("a",{parentName:"p",href:"/api/profile/#approvepurchase"},"Profile.approvePurchase() API"),"."),(0,n.kt)("p",null,"Before initiating any sort of financial transaction, your app should ensure that the current user has approval to purchase."),(0,n.kt)("p",null,"To do this, simply call the ",(0,n.kt)("inlineCode",{parentName:"p"},"Profile.approveContentRating()")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Profile } from '@firebolt-js/sdk'\n\nProfile.approvePurchase()\n    .then(allow => {\n        if (allow) {\n            // the user successfully passed the approval challenge\n            // and can now purchase whatever content they're trying to access\n        }\n        else {\n            // the user did not successfully pass the challenge\n            // and should not be allowed to purchase the selected content\n        }\n    }).catch(error => {\n        // something went wrong, for example a timeout on the challenge UX\n        // the user MUST NOT be allowed access in this case\n    })\n")),(0,n.kt)("p",null,"When called, the platform will present a UX to challenge the current user, for example a prompt for a secret PIN. The platform may also decide to cache a successful challenge for a short amount of time, and skip the UX. In either case, your app's call will resolve to a ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")," dictating whether or not the challenge was passed."),(0,n.kt)("h3",{id:"app-provided-purchase-approval"},"App-provided Purchase Approval"),(0,n.kt)("p",null,"If your app does not provide a way for your users to prevent unapproved purchases, then the entire app itself will be gated by the platform's aggregated content and app discovery UX. To avoid this, consider using the ",(0,n.kt)("a",{parentName:"p",href:"platform-provided-purchase-approval"},"Platform-provided Purchase Approval")," feature."),(0,n.kt)("p",null,"What constitutes a user who has purchasing authority can be flexible. When your app creates a profile, it can be for guests, roommates, or whatever your app dreams up."),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"#app-provided-approval-considerations"},"App-provided Approval Considerations"),", for additional details on implementing your own purchase approval feature."),(0,n.kt)("h2",{id:"app-provided-approval-considerations"},"App-provided Approval Considerations"),(0,n.kt)("p",null,'In order to provide approval features with your own infrastructure, your app will likely need to provide a profile management feature and establish, in some way, profile settings that indicate what a user can do. The way your app does this is up to you. It may be that a parent sets up a pin access code that\'s associated to their profile; it may be that the parent creates a "Kids Profile," in which your app then knows it has certain restrictions. The back-end method will be the same.'),(0,n.kt)("p",null,'One thing to consider is how these approvals "flow" through your app. If, for example, your app uses a pin to verify if a user can access content, then your app should consider how long that pin (or whatever process your app uses) is valid.'),(0,n.kt)("p",null,"For instance, if a parent logs in and starts to watch a mature program and gets bored and then goes to another piece of adult content, your app needs to decide if it re-accesses their eligibility or flow between content freely. In addition, if that parent steps away, maybe they go to bed or run an errand, then your app should also consider how a user should re-access their eligibility for making purchases and what content they can view."))}u.isMDXComponent=!0}}]);