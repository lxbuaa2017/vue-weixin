(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{197:function(a,t,n){"use strict";n.r(t);var e=n(400),i=n(245);for(var o in i)"default"!==o&&function(a){n.d(t,a,function(){return i[a]})}(o);n(342);var r=n(54),s=Object(r.a)(i.default,e.a,e.b,!1,null,"a211d76a",null);s.options.__file="src/frames/conversation/groupchat.vue",t.default=s.exports},245:function(a,t,n){"use strict";n.r(t);var e=n(246),i=n.n(e);for(var o in e)"default"!==o&&function(a){n.d(t,a,function(){return e[a]})}(o);t.default=i.a},246:function(a,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=l(n(87)),i=l(n(193)),o=l(n(227)),r=n(84),s=n(85),d=n(8);n(331),n(332);l(n(86));function l(a){return a&&a.__esModule?a:{default:a}}var c=io("http://cangdu.org:8003");t.default={data:function(){return{inputmessage:"",light:!1,clickmore:!1,gropname:"",ifme:!1,enlargeurl:"",enlargehides:!1,enlargeShow:!1,enlarge:!1,timer:null,groupconversine:[],offset:0,imgS:"",scroll:"",loadStatus:!1,underscore:!1,chatData:{},imgurl:d.imgurl,userId:"",allgroups:[]}},created:function(){},mounted:function(){var a=this;this.getUserInfo(),this.groupList(this.offset),this.loadStatus=!0,(0,s.groupChat)().then(function(t){a.gropname=t.petname}),c.on("chat",function(t){t&&(a.groupconversine.push(t),a.$nextTick(function(){window.scrollTo(0,a.$refs.groupHeight.offsetHeight-window.innerHeight)}))}),(0,s.chatData)().then(function(t){a.chatData=t}).then(function(){new Swiper(".swiper-container",{pagination:".swiper-pagination",loop:!1})})},components:{headTop:o.default},computed:(0,i.default)({},(0,r.mapState)(["infor","userInfo","allgroup"])),beforeDestroy:function(){clearTimeout(this.timer),c.removeAllListeners()},methods:(0,i.default)({},(0,r.mapActions)(["getUserInfo"]),(0,r.mapMutations)(["GET_ALLGROUP"]),{groupList:async function(a){var t=this,n=await(0,s.getHistory)({offset:this.offset,limit:20});if(n.history.length<20&&(this.underscore=!0),200==n.status){for(var i=0;i<n.history.length;i++)n.history[i].content||(n.history.splice(i,1),i-=1);this.groupconversine=[].concat((0,e.default)(n.history),(0,e.default)(this.groupconversine)),this.allgroups=[].concat((0,e.default)(this.groupconversine)),Array.prototype.unique=function(){for(var a=[this[0]],t=1;t<this.length;t++){for(var n=!1,e=0;e<a.length;e++)if(this[t].user_id==a[e].user_id){n=!0;break}n||a.push(this[t])}return a};var o=this.allgroups;this.GET_ALLGROUP(o.unique())}this.$nextTick(function(){if(t.loadStatus=!1,0==a)t.underscore=!1,window.scrollTo(0,t.$refs.groupHeight.offsetHeight-window.innerHeight);else{var n=t.$refs.groupHeight.offsetHeight-t.lastPageHeight;window.scrollTo(0,n)}t.lastPageHeight=t.$refs.groupHeight.offsetHeight})},loadMore:function(){this.loadStatus||this.underscore||(this.scroll=document.body.scrollTop,0==this.scroll?(this.loadStatus=!0,this.offset+=20,this.groupList(this.offset)):(this.underscore=!1,this.loadStatus=!1))},whatInput:function(){""==this.inputmessage.replace(/\s+/g,"")?this.light=!1:this.light=!0},enterThing:function(){this.light&&this.clickSend()},bottomShow:function(){this.clickmore=!0},bottomHide:function(){this.clickmore=!1},inputBottomHide:function(){this.clickmore=!1},clickSend:async function(){var a=this;c.emit("chat",{user_id:this.userInfo.id,content:this.inputmessage}),this.inputmessage="",this.light=!1,this.$nextTick(function(){window.scrollTo(0,a.$refs.groupHeight.offsetHeight-window.innerHeight)})},enlargeImg:function(a){this.enlargeurl=a,this.enlarge=!0,this.enlargeShow=!0,this.enlargehides=!1},enlargeHide:function(){var a=this;clearTimeout(this.timer),this.enlargehides=!0,this.enlargeShow=!1,this.timer=setTimeout(function(){a.enlarge=!1},400)}})}},247:function(a,t,n){var e=n(343);"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(53)(e,i);e.locals&&(a.exports=e.locals)},342:function(a,t,n){"use strict";var e=n(247);n.n(e).a},343:function(a,t,n){(a.exports=n(52)(!1)).push([a.i,'body[data-v-a211d76a], div[data-v-a211d76a], span[data-v-a211d76a], header[data-v-a211d76a], footer[data-v-a211d76a], nav[data-v-a211d76a], section[data-v-a211d76a], aside[data-v-a211d76a], article[data-v-a211d76a], ul[data-v-a211d76a], dl[data-v-a211d76a], dt[data-v-a211d76a], dd[data-v-a211d76a], li[data-v-a211d76a], a[data-v-a211d76a], p[data-v-a211d76a], h1[data-v-a211d76a], h2[data-v-a211d76a], h3[data-v-a211d76a], h4[data-v-a211d76a], h5[data-v-a211d76a], h6[data-v-a211d76a], i[data-v-a211d76a], b[data-v-a211d76a], textarea[data-v-a211d76a], button[data-v-a211d76a], input[data-v-a211d76a], select[data-v-a211d76a], figure[data-v-a211d76a], figcaption[data-v-a211d76a] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  font-style: normal;\n  text-decoration: none;\n  border: none;\n  color: #666;\n  box-sizing: border-box;\n  font-weight: lighter;\n  font-family: Arial,\'Hiragino Sans GB\',Microsoft Yahei,Helvetica Neue,Helvetica,sans-serif !important;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-smoothing: antialiased;\n}\nbody[data-v-a211d76a]:focus, div[data-v-a211d76a]:focus, span[data-v-a211d76a]:focus, header[data-v-a211d76a]:focus, footer[data-v-a211d76a]:focus, nav[data-v-a211d76a]:focus, section[data-v-a211d76a]:focus, aside[data-v-a211d76a]:focus, article[data-v-a211d76a]:focus, ul[data-v-a211d76a]:focus, dl[data-v-a211d76a]:focus, dt[data-v-a211d76a]:focus, dd[data-v-a211d76a]:focus, li[data-v-a211d76a]:focus, a[data-v-a211d76a]:focus, p[data-v-a211d76a]:focus, h1[data-v-a211d76a]:focus, h2[data-v-a211d76a]:focus, h3[data-v-a211d76a]:focus, h4[data-v-a211d76a]:focus, h5[data-v-a211d76a]:focus, h6[data-v-a211d76a]:focus, i[data-v-a211d76a]:focus, b[data-v-a211d76a]:focus, textarea[data-v-a211d76a]:focus, button[data-v-a211d76a]:focus, input[data-v-a211d76a]:focus, select[data-v-a211d76a]:focus, figure[data-v-a211d76a]:focus, figcaption[data-v-a211d76a]:focus {\n    outline: none;\n}\ninput[type="button"][data-v-a211d76a], input[type="submit"][data-v-a211d76a], input[type="search"][data-v-a211d76a], input[type="reset"][data-v-a211d76a] {\n  -webkit-appearance: none;\n}\ntextarea[data-v-a211d76a] {\n  -webkit-appearance: none;\n}\nhtml[data-v-a211d76a], body[data-v-a211d76a] {\n  height: 100%;\n  width: 100%;\n  background-color: #ebebeb;\n}\n.clear[data-v-a211d76a]:after {\n  content: \'\';\n  display: block;\n  clear: both;\n}\n.clear[data-v-a211d76a] {\n  zoom: 1;\n}\n.back_img[data-v-a211d76a] {\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.margin[data-v-a211d76a] {\n  margin: 0 auto;\n}\n.left[data-v-a211d76a] {\n  float: left;\n}\n.right[data-v-a211d76a] {\n  float: right;\n}\n.hide[data-v-a211d76a] {\n  display: none;\n}\n.show[data-v-a211d76a] {\n  display: block;\n}\n.ellipsis[data-v-a211d76a] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.scroll[data-v-a211d76a] {\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.tgl[data-v-a211d76a] {\n  display: none;\n}\n.tgl[data-v-a211d76a], .tgl[data-v-a211d76a]:after, .tgl[data-v-a211d76a]:before, .tgl *[data-v-a211d76a], .tgl *[data-v-a211d76a]:after, .tgl *[data-v-a211d76a]:before, .tgl + .tgl-btn[data-v-a211d76a] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.tgl[data-v-a211d76a]::-moz-selection, .tgl[data-v-a211d76a]:after::-moz-selection, .tgl[data-v-a211d76a]:before::-moz-selection, .tgl *[data-v-a211d76a]::-moz-selection, .tgl *[data-v-a211d76a]:after::-moz-selection, .tgl *[data-v-a211d76a]:before::-moz-selection, .tgl + .tgl-btn[data-v-a211d76a]::-moz-selection {\n  background: none;\n}\n.tgl[data-v-a211d76a]::selection, .tgl[data-v-a211d76a]:after::selection, .tgl[data-v-a211d76a]:before::selection, .tgl *[data-v-a211d76a]::selection, .tgl *[data-v-a211d76a]:after::selection, .tgl *[data-v-a211d76a]:before::selection, .tgl + .tgl-btn[data-v-a211d76a]::selection {\n  background: none;\n}\n.tgl + .tgl-btn[data-v-a211d76a] {\n  outline: 0;\n  display: block;\n  width: 1.92rem;\n  height: 1.024rem;\n  position: relative;\n  cursor: pointer;\n}\n.tgl + .tgl-btn[data-v-a211d76a]:after, .tgl + .tgl-btn[data-v-a211d76a]:before {\n  position: relative;\n  display: block;\n  content: "";\n  width: 50%;\n  height: 100%;\n}\n.tgl + .tgl-btn[data-v-a211d76a]:after {\n  left: 0;\n}\n.tgl + .tgl-btn[data-v-a211d76a]:before {\n  display: none;\n}\n.tgl:checked + .tgl-btn[data-v-a211d76a]:after {\n  left: 50%;\n}\n.tgl-light + .tgl-btn[data-v-a211d76a] {\n  background: #999999;\n  border-radius: 2em;\n  padding: 2px;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n}\n.tgl-light + .tgl-btn[data-v-a211d76a]:after {\n  border-radius: 50%;\n  background: #fff;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n.tgl-light:checked + .tgl-btn[data-v-a211d76a] {\n  background: #1aad16;\n}\n.router-show-enter-active[data-v-a211d76a], .router-show-leave-active[data-v-a211d76a] {\n  transition: all .4s;\n}\n.router-show-enter[data-v-a211d76a], .router-show-leave-active[data-v-a211d76a] {\n  transform: translateX(100%);\n}\n.load[data-v-a211d76a] {\n  position: fixed;\n  z-index: 100;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n.load .loadnbg[data-v-a211d76a] {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    background: #000;\n    opacity: 0;\n}\n.load .loading[data-v-a211d76a] {\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.spinner[data-v-a211d76a] {\n  width: 80px;\n  height: 80px;\n  position: relative;\n}\n.container1 > div[data-v-a211d76a], .container2 > div[data-v-a211d76a], .container3 > div[data-v-a211d76a] {\n  width: 16px;\n  height: 16px;\n  background-color: #46C01B;\n  border-radius: 100%;\n  position: absolute;\n  -webkit-animation: bouncedelay-data-v-a211d76a 1s infinite ease-in-out;\n  animation: bouncedelay-data-v-a211d76a 1s infinite ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n.spinner .spinner-container[data-v-a211d76a] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.container2[data-v-a211d76a] {\n  -webkit-transform: rotateZ(45deg);\n  transform: rotateZ(45deg);\n}\n.container3[data-v-a211d76a] {\n  -webkit-transform: rotateZ(90deg);\n  transform: rotateZ(90deg);\n}\n.circle1[data-v-a211d76a] {\n  top: 0;\n  left: 0;\n}\n.circle2[data-v-a211d76a] {\n  top: 0;\n  right: 0;\n}\n.circle3[data-v-a211d76a] {\n  right: 0;\n  bottom: 0;\n}\n.circle4[data-v-a211d76a] {\n  left: 0;\n  bottom: 0;\n}\n.container2 .circle1[data-v-a211d76a] {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.container3 .circle1[data-v-a211d76a] {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n.container1 .circle2[data-v-a211d76a] {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.container2 .circle2[data-v-a211d76a] {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.container3 .circle2[data-v-a211d76a] {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.container1 .circle3[data-v-a211d76a] {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.container2 .circle3[data-v-a211d76a] {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.container3 .circle3[data-v-a211d76a] {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.container1 .circle4[data-v-a211d76a] {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.container2 .circle4[data-v-a211d76a] {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.container3 .circle4[data-v-a211d76a] {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n@-webkit-keyframes bouncedelay-data-v-a211d76a {\n0%, 80%, 100% {\n    -webkit-transform: scale(0);\n}\n40% {\n    -webkit-transform: scale(1);\n}\n}\n@keyframes bouncedelay-data-v-a211d76a {\n0%, 80%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n}\n40% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n}\n}\n.coversPart[data-v-a211d76a] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0.5973333333rem;\n  width: 0.85333rem;\n  height: 0.85333rem;\n}\n.coversPart .person_link[data-v-a211d76a] {\n    display: block;\n    width: 0.85333rem;\n    height: 0.85333rem;\n}\n.coversPart .person_link svg[data-v-a211d76a] {\n      width: 100%;\n      height: 100%;\n}\n.coversation[data-v-a211d76a] {\n  background-color: #ebebeb;\n  overflow-scrolling: touch;\n  -webkit-overflow-scrolling: touch;\n  padding-top: 2.06933rem;\n}\n.coversation .coversationlist[data-v-a211d76a] {\n    position: relative;\n    padding: 0 .32rem;\n    padding-bottom: 2.6rem;\n    overflow: auto;\n    margin: 0 auto;\n}\n.coversation .coversationlist ul[data-v-a211d76a] {\n      padding-top: .4rem;\n      width: 15.4rem;\n      overflow-x: hidden;\n      overflow-scrolling: touch;\n      -webkit-overflow-scrolling: touch;\n      top: 0;\n}\n.coversation .coversationlist ul li .other[data-v-a211d76a] {\n        width: 100%;\n        display: flex;\n        justify-content: flex-start;\n        margin-bottom: 1.3rem;\n        align-items: top;\n        position: relative;\n}\n.coversation .coversationlist ul li .other .say-time[data-v-a211d76a] {\n          font-size: 0.48rem;\n          color: #999;\n          width: 8rem;\n          position: absolute;\n          top: -.4rem;\n          left: 2.5rem;\n}\n.coversation .coversationlist ul li .other img[data-v-a211d76a] {\n          display: block;\n          width: 1.74933rem;\n          height: 1.74933rem;\n}\n.coversation .coversationlist ul li .other .whatsay[data-v-a211d76a] {\n          position: relative;\n          margin-top: .4rem;\n}\n.coversation .coversationlist ul li .other .whatsay .whatsay_svg[data-v-a211d76a] {\n            width: 0.42667rem;\n            height: 0.64rem;\n            position: absolute;\n            top: .5546667rem;\n            left: .36rem;\n            z-index: 2;\n}\n.coversation .coversationlist ul li .other .whatsay .whatsay_svg svg[data-v-a211d76a] {\n              display: block;\n              width: 0.42667rem;\n              height: 0.64rem;\n}\n.coversation .coversationlist ul li .other .whatsay .whatsay_text[data-v-a211d76a] {\n            margin-left: 0.6399997rem;\n            max-width: 10.3253333333rem;\n            background: #fff;\n            padding: 0.42rem 0.384rem;\n            border: 1px solid #d9d9d9;\n            border-radius: 8px;\n            font-size: 0.64rem;\n            color: #333;\n            line-height: 0.8533333333rem;\n            word-break: break-all;\n}\n.coversation .coversationlist ul li .mysay[data-v-a211d76a] {\n        display: flex;\n        flex-direction: row-reverse;\n}\n.coversation .coversationlist ul li .mysay .say-time[data-v-a211d76a] {\n          left: 8.8rem;\n}\n.coversation .coversationlist ul li .mysay .whatsay .whatsay_svg[data-v-a211d76a] {\n          right: .36rem;\n          left: auto;\n}\n.coversation .coversationlist ul li .mysay .whatsay .whatsay_text[data-v-a211d76a] {\n          margin-right: 0.6399997rem;\n          margin-left: 0;\n          background: #9fe658;\n}\n.coversation .coversationlist .underscore[data-v-a211d76a] {\n      padding-top: 0.2rem;\n      text-align: center;\n      font-size: 0.55467rem;\n      color: #999;\n}\nfooter[data-v-a211d76a] {\n  position: fixed;\n  z-index: 10;\n  border-top: 1px solid #e0e0e0;\n  background: #f5f5f5;\n  bottom: -11.712rem;\n  width: 100%;\n}\nfooter .foot_top[data-v-a211d76a] {\n    padding: 0 0.512rem;\n    height: 2.0053333333rem;\n    background: #f3f3f3;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\nfooter .foot_top div[data-v-a211d76a]:nth-of-type(1), footer .foot_top div[data-v-a211d76a]:nth-of-type(3), footer .foot_top div[data-v-a211d76a]:nth-of-type(4) {\n      width: 1.36533rem;\n      height: 1.36533rem;\n      margin-right: 0.3413333333rem;\n}\nfooter .foot_top div:nth-of-type(1) svg[data-v-a211d76a], footer .foot_top div:nth-of-type(3) svg[data-v-a211d76a], footer .foot_top div:nth-of-type(4) svg[data-v-a211d76a] {\n        width: 100%;\n        height: 100%;\n}\nfooter .foot_top div[data-v-a211d76a]:nth-of-type(2) {\n      margin-right: 0.3413333333rem;\n      width: 9.8rem;\n      height: 1.152rem;\n      border-bottom: 1px solid #e0e0e0;\n}\nfooter .foot_top div:nth-of-type(2) input[data-v-a211d76a] {\n        display: block;\n        width: 9.8rem;\n        padding: 0 0.4133333333rem;\n        line-height: 1.152rem;\n        height: 1.152rem;\n        border: 0;\n        background: none;\n        font-size: 0.64rem;\n        color: #000;\n        border-bottom: 1px solid #e0e0e0;\n}\nfooter .foot_top div:nth-of-type(2) .lightborder[data-v-a211d76a] {\n        border-color: #19ad17;\n}\nfooter .foot_top div[data-v-a211d76a]:nth-of-type(4) {\n      margin-right: 0;\n}\nfooter .foot_top div:nth-of-type(4) .send[data-v-a211d76a] {\n        width: 1.8133333333rem;\n        background: #16af17;\n        height: 1.3653333333rem;\n        padding: .682666rem 0;\n        border-radius: 5px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n}\nfooter .foot_top div:nth-of-type(4) .send span[data-v-a211d76a] {\n          display: block;\n          font-size: 0.59733rem;\n          color: #fff;\n}\nfooter .foot_top div:nth-of-type(4) .send[data-v-a211d76a]:active {\n        background: #33c034;\n}\nfooter .foot_bottom[data-v-a211d76a] {\n    height: 11.712rem;\n    border-top: 1px solid #e0e0e0;\n}\nfooter .foot_bottom .swiper-container[data-v-a211d76a] {\n      width: 100%;\n      height: 11.712rem;\n      overflow: hidden;\n}\nfooter .foot_bottom .swiper-container .swiper-slide[data-v-a211d76a] {\n        width: 100%;\n}\nfooter .foot_bottom .swiper-container .swiper-slide ul[data-v-a211d76a] {\n          padding: 1.408rem 1.1946666667rem 0;\n          box-sizing: border-box;\n}\nfooter .foot_bottom .swiper-container .swiper-slide ul li[data-v-a211d76a] {\n            float: left;\n            width: 2.5466666667rem;\n            margin-right: 1rem;\n            margin-bottom: 1.1946666667rem;\n}\nfooter .foot_bottom .swiper-container .swiper-slide ul li .swiper_svg[data-v-a211d76a] {\n              width: 2.54667rem;\n              height: 2.54667rem;\n              background: #fcfcfc;\n              border: 1px solid #d3d3d3;\n              border-radius: 10px;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n}\nfooter .foot_bottom .swiper-container .swiper-slide ul li .swiper_svg svg[data-v-a211d76a] {\n                width: 1.28rem;\n                height: 0.93867rem;\n                display: block;\n}\nfooter .foot_bottom .swiper-container .swiper-slide ul li .swiper_text[data-v-a211d76a] {\n              width: 100%;\n              margin-top: 0.256rem;\n              text-align: center;\n              font-size: 0.46933rem;\n              color: #7a8187;\n}\nfooter .foot_bottom .swiper-container .swiper-slide ul li[data-v-a211d76a]:nth-of-type(4n+4) {\n            margin-right: 0;\n}\n.footshow[data-v-a211d76a] {\n  bottom: 0;\n  transition: all .2s;\n}\n.enlarge[data-v-a211d76a] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: #000000;\n  top: 0;\n  z-index: 100;\n}\n.enlarge img[data-v-a211d76a] {\n    display: block;\n    width: auto;\n    height: 15.0186666667rem;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translateX(-50%);\n    margin-top: -7.5093333333rem;\n}\n.enlarge_part[data-v-a211d76a] {\n  display: none;\n}\nbody .movein-animate[data-v-a211d76a] {\n  transition: all 1s;\n  animation: fadeIn-data-v-a211d76a .6s;\n}\nbody .moveout-animate-leave[data-v-a211d76a] {\n  transition: all 1s;\n  animation: zoomOut-data-v-a211d76a .6s;\n}\n@-webkit-keyframes fadeIn-data-v-a211d76a {\nfrom {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fadeIn-data-v-a211d76a {\nfrom {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes zoomOut-data-v-a211d76a {\nfrom {\n    opacity: 1;\n}\n50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes zoomOut-data-v-a211d76a {\nfrom {\n    opacity: 1;\n}\n50% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\n    transform: scale3d(0.3, 0.3, 0.3);\n}\n100% {\n    opacity: 0;\n}\n}\n',""])},400:function(a,t,n){"use strict";var e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("section",[n("head-top",{attrs:{crossover:a.gropname}},[n("section",{staticClass:"coversPart",attrs:{slot:"person"},slot:"person"},[n("router-link",{staticClass:"person_link",attrs:{to:"/groupchat/groupchatmessage"}},[n("svg",{staticClass:"icon-search",attrs:{fill:"#fff"}},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#doubleperson"}})])])],1)]),a._v(" "),n("section",{ref:"groupHeight",staticClass:"coversation",on:{touchmove:a.loadMore}},[n("section",{staticClass:"coversationlist"},[a.underscore?n("div",{staticClass:"underscore"},[a._v("———— 我是有底线的 ————")]):a._e(),a._v(" "),n("ul",a._l(a.groupconversine,function(t){return n("li",[n("div",{staticClass:"other",class:{mysay:t.user_id==a.userInfo.id}},[n("div",{staticClass:"say-time"},[a._v(a._s(t.time))]),a._v(" "),n("img",{attrs:{src:a.imgurl+t.avatar,alt:""},on:{click:function(n){return a.enlargeImg(t.avatar)}}}),a._v(" "),n("div",{staticClass:"whatsay"},[n("div",{staticClass:"whatsay_svg"},[n("svg",[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":t.user_id==a.userInfo.id?"#trigon-right":"#trigon-left"}})])]),a._v(" "),n("div",{staticClass:"whatsay_text"},[a._v("\n\t\t\t\t\t\t\t\t"+a._s(t.content)+"\n\t\t\t\t\t\t\t")])])])])}),0)])]),a._v(" "),a.loadStatus?n("div",{staticClass:"load"},[n("div",{staticClass:"loadnbg"}),a._v(" "),a._m(0)]):a._e(),a._v(" "),n("footer",{class:{footshow:a.clickmore}},[n("section",{staticClass:"foot_top"},[n("div",[n("svg",[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#voice"}})])]),a._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:a.inputmessage,expression:"inputmessage"}],class:{lightborder:a.light},attrs:{type:"text",maxlength:"100"},domProps:{value:a.inputmessage},on:{input:[function(t){t.target.composing||(a.inputmessage=t.target.value)},a.whatInput],click:a.inputBottomHide,keyup:function(t){return!t.type.indexOf("key")&&a._k(t.keyCode,"enter",13,t.key,"Enter")?null:a.enterThing(t)}}})]),a._v(" "),n("div",[n("svg",[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#face"}})])]),a._v(" "),n("div",[a.light?n("div",{staticClass:"send",on:{click:a.clickSend}},[n("span",[a._v("发送")])]):n("svg",{on:{click:a.bottomShow}},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#addthing"}})])])]),a._v(" "),n("section",{staticClass:"foot_bottom"},[n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},a._l(a.chatData,function(t,e){return n("div",{staticClass:"swiper-slide"},[n("ul",{staticClass:"clear"},a._l(t,function(t){return n("li",[n("div",{staticClass:"swiper_svg"},[n("svg",{attrs:{fill:"#7a8187"}},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":t.chatSvgid}})])]),a._v(" "),n("div",{staticClass:"swiper_text"},[a._v("\n\t            \t\t\t\t\t"+a._s(t.chatSvgname)+"\n\t            \t\t\t\t")])])}),0)])}),0),a._v(" "),n("div",{staticClass:"swiper-pagination"})])])]),a._v(" "),a.enlarge?n("section",{staticClass:"enlarge",class:{"movein-animate":a.enlargeShow,"moveout-animate-leave":a.enlargehides},on:{click:a.enlargeHide}},[n("img",{attrs:{src:a.imgurl+a.enlargeurl,alt:""}})]):a._e(),a._v(" "),n("transition",{attrs:{name:"router-show"}},[n("router-view")],1)],1)},i=[function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"loading"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"spinner-container container1"},[n("div",{staticClass:"circle1"}),a._v(" "),n("div",{staticClass:"circle2"}),a._v(" "),n("div",{staticClass:"circle3"}),a._v(" "),n("div",{staticClass:"circle4"})]),a._v(" "),n("div",{staticClass:"spinner-container container2"},[n("div",{staticClass:"circle1"}),a._v(" "),n("div",{staticClass:"circle2"}),a._v(" "),n("div",{staticClass:"circle3"}),a._v(" "),n("div",{staticClass:"circle4"})]),a._v(" "),n("div",{staticClass:"spinner-container container3"},[n("div",{staticClass:"circle1"}),a._v(" "),n("div",{staticClass:"circle2"}),a._v(" "),n("div",{staticClass:"circle3"}),a._v(" "),n("div",{staticClass:"circle4"})])])])}];e._withStripped=!0,n.d(t,"a",function(){return e}),n.d(t,"b",function(){return i})}}]);