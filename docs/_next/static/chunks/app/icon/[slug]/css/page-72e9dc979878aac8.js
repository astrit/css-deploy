(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[522,307,981],{9914:function(e,t,n){Promise.resolve().then(n.bind(n,4618))},4618:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var o=n(7437),a=n(2265),s=n(6463),i=n(2143),c=n(4366),r=n(7170),l=n(7776);n(8574);let d=e=>{let{string:t}=e;return(0,o.jsx)("figure",{"data-icon":!0,dangerouslySetInnerHTML:{__html:t}})};function u(e){let{slug:t,sub:n}=e,{combinedData:u,showPortal:f,setShowPortal:p,tab:v,setTab:m,activeSymbol:h,setActiveSymbol:w,setActiveCategory:y,activeCategory:g,addSelected:b,selected:x}=(0,a.useContext)(c.R),[k,L]=(0,a.useState)(""),[j,A]=(0,a.useState)(""),[C,E]=(0,a.useState)(!1),[S,R]=(0,a.useState)(!1),M=(0,s.useRouter)();if((0,a.useEffect)(()=>{let e=e=>{if(u&&Array.isArray(u)){let t=u.filter(e=>"symbol"===e.type&&"link"in e.data),n=t.findIndex(e=>"link"in e.data&&e.data.link===h);if("ArrowRight"!==e.key||e.shiftKey){if("ArrowLeft"===e.key&&!e.shiftKey){let e=n-1;if(e>=0){let n=t[e];"link"in n.data&&M.push("/icon/".concat(n.data.link).concat(v?"/".concat(v):""))}}}else{let e=n+1;if(e<t.length){let n=t[e];"link"in n.data&&M.push("/icon/".concat(n.data.link).concat(v?"/".concat(v):""))}}if("ArrowRight"===e.key&&e.shiftKey?(e.preventDefault(),""===v?M.push("/icon/".concat(h,"/css")):"css"===v?M.push("/icon/".concat(h,"/tsx")):M.push("/icon/".concat(h))):"ArrowLeft"===e.key&&e.shiftKey&&(e.preventDefault(),""===v?M.push("/icon/".concat(h,"/tsx")):"css"===v?M.push("/icon/".concat(h)):M.push("/icon/".concat(h,"/css"))),"c"===e.key&&e.metaKey&&!e.shiftKey?(navigator.clipboard.writeText(j),(0,l.Am)("SVG Copied to clipboard!")):"c"===e.key&&e.metaKey&&e.shiftKey&&((0,l.Am)("CSS Copied to clipboard!"),navigator.clipboard.writeText(k)),"s"===e.key&&e.metaKey&&!e.shiftKey){e.preventDefault();let t=new Blob([j],{type:"image/svg+xml"});(0,r.saveAs)(t,"".concat(h,".svg")),(0,l.Am)("SVG Downloaded!")}if("s"===e.key&&e.metaKey&&e.shiftKey){e.preventDefault();let t=new Blob([k],{type:"text/css"});(0,r.saveAs)(t,"".concat(h,".css")),(0,l.Am)("CSS Downloaded!")}}};return w(t),m(n),window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[u,h,M,v,j,k,t,w,n,m]),(0,a.useEffect)(()=>{if(u&&Array.isArray(u)){let e=u.find(e=>"symbol"===e.type&&"link"in e.data&&e.data.link===h);if(e){let{img:t,css:n}=e.data;L(n),A(t)}}},[u,h,y]),!u||!Array.isArray(u))return;let K=u.find(e=>"symbol"===e.type&&"link"in e.data&&e.data.link===t);if(!K)return null;let{img:T,name:B,tags:D,link:N,css:O}=K.data,_=x.includes(B);return(0,o.jsxs)("div",{className:"details",children:[(0,o.jsxs)("div",{className:"preview",children:[(0,o.jsxs)("div",{className:"buttons",children:[(0,o.jsx)("button",{className:"buttons-select",onClick:()=>{b(B),_?(0,l.Am)("".concat(B," removed from collection!")):(0,l.Am)("".concat(B," added to collection!"))},children:_?(0,o.jsx)("svg",{viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"})}):(0,o.jsx)("svg",{viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z",fill:"currentColor"})})}),null]}),(0,o.jsx)(d,{string:T||""})]}),(0,o.jsxs)("div",{className:"content",children:[(0,o.jsx)("h2",{children:B.replace(/ O$| R$/g,"")}),(0,o.jsxs)("div",{className:"tags",children:["Tags: ",null==D?void 0:D.map((e,t)=>(0,o.jsxs)("span",{children:[(0,o.jsx)("button",{onClick:()=>y(e),children:e}),t<D.length-1&&", "]},t))]})]}),(0,o.jsxs)("div",{className:"export",children:[(0,o.jsxs)("button",{className:"code-view",onClick:()=>{p(!f)},onMouseEnter:()=>E(!0),onMouseLeave:()=>E(!1),children:[(0,o.jsx)(i.Z,{name:"markup"}),(0,o.jsx)("span",{children:C?"⇧ + M":"View code"})]}),(0,o.jsxs)("button",{className:"code-download",onClick:()=>{let e,t;"css"===v?(e=new Blob([O],{type:"text/css"}),t="".concat(N,".css"),(0,l.Am)("CSS Downloaded!")):(e=new Blob([T],{type:"image/svg+xml"}),t="".concat(N,".svg"),(0,l.Am)("SVG Downloaded!")),(0,r.saveAs)(e,t)},onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),children:[(0,o.jsx)(i.Z,{name:"download"}),(0,o.jsx)("span",{children:S?"⌘ + S":"Download"})]})]})]})}},7170:function(e,t,n){var o,a,s;a=[],void 0!==(s="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){c(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,i=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,n,i){var c=s.URL||s.webkitURL,r=document.createElement("a");n=n||e.name||"download",r.download=n,r.rel="noopener","string"==typeof e?(r.href=e,r.origin===location.origin?a(r):o(r.href)?t(e,n,i):a(r,r.target="_blank")):(r.href=c.createObjectURL(e),setTimeout(function(){c.revokeObjectURL(r.href)},4e4),setTimeout(function(){a(r)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e){var i;navigator.msSaveOrOpenBlob((void 0===(i=s)?i={autoBom:!1}:"object"!=typeof i&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),n)}else if(o(e))t(e,n,s);else{var c=document.createElement("a");c.href=e,c.target="_blank",setTimeout(function(){a(c)})}}:function(e,n,o,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var c="application/octet-stream"===e.type,r=/constructor/i.test(s.HTMLElement)||s.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||c&&r||i)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},d.readAsDataURL(e)}else{var u=s.URL||s.webkitURL,f=u.createObjectURL(e);a?a.location=f:location.href=f,a=null,setTimeout(function(){u.revokeObjectURL(f)},4e4)}});s.saveAs=c.saveAs=c,e.exports=c})?o.apply(t,a):o)&&(e.exports=s)},6463:function(e,t,n){"use strict";var o=n(1169);n.o(o,"usePathname")&&n.d(t,{usePathname:function(){return o.usePathname}}),n.o(o,"useRouter")&&n.d(t,{useRouter:function(){return o.useRouter}})},8574:function(){}},function(e){e.O(0,[921,283,925,578,638,289,442,971,23,560],function(){return e(e.s=9914)}),_N_E=e.O()}]);