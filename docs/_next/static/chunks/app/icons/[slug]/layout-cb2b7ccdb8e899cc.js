(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{7477:function(t,e,a){Promise.resolve().then(a.bind(a,7205))},7205:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return c}});var n=a(7437),r=a(2265),i=a(1067),s=a(7293);function c(t){let{children:e,params:a}=t,{slug:c}=a,[o,l]=(0,r.useState)(null),{setActiveCategory:u,setSearch:d,setActiveSymbol:f}=(0,r.useContext)(i.R);return((0,r.useEffect)(()=>{(async()=>{try{let t=await (0,s.BY)(c);l(t),t?document.title="".concat(t," • Symbols"):document.title="Icons"}catch(t){console.error("Error fetching category name:",t),document.title="Icons"}})(),u(c)},[u]),o)?(0,n.jsx)(n.Fragment,{children:e}):(0,n.jsx)("div",{children:"..."})}},7293:function(t,e,a){"use strict";a.d(e,{BY:function(){return c},au:function(){return s},cT:function(){return o},hX:function(){return r},is:function(){return i}});let n=(0,a(8470).X3)("CSSGG",1,{upgrade(t){t.createObjectStore("keyval")}});async function r(t){let e=await n,a=await e.get("keyval","combinedData");if(!a)return null;let r=a.find(e=>e.data.link.includes(t));return r?r.data.name:null}async function i(t){let e=await n,a=await e.get("keyval","combinedData");if(!a)return null;let r=a.find(e=>e.data.link.includes(t));return r?r.data.description:null}async function s(){let t=await n,e=await t.get("keyval","combinedData");return e?e.filter(t=>"affiliate"===t.type).map(t=>t.data):[]}async function c(t){let e=await n,a=await e.get("keyval","combinedData");if(!a)return null;let r=a.find(e=>e.data.tags.includes(t));return r?r.data.name:null}async function o(){let t=await n,e=await t.get("keyval","combinedData");if(!e)return{categories:[],additionalCategories:{}};let a={},r=0,i=0,s=0,c=0;e.forEach(t=>{t.data?(Array.isArray(t.data.tags)&&t.data.tags.forEach(t=>{a[t]?a[t]++:a[t]=1}),t.data.link&&t.data.link.endsWith("-o")&&r++,t.data.link&&t.data.link.endsWith("-r")&&i++,t.data.css&&""!==t.data.css.trim()&&s++,t.data.css&&t.data.css.includes("@keyframes")&&c++):console.warn("Invalid symbol format:",t)});let o=t=>t.charAt(0).toUpperCase()+t.slice(1),l={type:"categories",data:Object.keys(a).sort().map(t=>({name:o(t),link:t,count:a[t].toString(),description:"description"}))},u={rounded:{name:"Rounded",link:"rounded",count:r.toString(),description:"description"},squared:{name:"Squared",link:"squared",count:i.toString(),description:"description"},vanilla_css:{name:"Vanilla CSS",link:"css",count:s.toString(),description:"description"},animated:{name:"Animated",link:"animated",count:c.toString(),description:"description"}};return{categories:l.data,additionalCategories:u}}},1067:function(t,e,a){"use strict";a.d(e,{R:function(){return p},Provider:function(){return b}});var n=a(7437),r=a(2265);function i(){return(0,n.jsxs)("figure",{className:"pattern",children:[(0,n.jsx)("div",{className:"gradient",children:(0,n.jsx)("span",{})}),(0,n.jsx)("div",{className:"text",children:"700"})]})}a(8872);var s=a(6463);let c=[{pattern:/\.css'$/,transform:t=>"/icon/".concat(t,"/css")},{pattern:/\.tsx'$/,transform:t=>"/icon/".concat(t,"/tsx")},{pattern:/\.svg'$/,transform:t=>"/icon/".concat(t)},{pattern:/\.css$/,transform:t=>"/icon/".concat(t,"/css")},{pattern:/\.tsx$/,transform:t=>"/icon/".concat(t,"/tsx")},{pattern:/\.svg$/,transform:t=>"/icon/".concat(t)}];function o(t){return t.replace(/\.(css|tsx|svg)'?$/,"").replace(/'$/,"")}var l=a(6578),u=a(8470),d=JSON.parse('[{"type":"affiliate","data":{"name":"raycast","link":"https://raycast.com/?via=astrit","img":"raycast","description":"Your shortcut to everything."}},{"type":"affiliate","data":{"name":"coolors","link":"https://coolors.co/?ref=5e9c74d518a3f413571ae92f","img":"coolors","description":"The super fast color palettes generator!"}},{"type":"affiliate","data":{"name":"studio","link":"https://screenstudio.lemonsqueezy.com?aff=GpRy0","img":"studio","description":"Beautiful Screen Recordings in Minutes."}},{"type":"affiliate","data":{"name":"central","link":"https://iconists.co/central?aff=GpRy0","img":"central","description":"Central icon system"}},{"type":"affiliate","data":{"name":"youtube","link":"https://www.youtube.com/c/astrit?sub_confirmation=1","img":"youtube","description":"youtube.com/@astrit"}}]'),f=a(7289),m=a(9512),y=a(7776);let p=(0,r.createContext)({combinedData:null,filteredData:null,categories:[],loading:!0,UI:!1,setUI:()=>{},activeCategory:"",setActiveCategory:()=>{},symbolCount:0,search:"",setSearch:()=>{},searchResultsCount:0,showPortal:!1,setShowPortal:()=>{},tab:"",setTab:()=>{},activeSymbol:"",setActiveSymbol:()=>{},toggleShortcuts:!1,setToggleShortcuts:()=>{},list:!1,setList:()=>{},fullscreen:!1,setFullscreen:()=>{},selected:[],addSelected:()=>{},removeSelected:()=>{},setSelected:()=>{}}),g={keys:["data.name","data.tags"],threshold:.2},h=(0,u.X3)("CSSGG",1,{upgrade(t){t.createObjectStore("keyval")}});async function S(t,e){if(!h)return;let a=await h;await a.put("keyval",e,t)}async function k(t){if(!h)return null;let e=await h;return await e.get("keyval",t)}function b(t){var e;let{children:a,...u}=t,[h,b]=(0,r.useState)(null),[v,w]=(0,r.useState)([]),[x,C]=(0,r.useState)(""),[j,A]=(0,r.useState)(!0),[E,D]=(0,r.useState)(!1),[$,_]=(0,r.useState)(""),[N,R]=(0,r.useState)(0),[G,M]=(0,r.useState)(!1),[O,q]=(0,r.useState)(""),[I,P]=(0,r.useState)(""),[B,T]=(0,r.useState)(!1),[W,F]=(0,r.useState)(!1),[L,U]=(0,r.useState)(!1),[X,Y]=(0,r.useState)([]),z=(0,r.useCallback)(async()=>{try{A(!0);let t=await k("combinedData");if(t){b(t);let e=t.find(t=>"categories"===t.type);e&&Array.isArray(e.data)&&w(e.data)}else{let t=[...d];for(let e=t.length-1;e>0;e--){let a=Math.floor(Math.random()*(e+1));[t[e],t[a]]=[t[a],t[e]]}let e=Math.floor(f.length/(t.length+1)),a=[],n=0;for(let r=0;r<f.length;r++)a.push(f[r]),(r+1)%e==0&&n<t.length&&(a.push(t[n]),n++);for(;n<t.length;)a.push(t[n]),n++;b(a),await S("combinedData",a);let r=a.find(t=>"categories"===t.type);r&&Array.isArray(r.data)&&w(r.data)}}catch(t){console.error("Fetching data failed:",t)}finally{A(!1)}},[]);(0,r.useEffect)(()=>{z()},[z]),(0,r.useEffect)(()=>{(async()=>{let t=await k("selectedSymbols");t&&Y(t)})()},[]);let J=(0,r.useMemo)(()=>{if(!h)return null;let t=h;return $&&(t=new l.Z(t,g).search($).map(t=>{let{item:e}=t;return e})),!$&&x&&(t=t.filter(t=>{if("symbol"===t.type&&"tags"in t.data){if("squared"===x)return t.data.link.endsWith("-r");if("rounded"===x)return t.data.link.endsWith("-o");if("css"===x);else if("animated"===x)return t.data.css.includes("@keyframes");else return t.data.tags.includes(x)}return!0})),$&&(t=t.filter(t=>"symbol"===t.type)),R(t.length),t},[h,x,$]),V=(0,r.useMemo)(()=>h?h.filter(t=>"symbol"===t.type).length:0,[h]),Z=async t=>{Y(e=>{let a=e.includes(t)?e.filter(e=>e!==t):[...e,t];return S("selectedSymbols",a),a})},H=async t=>{Y(e=>{let a=e.filter(e=>e!==t);return S("selectedSymbols",a),a})};return e=J||[],(0,r.useEffect)(()=>{if(j||!e)return;let t=window.location.pathname.replace(/^\//,""),a=o(t).toLowerCase();if((t.includes("xml")||t.includes("json"))&&(0,s.redirect)("/icons"),"app"===t&&(0,s.redirect)("/icons"),e.find(t=>"link"in t.data&&o(t.data.link).toLowerCase()===a)){if(c.some(e=>{let{pattern:a}=e;return a.test(t)})){for(let{pattern:e,transform:n}of c)if(e.test(t)){(0,s.redirect)(n(a));return}}else{(0,s.redirect)("/icon/".concat(a));return}}},[e,j]),(0,n.jsx)(m.f,{...u,children:(0,n.jsxs)(p.Provider,{value:{combinedData:h,filteredData:J,categories:v,loading:j,UI:E,setUI:D,activeCategory:x,setActiveCategory:C,symbolCount:V,search:$,setSearch:_,searchResultsCount:N,showPortal:G,setShowPortal:M,tab:O,setTab:q,activeSymbol:I,setActiveSymbol:P,toggleShortcuts:B,setToggleShortcuts:T,list:W,setList:F,fullscreen:L,setFullscreen:U,selected:X,addSelected:Z,removeSelected:H,setSelected:Y},children:[a,(0,n.jsx)(y.x7,{theme:"dark",position:"bottom-center",expand:!1,closeButton:!1,duration:4428}),(0,n.jsx)(i,{})]})})}},8872:function(){}},function(t){t.O(0,[283,578,758,289,971,23,560],function(){return t(t.s=7477)}),_N_E=t.O()}]);