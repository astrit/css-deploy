(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{7477:function(t,e,a){Promise.resolve().then(a.bind(a,7205))},7205:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return c}});var n=a(7437),r=a(2265),i=a(1067),s=a(7293);function c(t){let{children:e,params:a}=t,{slug:c}=a,[o,l]=(0,r.useState)(null),{setActiveCategory:u,setSearch:d,setActiveSymbol:f}=(0,r.useContext)(i.R);return((0,r.useEffect)(()=>{(async()=>{try{let t=await (0,s.BY)(c);l(t),t?document.title="".concat(t," • Symbols"):document.title="Icons"}catch(t){console.error("Error fetching category name:",t),document.title="Icons"}})(),u(c)},[u]),o)?(0,n.jsx)(n.Fragment,{children:e}):(0,n.jsx)("div",{children:"..."})}},7293:function(t,e,a){"use strict";a.d(e,{BY:function(){return c},au:function(){return s},cT:function(){return o},hX:function(){return r},is:function(){return i}});let n=(0,a(8470).X3)("CSSGG",1,{upgrade(t){t.createObjectStore("keyval")}});async function r(t){let e=await n,a=await e.get("keyval","combinedData");if(!a)return null;let r=a.find(e=>e.data.link.includes(t));return r?r.data.name:null}async function i(t){let e=await n,a=await e.get("keyval","combinedData");if(!a)return null;let r=a.find(e=>e.data.link.includes(t));return r?r.data.description:null}async function s(){let t=await n,e=await t.get("keyval","combinedData");return e?e.filter(t=>"affiliate"===t.type).map(t=>t.data):[]}async function c(t){let e=await n,a=await e.get("keyval","combinedData");if(!a)return null;let r=a.find(e=>e.data.tags.includes(t));return r?r.data.name:null}async function o(){let t=await n,e=await t.get("keyval","combinedData");if(!e)return{categories:[],additionalCategories:{}};let a={},r=0,i=0,s=0,c=0;e.forEach(t=>{t.data?(Array.isArray(t.data.tags)&&t.data.tags.forEach(t=>{a[t]?a[t]++:a[t]=1}),t.data.link&&t.data.link.endsWith("-o")&&r++,t.data.link&&t.data.link.endsWith("-r")&&i++,t.data.css&&""!==t.data.css.trim()&&s++,t.data.css&&t.data.css.includes("@keyframes")&&c++):console.warn("Invalid symbol format:",t)});let o=t=>t.charAt(0).toUpperCase()+t.slice(1),l={type:"categories",data:Object.keys(a).sort().map(t=>({name:o(t),link:t,count:a[t].toString(),description:"description"}))},u={rounded:{name:"Rounded",link:"rounded",count:r.toString(),description:"description"},squared:{name:"Squared",link:"squared",count:i.toString(),description:"description"},vanilla_css:{name:"Vanilla CSS",link:"css",count:s.toString(),description:"description"},animated:{name:"Animated",link:"animated",count:c.toString(),description:"description"}};return{categories:l.data,additionalCategories:u}}},1067:function(t,e,a){"use strict";a.d(e,{R:function(){return y},Provider:function(){return k}});var n=a(7437),r=a(2265);function i(){return(0,n.jsxs)("figure",{className:"pattern",children:[(0,n.jsx)("div",{className:"gradient",children:(0,n.jsx)("span",{})}),(0,n.jsx)("div",{className:"text",children:"700"})]})}a(8872);var s=a(6463);let c=[{pattern:/\.css'$/,transform:t=>"/icon/".concat(t,"/css")},{pattern:/\.tsx'$/,transform:t=>"/icon/".concat(t,"/tsx")},{pattern:/\.svg'$/,transform:t=>"/icon/".concat(t)},{pattern:/\.css$/,transform:t=>"/icon/".concat(t,"/css")},{pattern:/\.tsx$/,transform:t=>"/icon/".concat(t,"/tsx")},{pattern:/\.svg$/,transform:t=>"/icon/".concat(t)}];function o(t){return t.replace(/\.(css|tsx|svg)'?$/,"").replace(/'$/,"")}var l=a(6578),u=a(8470),d=JSON.parse('[{"type":"affiliate","data":{"name":"raycast","link":"https://raycast.com/?via=astrit","img":"raycast","description":"Your shortcut to everything."}},{"type":"affiliate","data":{"name":"coolors","link":"https://coolors.co/?ref=5e9c74d518a3f413571ae92f","img":"coolors","description":"The super fast color palettes generator!"}},{"type":"affiliate","data":{"name":"studio","link":"https://screenstudio.lemonsqueezy.com?aff=GpRy0","img":"studio","description":"Beautiful Screen Recordings in Minutes."}},{"type":"affiliate","data":{"name":"central","link":"https://iconists.co/central?aff=GpRy0","img":"central","description":"Central icon system"}},{"type":"affiliate","data":{"name":"youtube","link":"https://www.youtube.com/c/astrit?sub_confirmation=1","img":"youtube","description":"youtube.com/@astrit"}}]'),f=a(7289),m=a(9512),p=a(7776);let y=(0,r.createContext)({combinedData:null,filteredData:null,categories:[],loading:!0,UI:!1,setUI:()=>{},activeCategory:"",setActiveCategory:()=>{},symbolCount:0,search:"",setSearch:()=>{},searchResultsCount:0,showPortal:!1,setShowPortal:()=>{},tab:"",setTab:()=>{},activeSymbol:"",setActiveSymbol:()=>{},toggleShortcuts:!1,setToggleShortcuts:()=>{},list:!1,setList:()=>{},fullscreen:!1,setFullscreen:()=>{},selected:[],addSelected:()=>{},removeSelected:()=>{},setSelected:()=>{},visibleData:null,loadMore:()=>{},hasMore:!0,isMobile:!1}),h={keys:["data.name","data.tags"],threshold:.2},g=(0,u.X3)("CSSGG",1,{upgrade(t){t.createObjectStore("keyval")}});async function S(t,e){if(!g)return;let a=await g;await a.put("keyval",e,t)}async function b(t){if(!g)return null;let e=await g;return await e.get("keyval",t)}function k(t){var e;let{children:a,...u}=t,[g,k]=(0,r.useState)(null),[v,w]=(0,r.useState)([]),[x,C]=(0,r.useState)(""),[E,j]=(0,r.useState)(!0),[M,A]=(0,r.useState)(!1),[D,R]=(0,r.useState)(""),[I,O]=(0,r.useState)(0),[$,_]=(0,r.useState)(!1),[N,G]=(0,r.useState)(""),[q,L]=(0,r.useState)(""),[P,B]=(0,r.useState)(!1),[T,W]=(0,r.useState)(!1),[F,U]=(0,r.useState)(!1),[X,Y]=(0,r.useState)([]),[z,J]=(0,r.useState)(null),[V,Z]=(0,r.useState)(1),[H,K]=(0,r.useState)(!0),Q=(0,r.useRef)(null),tt=(0,r.useRef)(null),[te,ta]=(0,r.useState)(!1),tn=(0,r.useCallback)(async()=>{try{j(!0);let t=await b("combinedData");if(t){k(t);let e=t.find(t=>"categories"===t.type);e&&Array.isArray(e.data)&&w(e.data)}else{let t=[...d];for(let e=t.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}let e=Math.floor(f.length/(t.length+1)),a=[],n=0;for(let r=0;r<f.length;r++)a.push(f[r]),(r+1)%e==0&&n<t.length&&(a.push(t[n]),n++);for(;n<t.length;)a.push(t[n]),n++;k(a),await S("combinedData",a);let r=a.find(t=>"categories"===t.type);r&&Array.isArray(r.data)&&w(r.data)}}catch(t){console.error("Fetching data failed:",t)}finally{j(!1)}},[]);(0,r.useEffect)(()=>{tn()},[tn]),(0,r.useEffect)(()=>{(async()=>{let t=await b("selectedSymbols");t&&Y(t)})()},[]);let tr=(0,r.useMemo)(()=>{if(!g)return null;let t=g;return D&&(t=new l.Z(t,h).search(D).map(t=>{let{item:e}=t;return e})),!D&&x&&(t=t.filter(t=>{if("symbol"===t.type&&"tags"in t.data){if("squared"===x)return t.data.link.endsWith("-r");if("rounded"===x)return t.data.link.endsWith("-o");if("css"===x);else if("animated"===x)return t.data.css.includes("@keyframes");else return t.data.tags.includes(x)}return!0})),D&&(t=t.filter(t=>"symbol"===t.type)),O(t.length),t},[g,x,D]);(0,r.useEffect)(()=>{tr&&(J(tr.slice(0,10)),Z(1),K(tr.length>10))},[tr]);let ti=(0,r.useCallback)(()=>{if(!tr||!H)return;let t=tr.slice(0,(V+1)*10);J(t),Z(t=>t+1),K(t.length<tr.length)},[tr,V,H]);(0,r.useEffect)(()=>{if(tt.current)return Q.current=new IntersectionObserver(t=>{t[0].isIntersecting&&H&&ti()},{threshold:.1}),Q.current.observe(tt.current),()=>{Q.current&&Q.current.disconnect()}},[ti,H]);let ts=(0,r.useMemo)(()=>g?g.filter(t=>"symbol"===t.type).length:0,[g]),tc=async t=>{Y(e=>{let a=e.includes(t)?e.filter(e=>e!==t):[...e,t];return S("selectedSymbols",a),a})},to=async t=>{Y(e=>{let a=e.filter(e=>e!==t);return S("selectedSymbols",a),a})};return e=tr||[],(0,r.useEffect)(()=>{if(E||!e)return;let t=window.location.pathname.replace(/^\//,""),a=o(t).toLowerCase();if((t.includes("xml")||t.includes("json"))&&(0,s.redirect)("/icons"),"app"===t&&(0,s.redirect)("/icons"),e.find(t=>"link"in t.data&&o(t.data.link).toLowerCase()===a)){if(c.some(e=>{let{pattern:a}=e;return a.test(t)})){for(let{pattern:e,transform:n}of c)if(e.test(t)){(0,s.redirect)(n(a));return}}else{(0,s.redirect)("/icon/".concat(a));return}}},[e,E]),(0,r.useEffect)(()=>{ta(window.matchMedia("(pointer: coarse)").matches);let t=window.matchMedia("(pointer: coarse)"),e=t=>ta(t.matches);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},[]),(0,n.jsx)(m.f,{...u,children:(0,n.jsxs)(y.Provider,{value:{combinedData:g,filteredData:tr,categories:v,loading:E,UI:M,setUI:A,activeCategory:x,setActiveCategory:C,symbolCount:ts,search:D,setSearch:R,searchResultsCount:I,showPortal:$,setShowPortal:_,tab:N,setTab:G,activeSymbol:q,setActiveSymbol:L,toggleShortcuts:P,setToggleShortcuts:B,list:T,setList:W,fullscreen:F,setFullscreen:U,selected:X,addSelected:tc,removeSelected:to,setSelected:Y,visibleData:z,loadMore:ti,hasMore:H,isMobile:te},children:[a,(0,n.jsx)(p.x7,{theme:"dark",position:"bottom-center",expand:!1,closeButton:!1,duration:4428,toastOptions:{style:{borderRadius:"208px",paddingInlineStart:"24px"}}}),!te&&(0,n.jsx)(i,{})]})})}},8872:function(){}},function(t){t.O(0,[283,578,758,289,971,23,560],function(){return t(t.s=7477)}),_N_E=t.O()}]);