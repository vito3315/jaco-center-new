(()=>{var e,t={6283:(e,t,n)=>{"use strict";var r=n(7294),a=n(3935),i=n(3727),s=n(6610),o=n(5991),l=n(3349),c=n(379),u=n(6070),m=n(7608),p=n(6156),d=n(5977),f=n(4699),h=n(2122),g=n(1253),y=n(6010),Z=n(1120),v=n(4670),_=n(7159),I=n(282),E=n(2822),x=n(5517),b=n(998),w=n(6869),C=n(5757),k=n(8497),S=n(2865),P=n(5258),T=n(8358),O=n(2318),N=n(7812),A=n(8884),D=n(1749),j=n(9895),M=n(65),R=n(1423),L=n(5697),J=n.n(L),B=n(7748),z=n(868),H=n(8362),F=n(5431),U=n(8286),Y=n(4837),W=n(3700),K=n(5639),V=n(4436),G=n(3170),q=["children","value","index"];function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,m.Z)(e);if(t){var a=(0,m.Z)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var ee=n(7563),te=(0,Z.Z)((function(e){return{list:{width:250},fullList:{width:"auto"},root:{flexGrow:1,margin:-8},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},paperCat:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,position:"relative",justifyContent:"space-between",height:"calc(100% - 15px)"},paperCatInfo:{position:"absolute",top:0,right:0},container:{paddingTop:e.spacing(2),"& button.MuiTab-root":{padding:"0px 12px",minHeight:"auto"},"& .MuiTabs-scroller":{height:"fit-content"},"& .MuiTabs-root":{minHeight:"auto"}},size1:{fontSize:"0.8rem"},scrollTable:{maxHeight:250,overflow:"auto",padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},mainAddr:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center","& > div > div > div":{padding:"0px !important"},"& > div > div > label":{transform:"translate(14px, 13px) scale(1)"},"& .MuiOutlinedInput-input":{padding:"10px 14px"},"& .MuiInputLabel-outlined":{transform:"translate(14px, 13px) scale(1)"},"& .MuiInputLabel-outlined.MuiInputLabel-shrink":{transform:"translate(14px, -6px) scale(0.75)"}},otherAddr:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",paddingBottom:8,"& .MuiOutlinedInput-input":{padding:"10px 14px"},"& .MuiInputLabel-outlined":{transform:"translate(14px, 13px) scale(1)"},"& .MuiInputLabel-outlined.MuiInputLabel-shrink":{transform:"translate(14px, -6px) scale(0.75)"},"& .MuiFormControl-root.MuiTextField-root":{width:"100%"}},driverInfo:{"& input.MuiInputBase-input.MuiInputBase-input.MuiOutlinedInput-input":{padding:"7px 14px"},"& .MuiOutlinedInput-multiline":{padding:"7px 14px"},"& .MuiInputLabel-outlined":{transform:"translate(14px, 9px) scale(1)"},"& .MuiInputLabel-outlined.MuiInputLabel-shrink":{transform:"translate(14px, -6px) scale(0.75)"},"& .MuiFormControl-root.MuiTextField-root":{width:"100%"}},formPred:{display:"flex",flexDirection:"row",width:"100%",alignItems:"center",paddingBottom:8,"& .MuiOutlinedInput-input":{padding:"10px 14px"},"& .MuiInputLabel-outlined":{transform:"translate(14px, 13px) scale(1)"},"& .MuiInputLabel-outlined.MuiInputLabel-shrink":{transform:"translate(14px, -6px) scale(0.75)"},"& > div":{width:"50%",marginLeft:0}},chooseDomTrue:{width:"100%","& button.active":{backgroundColor:"#CC0033",color:"#fff"},"& button:not(.active)":{backgroundColor:"#fff",border:"1px solid #CC0033",color:"#CC0033"},"& button":{width:"50%"},"& span":{fontSize:"0.8rem!important",width:"100%",textTransform:"none",whiteSpace:"nowrap"},"& .MuiButtonGroup-groupedContainedHorizontal:not(:last-child)":{borderRight:"none"}},boxPic:{backgroundColor:"#e5e5e5",padding:"6px 12px",marginBottom:10,cursor:"pointer","&:hover":{backgroundColor:"#CC0033",color:"#fff"},"&.active":{backgroundColor:"#CC0033",color:"#fff"},"& span:first-child":{textAlign:"center"},"& span:last-child":{textAlign:"center"}},formControl:{margin:e.spacing(1),minWidth:120},blockTotalOrder:{width:"100%",marginRight:8,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},containerHeader:{paddingTop:e.spacing(2),justifyContent:"flex-end","& .MuiOutlinedInput-input":{padding:"5px 10px"},"& .MuiInputLabel-outlined":{transform:"translate(14px, 8px) scale(1)"},"& .MuiInputLabel-outlined.MuiInputLabel-shrink":{transform:"translate(14px, -6px) scale(0.75)"}}}}));function ne(e){var t=e.children,n=e.value,a=e.index,i=(0,g.Z)(e,q);return r.createElement("div",(0,h.Z)({role:"tabpanel",hidden:n!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},i),n===a&&r.createElement(B.Z,{p:3},t))}ne.propTypes={children:J().node,index:J().any.isRequired,value:J().any.isRequired};var re=(0,v.Z)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(z.ZP),ae=function(e){(0,c.Z)(n,e);var t=$(n);function n(e){var r;return(0,s.Z)(this,n),r=t.call(this,e),(0,p.Z)((0,l.Z)(r),"changeCat",(function(e,t){r.setState({activeCat:t})})),r.state={classes:r.props.classes,activeCat:0,cats:r.props.cats},r}return(0,o.Z)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.cats.length!==t.cats.length&&0!=t.cats.length||this.state.activeCat!==t.activeCat}},{key:"render",value:function(){var e=this;return r.createElement(r.Fragment,null,r.createElement(P.Z,{position:"static"},r.createElement(M.Z,{value:this.state.activeCat,onChange:this.changeCat,"aria-label":"simple tabs example"},this.state.cats.map((function(e,t){return r.createElement(R.Z,(0,h.Z)({label:e.name,style:{minWidth:"auto"},key:t},{id:"simple-tab-".concat(n=t),"aria-controls":"simple-tabpanel-".concat(n)}));var n})))),this.state.cats.map((function(t,n){return r.createElement(ne,{value:e.state.activeCat,index:n,key:n},r.createElement(D.Z,{container:!0,spacing:2,className:e.state.classes.container,style:{paddingTop:0}},t.items.map((function(t,n){return r.createElement(D.Z,{key:n,item:!0,xs:2},r.createElement(j.Z,{className:e.state.classes.paperCat},r.createElement(D.Z,{container:!0,direction:"column",style:{height:"100%",justifyContent:"space-around"}},r.createElement(O.Z,{component:"span",className:e.state.classes.size1},t.name),r.createElement(O.Z,{component:"span",className:e.state.classes.size1},t.price," р."),r.createElement(re,{className:e.state.classes.paperCatInfo,placement:"top",title:r.createElement(r.Fragment,null,r.createElement("picture",null,r.createElement("source",{srcSet:"https://storage.yandexcloud.net/site-img/"+t.img_new+"300х200.webp?"+t.img_new_update,type:"image/webp"}),r.createElement("img",{src:"https://storage.yandexcloud.net/site-img/"+t.img_new+"300х200.jpg?"+t.img_new_update,alt:t.name,title:t.name,style:{height:150,width:"auto"}})),r.createElement(O.Z,{color:"inherit",className:e.state.classes.size1},t.tmp_desc),r.createElement(O.Z,{color:"inherit",className:e.state.classes.size1},t.info_weight))},r.createElement(H.Z,null)))))}))))})))}}]),n}(r.Component),ie=function(e){(0,c.Z)(n,e);var t=$(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).state={classes:r.props.classes},r}return(0,o.Z)(n,[{key:"render",value:function(){return r.createElement(j.Z,{className:this.state.classes.scrollTable},r.createElement(D.Z,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",spacing:3},r.createElement(D.Z,{item:!0},"Наимнование"),r.createElement(D.Z,{item:!0},"Кол-во"),r.createElement(D.Z,{item:!0},"Сумма"),r.createElement(D.Z,{item:!0},"Х")),r.createElement(D.Z,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",spacing:3},r.createElement(D.Z,{item:!0},"Ролл Жако"),r.createElement(D.Z,{item:!0},"+ 5 -"),r.createElement(D.Z,{item:!0},"500"),r.createElement(D.Z,{item:!0},"Х")),r.createElement(D.Z,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",spacing:3},r.createElement(D.Z,{item:!0},"Ролл Жако"),r.createElement(D.Z,{item:!0},"+ 5 -"),r.createElement(D.Z,{item:!0},"500"),r.createElement(D.Z,{item:!0},"Х")),r.createElement(D.Z,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",spacing:3},r.createElement(D.Z,{item:!0},"Ролл Жако"),r.createElement(D.Z,{item:!0},"+ 5 -"),r.createElement(D.Z,{item:!0},"500"),r.createElement(D.Z,{item:!0},"Х")),r.createElement(D.Z,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",spacing:3},r.createElement(D.Z,{item:!0},"Ролл Жако"),r.createElement(D.Z,{item:!0},"+ 5 -"),r.createElement(D.Z,{item:!0},"500"),r.createElement(D.Z,{item:!0},"Х")),r.createElement(D.Z,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",spacing:3},r.createElement(D.Z,{item:!0},"Ролл Жако"),r.createElement(D.Z,{item:!0},"+ 5 -"),r.createElement(D.Z,{item:!0},"500"),r.createElement(D.Z,{item:!0},"Х")),r.createElement(D.Z,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",spacing:3},r.createElement(D.Z,{item:!0},"Ролл Жако"),r.createElement(D.Z,{item:!0},"+ 5 -"),r.createElement(D.Z,{item:!0},"500"),r.createElement(D.Z,{item:!0},"Х")),r.createElement(D.Z,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",spacing:3},r.createElement(D.Z,{item:!0},"Ролл Жако"),r.createElement(D.Z,{item:!0},"+ 5 -"),r.createElement(D.Z,{item:!0},"500"),r.createElement(D.Z,{item:!0},"Х")),r.createElement(D.Z,{container:!0,direction:"row",justify:"space-between",alignItems:"flex-start",spacing:3},r.createElement(D.Z,{item:!0},"Ролл Жако"),r.createElement(D.Z,{item:!0},"+ 5 -"),r.createElement(D.Z,{item:!0},"500"),r.createElement(D.Z,{item:!0},"Х")))}}]),n}(r.Component),se=function(e){(0,c.Z)(n,e);var t=$(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).state={classes:r.props.classes,all_addr:r.props.all_addr,newAddrHome:"",newAddrPD:"",newAddrET:"",newAddrKV:"",newAddrDom:""},r}return(0,o.Z)(n,[{key:"checkNewAddr",value:function(){var e=document.querySelector("#newAddrStreet").value;e.length>0&&this.state.newAddrHome.length>0&&fetch("https://jacofood.ru/src/php/test_app.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:ee.stringify({type:"save_new_addr",city_id:1,street:e+" "+this.state.newAddrHome})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"changeDomTrue",value:function(e){this.setState({newAddrDom:e})}},{key:"render",value:function(){var e=this;return r.createElement(D.Z,{container:!0,spacing:3},r.createElement("div",{className:this.state.classes.mainAddr},r.createElement(F.ZP,{freeSolo:!0,id:"newAddrStreet",style:{flex:3},onBlur:this.checkNewAddr.bind(this),options:this.state.all_addr.map((function(e){return e.value})),renderInput:function(e){return r.createElement(U.Z,(0,h.Z)({},e,{label:"Улица",margin:"normal",variant:"outlined"}))}}),r.createElement(U.Z,{label:"Дом",variant:"outlined",style:{margin:"16px 8px 8px 8px",flex:1},value:this.state.newAddrHome,onChange:function(t){return e.setState({newAddrHome:t.target.value})},onBlur:this.checkNewAddr.bind(this)})),r.createElement("div",{className:this.state.classes.otherAddr},r.createElement(U.Z,{label:"Подъезд",variant:"outlined",style:{marginRight:4},value:this.state.newAddrPD,onChange:function(t){return e.setState({newAddrPD:t.target.value})}}),r.createElement(U.Z,{label:"Этаж",variant:"outlined",style:{marginRight:4,marginLeft:4},value:this.state.newAddrET,onChange:function(t){return e.setState({newAddrET:t.target.value})}}),r.createElement(U.Z,{label:"Квартира",variant:"outlined",style:{marginRight:8,marginLeft:4},value:this.state.newAddrKV,onChange:function(t){return e.setState({newAddrKV:t.target.value})}})),r.createElement("div",{style:{width:"100%",marginRight:8}},r.createElement(Y.Z,{disableElevation:!0,variant:"contained",className:this.state.classes.chooseDomTrue},r.createElement(I.Z,{className:!0===this.state.newAddrDom?"active":"",onClick:this.changeDomTrue.bind(this,!0)},"Домофон работает"),r.createElement(I.Z,{className:!1===this.state.newAddrDom?"active":"",onClick:this.changeDomTrue.bind(this,!1)},"Домофон не работает"))))}}]),n}(r.Component),oe=function(e){(0,c.Z)(n,e);var t=$(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).state={classes:r.props.classes},r}return(0,o.Z)(n,[{key:"render",value:function(){return r.createElement(D.Z,{container:!0,spacing:3},r.createElement("div",{className:this.state.classes.mainAddr},r.createElement(U.Z,{label:"Комментарий курьеру",variant:"outlined"}),r.createElement(U.Z,{label:"Сдача",variant:"outlined"})))}}]),n}(r.Component),le=function(e){(0,c.Z)(n,e);var t=$(n);function n(e){var r;return(0,s.Z)(this,n),(r=t.call(this,e)).state={classes:r.props.classes,pic_point:r.props.pic_point,orderPic:0,picPointInfo:null},r}return(0,o.Z)(n,[{key:"choosePic",value:function(e){this.setState({orderPic:e.id,picPointInfo:e})}},{key:"render",value:function(){var e=this;return r.createElement(D.Z,{container:!0,direction:"column",justify:"space-between",alignItems:"stretch",spacing:3,className:this.state.classes.container},this.state.pic_point.map((function(t,n){return r.createElement(I.Z,{key:n,onClick:e.choosePic.bind(e,t),style:{backgroundColor:e.state.orderPic==t.id?"#CC0033":"#e5e5e5",color:e.state.orderPic==t.id?"#fff":"#000"},className:e.state.classes.boxPic},t.addr)})))}}]),n}(r.Component),ce=function(e){(0,c.Z)(n,e);var t=$(n);function n(e){var r;return(0,s.Z)(this,n),r=t.call(this,e),(0,p.Z)((0,l.Z)(r),"changeTypeTime",(function(e,t){r.setState({typeTime:t}),r.loadTimeWait()})),(0,p.Z)((0,l.Z)(r),"changeDate",(function(e,t){r.setState({orderDate:e.target.value}),setTimeout((function(){r.loadTimePred()}),300)})),(0,p.Z)((0,l.Z)(r),"changeTime",(function(e,t){r.setState({orderTime:e.target.value})})),r.state={classes:r.props.classes,textAvgTime:"Среднее время: ~",orderDate:"",orderTime:"",typeTime:0,timePred:[],date_pred:r.props.date_pred},r}return(0,o.Z)(n,[{key:"loadTimePred",value:function(){var e=this;fetch("https://jacofood.ru/src/php/test_app.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:ee.stringify({type:"get_times_pred_web",point_id:1,type_order:this.state.typeOrder+1,date:this.state.orderDate,cart:JSON.stringify([])})}).then((function(e){return e.json()})).then((function(t){console.log(t),t.st&&e.setState({timePred:t.data})}))}},{key:"loadTimeWait",value:function(){var e=this;fetch("https://jacofood.ru/src/php/test_app.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:ee.stringify({type:"load_time_wait",point_id:1,city_id:1})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({textAvgTime:t})}))}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(D.Z,{container:!0,spacing:3,className:this.state.classes.container},r.createElement(M.Z,{value:this.state.typeTime,onChange:this.changeTypeTime,style:{marginTop:15,width:"100%"},indicatorColor:"primary",textColor:"primary",centered:!0},r.createElement(R.Z,{label:"По текущему"}),r.createElement(R.Z,{label:"Ко времени"}))),0==this.state.typeTime?r.createElement(D.Z,{container:!0,spacing:3,className:this.state.classes.container},r.createElement(O.Z,{component:"span",style:{padding:"8px 0px",fontSize:"1rem"}},this.state.textAvgTime)):r.createElement(D.Z,{container:!0,spacing:3,className:this.state.classes.container},r.createElement("div",{className:this.state.classes.formPred},r.createElement(V.Z,{variant:"outlined",className:this.state.classes.formControl},r.createElement(W.Z,{id:"demo-simple-select-outlined-label"},"Дата"),r.createElement(G.Z,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:this.state.orderDate,onChange:this.changeDate,label:"Дата"},this.state.date_pred.map((function(e,t){return r.createElement(K.Z,{key:t,value:e.date},e.text)})))),r.createElement(V.Z,{variant:"outlined",className:this.state.classes.formControl},r.createElement(W.Z,{id:"demo-simple-select-outlined-label"},"Время"),r.createElement(G.Z,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:this.state.orderTime,onChange:this.changeTime,label:"Время"},this.state.timePred.map((function(e,t){return r.createElement(K.Z,{key:t,value:e.value},e.text)})))))))}}]),n}(r.Component),ue=function(e){(0,c.Z)(n,e);var t=$(n);function n(e){var r;return(0,s.Z)(this,n),r=t.call(this,e),(0,p.Z)((0,l.Z)(r),"componentDidMount",(function(){fetch("https://jacofood.ru/src/php/test_app.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:ee.stringify({type:"get_cat",city_id:1})}).then((function(e){return e.json()})).then((function(e){r.setState({cats:e.arr}),console.log(e)})).catch((function(e){})),fetch("https://jacofood.ru/src/php/test_app.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:ee.stringify({type:"get_by_mi",city_id:1,user_id:0})}).then((function(e){return e.json()})).then((function(e){console.log(e),r.setState({pic_point:e.get_addr_pic.points,all_addr:e.get_addr,date_pred:e.date_pred})}))})),(0,p.Z)((0,l.Z)(r),"changeTab",(function(e,t){r.setState({typeOrder:t})})),r.state={classes:r.props.classes,cats:[],all_addr:[],pic_point:[],timePred:[],date_pred:[],orderDate:"",orderTime:"",typeOrder:0},r}return(0,o.Z)(n,[{key:"render",value:function(){return r.createElement(D.Z,{container:!0,spacing:0},r.createElement(D.Z,{item:!0,xs:8,style:{paddingRight:16}},r.createElement(me,null)),r.createElement(D.Z,{item:!0,xs:8,style:{padding:"24px 8px 0px 16px"}},r.createElement(ie,{classes:this.state.classes})),r.createElement(D.Z,{item:!0,xs:4,style:{padding:"16px",marginTop:-35},className:this.state.classes.container},r.createElement(M.Z,{value:this.state.typeOrder,onChange:this.changeTab,indicatorColor:"primary",textColor:"primary",centered:!0},r.createElement(R.Z,{label:"Доставка"}),r.createElement(R.Z,{label:"Самовывоз"}),r.createElement(R.Z,{label:"Адрес клиента"})),0==this.state.typeOrder?this.state.all_addr.length>0?r.createElement(se,{classes:this.state.classes,all_addr:this.state.all_addr}):null:1==this.state.typeOrder?this.state.pic_point.length>0?r.createElement(le,{classes:this.state.classes,pic_point:this.state.pic_point}):null:r.createElement("div",null,r.createElement(E.Z,{component:"nav","aria-label":"main mailbox folders"},r.createElement(b.Z,{button:!0},r.createElement(C.Z,{primary:"Льва Яшина 16"})),r.createElement(b.Z,{button:!0},r.createElement(C.Z,{primary:"Ленинградка 47"})),r.createElement(b.Z,{button:!0},r.createElement(C.Z,{primary:"Южное шоссе 45"})))),this.state.date_pred.length>0?r.createElement(ce,{classes:this.state.classes,date_pred:this.state.date_pred}):null,0==this.state.typeOrder?r.createElement(oe,{classes:this.state.classes}):null,r.createElement(D.Z,{container:!0,spacing:3,className:this.state.classes.container},r.createElement("form",{className:this.state.classes.blockTotalOrder,noValidate:!0,autoComplete:"off",style:{width:"100%",marginRight:8,marginTop:3}},r.createElement(O.Z,{variant:"h6",component:"span"},"К оплате: 100 р"),r.createElement(I.Z,{variant:"contained",color:"primary"},"Оформить заказ")))),r.createElement(D.Z,{item:!0,xs:12,style:{padding:"16px 0px 0px 0px"}},this.state.cats.length>0?r.createElement(ae,{classes:this.state.classes,cats:this.state.cats}):null))}}]),n}(r.Component);function me(){var e=te(),t=r.useState({top:!1,left:!1,bottom:!1,right:!1}),n=(0,f.Z)(t,2),a=n[0],i=n[1],s=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&i(X(X({},a),{},(0,p.Z)({},e,t)))}};return r.createElement("div",{className:e.root},r.createElement(P.Z,{position:"static",style:{backgroundColor:"#fff",color:"#000"}},r.createElement(T.Z,{style:{minHeight:48}},r.createElement(N.Z,{edge:"start",className:e.menuButton,onClick:s("left",!0),color:"inherit","aria-label":"menu"},r.createElement(A.Z,null)),r.createElement(D.Z,{container:!0,spacing:3,className:e.containerHeader},r.createElement(D.Z,{item:!0,xs:6,style:{paddingTop:5}},r.createElement(U.Z,{label:"Промокод",variant:"outlined",style:{marginRight:4,marginLeft:4}}),r.createElement(I.Z,{variant:"contained",color:"primary",style:{padding:"2px 6px",minWidth:30,marginRight:8}},"?"),r.createElement(I.Z,{variant:"contained",color:"primary",style:{padding:"2px 6px",minWidth:30}},"Х")),r.createElement(D.Z,{item:!0,xs:3,style:{paddingTop:5}},r.createElement(U.Z,{label:"Телефон клиента",variant:"outlined",style:{marginRight:4,marginLeft:4},onBlur:function(e){console.log(e.target.value),fetch("https://jacofood.ru/src/php/test_app.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:ee.stringify({type:"get_user_addrs",city_id:1,login:e.target.value})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}}))))),r.createElement(_.ZP,{anchor:"left",open:a.left,onClose:s("left",!1)},r.createElement("div",{className:(0,y.Z)(e.list),role:"presentation",onClick:s("left",!1),onKeyDown:s("left",!1)},r.createElement(E.Z,null,["Inbox","Starred","Send email","Drafts"].map((function(e,t){return r.createElement(b.Z,{button:!0,key:e},r.createElement(w.Z,null,t%2==0?r.createElement(k.Z,null):r.createElement(S.Z,null)),r.createElement(C.Z,{primary:e}))}))),r.createElement(x.Z,null),r.createElement(E.Z,null,["All mail","Trash","Spam"].map((function(e,t){return r.createElement(b.Z,{button:!0,key:e},r.createElement(w.Z,null,t%2==0?r.createElement(k.Z,null):r.createElement(S.Z,null)),r.createElement(C.Z,{primary:e}))}))))))}function pe(){var e=te();return r.createElement("div",{className:e.root},r.createElement(ue,{classes:e}))}n(6627);var de=n(7329),fe=n(8949),he=n(381),ge=n.n(he),ye=n(7563),Ze=new(function(){function e(){var t=this;if((0,s.Z)(this,e),(0,p.Z)(this,"items",""),(0,p.Z)(this,"itemsPromo",""),(0,p.Z)(this,"allItems",""),(0,p.Z)(this,"allItemsCat",""),(0,p.Z)(this,"banners",""),(0,p.Z)(this,"AllPrice",0),(0,p.Z)(this,"sum_div",0),(0,p.Z)(this,"cityName",""),(0,p.Z)(this,"cityNameRU",""),(0,p.Z)(this,"promo",null),(0,p.Z)(this,"userToken",null),(0,p.Z)(this,"userName",""),(0,p.Z)(this,"activePage",""),(0,p.Z)(this,"need_dops",""),(0,p.Z)(this,"free_items",""),(0,p.Z)(this,"cart_data",""),(0,p.Z)(this,"setSumDiv",(function(e){t.sum_div=parseInt(e)})),(0,p.Z)(this,"setDops",(function(e){t.need_dops=JSON.stringify(e)})),(0,p.Z)(this,"setFreeItems",(function(e){t.free_items=JSON.stringify(e)})),(0,p.Z)(this,"setCityRU",(function(e){t.cityNameRU=e})),(0,p.Z)(this,"setCity",(function(e){t.cityName=e})),(0,p.Z)(this,"setAllPrice",(function(e){t.AllPrice=e})),(0,p.Z)(this,"setPage",(function(e){t.activePage=e})),(0,p.Z)(this,"setToken",(function(e,n){t.userToken=e,t.setUserName(n),"undefined"!=typeof window&&localStorage.setItem("token",e)})),(0,p.Z)(this,"setPromo",(function(e,n){t.promo=e,localStorage.setItem("promo_name",n)})),(0,p.Z)(this,"setBanners",(function(e){t.banners=JSON.stringify(e)})),(0,p.Z)(this,"setItemsPromo",(function(e){t.itemsPromo=JSON.stringify(e)})),(0,p.Z)(this,"setAllItemsCat",(function(e){t.allItemsCat=JSON.stringify(e)})),(0,p.Z)(this,"setItems",(function(e){var n=0,r=0,a=t.getItemsPromo();if(r=e.reduce((function(e,t){return e+parseInt(t.all_price)}),n),n=0,r+=a.reduce((function(e,t){return e+parseInt(t.all_price)}),n),t.setAllPrice(r),t.items=JSON.stringify(e),"undefined"!=typeof window){var i=e.filter((function(e){return e.count>0}));i=JSON.stringify(i),localStorage.setItem("my_cart",i)}})),(0,p.Z)(this,"saveCartData",(function(e){var n=JSON.stringify(e);t.cart_data=n,"undefined"!=typeof window&&localStorage.setItem("cartData",n)})),(0,p.Z)(this,"setAllItems",(function(e){t.allItems=JSON.stringify(e)})),"undefined"!=typeof window){if(localStorage.getItem("my_cart")){var n=JSON.parse(localStorage.getItem("my_cart")),r=[];n.forEach((function(e){r.push({name:e.name,item_id:e.item_id,count:e.count,one_price:parseInt(e.one_price),all_price:parseInt(e.one_price)*parseInt(e.count)})})),this.setItems(r)}localStorage.getItem("token")&&this.setToken(localStorage.getItem("token")),localStorage.getItem("cartData")&&(this.cartData=localStorage.getItem("cartData")),localStorage.getItem("promo_name")&&setTimeout((function(){t.getInfoPromo(localStorage.getItem("promo_name"))}),300)}(0,fe.ky)(this)}return(0,o.Z)(e,[{key:"getSumDiv",value:function(){return this.sum_div}},{key:"getDops",value:function(){return 0==this.need_dops.length?[]:JSON.parse(this.need_dops,!0)}},{key:"getFreeItems",value:function(){return 0==this.free_items.length?[]:JSON.parse(this.free_items,!0)}},{key:"getCityRU",value:function(){return this.cityNameRU&&this.cityNameRU.length>0?this.cityNameRU:"Город"}},{key:"getCity",value:function(){return this.cityName}},{key:"getAllPrice",value:function(){return this.AllPrice}},{key:"getPage",value:function(){return this.activePage}},{key:"getUserName",value:function(){return this.userName&&this.userName.length>0?this.userName:""}},{key:"setUserName",value:function(e){this.userName=e}},{key:"getToken",value:function(){return this.userToken}},{key:"getInfoPromo",value:function(e){fetch("https://jacofood.ru/src/php/test_app.php",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:ye.stringify({type:"get_promo_web",city_id:Ze.getCity(),promo_name:e})}).then((function(e){return e.json()})).then((function(t){Ze.setPromo(JSON.stringify(t),e),!1===Ze.checkPromo().st&&localStorage.removeItem("promo_name")}))}},{key:"getPromo",value:function(){return JSON.parse(this.promo,!0)}},{key:"checkPromo",value:function(){var e=Ze.getCartData();Ze.setItemsPromo([]);var t=0,n=0,r=e.orderTimes&&1!=parseInt(e.orderTimes)?e.orderPredDay+" "+e.orderPredTime:0,a=this.getPromo(),i=this.getItems(),s=this.getAllItems(),o=[];i.forEach((function(e,t){o.push({name:e.name,item_id:e.item_id,count:e.count,one_price:e.one_price,all_price:parseInt(e.one_price)*parseInt(e.count)})})),i=o,this.setItems(i);var l=[];n=i.reduce((function(e,t){return e+parseInt(t.all_price)}),t);var c,u,m=0,p=0,d=0;(e.orderType||0==e.orderType)&&(m=null!==(c=parseInt(e.orderType))&&void 0!==c?c:0,p=e.orderAddr?parseInt(e.orderAddr.point_id):0,d=null!==(u=parseInt(e.orderPic))&&void 0!==u?u:0);var f=ge()(r).format("YYYY-MM-DD"),h=ge()(r).format("H:mm"),g=parseInt(ge()(r).format("E"));if(0==r?(f=ge()(new Date).format("YYYY-MM-DD"),h=ge()(new Date).format("H:mm"),g=parseInt(ge()(new Date).format("E"))):(f=ge()(r).format("YYYY-MM-DD"),h=ge()(r).format("H:mm"),g=parseInt(ge()(r).format("E"))),a){if(!a.status_promo)return{st:!1,text:a.promo_text.false};if(a.limits.date.min&&a.limits.date.max&&!(f>=a.limits.date.min&&f<=a.limits.date.max))return{st:!1,text:a.promo_text.false};if(0!=a.limits.time.min&&0!=a.limits.time.max&&!(h>=a.limits.time.min&&h<=a.limits.time.max))return{st:!1,text:a.promo_text.false};if(0!=a.limits.point_id&&!(0==m&&p==a.limits.point_id||1==m&&d==a.limits.point_id))return{st:!1,text:"Адрес для доставки или самовывоза указан некорректно. Проверьте правильность введённых данных."};if(!(0==a.limits.summ.min&&0==a.limits.summ.max||n>=a.limits.summ.min&&(a.limits.summ.max>=n||0==a.limits.summ.max)))return{st:!1,text:"Общая сумма вашего заказа превышает допустимую стоимость для применения промокода."};if(a.limits.dows&&0==parseInt(a.limits.dows[g]))return{st:!1,text:"Указанный вами день недели недоступен для применения промокода. Пожалуйста, выберите другую дату."};if(a.limits.type_order&&!(1==parseInt(a.limits.type_order)||3==parseInt(a.limits.type_order)&&0==m||2==parseInt(a.limits.type_order)&&1==m))return{st:!1,text:"Тип заказа не применим для данного промокода. Пожалуйста, отредактируйте заказ."};if(a.limits.only_kassa&&1==parseInt(a.limits.only_kassa))return{st:!1,text:"Указанный вами промокод действителен только при оплате на кассе. Пожалуйста, посетите для оформления заказа ближайшее к вам кафе."};if(a.limits.items.length>0){var y=0;if(a.limits.items.map((function(e){o.find((function(t){return t.item_id==e}))&&y++})),a.limits.items.length!=y)return{st:!1,text:a.promo_text.false}}var Z=0,v=0,_=null;return 1==parseInt(a.promo_action)?(1==parseInt(a.sale.cat_sale)&&(v=parseInt(a.sale.count_sale),i.forEach((function(e,t){_=s.find((function(t){return t.id==e.item_id})),3!=parseInt(_.type)&&4!=parseInt(_.type)&&a.sale.sale_action.forEach((function(n){parseInt(e.item_id)==parseInt(n)&&(1==parseInt(a.sale.type_price)?v>0&&((Z=parseInt(e.one_price)*parseInt(e.count)-parseInt(v))<=0&&(Z=1),v-=parseInt(e.one_price)*parseInt(e.count),i[t].all_price=Z):(Z=parseInt(e.all_price)-parseInt(e.all_price)/100*parseInt(v),i[t].all_price=parseInt(Z)))}))}))),2==parseInt(a.sale.cat_sale)&&(v=parseInt(a.sale.count_sale),i.forEach((function(e,t){_=s.find((function(t){return t.id==e.item_id})),3!=parseInt(_.type)&&4!=parseInt(_.type)&&a.sale.sale_action.forEach((function(n){parseInt(_.cat_id)==parseInt(n)&&(1==parseInt(a.sale.type_price)?v>0&&((Z=parseInt(e.one_price)*parseInt(e.count)-parseInt(v))<=0&&(Z=1),v-=parseInt(e.one_price)*parseInt(e.count),i[t].all_price=Z):(Z=parseInt(e.all_price)-parseInt(e.all_price)/100*parseInt(v),i[t].all_price=parseInt(Z)))}))}))),3==parseInt(a.sale.cat_sale)&&(v=parseInt(a.sale.count_sale),i.forEach((function(e,t){_=s.find((function(t){return t.id==e.item_id})),3!=parseInt(_.type)&&4!=parseInt(_.type)&&(1==parseInt(a.sale.type_price)?v>0&&((Z=parseInt(e.one_price)*parseInt(e.count)-parseInt(v))<=0&&(Z=1),v-=parseInt(e.one_price)*parseInt(e.count),i[t].all_price=Z):(Z=parseInt(e.all_price)-parseInt(e.all_price)/100*parseInt(v),i[t].all_price=parseInt(Z)))}))),t=0,n=0,n=i.reduce((function(e,t){return e+t.all_price}),t),Ze.setAllPrice(n),{st:!0,text:a.promo_text.true}):(2==parseInt(a.promo_action)&&(a.items_add.forEach((function(e){_=s.find((function(t){return t.id==e.item_id})),l.push({item_id:e.item_id,count:e.count,one_price:_.price,all_price:e.price})})),t=0,n=0,n=i.reduce((function(e,t){return e+parseInt(t.all_price)}),t),t=0,n+=l.reduce((function(e,t){return e+parseInt(t.all_price)}),t),Ze.setItemsPromo(l),Ze.setAllPrice(n)),3==parseInt(a.promo_action)&&a.items_on_price.length>0&&(i.forEach((function(e,t){a.items_on_price.forEach((function(n){parseInt(e.item_id)==parseInt(n.id)&&(i[t].new_one_price=parseInt(n.price),i[t].all_price=parseInt(n.price)*parseInt(e.count))}))})),t=0,n=0,n=i.reduce((function(e,t){return e+parseInt(t.all_price)}),t),Ze.setAllPrice(n)),this.setItems(i),{st:!0,text:a.promo_text.true})}return{st:!1,text:a.promo_text.false,test:a}}},{key:"getBanners",value:function(){return 0==this.banners.length?[]:JSON.parse(this.banners,!0)}},{key:"getItemsPromo",value:function(){return 0==this.itemsPromo.length?[]:JSON.parse(this.itemsPromo,!0)}},{key:"getAllItemsCat",value:function(){return 0==this.allItemsCat.length?[]:JSON.parse(this.allItemsCat,!0)}},{key:"getCartData",value:function(){if("undefined"!=typeof window)return localStorage.getItem("cartData")?JSON.parse(localStorage.getItem("cartData")):[]}},{key:"getItems",value:function(){return 0==this.items.length?[]:JSON.parse(this.items,!0)}},{key:"getAllItems",value:function(){return 0==this.allItems.length?[]:JSON.parse(this.allItems,!0)}},{key:"AddItem",value:function(e){var t=Ze.getItems(),n=Ze.getAllItems(),r=Ze.getPromo();if(!(n.length>0))return 0;var a=t.find((function(t){return t.item_id==e})),i=0;a&&(i=a.count);var s=n.find((function(t){return t.id==e}));if(s){var o=i+1,l=s.price,c=Ze.check_max_count(parseInt(e));return parseInt(c)>=o?(t.some((function(t){return t.item_id==e}))?t.forEach((function(n,r){n.item_id==e&&(t[r].count=o,t[r].all_price=o*l)})):t.push({name:s.name,item_id:e,count:o,one_price:l,all_price:o*l}),Ze.setItems(t),r&&Ze.checkPromo(),o):o-1}}},{key:"MinusItem",value:function(e){var t=Ze.getItems(),n=Ze.getAllItems(),r=Ze.getPromo();if(n.length>0){var a=t.find((function(t){return t.item_id==e}));if(!a)return 0;var i=n.find((function(t){return t.id==e})),s=parseInt(a.count)-1,o=i.price;return s<=0&&(s=0),s>=0&&(t.map((function(n,r){n.item_id==e&&(t[r].count=s,t[r].all_price=s*o)})),Ze.setItems(t)),r&&Ze.checkPromo(),s}return 0}},{key:"check_need_dops",value:function(){var e=Ze.getItems(),t=Ze.getAllItems();if(!t||0==t.length)return[];var n=0,r=0,a=Ze.getDops();if(0==a.length)return[];e.forEach((function(e){var a=t.find((function(t){return t.id==e.item_id}));if(!a)return[];14==parseInt(a.cat_id)?n+=parseInt(e.count):14!==parseInt(a.cat_id)&&5!==parseInt(a.cat_id)&&6!==parseInt(a.cat_id)&&7!==parseInt(a.cat_id)&&(r+=parseInt(e.count))}));var i=[];r>0&&0==n&&(i=a.rolls),0==r&&n>0&&(i=a.pizza),r>0&&n>0&&(i=[].concat((0,de.Z)(a.rolls),(0,de.Z)(a.pizza))),0==r&&0==n&&(i=[].concat((0,de.Z)(a.rolls),(0,de.Z)(a.pizza)));var s=[],o=[];return e.forEach((function(e){var n=t.find((function(t){return t.id==e.item_id}));if(!n)return[];7==parseInt(n.cat_id)&&s.push(n)})),s.forEach((function(e){var t=!1;i.forEach((function(n){parseInt(n.id)==parseInt(e.id)&&(t=!0)})),t||o.push(e)})),i=[].concat((0,de.Z)(i),o)}},{key:"check_max_count",value:function(e){var t=[],n=[],r=Ze.getItems(),a=Ze.getFreeItems();if(!a)return 99;r.forEach((function(e,r){a.forEach((function(r){parseInt(e.item_id)==parseInt(r.this_item_id)&&(r.count_in_cart=parseInt(e.count),t.push(r),n.push(parseInt(r.item_id)))}))})),n=(0,de.Z)(new Set(n));var i=[];n.forEach((function(e,n){t.forEach((function(t){if(parseInt(e)==parseInt(t.item_id)){var n=!1;i.forEach((function(r,a){parseInt(r.item_id)==parseInt(e)&&(n=!0,i[a].count+=t.count_in_cart*t.max_count)})),n||i.push({item_id:parseInt(e),count:t.count_in_cart*t.max_count})}}))}));var s=99;return i.forEach((function(t){parseInt(t.item_id)==parseInt(e)&&(s=parseInt(t.count))})),s}}]),e}());const ve=Ze;n(7563);var _e=function(e){(0,c.Z)(i,e);var t,n,a=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,m.Z)(t);if(n){var a=(0,m.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function i(e){var t;return(0,s.Z)(this,i),t=a.call(this,e),(0,p.Z)((0,l.Z)(t),"componentDidMount",(function(){})),t.state={categoryItems:[],cartItems:[],activePage:"",is_load:!1,openCity:!1,cityName:"",testData:[1,2,3,4,5,6,7],cityList:[],openLogin:!1,userLogin:"",userLoginFormat:"",userCode:"",stage_1:!0,stage_2:!1,timerSMS:59,errPhone:"",errSMS:"",userName:"",soc_link:null},t}return(0,o.Z)(i,[{key:"render",value:function(){return r.createElement("div",null)}}]),i}(r.Component),Ie=n(150);n(7563);var Ee={itemsStore:ve};function xe(e){var t=e.code,n=e.children;return r.createElement(d.AW,{render:function(e){var r=e.staticContext;return r&&(r.status=t),n}})}function be(){return r.createElement(xe,{code:404},r.createElement(D.Z,{container:!0,className:"Contact mainContainer MuiGrid-spacing-xs-3",style:{marginTop:64}},r.createElement(D.Z,{item:!0,xs:12},r.createElement(O.Z,{variant:"h5",component:"h1"},"404 Страница не найдена"))))}var we=function(e){(0,c.Z)(i,e);var t,n,a=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,m.Z)(t);if(n){var a=(0,m.Z)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function i(e){var t;return(0,s.Z)(this,i),t=a.call(this,e),(0,p.Z)((0,l.Z)(t),"componentDidMount",(function(){})),t.state={categoryItems:[],cartItems:[],activePage:"",is_load:!1,openCity:!1,cityName:"",testData:[1,2,3,4,5,6,7,8,9],cityList:[],openLogin:!1,userLogin:"",userLoginFormat:"",userCode:"",stage_1:!0,stage_2:!1,timerSMS:59,errPhone:"",errSMS:"",userName:"",soc_link:null},t}return(0,o.Z)(i,[{key:"render",value:function(){return r.createElement(Ie.zt,Ee,r.createElement(_e,null),r.createElement(d.rs,null,r.createElement(d.AW,{path:"/",exact:!0,component:pe}),r.createElement(d.AW,{component:be})))}}]),i}(r.Component);a.hydrate(r.createElement(i.VK,null,r.createElement(we,null)),document.getElementById("app"))},8293:(e,t,n)=>{var r={"./ru":1793,"./ru.js":1793};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=8293}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var i=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=t,e=[],r.O=(t,n,a,i)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,a,i]=e[c],o=!0,l=0;l<n.length;l++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(o=!1,i<s&&(s=i));o&&(e.splice(c--,1),t=a())}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,a,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,i,[s,o,l]=n,c=0;for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(l)var u=l(r);for(t&&t(n);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[s[c]]=0;return r.O(u)},n=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[736],(()=>r(6283)));a=r.O(a)})();
//# sourceMappingURL=main.js.map