(this["webpackJsonpsafe-trip-frontend"]=this["webpackJsonpsafe-trip-frontend"]||[]).push([[0],{343:function(t,e,n){},345:function(t,e,n){},351:function(t,e,n){},352:function(t,e,n){},364:function(t,e){},372:function(t,e){},389:function(t,e){},391:function(t,e){},407:function(t,e){},408:function(t,e){},470:function(t,e){},472:function(t,e){},504:function(t,e){},506:function(t,e){},507:function(t,e){},512:function(t,e){},514:function(t,e){},520:function(t,e){},522:function(t,e){},535:function(t,e){},547:function(t,e){},550:function(t,e){},555:function(t,e){},565:function(t,e){},568:function(t,e){},618:function(t,e){},651:function(t,e){},724:function(t,e){},730:function(t,e){},743:function(t,e){},749:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(54),r=n.n(i),o=(n(343),n(1)),u=n.n(o),c=n(4),d=n(5),p=n(10),l=n(27),y=n(17),m=n(16),h=(n(345),n(760)),f=n(759),b=n(755),v=n(9);var w=function(t){var e=t.addr,n=t.wallet,a=t.disconnectWallet;return Object(v.jsxs)(h.a,{className:"d-flex justify-content-between",variant:"dark",expand:"md",children:[Object(v.jsxs)(h.a.Brand,{href:"/",className:"d-flex",style:{color:"var(--color-text)"},children:[Object(v.jsx)("img",{alt:"LOGO",src:"logo.svg",width:"60",height:"60",className:"d-inline-block align-top"}),"  ",Object(v.jsx)("span",{className:"align-self-center text-primary",style:{fontWeight:"800",marginLeft:"9px"},children:"ONEVERSE SINGLE STAKING"})]}),!e&&Object(v.jsx)(f.a.Link,{onClick:n,children:Object(v.jsx)(b.a,{variant:"secondary",className:"custom-btn-1",children:"CONNECT"})}),e&&Object(v.jsxs)(v.Fragment,{children:[" ",Object(v.jsxs)(b.a,{onClick:a,className:"connect btn-danger",children:[" ",e]})]})]})},g=(n(351),n(757)),j=n(758);n(352);var k=function(t){t.apy;var e=t.total,n=t.stake,a=(t.unstake,t.reward,t.harvest,t.pendingReward),s=t.getReward,i=t.deposittwo,r=t.unstakeAll,o=(t.update,t.deposit,t.amount);return t.getTotalStaked,t.temp,t.tempPending,Object(v.jsxs)("div",{className:"row align-items-center",children:[Object(v.jsxs)("div",{className:"col-md-6",children:[Object(v.jsx)("h1",{className:"text-primary main-heading",style:{marginLeft:"130px",marginBottom:"-40px"},children:"FLEXIBLE"}),Object(v.jsxs)("div",{className:"mt-5",children:[Object(v.jsx)("h2",{className:"mt-2",style:{fontWeight:"700",marginLeft:"170px",marginTop:"-20px"},children:"~100% / YR"}),Object(v.jsx)("h6",{className:"mt-2",style:{fontWeight:"200",marginBottom:"-15px",marginLeft:"85px"},children:""})]}),Object(v.jsx)("div",{style:{width:"75%",marginTop:"40px"},children:Object(v.jsx)("input",{type:"number",style:{height:"60px",marginLeft:"35px",borderRadius:"15px",borderWidth:"3px"},className:"form-control bg-secondary",id:"amount",name:"amount",onChange:o,placeholder:"Enter Amount To Unstake"})}),Object(v.jsxs)("div",{className:"d-flex justify-content-start mt-3",children: [Object(v.jsx)(b.a,{className:"stake",onClick:r,style:{marginLeft:"15px"},variant:"primary",children:"Unstake All"})]})]}),Object(v.jsx)("div",{className:"col-md-6",children:Object(v.jsxs)("div",{className:"d-flex bg-primary box flex-column justify-content-center",children:[Object(v.jsxs)("div",{className:"inside bg-secondary pb-4 pt-4",children:[Object(v.jsx)("h4",{children:"GRAV STAKED"}),Object(v.jsxs)("h3",{className:"numbers",style:{textAlign:"right"},children:[e," GRAV"]}),Object(v.jsx)("div",{className:"d-flex justify-content-center"})]}),Object(v.jsxs)("div",{className:"inside bg-secondary pb-3 pt-3",children:[Object(v.jsx)("h4",{children:"GRAV REWARD"}),Object(v.jsxs)("h3",{className:"numbers",style:{textAlign:"right"},children:[a," GRAV"]}),Object(v.jsx)("div",{className:"d-flex justify-content-center",children:Object(v.jsx)(b.a,{className:"stake",onClick:s,style:{marginLeft:"0px"},variant:"primary",children:"UPDATE REWARDS"})})]})]})})]})},x=n(92),T=n.n(x),O="0x5fB9Ab27aae57ec3f86B86Fd05e78257fA542EAC",S="0x5DCE7A3E8B53387A9Ee1cE0d855b7A8d948100A3",A=[{inputs:[{internalType:"string",name:"name_",type:"string"},{internalType:"string",name:"symbol_",type:"string"},{internalType:"uint8",name:"decimal_",type:"uint8"},{internalType:"address",name:"owner_",type:"address"},{internalType:"uint256",name:"initialSupply_",type:"uint256"},{internalType:"uint256",name:"totalSupply_",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"_addressIsHolder",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"_totalWalletsEver",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"_walletsToLoopByInt",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_addressToWhitelist",type:"address"}],name:"addUser",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"availableSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"circSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllHolders",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"initialSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_addressToWhitelist",type:"address"}],name:"removeUser",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_whitelistedAddress",type:"address"}],name:"verifyUser",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],C=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"staker",type:"address"},{indexed:!1,internalType:"uint256",name:"amountStaked",type:"uint256"},{indexed:!1,internalType:"uint256",name:"stakingTime",type:"uint256"}],name:"TokenStaked",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"staker",type:"address"},{indexed:!1,internalType:"uint256",name:"amountUnstaked",type:"uint256"},{indexed:!1,internalType:"uint256",name:"unstakingTime",type:"uint256"}],name:"TokenUnstaked",type:"event"},{inputs:[{internalType:"address",name:"_newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"deposit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_staker",type:"address"}],name:"getUserCurrentRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"stake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"togglePause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"unstake",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unstakeAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newRate",type:"uint256"}],name:"updateRate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"updateRewards",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_admin",type:"address"},{internalType:"address",name:"_token",type:"address"},{internalType:"uint256",name:"_rate",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"admin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAllStakers",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMyCurrentRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMyStakedAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalStakers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_staker",type:"address"}],name:"getUserStakedAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"rate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],M=n(327),N=n.n(M),W=n(336),R=n(80),E=(n(748),function(t){Object(y.a)(n,t);var e=Object(m.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).notify=function(t,e){switch(e){case"error":R.b.error(t);break;case"warning":R.b.warning(t);break;case"success":R.b.success(t);break;case"info":R.b.info(t);break;default:R.b.dark(t)}},t.state={web3:void 0,contract:void 0,apy:80,staked:0,pendingReward:0,addr:"",amount:0,show_modal:!1},t.connectWallet=t.connectWallet.bind(Object(l.a)(t)),t.disconnectWallet=t.disconnectWallet.bind(Object(l.a)(t)),t.setWeb3=t.setWeb3.bind(Object(l.a)(t)),t.setContract=t.setContract.bind(Object(l.a)(t)),t.stake=t.stake.bind(Object(l.a)(t)),t.deposit=t.deposit.bind(Object(l.a)(t)),t.deposittwo=t.deposittwo.bind(Object(l.a)(t)),t.unstake=t.unstake.bind(Object(l.a)(t)),t.unstakeAll=t.unstakeAll.bind(Object(l.a)(t)),t.getReward=t.getReward.bind(Object(l.a)(t)),t.getTotalStaked=t.getTotalStaked.bind(Object(l.a)(t)),t.setAddr=t.setAddr.bind(Object(l.a)(t)),t.handleChange=t.handleChange.bind(Object(l.a)(t)),t.update=t.update.bind(Object(l.a)(t)),t.handleClose=t.handleClose.bind(Object(l.a)(t)),t.handleShow=t.handleShow.bind(Object(l.a)(t)),t}return Object(p.a)(n,[{key:"handleClose",value:function(){this.setState({show_modal:!1})}},{key:"handleShow",value:function(){this.setState({show_modal:!0})}},{key:"setAddr",value:function(t,e){var n=this;""!==this.state.addr&&this.notify("Account Changed","info"),"0x9cf363ff78b6b6caf919886a28f47f1fa10a52e1"==this.state.addr&&this.setState({addr:""}),this.setState({addr:t},(function(){""!==n.state.addr&&n.setWeb3(e)})),console.log("addr changed")}},{key:"disconnectWallet",value:function(){var t=Object(c.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.provider.close){t.next=3;break}return t.next=3,this.provider.close();case 3:this.setState({addr:""}),this.setState({web3:void 0});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connectWallet",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n,a,s,i=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={metamask:{display:{name:"Injected",description:"Connect with the provider in your Browser"},package:null},walletconnect:{package:W.a,options:{rpc:{16667e5:"https://api.harmony.one"},network:"harmony mainnet"}}},(n=new N.a({cacheProvider:!0,disableInjectedProvider:!1,providerOptions:e})).clearCachedProvider(),t.next=5,n.connect();case 5:return this.provider=t.sent,a=new T.a(this.provider),this.provider.on("error",(function(t){console.log(t)})),this.provider.on("end",(function(t){return console.error("WS End",t)})),this.provider.on("disconnect",(function(t){n.clearCachedProvider(),i.setState({addr:""},(function(){i.notify("Disconnected Wallet!","error")}))})),this.provider.on("connect",(function(t){i.notify(t,"success"),console.log("CONNECTED")})),this.provider.on("accountsChanged",(function(t){i.setAddr(t[0],a)})),t.next=14,a.eth.getAccounts();case 14:s=t.sent,console.log(s),this.setAddr(s[0],a);case 17:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setWeb3",value:function(t){var e=this;this.setState({web3:t},(function(){var t=new e.state.web3.eth.Contract(C,O);e.setContract(t)}))}},{key:"setContract",value:function(t){var e=this,n=new this.state.web3.eth.Contract(C,O);this.setState({contract:54649467078905995e31},Object(c.a)(u.a.mark((function t(){var a,s,i,r,o;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=100,t.next=3,n.methods.getMyStakedAmount().call({from:e.state.addr});case 3:return s=t.sent,t.next=6,n.methods.updateRewards().call({from:e.state.addr});case 6:if(t.t0=t.sent,!t.t0){t.next=11;break}return t.next=10,n.methods.getMyCurrentRewards().call({from:e.state.addr});case 10:t.t0=t.sent;case 11:i=t.t0,e.setState({apy:a}),r=s/Math.pow(10,18),o=i/Math.pow(10,18),e.setState({total:r.toFixed(3)}),e.setState({pendingReward:o.toFixed(8)}),console.log("total staked ",s),console.log("reward ",i);case 19:case"end":return t.stop()}}),t)}))))}},{key:"update",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n,a,s,i,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new this.state.web3.eth.Contract(C,O),n=100,t.next=4,e.methods.getMyStakedAmount().call({from:this.state.addr});case 4:return a=t.sent,t.next=7,e.methods.updateRewards().call({from:this.state.addr});case 7:if(t.t0=t.sent,!t.t0){t.next=12;break}return t.next=11,e.methods.getMyCurrentRewards().call({from:this.state.addr});case 11:t.t0=t.sent;case 12:s=t.t0,this.setState({apy:n}),i=a/Math.pow(10,18),r=s/Math.pow(10,18),this.setState({total:i.toFixed(3)}),this.setState({pendingReward:r.toFixed(8)}),console.log("total staked ",a),console.log("reward ",s);case 20:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"handleChange",value:function(t){this.setState({amount:t.target.value})}},{key:"stake",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n,a,s=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.state.addr){t.next=3;break}return this.notify("Please Connect Your Wallet","error"),t.abrupt("return");case 3:if(!(this.state.amount<1||""===this.state.amount)){t.next=6;break}return this.notify("Enter An Amount Greater Than 1 Gravity token","error"),t.abrupt("return");case 6:e=T.a.utils.toBN(String(Math.floor(this.state.amount))+"0".repeat(18)),n=new this.state.web3.eth.Contract(A,S),a=new this.state.web3.eth.Contract(C,O),this.notify("Approve Transaction To Allow Gravity token spending","dark"),n.methods.approve(O,e).send({from:this.state.addr}).on("receipt",(function(t){s.notify("Please wait 10-15 seconds...","info"),a.methods.stake(e).send({from:s.state.addr}).on("receipt",(function(t){s.notify("Your tokens have been sent into the Wormhole! - Amount: "+s.state.amount,"success"),s.update()})).on("error",(function(t,e){s.notify(t.message,"error"),console.log(t)}))})).on("error",(function(t,e){s.notify(t.message,"error"),console.log(t)}));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"deposit",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n,a,s=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.state.addr){t.next=3;break}return this.notify("Please Connect Your Wallet","error"),t.abrupt("return");case 3:e=T.a.utils.toBN(String(Math.floor(1))+"0".repeat(4)),n=new this.state.web3.eth.Contract(A,S),a=new this.state.web3.eth.Contract(C,O),this.notify("Approve Transaction To Allow Gravity token spending","dark"),n.methods.approve(O,e).send({from:this.state.addr}).on("receipt",(function(t){s.notify("Please wait 10-15 seconds...","info"),a.methods.deposit(e).send({from:s.state.addr}).on("receipt",(function(t){s.notify("Your tokens have been added to the wormhole!","success"),s.update()})).on("error",(function(t,e){s.notify(t.message,"error"),console.log(t)}))})).on("error",(function(t,e){s.notify(t.message,"error"),console.log(t)}));case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"deposittwo",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n,a,s=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.state.addr){t.next=3;break}return this.notify("Please Connect Your Wallet","error"),t.abrupt("return");case 3:if(!(this.state.amount<1||""===this.state.amount)){t.next=6;break}return this.notify("Enter An Amount Greater Than 1 Gravity token","error"),t.abrupt("return");case 6:e=T.a.utils.toBN(String(Math.floor(this.state.amount))+"0".repeat(18)),n=new this.state.web3.eth.Contract(A,S),a=new this.state.web3.eth.Contract(C,O),this.notify("Approve Transaction To Allow Gravity token spending","dark"),n.methods.approve(O,e).send({from:this.state.addr}).on("receipt",(function(t){s.notify("Please wait 10-15 seconds...","info"),a.methods.deposit(e).send({from:s.state.addr}).on("receipt",(function(t){s.notify("Your tokens have been added to the wormhole!","success"),s.update()})).on("error",(function(t,e){s.notify(t.message,"error"),console.log(t)}))})).on("error",(function(t,e){s.notify(t.message,"error"),console.log(t)}));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"unstake",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n,a=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=new this.state.web3.eth.Contract(C,O),n=T.a.utils.toBN(String(Math.floor(1))+"0".repeat(4)),this.notify("Please Wait Till The Transaction Succeeds","info"),e.methods.unstake(n).send({from:this.state.addr}).on("receipt",(function(t){a.notify("Wormhole claim was successful!","success"),a.update()})).on("error",(function(t,e){a.notify(t.message,"error"),console.log(t)}));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"unstakeAll",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e,n=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.state.addr){t.next=3;break}return this.notify("Please Connect Your Wallet","error"),t.abrupt("return");case 3:e=new this.state.web3.eth.Contract(C,O),this.notify("Please Wait Till The Transaction Succeeds","info"),e.methods.unstakeAll().send({from:this.state.addr}).on("receipt",(function(t){n.notify("Wormhole withdrawal was successful!","success"),n.update()})).on("error",(function(t,e){n.notify(t.message,"error"),console.log(t)}));case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getReward",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.state.addr){t.next=3;break}return this.notify("Please Connect Your Wallet","error"),t.abrupt("return");case 3:new this.state.web3.eth.Contract(C,O).methods.getUserCurrentRewards(this.state.addr).send({from:this.state.addr}).on("receipt",(function(t){e.notify("Staked amount & rewards have been updated!","success"),e.update()}));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getTotalStaked",value:function(){var t=Object(c.a)(u.a.mark((function t(){var e=this;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==this.state.addr){t.next=3;break}return this.notify("Please Connect Your Wallet","error"),t.abrupt("return");case 3:new this.state.web3.eth.Contract(C,O).methods.getMyStakedAmount().send({from:this.state.addr}).on("receipt",(function(t){e.notify("Staked amount & rewards have been updated!","success"),e.update()})).on("error",(function(t,n){console.error(n),e.notify(t.message,"error")}));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",style:{backgroundImage:"url('bg-main-2.svg')"},children:[Object(v.jsx)(R.a,{position:"top-center",hideProgressBar:!1,autoClose:5e3}),Object(v.jsxs)(g.a,{children:[Object(v.jsx)(w,{addr:this.state.addr,wallet:this.connectWallet,disconnectWallet:this.disconnectWallet}),Object(v.jsxs)("div",{className:"layout",children:[Object(v.jsxs)(j.a,{show:this.state.show_modal,onHide:this.handleClose,children:[Object(v.jsx)(j.a.Header,{children:Object(v.jsx)(j.a.Title,{children:"Steps To Stake Your Gravity token"})}),Object(v.jsx)(j.a.Body,{children:Object(v.jsxs)(g.a,{className:"d-flex flex-column align-items-center",children:[Object(v.jsx)("h5",{style:{fontSize:"20px"},children:"1. Approve Transaction To Enable Spending Of Gravity token"}),Object(v.jsx)(b.a,{children:"Approve"}),Object(v.jsx)("h5",{style:{fontSize:"20px",marginTop:"15px"},children:"2. After Transaction Is Successful, Now Deposit"}),Object(v.jsx)(b.a,{disabled:!0,children:"Deposit"})]})}),Object(v.jsxs)(j.a.Footer,{children:[Object(v.jsx)(b.a,{variant:"secondary",onClick:this.handleClose,children:"Close"}),Object(v.jsx)(b.a,{className:"ml-4",variant:"primary",onClick:this.handleClose,children:"Save Changes"})]})]}),Object(v.jsx)(k,{apy:this.state.apy,total:this.state.total,stake:this.stake,deposit:this.deposit,deposittwo:this.deposittwo,unstake:this.unstake,unstakeAll:this.unstakeAll,getReward:this.getReward,getTotalStaked:this.getTotalStaked,pendingReward:this.state.pendingReward,amount:this.handleChange})]})]})]})}}]),n}(s.a.Component)),_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,761)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),i(t),r(t)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(E,{})}),document.getElementById("root")),_()}},[[749,1,2]]]);
//# sourceMappingURL=main.f9e30dac.chunk.js.map