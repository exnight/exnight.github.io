(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8223)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,u=n(7273).Z,a=o(n(1720)),l=n(6273),i=n(2725),c=n(3462),f=n(1018),s=n(7190),d=n(1210),p=n(8684),v={};function y(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var _=a.default.forwardRef((function(e,t){var n,o=e.href,_=e.as,h=e.children,b=e.prefetch,m=e.passHref,g=e.replace,C=e.shallow,O=e.scroll,j=e.locale,x=e.onClick,w=e.onMouseEnter,M=e.onTouchStart,P=e.legacyBehavior,k=void 0===P?!0!==Boolean(!1):P,Z=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=h,!k||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var E=!1!==b,L=a.default.useContext(c.RouterContext),R=a.default.useContext(f.AppRouterContext);R&&(L=R);var T,S=a.default.useMemo((function(){var e=r(l.resolveHref(L,o,!0),2),t=e[0],n=e[1];return{href:t,as:_?l.resolveHref(L,_):n||t}}),[L,o,_]),D=S.href,N=S.as,B=a.default.useRef(D),H=a.default.useRef(N);k&&(T=a.default.Children.only(n));var A=k?T&&"object"===typeof T&&T.ref:t,I=r(s.useIntersection({rootMargin:"200px"}),3),X=I[0],U=I[1],Y=I[2],G=a.default.useCallback((function(e){H.current===N&&B.current===D||(Y(),H.current=N,B.current=D),X(e),A&&("function"===typeof A?A(e):"object"===typeof A&&(A.current=e))}),[N,A,D,Y,X]);a.default.useEffect((function(){var e=U&&E&&l.isLocalURL(D),t="undefined"!==typeof j?j:L&&L.locale,n=v[D+"%"+N+(t?"%"+t:"")];e&&!n&&y(L,D,N,{locale:t})}),[N,D,U,j,E,L]);var V={ref:G,onClick:function(e){k||"function"!==typeof x||x(e),k&&T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,i,c,f,s){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:i}):t[o?"replace":"push"](n,{forceOptimisticNavigation:!s})};f?a.default.startTransition(d):d()}}(e,L,D,N,g,C,O,j,Boolean(R),E)},onMouseEnter:function(e){k||"function"!==typeof w||w(e),k&&T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),!E&&R||l.isLocalURL(D)&&y(L,D,N,{priority:!0})},onTouchStart:function(e){k||"function"!==typeof M||M(e),k&&T.props&&"function"===typeof T.props.onTouchStart&&T.props.onTouchStart(e),!E&&R||l.isLocalURL(D)&&y(L,D,N,{priority:!0})}};if(!k||m||"a"===T.type&&!("href"in T.props)){var F="undefined"!==typeof j?j:L&&L.locale,z=L&&L.isLocaleDomain&&d.getDomainLocale(N,F,L.locales,L.domainLocales);V.href=z||p.addBasePath(i.addLocale(N,F,L&&L.defaultLocale))}return k?a.default.cloneElement(T,V):a.default.createElement("a",Object.assign({},Z,V),n)}));t.default=_,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!a,f=r(o.useState(!1),2),s=f[0],d=f[1],p=r(o.useState(null),2),v=p[0],y=p[1];o.useEffect((function(){if(a){if(c||s)return;if(v&&v.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},i.push(n),l.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(v,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!s){var r=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(r)}}}),[v,c,n,t,s]);var _=o.useCallback((function(){d(!1)}),[]);return[y,s,_]};var o=n(1720),u=n(9311),a="function"===typeof IntersectionObserver,l=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(1720)),o=r.default.createContext(null);t.AppRouterContext=o;var u=r.default.createContext(null);t.LayoutRouterContext=u;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var l=r.default.createContext(null);t.TemplateContext=l},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,u=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?u.loader=function(){return e}:"function"===typeof e?u.loader=e:"object"===typeof e&&(u=o({},u,e));!1;(u=o({},u,t)).suspense&&(delete u.ssr,delete u.loading);u.loadableGenerated&&delete(u=o({},u,u.loadableGenerated)).loadableGenerated;if("boolean"===typeof u.ssr&&!u.suspense){if(!u.ssr)return delete u.ssr,l(n,u);delete u.ssr}return n(u)},t.noSSR=l;var o=n(6495).Z,u=n(2648).Z,a=(u(n(1720)),u(n(4302)));function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(1720)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,o=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(6495).Z,a=(0,n(2648).Z)(n(1720)),l=n(6319),i=n(1720).useSyncExternalStore,c=[],f=[],s=!1;function d(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function v(e){return function(e,t){var n=function(){if(!c){var t=new p(e,o);c={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return c.promise()},r=function(){n();var e=a.default.useContext(l.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach((function(t){e(t)}))},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=a.default.lazy(o.loader));var c=null;if(!s){var d=o.webpack?o.webpack():o.modules;d&&f.push((function(e){var t=!0,r=!1,o=void 0;try{for(var u,a=d[Symbol.iterator]();!(t=(u=a.next()).done);t=!0){var l=u.value;if(-1!==e.indexOf(l))return n()}}catch(i){r=!0,o=i}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}}))}var v=o.suspense?function(e,t){return r(),a.default.createElement(o.lazy,u({},e,{ref:t}))}:function(e,t){r();var n=i(c.subscribe,c.getCurrentValue,c.getCurrentValue);return a.default.useImperativeHandle(t,(function(){return{retry:c.retry}}),[]),a.default.useMemo((function(){return n.loading||n.error?a.default.createElement(o.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:c.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return v.preload=function(){return n()},v.displayName="LoadableComponent",a.default.forwardRef(v)}(d,e)}function y(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return y(e,t)}))}v.preloadAll=function(){return new Promise((function(e,t){y(c).then(e,t)}))},v.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return s=!0,t()};y(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=v.preloadReady;var _=v;t.default=_},8223:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(1799),o=n(7320),u=n(9008),a=n.n(u),l=n(5152),i=n.n(l),c=n(1664),f=n.n(c),s=function(){return(0,o.tZ)("div",{className:"my-4 pb-4 border-b",children:(0,o.BX)("div",{className:"justify-items-center items-center mx-auto sm:w-4/5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8",children:[(0,o.tZ)(f(),{href:"/",children:(0,o.tZ)("a",{children:"Home"})}),(0,o.tZ)(f(),{href:"/blog",children:(0,o.tZ)("a",{children:"Blog"})})]})})},d=i()((function(){return Promise.all([n.e(948),n.e(675),n.e(603),n.e(980)]).then(n.bind(n,2980))}),{loadableGenerated:{webpack:function(){return[2980]}}}),p=function(e){var t=e.children;return(0,o.BX)(o.HY,{children:[(0,o.tZ)(s,{}),(0,o.tZ)("main",{style:{minHeight:"80vh"},children:t}),(0,o.tZ)(d,{})]})};n(906);var v=function(e){var t=e.Component,n=e.pageProps;return(0,o.BX)(o.HY,{children:[(0,o.BX)(a(),{children:[(0,o.tZ)("meta",{charSet:"UTF-8"}),(0,o.tZ)("meta",{name:"author",content:"Leo W."}),(0,o.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.tZ)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,o.tZ)(p,{children:(0,o.tZ)(t,(0,r.Z)({},n))})]})}},906:function(){},5152:function(e,t,n){e.exports=n(638)},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},6584:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment:function(){return r.HY},jsx:function(){return u},jsxDEV:function(){return u},jsxs:function(){return u}});var r=n(6400),o=0;function u(e,t,n,u,a){var l,i,c={};for(i in t)"ref"==i?l=t[i]:c[i]=t[i];var f={type:e,props:c,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--o,__source:a,__self:u};if("function"==typeof e&&(l=e.defaultProps))for(i in l)void 0===c[i]&&(c[i]=l[i]);return r.YM.vnode&&r.YM.vnode(f),f}},1799:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return o}})},7320:function(e,t,n){"use strict";n.d(t,{BX:function(){return r.jsxs},HY:function(){return r.Fragment},tZ:function(){return r.jsx}});n(1720);var r=n(6584)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var n=e.O();_N_E=n}]);