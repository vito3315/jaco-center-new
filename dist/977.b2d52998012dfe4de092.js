"use strict";(self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[]).push([[977],{3977:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var i=n(5861),r=n(5671),a=n(3144),o=n(7326),s=n(136),c=n(6215),l=n(1120),u=n(4942),d=(n(7462),n(5987),n(4687)),p=n.n(d),h=n(7294),f=n(4593),m=n(30),g=n(5697),y=n.n(g),v=n(3892),_=n(5705),b=n(1264),k=n(4998),w=n(8811),Z=n.n(w);var I=n(7563);y().node,y().number.isRequired,y().number.isRequired;var x=function(e){(0,s.Z)(O,e);var t,n,d,g,y,w,x=(y=O,w=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,l.Z)(y);if(w){var n=(0,l.Z)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,c.Z)(this,e)});function O(e){var t,n,i,a,s,c;return(0,r.Z)(this,O),t=x.call(this,e),(0,u.Z)((0,o.Z)(t),"interval",null),(0,u.Z)((0,o.Z)(t),"map",null),(0,u.Z)((0,o.Z)(t),"getData",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.setState({is_load:!0}),n.type=e,n.token=k.Z.getToken(),fetch(Z().urlApi,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:I.stringify(n)}).then((function(e){return e.json()})).then((function(e){if(!1!==e.st||"redir"!=e.type){if(!1!==e.st||"auth"!=e.type)return setTimeout((function(){t.setState({is_load:!1})}),300),e;window.location.pathname="/auth"}else window.location.pathname="/"})).catch((function(e){console.log(e),t.setState({is_load:!1})}))})),t.state={module:"concenter",module_name:"",is_load:!1,modalDialog:!1,modalDialogDel:!1,cities:[],city_id:"",date:(n=new Date,i=new Date(n),a=""+(i.getMonth()+1),s=""+i.getDate(),c=i.getFullYear(),a.length<2&&(a="0"+a),s.length<2&&(s="0"+s),[c,a,s].join("-")),point_list:[],need_point_list:[],point_id:0,indexTab:0,orders:[],ordersRender:[],showOrder:null,radiogroup_options:[{id:"0",label:"Решили отредактировать заказ",value:0},{id:"1",label:"Не устраивает время ожидания",value:0},{id:"2",label:"Изменились планы",value:0},{id:"3",label:"Недостаточно средств",value:0},{id:"4",label:"Другое",value:0}],textDel:"",typeDel:-1,number:"",addr:"",allItems:[]},t}return(0,a.Z)(O,[{key:"checkLogin",value:(g=(0,i.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={token:k.Z.getToken()},e.next=3,this.getData("check_login_center",t);case 3:!0===e.sent||(localStorage.removeItem("token"),clearInterval(this.interval),setTimeout((function(){window.location.href="/auth"}),500));case 5:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentDidMount",value:(d=(0,i.Z)(p().mark((function e(){var t,n,i=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k.Z.setPage("orders"),this.interval=setInterval((function(){return i.checkLogin()}),36e5),this.checkLogin(),e.next=5,this.getData("get_center_all");case 5:t=e.sent,n=t.points.filter((function(e,n){return parseInt(e.city_id)==parseInt(t.cities[0].id)})),console.log(t),this.setState({cities:t.cities,point_list:t.points,need_point_list:n,point_id:parseInt(n[0].id),city_id:parseInt(t.cities[0].id)}),setTimeout((function(){i.getOrders(parseInt(t.cities[0].id))}),300);case 10:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"changeCity",value:(n=(0,i.Z)(p().mark((function e(t){var n,i,r=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({number:"",addr:""}),n=t.target.value,i=this.state.point_list.filter((function(e,t){return parseInt(e.city_id)==parseInt(n)})),this.setState({city_id:n,need_point_list:i,point_id:parseInt(i[0].id),indexTab:0}),setTimeout((function(){r.getOrders(parseInt(n))}),300);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"changePoint",value:function(e,t){var n=e.target.id;n=n.split("-")[2],this.setState({point_id:n,indexTab:parseInt(t)}),this.getOrders(n,t)}},{key:"getOrders",value:(t=(0,i.Z)(p().mark((function e(t){var n,i,r,a,o,s=this;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={city_id:t},e.next=3,this.getData("get_addr_zone",n);case 3:i=e.sent,r=[],i.map((function(e){e.zone_origin.length>0&&r.push(JSON.parse(e.zone_origin))})),a=[],o=!1,i.map((function(e){o=!1,a.map((function(t){parseInt(t.id)==parseInt(e.id)&&(o=!0)})),o||a.push(e)})),this.setState({}),setTimeout((function(){s.loadMap(i,r)}),500);case 10:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"loadMap",value:function(e,t){var n=this;this.map?(this.map.destroy(),this.map=null,console.log("destroy"),this.loadMap(e,t)):ymaps.ready((function(){n.map=new ymaps.Map("ForMap",{center:[e[0].xy_center_map.latitude,e[0].xy_center_map.longitude],zoom:10.8});var i=ymaps.templateLayoutFactory.createClass("<div class='my-hint'><b>{{ properties.address }}</b><br />Зона {{ properties.zone }}<br />График работы: c 10:00 до 21:30<br />Стоимость доставки: {{ properties.sum_div }} руб.</div>");t.map((function(t,r){n.map.geoObjects.add(new ymaps.Polygon([t],{address:e[r].addr,sum_div:e[r].sum_div,zone:e[r].test},{hintLayout:i,fillColor:"rgba(187, 0, 37, 0.25)",strokeColor:"rgb(187, 0, 37)",strokeWidth:5}))})),e.map((function(e){n.map.geoObjects.add(new ymaps.Placemark([e.xy_point.latitude,e.xy_point.longitude],{},{iconLayout:"default#image",iconImageHref:"/assets/img_other/Favikon.png",iconImageSize:[30,30],iconImageOffset:[-12,-24],iconContentOffset:[15,15]}))}))}))}},{key:"render",value:function(){return h.createElement(h.Fragment,null,h.createElement(v.Z,{open:this.state.is_load,style:{zIndex:99,color:"#fff"}},h.createElement(_.Z,{color:"inherit"})),h.createElement(f.q,null,h.createElement("title",null,"Карта")),h.createElement(m.ZP,{container:!0,spacing:3},h.createElement(m.ZP,{item:!0,xs:12,sm:3},h.createElement(b.$S,{data:this.state.cities,value:this.state.city_id,func:this.changeCity.bind(this),label:"Город"})),h.createElement(m.ZP,{item:!0,xs:12},h.createElement("div",{style:{width:"100%",height:650,marginRight:12,backgroundColor:"#e5e5e5"},id:"ForMap"}))))}}]),O}(h.Component)},5987:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(3366);function r(e,t){if(null==e)return{};var n,r,a=(0,i.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}}}]);
//# sourceMappingURL=977.b2d52998012dfe4de092.js.map