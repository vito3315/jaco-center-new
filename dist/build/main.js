(()=>{var t,e={6283:(t,e,n)=>{"use strict";var r=n(7294),i=n(3935),a=n(3727),o=n(6610),s=n(5991),c=n(3349),u=n(379),l=n(6070),m=n(7608),p=n(6156),f=n(5977),d=(n(9669),n(7329)),h=n(8949),_=n(381),I=n.n(_),y=n(7563),g=new(function(){function t(){var e=this;if((0,o.Z)(this,t),(0,p.Z)(this,"items",""),(0,p.Z)(this,"itemsPromo",""),(0,p.Z)(this,"allItems",""),(0,p.Z)(this,"allItemsCat",""),(0,p.Z)(this,"banners",""),(0,p.Z)(this,"AllPrice",0),(0,p.Z)(this,"sum_div",0),(0,p.Z)(this,"cityName",""),(0,p.Z)(this,"cityNameRU",""),(0,p.Z)(this,"promo",null),(0,p.Z)(this,"userToken",null),(0,p.Z)(this,"userName",""),(0,p.Z)(this,"activePage",""),(0,p.Z)(this,"need_dops",""),(0,p.Z)(this,"free_items",""),(0,p.Z)(this,"cart_data",""),(0,p.Z)(this,"setSumDiv",(function(t){e.sum_div=parseInt(t)})),(0,p.Z)(this,"setDops",(function(t){e.need_dops=JSON.stringify(t)})),(0,p.Z)(this,"setFreeItems",(function(t){e.free_items=JSON.stringify(t)})),(0,p.Z)(this,"setCityRU",(function(t){e.cityNameRU=t})),(0,p.Z)(this,"setCity",(function(t){e.cityName=t})),(0,p.Z)(this,"setAllPrice",(function(t){e.AllPrice=t})),(0,p.Z)(this,"setPage",(function(t){e.activePage=t})),(0,p.Z)(this,"setToken",(function(t,n){e.userToken=t,e.setUserName(n),"undefined"!=typeof window&&localStorage.setItem("token",t)})),(0,p.Z)(this,"setPromo",(function(t,n){e.promo=t,localStorage.setItem("promo_name",n)})),(0,p.Z)(this,"setBanners",(function(t){e.banners=JSON.stringify(t)})),(0,p.Z)(this,"setItemsPromo",(function(t){e.itemsPromo=JSON.stringify(t)})),(0,p.Z)(this,"setAllItemsCat",(function(t){e.allItemsCat=JSON.stringify(t)})),(0,p.Z)(this,"setItems",(function(t){var n=0,r=0,i=e.getItemsPromo();if(r=t.reduce((function(t,e){return t+parseInt(e.all_price)}),n),n=0,r+=i.reduce((function(t,e){return t+parseInt(e.all_price)}),n),e.setAllPrice(r),e.items=JSON.stringify(t),"undefined"!=typeof window){var a=t.filter((function(t){return t.count>0}));a=JSON.stringify(a),localStorage.setItem("my_cart",a)}})),(0,p.Z)(this,"saveCartData",(function(t){var n=JSON.stringify(t);e.cart_data=n,"undefined"!=typeof window&&localStorage.setItem("cartData",n)})),(0,p.Z)(this,"setAllItems",(function(t){e.allItems=JSON.stringify(t)})),"undefined"!=typeof window){if(localStorage.getItem("my_cart")){var n=JSON.parse(localStorage.getItem("my_cart")),r=[];n.forEach((function(t){r.push({name:t.name,item_id:t.item_id,count:t.count,one_price:parseInt(t.one_price),all_price:parseInt(t.one_price)*parseInt(t.count)})})),this.setItems(r)}localStorage.getItem("token")&&this.setToken(localStorage.getItem("token")),localStorage.getItem("cartData")&&(this.cartData=localStorage.getItem("cartData")),localStorage.getItem("promo_name")&&setTimeout((function(){e.getInfoPromo(localStorage.getItem("promo_name"))}),300)}(0,h.ky)(this)}return(0,s.Z)(t,[{key:"getSumDiv",value:function(){return this.sum_div}},{key:"getDops",value:function(){return 0==this.need_dops.length?[]:JSON.parse(this.need_dops,!0)}},{key:"getFreeItems",value:function(){return 0==this.free_items.length?[]:JSON.parse(this.free_items,!0)}},{key:"getCityRU",value:function(){return this.cityNameRU&&this.cityNameRU.length>0?this.cityNameRU:"Город"}},{key:"getCity",value:function(){return this.cityName}},{key:"getAllPrice",value:function(){return this.AllPrice}},{key:"getPage",value:function(){return this.activePage}},{key:"getUserName",value:function(){return this.userName&&this.userName.length>0?this.userName:""}},{key:"setUserName",value:function(t){this.userName=t}},{key:"getToken",value:function(){return this.userToken}},{key:"getInfoPromo",value:function(t){fetch("https://jacofood.ru/src/php/test_app.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:y.stringify({type:"get_promo_web",city_id:g.getCity(),promo_name:t})}).then((function(t){return t.json()})).then((function(e){g.setPromo(JSON.stringify(e),t),!1===g.checkPromo().st&&localStorage.removeItem("promo_name")}))}},{key:"getPromo",value:function(){return JSON.parse(this.promo,!0)}},{key:"checkPromo",value:function(){var t=g.getCartData();g.setItemsPromo([]);var e=0,n=0,r=t.orderTimes&&1!=parseInt(t.orderTimes)?t.orderPredDay+" "+t.orderPredTime:0,i=this.getPromo(),a=this.getItems(),o=this.getAllItems(),s=[];a.forEach((function(t,e){s.push({name:t.name,item_id:t.item_id,count:t.count,one_price:t.one_price,all_price:parseInt(t.one_price)*parseInt(t.count)})})),a=s,this.setItems(a);var c=[];n=a.reduce((function(t,e){return t+parseInt(e.all_price)}),e);var u,l,m=0,p=0,f=0;(t.orderType||0==t.orderType)&&(m=null!==(u=parseInt(t.orderType))&&void 0!==u?u:0,p=t.orderAddr?parseInt(t.orderAddr.point_id):0,f=null!==(l=parseInt(t.orderPic))&&void 0!==l?l:0);var d=I()(r).format("YYYY-MM-DD"),h=I()(r).format("H:mm"),_=parseInt(I()(r).format("E"));if(0==r?(d=I()(new Date).format("YYYY-MM-DD"),h=I()(new Date).format("H:mm"),_=parseInt(I()(new Date).format("E"))):(d=I()(r).format("YYYY-MM-DD"),h=I()(r).format("H:mm"),_=parseInt(I()(r).format("E"))),i){if(!i.status_promo)return{st:!1,text:i.promo_text.false};if(i.limits.date.min&&i.limits.date.max&&!(d>=i.limits.date.min&&d<=i.limits.date.max))return{st:!1,text:i.promo_text.false};if(0!=i.limits.time.min&&0!=i.limits.time.max&&!(h>=i.limits.time.min&&h<=i.limits.time.max))return{st:!1,text:i.promo_text.false};if(0!=i.limits.point_id&&!(0==m&&p==i.limits.point_id||1==m&&f==i.limits.point_id))return{st:!1,text:"Адрес для доставки или самовывоза указан некорректно. Проверьте правильность введённых данных."};if(!(0==i.limits.summ.min&&0==i.limits.summ.max||n>=i.limits.summ.min&&(i.limits.summ.max>=n||0==i.limits.summ.max)))return{st:!1,text:"Общая сумма вашего заказа превышает допустимую стоимость для применения промокода."};if(i.limits.dows&&0==parseInt(i.limits.dows[_]))return{st:!1,text:"Указанный вами день недели недоступен для применения промокода. Пожалуйста, выберите другую дату."};if(i.limits.type_order&&!(1==parseInt(i.limits.type_order)||3==parseInt(i.limits.type_order)&&0==m||2==parseInt(i.limits.type_order)&&1==m))return{st:!1,text:"Тип заказа не применим для данного промокода. Пожалуйста, отредактируйте заказ."};if(i.limits.only_kassa&&1==parseInt(i.limits.only_kassa))return{st:!1,text:"Указанный вами промокод действителен только при оплате на кассе. Пожалуйста, посетите для оформления заказа ближайшее к вам кафе."};if(i.limits.items.length>0){var y=0;if(i.limits.items.map((function(t){s.find((function(e){return e.item_id==t}))&&y++})),i.limits.items.length!=y)return{st:!1,text:i.promo_text.false}}var v=0,Z=0,k=null;return 1==parseInt(i.promo_action)?(1==parseInt(i.sale.cat_sale)&&(Z=parseInt(i.sale.count_sale),a.forEach((function(t,e){k=o.find((function(e){return e.id==t.item_id})),3!=parseInt(k.type)&&4!=parseInt(k.type)&&i.sale.sale_action.forEach((function(n){parseInt(t.item_id)==parseInt(n)&&(1==parseInt(i.sale.type_price)?Z>0&&((v=parseInt(t.one_price)*parseInt(t.count)-parseInt(Z))<=0&&(v=1),Z-=parseInt(t.one_price)*parseInt(t.count),a[e].all_price=v):(v=parseInt(t.all_price)-parseInt(t.all_price)/100*parseInt(Z),a[e].all_price=parseInt(v)))}))}))),2==parseInt(i.sale.cat_sale)&&(Z=parseInt(i.sale.count_sale),a.forEach((function(t,e){k=o.find((function(e){return e.id==t.item_id})),3!=parseInt(k.type)&&4!=parseInt(k.type)&&i.sale.sale_action.forEach((function(n){parseInt(k.cat_id)==parseInt(n)&&(1==parseInt(i.sale.type_price)?Z>0&&((v=parseInt(t.one_price)*parseInt(t.count)-parseInt(Z))<=0&&(v=1),Z-=parseInt(t.one_price)*parseInt(t.count),a[e].all_price=v):(v=parseInt(t.all_price)-parseInt(t.all_price)/100*parseInt(Z),a[e].all_price=parseInt(v)))}))}))),3==parseInt(i.sale.cat_sale)&&(Z=parseInt(i.sale.count_sale),a.forEach((function(t,e){k=o.find((function(e){return e.id==t.item_id})),3!=parseInt(k.type)&&4!=parseInt(k.type)&&(1==parseInt(i.sale.type_price)?Z>0&&((v=parseInt(t.one_price)*parseInt(t.count)-parseInt(Z))<=0&&(v=1),Z-=parseInt(t.one_price)*parseInt(t.count),a[e].all_price=v):(v=parseInt(t.all_price)-parseInt(t.all_price)/100*parseInt(Z),a[e].all_price=parseInt(v)))}))),e=0,n=0,n=a.reduce((function(t,e){return t+e.all_price}),e),g.setAllPrice(n),{st:!0,text:i.promo_text.true}):(2==parseInt(i.promo_action)&&(i.items_add.forEach((function(t){k=o.find((function(e){return e.id==t.item_id})),c.push({item_id:t.item_id,count:t.count,one_price:k.price,all_price:t.price})})),e=0,n=0,n=a.reduce((function(t,e){return t+parseInt(e.all_price)}),e),e=0,n+=c.reduce((function(t,e){return t+parseInt(e.all_price)}),e),g.setItemsPromo(c),g.setAllPrice(n)),3==parseInt(i.promo_action)&&i.items_on_price.length>0&&(a.forEach((function(t,e){i.items_on_price.forEach((function(n){parseInt(t.item_id)==parseInt(n.id)&&(a[e].new_one_price=parseInt(n.price),a[e].all_price=parseInt(n.price)*parseInt(t.count))}))})),e=0,n=0,n=a.reduce((function(t,e){return t+parseInt(e.all_price)}),e),g.setAllPrice(n)),this.setItems(a),{st:!0,text:i.promo_text.true})}return{st:!1,text:i.promo_text.false,test:i}}},{key:"getBanners",value:function(){return 0==this.banners.length?[]:JSON.parse(this.banners,!0)}},{key:"getItemsPromo",value:function(){return 0==this.itemsPromo.length?[]:JSON.parse(this.itemsPromo,!0)}},{key:"getAllItemsCat",value:function(){return 0==this.allItemsCat.length?[]:JSON.parse(this.allItemsCat,!0)}},{key:"getCartData",value:function(){if("undefined"!=typeof window)return localStorage.getItem("cartData")?JSON.parse(localStorage.getItem("cartData")):[]}},{key:"getItems",value:function(){return 0==this.items.length?[]:JSON.parse(this.items,!0)}},{key:"getAllItems",value:function(){return 0==this.allItems.length?[]:JSON.parse(this.allItems,!0)}},{key:"AddItem",value:function(t){var e=g.getItems(),n=g.getAllItems(),r=g.getPromo();if(!(n.length>0))return 0;var i=e.find((function(e){return e.item_id==t})),a=0;i&&(a=i.count);var o=n.find((function(e){return e.id==t}));if(o){var s=a+1,c=o.price,u=g.check_max_count(parseInt(t));return parseInt(u)>=s?(e.some((function(e){return e.item_id==t}))?e.forEach((function(n,r){n.item_id==t&&(e[r].count=s,e[r].all_price=s*c)})):e.push({name:o.name,item_id:t,count:s,one_price:c,all_price:s*c}),g.setItems(e),r&&g.checkPromo(),s):s-1}}},{key:"MinusItem",value:function(t){var e=g.getItems(),n=g.getAllItems(),r=g.getPromo();if(n.length>0){var i=e.find((function(e){return e.item_id==t}));if(!i)return 0;var a=n.find((function(e){return e.id==t})),o=parseInt(i.count)-1,s=a.price;return o<=0&&(o=0),o>=0&&(e.map((function(n,r){n.item_id==t&&(e[r].count=o,e[r].all_price=o*s)})),g.setItems(e)),r&&g.checkPromo(),o}return 0}},{key:"check_need_dops",value:function(){var t=g.getItems(),e=g.getAllItems();if(!e||0==e.length)return[];var n=0,r=0,i=g.getDops();if(0==i.length)return[];t.forEach((function(t){var i=e.find((function(e){return e.id==t.item_id}));if(!i)return[];14==parseInt(i.cat_id)?n+=parseInt(t.count):14!==parseInt(i.cat_id)&&5!==parseInt(i.cat_id)&&6!==parseInt(i.cat_id)&&7!==parseInt(i.cat_id)&&(r+=parseInt(t.count))}));var a=[];r>0&&0==n&&(a=i.rolls),0==r&&n>0&&(a=i.pizza),r>0&&n>0&&(a=[].concat((0,d.Z)(i.rolls),(0,d.Z)(i.pizza))),0==r&&0==n&&(a=[].concat((0,d.Z)(i.rolls),(0,d.Z)(i.pizza)));var o=[],s=[];return t.forEach((function(t){var n=e.find((function(e){return e.id==t.item_id}));if(!n)return[];7==parseInt(n.cat_id)&&o.push(n)})),o.forEach((function(t){var e=!1;a.forEach((function(n){parseInt(n.id)==parseInt(t.id)&&(e=!0)})),e||s.push(t)})),a=[].concat((0,d.Z)(a),s)}},{key:"check_max_count",value:function(t){var e=[],n=[],r=g.getItems(),i=g.getFreeItems();if(!i)return 99;r.forEach((function(t,r){i.forEach((function(r){parseInt(t.item_id)==parseInt(r.this_item_id)&&(r.count_in_cart=parseInt(t.count),e.push(r),n.push(parseInt(r.item_id)))}))})),n=(0,d.Z)(new Set(n));var a=[];n.forEach((function(t,n){e.forEach((function(e){if(parseInt(t)==parseInt(e.item_id)){var n=!1;a.forEach((function(r,i){parseInt(r.item_id)==parseInt(t)&&(n=!0,a[i].count+=e.count_in_cart*e.max_count)})),n||a.push({item_id:parseInt(t),count:e.count_in_cart*e.max_count})}}))}));var o=99;return a.forEach((function(e){parseInt(e.item_id)==parseInt(t)&&(o=parseInt(e.count))})),o}}]),t}());const v=g;n(7563);var Z=function(t){(0,u.Z)(a,t);var e,n,i=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,m.Z)(e);if(n){var i=(0,m.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,l.Z)(this,t)});function a(t){var e;return(0,o.Z)(this,a),e=i.call(this,t),(0,p.Z)((0,c.Z)(e),"componentDidMount",(function(){})),e.state={allItems:[],is_load:!0,testData:[1,2,3,4,5,6,7,8,9],openItem:null,openModal:!1,openModalPC:!1,banners_pc:[],banners_mobile:[],city_name:t.match.params.cityName,page:null,title:"",description:""},v.setCity(t.match.params.cityName),e}return(0,s.Z)(a,[{key:"render",value:function(){return r.createElement("h1",null,"Hello World")}}]),a}(r.Component);n(6627),n(7563);var k=function(t){(0,u.Z)(a,t);var e,n,i=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,m.Z)(e);if(n){var i=(0,m.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,l.Z)(this,t)});function a(t){var e;return(0,o.Z)(this,a),e=i.call(this,t),(0,p.Z)((0,c.Z)(e),"componentDidMount",(function(){})),e.state={categoryItems:[],cartItems:[],activePage:"",is_load:!1,openCity:!1,cityName:"",testData:[1,2,3,4,5,6,7],cityList:[],openLogin:!1,userLogin:"",userLoginFormat:"",userCode:"",stage_1:!0,stage_2:!1,timerSMS:59,errPhone:"",errSMS:"",userName:"",soc_link:null},e}return(0,s.Z)(a,[{key:"render",value:function(){return r.createElement("div",null)}}]),a}(r.Component),P=n(1749),S=n(8731),N=n(150);n(7563);var x={itemsStore:v};function E(t){var e=t.code,n=t.children;return r.createElement(f.AW,{render:function(t){var r=t.staticContext;return r&&(r.status=e),n}})}function O(){return r.createElement(E,{code:404},r.createElement(P.Z,{container:!0,className:"Contact mainContainer MuiGrid-spacing-xs-3",style:{marginTop:64}},r.createElement(P.Z,{item:!0,xs:12},r.createElement(S.Z,{variant:"h5",component:"h1"},"404 Страница не найдена"))))}var w=function(t){(0,u.Z)(a,t);var e,n,i=(e=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,m.Z)(e);if(n){var i=(0,m.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,l.Z)(this,t)});function a(t){var e;return(0,o.Z)(this,a),e=i.call(this,t),(0,p.Z)((0,c.Z)(e),"componentDidMount",(function(){(0,h.EH)((function(){e.setState({activePage:v.getPage()}),e.setState({cityName:v.getCity()})}))})),e.state={categoryItems:[],cartItems:[],activePage:"",is_load:!1,openCity:!1,cityName:"",testData:[1,2,3,4,5,6,7,8,9],cityList:[],openLogin:!1,userLogin:"",userLoginFormat:"",userCode:"",stage_1:!0,stage_2:!1,timerSMS:59,errPhone:"",errSMS:"",userName:"",soc_link:null},e}return(0,s.Z)(a,[{key:"shouldComponentUpdate",value:function(t,e){return this.state.activePage!==e.activePage||this.state.cityName!==e.cityName}},{key:"render",value:function(){return r.createElement(N.zt,x,r.createElement("div",{className:"home"},r.createElement(k,null),r.createElement(f.rs,null,r.createElement(f.AW,{path:"/",exact:!0,component:Z}),r.createElement(f.AW,{component:O}))))}}]),a}(r.Component);i.hydrate(r.createElement(a.VK,null,r.createElement(w,null)),document.getElementById("app"))},8293:(t,e,n)=>{var r={"./ru":238,"./ru.js":238};function i(t){var e=a(t);return n(e)}function a(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=a,t.exports=i,i.id=8293}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var a=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,t=[],r.O=(e,n,i,a)=>{if(!n){var o=1/0;for(u=0;u<t.length;u++){for(var[n,i,a]=t[u],s=!0,c=0;c<n.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((t=>r.O[t](n[c])))?n.splice(c--,1):(s=!1,a<o&&(o=a));s&&(t.splice(u--,1),e=i())}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,i,a]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{var t={179:0};r.O.j=e=>0===t[e];var e=(e,n)=>{var i,a,[o,s,c]=n,u=0;for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(c)var l=c(r);for(e&&e(n);u<o.length;u++)a=o[u],r.o(t,a)&&t[a]&&t[a][0](),t[o[u]]=0;return r.O(l)},n=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var i=r.O(void 0,[736],(()=>r(6283)));i=r.O(i)})();
//# sourceMappingURL=main.js.map