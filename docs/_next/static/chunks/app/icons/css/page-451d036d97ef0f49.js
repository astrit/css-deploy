(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[226],{1921:function(e,t,a){Promise.resolve().then(a.bind(a,7952))},7952:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var s=a(2265),n=a(4366);function r(){let{setActiveCategory:e}=(0,s.useContext)(n.R);return(0,s.useEffect)(()=>{e("css")},[e]),null}},4366:function(e,t,a){"use strict";a.d(t,{R:function(){return f},Provider:function(){return g}});var s=a(7437),n=a(2265);function r(){return(0,s.jsxs)("figure",{className:"pattern",children:[(0,s.jsx)("div",{className:"gradient",children:(0,s.jsx)("span",{})}),(0,s.jsx)("div",{className:"text",children:"700"})]})}a(8872);var i=a(6578),l=a(8470),o=JSON.parse('[{"type":"affiliate","data":{"name":"raycast","link":"https://raycast.com/?via=astrit","img":"raycast","description":"Your shortcut to everything."}},{"type":"affiliate","data":{"name":"coolors","link":"https://coolors.co/?ref=5e9c74d518a3f413571ae92f","img":"coolors","description":"The super fast color palettes generator!"}},{"type":"affiliate","data":{"name":"studio","link":"https://screenstudio.lemonsqueezy.com?aff=GpRy0","img":"studio","description":"Beautiful Screen Recordings in Minutes."}},{"type":"affiliate","data":{"name":"central","link":"https://iconists.co/central?aff=GpRy0","img":"central","description":"Central icon system"}},{"type":"affiliate","data":{"name":"youtube","link":"https://www.youtube.com/c/astrit?sub_confirmation=1","img":"youtube","description":"youtube.com/@astrit"}}]'),u=a(7289),c=a(9512),d=a(7776);let f=(0,n.createContext)({combinedData:null,filteredData:null,categories:[],loading:!0,UI:!1,setUI:()=>{},activeCategory:"",setActiveCategory:()=>{},symbolCount:0,search:"",setSearch:()=>{},searchResultsCount:0,showPortal:!1,setShowPortal:()=>{},tab:"",setTab:()=>{},activeSymbol:"",setActiveSymbol:()=>{},toggleShortcuts:!1,setToggleShortcuts:()=>{},list:!1,setList:()=>{},fullscreen:!1,setFullscreen:()=>{},selected:[],addSelected:()=>{},removeSelected:()=>{},setSelected:()=>{}}),y={keys:["data.name","data.tags"],threshold:.2},h=(0,l.X3)("CSSGG",1,{upgrade(e){e.createObjectStore("keyval")}});async function m(e,t){if(!h)return;let a=await h;await a.put("keyval",t,e)}async function p(e){if(!h)return null;let t=await h;return await t.get("keyval",e)}function g(e){let{children:t,...a}=e,[l,h]=(0,n.useState)(null),[g,S]=(0,n.useState)([]),[b,v]=(0,n.useState)(""),[k,w]=(0,n.useState)(!0),[x,C]=(0,n.useState)(!1),[j,N]=(0,n.useState)(""),[_,A]=(0,n.useState)(0),[E,M]=(0,n.useState)(!1),[R,P]=(0,n.useState)(""),[D,G]=(0,n.useState)(""),[O,T]=(0,n.useState)(!1),[q,B]=(0,n.useState)(!1),[F,I]=(0,n.useState)(!1),[U,W]=(0,n.useState)([]),z=(0,n.useCallback)(async()=>{try{w(!0);let e=await p("combinedData");if(e){h(e);let t=e.find(e=>"categories"===e.type);t&&Array.isArray(t.data)&&S(t.data)}else{let e=[...o];for(let t=e.length-1;t>0;t--){let a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}let t=Math.floor(u.length/(e.length+1)),a=[],s=0;for(let n=0;n<u.length;n++)a.push(u[n]),(n+1)%t==0&&s<e.length&&(a.push(e[s]),s++);for(;s<e.length;)a.push(e[s]),s++;h(a),await m("combinedData",a);let n=a.find(e=>"categories"===e.type);n&&Array.isArray(n.data)&&S(n.data)}}catch(e){console.error("Fetching data failed:",e)}finally{w(!1)}},[]);(0,n.useEffect)(()=>{z()},[z]),(0,n.useEffect)(()=>{(async()=>{let e=await p("selectedSymbols");e&&W(e)})()},[]);let J=(0,n.useMemo)(()=>{if(!l)return null;let e=l;return j&&(e=new i.Z(e,y).search(j).map(e=>{let{item:t}=e;return t})),!j&&b&&(e=e.filter(e=>{if("symbol"===e.type&&"tags"in e.data){if("squared"===b)return e.data.link.endsWith("-r");if("rounded"===b)return e.data.link.endsWith("-o");if("css"===b);else if("animated"===b)return e.data.css.includes("@keyframes");else return e.data.tags.includes(b)}return!0})),j&&(e=e.filter(e=>"symbol"===e.type)),A(e.length),e},[l,b,j]),L=(0,n.useMemo)(()=>l?l.filter(e=>"symbol"===e.type).length:0,[l]),X=async e=>{W(t=>{let a=t.includes(e)?t.filter(t=>t!==e):[...t,e];return m("selectedSymbols",a),a})},Y=async e=>{W(t=>{let a=t.filter(t=>t!==e);return m("selectedSymbols",a),a})};return(0,s.jsx)(c.f,{...a,children:(0,s.jsxs)(f.Provider,{value:{combinedData:l,filteredData:J,categories:g,loading:k,UI:x,setUI:C,activeCategory:b,setActiveCategory:v,symbolCount:L,search:j,setSearch:N,searchResultsCount:_,showPortal:E,setShowPortal:M,tab:R,setTab:P,activeSymbol:D,setActiveSymbol:G,toggleShortcuts:O,setToggleShortcuts:T,list:q,setList:B,fullscreen:F,setFullscreen:I,selected:U,addSelected:X,removeSelected:Y,setSelected:W},children:[t,(0,s.jsx)(d.x7,{theme:"dark",position:"bottom-center",expand:!1,closeButton:!1,duration:4428}),(0,s.jsx)(r,{})]})})}},8872:function(){}},function(e){e.O(0,[283,578,638,289,971,23,560],function(){return e(e.s=1921)}),_N_E=e.O()}]);