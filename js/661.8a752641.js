"use strict";(self["webpackChunktopic"]=self["webpackChunktopic"]||[]).push([[661],{8749:function(e,a,l){l.d(a,{F:function(){return u}});const u=["未来的你，一定会感谢现在努力的自己。","越努力，越幸运。","每一个小进步，都是向成功迈进的一步。","你所追求的目标，永远不会辜负你的努力。","成功前，总有一段寂寞孤独的旅途，当走过黑暗与苦难的长长隧道之后，你或许会惊讶地发现，平凡如沙粒的你，不知不觉中已经成为一颗璀璨耀眼的珍珠。","你自己都不知道自己想要什么，命运又怎会给予你想要的东西呢？","有些风景，如果不站在高处，你永远体会不到它的魅力；有些路，如果你不去起程，你永远不知道它是多么美丽。","你改变不了环境，但你可以改变自己；你改变不了事实，但你可以改变态度；你改变不了过去，但你可以改变现在。","既然错过了星星，就别再错过月亮。","恭喜你，又进步了一点点"]},4544:function(e,a,l){l.d(a,{A:function(){return r}});var u=l(6768);const t={class:"loading"};function s(e,a){return(0,u.uX)(),(0,u.CE)("div",t,a[0]||(a[0]=[(0,u.Lk)("div",{class:"loading-text"},"加载中……",-1)]))}var n=l(1241);const v={},o=(0,n.A)(v,[["render",s],["__scopeId","data-v-1bcfe278"]]);var r=o},4661:function(e,a,l){l.r(a),l.d(a,{default:function(){return x}});var u=l(6768),t=l(4232),s=l(5130),n=l(144),v=l(8749),o=l(4544);const r={key:1,class:"pages"},c={key:0,class:"question"},i={class:"question-card"},d={class:"question-item"},p={key:1,class:"question"},k={class:"use-time"},m={class:"time-text"},h={class:"number-topic"},f={class:"correct"},b={class:"count"},_={class:"incorrect"},w={class:"count"},C={key:0,class:"correct"},L={key:1,class:"incorrect"},y={class:"btn"},K={class:"day-quotes"},W={class:"tips"};var R={__name:"fraction",setup(e){const a=(0,n.KR)(!1),l=(0,n.KR)(10),R=(0,n.KR)(0),g=(0,n.KR)([]),E=(0,n.KR)(""),x=(0,n.KR)(0),A=(0,n.KR)(0),F=(0,n.KR)(!1),X=[{text:"10题",value:10},{text:"15题",value:15},{text:"20题",value:20}],q=(0,n.KR)(0),I=(0,n.KR)(0),M=(0,n.KR)(null),V=(0,n.KR)("10题"),S=(0,n.Kh)({show:!0,quotes:null}),U=()=>{q.value=Date.now(),M.value=setInterval((()=>{I.value=Math.floor((Date.now()-q.value)/1e3)}),1e3)},$=()=>{clearInterval(M.value),M.value=null},D=(0,u.EW)((()=>{const e=Math.floor(I.value/3600),a=Math.floor(I.value%3600/60),l=I.value%60;let u="";return e>0&&(u+=`${e}小时`),(a>0||e>0)&&(u+=`${String(a).padStart(2,"0")}分钟`),u+=`${String(l).padStart(2,"0")}秒`,u})),Q=()=>{S.show=!0,$();const e=Math.floor(Math.random()*v.F.length);S.quotes=v.F[e],g.value=O(l.value),R.value=0,E.value="",x.value=0,A.value=0,F.value=!1,I.value=0,U(),S.show=!1},j=[[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[2,3],[3,4],[2,7],[3,7],[5,6],[2,9],[1,15],[1,16],[1,17],[1,18],[1,19],[3,8],[5,8]],O=e=>{const a=[...j].sort((()=>Math.random()-.5));return a.slice(0,e).map((([e,a])=>({num1:e,num2:a,correctAnswer:(e/a*100).toFixed(1),userAnswer:null,isCorrect:!1})))},z=()=>{if(""===E.value)return;const e=g.value[R.value];e.userAnswer=parseFloat(E.value);const a=Math.abs(e.userAnswer-e.correctAnswer)<=.1;e.isCorrect=a,a?x.value++:A.value++,E.value="",R.value++,R.value>=l.value&&(clearInterval(M.value),F.value=!0)},B=(0,u.EW)((()=>g.value[R.value]||{})),G=(0,u.EW)((()=>l.value)),H=({selectedOptions:e})=>{l.value=e[0].value,V.value=e[0].text,a.value=!1,Q()},J=()=>a.value=!1;return(0,u.sV)((()=>{Q()})),(0,u.hi)((()=>{clearInterval(M)})),(e,l)=>{const n=(0,u.g2)("van-field"),v=(0,u.g2)("van-button"),q=(0,u.g2)("van-picker"),I=(0,u.g2)("van-popup");return(0,u.uX)(),(0,u.CE)("div",null,[S.show?((0,u.uX)(),(0,u.Wv)(o.A,{key:0})):((0,u.uX)(),(0,u.CE)("div",r,[(0,u.bF)(n,{modelValue:V.value,"onUpdate:modelValue":l[0]||(l[0]=e=>V.value=e),"is-link":"",readonly:"",label:"题数",placeholder:"请选择",onClick:l[1]||(l[1]=e=>a.value=!0),style:{"border-radius":"10px"}},null,8,["modelValue"]),R.value<G.value&&!F.value?((0,u.uX)(),(0,u.CE)("div",c,[(0,u.Lk)("div",i,"题目 "+(0,t.v_)(R.value+1)+"/"+(0,t.v_)(G.value),1),(0,u.Lk)("div",d,[(0,u.eW)((0,t.v_)(B.value.num1)+" / "+(0,t.v_)(B.value.num2)+" = ",1),(0,u.bF)(n,{modelValue:E.value,"onUpdate:modelValue":l[2]||(l[2]=e=>E.value=e),type:"number",onKeyup:(0,s.jR)(z,["enter"]),style:{"border-bottom":"1px solid #000000",width:"100px"}},null,8,["modelValue"]),l[4]||(l[4]=(0,u.eW)(" % "))])])):(0,u.Q3)("",!0),F.value?((0,u.uX)(),(0,u.CE)("div",p,[l[11]||(l[11]=(0,u.Lk)("div",{class:"title"},[(0,u.Lk)("img",{src:"https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028020035987_32fba8d0-6ee2-4d01-85c8-55d9e6195cce.svg",alt:"大拇指"}),(0,u.eW)(" 太棒了！ ")],-1)),(0,u.Lk)("div",k,[l[5]||(l[5]=(0,u.eW)("用时：")),(0,u.Lk)("span",m,(0,t.v_)(D.value),1)]),(0,u.Lk)("div",h,[(0,u.Lk)("span",f,[l[6]||(l[6]=(0,u.eW)("正确：")),(0,u.Lk)("span",b,(0,t.v_)(x.value),1),l[7]||(l[7]=(0,u.eW)("题"))]),(0,u.Lk)("span",_,[l[8]||(l[8]=(0,u.eW)("错误：")),(0,u.Lk)("span",w,(0,t.v_)(A.value),1),l[9]||(l[9]=(0,u.eW)("题"))])]),(0,u.Lk)("div",null,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(g.value,((e,a)=>((0,u.uX)(),(0,u.CE)("div",{key:a,class:"list-item"},[(0,u.eW)((0,t.v_)(e.num1)+" / "+(0,t.v_)(e.num2)+" = "+(0,t.v_)(e.userAnswer)+"% ",1),e.isCorrect?((0,u.uX)(),(0,u.CE)("span",C,"正确")):((0,u.uX)(),(0,u.CE)("span",L,"错误 (正确答案: "+(0,t.v_)(e.correctAnswer)+"%)",1))])))),128))]),(0,u.Lk)("div",y,[(0,u.bF)(v,{class:"next-button",type:"primary",onClick:Q},{default:(0,u.k6)((()=>l[10]||(l[10]=[(0,u.eW)("重新开始")]))),_:1})])])):(0,u.Q3)("",!0),(0,u.Lk)("div",K,[l[12]||(l[12]=(0,u.Lk)("div",{class:"title"},"加油站",-1)),(0,u.Lk)("div",W,(0,t.v_)(S.quotes),1)]),(0,u.bF)(I,{show:a.value,"onUpdate:show":l[3]||(l[3]=e=>a.value=e),round:"",position:"bottom"},{default:(0,u.k6)((()=>[(0,u.bF)(q,{title:"请选择",columns:X,onConfirm:H,onCancel:J})])),_:1},8,["show"])]))])}}},g=l(1241);const E=(0,g.A)(R,[["__scopeId","data-v-5b1aac5c"]]);var x=E}}]);