"use strict";(self["webpackChunktopic"]=self["webpackChunktopic"]||[]).push([[966],{8749:function(e,a,l){l.d(a,{F:function(){return t}});const t=["未来的你，一定会感谢现在努力的自己。","越努力，越幸运。","每一个小进步，都是向成功迈进的一步。","你所追求的目标，永远不会辜负你的努力。","成功前，总有一段寂寞孤独的旅途，当走过黑暗与苦难的长长隧道之后，你或许会惊讶地发现，平凡如沙粒的你，不知不觉中已经成为一颗璀璨耀眼的珍珠。","你自己都不知道自己想要什么，命运又怎会给予你想要的东西呢？","有些风景，如果不站在高处，你永远体会不到它的魅力；有些路，如果你不去起程，你永远不知道它是多么美丽。","你改变不了环境，但你可以改变自己；你改变不了事实，但你可以改变态度；你改变不了过去，但你可以改变现在。","既然错过了星星，就别再错过月亮。","恭喜你，又进步了一点点"]},7966:function(e,a,l){l.r(a),l.d(a,{default:function(){return E}});var t=l(6768),u=l(4232),s=l(5130),n=l(144),r=l(8749);const o={class:"pages"},v={key:0,class:"question"},c={class:"question-card"},i={class:"question-item"},d={key:0},p={key:1,class:"question"},k={class:"use-time"},m={class:"time-text"},h={class:"number-topic"},f={class:"correct"},b={class:"count"},w={class:"incorrect"},_={class:"count"},C={key:0,class:"correct"},L={key:1,class:"incorrect"},y={class:"btn"},K={class:"day-quotes"},R={class:"tips"};var W={__name:"twoDigitSubtraction",setup(e){const a=(0,n.KR)(!1),l=(0,n.KR)(10),W=(0,n.KR)(0),g=(0,n.KR)([]),A=(0,n.KR)(""),E=(0,n.KR)(0),x=(0,n.KR)(0),M=(0,n.KR)(!1),F=[{text:"10题",value:10},{text:"15题",value:15},{text:"20题",value:20}],q=(0,n.KR)(0),X=(0,n.KR)(0),V=(0,n.KR)(null),I=(0,n.KR)("10题"),S=(0,n.Kh)({quotes:null});(0,t.sV)((()=>{O()})),(0,t.hi)((()=>{clearInterval(V)}));const D=()=>{q.value=Date.now(),V.value=setInterval((()=>{X.value=Math.floor((Date.now()-q.value)/1e3)}),1e3)},Q=()=>{clearInterval(V.value),V.value=null},U=(0,t.EW)((()=>{const e=Math.floor(X.value/3600),a=Math.floor(X.value%3600/60),l=X.value%60;let t="";return e>0&&(t+=`${e}小时`),(a>0||e>0)&&(t+=`${String(a).padStart(2,"0")}分钟`),t+=`${String(l).padStart(2,"0")}秒`,t})),$=(0,t.EW)((()=>l.value)),j=()=>{const e=Math.floor(90*Math.random())+10,a=Math.floor(90*Math.random())+10,l=e-a;return{num1:e,num2:a,correctAnswer:l,userAnswer:null,isCorrect:!1}},O=()=>{Q();const e=Math.floor(Math.random()*r.F.length);S.quotes=r.F[e],g.value=Array.from({length:$.value},(()=>j())),W.value=0,A.value="",E.value=0,x.value=0,M.value=!1,D()},z=()=>{if(""===A.value)return;const e=g.value[W.value],a=parseInt(A.value,10);e.userAnswer=e.correctAnswer<0?-Math.abs(a):a,e.isCorrect=e.userAnswer===e.correctAnswer,e.isCorrect?E.value++:x.value++,A.value="",W.value++,W.value>=$.value&&(Q(),M.value=!0)},B=(0,t.EW)((()=>g.value[W.value]||{})),G=(0,t.EW)((()=>B.value.correctAnswer<0?"-":"")),H=({selectedOptions:e})=>{l.value=e[0].value,I.value=e[0].text,a.value=!1,O()},J=()=>a.value=!1;return(e,l)=>{const n=(0,t.g2)("van-field"),r=(0,t.g2)("van-button"),q=(0,t.g2)("van-picker"),X=(0,t.g2)("van-popup");return(0,t.uX)(),(0,t.CE)("div",o,[(0,t.bF)(n,{modelValue:I.value,"onUpdate:modelValue":l[0]||(l[0]=e=>I.value=e),"is-link":"",readonly:"",label:"题数",placeholder:"请选择",onClick:l[1]||(l[1]=e=>a.value=!0),style:{"border-radius":"10px"}},null,8,["modelValue"]),W.value<$.value&&!M.value?((0,t.uX)(),(0,t.CE)("div",v,[(0,t.Lk)("div",c,"题目 "+(0,u.v_)(W.value+1)+"/"+(0,u.v_)($.value),1),(0,t.Lk)("div",i,[(0,t.eW)((0,u.v_)(B.value.num1)+" - "+(0,u.v_)(B.value.num2)+" = ",1),B.value.correctAnswer<0?((0,t.uX)(),(0,t.CE)("span",d,"-")):(0,t.Q3)("",!0),(0,t.bF)(n,{modelValue:A.value,"onUpdate:modelValue":l[2]||(l[2]=e=>A.value=e),placeholder:G.value,type:"number",onKeyup:(0,s.jR)(z,["enter"]),style:{"border-bottom":"1px solid #000000",width:"100px"}},null,8,["modelValue","placeholder"])]),l[4]||(l[4]=(0,t.Lk)("div",{class:"tips-text"},"注：负号会帮你写入，你只需要输入数字就行了",-1))])):(0,t.Q3)("",!0),M.value?((0,t.uX)(),(0,t.CE)("div",p,[l[11]||(l[11]=(0,t.Lk)("div",{class:"title"},[(0,t.Lk)("img",{src:"https://scachealth.oss-accelerate.aliyuncs.com/202410/20241028020035987_32fba8d0-6ee2-4d01-85c8-55d9e6195cce.svg",alt:"大拇指"}),(0,t.eW)(" 太棒了！ ")],-1)),(0,t.Lk)("div",k,[l[5]||(l[5]=(0,t.eW)("用时：")),(0,t.Lk)("span",m,(0,u.v_)(U.value),1)]),(0,t.Lk)("div",h,[(0,t.Lk)("span",f,[l[6]||(l[6]=(0,t.eW)("正确：")),(0,t.Lk)("span",b,(0,u.v_)(E.value),1),l[7]||(l[7]=(0,t.eW)("题"))]),(0,t.Lk)("span",w,[l[8]||(l[8]=(0,t.eW)("错误：")),(0,t.Lk)("span",_,(0,u.v_)(x.value),1),l[9]||(l[9]=(0,t.eW)("题"))])]),(0,t.Lk)("div",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(g.value,((e,a)=>((0,t.uX)(),(0,t.CE)("div",{key:a,class:"list-item"},[(0,t.eW)((0,u.v_)(e.num1)+" - "+(0,u.v_)(e.num2)+" = "+(0,u.v_)(e.userAnswer)+" ",1),e.isCorrect?((0,t.uX)(),(0,t.CE)("span",C,"正确")):((0,t.uX)(),(0,t.CE)("span",L,"错误 (正确答案: "+(0,u.v_)(e.correctAnswer)+")",1))])))),128))]),(0,t.Lk)("div",y,[(0,t.bF)(r,{class:"next-button",type:"primary",onClick:O},{default:(0,t.k6)((()=>l[10]||(l[10]=[(0,t.eW)("重新开始")]))),_:1})])])):(0,t.Q3)("",!0),(0,t.Lk)("div",K,[l[12]||(l[12]=(0,t.Lk)("div",{class:"title"},"加油站",-1)),(0,t.Lk)("div",R,(0,u.v_)(S.quotes),1)]),(0,t.bF)(X,{show:a.value,"onUpdate:show":l[3]||(l[3]=e=>a.value=e),round:"",position:"bottom"},{default:(0,t.k6)((()=>[(0,t.bF)(q,{title:"请选择",columns:F,onConfirm:H,onCancel:J})])),_:1},8,["show"])])}}},g=l(1241);const A=(0,g.A)(W,[["__scopeId","data-v-e5aa3fa2"]]);var E=A}}]);