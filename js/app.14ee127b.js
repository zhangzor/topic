(function(){"use strict";var e={7916:function(e,t,n){var o=n(5130),a=n(6768);const i={id:"app"};function r(e,t){const n=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(n)])}var c=n(1241);const m={},d=(0,c.A)(m,[["render",r]]);var u=d,l=n(1387);const s=[{path:"/",name:"home",component:()=>n.e(942).then(n.bind(n,3942)),meta:{title:"首页"}},{path:"/questionType/words",name:"words",component:()=>n.e(671).then(n.bind(n,6052)),meta:{title:"成语积累"}},{path:"/questionType/quickCalculation",name:"quickCalculation",component:()=>n.e(423).then(n.bind(n,423)),meta:{title:"速算练习"}},{path:"/questionType/notes",name:"notes",component:()=>n.e(215).then(n.bind(n,4215)),meta:{title:"笔记"}},{path:"/questionType/currentAffairs",name:"currentAffairs",component:()=>n.e(933).then(n.bind(n,1933)),meta:{title:"时政"}},{path:"/algorithm/addition",name:"addition",component:()=>n.e(322).then(n.bind(n,8322)),meta:{title:"多位数加法"}},{path:"/algorithm/subtraction",name:"subtraction",component:()=>n.e(984).then(n.bind(n,5984)),meta:{title:"多位数减法"}},{path:"/algorithm/multiplication",name:"multiplication",component:()=>n.e(332).then(n.bind(n,5332)),meta:{title:"多位数乘法"}},{path:"/algorithm/division",name:"division",component:()=>n.e(31).then(n.bind(n,7031)),meta:{title:"多位数除法"}},{path:"/algorithm/percentage",name:"percentage",component:()=>n.e(13).then(n.bind(n,5013)),meta:{title:"百分比乘法"}},{path:"/algorithm/twoDigitAddition",name:"twoDigitAddition",component:()=>n.e(12).then(n.bind(n,9012)),meta:{title:"两位数加法"}},{path:"/algorithm/twoDigitSubtraction",name:"twoDigitSubtraction",component:()=>n.e(69).then(n.bind(n,8069)),meta:{title:"两位数减法"}},{path:"/algorithm/fraction",name:"fraction",component:()=>n.e(635).then(n.bind(n,5635)),meta:{title:"分数转百分比"}},{path:"/algorithm/fractionResult",name:"fractionResult",component:()=>n.e(862).then(n.bind(n,8862)),meta:{title:"分数百分比表"}},{path:"/algorithm/percentToFraction",name:"percentToFraction",component:()=>n.e(412).then(n.bind(n,4412)),meta:{title:"百分比转分数"}},{path:"/questionType/typeOfEssay",name:"typeOfEssay",component:()=>n.e(147).then(n.bind(n,3147)),meta:{title:"国考省考申论规范词表达"}},{path:"/essay/administrative",name:"administrative",component:()=>Promise.all([n.e(289),n.e(806)]).then(n.bind(n,9986)),meta:{title:"行政管理类"}},{path:"/essay/economy",name:"economy",component:()=>Promise.all([n.e(289),n.e(364)]).then(n.bind(n,6168)),meta:{title:"经济发展类"}},{path:"/essay/humanities",name:"humanities",component:()=>Promise.all([n.e(289),n.e(122)]).then(n.bind(n,470)),meta:{title:"人文建设类"}},{path:"/essay/peopleLivelihood",name:"peopleLivelihood",component:()=>Promise.all([n.e(289),n.e(935)]).then(n.bind(n,6887)),meta:{title:"民生建设类"}},{path:"/essay/ecology",name:"ecology",component:()=>Promise.all([n.e(289),n.e(254)]).then(n.bind(n,674)),meta:{title:"生态环保类"}},{path:"/essay/area",name:"area",component:()=>Promise.all([n.e(289),n.e(317)]).then(n.bind(n,9197)),meta:{title:"区域发展类"}},{path:"/essay/sciencetechnology",name:"sciencetechnology",component:()=>Promise.all([n.e(289),n.e(176)]).then(n.bind(n,4580)),meta:{title:"科技创新类"}},{path:"/essay/law",name:"law",component:()=>Promise.all([n.e(289),n.e(186)]).then(n.bind(n,7046)),meta:{title:"法律制度类"}},{path:"/notes/speechComprehension",name:"speechComprehension",component:()=>n.e(880).then(n.bind(n,880)),meta:{title:"言语理解"}},{path:"/notes/judgmentReasoning",name:"judgmentReasoning",component:()=>n.e(775).then(n.bind(n,4775)),meta:{title:"判断推理"}},{path:"/notes/dataAnalysis",name:"dataAnalysis",component:()=>n.e(205).then(n.bind(n,5205)),meta:{title:"资料分析"}},{path:"/notes/news",name:"news",component:()=>n.e(925).then(n.bind(n,9925)),meta:{title:"新年贺词时政"}},{path:"/notes/essay",name:"essay",component:()=>n.e(349).then(n.bind(n,349)),meta:{title:"申论"}},{path:"/pdf/pdfReview",name:"pdfReview",component:()=>n.e(52).then(n.bind(n,2052)),meta:{title:"时政预览"}},{path:"/404",name:"Error",component:()=>n.e(819).then(n.bind(n,3819)),meta:{title:"404"}},{path:"/:pathMatch(.*)*",name:"notFound",redirect:{path:"/404"}}],p=(0,l.aE)({history:(0,l.Bt)(),routes:s});p.beforeEach((async(e,t,n)=>{e.meta.title&&(document.title=e.meta.title),n()}));var f=p,h=n(782),b=(0,h.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}}),y=n(9621);n(2241),n(6095);(0,o.Ef)(u).use(b).use(f).use(y.Ay$).use(y.Ay$.Lazyload).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var c=!0,m=0;m<o.length;m++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[m])}))?o.splice(m--,1):(c=!1,i<r&&(r=i));if(c){e.splice(u--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{12:"907f2688",13:"b260059f",31:"40831796",52:"15634420",69:"7ead927d",122:"321574aa",147:"9a8b3325",176:"6dfb3490",186:"2abd069a",205:"982dedd6",215:"83927da3",254:"dfb3be87",289:"9bc5f59e",317:"7cb73e99",322:"f990e404",332:"e8a6cf10",349:"4db8d939",364:"70e96aea",412:"01806691",423:"12930adf",582:"cd561f61",635:"09a549b8",671:"2baeb476",775:"a9345d22",806:"afc174d6",819:"7b02d073",862:"0e5ba39a",880:"00b35118",925:"fc5fd456",933:"ea917294",935:"e7a44b9c",942:"0148e82d",984:"8e09ea8a"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{12:"b6cab8c9",13:"0876a421",31:"2d1a73a8",52:"068eb9bf",69:"75c79ff5",122:"1d810063",147:"583c9791",176:"1d810063",186:"1d810063",205:"f9dacff6",215:"0e124492",254:"1d810063",317:"1d810063",322:"0e704885",332:"3526acd4",349:"8aa7af92",364:"1d810063",412:"6f9020b1",423:"8f43a563",635:"f8c0a25f",671:"313c0c4d",775:"45db593b",806:"1d810063",819:"81da8681",862:"b3f7c066",880:"6ca9cfc0",925:"85293cd4",933:"bd4ade04",935:"1d810063",942:"f68d2586",984:"d25a6037"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="topic:";n.l=function(o,a,i,r){if(e[o])e[o].push(a);else{var c,m;if(void 0!==i)for(var d=document.getElementsByTagName("script"),u=0;u<d.length;u++){var l=d[u];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){c=l;break}}c||(m=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[a];var s=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),m&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,a,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css",n.nc&&(r.nonce=n.nc);var c=function(n){if(r.onerror=r.onload=null,"load"===n.type)a();else{var o=n&&n.type,c=n&&n.target&&n.target.href||t,m=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+c+")");m.name="ChunkLoadError",m.code="CSS_CHUNK_LOAD_FAILED",m.type=o,m.request=c,r.parentNode&&r.parentNode.removeChild(r),i(m)}};return r.onerror=r.onload=c,r.href=t,o?o.parentNode.insertBefore(r,o.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){a=r[o],i=a.getAttribute("data-href");if(i===e||i===t)return a}},o=function(o){return new Promise((function(a,i){var r=n.miniCssF(o),c=n.p+r;if(t(r,c))return a();e(o,c,null,a,i)}))},a={524:0};n.f.miniCss=function(e,t){var n={12:1,13:1,31:1,52:1,69:1,122:1,147:1,176:1,186:1,205:1,215:1,254:1,317:1,322:1,332:1,349:1,364:1,412:1,423:1,635:1,671:1,775:1,806:1,819:1,862:1,880:1,925:1,933:1,935:1,942:1,984:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(t),c=new Error,m=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,a[1](c)}};n.l(r,m,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],c=o[1],m=o[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(m)var u=m(n)}for(t&&t(o);d<r.length;d++)i=r[d],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunktopic"]=self["webpackChunktopic"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7916)}));o=n.O(o)})();