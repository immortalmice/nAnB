(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c8ca6a0"],{"293a":function(e,t,n){"use strict";n.r(t);var c=n("7a23");function s(e,t,n,s,a,r){return Object(c["t"])(),Object(c["f"])("div",{class:Object(c["o"])(e.$style.container)},[Object(c["g"])("div",{class:Object(c["o"])(e.$style.message)},null,2),Object(c["g"])("div",{class:Object(c["o"])(e.$style.controls)},[Object(c["g"])("input",{class:Object(c["o"])(e.$style.input),onKeydown:t[0]||(t[0]=Object(c["E"])((function(t){return e.$emit("user-message",t.target.value)}),["enter"]))},null,34),Object(c["g"])("button",{class:Object(c["o"])(e.$style.btn)},"送出",2)],2)],2)}var a={setup:function(e,t){var n=t.expose,c=function(e){console.log(e)};n({newMessage:c})}},r=n("7730"),u=n("6b0d"),o=n.n(u);const i={};i["$style"]=r["default"];const l=o()(a,[["render",s],["__cssModules",i]]);var b=l,f=n("c7eb"),j=n("1da1"),v=n("d4ec"),O=n("bee2"),d=n("ade3");n("d3b7");function p(e){return new h(e)}var h=function(){function e(t){var n=this;Object(v["a"])(this,e),Object(d["a"])(this,"echoStep",Object(j["a"])(Object(f["a"])().mark((function e(){var t;return Object(f["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.speak("Hello I'm echo"),e.next=3,n.read();case 3:t=e.sent,n.speak(t),n.run(n.echoStep);case 6:case"end":return e.stop()}}),e)})))),this.chatInstance=t,this.readResolver=function(){},this.echoStep()}return Object(O["a"])(e,[{key:"speak",value:function(e){this.chatInstance.newMessage(e)}},{key:"read",value:function(){var e=this;return new Promise((function(t){e.readResolver=t}))}},{key:"input",value:function(e){this.readResolver(e)}},{key:"run",value:function(e){e(this)}}]),e}(),w={name:"Chat",setup:function(e){var t=Object(c["w"])(null),n=Object(c["w"])(null);return Object(c["r"])((function(){n.value=p(t.value)})),function(e,s){return Object(c["D"])((Object(c["t"])(),Object(c["e"])(b,{ref_key:"chat",ref:t,onUserMessage:s[0]||(s[0]=function(e){return Object(c["A"])(n).input(e)})},null,512)),[[c["B"],Object(c["A"])(n)]])}}};const g=w;t["default"]=g},7730:function(e,t,n){"use strict";var c=n("fc4f"),s=n.n(c);n.d(t,"default",(function(){return s.a}))},fc4f:function(e,t,n){e.exports={container:"_2oWvMXBm",message:"_17E9xSel",controls:"_3UGpGxY5",input:"_1MfgGU6r",btn:"_3nHIodv-"}}}]);