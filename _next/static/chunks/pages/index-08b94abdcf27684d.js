(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5566)}])},1551:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,l,n=[],_=!0,o=!1;try{for(a=a.call(e);!(_=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);_=!0);}catch(i){o=!0,l=i}finally{try{_||null==a.return||a.return()}finally{if(o)throw l}}return n}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var n,_=(n=a(7294))&&n.__esModule?n:{default:n},o=a(1003),i=a(880),c=a(9246);var s={};function u(e,t,a,r){if(e&&o.isLocalURL(t)){e.prefetch(t,a,r).catch((function(e){0}));var l=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+a+(l?"%"+l:"")]=!0}}var p=function(e){var t,a=!1!==e.prefetch,r=i.useRouter(),n=_.default.useMemo((function(){var t=l(o.resolveHref(r,e.href,!0),2),a=t[0],n=t[1];return{href:a,as:e.as?o.resolveHref(r,e.as):n||a}}),[r,e.href,e.as]),p=n.href,m=n.as,f=e.children,d=e.replace,h=e.shallow,g=e.scroll,v=e.locale;"string"===typeof f&&(f=_.default.createElement("a",null,f));var b=(t=_.default.Children.only(f))&&"object"===typeof t&&t.ref,y=l(c.useIntersection({rootMargin:"200px"}),2),j=y[0],x=y[1],k=_.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);_.default.useEffect((function(){var e=x&&a&&o.isLocalURL(p),t="undefined"!==typeof v?v:r&&r.locale,l=s[p+"%"+m+(t?"%"+t:"")];e&&!l&&u(r,p,m,{locale:t})}),[m,p,x,v,a,r]);var w={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,a,r,l,n,_,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(a))&&(e.preventDefault(),t[l?"replace":"push"](a,r,{shallow:n,locale:i,scroll:_}))}(e,r,p,m,d,h,g,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(p)&&u(r,p,m,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof v?v:r&&r.locale,A=r&&r.isLocaleDomain&&o.getDomainLocale(m,P,r&&r.locales,r&&r.domainLocales);w.href=A||o.addBasePath(o.addLocale(m,P,r&&r.defaultLocale))}return _.default.cloneElement(t,w)};t.default=p},9246:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,l,n=[],_=!0,o=!1;try{for(a=a.call(e);!(_=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);_=!0);}catch(i){o=!0,l=i}finally{try{_||null==a.return||a.return()}finally{if(o)throw l}}return n}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,a=e.rootMargin,r=e.disabled||!o,s=n.useRef(),u=l(n.useState(!1),2),p=u[0],m=u[1],f=l(n.useState(t?t.current:null),2),d=f[0],h=f[1],g=n.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||p||e&&e.tagName&&(s.current=function(e,t,a){var r=function(e){var t,a={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===a.root&&e.margin===a.margin}));r?t=i.get(r):(t=i.get(a),c.push(a));if(t)return t;var l=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=l.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;t&&a&&t(a)}))}),e);return i.set(a,t={id:a,observer:n,elements:l}),t}(a),l=r.id,n=r.observer,_=r.elements;return _.set(e,t),n.observe(e),function(){if(_.delete(e),n.unobserve(e),0===_.size){n.disconnect(),i.delete(l);var t=c.findIndex((function(e){return e.root===l.root&&e.margin===l.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:d,rootMargin:a}))}),[r,d,a,p]);return n.useEffect((function(){if(!o&&!p){var e=_.requestIdleCallback((function(){return m(!0)}));return function(){return _.cancelIdleCallback(e)}}}),[p]),n.useEffect((function(){t&&h(t.current)}),[t]),[g,p]};var n=a(7294),_=a(4686),o="undefined"!==typeof IntersectionObserver;var i=new Map,c=[]},5566:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return A}});var r=a(5893),l=a(7294),n=a(9008),_=a(1664),o=a(7175);var i=o.Hf(!0,{mobileOnly:"(min-width:0px) and (max-width:768px)"}),c=(a(8834),a(3589)),s=a.n(c),u=a(5376),p=a.n(u);function m(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=function(e){var t=e.className,a=e.style,l=e.title,n=f(e,["className","style","title"]);return(0,r.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){m(e,t,a[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"1em",width:"1em",className:(0,o.AK)("plasmic-default__svg",t),style:a},n,{children:[l&&(0,r.jsx)("title",{children:l}),(0,r.jsx)("path",{fill:"currentColor",d:"M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"})]}))};function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var v=function(e){var t=e.className,a=e.style,l=e.title,n=g(e,["className","style","title"]);return(0,r.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){h(e,t,a[t])}))}return e}({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"1em",width:"1em",className:(0,o.AK)("plasmic-default__svg",t),style:a},n,{children:[l&&(0,r.jsx)("title",{children:l}),(0,r.jsx)("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8-1.41-1.42z"})]}))};function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function y(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=new Array,x=new Array;var k={root:["root","h1","section","foreground","h2","link"],h1:["h1"],section:["section","foreground","h2","link"],foreground:["foreground","h2","link"],h2:["h2"],link:["link"]};function w(e){var t=function(t){var a=(0,o.xf)(t,{name:e,descendantNames:y(k[e]),internalArgPropNames:x,internalVariantPropNames:j});return function(e){e.variants,e.args;var t=e.overrides,a=e.forNode;return(0,o.LK)({screen:i()}),(0,o.eh)(l.Fragment,null,(0,o.eh)(n.default,null,(0,o.eh)("meta",{name:"twitter:card",content:"summary"})),(0,o.eh)("style",null,"\n        body {\n          margin: 0;\n        }\n      "),(0,o.eh)("div",{className:s().plasmic_page_wrapper},(0,o.eh)(o.Kq,{as:"div","data-plasmic-name":"root","data-plasmic-override":t.root,"data-plasmic-root":!0,"data-plasmic-for-node":a,hasGap:!0,className:(0,o.AK)(s().all,s().root_reset,s().plasmic_default_styles,s().plasmic_mixins,p().root)},(0,o.eh)("h1",{"data-plasmic-name":"h1","data-plasmic-override":t.h1,className:(0,o.AK)(s().all,s().h1,s().__wab_text,p().h1)},"       Welcome To Ravej."),(0,o.eh)("div",{className:(0,o.AK)(s().all,s().__wab_text,p().text__bNjb8)},"Ravej is your go-to website for any type of online gaming, we have a wide variety of html games to your disposal."),(0,o.eh)(o.Kq,{as:"section","data-plasmic-name":"section","data-plasmic-override":t.section,hasGap:!0,className:(0,o.AK)(s().all,p().section)},(0,o.eh)(o.Kq,{as:"div","data-plasmic-name":"foreground","data-plasmic-override":t.foreground,hasGap:!0,className:(0,o.AK)(s().all,p().foreground)},(0,o.eh)(o.Kq,{as:"div",hasGap:!0,className:(0,o.AK)(s().all,p().freeBox__jOz2N)},(0,o.eh)("h2",{"data-plasmic-name":"h2","data-plasmic-override":t.h2,className:(0,o.AK)(s().all,s().h2,s().__wab_text,p().h2)},"What we offer*"),(0,o.eh)("div",{className:(0,o.AK)(s().all,s().__wab_text,p().text__jbu68)},"Here is just a small amount of what Ravej offers with countless more result to come, we try to update our system most often so more people can enjoy ad free gaming."),(0,o.eh)(o.Kq,{as:o.L,"data-plasmic-name":"link","data-plasmic-override":t.link,hasGap:!0,className:(0,o.AK)(s().all,s().a,p().link),component:_.default,platform:"nextjs"},null,(0,o.eh)("div",{className:(0,o.AK)(s().all,s().__wab_text,p().text__eXySo)},"Start Gaming"),(0,o.eh)(d,{className:(0,o.AK)(s().all,p().svg__nCYm),role:"img"}))),(0,o.eh)("div",{className:(0,o.AK)(s().all,p().freeBox__lGKzy)},(0,o.eh)("div",{className:(0,o.AK)(s().all,p().freeBox__jUgik)},(0,o.eh)("div",{className:(0,o.AK)(s().all,s().__wab_text,p().text__r8CC)},"High Quality"),(0,o.eh)(v,{className:(0,o.AK)(s().all,p().svg___6PDl),role:"img"})),(0,o.eh)("div",{className:(0,o.AK)(s().all,p().freeBox__cqOyZ)},(0,o.eh)("div",{className:(0,o.AK)(s().all,s().__wab_text,p().text__lcUvl)},"Smooth FPS"),(0,o.eh)(v,{className:(0,o.AK)(s().all,p().svg__ogmpH),role:"img"})),(0,o.eh)("div",{className:(0,o.AK)(s().all,p().freeBox__kcVnU)},(0,o.eh)("div",{className:(0,o.AK)(s().all,s().__wab_text,p().text__lnwLe)},"Reliability"),(0,o.eh)(v,{className:(0,o.AK)(s().all,p().svg__lrhy1),role:"img"})),(0,o.eh)("div",{className:(0,o.AK)(s().all,p().freeBox__qGhvK)},(0,o.eh)("div",{className:(0,o.AK)(s().all,s().__wab_text,p().text__q7Cvt)},"Unblocked Gaming"),(0,o.eh)(v,{className:(0,o.AK)(s().all,p().svg__hxGqh),role:"img"})),(0,o.eh)("div",{className:(0,o.AK)(s().all,p().freeBox__eZxge)},(0,o.eh)("div",{className:(0,o.AK)(s().all,s().__wab_text,p().text___0MGIw)},"Quick Loading"),(0,o.eh)(v,{className:(0,o.AK)(s().all,p().svg__j7Gp),role:"img"}))))))))}({variants:a.variants,args:a.args,overrides:a.overrides,forNode:e})};return t.displayName="root"===e?"PlasmicHomepage":"PlasmicHomepage.".concat(e),t}var P=Object.assign(w("root"),{h1:w("h1"),section:w("section"),foreground:w("foreground"),h2:w("h2"),link:w("link"),internalVariantProps:j,internalArgProps:x});var A=function(){return(0,r.jsx)(P,{})}},5376:function(e){e.exports={root:"PlasmicHomepage_root__3spg0",h1:"PlasmicHomepage_h1__I93AC",text__bNjb8:"PlasmicHomepage_text__bNjb8__MP1RQ",section:"PlasmicHomepage_section__71GzW",foreground:"PlasmicHomepage_foreground__WxJoM",freeBox__jOz2N:"PlasmicHomepage_freeBox__jOz2N__ZEPlY",h2:"PlasmicHomepage_h2__9LJFn",text__jbu68:"PlasmicHomepage_text__jbu68__NkKgB",link:"PlasmicHomepage_link__zvXea",svg__cwR4:"PlasmicHomepage_svg__cwR4__T73Eq",text__eXySo:"PlasmicHomepage_text__eXySo__nOKtg",svg__nCYm:"PlasmicHomepage_svg__nCYm__D_of9",freeBox__lGKzy:"PlasmicHomepage_freeBox__lGKzy__sBAlV",freeBox__jUgik:"PlasmicHomepage_freeBox__jUgik__Nv7Pk",text__r8CC:"PlasmicHomepage_text__r8CC__pg0ZG",svg___6PDl:"PlasmicHomepage_svg___6PDl__VkIqi",freeBox__cqOyZ:"PlasmicHomepage_freeBox__cqOyZ__54_by",text__lcUvl:"PlasmicHomepage_text__lcUvl__UvsKZ",svg__ogmpH:"PlasmicHomepage_svg__ogmpH__ySP7x",freeBox__kcVnU:"PlasmicHomepage_freeBox__kcVnU__EcR_w",text__lnwLe:"PlasmicHomepage_text__lnwLe__1C5a_",svg__lrhy1:"PlasmicHomepage_svg__lrhy1__wKzgc",freeBox__qGhvK:"PlasmicHomepage_freeBox__qGhvK__kyg80",text__q7Cvt:"PlasmicHomepage_text__q7Cvt__e31Va",svg__hxGqh:"PlasmicHomepage_svg__hxGqh__yTDQJ",freeBox__eZxge:"PlasmicHomepage_freeBox__eZxge___10Uk",text___0MGIw:"PlasmicHomepage_text___0MGIw__ZrGJ0",svg__j7Gp:"PlasmicHomepage_svg__j7Gp__gkwbi"}},3589:function(e){e.exports={plasmic_default_styles:"plasmic_blank_project_plasmic_default_styles__KUJ8N",all:"plasmic_blank_project_all__pQNb4",img:"plasmic_blank_project_img__i9arA",li:"plasmic_blank_project_li__kaJZY",span:"plasmic_blank_project_span__YMRUN",input:"plasmic_blank_project_input__ltUDg",textarea:"plasmic_blank_project_textarea__LVB9X",button:"plasmic_blank_project_button__biLk8",code:"plasmic_blank_project_code__LJ1dw",pre:"plasmic_blank_project_pre__Butqb",p:"plasmic_blank_project_p__5ajlK",h1:"plasmic_blank_project_h1__W5neL",h2:"plasmic_blank_project_h2__L_x6Q",h3:"plasmic_blank_project_h3__Qg9IF",h4:"plasmic_blank_project_h4__G9mV4",h5:"plasmic_blank_project_h5__enpcy",h6:"plasmic_blank_project_h6__yQYui",address:"plasmic_blank_project_address__4_PVA",a:"plasmic_blank_project_a__zs_6O",ol:"plasmic_blank_project_ol__46O02",ul:"plasmic_blank_project_ul__K2z8Z",select:"plasmic_blank_project_select__M7oYk",plasmic_default__component_wrapper:"plasmic_blank_project_plasmic_default__component_wrapper__Yg1bw",plasmic_default__inline:"plasmic_blank_project_plasmic_default__inline__nvZVR",plasmic_page_wrapper:"plasmic_blank_project_plasmic_page_wrapper__feO1H",root_reset:"plasmic_blank_project_root_reset__5cWSI",plasmic_default__h1:"plasmic_blank_project_plasmic_default__h1__57mib",plasmic_default__h2:"plasmic_blank_project_plasmic_default__h2__x5muy",plasmic_default__a:"plasmic_blank_project_plasmic_default__a__5Z56Y",plasmic_default__h3:"plasmic_blank_project_plasmic_default__h3__E3YyA",plasmic_default__h4:"plasmic_blank_project_plasmic_default__h4__c11QY",plasmic_default__code:"plasmic_blank_project_plasmic_default__code__rkZRm",plasmic_default__blockquote:"plasmic_blank_project_plasmic_default__blockquote__yPeOF",blockquote:"plasmic_blank_project_blockquote__WCZnc",plasmic_default__pre:"plasmic_blank_project_plasmic_default__pre__jeRLO",plasmic_default__ul:"plasmic_blank_project_plasmic_default__ul__9ephT",plasmic_default__ol:"plasmic_blank_project_plasmic_default__ol__Xc3tP",plasmic_default__h5:"plasmic_blank_project_plasmic_default__h5__Gc9m5",plasmic_default__h6:"plasmic_blank_project_plasmic_default__h6__zLkpo"}},8834:function(){},9008:function(e,t,a){e.exports=a(3121)},1664:function(e,t,a){e.exports=a(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);