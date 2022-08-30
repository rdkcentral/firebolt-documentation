"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[3114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return a?o.createElement(f,i(i({ref:t},c),{},{components:a})):o.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<n;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},52115:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var o=a(87462),r=a(63366),n=(a(67294),a(3905)),i=["components"],s={},l="Metadata Integration",d={unversionedId:"firebolt_docs/metadata/metadata-integration",id:"version-0.6.0-alpha.2/firebolt_docs/metadata/metadata-integration",title:"Metadata Integration",description:"Asset metadata describes all the relevant, useful, and important information about a media asset. The metadata you provide is used to directly populate the presentation and discovery of your content on the platform. The metadata is also used to determine numerous criteria including (but not limited to):",source:"@site/versioned_docs/version-0.6.0-alpha.2/firebolt_docs/metadata/metadata-integration.md",sourceDirName:"firebolt_docs/metadata",slug:"/firebolt_docs/metadata/metadata-integration",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/firebolt_docs/metadata/metadata-integration",draft:!1,tags:[],version:"0.6.0-alpha.2",frontMatter:{},sidebar:"firebolt_docs",previous:{title:"Metadata",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/category/metadata"},next:{title:"Open GMRSS Specifications",permalink:"/firebolt-documentation/docs/0.6.0-alpha.2/firebolt_docs/metadata/open-gmrss-format"}},c={},u=[{value:"Use cases",id:"use-cases",level:2},{value:"How to implement",id:"how-to-implement",level:2}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"metadata-integration"},"Metadata Integration"),(0,n.kt)("p",null,"Asset metadata describes all the relevant, useful, and important information about a media asset. The metadata you provide is used to directly populate the presentation and discovery of your content on the platform. The metadata is also used to determine numerous criteria including (but not limited to):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When an asset is available"),(0,n.kt)("li",{parentName:"ul"},"Which of your users can view your asset"),(0,n.kt)("li",{parentName:"ul"},"Whether the asset requires a subscription"),(0,n.kt)("li",{parentName:"ul"},"The rating of the asset"),(0,n.kt)("li",{parentName:"ul"},"The audio and video details of the asset"),(0,n.kt)("li",{parentName:"ul"},"The title and description of the asset"),(0,n.kt)("li",{parentName:"ul"},"The studio, actors, and crew involved")),(0,n.kt)("h2",{id:"use-cases"},"Use cases"),(0,n.kt)("p",null,"Metadata allows people to discover your content easier whether they are inside your app or outside of your app. Metadata integration also gives your users the ability to use the platform's ",(0,n.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.6.0-alpha.2/firebolt_docs/discovery/voice-commands"},"Voice Commands")," feature which can allow your app to reach a wider demographic and deliver content faster to your users."),(0,n.kt)("p",null,"For example, you may have a video called 'Dino Dance' on your app but you have a user outside of your app that wants to watch it. Your user can use the global search or say, \"Watch Dino Dance\" using the voice remote, and the platform will search your submitted metadata for a match. Since the metadata exists for the content, your app will launch and go to the 'Dino Dance' video."),(0,n.kt)("h2",{id:"how-to-implement"},"How to implement"),(0,n.kt)("p",null,"All asset metadata must be provided in the ",(0,n.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.6.0-alpha.2/firebolt_docs/metadata/open-gmrss-format"},"GMRSS Format")," for the platform to receive real-time calls to the metadata (preferred) or pull GMRSS feeds at scheduled intervals. You are responsible for adding and removing content from the feed so that the information provided is up to date. Any new content on your app should be added to the feed 48 hours before going live to ensure your users are able to locate it. For a list of GMRSS fields and specifications, visit the ",(0,n.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.6.0-alpha.2/firebolt_docs/metadata/open-gmrss-format"},"Open GMRSS Format")," documentation."))}m.isMDXComponent=!0}}]);