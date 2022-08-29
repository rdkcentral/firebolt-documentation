"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[5442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),y=s,f=d["".concat(c,".").concat(y)]||d[y]||u[y]||r;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),s=n(63366),r=(n(67294),n(3905)),a=["components"],o={title:"Closed Captions"},c="Closed Captions (CC)",l={unversionedId:"firebolt_docs/accessibility/closed-captions",id:"firebolt_docs/accessibility/closed-captions",title:"Closed Captions",description:"With accessibility settings, it\u2019s important that your app follows your user\u2019s device settings. When an app starts up it should grab your user\u2019s current device accessibility settings and adapt to system accessibility changes that your user makes.",source:"@site/docs/firebolt_docs/accessibility/closed-captions.md",sourceDirName:"firebolt_docs/accessibility",slug:"/firebolt_docs/accessibility/closed-captions",permalink:"/docs/next/firebolt_docs/accessibility/closed-captions",draft:!1,tags:[],version:"current",frontMatter:{title:"Closed Captions"},sidebar:"defaultSidebar",previous:{title:"Accessibility",permalink:"/docs/next/firebolt_docs/accessibility/"},next:{title:"Voice Guidance",permalink:"/docs/next/firebolt_docs/accessibility/voice-guidance"}},p={},u=[{value:"Reading device settings",id:"reading-device-settings",level:2},{value:"Adapting to real-time changes",id:"adapting-to-real-time-changes",level:2},{value:"Example ClosedCaptionsSettings value",id:"example-closedcaptionssettings-value",level:2}],d={toc:u};function y(e){var t=e.components,n=(0,s.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"closed-captions-cc"},"Closed Captions (CC)"),(0,r.kt)("p",null,"With accessibility settings, it\u2019s important that your app follows your user\u2019s device settings. When an app starts up it should grab your user\u2019s current device accessibility settings and adapt to system accessibility changes that your user makes."),(0,r.kt)("p",null,"As a note, we cannot not render the captions for your app. Your app will need to be in sync with your user's expectations."),(0,r.kt)("h2",{id:"reading-device-settings"},"Reading device settings"),(0,r.kt)("p",null,"In order to access your user's current closed captions settings, your app can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"Accessibility.closedCaptions()")," method from the ",(0,r.kt)("a",{parentName:"p",href:"/api/accessibility/"},"Accessibility")," API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nconst ccSettings = await Accessibility.closedCaptions()\n\nif (ccSettings.enabled) {\n  // the user has captions enabled\n}\n")),(0,r.kt)("p",null,"Additionally, your app should respect your user's current closed-captions styles, which they may have set as their personal preference for readability. Continuing from the previous example, you can access the ",(0,r.kt)("inlineCode",{parentName:"p"},"styles")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(ccSettings.styles)\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/api/accessibility/#closedcaptionsstyles"},"ClosedCaptionsStyles")," API for more info on styling properties."),(0,r.kt)("h2",{id:"adapting-to-real-time-changes"},"Adapting to real-time changes"),(0,r.kt)("p",null,"While your app is running, or even while your app is playing content, your user may change the closed captions settings on their device. Your app should promptly respond to this change by listening to all ",(0,r.kt)("inlineCode",{parentName:"p"},"closedCaptionsSettingsChanged")," events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nAccessibility.listen(`closedCaptionsSettingsChanged`), ccSettings => {\n  // ccSettings is the same structure returned from `closedCaptions()`\n  if (ccSettings.enabled) {\n    // update your app's CC styles\n    console.log(ccSettings.styles)\n  }\n  else {\n    // turn off your app's CC rendering\n  }\n})\n")),(0,r.kt)("h2",{id:"example-closedcaptionssettings-value"},"Example ClosedCaptionsSettings value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    enabled: true,\n    styles: {\n      fontFamily: 'Monospace sans-serif',\n      fontSize: 1,\n      fontColor: '#ffffff',\n      fontEdge: 'none',\n      fontEdgeColor: '#7F7F7F',\n      fontOpacity: 100,\n      backgroundColor: '#000000',\n      backgroundOpacity: 100,\n      textAlign: 'center',\n      textAlignVertical: 'middle',\n    }\n}\n")),(0,r.kt)("p",null,"For more information about this API, visit the ",(0,r.kt)("a",{parentName:"p",href:"/api/accessibility/"},"Accessibility")," API documentation."))}y.isMDXComponent=!0}}]);