"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[7791],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={},s="Deep Linking",p={unversionedId:"firebolt_docs/discovery/deep-linking",id:"version-0.6.0-alpha.1/firebolt_docs/discovery/deep-linking",title:"Deep Linking",description:"Deep linking is how the platform can inform your app of a user's intention to view a specific, indexed piece of content beyond just your home screen.",source:"@site/versioned_docs/version-0.6.0-alpha.1/firebolt_docs/discovery/deep-linking.md",sourceDirName:"firebolt_docs/discovery",slug:"/firebolt_docs/discovery/deep-linking",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/discovery/deep-linking",draft:!1,tags:[],version:"0.6.0-alpha.1",frontMatter:{},sidebar:"firebolt_docs",previous:{title:"Content Discovery",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/discovery/content-discovery"},next:{title:"Voice Commands",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/discovery/voice-commands"}},d={},u=[{value:"Why use Navigation Intents",id:"why-use-navigation-intents",level:2},{value:"How to use Navigation Intents",id:"how-to-use-navigation-intents",level:2},{value:"Types of Navigation Intents",id:"types-of-navigation-intents",level:2},{value:"Home Intent",id:"home-intent",level:3},{value:"Entity Intent",id:"entity-intent",level:3},{value:"Playback Intent",id:"playback-intent",level:3},{value:"Search Intent",id:"search-intent",level:3},{value:"Section Intent",id:"section-intent",level:3}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deep-linking"},"Deep Linking"),(0,o.kt)("p",null,"Deep linking is how the platform can inform your app of a user's intention to view a specific, indexed piece of content beyond just your home screen."),(0,o.kt)("p",null,"In Firebolt, a deep link is expressed as a ",(0,o.kt)("inlineCode",{parentName:"p"},"NavigationIntent")," object, which has all of the details your app needs to identify and navigate to the appropriate content. NavigationIntents are passed to your app via the ",(0,o.kt)("inlineCode",{parentName:"p"},"navigateTo")," event, which allows your app to receive deep links without the platform forcing it to reload. This creates a much faster and seamless experience."),(0,o.kt)("p",null,"Integrating with Navigation Intents is required in order to fully support ",(0,o.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/discovery/content-discovery"},"Content Discovery"),"."),(0,o.kt)("h2",{id:"why-use-navigation-intents"},"Why use Navigation Intents"),(0,o.kt)("p",null,"Navigation Intents are designed to inform your app of the user's intent to navigate somewhere in your app. There are several reasons why the platform would need to pass this information to your app:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The user launches your app via a voice command with a specific program"),(0,o.kt)("li",{parentName:"ul"},"The user initiates a search for content w/ in your app, e.g. \"Show me comedies in 'Example App'\""),(0,o.kt)("li",{parentName:"ul"},"The user selects an editorially promoted tile for your content in an aggregated experience"),(0,o.kt)("li",{parentName:"ul"},"The user selects a tile for your content in an aggregated search"),(0,o.kt)("li",{parentName:"ul"},"The user selects an advertisement for your content from somewhere outside of your app")),(0,o.kt)("p",null,"Navigation Intents also enable us to notify you of any platform-initiated user navigation requests such as voice searches for specific pages, content, genres, or content within your app. "),(0,o.kt)("p",null,"Simply put, Navigation Intents connect the user's intentions on the platform to your app's desired destination."),(0,o.kt)("h2",{id:"how-to-use-navigation-intents"},"How to use Navigation Intents"),(0,o.kt)("p",null,"In order to respond to Navigation Intents, your app must listen to the Discovery module's ",(0,o.kt)("inlineCode",{parentName:"p"},"navigateTo")," event. This allows the platform to pre-load your app before the user requests it, and then let you know the user's requested content much more quickly when they do. "),(0,o.kt)("p",null,"You can listen for Navigation Intents with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Discovery.listen")," API, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"Discovery.listen('navigateTo', (intent) => {\n    // use intent.action to determine what kind of intent this is\n    console.log(intent.action)\n\n    // use intent.data, if present, to get more context, e.g. intent.data.entityId if applicable\n    console.dir(intent.data)\n})\n")),(0,o.kt)("p",null,"See also:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/app-lifecycle/listening-for-events"},"Listening for Events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/api/discovery/"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"Discovery")," module"))),(0,o.kt)("p",null,"For more info."),(0,o.kt)("h2",{id:"types-of-navigation-intents"},"Types of Navigation Intents"),(0,o.kt)("p",null,"The following sections describe each specific type of NavigationIntent."),(0,o.kt)("h3",{id:"home-intent"},"Home Intent"),(0,o.kt)("p",null,"The Home Intent tells your app to simply return to the home page. This may be sent because the user did something in the aggregated experience that would make them reasonably expect your app to be reset."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User launches your app"),(0,o.kt)("li",{parentName:"ul"},"User exits via the home key"),(0,o.kt)("li",{parentName:"ul"},"User turns off their device, putting it in sleep mode"),(0,o.kt)("li",{parentName:"ul"},"User turns on their device later and relaunches your app")),(0,o.kt)("p",null,"If your app was still in the ",(0,o.kt)("inlineCode",{parentName:"p"},"inactive")," state (See ",(0,o.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/app-lifecycle/lifecycle-management"},"Lifecycle Management")," then the platform might reset it to the home page in order to create the experience of the TV having been restarted."),(0,o.kt)("p",null,"An example Home Intent object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "home",\n    "context": {\n        "source": "voice"\n    }\n}\n')),(0,o.kt)("h3",{id:"entity-intent"},"Entity Intent"),(0,o.kt)("p",null,"The Entity Intent tells your app that the user intends to see full details of a program or entity in your app."),(0,o.kt)("p",null,"This should be used to bring up the details view for an entity, and not go directly to a playback experience (see ",(0,o.kt)("a",{parentName:"p",href:"#playback-intent"},"Playback Intent")," below)."),(0,o.kt)("p",null,"This is the most common type of Navigation Intent, as it's all about your apps content. The reasons for sending this intent are simple: The user has made it clear they intend to view a specific program or entity in your app."),(0,o.kt)("p",null,"The platform may derive this intention from a voice command the user issues, or infer the intention from the user selecting a tile representing content in your app. Either way, the platform will hand the intent off to your app in the form of an Entity Intent, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "entity",\n    "data": {\n        "entityId": "xyz"\n    },\n    "context": {\n        "source": "voice"\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"entityId")," field inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," object will be an entity identifier from ",(0,o.kt)("strong",{parentName:"p"},"*your catalog identifiers"),". These were provided to us via one of the integration paths described in ",(0,o.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/discovery/content-discovery"},"Content Discovery"),", which is a prerequisite for functional deep links that contain Entity Intents."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"entityId")," field is required on all Entity Intents. Other optional fields include:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"programType")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},'What type of program, e.g. "movie", "season", "episode", etc.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"seriesId")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Identifier of the TV Series for this entity, if applicable.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"seasonId")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Identifier of the TV Series season of this entity, if applicable.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"assetId")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"An additional disambiguation identifier if your app requires one.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"appContentData")),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Any additional parameters your app's metadata may have provided")))),(0,o.kt)("h3",{id:"playback-intent"},"Playback Intent"),(0,o.kt)("p",null,"The Playback Intent tells your app that the user intends to start playback of a program or entity in your app."),(0,o.kt)("p",null,"This should be used to immediately bring up your app's player with the entity's (or the best playable child entity's) stream beginning to load."),(0,o.kt)("p",null,'This is used in situations where the user would reasonable expect playback, rather than details. The most common example of this is if the user selected content from your app via a "Play Now" tile inside of an aggregated experience.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "playback",\n    "data": {\n        "entityId": "xyz"\n    },\n    "context": {\n        "source": "voice"\n    }\n}\n')),(0,o.kt)("p",null,"The fields available inside the Playback Intent are the same as for the ",(0,o.kt)("a",{parentName:"p",href:"#entity-intent"},"Entity Intent"),"."),(0,o.kt)("h3",{id:"search-intent"},"Search Intent"),(0,o.kt)("p",null,"The Search Intent tells your app that the user intends to see search results for some term or phrase in your app."),(0,o.kt)("p",null,"This should be used to bring up your app's search experience."),(0,o.kt)("p",null,"The reasons for sending this intent are simple: The user asked to see content from a genre or related to search term in your app, e.g. \"Show me comedies in 'Example App,'\" for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "search",\n    "data": {\n        "query": "comedies"\n    },\n    "context": {\n        "source": "voice"\n    }\n}\n')),(0,o.kt)("p",null,"Note that the platform extracts the query from the voice command, and only sends the query. This is to ensure consistent results regardless of whether the intent came from voice, or somewhere else, e.g. an editorial deep link to your app."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," field inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," object is required and will always be there."),(0,o.kt)("h3",{id:"section-intent"},"Section Intent"),(0,o.kt)("p",null,"The Section Intent tells your app that the user intends to see some other section of your site, not represented by your content catalog, e.g. a Settings page or an Upgrade page."),(0,o.kt)("p",null,"This should be used to bring up the page specified by the Section Intent."),(0,o.kt)("p",null,"This intent would be sent based on an agreement between you and each platform distributor. For example you might have agreed to place a free signup tile on an aggregated experience, and the distributor would use this intent to deep link to the sign up with the appropriate business rules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "action": "section",\n    "data": {\n        "sectionName": "free-signup-for-example-distributor"\n    },\n    "context": {\n        "source": "voice"\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sectionName")," field inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," object is required and will always be there. The value of this field is based on values supplied during ",(0,o.kt)("a",{parentName:"p",href:"/firebolt-documentation/docs/0.6.0-alpha.1/firebolt_docs/metadata/metadata-integration"},"Metadata Integration"),"."))}h.isMDXComponent=!0}}]);