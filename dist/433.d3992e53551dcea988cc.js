"use strict";(self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[]).push([[433],{8433:(t,e,n)=>{n.r(e),n.d(e,{default:()=>k});var a=n(5861),o=n(5671),r=n(3144),s=n(7326),i=n(136),c=n(2963),l=n(1120),u=n(4942),h=n(4687),f=n.n(h),p=n(7294),m=n(5725),d=n(2642),w=n(6251),Z=n(8811),g=n.n(Z),y=n(711);var v=n(7563),k=function(t){(0,i.Z)(k,t);var e,n,h,Z=(n=k,h=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=(0,l.Z)(n);if(h){var a=(0,l.Z)(this).constructor;t=Reflect.construct(e,arguments,a)}else t=e.apply(this,arguments);return(0,c.Z)(this,t)});function k(t){var e;return(0,o.Z)(this,k),e=Z.call(this,t),(0,u.Z)((0,s.Z)(e),"componentDidMount",(function(){document.title="Авторизация",w.Z.setPage("auth"),"http:"!=window.location.protocol&&"http"!=window.location.protocol||"localhost"==window.location.hostname||(window.location.href="https://jacocallcenter.ru"+window.location.pathname)})),(0,u.Z)((0,s.Z)(e),"getData",(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.setState({spiner:!0}),n.type=t,n.token=w.Z.getToken(),fetch(g().urlApi,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:v.stringify(n)}).then((function(t){return t.json()})).then((function(t){if(!1!==t.st||"redir"!=t.type){if(!1!==t.st||"auth"!=t.type)return setTimeout((function(){e.setState({spiner:!1})}),300),t;window.location.pathname="/auth"}else window.location.pathname="/"})).catch((function(t){console.log(t),e.setState({spiner:!1})}))})),e.state={number:"",pass:""},e}return(0,r.Z)(k,[{key:"login",value:(e=(0,a.Z)(f().mark((function t(){var e,n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={number:this.state.number,pass:this.state.pass},t.next=3,this.getData("login_center",e);case 3:(n=t.sent).st?(w.Z.setToken(n.token,n.name),setTimeout((function(){window.location.href="/"}),500)):alert(n.text);case 5:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"handleKeyPress",value:function(t){13==t.charCode&&this.state.number.length>0&&this.state.pass.length>0&&this.login()}},{key:"render",value:function(){var t=this;return p.createElement(m.ZP,{container:!0,spacing:3,justifyContent:"center"},p.createElement(m.ZP,{item:!0,xs:12,sm:4},p.createElement(m.ZP,{container:!0,direction:"column",spacing:2},p.createElement(m.ZP,{item:!0,xs:12,sm:4},p.createElement("img",{alt:"Жако доставка роллов и пиццы",src:"../assets/logo.png",style:{height:"max-content",width:"100%"}})),p.createElement(m.ZP,{item:!0,xs:12,sm:4},p.createElement(y.rZ,{label:"Номер телефона",value:this.state.number,func:function(e){t.setState({number:e.target.value})}})),p.createElement(m.ZP,{item:!0,xs:12,sm:4},p.createElement(y.rZ,{label:"Пароль",type:"password",value:this.state.pass,func:function(e){t.setState({pass:e.target.value})}})),p.createElement(m.ZP,{item:!0,xs:12,sm:4},p.createElement(d.Z,{variant:"contained",style:{width:"100%"},onClick:this.login.bind(this)},"Войти")))))}}]),k}(p.Component)}}]);
//# sourceMappingURL=433.d3992e53551dcea988cc.js.map