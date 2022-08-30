"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[6179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(k,l(l({ref:t},s),{},{components:n})):i.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],o={},d="Changelog",p={unversionedId:"changelog/changelog",id:"version-0.6.0-alpha.2/changelog/changelog",title:"Changelog",description:"0.8.0",source:"@site/versioned_docs/version-0.6.0-alpha.2/changelog/changelog.md",sourceDirName:"changelog",slug:"/changelog/",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/changelog/",draft:!1,tags:[],version:"0.6.0-alpha.2",frontMatter:{},sidebar:"changelog",next:{title:"Changelog",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/changelog/"}},s={},c=[{value:"0.8.0",id:"080",level:2},{value:"0.7.0",id:"070",level:2},{value:"0.6.2",id:"062",level:2},{value:"0.6.1",id:"061",level:2},{value:"0.6.0",id:"060",level:2},{value:"0.5.2",id:"052",level:2},{value:"0.5.1",id:"051",level:2},{value:"0.5.0",id:"050",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog"},"Changelog"),(0,r.kt)("h2",{id:"080"},"0.8.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tune Intents are now supported in ",(0,r.kt)("inlineCode",{parentName:"li"},"navigateTo")," events"),(0,r.kt)("li",{parentName:"ul"},"Added TypeScript declarations for Settings and Events"),(0,r.kt)("li",{parentName:"ul"},"Fixed/Removed test-enabling code from SDK"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug where the SDK would initialize itself even when not being used")),(0,r.kt)("h2",{id:"070"},"0.7.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Removed all ",(0,r.kt)("inlineCode",{parentName:"li"},"bigint")," types from TypeScript declarations, in favor of ",(0,r.kt)("inlineCode",{parentName:"li"},"number"),", since bigint is not widely supported across browsers. This changes impacts:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u200b    Device.screenResolution"),(0,r.kt)("li",{parentName:"ul"},"\u200b    Device.videoResolution"),(0,r.kt)("li",{parentName:"ul"},"\u200b    Discovery.purchasedContent"),(0,r.kt)("li",{parentName:"ul"},"\u200b    Metrics.mediaProgress"),(0,r.kt)("li",{parentName:"ul"},"\u200b    Metrics.mediaSeeking"),(0,r.kt)("li",{parentName:"ul"},"\u200b    Metrics.mediaSeeked"),(0,r.kt)("li",{parentName:"ul"},"\u200b    Parameters.initialization")))),(0,r.kt)("p",null,"To upgrade to 0.7.0 simply change the type of any Firebolt Promise resolutions from ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const res:[bigin, bigint] = await Device.screenResolution()\n")),(0,r.kt)("p",null,"Should become:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const res:[number, number] = await Device.screenResolution()\n")),(0,r.kt)("h2",{id:"062"},"0.6.2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed incompatibility with Jest 26 due to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/jest/issues/10565"},"jest/issues/10565"))),(0,r.kt)("h2",{id:"061"},"0.6.1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Changed Firebolt build to use ",(0,r.kt)("inlineCode",{parentName:"li"},".mjs")," extension"),(0,r.kt)("li",{parentName:"ul"},"Firebolt builds are now pure ES6 modules, not bundled with Webpack"),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"types")," path to package.json"),(0,r.kt)("li",{parentName:"ul"},"Fixed TypeScript declarations for ",(0,r.kt)("inlineCode",{parentName:"li"},"FlatMap")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"BooleanMap")),(0,r.kt)("li",{parentName:"ul"},"Added TypeScript return type declarations for ",(0,r.kt)("inlineCode",{parentName:"li"},"listen")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"once")," (all modules)"),(0,r.kt)("li",{parentName:"ul"},"Added TypeScript declaration for ",(0,r.kt)("inlineCode",{parentName:"li"},"clear")," method (all modules)"),(0,r.kt)("li",{parentName:"ul"},"Changed ",(0,r.kt)("inlineCode",{parentName:"li"},"{}")," return type to ",(0,r.kt)("inlineCode",{parentName:"li"},"void")," for listener callbacks")),(0,r.kt)("h2",{id:"060"},"0.6.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added support for ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rdkcentral/mock-firebolt/"},"rdkcentral/mock-firebolt")," via a WebSocket transport layer"),(0,r.kt)("li",{parentName:"ul"},"Deprecated Accessibility.closedCaptions and voiceGuidance, created properties for Accessibility.closedCaptionsSettings and voiceGuidanceSettings, which support subscribers"),(0,r.kt)("li",{parentName:"ul"},"Deprecated Device.listen(\u2018deviceNameChanged\u2019), added support for subscribing to Device.name()"),(0,r.kt)("li",{parentName:"ul"},"Added support for subscribing to property changes: Device.audio, hdcp, hdr, name, network, screenResolution, videoResolution, Advertising.policy, Discovery.policy, Localization.language"),(0,r.kt)("li",{parentName:"ul"},"Added proper TypeScript declarations for Discovery.entityInfo and Discovery.purchasedContent"),(0,r.kt)("li",{parentName:"ul"},"Fixed race condition w/ Transport Layer initialization")),(0,r.kt)("h2",{id:"052"},"0.5.2"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added Parameters modules"),(0,r.kt)("li",{parentName:"ul"},"Fixed typo in Advertising.config example result for docs/Mock"),(0,r.kt)("li",{parentName:"ul"},"Updated Metrics.error signature to include ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," as first parameter"),(0,r.kt)("li",{parentName:"ul"},"Created window.__firebolt.testHarness handshake (for Mock TL only)"),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"LocalizedString")," type for localized string dictionaries"),(0,r.kt)("li",{parentName:"ul"},"Updated ",(0,r.kt)("inlineCode",{parentName:"li"},"Discovery.watchNext")," to use ",(0,r.kt)("inlineCode",{parentName:"li"},"LocalizedString")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"title")," and each property of ",(0,r.kt)("inlineCode",{parentName:"li"},"images")),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"OfferingType")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ProgramType")," parameters to ",(0,r.kt)("inlineCode",{parentName:"li"},"Discovery.purchasedContent"))),(0,r.kt)("h2",{id:"051"},"0.5.1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cleaned up errors in various Mock responses"),(0,r.kt)("li",{parentName:"ul"},"Methods that call private Metrics APIs, e.g. Lifecycle.ready, now do so after promise resolution")),(0,r.kt)("h2",{id:"050"},"0.5.0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updated TS declarations (.d.ts) to detect which event is being passed to ",(0,r.kt)("inlineCode",{parentName:"li"},".listen()")," methods"),(0,r.kt)("li",{parentName:"ul"},"Updated all ",(0,r.kt)("inlineCode",{parentName:"li"},"listen()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"once()")," methods to return a ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise")),(0,r.kt)("li",{parentName:"ul"},"Renamed ",(0,r.kt)("inlineCode",{parentName:"li"},"verifyContentRating")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"verifyPurchase")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"approveContentRating")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"approvePurchase")," respectively"),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"Profile.flags()")," for distributor-specific profile flags"),(0,r.kt)("li",{parentName:"ul"},"Added optional ",(0,r.kt)("inlineCode",{parentName:"li"},"source")," field to all ",(0,r.kt)("inlineCode",{parentName:"li"},"LifecycleEvents")),(0,r.kt)("li",{parentName:"ul"},"Complete rewrite of ",(0,r.kt)("inlineCode",{parentName:"li"},"Metrics")," APIs (see docs)"),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"policyChanged")," events to ",(0,r.kt)("inlineCode",{parentName:"li"},"Discovery")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Advertising")),(0,r.kt)("li",{parentName:"ul"},"Fixed duplicate RPC listen calls when listening to an event in slightly different ways, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"once()")," vs ",(0,r.kt)("inlineCode",{parentName:"li"},"listen()")),(0,r.kt)("li",{parentName:"ul"},"Added Account, Authentication, Keyboard, Profile, SecondScreen modules"),(0,r.kt)("li",{parentName:"ul"},"Added Federated Search APIs to Discovery"),(0,r.kt)("li",{parentName:"ul"},"Added TypeScript/Intellisense declarations file"),(0,r.kt)("li",{parentName:"ul"},"Fixed spelling error on Accessibility module name"),(0,r.kt)("li",{parentName:"ul"},"Moved the ",(0,r.kt)("inlineCode",{parentName:"li"},"coppa")," parameter for ",(0,r.kt)("inlineCode",{parentName:"li"},"Advertising.confg()")," into the ",(0,r.kt)("inlineCode",{parentName:"li"},"options")," object, and made it optional"),(0,r.kt)("li",{parentName:"ul"},"Final version of ",(0,r.kt)("inlineCode",{parentName:"li"},"Advertising.policy().skipRestriction")," semantics")))}m.isMDXComponent=!0}}]);