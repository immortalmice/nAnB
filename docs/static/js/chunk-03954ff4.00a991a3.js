(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03954ff4"],{"18d5":function(e,t,n){e.exports=n.p+"static/img/user.1ad76388.jpg"},"293a":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),s=n("47e2"),r=["src"],a={name:"Message",props:{from:{type:String,default:"bot"},message:{type:String,required:!0}},setup:function(e){var t=Object(s["b"])(),a=t.t;return function(t,s){return Object(c["u"])(),Object(c["f"])("div",{class:Object(c["o"])(t.$style.container)},[Object(c["g"])("div",{class:Object(c["o"])(t.$style.left)},[Object(c["g"])("img",{class:Object(c["o"])(t.$style.img),src:n("710a")("./".concat(e.from,".jpg"))},null,10,r)],2),Object(c["g"])("div",{class:Object(c["o"])(t.$style.right)},[Object(c["g"])("div",null,Object(c["B"])(Object(c["C"])(a)("".concat(e.from,"_name"))),1),Object(c["g"])("div",null,Object(c["B"])(e.message),1)],2)],2)}}},u=n("2f3a"),i=n("6b0d"),o=n.n(i);const b={};b["$style"]=u["default"];const l=o()(a,[["__cssModules",b]]);var f=l,j={name:"ChatBox",emits:["user-message"],setup:function(e,t){var n=t.expose,r=t.emit,a=Object(s["b"])(),u=a.t,i=Object(c["w"])([]),o=function(e,t){i.unshift({from:e,message:t})},b=Object(c["x"])(!1),l=function(e){b.value=e},j=Object(c["x"])(null),O=function(){j.value&&(r("user-message",j.value.value),j.value.value="")};return n({newMessage:o,markWriting:l}),function(e,t){return Object(c["u"])(),Object(c["f"])("div",{class:Object(c["o"])(e.$style.container)},[Object(c["g"])("div",{class:Object(c["o"])(e.$style.message)},[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(i,(function(e,t){return Object(c["u"])(),Object(c["e"])(f,{key:t,from:e.from,message:e.message},null,8,["from","message"])})),128))],2),Object(c["g"])("div",{class:Object(c["o"])(e.$style.controls)},[Object(c["g"])("span",{class:Object(c["o"])(e.$style.writing),style:Object(c["p"])({visibility:b.value?"visible":"hidden"})},Object(c["B"])(Object(c["C"])(u)("bot_is_writing")),7),Object(c["g"])("input",{ref_key:"input",ref:j,class:Object(c["o"])(e.$style.input),onKeydown:t[0]||(t[0]=Object(c["G"])((function(e){return O()}),["enter"]))},null,34),Object(c["g"])("button",{class:Object(c["o"])(e.$style.btn),onClick:t[1]||(t[1]=function(e){return O()})},"送出",2)],2)],2)}}},O=n("bd47");const p={};p["$style"]=O["default"];const d=o()(j,[["__cssModules",p]]);var v=d,g=n("c7eb"),h=n("1da1"),m=n("d4ec"),w=n("bee2"),y=n("ade3");n("d3b7");function k(e){return new x(e)}var x=function(){function e(t){var n=this;Object(m["a"])(this,e),Object(y["a"])(this,"echoStep",Object(h["a"])(Object(g["a"])().mark((function e(){var t;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.echoFirst){e.next=4;break}return e.next=3,n.speak("Hello I'm echo");case 3:n.echoFirst=!1;case 4:return e.next=6,n.read();case 6:return t=e.sent,e.next=9,n.speak(t);case 9:n.run(n.echoStep);case 10:case"end":return e.stop()}}),e)})))),this.chatInstance=t,this.readResolver=function(){},this.echoFirst=!0,this.echoStep()}return Object(w["a"])(e,[{key:"speak",value:function(){var t=Object(h["a"])(Object(g["a"])().mark((function t(n){return Object(g["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.wait(400);case 2:return this.chatInstance.markWriting(!0),t.next=5,e.wait(1500);case 5:this.chatInstance.newMessage("bot",n),this.chatInstance.markWriting(!1);case 7:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}()},{key:"read",value:function(){var e=this;return new Promise((function(t){e.readResolver=t}))}},{key:"input",value:function(e){this.chatInstance.newMessage("user",e),this.readResolver(e)}},{key:"run",value:function(e){e(this)}}],[{key:"wait",value:function(e){return new Promise((function(t){setTimeout(t,e)}))}}]),e}(),_={name:"Chat",setup:function(e){var t=Object(c["x"])(null),n=Object(c["x"])(null);return Object(c["s"])((function(){n.value=k(t.value)})),function(e,s){return Object(c["F"])((Object(c["u"])(),Object(c["e"])(v,{ref_key:"chat",ref:t,onUserMessage:s[0]||(s[0]=function(e){return Object(c["C"])(n).input(e)})},null,512)),[[c["D"],Object(c["C"])(n)]])}}};const $=_;t["default"]=$},"2f3a":function(e,t,n){"use strict";var c=n("d5a6"),s=n.n(c);n.d(t,"default",(function(){return s.a}))},"33b8":function(e,t,n){e.exports={container:"_2oWvMXBm",message:"_17E9xSel",controls:"_3UGpGxY5",writing:"_8OtNO1pn",input:"_1MfgGU6r",btn:"_3nHIodv-"}},"710a":function(e,t,n){var c={"./bot.jpg":"9780","./user.jpg":"18d5"};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=r,e.exports=s,s.id="710a"},9780:function(e,t,n){e.exports=n.p+"static/img/bot.31c65887.jpg"},bd47:function(e,t,n){"use strict";var c=n("33b8"),s=n.n(c);n.d(t,"default",(function(){return s.a}))},d5a6:function(e,t,n){e.exports={container:"_3911bEkh",left:"_2-tWAnw-",right:"MrIxSjHD",img:"n4820IVp"}}}]);