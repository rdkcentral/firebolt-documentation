"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[8470],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(i),g=r,y=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return i?n.createElement(y,o(o({ref:t},p),{},{components:i})):n.createElement(y,o({ref:t},p))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},9675:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=i(7462),r=i(3366),a=(i(7294),i(3905)),o=["components"],c={title:"Voice Guidance"},s="Voice Guidance",l={unversionedId:"firebolt_docs/accessibility/voice-guidance",id:"version-0.6.0-alpha.1/firebolt_docs/accessibility/voice-guidance",title:"Voice Guidance",description:"With accessibility settings, it\u2019s important that your app follows your user\u2019s device settings. When an app starts up it should grab your user\u2019s current device accessibility settings and adapt to system accessibility changes that your user makes.",source:"@site/versioned_docs/version-0.6.0-alpha.1/firebolt_docs/accessibility/voice-guidance.md",sourceDirName:"firebolt_docs/accessibility",slug:"/firebolt_docs/accessibility/voice-guidance",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/accessibility/voice-guidance",draft:!1,tags:[],version:"0.6.0-alpha.1",frontMatter:{title:"Voice Guidance"},sidebar:"firebolt_docs",previous:{title:"Closed Captions",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/accessibility/closed-captions"},next:{title:"App Lifecycle",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/category/app-lifecycle"}},p={},u=[{value:"Reading device settings",id:"reading-device-settings",level:2},{value:"Adapting to real-time changes",id:"adapting-to-real-time-changes",level:2}],d={toc:u};function g(e){var t=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"voice-guidance"},"Voice Guidance"),(0,a.kt)("p",null,"With accessibility settings, it\u2019s important that your app follows your user\u2019s device settings. When an app starts up it should grab your user\u2019s current device accessibility settings and adapt to system accessibility changes that your user makes."),(0,a.kt)("h2",{id:"reading-device-settings"},"Reading device settings"),(0,a.kt)("p",null,"In order to access your user's voice guidance settings, your app can call the ",(0,a.kt)("inlineCode",{parentName:"p"},"Accessibility.voiceGuidance()")," method from the ",(0,a.kt)("a",{parentName:"p",href:"/api/accessibility/"},"Accessibility")," API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nconst vgSettings = await Accessibility.voiceGuidance()\n\nif (vgSettings.enabled) {\n  // the user has voice guidance enabled\n}\n")),(0,a.kt)("p",null,"Additionally, your app should respect your user's current voice guidance speed preference. The voice guidance speed determines how quickly or slowly the voice reads the on-screen elements. Continuing from the previous example, you can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"speed")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(vgSettings.speed)\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/api/accessibility/#voiceguidance"},"Voice Guidance")," API for more info on voice guidance properties."),(0,a.kt)("h2",{id:"adapting-to-real-time-changes"},"Adapting to real-time changes"),(0,a.kt)("p",null,"While your app is running, or even while your app is playing content, your user may change the voice guidance settings on their device. Your app should promptly respond to this change by listening to all ",(0,a.kt)("inlineCode",{parentName:"p"},"voiceGuidanceSettingsChanged")," events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nAccessibility.listen(`voiceGuidanceSettingsChanged`, vgSettings => {\n  // vgSettings is the same structure returned from `voiceGuidance()`\n  if (vgSettings.enabled) {\n    // update your app's voice guidance speed\n    console.log(vgSettings.speed)\n  }\n  else {\n    // turn off your app's voice guidance\n  }\n})\n")))}g.isMDXComponent=!0}}]);