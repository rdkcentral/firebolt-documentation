"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[9843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var r=a.createContext({}),c=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(r.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=l,m=u["".concat(r,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"Accessibility"},r="Accessibility Module",c={unversionedId:"api/Accessibility",id:"version-0.6.0-alpha.1/api/Accessibility",title:"Accessibility",description:"---",source:"@site/versioned_docs/version-0.6.0-alpha.1/api/Accessibility.md",sourceDirName:"api",slug:"/api/Accessibility",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/api/Accessibility",draft:!1,tags:[],version:"0.6.0-alpha.1",frontMatter:{title:"Accessibility"},sidebar:"api",previous:{title:"Types",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/api/schemas/Types"},next:{title:"Account",permalink:"/firebolt-documentation/docs/0.6.0-alpha.1/api/Account"}},p={},d=[{value:"OpenRPC",id:"openrpc",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Usage",id:"usage",level:2},{value:"Overview",id:"overview",level:2},{value:"Events",id:"events",level:2},{value:"closedCaptionsSettingsChanged",id:"closedcaptionssettingschanged",level:3},{value:"Event value",id:"event-value",level:4},{value:"Promise Resolution",id:"promise-resolution",level:4},{value:"Examples",id:"examples",level:4},{value:"Getting the closed captions settings",id:"getting-the-closed-captions-settings",level:5},{value:"Listen to an event only once",id:"listen-to-an-event-only-once",level:5},{value:"Clear all listeners for an event",id:"clear-all-listeners-for-an-event",level:5},{value:"voiceGuidanceSettingsChanged",id:"voiceguidancesettingschanged",level:3},{value:"Event value",id:"event-value-1",level:4},{value:"Promise Resolution",id:"promise-resolution-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Getting the voice guidance settings",id:"getting-the-voice-guidance-settings",level:5},{value:"Listen to an event only once",id:"listen-to-an-event-only-once-1",level:5},{value:"Clear all listeners for an event",id:"clear-all-listeners-for-an-event-1",level:5},{value:"Methods",id:"methods",level:2},{value:"closedCaptions",id:"closedcaptions",level:3},{value:"Promise Resolution",id:"promise-resolution-2",level:4},{value:"Examples",id:"examples-2",level:4},{value:"Getting the closed captions settings",id:"getting-the-closed-captions-settings-1",level:5},{value:"Request",id:"request",level:6},{value:"Response",id:"response",level:6},{value:"voiceGuidance",id:"voiceguidance",level:3},{value:"Promise Resolution",id:"promise-resolution-3",level:4},{value:"Examples",id:"examples-3",level:4},{value:"Getting the voice guidance settings",id:"getting-the-voice-guidance-settings-1",level:5},{value:"Request",id:"request-1",level:6},{value:"Response",id:"response-1",level:6},{value:"Schemas",id:"schemas",level:2},{value:"ClosedCaptionsStyles",id:"closedcaptionsstyles",level:3},{value:"Details",id:"details",level:4},{value:"ClosedCaptionsSettings",id:"closedcaptionssettings",level:3},{value:"VoiceGuidanceSettings",id:"voiceguidancesettings",level:3}],u={toc:d};function g(e){var t=e.components,n=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"accessibility-module"},"Accessibility Module"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Version 0.6.0-alpha.1"),(0,i.kt)("h2",{id:"openrpc"},"OpenRPC"),(0,i.kt)("p",null,"This document was generated from an OpenRPC JSON-Schema, and is intended to provide a human readable overview and examples of the methods contained in the module."),(0,i.kt)("p",null,"For the full schema, see the link below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Schema"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/rdkcentral/firebolt-core-sdk/blob/main/src/modules/accessibility.json"},"accessibility.json"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#events"},"Events"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#losedcaptionssettingschanged"},"closedCaptionsSettingsChanged")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#oiceguidancesettingschanged"},"voiceGuidanceSettingsChanged")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#methods"},"Methods"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#closedcaptions"},"closedCaptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#voiceguidance"},"voiceGuidance")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#schemas"},"Schemas"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#closedcaptionsstyles"},"ClosedCaptionsStyles")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#closedcaptionssettings"},"ClosedCaptionsSettings")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#voiceguidancesettings"},"VoiceGuidanceSettings"))))),(0,i.kt)("span",null),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"To use the Accessibility module, you can import it into your project from the Firebolt SDK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Accessibility")," module provides access to the user/device settings for closed captioning and voice guidance."),(0,i.kt)("p",null,"Apps ",(0,i.kt)("strong",{parentName:"p"},"SHOULD")," attempt o respect these settings, rather than manage and persist seprate settings, which would be different per-app."),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"closedcaptionssettingschanged"},"closedCaptionsSettingsChanged"),(0,i.kt)("p",null,"Subscribe to notifications with the user's preferred closed-captions settings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// listen to closedCaptionsSettingsChanged\nAccessibility.listen('closedCaptionsSettingsChanged', (data: ClosedCaptionsSettings) => void): Promise<bigint>\n\n// listen to closedCaptionsSettingsChanged once\nAccessibility.once('closedCaptionsSettingsChanged', (data: ClosedCaptionsSettings) => void): Promise<bigint>\n\n// clear a listener\nAccessibility.clear(listenerId?: bigint): void\n\n")),(0,i.kt)("h4",{id:"event-value"},"Event value"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#closedcaptionssettings"},(0,i.kt)("inlineCode",{parentName:"a"},"ClosedCaptionsSettings"))),(0,i.kt)("td",{parentName:"tr",align:null},"the closed captions settings")))),(0,i.kt)("h4",{id:"promise-resolution"},"Promise Resolution"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bigint")),(0,i.kt)("td",{parentName:"tr",align:null},"Listener ID to clear() the callback method and stop receiving the event, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"Accessibility.clear(id)"))))),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("h5",{id:"getting-the-closed-captions-settings"},"Getting the closed captions settings"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nAccessibility.listen('closedCaptionsSettingsChanged', settings => {\n  console.log(settings)\n})\n")),(0,i.kt)("p",null,"Value of ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "enabled": true,\n  "styles": {\n    "fontFamily": "Monospace sans-serif",\n    "fontSize": 1,\n    "fontColor": "#ffffff",\n    "fontEdge": "none",\n    "fontEdgeColor": "#7F7F7F",\n    "fontOpacity": 100,\n    "backgroundColor": "#000000",\n    "backgroundOpacity": 100,\n    "textAlign": "center",\n    "textAlignVertical": "middle"\n  }\n}\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JSON-RPC")),(0,i.kt)("h6",null,"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "accessibility.onClosedCaptionsSettingsChanged",\n  "params": {}\n}\n')),(0,i.kt)("h6",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "enabled": true,\n    "styles": {\n      "fontFamily": "Monospace sans-serif",\n      "fontSize": 1,\n      "fontColor": "#ffffff",\n      "fontEdge": "none",\n      "fontEdgeColor": "#7F7F7F",\n      "fontOpacity": 100,\n      "backgroundColor": "#000000",\n      "backgroundOpacity": 100,\n      "textAlign": "center",\n      "textAlignVertical": "middle"\n    }\n  }\n}\n'))),(0,i.kt)("h5",{id:"listen-to-an-event-only-once"},"Listen to an event only once"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Accessibility.listen('closedCaptionsSettingsChanged', (value) => {\n  console.log(value)\n}).then( (listenerId) => {\n  Accessibility.clear(listenerId)\n})\n")),(0,i.kt)("p",null,"Alternately, simply call ",(0,i.kt)("inlineCode",{parentName:"p"},"once()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Accessibility.once('closedCaptionsSettingsChanged', (value) => {\n  console.log(value)\n})\n"))),(0,i.kt)("h5",{id:"clear-all-listeners-for-an-event"},"Clear all listeners for an event"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Accessibility.clear('closedCaptionsSettingsChanged')\n"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"voiceguidancesettingschanged"},"voiceGuidanceSettingsChanged"),(0,i.kt)("p",null,"Subscribe to notifications with the user's preferred voice guidance settings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// listen to voiceGuidanceSettingsChanged\nAccessibility.listen('voiceGuidanceSettingsChanged', (data: VoiceGuidanceSettings) => void): Promise<bigint>\n\n// listen to voiceGuidanceSettingsChanged once\nAccessibility.once('voiceGuidanceSettingsChanged', (data: VoiceGuidanceSettings) => void): Promise<bigint>\n\n// clear a listener\nAccessibility.clear(listenerId?: bigint): void\n\n")),(0,i.kt)("h4",{id:"event-value-1"},"Event value"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#voiceguidancesettings"},(0,i.kt)("inlineCode",{parentName:"a"},"VoiceGuidanceSettings"))),(0,i.kt)("td",{parentName:"tr",align:null},"the voice guidance settings")))),(0,i.kt)("h4",{id:"promise-resolution-1"},"Promise Resolution"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bigint")),(0,i.kt)("td",{parentName:"tr",align:null},"Listener ID to clear() the callback method and stop receiving the event, e.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"Accessibility.clear(id)"))))),(0,i.kt)("h4",{id:"examples-1"},"Examples"),(0,i.kt)("h5",{id:"getting-the-voice-guidance-settings"},"Getting the voice guidance settings"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nAccessibility.listen('voiceGuidanceSettingsChanged', settings => {\n  console.log(settings)\n})\n")),(0,i.kt)("p",null,"Value of ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "enabled": true,\n  "speed": 5\n}\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JSON-RPC")),(0,i.kt)("h6",null,"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "accessibility.onVoiceGuidanceSettingsChanged",\n  "params": {}\n}\n')),(0,i.kt)("h6",null,"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "enabled": true,\n    "speed": 5\n  }\n}\n'))),(0,i.kt)("h5",{id:"listen-to-an-event-only-once-1"},"Listen to an event only once"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Accessibility.listen('voiceGuidanceSettingsChanged', (value) => {\n  console.log(value)\n}).then( (listenerId) => {\n  Accessibility.clear(listenerId)\n})\n")),(0,i.kt)("p",null,"Alternately, simply call ",(0,i.kt)("inlineCode",{parentName:"p"},"once()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Accessibility.once('voiceGuidanceSettingsChanged', (value) => {\n  console.log(value)\n})\n"))),(0,i.kt)("h5",{id:"clear-all-listeners-for-an-event-1"},"Clear all listeners for an event"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"Accessibility.clear('voiceGuidanceSettingsChanged')\n"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"closedcaptions"},"closedCaptions"),(0,i.kt)("p",null,"Get the user's preferred closed-captions settings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function closedCaptions(): Promise<ClosedCaptionsSettings>\n")),(0,i.kt)("h4",{id:"promise-resolution-2"},"Promise Resolution"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#closedcaptionssettings"},(0,i.kt)("inlineCode",{parentName:"a"},"ClosedCaptionsSettings"))),(0,i.kt)("td",{parentName:"tr",align:null},"the closed captions settings")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"examples-2"},"Examples"),(0,i.kt)("h5",{id:"getting-the-closed-captions-settings-1"},"Getting the closed captions settings"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nAccessibility.closedCaptions()\n    .then(closedCaptionsSettings => {\n        console.log(closedCaptionsSettings)\n    })\n")),(0,i.kt)("p",null,"Value of ",(0,i.kt)("inlineCode",{parentName:"p"},"closedCaptionsSettings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "enabled": true,\n  "styles": {\n    "fontFamily": "Monospace sans-serif",\n    "fontSize": 1,\n    "fontColor": "#ffffff",\n    "fontEdge": "none",\n    "fontEdgeColor": "#7F7F7F",\n    "fontOpacity": 100,\n    "backgroundColor": "#000000",\n    "backgroundOpacity": 100,\n    "textAlign": "center",\n    "textAlignVertical": "middle"\n  }\n}\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JSON-RPC")),(0,i.kt)("h6",{id:"request"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "accessibility.closedCaptions",\n  "params": {}\n}\n')),(0,i.kt)("h6",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "enabled": true,\n    "styles": {\n      "fontFamily": "Monospace sans-serif",\n      "fontSize": 1,\n      "fontColor": "#ffffff",\n      "fontEdge": "none",\n      "fontEdgeColor": "#7F7F7F",\n      "fontOpacity": 100,\n      "backgroundColor": "#000000",\n      "backgroundOpacity": 100,\n      "textAlign": "center",\n      "textAlignVertical": "middle"\n    }\n  }\n}\n'))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"voiceguidance"},"voiceGuidance"),(0,i.kt)("p",null,"Get the user's preferred voice guidance settings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function voiceGuidance(): Promise<VoiceGuidanceSettings>\n")),(0,i.kt)("h4",{id:"promise-resolution-3"},"Promise Resolution"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"#voiceguidancesettings"},(0,i.kt)("inlineCode",{parentName:"a"},"VoiceGuidanceSettings"))),(0,i.kt)("td",{parentName:"tr",align:null},"the voice guidance settings")))),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"examples-3"},"Examples"),(0,i.kt)("h5",{id:"getting-the-voice-guidance-settings-1"},"Getting the voice guidance settings"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JavaScript")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Accessibility } from '@firebolt-js/sdk'\n\nAccessibility.voiceGuidance()\n    .then(settings => {\n        console.log(settings)\n    })\n")),(0,i.kt)("p",null,"Value of ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "enabled": true,\n  "speed": 5\n}\n'))),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"JSON-RPC")),(0,i.kt)("h6",{id:"request-1"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "accessibility.voiceGuidance",\n  "params": {}\n}\n')),(0,i.kt)("h6",{id:"response-1"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "enabled": true,\n    "speed": 5\n  }\n}\n'))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"schemas"},"Schemas"),(0,i.kt)("h3",{id:"closedcaptionsstyles"},"ClosedCaptionsStyles"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type ClosedCaptionsStyles = {\n  fontFamily?: string\n  fontSize?: number\n  fontColor?: string\n  fontEdge?: string\n  fontEdgeColor?: string\n  fontOpacity?: number\n  backgroundColor?: string\n  backgroundOpacity?: number\n  textAlign?: string\n  textAlignVertical?: string\n}\n")),(0,i.kt)("h4",{id:"details"},"Details"),(0,i.kt)("p",null,"The default styles to use when displaying closed-captions"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"closedcaptionssettings"},"ClosedCaptionsSettings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type ClosedCaptionsSettings = {\n  enabled: boolean               // Whether or not closed-captions should be enabled by default\n  styles: ClosedCaptionsStyles   // The default styles to use when displaying closed-captions\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"voiceguidancesettings"},"VoiceGuidanceSettings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type VoiceGuidanceSettings = {\n  enabled: boolean              // Whether or not voice guidance should be enabled by default\n  speed: number                 // The speed at which voice guidance speech will be read back to the user\n}\n")),(0,i.kt)("hr",null))}g.isMDXComponent=!0}}]);