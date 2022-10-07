"use strict";(self.webpackChunkfirebolt_documentation=self.webpackChunkfirebolt_documentation||[]).push([[762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s="Prerequisites",p={unversionedId:"firebolt_docs/getting-started/prerequisites",id:"version-0.6.0/firebolt_docs/getting-started/prerequisites",title:"Prerequisites",description:"This guide will help you understand how to install the package manager Node. This will ensure you can install, set up, and manage Firebolt or other packages, like Lightening.",source:"@site/versioned_docs/version-0.6.0/firebolt_docs/getting-started/prerequisites.md",sourceDirName:"firebolt_docs/getting-started",slug:"/firebolt_docs/getting-started/prerequisites",permalink:"/firebolt-documentation/docs/0.6.0/firebolt_docs/getting-started/prerequisites",draft:!1,tags:[],version:"0.6.0",frontMatter:{},sidebar:"firebolt_docs",previous:{title:"How to Use Mock Firebolt",permalink:"/firebolt-documentation/docs/0.6.0/firebolt_docs/getting-started/how-to-use-mock-firebolt"},next:{title:"Accessbility",permalink:"/firebolt-documentation/docs/0.6.0/category/accessbility"}},d={},c=[{value:"Installing for Windows",id:"installing-for-windows",level:2},{value:"Step 1: Download Node.js Installer",id:"step-1-download-nodejs-installer",level:3},{value:"Step 2: Install Node.js and NPM from the browser",id:"step-2-install-nodejs-and-npm-from-the-browser",level:3},{value:"Step 3: Verify Installation",id:"step-3-verify-installation",level:3},{value:"Installing for Mac",id:"installing-for-mac",level:2},{value:"Step 1:",id:"step-1",level:3},{value:"Step 2:",id:"step-2",level:3},{value:"Step 3: Verify Installation:",id:"step-3-verify-installation-1",level:3},{value:"Installing for Linux",id:"installing-for-linux",level:2}],u={toc:c};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"This guide will help you understand how to install the package manager Node. This will ensure you can install, set up, and manage Firebolt or other packages, like Lightening. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*Note:")," Firebolt does not have any dependencies to run but it will require some package manager to install.* "),(0,r.kt)("h1",{id:"installing-node"},"Installing Node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"',(0,r.kt)("strong",{parentName:"p"},"Node.js")," is an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-source_software"},"open-source"),", ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-platform"},"cross-platform"),", ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Front_end_and_back_end"},"back-end")," ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JavaScript"},"JavaScript")," ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Runtime_system"},"runtime environment")," that runs on the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/V8_(JavaScript_engine)"},"V8 engine")," and executes JavaScript code outside a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Web_browser"},"web browser"),". Node.js lets developers use JavaScript to write command line tools and for ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Server-side_scripting"},"server-side scripting"),"---running scripts server-side to produce ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Dynamic_web_page"},"dynamic web page"),' content before the page is sent to the user\'s web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Web_application"},"web-application"),' development around a single programming language, rather than different languages for server-side and client-side scripts."\n',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Node.js"},"https://en.wikipedia.org/wiki/Node.js"))),(0,r.kt)("h2",{id:"installing-for-windows"},"Installing for Windows"),(0,r.kt)("p",null,"It's assumed that you have the ability to download and install software on your machine as well as have access to a command-line interface (CLI) tool such as Windows' command line or PowerShell."),(0,r.kt)("h3",{id:"step-1-download-nodejs-installer"},"Step 1: Download Node.js Installer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In a web browser, put in the URL ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/"),". Select the ",(0,r.kt)("strong",{parentName:"li"},"Windows Installer")," button to download the latest default version. The Node.js installer includes the NPM package manager.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Windows Installer Option",src:n(96717).Z,width:"3584",height:"1688"})),(0,r.kt)("h3",{id:"step-2-install-nodejs-and-npm-from-the-browser"},"Step 2: Install Node.js and NPM from the browser"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the installer finishes downloading, launch it. Go to the location where you have saved the file and double-click it to launch.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The system will ask if you want to run the software -- select ",(0,r.kt)("strong",{parentName:"p"},"Run"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will be welcomed to the Node.js Setup Wizard -- select ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the next screen, review the license agreement -- select ",(0,r.kt)("strong",{parentName:"p"},"Next")," if you agree to the terms and install the software.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else -- then select ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The install wizard will let you select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by selecting ",(0,r.kt)("strong",{parentName:"p"},"Next"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally, select the ",(0,r.kt)("strong",{parentName:"p"},"Install")," button to run the installer. When it finishes, select ",(0,r.kt)("strong",{parentName:"p"},"Finish"),"."))),(0,r.kt)("h3",{id:"step-3-verify-installation"},"Step 3: Verify Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open PowerShell or your preferred command-line tool and enter the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"node -v\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The system should display the Node.js version installed on your system. You can do the same for NPM:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"npm -v\n")))),(0,r.kt)("h2",{id:"installing-for-mac"},"Installing for Mac"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("p",null,"Node on Mac can be installed directly from Node.js or it can be installed with tools like ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),". For this installation, we're going to keep it as simple as possible and go directly to Node.js. However, you may use a package manager tool such as Homebrew if you prefer."),(0,r.kt)("p",null,"It's assumed that you have the ability to download and install software on your machine as well as have access to a command-line interface (CLI) tool such as Mac's terminal tool."),(0,r.kt)("h3",{id:"step-1"},"Step 1:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Download Node.js Installer"),": In a web browser, go to ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/"),". Select the ",(0,r.kt)("strong",{parentName:"li"},"Mac Installer")," button to download the latest default version. The Node.js installer includes the NPM package manager.")),(0,r.kt)("h3",{id:"step-2"},"Step 2:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the installer finishes downloading, launch it. Open the location where you have saved the file and double-click it to launch.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will be introduced to the Node.js Setup Wizard -- select ",(0,r.kt)("strong",{parentName:"p"},"Continue"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the next screen, review the license agreement - select ",(0,r.kt)("strong",{parentName:"p"},"Agree")," if you agree to the terms and install the software.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The installer will prompt you for the installation location. Leave the default location, unless you have a specific need to install it somewhere else -- then select ",(0,r.kt)("strong",{parentName:"p"},"Install"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"At this point, you can select ",(0,r.kt)("strong",{parentName:"li"},"Customize")," if you'd like to select components to include or remove from the installation. Again, unless you have a specific need, accept the defaults by selecting ",(0,r.kt)("strong",{parentName:"li"},"Install"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When it finishes, select ",(0,r.kt)("strong",{parentName:"p"},"Finish"),"."))),(0,r.kt)("h3",{id:"step-3-verify-installation-1"},"Step 3: Verify Installation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open Terminal or your preferred command-line tool and enter the following:"),(0,r.kt)("p",{parentName:"li"},"node -v  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The system should display the Node.js version installed on your system. You can do the same for NPM:"),(0,r.kt)("p",{parentName:"li"},"npm -v"))),(0,r.kt)("h2",{id:"installing-for-linux"},"Installing for Linux"),(0,r.kt)("p",null,'Linux has many options - here is our favorite "How-to guide" on installing Node.js for your Linux machine. ',(0,r.kt)("a",{parentName:"p",href:"https://upstack.co/knowledge/how-to-install-node-js-on-linux"},"https://upstack.co/knowledge/how-to-install-node-js-on-linux")))}m.isMDXComponent=!0},96717:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/WindowsInstallerOption-5a750dfc76e0769b5946a38ed7229fab.png"}}]);