!function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],d=0,_=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&_.push(a[i][0]),a[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);for(u&&u(e);_.length;)_.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={7:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([150,0,1,2,3,4,5,8]),n()}({150:function(t,e,n){"use strict";var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},a=p(n(151)),r=p(n(152)),i=p(n(70)),o=p(n(154)),l=p(n(155)),c=p(n(156)),u=p(n(157)),d=p(n(159)),_=p(n(383));function p(t){return t&&t.__esModule?t:{default:t}}a.default.polyfill();var f=o.default.prototype.push;o.default.prototype.push=function(t){return f.call(this,t).catch((function(t){return t}))},r.default.use(o.default),r.default.use(i.default);var v=new i.default.Store({modules:{sys:l.default,lang:c.default}});r.default.use(u.default),r.default.prototype.interval_num=0,r.default.prototype.interval_ms=0,r.default.prototype.eth=d.default,r.default.prototype.toDecimal=function(t,e){var n=Math.pow(10,e);return Math.round(parseFloat(t)*n)/n},r.default.prototype.diff_time=function(t,e,n){if(n<=0)return"-"+t.day+"-"+t.hour+"-"+t.minute+"-"+t.sec;var s=(new Date).getTime()/1e3-parseInt(n),a=e+t.day;return s>=3600?(a+=Math.floor(s/3600)+t.hour,s%=3600):a+="0"+t.hour,s>=60?(a+=Math.floor(s/60)+t.minute,s%=60):a+="0"+t.minute,a+=parseInt(s)+t.sec},r.default.prototype.post=function(t,e,n){var s=new XMLHttpRequest;s.onload=function(){200===s.status&&n(JSON.parse(s.response))},s.open("POST",e),s.send(t)},r.default.prototype.formatDate=function(t){var e=t.getFullYear(),n=t.getMonth()+1;n=n<10?"0"+n:n;var s=t.getDate();s=s<10?"0"+s:s;var a=t.getHours();a=a<10?"0"+a:a;var r=t.getMinutes();r=r<10?"0"+r:r;var i=t.getSeconds();return e+"-"+n+"-"+s+" "+a+":"+r+":"+(i=i<10?"0"+i:i)},r.default.prototype.PrefixInteger=function(t,e){return(Array(e).join(0)+t).slice(-e)};var g=new o.default({mode:"history",routes:[{name:"home",path:"/SuperLuckyStar",component:_.default}]});new r.default({el:"#app",router:g,store:v,data:{key:""},methods:{open_router:function(t,e){null==e?g.push({name:t}):g.push({name:t,query:{c:e}})}},components:{},created:function(){},mounted:function(){this.open_router("home",null),d.default.init()},computed:s({},i.default.mapGetters({lang:"lang"}))})},155:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={state:{sec:0,skey:{lang:"en",url:"https://100luck.org",is_main_net:0,addr:"",balance:0,netname:"",single_index:0,single_num_now:0,single_num_max:0,contracts_balance:0,total_num:0}},getters:{skey:function(t){return t.skey},GETSEC:function(t){return t.sec}},mutations:{setSec:function(t,e){t.sec=e},setKey:function(t,e){t.skey[e.key]=e.val}},actions:{SETKEY:function(t,e){t.commit("setKey",e)},SETSEC:function(t,e){t.commit("setSec",e)}}}},156:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={state:{lang:"en",cn:{select_lang:"语言选择",install_note:"当前钱包不支持Web3,请安装MetaMask。",install_MetaMask:"安装MetaMask",get_net:"正在获取网络...",probability:"中奖率",game_progress:"游戏进度",notes_per_game:"每投100注获奖11注",desc_game:"*注：投注时一旦转出ETH,稍等片刻后请查看投注记录是否成功,请勿重复提交。",per_note:"每注",balance:"余额",load_addr:"获取地址...",now_bet:"立即投注",play_rules:"游戏规则",rules_note:"每局100注,每注固定1ETH,每局产生10个幸运星和1个超级幸运星。",bet_record:"投注记录",lucky_star:"幸运星",block_chain:"区块链",contract_balance:"合约余额",contract_addr:"合约地址",lucky_star_rules:"幸运星产生规则",progress:"进度",reward:"奖励",super_lucky_star:"超级幸运星",notes10:"第10注",notes20:"第20注",notes30:"第30注",notes40:"第40注",notes50:"第50注",notes60:"第60注",notes70:"第70注",notes80:"第80注",notes90:"第90注",notes100:"第100注",confirm_bet:"确定要投注吗？",submit_success:"提交成功",submit_fail:"提交失败"},en:{select_lang:"Select Language",install_note:"Currently the wallet does not support Web3, please install MetaMask.",install_MetaMask:"Install MetaMask",get_net:"get network ...",probability:"Probability ",game_progress:"Game progress",notes_per_game:"11 awards for every 100 votes",desc_game:"*tip: Once the bet is transferred out of eth, please check whether the bet record is successful after a while. Please do not submit again.",per_note:"Per Note ",balance:"Balance",load_addr:"Get address ...",now_bet:"Now Bet",play_rules:"Play Rules",rules_note:"Each round is 100, each round is fixed with 1 eth, and each round produces 10 lucky stars and 1 super lucky star.",bet_record:"Bet Record",lucky_star:"Lucky Record",block_chain:"Block Chain",contract_balance:"Contract Balance",contract_addr:"Contract Address",lucky_star_rules:"Lucky star rules",progress:"Progress",reward:"Reward",super_lucky_star:"Super lucky star",notes10:"Notes 10",notes20:"Notes 20",notes30:"Notes 30",notes40:"Notes 40",notes50:"Notes 50",notes60:"Notes 60",notes70:"Notes 70",notes80:"Notes 80",notes90:"Notes 90",notes100:"Notes 100",confirm_bet:"Are you sure you want to bet?",submit_success:"Submit successfully",submit_fail:"Failure to submit"}},getters:{getLang:function(t){return t.lang},lang:function(t){return"cn"==t.lang?t.cn:t.en}},mutations:{setLang:function(t,e){t.lang=e}},actions:{SETLANG:function(t,e){t.commit("setLang",e)}}}},159:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r(n(160)),a=r(n(382));function r(t){return t&&t.__esModule?t:{default:t}}e.default={status:0,currentProvider:null,currentAddr:"",contract_address:"0xc7e96D467f0Fa78fD812f687674af35024868512",currentNet:0,netName:"",init_num:0,gasPrice:1e10,contract:null,web3:null,isOld:0,filter:null,init:function(){if(null!=window.ethereum&&null!=window.ethereum){this.currentProvider=window.ethereum,this.status=1;try{var t=this;this.currentProvider.enable().then((function(e){t.status=2})),this.isOld=0}catch(t){return void console.error("User denied account access")}}else"undefined"!=typeof web3?(this.currentProvider=web3,this.status=2,this.isOld=1):null!=window.web3&&null!=window.web3?(this.currentProvider=window.web3.currentProvider,this.status=2,this.isOld=0):this.status=-1},CreateWeb3:function(t){try{if(null!=this.currentProvider&&2==this.status){var e=this;1==this.isOld?(this.currentAddr=this.currentProvider.eth.defaultAccount,this.currentProvider.version.getNetwork((function(n,s){n||(e.setNetId(s+""),t(e.currentAddr))})),this.web3=new s.default(this.currentProvider)):(this.web3=new s.default(this.currentProvider),null!=this.web3.currentProvider.selectedAddress&&null!=this.web3.currentProvider.selectedAddress?(this.currentAddr=this.web3.currentProvider.selectedAddress,this.init_num+=1):this.web3.eth.getAccounts().then((function(n){e.currentAddr=n[0],e.init_num+=1,e.init_num>=2&&t(e.currentAddr)})),this.web3.eth.net.getId().then((function(n){e.setNetId(n+""),e.init_num+=1,e.init_num>=2&&t(e.currentAddr)}))),null!=this.web3&&null!=this.web3||(this.status=0),this.contract=new this.web3.eth.Contract(a.default,this.contract_address),this.web3.eth.getGasPrice().then((function(t){isNaN(t)||(e.gasPrice=t)}))}}catch(t){this.status=0,console.log(t.message)}},getBalance:function(t){try{null!=this.web3&&this.web3.eth.getBalance(this.currentAddr).then(t)}catch(t){console.log(t.message)}},setNetId:function(t){switch(t){case"1":this.currentNet=1,this.netName="Main Net";break;case"2":this.currentNet=2,this.netName="Morden Net";break;case"3":this.currentNet=3,this.netName="Ropsten Net",this.NetDamin="https://ropsten.etherscan.io/";break;case"4":this.currentNet=5,this.netName="Rinkeby Net";break;case"42":this.currentNet=5,this.netName="Kovan Net";break;default:this.currentNet=t,this.netName="Unknown Net"}},Methods_MultipleInvest:function(t,e){null!=this.contract&&this.contract.methods.multiple_invest().send({from:this.currentAddr,value:1e18*t,gasPrice:this.gasPrice,gas:6e6}).then((function(t){e(t)}))},Methods_Info:function(t){null!=this.contract&&this.contract.methods.info().call({from:this.currentAddr,value:0}).then((function(e){t(e)}))},Methods_AddrList:function(t){null!=this.contract&&this.contract.methods.addr_list().call({from:this.currentAddr,value:0}).then((function(e){t(e)}))},Methods_PrizeList:function(t){null!=this.contract&&this.contract.methods.prize_list().call({from:this.currentAddr,value:0}).then((function(e){t(e)}))}}},171:function(t,e){},207:function(t,e){},209:function(t,e){},257:function(t,e){},259:function(t,e){},290:function(t,e){},382:function(t){t.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"info","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"multiple_invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"prize_list","outputs":[{"name":"","type":"address[]"},{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addr_list","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"addr","type":"address"},{"indexed":false,"name":"index","type":"uint256"},{"indexed":false,"name":"num","type":"uint256"}],"name":"Invest","type":"event"}]')},383:function(t,e,n){"use strict";n.r(e);var s=n(69),a=n(47);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);var i=n(149),o=Object(i.a)(a.default,s.a,s.b,!1,null,null,null);o.options.__file="src/page/home.vue",e.default=o.exports},47:function(t,e,n){"use strict";n.r(e);var s=n(48),a=n.n(s);for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);e.default=a.a},69:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"base-content"},[n("div",{staticClass:"upper-box"},[n("div",{staticClass:"upper-top-box"},[n("span",{staticClass:"lang-select float-l",staticStyle:{visibility:"hidden"}},[t._v("EN/CN")]),t._v(" "),n("img",{staticStyle:{height:"40px"},attrs:{src:"https://raw.githubusercontent.com/lucky-start/SuperLuckyStar/master/images/logo.png"}}),t._v(" "),n("span",{staticClass:"lang-select float-r",on:{click:function(e){return t.selectLang()}}},[t._v("EN/CN")])]),t._v(" "),n("div",{staticClass:"upper-dash-board"},[n("p",{staticStyle:{margin:"0",height:"20px"}}),t._v(" "),n("p",{staticClass:"margin0",staticStyle:{color:"#ffeb3b"}},[n("span",{staticStyle:{"font-size":"30px"}},[t._v(t._s(t.lang.probability))]),t._v(" "),n("span",{staticClass:"fs36"},[t._v("11%")])]),t._v(" "),n("p",{staticClass:"margin0 fs16"},[t._v("\n                "+t._s(t.lang.game_progress)+": \n                "),"cn"==t.getLang?n("span",[t._v("第"+t._s(t.skey.single_index)+"局"+t._s(t.skey.single_num_now)+"注")]):t._e(),t._v(" "),"en"==t.getLang?n("span",[t._v("Bureau "+t._s(t.skey.single_index)+" note "+t._s(t.skey.single_num_now))]):t._e()]),t._v(" "),n("p",[t._v(t._s(t.lang.notes_per_game))])]),t._v(" "),n("p",{staticStyle:{margin:"0",height:"120px"}})]),t._v(" "),n("div",{staticClass:"panel-invest-box"},[n("div",{staticClass:"panel-invest-dashboard"},[n("p",{staticClass:"margin0 fs14",staticStyle:{color:"#ff4a4a"}},[t._v(t._s(t.lang.desc_game))]),t._v(" "),n("p",{staticClass:"margin0 fs36 align-c",staticStyle:{padding:"15px 0 10px 0",color:"#d42173"}},[n("span",{staticClass:"fs18"},[t._v(t._s(t.lang.per_note))]),t._v("1"),n("span",{staticClass:"fs18"},[t._v("ETH")])]),t._v(" "),n("p",{staticClass:"margin0 fs14 align-c",staticStyle:{padding:"0",color:"#5e5e5e"}},[t._v(t._s(t.lang.balance)+":"+t._s(t.skey.balance)+"ETH")]),t._v(" "),n("p",{staticClass:"margin0 fs14 align-c",staticStyle:{padding:"0px 0 15px 0",color:"#7f7f7f"}},[t._v(t._s(t.skey.addr.length>0?t.subAddr(t.skey.addr):t.lang.load_addr))]),t._v(" "),n("p",{staticClass:"margin0 fs14 align-c"},[n("input",{staticClass:"btn invest-btn",staticStyle:{height:"40px","line-height":"40px"},attrs:{type:"button",value:t.lang.now_bet},on:{click:function(e){return t.invest()}}})]),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"margin0 fs14",staticStyle:{"border-bottom":"1px solid #cbcbcb",color:"#818181"}},[t._v(t._s(t.lang.play_rules))]),t._v(" "),n("p",{staticClass:"align-l",staticStyle:{color:"#696969"}},[t._v("\n                "+t._s(t.lang.rules_note)+"\n            ")])])]),t._v(" "),n("br"),n("br"),t._v(" "),n("div",{staticClass:"below-box"},[n("div",{staticClass:"panel-content-box"},[n("p",{staticClass:"list-box-title"},[n("span",{class:"1"==t.show_last_addr?"list-tag":"",on:{click:function(e){return t.clickTagLast(1)}}},[t._v(t._s(t.lang.bet_record))]),t._v("\n                    \n                "),n("span",{class:"0"==t.show_last_addr?"list-tag":"",on:{click:function(e){return t.clickTagLast(0)}}},[t._v(t._s(t.lang.lucky_star))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:1==t.show_last_addr,expression:"show_last_addr==1"}],staticClass:"list-box"},[t._l(t.invest_addr_list,(function(e,s){return n("p",{key:s+"",class:"addr-list-item "+(e.toLowerCase()==t.skey.addr.toLowerCase()?"active":"")},[n("span",{staticClass:"list-no"},[t._v(t._s(t.PrefixInteger(t.invest_addr_list.length-s,3)))]),t._v(" "),n("span",{staticClass:"list-addr",on:{click:function(n){return t.open_addr(e)}}},[t._v(t._s(t.subAddr(e.toLowerCase())))])])})),t._v(" "),n("br"),n("br")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.show_last_addr,expression:"show_last_addr==0"}],staticClass:"list-box"},[t._l(t.prize_addr_list,(function(e,s){return n("p",{key:s+"",class:"addr-list-item2 "+(e.toLowerCase()==t.skey.addr.toLowerCase()?"active":"")},[n("span",[t._v(t._s(t.formatDate(new Date(1e3*t.prize_time_list[s]))))]),n("br"),t._v(" "),n("span",{on:{click:function(n){return t.open_addr(e)}}},[t._v(t._s(t.subAddr(e.toLowerCase())))]),t._v(" "),n("span",{staticClass:"list-addr"},[t._v(t._s(t.toDecimal(t.prize_amount_list[s]/1e18,4))+" ETH")])])})),t._v(" "),n("br"),n("br")],2)])]),t._v(" "),n("br"),n("br"),t._v(" "),n("div",{staticClass:"below-box"},[n("div",{staticClass:"panel-content-box nook-left-top",staticStyle:{height:"auto"}},[n("br"),t._v(" "),n("p",{staticClass:"margin0 fs16",staticStyle:{padding:"4px",color:"#464646","text-align":"center"}},[t._v(t._s(t.lang.lucky_star_rules))]),t._v(" "),n("table",{staticClass:"table- tb-award-rules",attrs:{border:"1",cellspacing:"1",cellpadding:"1"}},[n("tr",{staticStyle:{"font-weight":"bold"}},[n("td",[t._v(t._s(t.lang.progress))]),n("td",[t._v(t._s(t.lang.probability))]),n("td",[t._v(t._s(t.lang.reward))])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.lang.notes10))]),n("td",[t._v("1/10")]),n("td",[t._v("1 ETH")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.lang.notes20))]),n("td",[t._v("1/20")]),n("td",[t._v("1.5 ETH")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.lang.notes30))]),n("td",[t._v("1/30")]),n("td",[t._v("2 ETH")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.lang.notes40))]),n("td",[t._v("1/40")]),n("td",[t._v("2.5 ETH")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.lang.notes50))]),n("td",[t._v("1/50")]),n("td",[t._v("3 ETH")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.lang.notes60))]),n("td",[t._v("1/60")]),n("td",[t._v("3.5 ETH")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.lang.notes70))]),n("td",[t._v("1/70")]),n("td",[t._v("4 ETH")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.lang.notes80))]),n("td",[t._v("1/80")]),n("td",[t._v("4.5 ETH")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.lang.notes90))]),n("td",[t._v("1/90")]),n("td",[t._v("5 ETH")])]),t._v(" "),n("tr",[n("td",[t._v(t._s(t.lang.notes100))]),n("td",[t._v("1/100")]),n("td",[t._v("5.5 ETH")])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"glyphicon glyphicon-star",attrs:{"aria-hidden":"true"}}),t._v("\n                        "+t._s(t.lang.super_lucky_star)+"\n                    ")]),t._v(" "),n("td",[t._v("1/100")]),n("td",[t._v("62.5 ETH")])])]),t._v(" "),n("br")])]),t._v(" "),n("div",{staticClass:"foot-box white"},[n("span",{staticClass:"foot-title"},[n("span",{staticClass:"glyphicon glyphicon-object-align-bottom",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.lang.block_chain))]),n("br"),t._v(" "),n("span",{staticClass:"foot-text"},[t._v(t._s(t.lang.contract_balance))]),t._v(" "+t._s(t.skey.contracts_balance)+"ETH"),n("br"),t._v(" "),n("span",{staticClass:"foot-text",on:{click:function(e){return t.open_addr(t.eth.contract_address)}}},[t._v(t._s(t.lang.contract_addr))]),t._v(" "+t._s(t.subAddr(t.eth.contract_address))),n("br"),t._v(" "),n("span",{staticClass:"foot-text"},[t._v(t._s(t.lang.game_progress))]),t._v(" \n        "),"cn"==t.getLang?n("span",[t._v("第"+t._s(t.skey.single_index)+"局"+t._s(t.skey.single_num_now)+"注")]):t._e(),t._v(" "),"en"==t.getLang?n("span",[t._v("Bureau "+t._s(t.skey.single_index)+" note "+t._s(t.skey.single_num_now))]):t._e(),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"foot-text",on:{click:function(e){return t.open_url("https://100luck.org/dapp")}}},[t._v("Dapp Store")]),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"align-c margin0",staticStyle:{color:"#d6d6d6"}},[t._v("©2019 Super Lucky Star")])]),t._v(" "),4==t.msg_box_index?n("div",{staticClass:"disp-box"},[n("div",{staticClass:"msg-content",staticStyle:{"padding-bottom":"20px"}},[t._m(0),t._v(" "),n("p",{staticClass:"fs14 align-c",staticStyle:{padding:"10px 20px",margin:"0",cursor:"pointer",color:"#36c8e4"}},[t._v("\n                "+t._s(t.lang.install_note)+"\n            ")]),t._v(" "),n("p",{staticClass:"fs14 align-c",staticStyle:{padding:"5px 20px",margin:"0"}},[n("a",{staticClass:"no-link invest-btn",staticStyle:{padding:"10px 0",display:"inline-block",color:"#fff"},attrs:{href:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",target:"_bank"}},[t._v("\n                    "+t._s(t.lang.install_MetaMask)+"\n                ")])])])]):t._e()])},a=[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"align-c fs16",staticStyle:{padding:"20px 40px 6px 40px",margin:"0"}},[e("img",{staticStyle:{width:"20px",height:"20px","vertical-align":"unset"},attrs:{src:"https://github.com/lucky-start/SuperLuckyStar/blob/master/images/logo_metamask.png"}}),this._v(" "),e("strong",{staticStyle:{color:"#ff7b06",display:"inline-block","font-weight":"normal","margin-left":"2px"}},[this._v("MetaMask")])])}];s._withStripped=!0,n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}))}});