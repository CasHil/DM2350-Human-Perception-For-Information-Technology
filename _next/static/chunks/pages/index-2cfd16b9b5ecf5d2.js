(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2537)}])},2537:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return U}});var r,i=t(5893),a=t(7294),s=t(214),o=t.n(s),u=t(7568),l=t(655),c=(0,t(9802).eI)("https://otgssckkxbegyzkhcywj.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90Z3NzY2treGJlZ3l6a2hjeXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMxNjQzMzQsImV4cCI6MTk3ODc0MDMzNH0.XOAXS8jcmyJGyxBy0nyEN-YeYBVxpeYM0SAxNrg5Lqs"),$=t(7632);function d(){return window.localStorage.getItem("uuid")}function m(){var e=(0,a.useState)(!1),n=(e[0],e[1]),t=(0,a.useState)(!1);function r(){return(r=(0,u.Z)(function(){var e,n,t,r,i;return(0,l.__generator)(this,function(a){switch(a.label){case 0:var s;return a.trys.push([0,2,,3]),e=(s=(0,$.Z)(),localStorage.setItem("uuid",s),s),n=((t={}).created_at=new Date,t.person_id=e,t),r={},[4,c.from("users").insert([n],(r.returning="minimal",r))];case 1:return a.sent(),[3,3];case 2:return i=a.sent(),console.error(i),[3,3];case 3:return[2]}})})).apply(this,arguments)}t[0],t[1],(0,a.useEffect)(function(){try{if(n(!0),!d()){!function(){return r.apply(this,arguments)}();return}}finally{n(!1)}},[])}function p(e){return window.localStorage.setItem("question_number",e)}function f(){var e=window.localStorage.getItem("question_number");return e?parseInt(e):null}var h=t(5675),g=t.n(h);function _(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{style:{marginBottom:"1rem"},children:["Thanks for participating in the experiment! Enjoy the rest of your day!"," "]}),(0,i.jsx)(g(),{alt:"Humorous video of a dog doing science experiments",src:"/DM2350/200.gif",width:267,height:200})]})}var y=t(6240),w=t(603),v={male:"Male",female:"Female",nonBinary:"Non-binary",notListed:"Not listed / Prefer not to say"},b=t(7546),x=t(7511),j=t(2841),S=t(6156),Z=t(5084);function k(e){var n=function(e){s(e.target.value)},t=(0,a.useState)(null),r=t[0],s=t[1];function o(){return(o=(0,u.Z)(function(){var n,t;return(0,l.__generator)(this,function(i){switch(i.label){case 0:return n={},t={},[4,c.from("user_information").update((n.gender=r,n)).match((t.person_id=d(),t))];case 1:return i.sent(),e.updateQuestion(),[2]}})})).apply(this,arguments)}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.Z,{id:"demo-radio-buttons-group-label",children:"Gender"}),(0,i.jsx)(x.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"radio-buttons-group",onChange:n,style:{marginBottom:"1rem"},children:Object.entries(v).map(function(e){var n=(0,w.Z)(e,2),t=n[0],r=n[1];return(0,i.jsx)(j.Z,{value:t,control:(0,i.jsx)(S.Z,{required:!0}),label:r},t)})}),(0,i.jsx)(Z.Z,{onClick:function(){return o.apply(this,arguments)},variant:"contained",disabled:null===r,children:"Next"})]})}var I=t(1799),N=t(754),q=t(6070),R=t(5666),C=t(1540),D=t.n(C),z=JSON.parse('{"1":"/SwingRatios/100bpm_swing1.wav","2":"/SwingRatios/100bpm_swing2.wav","3":"/SwingRatios/100bpm_swing3.wav","4":"/SwingRatios/150bpm_swing1.wav","5":"/SwingRatios/150bpm_swing2.wav","6":"/SwingRatios/150bpm_swing3.wav","7":"/SwingRatios/200bpm_swing1.wav","8":"/SwingRatios/200bpm_swing2.wav","9":"/SwingRatios/200bpm_swing3.wav","10":"/SwingRatios/250bpm_swing1.wav","11":"/SwingRatios/250bpm_swing2.wav","12":"/SwingRatios/250bpm_swing3.wav","13":"/SwingRatios/300bpm_swing1.wav","14":"/SwingRatios/300bpm_swing2.wav","15":"/SwingRatios/300bpm_swing3.wav","16":"/SoloDelays/200bpm_delay1_-65ms.wav","17":"/SoloDelays/200bpm_delay2_-53ms.wav","18":"/SoloDelays/200bpm_delay3_53ms.wav","19":"/SoloDelays/200bpm_delay4_60ms.wav","20":"/SoloDelays/200bpm_delay5_78ms.wav","21":"/SoloDelays/delay1_-126ms.wav","22":"/SoloDelays/delay2_-84ms.wav","23":"/SoloDelays/delay3_84ms.wav","24":"/SoloDelays/delay4_118ms.wav","25":"/SoloDelays/delay5_151ms.wav"}'),Q={1:"Dislike",2:"Slightly dislike",3:"Neutral",4:"Slightly like",5:"Like"};function E(){var e=window.localStorage.getItem("remaining_questions");return e?e.split(","):null}function F(e){localStorage.setItem("remaining_questions",e.toString())}function B(e){var n=function(e){s(e.target.value)},t=(0,a.useState)(null),r=t[0],s=t[1],o=(0,a.useState)(),$=o[0],m=o[1],p=(0,a.useState)(""),f=p[0],h=p[1],g=(0,a.useState)(0),_=g[0],y=g[1],v=(0,a.useState)(!1),k=v[0],C=v[1];function B(){return(B=(0,u.Z)(function(){var n,t,i,a;return(0,l.__generator)(this,function(o){switch(o.label){case 0:return C(!0),n=((t={}).created_at=new Date,t.person_id=d(),t.answer=r,t.question_number=$,t),i={},[4,c.from("answers").insert([n],(i.returning="minimal",i))];case 1:var u;return o.sent(),y(_+1),u=$,E()&&F(E().filter(function(e){return e!=u})),s(null),(a=E())&&a.length>0&&M(),e.updateQuestion(),C(!1),[2]}})})).apply(this,arguments)}(0,a.useEffect)(function(){var e;C(!0),console.log(k),!E()&&F(e=Array.from(Array(25).keys()).map(function(e){return e+1})),y(25-E().length),M(),C(!1)},[]);var M=(0,a.useCallback)(function(){var e=E(),n=e[e.length*Math.random()<<0];return m(n),h("".concat("DM2350").concat(z[n])),z[n]},[]);return(0,i.jsxs)(i.Fragment,{children:[k?(0,i.jsx)(N.Z,{}):(0,i.jsx)(D(),{src:f,controls:!0,style:{marginBottom:"1rem"}}),(0,i.jsx)(b.Z,{id:"demo-radio-buttons-group-label",children:"Preference"}),(0,i.jsx)(x.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"radio-buttons-group",onChange:n,style:{marginBottom:"1rem"},value:r,children:Object.entries(Q).map(function(e){var n=(0,w.Z)(e,2),t=n[0],r=n[1];return(0,i.jsx)(j.Z,{value:t,control:(0,i.jsx)(S.Z,{required:!0}),label:r},t)})}),(0,i.jsx)(Z.Z,{onClick:function(){return B.apply(this,arguments)},variant:"contained",style:{marginBottom:"1rem"},disabled:null===r,children:"Next"}),(0,i.jsx)(q.Z,(0,I.Z)({variant:"determinate",value:_/25*100},e)),(0,i.jsx)(R.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(_/25*100),"%")})]})}var M=t(1628);function J(e){var n=function(e){s(e.target.value)},t=(0,a.useState)(null),r=t[0],s=t[1];function o(){return(o=(0,u.Z)(function(){var n,t,i;return(0,l.__generator)(this,function(a){switch(a.label){case 0:return n=((t={}).created_at=new Date,t.person_id=d(),t.age=r,t.gender=0,t.hours_listened=0,t),i={},[4,c.from("user_information").insert([n],(i.returning="minimal",i))];case 1:return a.sent(),e.updateQuestion(),[2]}})})).apply(this,arguments)}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.Z,{required:!0,id:"age",label:"Age",variant:"outlined",onChange:n,style:{marginBottom:"1rem"}}),(0,i.jsx)(Z.Z,{onClick:function(){return o.apply(this,arguments)},variant:"contained",disabled:null===r,children:"Next"})]})}function O(e){var n=function(e){s(e.target.value)},t=(0,a.useState)(null),r=t[0],s=t[1];function o(){return(o=(0,u.Z)(function(){var n,t;return(0,l.__generator)(this,function(i){switch(i.label){case 0:return n={},t={},[4,c.from("user_information").update((n.hours_listened=r,n)).match((t.person_id=d(),t))];case 1:return i.sent(),e.updateQuestion(),[2]}})})).apply(this,arguments)}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.Z,{required:!0,id:"hours_listened",label:"Hours",variant:"outlined",onChange:n,style:{marginBottom:"1rem"}}),(0,i.jsx)(Z.Z,{onClick:function(){return o.apply(this,arguments)},variant:"contained",disabled:null===r,children:"Next"})]})}function X(e){var n,t,r;return(0,i.jsx)(y.Z,{style:{margin:"auto",minWidth:"33%"},children:(n=e.questionNumber-1,t=e.updateQuestion,r=e.repetition,[(0,i.jsx)(J,{updateQuestion:t}),(0,i.jsx)(k,{updateQuestion:t}),(0,i.jsx)(O,{updateQuestion:t}),(0,i.jsx)(B,{updateQuestion:t,repetition:r}),][n])})}function P(){var e=function(){m+1>t.repetitions?($(o+1),p(o+1),h(1)):h(m+1)},n=(0,a.useState)(""),t=n[0],r=n[1],s=(0,a.useState)(1),o=s[0],$=s[1],d=(0,a.useState)(1),m=d[0],h=d[1];return(0,a.useEffect)(function(){function e(){return(e=(0,u.Z)(function(){var e,n;return(0,l.__generator)(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,c.from("questions").select().eq("question_number",o)];case 1:return r((e=t.sent()).data[0]),[3,3];case 2:return n=t.sent(),console.error(n),[3,3];case 3:return[2]}})})).apply(this,arguments)}!function(){return e.apply(this,arguments)}()},[o]),(0,a.useEffect)(function(){f()?$(f()):(p(1),$(1))},[]),(0,i.jsx)(i.Fragment,{children:o>4?(0,i.jsx)(_,{}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:t.question}),(0,i.jsx)(X,{questionNumber:o,updateQuestion:e,repetition:m})]})})}var Y=t(9762),T=t(1927),A=t(793),G=t(4412),H=t(9008),L=t.n(H),V=(0,Y.Z)({palette:{mode:"dark"}});function U(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(L(),{children:[(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)("title",{children:"Perceptual preferences for groove patterns in jazz"}),(0,i.jsx)("meta",{name:"description",content:"Experiment for DM2350 at the Royal Institute of Technology in Stockholm"}),(0,i.jsx)("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"}),(0,i.jsx)("link",{rel:"manifest",href:"/manifest.json"})]}),(0,i.jsxs)(T.Z,{theme:V,children:[(0,i.jsx)(A.ZP,{}),(0,i.jsxs)("div",{className:o().container,style:{padding:"50px 0 100px 0"},children:[(0,i.jsx)("h1",{children:"Perceptual preferences for groove patterns in jazz"}),(0,i.jsx)("p",{children:"Thank you for participating in our study about perceptual preferences in jazz. Our goal in this research is to find out the preferences of listeners, varying specific aspects of the song that you will be listening to. First you will be asked for some statistics about yourself. After that, you will listen to 25 samples, which you will have to rate on a scale from 1 to 5. All your data is completely anonymous and will be stored only for the duration of the course, after which it will be discarded."}),(0,i.jsx)(G.Z,{}),(0,i.jsx)(m,{}),(0,i.jsx)(P,{})]})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY"}}},function(e){e.O(0,[575,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);