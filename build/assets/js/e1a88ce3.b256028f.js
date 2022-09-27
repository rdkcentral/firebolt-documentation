"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[495],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),f=i,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return o?n.createElement(g,r(r({ref:t},u),{},{components:o})):n.createElement(g,r({ref:t},u))}));function f(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},71257:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=o(87462),i=o(63366),a=(o(67294),o(3905)),r=["components"],l={title:"Localization"},c="Localization & Geo-Fencing",s={unversionedId:"firebolt_docs/localization/localization",id:"version-0.8.0/firebolt_docs/localization/localization",title:"Localization",description:"Your app can receive device location information to better serve your users by utilizing the localization API. Localization information provides the device location and the primary language within a region, which will help you create proper geofencing and language localization.",source:"@site/versioned_docs/version-0.8.0/firebolt_docs/localization/localization.md",sourceDirName:"firebolt_docs/localization",slug:"/firebolt_docs/localization/",permalink:"/firebolt-documentation/docs/firebolt_docs/localization/",draft:!1,tags:[],version:"0.8.0",frontMatter:{title:"Localization"},sidebar:"firebolt_docs",previous:{title:"Localization",permalink:"/firebolt-documentation/docs/category/localization"},next:{title:"Metadata",permalink:"/firebolt-documentation/docs/category/metadata"}},u={},p=[{value:"Geo-Fencing",id:"geo-fencing",level:2},{value:"Language Localization",id:"language-localization",level:2},{value:"Additional Uses",id:"additional-uses",level:2}],d={toc:p};function f(e){var t=e.components,o=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"localization--geo-fencing"},"Localization & Geo-Fencing"),(0,a.kt)("p",null,"Your app can receive device location information to better serve your users by utilizing the localization API. Localization information provides the device location and the primary language within a region, which will help you create proper geofencing and language localization."),(0,a.kt)("h2",{id:"geo-fencing"},"Geo-Fencing"),(0,a.kt)("p",null,"Geofencing allows you to distribute your content based on the location of a person's device. For example, you may own distribution rights to content in a specific territory such as 'North America.' Implementing a geofence allows your users within North America to view the content, but the geofence blocks everyone outside of North America from viewing it."),(0,a.kt)("p",null,"The platform will provide your app with the device location information so it can display the correct content. However, for the sake of your users' privacy, the exact location of devices is not provided (i.e.: street address). Using the device location enables you to properly create and implement your content restrictions and preferences based on the device location."),(0,a.kt)("p",null,"The following APIs may be available to your app for targeting the users location:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Localization.countryCode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Localization.postalCode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Localization.locality")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Localization.latlon"))),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/api/localization/"},"Localization API")," for more information."),(0,a.kt)("h2",{id:"language-localization"},"Language Localization"),(0,a.kt)("p",null,"The user's language preferences are different from where they are located."),(0,a.kt)("p",null,"In order to facilitate your app's UI language localization, the following APIs can be used:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Localization.language")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Localization.locale"))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/api/localization/"},"Localization API")," for more information on these APIs."),(0,a.kt)("p",null,"Your apps need to provide all user-facing strings in the user's preferred language, as specified by one of these two APIs."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"locale")," is more specific because it is the full BCP-47 code which takes into account local dialects. The ",(0,a.kt)("inlineCode",{parentName:"p"},"language")," is the more general ISO 639 2 language code."),(0,a.kt)("h2",{id:"additional-uses"},"Additional Uses"),(0,a.kt)("p",null,"Within your app, a user might be interested in what is trending locally. In general, someone who lives in Mexico is likely to have different viewing preferences than someone living in England. Utilizing the localization methods, you could curate content that's regionally tailored and make it available to users in your specified location."))}f.isMDXComponent=!0}}]);