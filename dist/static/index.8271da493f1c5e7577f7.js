(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{100:function(e,n,t){(e.exports=t(52)(!1)).push([e.i,".router-fade-enter-active, .router-fade-leave-active {\n  transition: opacity .2s;\n}\n.router-fade-enter, .router-fade-leave-active {\n  opacity: 0;\n}\n",""])},102:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=u(t(56)),r=u(t(84)),a=u(t(103)),o=u(t(134));function u(e){return e&&e.__esModule?e:{default:e}}i.default.use(r.default);n.default=new r.default.Store({state:{mute:!1,computershow:!0,infor:{},contactList:[],userInfo:{},newImg:"",imagestatus:!1,firendwarn:!0,consumerthing:!1,allgroup:[]},actions:o.default,mutations:a.default})},103:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i,r=l(t(58)),a=l(t(107)),o=l(t(87)),u=t(71);function l(e){return e&&e.__esModule?e:{default:e}}n.default=(i={},(0,r.default)(i,u.RECORD_MUTE,function(e,n){e.mute=n}),(0,r.default)(i,u.COMPUTER_SHOW,function(e,n){e.computershow=n}),(0,r.default)(i,u.SAVE_MESSAGE,function(e,n){e.infor={},e.infor=n}),(0,r.default)(i,u.SAVE_BEGINDIALOGUE,function(e,n){e.contactList=n}),(0,r.default)(i,u.SAVE_DIALOGUE,function(e,n){e.contactList=[n].concat((0,o.default)(e.contactList));var t=new a.default(e.contactList);e.contactList=[].concat((0,o.default)(t))}),(0,r.default)(i,u.GET_USERINFO,function(e,n){e.userInfo=n}),(0,r.default)(i,u.SAVE_THEMIMG,function(e,n){var t=n.newImg,i=n.imagestatus;e.newImg=t,e.imagestatus=i}),(0,r.default)(i,u.CHANGE_RED,function(e,n){e.firendwarn=n}),(0,r.default)(i,u.LOGIN_COVER,function(e,n){e.consumerthing=n}),(0,r.default)(i,u.GET_ALLGROUP,function(e,n){e.allgroup=n}),i)},134:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(85),r=t(71);n.default={getUserInfo:async function(e){var n=e.commit,t=(e.state,localStorage.getItem("user_id")),a=await(0,i.userInfo)(t);n(r.GET_USERINFO,a.user_info)},getDialog:async function(e){var n=e.commit;if(!(e.state.contactList.length>0)){var t=await(0,i.dialog)();n(r.SAVE_BEGINDIALOGUE,t)}}}},142:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.search=[{title:"朋友圈"},{title:"文章"},{title:"公众号"},{title:"小说"},{title:"音乐"},{title:"表情"}]},143:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.contacts=void 0;var i,r,a,o=function(e){return e&&e.__esModule?e:{default:e}}(t(58)),u=t(8);n.contacts={A:[(i={wxid:"achuqiao",headurl:u.imgurl+"chuqiao.jpg",petname:"a楚乔",sex:1,remarks:"楚乔",sdasd:"披荆斩棘",phone:"13333333333",sendobject:1,gallery:[u.imgurl+"yuwenyue.jpg",u.imgurl+"c.jpg",u.imgurl+"chenchangsheng.jpg"],district:"奴籍少女",source:"通过搜索手机号添加",newmeassage:"从前有个剑客，他人很冷，心很冷，剑很冷，最后冷死了"},(0,o.default)(i,"sendobject",1),(0,o.default)(i,"Messageblob",""),i),{wxid:"ayuwenyue",headurl:u.imgurl+"yuwenyue.jpg",petname:"a宇文玥",sex:0,remarks:"",sdasd:"涅槃而生",phone:"13000000000",gallery:[u.imgurl+"wudaoya.jpg",u.imgurl+"h.jpg",u.imgurl+"hexiao.jpg"],district:"宇文府",source:"通过搜索微信号添加",newmeassage:"你的肩膀，那么近却那么远，到最后想说的话都未曾讲。!",sendobject:1,Messageblob:""}],B:[],C:[{wxid:"caiawei",headurl:u.imgurl+"caiwei.jpg",petname:"采薇",sex:1,remarks:"",sdasd:"",phone:"13000000000",gallery:[u.imgurl+"caiwei.jpg",u.imgurl+"lichun.jpg"],district:"淳公主的侍女",source:"通过群聊添加",newmeassage:"一发型师在给一个女客人做头发的时候把她脸给烫伤了，后来经过协商。。。。他把她给娶了。。。",sendobject:1,Messageblob:""},{wxid:"chenchangsheng",headurl:u.imgurl+"chenchangsheng.jpg",petname:"陈长生",sex:0,remarks:"",sdasd:"逆天改命",phone:"13002566500",gallery:[u.imgurl+"b1.jpg",u.imgurl+"chenchangsheng.jpg",u.imgurl+"xiaoyu.jpg"],district:"河边",source:"通过搜索微信号添加",newmeassage:"你因为穷做过什么违心的事？——上班。",sendobject:1,Messageblob:""},{wxid:"chenyuan",headurl:u.imgurl+"chenyuan.jpg",petname:"程鸢",sex:0,remarks:"",sdasd:"",phone:"13002566500",gallery:[u.imgurl+"b1.jpg",u.imgurl+"chenyuan.jpg",u.imgurl+"yexun.jpg"],district:"燕洵手下将军",source:"通过群聊添加",newmeassage:"跟长辈聊天时，我们总是用尽方法想讨他们开心，而长辈三言两语就可以让我们烦心。",sendobject:1,Messageblob:""}],D:[{wxid:"dinglan",headurl:u.imgurl+"dinglan.jpg",petname:"丁澜",sex:0,remarks:"临惜",sdasd:"",phone:"13002566500",gallery:[u.imgurl+"b1.jpg",u.imgurl+"chenyuan.jpg",u.imgurl+"yexun.jpg"],district:"楚乔的五哥",source:"通过搜索微信号添加",newmeassage:"越是没有能力改变自己生活的人，越喜欢批评别人的改变。",sendobject:1,Messageblob:""}],E:[],F:[{wxid:"fengmian",headurl:u.imgurl+"fengmian.jpg",petname:"风眠",sex:0,remarks:"风眠",sdasd:"",phone:"13002566500",gallery:[u.imgurl+"b1.jpg",u.imgurl+"fengmian.jpg",u.imgurl+"yuanchun.jpg"],district:"燕洵的书童",source:"通过群聊添加",newmeassage:"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",sendobject:1,Messageblob:""}],G:[],H:[(r={wxid:"hexiao",headurl:u.imgurl+"hexiao.jpg",petname:"贺萧",sex:0,remarks:"",sdasd:"",phone:"13002566500",gallery:[u.imgurl+"b1.jpg",u.imgurl+"fengmian.jpg",u.imgurl+"yuanchun.jpg"],district:"燕洵的书童",source:"通过搜索手机号添加"},(0,o.default)(r,"source","通过群聊添加"),(0,o.default)(r,"newmeassage","全国人民都上听了，单吊敬业福。"),(0,o.default)(r,"sendobject",1),(0,o.default)(r,"Messageblob",""),r)],I:[],J:[(a={wxid:"jinghan",headurl:u.imgurl+"jinghan.jpg",petname:"景邯",sex:0,remarks:"",sdasd:"",phone:"13000000000",gallery:[u.imgurl+"jinghan.jpg",u.imgurl+"zhongyu.jpg"],district:"大夏云绸封地景小王爷",source:"通过群聊添加"},(0,o.default)(a,"source","通过群聊添加"),(0,o.default)(a,"newmeassage","春节发现，原来“喜新厌旧”还可以说成“辞旧迎新”这般高尚！"),(0,o.default)(a,"sendobject",1),(0,o.default)(a,"Messageblob",""),a),{wxid:"jingsi",headurl:u.imgurl+"jingsi.jpg",petname:"锦偲",sex:1,remarks:"",sdasd:"",phone:"13000000000",gallery:[u.imgurl+"jingsi.jpg",u.imgurl+"yuwenyue.jpg"],district:"青山院大丫鬟",source:"通过群聊添加",newmeassage:"刚领导问我：“你觉得这个项目最大的风险是什么？” ，我：“我怕加班猝死。。。”",sendobject:1,Messageblob:""}],K:[],L:[{wxid:"lanshuyi",headurl:u.imgurl+"lanshuyi.jpg",petname:"兰淑仪",sex:1,remarks:"兰淑仪",sdasd:"",phone:"13000000000",gallery:[u.imgurl+"lanshuyi.jpg",u.imgurl+"yuwenyue.jpg"],district:"大魏淑仪，来历成谜。",source:"通过群聊添加",newmeassage:"名人用过的东西叫“文物”；凡人用过的视为“废物”。",sendobject:1,Messageblob:""},{wxid:"liangshaoqing",headurl:u.imgurl+"liangshaoqing.jpg",petname:"梁少卿",sex:0,remarks:"",sdasd:"",phone:"13000000000",gallery:[u.imgurl+"lanshuyi.jpg",u.imgurl+"yuwenyue.jpg"],district:"二货书生",source:"通过搜索手机号添加",newmeassage:"名人酗酒称“豪饮”；凡人多喝叫“贪杯”。",sendobject:1,Messageblob:""},{wxid:"lichun",headurl:u.imgurl+"lichun.jpg",petname:"李策",sex:0,remarks:"",sdasd:"默默守护",phone:"13000000000",gallery:[u.imgurl+"lanshuyi.jpg",u.imgurl+"yuwenyue.jpg"],district:"南梁太子",source:"通过群聊添加",newmeassage:"名人蓬头垢面谓“艺术气质”；凡人不修边幅叫“流里流气”。",sendobject:1,Messageblob:""}],M:[{wxid:"mengfeng",headurl:u.imgurl+"mengfeng.jpg",petname:"蒙枫",sex:1,remarks:"",sdasd:"我是个杀手！",phone:"13000000000",gallery:[u.imgurl+"mengfeng.jpg",u.imgurl+"yuwenyue.jpg"],district:"往生营",source:"通过搜索手机号添加",newmeassage:"名人的空话谓“指导”；凡人的实话叫“唠叨”。",sendobject:1,Messageblob:""}],N:[],O:[],P:[],Q:[],R:[],S:[{wxid:"shugeuifei",headurl:u.imgurl+"shugeuifei.jpg",petname:"魏贵妃",sex:1,remarks:"",sdasd:"本宫乏了~",phone:"13000000000",gallery:[u.imgurl+"mengfeng.jpg",u.imgurl+"yuwenyue.jpg"],district:"魏阀",source:"通过群聊添加",newmeassage:"名人的空话谓“指导”；凡人的实话叫“唠叨”。",sendobject:1,Messageblob:""}],T:[],U:[],V:[],W:[{wxid:"wudaoya",headurl:u.imgurl+"wudaoya.jpg",petname:"乌道涯",sex:0,remarks:"",sdasd:"本宫乏了~",phone:"13000000000",gallery:[u.imgurl+"wudaoya.jpg",u.imgurl+"zhaosong.jpg"],district:"燕北",source:"通过群聊添加",newmeassage:"钱财多的回家少，美貌多的穿衣少，想法多的成事少，劳累多的收入少，权力多的时间少，情人多的安宁少，朋友多的困难少，锻炼多的疾病少。 ",sendobject:1,Messageblob:""}],X:[{wxid:"812571880",headurl:u.imgurl+"chen.jpg",petname:"百里辰",sex:1,sdasd:"披荆斩棘",phone:"15800319949",sendobject:1,gallery:[u.imgurl+"chen.jpg",u.imgurl+"cangdu.jpg",u.imgurl+"b1.jpg"],district:"上海 闵行",newmeassage:"你的肩膀，那么近却那么远，到最后想说的话都未曾讲。",Messageblob:""},{wxid:"xiaoheilong",headurl:u.imgurl+"h.jpg",petname:"小黑龙",sex:1,remarks:"吃货",sdasd:"我是个小吃货，啦啦啦啦~",phone:"13000000000",gallery:[u.imgurl+"h.jpg",u.imgurl+"d.jpg",u.imgurl+"hu.jpg"],district:"大陆道尊",source:"通过群聊添加",newmeassage:"皇叔是仁德的；爱民是如子的；特长是会哭的；眼泪是充足的。",sendobject:1,Messageblob:""},{wxid:"xiaoyu",headurl:u.imgurl+"xiaoyu.jpg",petname:"萧玉",sex:1,remarks:"",sdasd:"美女~",phone:"13000000000",gallery:[u.imgurl+"xiaoyu.jpg",u.imgurl+"yuwenyue.jpg"],district:"南梁",source:"通过群聊添加",newmeassage:"孔明是伟大的；治国是有方的；用兵是如神的；放火是专长的。 ",sendobject:1,Messageblob:""}],Y:[{wxid:"yexun",headurl:u.imgurl+"yexun.jpg",petname:"燕洵",sex:0,remarks:"",sdasd:"楚乔......",phone:"13000000000",gallery:[u.imgurl+"yexun.jpg",u.imgurl+"yuwenyue.jpg"],district:"西凉",source:"通过群聊添加",newmeassage:"庞统是可惜的；出场是很少的；长相是挺丑的；死的是很惨的。",sendobject:1,Messageblob:""},{wxid:"yuanchun",headurl:u.imgurl+"yuanchun.jpg",petname:"元淳",sex:1,remarks:"",sdasd:"喜欢燕洵",phone:"13000000000",gallery:[u.imgurl+"yuanchun.jpg",u.imgurl+"yuwenyue.jpg"],district:"西魏公主",source:"通过群聊添加",newmeassage:"云长是红脸的；胡子是很长的；自负是肯定的；倒霉是迟早的。",sendobject:1,Messageblob:""}],Z:[{wxid:"zhaosong",headurl:u.imgurl+"zhaosong.jpg",petname:"赵嵩",sex:0,remarks:"",sdasd:"小八小八小八",phone:"13000000000",gallery:[u.imgurl+"zhaosong.jpg",u.imgurl+"yuwenyue.jpg"],district:"大魏十三皇子",source:"通过群聊添加",newmeassage:"翼德是莽撞的；粗中是有细的；嗓门是挺大的；睡觉是睁眼的。",sendobject:1,Messageblob:""}]}},144:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.dialog=void 0;var i=t(8);n.dialog=[{wxid:"fileTransfer",headurl:i.imgurl+"robot.jpg",petname:"机器人聊天",remarks:"机器人聊天",newmeassage:"请从通讯录的联系人进入机器人单人聊天",sendobject:1}]},145:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.userWord=void 0;var i=t(8);n.userWord=[{wxid:"812571880",headurl:i.imgurl+"chen.jpg",sendobject:0,Messageblob:"人生没有彩排，每天都是直播，不仅收视率低，而且工资不高。"}]},146:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.circle=void 0;var i=t(8);n.circle=[{wxid:"chenchangsheng",headurl:i.imgurl+"chenchangsheng.jpg",petname:"陈长生",sex:0,remarks:"",statements:"逆天改命",time:"20分钟前",postimage:[],like:["楚乔","嗯"],comment:[],reviewshow:!1,reviewhide:!1,criticism:!1,flag:!0,suporthtml:"赞"},{wxid:"812571880",headurl:i.imgurl+"chen.jpg",petname:"百里辰",sex:1,remarks:"",statements:"身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。",time:"5分钟前",postimage:[i.imgurl+"chen.jpg",i.imgurl+"cangdu.jpg",i.imgurl+"chuqiao.jpg",i.imgurl+"h.jpg",i.imgurl+"dinglan.jpg",i.imgurl+"fengmian.jpg"],like:["嗯"],comment:[{wxid:"enen",petname:"嗯",remarks:"嗯",commentext:"看好你呦！"},{wxid:"achuqiao",petname:"a楚乔",remarks:"楚乔",commentext:"披荆斩棘"}],reviewshow:!1,reviewhide:!1,criticism:!1,flag:!0,suporthtml:"赞"},{wxid:"chenyuan",headurl:i.imgurl+"chenyuan.jpg",petname:"程鸢",sex:0,remarks:"",statements:"",time:"20分钟前",postimage:[i.imgurl+"d.jpg"],like:[],comment:[{wxid:"enen",petname:"嗯",remarks:"嗯",commentext:"看好你呦！"},{wxid:"achuqiao",petname:"a楚乔",remarks:"楚乔",commentext:"披荆斩棘"}],reviewshow:!1,reviewhide:!1,criticism:!1,flag:!0,suporthtml:"赞"},{wxid:"shugeuifei",headurl:i.imgurl+"mengfeng.jpg",petname:"魏贵妃",sex:0,remarks:"",statements:"",time:"1小时前",postimage:[i.imgurl+"mengfeng.jpg",i.imgurl+"wudaoya.jpg"],like:[],comment:[{wxid:"enen",petname:"嗯",remarks:"嗯",commentext:"看好你呦！"},{wxid:"achuqiao",petname:"a楚乔",remarks:"楚乔",commentext:"披荆斩棘"}],reviewshow:!1,reviewhide:!1,criticism:!1,flag:!0,suporthtml:"赞"}]},147:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.collect=void 0;var i=t(8);n.collect=[{wxid:"achuqiao",headurl:i.imgurl+"chuqiao.jpg",petname:"a楚乔",sex:1,remarks:"楚乔",collectext:"儿童节快到了，这边为大家推荐一款宝宝性格养成书哈。月销近万哦，会发声的绘本故事呢",collectimg:"",collectime:"今天"},{wxid:"caiawei",headurl:i.imgurl+"caiwei.jpg",petname:"采薇",sex:1,remarks:"",collectext:"",collectimg:i.imgurl+"d.jpg",collectime:"昨天"},{wxid:"liangshaoqing",headurl:i.imgurl+"liangshaoqing.jpg",petname:"梁少卿",sex:0,remarks:"",collectext:"",collectimg:i.imgurl+"d.jpg",collectime:"昨天"},{wxid:"chenchangsheng",headurl:i.imgurl+"chenchangsheng.jpg",petname:"陈长生",sex:0,remarks:"",collectext:"思落",collectimg:"",collectime:"昨天"},{wxid:"ayuwenyue",headurl:i.imgurl+"yuwenyue.jpg",petname:"a宇文玥",sex:0,remarks:"",collectext:"",collectimg:i.imgurl+"chenyuan.jpg",collectime:"昨天"}]},148:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.burse=void 0;var i=t(8);n.burse={"腾讯服务":[{servicelogo:i.imgurl+"facetoface.jpg",servicename:"面对面红包"},{servicelogo:i.imgurl+"fees.jpg",servicename:"手机充值"},{servicelogo:i.imgurl+"mac.jpg",servicename:"理财通"},{servicelogo:i.imgurl+"weili.jpg",servicename:"微粒贷借钱"},{servicelogo:i.imgurl+"qq.jpg",servicename:"Q币充值"},{servicelogo:i.imgurl+"leftfees.jpg",servicename:"生活缴费"},{servicelogo:i.imgurl+"cityservice.jpg",servicename:"城市服务"},{servicelogo:i.imgurl+"repay.jpg",servicename:"信用卡还款"},{servicelogo:i.imgurl+"publicbenefit.jpg",servicename:"腾讯公益"}],"第三方服务":[{servicelogo:i.imgurl+"che.jpg",servicename:"摩拜单车"},{servicelogo:i.imgurl+"didi.jpg",servicename:"滴滴出行"},{servicelogo:i.imgurl+"huoche.jpg",servicename:"火车票机票"},{servicelogo:i.imgurl+"jiudian.jpg",servicename:"酒店"},{servicelogo:i.imgurl+"meituan.jpg",servicename:"美团外卖"},{servicelogo:i.imgurl+"wuma.jpg",servicename:"58到家"},{servicelogo:i.imgurl+"meili.jpg",servicename:"美丽说"},{servicelogo:i.imgurl+"jd.jpg",servicename:"京东优选"},{servicelogo:i.imgurl+"movie.jpg",servicename:"电影演出赛事"},{servicelogo:i.imgurl+"play.jpg",servicename:"吃喝玩乐"}]}},149:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.album=void 0;var i=t(8);n.album=[{albummonth:"5月",albumday:"26",puretext:["人生很多事，终究是会随着时间好起来的。像很多人原本只是胖，久了就变好胖。"],diagram:[{diagramimg:[i.imgurl+"li.jpg",i.imgurl+"zhongyu.jpg"],diagramtext:"美女"},{diagramimg:[i.imgurl+"chuqiao.jpg",i.imgurl+"tao.jpg",i.imgurl+"d.jpg",i.imgurl+"yabao.jpg",i.imgurl+"chuqiao.jpg",i.imgurl+"chuqiao.jpg"],diagramtext:"胖兔"}]},{albummonth:"5月",albumday:"20",puretext:[],diagram:[{diagramimg:[i.imgurl+"hu.jpg"],diagramtext:"人生很多事，终究是会随着时间好起来的。像很多人原本只是胖，久了就变好胖。"}]},{albummonth:"5月",albumday:"10",puretext:["福建福清发现千年古墓 出土精美鱼纹砖","陕西将每年发布消费环境指数","英国警方继续搜捕曼彻斯特恐袭案嫌疑人同伙"],diagram:[]},{albummonth:"4月",albumday:"20",puretext:["福建福清发现千年古墓 出土精美鱼纹砖","陕西将每年发布消费环境指数","英国警方继续搜捕曼彻斯特恐袭案嫌疑人同伙"],diagram:[{diagramimg:[i.imgurl+"li.jpg",i.imgurl+"zhongyu.jpg",i.imgurl+"tao.jpg",i.imgurl+"d.jpg",i.imgurl+"yabao.jpg"],diagramtext:"美女"},{diagramimg:[i.imgurl+"li.jpg",i.imgurl+"zhongyu.jpg"],diagramtext:"美女"},{diagramimg:[i.imgurl+"yabao.jpg"],diagramtext:"胖兔"},{diagramimg:[i.imgurl+"li.jpg",i.imgurl+"zhongyu.jpg",i.imgurl+"zhongyu.jpg",i.imgurl+"zhongyu.jpg"],diagramtext:"美女"},{diagramimg:[i.imgurl+"chuqiao.jpg",i.imgurl+"tao.jpg",i.imgurl+"d.jpg",i.imgurl+"yabao.jpg"],diagramtext:"胖兔"}]},{albummonth:"3月",albumday:"06",puretext:["福建福清发现千年古墓 出土精美鱼纹砖","陕西将每年发布消费环境指数","英国警方继续搜捕曼彻斯特恐袭案嫌疑人同伙"],diagram:[{diagramimg:[i.imgurl+"li.jpg",i.imgurl+"zhongyu.jpg",i.imgurl+"tao.jpg",i.imgurl+"d.jpg",i.imgurl+"yabao.jpg"],diagramtext:"美女"},{diagramimg:[i.imgurl+"li.jpg",i.imgurl+"zhongyu.jpg"],diagramtext:"美女"},{diagramimg:[i.imgurl+"yabao.jpg"],diagramtext:"胖兔"},{diagramimg:[i.imgurl+"li.jpg",i.imgurl+"zhongyu.jpg",i.imgurl+"zhongyu.jpg",i.imgurl+"zhongyu.jpg"],diagramtext:"美女"},{diagramimg:[i.imgurl+"chuqiao.jpg",i.imgurl+"tao.jpg",i.imgurl+"d.jpg",i.imgurl+"yabao.jpg"],diagramtext:"胖兔"}]}]},150:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.groupchat=void 0;var i=t(8);n.groupchat={petname:"微信交流群~",grouphead:[{username:"chenchangsheng",avatar:i.imgurl+"chenchangsheng.jpg",petname:"陈长生",remarks:"",content:"今天下雨",sendobject:1},{username:"812571880",avatar:i.imgurl+"chen.jpg",petname:"百里辰",content:"今天下雨",sendobject:1},{username:"achuqiao",avatar:i.imgurl+"chuqiao.jpg",petname:"a楚乔",remarks:"楚乔",sendobject:1,content:"嗯"},{username:"caiawei",avatar:i.imgurl+"caiwei.jpg",petname:"采薇",remarks:"",phone:"13000000000",sendobject:1,content:"一发型师在给一个女客人做头发的时候把她脸给烫伤了，后来经过协商。。。。他把她给娶了。。。"}]}},151:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.chatmore={0:[{chatSvgid:"#personimg",chatSvgname:"相册"},{chatSvgid:"#shot",chatSvgname:"拍摄"},{chatSvgid:"#camera",chatSvgname:"视频聊天"},{chatSvgid:"#positions",chatSvgname:"位置"},{chatSvgid:"#redbag",chatSvgname:"红包"},{chatSvgid:"#banktransfer",chatSvgname:"转账"},{chatSvgid:"#person",chatSvgname:"名片"},{chatSvgid:"#voiceinput",chatSvgname:"语音输入"}],1:[{chatSvgid:"#wxcollect",chatSvgname:"我的收藏"}]}},166:function(e,n,t){var i=t(167);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(53)(i,r);i.locals&&(e.exports=i.locals)},167:function(e,n,t){(e.exports=t(52)(!1)).push([e.i,'body, div, span, header, footer, nav, section, aside, article, ul, dl, dt, dd, li, a, p, h1, h2, h3, h4, h5, h6, i, b, textarea, button, input, select, figure, figcaption {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  font-style: normal;\n  text-decoration: none;\n  border: none;\n  color: #666;\n  box-sizing: border-box;\n  font-weight: lighter;\n  font-family: Arial,\'Hiragino Sans GB\',Microsoft Yahei,Helvetica Neue,Helvetica,sans-serif !important;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-smoothing: antialiased; }\n  body:focus, div:focus, span:focus, header:focus, footer:focus, nav:focus, section:focus, aside:focus, article:focus, ul:focus, dl:focus, dt:focus, dd:focus, li:focus, a:focus, p:focus, h1:focus, h2:focus, h3:focus, h4:focus, h5:focus, h6:focus, i:focus, b:focus, textarea:focus, button:focus, input:focus, select:focus, figure:focus, figcaption:focus {\n    outline: none; }\n\ninput[type="button"], input[type="submit"], input[type="search"], input[type="reset"] {\n  -webkit-appearance: none; }\n\ntextarea {\n  -webkit-appearance: none; }\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  background-color: #ebebeb; }\n\n.clear:after {\n  content: \'\';\n  display: block;\n  clear: both; }\n\n.clear {\n  zoom: 1; }\n\n.back_img {\n  background-repeat: no-repeat;\n  background-size: 100% 100%; }\n\n.margin {\n  margin: 0 auto; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.hide {\n  display: none; }\n\n.show {\n  display: block; }\n\n.ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.scroll {\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.tgl {\n  display: none; }\n\n.tgl, .tgl:after, .tgl:before, .tgl *, .tgl *:after, .tgl *:before, .tgl + .tgl-btn {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.tgl::-moz-selection, .tgl:after::-moz-selection, .tgl:before::-moz-selection, .tgl *::-moz-selection, .tgl *:after::-moz-selection, .tgl *:before::-moz-selection, .tgl + .tgl-btn::-moz-selection {\n  background: none; }\n\n.tgl::selection, .tgl:after::selection, .tgl:before::selection, .tgl *::selection, .tgl *:after::selection, .tgl *:before::selection, .tgl + .tgl-btn::selection {\n  background: none; }\n\n.tgl + .tgl-btn {\n  outline: 0;\n  display: block;\n  width: 1.92rem;\n  height: 1.024rem;\n  position: relative;\n  cursor: pointer; }\n\n.tgl + .tgl-btn:after, .tgl + .tgl-btn:before {\n  position: relative;\n  display: block;\n  content: "";\n  width: 50%;\n  height: 100%; }\n\n.tgl + .tgl-btn:after {\n  left: 0; }\n\n.tgl + .tgl-btn:before {\n  display: none; }\n\n.tgl:checked + .tgl-btn:after {\n  left: 50%; }\n\n.tgl-light + .tgl-btn {\n  background: #999999;\n  border-radius: 2em;\n  padding: 2px;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease; }\n\n.tgl-light + .tgl-btn:after {\n  border-radius: 50%;\n  background: #fff;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease; }\n\n.tgl-light:checked + .tgl-btn {\n  background: #1aad16; }\n',""])},168:function(e,n,t){"use strict";!function(e,n){var t=e.documentElement,i="orientationchange"in window?"orientationchange":"resize",r=function(){var e=t.clientWidth;e&&(t.style.fontSize=e/320*20+"px")};e.addEventListener&&(n.addEventListener(i,r,!1),e.addEventListener("DOMContentLoaded",r,!1))}(document,window)},28:function(e,n,t){var i=t(100);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(53)(i,r);i.locals&&(e.exports=i.locals)},71:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.RECORD_MUTE="RECORD_MUTE",n.COMPUTER_SHOW="COMPUTER_SHOW",n.SAVE_MESSAGE="SAVE_MESSAGE",n.SAVE_BEGINDIALOGUE="SAVE_BEGINDIALOGUE",n.SAVE_DIALOGUE="SAVE_DIALOGUE",n.INIT_DIALOGUE="INIT_DIALOGUE",n.GET_USERINFO="GET_USERINFO",n.ENLARGE_HEAD="ENLARGE_HEAD",n.SAVE_THEMIMG="SAVE_THEMIMG",n.CHANGE_RED="CHANGE_RED",n.LOGIN_COVER="LOGIN_COVER",n.GET_ALLGROUP="GET_ALLGROUP"},8:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=void 0;n.baseUrl=i="http://101.201.234.189:8081",n.baseUrl=i,n.imgurl="http://localhost:8081/files/images/"},83:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("keep-alive",[this.$route.meta.keepAlive?n("router-view"):this._e()],1)],1),this._v(" "),n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[this.$route.meta.keepAlive?this._e():n("router-view")],1)],1)};i._withStripped=!0;t(99);var r=t(54),a=Object(r.a)({},i,[],!1,null,null,null);a.options.__file="src/app.vue";n.default=a.exports},85:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getHistory=n.chatData=n.album=n.burse=n.collect=n.circle=n.userWord=n.userInfo=n.groupChat=n.dialog=n.contactList=n.searchList=void 0;var i=f(t(55)),r=h(t(142)),a=h(t(143)),o=h(t(144)),u=h(t(145)),l=h(t(146)),c=h(t(147)),s=h(t(148)),g=h(t(149)),m=h(t(150)),d=h(t(151)),p=f(t(86));function h(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}function f(e){return e&&e.__esModule?e:{default:e}}var b=function(e){return new i.default(function(n,t){n(e)})};n.searchList=function(){return b(r.search)},n.contactList=function(){return b(a.contacts)},n.dialog=function(){return b(o.dialog)},n.groupChat=function(){return b(m.groupchat)},n.userInfo=function(e){return(0,p.default)("/user/info",{user_id:e})},n.userWord=function(){return b(u.userWord)},n.circle=function(){return b(l.circle)},n.collect=function(){return b(c.collect)},n.burse=function(){return b(s.burse)},n.album=function(){return b(g.album)},n.chatData=function(){return b(d.chatmore)},n.getHistory=function(e){return(0,p.default)("/chat/history",e)}},86:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=l(t(90)),r=l(t(55)),a=l(t(88)),o=l(t(89)),u=t(8);function l(e){return e&&e.__esModule?e:{default:e}}n.default=async function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"fetch";if(t=t.toUpperCase(),e=u.baseUrl+e,"GET"==t){var c="";(0,o.default)(n).forEach(function(e){c+=e+"="+n[e]+"&"}),""!==c&&(c=c.substr(0,c.lastIndexOf("&")),e=e+"?"+c)}if(!window.fetch||"fetch"!=l)return new r.default(function(r,o){var u=void 0;u=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject;var l="";"POST"==t&&(l=(0,a.default)(n)),u.open(t,e,!0),u.setRequestHeader("Content-type","application/x-www-form-urlencoded"),u.send(l),u.onreadystatechange=function(){if(4==u.readyState)if(200==u.status){var e=u.response;"object"!==(void 0===e?"undefined":(0,i.default)(e))&&(e=JSON.parse(e)),r(e)}else o(u)}});var s={credentials:"include",method:t,headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",cache:"force-cache"};"POST"==t&&Object.defineProperty(s,"body",{value:(0,a.default)(n)});try{var g=await fetch(e,s);return await g.json()}catch(e){throw new Error(e)}}},93:function(e,n,t){e.exports=t(94)},94:function(e,n,t){"use strict";var i=g(t(56)),r=g(t(97)),a=g(t(98)),o=g(t(102));t(166),t(168);var u=g(t(169)),l=g(t(83)),c=g(t(91)),s=g(t(92));function g(e){return e&&e.__esModule?e:{default:e}}i.default.prototype.$axios=c.default,i.default.prototype.qs=s.default,"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){u.default.attach(document.body)},!1),i.default.use(r.default);var m=new r.default({routes:a.default,mode:"history",strict:!1,scrollBehavior:function(e,n,t){return t||{x:0,y:e.meta.savedPosition||0}}});m.beforeEach(function(e,n,t){n.meta.keepAlive&&(n.meta.savedPosition=document.body.scrollTop),t()}),new i.default({el:"#weixin",router:m,render:function(e){return e(l.default)},store:o.default})},98:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(t(83));n.default=[{path:"/",component:i.default,children:[{path:"",redirect:"/dialogue"},{path:"/dialogue",component:function(e){return Promise.all([t.e(0),t.e(1),t.e(12)]).then(function(){return e(t(195))}.bind(null,t)).catch(t.oe)}},{path:"/singlechat",component:function(e){return Promise.all([t.e(0),t.e(2),t.e(30)]).then(function(){return e(t(196))}.bind(null,t)).catch(t.oe)},children:[{path:"/singlechat/chatmessage",component:function(e){return Promise.all([t.e(0),t.e(7)]).then(function(){return e(t(198))}.bind(null,t)).catch(t.oe)}}]},{path:"/groupchat",component:function(e){return Promise.all([t.e(0),t.e(2),t.e(16)]).then(function(){return e(t(197))}.bind(null,t)).catch(t.oe)},children:[{path:"/groupchat/groupchatmessage",component:function(e){return t.e(17).then(function(){return e(t(199))}.bind(null,t)).catch(t.oe)}}]},{path:"/addressbook",component:function(e){return Promise.all([t.e(0),t.e(1),t.e(4)]).then(function(){return e(t(200))}.bind(null,t)).catch(t.oe)},meta:{keepAlive:!0},children:[{path:"/addressbook/details",component:function(e){return Promise.all([t.e(0),t.e(11)]).then(function(){return e(t(201))}.bind(null,t)).catch(t.oe)},children:[{path:"/addressbook/details/more",component:function(e){return Promise.all([t.e(0),t.e(23)]).then(function(){return e(t(202))}.bind(null,t)).catch(t.oe)}}]}]},{path:"/find",component:function(e){return Promise.all([t.e(0),t.e(1),t.e(14)]).then(function(){return e(t(203))}.bind(null,t)).catch(t.oe)},children:[{path:"/find/friendcircle",component:function(e){return Promise.all([t.e(0),t.e(15)]).then(function(){return e(t(204))}.bind(null,t)).catch(t.oe)}},{path:"/find/miniapps",component:function(e){return t.e(22).then(function(){return e(t(205))}.bind(null,t)).catch(t.oe)}}]},{path:"/search",component:function(e){return t.e(28).then(function(){return e(t(215))}.bind(null,t)).catch(t.oe)}},{path:"/me",component:function(e){return Promise.all([t.e(0),t.e(1),t.e(21)]).then(function(){return e(t(206))}.bind(null,t)).catch(t.oe)},children:[{path:"/me/settings",component:function(e){return t.e(29).then(function(){return e(t(214))}.bind(null,t)).catch(t.oe)},children:[{path:"/me/settings/newmessage",component:function(e){return t.e(24).then(function(){return e(t(216))}.bind(null,t)).catch(t.oe)}},{path:"/me/settings/disturbance",component:function(e){return t.e(13).then(function(){return e(t(217))}.bind(null,t)).catch(t.oe)}},{path:"/me/settings/chat",component:function(e){return t.e(6).then(function(){return e(t(218))}.bind(null,t)).catch(t.oe)}},{path:"/me/settings/privacy",component:function(e){return t.e(27).then(function(){return e(t(219))}.bind(null,t)).catch(t.oe)}},{path:"/me/settings/currency",component:function(e){return t.e(10).then(function(){return e(t(220))}.bind(null,t)).catch(t.oe)}},{path:"/me/settings/aboutwc",component:function(e){return t.e(3).then(function(){return e(t(221))}.bind(null,t)).catch(t.oe)}},{path:"/me/settings/help",component:function(e){return t.e(18).then(function(){return e(t(222))}.bind(null,t)).catch(t.oe)}},{path:"/me/settings/login",component:function(e){return t.e(20).then(function(){return e(t(223))}.bind(null,t)).catch(t.oe)}}]},{path:"/me/personaldetails",component:function(e){return Promise.all([t.e(0),t.e(25)]).then(function(){return e(t(207))}.bind(null,t)).catch(t.oe)}},{path:"/me/cardbag",component:function(e){return t.e(5).then(function(){return e(t(211))}.bind(null,t)).catch(t.oe)}},{path:"/me/photoalbum",component:function(e){return t.e(26).then(function(){return e(t(208))}.bind(null,t)).catch(t.oe)}},{path:"/me/collect",component:function(e){return t.e(8).then(function(){return e(t(209))}.bind(null,t)).catch(t.oe)}},{path:"/me/wallet",component:function(e){return t.e(34).then(function(){return e(t(210))}.bind(null,t)).catch(t.oe)}}]},{path:"/computer",component:function(e){return Promise.all([t.e(0),t.e(1),t.e(9)]).then(function(){return e(t(212))}.bind(null,t)).catch(t.oe)}},{path:"/transfer",component:function(e){return Promise.all([t.e(0),t.e(1),t.e(31)]).then(function(){return e(t(213))}.bind(null,t)).catch(t.oe)}}]}]},99:function(e,n,t){"use strict";var i=t(28);t.n(i).a}},[[93,32,33,0]]]);