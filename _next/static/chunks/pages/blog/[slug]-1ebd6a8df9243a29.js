(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(4033)}])},427:function(e,t,n){"use strict";var r=n(5893),l=n(9008),c=n.n(l);t.Z=e=>{let t="".concat(e.title," | Leo W.");return(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:e.description})]})}},4033:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return w},default:function(){return p}});var r={};n.r(r),n.d(r,{MDXContext:function(){return i},MDXProvider:function(){return d},useMDXComponents:function(){return s},withMDXComponents:function(){return u}});var l=n(5893),c=n.t(l,2),o=n(7294);let i=o.createContext({});function u(e){return function(t){let n=s(t.components);return o.createElement(e,{...t,allComponents:n})}}function s(e){let t=o.useContext(i);return o.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let a={};function d({components:e,children:t,disableParentContext:n}){let r=s(e);return n&&(r=e||a),o.createElement(i.Provider,{value:r},t)}function f({compiledSource:e,frontmatter:t,scope:n,components:l={},lazy:i}){let[u,s]=(0,o.useState)(!i||"undefined"==typeof window);(0,o.useEffect)(()=>{if(i){let e=window.requestIdleCallback(()=>{s(!0)});return()=>window.cancelIdleCallback(e)}},[]);let a=(0,o.useMemo)(()=>{let l=Object.assign({opts:{...r,...c}},{frontmatter:t},n),o=Object.keys(l),i=Object.values(l),u=Reflect.construct(Function,o.concat(`${e}`));return u.apply(u,i).default},[n,e]);if(!u)return o.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let f=o.createElement(d,{components:l},o.createElement(a,null));return i?o.createElement("div",null,f):f}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var m=n(427),x={h1:e=>(0,l.jsx)("h1",{className:"my-4 text-2xl",children:e.children}),h2:e=>(0,l.jsx)("h2",{className:"my-4 text-xl",children:e.children}),p:e=>(0,l.jsx)("p",{className:"my-4 text-md",children:e.children}),pre:e=>(0,l.jsx)("pre",{className:"my-4 text-2xl self-center",children:(0,l.jsx)("code",{children:e.children})})};let h=e=>{let{mdxSource:t}=e,n=t.frontmatter.title;return(0,l.jsxs)("div",{className:"w-4/5 lg:w-5/6 mx-auto mt-8 flex flex-col",children:[(0,l.jsx)(m.Z,{title:"".concat(n),description:"A dev blog alongside other random content"}),(0,l.jsx)("h1",{className:"text-4xl mb-4 self-center",children:n}),(0,l.jsx)(f,{...t,components:x})]})};var w=!0,p=e=>{let{post:t}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(h,{mdxSource:t})})}}},function(e){e.O(0,[888,774,179],function(){return e(e.s=1127)}),_N_E=e.O()}]);