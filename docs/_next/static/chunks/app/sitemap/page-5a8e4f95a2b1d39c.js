(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62],{2098:function(e,a,n){Promise.resolve().then(n.bind(n,1472))},1472:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return o}});var t=n(7437),s=n(2265),i=n(7713),r=n(6578),c=n(7289);function o(){let[e,a]=(0,s.useState)([]),[n,o]=(0,s.useState)({}),[l,d]=(0,s.useState)(c.filter(e=>"symbol"===e.type).map(e=>e.data)),[u,h]=(0,s.useState)(!0),[m,p]=(0,s.useState)(""),[f,j]=(0,s.useState)(null);(0,s.useEffect)(()=>{!async function(){try{let e={},n=0,t=0,s=0,i=0;c.forEach(a=>{a.data?(Array.isArray(a.data.tags)&&a.data.tags.forEach(a=>{e[a]?e[a]++:e[a]=1}),a.data.link&&a.data.link.endsWith("-o")&&n++,a.data.link&&a.data.link.endsWith("-r")&&t++,a.data.css&&""!==a.data.css.trim()&&s++,a.data.css&&a.data.css.includes("@keyframes")&&i++):console.warn("Invalid symbol format:",a)});let r=e=>e.charAt(0).toUpperCase()+e.slice(1),l={type:"categories",data:Object.keys(e).sort().map(a=>({name:r(a),link:a,count:e[a].toString(),description:"description"}))},d={rounded:{name:"Rounded",link:"rounded",count:n.toString(),description:"description"},squared:{name:"Squared",link:"squared",count:t.toString(),description:"description"},vanilla_css:{name:"Vanilla CSS",link:"css",count:s.toString(),description:"description"},animated:{name:"Animated",link:"animated",count:i.toString(),description:"description"}};a(l.data),o(d)}catch(e){console.error("Error processing data:",e),j("Error processing data")}finally{h(!1)}}()},[]);let k=(e,a)=>a?e.split(RegExp("(".concat(a,")"),"gi")).map((e,n)=>e.toLowerCase()===a.toLowerCase()?(0,t.jsx)("mark",{children:e},n):e):e,x={keys:["name"],threshold:.3},g=new r.Z(e,x),v=new r.Z(Object.values(n),x),S=new r.Z(l,x),y=m?g.search(m).map(e=>e.item):e,w=m?v.search(m).map(e=>e.item):Object.values(n),E=m?S.search(m).map(e=>e.item):l;return u?(0,t.jsx)("div",{children:"Loading..."}):f?(0,t.jsx)("div",{children:f}):(0,t.jsxs)("div",{className:"sitemap",children:[(0,t.jsx)("input",{type:"text",placeholder:"Search sitemap...",value:m,onChange:e=>{p(e.target.value)},className:"search-input"}),(0,t.jsxs)("div",{className:"sections",children:[(0,t.jsxs)("section",{className:"categories",children:[(0,t.jsx)("h2",{children:"Categories"}),(0,t.jsxs)("nav",{children:[y.map(e=>(0,t.jsx)(i.Z,{href:"/icons/".concat(e.link),children:k(e.name,m)},e.name)),w.map(e=>(0,t.jsx)(i.Z,{href:"/icons/".concat(e.link),children:k(e.name,m)},e.name))]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{children:"Icons"}),(0,t.jsx)("nav",{className:"sitemap-icons",children:E.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(i.Z,{href:"/icon/".concat(e.link),children:k(e.name,m)},e.name)}))})]})]})]})}},7713:function(e,a,n){"use strict";var t=n(7437),s=n(2265),i=n(7138);n(8793);let r=s.forwardRef((e,a)=>{let{children:n,href:s,className:r,target:c,...o}=e,l=["link"];return r&&l.push(r),(0,t.jsx)(i.default,{ref:a,href:s,className:l.join(" "),passHref:!0,target:c,prefetch:!1,...o,children:n})});a.Z=r},8793:function(){}},function(e){e.O(0,[886,578,138,289,971,23,560],function(){return e(e.s=2098)}),_N_E=e.O()}]);