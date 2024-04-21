var u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function v(){v=function(){},u.Symbol||(u.Symbol=A)}var B=0;function A(t){return"jscomp_symbol_"+(t||"")+B++}!function(t){function i(n){if(e[n])return e[n].S;var o=e[n]={ja:n,fa:!1,S:{}};return t[n].call(o.S,o,o.S,i),o.fa=!0,o.S}var e={};i.u=t,i.h=e,i.c=function(t,e,n){i.g(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){v(),v(),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(v(),Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})),Object.defineProperty(t,"__esModule",{value:!0})},i.m=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.ba)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.c(n,o,function(i){return t[i]}.bind(null,o));return n},i.i=function(t){var e=t&&t.ba?function(){return t.default}:function(){return t};return i.c(e,"a",e),e},i.g=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.o="",i(i.w=0)}([function(t,i,e){function n(t,i){if(i=void 0===i?{}:i,this.h=t,this.g=this.g.bind(this),!a(this.h))throw new TypeError("`new Drift` requires a DOM element as its first argument.");t=i.namespace||null;var e=i.showWhitespaceAtEdges||!1,n=i.containInline||!1,o=i.inlineOffsetX||0,s=i.inlineOffsetY||0,h=i.inlineContainer||document.body,r=i.sourceAttribute||"data-zoom",d=i.zoomFactor||3,u=void 0===i.paneContainer?document.body:i.paneContainer,f=i.inlinePane||375,p=!("handleTouch"in i)||!!i.handleTouch,c=i.onShow||null,l=i.onHide||null,b=!("injectBaseStyles"in i)||!!i.injectBaseStyles,v=i.hoverDelay||0,m=i.touchDelay||0,y=i.hoverBoundingBox||!1,g=i.touchBoundingBox||!1;if(i=i.boundingBoxContainer||document.body,!0!==f&&!a(u))throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`");if(!a(h))throw new TypeError("`inlineContainer` must be a DOM element");this.a={j:t,O:e,I:n,K:o,L:s,v:h,P:r,f:d,ga:u,ea:f,B:p,N:c,M:l,da:b,D:v,G:m,C:y,F:g,H:i},this.a.da&&!document.querySelector(".drift-base-styles")&&((i=document.createElement("style")).type="text/css",i.classList.add("drift-base-styles"),i.appendChild(document.createTextNode(".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}")),(t=document.head).insertBefore(i,t.firstChild)),this.w(),this.u()}function o(t){t=void 0===t?{}:t,this.h=this.h.bind(this),this.g=this.g.bind(this),this.m=this.m.bind(this),this.s=!1;var i=void 0===t.J?null:t.J,e=void 0===t.f?f():t.f,n=void 0===t.T?f():t.T,o=void 0===t.j?null:t.j,s=void 0===t.O?f():t.O,h=void 0===t.I?f():t.I;this.a={J:i,f:e,T:n,j:o,O:s,I:h,K:void 0===t.K?0:t.K,L:void 0===t.L?0:t.L,v:void 0===t.v?document.body:t.v},this.o=this.i("open"),this.Y=this.i("opening"),this.u=this.i("closing"),this.w=this.i("inline"),this.X=this.i("loading"),this.ha()}function s(t){t=void 0===t?{}:t,this.m=this.m.bind(this),this.A=this.A.bind(this),this.g=this.g.bind(this),this.c=this.c.bind(this);var i=t;t=void 0===i.b?f():i.b;var e=void 0===i.l?f():i.l,n=void 0===i.P?f():i.P,o=void 0===i.B?f():i.B,s=void 0===i.N?null:i.N,a=void 0===i.M?null:i.M,r=void 0===i.D?0:i.D,d=void 0===i.G?0:i.G,u=void 0===i.C?f():i.C,p=void 0===i.F?f():i.F,c=void 0===i.j?null:i.j,l=void 0===i.f?f():i.f;i=void 0===i.H?f():i.H,this.a={b:t,l:e,P:n,B:o,N:s,M:a,D:r,G:d,C:u,F:p,j:c,f:l,H:i},(this.a.C||this.a.F)&&(this.o=new h({j:this.a.j,f:this.a.f,R:this.a.H})),this.enabled=!0,this.w()}function h(t){this.s=!1;var i=void 0===t.j?null:t.j,e=void 0===t.f?f():t.f;t=void 0===t.R?f():t.R,this.a={j:i,f:e,R:t},this.c=this.g("open"),this.h()}function a(t){return p?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName}function r(t,i){i.forEach(function(i){t.classList.add(i)})}function d(t,i){i.forEach(function(i){t.classList.remove(i)})}function f(){throw Error("Missing parameter")}e.r(i);var p="object"==typeof HTMLElement;h.prototype.g=function(t){var i=["drift-"+t],e=this.a.j;return e&&i.push(e+"-"+t),i},h.prototype.h=function(){this.b=document.createElement("div"),r(this.b,this.g("bounding-box"))},h.prototype.show=function(t,i){this.s=!0,this.a.R.appendChild(this.b);var e=this.b.style;e.width=Math.round(t/this.a.f)+"px",e.height=Math.round(i/this.a.f)+"px",r(this.b,this.c)},h.prototype.V=function(){this.s&&this.a.R.removeChild(this.b),this.s=!1,d(this.b,this.c)},h.prototype.setPosition=function(t,i,e){var n=window.pageXOffset,o=window.pageYOffset;t=e.left+t*e.width-this.b.clientWidth/2+n,i=e.top+i*e.height-this.b.clientHeight/2+o,t<e.left+n?t=e.left+n:t+this.b.clientWidth>e.left+e.width+n&&(t=e.left+e.width-this.b.clientWidth+n),i<e.top+o?i=e.top+o:i+this.b.clientHeight>e.top+e.height+o&&(i=e.top+e.height-this.b.clientHeight+o),this.b.style.left=t+"px",this.b.style.top=i+"px"},s.prototype.i=function(t){t.preventDefault()},s.prototype.w=function(){this.a.b.addEventListener("mouseenter",this.g,!1),this.a.b.addEventListener("mouseleave",this.A,!1),this.a.b.addEventListener("mousemove",this.c,!1),this.a.B?(this.a.b.addEventListener("touchstart",this.g,!1),this.a.b.addEventListener("touchend",this.A,!1),this.a.b.addEventListener("touchmove",this.c,!1)):(this.a.b.addEventListener("touchstart",this.i,!1),this.a.b.addEventListener("touchend",this.i,!1),this.a.b.addEventListener("touchmove",this.i,!1))},s.prototype.ca=function(){this.a.b.removeEventListener("mouseenter",this.g,!1),this.a.b.removeEventListener("mouseleave",this.A,!1),this.a.b.removeEventListener("mousemove",this.c,!1),this.a.B?(this.a.b.removeEventListener("touchstart",this.g,!1),this.a.b.removeEventListener("touchend",this.A,!1),this.a.b.removeEventListener("touchmove",this.c,!1)):(this.a.b.removeEventListener("touchstart",this.i,!1),this.a.b.removeEventListener("touchend",this.i,!1),this.a.b.removeEventListener("touchmove",this.i,!1))},s.prototype.g=function(t){t.preventDefault(),this.h=t,"mouseenter"==t.type&&this.a.D?this.u=setTimeout(this.m,this.a.D):this.a.G?this.u=setTimeout(this.m,this.a.G):this.m()},s.prototype.m=function(){if(this.enabled){var t=this.a.N;t&&"function"==typeof t&&t(),this.a.l.show(this.a.b.getAttribute(this.a.P),this.a.b.clientWidth,this.a.b.clientHeight),this.h&&((t=this.h.touches)&&this.a.F||!t&&this.a.C)&&this.o.show(this.a.l.b.clientWidth,this.a.l.b.clientHeight),this.c()}},s.prototype.A=function(t){t&&t.preventDefault(),this.h=null,this.u&&clearTimeout(this.u),this.o&&this.o.V(),(t=this.a.M)&&"function"==typeof t&&t(),this.a.l.V()},s.prototype.c=function(t){if(t)t.preventDefault(),this.h=t;else{if(!this.h)return;t=this.h}if(t.touches)var i=(t=t.touches[0]).clientX,e=t.clientY;else i=t.clientX,e=t.clientY;i=(i-(t=this.a.b.getBoundingClientRect()).left)/this.a.b.clientWidth,e=(e-t.top)/this.a.b.clientHeight,this.o&&this.o.setPosition(i,e,t),this.a.l.setPosition(i,e,t)},u.Object.defineProperties(s.prototype,{s:{configurable:!0,enumerable:!0,get:function(){return this.a.l.s}}}),t=document.createElement("div").style;var c="undefined"!=typeof document&&("animation"in t||"webkitAnimation"in t);o.prototype.i=function(t){var i=["drift-"+t],e=this.a.j;return e&&i.push(e+"-"+t),i},o.prototype.ha=function(){this.b=document.createElement("div"),r(this.b,this.i("zoom-pane"));var t=document.createElement("div");r(t,this.i("zoom-pane-loader")),this.b.appendChild(t),this.c=document.createElement("img"),this.b.appendChild(this.c)},o.prototype.W=function(t){this.c.setAttribute("src",t)},o.prototype.Z=function(t,i){this.c.style.width=t*this.a.f+"px",this.c.style.height=i*this.a.f+"px"},o.prototype.setPosition=function(t,i,e){var n=this.c.offsetWidth,o=this.c.offsetHeight,s=this.b.offsetWidth,h=this.b.offsetHeight,a=s/2-n*t,r=h/2-o*i,d=s-n,u=h-o,f=0<d,p=0<u;o=f?d/2:0,n=p?u/2:0,d=f?d/2:d,u=p?u/2:u,this.b.parentElement===this.a.v&&(p=window.pageXOffset,f=window.pageYOffset,t=e.left+t*e.width-s/2+this.a.K+p,i=e.top+i*e.height-h/2+this.a.L+f,this.a.I&&(t<e.left+p?t=e.left+p:t+s>e.left+e.width+p&&(t=e.left+e.width-s+p),i<e.top+f?i=e.top+f:i+h>e.top+e.height+f&&(i=e.top+e.height-h+f)),this.b.style.left=t+"px",this.b.style.top=i+"px"),this.a.O||(a>o?a=o:a<d&&(a=d),r>n?r=n:r<u&&(r=u)),this.c.style.transform="translate("+a+"px, "+r+"px)",this.c.style.webkitTransform="translate("+a+"px, "+r+"px)"},o.prototype.U=function(){this.b.removeEventListener("animationend",this.h,!1),this.b.removeEventListener("animationend",this.g,!1),this.b.removeEventListener("webkitAnimationEnd",this.h,!1),this.b.removeEventListener("webkitAnimationEnd",this.g,!1),d(this.b,this.o),d(this.b,this.u)},o.prototype.show=function(t,i,e){this.U(),this.s=!0,r(this.b,this.o),r(this.b,this.X),this.c.addEventListener("load",this.m,!1),this.W(t),this.Z(i,e),this.ia?this.aa():this.$(),c&&(this.b.addEventListener("animationend",this.h,!1),this.b.addEventListener("webkitAnimationEnd",this.h,!1),r(this.b,this.Y))},o.prototype.aa=function(){this.a.v.appendChild(this.b),r(this.b,this.w)},o.prototype.$=function(){this.a.J.appendChild(this.b)},o.prototype.V=function(){this.U(),this.s=!1,c?(this.b.addEventListener("animationend",this.g,!1),this.b.addEventListener("webkitAnimationEnd",this.g,!1),r(this.b,this.u)):(d(this.b,this.o),d(this.b,this.w))},o.prototype.h=function(){this.b.removeEventListener("animationend",this.h,!1),this.b.removeEventListener("webkitAnimationEnd",this.h,!1),d(this.b,this.Y)},o.prototype.g=function(){this.b.removeEventListener("animationend",this.g,!1),this.b.removeEventListener("webkitAnimationEnd",this.g,!1),d(this.b,this.o),d(this.b,this.u),d(this.b,this.w),this.b.setAttribute("style",""),this.b.parentElement===this.a.J?this.a.J.removeChild(this.b):this.b.parentElement===this.a.v&&this.a.v.removeChild(this.b)},o.prototype.m=function(){this.c.removeEventListener("load",this.m,!1),d(this.b,this.X)},u.Object.defineProperties(o.prototype,{ia:{configurable:!0,enumerable:!0,get:function(){var t=this.a.T;return!0===t||"number"==typeof t&&window.innerWidth<=t}}}),n.prototype.w=function(){this.l=new o({J:this.a.ga,f:this.a.f,O:this.a.O,I:this.a.I,T:this.a.ea,j:this.a.j,K:this.a.K,L:this.a.L,v:this.a.v})},n.prototype.u=function(){this.c=new s({b:this.h,l:this.l,B:this.a.B,N:this.a.N,M:this.a.M,P:this.a.P,D:this.a.D,G:this.a.G,C:this.a.C,F:this.a.F,j:this.a.j,f:this.a.f,H:this.a.H})},n.prototype.U=function(t){this.l.W(t)},n.prototype.i=function(){this.c.enabled=!1},n.prototype.m=function(){this.c.enabled=!0},n.prototype.g=function(){this.c.A(),this.c.ca()},u.Object.defineProperties(n.prototype,{s:{configurable:!0,enumerable:!0,get:function(){return this.l.s}},f:{configurable:!0,enumerable:!0,get:function(){return this.a.f},set:function(t){this.a.f=t,this.l.a.f=t,this.c.a.f=t,this.o.a.f=t}}}),Object.defineProperty(n.prototype,"isShowing",{get:function(){return this.s}}),Object.defineProperty(n.prototype,"zoomFactor",{get:function(){return this.f},set:function(t){this.f=t}}),n.prototype.setZoomImageURL=n.prototype.U,n.prototype.disable=n.prototype.i,n.prototype.enable=n.prototype.m,n.prototype.destroy=n.prototype.g,window.Drift=n}]);
//# sourceMappingURL=Drift.min.js.map