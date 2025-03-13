"use strict";(self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[]).push([[272],{45:(e,t,o)=>{o.d(t,{A:()=>l});var r=o(8587);function l(e,t){if(null==e)return{};var o,l,n=(0,r.A)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)o=i[l],-1===t.indexOf(o)&&{}.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}},423:(e,t,o)=>{o.d(t,{A:()=>g});var r=o(8587),l=o(8168),n=o(6540),i=o(4164),a=o(5659),s=o(8850),c=o(8466),d=o(5669),u=o(1848),p=o(8413),b=o(1609);function f(e){return(0,b.Ay)("MuiTab",e)}const h=(0,p.A)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]);var v=o(4848);const m=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],A=(0,u.Ay)(s.A,{name:"MuiTab",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.label&&o.icon&&t.labelIcon,t[`textColor${(0,c.A)(o.textColor)}`],o.fullWidth&&t.fullWidth,o.wrapped&&t.wrapped,{[`& .${h.iconWrapper}`]:t.iconWrapper}]}})((({theme:e,ownerState:t})=>(0,l.A)({},e.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},t.label&&{flexDirection:"top"===t.iconPosition||"bottom"===t.iconPosition?"column":"row"},{lineHeight:1.25},t.icon&&t.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${h.iconWrapper}`]:(0,l.A)({},"top"===t.iconPosition&&{marginBottom:6},"bottom"===t.iconPosition&&{marginTop:6},"start"===t.iconPosition&&{marginRight:e.spacing(1)},"end"===t.iconPosition&&{marginLeft:e.spacing(1)})},"inherit"===t.textColor&&{color:"inherit",opacity:.6,[`&.${h.selected}`]:{opacity:1},[`&.${h.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"primary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${h.selected}`]:{color:(e.vars||e).palette.primary.main},[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}},"secondary"===t.textColor&&{color:(e.vars||e).palette.text.secondary,[`&.${h.selected}`]:{color:(e.vars||e).palette.secondary.main},[`&.${h.disabled}`]:{color:(e.vars||e).palette.text.disabled}},t.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},t.wrapped&&{fontSize:e.typography.pxToRem(12)}))),g=n.forwardRef((function(e,t){const o=(0,d.b)({props:e,name:"MuiTab"}),{className:s,disabled:u=!1,disableFocusRipple:p=!1,fullWidth:b,icon:h,iconPosition:g="top",indicator:x,label:w,onChange:S,onClick:y,onFocus:B,selected:C,selectionFollowsFocus:R,textColor:M="inherit",value:$,wrapped:W=!1}=o,E=(0,r.A)(o,m),T=(0,l.A)({},o,{disabled:u,disableFocusRipple:p,selected:C,icon:!!h,iconPosition:g,label:!!w,fullWidth:b,textColor:M,wrapped:W}),P=(e=>{const{classes:t,textColor:o,fullWidth:r,wrapped:l,icon:n,label:i,selected:s,disabled:d}=e,u={root:["root",n&&i&&"labelIcon",`textColor${(0,c.A)(o)}`,r&&"fullWidth",l&&"wrapped",s&&"selected",d&&"disabled"],iconWrapper:["iconWrapper"]};return(0,a.A)(u,f,t)})(T),N=h&&w&&n.isValidElement(h)?n.cloneElement(h,{className:(0,i.A)(P.iconWrapper,h.props.className)}):h;return(0,v.jsxs)(A,(0,l.A)({focusRipple:!p,className:(0,i.A)(P.root,s),ref:t,role:"tab","aria-selected":C,disabled:u,onClick:e=>{!C&&S&&S(e,$),y&&y(e)},onFocus:e=>{R&&!C&&S&&S(e,$),B&&B(e)},ownerState:T,tabIndex:C?0:-1},E,{children:["top"===g||"start"===g?(0,v.jsxs)(n.Fragment,{children:[N,w]}):(0,v.jsxs)(n.Fragment,{children:[w,N]}),x]}))}))},474:(e,t,o)=>{o.d(t,{A:()=>g});var r=o(8168),l=o(8587),n=o(6540),i=o(4164),a=o(5659),s=o(7256),c=o(5669),d=o(1848),u=o(8413),p=o(1609);function b(e){return(0,p.Ay)("MuiTableFooter",e)}(0,u.A)("MuiTableFooter",["root"]);var f=o(4848);const h=["className","component"],v=(0,d.Ay)("tfoot",{name:"MuiTableFooter",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-footer-group"}),m={variant:"footer"},A="tfoot",g=n.forwardRef((function(e,t){const o=(0,c.b)({props:e,name:"MuiTableFooter"}),{className:n,component:d=A}=o,u=(0,l.A)(o,h),p=(0,r.A)({},o,{component:d}),g=(e=>{const{classes:t}=e;return(0,a.A)({root:["root"]},b,t)})(p);return(0,f.jsx)(s.A.Provider,{value:m,children:(0,f.jsx)(v,(0,r.A)({as:d,className:(0,i.A)(g.root,n),ref:t,role:d===A?null:"rowgroup",ownerState:p},u))})}))},3756:(e,t,o)=>{o.d(t,{A:()=>w});var r=o(8587),l=o(8168),n=o(6540),i=o(4164),a=o(5659),s=o(771),c=o(8466),d=o(1848),u=o(5669),p=o(8413),b=o(1609);function f(e){return(0,b.Ay)("MuiButtonGroup",e)}const h=(0,p.A)("MuiButtonGroup",["root","contained","outlined","text","disableElevation","disabled","firstButton","fullWidth","vertical","grouped","groupedHorizontal","groupedVertical","groupedText","groupedTextHorizontal","groupedTextVertical","groupedTextPrimary","groupedTextSecondary","groupedOutlined","groupedOutlinedHorizontal","groupedOutlinedVertical","groupedOutlinedPrimary","groupedOutlinedSecondary","groupedContained","groupedContainedHorizontal","groupedContainedVertical","groupedContainedPrimary","groupedContainedSecondary","lastButton","middleButton"]);var v=o(9467),m=o(5132),A=o(4848);const g=["children","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"],x=(0,d.Ay)("div",{name:"MuiButtonGroup",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${h.grouped}`]:t.grouped},{[`& .${h.grouped}`]:t[`grouped${(0,c.A)(o.orientation)}`]},{[`& .${h.grouped}`]:t[`grouped${(0,c.A)(o.variant)}`]},{[`& .${h.grouped}`]:t[`grouped${(0,c.A)(o.variant)}${(0,c.A)(o.orientation)}`]},{[`& .${h.grouped}`]:t[`grouped${(0,c.A)(o.variant)}${(0,c.A)(o.color)}`]},{[`& .${h.firstButton}`]:t.firstButton},{[`& .${h.lastButton}`]:t.lastButton},{[`& .${h.middleButton}`]:t.middleButton},t.root,t[o.variant],!0===o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth,"vertical"===o.orientation&&t.vertical]}})((({theme:e,ownerState:t})=>(0,l.A)({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[2]},t.disableElevation&&{boxShadow:"none"},t.fullWidth&&{width:"100%"},"vertical"===t.orientation&&{flexDirection:"column"},{[`& .${h.grouped}`]:(0,l.A)({minWidth:40,"&:hover":(0,l.A)({},"contained"===t.variant&&{boxShadow:"none"})},"contained"===t.variant&&{boxShadow:"none"}),[`& .${h.firstButton},& .${h.middleButton}`]:(0,l.A)({},"horizontal"===t.orientation&&{borderTopRightRadius:0,borderBottomRightRadius:0},"vertical"===t.orientation&&{borderBottomRightRadius:0,borderBottomLeftRadius:0},"text"===t.variant&&"horizontal"===t.orientation&&{borderRight:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${h.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},"text"===t.variant&&"vertical"===t.orientation&&{borderBottom:e.vars?`1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),[`&.${h.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},"text"===t.variant&&"inherit"!==t.color&&{borderColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:(0,s.X4)(e.palette[t.color].main,.5)},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"transparent"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"transparent"},"contained"===t.variant&&"horizontal"===t.orientation&&{borderRight:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${h.disabled}`]:{borderRight:`1px solid ${(e.vars||e).palette.action.disabled}`}},"contained"===t.variant&&"vertical"===t.orientation&&{borderBottom:`1px solid ${(e.vars||e).palette.grey[400]}`,[`&.${h.disabled}`]:{borderBottom:`1px solid ${(e.vars||e).palette.action.disabled}`}},"contained"===t.variant&&"inherit"!==t.color&&{borderColor:(e.vars||e).palette[t.color].dark},{"&:hover":(0,l.A)({},"outlined"===t.variant&&"horizontal"===t.orientation&&{borderRightColor:"currentColor"},"outlined"===t.variant&&"vertical"===t.orientation&&{borderBottomColor:"currentColor"})}),[`& .${h.lastButton},& .${h.middleButton}`]:(0,l.A)({},"horizontal"===t.orientation&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},"vertical"===t.orientation&&{borderTopRightRadius:0,borderTopLeftRadius:0},"outlined"===t.variant&&"horizontal"===t.orientation&&{marginLeft:-1},"outlined"===t.variant&&"vertical"===t.orientation&&{marginTop:-1})}))),w=n.forwardRef((function(e,t){const o=(0,u.b)({props:e,name:"MuiButtonGroup"}),{children:s,className:d,color:p="primary",component:b="div",disabled:h=!1,disableElevation:w=!1,disableFocusRipple:S=!1,disableRipple:y=!1,fullWidth:B=!1,orientation:C="horizontal",size:R="medium",variant:M="outlined"}=o,$=(0,r.A)(o,g),W=(0,l.A)({},o,{color:p,component:b,disabled:h,disableElevation:w,disableFocusRipple:S,disableRipple:y,fullWidth:B,orientation:C,size:R,variant:M}),E=(e=>{const{classes:t,color:o,disabled:r,disableElevation:l,fullWidth:n,orientation:i,variant:s}=e,d={root:["root",s,"vertical"===i&&"vertical",n&&"fullWidth",l&&"disableElevation"],grouped:["grouped",`grouped${(0,c.A)(i)}`,`grouped${(0,c.A)(s)}`,`grouped${(0,c.A)(s)}${(0,c.A)(i)}`,`grouped${(0,c.A)(s)}${(0,c.A)(o)}`,r&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return(0,a.A)(d,f,t)})(W),T=n.useMemo((()=>({className:E.grouped,color:p,disabled:h,disableElevation:w,disableFocusRipple:S,disableRipple:y,fullWidth:B,size:R,variant:M})),[p,h,w,S,y,B,R,M,E.grouped]),P=function(e){return n.Children.toArray(e).filter((e=>n.isValidElement(e)))}(s),N=P.length,I=e=>{const t=0===e,o=e===N-1;return t&&o?"":t?E.firstButton:o?E.lastButton:E.middleButton};return(0,A.jsx)(x,(0,l.A)({as:b,role:"group",className:(0,i.A)(E.root,d),ref:t,ownerState:W},$,{children:(0,A.jsx)(v.A.Provider,{value:T,children:P.map(((e,t)=>(0,A.jsx)(m.A.Provider,{value:I(t),children:e},t)))})}))}))},6025:(e,t,o)=>{o.d(t,{A:()=>p});var r=o(8168),l=o(8587),n=o(1523),i=o(2879),a=o(6677),s=o(2505);const c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],u=["component"];function p(e,t){const{className:o,elementType:p,ownerState:b,externalForwardedProps:f,getSlotOwnerState:h,internalForwardedProps:v}=t,m=(0,l.A)(t,c),{component:A,slots:g={[e]:void 0},slotProps:x={[e]:void 0}}=f,w=(0,l.A)(f,d),S=g[e]||p,y=(0,a.A)(x[e],b),B=(0,s.A)((0,r.A)({className:o},m,{externalForwardedProps:"root"===e?w:void 0,externalSlotProps:y})),{props:{component:C},internalRef:R}=B,M=(0,l.A)(B.props,u),$=(0,n.A)(R,null==y?void 0:y.ref,t.ref),W=h?h(M):{},E=(0,r.A)({},b,W),T="root"===e?C||A:C,P=(0,i.A)(S,(0,r.A)({},"root"===e&&!A&&!g[e]&&v,"root"!==e&&!g[e]&&v,M,T&&{as:T},{ref:$}),E);return Object.keys(W).forEach((e=>{delete P[e]})),[S,P]}},6831:(e,t,o)=>{o.d(t,{A:()=>v});var r=o(8168),l=o(8587),n=o(6540),i=o(4164),a=o(5659),s=o(4073),c=o(1848),d=o(5669),u=o(1435),p=o(8102),b=o(4848);const f=["className","id"],h=(0,c.Ay)(s.A,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),v=n.forwardRef((function(e,t){const o=(0,d.b)({props:e,name:"MuiDialogTitle"}),{className:s,id:c}=o,v=(0,l.A)(o,f),m=o,A=(e=>{const{classes:t}=e;return(0,a.A)({root:["root"]},u.t,t)})(m),{titleId:g=c}=n.useContext(p.A);return(0,b.jsx)(h,(0,r.A)({component:"h2",className:(0,i.A)(A.root,s),ownerState:m,ref:t,variant:"h6",id:null!=c?c:g},v))}))},8878:(e,t,o)=>{o.d(t,{A:()=>K});var r=o(8587),l=o(8168),n=o(6540),i=o(4164),a=o(5659),s=o(3788),c=o(9329),d=o(1848),u=o(5669),p=o(4675),b=o(1935);let f;function h(){if(f)return f;const e=document.createElement("div"),t=document.createElement("div");return t.style.width="10px",t.style.height="1px",e.appendChild(t),e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e),f="reverse",e.scrollLeft>0?f="default":(e.scrollLeft=1,0===e.scrollLeft&&(f="negative")),document.body.removeChild(e),f}function v(e,t){const o=e.scrollLeft;if("rtl"!==t)return o;switch(h()){case"negative":return e.scrollWidth-e.clientWidth+o;case"reverse":return e.scrollWidth-e.clientWidth-o;default:return o}}function m(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2}var A=o(2778),g=o(3749),x=o(4848);const w=["onChange"],S={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var y=o(5003);const B=(0,y.A)((0,x.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),C=(0,y.A)((0,x.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");var R=o(8850),M=o(8413),$=o(1609);function W(e){return(0,$.Ay)("MuiTabScrollButton",e)}const E=(0,M.A)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),T=["className","slots","slotProps","direction","orientation","disabled"],P=(0,d.Ay)(R.A,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.orientation&&t[o.orientation]]}})((({ownerState:e})=>(0,l.A)({width:40,flexShrink:0,opacity:.8,[`&.${E.disabled}`]:{opacity:0}},"vertical"===e.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${e.isRtl?-90:90}deg)`}}))),N=n.forwardRef((function(e,t){var o,n;const d=(0,u.b)({props:e,name:"MuiTabScrollButton"}),{className:p,slots:b={},slotProps:f={},direction:h}=d,v=(0,r.A)(d,T),m=(0,s.I)(),A=(0,l.A)({isRtl:m},d),g=(e=>{const{classes:t,orientation:o,disabled:r}=e,l={root:["root",o,r&&"disabled"]};return(0,a.A)(l,W,t)})(A),w=null!=(o=b.StartScrollButtonIcon)?o:B,S=null!=(n=b.EndScrollButtonIcon)?n:C,y=(0,c.A)({elementType:w,externalSlotProps:f.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:A}),R=(0,c.A)({elementType:S,externalSlotProps:f.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:A});return(0,x.jsx)(P,(0,l.A)({component:"div",className:(0,i.A)(g.root,p),ref:t,role:null,ownerState:A,tabIndex:null},v,{children:"left"===h?(0,x.jsx)(w,(0,l.A)({},y)):(0,x.jsx)(S,(0,l.A)({},R))}))}));var I=o(3034);function z(e){return(0,$.Ay)("MuiTabs",e)}const F=(0,M.A)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var k=o(6248);const L=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],j=(e,t)=>e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:e.firstChild,O=(e,t)=>e===t?e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:e.lastChild,H=(e,t,o)=>{let r=!1,l=o(e,t);for(;l;){if(l===e.firstChild){if(r)return;r=!0}const t=l.disabled||"true"===l.getAttribute("aria-disabled");if(l.hasAttribute("tabindex")&&!t)return void l.focus();l=o(e,l)}},X=(0,d.Ay)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${F.scrollButtons}`]:t.scrollButtons},{[`& .${F.scrollButtons}`]:o.scrollButtonsHideMobile&&t.scrollButtonsHideMobile},t.root,o.vertical&&t.vertical]}})((({ownerState:e,theme:t})=>(0,l.A)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},e.vertical&&{flexDirection:"column"},e.scrollButtonsHideMobile&&{[`& .${F.scrollButtons}`]:{[t.breakpoints.down("sm")]:{display:"none"}}}))),D=(0,d.Ay)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.scroller,o.fixed&&t.fixed,o.hideScrollbar&&t.hideScrollbar,o.scrollableX&&t.scrollableX,o.scrollableY&&t.scrollableY]}})((({ownerState:e})=>(0,l.A)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},e.fixed&&{overflowX:"hidden",width:"100%"},e.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},e.scrollableX&&{overflowX:"auto",overflowY:"hidden"},e.scrollableY&&{overflowY:"auto",overflowX:"hidden"}))),V=(0,d.Ay)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.flexContainer,o.vertical&&t.flexContainerVertical,o.centered&&t.centered]}})((({ownerState:e})=>(0,l.A)({display:"flex"},e.vertical&&{flexDirection:"column"},e.centered&&{justifyContent:"center"}))),Y=(0,d.Ay)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(e,t)=>t.indicator})((({ownerState:e,theme:t})=>(0,l.A)({position:"absolute",height:2,bottom:0,width:"100%",transition:t.transitions.create()},"primary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.primary.main},"secondary"===e.indicatorColor&&{backgroundColor:(t.vars||t).palette.secondary.main},e.vertical&&{height:"100%",width:2,right:0}))),G=(0,d.Ay)((function(e){const{onChange:t}=e,o=(0,r.A)(e,w),i=n.useRef(),a=n.useRef(null),s=()=>{i.current=a.current.offsetHeight-a.current.clientHeight};return(0,A.A)((()=>{const e=(0,b.A)((()=>{const e=i.current;s(),e!==i.current&&t(i.current)})),o=(0,g.A)(a.current);return o.addEventListener("resize",e),()=>{e.clear(),o.removeEventListener("resize",e)}}),[t]),n.useEffect((()=>{s(),t(i.current)}),[t]),(0,x.jsx)("div",(0,l.A)({style:S},o,{ref:a}))}))({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),q={},K=n.forwardRef((function(e,t){const o=(0,u.b)({props:e,name:"MuiTabs"}),d=(0,p.A)(),f=(0,s.I)(),{"aria-label":A,"aria-labelledby":w,action:S,centered:y=!1,children:B,className:C,component:R="div",allowScrollButtonsMobile:M=!1,indicatorColor:$="primary",onChange:W,orientation:E="horizontal",ScrollButtonComponent:T=N,scrollButtons:P="auto",selectionFollowsFocus:F,slots:K={},slotProps:_={},TabIndicatorProps:U={},TabScrollButtonProps:J={},textColor:Q="primary",value:Z,variant:ee="standard",visibleScrollbar:te=!1}=o,oe=(0,r.A)(o,L),re="scrollable"===ee,le="vertical"===E,ne=le?"scrollTop":"scrollLeft",ie=le?"top":"left",ae=le?"bottom":"right",se=le?"clientHeight":"clientWidth",ce=le?"height":"width",de=(0,l.A)({},o,{component:R,allowScrollButtonsMobile:M,indicatorColor:$,orientation:E,vertical:le,scrollButtons:P,textColor:Q,variant:ee,visibleScrollbar:te,fixed:!re,hideScrollbar:re&&!te,scrollableX:re&&!le,scrollableY:re&&le,centered:y&&!re,scrollButtonsHideMobile:!M}),ue=(e=>{const{vertical:t,fixed:o,hideScrollbar:r,scrollableX:l,scrollableY:n,centered:i,scrollButtonsHideMobile:s,classes:c}=e,d={root:["root",t&&"vertical"],scroller:["scroller",o&&"fixed",r&&"hideScrollbar",l&&"scrollableX",n&&"scrollableY"],flexContainer:["flexContainer",t&&"flexContainerVertical",i&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",s&&"scrollButtonsHideMobile"],scrollableX:[l&&"scrollableX"],hideScrollbar:[r&&"hideScrollbar"]};return(0,a.A)(d,z,c)})(de),pe=(0,c.A)({elementType:K.StartScrollButtonIcon,externalSlotProps:_.startScrollButtonIcon,ownerState:de}),be=(0,c.A)({elementType:K.EndScrollButtonIcon,externalSlotProps:_.endScrollButtonIcon,ownerState:de}),[fe,he]=n.useState(!1),[ve,me]=n.useState(q),[Ae,ge]=n.useState(!1),[xe,we]=n.useState(!1),[Se,ye]=n.useState(!1),[Be,Ce]=n.useState({overflow:"hidden",scrollbarWidth:0}),Re=new Map,Me=n.useRef(null),$e=n.useRef(null),We=()=>{const e=Me.current;let t,o;if(e){const o=e.getBoundingClientRect();t={clientWidth:e.clientWidth,scrollLeft:e.scrollLeft,scrollTop:e.scrollTop,scrollLeftNormalized:v(e,f?"rtl":"ltr"),scrollWidth:e.scrollWidth,top:o.top,bottom:o.bottom,left:o.left,right:o.right}}if(e&&!1!==Z){const e=$e.current.children;if(e.length>0){const t=e[Re.get(Z)];o=t?t.getBoundingClientRect():null}}return{tabsMeta:t,tabMeta:o}},Ee=(0,I.A)((()=>{const{tabsMeta:e,tabMeta:t}=We();let o,r=0;if(le)o="top",t&&e&&(r=t.top-e.top+e.scrollTop);else if(o=f?"right":"left",t&&e){const l=f?e.scrollLeftNormalized+e.clientWidth-e.scrollWidth:e.scrollLeft;r=(f?-1:1)*(t[o]-e[o]+l)}const l={[o]:r,[ce]:t?t[ce]:0};if(isNaN(ve[o])||isNaN(ve[ce]))me(l);else{const e=Math.abs(ve[o]-l[o]),t=Math.abs(ve[ce]-l[ce]);(e>=1||t>=1)&&me(l)}})),Te=(e,{animation:t=!0}={})=>{t?function(e,t,o,r={},l=()=>{}){const{ease:n=m,duration:i=300}=r;let a=null;const s=t[e];let c=!1;const d=r=>{if(c)return void l(new Error("Animation cancelled"));null===a&&(a=r);const u=Math.min(1,(r-a)/i);t[e]=n(u)*(o-s)+s,u>=1?requestAnimationFrame((()=>{l(null)})):requestAnimationFrame(d)};s===o?l(new Error("Element already at target position")):requestAnimationFrame(d)}(ne,Me.current,e,{duration:d.transitions.duration.standard}):Me.current[ne]=e},Pe=e=>{let t=Me.current[ne];le?t+=e:(t+=e*(f?-1:1),t*=f&&"reverse"===h()?-1:1),Te(t)},Ne=()=>{const e=Me.current[se];let t=0;const o=Array.from($e.current.children);for(let r=0;r<o.length;r+=1){const l=o[r];if(t+l[se]>e){0===r&&(t=e);break}t+=l[se]}return t},Ie=()=>{Pe(-1*Ne())},ze=()=>{Pe(Ne())},Fe=n.useCallback((e=>{Ce({overflow:null,scrollbarWidth:e})}),[]),ke=(0,I.A)((e=>{const{tabsMeta:t,tabMeta:o}=We();if(o&&t)if(o[ie]<t[ie]){const r=t[ne]+(o[ie]-t[ie]);Te(r,{animation:e})}else if(o[ae]>t[ae]){const r=t[ne]+(o[ae]-t[ae]);Te(r,{animation:e})}})),Le=(0,I.A)((()=>{re&&!1!==P&&ye(!Se)}));n.useEffect((()=>{const e=(0,b.A)((()=>{Me.current&&Ee()}));let t;const o=(0,g.A)(Me.current);let r;return o.addEventListener("resize",e),"undefined"!=typeof ResizeObserver&&(t=new ResizeObserver(e),Array.from($e.current.children).forEach((e=>{t.observe(e)}))),"undefined"!=typeof MutationObserver&&(r=new MutationObserver((o=>{o.forEach((e=>{e.removedNodes.forEach((e=>{var o;null==(o=t)||o.unobserve(e)})),e.addedNodes.forEach((e=>{var o;null==(o=t)||o.observe(e)}))})),e(),Le()})),r.observe($e.current,{childList:!0})),()=>{var l,n;e.clear(),o.removeEventListener("resize",e),null==(l=r)||l.disconnect(),null==(n=t)||n.disconnect()}}),[Ee,Le]),n.useEffect((()=>{const e=Array.from($e.current.children),t=e.length;if("undefined"!=typeof IntersectionObserver&&t>0&&re&&!1!==P){const o=e[0],r=e[t-1],l={root:Me.current,threshold:.99},n=new IntersectionObserver((e=>{ge(!e[0].isIntersecting)}),l);n.observe(o);const i=new IntersectionObserver((e=>{we(!e[0].isIntersecting)}),l);return i.observe(r),()=>{n.disconnect(),i.disconnect()}}}),[re,P,Se,null==B?void 0:B.length]),n.useEffect((()=>{he(!0)}),[]),n.useEffect((()=>{Ee()})),n.useEffect((()=>{ke(q!==ve)}),[ke,ve]),n.useImperativeHandle(S,(()=>({updateIndicator:Ee,updateScrollButtons:Le})),[Ee,Le]);const je=(0,x.jsx)(Y,(0,l.A)({},U,{className:(0,i.A)(ue.indicator,U.className),ownerState:de,style:(0,l.A)({},ve,U.style)}));let Oe=0;const He=n.Children.map(B,(e=>{if(!n.isValidElement(e))return null;const t=void 0===e.props.value?Oe:e.props.value;Re.set(t,Oe);const o=t===Z;return Oe+=1,n.cloneElement(e,(0,l.A)({fullWidth:"fullWidth"===ee,indicator:o&&!fe&&je,selected:o,selectionFollowsFocus:F,onChange:W,textColor:Q,value:t},1!==Oe||!1!==Z||e.props.tabIndex?{}:{tabIndex:0}))})),Xe=(()=>{const e={};e.scrollbarSizeListener=re?(0,x.jsx)(G,{onChange:Fe,className:(0,i.A)(ue.scrollableX,ue.hideScrollbar)}):null;const t=re&&("auto"===P&&(Ae||xe)||!0===P);return e.scrollButtonStart=t?(0,x.jsx)(T,(0,l.A)({slots:{StartScrollButtonIcon:K.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:pe},orientation:E,direction:f?"right":"left",onClick:Ie,disabled:!Ae},J,{className:(0,i.A)(ue.scrollButtons,J.className)})):null,e.scrollButtonEnd=t?(0,x.jsx)(T,(0,l.A)({slots:{EndScrollButtonIcon:K.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:be},orientation:E,direction:f?"left":"right",onClick:ze,disabled:!xe},J,{className:(0,i.A)(ue.scrollButtons,J.className)})):null,e})();return(0,x.jsxs)(X,(0,l.A)({className:(0,i.A)(ue.root,C),ownerState:de,ref:t,as:R},oe,{children:[Xe.scrollButtonStart,Xe.scrollbarSizeListener,(0,x.jsxs)(D,{className:ue.scroller,ownerState:de,style:{overflow:Be.overflow,[le?"margin"+(f?"Left":"Right"):"marginBottom"]:te?void 0:-Be.scrollbarWidth},ref:Me,children:[(0,x.jsx)(V,{"aria-label":A,"aria-labelledby":w,"aria-orientation":"vertical"===E?"vertical":null,className:ue.flexContainer,ownerState:de,onKeyDown:e=>{const t=$e.current,o=(0,k.A)(t).activeElement;if("tab"!==o.getAttribute("role"))return;let r="horizontal"===E?"ArrowLeft":"ArrowUp",l="horizontal"===E?"ArrowRight":"ArrowDown";switch("horizontal"===E&&f&&(r="ArrowRight",l="ArrowLeft"),e.key){case r:e.preventDefault(),H(t,o,O);break;case l:e.preventDefault(),H(t,o,j);break;case"Home":e.preventDefault(),H(t,null,j);break;case"End":e.preventDefault(),H(t,null,O)}},ref:$e,role:"tablist",children:He}),fe&&je]}),Xe.scrollButtonEnd]}))}))}}]);
//# sourceMappingURL=272.a42ae3375fb5eac234a7.js.map