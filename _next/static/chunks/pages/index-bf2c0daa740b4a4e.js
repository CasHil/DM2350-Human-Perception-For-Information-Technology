(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8220)}])},8220:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r,a=n(5893),i=n(7294),s=n(214),o=n.n(s),u=n(7568),l=n(655),$=(0,n(9802).eI)("https://otgssckkxbegyzkhcywj.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90Z3NzY2treGJlZ3l6a2hjeXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMxNjQzMzQsImV4cCI6MTk3ODc0MDMzNH0.XOAXS8jcmyJGyxBy0nyEN-YeYBVxpeYM0SAxNrg5Lqs"),c=n(7632);function d(){return window.localStorage.getItem("uuid")}function m(){return(m=(0,u.Z)(function(e){var t,n,r,a;return(0,l.__generator)(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,$.from("users").select().eq("person_id",e)];case 1:if(n=(t=i.sent()).data,r=t.error)throw r;if(0===n.length)return window.localStorage.removeItem("uuid"),[2,!1];return[2,!0];case 2:return a=i.sent(),console.error(a),[3,3];case 3:return[2]}})})).apply(this,arguments)}function p(){var e=(0,i.useState)(!1),t=(e[0],e[1]),n=(0,i.useState)(!1);function r(){return(r=(0,u.Z)(function(){var e,t,n,r,a;return(0,l.__generator)(this,function(i){switch(i.label){case 0:var s;return i.trys.push([0,2,,3]),e=(s=(0,c.Z)(),localStorage.setItem("uuid",s),s),t=((n={}).created_at=new Date,n.person_id=e,n),r={},[4,$.from("users").insert([t],(r.returning="minimal",r))];case 1:return i.sent(),[3,3];case 2:return a=i.sent(),console.error(a),[3,3];case 3:return[2]}})})).apply(this,arguments)}n[0],n[1],(0,i.useEffect)(function(){try{if(t(!0),!d()||!function(e){return m.apply(this,arguments)}()){(function e(){return r.apply(this,arguments)})();return}}finally{t(!1)}},[])}var f=n(5675),h=n.n(f);function _(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h2",{style:{marginBottom:"20px"},children:["Thanks for participating in the experiment! Enjoy the rest of your day!"," "]}),(0,a.jsx)(h(),{alt:"Humorous video of a dog doing science experiments",src:"/DM2350/200.gif",width:267,height:200})]})}var g=n(6240),y=n(828),w={male:"Male",female:"Female",nonBinary:"Non-binary",notListed:"Not listed / Prefer not to say"},b=n(7546),v=n(7511),x=n(2841),j=n(6156),S=n(5084);function Z(e){var t=function(e){s(e.target.value)},n=(0,i.useState)(null),r=n[0],s=n[1];function o(){return(o=(0,u.Z)(function(){var t,n;return(0,l.__generator)(this,function(a){switch(a.label){case 0:return t={},n={},[4,$.from("user_information").update((t.gender=r,t)).match((n.person_id=d(),n))];case 1:return a.sent(),e.updateQuestion(),[2]}})})).apply(this,arguments)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.Z,{id:"demo-radio-buttons-group-label",children:"Gender"}),(0,a.jsx)(v.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"radio-buttons-group",onChange:t,style:{marginBottom:"1rem"},children:Object.entries(w).map(function(e){var t=(0,y.Z)(e,2),n=t[0],r=t[1];return(0,a.jsx)(x.Z,{value:n,control:(0,a.jsx)(j.Z,{required:!0}),label:r},n)})}),(0,a.jsx)(S.Z,{onClick:function(){return o.apply(this,arguments)},variant:"contained",disabled:null===r,children:"Next"})]})}var N=n(1799),k=n(9815),I=n(754),C=n(6070),q=n(5666),R=n(1540),D=n.n(R),Q=JSON.parse('{"1":"/SwingRatios/100bpm_swing1.wav","2":"/SwingRatios/100bpm_swing2.wav","3":"/SwingRatios/100bpm_swing3.wav","4":"/SwingRatios/150bpm_swing1.wav","5":"/SwingRatios/150bpm_swing2.wav","6":"/SwingRatios/150bpm_swing3.wav","7":"/SwingRatios/200bpm_swing1.wav","8":"/SwingRatios/200bpm_swing2.wav","9":"/SwingRatios/200bpm_swing3.wav","10":"/SwingRatios/300bpm_swing1.wav","11":"/SwingRatios/300bpm_swing2.wav","12":"/SwingRatios/300bpm_swing3.wav","13":"/SoloDelays/200bpm_delay1_-65ms.wav","14":"/SoloDelays/200bpm_delay2_-53ms.wav","15":"/SoloDelays/200bpm_delay3_53ms.wav","16":"/SoloDelays/200bpm_delay4_60ms.wav","17":"/SoloDelays/200bpm_delay5_78ms.wav","18":"/SoloDelays/delay1_-126ms.wav","19":"/SoloDelays/delay2_-84ms.wav","20":"/SoloDelays/delay3_84ms.wav","21":"/SoloDelays/delay4_118ms.wav","22":"/SoloDelays/delay5_151ms.wav"}');function z(e){var t=function(e){s(e.target.value)},n=(0,i.useState)(null),r=n[0],s=n[1],o=(0,i.useState)(),c=o[0],m=o[1],p=(0,i.useState)(""),f=p[0],h=p[1],_=(0,i.useState)(0),g=_[0],y=_[1],w=(0,i.useState)(Object.getOwnPropertyNames(Q)),Z=w[0],R=w[1],z=(0,i.useState)(!1),B=z[0],F=z[1];function E(){return(E=(0,u.Z)(function(){var t,n,a;return(0,l.__generator)(this,function(i){switch(i.label){case 0:return F(!0),t=((n={}).created_at=new Date,n.person_id=d(),n.answer=r,n.question_number=c,n),a={},[4,$.from("answers").insert([t],(a.returning="minimal",a))];case 1:return i.sent(),e.updateQuestion(),y(g+1),s(null),M(),F(!1),[2]}})})).apply(this,arguments)}(0,i.useEffect)(function(){F(!0),M(),F(!1)},[M]);var M=(0,i.useCallback)(function(){var e=Z.length*Math.random()<<0;return R(function(t){return(0,k.Z)(t).filter(function(t){return t!=e})}),m(e),h("/DM2350".concat(Q[e])),console.log("Random number: ".concat(e)),console.log("Random file: ".concat(Q[e])),Q[e]},[]);return(0,a.jsxs)(a.Fragment,{children:[!B&&(0,a.jsx)(D(),{src:f,controls:!0,style:{marginBottom:"1rem"}}),B&&(0,a.jsx)(I.Z,{}),(0,a.jsx)(b.Z,{id:"demo-radio-buttons-group-label",children:"Preference"}),(0,a.jsx)(v.Z,{"aria-labelledby":"demo-radio-buttons-group-label",name:"radio-buttons-group",onChange:t,style:{marginBottom:"1rem"},value:r,children:Array.from([,,,,,].keys()).map(function(e){return(0,a.jsx)(x.Z,{value:e+1,control:(0,a.jsx)(j.Z,{required:!0}),label:e+1},e+1)})}),(0,a.jsx)(S.Z,{onClick:function(){return E.apply(this,arguments)},variant:"contained",style:{marginBottom:"1rem"},disabled:null===r,children:"Next"}),(0,a.jsx)(C.Z,(0,N.Z)({variant:"determinate",value:g/25*100},e)),(0,a.jsx)(q.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(g/25*100),"%")})]})}var B=n(1628);function F(e){var t=function(e){s(e.target.value)},n=(0,i.useState)(null),r=n[0],s=n[1];function o(){return(o=(0,u.Z)(function(){var t,n,a;return(0,l.__generator)(this,function(i){switch(i.label){case 0:return t=((n={}).created_at=new Date,n.person_id=d(),n.age=r,n.gender=0,n.hours_listened=0,n),a={},[4,$.from("user_information").insert([t],(a.returning="minimal",a))];case 1:return i.sent(),e.updateQuestion(),[2]}})})).apply(this,arguments)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(B.Z,{required:!0,id:"age",label:"Age",variant:"outlined",onChange:t,style:{marginBottom:"1rem"}}),(0,a.jsx)(S.Z,{onClick:function(){return o.apply(this,arguments)},variant:"contained",disabled:null===r,children:"Next"})]})}function E(e){var t=function(e){s(e.target.value)},n=(0,i.useState)(null),r=n[0],s=n[1];function o(){return(o=(0,u.Z)(function(){var t,n;return(0,l.__generator)(this,function(a){switch(a.label){case 0:return t={},n={},[4,$.from("user_information").update((t.hours_listened=r,t)).match((n.person_id=d(),n))];case 1:return a.sent(),e.updateQuestion(),[2]}})})).apply(this,arguments)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(B.Z,{required:!0,id:"hours_listened",label:"Hours",variant:"outlined",onChange:t,style:{marginBottom:"1rem"}}),(0,a.jsx)(S.Z,{onClick:function(){return o.apply(this,arguments)},variant:"contained",disabled:null===r,children:"Next"})]})}function M(e){var t,n,r;return(0,a.jsx)(g.Z,{style:{margin:"auto",minWidth:"33%"},children:(t=e.questionNumber-1,n=e.updateQuestion,r=e.repetition,[(0,a.jsx)(F,{updateQuestion:n}),(0,a.jsx)(Z,{updateQuestion:n}),(0,a.jsx)(E,{updateQuestion:n}),(0,a.jsx)(z,{updateQuestion:n,repetition:r}),][t])})}function O(){var e=function(){m+1>n.repetitions?(c(o+1),p(1)):p(m+1)},t=(0,i.useState)(""),n=t[0],r=t[1],s=(0,i.useState)(1),o=s[0],c=s[1],d=(0,i.useState)(1),m=d[0],p=d[1];return(0,i.useEffect)(function(){function e(){return(e=(0,u.Z)(function(){var e,t;return(0,l.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,$.from("questions").select().eq("question_number",o)];case 1:return r((e=n.sent()).data[0]),[3,3];case 2:return t=n.sent(),console.error(t),[3,3];case 3:return[2]}})})).apply(this,arguments)}!function(){return e.apply(this,arguments)}()},[o]),(0,a.jsx)(a.Fragment,{children:5===o?(0,a.jsx)(_,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:n.question}),(0,a.jsx)(M,{questionNumber:n.question_number,updateQuestion:e,repetition:m})]})})}var J=n(9762),X=n(1927),P=n(793),Y=n(4412),A=(0,J.Z)({palette:{mode:"dark"}});function T(){return(0,a.jsxs)(X.Z,{theme:A,children:[(0,a.jsx)(P.ZP,{}),(0,a.jsxs)("div",{className:o().container,style:{padding:"50px 0 100px 0"},children:[(0,a.jsx)("h1",{children:"Perceptual preferences for groove patterns in jazz"}),(0,a.jsx)("p",{children:"Thank you for participating in our study about perceptual preferences in jazz. Our goal in this research is to find out the preferences of listeners, varying specific aspects of the song that you will be listening to. First you will be asked for some statistics about yourself. After that, you will listen to 25 samples, which you will have to rate on a scale from 1 to 5. All your data is completely anonymous and will be stored only for the duration of the course, after which it will be discarded."}),(0,a.jsx)(Y.Z,{}),(0,a.jsx)(p,{}),(0,a.jsx)(O,{})]})]})}},214:function(e){e.exports={container:"Home_container__bCOhY"}}},function(e){e.O(0,[743,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);