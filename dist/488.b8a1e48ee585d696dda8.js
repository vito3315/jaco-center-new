"use strict";(self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[]).push([[488],{3406:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7462),o=n(3366),a=n(7294),c=n(6010),l=n(4780),i=n(8884),s=n(1719),u=n(4867);function m(e){return(0,u.Z)("MuiTableContainer",e)}(0,n(1588).Z)("MuiTableContainer",["root"]);var f=n(5893);const h=["className","component"],Z=(0,s.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),p=a.forwardRef((function(e,t){const n=(0,i.Z)({props:e,name:"MuiTableContainer"}),{className:a,component:s="div"}=n,u=(0,o.Z)(n,h),p=(0,r.Z)({},n,{component:s}),v=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},m,t)})(p);return(0,f.jsx)(Z,(0,r.Z)({ref:t,as:s,className:(0,c.Z)(v.root,a),ownerState:p},u))}))},9488:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(5861),o=n(5671),a=n(3144),c=n(7326),l=n(136),i=n(6215),s=n(1120),u=n(4942),m=n(4687),f=n.n(m),h=n(7294),Z=n(4593),p=n(30),v=n(1822),d=n(3150),y=n(6140),E=n(3030),k=n(3406),g=n(8561),w=n(8736),b=n(3892),x=n(5705),P=n(3127),T=n(4998),C=n(8811),_=n.n(C);var R=n(7563),S=function(e){(0,l.Z)(L,e);var t,n,m,C,S=(m=L,C=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,s.Z)(m);if(C){var n=(0,s.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,i.Z)(this,e)});function L(e){var t;return(0,o.Z)(this,L),t=S.call(this,e),(0,u.Z)((0,c.Z)(t),"interval",null),(0,u.Z)((0,c.Z)(t),"getData",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.setState({spiner:!0}),n.type=e,n.token=T.Z.getToken(),fetch(_().urlApi,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:R.stringify(n)}).then((function(e){return e.json()})).then((function(e){if(!1!==e.st||"redir"!=e.type){if(!1!==e.st||"auth"!=e.type)return setTimeout((function(){t.setState({spiner:!1})}),300),e;window.location.pathname="/auth"}else window.location.pathname="/"})).catch((function(e){console.log(e),t.setState({spiner:!1})}))})),(0,u.Z)((0,c.Z)(t),"componentDidMount",(function(){T.Z.setPage("checkuserpromo"),t.interval=setInterval((function(){return t.checkLogin()}),36e5),t.checkLogin(),document.title="Проверка промокода клиента"})),t.state={cityList:[],spiner:!1,number:"",promos:[]},t}return(0,a.Z)(L,[{key:"checkLogin",value:(n=(0,r.Z)(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={token:T.Z.getToken()},e.next=3,this.getData("check_login_center",t);case 3:!0===e.sent||(localStorage.removeItem("token"),clearInterval(this.interval),setTimeout((function(){window.location.href="/auth"}),500));case 5:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"changeNumber",value:function(e){this.setState({number:e.target.value})}},{key:"getPromoList",value:(t=(0,r.Z)(f().mark((function e(){var t,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={number:this.state.number},e.next=3,this.getData("check_user_promo",t);case 3:n=e.sent,this.setState({promos:n});case 5:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){return h.createElement(p.ZP,{container:!0,spacing:3},h.createElement(Z.q,null,h.createElement("title",null,"Проверка промокода клиента")),h.createElement(b.Z,{open:this.state.spiner,style:{zIndex:99,color:"#fff"}},h.createElement(x.Z,{color:"inherit"})),h.createElement(p.ZP,{item:!0,xs:3},h.createElement(P.rZ,{value:this.state.number,func:this.changeNumber.bind(this),label:"Номер телефона"})),h.createElement(p.ZP,{item:!0,xs:3},h.createElement(v.Z,{variant:"contained",onClick:this.getPromoList.bind(this)},"Обновить")),h.createElement(p.ZP,{item:!0,xs:12},h.createElement(k.Z,null,h.createElement(d.Z,null,h.createElement(g.Z,null,h.createElement(w.Z,null,h.createElement(E.Z,null,"Телефон"),h.createElement(E.Z,null,"Имя"),h.createElement(E.Z,null,"День рождения"),h.createElement(E.Z,null,"Промокод"),h.createElement(E.Z,null,"Описание"))),h.createElement(y.Z,null,this.state.promos.map((function(e,t){return h.createElement(w.Z,{key:t},h.createElement(E.Z,{style:{color:"inherit"}},e.login),h.createElement(E.Z,{style:{color:"inherit"}},e.user_name),h.createElement(E.Z,{style:{color:"inherit"}},e.date_bir),h.createElement(E.Z,{style:{color:"inherit"}},e.promo_name),h.createElement(E.Z,{style:{color:"inherit"}},e.coment))})))))))}}]),L}(h.Component)}}]);
//# sourceMappingURL=488.b8a1e48ee585d696dda8.js.map