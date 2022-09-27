"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[9633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=l(n),y=s,f=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:s,o[1]=r;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(87462),s=n(63366),a=(n(67294),n(3905)),o=["components"],r={title:"Closed Captions"},c="Closed Captions (CC)",l={unversionedId:"firebolt_docs/accessibility/closed-captions",id:"version-0.6.0-alpha.1/firebolt_docs/accessibility/closed-captions",title:"Closed Captions",description:"With accessibility settings, it\u2019s important that your app follows your user\u2019s device settings. When an app starts up it should grab your user\u2019s current device accessibility settings and adapt to system accessibility changes that your user makes.",source:"@site/versioned_docs/version-0.6.0-alpha.1/firebolt_docs/accessibility/closed-captions.md",sourceDirName:"firebolt_docs/accessibility",slug:"/firebolt_docs/accessibility/closed-captions",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/accessibility/closed-captions",draft:!1,tags:[],version:"0.6.0-alpha.1",frontMatter:{title:"Closed Captions"},sidebar:"firebolt_docs",previous:{title:"Accessibility Overview",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/accessibility/"},next:{title:"Voice Guidance",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/accessibility/voice-guidance"}},p={},d=[{value:"Reading device settings",id:"reading-device-settings",level:2},{value:"Adapting to real-time changes",id:"adapting-to-real-time-changes",level:2},{value:"Example ClosedCaptionsSettings value",id:"example-closedcaptionssettings-value",level:2}],u={toc:d};function y(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"closed-captions-cc"},"Closed Captions (CC)"),(0,a.kt)("p",null,"With accessibility settings, it\u2019s important that your app follows your user\u2019s device settings. When an app starts up it should grab your user\u2019s current device accessibility settings and adapt to system accessibility changes that your user makes."),(0,a.kt)("p",null,"As a note, we cannot not render the captions for your app. Your app will need to be in sync with your user's expectations."),(0,a.kt)("h2",{id:"reading-device-settings"},"Reading device settings"),(0,a.kt)("p",null,"In order to access your user's current closed captions settings, your app can call the ",(0,a.kt)("inlineCode",{parentName:"p"},"Accessibility.closedCaptions()")," method from the ",(0,a.kt)("a",{parentName:"p",href:"/api/accessibility/"},"Accessibility")," API:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nconst ccSettings = await Accessibility.closedCaptions()\n\nif (ccSettings.enabled) {\n  // the user has captions enabled\n}\n")),(0,a.kt)("p",null,"Additionally, your app should respect your user's current closed-captions styles, which they may have set as their personal preference for readability. Continuing from the previous example, you can access the ",(0,a.kt)("inlineCode",{parentName:"p"},"styles")," property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(ccSettings.styles)\n")),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/api/accessibility/#closedcaptionsstyles"},"ClosedCaptionsStyles")," API for more info on styling properties."),(0,a.kt)("h2",{id:"adapting-to-real-time-changes"},"Adapting to real-time changes"),(0,a.kt)("p",null,"While your app is running, or even while your app is playing content, your user may change the closed captions settings on their device. Your app should promptly respond to this change by listening to all ",(0,a.kt)("inlineCode",{parentName:"p"},"closedCaptionsSettingsChanged")," events:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nAccessibility.listen(`closedCaptionsSettingsChanged`), ccSettings => {\n  // ccSettings is the same structure returned from `closedCaptions()`\n  if (ccSettings.enabled) {\n    // update your app's CC styles\n    console.log(ccSettings.styles)\n  }\n  else {\n    // turn off your app's CC rendering\n  }\n})\n")),(0,a.kt)("h2",{id:"example-closedcaptionssettings-value"},"Example ClosedCaptionsSettings value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    enabled: true,\n    styles: {\n      fontFamily: 'Monospace sans-serif',\n      fontSize: 1,\n      fontColor: '#ffffff',\n      fontEdge: 'none',\n      fontEdgeColor: '#7F7F7F',\n      fontOpacity: 100,\n      backgroundColor: '#000000',\n      backgroundOpacity: 100,\n      textAlign: 'center',\n      textAlignVertical: 'middle',\n    }\n}\n")),(0,a.kt)("p",null,"For more information about this API, visit the ",(0,a.kt)("a",{parentName:"p",href:"/api/accessibility/"},"Accessibility")," API documentation."))}y.isMDXComponent=!0}}]);