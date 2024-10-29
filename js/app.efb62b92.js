(function(){"use strict";var t={7916:function(t,e,n){var o=n(5130),r=n(6768);const i={id:"app"};function a(t,e){const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bF)(n)])}var u=n(1241);const c={},f=(0,u.A)(c,[["render",a]]);var l=f,d=n(1387);const s=[{path:"/",name:"home",component:()=>n.e(71).then(n.bind(n,4071)),meta:{title:"首页"}},{path:"/questionType/words",name:"words",component:()=>n.e(52).then(n.bind(n,6052)),meta:{title:"成语积累"}},{path:"/questionType/quickCalculation",name:"quickCalculation",component:()=>n.e(663).then(n.bind(n,8663)),meta:{title:"速算练习"}},{path:"/algorithm/addition",name:"addition",component:()=>n.e(322).then(n.bind(n,8322)),meta:{title:"多位数加法"}},{path:"/algorithm/subtraction",name:"subtraction",component:()=>n.e(984).then(n.bind(n,5984)),meta:{title:"多位数减法"}},{path:"/algorithm/multiplication",name:"multiplication",component:()=>n.e(332).then(n.bind(n,5332)),meta:{title:"多位数乘法"}},{path:"/algorithm/division",name:"division",component:()=>n.e(31).then(n.bind(n,7031)),meta:{title:"多位数除法"}},{path:"/algorithm/percentage",name:"percentage",component:()=>n.e(13).then(n.bind(n,5013)),meta:{title:"百分比乘法"}},{path:"/algorithm/twoDigitAddition",name:"twoDigitAddition",component:()=>n.e(283).then(n.bind(n,4283)),meta:{title:"两位数加法"}},{path:"/algorithm/twoDigitSubtraction",name:"twoDigitSubtraction",component:()=>n.e(297).then(n.bind(n,8297)),meta:{title:"两位数减法"}},{path:"/algorithm/fraction",name:"fraction",component:()=>n.e(72).then(n.bind(n,5072)),meta:{title:"分数变百分比"}},{path:"/404",name:"Error",component:()=>n.e(819).then(n.bind(n,3819)),meta:{title:"404"}},{path:"/:pathMatch(.*)*",name:"notFound",redirect:{path:"/404"}}],m=(0,d.aE)({history:(0,d.Bt)(),routes:s});m.beforeEach((async(t,e,n)=>{t.meta.title&&(document.title=t.meta.title),n()}));var p=m,h=n(782),b=(0,h.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),v=n(9814);n(2241),n(6095);(0,o.Ef)(l).use(b).use(p).use(v.Ay$).use(v.Ay$.Lazyload).mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var a=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],i=t[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(l--,1);var f=r();void 0!==f&&(e=f)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{13:"6bd3b20f",31:"cf54eaeb",52:"b0f09577",71:"374b54e9",72:"ea0d513a",283:"bc97f8b2",297:"d29e5d48",322:"14865882",332:"9eb3457e",663:"46bbc430",819:"fb536b00",984:"a3fe49b6"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{13:"0876a421",31:"2d1a73a8",52:"313c0c4d",71:"172b56f8",72:"91775f59",283:"20726c38",297:"21105cb5",322:"0e704885",332:"3526acd4",663:"060f43a7",819:"81da8681",984:"d25a6037"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="topic:";n.l=function(o,r,i,a){if(t[o])t[o].push(r);else{var u,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var d=f[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=o),t[o]=[r];var s=function(e,n){u.onerror=u.onload=null,clearTimeout(m);var r=t[o];if(delete t[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,o,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var u=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var o=n&&n.type,u=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=u,a.parentNode&&a.parentNode.removeChild(a),i(c)}};return a.onerror=a.onload=u,a.href=e,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),u=n.p+a;if(e(a,u))return r();t(o,u,null,r,i)}))},r={524:0};n.f.miniCss=function(t,e){var n={13:1,31:1,52:1,71:1,72:1,283:1,297:1,322:1,332:1,663:1,819:1,984:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(e),u=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,r[1](u)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,a=o[0],u=o[1],c=o[2],f=0;if(a.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(c)var l=c(n)}for(e&&e(o);f<a.length;f++)i=a[f],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},o=self["webpackChunktopic"]=self["webpackChunktopic"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7916)}));o=n.O(o)})();