"use strict";(self["webpackChunktopic"]=self["webpackChunktopic"]||[]).push([[31],{8749:function(e,t,n){n.d(t,{F:function(){return o}});const o=["未来的你，一定会感谢现在努力的自己。","越努力，越幸运。","每一个小进步，都是向成功迈进的一步。","你所追求的目标，永远不会辜负你的努力。","成功前，总有一段寂寞孤独的旅途，当走过黑暗与苦难的长长隧道之后，你或许会惊讶地发现，平凡如沙粒的你，不知不觉中已经成为一颗璀璨耀眼的珍珠。","你自己都不知道自己想要什么，命运又怎会给予你想要的东西呢？","有些风景，如果不站在高处，你永远体会不到它的魅力；有些路，如果你不去起程，你永远不知道它是多么美丽。","你改变不了环境，但你可以改变自己；你改变不了事实，但你可以改变态度；你改变不了过去，但你可以改变现在。","既然错过了星星，就别再错过月亮。","恭喜你，又进步了一点点"]},5819:function(e,t,n){n.d(t,{DJ:function(){return s},Ob:function(){return i},hB:function(){return l},hu:function(){return c},xp:function(){return u}});n(4114);function o(e,t){return Math.floor(Math.random()*(t-e+1))+e}function r(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}function a(e,t,n=10){t=t.toString();const a=[t],l=parseFloat(t);while(a.length<4){let e;if(t.includes("%")){const t=1+o(3,7)/10;e=Math.random()>.5?(l*t).toFixed(2)+"%":(l/t).toFixed(2)+"%"}else{const t=o(7,10)/10;e=(l*t).toFixed(0)}a.includes(e)||a.push(e)}const c=["A","B","C","D"],s=r(a).map(((e,t)=>({label:c[t],text:e})));return{question:e,answers:s,correctAnswer:s.find((e=>e.text===t))}}function l(){const e=[];for(let t=0;t<10;t++){const t=o(1e3,9999),n=o(1e3,9999),r=o(1e3,9999),l=o(1e3,9999),c=t+n+r+l;e.push(a(`${t} + ${n} + ${r} + ${l} = ?`,c))}return e}function c(){const e=[];for(let t=0;t<10;t++){const t=o(100,999),n=o(100,999),r=t-n;e.push(a(`${t} - ${n} = ?`,r))}return e}function s(){const e=[143,167,250,333,590,125,560,530],t=[];for(let n=0;n<10;n++){const n=o(100,999),r=e[o(0,e.length-1)],l=r+o(-3,3),c=n*l;t.push(a(`${n} * ${l} = ?`,c,.3))}return t}function u(){const e=[];for(let t=0;t<10;t++){const t=o(100,999),n=o(1,105),r=Math.round(t*n/100);e.push(a(`${t} * ${n}% = ?`,r))}return e}function i(){const e=[];for(let t=0;t<10;t++){const t=o(100,999),n=o(1e3,9999),r=(t/n*100).toFixed(2)+"%";e.push(a(`${t} / ${n} = ?`,r,.3))}return e}},3163:function(e,t,n){n.d(t,{A:function(){return m}});var o=n(6768),r=n(4232),a=n(144),l=n(1387),c=n(8749);const s={class:"integral-dialog"},u={key:0,class:"recive-box"},i={class:"use-time"},v={class:"time-text"},d={class:"number-topic"},h={class:"correct"},f={class:"count"},g={class:"incorrect"},p={class:"count"},b={class:"quotes"};var w={__name:"integralDialog",props:{integralShow:{type:Boolean,default:!1},integralType:{type:String,default:""},integralObj:{type:Object,default:()=>{}},contractCode:{type:String,default:""},type:{type:String,default:""}},emits:["close","receiveSubmit"],setup(e,{emit:t}){const n=e,w=t,k=(0,a.KR)(!1),C=((0,l.rd)(),(0,a.Kh)({obj:{},userName:"",error:!1,quotes:null}));(0,o.wB)((()=>n.integralShow),(e=>{if(k.value=e,e)switch(n.integralType){case"receive":C.obj=n.integralObj;const e=Math.floor(Math.random()*c.F.length);C.quotes=c.F[e];break;default:break}}));const m=()=>{w("close")},S=()=>{w("receiveSubmit")};return(t,n)=>{const a=(0,o.g2)("van-button"),l=(0,o.g2)("van-dialog");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.bF)(l,{show:k.value,"onUpdate:show":n[0]||(n[0]=e=>k.value=e),showConfirmButton:!1,closeOnClickOverlay:!0,onClose:m,class:(0,r.C4)({"receive-dia":"receive"==e.integralType})},{default:(0,o.k6)((()=>["receive"==e.integralType?((0,o.uX)(),(0,o.CE)("div",u,[n[7]||(n[7]=(0,o.Lk)("div",{class:"title"},[(0,o.Lk)("img",{src:"https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028020035987_32fba8d0-6ee2-4d01-85c8-55d9e6195cce.svg",alt:"大拇指"}),(0,o.eW)(" 太棒了！ ")],-1)),(0,o.Lk)("div",i,[n[1]||(n[1]=(0,o.eW)("用时：")),(0,o.Lk)("span",v,(0,r.v_)(C.obj.time),1)]),(0,o.Lk)("div",d,[(0,o.Lk)("span",h,[n[2]||(n[2]=(0,o.eW)("正确：")),(0,o.Lk)("span",f,(0,r.v_)(C.obj.correctCount),1),n[3]||(n[3]=(0,o.eW)("题"))]),(0,o.Lk)("span",g,[n[4]||(n[4]=(0,o.eW)("错误：")),(0,o.Lk)("span",p,(0,r.v_)(C.obj.incorrectCount),1),n[5]||(n[5]=(0,o.eW)("题"))])]),(0,o.Lk)("div",b,(0,r.v_)(C.quotes),1),(0,o.bF)(a,{class:"next-button",round:"",onClick:S},{default:(0,o.k6)((()=>n[6]||(n[6]=[(0,o.eW)("再试一次")]))),_:1}),(0,o.Lk)("img",{class:"close-icon",src:"https://scachealth.oss-cn-shanghai.aliyuncs.com/202409/b802b02b-727f-4dd1-8650-d08791cd14a0.png",alt:"",onClick:m})])):(0,o.Q3)("",!0)])),_:1},8,["show","class"])])}}},k=n(1241);const C=(0,k.A)(w,[["__scopeId","data-v-2eed15c9"]]);var m=C},4544:function(e,t,n){n.d(t,{A:function(){return u}});var o=n(6768);const r={class:"loading"};function a(e,t){return(0,o.uX)(),(0,o.CE)("div",r,t[0]||(t[0]=[(0,o.Lk)("div",{class:"loading-text"},"加载中……",-1)]))}var l=n(1241);const c={},s=(0,l.A)(c,[["render",a],["__scopeId","data-v-1bcfe278"]]);var u=s},4031:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var o=n(6768),r=n(4232),a=n(144),l=n(5819),c=n(3163),s=n(4544);const u={key:1,class:"pages"},i={class:"question-card"},v={class:"answers"},d=["onClick"];var h={__name:"addition",setup(e){const t=(0,a.KR)([]),n=(0,a.KR)([]),h=(0,a.KR)(0),f=(0,a.KR)(0),g=(0,a.KR)(0),p=(0,a.KR)(0),b=(0,a.KR)(null),w=(0,a.Kh)({show:!0,integralShow:!1,integralObj:{}});(0,o.sV)((()=>{S()})),(0,o.hi)((()=>{clearInterval(b)}));const k=()=>{h.value=Date.now(),b.value=setInterval((()=>{f.value=Math.floor((Date.now()-h.value)/1e3)}),1e3)},C=()=>{clearInterval(b.value),b.value=null},m=(0,o.EW)((()=>{const e=Math.floor(f.value/3600),t=Math.floor(f.value%3600/60),n=f.value%60;let o="";return e>0&&(o+=`${e}小时`),(t>0||e>0)&&(o+=`${String(t).padStart(2,"0")}分钟`),o+=`${String(n).padStart(2,"0")}秒`,o})),S=()=>{w.show=!0,C(),t.value=(0,l.hB)(),n.value=Array(t.value.length).fill(null),g.value=0,p.value=0,f.value=0,k(),setTimeout((()=>{j()}),100),w.show=!1},y=(e,o)=>{if(n.value[e])return;n.value[e]=o.label;const r=o.text===t.value[e].correctAnswer.text;r?g.value++:(p.value++,t.value[e].correctAnswer.isCorrectAnswer=!0),g.value+p.value===t.value.length&&(C(),w.integralObj.time=m.value,w.integralObj.correctCount=g.value,w.integralObj.incorrectCount=p.value,w.integralShow=!0,console.log("触发",w.integralShow))},_=(e,o)=>{const r=n.value[e]===o.label,a=o.text===t.value[e].correctAnswer.text;return r?a?"correct":"incorrect":t.value[e].correctAnswer.isCorrectAnswer&&o===t.value[e].correctAnswer?"correct":""},A=()=>{w.integralShow=!1},x=()=>{w.integralShow=!1,S()},j=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})};return(e,n)=>((0,o.uX)(),(0,o.CE)("div",null,[w.show?((0,o.uX)(),(0,o.Wv)(s.A,{key:0})):((0,o.uX)(),(0,o.CE)("div",u,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.value,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t,class:"question"},[(0,o.Lk)("div",i,(0,r.v_)(e.question),1),(0,o.Lk)("div",v,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.answers,((e,n)=>((0,o.uX)(),(0,o.CE)("div",{class:(0,r.C4)(["answers-item",_(t,e)]),key:n,onClick:n=>y(t,e),block:""},[(0,o.Lk)("span",null,(0,r.v_)(e.text),1)],10,d)))),128))])])))),128)),(0,o.bF)(c.A,{integralShow:w.integralShow,integralObj:w.integralObj,onReceiveSubmit:x,integralType:"receive",onClose:A},null,8,["integralShow","integralObj"])]))]))}},f=n(1241);const g=(0,f.A)(h,[["__scopeId","data-v-186982c5"]]);var p=g}}]);