(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(6453)}])},8199:function(e,t){"use strict";var r,n,l,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return c},ACTION_NAVIGATE:function(){return a},ACTION_PREFETCH:function(){return f},ACTION_REFRESH:function(){return u},ACTION_RESTORE:function(){return i},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return s},PrefetchCacheEntryStatus:function(){return n},PrefetchKind:function(){return r},isThenable:function(){return p}});let u="refresh",a="navigate",i="restore",s="server-patch",f="prefetch",c="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(l=r||(r={})).AUTO="auto",l.FULL="full",l.TEMPORARY="temporary",(o=n||(n={})).fresh="fresh",o.reusable="reusable",o.expired="expired",o.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7195:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(8337),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8342:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(8754),l=r(5893),o=n._(r(7294)),u=r(6075),a=r(3955),i=r(8041),s=r(9903),f=r(5490),c=r(1928),d=r(257),p=r(4229),h=r(7195),_=r(9470),b=r(8199),y=new Set;function m(e,t,r,n,l,o){if(o||(0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(y.has(l))return;y.add(l)}(async()=>o?e.prefetch(t,l):e.prefetch(t,r,n))().catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:i,as:y,children:v,prefetch:j=null,passHref:O,replace:P,shallow:x,scroll:C,locale:E,onClick:T,onMouseEnter:w,onTouchStart:k,legacyBehavior:M=!1,...R}=e;r=v,M&&("string"==typeof r||"number"==typeof r)&&(r=(0,l.jsx)("a",{children:r}));let A=o.default.useContext(c.RouterContext),L=o.default.useContext(d.AppRouterContext),S=null!=A?A:L,N=!A,I=!1!==j,D=null===j?b.PrefetchKind.AUTO:b.PrefetchKind.FULL,{href:F,as:U}=o.default.useMemo(()=>{if(!A){let e=g(i);return{href:e,as:y?g(y):e}}let[e,t]=(0,u.resolveHref)(A,i,!0);return{href:e,as:y?(0,u.resolveHref)(A,y):t||e}},[A,i,y]),H=o.default.useRef(F),V=o.default.useRef(U);M&&(n=o.default.Children.only(r));let K=M?n&&"object"==typeof n&&n.ref:t,[G,X,B]=(0,p.useIntersection)({rootMargin:"200px"}),Y=o.default.useCallback(e=>{(V.current!==U||H.current!==F)&&(B(),V.current=U,H.current=F),G(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[U,K,F,B,G]);o.default.useEffect(()=>{S&&X&&I&&m(S,F,U,{locale:E},{kind:D},N)},[U,F,X,E,I,null==A?void 0:A.locale,S,N,D]);let q={ref:Y,onClick(e){M||"function"!=typeof T||T(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,l,u,i,s,f){let{nodeName:c}=e.currentTarget;if("A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let d=()=>{let e=null==i||i;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:u,locale:s,scroll:e}):t[l?"replace":"push"](n||r,{scroll:e})};f?o.default.startTransition(d):d()}(e,S,F,U,P,x,C,E,N)},onMouseEnter(e){M||"function"!=typeof w||w(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(I||!N)&&m(S,F,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:D},N)},onTouchStart:function(e){M||"function"!=typeof k||k(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(I||!N)&&m(S,F,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:D},N)}};if((0,s.isAbsoluteUrl)(U))q.href=U;else if(!M||O||"a"===n.type&&!("href"in n.props)){let e=void 0!==E?E:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,h.getDomainLocale)(U,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);q.href=t||(0,_.addBasePath)((0,f.addLocale)(U,e,null==A?void 0:A.defaultLocale))}return M?o.default.cloneElement(n,q):(0,l.jsx)("a",{...R,...q,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let n=r(7294),l=r(4474),o="function"==typeof IntersectionObserver,u=new Map,a=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,s=i||!o,[f,c]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(s||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let l=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:l},a.push(r),u.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,l.requestIdleCallback)(()=>c(!0));return()=>(0,l.cancelIdleCallback)(e)}},[s,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2602:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},noSSR:function(){return u}});let n=r(8754);r(5893),r(7294);let l=n._(r(5491));function o(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}function a(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let a=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=a?a().then(o):Promise.resolve(o(()=>null))}):(delete n.webpack,delete n.modules,u(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1159:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let n=r(8754)._(r(7294)).default.createContext(null)},5491:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let n=r(8754)._(r(7294)),l=r(1159),o=[],u=[],a=!1;function i(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function i(){if(!o){let t=new s(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!a){let e=r.webpack?r.webpack():r.modules;e&&u.push(t=>{for(let r of e)if(t.includes(r))return i()})}function f(e,t){!function(){i();let e=n.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let u=n.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),n.default.useMemo(()=>{var t;return u.loading||u.error?n.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:o.retry}):u.loaded?n.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return f.preload=()=>i(),f.displayName="LoadableComponent",n.default.forwardRef(f)}(i,e)}function c(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}f.preloadAll=()=>new Promise((e,t)=>{c(o).then(e,t)}),f.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(a=!0,t());c(u,e).then(r,r)})),window.__NEXT_PRELOADREADY=f.preloadReady;let d=f},6453:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),l=r(9008),o=r.n(l),u=r(5152),a=r.n(u),i=r(1664),s=r.n(i),f=()=>(0,n.jsx)("div",{className:"my-4 pb-4 border-b",children:(0,n.jsxs)("div",{className:"justify-items-center items-center mx-auto sm:w-4/5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8",children:[(0,n.jsx)(s(),{href:"/",children:"Home"}),(0,n.jsx)(s(),{href:"/blog",children:"Blog"})]})});let c=a()(()=>Promise.all([r.e(948),r.e(675),r.e(603),r.e(210)]).then(r.bind(r,2210)),{loadableGenerated:{webpack:()=>[2210]}});var d=e=>{let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{}),(0,n.jsx)("main",{style:{minHeight:"80vh"},children:t}),(0,n.jsx)(c,{})]})};r(3434);var p=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("meta",{charSet:"UTF-8"}),(0,n.jsx)("meta",{name:"author",content:"Leo W."}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(d,{children:(0,n.jsx)(t,{...r})})]})}},3434:function(){},5152:function(e,t,r){e.exports=r(2602)},9008:function(e,t,r){e.exports=r(3867)},1664:function(e,t,r){e.exports=r(8342)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(3079)}),_N_E=e.O()}]);