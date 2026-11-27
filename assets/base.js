/**
 * Swiper 8.4.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 12, 2022
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function l(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...a)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...a)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return o(this,(e=>a.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));this.forEach((e=>{a.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;function l(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),d(t).is(i))r.apply(t,s);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(i)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const c=a.split(" ");let p;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(p=0;p<c.length;p+=1){const e=c[p];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,n)}else for(p=0;p<c.length;p+=1){const e=c[p];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const l=a.split(" ");for(let e=0;e<l.length;e+=1){const t=l[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];r&&i.listener===r||r&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===r?(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1)):r||(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];const i=s[0].split(" "),n=s[1];for(let t=0;t<i.length;t+=1){const a=i[t];for(let t=0;t<this.length;t+=1){const i=this[t];if(e.CustomEvent){const t=new e.CustomEvent(a,{detail:n,bubbles:!0,cancelable:!0});i.dom7EventData=s.filter(((e,t)=>t>0)),i.dispatchEvent(t),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(){let e;const t=a();for(let s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(let s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(let t=0;t<e.length;t+=1)this[s].appendChild(e[t]);else this[s].appendChild(e)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!f(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(m(e[i])&&m(a[i])?a[i].__swiper__?e[i]=a[i]:g(e[i],a[i]):!m(e[i])&&m(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:g(e[i],a[i])):e[i]=a[i])}}}return e}function v(e,t,s){e.style.setProperty(t,s)}function w(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}let b,x,y;function E(){return b||(b=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),b}function C(e){return void 0===e&&(e={}),x||(x=function(e){let{userAgent:t}=void 0===e?{}:e;const s=E(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!m&&(l.os="android",l.android=!0),(p||h||u)&&(l.os="ios",l.ios=!0),l}(e)),x}function T(){return y||(y=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),y}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var $={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var S={updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const T=a.grid&&a.grid.rows>1&&e.grid;let $;T&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(T&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),C%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),T&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(o||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.$el.hasClass(t);p<=a.maxBackfaceHiddenSlides?s||e.$el.addClass(t):s&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||d([])).each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var M={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function P(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var k={slideTo:function(e,t,s,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1);const v=-o[g];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),b=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;if(void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(m,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var z={loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((e,t)=>{d(e).attr("data-swiper-slide-index",t)}));for(let t=0;t<e.loopedSlides;t+=1){const e=t-Math.floor(t/n.length)*n.length;o.push(n.eq(e)[0]),l.unshift(n.eq(n.length-e-1)[0])}for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}};function L(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;const m=!!l.noSwipingClass&&""!==l.noSwipingClass,f=e.composedPath?e.composedPath():e.path;m&&p.target&&p.target.shadowRoot&&f&&(h=d(f[0]));const g=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(v?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(g,h[0]):h.closest(g)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const w=o.currentX,b=o.currentY,x=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,y=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(x&&(w<=y||w>=i.innerWidth-y)){if("prevent"!==x)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=w,o.startY=b,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(n.isTouched=!1)),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function O(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return d(c.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function I(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(h-n[m])/f,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-a.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==g?g:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m))}}function A(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function D(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function G(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let N=!1;function B(){}const H=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[u]("observerUpdate",A,!0)};var X={attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=L.bind(e),e.onTouchMove=O.bind(e),e.onTouchEnd=I.bind(e),s.cssMode&&(e.onScroll=G.bind(e)),e.onClick=D.bind(e),i.touch&&!N&&(t.addEventListener("touchstart",B),N=!0),H(e,"on")},detachEvents:function(){H(this,"off")}};const Y=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var R={addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}};var W={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function q(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),g(t,s)):g(t,s)):g(t,s)}}const j={eventsEmitter:$,update:S,translate:M,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),P({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),P({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:k,loop:z,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:X,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=Y(e,i),c=Y(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const s=i[t]&&i[t].enabled,a=o[t]&&o[t].enabled;s&&!a&&e[t].disable(),!s&&a&&e[t].enable()}));const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),g(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:R,images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},_={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];if(1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?t=a[0]:[e,t]=a,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&d(t.el).length>1){const e=[];return d(t.el).each((s=>{const a=g({},t,{el:s});e.push(new V(a))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=C({userAgent:t.userAgent}),r.browser=T(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach((e=>{e({swiper:r,extendParams:q(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const l=g({},W,n);return r.params=g({},l,_,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=d,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children?s.children(i()):d(s).children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){g(_,e)}static get extendedDefaults(){return _}static get defaults(){return W}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>V.installModule(e))),V):(V.installModule(e),V)}}function F(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function U(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function Z(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function Q(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function J(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ee(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function te(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.each((e=>{s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function se(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ae(e){let{swiper:t,duration:s,transformEl:a,allSlides:i}=e;const{slides:r,activeIndex:n,$wrapperEl:l}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a?r.find(a):r:a?r.eq(n).find(a):r.eq(n),e.transitionEnd((()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)l.trigger(e[t])}))}}function ie(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(j).forEach((e=>{Object.keys(j[e]).forEach((t=>{V.prototype[t]=j[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],C=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?C.push(t):(t>c&&C.push(t),t<d&&E.push(t)));C.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{!1===t.params.navigation.enabled?h():(p(),l())})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}}));const h=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),u()};Object.assign(t.navigation,{enable:()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),p(),l()},disable:h,update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{!1===t.params.pagination.enabled?f():(h(),u(),p())})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}}));const f=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),m()};Object.assign(t.pagination,{enable:()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),h(),u(),p()},disable:f,render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el;if(!o)return;const d=o[0],c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!d)return;const u="on"===e?"addEventListener":"removeEventListener";l.touch?(d[u](a.start,x,c),d[u](a.move,y,c),d[u](a.end,E,p)):(d[u](i.start,x,c),n[u](i.move,y,c),n[u](i.end,E,p))}function T(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el)),i.addClass(t.isHorizontal()?a.horizontalClass:a.verticalClass);let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){const e=t.params.scrollbar,s=t.scrollbar.$el;s&&s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.params.scrollbar.el&&t.scrollbar.el&&C("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?S():(T(),v(),g())})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()}));const S=()=>{t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),$()};Object.assign(t.scrollbar,{enable:()=>{t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),T(),v(),g()},disable:S,updateSize:v,setTranslate:g,init:T,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function C(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function T(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,C,T,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),C=-y,T=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>C&&(h=C),g<E&&(g=E),g>T&&(g=T)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():T(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function L(){l&&(l=!1,k("off"))}function O(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function I(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&O()})),a("destroy",(()=>{I()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:O,disable:I,in:T,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("${l}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=Math.ceil(c),s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+t;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),a("destroy",(()=>{t.$el&&t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=()=>{t.a11y.clicked=!0},b=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.a11y.clicked=!1}))}))},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},y=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),e.slideRole&&o(d(t.slides),e.slideRole);const s=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;e.slideLabelMessage&&t.slides.each(((a,i)=>{const r=d(a),n=t.params.loop?parseInt(r.attr("data-swiper-slide-index"),10):i;p(r,e.slideLabelMessage.replace(/\{\{index\}\}/,n+1).replace(/\{\{slidesLength\}\}/,s))}))},E=()=>{const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var o;let d,u;o=r,a.attr("id",o),function(e,t){e.attr("aria-live",t)}(a,l),y(),t.navigation&&t.navigation.$nextEl&&(d=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(u=t.navigation.$prevEl),d&&d.length&&v(d,r,e.nextSlideMessage),u&&u.length&&v(u,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",x,!0),t.$el.on("pointerdown",w,!0),t.$el.on("pointerup",b,!0)};a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&E()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&y()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",x,!0),t.$el.off("pointerdown",w,!0),t.$el.off("pointerup",b,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){if(!s.size)return s.autoplay.running=!1,void(s.autoplay.paused=!1);const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.removeClass(r),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(r);else for(let e=0;e<i;e+=1)s.slides.eq(t.realIndex+e).addClass(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){let i,r,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();i=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,r=t.activeIndex>t.previousIndex?"next":"prev"}else i=t.realIndex,r=i>t.previousIndex?"next":"prev";l&&(i+="next"===r?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(i)<0&&(s.params.centeredSlides?i=i>o?i-Math.floor(a/2)+1:i+Math.floor(a/2)-1:i>o&&s.params.slidesPerGroup,s.slideTo(i,e?0:void 0))}}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:Q.bind(t),removeSlide:J.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),i=s?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===a.length&&(a=d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`),e.append(a)),0===i.length&&(i=d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`),e.append(i)),a.length&&(a[0].style.opacity=Math.max(-t,0)),i.length&&(i[0].style.opacity=Math.max(t,0))};te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:c}=t,p=t.params.cubeEffect,u=t.isHorizontal(),h=t.virtual&&t.params.virtual.enabled;let m,f=0;p.shadow&&(u?(m=s.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),s.append(m)),m.css({height:`${r}px`})):(m=e.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;h&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t[0].progress,1),-1);let c=0,m=0,g=0;s%4==0?(c=4*-n*o,g=0):(s-1)%4==0?(c=0,g=4*-n*o):(s-2)%4==0?(c=o+4*n*o,g=o):(s-3)%4==0&&(c=-o,g=3*o+4*o*n),l&&(c=-c),u||(m=c,c=0);const v=`rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;d<=1&&d>-1&&(f=90*s+90*d,l&&(f=90*-s-90*d)),t.transform(v),p.slideShadows&&i(t,d,u)}if(s.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),p.shadow)if(u)m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)}const g=c.isSafari||c.isWebView?-o/2:0;s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${g}px`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},recreateShadows:()=>{const e=t.isHorizontal();t.slides.each((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(d(t),s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===i.length&&(i=ie(a,e,t.isHorizontal()?"left":"top")),0===r.length&&(r=ie(a,e,t.isHorizontal()?"right":"bottom")),i.length&&(i[0].style.opacity=Math.max(-s,0)),r.length&&(r[0].style.opacity=Math.max(s,0))};te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e.eq(r);let l=n[0].progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n[0].progress,1),-1));const o=n[0].swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n[0].style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l,a);const h=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;se(a,n).transform(h)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},recreateShadows:()=>{const e=t.params.flipEffect;t.slides.each((s=>{const a=d(s);let r=a[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s.progress,1),-1)),i(a,r,e)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-a.perSlideRotate*c,v=a.perSlideOffset-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));
//# sourceMappingURL=swiper-bundle.min.js.map
/*! (c) Andrea Giammarchi @webreflection ISC */
!function(){"use strict";var e=function(e,t){var n=function(e){for(var t=0,n=e.length;t<n;t++)r(e[t])},r=function(e){var t=e.target,n=e.attributeName,r=e.oldValue;t.attributeChangedCallback(n,r,t.getAttribute(n))};return function(o,a){var l=o.constructor.observedAttributes;return l&&e(a).then((function(){new t(n).observe(o,{attributes:!0,attributeOldValue:!0,attributeFilter:l});for(var e=0,a=l.length;e<a;e++)o.hasAttribute(l[e])&&r({target:o,attributeName:l[e],oldValue:null})})),o}};function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,l=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw l}}}}
/*! (c) Andrea Giammarchi - ISC */var r=!0,o=!1,a="querySelectorAll",l="querySelectorAll",i=self,c=i.document,u=i.Element,s=i.MutationObserver,f=i.Set,d=i.WeakMap,h=function(e){return l in e},v=[].filter,p=function(e){var t=new d,i=function(n,r){var o;if(r)for(var a,l=function(e){return e.matches||e.webkitMatchesSelector||e.msMatchesSelector}(n),i=0,c=y.length;i<c;i++)l.call(n,a=y[i])&&(t.has(n)||t.set(n,new f),(o=t.get(n)).has(a)||(o.add(a),e.handle(n,r,a)));else t.has(n)&&(o=t.get(n),t.delete(n),o.forEach((function(t){e.handle(n,r,t)})))},p=function(e){for(var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=0,r=e.length;n<r;n++)i(e[n],t)},y=e.query,g=e.root||c,m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:MutationObserver,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:["*"],c=function t(o,l,i,c,u,s){var f,d=n(o);try{for(d.s();!(f=d.n()).done;){var h=f.value;(s||a in h)&&(u?i.has(h)||(i.add(h),c.delete(h),e(h,u)):c.has(h)||(c.add(h),i.delete(h),e(h,u)),s||t(h[a](l),l,i,c,u,r))}}catch(e){d.e(e)}finally{d.f()}},u=new l((function(e){if(i.length){var t,a=i.join(","),l=new Set,u=new Set,s=n(e);try{for(s.s();!(t=s.n()).done;){var f=t.value,d=f.addedNodes,h=f.removedNodes;c(h,a,l,u,o,o),c(d,a,l,u,r,o)}}catch(e){s.e(e)}finally{s.f()}}})),s=u.observe;return(u.observe=function(e){return s.call(u,e,{subtree:r,childList:r})})(t),u}(i,g,s,y),w=u.prototype.attachShadow;return w&&(u.prototype.attachShadow=function(e){var t=w.call(this,e);return m.observe(t),t}),y.length&&p(g[l](y)),{drop:function(e){for(var n=0,r=e.length;n<r;n++)t.delete(e[n])},flush:function(){for(var e=m.takeRecords(),t=0,n=e.length;t<n;t++)p(v.call(e[t].removedNodes,h),!1),p(v.call(e[t].addedNodes,h),!0)},observer:m,parse:p}},y=self,g=y.document,m=y.Map,w=y.MutationObserver,b=y.Object,E=y.Set,S=y.WeakMap,A=y.Element,M=y.HTMLElement,O=y.Node,N=y.Error,C=y.TypeError,T=y.Reflect,q=b.defineProperty,D=b.keys,I=b.getOwnPropertyNames,P=b.setPrototypeOf,k=!self.customElements,L=function(e){for(var t=D(e),n=[],r=new E,o=t.length,a=0;a<o;a++){n[a]=e[t[a]];try{delete e[t[a]]}catch(e){r.add(a)}}return function(){for(var a=0;a<o;a++)r.has(a)||(e[t[a]]=n[a])}};if(k){var x=function(){var e=this.constructor;if(!$.has(e))throw new C("Illegal constructor");var t=$.get(e);if(W)return F(W,t);var n=H.call(g,t);return F(P(n,e.prototype),t)},H=g.createElement,$=new m,_=new m,j=new m,R=new m,V=[],U=p({query:V,handle:function(e,t,n){var r=j.get(n);if(t&&!r.isPrototypeOf(e)){var o=L(e);W=P(e,r);try{new r.constructor}finally{W=null,o()}}var a="".concat(t?"":"dis","connectedCallback");a in r&&e[a]()}}).parse,W=null,B=function(e){if(!_.has(e)){var t,n=new Promise((function(e){t=e}));_.set(e,{$:n,_:t})}return _.get(e).$},F=e(B,w);self.customElements={define:function(e,t){if(R.has(e))throw new N('the name "'.concat(e,'" has already been used with this registry'));$.set(t,e),j.set(e,t.prototype),R.set(e,t),V.push(e),B(e).then((function(){U(g.querySelectorAll(e))})),_.get(e)._(t)},get:function(e){return R.get(e)},whenDefined:B},q(x.prototype=M.prototype,"constructor",{value:x}),self.HTMLElement=x,g.createElement=function(e,t){var n=t&&t.is,r=n?R.get(n):R.get(e);return r?new r:H.call(g,e)},"isConnected"in O.prototype||q(O.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else if(k=!self.customElements.get("extends-br"))try{var z=function e(){return self.Reflect.construct(HTMLBRElement,[],e)};z.prototype=HTMLLIElement.prototype;var G="extends-br";self.customElements.define("extends-br",z,{extends:"br"}),k=g.createElement("br",{is:G}).outerHTML.indexOf(G)<0;var J=self.customElements,K=J.get,Q=J.whenDefined;self.customElements.whenDefined=function(e){var t=this;return Q.call(this,e).then((function(n){return n||K.call(t,e)}))}}catch(e){}if(k){var X=function(e){var t=ae.get(e);ve(t.querySelectorAll(this),e.isConnected)},Y=self.customElements,Z=g.createElement,ee=Y.define,te=Y.get,ne=Y.upgrade,re=T||{construct:function(e){return e.call(this)}},oe=re.construct,ae=new S,le=new E,ie=new m,ce=new m,ue=new m,se=new m,fe=[],de=[],he=function(e){return se.get(e)||te.call(Y,e)},ve=p({query:de,handle:function(e,t,n){var r=ue.get(n);if(t&&!r.isPrototypeOf(e)){var o=L(e);we=P(e,r);try{new r.constructor}finally{we=null,o()}}var a="".concat(t?"":"dis","connectedCallback");a in r&&e[a]()}}).parse,pe=p({query:fe,handle:function(e,t){ae.has(e)&&(t?le.add(e):le.delete(e),de.length&&X.call(de,e))}}).parse,ye=A.prototype.attachShadow;ye&&(A.prototype.attachShadow=function(e){var t=ye.call(this,e);return ae.set(this,t),t});var ge=function(e){if(!ce.has(e)){var t,n=new Promise((function(e){t=e}));ce.set(e,{$:n,_:t})}return ce.get(e).$},me=e(ge,w),we=null;I(self).filter((function(e){return/^HTML.*Element$/.test(e)})).forEach((function(e){var t=self[e];function n(){var e=this.constructor;if(!ie.has(e))throw new C("Illegal constructor");var n=ie.get(e),r=n.is,o=n.tag;if(r){if(we)return me(we,r);var a=Z.call(g,o);return a.setAttribute("is",r),me(P(a,e.prototype),r)}return oe.call(this,t,[],e)}q(n.prototype=t.prototype,"constructor",{value:n}),q(self,e,{value:n})})),g.createElement=function(e,t){var n=t&&t.is;if(n){var r=se.get(n);if(r&&ie.get(r).tag===e)return new r}var o=Z.call(g,e);return n&&o.setAttribute("is",n),o},Y.get=he,Y.whenDefined=ge,Y.upgrade=function(e){var t=e.getAttribute("is");if(t){var n=se.get(t);if(n)return void me(P(e,n.prototype),t)}ne.call(Y,e)},Y.define=function(e,t,n){if(he(e))throw new N("'".concat(e,"' has already been defined as a custom element"));var r,o=n&&n.extends;ie.set(t,o?{is:e,tag:o}:{is:"",tag:e}),o?(r="".concat(o,'[is="').concat(e,'"]'),ue.set(r,t.prototype),se.set(e,t),de.push(r)):(ee.apply(Y,arguments),fe.push(r=e)),ge(e).then((function(){o?(ve(g.querySelectorAll(r)),le.forEach(X,[r])):pe(g.querySelectorAll(r))})),ce.get(e)._(t)}}}();
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).Motion={})}(this,(function(t){"use strict";const e=t=>t;let n=e;function s(t){let e;return()=>(void 0===e&&(e=t()),e)}const i=(t,e,n)=>{const s=e-t;return 0===s?1:(n-t)/s},r=t=>1e3*t,o=t=>t/1e3,a=s(()=>void 0!==window.ScrollTimeline);class l extends class{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,e){for(let n=0;n<this.animations.length;n++)this.animations[n][t]=e}attachTimeline(t,e){const n=this.animations.map(n=>a()&&n.attachTimeline?n.attachTimeline(t):"function"==typeof e?e(n):void 0);return()=>{n.forEach((t,e)=>{t&&t(),this.animations[e].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration);return t}runAll(t){this.animations.forEach(e=>e[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}{then(t,e){return Promise.all(this.animations).then(t).catch(e)}}function u(t,e){return t?t[e]||t.default||t:void 0}function c(t){let e=0;let n=t.next(e);for(;!n.done&&e<2e4;)e+=50,n=t.next(e);return e>=2e4?1/0:e}function h(t,e=100,n){const s=n({...t,keyframes:[0,e]}),i=Math.min(c(s),2e4);return{type:"keyframes",ease:t=>s.next(i*t).value/e,duration:o(i)}}function d(t){return"function"==typeof t}function p(t,e){t.timeline=e,t.onfinish=null}const f=t=>Array.isArray(t)&&"number"==typeof t[0],m={linearEasing:void 0};function g(t,e){const n=s(t);return()=>{var t;return null!==(t=m[e])&&void 0!==t?t:n()}}const y=g(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0},"linearEasing"),v=(t,e,n=10)=>{let s="";const r=Math.max(Math.round(e/n),2);for(let e=0;e<r;e++)s+=t(i(0,r-1,e))+", ";return`linear(${s.substring(0,s.length-2)})`};function w(t){return Boolean("function"==typeof t&&y()||!t||"string"==typeof t&&(t in x||y())||f(t)||Array.isArray(t)&&t.every(w))}const b=([t,e,n,s])=>`cubic-bezier(${t}, ${e}, ${n}, ${s})`,x={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:b([0,.65,.55,1]),circOut:b([.55,0,1,.45]),backIn:b([.31,.01,.66,-.59]),backOut:b([.33,1.53,.69,.99])};const T=!1;function S(t,e,n){var s;if(t instanceof Element)return[t];if("string"==typeof t){let i=document;e&&(i=e.current);const r=null!==(s=null==n?void 0:n[t])&&void 0!==s?s:i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t)}const V=(t,e,n)=>n>e?e:n<t?t:n;function A(t,e){return e?t*(1e3/e):0}function M(t,e,n){const s=Math.max(e-5,0);return A(n-t(s),e-s)}const P=100,k=10,F=1,C=0,E=800,O=.3,I=.3,R={granular:.01,default:2},B={granular:.005,default:.5},D=.01,L=10,W=.05,N=1;function K({duration:t=E,bounce:e=O,velocity:n=C,mass:s=F}){let i,a,l=1-e;l=V(W,N,l),t=V(D,L,o(t)),l<1?(i=e=>{const s=e*l,i=s*t;return.001-(s-n)/j(e,l)*Math.exp(-i)},a=e=>{const s=e*l*t,r=s*n+n,o=Math.pow(l,2)*Math.pow(e,2)*t,a=Math.exp(-s),u=j(Math.pow(e,2),l);return(.001-i(e)>0?-1:1)*((r-o)*a)/u}):(i=e=>Math.exp(-e*t)*((e-n)*t+1)-.001,a=e=>Math.exp(-e*t)*(t*t*(n-e)));const u=function(t,e,n){let s=n;for(let n=1;n<12;n++)s-=t(s)/e(s);return s}(i,a,5/t);if(t=r(t),isNaN(u))return{stiffness:P,damping:k,duration:t};{const e=Math.pow(u,2)*s;return{stiffness:e,damping:2*l*Math.sqrt(s*e),duration:t}}}function j(t,e){return t*Math.sqrt(1-e*e)}const z=["duration","bounce"],$=["stiffness","damping","mass"];function H(t,e){return e.some(e=>void 0!==t[e])}function U(t=I,e=O){const n="object"!=typeof t?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:s,restDelta:i}=n;const a=n.keyframes[0],l=n.keyframes[n.keyframes.length-1],u={done:!1,value:a},{stiffness:h,damping:d,mass:p,duration:f,velocity:m,isResolvedFromDuration:g}=function(t){let e={velocity:C,stiffness:P,damping:k,mass:F,isResolvedFromDuration:!1,...t};if(!H(t,$)&&H(t,z))if(t.visualDuration){const n=t.visualDuration,s=2*Math.PI/(1.2*n),i=s*s,r=2*V(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:F,stiffness:i,damping:r}}else{const n=K(t);e={...e,...n,mass:F},e.isResolvedFromDuration=!0}return e}({...n,velocity:-o(n.velocity||0)}),y=m||0,w=d/(2*Math.sqrt(h*p)),b=l-a,x=o(Math.sqrt(h/p)),T=Math.abs(b)<5;let S;if(s||(s=T?R.granular:R.default),i||(i=T?B.granular:B.default),w<1){const t=j(x,w);S=e=>{const n=Math.exp(-w*x*e);return l-n*((y+w*x*b)/t*Math.sin(t*e)+b*Math.cos(t*e))}}else if(1===w)S=t=>l-Math.exp(-x*t)*(b+(y+x*b)*t);else{const t=x*Math.sqrt(w*w-1);S=e=>{const n=Math.exp(-w*x*e),s=Math.min(t*e,300);return l-n*((y+w*x*b)*Math.sinh(s)+t*b*Math.cosh(s))/t}}const A={calculatedDuration:g&&f||null,next:t=>{const e=S(t);if(g)u.done=t>=f;else{let n=0;w<1&&(n=0===t?r(y):M(S,t,e));const o=Math.abs(n)<=s,a=Math.abs(l-e)<=i;u.done=o&&a}return u.value=u.done?l:e,u},toString:()=>{const t=Math.min(c(A),2e4),e=v(e=>A.next(t*e).value,t,30);return t+"ms "+e}};return A}const Y=(t,e,n)=>{const s=e-t;return((n-t)%s+s)%s+t},q=t=>Array.isArray(t)&&"number"!=typeof t[0];function X(t,e){return q(t)?t[Y(0,t.length,e)]:t}const G=(t,e,n)=>t+(e-t)*n;function Z(t,e){const n=t[t.length-1];for(let s=1;s<=e;s++){const r=i(0,e,s);t.push(G(n,1,r))}}function _(t){const e=[0];return Z(e,t.length-1),e}const J=t=>Boolean(t&&t.getVelocity);function Q(t){return"object"==typeof t&&!Array.isArray(t)}function tt(t,e,n,s){return"string"==typeof t&&Q(e)?S(t,n,s):t instanceof NodeList?Array.from(t):Array.isArray(t)?t:[t]}function et(t,e,n){return t*(e+1)}function nt(t,e,n,s){var i;return"number"==typeof e?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):"<"===e?n:null!==(i=s.get(e))&&void 0!==i?i:t}function st(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function it(t,e,n,s,i,r){!function(t,e,n){for(let s=0;s<t.length;s++){const i=t[s];i.at>e&&i.at<n&&(st(t,i),s--)}}(t,i,r);for(let o=0;o<e.length;o++)t.push({value:e[o],at:G(i,r,s[o]),easing:X(n,o)})}function rt(t,e){for(let n=0;n<t.length;n++)t[n]=t[n]/(e+1)}function ot(t,e){return t.at===e.at?null===t.value?1:null===e.value?-1:0:t.at-e.at}function at(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function lt(t,e){return e[t]||(e[t]=[]),e[t]}function ut(t){return Array.isArray(t)?t:[t]}function ct(t,e){return t&&t[e]?{...t,...t[e]}:{...t}}const ht=t=>"number"==typeof t,dt=t=>t.every(ht),pt=new WeakMap,ft=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],mt=new Set(ft),gt=new Set(["width","height","top","left","right","bottom",...ft]),yt=t=>(t=>Array.isArray(t))(t)?t[t.length-1]||0:t,vt=!1;const wt=["read","resolveKeyframes","update","preRender","render","postRender"];const{schedule:bt,cancel:xt,state:Tt,steps:St}=function(t,e){let n=!1,s=!0;const i={delta:0,timestamp:0,isProcessing:!1},r=()=>n=!0,o=wt.reduce((t,e)=>(t[e]=function(t){let e=new Set,n=new Set,s=!1,i=!1;const r=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(e){r.has(e)&&(l.schedule(e),t()),e(o)}const l={schedule:(t,i=!1,o=!1)=>{const a=o&&s?e:n;return i&&r.add(t),a.has(t)||a.add(t),t},cancel:t=>{n.delete(t),r.delete(t)},process:t=>{o=t,s?i=!0:(s=!0,[e,n]=[n,e],e.forEach(a),e.clear(),s=!1,i&&(i=!1,l.process(t)))}};return l}(r),t),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:h,postRender:d}=o,p=()=>{const r=performance.now();n=!1,i.delta=s?1e3/60:Math.max(Math.min(r-i.timestamp,40),1),i.timestamp=r,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),c.process(i),h.process(i),d.process(i),i.isProcessing=!1,n&&e&&(s=!1,t(p))};return{schedule:wt.reduce((e,r)=>{const a=o[r];return e[r]=(e,r=!1,o=!1)=>(n||(n=!0,s=!0,i.isProcessing||t(p)),a.schedule(e,r,o)),e},{}),cancel:t=>{for(let e=0;e<wt.length;e++)o[wt[e]].cancel(t)},state:i,steps:o}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:e,!0);let Vt;function At(){Vt=void 0}const Mt={now:()=>(void 0===Vt&&Mt.set(Tt.isProcessing||vt?Tt.timestamp:performance.now()),Vt),set:t=>{Vt=t,queueMicrotask(At)}};class Pt{constructor(){this.subscriptions=[]}add(t){var e,n;return e=this.subscriptions,n=t,-1===e.indexOf(n)&&e.push(n),()=>st(this.subscriptions,t)}notify(t,e,n){const s=this.subscriptions.length;if(s)if(1===s)this.subscriptions[0](t,e,n);else for(let i=0;i<s;i++){const s=this.subscriptions[i];s&&s(t,e,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}class kt{constructor(t,e={}){this.version="11.17.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(t,e=!0)=>{const n=Mt.now();this.updatedAt!==n&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(t),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),e&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){var e;this.current=t,this.updatedAt=Mt.now(),null===this.canTrackVelocity&&void 0!==t&&(this.canTrackVelocity=(e=this.current,!isNaN(parseFloat(e))))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new Pt);const n=this.events[t].add(e);return"change"===t?()=>{n(),bt.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}setWithVelocity(t,e,n){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-n}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Mt.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;const e=Math.min(this.updatedAt-this.prevUpdatedAt,30);return A(parseFloat(this.current)-parseFloat(this.prevFrameValue),e)}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ft(t,e){return new kt(t,e)}function Ct(t){const e=[{},{}];return null==t||t.values.forEach((t,n)=>{e[0][n]=t.get(),e[1][n]=t.getVelocity()}),e}function Et(t,e,n,s){if("function"==typeof e){const[i,r]=Ct(s);e=e(void 0!==n?n:t.custom,i,r)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){const[i,r]=Ct(s);e=e(void 0!==n?n:t.custom,i,r)}return e}function Ot(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Ft(n))}function It(t,e){const n=function(t,e,n){const s=t.getProps();return Et(s,e,void 0!==n?n:s.custom,t)}(t,e);let{transitionEnd:s={},transition:i={},...r}=n||{};r={...r,...s};for(const e in r){Ot(t,e,yt(r[e]))}}function Rt(t,e){const n=t.getValue("willChange");if(s=n,Boolean(J(s)&&s.add))return n.add(e);var s}const Bt=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Dt="data-"+Bt("framerAppearId");function Lt(t){return t.props[Dt]}const Wt=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t;function Nt(t,n,s,i){if(t===n&&s===i)return e;const r=e=>function(t,e,n,s,i){let r,o,a=0;do{o=e+(n-e)/2,r=Wt(o,s,i)-t,r>0?n=o:e=o}while(Math.abs(r)>1e-7&&++a<12);return o}(e,0,1,t,s);return t=>0===t||1===t?t:Wt(r(t),n,i)}const Kt=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,jt=t=>e=>1-t(1-e),zt=Nt(.33,1.53,.69,.99),$t=jt(zt),Ht=Kt($t),Ut=t=>(t*=2)<1?.5*$t(t):.5*(2-Math.pow(2,-10*(t-1))),Yt=t=>1-Math.sin(Math.acos(t)),qt=jt(Yt),Xt=Kt(Yt),Gt=t=>/^0[^.\s]+$/u.test(t);const Zt={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},_t={...Zt,transform:t=>V(0,1,t)},Jt={...Zt,default:1},Qt=t=>Math.round(1e5*t)/1e5,te=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const ee=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ne=(t,e)=>n=>Boolean("string"==typeof n&&ee.test(n)&&n.startsWith(t)||e&&!function(t){return null==t}(n)&&Object.prototype.hasOwnProperty.call(n,e)),se=(t,e,n)=>s=>{if("string"!=typeof s)return s;const[i,r,o,a]=s.match(te);return{[t]:parseFloat(i),[e]:parseFloat(r),[n]:parseFloat(o),alpha:void 0!==a?parseFloat(a):1}},ie={...Zt,transform:t=>Math.round((t=>V(0,255,t))(t))},re={test:ne("rgb","red"),parse:se("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:s=1})=>"rgba("+ie.transform(t)+", "+ie.transform(e)+", "+ie.transform(n)+", "+Qt(_t.transform(s))+")"};const oe={test:ne("#"),parse:function(t){let e="",n="",s="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),s=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),s=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,s+=s,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:i?parseInt(i,16)/255:1}},transform:re.transform},ae=t=>({test:e=>"string"==typeof e&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),le=ae("deg"),ue=ae("%"),ce=ae("px"),he=ae("vh"),de=ae("vw"),pe={...ue,parse:t=>ue.parse(t)/100,transform:t=>ue.transform(100*t)},fe={test:ne("hsl","hue"),parse:se("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:s=1})=>"hsla("+Math.round(t)+", "+ue.transform(Qt(e))+", "+ue.transform(Qt(n))+", "+Qt(_t.transform(s))+")"},me={test:t=>re.test(t)||oe.test(t)||fe.test(t),parse:t=>re.test(t)?re.parse(t):fe.test(t)?fe.parse(t):oe.parse(t),transform:t=>"string"==typeof t?t:t.hasOwnProperty("red")?re.transform(t):fe.transform(t)},ge=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const ye=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ve(t){const e=t.toString(),n=[],s={color:[],number:[],var:[]},i=[];let r=0;const o=e.replace(ye,t=>(me.test(t)?(s.color.push(r),i.push("color"),n.push(me.parse(t))):t.startsWith("var(")?(s.var.push(r),i.push("var"),n.push(t)):(s.number.push(r),i.push("number"),n.push(parseFloat(t))),++r,"${}")).split("${}");return{values:n,split:o,indexes:s,types:i}}function we(t){return ve(t).values}function be(t){const{split:e,types:n}=ve(t),s=e.length;return t=>{let i="";for(let r=0;r<s;r++)if(i+=e[r],void 0!==t[r]){const e=n[r];i+="number"===e?Qt(t[r]):"color"===e?me.transform(t[r]):t[r]}return i}}const xe=t=>"number"==typeof t?0:t;const Te={test:function(t){var e,n;return isNaN(t)&&"string"==typeof t&&((null===(e=t.match(te))||void 0===e?void 0:e.length)||0)+((null===(n=t.match(ge))||void 0===n?void 0:n.length)||0)>0},parse:we,createTransformer:be,getAnimatableNone:function(t){const e=we(t);return be(t)(e.map(xe))}},Se=new Set(["brightness","contrast","saturate","opacity"]);function Ve(t){const[e,n]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;const[s]=n.match(te)||[];if(!s)return t;const i=n.replace(s,"");let r=Se.has(e)?1:0;return s!==n&&(r*=100),e+"("+r+i+")"}const Ae=/\b([a-z-]*)\(.*?\)/gu,Me={...Te,getAnimatableNone:t=>{const e=t.match(Ae);return e?e.map(Ve).join(" "):t}},Pe={borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,backgroundPositionX:ce,backgroundPositionY:ce},ke={rotate:le,rotateX:le,rotateY:le,rotateZ:le,scale:Jt,scaleX:Jt,scaleY:Jt,scaleZ:Jt,skew:le,skewX:le,skewY:le,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:_t,originX:pe,originY:pe,originZ:ce},Fe={...Zt,transform:Math.round},Ce={...Pe,...ke,zIndex:Fe,size:ce,fillOpacity:_t,strokeOpacity:_t,numOctaves:Fe},Ee={...Ce,color:me,backgroundColor:me,outlineColor:me,fill:me,stroke:me,borderColor:me,borderTopColor:me,borderRightColor:me,borderBottomColor:me,borderLeftColor:me,filter:Me,WebkitFilter:Me},Oe=t=>Ee[t];function Ie(t,e){let n=Oe(t);return n!==Me&&(n=Te),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Re=new Set(["auto","none","0"]);const Be=t=>t===Zt||t===ce,De=(t,e)=>parseFloat(t.split(", ")[e]),Le=(t,e)=>(n,{transform:s})=>{if("none"===s||!s)return 0;const i=s.match(/^matrix3d\((.+)\)$/u);if(i)return De(i[1],e);{const e=s.match(/^matrix\((.+)\)$/u);return e?De(e[1],t):0}},We=new Set(["x","y","z"]),Ne=ft.filter(t=>!We.has(t));const Ke={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Le(4,13),y:Le(5,14)};Ke.translateX=Ke.x,Ke.translateY=Ke.y;const je=new Set;let ze=!1,$e=!1;function He(){if($e){const t=Array.from(je).filter(t=>t.needsMeasurement),e=new Set(t.map(t=>t.element)),n=new Map;e.forEach(t=>{const e=function(t){const e=[];return Ne.forEach(n=>{const s=t.getValue(n);void 0!==s&&(e.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),e}(t);e.length&&(n.set(t,e),t.render())}),t.forEach(t=>t.measureInitialState()),e.forEach(t=>{t.render();const e=n.get(t);e&&e.forEach(([e,n])=>{var s;null===(s=t.getValue(e))||void 0===s||s.set(n)})}),t.forEach(t=>t.measureEndState()),t.forEach(t=>{void 0!==t.suspendedScrollY&&window.scrollTo(0,t.suspendedScrollY)})}$e=!1,ze=!1,je.forEach(t=>t.complete()),je.clear()}function Ue(){je.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&($e=!0)})}class Ye{constructor(t,e,n,s,i,r=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=n,this.motionValue=s,this.element=i,this.isAsync=r}scheduleResolve(){this.isScheduled=!0,this.isAsync?(je.add(this),ze||(ze=!0,bt.read(Ue),bt.resolveKeyframes(He))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:e,element:n,motionValue:s}=this;for(let i=0;i<t.length;i++)if(null===t[i])if(0===i){const i=null==s?void 0:s.get(),r=t[t.length-1];if(void 0!==i)t[0]=i;else if(n&&e){const s=n.readValue(e,r);null!=s&&(t[0]=s)}void 0===t[0]&&(t[0]=r),s&&void 0===i&&s.set(t[0])}else t[i]=t[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),je.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,je.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const qe=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Xe=t=>e=>"string"==typeof e&&e.startsWith(t),Ge=Xe("--"),Ze=Xe("var(--"),_e=t=>!!Ze(t)&&Je.test(t.split("/*")[0].trim()),Je=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Qe=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function tn(t,e,n=1){const[s,i]=function(t){const e=Qe.exec(t);if(!e)return[,];const[,n,s,i]=e;return["--"+(null!=n?n:s),i]}(t);if(!s)return;const r=window.getComputedStyle(e).getPropertyValue(s);if(r){const t=r.trim();return qe(t)?parseFloat(t):t}return _e(i)?tn(i,e,n+1):i}const en=t=>e=>e.test(t),nn=[Zt,ce,ue,le,de,he,{test:t=>"auto"===t,parse:t=>t}],sn=t=>nn.find(en(t));class rn extends Ye{constructor(t,e,n,s,i){super(t,e,n,s,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:e,name:n}=this;if(!e||!e.current)return;super.readKeyframes();for(let n=0;n<t.length;n++){let s=t[n];if("string"==typeof s&&(s=s.trim(),_e(s))){const i=tn(s,e.current);void 0!==i&&(t[n]=i),n===t.length-1&&(this.finalKeyframe=s)}}if(this.resolveNoneKeyframes(),!gt.has(n)||2!==t.length)return;const[s,i]=t,r=sn(s),o=sn(i);if(r!==o)if(Be(r)&&Be(o))for(let e=0;e<t.length;e++){const n=t[e];"string"==typeof n&&(t[e]=parseFloat(n))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:e}=this,n=[];for(let e=0;e<t.length;e++)("number"==typeof(s=t[e])?0===s:null===s||"none"===s||"0"===s||Gt(s))&&n.push(e);var s;n.length&&function(t,e,n){let s=0,i=void 0;for(;s<t.length&&!i;){const e=t[s];"string"==typeof e&&!Re.has(e)&&ve(e).values.length&&(i=t[s]),s++}if(i&&n)for(const s of e)t[s]=Ie(n,i)}(t,n,e)}measureInitialState(){const{element:t,unresolvedKeyframes:e,name:n}=this;if(!t||!t.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ke[n](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;const s=e[e.length-1];void 0!==s&&t.getValue(n,s).jump(s,!1)}measureEndState(){var t;const{element:e,name:n,unresolvedKeyframes:s}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const r=s.length-1,o=s[r];s[r]=Ke[n](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),(null===(t=this.removedTransforms)||void 0===t?void 0:t.length)&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}}const on=(t,e)=>"zIndex"!==e&&(!("number"!=typeof t&&!Array.isArray(t))||!("string"!=typeof t||!Te.test(t)&&"0"!==t||t.startsWith("url(")));function an(t,e,n,s){const i=t[0];if(null===i)return!1;if("display"===e||"visibility"===e)return!0;const r=t[t.length-1],o=on(i,e),a=on(r,e);return!(!o||!a)&&(function(t){const e=t[0];if(1===t.length)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}(t)||("spring"===n||d(n))&&s)}const ln=t=>null!==t;function un(t,{repeat:e,repeatType:n="loop"},s){const i=t.filter(ln),r=e&&"loop"!==n&&e%2==1?0:i.length-1;return r&&void 0!==s?s:i[r]}class cn{constructor({autoplay:t=!0,delay:e=0,type:n="keyframes",repeat:s=0,repeatDelay:i=0,repeatType:r="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Mt.now(),this.options={autoplay:t,delay:e,type:n,repeat:s,repeatDelay:i,repeatType:r,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(Ue(),He()),this._resolved}onKeyframesResolved(t,e){this.resolvedAt=Mt.now(),this.hasAttemptedResolve=!0;const{name:n,type:s,velocity:i,delay:r,onComplete:o,onUpdate:a,isGenerator:l}=this.options;if(!l&&!an(t,n,s,i)){if(!r)return null==a||a(un(t,this.options,e)),null==o||o(),void this.resolveFinishedPromise();this.options.duration=0}const u=this.initPlayback(t,e);!1!==u&&(this._resolved={keyframes:t,finalKeyframe:e,...u},this.onPostResolved())}onPostResolved(){}then(t,e){return this.currentFinishedPromise.then(t,e)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function hn(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function dn(t,e){return n=>n>0?e:t}const pn=(t,e,n)=>{const s=t*t,i=n*(e*e-s)+s;return i<0?0:Math.sqrt(i)},fn=[oe,re,fe];function mn(t){const e=(n=t,fn.find(t=>t.test(n)));var n;if(!Boolean(e))return!1;let s=e.parse(t);return e===fe&&(s=function({hue:t,saturation:e,lightness:n,alpha:s}){t/=360,n/=100;let i=0,r=0,o=0;if(e/=100){const s=n<.5?n*(1+e):n+e-n*e,a=2*n-s;i=hn(a,s,t+1/3),r=hn(a,s,t),o=hn(a,s,t-1/3)}else i=r=o=n;return{red:Math.round(255*i),green:Math.round(255*r),blue:Math.round(255*o),alpha:s}}(s)),s}const gn=(t,e)=>{const n=mn(t),s=mn(e);if(!n||!s)return dn(t,e);const i={...n};return t=>(i.red=pn(n.red,s.red,t),i.green=pn(n.green,s.green,t),i.blue=pn(n.blue,s.blue,t),i.alpha=G(n.alpha,s.alpha,t),re.transform(i))},yn=(t,e)=>n=>e(t(n)),vn=(...t)=>t.reduce(yn),wn=new Set(["none","hidden"]);function bn(t,e){return n=>G(t,e,n)}function xn(t){return"number"==typeof t?bn:"string"==typeof t?_e(t)?dn:me.test(t)?gn:Vn:Array.isArray(t)?Tn:"object"==typeof t?me.test(t)?gn:Sn:dn}function Tn(t,e){const n=[...t],s=n.length,i=t.map((t,n)=>xn(t)(t,e[n]));return t=>{for(let e=0;e<s;e++)n[e]=i[e](t);return n}}function Sn(t,e){const n={...t,...e},s={};for(const i in n)void 0!==t[i]&&void 0!==e[i]&&(s[i]=xn(t[i])(t[i],e[i]));return t=>{for(const e in s)n[e]=s[e](t);return n}}const Vn=(t,e)=>{const n=Te.createTransformer(e),s=ve(t),i=ve(e);return s.indexes.var.length===i.indexes.var.length&&s.indexes.color.length===i.indexes.color.length&&s.indexes.number.length>=i.indexes.number.length?wn.has(t)&&!i.values.length||wn.has(e)&&!s.values.length?function(t,e){return wn.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}(t,e):vn(Tn(function(t,e){var n;const s=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const o=e.types[r],a=t.indexes[o][i[o]],l=null!==(n=t.values[a])&&void 0!==n?n:0;s[r]=l,i[o]++}return s}(s,i),i.values),n):dn(t,e)};function An(t,e,n){if("number"==typeof t&&"number"==typeof e&&"number"==typeof n)return G(t,e,n);return xn(t)(t,e)}function Mn({keyframes:t,velocity:e=0,power:n=.8,timeConstant:s=325,bounceDamping:i=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const h=t[0],d={done:!1,value:h},p=t=>void 0===a?l:void 0===l||Math.abs(a-t)<Math.abs(l-t)?a:l;let f=n*e;const m=h+f,g=void 0===o?m:o(m);g!==m&&(f=g-h);const y=t=>-f*Math.exp(-t/s),v=t=>g+y(t),w=t=>{const e=y(t),n=v(t);d.done=Math.abs(e)<=u,d.value=d.done?g:n};let b,x;const T=t=>{var e;(e=d.value,void 0!==a&&e<a||void 0!==l&&e>l)&&(b=t,x=U({keyframes:[d.value,p(d.value)],velocity:M(v,t,d.value),damping:i,stiffness:r,restDelta:u,restSpeed:c}))};return T(0),{calculatedDuration:null,next:t=>{let e=!1;return x||void 0!==b||(e=!0,w(t),T(t)),void 0!==b&&t>=b?x.next(t-b):(!e&&w(t),d)}}}const Pn=Nt(.42,0,1,1),kn=Nt(0,0,.58,1),Fn=Nt(.42,0,.58,1),Cn={linear:e,easeIn:Pn,easeInOut:Fn,easeOut:kn,circIn:Yt,circInOut:Xt,circOut:qt,backIn:$t,backInOut:Ht,backOut:zt,anticipate:Ut},En=t=>{if(f(t)){n(4===t.length);const[e,s,i,r]=t;return Nt(e,s,i,r)}return"string"==typeof t?Cn[t]:t};function On(t,s,{clamp:r=!0,ease:o,mixer:a}={}){const l=t.length;if(n(l===s.length),1===l)return()=>s[0];if(2===l&&s[0]===s[1])return()=>s[1];const u=t[0]===t[1];t[0]>t[l-1]&&(t=[...t].reverse(),s=[...s].reverse());const c=function(t,n,s){const i=[],r=s||An,o=t.length-1;for(let s=0;s<o;s++){let o=r(t[s],t[s+1]);if(n){const t=Array.isArray(n)?n[s]||e:n;o=vn(t,o)}i.push(o)}return i}(s,o,a),h=c.length,d=e=>{if(u&&e<t[0])return s[0];let n=0;if(h>1)for(;n<t.length-2&&!(e<t[n+1]);n++);const r=i(t[n],t[n+1],e);return c[n](r)};return r?e=>d(V(t[0],t[l-1],e)):d}function In({duration:t=300,keyframes:e,times:n,ease:s="easeInOut"}){const i=q(s)?s.map(En):En(s),r={done:!1,value:e[0]},o=On(function(t,e){return t.map(t=>t*e)}(n&&n.length===e.length?n:_(e),t),e,{ease:Array.isArray(i)?i:(a=e,l=i,a.map(()=>l||Fn).splice(0,a.length-1))});var a,l;return{calculatedDuration:t,next:e=>(r.value=o(e),r.done=e>=t,r)}}const Rn=t=>{const e=({timestamp:e})=>t(e);return{start:()=>bt.update(e,!0),stop:()=>xt(e),now:()=>Tt.isProcessing?Tt.timestamp:Mt.now()}},Bn={decay:Mn,inertia:Mn,tween:In,keyframes:In,spring:U},Dn=t=>t/100;class Ln extends cn{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:t}=this.options;t&&t()};const{name:e,motionValue:n,element:s,keyframes:i}=this.options,r=(null==s?void 0:s.KeyframeResolver)||Ye;this.resolver=new r(i,(t,e)=>this.onKeyframesResolved(t,e),e,n,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:e="keyframes",repeat:n=0,repeatDelay:s=0,repeatType:i,velocity:r=0}=this.options,o=d(e)?e:Bn[e]||In;let a,l;o!==In&&"number"!=typeof t[0]&&(a=vn(Dn,An(t[0],t[1])),t=[0,100]);const u=o({...this.options,keyframes:t});"mirror"===i&&(l=o({...this.options,keyframes:[...t].reverse(),velocity:-r})),null===u.calculatedDuration&&(u.calculatedDuration=c(u));const{calculatedDuration:h}=u,p=h+s;return{generator:u,mirroredGenerator:l,mapPercentToKeyframes:a,calculatedDuration:h,resolvedDuration:p,totalDuration:p*(n+1)-s}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&t?this.state=this.pendingPlayState:this.pause()}tick(t,e=!1){const{resolved:n}=this;if(!n){const{keyframes:t}=this.options;return{done:!0,value:t[t.length-1]}}const{finalKeyframe:s,generator:i,mirroredGenerator:r,mapPercentToKeyframes:o,keyframes:a,calculatedDuration:l,totalDuration:u,resolvedDuration:c}=n;if(null===this.startTime)return i.next(0);const{delay:h,repeat:d,repeatType:p,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),e?this.currentTime=t:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-h*(this.speed>=0?1:-1),y=this.speed>=0?g<0:g>u;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u);let v=this.currentTime,w=i;if(d){const t=Math.min(this.currentTime,u)/c;let e=Math.floor(t),n=t%1;!n&&t>=1&&(n=1),1===n&&e--,e=Math.min(e,d+1);Boolean(e%2)&&("reverse"===p?(n=1-n,f&&(n-=f/c)):"mirror"===p&&(w=r)),v=V(0,1,n)*c}const b=y?{done:!1,value:a[0]}:w.next(v);o&&(b.value=o(b.value));let{done:x}=b;y||null===l||(x=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const T=null===this.holdTime&&("finished"===this.state||"running"===this.state&&x);return T&&void 0!==s&&(b.value=un(a,this.options,s)),m&&m(b.value),T&&this.finish(),b}get duration(){const{resolved:t}=this;return t?o(t.calculatedDuration):0}get time(){return o(this.currentTime)}set time(t){t=r(t),this.currentTime=t,null!==this.holdTime||0===this.speed?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=o(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:t=Rn,onPlay:e,startTime:n}=this.options;this.driver||(this.driver=t(t=>this.tick(t))),e&&e();const s=this.driver.now();null!==this.holdTime?this.startTime=s-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=s):this.startTime=null!=n?n:this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;this._resolved?(this.state="paused",this.holdTime=null!==(t=this.currentTime)&&void 0!==t?t:0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Wn=new Set(["opacity","clipPath","filter","transform"]);function Nn(t,e,n,{delay:s=0,duration:i=300,repeat:r=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=function t(e,n){return e?"function"==typeof e&&y()?v(e,n):f(e)?b(e):Array.isArray(e)?e.map(e=>t(e,n)||x.easeOut):x[e]:void 0}(a,i);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:s,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:r+1,direction:"reverse"===o?"alternate":"normal"})}const Kn=s(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));const jn={anticipate:Ut,backInOut:Ht,circInOut:Xt};class zn extends cn{constructor(t){super(t);const{name:e,motionValue:n,element:s,keyframes:i}=this.options;this.resolver=new rn(i,(t,e)=>this.onKeyframesResolved(t,e),e,n,s),this.resolver.scheduleResolve()}initPlayback(t,e){var n;let{duration:s=300,times:i,ease:r,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!(null===(n=a.owner)||void 0===n?void 0:n.current))return!1;var c;if("string"==typeof r&&y()&&r in jn&&(r=jn[r]),d((c=this.options).type)||"spring"===c.type||!w(c.ease)){const{onComplete:e,onUpdate:n,motionValue:a,element:l,...u}=this.options,c=function(t,e){const n=new Ln({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:t[0]};const i=[];let r=0;for(;!s.done&&r<2e4;)s=n.sample(r),i.push(s.value),r+=10;return{times:void 0,keyframes:i,duration:r-10,ease:"linear"}}(t,u);1===(t=c.keyframes).length&&(t[1]=t[0]),s=c.duration,i=c.times,r=c.ease,o="keyframes"}const h=Nn(a.owner.current,l,t,{...this.options,duration:s,times:i,ease:r});return h.startTime=null!=u?u:this.calcStartTime(),this.pendingTimeline?(p(h,this.pendingTimeline),this.pendingTimeline=void 0):h.onfinish=()=>{const{onComplete:n}=this.options;a.set(un(t,this.options,e)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:h,duration:s,times:i,type:o,ease:r,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:e}=t;return o(e)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:e}=t;return o(e.currentTime||0)}set time(t){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.currentTime=r(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:e}=t;return e.playbackRate}set speed(t){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:e}=t;return e.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:e}=t;return e.startTime}attachTimeline(t){if(this._resolved){const{resolved:n}=this;if(!n)return e;const{animation:s}=n;p(s,t)}else this.pendingTimeline=t;return e}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:e}=t;"finished"===e.playState&&this.updateFinishedPromise(),e.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:e}=t;e.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:e,keyframes:n,duration:s,type:i,ease:o,times:a}=t;if("idle"===e.playState||"finished"===e.playState)return;if(this.time){const{motionValue:t,onUpdate:e,onComplete:l,element:u,...c}=this.options,h=new Ln({...c,keyframes:n,duration:s,type:i,ease:o,times:a,isGenerator:!0}),d=r(this.time);t.setWithVelocity(h.sample(d-10).value,h.sample(d).value,10)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:e,name:n,repeatDelay:s,repeatType:i,damping:r,type:o}=t;return Kn()&&n&&Wn.has(n)&&e&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate&&!s&&"mirror"!==i&&0!==r&&"inertia"!==o}}const $n={type:"spring",stiffness:500,damping:25,restSpeed:10},Hn={type:"keyframes",duration:.8},Un={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Yn=(t,{keyframes:e})=>e.length>2?Hn:mt.has(t)?t.startsWith("scale")?{type:"spring",stiffness:550,damping:0===e[1]?2*Math.sqrt(550):30,restSpeed:10}:$n:Un;const qn=(t,e,n,s={},i,o)=>a=>{const c=u(s,t)||{},h=c.delay||s.delay||0;let{elapsed:d=0}=s;d-=r(h);let p={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-d,onUpdate:t=>{e.set(t),c.onUpdate&&c.onUpdate(t)},onComplete:()=>{a(),c.onComplete&&c.onComplete()},name:t,motionValue:e,element:o?void 0:i};(function({when:t,delay:e,delayChildren:n,staggerChildren:s,staggerDirection:i,repeat:r,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length})(c)||(p={...p,...Yn(t,p)}),p.duration&&(p.duration=r(p.duration)),p.repeatDelay&&(p.repeatDelay=r(p.repeatDelay)),void 0!==p.from&&(p.keyframes[0]=p.from);let f=!1;if((!1===p.type||0===p.duration&&!p.repeatDelay)&&(p.duration=0,0===p.delay&&(f=!0)),f&&!o&&void 0!==e.get()){const t=un(p.keyframes,c);if(void 0!==t)return bt.update(()=>{p.onUpdate(t),p.onComplete()}),new l([])}return!o&&zn.supports(p)?new zn(p):new Ln(p)};function Xn({protectedKeys:t,needsAnimating:e},n){const s=t.hasOwnProperty(n)&&!0!==e[n];return e[n]=!1,s}function Gn(t,e,{delay:n=0,transitionOverride:s,type:i}={}){var r;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;s&&(o=s);const c=[],h=i&&t.animationState&&t.animationState.getState()[i];for(const e in l){const s=t.getValue(e,null!==(r=t.latestValues[e])&&void 0!==r?r:null),i=l[e];if(void 0===i||h&&Xn(h,e))continue;const a={delay:n,...u(o||{},e)};let d=!1;if(window.MotionHandoffAnimation){const n=Lt(t);if(n){const t=window.MotionHandoffAnimation(n,e,bt);null!==t&&(a.startTime=t,d=!0)}}Rt(t,e),s.start(qn(e,s,i,t.shouldReduceMotion&&gt.has(e)?{type:!1}:a,t,d));const p=s.animation;p&&c.push(p)}return a&&Promise.all(c).then(()=>{bt.update(()=>{a&&It(t,a)})}),c}const Zn=()=>({x:{min:0,max:0},y:{min:0,max:0}}),_n={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Jn={};for(const t in _n)Jn[t]={isEnabled:e=>_n[t].some(t=>!!e[t])};const Qn="undefined"!=typeof window,ts={current:null},es={current:!1};const ns=[...nn,me,Te];const ss=["initial","animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"];function is(t){return null!==(e=t.animate)&&"object"==typeof e&&"function"==typeof e.start||ss.some(e=>function(t){return"string"==typeof t||Array.isArray(t)}(t[e]));var e}const rs=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class os{scrapeMotionValuesFromProps(t,e,n){return{}}constructor({parent:t,props:e,presenceContext:n,reducedMotionConfig:s,blockInitialAnimation:i,visualState:r},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ye,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const t=Mt.now();this.renderScheduledAt<t&&(this.renderScheduledAt=t,bt.render(this.render,!1,!0))};const{latestValues:a,renderState:l}=r;this.latestValues=a,this.baseTarget={...a},this.initialValues=e.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=e,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.blockInitialAnimation=Boolean(i),this.isControllingVariants=is(e),this.isVariantNode=function(t){return Boolean(is(t)||t.variants)}(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(e,{},this);for(const t in c){const e=c[t];void 0!==a[t]&&J(e)&&e.set(a[t],!1)}}mount(t){this.current=t,pt.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,e)=>this.bindToMotionValue(e,t)),es.current||function(){if(es.current=!0,Qn)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>ts.current=t.matches;t.addListener(e),e()}else ts.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||ts.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){pt.delete(this.current),this.projection&&this.projection.unmount(),xt(this.notifyUpdate),xt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const n=mt.has(t),s=e.on("change",e=>{this.latestValues[t]=e,this.props.onUpdate&&bt.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=e.on("renderRequest",this.scheduleRender);let r;window.MotionCheckAppearSync&&(r=window.MotionCheckAppearSync(this,t,e)),this.valueSubscriptions.set(t,()=>{s(),i(),r&&r(),e.owner&&e.stop()})}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation";for(t in Jn){const e=Jn[t];if(!e)continue;const{isEnabled:n,Feature:s}=e;if(!this.features[t]&&s&&n(this.props)&&(this.features[t]=new s(this)),this.features[t]){const e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let e=0;e<rs.length;e++){const n=rs[e];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);const s=t["on"+n];s&&(this.propEventSubscriptions[n]=this.on(n,s))}this.prevMotionValues=function(t,e,n){for(const s in e){const i=e[s],r=n[s];if(J(i))t.addValue(s,i);else if(J(r))t.addValue(s,Ft(i,{owner:t}));else if(r!==i)if(t.hasValue(s)){const e=t.getValue(s);!0===e.liveStyle?e.jump(i):e.hasAnimated||e.set(i)}else{const e=t.getStaticValue(s);t.addValue(s,Ft(void 0!==e?e:i,{owner:t}))}}for(const s in n)void 0===e[s]&&t.removeValue(s);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){const n=this.values.get(t);e!==n&&(n&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return void 0===n&&void 0!==e&&(n=Ft(null===e?void 0:e,{owner:this}),this.addValue(t,n)),n}readValue(t,e){var n;let s=void 0===this.latestValues[t]&&this.current?null!==(n=this.getBaseTargetFromProps(this.props,t))&&void 0!==n?n:this.readValueFromInstance(this.current,t,this.options):this.latestValues[t];var i;return null!=s&&("string"==typeof s&&(qe(s)||Gt(s))?s=parseFloat(s):(i=s,!ns.find(en(i))&&Te.test(e)&&(s=Ie(t,e))),this.setBaseTarget(t,J(s)?s.get():s)),J(s)?s.get():s}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;const{initial:n}=this.props;let s;if("string"==typeof n||"object"==typeof n){const i=Et(this.props,n,null===(e=this.presenceContext)||void 0===e?void 0:e.custom);i&&(s=i[t])}if(n&&void 0!==s)return s;const i=this.getBaseTargetFromProps(this.props,t);return void 0===i||J(i)?void 0!==this.initialValues[t]&&void 0===s?void 0:this.baseTarget[t]:i}on(t,e){return this.events[t]||(this.events[t]=new Pt),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class as extends os{constructor(){super(...arguments),this.KeyframeResolver=rn}sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:n}){delete e[t],delete n[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;J(t)&&(this.childSubscription=t.on("change",t=>{this.current&&(this.current.textContent=""+t)}))}}const ls=(t,e)=>e&&"number"==typeof t?e.transform(t):t,us={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cs=ft.length;function hs(t,e,n){const{style:s,vars:i,transformOrigin:r}=t;let o=!1,a=!1;for(const t in e){const n=e[t];if(mt.has(t))o=!0;else if(Ge(t))i[t]=n;else{const e=ls(n,Ce[t]);t.startsWith("origin")?(a=!0,r[t]=e):s[t]=e}}if(e.transform||(o||n?s.transform=function(t,e,n){let s="",i=!0;for(let r=0;r<cs;r++){const o=ft[r],a=t[o];if(void 0===a)continue;let l=!0;if(l="number"==typeof a?a===(o.startsWith("scale")?1:0):0===parseFloat(a),!l||n){const t=ls(a,Ce[o]);if(!l){i=!1;s+=`${us[o]||o}(${t}) `}n&&(e[o]=t)}}return s=s.trim(),n?s=n(e,i?"":s):i&&(s="none"),s}(e,t.transform,n):s.transform&&(s.transform="none")),a){const{originX:t="50%",originY:e="50%",originZ:n=0}=r;s.transformOrigin=`${t} ${e} ${n}`}}function ds(t,e,n){return"string"==typeof t?t:ce.transform(e+n*t)}const ps={offset:"stroke-dashoffset",array:"stroke-dasharray"},fs={offset:"strokeDashoffset",array:"strokeDasharray"};function ms(t,{attrX:e,attrY:n,attrScale:s,originX:i,originY:r,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,h){if(hs(t,u,h),c)return void(t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox));t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:f}=t;d.transform&&(f&&(p.transform=d.transform),delete d.transform),f&&(void 0!==i||void 0!==r||p.transform)&&(p.transformOrigin=function(t,e,n){return`${ds(e,t.x,t.width)} ${ds(n,t.y,t.height)}`}(f,void 0!==i?i:.5,void 0!==r?r:.5)),void 0!==e&&(d.x=e),void 0!==n&&(d.y=n),void 0!==s&&(d.scale=s),void 0!==o&&function(t,e,n=1,s=0,i=!0){t.pathLength=1;const r=i?ps:fs;t[r.offset]=ce.transform(-s);const o=ce.transform(e),a=ce.transform(n);t[r.array]=`${o} ${a}`}(d,o,a,l,!1)}const gs=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ys(t,{style:e,vars:n},s,i){Object.assign(t.style,e,i&&i.getProjectionStyles(s));for(const e in n)t.style.setProperty(e,n[e])}const vs={};function ws(t,{layout:e,layoutId:n}){return mt.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!vs[t]||"opacity"===t)}function bs(t,e,n){var s;const{style:i}=t,r={};for(const o in i)(J(i[o])||e.style&&J(e.style[o])||ws(o,t)||void 0!==(null===(s=null==n?void 0:n.getValue(o))||void 0===s?void 0:s.liveStyle))&&(r[o]=i[o]);return r}class xs extends as{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Zn}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(mt.has(e)){const t=Oe(e);return t&&t.default||0}return e=gs.has(e)?e:Bt(e),t.getAttribute(e)}scrapeMotionValuesFromProps(t,e,n){return function(t,e,n){const s=bs(t,e,n);for(const n in t)if(J(t[n])||J(e[n])){s[-1!==ft.indexOf(n)?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n]=t[n]}return s}(t,e,n)}build(t,e,n){ms(t,e,this.isSVGTag,n.transformTemplate)}renderInstance(t,e,n,s){!function(t,e,n,s){ys(t,e,void 0,s);for(const n in e.attrs)t.setAttribute(gs.has(n)?n:Bt(n),e.attrs[n])}(t,e,0,s)}mount(t){var e;this.isSVGTag="string"==typeof(e=t.tagName)&&"svg"===e.toLowerCase(),super.mount(t)}}class Ts extends as{constructor(){super(...arguments),this.type="html",this.renderInstance=ys}readValueFromInstance(t,e){if(mt.has(e)){const t=Oe(e);return t&&t.default||0}{const s=(n=t,window.getComputedStyle(n)),i=(Ge(e)?s.getPropertyValue(e):s[e])||0;return"string"==typeof i?i.trim():i}var n}measureInstanceViewportBox(t,{transformPagePoint:e}){return function(t,e){return function({top:t,left:e,right:n,bottom:s}){return{x:{min:e,max:n},y:{min:t,max:s}}}(function(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),s=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}(t.getBoundingClientRect(),e))}(t,e)}build(t,e,n){hs(t,e,n.transformTemplate)}scrapeMotionValuesFromProps(t,e,n){return bs(t,e,n)}}class Ss extends os{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,e){if(function(t,e){return t in e}(e,t)){const n=t[e];if("string"==typeof n||"number"==typeof n)return n}}getBaseTargetFromProps(){}removeValueFromRenderState(t,e){delete e.output[t]}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}build(t,e){Object.assign(t.output,e)}renderInstance(t,{output:e}){Object.assign(t,e)}sortInstanceNodePosition(){return 0}}function Vs(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=function(t){return t instanceof SVGElement&&"svg"!==t.tagName}(t)?new xs(e):new Ts(e);n.mount(t),pt.set(t,n)}function As(t){const e=new Ss({presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}});e.mount(t),pt.set(t,e)}function Ms(t,e,n,s){const i=[];if(function(t,e){return J(t)||"number"==typeof t||"string"==typeof t&&!Q(e)}(t,e))i.push(function(t,e,n){const s=J(t)?t:Ft(t);return s.start(qn("",s,e,n)),s.animation}(t,Q(e)&&e.default||e,n&&n.default||n));else{const r=tt(t,e,s),o=r.length;for(let t=0;t<o;t++){const s=r[t],a=s instanceof Element?Vs:As;pt.has(s)||a(s);const l=pt.get(s),u={...n};"delay"in u&&"function"==typeof u.delay&&(u.delay=u.delay(t,o)),i.push(...Gn(l,{...e,transition:u},{}))}}return i}function Ps(t,e,n){const s=[];return function(t,{defaultTransition:e={},...n}={},s,o){const a=e.duration||.3,l=new Map,u=new Map,c={},p=new Map;let f=0,m=0,g=0;for(let n=0;n<t.length;n++){const i=t[n];if("string"==typeof i){p.set(i,m);continue}if(!Array.isArray(i)){p.set(i.name,nt(m,i.at,f,p));continue}let[l,y,v={}]=i;void 0!==v.at&&(m=nt(m,v.at,f,p));let w=0;const b=(t,n,s,i=0,l=0)=>{const u=ut(t),{delay:c=0,times:p=_(u),type:f="keyframes",repeat:y,repeatType:v,repeatDelay:b=0,...x}=n;let{ease:T=e.ease||"easeOut",duration:S}=n;const V="function"==typeof c?c(i,l):c,A=u.length,M=d(f)?f:null==o?void 0:o[f];if(A<=2&&M){let t=100;if(2===A&&dt(u)){const e=u[1]-u[0];t=Math.abs(e)}const e={...x};void 0!==S&&(e.duration=r(S));const n=h(e,t,M);T=n.ease,S=n.duration}null!=S||(S=a);const P=m+V;1===p.length&&0===p[0]&&(p[1]=1);const k=p.length-u.length;if(k>0&&Z(p,k),1===u.length&&u.unshift(null),y){S=et(S,y);const t=[...u],e=[...p];T=Array.isArray(T)?[...T]:[T];const n=[...T];for(let s=0;s<y;s++){u.push(...t);for(let i=0;i<t.length;i++)p.push(e[i]+(s+1)),T.push(0===i?"linear":X(n,i-1))}rt(p,y)}const F=P+S;it(s,u,T,p,P,F),w=Math.max(V+S,w),g=Math.max(F,g)};if(J(l)){b(y,v,lt("default",at(l,u)))}else{const t=tt(l,y,s,c),e=t.length;for(let n=0;n<e;n++){y=y,v=v;const s=at(t[n],u);for(const t in y)b(y[t],ct(v,t),lt(t,s),n,e)}}f=m,m+=w}return u.forEach((t,s)=>{for(const r in t){const o=t[r];o.sort(ot);const a=[],u=[],c=[];for(let t=0;t<o.length;t++){const{at:e,value:n,easing:s}=o[t];a.push(n),u.push(i(0,g,e)),c.push(s||"easeOut")}0!==u[0]&&(u.unshift(0),a.unshift(a[0]),c.unshift("easeInOut")),1!==u[u.length-1]&&(u.push(1),a.push(null)),l.has(s)||l.set(s,{keyframes:{},transition:{}});const h=l.get(s);h.keyframes[r]=a,h.transition[r]={...e,duration:g,ease:c,times:u,...n}}}),l}(t,e,n,{spring:U}).forEach(({keyframes:t,transition:e},n)=>{s.push(...Ms(n,t,e))}),s}function ks(t){return function(e,n,s){let i=[];var r;r=e,i=Array.isArray(r)&&r.some(Array.isArray)?Ps(e,n,t):Ms(e,n,s,t);const o=new l(i);return t&&t.animations.push(o),o}}const Fs=ks();function Cs(t,e,n){t.style.setProperty("--"+e,n)}function Es(t,e,n){t.style[e]=n}const Os=s(()=>{try{document.createElement("div").animate({opacity:[1]})}catch(t){return!1}return!0}),Is=new WeakMap;function Rs(t){const e=Is.get(t)||new Map;return Is.set(t,e),Is.get(t)}class Bs extends class{constructor(t){this.animation=t}get duration(){var t,e,n;const s=(null===(e=null===(t=this.animation)||void 0===t?void 0:t.effect)||void 0===e?void 0:e.getComputedTiming().duration)||(null===(n=this.options)||void 0===n?void 0:n.duration)||300;return o(Number(s))}get time(){var t;return this.animation?o((null===(t=this.animation)||void 0===t?void 0:t.currentTime)||0):0}set time(t){this.animation&&(this.animation.currentTime=r(t))}get speed(){return this.animation?this.animation.playbackRate:1}set speed(t){this.animation&&(this.animation.playbackRate=t)}get state(){return this.animation?this.animation.playState:"finished"}get startTime(){return this.animation?this.animation.startTime:null}get finished(){return this.animation?this.animation.finished:Promise.resolve()}play(){this.animation&&this.animation.play()}pause(){this.animation&&this.animation.pause()}stop(){this.animation&&"idle"!==this.state&&"finished"!==this.state&&(this.animation.commitStyles&&this.animation.commitStyles(),this.cancel())}flatten(){var t;this.animation&&(null===(t=this.animation.effect)||void 0===t||t.updateTiming({easing:"linear"}))}attachTimeline(t){return this.animation&&p(this.animation,t),e}complete(){this.animation&&this.animation.finish()}cancel(){try{this.animation&&this.animation.cancel()}catch(t){}}}{constructor(t,e,s,i){const o=e.startsWith("--");n("string"!=typeof i.type);const a=Rs(t).get(e);a&&a.stop();if(Array.isArray(s)||(s=[s]),function(t,e,n){for(let s=0;s<e.length;s++)null===e[s]&&(e[s]=0===s?n():e[s-1]),"number"==typeof e[s]&&Pe[t]&&(e[s]=Pe[t].transform(e[s]));!Os()&&e.length<2&&e.unshift(n())}(e,s,()=>e.startsWith("--")?t.style.getPropertyValue(e):window.getComputedStyle(t)[e]),d(i.type)){const t=h(i,100,i.type);i.ease=y()?t.ease:"easeOut",i.duration=r(t.duration),i.type="keyframes"}else i.ease=i.ease||"easeOut";const l=()=>{this.setValue(t,e,un(s,i)),this.cancel(),this.resolveFinishedPromise()},u=()=>{this.setValue=o?Cs:Es,this.options=i,this.updateFinishedPromise(),this.removeAnimation=()=>{var n;return null===(n=Is.get(t))||void 0===n?void 0:n.delete(e)}};Kn()?(super(Nn(t,e,s,i)),u(),!1===i.autoplay&&this.animation.pause(),this.animation.onfinish=l,Rs(t).set(e,this)):(super(),u(),l())}then(t,e){return this.currentFinishedPromise.then(t,e)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}play(){"finished"===this.state&&this.updateFinishedPromise(),super.play()}cancel(){this.removeAnimation(),super.cancel()}}const Ds=(t=>function(e,n,s){return new l(function(t,e,n,s){const i=S(t,s),o=i.length,a=[];for(let t=0;t<o;t++){const s=i[t],l={...n};"function"==typeof l.delay&&(l.delay=l.delay(t,o));for(const t in e){const n=e[t],i={...u(l,t)};i.duration=i.duration?r(i.duration):i.duration,i.delay=r(i.delay||0),a.push(new Bs(s,t,n,i))}}return a}(e,n,s,t))})();function Ls(t,e){let n;const s=()=>{const{currentTime:s}=e,i=(null===s?0:s.value)/100;n!==i&&t(i),n=i};return bt.update(s,!0),()=>xt(s)}const Ws=new WeakMap;let Ns;function Ks({target:t,contentRect:e,borderBoxSize:n}){var s;null===(s=Ws.get(t))||void 0===s||s.forEach(s=>{s({target:t,contentSize:e,get size(){return function(t,e){if(e){const{inlineSize:t,blockSize:n}=e[0];return{width:t,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,n)}})})}function js(t){t.forEach(Ks)}function zs(t,e){Ns||"undefined"!=typeof ResizeObserver&&(Ns=new ResizeObserver(js));const n=S(t);return n.forEach(t=>{let n=Ws.get(t);n||(n=new Set,Ws.set(t,n)),n.add(e),null==Ns||Ns.observe(t)}),()=>{n.forEach(t=>{const n=Ws.get(t);null==n||n.delete(e),(null==n?void 0:n.size)||null==Ns||Ns.unobserve(t)})}}const $s=new Set;let Hs;function Us(t){return $s.add(t),Hs||(Hs=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};$s.forEach(t=>t(e))},window.addEventListener("resize",Hs)),()=>{$s.delete(t),!$s.size&&Hs&&(Hs=void 0)}}const Ys={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function qs(t,e,n,s){const r=n[e],{length:o,position:a}=Ys[e],l=r.current,u=n.time;r.current=t["scroll"+a],r.scrollLength=t["scroll"+o]-t["client"+o],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=i(0,r.scrollLength,r.current);const c=s-u;r.velocity=c>50?0:A(r.current-l,c)}const Xs={start:0,center:.5,end:1};function Gs(t,e,n=0){let s=0;if(t in Xs&&(t=Xs[t]),"string"==typeof t){const e=parseFloat(t);t.endsWith("px")?s=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?s=e/100*document.documentElement.clientWidth:t.endsWith("vh")?s=e/100*document.documentElement.clientHeight:t=e}return"number"==typeof t&&(s=e*t),n+s}const Zs=[0,0];function _s(t,e,n,s){let i=Array.isArray(t)?t:Zs,r=0,o=0;return"number"==typeof t?i=[t,t]:"string"==typeof t&&(i=(t=t.trim()).includes(" ")?t.split(" "):[t,Xs[t]?t:"0"]),r=Gs(i[0],n,s),o=Gs(i[1],e),r-o}const Js={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Qs={x:0,y:0};function ti(t,e,n){const{offset:s=Js.All}=n,{target:i=t,axis:r="y"}=n,o="y"===r?"height":"width",a=i!==t?function(t,e){const n={x:0,y:0};let s=t;for(;s&&s!==e;)if(s instanceof HTMLElement)n.x+=s.offsetLeft,n.y+=s.offsetTop,s=s.offsetParent;else if("svg"===s.tagName){const t=s.getBoundingClientRect();s=s.parentElement;const e=s.getBoundingClientRect();n.x+=t.left-e.left,n.y+=t.top-e.top}else{if(!(s instanceof SVGGraphicsElement))break;{const{x:t,y:e}=s.getBBox();n.x+=t,n.y+=e;let i=null,r=s.parentNode;for(;!i;)"svg"===r.tagName&&(i=r),r=s.parentNode;s=i}}return n}(i,t):Qs,l=i===t?{width:t.scrollWidth,height:t.scrollHeight}:function(t){return"getBBox"in t&&"svg"!==t.tagName?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}(i),u={width:t.clientWidth,height:t.clientHeight};e[r].offset.length=0;let c=!e[r].interpolate;const h=s.length;for(let t=0;t<h;t++){const n=_s(s[t],u[o],l[o],a[r]);c||n===e[r].interpolatorOffsets[t]||(c=!0),e[r].offset[t]=n}c&&(e[r].interpolate=On(e[r].offset,_(s),{clamp:!1}),e[r].interpolatorOffsets=[...e[r].offset]),e[r].progress=V(0,1,e[r].interpolate(e[r].current))}function ei(t,e,n,s={}){return{measure:()=>function(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let s=e;for(;s&&s!==t;)n.x.targetOffset+=s.offsetLeft,n.y.targetOffset+=s.offsetTop,s=s.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}(t,s.target,n),update:e=>{!function(t,e,n){qs(t,"x",e,n),qs(t,"y",e,n),e.time=n}(t,n,e),(s.offset||s.target)&&ti(t,n,s)},notify:()=>e(n)}}const ni=new WeakMap,si=new WeakMap,ii=new WeakMap,ri=t=>t===document.documentElement?window:t;function oi(t,{container:e=document.documentElement,...n}={}){let s=ii.get(e);s||(s=new Set,ii.set(e,s));const i=ei(e,t,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},n);if(s.add(i),!ni.has(e)){const t=()=>{for(const t of s)t.measure()},n=()=>{for(const t of s)t.update(Tt.timestamp)},i=()=>{for(const t of s)t.notify()},a=()=>{bt.read(t,!1,!0),bt.read(n,!1,!0),bt.update(i,!1,!0)};ni.set(e,a);const l=ri(e);window.addEventListener("resize",a,{passive:!0}),e!==document.documentElement&&si.set(e,(o=a,"function"==typeof(r=e)?Us(r):zs(r,o))),l.addEventListener("scroll",a,{passive:!0})}var r,o;const a=ni.get(e);return bt.read(a,!1,!0),()=>{var t;xt(a);const n=ii.get(e);if(!n)return;if(n.delete(i),n.size)return;const s=ni.get(e);ni.delete(e),s&&(ri(e).removeEventListener("scroll",s),null===(t=si.get(e))||void 0===t||t(),window.removeEventListener("resize",s))}}const ai=new Map;function li({source:t,container:e=document.documentElement,axis:n="y"}={}){t&&(e=t),ai.has(e)||ai.set(e,{});const s=ai.get(e);return s[n]||(s[n]=a()?new ScrollTimeline({source:e,axis:n}):function({source:t,container:e,axis:n="y"}){t&&(e=t);const s={value:0},i=oi(t=>{s.value=100*t[n].progress},{container:e,axis:n});return{currentTime:s,cancel:i}}({source:e,axis:n})),s[n]}function ui(t){return t&&(t.target||t.offset)}const ci={some:0,all:1};const hi=(t,e)=>Math.abs(t-e);const di=bt,pi=wt.reduce((t,e)=>(t[e]=t=>xt(t),t),{});t.MotionValue=kt,t.animate=Fs,t.animateMini=Ds,t.anticipate=Ut,t.backIn=$t,t.backInOut=Ht,t.backOut=zt,t.cancelFrame=xt,t.cancelSync=pi,t.circIn=Yt,t.circInOut=Xt,t.circOut=qt,t.clamp=V,t.createScopedAnimate=ks,t.cubicBezier=Nt,t.delay=function(t,e){return function(t,e){const n=Mt.now(),s=({timestamp:i})=>{const r=i-n;r>=e&&(xt(s),t(r-e))};return bt.read(s,!0),()=>xt(s)}(t,r(e))},t.distance=hi,t.distance2D=function(t,e){const n=hi(t.x,e.x),s=hi(t.y,e.y);return Math.sqrt(n**2+s**2)},t.easeIn=Pn,t.easeInOut=Fn,t.easeOut=kn,t.frame=bt,t.frameData=Tt,t.frameSteps=St,t.inView=function(t,e,{root:n,margin:s,amount:i="some"}={}){const r=S(t),o=new WeakMap,a=new IntersectionObserver(t=>{t.forEach(t=>{const n=o.get(t.target);if(t.isIntersecting!==Boolean(n))if(t.isIntersecting){const n=e(t);"function"==typeof n?o.set(t.target,n):a.unobserve(t.target)}else"function"==typeof n&&(n(t),o.delete(t.target))})},{root:n,rootMargin:s,threshold:"number"==typeof i?i:ci[i]});return r.forEach(t=>a.observe(t)),()=>a.disconnect()},t.inertia=Mn,t.interpolate=On,t.invariant=n,t.isDragActive=function(){return T},t.keyframes=In,t.mirrorEasing=Kt,t.mix=An,t.motionValue=Ft,t.noop=e,t.pipe=vn,t.progress=i,t.reverseEasing=jt,t.scroll=function(t,{axis:n="y",...s}={}){const i={axis:n,...s};return"function"==typeof t?function(t,e){return function(t){return 2===t.length}(t)||ui(e)?oi(n=>{t(n[e.axis].progress,n)},e):Ls(t,li(e))}(t,i):function(t,n){if(t.flatten(),ui(n))return t.pause(),oi(e=>{t.time=t.duration*e[n.axis].progress},n);{const s=li(n);return t.attachTimeline?t.attachTimeline(s,t=>(t.pause(),Ls(e=>{t.time=t.duration*e},s))):e}}(t,i)},t.scrollInfo=oi,t.spring=U,t.stagger=function(t=.1,{startDelay:e=0,from:n=0,ease:s}={}){return(i,r)=>{const o="number"==typeof n?n:function(t,e){if("first"===t)return 0;{const n=e-1;return"last"===t?n:n/2}}(n,r),a=Math.abs(o-i);let l=t*a;if(s){const e=r*t;l=En(s)(l/e)*e}return e+l}},t.steps=function(t,e="end"){return n=>{const s=(n="end"===e?Math.min(n,.999):Math.max(n,.001))*t,i="end"===e?Math.floor(s):Math.ceil(s);return V(0,1,i/t)}},t.sync=di,t.time=Mt,t.transform=function(...t){const e=!Array.isArray(t[0]),n=e?0:-1,s=t[0+n],i=t[1+n],r=t[2+n],o=t[3+n],a=On(i,r,{mixer:(l=r[0],(t=>t&&"object"==typeof t&&t.mix)(l)?l.mix:void 0),...o});var l;return e?a(s):a},t.wrap=Y}));

/*! instant.page v5.2.0 - (C) 2019-2023 Alexandre Dieulot - https://instant.page/license */

let _chromiumMajorVersionInUserAgent = null
  , _allowQueryString
  , _allowExternalLinks
  , _useWhitelist
  , _delayOnHover = 65
  , _lastTouchTimestamp
  , _mouseoverTimer
  , _preloadedList = new Set()

const DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION = 1111

init()

function init() {
  const isSupported = document.createElement('link').relList.supports('prefetch')
  // instant.page is meant to be loaded with <script type=module>
  // (though sometimes webmasters load it as a regular script).
  // So it’s normally executed (and must not cause JavaScript errors) in:
  // - Chromium 61+
  // - Gecko in Firefox 60+
  // - WebKit in Safari 10.1+ (iOS 10.3+, macOS 10.10+)
  //
  // The check above used to check for IntersectionObserverEntry.isIntersecting
  // but module scripts support implies this compatibility — except in Safari
  // 10.1–12.0, but this prefetch check takes care of it.

  if (!isSupported) {
    return
  }

  const handleVaryAcceptHeader = 'instantVaryAccept' in document.body.dataset || 'Shopify' in window
  // The `Vary: Accept` header when received in Chromium 79–109 makes prefetches
  // unusable, as Chromium used to send a different `Accept` header.
  // It’s applied on all Shopify sites by default, as Shopify is very popular
  // and is the main source of this problem.
  // `window.Shopify` only exists on “classic” Shopify sites. Those using
  // Hydrogen (Remix SPA) aren’t concerned.

  const chromiumUserAgentIndex = navigator.userAgent.indexOf('Chrome/')
  if (chromiumUserAgentIndex > -1) {
    _chromiumMajorVersionInUserAgent = parseInt(navigator.userAgent.substring(chromiumUserAgentIndex + 'Chrome/'.length))
  }
  // The user agent client hints API is a theoretically more reliable way to
  // get Chromium’s version… but it’s not available in Samsung Internet 20.
  // It also requires a secure context, which would make debugging harder,
  // and is only available in recent Chromium versions.
  // In practice, Chromium browsers never shy from announcing "Chrome" in
  // their regular user agent string, as that maximizes their compatibility.

  if (handleVaryAcceptHeader && _chromiumMajorVersionInUserAgent && _chromiumMajorVersionInUserAgent < 110) {
    return
  }

  const mousedownShortcut = 'instantMousedownShortcut' in document.body.dataset
  _allowQueryString = 'instantAllowQueryString' in document.body.dataset
  _allowExternalLinks = 'instantAllowExternalLinks' in document.body.dataset
  _useWhitelist = 'instantWhitelist' in document.body.dataset

  const eventListenersOptions = {
    capture: true,
    passive: true,
  }

  let useMousedown = false
  let useMousedownOnly = false
  let useViewport = false
  if ('instantIntensity' in document.body.dataset) {
    const intensity = document.body.dataset.instantIntensity

    if (intensity.startsWith('mousedown')) {
      useMousedown = true
      if (intensity == 'mousedown-only') {
        useMousedownOnly = true
      }
    }
    else if (intensity.startsWith('viewport')) {
      const isNavigatorConnectionSaveDataEnabled = navigator.connection && navigator.connection.saveData
      const isNavigatorConnectionLike2g = navigator.connection && navigator.connection.effectiveType && navigator.connection.effectiveType.includes('2g')
      if (!isNavigatorConnectionSaveDataEnabled && !isNavigatorConnectionLike2g) {
        if (intensity == "viewport") {
          if (document.documentElement.clientWidth * document.documentElement.clientHeight < 450000) {
            useViewport = true
            // Smartphones are the most likely to have a slow connection, and
            // their small screen size limits the number of links (and thus
            // server load).
            //
            // Foldable phones (being expensive as of 2023), tablets and PCs
            // generally have a decent connection, and a big screen displaying
            // more links that would put more load on the server.
            //
            // iPhone 14 Pro Max (want): 430×932 = 400 760
            // Samsung Galaxy S22 Ultra with display size set to 80% (want):
            // 450×965 = 434 250
            // Small tablet (don’t want): 600×960 = 576 000
            // Those number are virtual screen size, the viewport (used for
            // the check above) will be smaller with the browser’s interface.
          }
        }
        else if (intensity == "viewport-all") {
          useViewport = true
        }
      }
    }
    else {
      const milliseconds = parseInt(intensity)
      if (!isNaN(milliseconds)) {
        _delayOnHover = milliseconds
      }
    }
  }

  if (!useMousedownOnly) {
    document.addEventListener('touchstart', touchstartListener, eventListenersOptions)
  }

  if (!useMousedown) {
    document.addEventListener('mouseover', mouseoverListener, eventListenersOptions)
  }
  else if (!mousedownShortcut) {
      document.addEventListener('mousedown', mousedownListener, eventListenersOptions)
  }

  if (mousedownShortcut) {
    document.addEventListener('mousedown', mousedownShortcutListener, eventListenersOptions)
  }

  if (useViewport) {
    let requestIdleCallbackOrFallback = window.requestIdleCallback
    // Safari has no support as of 16.3: https://webkit.org/b/164193
    if (!requestIdleCallbackOrFallback) {
      requestIdleCallbackOrFallback = (callback) => {
        callback()
        // A smarter fallback like setTimeout is not used because devices that
        // may eventually be eligible to a Safari version supporting prefetch
        // will be very powerful.
        // The weakest devices that could be eligible are the 2017 iPad and
        // the 2016 MacBook.
      }
    }

    requestIdleCallbackOrFallback(function observeIntersection() {
      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const anchorElement = entry.target
            intersectionObserver.unobserve(anchorElement)
            preload(anchorElement.href)
          }
        })
      })

      document.querySelectorAll('a').forEach((anchorElement) => {
        if (isPreloadable(anchorElement)) {
          intersectionObserver.observe(anchorElement)
        }
      })
    }, {
      timeout: 1500,
    })
  }
}

function touchstartListener(event) {
  _lastTouchTimestamp = performance.now()
  // Chrome on Android triggers mouseover before touchcancel, so
  // `_lastTouchTimestamp` must be assigned on touchstart to be measured
  // on mouseover.

  const anchorElement = event.target.closest('a')

  if (!isPreloadable(anchorElement)) {
    return
  }

  preload(anchorElement.href, 'high')
}

function mouseoverListener(event) {
  if (performance.now() - _lastTouchTimestamp < DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION) {
    return
  }

  if (!('closest' in event.target)) {
    return
    // Without this check sometimes an error “event.target.closest is not a function” is thrown, for unknown reasons
    // That error denotes that `event.target` isn’t undefined. My best guess is that it’s the Document.
    //
    // Details could be gleaned from throwing such an error:
    //throw new TypeError(`instant.page non-element event target: timeStamp=${~~event.timeStamp}, type=${event.type}, typeof=${typeof event.target}, nodeType=${event.target.nodeType}, nodeName=${event.target.nodeName}, viewport=${innerWidth}x${innerHeight}, coords=${event.clientX}x${event.clientY}, scroll=${scrollX}x${scrollY}`)
  }
  const anchorElement = event.target.closest('a')

  if (!isPreloadable(anchorElement)) {
    return
  }

  anchorElement.addEventListener('mouseout', mouseoutListener, {passive: true})

  _mouseoverTimer = setTimeout(() => {
    preload(anchorElement.href, 'high')
    _mouseoverTimer = undefined
  }, _delayOnHover)
}

function mousedownListener(event) {
  const anchorElement = event.target.closest('a')

  if (!isPreloadable(anchorElement)) {
    return
  }

  preload(anchorElement.href, 'high')
}

function mouseoutListener(event) {
  if (event.relatedTarget && event.target.closest('a') == event.relatedTarget.closest('a')) {
    return
  }

  if (_mouseoverTimer) {
    clearTimeout(_mouseoverTimer)
    _mouseoverTimer = undefined
  }
}

function mousedownShortcutListener(event) {
  if (performance.now() - _lastTouchTimestamp < DELAY_TO_NOT_BE_CONSIDERED_A_TOUCH_INITIATED_ACTION) {
    return
  }

  const anchorElement = event.target.closest('a')

  if (event.which > 1 || event.metaKey || event.ctrlKey) {
    return
  }

  if (!anchorElement) {
    return
  }

  anchorElement.addEventListener('click', function (event) {
    if (event.detail == 1337) {
      return
    }

    event.preventDefault()
  }, {capture: true, passive: false, once: true})

  const customEvent = new MouseEvent('click', {view: window, bubbles: true, cancelable: false, detail: 1337})
  anchorElement.dispatchEvent(customEvent)
}

function isPreloadable(anchorElement) {
  if (!anchorElement || !anchorElement.href) {
    return
  }

  if (_useWhitelist && !('instant' in anchorElement.dataset)) {
    return
  }

  if (anchorElement.origin != location.origin) {
    let allowed = _allowExternalLinks || 'instant' in anchorElement.dataset
    if (!allowed || !_chromiumMajorVersionInUserAgent) {
      // Chromium-only: see comment on “restrictive prefetch”
      return
    }
  }

  if (!['http:', 'https:'].includes(anchorElement.protocol)) {
    return
  }

  if (anchorElement.protocol == 'http:' && location.protocol == 'https:') {
    return
  }

  if (!_allowQueryString && anchorElement.search && !('instant' in anchorElement.dataset)) {
    return
  }

  if (anchorElement.hash && anchorElement.pathname + anchorElement.search == location.pathname + location.search) {
    return
  }

  if ('noInstant' in anchorElement.dataset) {
    return
  }

  return true
}

function preload(url, fetchPriority = 'auto') {
  if (_preloadedList.has(url)) {
    return
  }

  const linkElement = document.createElement('link')
  linkElement.rel = 'prefetch'
  linkElement.href = url

  linkElement.fetchPriority = fetchPriority
  // By default, a prefetch is loaded with a low priority.
  // When there’s a fair chance that this prefetch is going to be used in the
  // near term (= after a touch/mouse event), giving it a high priority helps
  // make the page load faster in case there are other resources loading.
  // Prioritizing it implicitly means deprioritizing every other resource
  // that’s loading on the page. Due to HTML documents usually being much
  // smaller than other resources (notably images and JavaScript), and
  // prefetches happening once the initial page is sufficiently loaded,
  // this theft of bandwidth should rarely be detrimental.

  linkElement.as = 'document'
  // as=document is Chromium-only and allows cross-origin prefetches to be
  // usable for navigation. They call it “restrictive prefetch” and intend
  // to remove it: https://crbug.com/1352371
  //
  // This document from the Chrome team dated 2022-08-10
  // https://docs.google.com/document/d/1x232KJUIwIf-k08vpNfV85sVCRHkAxldfuIA5KOqi6M
  // claims (I haven’t tested) that data- and battery-saver modes as well as
  // the setting to disable preloading do not disable restrictive prefetch,
  // unlike regular prefetch. That’s good for prefetching on a touch/mouse
  // event, but might be bad when prefetching every link in the viewport.

  document.head.appendChild(linkElement)

  _preloadedList.add(url)
}


const _EVENT_HELPER = {
    onQuantityChange: 'on:QuantityChange',
    onYoutubeScriptReady: 'on:YTScriptReady',
    onVimeoScriptReady: 'on:VimeoScriptReady',
    disableSlide: 'action:disableSlide',
    enableSlide: 'action:enableSlide',
    hideDrawer: 'action:hideDrawer',
    showDrawer: 'action:showDrawer',
    renderProductOptions: 'action:renderDrawer',
    showSearchDrawer: 'action:showSearchDrawer',
    hideSearchDrawer: 'action:hideSearchDrawer',
    OnLineItemUpdate: 'action:cart:updateLineItem',
    triggerCartChange: 'action:cart:updateCart',
    updateAndShowCart: 'action:cart:updateCartandShowCart',
    updateCartRecommendations: 'action:cartrecommendations:update',
    hideCartRecommendations: 'action:cartrecommendations:hide',
    showCartRecommendations: 'action:cartrecommendations:show',
    elementIsInCurrentView: 'observe:elementInView',
    showSection: 'action:showSection',
    showPopup: 'action:showPopup',
    hidePopup: 'action:hidePopup',
    triggerProductQuickViewChange: 'action:productQuickView:update',
    triggerPickUpLoacationDrawerList: 'action:pickuplocationsDrawer:update',
    updatePickUpLocationOnVariantChange:
        'action:update:pickupLocationOnVariantChange',
    triggerToastMessage: 'showToastMessage',
    onVariantChangeBasedonElementSelector:
        'action:update:VariantSelectorChangeBasedOnSelector',
    triggerProductGiftCardError: 'action:show:productGiftCartEror',
    triggerFilterUpdate: 'action:filter:update',
    updateStickyAddToCartContent: 'action:update:stickyAddToCartContent',
    triggerlineItemError: 'action:show:lineItemError',
    triggerVariantAddToCartError: 'action:show:variantAddToCartError',
    accordionOpen: 'action:accordion:open',
    accordionClose: 'action:accordion:close',
    resetStickyAddTocartButton: 'action:buttonLoadingState:remove',
    showCartPopup: 'action:showCartPopup',
    fireBottomSheetEvent: 'action:fireBottomSheetEvent',
    updateDiscountLayout: 'action:updateDiscountLayout',
    removeDiscountCode: 'action:removeDiscountCode',
    quizFormChange: 'action:quizFormChange'
};

const HELPER_UTIL = (function () {
    /* Make fetch request with fetch config data
            Has following support callback
            1) Onsuccess Callback 
                - {{ onsuccess() }} Invokes when data is successfull fetched
                - returns (data) {{ json }}  
            2) OnError Callback 
                - {{ onerror() }} Invokes when data is successfull fetched
                - returns (error) {{ string }}  
            3) Default Callback 
                -  {{ defaultCb() }} - Invokes everytime whether fetching data succeds or fails
        */

    const fetchData = ({
        method,
        url,
        data = '',
        onsuccess,
        onerror,
        defaultCb,
        config = {},
        responseType,
    }) => {
        // Fetch Utitlity object that have support method for fetch related data
        const fetchUtil = {
            _generateFetchConfig() {
                const fetchConfig = {
                    method: method,
                    ...config,
                };

                if (method == 'POST') {
                    fetchConfig['body'] = data;
                }

                return fetchConfig;
            },
        };

        // Make Fetch Request
        try {
            fetch(`${url}`, {
                ...fetchUtil._generateFetchConfig(),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw response;
                    }
                    if (responseType == 'text') {
                        return response.text();
                    }
                    return response.json();
                })
                .then((data) => {
                    onsuccess(data);
                })
                .catch((error) => {
                    onerror(error);
                })
                .finally(() => {
                    if (defaultCb) {
                        defaultCb();
                    }
                });
        } catch (error) {
            throw new Error(`HTTp error! Status : ${error}`);
        }
    };

    /* Set Submit Button State
        Has following support State
            1) completeState
                - {{ completeState() }}  Should be invoked when fetch is successfull 
            2) loadingState
                - {{ loadingState() }} Should be invoked during intial fetch request 
            3) resetState
                -  {{ resetState() }} Reset to button default state
        */

    const submitButtonState = (btnInstance) => {
        const btnClasses = {
            completed: 'completedState',
            loading: 'loadingState',
        };

        const disableState = (disable = true) => {
            btnInstance.disabled = disable;
        };

        const completeState = () => {
            btnInstance.classList.add(btnClasses.completed);
        };
        const loadingState = () => {
            disableState();
            btnInstance.classList.add(btnClasses.loading);
        };
        const resetState = () => {
            btnInstance.classList.remove(
                btnClasses.completed,
                btnClasses.loading
            );
        };

        return {
            completeState,
            loadingState,
            resetState,
            disableState,
        };
    };

    // Play Media
    const playMedia = function (el) {
        // Here 'el' parameter refers to element which is having data-media-type
        const getMediaType =
            el.dataset.mediaType ||
            el.querySelector('[data-media-type]').dataset.mediaType;
        switch (getMediaType) {
            case 'external_video':
                const mediaHost =
                    el.dataset.mediaHost ||
                    el.querySelector('[data-media-host]').dataset.mediaHost;
                switch (mediaHost) {
                    case 'vimeo':
                        el._renderMedia();
                        break;
                    case 'youtube':
                        // Call youtube api to generate iframe
                        el._renderMedia();
                        break;
                    default:
                        console.log(`Play ${mediaHost} video`);
                        break;
                }
                break;
            case 'video':
                el._renderMedia();
                break;
            default:
                break;
        }
    };

    const pauseMedia = function (el) {
        const getMediaType =
            el.dataset.mediaType ||
            el.querySelector('[data-media-type]').dataset.mediaType;
        switch (getMediaType) {
            case 'external_video':
                const mediaHost =
                    el.dataset.mediaHost ||
                    el.querySelector('[data-media-host]').dataset.mediaHost;
                switch (mediaHost) {
                    case 'vimeo':
                        let vimeoElement = el.querySelector('vimeo-player');
                        if (vimeoElement.videoPlayed) {
                            vimeoElement._pause();
                        }
                        break;
                    case 'youtube':
                        let youtubeElement = el.querySelector('youtube-player');
        
                        if (youtubeElement.videoPlayed) {
                            youtubeElement._pause();
                        }
                        break;
                    default:
                        break;
                }
                break;
            case 'video':
                let videoEl = el.querySelector('default-player');
                if (videoEl.videoPlayed) {
                    videoEl._pause();
                }
                break;
            default:
                break;
        }
    };

    const dispatchCustomEvent = (eventName, target = document, detail) => {
        let customEvent = new CustomEvent(eventName, {
            bubbles: true,
            detail: detail,
        });
        target.dispatchEvent(customEvent);
    };

    const debounce = (callback, wait) => {
        let timerId;
        return (...args) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                callback(...args);
            }, wait);
        };
    };

    const throttle = function (func, delay) {
        let wait = false;

        return (...args) => {
            if (wait) {
                return;
            }

            func(...args);
            wait = true;
            setTimeout(() => {
                wait = false;
            }, delay);
        };
    };

    // Body Interactions functionality
    const bodyInteractions = {
        disableScroll() {
            document.body.style.overflow = 'hidden';
        },
        enableScroll() {
            document.body.style.overflow = 'auto';
        },
    };

    const productPriceUtil = function (priceData) {
        const _calculateDiscount = function () {
            let discountData = new Object();
            discountData.isproductOnDiscount =
                priceData.compare_at_price > priceData.price;
            discountData.discountPercentage = Math.ceil(
                ((priceData.compare_at_price - priceData.price) * 100) /
                    priceData.compare_at_price
            );
            return discountData;
        };
        return {
            productDiscountData: _calculateDiscount(),
        };
    };

    const injectShopifyMethods = function () {
        if (typeof window.Shopify == 'undefined') {
            window.Shopify = {};
        }

        Shopify.formatMoney = function (cents, format) {
            if (typeof cents == 'string') {
                cents = cents.replace('.', '');
            }
            var value = '';
            var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
            var formatString = format || this.money_format;

            function defaultOption(opt, def) {
                return typeof opt == 'undefined' ? def : opt;
            }

            function formatWithDelimiters(
                number,
                precision,
                thousands,
                decimal
            ) {
                precision = defaultOption(precision, 2);
                thousands = defaultOption(thousands, ',');
                decimal = defaultOption(decimal, '.');

                if (isNaN(number) || number == null) {
                    return 0;
                }

                number = (number / 100.0).toFixed(precision);

                var parts = number.split('.'),
                    dollars = parts[0].replace(
                        /(\d)(?=(\d\d\d)+(?!\d))/g,
                        '$1' + thousands
                    ),
                    cents = parts[1] ? decimal + parts[1] : '';

                return dollars + cents;
            }

            switch (formatString.match(placeholderRegex)[1]) {
                case 'amount':
                    value = formatWithDelimiters(cents, 2);
                    break;
                case 'amount_no_decimals':
                    value = formatWithDelimiters(cents, 0);
                    break;
                case 'amount_with_comma_separator':
                    value = formatWithDelimiters(cents, 2, '.', ',');
                    break;
                case 'amount_no_decimals_with_comma_separator':
                    value = formatWithDelimiters(cents, 0, '.', ',');
                    break;
                case 'amount_no_decimals_with_space_separator':
                    value = a(cents, 0, ' ', '');
                    break;
                case 'amount_with_apostrophe_separator':
                    value = a(t, 2, "'", '.');
                    break;
                case 'amount_with_decimal_separator':
                    value = a(t, 2, '.', '.');
            }

            return formatString.replace(placeholderRegex, value);
        };

        Shopify.postLink = function (path, options) {
            options = options || {};
            var method = options['method'] || 'post';
            var params = options['parameters'] || {};

            var form = document.createElement('form');
            form.setAttribute('method', method);
            form.setAttribute('action', path);

            for (var key in params) {
                var hiddenField = document.createElement('input');
                hiddenField.setAttribute('type', 'hidden');
                hiddenField.setAttribute('name', key);
                hiddenField.setAttribute('value', params[key]);
                form.appendChild(hiddenField);
            }
            document.body.appendChild(form);
            form.submit();
            document.body.removeChild(form);
        };
    };

    const injectPolyFillMethods = function () {
        // Polyfill for window.requestIdleCallback
        window.requestIdleCallback =
            window.requestIdleCallback ||
            function (cb) {
                var start = Date.now();
                return setTimeout(function () {
                    cb({
                        didTimeout: false,
                        timeRemaining: function () {
                            return Math.max(0, 50 - (Date.now() - start));
                        },
                    });
                }, 1);
            };
    };

    const sectionRenderUtil = (sectionName) => {
        const elementToRenderObj = {
            'cart-drawer': [
                {
                    sectionId: 'cart-drawer',
                    queryElement: 'drawer-cart',
                },
                {
                    sectionId: 'cart-count-bubble',
                    queryElement: '[header-cart-bubble]',
                },
                {
                    sectionId: 'cart-popup',
                    queryElement: 'cart-popup',
                },
                {
                    sectionId: 'manual-discount-codes',
                    queryElement: '[manual-discount-code]',
                },
            ],
            'main-cart': [
                {
                    sectionId: 'main-cart',
                    queryElement: 'cart-page',
                },
                {
                    sectionId: 'main-cart',
                    queryElement: '[data-checkout-form]',
                },
                {
                    sectionId: 'cart-count-bubble',
                    queryElement: '[header-cart-bubble]',
                },
                {
                    sectionId: 'cart-popup',
                    queryElement: 'cart-popup',
                },
                {
                    sectionId: 'manual-discount-codes',
                    queryElement: '[manual-discount-code]',
                },
            ],
        };

        const getSectionsString = () => {
            return [
                ...new Set(
                    elementToRenderObj[sectionName].map(section => section.sectionId)
                )].join(',');
        };

        const getSectionsObject = () => {
            return elementToRenderObj[sectionName];
        };

        return {
            getSectionsString,
            getSectionsObject,
        };
    };

    const trigerElementFunctionalityInView = function (elements, config, handleElWhenNotInView) {
        let target =
            typeof elements == 'object'
                ? [elements]
                : document.querySelectorAll(elements);
        let options = config || {
            root: document,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const actionWhenElIntersects = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    HELPER_UTIL.dispatchCustomEvent(
                        _EVENT_HELPER.elementIsInCurrentView,
                        el
                    );
                } else {
                    handleElWhenNotInView && handleElWhenNotInView(entry);
                }
            });
        };

        let observer = new IntersectionObserver(
            actionWhenElIntersects,
            options
        );
        target.length > 0 &&
            target.forEach((el) => {
                observer.observe(el);
            });
    };

    const initCommonEventListeners = function () {
        const triggerAddressDrawer = function () {
            const addressTriggerElements = document.querySelectorAll(
                '[trigger-address-drawer]'
            );
            addressTriggerElements &&
                addressTriggerElements.forEach((addressButton) => {
                    addressButton.addEventListener('click', (e) => {
                        let addresId = e.target.getAttribute('address-id');
                        HELPER_UTIL.dispatchCustomEvent(
                            _EVENT_HELPER.showSection,
                            document,
                            {
                                bubbles: true,
                                detail: {
                                    id: addresId,
                                },
                            }
                        );
                        HELPER_UTIL.dispatchCustomEvent(
                            _EVENT_HELPER.showDrawer,
                            addressButton,
                            {
                                drawerType: 'address-form',
                            }
                        );
                        window.currentActiveElement = addressButton;
                    });
                });
        };

        const triggerChangeAddressDrawer = function () {
            const defaultChangeButton = document.querySelectorAll(
                '[change-default-address-button]'
            );
            defaultChangeButton &&
                defaultChangeButton.forEach((button) => {
                    button.addEventListener('click', (e) => {
                        HELPER_UTIL.dispatchCustomEvent(
                            _EVENT_HELPER.showDrawer,
                            document,
                            {
                                drawerType: 'change-default-address',
                            }
                        );
                    });
                });
        };

        const triggerPasswordDrawer = function () {
            let passwordButton = document.querySelector('[password-button]');
            passwordButton &&
                passwordButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    HELPER_UTIL.dispatchCustomEvent(
                        _EVENT_HELPER.showDrawer,
                        document,
                        {
                            drawerType: 'password',
                        }
                    );
                });
        };
        const checkForErrors = function () {
            const drawer = document.querySelector('[drawer-type="password"]');
            const error = document.querySelector('.error-ms');
            drawer &&
                error &&
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.showDrawer,
                    document,
                    {
                        drawerType: 'password',
                    }
                );
        };

        //Header hamber menu interaction
        const init = () => {
            triggerAddressDrawer();
            triggerChangeAddressDrawer();
            trigerElementFunctionalityInView('[watch-element]');
            triggerPasswordDrawer();
            checkForErrors();
        };

        init();
    };

    const getHTMLFromString = function (dataToParse, elementToGet) {
        return new DOMParser()
            .parseFromString(dataToParse, 'text/html')
            .querySelector(elementToGet);
    }

    const isRTL = function () {
        return document.documentElement.dir === 'rtl';
    };

    return {
        fetchData: fetchData,
        submitButtonState,
        playMedia,
        pauseMedia,
        dispatchCustomEvent,
        debounce,
        throttle,
        bodyInteractions,
        productPriceUtil,
        injectShopifyMethods,
        injectPolyFillMethods,
        initCommonEventListeners,
        sectionRenderUtil,
        trigerElementFunctionalityInView,
        getHTMLFromString,
        isRTL
    };
})();

function onYouTubeIframeAPIReady() {
    HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.onYoutubeScriptReady);
}

function onVimeoPlayerReady() {
    HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.onVimeoScriptReady);
}

// Define Shopify method that will be passed in shopify global object
HELPER_UTIL.injectShopifyMethods();
HELPER_UTIL.injectPolyFillMethods();

document.addEventListener('DOMContentLoaded', function () {
    HELPER_UTIL.initCommonEventListeners();
    if (document.querySelector('[page-loader-container]')) {
        document.querySelector('[page-loader-container]').classList.add('hide');
    }
});



class AnimationReveal extends HTMLElement {
    constructor() {
        super();
        this._animationType = this.getAttribute('aoi-type') || null;
        this._animationAmount = this.getAttribute('aoi-amount') || 0.4;
        this._animationDelay = this.getAttribute('aoi-delay') || 0;
        this._animationFadeDelay = this.getAttribute('aoi-fade-delay') || 0.1;
        this._animationDuration = this.getAttribute('aoi-duration') || 0.5;
        this._animationContainer = this.closest('[aoi-container]') || this;
        this._no_container = this.closest('[aoi-no-container]') || false;
        this._animateOnce = this.hasAttribute('aoi-once');
        this._hasAnimated = false;
    }

    connectedCallback() {
        if (window.animation && this._animationType) {
            !this._no_container &&
                Motion.inView(
                    this._animationContainer,
                    this.animateImageTxt.bind(this),
                    { amount: parseFloat(this._animationAmount) }
                );
        }
    }

    animateImageTxt(info) {
        if (!window.animation) return;
        if (this._animateOnce && this._hasAnimated) return;

        const elements = Array.from(this.children);
        const duration = parseFloat(this._animationDuration);
        const delay = parseFloat(this._animationDelay);
        const fadeDelay = this.hasAttribute('aoi-fade-delay')
            ? parseFloat(this._animationFadeDelay)
            : Motion.stagger(0.1);

        const animations = {
            'scale': { keyframes: { opacity: [0, 1], transform: ['scale(1.3)', 'scale(1)'] }, delay },
            'stagger': { keyframes: { opacity: [0, 1], y: ['2.5rem', '0'] }, delay: Motion.stagger(delay) },
            'slide-right': { keyframes: { opacity: [0, 1], x: [HELPER_UTIL.isRTL() ? 20 : -20, 0] }, delay: Motion.stagger(0.13) },
            'fade-up': { keyframes: { opacity: [0, 1], y: ['2.5rem', '0'] }, delay: fadeDelay },
            'fade-down': { keyframes: { opacity: [0, 1], y: [-20, 0] }, delay: fadeDelay, elements: info?.target?.children || elements },
            'fade-in': { keyframes: { opacity: [0, 1] }, delay: Motion.stagger(0.1) },
            'zoom-out': { keyframes: { opacity: [0, 1], scale: [1.2, 1] }, delay: this.hasAttribute('aoi-delay') ? parseFloat(this._animationDelay) : Motion.stagger(0.1) },
            'zoom-in': { keyframes: { opacity: [0, 1], scale: [0.5, 1] }, delay },
        };

        const config = animations[this._animationType];
        if (!config) return;

        Motion.animate(
            config.elements || elements,
            config.keyframes,
            { duration, delay: config.delay, ease: 'cubic-bezier(0.22, 1, 0.36, 1)' }
        );
        if (this._animateOnce) this._hasAnimated = true;
    }
}

customElements.define('animation-reveal', AnimationReveal);

class CarouselComponent extends HTMLElement {
  constructor() {
    super();
    this.swiperInstance;
    this.thumbSwiperInstance;
    // Get Attributes attached to the component
    this.layoutType = this.getAttribute("slide-layout-type");
    this.slideSpeed = this.getAttribute("slide-speed");
    this.sliderPerView = this.getAttribute("slide-per-view");
    this.disableTouchMove = !this.hasAttribute("slide-disable-touch-move");
    this.keyboardDisable = !this.hasAttribute("slide-keyboard-disabled");
    this.centeredSlides = this.hasAttribute("centered-slides")
    // this.initialSlidePerVew = this.getAttribute("slide-initial-per-view")   || '1.3';
    // this.slideToMedia = this.getAttribute('slide-to-media');
    this.slidePaginationType =
      this.getAttribute("slide-pagination-type") || null;
    // this.mediaAutoPlay = this.hasAttribute('slide-media-autoplay');
    // this.responsive_breakpoints =
    //     JSON.parse(this.getAttribute('slide-responsive-breakpoints')) | {};
    this.responsive_breakpoints = JSON.parse(
      this.getAttribute("slide-responsive-breakpoints")
    );
    // Reference elements present inside component
    this.mainSliderElement = this.querySelector("[main-slider]");
    this.spaceBetween = this.getAttribute("space-between") || 20;
    this.thumbNailSliderElement = this.querySelector("[thumbnail-slider]");
    this.prevButton = this.querySelector("[slide-prev]");
    this.nextButton = this.querySelector("[slide-next]");
    this.slideProgressBar = this.querySelector("[slide-progress]");
    this.verticleThumbnail = this.getAttribute("verticle-thumbnail");
    this.mobileVerticleThumbnail = this.getAttribute("mobile-verticle-thumbnail");
    this.sliderAutoplay = this.getAttribute("slide-autoplay");
    this.sliderAutoplayDelay = this.getAttribute("slide-autoplay-delay");
    this.sliderAnimation = this.getAttribute("slide-animation");
    this.desktopParallax = this.hasAttribute("desktop-parallax");
    this.mobileParallax = this.hasAttribute("mobile-parallax");
    this.slidePositionLeftIfLess = !this.hasAttribute("slide-no-center");
    this.sliderController = this.querySelector("[slider-controller]");
    this.slideAutoHeight = this.hasAttribute("slide-auto-height");
    this.slideToClickedSlide = this.hasAttribute("slide-slide-to-clicked-slide");
    this.grabCursor = this.getAttribute("slide-grab-cursor") === "true";
    this.didCarouselInitiate = false;
    this.customNavigation =
      JSON.parse(this.getAttribute("slide-custom-nav-arrows")) || null;
    if (this.customNavigation) {
      let { nextArrow, prevArrow } = this.customNavigation;
      if (!nextArrow || !prevArrow)
        throw new Error(
          "Make sure to add next arrow and prevArrow key: values properly"
        );
      this.nextButton = this.querySelector(nextArrow);
      this.prevButton = this.querySelector(prevArrow);
    }
    this.loopSlide = this.hasAttribute("slide-loop");
    this.enableAfterInteraction = this.hasAttribute(
      "slide-enable-after-interaction"
    );
    this._animateOnSlideChange = this.hasAttribute("animate-on-slide-change");
    this._animateAfterTransition = this.hasAttribute("animate-after-transition");
    let options = {
      root: document,
      rootMargin: "0px",
      threshold: 0.01,
    };
    this.intersectionElement = this.hasAttribute("intersection-element");
    this.intersectionElement &&
      HELPER_UTIL.trigerElementFunctionalityInView(this, options);
    this.disableAccessibility = !this.hasAttribute("disable-accessibility");
    this.a11yEnabled = this.disableAccessibility;
    this.dynamic_pagination = this.hasAttribute("dynamic-pagination");
  }

  //changes color of control on each slide change
  dynamic_navigation_color(swiperInstance, overrideIndex = null) {
    const index = overrideIndex ?? swiperInstance?.activeIndex;
    const activeSlideElement = swiperInstance?.slides?.[index];
    if (!activeSlideElement || !this.sliderController) return;
    const colorSchemeAttr =
      activeSlideElement.getAttribute("data-color-scheme") || "";
    const colorSchemeClass = colorSchemeAttr
      ? colorSchemeAttr.split(" ").filter(Boolean)
      : [];
    this.sliderController.className = "";
    if (colorSchemeClass.length) {
      this.sliderController.classList.add(...colorSchemeClass);
    }
  }

  handleSliderMove(swiperInstance) {
    if (!this.has_dynamic_navigation_color || !this.sliderController) return;
    const direction = swiperInstance.swipeDirection;
    if (!direction) return;
    const total = swiperInstance.slides?.length ?? 0;
    let targetIndex = swiperInstance.activeIndex;
    if (direction === "next") {
      targetIndex = Math.min(swiperInstance.activeIndex + 1, total - 1);
    } else if (direction === "prev") {
      targetIndex = Math.max(swiperInstance.activeIndex - 1, 0);
    }
    this.dynamic_navigation_color(swiperInstance, targetIndex);
  }

  // Check for autoplay
  getSlideAutoplayParams() {
    if (this.sliderAutoplay == "true") {
      return {
        autoplay: {
          delay: parseInt(this.sliderAutoplayDelay) * 1000,
          pauseOnMouseEnter: true,
          disableOnInteraction: !this.enableAfterInteraction,
        },
      };
    }
    return {};
  }

  getSlideAnimationParams() {
    let hasAnyParallax = this.desktopParallax || this.mobileParallax;
    let animationParams = {};
    if (this.sliderAnimation === "fade") {
      animationParams = {
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
      };
    }
    else if (hasAnyParallax) {
      animationParams = {
        parallax: true,
      };
    }
    return animationParams;
  }

  // Handle touch start - pause autoplay on mobile devices
  handleTouchStart(swiperInstance) {
    // Check if autoplay is enabled and running
    if (this.sliderAutoplay === "true" && swiperInstance.autoplay && swiperInstance.autoplay.running) {
      swiperInstance.autoplay.pause();
    }
  }

  // Handle touch end - resume autoplay on mobile devices
  handleTouchEnd(swiperInstance) {
    // Check if autoplay is enabled and was paused
    if (this.sliderAutoplay === "true" && swiperInstance.autoplay && !swiperInstance.autoplay.running) {
      swiperInstance.autoplay.start();
    }
    // Reset nav color back to the actual active slide in case drag was aborted
    if (this.has_dynamic_navigation_color && this.sliderController) {
      this.dynamic_navigation_color(swiperInstance);
    }
  }

  // Enable a11y when keyboard is used
  enableA11yOnKeyboardUse() {
    if (this.a11yEnabled) return;

    const keyboardHandler = (e) => {
      // Check if it's a keyboard navigation key (arrow keys, tab, etc.)
      const isNavigationKey = [
        'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
        'Tab', 'Home', 'End', 'PageUp', 'PageDown'
      ].includes(e.key);

      if (isNavigationKey) {
        this.a11yEnabled = true;
        // Enable a11y on Swiper instance
        if (this.swiperInstance && this.swiperInstance.params) {
          // Update a11y params to enable it
          if (typeof this.swiperInstance.params.a11y === 'object') {
            this.swiperInstance.params.a11y.enabled = true;
          } else {
            this.swiperInstance.params.a11y = { enabled: true };
          }

          // Initialize a11y module if it exists
          // Swiper's a11y module should be available and we can trigger its initialization
          if (this.swiperInstance.a11y) {
            // Manually trigger a11y initialization by emitting 'afterInit' event
            // The a11y module listens to 'afterInit' event for initialization
            this.swiperInstance.emit('afterInit');
          }
        }
        // Remove the listener once a11y is enabled
        this.removeEventListener('keydown', keyboardHandler);
      }
    };

    // Add keyboard event listener to the carousel component
    this.addEventListener('keydown', keyboardHandler);
  }

  // Events for Swiper
  // Fired when swiper is initialize
  handleSliderAfterInitialization(swiperInstance) {
    this.classList.add("carousel-active");

    // Set up keyboard detection to enable a11y
    this.enableA11yOnKeyboardUse();

    this.has_dynamic_navigation_color = this.hasAttribute(
      "dynamic-navigation-color"
    );
    if (this.has_dynamic_navigation_color && this.sliderController) {
      this.dynamic_navigation_color(swiperInstance);
    }
    setTimeout(() => {
      this.slideChangeAnimation(swiperInstance);
    }, 0);

  }

  // Run set of functions after slide change event is fired
  handleFunctionalityAfterSlideChange(swiperInstance) {
    this.autoPlayMediaOnActiveSlide(swiperInstance);

    if (this.has_dynamic_navigation_color && this.sliderController) {
      this.dynamic_navigation_color(swiperInstance);
    }

    // When animate-after-transition is set, defer animation to slideChangeTransitionEnd
    if (!this._animateAfterTransition) {
      this.slideChangeAnimation(swiperInstance);
    }
  }

  handleSlideTransitionEnd(swiperInstance) {
    if (this._animateAfterTransition) {
      this.slideChangeAnimation(swiperInstance);
    }
  }

  autoPlayMediaOnActiveSlide(swiperInstance) {
    // Look for element which has video elements
    const activeSlideElement =
      swiperInstance.slides[swiperInstance.activeIndex];
    const mediaElement = activeSlideElement?.querySelector("[data-media-type]");
    if (mediaElement) {
      mediaElement.hasAttribute("media-autoplay") &&
        HELPER_UTIL.playMedia(mediaElement);
    }
  }

  // Run to animate elements on slide change
  slideChangeAnimation(swiperInstance) {
    if (!window.animation) return;
    const activeSlideElement =
      swiperInstance?.slides?.[swiperInstance.activeIndex];
    if (this._animateOnSlideChange && activeSlideElement) {
      const animateElements =
        activeSlideElement?.querySelectorAll("animation-reveal");
      animateElements &&
        animateElements.forEach((animateElement) => {
          animateElement.animateImageTxt(animateElement);
        });
    }
  }
  _getParallaxState() {
    const isDesktop = window.innerWidth > 992;
    const useParallax = (isDesktop && this.desktopParallax) || (!isDesktop && this.mobileParallax);
    return { isDesktop, useParallax };
  }

  _toggleParallaxAttributes(sliderElement) {
    const { isDesktop, useParallax } = this._getParallaxState();

    sliderElement.querySelectorAll(".swiper-slide img, .swiper-slide video, .swiper-slide iframe, .swiper-slide model-viewer").forEach((el) => {
      if (useParallax) {
        el.setAttribute("data-swiper-parallax", "25%");
      } else {
        el.removeAttribute("data-swiper-parallax");
        el.style.transform = el.style.transitionDuration = "";
      }
    });

  }

  // Callable Methods for swiper
  // Method that initialize corousel for that component
  initSlider(sliderElement = this.mainSliderElement) {
    let sliderReponsiveData = this.responsive_breakpoints || {};
    if (this.thumbNailSliderElement) {
      this.initThumbnailSlider();
    }
    // Apply parallax and resolve initial speed
    let slideSpeed = Number(this.slideSpeed);
    if (this.desktopParallax || this.mobileParallax) {
      this._toggleParallaxAttributes(sliderElement);
      const { isDesktop, useParallax } = this._getParallaxState();
      if (useParallax && isDesktop) slideSpeed = 850;
    }
    this.swiperInstance = new Swiper(sliderElement, {
      rtl: HELPER_UTIL.isRTL(),
      a11y: { enabled: this.disableAccessibility }, // Initially disabled, will be enabled on keyboard use
      lazy: true,
      speed: slideSpeed,
      allowTouchMove: this.disableTouchMove,
      slidesPerView: this.sliderPerView,
      spaceBetween: Number(this.spaceBetween),
      preventClicksPropagation: false,
      initialSlide: parseInt(this.getAttribute('initial-slide') || 0),
      centerInsufficientSlides: this.slidePositionLeftIfLess,
      centeredSlides: this.centeredSlides,
      centeredSlidesBounds: this.centeredSlides,
      autoHeight: this.slideAutoHeight,
      slideToClickedSlide: this.slideToClickedSlide,
      threshold: 15,
      grabCursor: this.grabCursor,
      loop: this.loopSlide,
      // preventClicks: false,
      navigation: {
        nextEl: this.nextButton,
        prevEl: this.prevButton,
      },
      thumbs: {
        swiper: this.thumbSwiperInstance,
      },
      keyboard: {
        enabled: this.keyboardDisable,
      },
      pagination: {
        el: this.slideProgressBar,
        type: this.slidePaginationType,
        clickable: true,
        dynamicBullets: this.dynamic_pagination
      },
      // Responsive breakpoints
      breakpoints: {
        ...sliderReponsiveData,
      },
      ...this.getSlideAutoplayParams(),
      ...this.getSlideAnimationParams(),
      // Listening to some slider events
      on: {
        init: this.handleSliderAfterInitialization.bind(this), // When swiper is initialized
        slideChange: this.handleFunctionalityAfterSlideChange.bind(this),
        slideChangeTransitionEnd: this.handleSlideTransitionEnd.bind(this),
        touchStart: this.handleTouchStart.bind(this), // Pause autoplay on touch start
        touchEnd: this.handleTouchEnd.bind(this), // Resume autoplay on touch end
        sliderMove: this.handleSliderMove.bind(this), // Apply nav color of target slide while dragging
      },
    });
  }

  initThumbnailSlider() {
    this.thumbnailResponsiveBreakpoints = {
      992: {
        slidesPerView: this.verticleThumbnail == "true" ? "auto" : parseFloat(this.productThumbnailPerView) || 4,
        direction: this.verticleThumbnail == "true" ? "vertical" : "horizontal",
        centerInsufficientSlides: this.verticleThumbnail === "false"
      },
      767: {
        slidesPerView: parseFloat(this.productThumbnailPerView) || 4.8,
        direction: "horizontal",
        centerInsufficientSlides: true
      },
    };
    if (this.mobileVerticleThumbnail == "true") {
      const mobileVerticalConfig = {
        spaceBetween: 8,
        slidesPerView: "auto",
        direction: "vertical",
        touchReleaseOnEdges: true,
      };
      this.thumbnailResponsiveBreakpoints[767] = mobileVerticalConfig;
      this.thumbnailResponsiveBreakpoints[320] = mobileVerticalConfig;
    }
    if (this.hasAttribute("thumbnail-responsive-breakpoints")) {
      this.thumbnailResponsiveBreakpoints = JSON.parse(
        this.getAttribute("thumbnail-responsive-breakpoints")
      );
    }
    this.thumbnailAlignStart = this.hasAttribute("thumbnail-slides-start");
    this.thumbSwiperInstance = new Swiper(this.thumbNailSliderElement, {
      a11y: true,
      spaceBetween: Number(this.spaceBetween) || 20,
      slidesPerView: parseFloat(this.productThumbnailPerView) || 3.8,
      freeMode: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      centerInsufficientSlides: !this.thumbnailAlignStart,
      threshold: 15,
      keyboard: {
        enabled: true,
      },
      breakpoints: { ...this.thumbnailResponsiveBreakpoints },
      on: {
        // Swiper freezes rtlTranslate at mount; re-sync it to the current axis so
        // vertical thumbnails don't invert their drag in RTL.
        afterInit: this._syncThumbRtlTranslate.bind(this),
        breakpoint: this._syncThumbRtlTranslate.bind(this),
      },
    });

    // Prevent page scroll when swiping vertical thumbnails on mobile
    if (this.mobileVerticleThumbnail == "true" && this.thumbNailSliderElement) {
      this._boundThumbTouchmove = (e) => {
        if (window.innerWidth <= 767 && this.thumbSwiperInstance?.params?.direction === 'vertical') {
          e.preventDefault();
          e.stopPropagation();
        }
      };
      this.thumbNailSliderElement.addEventListener('touchmove', this._boundThumbTouchmove, { passive: false });
    }
  }

  // rtlTranslate only applies to horizontal sliders; keep it matched to the current
  // axis (re-snapping to the active slide) so vertical thumbnails don't drag backwards.
  _syncThumbRtlTranslate(swiper) {
    const shouldInvert = swiper.params.direction === "horizontal" && swiper.rtl;
    if (swiper.rtlTranslate === shouldInvert) return;
    swiper.rtlTranslate = shouldInvert;
    swiper.slideTo(swiper.activeIndex || 0, 0, false);
  }

  // Called when slider is connected to layout
  connectedCallback() {
    if (this.layoutType == "carousel") {
      if (this.intersectionElement) {
        this.addEventListener(_EVENT_HELPER.elementIsInCurrentView, () => {
          if (this.didCarouselInitiate) return;
          // If layout type is set to carouse then Show carousel

          this.initSlider();
          this.didCarouselInitiate = true;
        });
      } else {
        this.initSlider();
      }
    }
  }

  disconnectedCallback() {
    // Destroy Swiper instance if remove from page
    this.swiperInstance?.destroy();
    this.thumbSwiperInstance?.destroy();
    if (this._boundThumbTouchmove && this.thumbNailSliderElement) {
      this.thumbNailSliderElement.removeEventListener('touchmove', this._boundThumbTouchmove);
    }
  }
}

customElements.get("carousel-component") ||
  customElements.define("carousel-component", CarouselComponent);

class ProductCarouselComponent extends CarouselComponent {
  constructor() {
    super();
    this.mediaAutoPlay = this.hasAttribute("slide-media-autoplay");
    this.slideToMedia = this.getAttribute("slide-to-media");
    this.prevButton = this.querySelector("[slide-prev]");
    this.nextButton = this.querySelector("[slide-next]");
    this.productThumbnailPerView = 4.6;
    if (this.hasAttribute("slide-enable-mobile-swipe")) {
      let enableMobileSwipeValue = this.getAttribute("slide-enable-mobile-swipe") || 767;
      this.enableMobileSwipeMedia = window.matchMedia(
        `(max-width: ${enableMobileSwipeValue}px)`
      );
    }
    this.desktopScreenMatchMedia = window.matchMedia(`(min-width: ${768}px)`);
    this.mobileScreeneMatchMedia = window.matchMedia(`(max-width: ${767}px)`);

    this.enableMobileSwipeMedia?.addEventListener('change', (e) => {
      if (e.matches) {
        this.enableSwipe();
      } else {
        this._disableSlide();
      }

    });

    this.desktopScreenMatchMedia.addEventListener('change', this.reinitiateSliderBasedOnScreen.bind(this));
    this.mobileScreeneMatchMedia.addEventListener('change', this.reinitiateSliderBasedOnScreen.bind(this));

  }



  _enableSlide(e) {
    let btn = e.currentTarget;
    let isBtnDisabled = btn.classList.contains("swiper-button-disabled");
    let isSwiperEnabled = this.swiperInstance.allowTouchMove;
    if (isBtnDisabled) return;

    if (!isSwiperEnabled) {
      this.swiperInstance.allowTouchMove = true;
    }
  }

  reinitiateSliderBasedOnScreen(e) {
    if (!e.matches) return;
    this.swiperInstance?.destroy();
    this.thumbSwiperInstance?.destroy();
    this.initSlider();
  }

  _disableSlide() {
    this.swiperInstance.allowTouchMove = false;
  }

  handleSliderAfterInitialization(swiperInstance) {
    super.handleSliderAfterInitialization(swiperInstance);
    swiperInstance.allowTouchMove = this.hasAttribute("enable-swipe");
    swiperInstance.keyboard.disable();
    swiperInstance.thumbs?.swiper?.keyboard.disable();

    requestAnimationFrame(() => {
      this.autoPlayMediaOnActiveSlide(swiperInstance);
      // Fix: in RTL mode Swiper miscalculates the first slide's parallax
      // progress on init. Calling update() after layout settles corrects it.
      if (HELPER_UTIL.isRTL() && (this.desktopParallax || this.mobileParallax)) {
        swiperInstance.update();
      }
    });
  }

  handleFunctionalityAfterSlideChange(swiperInstance) {
    super.handleFunctionalityAfterSlideChange(swiperInstance);
    const activeSlideElement =
      swiperInstance.slides[swiperInstance.activeIndex];

    // Pause any media if playing which is not present in current slide
    swiperInstance.slides.forEach((slide) => {
      if (slide !== activeSlideElement) {
        const mediaEl = slide.querySelector(
          "default-player, vimeo-player, youtube-player"
        );
        mediaEl && mediaEl.videoIsPlaying && mediaEl._pause();
      }
    });

    const activeSlide = swiperInstance.activeIndex;
    const isMobile = window.innerWidth <= 767;
    const slidesPerView = Math.floor(this.thumbSwiperInstance?.params.slidesPerView === 'auto' ? (isMobile && this.mobileVerticleThumbnail == "true" ? 2 : 3) : this.thumbSwiperInstance?.params.slidesPerView);
    const firstVisible = this.thumbSwiperInstance?.activeIndex;
    const lastVisible = firstVisible + slidesPerView - 1;
    if (activeSlide > lastVisible || activeSlide <= firstVisible) {
      this.thumbSwiperInstance?.slideTo(activeSlide);
    }
  }

  goToSlideBasedOnMedia(mediaId) {
    let getSlideIndex = [...this.swiperInstance.slides].findIndex((slide) => {
      return slide.querySelector(`[data-media-id="${mediaId}"]`);
    });
    this.swiperInstance.slideTo(getSlideIndex, 0);
  }

  enableSwipe() {
    this.swiperInstance.allowTouchMove = true;
  }

  initSlider() {
    super.initSlider();
    if (this.hasAttribute("slide-enable-mobile-swipe")) {
      if (this.enableMobileSwipeMedia.matches) {
        this.enableSwipe();
      }
    }

    if (this.slideToMedia) {
      this.goToSlideBasedOnMedia(this.slideToMedia);
    }
  }
}

customElements.get("product-carousel") ||
  customElements.define("product-carousel", ProductCarouselComponent);


class CarouselWithTabs extends CarouselComponent {
  constructor() {
    super();
    this.tabs = this.querySelectorAll("[carousel-tab]");
    this.grabCursor = this.getAttribute("slide-grab-cursor") === "true";
    this.template = this.querySelector("template");
    if (Shopify.designMode) {
      this.initDesignMode(); 
    }
  }

  handleSliderAfterInitialization(swiperInstance) {
    super.handleSliderAfterInitialization(swiperInstance);
    this.addEventListeners();
  }

  addEventListeners() {
    this.tabs.forEach((tab) => {
      tab.setAttribute("data-scroll", tab.getBoundingClientRect().left);
      tab.addEventListener("click", this.switchTabs.bind(this, tab));
    });
  }

  switchTabs(tab) {
    if (tab.classList.contains("active")) {
      return;
    }
    this.querySelector("[main-slider]").classList.add("animate-slider-hidden");
    const newSlides = this.template.content.querySelectorAll(
      `[data-content="${tab.getAttribute("data-tab")}"] .swiper-slide`
    );
    const animationEl = this.querySelector("animation-reveal.swiper-wrapper");
    setTimeout(() => {
      this.tabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");
      this.swiperInstance.removeAllSlides();
      newSlides.forEach((slide) => {
        this.swiperInstance.appendSlide(slide.outerHTML);
        const appendedSlide = this.swiperInstance.slides[
          this.swiperInstance.slides.length - 1
        ];
        const mediaPlayer = appendedSlide.querySelector(
          "default-player"
        );
        if (mediaPlayer && typeof mediaPlayer._renderMedia === "function") {
          mediaPlayer._renderMedia();
        }
      });
      this.querySelector("[main-slider]").classList.remove(
        "animate-slider-hidden"
      );
      animationEl.animateImageTxt({
        target: {
          children: animationEl.querySelectorAll(".swiper-slide"),
        },
      });
    }, 100);

    //tab scroll to view (for mobile overflow)
    tab.parentElement.scrollLeft = tab.dataset.scroll - window.innerWidth / 4;

    // Update View All link for featured-collection sections
    const featuredCollection = this.closest('[featured-collection]');
    if (featuredCollection) {
      const url = tab.dataset.viewallUrl || '';
      featuredCollection.querySelectorAll('[viewall-link]').forEach(link => {
        link.href = url;
        link.classList.toggle('d-none', !url);
      });
    }
  }

  initDesignMode() {
    const getParentElement = (el, elToGet) => {
      return el.closest(elToGet);
    };
    document.addEventListener("shopify:block:select", (e) => {
      if (!!getParentElement(e.target, "carousel-with-tabs")) {
        e.target.click();
      }
    });
  }
}

customElements.get("carousel-with-tabs") ||
  customElements.define("carousel-with-tabs", CarouselWithTabs);


class QuizCarouselComponent extends CarouselComponent {
  constructor() {
    super();
    this.slideProgressBarCurrent = this.querySelector("[slide-progress-current]");
    this.slideProgressBarTotal = this.querySelector("[slide-progress-total]");
    this.quizNextButton = this.querySelector("[quiz-next-button]");
    document.addEventListener(_EVENT_HELPER.quizFormChange, this.handleQuizFormChange.bind(this));
    this.quizNextButton?.addEventListener('click', this.handleQuizNextButtonClick.bind(this));
    this.skipButton = this.querySelector("[skip-button]");
    document.addEventListener(_EVENT_HELPER.showDrawer, this.handleShowDrawer.bind(this));
  }

  handleShowDrawer(event) {

    // Check if the event.target is a button with a template inside it
    const button = event?.target;
    if (button && button.tagName === "BUTTON") {
      const template = button.querySelector("template");
      if (template) {
        // Find the drawer for quiz-support-guide-drawer
        const drawer = document.querySelector('[drawer-type="quiz-support-guide-drawer"]');
        if (drawer) {
          // Replace only the content of drawer__body with element [data-drawer-content] from the template, if it exists.
          const drawerContentHeader = drawer.querySelector("[drawer-content] [header-drawer-body]");
          const drawerContentBody = drawer.querySelector("[drawer-content] [drawer-scrollable-content]");
          const templateContent = template.content;
          const replacementContentHeader = templateContent.querySelector("[drawer-content] [header-drawer-body]");
          const replacementContentBody = templateContent.querySelector("[drawer-content] [drawer-scrollable-content]");
          if (drawerContentHeader && drawerContentBody && replacementContentHeader && replacementContentBody) {
            drawerContentHeader.innerHTML = replacementContentHeader.innerHTML;
            drawerContentBody.innerHTML = replacementContentBody.innerHTML;
          }
        }
      }
    }
  }

  handleSliderAfterInitialization(swiperInstance) {
    super.handleSliderAfterInitialization(swiperInstance);
    if (this.slideProgressBarCurrent) this.slideProgressBarCurrent.textContent = '1';
    if (this.slideProgressBarTotal) this.slideProgressBarTotal.textContent = swiperInstance.slides.length;
    this.updateQuizNextButtonState(swiperInstance);
  }

  handleFunctionalityAfterSlideChange(swiperInstance) {
    super.handleFunctionalityAfterSlideChange(swiperInstance);
    if (this.slideProgressBarCurrent) this.slideProgressBarCurrent.textContent = swiperInstance.activeIndex + 1;
    if (this.slideProgressBarTotal) this.slideProgressBarTotal.textContent = swiperInstance.slides.length;
    // Check if the current slide has any checked input[type="radio"]
    const currentSlide = swiperInstance.slides[swiperInstance.activeIndex];
    if (currentSlide && (
      currentSlide.querySelector('input[type="radio"]:checked') ||
      currentSlide.querySelector('input[type="checkbox"]:checked')
    )) {
      this.quizNextButton?.removeAttribute("disabled");
    } else {
      this.quizNextButton?.setAttribute("disabled", "disabled");
    }
    this.updateQuizNextButtonState(swiperInstance);
  }

  updateQuizNextButtonState(swiperInstance) {
    const isLastSlide = swiperInstance.activeIndex === swiperInstance.slides.length - 1;
    const isSkipQuestion = swiperInstance.slides[swiperInstance.activeIndex].dataset.skipQuestion;
    this.toggleQuizButtonMode(isLastSlide, isSkipQuestion);
    if (isSkipQuestion) {
      this.skipButton?.classList.remove("visually-hidden");
    } else {
      this.skipButton?.classList.add("visually-hidden");
    }
  }

  handleQuizFormChange(event) {
    const isMultipleChoice = this.swiperInstance.slides[this.swiperInstance.activeIndex].dataset.multipleChoice;
    const isSkipQuestion = this.swiperInstance.slides[this.swiperInstance.activeIndex].dataset.skipQuestion;
    const currentSlide = this.swiperInstance.slides[this.swiperInstance.activeIndex];
    if (isMultipleChoice) {
      const checkedInputs = currentSlide.querySelectorAll('input[type="checkbox"]:checked');
      if (checkedInputs.length > 0 || isSkipQuestion) {
        this.quizNextButton?.removeAttribute("disabled");
      } else {
        this.quizNextButton?.setAttribute("disabled", "disabled");
      }
    } else {
      this.quizNextButton?.removeAttribute("disabled");
    }

  }

  handleQuizNextButtonClick(event) {
    this.swiperInstance?.slideNext();
  }

  toggleQuizButtonMode(isSubmitMode, isSkipQuestion) {
    if (!this.quizNextButton) return;

    const nextTextEl = this.quizNextButton.querySelector("[quiz-next-button-text]");
    const submitTextEl = this.quizNextButton.querySelector("[quiz-submit-button-text]");
    const applyModeChanges = () => {
      this.quizNextButton.setAttribute("type", isSubmitMode ? "submit" : "button");
      isSkipQuestion && isSubmitMode && this.quizNextButton.removeAttribute("disabled");
      nextTextEl?.classList.toggle("d-none", isSubmitMode);
      submitTextEl?.classList.toggle("d-none", !isSubmitMode);

    };

    if (typeof requestAnimationFrame === "function") {
      requestAnimationFrame(applyModeChanges);
    } else {
      applyModeChanges();
    }
  }

}

customElements.get('quiz-carousel-component') || customElements.define('quiz-carousel-component', QuizCarouselComponent);


class CartCarouselComponent extends CarouselComponent {
  _isCartAutoplay() {
    return this.sliderAutoplay === 'true';
  }

  _onCartDrawerShow(e) {
    if (e.detail.drawerType !== 'cart-drawer' || !this._isCartAutoplay()) return;
    this.swiperInstance?.autoplay?.start();
  }

  _onCartDrawerHide(e) {
    if (e.detail.drawerType !== 'cart-drawer' || !this._isCartAutoplay()) return;
    this.swiperInstance?.autoplay?.stop();
  }

  handleSliderAfterInitialization(swiperInstance) {
    super.handleSliderAfterInitialization(swiperInstance);
    // Don't autoplay while drawer is hidden — controlled by open/close events instead.
    if (this._isCartAutoplay()) swiperInstance.autoplay.stop();
  }

  connectedCallback() {
    super.connectedCallback();
    this._boundShow = this._onCartDrawerShow.bind(this);
    this._boundHide = this._onCartDrawerHide.bind(this);
    document.addEventListener(_EVENT_HELPER.showDrawer, this._boundShow);
    document.addEventListener(_EVENT_HELPER.hideDrawer, this._boundHide);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(_EVENT_HELPER.showDrawer, this._boundShow);
    document.removeEventListener(_EVENT_HELPER.hideDrawer, this._boundHide);
  }

  dynamic_navigation_color(swiperInstance, overrideIndex = null) {
    if (!this.sliderController) return;
    const index = overrideIndex ?? swiperInstance?.activeIndex;
    const activeSlideElement = swiperInstance?.slides?.[index];
    if (!activeSlideElement) return;
    const [bg, progress] = (activeSlideElement.getAttribute("data-color") || "")
      .split(" ")
      .filter(Boolean);
    this.style.setProperty("--color-slider-background", bg || "");
    this.style.setProperty("--color-slider-progress", progress || "");
  }

}

customElements.get('cart-carousel-component') || customElements.define('cart-carousel-component', CartCarouselComponent);

class CollectionCarouselComponent extends CarouselComponent {
  constructor() {
    super();
  }

  handleSliderAfterInitialization(swiperInstance) {
    super.handleSliderAfterInitialization(swiperInstance);

    if (swiperInstance.virtualSize <= swiperInstance.size) {
      this.querySelectorAll('.pagination-button').forEach(btn => btn.style.display = 'none');
      swiperInstance.params.centeredSlides = false;
      swiperInstance.params.centeredSlidesBounds = false;
      swiperInstance.update();
    }
  }
}
customElements.get('collection-carousel-component') || customElements.define('collection-carousel-component', CollectionCarouselComponent);



class Drawer extends HTMLElement {
    constructor() {
        super();
        this.drawerType = this.getAttribute('drawer-type');
        this.isDrawerOpen = false;
        this.drawerActiveClass = 'drawer-active';
        this.closeDrawerEl = this.querySelectorAll('[close-drawer]');
        this.drawerOverlay = this.querySelector('[drawer-overlay]');
        this.allowBodyScroll = this.hasAttribute("allow-body-scroll")
        document.addEventListener(
            _EVENT_HELPER.showDrawer,
            this._handle_ShowDrawer_Action.bind(this)
        );
        document.addEventListener(
            _EVENT_HELPER.hideDrawer,
            this._handle_HideDrawer_Action.bind(this)
        );

        // Hide drawer if clicked on overlay
        this.drawerOverlay?.addEventListener('click', (e) => {
            if (!e.target.hasAttribute('drawer-overlay')) return;
            if (this.drawerOverlay.hasAttribute('prevent-click')) return;
            HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.hideDrawer, this, {
                drawerType: this.drawerType,
            });
        });

        if (this.closeDrawerEl) {
            [...this.closeDrawerEl].forEach((el) => {
                el.addEventListener('click', (e) => {
                    // this._handle_HideDrawer_Action();
                    HELPER_UTIL.dispatchCustomEvent(
                        _EVENT_HELPER.hideDrawer,
                        this,
                        {
                            drawerType: this.drawerType,
                        }
                    );
                });
                el.addEventListener('keyup', (e) => {
                    if (e.keyCode === 13) {
                        HELPER_UTIL.dispatchCustomEvent(
                            _EVENT_HELPER.hideDrawer,
                            this,
                            {
                                drawerType: this.drawerType,
                            }
                        );
                    }
                });
            });
        }

        document.addEventListener('keyup', (e) => {
            if (e.code === 'Escape') {
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.hideDrawer,
                    this,
                    {
                        drawerType: this.drawerType,
                    }
                );
            }
        });
    }

    /* Close any other drawer if open before opening target drawer  */
    closeAnyPreviousActiveDrawer(currentActiveDrawer) {
        // lookbook-popup is a Drawer subclass too — product cards inside it can open the quick view
        // drawer, so it has to be closed like any other open drawer or it stays stacked on top.
        const drawerComponent = document.querySelectorAll(
            'drawer-component, cart-drawer-component, lookbook-popup'
        );
        drawerComponent.forEach((drawer) => {
            if (
                drawer.isDrawerOpen &&
                drawer.drawerType != currentActiveDrawer
            ) {
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.hideDrawer,
                    this,
                    {
                        drawerType: drawer.drawerType,
                    }
                );
            }
        });
    }

    activateTrapFocus(e) {
        try {
            this.trapFocus();
        } catch (error) {
            console.log(error);
        }
    }

    deActivateTrapFocus() {
        try {
            setTimeout(() => {
                window.currentActiveElement &&
                    window.currentActiveElement.focus();
                this.elementThatTriggeredDrawer = null;
            }, 100);
        } catch (e) {
            console.log(e);
        }
    }

    // Handle moving element to portal conatiner if portalDrawerTo attribute is set
    handlePortalDrawerTo(e) {
        const { portalDrawerTo, portalBackSectionId } = e.detail;
        if (portalDrawerTo) {
            const portal = document.querySelector(portalDrawerTo);
            if (!portal) return;
            portal.querySelectorAll(`[drawer-type="${this.drawerType}"]`).forEach((el) => {
                if (el !== this) el.remove();
            });
            portal.appendChild(this);
            this.portalBackSectionId = portalBackSectionId;
        }
    }

    // Handle moving element back to parent if drawer has  section id of the elements from where the element was moved to portal container
    handleProtalDrawerBackToParent() {
        if (this.portalBackSectionId) {
            document.getElementById(this.portalBackSectionId).appendChild(this);
        }
    }

    _handle_ShowDrawer_Action(e) {
        if (!this.isConnected) return;
        const { drawerType: drawerName } = e.detail;
        if (this.drawerType !== drawerName)
            return new Error('Valid drawer-type attribute value should be set');

        this.handlePortalDrawerTo(e);

        // Run Show Drawer functionalities
        setTimeout(() => {
            this.ariaHidden = false;
            this.closeAnyPreviousActiveDrawer(drawerName);
            this.classList.add(this.drawerActiveClass);
            this.isDrawerOpen = true;
            !this.allowBodyScroll && HELPER_UTIL.bodyInteractions.disableScroll();
            this.activateTrapFocus(e);
            this._drawerAnimation();
        }, 100);

    }
    _drawerAnimation() {
        if (this.hasAttribute("animate-drawer")) {
            let sequence = []

            this.querySelectorAll("[animation-fade-effect]") && sequence.push([
                this.querySelectorAll("[animation-fade-effect]"), {
                    opacity: [0, 1]
                }, {
                    delay: parseFloat(0.3),
                    duration: parseFloat(0.3),
                    ease: "ease"
                }
            ])


            this.querySelectorAll("[animate-drawer-item]") && sequence.push([
                this.querySelectorAll("[animate-drawer-item]"), {
                    opacity: [0, 1],
                    x: [HELPER_UTIL.isRTL() ? -20 : 20, 0]
                }, {
                    delay: Motion.stagger(0.05),
                    duration: parseFloat(0.2),
                    ease: "ease"
                }
            ])


            this.querySelector("[animation-fade-up]") &&
                sequence.push([
                    this.querySelector("[animation-fade-up]"), {
                        visibality: ["hidden", "visible"],
                        opacity: [0, 1],
                        y: ["100%", "0"]
                    }, {
                        duration: parseFloat(0.3),
                        ease: "ease",
                        at: "<"
                    }
                ])
            this.querySelectorAll("[animation-slide-left]") &&
                sequence.push([
                    this.querySelectorAll("[animation-slide-left]"), {
                        visibality: ["hidden", "visible"],
                        opacity: [0, 1],
                        x: [HELPER_UTIL.isRTL() ? "-20%" : "20%", "0"]
                    }, {
                        delay: Motion.stagger(0.05),
                        duration: parseFloat(0.3),
                        ease: "ease",
                        at: "<"
                    }
                ])

            Motion.animate(sequence)

        } else if (this.drawerType === 'header') {
            setTimeout(() => {
                const allItems = this.querySelectorAll("[animate-hamberge-item]:not(.submenu-active)");
                const visibleItems = Array.from(allItems).filter((el) => el.offsetParent !== null);
                Motion.animate(visibleItems, {
                    opacity: [0, 1],
                    x: [HELPER_UTIL.isRTL() ? "20%" : "-20%", "0"]
                }, {
                    delay: Motion.stagger(0.1),
                    duration: parseFloat(0.3),
                    ease: "cubic-bezier(.75,0,.175,1)"
                })

                Motion.animate(this.querySelector("[animate-hamberge-footer]"),
                    {
                        opacity: [0, 1],
                        y: ["100%", "0"]
                    }, {
                    delay: 0,
                    duration: parseFloat(0.5),
                    ease: "cubic-bezier(.75,0,.175,1)"
                }
                )
            }, 200)
        } else if (this.drawerType === 'options') {
            Motion.animate(this.querySelectorAll("[animation-fade-in]"), {
                visibality: ["hidden", "visible"],
                opacity: [0, 1]
            }, {
                delay: 0.5,
                duration: parseFloat(0.5),
                ease: "ease",

            })

            Motion.animate(this.querySelectorAll("[animation-fade-up]"), {
                visibality: ["hidden", "visible"],
                opacity: [0, 1],
                y: ["2rem", "0"]
            }, {
                delay: 0.5,
                duration: parseFloat(0.5),
                ease: "ease",

            })
        }
    }
    _handle_HideDrawer_Action(e) {
        if (!this.isDrawerOpen) return;

        this.classList.remove(this.drawerActiveClass);
        this.isDrawerOpen = false;
        HELPER_UTIL.bodyInteractions.enableScroll();
        setTimeout(() => {
            this.deActivateTrapFocus();
        }, 300);

        setTimeout(() => {
            this.ariaHidden = true;
            this.handleProtalDrawerBackToParent();
        }, 500);
    }

    getFocusableElements() {
        let appendAriaEl = this;
        if (this.drawerType === 'address-form') {
            appendAriaEl = this.querySelector('[aria-hidden=false]');
        }
        let els = appendAriaEl.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), input[type="search"]:not([disabled]), select:not([disabled])'
        );

        if (this.drawerType === 'address-form') {
            let newArr = [...els];
            newArr.unshift(this.closeDrawerEl[0]);
            return newArr;
        }
        return els;
    }

    trapFocus() {
        this.focusableEls = this.getFocusableElements();
        const customTargetElement = this.getAttribute(
            'focus-element-index'
        );
        let firstFocusableEl = this.focusableEls[0];
        let lastFocusableEl = this.focusableEls[this.focusableEls.length - 1];
        let KEYCODE_TAB = 9;

        // Focus First element
        setTimeout(() => {
            if (customTargetElement) {
                this.focusableEls[Number(customTargetElement)].focus();
            } else {
                firstFocusableEl.focus();
            }
        }, 100);

        this.addEventListener('keydown', function (e) {
            let isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        });
    }
}

customElements.get('drawer-component') ||
    customElements.define('drawer-component', Drawer);

class CartDrawerComponent extends Drawer {
    constructor() {
        super();
        this.buttonTargetAttribute = '[get-element-height]';
        this.bottomSheets = ['order-note', 'discount'];
        this.buttonContainerHeight = this.querySelector(
            this.buttonTargetAttribute
        )
            ? this.querySelector(this.buttonTargetAttribute).offsetHeight
            : null;

        // Look for changes happening inside an element
        this.isWatchForMutation = this.hasAttribute('watch-for-mutation');

        if (this.isWatchForMutation) {
            this.checkForMutationHappeningInsideElement();
        }

        if (typeof ResizeObserver !== 'undefined') {
            this._panelResizeObserver = new ResizeObserver(() => this.setDyanmicHeight());
            this._reattachPanelObserver();
        }

        document.addEventListener(
            _EVENT_HELPER.fireBottomSheetEvent,
            this.handleBottomSheetOverlaysDependencyFunctionalities.bind(this)
        );
    }

    _handle_HideDrawer_Action(e) {
        super._handle_HideDrawer_Action(e);
        [...this.querySelectorAll('bottom-sheet')].forEach((sheet) => {
            sheet.classList.remove('active');
        });
        this.handleBottomSheetOverlays({
            detail: { whichBottomSheet: 'order-note', actionType: 'hide' },
        });
    }

    checkForMutationHappeningInsideElement() {
        const targetNode = this;
        const mutationObserver =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver;
        // Options for the observer (which mutations to observe)
        const config = { childList: true, subtree: true };

        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === 'childList') {
                    this.setDyanmicHeight();
                }
            }
        };

        // Create an observer instance linked to the callback function
        const observer = new mutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }

    _reattachPanelObserver() {
        if (!this._panelResizeObserver) return;
        const panel = this.querySelector(this.buttonTargetAttribute);
        if (!panel || panel === this._observedPanel) return;
        this._panelResizeObserver.disconnect();
        this._panelResizeObserver.observe(panel);
        this._observedPanel = panel;
    }

    setDyanmicHeight() {
        const currentButtonContainerHeight = this.querySelector(
            this.buttonTargetAttribute
        )?.offsetHeight;
        // Guard against undefined to prevent setting --set-container-height: undefinedpx
        // which causes Safari to invalidate the CSS calc() and break the drawer body height
        if (currentButtonContainerHeight === undefined) return;
        if (
            !currentButtonContainerHeight &&
            this.buttonContainerHeight === currentButtonContainerHeight
        )
            return;
        this.buttonContainerHeight = currentButtonContainerHeight;
        this.style.setProperty(
            '--set-container-height',
            `${currentButtonContainerHeight}px`
        );
        this._reattachPanelObserver();
    }

    handleBottomSheetOverlays(e) {
        const { whichBottomSheet, actionType } = e.detail;
        if (!whichBottomSheet && !this.bottomSheets?.includes(whichBottomSheet))
            return;
        const bottomSheetOverlay = this.querySelector('[bottom-sheet-overlay]');
        if (actionType === 'show') {
            bottomSheetOverlay.classList.add('active');
        } else if (actionType === 'hide') {
            bottomSheetOverlay.classList.remove('active');
        }
    }

    preventDrawerOverlayClick(event) {
        switch (event.detail.actionType) {
            case 'show':
                this.drawerOverlay.setAttribute('prevent-click', 'true');
                break;
            case 'hide':
                this.drawerOverlay.removeAttribute('prevent-click');
                break;
            default:
                return;
        }
    }

    handleBottomSheetOverlaysDependencyFunctionalities(event) {
        this.handleBottomSheetOverlays(event);
    }
}

customElements.get('cart-drawer-component') ||
    customElements.define('cart-drawer-component', CartDrawerComponent);

class NewsletterPopup extends Drawer {
    constructor() {
        super();
        this.openDrawerOnTimeout = null;
        this.drawerShown = false;
        if (!this.hasAttribute('only-once')) {
            localStorage.removeItem('theme:popup-appeared', 'true');
        }
    }
    connectedCallback() {
        if (window.scrollY > 100) {
            this.showNewsLetterPopup();
        } else {
            document.addEventListener(
                'scroll',
                this.showNewsLetterPopup.bind(this)
            );
        }

        this.addEventListener(_EVENT_HELPER.hideDrawer, () => {
            if (this.openDrawerOnTimeout) {
                clearTimeout(this.openDrawerOnTimeout);
            }
        });

        this.open = this.hasAttribute('open');

        if (
            this.open &&
            !localStorage.getItem('theme:popup-success-appeared')
        ) {
            this.show();
            localStorage.setItem('theme:popup-success-appeared', true);
        }
    }

    showNewsLetterPopup() {
        const ageVerified = document.cookie.includes("age-verified=true");
        const agePopup = document.querySelector("age-verification");

        // Case 1: Not verified → wait until age popup closes
        if (!ageVerified && agePopup) {
            document.addEventListener(
                _EVENT_HELPER.hideDrawer,
                (e) => {
                    if (e.detail?.drawerType === "age-popup") {
                        // Show newsletter immediately after age verification
                        setTimeout(() => this.show(), 300);
                    }
                },
                { once: true }
            );
            return;
        }
        if (window.scrollY > 100 && this.shouldAppearAutomatically) {
            this.openDrawerOnTimeout = setTimeout(
                this.showTimeoutFunction.bind(this),
                this.apparitionDelay
            );
            document.removeEventListener(
                'scroll',
                this.showNewsLetterPopup.bind(this)
            );
        }
    }

    showTimeoutFunction() {
        this.show();
    }

    show() {
        if (!this.drawerShown) {
            this.drawerShown = true;
            HELPER_UTIL.dispatchCustomEvent(
                _EVENT_HELPER.showDrawer,
                document,
                {
                    drawerType: 'newsletter-popup',
                }
            );
            localStorage.setItem('theme:popup-appeared', 'true');
            document.removeEventListener(
                'scroll',
                this.showNewsLetterPopup.bind(this)
            );
        }
    }

    get apparitionDelay() {
        return parseInt(this.getAttribute('apparition-delay') || 0) * 1e3;
    }
    get shouldAppearAutomatically() {
        return !(
            localStorage.getItem('theme:popup-filled') === 'true' ||
            localStorage.getItem('theme:popup-appeared') === 'true'
        );
    }
}
if (!window.customElements.get('newsletter-popup')) {
    window.customElements.define('newsletter-popup', NewsletterPopup);
}

// HTML5 video player component

class defaultVideoPlayer extends HTMLElement {
    constructor() {
        super();
        this.player = this.querySelector('video');

        this.mediaType = this.dataset.mediaType;
        this.mediaEndTime = this.getAttribute('media-end-time') ? Number(this.getAttribute('media-end-time')) : null;
        // Set to true once video is played
        this.videoPlayed = false;
        this.videoIsPlaying = false;
        // Refere play button on video player
        this.playButton = this.querySelector('[play-media]');
        // Refer video wrapper preview element for poster and play button
        this.videoPreviewElements = this.querySelector(
            '[video-preview-elements]'
        );

        this.mediaAutoplay = this.hasAttribute('media-autoplay');

        this.videoOverlayElements = this.querySelectorAll(
            '[video-overlay-elements]'
        );

        // If play button is present in DOM then attach e vent listener to play the video once clicked
        if (this.playButton) {
            this.playButton.addEventListener(
                'click',
                this._renderMedia.bind(this)
            );
            // Play video when you press "Enter" key
            this.playButton.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this._renderMedia();
                }
            });
        }

        if (this.mediaAutoplay) {
            this.addEventListener(_EVENT_HELPER.elementIsInCurrentView, (e) => {
                // Only if video is not playing then play the video
                if (!this.videoIsPlaying) {
                    this._renderMedia();
                }
            });
        }

        if (this.mediaType === 'video') {
            this.player.addEventListener('play', () => {
                this.videoIsPlaying = true;
            });

            this.player.addEventListener('pause', () => {
                this.videoIsPlaying = false;
            });
            // Hide overlay immediately when video starts playing (for autoplay videos)
            this.player.addEventListener('playing', () => {
                if (this.mediaAutoplay) {
                    this._hideVideoOverlay();
                    this._hidePosterAndPlayButton();
                }
            });

        }

        // Loading state listeners — outside mediaType check so they fire
        // regardless of whether data-media-type="video" is set in the template
        if (this.player) {
            this.player.addEventListener('waiting', () => {
                this.classList.add("video-is-loading");
            });
            this.player.addEventListener('stalled', () => {
                if (this.player.readyState < 3) this.classList.add("video-is-loading");
            });
            this.player.addEventListener('playing', () => {
                this.classList.remove("video-is-loading");
            });
        }

        // Restart video based on the end time value
        if (this.mediaEndTime) {
            this._triggerVideoResetEvents();
        }
    }


    _triggerVideoResetEvents() {
        this.player.addEventListener('loadedmetadata', (e) => {
            this.videoTotalTime = this.player.duration
        })
        this.player.addEventListener('timeupdate', (e) => {
            let finalMediaReseTime = this.videoTotalTime <= this.mediaEndTime ? this.videoTotalTime : this.mediaEndTime;
            if (this.player.currentTime > finalMediaReseTime) {
                this.player.currentTime = 0;
            }
        })
    }

    // Hide preview element wrapper which consist of poster and play button
    _hidePosterAndPlayButton() {
        if (
            this.videoPreviewElements &&
            !this.videoPreviewElements.classList.contains(
                'video-elements-hidden'
            )
        ) {
            this.videoPreviewElements.classList.add('video-elements-hidden');
        }
    }

    _hideVideoOverlay() {
        this.videoOverlayElements?.forEach((el) => {
            el.classList.add('video-elements-hidden');
        });
    }

    // Play video
    _play() {
        if (!this.player) {
            return;
        }
        const playPromise = this.player.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    this.videoIsPlaying = true;
                    this._hidePosterAndPlayButton();
                })
                .catch(() => {
                    this.videoIsPlaying = false;
                });
        }
    }

    // Pause Video
    _pause() {
        this.player.pause();
        this.videoIsPlaying = false;
    }
    // Call to render media like iframe for vimeo and youtube player
    _renderMedia(videoSources) {
        if (!this.player) {
            return;
        }
        let sources;
        if (videoSources instanceof Event) {
            sources = this.player.querySelectorAll('source');
        }
        else {
            sources = videoSources || this.player.querySelectorAll('source');
        }
        let sourcesUpdated = false;
        sources.forEach(source => {
            const sourceUrl = source.dataset.src;
            if (!source.src && sourceUrl) {
                source.src = sourceUrl;
                sourcesUpdated = true;
            }
        });
        if (sourcesUpdated) {
            this.player.load();
            this.classList.add("video-is-loading");
            this.player.addEventListener('canplay', () => {
                this.classList.remove("video-is-loading");
            }, { once: true });
        }
        if (this.mediaAutoplay) {
            this.player.muted = true;
            this.player.autoplay = true;
            this.player.loop = true;
        }
        this._handleSupportMediaAndPlayVideo();
    }

    // Handle Support media and play
    _handleSupportMediaAndPlayVideo() {
        // Hide poster image and play button
        if (!this.mediaAutoplay) {
            this._hideVideoOverlay();
            this._hidePosterAndPlayButton();
        }

        // Play video
        this._play();
        // Set play media to true once played
        if (!this.videoPlayed) {
            this.videoPlayed = true;
        }
    }
}

customElements.get('default-player') ||
    customElements.define('default-player', defaultVideoPlayer);

class YoutubePlayer extends defaultVideoPlayer {
    constructor() {
        super();
        this.videoId = this.getAttribute('video-id');
        this.getIFrameEl = this.querySelector('[iframe-element]').id;
        this.showVideoControls = this.hasAttributes('show-controls');
    }

    // Generate iframe for youtube player and play video
    _generateYoutubeIframe() {
        // Check iframe if generated and then play video based "onReady" State
        if (!this.player) {
            let yTPlayerConfig = {
                playerVars: {
                    playsinline: 1,
                    rel: 0,
                    modestbranding: 1,
                },
            };

            if (this.mediaAutoplay) {
                yTPlayerConfig.playerVars.loop = 1;
                yTPlayerConfig.playerVars.controls = 0;
                yTPlayerConfig.playerVars.disablekb = 1;
                yTPlayerConfig.playerVars.fs = 0;
                yTPlayerConfig.playerVars.playlist = this.videoId;
            }
            // Show  youtube video controls based if 'show-controls' attribute is present
            if (this.showVideoControls) {
                yTPlayerConfig.playerVars.controls = 1;
            }
            this.player = new YT.Player(this.getIFrameEl, {
                width: '100%',
                height: '100%',
                ...yTPlayerConfig,
                videoId: this.videoId,
                events: {
                    onReady: this._handleSupportMediaAndPlayVideo.bind(this),
                },
            });
        } else {
            // Iframe is already generated then play video if generateYoutubeVideo is called again
            this._play();
        }
    }

    _appendScript(callBack) {
        let yTscript = document.createElement('script');
        yTscript.src = 'https://www.youtube.com/iframe_api';
        this.append(yTscript);
        yTscript.onload = () => {
            // Wait for YT script to get to create player instance
            YT.ready(callBack);
        };
    }
    // Render Iframe
    _renderMedia() {
        this._appendScript(() => {
            this._generateYoutubeIframe();
        });
    }
    // Play APi for youtube Players
    _play() {
        if (!this.player) return;
        if (this.mediaAutoplay) {
            this.player.mute();
        }
        this._hidePosterAndPlayButton();
        this.player.playVideo();
        this.videoIsPlaying = true;
    }
    // Pause Api for youtube players
    _pause() {
        if (!this.player) return;
        this.player.pauseVideo();
    }
}

customElements.get('youtube-player') ||
    customElements.define('youtube-player', YoutubePlayer);

class VimeoPlayer extends defaultVideoPlayer {
    constructor() {
        super();
        this.videoId = this.getAttribute('video-id');
        this.getIFrameEl = this.querySelector('[iframe-element]').id;
        this.showVideoControls = this.hasAttributes('show-controls');
    }

    // Generate Vimeo Iframe based
    _generateVimeoIframe() {
        // If iframe is not already generated then
        if (!this.player) {
            let vimeoConfig = {};
            if (this.mediaAutoplay) {
                /* When background param is set to true followings params will be auto set
                    1) Video will loop
                    2) Video will be muted

                    Setting video background strictly tell api to that video is been auto played

                */
                vimeoConfig.muted = true;
                vimeoConfig.autoplay = true;
                vimeoConfig.loop = true;
                vimeoConfig.controls = false;
            }
            if (this.showVideoControls) {
                vimeoConfig.controls = true;
            }
            this.player = new Vimeo.Player(this.getIFrameEl, {
                id: this.videoId,
                ...vimeoConfig,
                // background: true,
                // muted: false,
            });
            this.player.ready().then(() => {
                this._handleSupportMediaAndPlayVideo();
            });
        } else {
            // Iframe is already generated then play video
            this._play();
        }
    }

    _play() {
        this.player
            .play()
            .then(() => {
                this._hidePosterAndPlayButton();
            })
            .catch((error) => {
                console.log(error);
                let errorMessage = 'Somethings went wrong';
                switch (error.name) {
                    case 'PasswordError':
                        // The video is password-protected
                        errorMessage = 'This Video is password protected';
                        break;
                    case 'PrivacyError':
                        // The video is private
                        errorMessage = 'This Video is private';
                        break;
                    default:
                        // Some other error occurred
                        // alert('Somethings went wrong');
                        errorMessage =
                            'Somethings went wrong while playing video. Please try again';
                        break;
                }
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.triggerToastMessage,
                    document,
                    {
                        toastType: 'common-errors',
                        messageType: 'error',
                        message: errorMessage,
                    }
                );
                throw new Error(error);
            });
    }

    _pause() {
        this.player
            .pause()
            .then(() => console.log('Video paused'))
            .catch((error) => {
                switch (error.name) {
                    case 'PasswordError':
                        // The video is password-protected
                        alert('This Video is password protected');
                        break;
                    case 'PrivacyError':
                        // The video is private
                        alert('This Video is private');
                        break;
                    default:
                        // Some other error occurred
                        alert('Somethings went wrong');
                        break;
                }
                throw new Error(error);
            });
    }

    _appendScript(callBack) {
        let vimeoScript = document.createElement('script');
        vimeoScript.src = 'https://player.vimeo.com/api/player.js';
        this.append(vimeoScript);
        vimeoScript.onload = () => {
            callBack();
        };
    }

    _renderMedia() {
        this._appendScript(() => {
            this._generateVimeoIframe();
        });
    }
}

customElements.get('vimeo-player') ||
    customElements.define('vimeo-player', VimeoPlayer);

class Model3dComponent extends HTMLElement {
    constructor() {
        super();
        this.modelViewer = this.querySelector('model-viewer');
    }

    _play() {
        this.player.play();

        /* FIXME: ADd way to auto play 3d model when 3d model is rendered 
                Currently the issue is by auto playing a 3d model using
                Skips then current 3d model slide  
        */

        HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.disableSlide, this);
    }

    _pause() {
        this.player.pause();
    }

    // Add wrapper functionality to interact google model-viwer
    // 'model-viwer-ui' feature is provided by shopify
    // This functionality will add 'zoom buttons' and 'play 3d model button' to be shown with the 3d model media
    _loadContent() {
        Shopify.loadFeatures([
            {
                name: 'shopify-xr',
                version: '1.0',
                onLoad: this._setupShopifyXr.bind(this),
            },
            {
                name: 'model-viewer-ui',
                version: '1.0',
                onLoad: this._setupModelViewerUI.bind(this),
            },
        ]);
    }

    _setupModelViewerUI(errors) {
        if (errors) return;
        this.modelViewer.addEventListener(
            'shopify_model_viewer_ui_toggle_play',
            () => {
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.disableSlide,
                    this
                );
            }
        );
        if (!this.player) {
            this.player = new Shopify.ModelViewerUI(this.modelViewer);
        }
    }

    _setupShopifyXr(errors) {
        if (errors) return;
        if (!window.ShopifyXR) {
            document.addEventListener('shopify_xr_initialized', () =>
                this._setupShopifyXr()
            );
            return;
        }

        document
            .querySelectorAll('[id^="ProductJSON-"]')
            .forEach((modelJSON) => {
                window.ShopifyXR.addModels(JSON.parse(modelJSON.textContent));
                modelJSON.remove();
            });
        window.ShopifyXR.setupXRElements();
    }

    _renderMedia() {
        // this._loadContent();
    }

    connectedCallback() {
        this._loadContent();
    }
}

customElements.get('model-3d-component') ||
    customElements.define('model-3d-component', Model3dComponent);



class DesktopMobileVideoSupport extends defaultVideoPlayer {
    constructor() {
        super();
        this.isMobile = window.matchMedia('(max-width: 767px)');
        this._renderMediaOnView = this._renderMedia.bind(this);
        this.isMobile.addEventListener('change', this.reinitiatePlayerBasedOnScreen.bind(this));
        this.reinitiatePlayerBasedOnScreen();
    }
    reinitiatePlayerBasedOnScreen() {
        if (!this.player) {
            return;
        }
        this._resetSources();
        if (!this.isMobile.matches && !this.player.querySelector('source[desktop-sources]')) {
            this._removeOverlayElement();
            this._hideVideoOverlay();
            return;
        }
        if (this.mediaAutoplay) {
            // Add event listener to play video when element is in view
            if (!this.videoIsPlaying) {
                this.addEventListener(_EVENT_HELPER.elementIsInCurrentView, this._renderMediaOnView);
            }
            else {
                this._renderMedia();
            }
        }
        else {
            this._pause();
            this._removeOverlayElement();
        }
    }
    _resetSources() {
        if (!this.player) {
            return;
        }
        this.player.querySelectorAll('source').forEach((source) => {
            source.removeAttribute('src');
        });
        this.removeEventListener(_EVENT_HELPER.elementIsInCurrentView, this._renderMediaOnView);
    }
    _removeOverlayElement() {
        if (this.videoPreviewElements && this.videoPreviewElements.classList.contains('video-elements-hidden')
        ) {
            this.videoPreviewElements.classList.remove('video-elements-hidden');
        }
        this.videoOverlayElements &&
            this.videoOverlayElements.forEach((el) => {
                el.classList.remove('video-elements-hidden');
            });
    }

    _renderMedia() {
        if (!this.player) {
            return;
        }
        // Get appropriate sources based on current screen size
        const sourceSelector = this.isMobile.matches
            ? 'source[mobile-sources]'
            : 'source[desktop-sources]';
        const sources = this.player.querySelectorAll(sourceSelector);

        // Pass selected sources to parent class for rendering
        super._renderMedia(sources);
    }
    disconnectedCallback() {
        this.isMobile.removeEventListener('change', this.reinitiatePlayerBasedOnScreen.bind(this));
    }
}

customElements.get('desktop-mobile-video-support') ||
    customElements.define('desktop-mobile-video-support', DesktopMobileVideoSupport);
class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.toggleElementSelector = 'toggle-element';
        this.showCartPopup = this.hasAttribute('show-cart-popup');
        this.cartType = this.getAttribute('data-cart-type') || 'cart-drawer';
        this.cartDrawer = document.querySelector('drawer-cart');

        // All event handling via delegation on 'this' so listeners survive innerHTML replaces.
        this.addEventListener('click', this._onClick.bind(this));
        this.addEventListener('change', this._onInputChange.bind(this));
        this.addEventListener('submit', this._onFormSubmit.bind(this));
        this.addEventListener('mouseover', () => {
            document.querySelector('product-card button:focus')?.blur();
        });
    }

    connectedCallback() {
        // Uniquify input IDs and radio names on initial mount so cards sharing the
        // same product never fight over the browser's shared radio-name group.
        this._reUniquifyInputIds();
    }

    // Delegated click handler — quick-view, popup trigger, popup close
    _onClick(e) {
        const quickViewBtn = e.target.closest('[quick-view-button]');
        if (quickViewBtn) {
            e.stopPropagation();
            e.preventDefault();
            this.handleAddToProductQuickViewClick(quickViewBtn, window.drawer.quickView);
            return;
        }

        const trigger = e.target.closest('[trigger-variant-popup]');
        if (trigger) {
            e.preventDefault();
            e.stopPropagation();
            this._handlePopupTrigger();
            return;
        }

        const closeBtn = e.target.closest('[close-variant-popup]');
        if (closeBtn) {
            e.preventDefault();
            e.stopPropagation();
            this._closePopup();
        }
    }

    /* ----- Popup open / close ----- */

    _desktopPopup() {
        return this.querySelector('[product-card-variant-popup]:not(.card-variant-popup--in-sheet)');
    }

    _isPopupOpen() {
        return this._desktopPopup()?.getAttribute('aria-hidden') === 'false';
    }

    _handlePopupTrigger() {
        const popup = this._desktopPopup();
        const sheetId = popup?.getAttribute('mobile-bottom-sheet-id');

        if (window.matchMedia('(max-width: 767px)').matches && sheetId) {
            // After a variant change the card innerHTML is replaced, and after closing
            const sheet = this.querySelector(`bottom-sheet[bottom-sheet-id="${sheetId}"]`)
                || document.getElementById('portal')?.querySelector(`bottom-sheet[bottom-sheet-id="${sheetId}"]`);
            if (sheet) {
                this._portalSheet(sheet);
                HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.fireBottomSheetEvent, this, {
                    whichBottomSheet: sheetId,
                    actionType: 'show',
                    targetSheet: sheet,
                });
            }
            return;
        }

        this._isPopupOpen() ? this._closePopup() : this._openPopup();
    }

    _openPopup() {
        // Close any other open desktop popups on the page
        document.querySelectorAll('[product-card-variant-popup]:not(.card-variant-popup--in-sheet)[aria-hidden="false"]').forEach(p => {
            if (p !== this._desktopPopup()) {
                p.setAttribute('aria-hidden', 'true');
                p.closest('product-card')?.querySelector('[trigger-variant-popup]')?.setAttribute('aria-expanded', 'false');
            }
        });

        const popup = this._desktopPopup();
        if (!popup) return;
        popup.setAttribute('aria-hidden', 'false');
        this.querySelector('[trigger-variant-popup]')?.setAttribute('aria-expanded', 'true');

        // Keydown/outside-click close handlers — use arrow functions so they re-query from 'this'
        // rather than capturing the popup element, making them safe across innerHTML replaces.
        this._popupKeydown = (e) => e.key === 'Escape' && this._closePopup();
        this._popupDocClick = (e) => {
            const trigger = this.querySelector('[trigger-variant-popup]');
            if (e.target.closest('[product-card-variant-popup]') === this._desktopPopup()) return;
            if (trigger?.contains(e.target)) return;
            this._closePopup();
        };
        document.addEventListener('keydown', this._popupKeydown);
        setTimeout(() => document.addEventListener('click', this._popupDocClick), 0);
    }

    _closePopup() {
        const popup = this._desktopPopup();
        if (!popup || popup.getAttribute('aria-hidden') !== 'false') return;
        popup.setAttribute('aria-hidden', 'true');
        this.querySelector('[trigger-variant-popup]')?.setAttribute('aria-expanded', 'false');
        document.removeEventListener('keydown', this._popupKeydown);
        document.removeEventListener('click', this._popupDocClick);
    }

    _portalSheet(sheet) {
        const portal = document.getElementById('portal');
        if (!portal || sheet.parentElement === portal) return;

        // Evict any other bottom-sheet already in the portal so only one is ever present.
        portal.querySelectorAll('bottom-sheet').forEach(existing => {
            if (existing === sheet) return;
            existing.classList.remove('active');
            this._teardownPortalSheet(existing);
            // _teardownPortalSheet restores via _portalOrigin when the origin is connected.
            // If the origin was lost (null or removed from DOM), the sheet stays in the portal.
            // Instead of removing it (which destroys the element), locate its owner card by
            // matching the bottom-sheet-id against product-card popups and return it there.
            if (existing.parentElement === portal) {
                const eid = existing.getAttribute('bottom-sheet-id');
                const ownerCard = eid
                    ? document.querySelector(`[mobile-bottom-sheet-id="${eid}"]`)?.closest('product-card')
                    : null;
                if (ownerCard) ownerCard.appendChild(existing);
                else existing.remove();
            }
        });

        sheet._portalOrigin = sheet.parentElement;

        // Once portaled, the sheet is outside product-card so change/cart events
        // no longer bubble here. Intercept them at document level instead.
        if (!sheet._portalChangeHandler) {
            sheet._portalChangeHandler = (e) => {
                if (sheet.parentElement !== portal) {
                    this._teardownPortalSheet(sheet);
                    return;
                }
                if (!sheet.contains(e.target)) return;
                this._onSheetVariantChange(e, sheet);
            };
            this._sheetChangeHandler = sheet._portalChangeHandler;
            document.addEventListener('change', sheet._portalChangeHandler);
        }

        if (!sheet._portalCartHandler) {
            sheet._portalCartHandler = () => {
                const sheetId = sheet.getAttribute('bottom-sheet-id');
                if (sheetId) {
                    HELPER_UTIL.dispatchCustomEvent(
                        _EVENT_HELPER.fireBottomSheetEvent,
                        sheet,
                        { whichBottomSheet: sheetId, actionType: 'hide' }
                    );
                }
            };
            document.addEventListener(_EVENT_HELPER.triggerCartChange, sheet._portalCartHandler);
        }

        portal.appendChild(sheet);

        void sheet.offsetHeight;
    }

    _teardownPortalSheet(sheet) {
        if (sheet._portalChangeHandler) {
            document.removeEventListener('change', sheet._portalChangeHandler);
            sheet._portalChangeHandler = null;
        }
        if (sheet._portalCartHandler) {
            document.removeEventListener(_EVENT_HELPER.triggerCartChange, sheet._portalCartHandler);
            sheet._portalCartHandler = null;
        }
        if (sheet._portalOrigin?.isConnected) {
            sheet._portalOrigin.appendChild(sheet);
            sheet._portalOrigin = null;
        }
        this._sheetChangeHandler = null;
    }


    _onSheetVariantChange(e, sheet) {
        const variantBlock = e.target.closest('[variant-block]');
        if (!variantBlock) return;

        // Update option value label immediately while fetch is in-flight
        const fieldset = e.target.closest('[product-variant-option]');
        const label = fieldset?.querySelector('[product-variant-option-value]');
        if (label) label.innerHTML = e.target.value;

        const productUrl = (this.getAttribute('product-url') || '').split('?')[0];
        if (!productUrl) return;

        // Combined Listing: if the selected input points to a different product, switch to it.
        const selectedEl = e.target.tagName === 'SELECT' ? e.target.options[e.target.selectedIndex] : e.target;
        const connectedUrl = (selectedEl.dataset.connectedProductUrl || '').split('?')[0];
        const isConnected = !!(connectedUrl && connectedUrl !== productUrl);
        const fetchUrl = isConnected ? connectedUrl : productUrl;

        const options = [];
        variantBlock.querySelectorAll('[product-variant-option]').forEach(container => {
            const sel = container.querySelector('select');
            if (sel) {
                const opt = sel.options[sel.selectedIndex];
                if (opt?.dataset.optionValueId) options.push(opt.dataset.optionValueId);
            } else {
                const checked = Array.from(container.querySelectorAll('input')).find(i => i.checked);
                if (checked?.dataset.optionValueId) options.push(checked.dataset.optionValueId);
            }
        });

        // Forward option_values always — IDs are shared across a Combined Listing.
        const params = options.length ? `option_values=${options.join(',')}` : '';
        const url = `${fetchUrl}?section_id=card-product-render${params ? '&' + params : ''}`;

        const liveAddBtn = sheet.querySelector('button[type="submit"]') || sheet.querySelector('button[name="add"]');
        if (liveAddBtn) {
            HELPER_UTIL.submitButtonState(liveAddBtn).loadingState();
        }

        this._variantAbort?.abort();
        this._variantAbort = new AbortController();

        HELPER_UTIL.fetchData({
            method: 'GET',
            config: { signal: this._variantAbort.signal },
            url,
            responseType: 'text',
            onsuccess: (data) => {
                const html = new DOMParser().parseFromString(data, 'text/html');
                // For same product match by ID; for connected product fall back to first card.
                const responseCard = Array.from(html.querySelectorAll('product-card')).find(
                    c => c.dataset.productId === this.dataset.productId
                ) || (isConnected ? html.querySelector('product-card') : null);
                if (!responseCard) return;

                // When switching to a connected product update the outer element's attributes
                // so subsequent option changes fetch the correct product.
                if (isConnected) {
                    if (responseCard.dataset.productId) this.dataset.productId = responseCard.dataset.productId;
                    this.setAttribute('product-url', fetchUrl);
                    const newHandle = responseCard.getAttribute('product-handle');
                    if (newHandle) this.setAttribute('product-handle', newHandle);
                }

                // Extract sheet-specific content from the response BEFORE removing
                // the in-sheet bottom-sheet — once removed those nodes are gone.
                const responseInSheet = responseCard.querySelector('.card-variant-popup--in-sheet');

                const sheetId = sheet.getAttribute('bottom-sheet-id');

                // card-product-render never passes section_id, so its bottom-sheet IDs
                // are bare ("card-variant-{productId}") — different from the section-scoped
                // IDs on the live page. Strip ALL bottom-sheets from the response to avoid
                // ID collisions when the same product appears in multiple sections.
                // Also preserve any non-portaled sheets in this card (e.g. layout_block alternates).
                const otherSheets = Array.from(this.querySelectorAll('bottom-sheet'));
                otherSheets.forEach(bs => bs.remove());
                responseCard.querySelectorAll('bottom-sheet').forEach(bs => bs.remove());

                // Replace the card (image, swatches, colour chips, etc.).
                this.innerHTML = responseCard.innerHTML;
                this._reUniquifyInputIds();

                // Restore any preserved non-portaled sheets, and patch the new popup's
                // mobile-bottom-sheet-id to the portaled sheet's ID so it can be reopened
                // after the sheet returns to this card on close.
                otherSheets.forEach(bs => this.appendChild(bs));
                if (sheetId) {
                    const newPopup = this.querySelector('[product-card-variant-popup]:not(.card-variant-popup--in-sheet)');
                    if (newPopup) newPopup.setAttribute('mobile-bottom-sheet-id', sheetId);
                }

                // Update the entire popup's innerHTML in the sheet — the server-rendered content
                // already carries the correct availability state (button label/disabled + price).
                const livePopup = sheet.querySelector('[product-card-variant-popup]');
                if (livePopup && responseInSheet) {
                    livePopup.innerHTML = responseInSheet.innerHTML;
                    this._reUniquifyInputIds(livePopup);
                }
            },
            onerror: (err) => {
                const currentAddBtn = sheet.querySelector('button[type="submit"]') || sheet.querySelector('button[name="add"]');
                if (currentAddBtn) {
                    HELPER_UTIL.submitButtonState(currentAddBtn).resetState();
                }
                if (err?.name !== 'AbortError') console.warn('[card-variant-sheet]', err);
            },
        });
    }

    // After innerHTML replace, inputs use the 'card-product-render' section ID for both
    // their `id` and radio `name` attributes, so every copy of the same product on the
    // page ends up with identical values. This causes two bugs:
    //   1. label[for] clicks jump to the first matching input (wrong section scrolls into view)
    //   2. Radio groups span all sections — checking a swatch in Section 2 unchecks Section 1
    // This method re-scopes both `id` and radio/checkbox `name` to be unique to this card.
    _reUniquifyInputIds(target = this) {
        const suffix = `-u${Date.now().toString(36)}`;

        // Re-scope input IDs and their linked label[for] references
        target.querySelectorAll('input[id]').forEach(input => {
            const oldId = input.id;
            const newId = oldId + suffix;
            target.querySelectorAll(`label[for="${CSS.escape(oldId)}"]`).forEach(label => {
                label.setAttribute('for', newId);
            });
            input.id = newId;
        });

        // Re-scope radio/checkbox name groups so selections in this card don't
        // deselect swatches in other sections showing the same product.
        const nameMap = new Map();
        target.querySelectorAll('input[name]').forEach(input => {
            if (input.type !== 'radio' && input.type !== 'checkbox') return;
            const oldName = input.name;
            if (!nameMap.has(oldName)) nameMap.set(oldName, oldName + suffix);
            input.name = nameMap.get(oldName);
        });
    }

    // Handle swatch and popup option changes — fetches a fresh server-rendered card and replaces innerHTML.
    _onInputChange(e) {
        const inVariantBlock = !!e.target.closest('[variant-block]');
        const inCardSwatch = !!e.target.closest('[product-color-swatch]');
        if (!inVariantBlock && !inCardSwatch) return;

        // Show the selected option value immediately while the fetch is in-flight
        if (inVariantBlock) {
            const fieldset = e.target.closest('[product-variant-option]');
            const label = fieldset?.querySelector('[product-variant-option-value]');
            if (label) label.innerHTML = e.target.defaultValue || e.target.value;
        }

        const productUrl = (this.getAttribute('product-url') || '').split('?')[0];
        if (!productUrl) return;

        // Re-open the desktop popup after replace only when the change came from inside it
        const popupWasOpen = inVariantBlock
            && !!this.querySelector('[product-card-variant-popup]:not(.card-variant-popup--in-sheet)[aria-hidden="false"]');

        let url;
        let connectedProductUrl = null;
        if (inVariantBlock) {
            // Collect option_value IDs from all [product-variant-option] containers in this popup
            const popup = e.target.closest('[product-card-variant-popup]');
            if (!popup) return;
            const variantBlock = popup.querySelector('[variant-block]');
            const options = [];
            variantBlock?.querySelectorAll('[product-variant-option]').forEach(container => {
                const sel = container.querySelector('select');
                if (sel) {
                    const opt = sel.options[sel.selectedIndex];
                    if (opt?.dataset.optionValueId) options.push(opt.dataset.optionValueId);
                } else {
                    const checked = Array.from(container.querySelectorAll('input')).find(i => i.checked);
                    if (checked?.dataset.optionValueId) options.push(checked.dataset.optionValueId);
                }
            });

            // Combined Listing: check if the changed input points to a different product.
            const selectedEl = e.target.tagName === 'SELECT' ? e.target.options[e.target.selectedIndex] : e.target;
            const rawConnectedUrl = (selectedEl.dataset.connectedProductUrl || '').split('?')[0];
            const isConnected = !!(rawConnectedUrl && rawConnectedUrl !== productUrl);
            if (isConnected) connectedProductUrl = rawConnectedUrl;

            // Forward option_values always — IDs are shared across a Combined Listing.
            const params = options.length ? `option_values=${options.join(',')}` : '';
            url = `${isConnected ? rawConnectedUrl : productUrl}?section_id=card-product-render${params ? '&' + params : ''}`;

        } else {
            // Card swatch — Liquid pre-computes data-option-value-ids with this swatch
            // substituted in and all other options preserved from the current variant.
            const label = e.target.nextElementSibling;
            const isUnavailable = label?.classList.contains('disabled');
            const variantId = e.target.dataset.variantId;

            // Unavailable swatches use ?variant=ID so Shopify picks that exact variant, not the first available.
            if (isUnavailable && variantId) {
                url = `${productUrl}?section_id=card-product-render&variant=${variantId}`;
            } else {
                const optionValueIds = e.target.dataset.optionValueIds;
                if (optionValueIds) {
                    url = `${productUrl}?section_id=card-product-render&option_values=${optionValueIds}`;
                } else {
                    if (!variantId) return;
                    url = `${productUrl}?section_id=card-product-render&variant=${variantId}`;
                }
            }

        }

        this._fetchAndReplaceCard(url, popupWasOpen, connectedProductUrl);
    }

    // Fetch a fresh server-rendered card and replace this element's innerHTML.
    // connectedProductUrl: non-null when switching to a Combined Listing connected product.
    _fetchAndReplaceCard(url, reopenPopup, connectedProductUrl = null) {
        this._variantAbort?.abort();
        this._variantAbort = new AbortController();

        const popup = this.querySelector('[product-card-variant-popup]');
        const liveAddBtn = popup?.querySelector('button[type="submit"]') || popup?.querySelector('button[name="add"]');
        if (liveAddBtn) {
            HELPER_UTIL.submitButtonState(liveAddBtn).loadingState();
        }

        HELPER_UTIL.fetchData({
            method: 'GET',
            config: { signal: this._variantAbort.signal },
            url,
            responseType: 'text',
            onsuccess: (data) => {
                const html = new DOMParser().parseFromString(data, 'text/html');
                // For same-product changes match by ID; for Connected Listing fall back to the
                // first product-card in the response (the fetch targeted that product's URL).
                const responseCard = Array.from(html.querySelectorAll('product-card')).find(
                    c => c.dataset.productId === this.dataset.productId
                ) || (connectedProductUrl ? html.querySelector('product-card') : null);
                if (!responseCard) return;

                // When switching to a connected product update the outer element's attributes
                // so subsequent option changes fetch the correct product.
                if (connectedProductUrl) {
                    if (responseCard.dataset.productId) this.dataset.productId = responseCard.dataset.productId;
                    this.setAttribute('product-url', connectedProductUrl);
                    const newHandle = responseCard.getAttribute('product-handle');
                    if (newHandle) this.setAttribute('product-handle', newHandle);
                }

                // card-product-render never passes section_id so rendered bottom-sheet IDs are
                // bare ("card-variant-{productId}"), causing ID collisions when the same product
                // appears in multiple sections. Save the correct section-scoped ID from the current
                // popup, let the response sheet come through (it has the correct variant state
                // baked in by the server), then patch its ID and JS property afterward.
                const currentPopup = this.querySelector('[product-card-variant-popup]:not(.card-variant-popup--in-sheet)');
                const correctSheetId = currentPopup?.getAttribute('mobile-bottom-sheet-id') || null;

                // Remove doc listeners before replacing so they don't fire on stale elements
                if (reopenPopup) {
                    document.removeEventListener('keydown', this._popupKeydown);
                    document.removeEventListener('click', this._popupDocClick);
                }
                this.innerHTML = responseCard.innerHTML;
                // Re-uniquify input IDs so label[for] clicks don't jump to the first
                // occurrence of this product when it appears in multiple sections.
                this._reUniquifyInputIds();

                // Patch the new bottom-sheet's bare ID to the section-scoped ID so it doesn't
                // collide with same-product sheets in other sections. Also update the JS instance
                // property (set in the constructor from the attribute) and all trigger buttons.
                if (correctSheetId) {
                    const newSheet = this.querySelector('bottom-sheet');
                    if (newSheet) {
                        const bareId = newSheet.getAttribute('bottom-sheet-id');
                        if (bareId && bareId !== correctSheetId) {
                            newSheet.setAttribute('bottom-sheet-id', correctSheetId);
                            newSheet.bottomSheetId = correctSheetId;
                            newSheet.querySelectorAll(`[target-bottom-sheet="${bareId}"]`).forEach(btn => {
                                btn.setAttribute('target-bottom-sheet', correctSheetId);
                                btn.getWhichBottomSheetToShow = correctSheetId;
                            });
                        }
                    }
                    const newPopup = this.querySelector('[product-card-variant-popup]:not(.card-variant-popup--in-sheet)');
                    if (newPopup) newPopup.setAttribute('mobile-bottom-sheet-id', correctSheetId);
                }

                // The desktop popup and in-card bottom-sheet were replaced by the card innerHTML
                // swap above, so they already carry the server-rendered availability state.
                // Only a sheet that was already portaled (opened before this swatch click) lives
                // outside the card, so sync its body from the response too.
                if (correctSheetId) {
                    const portaledSheet = document.querySelector(`#portal bottom-sheet[bottom-sheet-id="${CSS.escape(correctSheetId)}"]`);
                    if (portaledSheet && portaledSheet._portalOrigin === this) {
                        const responseInSheet = responseCard.querySelector('.card-variant-popup--in-sheet');
                        const livePopupInSheet = portaledSheet.querySelector('[product-card-variant-popup]');
                        if (livePopupInSheet && responseInSheet) {
                            livePopupInSheet.innerHTML = responseInSheet.innerHTML;
                            this._reUniquifyInputIds(livePopupInSheet);
                        }
                    }
                }

                // Re-open the desktop popup if it was open when the variant change triggered
                if (reopenPopup) this._openPopup();
            },
            onerror: (err) => {
                const currentAddBtn = this.querySelector('[product-card-variant-popup] button[type="submit"]') || this.querySelector('[product-card-variant-popup] button[name="add"]');
                if (currentAddBtn) {
                    HELPER_UTIL.submitButtonState(currentAddBtn).resetState();
                }
                if (err?.name !== 'AbortError') console.warn('[card-variant]', err);
            },
        });
    }

    // Delegated form submit handler — replaces the per-form listener from handleProductFormSubmit
    _onFormSubmit(e) {
        e.preventDefault();
        const cartToggleType = e.submitter?.getAttribute('toggle-element');
        switch (cartToggleType) {
            case 'options-drawer':
                this.handleAddToProductQuickViewClick(e.submitter);
                break;
            case 'cart-drawer':
                this.handleAddToCartClick(e.submitter);
                break;
        }
    }

    // Trigger Options Drawer
    handleAddToProductQuickViewClick(btnElement, drawerHeadingName = window.drawer.options) {
        const getProductHandle = this.getAttribute('product-handle');
        const submitButton = btnElement;
        HELPER_UTIL.submitButtonState(submitButton).loadingState();
        submitButton.closest('product-card').classList.add('loading');
        if (!getProductHandle)
            throw new Error('[product-handle] attribute must be added to product-cart component');

        // Read the current variant ID from the form input — always up-to-date after card re-renders
        const variantId = this.querySelector('form input[name="id"]')?.value || null;

        window.currentActiveElement = submitButton;
        HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.triggerProductQuickViewChange,
            submitButton,
            {
                productHandle: getProductHandle,
                swatchChangeVariantId: variantId,
                submitButton: submitButton,
                drawerHeadingName: drawerHeadingName,
            }
        );
    }

    // Trigger Cart Drawer
    handleAddToCartClick(submitter) {
        // Get the form from the submitter so this works after innerHTML replaces
        const form = submitter?.closest('form') || this.querySelector('.product-card-item__form');
        if (!form) return;
        const formData = new FormData(form);
        const getVariantId = formData.get('id');
        const submitButton = submitter || this.querySelector('[type="submit"]');

        HELPER_UTIL.submitButtonState(submitButton).loadingState();
        formData.append('sections', HELPER_UTIL.sectionRenderUtil(this.cartType).getSectionsString());
        formData.append('sections_url', `${Shopify.routes.root}variants/${getVariantId}`);

        HELPER_UTIL.fetchData({
            method: 'POST',
            config: {
                headers: {
                    Accept: 'application/javascript',
                    'X-Requested-With': 'XMLHttpRequest',
                },
            },
            url: `${window.Shopify.routes.root}cart/add.js`,
            data: formData,
            onsuccess: (data) => {
                if (this.showCartPopup && this.cartDrawer) {
                    HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.showCartPopup, this, { sections: data.sections });
                } else if (this.cartDrawer) {
                    window.currentActiveElement = submitButton;
                    HELPER_UTIL.dispatchCustomEvent(
                        _EVENT_HELPER.triggerCartChange,
                        submitButton,
                        { sections: data.sections }
                    );
                    HELPER_UTIL.submitButtonState(submitButton).completeState();
                    const bottomSheet = submitButton?.closest('bottom-sheet');
                    if (bottomSheet) {
                        const sheetId = bottomSheet.getAttribute('bottom-sheet-id');
                        if (sheetId) {
                            HELPER_UTIL.dispatchCustomEvent(
                                _EVENT_HELPER.fireBottomSheetEvent,
                                submitButton,
                                { whichBottomSheet: sheetId, actionType: 'hide' }
                            );
                            window.currentActiveElement = this.querySelector('[trigger-variant-popup]') || null;
                        }
                    }
                } else {
                    if (this.showCartPopup) {
                        this.renderCartRelatedContent(data);
                        HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.showCartPopup, this, { sections: data.sections });
                    } else {
                        window.location.href = `${Shopify.routes.root}cart`;
                    }
                }
            },
            onerror: (error) => {
                if (error.json) {
                    error.json().then((errorObj) => {
                        if (errorObj.status === 422) {
                            HELPER_UTIL.dispatchCustomEvent(
                                _EVENT_HELPER.triggerToastMessage,
                                document,
                                { toastType: 'common-errors', messageType: 'error', message: errorObj.description }
                            );
                        }
                    });
                } else {
                    HELPER_UTIL.dispatchCustomEvent(
                        _EVENT_HELPER.triggerToastMessage,
                        document,
                        { toastType: 'common-errors', messageType: 'error', message: 'Something went went wrong! Please try again' }
                    );
                }
            },
            defaultCb: () => {
                setTimeout(() => {
                    HELPER_UTIL.submitButtonState(submitButton).resetState(1000);
                    HELPER_UTIL.submitButtonState(submitButton).disableState(false);
                }, 1000);
            },
        });
    }

    renderCartRelatedContent({ sections }) {
        if (!sections) return;
        const sectionToRender = [{ sectionId: 'cart-count-bubble', queryElement: '[header-cart-bubble]' }];
        try {
            sectionToRender.forEach((section) => {
                const getHTMLFromString = HELPER_UTIL.getHTMLFromString(sections[section.sectionId], section.queryElement);
                if (getHTMLFromString) {
                    const element = document.querySelector(section.queryElement);
                    if (element) element.innerHTML = getHTMLFromString.innerHTML;
                }
            });
        } catch (e) {
            new Error('Error while rendering cart related content', e);
        }
    }

    disconnectedCallback() {
        this._variantAbort?.abort();
        document.removeEventListener('keydown', this._popupKeydown);
        document.removeEventListener('click', this._popupDocClick);
        if (this._sheetChangeHandler) {
            document.removeEventListener('change', this._sheetChangeHandler);
        }
    }
}

window.customElements.define('product-card', ProductCard);


class ProductCardSwatchAnimation extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback() {
        this.initComponent();
    }

    initComponent() {
        this.height = this.querySelector("[product-color-swatch]").offsetHeight;
        this.productSwatchCount = this.querySelector("[product-swatch-count]");
        this.productSwatchWrapper = this.querySelector("[product-card-swatch-wrapper]");
        this.style.height = `${this.height}px`;
        this.productSwatchCount.style.height = `${this.height}px`;
        this.animation = null
        this.addEventListener("mouseenter", this.onMouseOver.bind(this));
        this.addEventListener("mouseleave", this.onMouseOut.bind(this));
        this.productSwatchWrapper?.style.setProperty("--translateHight", `${-this.height}px`)
    }
    onMouseOver() {
        this.productSwatchWrapper?.classList.add("swatch-active")

    }

    onMouseOut() {
        this.productSwatchWrapper?.classList.remove("swatch-active")

    }


}

customElements.get("product-card-swatch-animation") || customElements.define("product-card-swatch-animation", ProductCardSwatchAnimation);

class AccordionTab extends HTMLElement {
    constructor() {
        super();
        this._accordiontab = this.querySelector('[accordionTab]');
        this._accordionSummary = this.querySelector('[accordionTab] summary');
        this._accordionShowMore = this.querySelector('[show-more-button]');
        this._accordionBody = this.querySelector('[accordionBody]');
        this._accordionContainer = this.closest("[activate-toggle-accordion]");
        if (this._accordionSummary) {
            this._accordionSummary.addEventListener(
                'click',
                this.onAccordionTabClick.bind(this)
            );
        }
        this.breakpoint = this.getAttribute("breakpoint_match")
        // this.breakpointMatch = window.matchMedia(`(max-width:${this.breakpoint})`)
        window.addEventListener("resize", (e) => {
            this.setInitialHeight()

        })
        if (Shopify.designMode) {
            this.initDesignMode();
        }

        this._resizeObserver = new ResizeObserver(() => {
            if (this._accordionBody?.classList.contains('active')) {
                this.setInitialHeight();
            }
        });
        if (this._accordionBody) {
            this._resizeObserver.observe(this._accordionBody);
        }

    }

    animateAccordionOnOpen() {
        this.preventClick = true;
        Motion.animate(this._accordiontab, { overflow: ["hidden", "visible"] }, { duration: 0.3, ease: "ease-in-out" })
        Motion.animate(this._accordionBody, { opacity: [0, 1], y: [10, 0] }, { duration: 0.5, ease: "ease-in-out" }).finished.then(() => {
            this.preventClick = false;
        });

    }

    animateAccordionOnClose(_accordionBody, _accordiontab) {
        this.preventClick = true;
        Motion.animate(_accordiontab, { overflow: ["visible", "hidden"] }, { duration: 0.3, ease: "ease-in-out" })
        Motion.animate(_accordionBody, { opacity: [1, 0], y: [0, 10] }, { duration: 0.5, ease: "ease-in-out" }).finished.then(() => {
            _accordiontab.removeAttribute("open");
            _accordiontab.style.overflow = 'visible'
            this.preventClick = false;
        })

    }

    inActiveAccordion(element) {
        if (element) {
            this._accordionBodyToggle = element.querySelector('[accordionBody]')
            this._accordiontabToggle = element
            if (!this._accordionBodyToggle) return
            if (this._accordionBodyToggle.classList.contains("active")) {
                this._accordionBodyToggle.classList.remove('active');
            }
            this._accordiontabToggle.setAttribute("aria-expanded", "false")
            this._accordiontabToggle.style.height = `${this._accordiontabToggle.querySelector('summary').offsetHeight}` + 'px';
            this.animateAccordionOnClose(this._accordionBodyToggle, this._accordiontabToggle);

        } else {
            this._accordionBody.classList.remove('active');
            this._accordiontab.setAttribute("aria-expanded", "false")
            this._accordiontab.style.height = `${this._accordiontab.querySelector('summary').offsetHeight}` + 'px';
            this.animateAccordionOnClose(this._accordionBody, this._accordiontab);
        }
    }

    activeAccordion() {
        if (!this._accordionBody) return
        this._accordionBody.classList.add('active');
        this._accordiontab.setAttribute("open", "")
        this._accordiontab.style.height = `${this._accordiontab.querySelector('summary').offsetHeight + this._accordionBody.offsetHeight}` + 'px';
        this._accordiontab.setAttribute("aria-expanded", "true")
        this.animateAccordionOnOpen();
    }

    onAccordionTabClick(e) {
        e.preventDefault();
        if (this.preventClick) return;
        if (this._accordionContainer) {
            this._accordionActiveElement = this._accordionContainer.querySelector('[open]')
            if (this._accordionActiveElement) {
                if (this._accordionBody && this._accordionBody.classList.contains('active')) {
                    this.inActiveAccordion(this._accordionActiveElement)
                } else {
                    this.inActiveAccordion(this._accordionActiveElement)
                    this.activeAccordion();
                }
            } else {
                this.activeAccordion();
            }
        } else {
            this._accordiontab.classList.toggle('active');
            if (this._accordionBody && this._accordionBody.classList.contains('active')) {
                this.inActiveAccordion();
            } else {
                this.activeAccordion();
            }
        }

    }

    setInitialHeight() {
        let accordionHeight = this._accordiontab.querySelector('summary').offsetHeight;
        if (this._accordionBody?.classList.contains('active')) {
            accordionHeight += this._accordionBody.offsetHeight;
        }
        this._accordiontab.style.height = `${accordionHeight}px`;

    }

    connectedCallback() {
        this.setInitialHeight()

    }

    initDesignMode() {
        document.addEventListener('shopify:block:select', (e) => {
            let accordiontItem = e.target.querySelector("accordion-tab") || e.target.closest('accordion-tab') || e.target

            accordiontItem?.activeAccordion?.()
        })

        document.addEventListener('shopify:block:deselect', (e) => {
            let accordiontItem = e.target.querySelector("accordion-tab") || e.target.closest('accordion-tab') || e.target
            accordiontItem?.inActiveAccordion?.()
        })
    }


}

customElements.get('accordion-tab') ||
    customElements.define('accordion-tab', AccordionTab);



class NavigationAccordion extends AccordionTab {
    constructor() {
        super()
        this._accordionBodyParent = this.closest("[accordionBody]")


    }

    activeAccordion() {
        super.activeAccordion()
        if (this._accordionBodyParent) {
            setTimeout(() => {
                this._accordionBodyParent.style.maxHeight =
                    this._accordionBodyParent.offsetHeight + 'px';

            }, 300);
        }


    }
}

customElements.get('navigation-accordion') ||
    customElements.define('navigation-accordion', NavigationAccordion);
class ProductForm extends HTMLElement {
    constructor() {
        super();
        this.form = this.querySelector('form');
        this.form.querySelector('[name=id]').disabled = false;
        this.form.addEventListener(
            'submit',
            this.onFormSubmitHandler.bind(this)
        );
        this.submitBtn = this.querySelector('button[type="submit"]');
        this.cartDrawer = document.querySelector('drawer-cart');
        this.showCartPopup = this.hasAttribute('show-cart-popup');
        this.cartType = this.getAttribute('data-cart-type') || 'cart-drawer';
        this.addEventListener('change', (e) => {
            if (e.target.name === 'id')
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.onVariantChangeBasedonElementSelector,
                    this,
                    {
                        productVariant: e.target.value,
                    }
                );
        });
    }


    // Returns gift wrap data if the gift wrap checkbox is checked, otherwise null.
    // Reads from the [gift-wrap] block which is a sibling of product-form, not nested inside it.
    _getGiftWrapData() {
        const container = this.closest('[product-details]') || this.parentElement;
        const giftWrap = container?.querySelector('[gift-wrap]');
        if (!giftWrap) return null;

        const checkbox = giftWrap.querySelector('[gift-wrap-checkbox]');
        if (!checkbox || !checkbox.checked) return null;

        const giftWrapVariantId = Number(giftWrap.getAttribute('gift-wrap-variant-id'));
        if (!giftWrapVariantId) return null;

        const forLabel = giftWrap.getAttribute('for-label') || 'For';
        const parentProductTitle = giftWrap.getAttribute('parent-product-title');

        return {
            id: giftWrapVariantId,
            properties: { [forLabel]: parentProductTitle },
        };
    }

    onFormSubmitHandler(e) {
        e.preventDefault();
        if (!this.form.checkValidity()) {
            this.scrollToFirstInvalidField();
            return;
        }

        const formData = new FormData(this.form);
        const getVariantId = formData.get('id');
        const sectionsString = HELPER_UTIL.sectionRenderUtil(this.cartType).getSectionsString();
        const giftWrapItem = this._getGiftWrapData();
        const requestUrl = `${window.Shopify.routes.root}cart/add.js`;
        const baseHeaders = { Accept: 'application/javascript', 'X-Requested-With': 'XMLHttpRequest' };

        HELPER_UTIL.submitButtonState(this.submitBtn).loadingState();

        if (giftWrapItem) {
            // Append hidden properties to the main product so cart Liquid can show
            // the gift wrap toggle row (add/remove) even after gift wrap is removed.
            const forLabel = Object.keys(giftWrapItem.properties)[0] || 'For';
            formData.append('properties[_gift_wrap_variant_id]', String(giftWrapItem.id));
            formData.append('properties[_gift_wrap_for_label]', forLabel);
            // Add gift wrap as a nested cart line child linked to the main product.
            // Shopify creates the parent_relationship automatically via parent_id.
            formData.append('items[0][id]', String(giftWrapItem.id));
            formData.append('items[0][quantity]', formData.get('quantity') || '1');
            formData.append('items[0][parent_id]', getVariantId);
            formData.append(`items[0][properties][${forLabel}]`, giftWrapItem.properties[forLabel] || '');
            formData.append('sections', sectionsString);
            formData.append('sections_url', `${Shopify.routes.root}variants/${getVariantId}`);

            HELPER_UTIL.fetchData({
                method: 'POST',
                config: { headers: baseHeaders },
                url: requestUrl,
                data: formData,
                onsuccess: (data) => {
                    const variantId = data.variant_id || (data.items && data.items[0] && data.items[0].variant_id);
                    this._dispatchCartChange(data.sections, variantId);
                },
                onerror: (error) => this._handleAddToCartError(error),
                defaultCb: () => {
                    setTimeout(() => {
                        HELPER_UTIL.submitButtonState(this.submitBtn).resetState(1000);
                        HELPER_UTIL.submitButtonState(this.submitBtn).disableState(false);
                        HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.resetStickyAddTocartButton, document);
                    }, 1000);
                },
            });
            return;
        }

        formData.append('sections', sectionsString);
        formData.append('sections_url', `${Shopify.routes.root}variants/${getVariantId}`);

        HELPER_UTIL.fetchData({
            method: 'POST',
            config: { headers: baseHeaders },
            url: requestUrl,
            data: formData,
            onsuccess: (data) => {
                const variantId = data.variant_id || (data.items && data.items[0] && data.items[0].variant_id);
                this._dispatchCartChange(data.sections, variantId);
            },
            onerror: (error) => this._handleAddToCartError(error),
            defaultCb: () => {
                setTimeout(() => {
                    HELPER_UTIL.submitButtonState(this.submitBtn).resetState(1000);
                    HELPER_UTIL.submitButtonState(this.submitBtn).disableState(false);
                    HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.resetStickyAddTocartButton, document);
                }, 1000);
            },
        });
    }

    // Resets the submit button state and dispatches the appropriate cart update event.
    // Used by both the gift wrap and normal add-to-cart paths after a successful add.
    _dispatchCartChange(sections, variantId) {
        HELPER_UTIL.submitButtonState(this.submitBtn).completeState();
        setTimeout(() => {
            HELPER_UTIL.submitButtonState(this.submitBtn).resetState(1000);
            HELPER_UTIL.submitButtonState(this.submitBtn).disableState(false);
            HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.resetStickyAddTocartButton, document);
        }, 1000);
        if (this.showCartPopup && this.cartDrawer) {
            HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.showCartPopup, this, { sections });
        } else if (this.cartDrawer) {
            // If this form is inside a card variant popup/sheet, close it before opening the cart so dismissing the cart doesn't replay the popup slide or scroll to the buried buy button.
            const cardOverlay = this.closest('[product-card-variant-popup]');
            if (cardOverlay) {
                this._closeCardVariantOverlay();
                window.currentActiveElement = null;
            } else {
                window.currentActiveElement = this.submitBtn;
            }
            HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.triggerCartChange, this, { productVariant: variantId, sections });
        } else {
            // Cart type is "page" — update bubble and show popup, or redirect to cart page.
            if (this.showCartPopup) {
                this.renderCartRelatedContent({ sections });
                HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.showCartPopup, this, { sections });
            } else {
                window.location.href = `${Shopify.routes.root}cart`;
            }
        }
    }

    // Closes the card variant overlay this form is inside — mobile sheet via hide event, desktop popup via the owning product-card's _closePopup.
    _closeCardVariantOverlay() {
        const sheet = this.closest('bottom-sheet');
        if (sheet) {
            const sheetId = sheet.getAttribute('bottom-sheet-id');
            if (sheetId) {
                HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.fireBottomSheetEvent, this, {
                    whichBottomSheet: sheetId,
                    actionType: 'hide',
                });
            }
            return;
        }
        const card = this.closest('product-card');
        if (card && typeof card._closePopup === 'function') {
            card._closePopup();
        } else {
            this.closest('[product-card-variant-popup]')?.setAttribute('aria-hidden', 'true');
        }
    }

    // Handles add-to-cart API errors. Shows inline error for 422 (out of stock, gift card
    // validation), or a toast for unexpected errors.
    _handleAddToCartError(error) {
        if (error.json) {
            error.json().then((errorObj) => {
                if (errorObj.status === 422) {
                    HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.triggerVariantAddToCartError, document, { errorObj: errorObj.description });
                    if (errorObj.description.hasOwnProperty('email') || errorObj.description.hasOwnProperty('send_on')) {
                        HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.triggerProductGiftCardError, this, { errorObj: errorObj.description });
                    } else {
                        const formId = this.form.getAttribute('id');
                        const customMessageEl = this.querySelector(`custom-message[data-id=${formId}]`);
                        customMessageEl.showCustomMessage({ errorMessage: errorObj.description, messageType: 'error' });
                    }
                }
            });
        } else {
            HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.triggerToastMessage, document, {
                toastType: 'common-errors',
                messageType: 'error',
                message: 'Something went went wrong! Please try again',
            });
        }
    }

    scrollToFirstInvalidField() {
        const invalidField = Array.from(this.form.elements).find(
            (el) => !el.validity.valid
        );
        if (!invalidField) return;
        const block = invalidField.closest('[line-item-property]') || invalidField;

        const drawerBody = this.closest('.drawer__body');
        const isHiddenField = invalidField.classList.contains('visually-hidden');

        let validationShown = false;
        const showValidation = () => {
            if (validationShown) return;
            validationShown = true;
            if (isHiddenField) {
                // Remove visually-hidden so the browser tooltip anchors within the parent container
                invalidField.classList.remove('visually-hidden');
                invalidField.style.cssText = 'opacity:0 !important;position:absolute !important;';
                const parent = invalidField.closest('.line-item-checkbox') || invalidField.parentElement;
                parent.style.position = 'relative';
                const restoreHidden = () => {
                    invalidField.classList.add('visually-hidden');
                    invalidField.style.cssText = '';
                    parent.style.position = '';
                    invalidField.removeEventListener('change', restoreHidden);
                };
                invalidField.addEventListener('change', restoreHidden);
            }
            invalidField.focus({ preventScroll: true });
            setTimeout(() => {
                invalidField.reportValidity();
            }, 100);
        };

        const scrollToAndValidate = (scroller, targetTop, currentScroll) => {
            if (Math.abs(currentScroll - targetTop) < 10) {
                showValidation();
                return;
            }
            scroller.scrollTo({ top: targetTop, behavior: 'smooth' });
            let scrollTimer;
            const onScrollEnd = () => {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    scroller.removeEventListener('scroll', onScrollEnd);
                    showValidation();
                }, 100);
            };
            scroller.addEventListener('scroll', onScrollEnd);
            setTimeout(() => {
                scroller.removeEventListener('scroll', onScrollEnd);
                clearTimeout(scrollTimer);
                showValidation();
            }, 2000);
        };

        if (drawerBody) {
            const blockRect = block.getBoundingClientRect();
            const drawerRect = drawerBody.getBoundingClientRect();
            const targetTop = drawerBody.scrollTop + (blockRect.top - drawerRect.top) - 20;
            scrollToAndValidate(drawerBody, targetTop, drawerBody.scrollTop);
        } else {
            const styles = getComputedStyle(document.documentElement);
            const headerOffset = (parseFloat(styles.getPropertyValue('--header-height')) || 0)
                + (parseFloat(styles.getPropertyValue('--announcement-height')) || 0);
            const elementPosition = block.getBoundingClientRect().top + window.scrollY;
            const targetTop = elementPosition - headerOffset - 20;
            scrollToAndValidate(window, targetTop, window.scrollY);
        }
    }

    removeErrorMessage() {
        const formId = this.form.getAttribute('id');
        const customMessageEl = this.querySelector(
            `custom-message[data-id=${formId}]`
        );
        customMessageEl.hideCustomMessage();
    }

    renderCartRelatedContent({ sections }) {
        if (!sections) return
        const sectionToRender = [
            {
                sectionId: 'cart-count-bubble',
                queryElement: '[header-cart-bubble]',
            }
        ];
        try {
            sectionToRender.forEach((section) => {

                const getHTMLFromString = HELPER_UTIL.getHTMLFromString(sections[section.sectionId], section.queryElement);
                if (getHTMLFromString) {
                    const element = document.querySelector(section.queryElement);
                    if (element) {
                        element.innerHTML = getHTMLFromString.innerHTML;
                    }
                }
            })
        } catch (e) {
            new Error('Error while rendering cart related content', e)
        }

    }

    connectedCallback() {
        let path = window.location.pathname.split("/")
        path.some(item => item == 'products') && this.setRecentlyViewedProducts()
    }

    setRecentlyViewedProducts() {
        this.productId = this.querySelector('[name="product-id"]')?.value
        //Store the product ID to localStorage, and you can later retrieve it to display recently viewed products
        try {
            let recentlyViewedProducts = JSON.parse(localStorage.getItem('theme:recently-viewed-products') || '[]');

            // Remove the product and add it to start

            recentlyViewedProducts = recentlyViewedProducts.filter((item) => item !== this.productId);
            // if true it treated as recently visited added to start of the array
            recentlyViewedProducts.unshift(this.productId);

            localStorage.setItem('theme:recently-viewed-products', JSON.stringify(recentlyViewedProducts));
        } catch (e) {
            // Safari in private mode does not allow setting item so it will fail
        }
    }
    disconnectedCallBack() { }
}

customElements.get('product-form') ||
    customElements.define('product-form', ProductForm);

class VariantPicker extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('change', this.onVariantChange.bind(this));
        this.variantSKU = this.closest('[product-info]')?.querySelector('variant-sku');
    }

    connectedCallback() {
        this.sectionid = this.closest('[product-info]')?.dataset.sectionId;
        this.container = this.closest('[product-info]');
        this._block = this.container?.dataset.blockId;
        this._ugcReel = document.querySelector('ugc-reel');
    }
    onVariantChange(e) {

        this.isInQuickView = !!e.target.closest('product-quick-view-component');
        this.isOnProductPage = !this.isInQuickView && window.template === 'product' && !e.target.closest('[data-update-url="false"]');
        const currentUrl = this.dataset.url.split('?')[0];
        const selectedElement = e.target.tagName === 'SELECT'
            ? e.target.options[e.target.selectedIndex]
            : e.target;
        const newUrl = selectedElement.dataset.connectedProductUrl;
        const loadNewProduct = (this.isOnProductPage || this.isInQuickView) && !!newUrl && newUrl !== currentUrl;
        this.updateOptions();

        if (!loadNewProduct) {
            this.removeErrorMessage();
            this.updateVariantLabel(e);
            this.variantSKU && this.variantSKU.hide();
        }
        this.renderProductInfo(() => {
            // Add-button availability is server-rendered and synced in renderProductInfo
            // (_syncBuyButton), so no availability logic is needed here.
            if (this.currentVariant) {
                !this._block && this.updateMedia();
                this.updateVariantInput();
                !this._block && this.updateURL(selectedElement);
                this.updateQuantityRule();
                this.variantSKU && this.variantSKU.update(this.currentVariant.sku);
                !this._block && this.scrollToTop();
            }
            !this._block && this.updatePickupAvailability();
        }, selectedElement, loadNewProduct)

    }

    scrollToTop() {
        // Scroll to the top of the section (product info) when a variant is changed
        // Only scroll for grid layout or grid with main media layout
        // Only scroll when the media is updated (i.e., media changes on variant switch)
        if (this.container.hasAttribute('grid-layout') && this.mediaWasUpdated) {
            if (window.matchMedia('(min-width: 768px)').matches) {
                this.container.scrollIntoView({ behavior: 'smooth', block: 'start' });

            }
        }
    }

    updateVariantLabel(e) {
        e.target
            .closest('[product-variant-option]')
            .querySelector('[product-variant-option-value]').innerHTML =
            e.target.defaultValue || e.target.value;

        let swatchUpdate = e.target
            .closest('[product-variant-option]')
            .querySelector('[data-selected-dropdown-swatch] span')

        if (swatchUpdate) {
            let background = e.target.options[e.target.selectedIndex].getAttribute('data-option-swatch-value')
            let focalPoint = e.target.options[e.target.selectedIndex].getAttribute('data-option-swatch-focal-point')

            background && swatchUpdate.style.setProperty("--swatch--background", background)
            if (background === 'rgb(255, 255, 255)') {
                swatchUpdate.style.setProperty("--swatch-border-white", 'var(--color-border)')
            }
            focalPoint && swatchUpdate.style.setProperty("--swatch-focal-point", focalPoint)

        }
    }

    updateOptions() {

        this.options = Array.from(
            this.querySelectorAll('select'),
            (select) => select.options[select.selectedIndex]?.dataset.optionValueId
        );
        const fieldsets = Array.from(this.querySelectorAll('fieldset'));
        const pillsOptions = fieldsets.map((fieldset) => {
            return Array.from(fieldset.querySelectorAll('input')).find(
                (radio) => radio.checked
            )?.dataset.optionValueId;
        });
        if (pillsOptions && pillsOptions.length > 0) {
            this.options = [...this.options, ...pillsOptions];
        }

    }



    updateQuantityRule() {

        const getQuantitySelector =
            this.container.querySelector('quantity-selector');
        if (!getQuantitySelector) return;
        this.container
            .querySelector('quantity-selector')
            .setQuantityRules(this.currentVariant.quantity_rule);
    }

    getVariantData() {
        this.variantData =
            this.variantData ||
            JSON.parse(
                this.querySelector('[type="application/json"]').textContent
            );
        return this.variantData;
    }

    updateVariantInput() {
        const productForms = document.querySelectorAll(
            `#product-form-${this.dataset.section}`
        );
        productForms.forEach((productForm) => {
            const input = productForm.querySelector('input[name="id"]');
            input.value = this.currentVariant.id;
            input.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }

    // Sync the add-to-cart button from the fetched response. Availability (disabled + label,
    // including "Unavailable" for impossible combos) is rendered fully server-side by
    // product-buy-buttons, so this just copies the button's state in — no availability logic in
    // JS. disableState() sets the native .disabled, matching the server's `disabled` attribute.
    _syncBuyButton(html, sectionId) {
        const liveForm = document.getElementById(`product-form-${this.dataset.section}`);
        const sourceForm = html.getElementById(`product-form-${sectionId}`);
        if (!liveForm || !sourceForm) return;
        const liveBtn = liveForm.querySelector('[name="add"]');
        const sourceBtn = sourceForm.querySelector('[name="add"]');
        if (!liveBtn || !sourceBtn) return;

        liveBtn.disabled = sourceBtn.disabled;
        const liveText = liveBtn.querySelector('.btn--text');
        const sourceText = sourceBtn.querySelector('.btn--text');
        if (liveText && sourceText) liveText.innerHTML = sourceText.innerHTML;
    }

    removeErrorMessage() {
        const section = this.closest('section');
        if (!section) return;

        const productForm = section.querySelector('product-form');
        if (productForm) productForm.removeErrorMessage();
    }

    updateURL(selectedOption, loadNewProduct) {
        if (this.container.dataset.updateUrl === 'false') return;
        const url = new URL(window.location.href);
        let newUrl = selectedOption.dataset.connectedProductUrl;
        let variantId = selectedOption.dataset.variantId;
        if (this.isOnProductPage && variantId) {
            url.searchParams.set('variant', variantId);

        } else {
            url.searchParams.delete('variant');
        }
        if (loadNewProduct) {
            url.pathname = newUrl;
        }
        if (url.href !== window.location.href) {
            window.history.replaceState(
                {},
                '',
                url.toString()
            );
        }
    }

    updateMedia() {
        if (!this.currentVariant) return;

        if (!this.currentVariant.featured_media) return;
        try {
            const carouselElement =
                this.container.querySelector('product-carousel');
            carouselElement.goToSlideBasedOnMedia(
                this.currentVariant.featured_media.id
            );
            const media_item = document.querySelector(`[data-media-target-id="media-${this.currentVariant.featured_media.id}"]`);
            if (media_item) {
                media_item.parentElement.prepend(media_item);

            }
        } catch (error) {
            console.log(error);
        }
    }

    renderProductInfo(cb, selectedOption, loadNewProduct) {
        let addButton = null;
        if (!loadNewProduct) {
            const button = document.getElementById(
                `product-form-${this.dataset.section}`
            );
            addButton = button?.querySelector('[name="add"]');
            // Set submit buton state
            if (addButton) {
                HELPER_UTIL.submitButtonState(addButton).loadingState();
            }
            // Abort any ongoing request
            if (this.AbortController) {
                this.AbortController.abort();
            }
        }
        // Create instance of AbortController
        this.AbortController = new AbortController();
        return HELPER_UTIL.fetchData({
            method: 'GET',
            config: {
                signal: this.AbortController.signal,
            },
            url: this.buildRequestURL((loadNewProduct || !!this._block) ? selectedOption.dataset.connectedProductUrl : null, loadNewProduct),
            responseType: 'text',
            onsuccess: (data) => {
                const html = new DOMParser().parseFromString(data, 'text/html');

                if (loadNewProduct) {
                    if (this.isInQuickView) {
                        const quickViewComponent = this.closest('product-quick-view-component');
                        const newQuickViewContent = html.querySelector('[product-quick-view]');
                        if (quickViewComponent && newQuickViewContent) {
                            quickViewComponent.innerHTML = newQuickViewContent.outerHTML;
                            if (Shopify?.PaymentButton?.init) Shopify.PaymentButton.init();
                        }
                    } else {
                        const main = document.querySelector('main');
                        main.innerHTML = html.querySelector('main').innerHTML;
                        this.updateURL(selectedOption, loadNewProduct);
                    }
                } else {
                    let sourceVariantBlock = html.querySelector(`variant-picker[data-block-id="${this.dataset.blockId}"]`)?.closest('[variant-block]');
                    if (!sourceVariantBlock) {
                        sourceVariantBlock = html.querySelector('[variant-block]');
                    }

                    const variantJsonScript = sourceVariantBlock
                        ? sourceVariantBlock.querySelector('[type="application/json"]')
                        : html.querySelector('[type="application/json"]');
                    if (variantJsonScript) this.currentVariant = JSON.parse(variantJsonScript.textContent);

                    !this._block && this._ugcReel && this.ugcUpdate(html);

                    if (this._block) {
                        const bottomSheet = this.container.closest('[bottom-sheet-id="reel-product-variant"]');
                        // Try block-specific selector first; fall back to any bottom sheet with same ID in the response
                        const bottomSheetContainer = html.querySelector(`#ugc-reel-${this._block} [bottom-sheet-id="reel-product-variant"]`)
                            || html.querySelector('[bottom-sheet-id="reel-product-variant"]');
                        // Updates bottom-sheet variant block layout (only when accessible from container)
                        if (bottomSheet && bottomSheetContainer) {
                            bottomSheet.innerHTML = bottomSheetContainer.innerHTML;
                        }
                    } else {
                        // Update variant block
                        const liveBlock = this.closest('[variant-block]');
                        if (liveBlock && sourceVariantBlock) {
                            liveBlock.innerHTML = sourceVariantBlock.innerHTML;
                        }

                        // Update media only if the first media ID changed (ignores Swiper-added markup)
                        const mediaContainer = document.querySelector(`#product-media-container-${this.sectionid}`);
                        const newMediaContainerEl = html.querySelector(`#product-media-container-${this.sectionid}`);
                        const firstCurrentMediaId = mediaContainer?.querySelector('[data-media-id]')?.getAttribute('data-media-id') ?? '';
                        const firstNewMediaId = newMediaContainerEl?.querySelector('[data-media-id]')?.getAttribute('data-media-id') ?? '';

                        this.mediaWasUpdated = false;
                        if (mediaContainer && newMediaContainerEl?.innerHTML && firstCurrentMediaId !== firstNewMediaId) {
                            mediaContainer.innerHTML = newMediaContainerEl.innerHTML;
                            this.mediaWasUpdated = true;
                            const zoomDrawer = document.querySelector(`#product-zoom-drawer-${this.sectionid}`);
                            if (zoomDrawer) zoomDrawer.innerHTML = html.querySelector(`#product-zoom-drawer-${this.sectionid}`)?.innerHTML;

                            if (this.container.hasAttribute('grid-layout')) {
                                mediaContainer.querySelectorAll('default-player, youtube-player, vimeo-player').forEach(player => {
                                    HELPER_UTIL.trigerElementFunctionalityInView(player);
                                });
                            }
                        }
                    }

                    const sectionId = this.dataset.originalSection || this.dataset.section;
                    const destination = document.getElementById(`price-${this.dataset.section}`);
                    const source = html.getElementById(`price-${sectionId}`);
                    if (source && destination) destination.innerHTML = source.innerHTML;

                    const inventorySource = html.getElementById(`Inventory-${sectionId}`);
                    const inventoryDestination = document.getElementById(`Inventory-${this.dataset.section}`);
                    if (inventorySource && inventoryDestination) inventoryDestination.innerHTML = inventorySource.innerHTML;

                    const sticky_content = html.querySelectorAll('[sticky-add-to-cart-content]');
                    sticky_content && HELPER_UTIL.dispatchCustomEvent(
                        _EVENT_HELPER.updateStickyAddToCartContent,
                        document,
                        { sticky_content }
                    );

                    const sourceAddBtn = html.getElementById(`product-form-${sectionId}`)?.querySelector('[name="add"]');
                    const price = document.getElementById(`price-${this.dataset.section}`);
                    if (price) price.classList.toggle('visibility-hidden', sourceAddBtn?.dataset.buyState === 'unavailable');

                    // Sync the server-rendered add button. UGC (`this._block`) already swaps its
                    // whole bottom-sheet innerHTML above, so only the non-block contexts need this.
                    !this._block && this._syncBuyButton(html, sectionId);

                    cb && cb();
                }

            },
            onerror: (error) => {
                if (error.name === 'AbortError') return;
                console.log(error);
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.triggerToastMessage,
                    document,
                    {
                        toastType: 'common-errors',
                        messageType: 'error',
                        message: 'Something went went wrong! Please try again',
                    }
                );
            },
            defaultCb: () => {
                if (!loadNewProduct && addButton) {
                    HELPER_UTIL.submitButtonState(addButton).resetState(0);
                }
            },
        });
    }
    ugcUpdate (html){
        const ugcContainers = html?.querySelector("ugc-reel drawer-component");
        const oldUgcContainers = document.querySelector("ugc-reel drawer-component");
        if (!ugcContainers || !oldUgcContainers) return;
        const newugcEle = ugcContainers.querySelectorAll('[snap-slider-item] [reel-feed-card]');
        const oldUgcEle = oldUgcContainers.querySelectorAll('[snap-slider-item] [reel-feed-card]');

        if (!newugcEle.length) return;

        oldUgcEle.forEach((oldEle, index) => {
        const source = newugcEle[index % newugcEle.length];
        oldEle.innerHTML = source.innerHTML;
        });
        const newUgcBottomSheet = ugcContainers.querySelector('[bottom-sheet-id="reel-product-variant"]');
        const oldUgcBottomSheet = oldUgcContainers.querySelector('[bottom-sheet-id="reel-product-variant"]');
        if (oldUgcBottomSheet && newUgcBottomSheet) oldUgcBottomSheet.innerHTML = newUgcBottomSheet.innerHTML;
        this._ugcReel?._updateButtonLabel();
    }

    buildRequestURL(connectedProductUrl, loadNewProduct) {
        const params = []
        const productURL = connectedProductUrl || this.dataset.url;
        if (this.options?.length) {
            params.push(`option_values=${this.options.join(',')}`);
        }
        if (loadNewProduct) {
            if (this.isInQuickView) {
                return `${productURL}?view=product-quick-view&${params.join('&')}`;
            }
            return `${productURL}?${params.join('&')}`;
        }
        return `${productURL}?section_id=${this.sectionid}&${params.join('&')}`;

    }




    updatePickupAvailability() {
        // Dispatch on container (product-info element) which is the common parent
        const eventTarget = this.container || this.closest('[product-info]') || document;
        HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.updatePickUpLocationOnVariantChange,
            eventTarget,
            {
                variant: this.currentVariant,
                sectionId: this.sectionid,
            }
        );
    }

    disconnectedCallback() {
        this.removeEventListener('change', this.onVariantChange);
    }
}

customElements.get('variant-picker') ||
    customElements.define('variant-picker', VariantPicker);

class VariantSKU extends HTMLElement {
    constructor() {
        super();
    }

    hide() {
        this.style.display = 'none';
    }

    show() {
        this.style.display = 'block';
    }

    update(id) {
        if (id) {
            this.show();
            this.querySelector('[sku-code]').innerText = id;
        } else {
            this.hide();
        }
    }
}

customElements.get('variant-sku') ||
    customElements.define('variant-sku', VariantSKU);

class QuantitySelector extends HTMLElement {
    constructor() {
        super();
        this.inputField = this.querySelector(
            '[name=quantity], [name="updates[]"]'
        );
        this.incrementSelector = this.querySelector('[increase-value]');
        this.decrementSelector = this.querySelector('[decrease-value]');
        this.incrementSelector.addEventListener(
            'click',
            this.handleIncrementClick.bind(this)
        );
        this.decrementSelector.addEventListener(
            'click',
            this.handleDecrementClick.bind(this)
        );
        this.inputField.addEventListener(
            'change',
            HELPER_UTIL.debounce(() => {
                this.handleQuantityChangeEvent();
            }, 300)
        );
    }

    handleIncrementClick() {
        this.inputField.stepUp();
        this.inputField.dispatchEvent(new Event('change'));
    }

    handleDecrementClick() {
        const inputValue = Number(this.inputField.value);
        if (inputValue > 1) {
            this.inputField.stepDown();
            this.inputField.dispatchEvent(new Event('change'));
        }
    }

    // Fire custom event that will send Qunatity Value
    // Refer _EVENT_HELPER object
    handleQuantityChangeEvent() {
        HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.onQuantityChange,
            this.inputField,
            {
                quantity: this.inputField.value,
            }
        );
    }

    setQuantityRules(rule) {
        // Guard against undefined rule
        const { min, max, increment } = rule || {};
        const input = this.querySelector('input');
        if (!input) return;

        // Apply min
        if (typeof min === 'number') {
            input.min = String(min);
            // Ensure current value is not below min
            const current = Number(input.value) || 0;
            if (current < min) input.value = String(min);
        } else {
            input.removeAttribute('min');
        }

        // Apply max
        if (typeof max === 'number') {
            input.max = String(max);
            // Ensure current value is not above max
            const current = Number(input.value);
            if (!Number.isNaN(current) && current > max) input.value = String(max);
        } else {
            input.removeAttribute('max');
        }

        // Apply step
        if (typeof increment === 'number' && increment > 0) {
            input.step = String(increment);
        } else {
            input.removeAttribute('step');
        }

        // If value is empty after adjustments, default to 1
        if (!input.value || Number(input.value) <= 0) {
            input.value = String(typeof min === 'number' && min > 0 ? min : 1);
        }
    }

    disconnectedCallback() {
        this.incrementSelector.removeEventListener(
            'click',
            this.handleIncrementClick.bind(this)
        );
        this.decrementSelector.removeEventListener(
            'click',
            this.handleIncrementClick.bind(this)
        );
        this.inputField.removeEventListener(
            'change',
            this.handleQuantityChangeEvent.bind(this)
        );
    }
}

customElements.get('quantity-selector') ||
    customElements.define('quantity-selector', QuantitySelector);

class ProductZoom extends HTMLElement {
    constructor() {
        super();
        this.sectionID = this.closest("section").id;
    }
    connectedCallback() {
        this.index = parseInt(this.dataset.index);
        this.addEventListener('click', this.openZoom.bind(this))
        this.zoomCarousel = document.querySelector(`#${this.sectionID} product-zoom-carousel`);
    }

    openZoom() {
        window.currentActiveElement = this
        const swiper = this.zoomCarousel?.swiperInstance
        HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.showDrawer,
            this,
            {
                drawerType: `product-zoom-${this.sectionID.replace("shopify-section-", "")}`
            }
        );
        swiper?.slideTo(this.index, 0);
    }
}

customElements.get('product-zoom') ||
    customElements.define('product-zoom', ProductZoom);


class ProductZoomDrawer extends Drawer {
    constructor() {
        super();
    }

    _updateDrawerHeight() {
        const headerContainerHeight =
            this.querySelector(
                '[drawer-header]'
            )?.offsetHeight;

        this.style.setProperty(
            '--set-container-height',
            `${headerContainerHeight}px`
        );
    }

    connectedCallback() {
        this._updateDrawerHeight();
    }
}

customElements.get('product-zoom-drawer') ||
    customElements.define('product-zoom-drawer', ProductZoomDrawer);



class ProductZoomCarouselComponent extends CarouselComponent {
    constructor() {
        super();
        this.thumnailSliderId = this.getAttribute('slide-thumnail-slider-id');
        this.thumbNailSliderElement = document.querySelector(
            `#${this.thumnailSliderId}`
        );
        this.drawerID = this.closest('product-zoom-drawer').getAttribute(
            'drawer-type'
        );
        document.addEventListener(_EVENT_HELPER.showDrawer, (e) => {
            if (e.detail.drawerType == this.drawerID) {
                this.classList.remove('d-none');

            }
        });

    }


    handleSliderAfterInitialization(swiperInstance) {
        super.handleSliderAfterInitialization(swiperInstance);
        this.lazyLoadingPreloader(swiperInstance);
        window.currentActiveElement?.dataset.index
            ? swiperInstance.slideTo(
                parseInt(window.currentActiveElement?.dataset.index)
            )
            : null;
        swiperInstance.zoom.enable();
        this.addEventListeners();
    }

    handleFunctionalityAfterSlideChange(swiperInstance) {
        super.handleFunctionalityAfterSlideChange(swiperInstance);
        this.lazyLoadingPreloader(swiperInstance);
        if (swiperInstance.slides?.[swiperInstance.previousIndex]) {
            swiperInstance?.zoom.out();
        }
    }

    lazyLoadingPreloader(swiperInstance) {
        const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
        let img = activeSlide.querySelector('img');
        if (!img?.classList.contains('loaded')) {
            const imageLoad = setInterval(() => {
                if (img.complete) {
                    activeSlide
                        .querySelector('[zoom-lazy-load-spinner]')
                        ?.remove();
                    img.classList.add('loaded');
                    clearInterval(imageLoad);
                }
            }, 100);
        }
    }

    addEventListeners() {
        let mouseX;
        let mouseY;
        this.querySelectorAll('.swiper-slide').forEach((slide) => {
            slide.addEventListener('pointerdown', (e) => {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });
            slide.addEventListener('pointerup', (e) => {
                mouseX -= e.pageX;
                mouseY -= e.pageY;
                const diff = mouseX + mouseY;
                if (diff < 10 && diff > -10) {
                    if (slide.classList.contains('swiper-slide-zoomed')) {
                        this.swiperInstance.zoom.out();
                    } else {
                        this.swiperInstance.zoom.in();
                    }
                }
            });
        });
    }
}

customElements.get('product-zoom-carousel') ||
    customElements.define(
        'product-zoom-carousel',
        ProductZoomCarouselComponent
    );
if (!customElements.get('pickup-availability')) {
    customElements.define(
        'pickup-availability',
        class PickupAvailability extends HTMLElement {
            constructor() {
                super();
                this.sectionid = this.dataset.sectionId;
                this.errorHtml =
                    this.querySelector(
                        'template'
                    ).content.firstElementChild.cloneNode(true);
                this.errorHtml
                    .querySelector('button')
                    .addEventListener(
                        'click',
                        this.onClickRefreshList.bind(this)
                    );

                document.addEventListener(
                    _EVENT_HELPER.updatePickUpLocationOnVariantChange,
                    (e) => {
                        const variantId = e.detail.variant?.id;
                        const ifVariantAvailable = e.detail.variant?.available;

                        // Check if  pickup-availability is in the same product section
                        if (e.detail.sectionId !== this.sectionid) return;

                        if (ifVariantAvailable && variantId) {
                            this.fetchAvailability(variantId);
                        } else {
                            this.removeAttribute('available');
                            this.classList.add('d-none');
                            this.innerHTML = '';
                        }
                    }
                );
            }

            fetchAvailability(variantId) {
                let rootUrl = this.dataset.rootUrl;
                if (!rootUrl.endsWith('/')) {
                    rootUrl = rootUrl + '/';
                }
                const variantSectionUrl = `${rootUrl}variants/${variantId}/?section_id=pickup-availability`;

                HELPER_UTIL.fetchData({
                    url: variantSectionUrl,
                    method: 'GET',
                    responseType: 'text',
                    onsuccess: (response) => {
                        const sectionInnerHTML = new DOMParser()
                            .parseFromString(response, 'text/html')
                            .querySelector('.shopify-section');
                        this.renderPreview(sectionInnerHTML);
                    },
                    onerror: (e) => {
                        this.renderError();
                    },
                });
            }

            onClickRefreshList(evt) {
                this.fetchAvailability(this.dataset.variantId);
            }

            renderError() {
                this.innerHTML = '';
                this.appendChild(this.errorHtml);
            }

            renderPreview(sectionInnerHTML) {
                if (
                    !sectionInnerHTML.querySelector(
                        'pickup-availability-preview'
                    )
                ) {
                    this.innerHTML = '';
                    this.removeAttribute('available');
                    this.classList.add('d-none');
                    return;
                }
                this.innerHTML = sectionInnerHTML.querySelector(
                    'pickup-availability-preview'
                ).outerHTML;
                this.setAttribute('available', '');
                this.classList.remove('d-none');

                const button = this.querySelector('button');
                const pickUpData = this.querySelector('template').innerHTML;
                if (button) {
                    button.addEventListener('click', (evt) => {
                        HELPER_UTIL.dispatchCustomEvent(
                            _EVENT_HELPER.triggerPickUpLoacationDrawerList,
                            this,
                            {
                                pickUpHTMLList: pickUpData.toString(),
                            }
                        );
                        window.currentActiveElement = button;
                    });
                }
            }

            connectedCallback() {
                if (this.hasAttribute('available')) {
                    this.fetchAvailability(this.dataset.variantId);
                }
            }
        }
    );
}

class CartRecommendations extends HTMLElement {
    constructor() {
        super();
        this.recommendationLogic =
            this.getAttribute('recommendation-logic') || 'related';
        this.generateShopifyRecommendations =
            this.getAttribute('recommendation-type') ===
            'shopify_recommendation';
        this.recommendationProductId =
            this.getAttribute('recommendation-product-id') || null;
        this.recommendationLimit = this.getAttribute('recommendation-limit');
        this.recommendationSection = this.getAttribute(
            'recommendation-section'
        );
        this.activeRecommendation = false;
        this.desktopLayoutStyle = this.getAttribute('desktop-layout-style') || 'stack_outside';
        this.elObj = {
            activeElClass: 'recommendations-active',
            activeCarouselClass: 'set--as--carousel',
            productsReadyClass: 'products-ready',
            recommendationEl: '[product-recommendation]',
            recommendationsMain: '[recommendation-main]',
            recommendationsPreloader: '[recommendation-preloader]',
        };

        this.recommendationMainEl = this.querySelector(
            this.elObj.recommendationsMain
        );

        document.addEventListener(_EVENT_HELPER.showDrawer, (e) => {
            if (e.detail.drawerType !== 'cart-drawer') return;
            this.closest('cart-drawer-component').querySelector('drawer-cart')
                .dataset.cartitemcount > 0 && this.onCartDrawerActive();
        });
        document.addEventListener(_EVENT_HELPER.hideDrawer, (e) => {
            if (e.detail.drawerType !== 'cart-drawer') return;
            this.onCartDrawerInActive();
        });

        document.addEventListener(
            _EVENT_HELPER.showCartRecommendations,
            this.onCartDrawerActive.bind(this)
        );

        document.addEventListener(
            _EVENT_HELPER.hideCartRecommendations,
            this.onCartDrawerInActive.bind(this)
        );

        // Generate Recommendations based on browser screen
        this.matchMedia = window.matchMedia('(max-width: 767px)');

        // Listen to change event when media matches to screne size
        this.matchMedia.addEventListener(
            'change',
            this.dispatchRecommendationCarouselEvent.bind(this)
        );
    }

    // Update carousel class that will set position of carousel
    // stack_inside forces carousel on desktop; mobile always uses carousel
    setLayoutType(changeToCarousel) {
        const useCarousel = changeToCarousel || this.desktopLayoutStyle === 'stack_inside';
        if (useCarousel) {
            this.classList.add(this.elObj.activeCarouselClass);
        } else {
            this.classList.remove(this.elObj.activeCarouselClass);
        }
    }

    // Dispatch Event that will be listend by 'recommendation-carousel' Component
    // To decide whether to generate initiate swiper based on match media
    dispatchRecommendationCarouselEvent(e) {
        const mediaMatches = e.matches;
        this.setLayoutType(mediaMatches);
        HELPER_UTIL.dispatchCustomEvent(
            'action:renderRecommendationCarousel',
            this,
            {
                generateCarousel: mediaMatches || this.desktopLayoutStyle === 'stack_inside',
            }
        );
    }

    // Recommendation drawer hide/show Utility

    drawerActions() {
        const hide = () => {
            this.classList.remove(this.elObj.activeElClass);
            this.activeRecommendation = false;
            setTimeout(() => {
                this.ariaHidden = true;
            }, 400);
        };
        const show = () => {
            // if media matches then show immediately else wait for 400ms
            setTimeout(
                () => {
                    this.classList.add(this.elObj.activeElClass);
                    this.activeRecommendation = true;
                    this.ariaHidden = false;
                },
                this.matchMedia.matches ? 0 : 400
            );
        };

        return {
            hide,
            show,
        };
    }

    // Ajax products html data element hide/show handler

    setProductsContainer() {
        const active = () => {
            this.classList.add(this.elObj.productsReadyClass);
        };
        const inActive = () => {
            this.classList.remove(this.elObj.productsReadyClass);
        };

        return {
            active,
            inActive,
        };
    }

    // Handle Appending data to element based on ajax data
    generateProductLayouts(textData) {
        const html = document.createElement('div');
        html.innerHTML = textData;
        const getHTMLfromEL = html.querySelector(this.elObj.recommendationEl);
        const elToAdd = this.querySelector(this.elObj.recommendationEl);
        if (getHTMLfromEL && getHTMLfromEL.innerHTML.trim().length) {
            elToAdd.innerHTML = getHTMLfromEL.innerHTML;
        }
    }

    // Make Fetch call to product recommendation Api
    fetchRecommendedProducts() {
        this.setProductsContainer().inActive();
        if (!this.activeRecommendation) {
            this.drawerActions().show();
        }
        HELPER_UTIL.fetchData({
            method: 'GET',
            responseType: 'text',
            url: `${window.Shopify.routes.root}recommendations/products?product_id=${this.recommendationProductId}&limit=${this.recommendationLimit}&section_id=${this.recommendationSection}&intent=${this.recommendationLogic}`,
            onsuccess: (textData) => {
                this.generateProductLayouts(textData);
                this.setProductsContainer().active();
            },
            onerror: (error) => {
                console.log(error);
            },
        });
    }

    // Handle set of functions on cart drawer show event trigger
    onCartDrawerActive(e) {
        this.drawerActions().show();
        this.setProductsContainer().active();
    }

    // Handle set of functions  on cart drawer hide event trigger

    onCartDrawerInActive(e) {
        this.drawerActions().hide();
    }

    connectedCallback() {
        // Set recommendation layout type based on media.matchmedia or stack_inside setting
        this.setLayoutType(this.matchMedia.matches);
        HELPER_UTIL.dispatchCustomEvent(
            'action:renderRecommendationCarousel',
            this,
            {
                generateCarousel: this.matchMedia.matches || this.desktopLayoutStyle === 'stack_inside',
            }
        );
    }

    disconnectedCallback() {}
}

customElements.get('cart-recommendation') ||
    customElements.define('cart-recommendation', CartRecommendations);

// Cart Recommendatin Carousel

class RecommendationCarousel extends HTMLElement {
    constructor() {
        super();

        this.matchMedia = window.matchMedia('(max-width: 767px)');
        this.swiperInstance = null;
        this.mainSliderElement = this.querySelector('[main-slider]');
        this.swiperPaginationEl = this.querySelector('.swiper-pagination');
        document.addEventListener(
            'action:renderRecommendationCarousel',
            this.handleSwiperInitialization.bind(this)
        );
        this.prevButton = this.querySelector('[slide-prev]');
        this.nextButton = this.querySelector('[slide-next]');
    }

    initCarousel() {
        const isStackInside = this.closest('cart-recommendation')
            ?.getAttribute('desktop-layout-style') === 'stack_inside';
        const swiperOptions = {
            rtl: HELPER_UTIL.isRTL(),
            spaceBetween: 20,
            slidesPerView: 1.2,
            observer: true,
            slidesOffsetAfter: isStackInside ? 20 : 0,
        };
        if (this.prevButton && this.nextButton) {
            swiperOptions.navigation = {
                prevEl: this.prevButton,
                nextEl: this.nextButton,
            };
        }
        this.swiperInstance = new Swiper(this.mainSliderElement, swiperOptions);
    }

    // Handle Swiper destory or initialization based on event

    handleSwiperInitialization(e) {
        if (e.detail.generateCarousel) {
            this.initCarousel();
        } else {
            if (this.swiperInstance) {
                this.swiperInstance.destroy();
            }
        }
    }

    connectedCallback() {
        const isStackInside = this.closest('cart-recommendation')
            ?.getAttribute('desktop-layout-style') === 'stack_inside';
        if (this.matchMedia.matches || isStackInside) {
            this.initCarousel();
        }
    }
}

customElements.get('recommendation-carousel') ||
    customElements.define('recommendation-carousel', RecommendationCarousel);

/**
 * CartGiftManager
 * Automatically adds/removes a free gift product based on cart total.
 *
 * Loop-prevention strategy:
 *  1. Processing lock    – prevents concurrent cart API calls
 *  2. Debounce (500ms)   – coalesces rapid triggerCartChange events
 *  3. _selfDispatching   – our own add/remove events are ignored by _boundHandler
 *  4. Cooldown (3s)      – throttles blind fetches only (skipped when event includes cart data)
 *
 * HTML attributes (set from Liquid):
 *  - gift-variant-id:  Shopify variant ID of the gift product
 *  - threshold-amount: Minimum cart total in cents to qualify
 *
 * Placement: Outside <drawer-cart> so innerHTML re-renders don't destroy it.
 */

let _giftProcessingLock = false;
let _giftCooldownUntil = 0;

class CartGiftManager extends HTMLElement {
    constructor() {
        super();

        this.giftVariantId = Number(this.getAttribute('gift-variant-id'));
        this.thresholdAmount = Number(this.getAttribute('threshold-amount'));

        if (!this.giftVariantId || !this.thresholdAmount) return;

        // threshold-amount comes from `settings.free_gifting_amount | times: 100` in Liquid —
        // a base-currency value. cart.js returns total_price in the customer's presentment
        // currency, so we must scale the threshold by Shopify's exchange rate.
        const currencyRate = parseFloat((Shopify.currency && Shopify.currency.rate) || 1);
        this.finalThreshold = this.thresholdAmount * currencyRate;
        this.isInitialized = true;
        this._latestCartData = null;
        // Flag set to true while we are dispatching our own triggerCartChange
        // so _boundHandler can ignore events we caused (prevents spurious cart.js re-fetch)
        this._selfDispatching = false;

        this._debouncedCheck = HELPER_UTIL.debounce(() => {
            this._onCartChange();
        }, 500);

        this._boundHandler = (e) => {
            if (this._selfDispatching) return;
            if (e.detail?.cart?.items) {
                this._latestCartData = e.detail.cart;
            }
            this._debouncedCheck();
        };

        document.addEventListener(
            _EVENT_HELPER.triggerCartChange,
            this._boundHandler
        );
        // Also listen to showCartPopup — fired by product-form/card when
        // "show cart popup" is enabled in theme settings instead of triggerCartChange
        document.addEventListener(
            _EVENT_HELPER.showCartPopup,
            this._boundHandler
        );
    }

    connectedCallback() {
        if (this.isInitialized) {
            this._overlay = document.querySelector('[gift-loader-overlay]');
            this._fetchAndProcessCart();
        }
    }

    _onCartChange() {
        if (_giftProcessingLock) return;

        if (this._latestCartData) {
            const cartData = this._latestCartData;
            this._latestCartData = null;
            this._processCartData(cartData);
            return;
        }

        if (Date.now() < _giftCooldownUntil) {
            const remaining = _giftCooldownUntil - Date.now() + 50;
            setTimeout(() => this._onCartChange(), remaining);
            return;
        }

        this._fetchAndProcessCart();
    }

    _processCartData(cart) {
        if (_giftProcessingLock) return;
        _giftProcessingLock = true;
        const result = this._analyzeCart(cart);
        const shouldHaveGift =
        result.eligibleTotal >= this.finalThreshold &&
        result.hasNonGiftItems;
        // Gift wrap items (nested children with parent_relationship) are processed by _analyzeCart
        // as regular non-gift items, so giftLineItem still only refers to the standalone free gift item.
        const hasGift = result.giftLineItem !== null;
        if (shouldHaveGift && !hasGift) {
            this._addGift();
        } else if (!shouldHaveGift && result.giftLineItem !== null) {
            this._removeGift(result.giftLineItem.key);
        } else {
            _giftProcessingLock = false;
        }
    }

    _fetchAndProcessCart() {
        if (_giftProcessingLock) return;
        _giftProcessingLock = true;

        HELPER_UTIL.fetchData({
            method: 'GET',
            url: window.Shopify.routes.root + 'cart.js',
            onsuccess: (cart) => {
                _giftProcessingLock = false;
                this._processCartData(cart);
            },
            onerror: () => {
                _giftProcessingLock = false;
            },
        });
    }

    _analyzeCart(cart) {
        let giftLineItem = null;
        let hasNonGiftItems = false;
        let eligibleTotal = 0;

        cart.items.forEach((item) => {
            // Gift wrap items (nested children via Shopify's parent_relationship) are considered
            // as non-gift items and count toward the threshold.
            if (item.variant_id === this.giftVariantId) {
                giftLineItem = item;
            } else {
                hasNonGiftItems = true;
                eligibleTotal += Number(item.final_line_price) || 0;
            }
        });

        // Subtract cart-level discount codes (e.g. 50% off the whole cart).
        // final_line_price only reflects line-item discounts, not cart-level codes,
        // so without this subtraction the eligibleTotal is inflated and the gift
        // could be added even when the customer's actual payment is below threshold.
        if (cart.cart_level_discount_applications) {
            cart.cart_level_discount_applications.forEach((discount) => {
                const discountAmount = discount.total_allocated_amount ?? discount.amount ?? 0;
                eligibleTotal -= discountAmount;
            });
        }

        if (eligibleTotal < 0) eligibleTotal = 0;

        return {
            eligibleTotal,
            giftLineItem,
            hasNonGiftItems,
        };
    }

    _getSectionsString() {
        let sections = HELPER_UTIL.sectionRenderUtil('cart-drawer').getSectionsString();
        if (document.querySelector('cart-page')) {
            sections += ',' + HELPER_UTIL.sectionRenderUtil('main-cart').getSectionsString();
        }
        return sections;
    }

    _showCartOverlay() {
        this._overlay?.classList.add('gift-loader-overlay--active');
    }

    _hideCartOverlay() {
        this._overlay?.classList.remove('gift-loader-overlay--active');
    }

    _addGift() {
        const sectionsToRender = this._getSectionsString();
        this._showCartOverlay();

        HELPER_UTIL.fetchData({
            method: 'POST',
            url:
                window.Shopify.routes.root +
                'cart/add.js?sections=' +
                sectionsToRender,
            data: JSON.stringify({
                items: [{ id: this.giftVariantId, quantity: 1 }],
            }),
            config: {
                headers: { 'Content-Type': 'application/json' },
            },
            onsuccess: (data) => {
                _giftCooldownUntil = Date.now() + 3000;
                // Guard so our own event doesn't re-trigger the gift manager
                this._selfDispatching = true;
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.triggerCartChange,
                    document,
                    { sections: data.sections }
                );
                this._selfDispatching = false;
            },
            onerror: () => {
                console.warn('[CartGiftManager] Failed to add gift product');
            },
            defaultCb: () => {
                _giftProcessingLock = false;
                this._hideCartOverlay();
            },
        });
    }

    _removeGift(lineItemKey) {
        const sectionsToRender = this._getSectionsString();
        this._showCartOverlay();

        HELPER_UTIL.fetchData({
            method: 'POST',
            url:
                window.Shopify.routes.root +
                'cart/change.js?sections=' +
                sectionsToRender,
            data: JSON.stringify({ id: lineItemKey, quantity: 0 }),
            config: {
                headers: { 'Content-Type': 'application/json' },
            },
            onsuccess: (data) => {
                _giftCooldownUntil = Date.now() + 3000;
                // Guard so our own event doesn't re-trigger the gift manager
                this._selfDispatching = true;
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.triggerCartChange,
                    document,
                    { sections: data.sections }
                );
                this._selfDispatching = false;
            },
            onerror: () => {
                console.warn('[CartGiftManager] Failed to remove gift product');
            },
            defaultCb: () => {
                _giftProcessingLock = false;
                this._hideCartOverlay();
            },
        });
    }

    disconnectedCallback() {
        if (this._boundHandler) {
            document.removeEventListener(
                _EVENT_HELPER.triggerCartChange,
                this._boundHandler
            );
            document.removeEventListener(
                _EVENT_HELPER.showCartPopup,
                this._boundHandler
            );
        }
    }
}

customElements.get('cart-gift-manager') ||
    customElements.define('cart-gift-manager', CartGiftManager);

class CartNote extends HTMLTextAreaElement {
    constructor() {
        super();

        this.addEventListener(
            'change',
            HELPER_UTIL.debounce((event) => {
                this.updateCartNote(event);
            }, 500)
        );
    }

    updateCartNote(event) {
        const body = JSON.stringify({ note: event.target.value.trim() });
        HELPER_UTIL.fetchData({
            url: `${window.Shopify.routes.root}cart/update.js`,
            method: 'POST',
            data: body,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            onsuccess: (data) => {
                console.log(data);
            },
            onerror: (error) => {
                error.json().then((errorObj) => {
                    console.log(errorObj);
                });
            },
        });
    }
}

customElements.define('cart-note', CartNote, { extends: 'textarea' });

class FreeShippingComponent extends HTMLElement {
    constructor() {
        super();

        this.thresholdPrice = Number(this.getAttribute('threshold'));
        this.cartTotal = Number(this.getAttribute('total-price'));
        this.freeShippingMessage = this.getAttribute(
            'free-shipping-activated-message'
        );
        this.defaultMessage = this.getAttribute('default-shipping-message');
        this.progressBar = this.querySelector('[progress-bar]');
        this.shippingMessageEl = this.querySelector('[shipping-message]');

        this.hasMilestones = this.hasAttribute('has-milestones');
        this.giftIsFirst = this.hasAttribute('gift-is-first');
        this.giftUnavailable = this.hasAttribute('gift-unavailable');
        this.giftUnavailableMessage = this.getAttribute('gift-unavailable-message');

        // Thresholds are entered by merchants in the store's base currency, but cart prices
        // are in the customer's presentment currency. Scale by Shopify's exchange rate so
        // comparisons are correct for non-base-currency storefronts.
        const currencyRate = parseFloat((Shopify.currency && Shopify.currency.rate) || 1);
        this.finalThresholdPrice = this.thresholdPrice * currencyRate;

        if (this.hasMilestones) {
            this.giftThresholdPrice = Number(this.getAttribute('gift-threshold'));
            this.finalGiftThresholdPrice = this.giftThresholdPrice * currencyRate;
            this.defaultGiftMessage = this.getAttribute('default-gift-message');
            this.allMilestonesMessage = this.getAttribute('all-milestones-message');
            this.shippingMarker = this.querySelector('[milestone-shipping]');
            this.giftMarker = this.querySelector('[milestone-gift]');
        }
    }

    getShippingMessage() {
        if (this.hasMilestones) {
            return this.getMilestoneMessage();
        }

        let message;
        if (this.cartTotal < this.finalThresholdPrice) {
            let amountToSpend = this.finalThresholdPrice - this.cartTotal;
            let formatedAmountAsPerCurrency = Shopify.formatMoney(
                amountToSpend,
                Shopify.money_format
            );
            message = this.defaultMessage
                .trim()
                .replace('{{ pending_amount }}', formatedAmountAsPerCurrency);
        } else if (this.giftUnavailable && this.giftUnavailableMessage) {
            message = this.giftUnavailableMessage;
        } else {
            message = this.freeShippingMessage;
        }

        return message;
    }

    getMilestoneMessage() {
        if (this.cartTotal >= this.finalGiftThresholdPrice) {
            if (this.giftUnavailable && this.giftUnavailableMessage) {
                return this.giftUnavailableMessage;
            }
            return this.allMilestonesMessage;
        }

        if (this.cartTotal >= this.finalThresholdPrice) {
            // When the gift milestone is first and it has been reached,
            // show the unavailable message if the gift is out of stock.
            if (this.giftIsFirst && this.giftUnavailable && this.giftUnavailableMessage) {
                return this.giftUnavailableMessage;
            }
            let amountToSpend = this.finalGiftThresholdPrice - this.cartTotal;
            let formatedAmountAsPerCurrency = Shopify.formatMoney(
                amountToSpend,
                Shopify.money_format
            );
            return this.defaultGiftMessage
                .trim()
                .replace('{{ pending_amount }}', formatedAmountAsPerCurrency);
        }

        let amountToSpend = this.finalThresholdPrice - this.cartTotal;
        let formatedAmountAsPerCurrency = Shopify.formatMoney(
            amountToSpend,
            Shopify.money_format
        );
        return this.defaultMessage
            .trim()
            .replace('{{ pending_amount }}', formatedAmountAsPerCurrency);
    }

    getProgressBarWidth() {
        if (this.hasMilestones) {
            // Map progress so first marker (50%) aligns with first threshold
            // and second marker (100%) aligns with second threshold
            if (this.cartTotal <= 0) return 0;
            if (this.cartTotal >= this.finalGiftThresholdPrice) return 100;
            if (this.cartTotal <= this.finalThresholdPrice) {
                // 0 to first threshold maps to 0% to 50%
                return this.finalThresholdPrice > 0 ? (this.cartTotal / this.finalThresholdPrice) * 50 : 50;
            }
            // first threshold to second threshold maps to 50% to 100%
            let remaining = this.cartTotal - this.finalThresholdPrice;
            let range = this.finalGiftThresholdPrice - this.finalThresholdPrice;
            return range > 0 ? 50 + (remaining / range) * 50 : 100;
        }

        if (this.finalThresholdPrice <= 0) return 100;
        let calculateDiscount = Math.abs(
            (this.cartTotal / this.finalThresholdPrice) * 100
        );
        let barWidth = calculateDiscount < 100 ? calculateDiscount : 100;

        return barWidth;
    }

    updateMilestoneStates() {
        if (this.shippingMarker) {
            this.shippingMarker.classList.toggle(
                'reached',
                this.cartTotal >= this.finalThresholdPrice
            );
        }
        if (this.giftMarker) {
            this.giftMarker.classList.toggle(
                'reached',
                this.cartTotal >= this.finalGiftThresholdPrice
            );
        }
    }

    renderShippingMessageWithBar() {
        let shippingMessage = this.getShippingMessage();
        let progressBarWidth = this.getProgressBarWidth();
        this.shippingMessageEl.textContent = shippingMessage;
        this.progressBar.style.setProperty("--bar-width", progressBarWidth + '%');

        if (this._hasRendered) {
            const currentWidth = getComputedStyle(this.progressBar).width;
            this.progressBar.style.animation = 'none';
            this.progressBar.style.width = currentWidth;
            void this.progressBar.offsetHeight;
            this.progressBar.style.width = progressBarWidth + '%';
        }
        this._hasRendered = true;

        if (this.hasMilestones) {
            this.updateMilestoneStates();
        }
    }

    connectedCallback() {
        if (this.cartTotal || this.thresholdPrice)
            this.renderShippingMessageWithBar();
    }
}

customElements.get('free-shipping') ||
    customElements.define('free-shipping', FreeShippingComponent);

class ToastMessage extends HTMLElement {
    constructor() {
        super();
        this.messageTypeObj = {
            success: 'success',
            error: 'error',
        };
        this.activeToastClass = 'active';
        this.toastType = this.getAttribute('toast-type');
        document.addEventListener(_EVENT_HELPER.triggerToastMessage, (e) => {
            const { toastType } = e.detail;
            if (this.toastType !== toastType) return;
            console.log(this.toastType);
            this.toast(e.detail);
        });
    }

    toastActions() {
        const hideToast = () => {
            this.classList.remove(this.activeToastClass);
        };
        const showToast = () => {
            this.classList.add(this.activeToastClass);
        };

        return {
            hideToast,
            showToast,
        };
    }

    addClassBaseOnType(messageType) {
        switch (messageType) {
            case 'success':
                this.classList.add(this.messageTypeObj.success);
                break;
            case 'error':
                this.classList.add(this.messageTypeObj.error);
                break;
            case 'reset':
                this.classList.remove('success', 'error');
                break;
        }
    }

    updateMessageText(message, emptyMessage = false) {
        const messageEl = this.querySelector('[message-text]');
        // Bolean true to set empty message text while hidding;
        if (emptyMessage) {
            messageEl.textContent = '';
        } else {
            messageEl.textContent = message;
        }
    }

    toast({ message, messageType }) {
        this.updateMessageText(message);
        this.addClassBaseOnType(messageType);
        this.toastActions().showToast();

        setTimeout(() => {
            this.toastActions().hideToast();
            this.updateMessageText('', true);
            this.addClassBaseOnType('reset');
        }, 3000);
    }
}

customElements.get('toast-message') ||
    customElements.define('toast-message', ToastMessage);

class HeaderMenuTrigger extends HTMLElement {
    constructor() {
        super();
        this.isDropDownOpen = false;
        this.triggerType = this.getAttribute('data-trigger');
        this.identifier = this.getAttribute('data-identefier');
        this.linkUrl = this.getAttribute('data-link-url');
        this.detailsEl = this.querySelector('details');
        this.summaryEl = this.querySelector('summary');
        this.menuItems = this.querySelectorAll('[menu-item]');
        this.dropdownEl = this.querySelector('[details-dropdown]');
        this.transparentHeader = document.querySelector("[transparent-header]")
        this.elParentElement = null;
        this.timeouts;
        if (this.identifier === 'child-element') {
            this._parentScrollList = this.closest('.dropdown-menu__list');
            this._onParentScroll = () => this._hideDropDown();
        }
        switch (this.triggerType) {
            case 'click':
                this.summaryEl.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (this.isDropDownOpen) {
                        this._hideDropDown();
                    } else {
                        this._hideOtherDropdown();
                        this._showDropDown();
                    }
                });
                break;

            case 'hover':
                this.summaryEl.addEventListener('click', (e) => {
                    e.preventDefault();
                    const isPointerClick = e.detail > 0 || e.pointerType !== '';
                    if (!isPointerClick) {
                        if (this.isDropDownOpen) {
                            this._hideDropDown();
                        } else {
                            this._hideOtherDropdown();
                            this._showDropDown();
                        }
                    } else if (this.linkUrl && this.linkUrl !== '#' && this.linkUrl !== '') {
                        window.open(this.linkUrl, e.metaKey || e.ctrlKey ? '_blank' : '_self');
                    }
                });

                this.detailsEl.addEventListener('mouseenter', (e) => {
                    e.preventDefault();
                    clearInterval(this.timmer);
                    if (!this.isDropDownOpen) {
                        this._hideOtherDropdown();
                        this._showDropDown();
                    }
                });

                this.detailsEl.addEventListener("mouseleave", (e) => {
                    e.preventDefault();
                    this.timmer = setTimeout(() => {
                        if (this.isDropDownOpen) {
                            this._hideDropDown();
                        }
                    }, 50)

                })

                this.dropdownEl.addEventListener("mouseenter", () => {
                    clearInterval(this.timmer);
                });


                break;
        }
    }

    _showDropDown() {
        this.detailsEl.open = true;
        this.detailsEl.ariaExpanded = true;
        this.isDropDownOpen = true;
        this.dropdownEl.classList.add('dropdown-active');
        if (this.identifier === 'child-element') {
            this._positionChildList();
            this._parentScrollList?.addEventListener('scroll', this._onParentScroll);
        } else if (this.identifier === 'parent-element' && HELPER_UTIL.isRTL()) {
            this._positionRTLDropdown();
        }
        this._animateDropDown();
        this.transparentHeader?.classList.add("fill-header");
    }

    // RTL top-level: anchor to right edge (opens leftward); flip if dropdown would overflow left viewport edge
    _positionRTLDropdown() {
        const openLeftward = this.getBoundingClientRect().right >= (this.dropdownEl.offsetWidth || 215);
        this.dropdownEl.style.right = openLeftward ? '0' : 'auto';
        this.dropdownEl.style.left = openLeftward ? 'auto' : '0';
    }

    // Position --child-list with fixed coords so it escapes the parent scroll container's overflow clipping
    _positionChildList() {
        if (!this._parentScrollList) return;
        const triggerRect = this.getBoundingClientRect();
        const parentRect = this._parentScrollList.getBoundingClientRect();
        const isRTL = HELPER_UTIL.isRTL();
        const DROPDOWN_WIDTH = 215;

        // RTL prefers right-anchored (opens leftward) when there's enough space on the left.
        // LTR prefers left-anchored (opens rightward) when there's enough space on the right.
        const useRightStyle = isRTL
            ? parentRect.left >= DROPDOWN_WIDTH
            : window.innerWidth - parentRect.right < DROPDOWN_WIDTH;

        this.dropdownEl.style.position = 'fixed';
        this.dropdownEl.style.zIndex = '1000';
        this.dropdownEl.style.top = triggerRect.top + 'px';

        if (useRightStyle) {
            this.dropdownEl.style.right = (window.innerWidth - parentRect.left) + 'px';
            this.dropdownEl.style.removeProperty('left');
        } else {
            this.dropdownEl.style.left = parentRect.right + 'px';
            this.dropdownEl.style.removeProperty('right');
        }
    }

    async _animateDropDown() {
        const megaMenu = this.querySelector(".mega-menu-container");
        const menuList = this.querySelector("[menu-list]");

        if (megaMenu) {
            const sequence = [
                [
                    megaMenu, {
                        visibility: ["hidden", "visible"],
                        y: ["-105%", "0"]
                    }, {
                        duration: 0.4,
                        ease: "ease-in-out"
                    }
                ], [
                    this.querySelectorAll("[animate-mage-menu-item]"),
                    {
                        opacity: [0, 1],
                        x: [HELPER_UTIL.isRTL() ? "-2rem" : "2rem", "0"]
                    },
                    {
                        delay: Motion.stagger(0.01),
                        duration: 0.3,
                        ease: "ease-in-out",
                        at: "+0.05"
                    }
                ], [
                    this.querySelectorAll("[animate-bundle-image]"),
                    {
                        opacity: [0, 1],
                        x: [HELPER_UTIL.isRTL() ? "-2rem" : "2rem", "0"]
                    }, {
                        delay: Motion.stagger(0.1),
                        duration: 0.3,
                        ease: ["cubic-bezier(.19,1,.22,1)", "ease"],
                        at: "<"
                    }
                ], [
                    this.querySelectorAll("[animate-fade-zoom] > div"),
                    {
                        opacity: [0, 1],
                        scale: [0.7, 1]
                    }, {
                        delay: 0,
                        duration: 0.3,
                        ease: ["cubic-bezier(.19,1,.22,1)"],
                        at: "<"
                    }
                ], [
                    this.querySelectorAll("[animate-fade-in]"),
                    {
                        opacity: [0, 1]
                    }, {
                        delay: 0.3,
                        duration: 0.3,
                        ease: ["cubic-bezier(.19,1,.22,1)"],
                        at: "<"
                    }
                ]
            ]
            await Motion.animate(sequence)

        } else if (menuList) {
            const sequence = [
                [
                    menuList, {
                        y: ["-20px", "0"],
                        visibility: ["hidden", "visible"],
                        opacity: [0, 1]
                    }, {
                        duration: 0.3,
                        ease: "ease-in-out"
                    }
                ], [
                    this.querySelectorAll("[animate-dropdown-item]"),
                    {
                        opacity: [0, 1],
                        x: [HELPER_UTIL.isRTL() ? -20 : 20, 0]
                    },
                    {
                        delay: Motion.stagger(0.01),
                        duration: 0.2,
                        ease: "ease-in-out",
                        at: "+0.01"
                    }
                ]
            ]
            await Motion.animate(sequence)
        }
    }

    _hideDropDown() {
        const megaMenu = this.querySelector(".mega-menu-container");
        const menuList = this.querySelector("[menu-list]");

        if (megaMenu) {
            Motion.animate(megaMenu, {
                y: ["0%", "-105%"],
                visibility: ["visible", "hidden"]
            }, {
                duration: 0.4,
                ease: "ease-in-out"
            }).then(() => this._hideDropdownElement())
        } else if (menuList) {
            Motion.animate(menuList, {
                y: ["0%", "-25px"],
                visibility: ["visible", "hidden"],
                opacity: [1, 0]
            }, {
                duration: 0.3,
                ease: "ease-in-out"
            }).then(() => this._hideDropdownElement())
        } else {
            this._hideDropdownElement()
        }
    }
    _hideDropdownElement() {
        this.detailsEl.open = false;
        this.detailsEl.ariaExpanded = false;
        this.isDropDownOpen = false;
        this.dropdownEl.classList.remove('dropdown-active');
        if (this.identifier === 'child-element') {
            this.dropdownEl.style.removeProperty('position');
            this.dropdownEl.style.removeProperty('z-index');
            this.dropdownEl.style.removeProperty('top');
            this.dropdownEl.style.removeProperty('left');
            this.dropdownEl.style.removeProperty('right');
            this._parentScrollList?.removeEventListener('scroll', this._onParentScroll);
        } else if (this.identifier === 'parent-element' && HELPER_UTIL.isRTL()) {
            this.dropdownEl.style.removeProperty('left');
            this.dropdownEl.style.removeProperty('right');
        }
        this.transparentHeader?.classList.remove("fill-header");
    }

    _hideOtherDropdown() {
        switch (this.identifier) {
            case 'child-element':
                let el = this.closest('[data-identefier="parent-element"]');
                let getAllSiblings = el.querySelectorAll(
                    '[data-identefier="child-element"]'
                );
                getAllSiblings.forEach((el) => {
                    if (el !== this) {
                        el._hideDropDown();
                    }
                });
                break;
            case 'parent-element':
                let els = document.querySelectorAll('header-menu-trigger');
                els.forEach((el) => {
                    if (el !== this) {
                        el._hideDropDown();
                    }
                });
                break;
            case 'default':
                break;
        }
    }
}

customElements.get('header-menu-trigger') ||
    customElements.define('header-menu-trigger', HeaderMenuTrigger);

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.getCustomDropDowns = this.querySelectorAll('header-menu-trigger');
        this.getLocalizationDropDown = this.querySelectorAll(
            'localization-component'
        );
        this.searchDrawer = document.querySelector('[drawer-type="search-drawer"]')
        // Both mobile and desktop icon groups render a link + a button, so query all of them
        this.searchPageLinks = this.querySelectorAll("[search_page_link]")
        this.searchDrawerButtons = this.querySelectorAll('[drawer-to-open="search-drawer"]')
        this.transparentHeader = this.hasAttribute("transparent-header")
        this.headerSections = document.querySelectorAll(".shopify-section-group-header-group");
        this.headerSections.forEach((el, index) => {
            if (el.classList.contains('header')) this.index = ++index
        })

        this.hideHeaderOnScroll();

        document.addEventListener('scroll', (e) => {
            this.getCustomDropDowns &&
                this.getCustomDropDowns.forEach((el) => {
                    if (el.isDropDownOpen) {
                        el._hideDropDown();
                    }
                });

            this.getLocalizationDropDown &&
                this.getLocalizationDropDown.forEach((el) => {
                    if (el.isDropDownOpen) {
                        el.hidePanel();
                    }
                });
            if (this.transparentHeader) {
                if (window.scrollY > 50) {
                    this.classList.contains('header-scrolled') ||
                        this.classList.add('header-scrolled')
                } else {
                    this.classList.remove('header-scrolled')
                }
            }
        });

        document.addEventListener('click', (e) => {
            this.getCustomDropDowns.forEach((el) => {
                if (
                    !e.target.closest('[data-identefier="parent-element"]') &&
                    el.isDropDownOpen
                ) {
                    el._hideDropDown();
                }
            });
        });
    }
    connectedCallback() {
        if (this.transparentHeader && this.headerSections.length == this.index) {
            document.querySelector('main').classList.add('transparent-header');
            this.classList.add('loaded-transparent-header');
        } else {
            this.removeAttribute("transparent-header")
        }
        // When the search drawer exists, use the drawer button; otherwise fall back
        // to the link that navigates to the search page
        if (this.searchDrawer) {
            this.searchPageLinks.forEach((el) => el.classList.add("d-none"))
            this.searchDrawerButtons.forEach((el) => el.classList.remove("d-none"))
        } else {
            this.searchPageLinks.forEach((el) => el.classList.remove("d-none"))
            this.searchDrawerButtons.forEach((el) => el.classList.add("d-none"))
        }
    }
    hideHeaderOnScroll() {
        const header = this.querySelector('[hide-on-scroll]');
        let scrollOffest = 111;
        let lastScrollTop = scrollOffest;
        if (header) {
            if (window.scrollY > lastScrollTop) {
                header.closest('header').classList.add('hide-header');
            }
            window.addEventListener('scroll', (e) => {
                let st = window.scrollY;
                if (st > lastScrollTop) {
                    header.closest('header').classList.add('hide-header');
                } else {
                    header
                        .closest('header')
                        .classList.remove('hide-header');
                }
                lastScrollTop = st > scrollOffest ? st : scrollOffest;
            });
        }
    };

}

customElements.get('header-component') ||
    customElements.define('header-component', HeaderComponent);


class MegamenuTabs extends HTMLElement {
    constructor() {
      super();
      this.tabList = this.querySelectorAll('mega-menu-tab');
      // tab-slider attribute flags hamburger grid mode; find the actual slide container
      this.isGridMode = this.hasAttribute('tab-slider');

      if (this.isGridMode) {
        this.addGridTabListeners();
      } else {
        this.carousel = this.closest('[details-dropdown]').querySelector('carousel-component');
        this.slidesPerView = this.carousel.getAttribute("slide-per-view");
        this.arrows = this.carousel.querySelector("[dash-arrows]");
        this.addEventListeners();
      }
    }

    addEventListeners() {
      const _this = this;
      this.tabList.forEach(tab=>{
        tab.addEventListener("click",()=>{
          if(tab.classList.contains('active')) {return}
          _this.carousel.classList.add('opacity-0')
          setTimeout(()=>{
            _this.tabList.forEach(otherTab=>otherTab.classList.remove('active'))
            tab.classList.add('active')
            const parent = tab.dataset.parentLink;
            const activeSlides = _this.carousel.querySelectorAll(`[data-parent-link="${parent}"]`)
            _this.carousel.querySelectorAll(`.swiper-slide[data-parent-link]`).forEach(slide=>{
              slide.classList.remove('swiper-slide')
              slide.classList.add('d-none')
            })
            activeSlides.forEach(slide=>{
              slide.classList.add('swiper-slide')
              slide.classList.remove('d-none')
            })
            if(activeSlides.length > parseInt(_this.slidesPerView)) {
              this.arrows.classList.remove('d-none')
            } else {
              this.arrows.classList.add('d-none')
            }
            _this.carousel.swiperInstance.update();
            _this.carousel.classList.remove('opacity-0')
          },100)
        })
      })
    }

    addGridTabListeners() {
      const slides = this.closest('[details-dropdown]').querySelector('[collection-slides]')
      this.tabList.forEach(tab => {
        tab.addEventListener('click', () => {
          if (tab.classList.contains('active')) return;
          const parent = tab.dataset.parentLink;
          this.tabList.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          slides.querySelectorAll('[data-parent-link]').forEach(slide => {
            slide.classList.remove('active');
          });
          slides.querySelectorAll(`[data-parent-link="${parent}"]`).forEach(slide => {
            slide.classList.add('active');
          });
        });
      });
    }
  }
  customElements.get('mega-menu-tabs') || customElements.define('mega-menu-tabs', MegamenuTabs);

class HamburgerMenu extends HTMLElement {
    constructor() {
        super();
        this._boundMenuItemClick = this._onMenuItemClick.bind(this);
        this._boundBackClick = this._onBackClick.bind(this);
        this._activeIndex = null;
    }

    connectedCallback() {
        this.detailsButton = this.querySelectorAll('[hamberger-menu-item]');
        this.backToMenuButton = this.querySelectorAll('[backToMenu]');

        this.detailsButton.forEach((button) => {
            button.addEventListener('click', this._boundMenuItemClick);
        });

        this.backToMenuButton.forEach((button) => {
            button.addEventListener('click', this._boundBackClick);
        });

        this._restoreActiveSubmenu();
    }

    disconnectedCallback() {
        this.detailsButton && this.detailsButton.forEach((button) => {
            button.removeEventListener('click', this._boundMenuItemClick);
        });

        this.backToMenuButton && this.backToMenuButton.forEach((button) => {
            button.removeEventListener('click', this._boundBackClick);
        });
    }

    _onMenuItemClick(e) {
        const button = e.currentTarget;
        Motion.animate(button.nextElementSibling, {
            opacity: [0, 1],
            visibility: ["hidden", "visible"],
            x: [HELPER_UTIL.isRTL() ? "-100%" : "100%", "0"]
        }, {
            duration: 0.15,
            ease: "ease"
        });
        button.setAttribute('aria-expanded', 'true');

        const li = button.closest('.hamberger-accordion__item');
        if (li) {
            li.classList.add('submenu-active');
            const items = this.querySelectorAll('.hamberger-accordion__item');
            this._activeIndex = Array.prototype.indexOf.call(items, li);
        }
    }

    _onBackClick(e) {
        const panel = e.currentTarget.closest('[hamberger-menu-content]');
        if (!panel) return;
        Motion.animate(panel, {
            visibility: ["visible", "hidden"],
            x: ["0", HELPER_UTIL.isRTL() ? "-100%" : "100%"]
        }, {
            duration: 0.15,
            ease: "ease"
        });
        const triggerBtn = panel.previousElementSibling;
        if (triggerBtn) triggerBtn.setAttribute('aria-expanded', 'false');

        const li = panel.closest('.hamberger-accordion__item');
        if (li) li.classList.remove('submenu-active');

        this._activeIndex = null;
    }

    _restoreActiveSubmenu() {
        if (this._activeIndex === null) return;
        const li = this.querySelectorAll('.hamberger-accordion__item')[this._activeIndex];
        if (!li) {
            this._activeIndex = null;
            return;
        }
        const trigger = li.querySelector('[hamberger-menu-item]');
        const panel = trigger && trigger.nextElementSibling;
        if (!panel) return;

        panel.style.opacity = '1';
        panel.style.visibility = 'visible';
        panel.style.transform = 'translateX(0)';

        trigger.setAttribute('aria-expanded', 'true');
        li.classList.add('submenu-active');
    }
}


customElements.get('hamburger-menu') || customElements.define('hamburger-menu', HamburgerMenu);

class TabsToggle extends HTMLElement {
    constructor() {
        super()

        this.tab_head = this.querySelectorAll("[tab-head]")
        this.tab_body = this.querySelectorAll("[tab-body]")

        if (this.tab_head) {
            [...this.tab_head].forEach(ele => {
                ele.addEventListener("click", this.openTab.bind(this))
            })
        }
    }

    openTab(e) {
        [...this.tab_head].forEach(tabItem => {
            if (tabItem.classList.contains("active")) {
                tabItem.classList.remove("active")

            }
        })
        e.currentTarget.classList.add("active")
        if (this.tab_body) {
            [...this.tab_body].forEach(tabBody => {
                if (tabBody.classList.contains("active")) {
                    tabBody.classList.remove("active")

                }
            })
        }

        this.querySelector(`#${(e.currentTarget.dataset.id).trim()}`).classList.add("active")
        this._animationElement = this.querySelector(`#${(e.currentTarget.dataset.id).trim()} animation-reveal`)
        this._animationElement && this._animationElement.animateImageTxt(this._animationElement)

        // Update View All link for featured-collection sections
        const featuredCollection = this.closest('[featured-collection]');
        if (featuredCollection) {
            const url = e.currentTarget.dataset.viewallUrl || '';
            featuredCollection.querySelectorAll('[viewall-link]').forEach(link => {
                link.href = url;
                link.classList.toggle('d-none', !url);
            });
        }
    }
    connectedCallback() {
        console.log("tabs embed")

        if (window.Shopify && Shopify.designMode) this.initDesignMode()
    }

    /* Theme editor — show the tab belonging to the block being edited.
       A block that renders a tab hangs its shopify_attributes on the [tab-body] panel, and
       inactive panels are hidden, so selecting one in the sidebar would otherwise leave the
       merchant editing content the preview never displays. Clicking the matching head reuses
       openTab, keeping the animation replay and every other side effect it carries. */
    initDesignMode() {
        // connectedCallback runs again whenever the element is moved in the DOM
        if (this._editorBound) return
        this._editorBound = true

        document.addEventListener('shopify:block:select', (e) => {
            const panel = e.target.closest("[tab-body]")

            // Panels of other <tabs-toggle> instances are none of this one's business
            if (!panel || !this.contains(panel)) return

            const head = [...this.tab_head].find(
                (tabItem) => (tabItem.dataset.id || "").trim() === panel.id
            )

            head && !head.classList.contains("active") && head.click()
        })
    }
}

customElements.get('tabs-toggle') || customElements.define("tabs-toggle", TabsToggle)

//# sourceMappingURL=tabs.js.map


class BottomSheet extends HTMLElement {
    constructor() {
        super();
        this.bottomSheetId = this.getAttribute('bottom-sheet-id');
        this.clonePropsFrom = this.getAttribute('clone-props-from');
        this.focusableElements = [];
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;
        this.previouslyFocusedElement = null;
        this.pendingMutationRefresh = null;

        // Create stable bound handler references
        this.onBottomSheetEvent = this.handleBottomSheetEvent.bind(this);
        this.onFocusTrap = this.handleFocusTrap.bind(this);
        this.onOutsideClick = this.handleOutsideClick.bind(this);
        this.onEscapeKey = this.handleEscapeKey.bind(this);
        this.onGlobalFocus = this.handleGlobalFocus.bind(this);
        this.onContentMutations = this.handleContentMutations.bind(this);
        this.onResize = () => {
            this.assignPropertiesToBottomSheet = this.propertiesOfreferenceContainer;
        };
        this.mutationObserver = new MutationObserver(this.onContentMutations);
    }

    connectedCallback() {
        document.addEventListener(
            _EVENT_HELPER.fireBottomSheetEvent,
            this.onBottomSheetEvent
        );

        window.addEventListener(
            'resize', this.onResize
        );
    }

    handleBottomSheetEvent(e) {
        const { whichBottomSheet, actionType, targetSheet } = e.detail;

        if (this.bottomSheetId !== whichBottomSheet) return;
        if (targetSheet && targetSheet !== this) return;

        switch (actionType) {
            case 'show':
                this.showBottomSheet();
                break;
            case 'hide':
                this.hideBottomSheet();
                break;
            default:
                console.warn(
                    `Unknown action type: ${actionType} for bottom sheet with ID: ${this.bottomSheetId}`
                );
        }
    }

    get propertiesOfreferenceContainer() {
        return document.querySelector(
            `[bottom-sheet-clone-id=${this.clonePropsFrom}]`
        )?.getBoundingClientRect();
    }

    set assignPropertiesToBottomSheet(value) {
        if (value) {
            this.style.setProperty('--bottom-sheet-width', `${value.width}px`);
            this.style.setProperty('--bottom-sheet-height', `${value.height}px`);
        }
    }

    /**
     * Get all focusable elements within the bottom sheet
     */
    getFocusableElements() {
        const focusableSelectors = [
            'button:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            'a[href]',
            'area[href]',
            '[tabindex]:not([tabindex="-1"])',
            '[contenteditable="true"]'
        ].join(', ');

        const elements = Array.from(this.querySelectorAll(focusableSelectors))
            .filter(element => {
                // offsetParent is null for elements inside a display:none ancestor
                if (element.offsetParent === null) return false;
                const style = window.getComputedStyle(element);
                return style.visibility !== 'hidden';
            });

        return elements;
    }

    /**
     * Set up focus trap
     */
    setupFocusTrap() {
        this.focusableElements = this.getFocusableElements();

        if (this.focusableElements.length === 0) {
            console.warn('No focusable elements found in bottom sheet');
            return;
        }

        this.firstFocusableElement = this.focusableElements[0];
        this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];

        // Store the previously focused element
        this.previouslyFocusedElement = document.activeElement;

        // Set ARIA attributes for accessibility
        this.setAttribute('aria-hidden', 'false');
        this.setAttribute('role', 'dialog');
        this.setAttribute('aria-modal', 'true');

        // Try to focus on input element first
        const inputElement = this.querySelector('input:not([disabled]), select:not([disabled]), textarea:not([disabled])');

        if (inputElement) {
            inputElement.focus();
        } else {
            this.firstFocusableElement.focus();
        }

        // Add keyboard event listener for focus trap
        this.addEventListener('keydown', this.onFocusTrap);

        // Add click outside to close functionality
        this.addEventListener('click', this.onOutsideClick);
        if (this.hasAttribute('outside-click-close')) {
            document.addEventListener('click', this.onOutsideClick);
        }

        // Also add a global focus listener to catch focus that escapes
        document.addEventListener('focusin', this.onGlobalFocus);
    }

    /**
     * Handle global focus events to catch focus that escapes
     */
    handleGlobalFocus(e) {
        // Only handle if this bottom sheet is active
        if (!this.classList.contains('active')) return;

        // If focus is outside this bottom sheet, redirect it back
        if (!this.contains(e.target)) {
            e.preventDefault();
            this.firstFocusableElement.focus();
        }
    }

    /**
     * Handle focus trap keyboard navigation
     */
    handleFocusTrap(e) {
        if (e.key !== 'Tab') return;

        // Always prevent default tab behavior when this bottom sheet is active
        e.preventDefault();
        e.stopPropagation();

        // Check if the current active element is within this bottom sheet
        const isWithinBottomSheet = this.contains(document.activeElement);

        if (!isWithinBottomSheet) {
            this.firstFocusableElement.focus();
            return;
        }

        if (e.shiftKey) {
            // Shift + Tab: move backwards
            if (document.activeElement === this.firstFocusableElement) {
                this.lastFocusableElement.focus();
            } else {
                // Find the previous focusable element
                const currentIndex = this.focusableElements.indexOf(document.activeElement);
                if (currentIndex > 0) {
                    this.focusableElements[currentIndex - 1].focus();
                }
            }
        } else {
            // Tab: move forwards
            if (document.activeElement === this.lastFocusableElement) {
                this.firstFocusableElement.focus();
            } else {
                // Find the next focusable element
                const currentIndex = this.focusableElements.indexOf(document.activeElement);
                if (currentIndex < this.focusableElements.length - 1) {
                    this.focusableElements[currentIndex + 1].focus();
                }
            }
        }
    }

    /**
     * Handle click outside to close bottom sheet.
     * Only acts when the element has the outside-click-close attribute.
     */
    handleOutsideClick(e) {
        if (!this.hasAttribute('outside-click-close')) return;
        if (!this.classList.contains('active')) return;
        if (!this.contains(e.target)) {
            this.hideBottomSheet();
        }
    }

    /**
     * Remove focus trap
     */
    removeFocusTrap() {
        this.removeEventListener('keydown', this.onFocusTrap);
        this.removeEventListener('click', this.onOutsideClick);
        document.removeEventListener('click', this.onOutsideClick);

        // Remove global focus listener
        document.removeEventListener('focusin', this.onGlobalFocus);
        this.stopMutationObserver();

        // Reset ARIA attributes
        this.setAttribute('aria-hidden', 'true');
        this.removeAttribute('role');
        this.removeAttribute('aria-modal');

        // Restore focus to previously focused element
        if (this.previouslyFocusedElement && this.previouslyFocusedElement.focus) {
            this.previouslyFocusedElement.focus();
        }

        // Clear references
        this.focusableElements = [];
        this.firstFocusableElement = null;
        this.lastFocusableElement = null;
        this.previouslyFocusedElement = null;
    }

    /**
     * Handle Escape key to close bottom sheet
     */
    handleEscapeKey(e) {
        if (e.key === 'Escape') {
            this.hideBottomSheet();
        }
    }

    /**
     * Clean up event listeners when component is disconnected
     */
    disconnectedCallback() {
        this.removeFocusTrap();
        document.removeEventListener('keydown', this.onEscapeKey);
        document.removeEventListener('click', this.onOutsideClick);
        document.removeEventListener(_EVENT_HELPER.fireBottomSheetEvent, this.onBottomSheetEvent);
        window.removeEventListener('resize', this.onResize);
    }

    /**
     * Enhanced show method with escape key handling and focus trap
     */
    showBottomSheet() {
        // Clear stored element so removeFocusTrap doesn't restore focus (which would scroll the snap slider back)
        this.previouslyFocusedElement = null;
        // First, remove any existing focus trap to prevent conflicts
        this.removeFocusTrap();

        this.assignPropertiesToBottomSheet =
            this.propertiesOfreferenceContainer;
        this.classList.add('active');

        // Add escape key listener
        document.addEventListener('keydown', this.onEscapeKey);

        // Delay by one tick so the triggering click doesn't immediately close the sheet
        setTimeout(() => {
            document.addEventListener('click', this.onOutsideClick);
        }, 0);

        this.startMutationObserver();

        // Set up focus trap after the bottom sheet is shown
        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
            // Add a small delay to ensure all elements are properly rendered
            setTimeout(() => {
                if (!this.classList.contains('active')) return;
                this.setupFocusTrap();
            }, 100);
        });
    }

    /**
     * Enhanced hide method with cleanup
     */
    hideBottomSheet() {
        // Remove escape key listener
        document.removeEventListener('keydown', this.onEscapeKey);
        document.removeEventListener('click', this.onOutsideClick);

        // Remove focus trap before hiding
        this.removeFocusTrap();
        this.classList.remove('active');
        setTimeout(() => {
            this.closest('[drawer-type="cart-drawer"]')?.querySelector('[bottom-sheet-overlay]')?.classList.remove('active');
            if (this._portalOrigin?.isConnected) {
                this._portalOrigin.appendChild(this);
                this._portalOrigin = null;
            }
        }, 300);
    }

    /**
     * Refresh focusable elements (useful when content changes dynamically)
     */
    refreshFocusTrap() {
        if (this.classList.contains('active')) {
            const currentFocus = document.activeElement;
            this.removeFocusTrap();
            this.setupFocusTrap();
            this.startMutationObserver();
            // Restore focus to the previously active element if still within the bottom sheet
            if (currentFocus && this.contains(currentFocus) && currentFocus.offsetParent !== null) {
                currentFocus.focus();
            }
        }
    }

    startMutationObserver() {
        if (!this.mutationObserver) return;
        this.mutationObserver.observe(this, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'hidden', 'disabled'],
        });
    }

    stopMutationObserver() {
        this.mutationObserver?.disconnect();
    }

    handleContentMutations() {
        // Debounce multiple rapid mutations with rAF
        if (this.pendingMutationRefresh) cancelAnimationFrame(this.pendingMutationRefresh);
        this.pendingMutationRefresh = requestAnimationFrame(() => {
            this.refreshFocusTrap();
            this.pendingMutationRefresh = null;
        });
    }

    /**
     * Public method to manually trigger focus trap refresh
     */
    updateFocusTrap() {
        this.refreshFocusTrap();
    }

}
window.customElements.get('bottom-sheet') || window.customElements.define('bottom-sheet', BottomSheet);

class BottomSheetTriggerButton extends HTMLButtonElement {
    constructor() {
        super();
        this.onTriggerClick = this.handleBottomSheetButtonClick.bind(this);
    }
    
    connectedCallback() {
        this.getWhichBottomSheetToShow = this.getAttribute('target-bottom-sheet');
        this.getSheetActionType = this.getAttribute('action-type');
        this.addEventListener(
            'click',
            this.onTriggerClick
        );
    }

    handleBottomSheetButtonClick() {
        if (!this.getSheetActionType) throw new Error('Action type is not defined for bottom sheet trigger button. Shoud be "show" or "hide".');
        HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.fireBottomSheetEvent,
            this,
            {
                whichBottomSheet: this.getWhichBottomSheetToShow,
                actionType: this.getSheetActionType,
            }
        );
    }

    disconnectedCallback() {
        this.removeEventListener(
            'click',
            this.onTriggerClick
        );
    }
}

if (!window.customElements.get('bottom-sheet-trigger')) {
    window.customElements.define(
        'bottom-sheet-trigger',
        BottomSheetTriggerButton,
        {
            extends: 'button',
        }
    );
}
class PopupComponent extends HTMLElement {
    constructor() {
        super();
        this.closePopup = this.querySelectorAll('[popup-close]');
        this.popupType = this.getAttribute('popup-type');
        this.popupOverlay = this.querySelector('[popup-overlay]');
        this.targetUrl = null;
        this.isPopupOpen = false;
        document.addEventListener(
            _EVENT_HELPER.showPopup,
            this.showPopup.bind(this)
        );
        document.addEventListener(
            _EVENT_HELPER.hidePopup,
            this.hidePopup.bind(this)
        );

        if (this.closePopup) {
            [...this.closePopup].forEach((closeButton) => {
                closeButton.addEventListener('click', (e) => {
                    HELPER_UTIL.dispatchCustomEvent(
                        _EVENT_HELPER.hidePopup,
                        this,
                        {
                            popupType: this.popupType,
                        }
                    );
                });
            });
        }

        this.popupOverlay?.addEventListener('click', (e) => {
            if (!e.target.hasAttribute('popup-overlay')) return;
            HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.hidePopup, this, {
                popupType: this.popupType,
            });
        });
        document.addEventListener(
            'keyup',
            (e) => e.code === 'Escape' && this.hidePopup(e)
        );
    }

    getFocusableElements() {
        let appendAriaEl = this;
        if (this.drawerType === 'address-form') {
            appendAriaEl = this.querySelector('[aria-hidden=false]');
        }
        let els = appendAriaEl.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), input[type="search"]:not([disabled]), select:not([disabled])'
        );
        return els;
    }

    activateTrapFocus(e) {
        try {
            this.trapFocus();
        } catch (error) {
            console.log(error);
        }
    }

    deActivateTrapFocus() {
        try {
            setTimeout(() => {
                window.currentActiveElement &&
                    window.currentActiveElement.focus();
                this.elementThatTriggeredDrawer = null;
            }, 100);
        } catch (e) {
            console.log(e);
        }
    }

    trapFocus() {
        this.focusableEls = this.getFocusableElements();
        // console.log(focusableEls);
        // return;
        let firstFocusableEl = this.focusableEls[0];
        let lastFocusableEl = this.focusableEls[this.focusableEls.length - 1];
        let KEYCODE_TAB = 9;

        // Focus First element
        setTimeout(() => {
            firstFocusableEl.focus();
        }, 100);

        this.addEventListener('keydown', function (e) {
            let isTabPressed = e.key === 'Tab' || e.keyCode === KEYCODE_TAB;

            if (!isTabPressed) {
                return;
            }

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
        });
    }

    /* Close any other popup if open before opening target popup  */
    closeAnyPreviousActivePopup(currentActiveDrawer) {
        const drawerComponent = document.querySelectorAll('popup-component');
        drawerComponent.forEach((drawer) => {
            if (
                drawer.isDrawerOpen &&
                drawer.drawerType != currentActiveDrawer
            ) {
                HELPER_UTIL.dispatchCustomEvent(
                    _EVENT_HELPER.hidePopup,
                    document,
                    {
                        drawerType: drawer.drawerType,
                    }
                );
            }
        });
    }

    //Show popup
    showPopup(e) {
        if (this.popupType != e.detail.popupType)
            return new Error('Valid popup-type attribute value should be set');
        this.closeAnyPreviousActivePopup(e.detail.popupType);
        this.isPopupOpen = true;
        this.ariaExpanded = true;
        HELPER_UTIL.bodyInteractions.disableScroll();
        this.classList.add('popup-active');
        this.activateTrapFocus(e);
    }

    //Hide popup
    hidePopup() {
        if (!this.isPopupOpen) return;
        this.classList.remove('popup-active');
        this.isPopupOpen = true;
        this.ariaExpanded = true;
        HELPER_UTIL.bodyInteractions.enableScroll();
        this.deActivateTrapFocus();
    }
}

customElements.get('popup-component') ||
    customElements.define('popup-component', PopupComponent);

class CustomButtonToOpenDrawers extends HTMLButtonElement {
    constructor() {
        super();
        this.getDrawerToOpen = this.getAttribute('drawer-to-open');
        this.getPortalElementId = this.getAttribute('target-portal-element') || null;
        this.sectionId = this.getAttribute('section-id') || null;

        this.addEventListener('click', this.openDrawer.bind(this));

    }

    openDrawer() {
        if (!this.getDrawerToOpen) return;
        window.currentActiveElement = document.activeElement;
        HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.showDrawer, this, {
            drawerType: this.getDrawerToOpen,
            portalDrawerTo: this.getPortalElementId,
            portalBackSectionId: this.sectionId,
        });
        this.setAttribute("aria-expanded","true")
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.openDrawer.bind(this));
    }
}

customElements.define('open-drawer', CustomButtonToOpenDrawers, {
    extends: 'button',
});

class CustomButtonToCloseDrawers extends HTMLButtonElement {
    constructor(){
        super();
        this.getDrawerToClose = this.getAttribute("drawer-to-close");
        this.addEventListener("click", this.closeDrawer.bind(this));
    }

    closeDrawer(){
        if (!this.getDrawerToClose) return;

        HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.hideDrawer,
            this,
            {
                drawerType: this.getDrawerToClose,
            }
        );
    }
}

customElements.define("close-drawer", CustomButtonToCloseDrawers, {
  extends: "button",
});

var ShareButton = class extends HTMLButtonElement {
    constructor() {
        super();
        if (navigator.share) {
            this.addEventListener('click', this._showSystemShare);
        }
    }
    _showSystemShare() {
        navigator.share({
            title: this.hasAttribute('share-title')
                ? this.getAttribute('share-title')
                : document.title,
            url: this.hasAttribute('share-url')
                ? this.getAttribute('share-url')
                : window.location.href,
        });
    }
};
if (!window.customElements.get('share-button')) {
    window.customElements.define('share-button', ShareButton, {
        extends: 'button',
    });
}

class CopyLink extends HTMLButtonElement {
    constructor() {
        super();
        this.addEventListener('click', this.copyUrl.bind(this));
    }

    copyUrl() {
        navigator.clipboard.writeText(window.location.href);
        this.classList.add('text--copying--success');
        setTimeout(() => {
            this.classList.remove('text--copying--success');
        }, 1000);
    }
}

if (!window.customElements.get('copy-link')) {
    window.customElements.define('copy-link', CopyLink, {
        extends: 'button',
    });
}

/*
 Requried Params to show custom message component

  messageData : {obj}
    1) errorMessage : Actual Message to show
    2) messageType : Type of message : Error / Success
*/

class CustomMessage extends HTMLElement {
    constructor() {
        super();

        this.closeEl = this.querySelector('[close-btn]');
        this.closeEl.addEventListener(
            'click',
            this.hideCustomMessage.bind(this)
        );
    }

    showCustomMessage(messageData) {
        const { errorMessage, messageType } = messageData;
        if (!errorMessage || !messageType)
            throw new Error('errorMessage or messageType should be defined');
        this.classList.add(messageType);
        this.querySelector('[message-text]').innerHTML = errorMessage;
        this.classList.remove('d-none');
        this.classList.add('d-block');
    }

    hideCustomMessage() {
        this.classList.add('d-none');
        this.classList.remove('d-block');
    }

    disconnetedCallback(e) {
        this.closeEl.removeEventListener(
            'click',
            this.hideCustomMessage.bind(this)
        );
    }
}

customElements.get('custom-message') ||
    customElements.define('custom-message', CustomMessage);

/* 
Show more UI will render some default number of elements based on attribute value we set for `show-number-of-element`,

*/

class ShowMoreUI extends HTMLElement {
    constructor() {
        super();
        this.button = this.querySelector('[show-more-button]');
        this.button.addEventListener(
            'click',
            this.renderHiddenElements.bind(this)
        );
        this.elementsHavingHiddenAttribute = 'elements--hidden';
        this.howManyElementsToShow = Number(
            this.getAttribute('show-number-of-element')
        );
        this.elementsContent = this.querySelector('template').content;
        this.appendElementsTo = this.querySelector('[append-elements]');
    }

    renderElements() {
        const newList = Array.from(
            this.elementsContent.children,
            (item, index) => {
                const currentPosition = index + 1;
                if (currentPosition > this.howManyElementsToShow) {
                    item.setAttribute(this.elementsHavingHiddenAttribute, '');
                }
                return item;
            }
        );

        if (newList.length > this.howManyElementsToShow) {
            this.button.removeAttribute(this.elementsHavingHiddenAttribute);
        }
        this.appendElementsTo.append(...newList);
    }

    renderHiddenElements() {
        this.querySelectorAll(
            `[${this.elementsHavingHiddenAttribute}]`
        ).forEach((el) =>
            el.removeAttribute(this.elementsHavingHiddenAttribute)
        );
        this.button.setAttribute(this.elementsHavingHiddenAttribute, '');
    }

    connectedCallback() {
        this.renderElements();
    }
}

customElements.get('show-more-ui') ||
    customElements.define('show-more-ui', ShowMoreUI);

class HeightCalculator extends HTMLElement {
    constructor() {
        super();
        if (window.ResizeObserver) {
            new ResizeObserver(this._updateCustomProperties.bind(this)).observe(
                this
            );
        }
    }
    connectedCallback() {
        if (!window.ResizeObserver) {
            document.documentElement.style.setProperty(
                `--${this.getAttribute('variable')}-height`,
                `${this.clientHeight}px`
            );
        }
    }
    _updateCustomProperties(entries) {
        requestAnimationFrame(() => {
            entries.forEach((entry) => {
                if (entry.target === this) {
                    const height = entry.borderBoxSize
                        ? entry.borderBoxSize.length > 0
                            ? entry.borderBoxSize[0].blockSize
                            : entry.borderBoxSize.blockSize
                        : entry.target.clientHeight;
                    document.documentElement.style.setProperty(
                        `--${this.getAttribute('variable')}-height`,
                        `${Math.floor(height)}px`
                    );
                }
            });
        });
    }
}

customElements.get('height-calc') ||
    customElements.define('height-calc', HeightCalculator);

class TruncateText extends HTMLElement {
    constructor() {
        super();
        this.height = this.dataset.height;
        this.textContainer = this.querySelector("[text-container]")
        this.readMoreButton = this.querySelector("[read-more-button]")
        this.readLessButton = this.querySelector("[read-less-button]")
        this.readBtnContainer = this.querySelector("[read-button-container]")
        window.addEventListener("resize", this.init.bind(this))

    }

    connectedCallback() {
        this.init()
    }

    init() {
        if (this.height < this.textContainer.scrollHeight && !this.textContainer.classList.contains("is-open")) {
            this.readBtnContainer.classList.remove("d-none");
            this.textContainer.classList.add("active")
            this.readMoreButton.addEventListener("click", this.readMoreContent.bind(this));
            this.readLessButton.addEventListener("click", this.readLessContent.bind(this));

        }
    }

    readMoreContent(e) {
        e.preventDefault();
        if (this.textContainer.classList.contains("active")) {
            this.textContainer.style.maxHeight = `${this.textContainer.scrollHeight}px`
            setTimeout(() => {
                this.textContainer.style.maxHeight = "inherit"

            }, 200)
            this.readLessButton.classList.remove("visually-hidden")
            this.readMoreButton.classList.add("visually-hidden")
            this.textContainer.classList.remove("active");
            this.textContainer.classList.add("is-open");
        }
    }
    readLessContent(e) {
        e.preventDefault();
        if (!this.textContainer.classList.contains("active")) {
            this.textContainer.style.maxHeight = `${this.textContainer.scrollHeight}px`
            setTimeout(() => {
                this.textContainer.style.maxHeight = "var(--truncate-height)"
            }, 100)
            this.readLessButton.classList.add("visually-hidden")
            this.readMoreButton.classList.remove("visually-hidden")
            this.textContainer.classList.add("active");
            this.textContainer.classList.remove("is-open");
        }
    }

    disconnectedCallback() {
        this.readMoreButton.removeEventListener("click", this.readMoreContent.bind(this));
        this.readLessButton.removeEventListener("click", this.readLessContent.bind(this));
    }

}
customElements.get('truncate-text') ||
    customElements.define('truncate-text', TruncateText);
class CopyText extends HTMLElement {
    constructor() {
        super();
        this.copyValue = this.getAttribute('copy-value') || /\{([^}]+)\}/g;
        this.popupText = this.getAttribute('popup-message') || 'Copied to clipboard!';
        this.popupTimer = null;
        this._onClick = this.copyOnClick.bind(this)
    }

    connectedCallback() {
        this.popup = document.querySelector('[copy-toast]');
        this.addEventListener('click', this._onClick);

        this._onToggleDrawer = (e) => {
            if (e.detail?.drawerType !== 'cart-drawer') return;
            const tabindex = e.type === _EVENT_HELPER.showDrawer ? '0' : '-1';
            this.querySelectorAll('.copy-icon').forEach(btn => btn.setAttribute('tabindex', tabindex));
        };
        document.addEventListener(_EVENT_HELPER.showDrawer, this._onToggleDrawer);
        document.addEventListener(_EVENT_HELPER.hideDrawer, this._onToggleDrawer);
    }

    copyOnClick(e) {
        const target = e.target.nodeType === Node.ELEMENT_NODE ? e.target : e.target.parentElement;
        if (!target) return;
        if (target.tagName === 'A' || target.closest('a')) {
            return;
        }
        const wrapper = target.closest('.code-wrapper');
        if (!wrapper) return;
        e.preventDefault();
        e.stopPropagation();
        const value = (wrapper.querySelector('.copy-target')?.textContent || wrapper.dataset.value || '').trim();
        if (!value) return;

        this._copyToClipboard(value);
    }

    _copyToClipboard(value) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(value)
                .then(() => this.showPopup())
                .catch(() => this._fallbackCopy(value));
        } else {
            this._fallbackCopy(value);
        }
    }

    _fallbackCopy(value) {
        var textArea = document.createElement('textarea');
        textArea.value = value;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            this.showPopup();
        } catch (e) { /* silently fail */ }
        document.body.removeChild(textArea);
    }

    showPopup() {
        if (!this.popup) return;
        var content = this.popup.querySelector('[copy-toast-text]');
        if (!content) return;
        content.textContent = this.popupText;
        this.popup.classList.add('popup-active');

        clearTimeout(this.popupTimer);
        this.popupTimer = setTimeout(() => {
            this.popup.classList.remove('popup-active');
        }, 2000);
    }
    disconnectedCallback() {
        this.removeEventListener('click', this._onClick);
        document.removeEventListener(_EVENT_HELPER.showDrawer, this._onToggleDrawer);
        document.removeEventListener(_EVENT_HELPER.hideDrawer, this._onToggleDrawer);
    }
}

customElements.get('copy-text') ||
    customElements.define('copy-text', CopyText);
class MediaCards extends HTMLElement {
    constructor() {
        super();
        this.currentVideoPlayer = null;
        this.handleVideoPlaying = this.handleVideoPlaying.bind(this);
        this.addEventListener('video_playing', this.handleVideoPlaying);
    }
    handleVideoPlaying(e) {
        const newVideoPlayer = e.target;
        if (newVideoPlayer.hasAttribute('media-autoplay')) return;
        if (!this.currentVideoPlayer) {
            this.currentVideoPlayer = newVideoPlayer;
        }
        if (this.currentVideoPlayer && this.currentVideoPlayer != newVideoPlayer) {
            this.currentVideoPlayer._pause();

            this.currentVideoPlayer = newVideoPlayer;
        }
    }
    disconnectedCallback() {
        this.removeEventListener('video_playing', this.handleVideoPlaying);
    }
}

customElements.get("media-cards") || customElements.define("media-cards", MediaCards)

class MediaPlayer extends defaultVideoPlayer {
    constructor() {
        super();
        this.video = this.querySelector('[playsinline]');
        this.playing = this._playing.bind(this);
        if (this.video) {
            this.video.addEventListener('playing', this.playing);
        }
    }

    _play() {

        super._play();
        this.setAttribute('video-playing', true);
    }

    _pause() {
        super._pause();
        this.setAttribute('video-playing', false);
        this.classList.remove('video-is-loading');
    }
    _playing() {
        HELPER_UTIL.dispatchCustomEvent('video_playing', this);
        this.setAttribute('video-playing', true);
    }
    disconnectedCallback() {
        if (this.video) {
            this.video.removeEventListener('playing', this.playing);
        }
    }
}

customElements.get('media-player') ||
    customElements.define('media-player', MediaPlayer);

class MainAndThumbnailSlider extends CarouselComponent {
    constructor() {
        super();

        this.contentSlider = this.querySelector('[content-slider]');
        this.slideItem = this.contentSlider.querySelectorAll('[slide-on-click] .swiper-slide');
        this.slideItem && this.slideItem.forEach((slideElement) => {
            slideElement.addEventListener("keyup", (e) => {
                if (e.key === 'Enter') {
                    this.handleSlideClick()
                }
            });
        });
        this.slideItemHover = this.contentSlider.querySelectorAll('[slide-on-hover] .swiper-slide');
        this.slideItemHover && this.slideItemHover.forEach((slideElement) => {
            slideElement.addEventListener("mouseenter",
                HELPER_UTIL.debounce((event) => {
                    this.handleSlideHover(event)
                }, 600)
            );
        });
        this.didCarouselInitiate = false;
        this._accordionItem = this.querySelectorAll('[accordionTab]');
        this.addEventListener(_EVENT_HELPER.accordionOpen, this.handleAccordionClickOpen.bind(this));
        this.addEventListener(_EVENT_HELPER.accordionClose, this.handleAccordionClickClose.bind(this))
        this.intersectionElement = this.hasAttribute('intersection-element');

    }

    handleSlideHover(e) {
        let slideIndex = parseInt(e.target.getAttribute("data-slide-index"));
        this.mainSliderElement.swiper.slideTo(slideIndex);
    }

    handleAccordionClickOpen(e) {
        if (this.sliderAutoplay == 'true') {
            this.thumbNailSliderElement.querySelectorAll("details[open]").length > 0
            this.mainSliderElement.swiper?.autoplay.stop();
        }

    }

    handleAccordionClickClose(e) {
        if (this.sliderAutoplay == 'true') {
            this.thumbNailSliderElement.querySelectorAll("details[open]").length == 0 && this.mainSliderElement.swiper?.autoplay.start();
            this.mainSliderElement.swiper?.autoplay.start();
        }

    }

    connectedCallback() {
        super.connectedCallback();
        if (Shopify.designMode) {
            const getParentElement = (el, elToGet) => {
                return el.closest(elToGet);
            };
            document.addEventListener('shopify:block:select', (e) => {
                if (
                    !!getParentElement(e.target, 'main-and-thumbnail-slider')
                ) {
                    const carouselApiInstance = getParentElement(
                        e.target,
                        'main-and-thumbnail-slider'
                    ).swiperInstance;
                    const getSlideEl = e.target.classList.contains('swiper-slide')
                        ? e.target
                        : e.target.closest('.swiper-slide');
                    const getSlidesFromInstances = carouselApiInstance.slides;
                    const getSlideIndex = getSlidesFromInstances.indexOf(getSlideEl);
                    carouselApiInstance.slideTo(getSlideIndex);
                }
            });
        }

    }

    handleFunctionalityAfterSlideChange(swiperInstance) {
        if (this.sliderAutoplay != 'true') {
            this.thumbNailSliderElement.swiper.slides.forEach(slide => {
                let openAccordion = slide.querySelector("details[open]")
                openAccordion && slide.querySelector("main-thumb-accordion").inActiveAccordion(openAccordion)
            })
            this.thumbNailSliderElement.swiper.slides[swiperInstance.activeIndex].querySelector("main-thumb-accordion").activeAccordion()

        }
    }
    initThumbnailSlider() {
        this.thumbSwiperInstance = new Swiper(this.thumbNailSliderElement, {
            rtl: HELPER_UTIL.isRTL(),
            ally: true,
            spaceBetween: 20,
            speed: 400,
            slidesPerView: 1,
            watchSlidesProgress: true,
            watchSlidesVisibility: true,
            threshold: 15,
            allowTouchMove: false,
            keyboard: {
                enabled: true,
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                },
            }
        });

    }


}

customElements.get('main-and-thumbnail-slider') ||
    customElements.define('main-and-thumbnail-slider', MainAndThumbnailSlider);

class MainThumbAccordion extends AccordionTab {
    constructor() {
        super()
        this._main_and_thumbnail_slider = this.closest("main-and-thumbnail-slider")
    }

    activeAccordion() {
        super.activeAccordion()
        this._main_and_thumbnail_slider && HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.accordionOpen, this._main_and_thumbnail_slider)
    }

    inActiveAccordion(element) {
        super.inActiveAccordion(element)
        this._main_and_thumbnail_slider && HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.accordionClose, this._main_and_thumbnail_slider)
    }

}

customElements.get('main-thumb-accordion') ||
    customElements.define('main-thumb-accordion', MainThumbAccordion);

class MutationObserverComponent extends HTMLElement {
    constructor() {
        super();
        this.getObserverConfig = JSON.parse(
            this.getAttribute('mutation-config')
        );
    }

    _mutationCallback(mutations) {}

    _convertStringToBoolean(value) {
        return this.getObserverConfig[value] &&
            this.getObserverConfig[value] === 'true'
            ? true
            : false;
    }
    _initMutationObserver() {
        this.observer = new MutationObserver((mutations) => {
            this._mutationCallback(mutations);
        });

        const config = {
            attributes: this._convertStringToBoolean('attributes'),
            childList: this._convertStringToBoolean('childList'),
            subtree: this._convertStringToBoolean('subtree'),
        };

        this.observer.observe(this, config);
    }

    disconnectedCallback() {
        this.observer && this.observer.disconnect();
    }

    connectedCallback() {
        this._initMutationObserver();
    }
}
customElements.get('mutation-observer-component') ||
    customElements.define(
        'mutation-observer-component',
        MutationObserverComponent
    );

class ImageLoading extends HTMLImageElement {
  constructor() {
    super();
    this.afterImageLoaded = this.afterImageLoaded.bind(this);
  }

  connectedCallback() {
    // Swiper loop clones are off-screen visual duplicates — the browser never
    // fetches lazy images inside them, so 'load' never fires. Mark immediately.
    if (this.closest('.swiper-slide-duplicate')) {
      this.afterImageLoaded();
      return;
    }

    this.addEventListener("load", this.afterImageLoaded);

    // Handle cached images (VERY IMPORTANT)
    if (this.complete) {
      this.afterImageLoaded();
    }
  }

  disconnectedCallback() {
    this.removeEventListener("load", this.afterImageLoaded);
  }

  afterImageLoaded() {
    this.closest('[image-container]').classList.add("image-loaded")
    // alert("image loaded");
  }
}

customElements.define("image-loading", ImageLoading, { extends: "img" });

if (!window.customElements.get('before-after')) {
  class BeforeAfterThumb extends HTMLElement {
    constructor() {
      super();
      this.thumbDrag = false;
    }
    connectedCallback() {
      this.thumb = this.querySelector('.beforeAfter__thumb');
      this.percent = parseInt(this.getAttribute('data-thumb-initial'));
      // In RTL, --thumb-position is measured from the right edge, so the drag math is mirrored.
      this.isRTL = document.documentElement.getAttribute('dir') === 'rtl';
      this.addEventListeners();
      this.initObserver();
      this.initCarouselSlideChangeHandler();
    }
    addEventListeners() {
      const onStart = (e) => {
        this.thumbDrag = true;
        document.addEventListener("pointermove", onMove)
        document.addEventListener("pointerup", onEnd)
      }
      const onMove = (e) => {
        if (this.thumbDrag) {
          let tempX = e.clientX;
          const rect = this.getBoundingClientRect();
          // RTL measures the distance from the right edge; LTR from the left edge.
          const offset = this.isRTL ? (rect.right - tempX) : (tempX - rect.left);
          // limit percent between 0 and 100
          this.percent = Math.round(Math.min(Math.max(offset * 100 / rect.width, 0), 100) * 100) / 100;
          this.style.setProperty("--thumb-position", `${this.percent}%`);
        }
      }
      const onEnd = (e) => {
        this.thumbDrag = false;
        document.removeEventListener("pointermove", onMove)
        document.removeEventListener("pointerup", onEnd)
      }

      const onKey = (e) => {
        // In RTL the thumb is anchored from the right, so Arrow keys are inverted
        // to keep the visual movement matching the pressed direction.
        const step = this.isRTL ? -1 : 1;
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          this.percent = Math.min(Math.max(this.percent - step, 0), 100)
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          this.percent = Math.min(Math.max(this.percent + step, 0), 100)
        }
        this.style.setProperty("--thumb-position", `${this.percent}%`);
      }

      this.thumb.addEventListener("pointerdown", onStart)
      this.thumb.addEventListener("focus", () => document.addEventListener("keydown", onKey))
      this.thumb.addEventListener("focusout", () => document.removeEventListener("keydown", onKey))
    }
    initObserver() {
      const observerHandler = (event) => {
        if (this == event.target) {
          this.classList.add('animation-init');
          document.removeEventListener(_EVENT_HELPER.elementIsInCurrentView, observerHandler)
        }
      }
      document.addEventListener(_EVENT_HELPER.elementIsInCurrentView, observerHandler)
    }

    initCarouselSlideChangeHandler() {
      // Find the closest carousel element that manages a Swiper instance
      const carousel = this.closest('carousel-component, product-carousel, carousel-with-tabs, shoppable-carousel-component');
      if (!carousel) return;

      const attach = () => {
        const swiper = carousel.swiperInstance;
        if (!swiper) return;
        // Add class to the current active slide immediately
        const activeSlide = swiper.slides?.[swiper.activeIndex];
        activeSlide && activeSlide.classList.add('animation-init');
        // Listen for slide changes
        swiper.on('slideChange', () => {
          const current = swiper.slides?.[swiper.activeIndex];
          current && current.classList.add('animation-init');
        });
      }

      // If already initialized, attach directly; otherwise wait for initialization
      if (carousel.swiperInstance) {
        attach();
      } else {
        const mo = new MutationObserver(() => {
          if (carousel.classList.contains('carousel-active') && carousel.swiperInstance) {
            mo.disconnect();
            attach();
          }
        });
        mo.observe(carousel, { attributes: true, attributeFilter: ['class'] });
      }
    }
  }
  window.customElements.define('before-after', BeforeAfterThumb);
}
class QuizForm extends HTMLElement {
  constructor() {
    super();
    this.resultsLength = 0;
    this.productResults = [];
    this.formState = '';
    this.loading = false;
    this.productLimit = 10;
  }
  connectedCallback() {
    this.sectionID = this.closest("section").id;
    this.form = this.querySelector('form');
    this.blocks = this.querySelectorAll('[quiz-block]')
    // this.slideNextButtons = this.querySelectorAll('button[quiz-next]');
    this.quizStart = this.querySelector('[quiz-start]');
    this.collectionURL = this.form.action;
    this.resultsPage = this.querySelector('[results-page]')
    this.view = this.resultsPage ? 'quiz' : 'quiz-drawer'
    this.drawer = this.querySelector('drawer-component') || this.resultsPage
    this.drawerID = this.drawer?.getAttribute("drawer-type")
    this.drawerContainer = this.querySelector('[drawer-items-container]') || this.querySelector('[results-items-container]')
    this.loadMore = this.querySelector('[load-more]')
    this.retryBtn = this.querySelectorAll('[quiz-retry]')
    // this.loadMoreBtn = this.querySelector('[load-more] button')
    this.swiperEl = this.querySelector('quiz-carousel-component');
    this.noResults = this.querySelector("[no-results]");
    this.hideEmptyResults = this.querySelectorAll('[hide-empty-results]');
    this.quizStartButton = this.quizStart && this.quizStart.querySelector('button');
    this.initQuizOnload = this.hasAttribute('init-quiz');
    this.addEventListeners();
    this.initDesignMode();
    if (this.initQuizOnload) this.startQuiz();
  }

  addEventListeners() {
    // Start quiz
    this.quizStartButton && this.quizStartButton.addEventListener('click', this.startQuiz.bind(this))
    // Listen to change in form to enable Next slide buttons or form submit button
    this.form.addEventListener('change', this.handleFormChange.bind(this))
    // Slide to next slide
    // this.slideNextButtons.forEach(button => button.addEventListener('click', this.handleButtonClick.bind(this)))
    // Load next set of results on click
    this.loadMoreBtn?.addEventListener('click', this.loadMoreProducts.bind(this))
    // Reset quiz to start from the beginning
    this.retryBtn.forEach(btn => btn.addEventListener('click', this.resetQuiz.bind(this)))

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit(e);
    })
    // listen to drawer close to either reset quiz or just to close drawer
    document.addEventListener(_EVENT_HELPER.hideDrawer, this.handleDrawerClose.bind(this))
    // infinite scroll on load more button
    // this.initObserver();
  }

  handleDrawerClose(e) {
    if (e.detail.drawerType == this.drawerID) {
      this.controller?.abort();
      this.page = this.totalPages;
      this.submitButton?.classList.remove('loadingState')
      if (!(e.detail.source == 'retry')) {
        this.submitButton?.removeAttribute("disabled")
      } else {
        this.submitButton?.setAttribute("disabled", "disabled");
      }
    }
  }

  initObserver() {
    const observerHandler = (event) => {
      if (this.loadMore == event.target) {
        this.loadMoreProducts()
      }
    }
    document.addEventListener(_EVENT_HELPER.elementIsInCurrentView, observerHandler)
  }

  startQuiz() {
    this.classList.add("quiz__start")
    this.querySelectorAll('input').forEach(input => input.removeAttribute("disabled"));
    if (!this.quizStart) return;
    this.quizStart.classList.add('opacity-0')
    setTimeout(() => {
      this.quizStart.classList.add('d-none')
      this.quizStart.classList.remove('opacity-0')
    }, 300);
  }


  resetQuiz() {
    this.swiper = this.querySelector('quiz-carousel-component').swiperInstance;
    if (this.quizStart) {
      this.quizStart.classList.remove('d-none');
      this.classList.remove("quiz__start");
    }
    this.resultsPage && this.form.classList.remove('d-none');
    this.resultsPage?.classList.add('d-none')
    this.querySelectorAll('[quiz-block] button:not([is="open-drawer"])').forEach(button => button.setAttribute("disabled", "disabled"));
    this.submitButton?.classList.remove('loadingState')
    this.loadMoreBtn?.classList.remove('loadingState')
    this.loadMoreBtn?.removeAttribute('disabled', 'disabled')
    this.loadMore?.classList.remove('complete');
    this.form.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    this.form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
    this.swiper.slideTo(0, 0);
    this.noResults.classList.add("d-none")
    this.hideEmptyResults.forEach(element => element.classList.remove('d-none'))
    this.formState = "";
    HELPER_UTIL.dispatchCustomEvent(
      _EVENT_HELPER.hideDrawer,
      this,
      {
        drawerType: this.drawerID,
        source: 'retry'
      }
    );
  }

  handleFormChange(event) {

    HELPER_UTIL.dispatchCustomEvent(
      _EVENT_HELPER.quizFormChange,
      this.swiperEl
    )

  }

  handleFormSubmit(e) {
    this.submitButton = e.target.querySelector('button[type="submit"]')
    const formData = new FormData(this.form);
    let tagsArray = [''];
    formData.forEach((value, key) => {
      if (key !== "oseid") {
        const tags = value.split(",").map(tag => tag.trim())
        tagsArray = [...tagsArray, ...tags]

      }
    });
    tagsArray = [...new Set(tagsArray)];

    const formString = JSON.stringify(tagsArray);
    if (this.formState === formString) {
      HELPER_UTIL.dispatchCustomEvent(
        _EVENT_HELPER.showDrawer,
        this,
        {
          drawerType: this.drawerID
        }
      );
      return;
    }

    this.noResults.classList.add("d-none")
    this.formState = formString;
    this.submitButton?.classList.add('loadingState')
    this.submitButton?.setAttribute("disabled", "disabled");
    this.params = tagsArray.join("&filter.p.tag=");
    this.productResults = [];
    this.resultsLength = 0;
    this.page = 1;
    this.loadMore?.classList.remove('complete')
    this.getProducts();
  }

  loadMoreProducts() {
    if (!this.loading) {
      this.resultsLength = 0;
      this.printNextPage();
    }
  }

  getProducts() {

    this.loadMoreBtn?.classList.add('loadingState')
    this.loadMoreBtn?.setAttribute("disabled", "disabled")
    this.loading = true;
    const url = `${this.collectionURL}?view=${this.view}&page=${this.page}${this.params}`;
    this.controller = new AbortController();
    const signal = this.controller.signal;
    fetch(url, { signal })
      .then(response => response.text())
      .then(html => {
        if (this.page == 1) {
          this.drawerContainer.innerHTML = "";
          window.currentActiveElement = this.submitButton;
          HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.showDrawer,
            this,
            {
              drawerType: this.drawerID
            }
          );
          this.submitButton?.classList.add('loadingState')
          this.submitButton?.setAttribute("disabled", "disabled");
        }
        const dom = new DOMParser().parseFromString(html, 'text/html')
        const productList = dom.getElementById('product_list').children;
        this.totalPages = parseInt(dom.getElementById('pagination').textContent)
        this.productResults = [...this.productResults, ...Array.from(productList)]
        this.printNextPage();
      })
      .catch((error) => {
        if (!error.message.includes("user aborted")) {
          HELPER_UTIL.dispatchCustomEvent(
            _EVENT_HELPER.triggerToastMessage,
            document,
            {
              toastType: 'common-errors',
              messageType: 'error',
              message:
                "Something went wrong. Please try again",
            }
          );
        }
        this.formState = ""
        this.loadMoreBtn?.classList.remove('loadingState')
        this.loadMoreBtn?.removeAttribute("disabled")
        this.submitButton?.classList.remove('loadingState')
        this.submitButton?.removeAttribute("disabled");
        this.loading = false;
      })
  }

  printNextPage() {
    // const toPrint = this.productResults.splice(0, 10 - this.resultsLength);
    // toPrint.forEach(product => this.drawerContainer.appendChild(product))
    this.productResults.forEach(product => this.drawerContainer.appendChild(product))
    this.drawerContainer?.closest("carousel-component")?.swiperInstance?.update();
    this.resultsPage?.querySelectorAll('animation-reveal')?.forEach(element => element.animateImageTxt());

    // this.resultsLength += toPrint.length;
    // if (this.resultsLength < this.productLimit && this.page < this.totalPages) {
    //   this.getProducts(++this.page);
    //   return;
    // } else if (this.page == this.totalPages && this.productResults.length == 0) {
    //   this.loadMore.classList.add('complete')
    //   if (this.drawerContainer.querySelectorAll("product-card").length == 0) {
    //     this.noResults.classList.remove("d-none")
    //     // this.querySelectorAll('[hide-empty-results]').forEach(element => element.classList.add('d-none'))
    //     this.hideEmptyResults.forEach(element => element.classList.add('d-none'))
    //   } else {
    //     this.noResults.classList.add("d-none")
    //     this.hideEmptyResults.forEach(element => element.classList.remove('d-none'))
    //   }

    // }

    if (this.drawerContainer.querySelectorAll("product-card").length == 0) {
      this.noResults.classList.remove("d-none")
      // this.querySelectorAll('[hide-empty-results]').forEach(element => element.classList.add('d-none'))
      this.hideEmptyResults.forEach(element => element.classList.add('d-none'))
    } else {
      this.noResults.classList.add("d-none")
      this.hideEmptyResults.forEach(element => element.classList.remove('d-none'))
    }


    if (this.drawerContainer.querySelectorAll("product-card").length == 1) {
      if (this.resultsPage?.querySelector('[add-to-cart]')) {
        this.resultsPage?.querySelector('[add-to-cart]').classList.add('d-none');
      } else if (this.drawer?.querySelector('[add-to-cart]')) {
        this.drawer?.querySelector('[add-to-cart]').parentElement.classList.add('d-none');
      }

    } else {
      if (this.resultsPage?.querySelector('[add-to-cart]')) {
        this.resultsPage?.querySelector('[add-to-cart]').classList.remove('d-none');
      } else if (this.drawer?.querySelector('[add-to-cart]')) {
        this.drawer?.querySelector('[add-to-cart]').parentElement.classList.remove('d-none');
      }
    }

    this.resultsPage?.classList.remove('d-none')
    this.resultsPage && this.form.classList.add('d-none')
    this.loadMoreBtn?.classList.remove('loadingState')
    this.loadMoreBtn?.removeAttribute("disabled")
    this.loading = false;

  }

  enableResultsPage() {
    this.resultsPage?.classList.remove('d-none')
    this.resultsPage && this.form.classList.add('d-none')
  }

  disableResultsPage() {
    this.resultsPage?.classList.add('d-none')
    this.resultsPage && this.form.classList.remove('d-none')
  }

  initDesignMode() {
    const getParentElement = (el, elToGet) => {
      return el.closest(elToGet);
    }
    document.addEventListener('shopify:section:select', (e) => {

      if (!!getParentElement(e.target, `#${this.sectionID}`)) this.resetQuiz()

    });

    document.addEventListener('shopify:section:deselect', (e) => {
      if (!!getParentElement(e.target, `#${this.sectionID}`)) this.closeResultDrawer()
    })

    document.addEventListener('shopify:block:select', (e) => {
      if (!!getParentElement(e.target, 'quiz-form')) this.startQuiz()
      if (!!getParentElement(e.target, '[results-page]')) {
        this.enableResultsPage()
      } else if (!!getParentElement(e.target, 'drawer-component')) {
        // Toggle the drawer: if it's open, close it; if closed, open it
        const drawerEl = document.querySelector(`drawer-component[drawer-type="${this.drawerID}"]`);
        if (drawerEl && drawerEl.getAttribute('aria-hidden') === 'false') {
          // Drawer is already open, do nothing
          return;
        }
        HELPER_UTIL.dispatchCustomEvent(
          _EVENT_HELPER.showDrawer,
          this,
          {
            drawerType: this.drawerID
          }
        );
      }
    })

    document.addEventListener('shopify:block:deselect', (e) => {
      // if (!!getParentElement(e.target, 'quiz-form')) this.resetQuiz()
      if (!!getParentElement(e.target, '[results-page]')) {

        this.disableResultsPage()
      } else if (!!getParentElement(e.target, 'drawer-component')) {
        HELPER_UTIL.dispatchCustomEvent(
          _EVENT_HELPER.hideDrawer,
          this,
          {
            drawerType: this.drawerID
          }
        );
      } else {
        // If result drawer open, close it
        this.closeResultDrawer();
      }


    })

  }

  closeResultDrawer() {
    const drawerEl = document.querySelector(`drawer-component[drawer-type="${this.drawerID}"]`);
    if (drawerEl && drawerEl.getAttribute('aria-hidden') === 'false') {
      HELPER_UTIL.dispatchCustomEvent(
        _EVENT_HELPER.hideDrawer,
        this,
        {
          drawerType: this.drawerID
        }
      );
    }
  }
}

customElements.get('quiz-form') || customElements.define('quiz-form', QuizForm);

class ScrollingContent extends HTMLElement {
    constructor() {
        super()
        this.container = this.querySelector("[scrolling-container]");
        this.scrollItem = this.querySelectorAll("[scrolling-item]");
        // this.itemsPerView = parseInt(this.getAttribute("item-per-view"))
        this.columnSpacing = parseInt(this.getAttribute("column-spacing"));
        this.responsiveBreakpoints = JSON.parse(this.getAttribute("item-per-view-breakpoints"))
        window.addEventListener('resize', this.screenResize.bind(this));
    }

    connectedCallback() {
        // this.setScrollItemWidth(this.scrollItem, this.itemsPerView)
        this.screenResize()
    }

    screenResize() {

        Object.entries(this.responsiveBreakpoints).map(([key, value]) => {

            this.breakpoint = window.matchMedia(`(min-width:${key}px)`);
            if (this.breakpoint.matches) {
                this.setScrollItemWidth(this.scrollItem, value["item-per-view"])

            }
        })
    }
    setScrollItemWidth(scrollItem, itemPerView) {
        scrollItem.forEach(item => {
            item.style.width = `${(this.container.clientWidth - this.columnSpacing) / itemPerView}px`
        });

    }
}

customElements.get("scrolling-content") || customElements.define("scrolling-content", ScrollingContent);

class GuideDrawer extends HTMLElement {
    constructor() {
        super();
        // Opens the drawer
        this.button = this.querySelector("[triger-guide-drawer-button]")
        this.getPortalElementId = this.getAttribute('target-portal-element') || null;
        this.button?.addEventListener('click', this.openDrawer.bind(this));
        // Opens the popup
        this.buttonPopup = this.querySelector("[triger-guide-popup]")
        this.buttonClose = this.querySelectorAll("[close-guide-popup]")
        this.buttonClose?.forEach(button => button.addEventListener('click', this.closePopup.bind(this)));
        this.buttonPopup?.addEventListener('click', this.openPopup.bind(this));
        this.popupContainer = this.querySelector("[guide-popup]")
        this.tables = this.querySelectorAll("table")
        this.tables?.forEach(table => {
            var wrapper = document.createElement('div');
            wrapper.classList.add('scroll-table-wrapper'); // Add a class to the div
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        })

    }

    closePopup() {
        this.popupContainer?.classList.remove('active')
    }

    openPopup() {
        this.popupContainer?.classList.add('active')
    }


    openDrawer() {
        HELPER_UTIL.dispatchCustomEvent(_EVENT_HELPER.showDrawer, document, {
            drawerType: 'guide-drawer',
            portalDrawerTo: this.getPortalElementId,
            portalBackSectionId: this.id,
        });
    }

}

customElements.get('guide-drawer') || customElements.define('guide-drawer', GuideDrawer);

class ComparisonComponent extends CarouselComponent {

    constructor() {
        super();
        this.sliders = this.querySelectorAll("[main-slider]");
        this.tableColumns = this.querySelectorAll("[table-column]")
        this.tableRows = this.querySelectorAll("[table-row]")
        this.tableHeadRows = this.querySelectorAll("[table-row-heading]")
        this.productButtons = this.querySelectorAll("[product-buttons]")
        this.grabCursor = this.getAttribute("slide-grab-cursor") === "true";
        if (Shopify.designMode) this.initDesignMode();
        window.addEventListener("resize", e => {  
            setTimeout(() => {
                this.heightCalculator()
            }, 10)

        })
    }
    initDesignMode() {
        const getParentElement = (el, elToGet) => {
            return el.closest(elToGet);
        };
        document.addEventListener('shopify:block:select', (e) => {
            if (!!getParentElement(e.target, '[main-slider]')) {
                const carouselApiInstance = getParentElement(e.target, '[main-slider]').swiper;
                const getSlideEl = e.target.classList.contains('swiper-slide')
                    ? e.target
                    : e.target.closest('.swiper-slide');

                const getSlidesFromInstances = carouselApiInstance.slides;
                const getSlideIndex = getSlidesFromInstances.indexOf(getSlideEl);
                carouselApiInstance.slideTo(getSlideIndex);
            }
        });


    }
    heightCalculator() {
        this.tableHeadRows.forEach((item, index) => {
            let rowElements = [];
            this.tableColumns.forEach((slide) => {
                rowElements.push(slide.querySelectorAll("[table-row]")[index])
            })

            this.setHeightOfTableRow(rowElements, item);

        })
    }
    connectedCallback() {
        super.connectedCallback();


    }

    addSliderAfterTransitionEndListener() {
        this.sliders[1].swiper?.on("slideChangeTransitionEnd", e => {
            this.handleFunctionalityAfterSlideChangeStart(e)
        })
    }
    setHeightOfTableRow(element, headRowElement) {

        let height = this.getHeightOfTableRow(element, headRowElement)

        element?.forEach(item => {
            item && (item.style.height = `${height}px`)
        })
        headRowElement && (headRowElement.style.height = `${height}px`);
    }
    getHeightOfTableRow(element, headRowElement) {
        let rowHeight = 0
        element?.forEach(item => {
            item?.style?.height && (item.style.height = 'auto')
            if (item?.clientHeight > rowHeight) {
                rowHeight = item.clientHeight
            }
        })
        headRowElement?.style?.height && (headRowElement.style.height = 'auto');
        return rowHeight > headRowElement?.clientHeight ? rowHeight : headRowElement?.clientHeight
    }
    initSlider() {
        this.sliders.forEach((element, index) => {
            this.responsive_breakpoints = JSON.parse(
                element.getAttribute('slide-responsive-breakpoints')
            );
            if (index == 1) {
                this.nextButton = null;
                this.prevButton = null;
            }
            super.initSlider(element)

        });


        this.sliders[1].swiper?.on("slideChangeTransitionEnd", e => {
            this.handleFunctionalityAfterSlideChangeStart(e)
        })

        this.sliders[0].swiper.controller.control = this.sliders[1].swiper;
        this.sliders[1].swiper.controller.control = this.sliders[0].swiper;
        this.heightCalculator();
    }




    handleFunctionalityAfterSlideChangeStart(swiperInstance) {
        // swiperInstance.swipeDirection == 'next' ? this.productButtons[swiperInstance.activeIndex - 1]?.classList.add("d-none") : this.productButtons[swiperInstance.activeIndex + 1]?.classList.add("d-none")
        this.productButtons.forEach(button => {
            button?.classList.add("d-none")
        })
        this.productButtons[swiperInstance.activeIndex]?.classList.remove("d-none")
    }
}

customElements.get("comparison-component") || customElements.define("comparison-component", ComparisonComponent)
class LookbookCarousel extends CarouselComponent {
  constructor() {
    super();
    this.section = this.closest('section');
    this.isGrid = this.section.querySelector('.look-book-grid');
    this.productsCarousel = this.section.querySelector('carousel-component');
    if (Shopify.designMode) this.initDesignMode();
  }

  handleSliderAfterInitialization(swiperInstance) {
    super.handleSliderAfterInitialization(swiperInstance);
    this.updateProductVisibility(swiperInstance);
  }

  handleFunctionalityAfterSlideChange(swiperInstance) {
    this.updateProductVisibility(swiperInstance);
  }

  updateProductVisibility(swiperInstance) {
    const activeSlideElement = swiperInstance.slides[swiperInstance.activeIndex];
    if (!activeSlideElement) return;

    const blockId = activeSlideElement.dataset.blockId;

    // Update background images
    this.section.querySelectorAll('[data-bg-slide-id]').forEach(slide => slide.classList.add('opacity-0'));
    this.section.querySelectorAll(`[data-bg-slide-id="${blockId}"]`).forEach(slide => slide.classList.remove('opacity-0'));

    // Update products
    const allProducts = this.section.querySelectorAll('[data-product-slide-id]');
    const activeProducts = this.section.querySelectorAll(`[data-product-slide-id="${blockId}"]`);

    // Always update carousel slides when a carousel exists — this covers both the
    // pure-carousel layout and the grid-on-desktop / carousel-on-mobile layout.
    if (this.productsCarousel && this.productsCarousel.swiperInstance) {
      // Fade out first, then mutate DOM while invisible to prevent flash
      this.productsCarousel.classList.add('opacity-0');
      if (this._visibilityTimeout) clearTimeout(this._visibilityTimeout);
      this._visibilityTimeout = setTimeout(() => {
        if (!this.productsCarousel?.swiperInstance) return;

        allProducts.forEach(slide => {
          slide.classList.add('d-none');
          slide.classList.remove('swiper-slide');
        });
        activeProducts.forEach(slide => {
          slide.classList.remove('d-none');
          slide.classList.add('swiper-slide');
        });
        // Query all swatch animations in one go to avoid queries inside the loop
        this.section.querySelectorAll(`[data-product-slide-id="${blockId}"] product-card-swatch-animation`).forEach(swatch => swatch.initComponent());
        this.productsCarousel.swiperInstance.slideTo(0, 0);
        this.productsCarousel.swiperInstance.update();
        this.productsCarousel.classList.remove('opacity-0');
        this._visibilityTimeout = null;
      }, 150);
    } else {
      // No swiper instance yet — update DOM immediately (initial load / grid layout)
      allProducts.forEach(slide => {
        slide.classList.add('d-none');
        slide.classList.remove('swiper-slide');
      });
      activeProducts.forEach(slide => {
        slide.classList.remove('d-none');
        if (this.productsCarousel) slide.classList.add('swiper-slide');
      });
      this.section.querySelectorAll(`[data-product-slide-id="${blockId}"] product-card-swatch-animation`).forEach(swatch => swatch.initComponent());
    }
  }

  initDesignMode() {
    const getParentElement = (el, elToGet) => {
      return el.closest(elToGet);
    };
    document.addEventListener('shopify:block:select', (e) => {
      if (!!getParentElement(e.target, 'look-book-carousel')) {
        const carouselApiInstance = getParentElement(e.target, 'look-book-carousel').swiperInstance;
        const getSlideEl = e.target.classList.contains('swiper-slide')
          ? e.target
          : e.target.closest('.swiper-slide');
        const getSlidesFromInstances = carouselApiInstance.slides;
        const getSlideIndex = getSlidesFromInstances.indexOf(getSlideEl);
        carouselApiInstance.slideTo(getSlideIndex);
      }
    });
  }
}
customElements.get('look-book-carousel') || customElements.define('look-book-carousel', LookbookCarousel);