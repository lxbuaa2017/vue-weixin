(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{212:function(t,e,n){"use strict";n.r(e);var a=n(416),o=n(294);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n(373);var r=n(54),f=Object(r.a)(o.default,a.a,a.b,!1,null,"47630e3f",null);f.options.__file="src/frames/computer/computer.vue",e.default=f.exports},294:function(t,e,n){"use strict";n.r(e);var a=n(295),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e.default=o.a},295:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=f(n(193)),o=f(n(227)),i=f(n(234)),r=n(84);function f(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{coverShow:!1}},created:function(){},mounted:function(){},components:{headTop:o.default,footGuide:i.default},computed:(0,a.default)({},(0,r.mapState)(["mute"])),methods:(0,a.default)({},(0,r.mapMutations)(["RECORD_MUTE","COMPUTER_SHOW"]),{ifMute:function(){this.mute?this.RECORD_MUTE(!1):this.RECORD_MUTE(!0)},exitWindows:function(){this.coverShow=!0},cancel:function(){this.coverShow=!1},ensure:function(){this.COMPUTER_SHOW(!1),this.coverShow=!1,this.$router.push("/dialogue")}})}},296:function(t,e,n){var a=n(374);"string"==typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(53)(a,o);a.locals&&(t.exports=a.locals)},373:function(t,e,n){"use strict";var a=n(296);n.n(a).a},374:function(t,e,n){(t.exports=n(52)(!1)).push([t.i,'body[data-v-47630e3f], div[data-v-47630e3f], span[data-v-47630e3f], header[data-v-47630e3f], footer[data-v-47630e3f], nav[data-v-47630e3f], section[data-v-47630e3f], aside[data-v-47630e3f], article[data-v-47630e3f], ul[data-v-47630e3f], dl[data-v-47630e3f], dt[data-v-47630e3f], dd[data-v-47630e3f], li[data-v-47630e3f], a[data-v-47630e3f], p[data-v-47630e3f], h1[data-v-47630e3f], h2[data-v-47630e3f], h3[data-v-47630e3f], h4[data-v-47630e3f], h5[data-v-47630e3f], h6[data-v-47630e3f], i[data-v-47630e3f], b[data-v-47630e3f], textarea[data-v-47630e3f], button[data-v-47630e3f], input[data-v-47630e3f], select[data-v-47630e3f], figure[data-v-47630e3f], figcaption[data-v-47630e3f] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  font-style: normal;\n  text-decoration: none;\n  border: none;\n  color: #666;\n  box-sizing: border-box;\n  font-weight: lighter;\n  font-family: Arial,\'Hiragino Sans GB\',Microsoft Yahei,Helvetica Neue,Helvetica,sans-serif !important;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-smoothing: antialiased;\n}\nbody[data-v-47630e3f]:focus, div[data-v-47630e3f]:focus, span[data-v-47630e3f]:focus, header[data-v-47630e3f]:focus, footer[data-v-47630e3f]:focus, nav[data-v-47630e3f]:focus, section[data-v-47630e3f]:focus, aside[data-v-47630e3f]:focus, article[data-v-47630e3f]:focus, ul[data-v-47630e3f]:focus, dl[data-v-47630e3f]:focus, dt[data-v-47630e3f]:focus, dd[data-v-47630e3f]:focus, li[data-v-47630e3f]:focus, a[data-v-47630e3f]:focus, p[data-v-47630e3f]:focus, h1[data-v-47630e3f]:focus, h2[data-v-47630e3f]:focus, h3[data-v-47630e3f]:focus, h4[data-v-47630e3f]:focus, h5[data-v-47630e3f]:focus, h6[data-v-47630e3f]:focus, i[data-v-47630e3f]:focus, b[data-v-47630e3f]:focus, textarea[data-v-47630e3f]:focus, button[data-v-47630e3f]:focus, input[data-v-47630e3f]:focus, select[data-v-47630e3f]:focus, figure[data-v-47630e3f]:focus, figcaption[data-v-47630e3f]:focus {\n    outline: none;\n}\ninput[type="button"][data-v-47630e3f], input[type="submit"][data-v-47630e3f], input[type="search"][data-v-47630e3f], input[type="reset"][data-v-47630e3f] {\n  -webkit-appearance: none;\n}\ntextarea[data-v-47630e3f] {\n  -webkit-appearance: none;\n}\nhtml[data-v-47630e3f], body[data-v-47630e3f] {\n  height: 100%;\n  width: 100%;\n  background-color: #ebebeb;\n}\n.clear[data-v-47630e3f]:after {\n  content: \'\';\n  display: block;\n  clear: both;\n}\n.clear[data-v-47630e3f] {\n  zoom: 1;\n}\n.back_img[data-v-47630e3f] {\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.margin[data-v-47630e3f] {\n  margin: 0 auto;\n}\n.left[data-v-47630e3f] {\n  float: left;\n}\n.right[data-v-47630e3f] {\n  float: right;\n}\n.hide[data-v-47630e3f] {\n  display: none;\n}\n.show[data-v-47630e3f] {\n  display: block;\n}\n.ellipsis[data-v-47630e3f] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.scroll[data-v-47630e3f] {\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.tgl[data-v-47630e3f] {\n  display: none;\n}\n.tgl[data-v-47630e3f], .tgl[data-v-47630e3f]:after, .tgl[data-v-47630e3f]:before, .tgl *[data-v-47630e3f], .tgl *[data-v-47630e3f]:after, .tgl *[data-v-47630e3f]:before, .tgl + .tgl-btn[data-v-47630e3f] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.tgl[data-v-47630e3f]::-moz-selection, .tgl[data-v-47630e3f]:after::-moz-selection, .tgl[data-v-47630e3f]:before::-moz-selection, .tgl *[data-v-47630e3f]::-moz-selection, .tgl *[data-v-47630e3f]:after::-moz-selection, .tgl *[data-v-47630e3f]:before::-moz-selection, .tgl + .tgl-btn[data-v-47630e3f]::-moz-selection {\n  background: none;\n}\n.tgl[data-v-47630e3f]::selection, .tgl[data-v-47630e3f]:after::selection, .tgl[data-v-47630e3f]:before::selection, .tgl *[data-v-47630e3f]::selection, .tgl *[data-v-47630e3f]:after::selection, .tgl *[data-v-47630e3f]:before::selection, .tgl + .tgl-btn[data-v-47630e3f]::selection {\n  background: none;\n}\n.tgl + .tgl-btn[data-v-47630e3f] {\n  outline: 0;\n  display: block;\n  width: 1.92rem;\n  height: 1.024rem;\n  position: relative;\n  cursor: pointer;\n}\n.tgl + .tgl-btn[data-v-47630e3f]:after, .tgl + .tgl-btn[data-v-47630e3f]:before {\n  position: relative;\n  display: block;\n  content: "";\n  width: 50%;\n  height: 100%;\n}\n.tgl + .tgl-btn[data-v-47630e3f]:after {\n  left: 0;\n}\n.tgl + .tgl-btn[data-v-47630e3f]:before {\n  display: none;\n}\n.tgl:checked + .tgl-btn[data-v-47630e3f]:after {\n  left: 50%;\n}\n.tgl-light + .tgl-btn[data-v-47630e3f] {\n  background: #999999;\n  border-radius: 2em;\n  padding: 2px;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n}\n.tgl-light + .tgl-btn[data-v-47630e3f]:after {\n  border-radius: 50%;\n  background: #fff;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n.tgl-light:checked + .tgl-btn[data-v-47630e3f] {\n  background: #1aad16;\n}\n.goback[data-v-47630e3f] {\n  width: 100%;\n  padding-top: 1.28rem;\n}\n.goback span[data-v-47630e3f] {\n    display: block;\n    font-size: 0.93867rem;\n    color: #1aad19;\n    margin-left: 1.0666666667rem;\n}\n.computer[data-v-47630e3f] {\n  padding-top: 3rem;\n}\n.computer .computer_svg[data-v-47630e3f] {\n    width: 7.9786666667rem;\n    margin: 0 auto;\n    position: relative;\n}\n.computer .computer_svg .svgone[data-v-47630e3f] {\n      width: 7.97867rem;\n      height: 6.144rem;\n}\n.computer .computer_svg .svgone svg[data-v-47630e3f] {\n        width: 100%;\n        height: 100%;\n}\n.computer .computer_svg .svgtwo[data-v-47630e3f] {\n      position: absolute;\n      width: 1.8rem;\n      height: 2.8rem;\n      background: #efeef2;\n      top: 2.8266666667rem;\n      right: -.6rem;\n}\n.computer .computer_svg .svgtwo svg[data-v-47630e3f] {\n        width: 100%;\n        height: 100%;\n}\n.computer .computer_text[data-v-47630e3f] {\n    width: 100%;\n    text-align: center;\n    font-size: 0.73867rem;\n    color: #353535;\n    margin-top: 1rem;\n}\n.computer .computer_text[data-v-47630e3f]:nth-of-type(2) {\n    margin-top: 0.5rem;\n    font-size: 0.65333rem;\n    color: #999999;\n}\n.computer .soundoff[data-v-47630e3f] {\n    width: 10.752rem;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    padding-top: 2.1333333333rem;\n}\n.computer .soundoff .silence[data-v-47630e3f] {\n      width: 3.41333rem;\n      height: 3.41333rem;\n      background: #fff;\n      border-radius: 50%;\n      position: relative;\n}\n.computer .soundoff .silence svg[data-v-47630e3f] {\n        width: 1.32267rem;\n        height: 1.28rem;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n}\n.computer .exitw[data-v-47630e3f] {\n    width: 9.304rem;\n    margin: 0 auto;\n    padding-top: 2.1333333333rem;\n    padding-bottom: 1.0666666667rem;\n}\n.computer .exitw div[data-v-47630e3f] {\n      width: 9.304rem;\n      height: 1.52rem;\n      line-height: 1.52rem;\n      border: 3px solid #28b126;\n      font-size: 0.732rem;\n      color: #28b126;\n      border-radius: 5px;\n      text-align: center;\n}\n.warn[data-v-47630e3f] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.warn .warn_bg[data-v-47630e3f] {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background: #000;\n    opacity: .3;\n    top: 0;\n    left: 0;\n}\n.warn .warn_text[data-v-47630e3f] {\n    width: 12.04667rem;\n    height: 6.64267rem;\n    padding: 0.9386666667rem 1.152rem 0.7893333333rem 0.78933rem;\n    border-radius: 5px;\n    position: fixed;\n    background: #fff;\n    left: 0;\n    right: 0;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n}\n.warn .warn_text h1[data-v-47630e3f] {\n      font-size: 0.9rem;\n      color: #202020;\n      padding-bottom: 0.4533333333rem;\n}\n.warn .warn_text p[data-v-47630e3f] {\n      font-size: 0.7rem;\n      color: #202020;\n      padding-bottom: 1rem;\n}\n.warn .warn_text .warn_obt[data-v-47630e3f] {\n      display: flex;\n      justify-content: flex-end;\n}\n.warn .warn_text .warn_obt span[data-v-47630e3f] {\n        display: block;\n        font-size: 0.7rem;\n        color: #808080;\n}\n.warn .warn_text .warn_obt span[data-v-47630e3f]:nth-of-type(2) {\n        font-size: 0.7rem;\n        color: #1aad19;\n        margin-left: 1.0666666667rem;\n}\n',""])},416:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",{staticClass:"goback"},[n("span",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("关闭")])]),t._v(" "),n("section",{staticClass:"computer"},[n("section",{staticClass:"computer_svg"},[n("div",{staticClass:"svgone"},[n("svg",[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#computer"}})])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.mute,expression:"mute"}],staticClass:"svgtwo"},[n("svg",[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#phonemute"}})])])]),t._v(" "),n("p",{staticClass:"computer_text"},[t._v("Windows 微信已登录")]),t._v(" "),n("p",{staticClass:"computer_text"},[t._v("如果不是本人操作，可以立即退出")]),t._v(" "),n("section",{staticClass:"soundoff"},[n("div",{staticClass:"silence"},[n("svg",{on:{click:t.ifMute}},[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":t.mute?"#lightmute":"#mute"}})])]),t._v(" "),n("div",{staticClass:"silence"},[n("router-link",{attrs:{to:"/transfer"}},[n("svg",[n("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#file"}})])])],1)]),t._v(" "),n("section",{staticClass:"exitw"},[n("div",{on:{click:t.exitWindows}},[t._v("退出 Windows 微信")])])]),t._v(" "),n("section",{directives:[{name:"show",rawName:"v-show",value:t.coverShow,expression:"coverShow"}],staticClass:"warn"},[n("div",{staticClass:"warn_bg"}),t._v(" "),n("div",{staticClass:"warn_text"},[n("h1",[t._v("\n\t\t\t\t提示\n\t\t\t")]),t._v(" "),n("p",[t._v("是否退出 Windows 微信 ？")]),t._v(" "),n("div",{staticClass:"warn_obt"},[n("span",{on:{click:t.cancel}},[t._v("取消")]),t._v(" "),n("span",{on:{click:t.ensure}},[t._v("确定")])])])])])},o=[];a._withStripped=!0,n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})}}]);