!function(){"use strict";var e,t,n,r,o,a,c,f={},i={};function u(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={id:e,loaded:!1,exports:{}};return f[e].call(n.exports,n,n.exports,u),n.loaded=!0,n.exports}u.m=f,e=[],u.O=function(t,n,r,o){if(!n){var a=1/0;for(i=0;i<e.length;i++){n=e[i][0],r=e[i][1],o=e[i][2];for(var c=!0,f=0;f<n.length;f++)(!1&o||a>=o)&&Object.keys(u.O).every((function(e){return u.O[e](n[f])}))?n.splice(f--,1):(c=!1,o<a&&(a=o));c&&(e.splice(i--,1),t=r())}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o]},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},u.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var a={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},u.d(o,a),o},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return({41:"bbcd22c466dc2ac9a0b55e1a462d41c86c3ad5e3",306:"component---cache-caches-gatsby-plugin-offline-app-shell-js",342:"84d8b8095fe5097bfd523589e602ddb773149984",494:"6e05a7139c21c47ba07c514875283d86771661c3",496:"291a736a4998dc6bb1e7dae6dfd245355445eafd",518:"617777a1",532:"styles",565:"component---src-templates-page-js",585:"component---src-pages-terms-conditions-js",678:"component---src-pages-index-js",698:"9065201db05843d3a3060ddf2a8c4a9efea1ee34",744:"component---src-templates-blog-js",756:"component---src-templates-author-js",774:"component---src-pages-404-tw-js",851:"component---src-templates-post-js",883:"component---src-pages-404-js",969:"component---src-templates-tag-js"}[e]||e)+"-"+{41:"8e1b3951726fb26bc936",175:"7b0b049d04c44031d06e",231:"300d56b82b79bf5f6ff3",306:"8d7895d09c3418e745ec",342:"79c09c7da4a3f88b1ff5",494:"4d67be524c39ef173f34",496:"cef34887f98fd5ca0a3a",518:"4e7b0349f8318320c32c",532:"5b4213de1cfd25ae953f",565:"8bf206319e6b8c08d804",585:"8d6081aec04db5dd33b0",678:"d191bff1047054b4395c",698:"76ca5f301348319dc345",744:"cd914466da03e53678c7",756:"e678b47682ce208245ca",774:"3c5f4a4b33eb591df1f3",776:"2ec358b06877027cd34e",851:"5c3f5f86913a57f60fed",883:"3b8e41413e79c2611cb3",969:"00bc7cf975686177cf3e"}[e]+".js"},u.miniCssF=function(e){return"styles.653c4079d589b9afd326.css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.hmd=function(e){return(e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="gatsby-starter-ghost:",u.l=function(e,t,n,a){if(r[e])r[e].push(t);else{var c,f;if(void 0!==n)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var d=i[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){c=d;break}}c||(f=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.setAttribute("data-webpack",o+n),c.src=e),r[e]=[t];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),f&&document.head.appendChild(c)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},u.p="/",a=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var c;if((o=(c=a[r]).getAttribute("data-href"))===e||o===t)return c}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var c=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+f+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=c,i.request=f,o.parentNode.removeChild(o),r(i)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},c={658:0},u.f.miniCss=function(e,t){c[e]?t.push(c[e]):0!==c[e]&&{532:1}[e]&&t.push(c[e]=a(e).then((function(){c[e]=0}),(function(t){throw delete c[e],t})))},function(){var e={658:0,532:0};u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(532|658)$/.test(t))e[t]=0;else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=u.p+u.u(t),c=new Error;u.l(a,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+t,t)}},u.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,a=n[0],c=n[1],f=n[2],i=0;for(r in c)u.o(c,r)&&(u.m[r]=c[r]);if(f)var s=f(u);for(t&&t(n);i<a.length;i++)o=a[i],u.o(e,o)&&e[o]&&e[o][0](),e[a[i]]=0;return u.O(s)},n=self.webpackChunkgatsby_starter_ghost=self.webpackChunkgatsby_starter_ghost||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();
//# sourceMappingURL=webpack-runtime-81c5f85db7ad2a8d61c8.js.map