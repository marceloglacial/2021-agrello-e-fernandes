(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1783:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(1664),a=function(e){var t={main:[{title:"Miss\xe3o",link:"/missao"},{title:"\xc1reas de Atua\xe7\xe3o",link:"#servicos"},{title:"Quem Somos",link:"#quem"},{title:"Contato",link:"#contato"}],social:[{title:"(88) 8888.8888",link:"tel: (88) 8888.8888"}]};return(0,r.jsxs)("div",{className:"nav-header flex w-full",children:[(0,r.jsx)("ul",{className:"flex list-none mx-auto",children:t.main.map((function(e,t){return(0,r.jsx)("li",{className:"py-2 px-8",children:(0,r.jsx)(o.default,{href:e.link,children:(0,r.jsx)("a",{className:"text-white no-underline text-xl",children:e.title})})},t)}))}),(0,r.jsx)("ul",{className:"flex list-none",children:t.social.map((function(e,t){return(0,r.jsx)("li",{className:"p-2",children:(0,r.jsx)(o.default,{href:e.link,children:(0,r.jsx)("a",{className:"text-white  no-underline text-xl",children:e.title})})},t)}))})]})},c=function(e){return(0,r.jsx)("div",{className:"flex w-64",children:(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:"flex text-white  no-underline text-xl",children:"Agrello & Fernandes"})})})},i=function(e){return(0,r.jsxs)("header",{className:"page-header fixed z-50 flex items-center p-8 w-full bg-black bg-opacity-10",children:[(0,r.jsx)(c,{}),(0,r.jsx)(a,{})]})},l=n(9008),s=function(e){var t=e.title,n=e.children,o="Agrello & Fernandes",a="Advocacia e Consultoria Jur\xeddica",c="advocacia, advogado, jur\xeddico";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.default,{children:[(0,r.jsx)("title",{children:t?" ".concat(t," - ").concat(o):"".concat(o," - ").concat(a)}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{name:"keywords",content:c}),(0,r.jsx)("meta",{property:"og:title",content:o}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{property:"og:image",content:"tile-wide.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"apple-touch-icon.png"})]}),(0,r.jsx)(i,{}),(0,r.jsx)("main",{children:n})]})}},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1063),i=n(4651),l=n(7426);var s={};function u(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,x=e.shallow,m=e.scroll,j=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,g=l.useIntersection({rootMargin:"200px"}),y=r(g,2),w=y[0],O=y[1],k=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);a.default.useEffect((function(){var e=O&&n&&c.isLocalURL(d),t="undefined"!==typeof j?j:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&u(o,d,p,{locale:t})}),[p,d,O,j,n,o]);var _={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,o,d,p,v,x,m,j)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof j?j:o&&o.locale,N=o&&o.isLocaleDomain&&c.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);_.href=N||c.addBasePath(c.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(t,_)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,l=o.useRef(),s=o.useState(!1),u=r(s,2),f=u[0],d=u[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},7672:function(e,t,n){"use strict";n.r(t);var r=n(4942),o=n(1783),a=(n(979),n(5893));function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsx)(o.Z,{children:(0,a.jsx)(t,i({},n))})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7672)}])},979:function(){},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},4942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);