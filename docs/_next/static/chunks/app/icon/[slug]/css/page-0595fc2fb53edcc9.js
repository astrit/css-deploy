(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[522,981,307],{9914:function(e,t,n){Promise.resolve().then(n.bind(n,4618))},4618:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var o=n(7437),s=n(2265),a=n(6463),c=n(2143),i=n(1067),r=n(7170),l=n(7776);n(8574);let d=e=>{let{string:t}=e;return(0,o.jsx)("figure",{"data-icon":!0,dangerouslySetInnerHTML:{__html:t}})};function u(e){let{slug:t,sub:n}=e,{combinedData:u,showPortal:f,setShowPortal:p,tab:v,setTab:m,activeSymbol:h,setActiveSymbol:w,setActiveCategory:y,activeCategory:x,addSelected:b,selected:g}=(0,s.useContext)(i.R),[k,j]=(0,s.useState)(""),[L,A]=(0,s.useState)(""),[C,S]=(0,s.useState)(!1),[E,M]=(0,s.useState)(!1),[R,N]=(0,s.useState)(!1),T=(0,a.useRouter)();if((0,s.useEffect)(()=>{let e=e=>{if(u&&Array.isArray(u)){let t=u.filter(e=>"symbol"===e.type&&"link"in e.data),n=t.findIndex(e=>"link"in e.data&&e.data.link===h);if("ArrowRight"!==e.key||e.shiftKey){if("ArrowLeft"===e.key&&!e.shiftKey){let e=n-1;if(e>=0){let n=t[e];"link"in n.data&&T.push("/icon/".concat(n.data.link).concat(v?"/".concat(v):""))}}}else{let e=n+1;if(e<t.length){let n=t[e];"link"in n.data&&T.push("/icon/".concat(n.data.link).concat(v?"/".concat(v):""))}}if("ArrowRight"===e.key&&e.shiftKey?(e.preventDefault(),""===v?T.push("/icon/".concat(h,"/css")):"css"===v?T.push("/icon/".concat(h,"/tsx")):T.push("/icon/".concat(h))):"ArrowLeft"===e.key&&e.shiftKey&&(e.preventDefault(),""===v?T.push("/icon/".concat(h,"/tsx")):"css"===v?T.push("/icon/".concat(h)):T.push("/icon/".concat(h,"/css"))),"c"===e.key&&e.metaKey&&!e.shiftKey?(navigator.clipboard.writeText(L),l.Am.success("SVG Copied to clipboard!")):"c"===e.key&&e.metaKey&&e.shiftKey&&(l.Am.success("CSS Copied to clipboard!"),navigator.clipboard.writeText(k)),"s"===e.key&&e.metaKey&&!e.shiftKey){e.preventDefault();let t=new Blob([L],{type:"image/svg+xml"});(0,r.saveAs)(t,"".concat(h,".svg")),l.Am.success("SVG Downloaded!")}if("s"===e.key&&e.metaKey&&e.shiftKey){e.preventDefault();let t=new Blob([k],{type:"text/css"});(0,r.saveAs)(t,"".concat(h,".css")),l.Am.success("CSS Downloaded!")}}};return w(t),m(n),window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[u,h,T,v,L,k,t,w,n,m]),(0,s.useEffect)(()=>{if(u&&Array.isArray(u)){let e=u.find(e=>"symbol"===e.type&&"link"in e.data&&e.data.link===h);if(e){let{img:t,css:n}=e.data;j(n),A(t)}}},[u,h,y]),!u||!Array.isArray(u))return;let K=u.find(e=>"symbol"===e.type&&"link"in e.data&&e.data.link===t);if(!K)return null;let{img:B,name:D,tags:O,link:_,css:U,description:F}=K.data,H=g.includes(D),G="https://css.gg/icon/".concat(t).concat(n?"/".concat(n):"");return(0,o.jsxs)("div",{className:"details",children:["tsx"===n&&(0,o.jsx)("link",{rel:"canonical",href:G}),(0,o.jsxs)("div",{className:"preview",children:[(0,o.jsxs)("div",{className:"buttons",children:[(0,o.jsx)("button",{className:"buttons-select",onClick:()=>{b(D),H?l.Am.success("".concat(D," removed from collection!")):l.Am.success("".concat(D," added to collection!"))},children:H?(0,o.jsx)("svg",{viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"})}):(0,o.jsx)("svg",{viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z",fill:"currentColor"})})}),!1]}),(0,o.jsx)(d,{string:B||""})]}),(0,o.jsxs)("div",{className:"content",children:[(0,o.jsx)("h2",{children:D.replace(/ O$| R$/g,"")}),(0,o.jsxs)("div",{className:"format",children:["Format: ",(0,o.jsx)("span",{children:n||"svg"})]}),(0,o.jsxs)("div",{className:"tags",children:["Tags: ",null==O?void 0:O.map((e,t)=>(0,o.jsxs)("span",{children:[(0,o.jsx)("button",{onClick:()=>y(e),children:e}),t<O.length-1&&", "]},t))]}),(0,o.jsx)("div",{className:"description",children:F})]}),(0,o.jsxs)("div",{className:"export",children:[(0,o.jsxs)("button",{className:"code-copy",onClick:()=>{"css"===v?(navigator.clipboard.writeText(U),l.Am.success("CSS Copied to clipboard!")):(navigator.clipboard.writeText(B),l.Am.success("SVG Copied to clipboard!"))},onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:[(0,o.jsx)(c.Z,{name:"clipboard"}),(0,o.jsx)("span",{children:C?"⌘ + C":"Copy"})]}),(0,o.jsxs)("button",{className:"code-view",onClick:()=>{p(!f)},onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),children:[(0,o.jsx)(c.Z,{name:"markup"}),(0,o.jsx)("span",{children:E?"⇧ + M":"Code"})]}),(0,o.jsxs)("button",{className:"code-download",onClick:()=>{let e,t;"css"===v?(e=new Blob([U],{type:"text/css"}),t="".concat(_,".css"),l.Am.success("CSS Downloaded!")):(e=new Blob([B],{type:"image/svg+xml"}),t="".concat(_,".svg"),l.Am.success("SVG Downloaded!")),(0,r.saveAs)(e,t)},onMouseEnter:()=>N(!0),onMouseLeave:()=>N(!1),children:[(0,o.jsx)(c.Z,{name:"download"}),(0,o.jsx)("span",{children:R?"⌘ + S":"Download"})]})]})]})}},7170:function(e,t,n){var o,s,a;s=[],void 0!==(a="function"==typeof(o=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){i(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function s(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,c=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),i=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(e,n,c){var i=a.URL||a.webkitURL,r=document.createElement("a");n=n||e.name||"download",r.download=n,r.rel="noopener","string"==typeof e?(r.href=e,r.origin===location.origin?s(r):o(r.href)?t(e,n,c):s(r,r.target="_blank")):(r.href=i.createObjectURL(e),setTimeout(function(){i.revokeObjectURL(r.href)},4e4),setTimeout(function(){s(r)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,a){if(n=n||e.name||"download","string"!=typeof e){var c;navigator.msSaveOrOpenBlob((void 0===(c=a)?c={autoBom:!1}:"object"!=typeof c&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),n)}else if(o(e))t(e,n,a);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout(function(){s(i)})}}:function(e,n,o,s){if((s=s||open("","_blank"))&&(s.document.title=s.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var i="application/octet-stream"===e.type,r=/constructor/i.test(a.HTMLElement)||a.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||i&&r||c)&&"undefined"!=typeof FileReader){var d=new FileReader;d.onloadend=function(){var e=d.result;e=l?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=e:location=e,s=null},d.readAsDataURL(e)}else{var u=a.URL||a.webkitURL,f=u.createObjectURL(e);s?s.location=f:location.href=f,s=null,setTimeout(function(){u.revokeObjectURL(f)},4e4)}});a.saveAs=i.saveAs=i,e.exports=i})?o.apply(t,s):o)&&(e.exports=a)},8574:function(){}},function(e){e.O(0,[921,283,925,578,758,289,239,971,23,560],function(){return e(e.s=9914)}),_N_E=e.O()}]);