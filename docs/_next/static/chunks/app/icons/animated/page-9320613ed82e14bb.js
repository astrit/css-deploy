(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{2270:function(e,t,a){Promise.resolve().then(a.bind(a,4792))},4792:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var s=a(2265),n=a(4366);function r(){let{setActiveCategory:e}=(0,s.useContext)(n.R);return(0,s.useEffect)(()=>{e("animated")},[e]),null}},4366:function(e,t,a){"use strict";a.d(t,{R:function(){return f},Provider:function(){return g}});var s=a(7437),n=a(2265);function r(){return(0,s.jsxs)("figure",{className:"pattern",children:[(0,s.jsx)("div",{className:"gradient",children:(0,s.jsx)("span",{})}),(0,s.jsx)("div",{className:"text",children:"700"})]})}a(8872);var l=a(6578),i=a(8470),o=JSON.parse('[{"type":"affiliate","data":{"name":"raycast","link":"https://raycast.com/?via=astrit","img":"raycast","description":"Your shortcut to everything."}},{"type":"affiliate","data":{"name":"coolors","link":"https://coolors.co/?ref=5e9c74d518a3f413571ae92f","img":"coolors","description":"The super fast color palettes generator!"}},{"type":"affiliate","data":{"name":"studio","link":"https://screenstudio.lemonsqueezy.com?aff=GpRy0","img":"studio","description":"Beautiful Screen Recordings in Minutes."}},{"type":"affiliate","data":{"name":"central","link":"https://iconists.co/central?aff=GpRy0","img":"central","description":"Central icon system"}}]'),c=a(7289),u=a(9512),d=a(7776);let f=(0,n.createContext)({combinedData:null,filteredData:null,categories:[],loading:!0,UI:!1,setUI:()=>{},activeCategory:"",setActiveCategory:()=>{},symbolCount:0,search:"",setSearch:()=>{},searchResultsCount:0,showPortal:!1,setShowPortal:()=>{},tab:"",setTab:()=>{},activeSymbol:"",setActiveSymbol:()=>{},toggleShortcuts:!1,setToggleShortcuts:()=>{},list:!1,setList:()=>{},fullscreen:!1,setFullscreen:()=>{},selected:[],addSelected:()=>{},removeSelected:()=>{},setSelected:()=>{}}),h={keys:["data.name","data.tags"],threshold:.2},y=(0,i.X3)("CSSGG",1,{upgrade(e){e.createObjectStore("keyval")}});async function m(e,t){if(!y)return;let a=await y;await a.put("keyval",t,e)}async function p(e){if(!y)return null;let t=await y;return await t.get("keyval",e)}function g(e){let{children:t,...a}=e,[i,y]=(0,n.useState)(null),[g,S]=(0,n.useState)([]),[b,v]=(0,n.useState)(""),[k,x]=(0,n.useState)(!0),[w,C]=(0,n.useState)(!1),[j,N]=(0,n.useState)(""),[A,E]=(0,n.useState)(0),[M,R]=(0,n.useState)(!1),[_,P]=(0,n.useState)(""),[D,G]=(0,n.useState)(""),[O,T]=(0,n.useState)(!1),[q,B]=(0,n.useState)(!1),[F,I]=(0,n.useState)(!1),[U,W]=(0,n.useState)([]),z=(0,n.useCallback)(async()=>{try{x(!0);let e=await p("combinedData");if(e){y(e);let t=e.find(e=>"categories"===e.type);t&&Array.isArray(t.data)&&S(t.data)}else{let e=[...o];for(let t=e.length-1;t>0;t--){let a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}let t=Math.floor(c.length/(e.length+1)),a=[],s=0;for(let n=0;n<c.length;n++)a.push(c[n]),(n+1)%t==0&&s<e.length&&(a.push(e[s]),s++);for(;s<e.length;)a.push(e[s]),s++;y(a),await m("combinedData",a);let n=a.find(e=>"categories"===e.type);n&&Array.isArray(n.data)&&S(n.data)}}catch(e){console.error("Fetching data failed:",e)}finally{x(!1)}},[]);(0,n.useEffect)(()=>{z()},[z]),(0,n.useEffect)(()=>{(async()=>{let e=await p("selectedSymbols");e&&W(e)})()},[]);let J=(0,n.useMemo)(()=>{if(!i)return null;let e=i;return j&&(e=new l.Z(e,h).search(j).map(e=>{let{item:t}=e;return t})),!j&&b&&(e=e.filter(e=>{if("symbol"===e.type&&"tags"in e.data){if("squared"===b)return e.data.link.endsWith("-r");if("rounded"===b)return e.data.link.endsWith("-o");if("css"===b);else if("animated"===b)return e.data.css.includes("@keyframes");else return e.data.tags.includes(b)}return!0})),j&&(e=e.filter(e=>"symbol"===e.type)),E(e.length),e},[i,b,j]),L=(0,n.useMemo)(()=>i?i.filter(e=>"symbol"===e.type).length:0,[i]),X=async e=>{W(t=>{let a=t.includes(e)?t.filter(t=>t!==e):[...t,e];return m("selectedSymbols",a),a})},Y=async e=>{W(t=>{let a=t.filter(t=>t!==e);return m("selectedSymbols",a),a})};return(0,s.jsx)(u.f,{...a,children:(0,s.jsxs)(f.Provider,{value:{combinedData:i,filteredData:J,categories:g,loading:k,UI:w,setUI:C,activeCategory:b,setActiveCategory:v,symbolCount:L,search:j,setSearch:N,searchResultsCount:A,showPortal:M,setShowPortal:R,tab:_,setTab:P,activeSymbol:D,setActiveSymbol:G,toggleShortcuts:O,setToggleShortcuts:T,list:q,setList:B,fullscreen:F,setFullscreen:I,selected:U,addSelected:X,removeSelected:Y,setSelected:W},children:[t,(0,s.jsx)(d.x7,{richColors:!0,theme:"light",position:"bottom-center",expand:!1,closeButton:!0,duration:4428}),(0,s.jsx)(r,{})]})})}},8872:function(){}},function(e){e.O(0,[283,578,638,289,971,23,560],function(){return e(e.s=2270)}),_N_E=e.O()}]);