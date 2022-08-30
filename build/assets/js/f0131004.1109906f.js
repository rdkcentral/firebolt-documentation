"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[2039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={},l="Content Discovery",c={unversionedId:"firebolt_docs/discovery/content-discovery",id:"version-0.5.3/firebolt_docs/discovery/content-discovery",title:"Content Discovery",description:'"Content Discovery" refers to all of the ways that users can discover your app\'s content on the platform.',source:"@site/versioned_docs/version-0.5.3/firebolt_docs/discovery/content-discovery.md",sourceDirName:"firebolt_docs/discovery",slug:"/firebolt_docs/discovery/content-discovery",permalink:"/firebolt-documentation/docs/0.5.3/firebolt_docs/discovery/content-discovery",draft:!1,tags:[],version:"0.5.3",frontMatter:{},sidebar:"firebolt_docs",previous:{title:"Discovery",permalink:"/firebolt-documentation/docs/0.5.3/category/discovery"},next:{title:"Deep Linking",permalink:"/firebolt-documentation/docs/0.5.3/firebolt_docs/discovery/deep-linking"}},p={},u=[{value:"Metadata Integration",id:"metadata-integration",level:2},{value:"Navigation Intents",id:"navigation-intents",level:2},{value:"Continue Watching",id:"continue-watching",level:2},{value:"Entitlements Push",id:"entitlements-push",level:2},{value:"Sign-in/out Push",id:"sign-inout-push",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"content-discovery"},"Content Discovery"),(0,o.kt)("p",null,'"Content Discovery" refers to all of the ways that users can discover your app\'s content on the platform.'),(0,o.kt)("p",null,"The platform is constantly improving the ways that content can be discovered, this includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Search: Aggregated Experience Voice"),(0,o.kt)("li",{parentName:"ul"},"Seach: In-app Voice"),(0,o.kt)("li",{parentName:"ul"},"Search: Traditional"),(0,o.kt)("li",{parentName:"ul"},"Menu: Editorially cultivated"),(0,o.kt)("li",{parentName:"ul"},"Menu: Continue Watching"),(0,o.kt)("li",{parentName:"ul"},"Menu: Watch Next"),(0,o.kt)("li",{parentName:"ul"},"And more...")),(0,o.kt)("p",null,"Integrating your app with the Content Discovery module is an easy way to give your users an experience they\u2019ll want to engage in over and over."),(0,o.kt)("p",null,"Full Content Discovery integration consists of the following:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#metadata-integration"},"Metadata Integration")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Ingesting your content catalog into distributor discovery services so that it can be presented to end users from outside of your app.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#navigation-intents"},"Navigation Intents")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Responding to platform deep links, both before and after your app is loaded.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#continue-watching"},"Continue Watching")),(0,o.kt)("td",{parentName:"tr",align:"left"},'Pushing user content progress so that the platforms can show a "Continue Watching" list that deep links back to your app.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#entitlements-push"},"Entitlements Push")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pushing any changes to your user's entitlements through a client-side Firebolt API.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"#sign-in-out-push"},"Sign-in/out Push")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Pushing an update whenever the user does a sign-in/out.")))),(0,o.kt)("h2",{id:"metadata-integration"},"Metadata Integration"),(0,o.kt)("p",null,"Asset metadata is required to utilize many content discovery features. Asset metadata describes all the relevant, useful, and important information about a media asset. The metadata you provide is used to directly populate the presentation and discovery of your content on the platform."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.5.3/firebolt_docs/metadata/metadata-integration"},"Metadata Integration")," for more info."),(0,o.kt)("h2",{id:"navigation-intents"},"Navigation Intents"),(0,o.kt)("p",null,'In order to enable faster app launches, Firebolt may keep your app loaded even while it\'s not in use. In order to support "deep links," (ie: opening your app to a specific piece of content that the user selected) your app will need to integrate with the Firebolt Navigation Intents feature. '),(0,o.kt)("p",null,"This integrates your app with basic content discovery features for both deep links as well as in app search."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.5.3/firebolt_docs/discovery/deep-linking"},"Deep Linking and Navigation Intents")," for more info."),(0,o.kt)("h2",{id:"continue-watching"},"Continue Watching"),(0,o.kt)("p",null,"The Continue Watching feature helps to drive traffic back into your app from an aggregated experience. By pushing viewing progress to the continue watching API, your app enables aggregated experiences to create prominent calls-to-action to resume that content, or watch the next piece of content in a grouping (ie: the next episode of a TV season)."),(0,o.kt)("p",null,"Enabling this feature is as simple as calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Discovery.watched()")," method whenever a user is watching content in your app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Discovery } from '@firebolt-js/sdk'\n\nDiscovery.watched(entityId, progress)\n")),(0,o.kt)("p",null,"You can also specify if the content should be considered fully watched, which prevents users from being relaunched into the credits of a movie, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Discovery.watched(entityId, progress, true)\n")),(0,o.kt)("p",null,'Lastly, you can specify the date/time at which the content was watched, in order to update the Firebolt "Continue Watching" feature with viewings that have occurred on other platforms:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Discovery.watched(entityId, progress, true, '1995-12-17T03:24:00')\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/api/discovery/#watched"},(0,o.kt)("inlineCode",{parentName:"a"},"Discovery.watched()")," API")," documentation for a complete description of the parameters and how to use them."),(0,o.kt)("h2",{id:"entitlements-push"},"Entitlements Push"),(0,o.kt)("p",null,"Entitlements Push allows aggregated experiences to promote your app's content to drive users back into your app."),(0,o.kt)("p",null,"While your app may simply grant a single entitlement of your entire catalog to all of your users, aggregated experiences generally won't assume so."),(0,o.kt)("p",null,"By providing a list of entitlements that the current user has, aggregated experiences can be sure to only promote content that won't be gated by a purchase once your app is launched."),(0,o.kt)("p",null,"To push the current user's entitlements, call ",(0,o.kt)("inlineCode",{parentName:"p"},"Discovery.entitlements()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'Discovery.entitlements([\n                         {\n                           "entitlementId": "partner.com/entitlement/123",\n                           "startTime": "2021-04-23T18:25:43.511Z",\n                           "endTime": "2021-04-23T18:25:43.511Z"\n                         },\n                         {\n                           "entitlementId": "partner.com/entitlement/456",\n                           "startTime": "2021-04-23T18:25:43.511Z",\n                           "endTime": "2021-04-23T18:25:43.511Z"\n                         }\n                       ])\n    .then(success => {\n        console.log(success)\n    })\n')),(0,o.kt)("h2",{id:"sign-inout-push"},"Sign-in/out Push"),(0,o.kt)("p",null,"Sign-in/out Push allows aggregated experiences to know when a user is signed in or out. This might seem like a minor detail, but in order to respect privacy concerns, it's very important that aggregated experiences no longer promote content to a user that is no longer logged in!"),(0,o.kt)("p",null,"Whenever your user signs in or out of the app, just call the corresponding Firebolt API so that aggregated experiences can respect user privacy:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Discovery.signIn()\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Discovery.signOut()\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"signIn")," method also supports an array of entitlements, just like ",(0,o.kt)("inlineCode",{parentName:"p"},"Discovery.entitlements"),", as a convenience, so your app can update entitlements whenever your user signs in:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'Discovery.signIn([\n                    {\n                    "entitlementId": "partner.com/entitlement/123",\n                    "startTime": "2021-04-23T18:25:43.511Z",\n                    "endTime": "2021-04-23T18:25:43.511Z"\n                    },\n                    {\n                    "entitlementId": "partner.com/entitlement/456",\n                    "startTime": "2021-04-23T18:25:43.511Z",\n                    "endTime": "2021-04-23T18:25:43.511Z"\n                    }\n                ])\n    .then(success => {\n        console.log(success)\n    })\n')))}m.isMDXComponent=!0}}]);