(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},i=s(70);e.default={props:{},data:function(){return{msg_box_index:0,invest_val:"",is_invest:0,interval_sec:0,is_loaded:0,show_last_addr:1,is_busy:0,invest_addr_list:[],prize_addr_list:[],prize_time_list:[],prize_amount_list:[]}},mounted:function(){setInterval(this.interval_time_fun,1e3)},methods:n({},(0,i.mapActions)({setKey:"SETKEY",setLang:"SETLANG"}),{close_box:function(){this.msg_box_index=0},selectLang:function(){"cn"==this.getLang?this.setLang("en"):this.setLang("cn")},clickTagLast:function(t){this.show_last_addr=t},select_account:function(t){this.eth.currentAddr=t,this.msg_box_index=0},load_info:function(){if(2==this.eth.status){this.interval_sec=0;var t=this;this.eth.CreateWeb3((function(e){t.setKey({key:"netname",val:t.eth.netName}),t.setKey({key:"addr",val:e}),t.setKey({key:"is_main_net",val:"1"==t.eth.currentNet?1:0}),t.load_block_info()}))}},load_block_info:function(){var t=this;this.eth.Methods_Info((function(e){t.setKey({key:"single_index",val:parseInt(e[0])+1}),t.setKey({key:"single_num_now",val:parseInt(e[1])}),t.setKey({key:"single_num_max",val:parseInt(e[2])}),t.setKey({key:"contracts_balance",val:t.toDecimal(e[3]/1e18,4)}),t.setKey({key:"total_num",val:parseInt(e[4])}),t.is_loaded=1,t.is_busy=0})),this.eth.Methods_AddrList((function(e){null!=e&&null!=e&&e.length>0&&(t.invest_addr_list=e)})),this.eth.Methods_PrizeList((function(e){null!=e[0]&&null!=e[0]&&e[0].length>0&&(t.prize_addr_list=e[0],t.prize_time_list=e[1],t.prize_amount_list=e[2])})),this.eth.getBalance((function(e){e>0&&t.setKey({key:"balance",val:t.toDecimal(e/1e18,4)})}))},interval_time_fun:function(){1!=this.is_busy&&2==this.eth.status?(this.is_busy=1,this.interval_sec++,1==this.is_loaded&&2==this.eth.status?this.interval_sec%8==0||(this.is_busy=0):0==this.is_loaded&&2==this.eth.status&&(this.interval_sec%1==0?this.load_info():this.is_busy=0)):-1==this.eth.status&&0==this.is_loaded&&(this.is_loaded=1,this.msg_box_index=4)},subAddr:function(t){return null==t||null==t||t.length<=0?"":t.length<=20?t:t.substring(0,10)+"******"+t.substring(t.length-10,t.length)},invest:function(){if(0!=this.is_loaded){if(confirm(this.lang.confirm_bet)){var t=this;this.msg_box_index=0,this.eth.Methods_MultipleInvest(1,(function(e){e.status?(t.load_block_info(),alert(t.lang.submit_success)):alert(t.lang.submit_fail)}))}}else alert(this.lang.get_net)},open_addr:function(t){"cn"==this.getLang?this.open_url("https://cn.etherscan.com/address/"+t):this.open_url("https://etherscan.io/address/"+t)},open_url:function(t){window.open(t)}}),computed:n({},(0,i.mapGetters)({skey:"skey",lang:"lang",getLang:"getLang"})),components:{}}}}]);