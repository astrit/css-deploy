(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[339],{2270:function(e,t,a){Promise.resolve().then(a.bind(a,4792))},4792:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return s}});var n=a(2265),r=a(1067);function s(){let{setActiveCategory:e}=(0,n.useContext)(r.R);return(0,n.useEffect)(()=>{e("animated")},[e]),null}},1067:function(e,t,a){"use strict";a.d(t,{R:function(){return m},Provider:function(){return v}});var n=a(7437),r=a(2265);function s(){return(0,n.jsxs)("figure",{className:"pattern",children:[(0,n.jsx)("div",{className:"gradient",children:(0,n.jsx)("span",{})}),(0,n.jsx)("div",{className:"text",children:"700"})]})}a(8872);var i=a(6463);let l=[{pattern:/\.css'$/,transform:e=>"/icon/".concat(e,"/css")},{pattern:/\.tsx'$/,transform:e=>"/icon/".concat(e,"/tsx")},{pattern:/\.svg'$/,transform:e=>"/icon/".concat(e)},{pattern:/\.css$/,transform:e=>"/icon/".concat(e,"/css")},{pattern:/\.tsx$/,transform:e=>"/icon/".concat(e,"/tsx")},{pattern:/\.svg$/,transform:e=>"/icon/".concat(e)}];function c(e){return e.replace(/\.(css|tsx|svg)'?$/,"").replace(/'$/,"")}var o=a(6578),u=a(8470),f=JSON.parse('[{"type":"affiliate","data":{"name":"raycast","link":"https://raycast.com/?via=astrit","img":"raycast","description":"Your shortcut to everything."}},{"type":"affiliate","data":{"name":"coolors","link":"https://coolors.co/?ref=5e9c74d518a3f413571ae92f","img":"coolors","description":"The super fast color palettes generator!"}},{"type":"affiliate","data":{"name":"studio","link":"https://screenstudio.lemonsqueezy.com?aff=GpRy0","img":"studio","description":"Beautiful Screen Recordings in Minutes."}},{"type":"affiliate","data":{"name":"central","link":"https://iconists.co/central?aff=GpRy0","img":"central","description":"Central icon system"}},{"type":"affiliate","data":{"name":"youtube","link":"https://www.youtube.com/c/astrit?sub_confirmation=1","img":"youtube","description":"youtube.com/@astrit"}}]'),d=a(7289),p=a(9512),h=a(7776);let m=(0,r.createContext)({combinedData:null,filteredData:null,categories:[],loading:!0,UI:!1,setUI:()=>{},activeCategory:"",setActiveCategory:()=>{},symbolCount:0,search:"",setSearch:()=>{},searchResultsCount:0,showPortal:!1,setShowPortal:()=>{},tab:"",setTab:()=>{},activeSymbol:"",setActiveSymbol:()=>{},toggleShortcuts:!1,setToggleShortcuts:()=>{},list:!1,setList:()=>{},fullscreen:!1,setFullscreen:()=>{},selected:[],addSelected:()=>{},removeSelected:()=>{},setSelected:()=>{},visibleData:null,loadMore:()=>{},hasMore:!0}),y={keys:["data.name","data.tags"],threshold:.2},g=(0,u.X3)("CSSGG",1,{upgrade(e){e.createObjectStore("keyval")}});async function S(e,t){if(!g)return;let a=await g;await a.put("keyval",t,e)}async function b(e){if(!g)return null;let t=await g;return await t.get("keyval",e)}function v(e){var t;let{children:a,...u}=e,[g,v]=(0,r.useState)(null),[k,x]=(0,r.useState)([]),[w,C]=(0,r.useState)(""),[j,E]=(0,r.useState)(!0),[R,M]=(0,r.useState)(!1),[$,N]=(0,r.useState)(""),[_,A]=(0,r.useState)(0),[O,D]=(0,r.useState)(!1),[I,P]=(0,r.useState)(""),[G,L]=(0,r.useState)(""),[T,q]=(0,r.useState)(!1),[B,F]=(0,r.useState)(!1),[U,W]=(0,r.useState)(!1),[z,J]=(0,r.useState)([]),[X,Y]=(0,r.useState)(null),[Z,H]=(0,r.useState)(1),[K,Q]=(0,r.useState)(!0),V=(0,r.useRef)(null),ee=(0,r.useRef)(null),et=(0,r.useCallback)(async()=>{try{E(!0);let e=await b("combinedData");if(e){v(e);let t=e.find(e=>"categories"===e.type);t&&Array.isArray(t.data)&&x(t.data)}else{let e=[...f];for(let t=e.length-1;t>0;t--){let a=Math.floor(Math.random()*(t+1));[e[t],e[a]]=[e[a],e[t]]}let t=Math.floor(d.length/(e.length+1)),a=[],n=0;for(let r=0;r<d.length;r++)a.push(d[r]),(r+1)%t==0&&n<e.length&&(a.push(e[n]),n++);for(;n<e.length;)a.push(e[n]),n++;v(a),await S("combinedData",a);let r=a.find(e=>"categories"===e.type);r&&Array.isArray(r.data)&&x(r.data)}}catch(e){console.error("Fetching data failed:",e)}finally{E(!1)}},[]);(0,r.useEffect)(()=>{et()},[et]),(0,r.useEffect)(()=>{(async()=>{let e=await b("selectedSymbols");e&&J(e)})()},[]);let ea=(0,r.useMemo)(()=>{if(!g)return null;let e=g;return $&&(e=new o.Z(e,y).search($).map(e=>{let{item:t}=e;return t})),!$&&w&&(e=e.filter(e=>{if("symbol"===e.type&&"tags"in e.data){if("squared"===w)return e.data.link.endsWith("-r");if("rounded"===w)return e.data.link.endsWith("-o");if("css"===w);else if("animated"===w)return e.data.css.includes("@keyframes");else return e.data.tags.includes(w)}return!0})),$&&(e=e.filter(e=>"symbol"===e.type)),A(e.length),e},[g,w,$]);(0,r.useEffect)(()=>{ea&&(Y(ea.slice(0,10)),H(1),Q(ea.length>10))},[ea]);let en=(0,r.useCallback)(()=>{if(!ea||!K)return;let e=ea.slice(0,(Z+1)*10);Y(e),H(e=>e+1),Q(e.length<ea.length)},[ea,Z,K]);(0,r.useEffect)(()=>{if(ee.current)return V.current=new IntersectionObserver(e=>{e[0].isIntersecting&&K&&en()},{threshold:.1}),V.current.observe(ee.current),()=>{V.current&&V.current.disconnect()}},[en,K]);let er=(0,r.useMemo)(()=>g?g.filter(e=>"symbol"===e.type).length:0,[g]),es=async e=>{J(t=>{let a=t.includes(e)?t.filter(t=>t!==e):[...t,e];return S("selectedSymbols",a),a})},ei=async e=>{J(t=>{let a=t.filter(t=>t!==e);return S("selectedSymbols",a),a})};return t=ea||[],(0,r.useEffect)(()=>{if(j||!t)return;let e=window.location.pathname.replace(/^\//,""),a=c(e).toLowerCase();if((e.includes("xml")||e.includes("json"))&&(0,i.redirect)("/icons"),"app"===e&&(0,i.redirect)("/icons"),t.find(e=>"link"in e.data&&c(e.data.link).toLowerCase()===a)){if(l.some(t=>{let{pattern:a}=t;return a.test(e)})){for(let{pattern:t,transform:n}of l)if(t.test(e)){(0,i.redirect)(n(a));return}}else{(0,i.redirect)("/icon/".concat(a));return}}},[t,j]),(0,n.jsx)(p.f,{...u,children:(0,n.jsxs)(m.Provider,{value:{combinedData:g,filteredData:ea,categories:k,loading:j,UI:R,setUI:M,activeCategory:w,setActiveCategory:C,symbolCount:er,search:$,setSearch:N,searchResultsCount:_,showPortal:O,setShowPortal:D,tab:I,setTab:P,activeSymbol:G,setActiveSymbol:L,toggleShortcuts:T,setToggleShortcuts:q,list:B,setList:F,fullscreen:U,setFullscreen:W,selected:z,addSelected:es,removeSelected:ei,setSelected:J,visibleData:X,loadMore:en,hasMore:K},children:[a,(0,n.jsx)(h.x7,{theme:"dark",position:"bottom-center",expand:!1,closeButton:!1,duration:4428,toastOptions:{style:{borderRadius:"208px",paddingInlineStart:"24px"}}}),(0,n.jsx)(s,{})]})})}},8872:function(){}},function(e){e.O(0,[283,578,758,289,971,23,560],function(){return e(e.s=2270)}),_N_E=e.O()}]);