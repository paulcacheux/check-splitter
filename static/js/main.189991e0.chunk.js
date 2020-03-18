(this["webpackJsonpcheck-splitter"]=this["webpackJsonpcheck-splitter"]||[]).push([[0],{81:function(e,a,t){e.exports=t(92)},92:function(e,a,t){"use strict";t.r(a);var n,r=t(0),l=t.n(r),c=t(8),i=t.n(c),o=t(37),u=t(146),s=t(147),m=t(148),p=t(141),d=t(47),E=t(149),f=t(139),g=t(73),h=t.n(g),b=t(127),v=t(4),y=t(153),P=t(126),k=t(93),S=t(128),O=t(129),j=t(130),x=t(131),w=t(132),N=t(14),C=t(64),I=t(65);function R(e){switch(e){case n.Percentage:return"Percentage";case n.SplitEqually:return"Split Equally";case n.SplitProportionally:return"Split Proportionally"}}!function(e){e[e.Percentage=0]="Percentage",e[e.SplitEqually=1]="SplitEqually",e[e.SplitProportionally=2]="SplitProportionally"}(n||(n={}));var T=function(){function e(a){Object(C.a)(this,e),this.person=void 0,this.expenses=void 0,this.total=void 0,this.person=a,this.expenses=[],this.total=0}return Object(I.a)(e,[{key:"getCurrentTotalPrice",value:function(){return this.person.basePrice+this.expenses.reduce((function(e,a){return e+a}),0)}},{key:"addExpense",value:function(e,a,t,r){switch(a){case n.Percentage:this.expenses.push(e*this.getCurrentTotalPrice()/100);break;case n.SplitEqually:this.expenses.push(e/t);break;case n.SplitProportionally:var l=this.person.basePrice/r;this.expenses.push(l*e)}}},{key:"finalize",value:function(){this.total=this.getCurrentTotalPrice()}}]),e}(),A=function(e){return e.people},D=function(e){return e.expenses.expenses},W=Object(v.a)((function(e){return Object(y.a)({head:{backgroundColor:e.palette.secondary.main,color:e.palette.common.white}})}))(P.a),q=Object(b.a)((function(e){return{root:{width:"100%",marginBottom:e.spacing(2)},table:{maxHeight:"50vh"}}})),_=function(){var e=q(),a=Object(N.c)(A),t=Object(N.c)(D),n=function(e,a){var t=e.length,n=e.map((function(e){return e.basePrice})).reduce((function(e,a){return e+a}),0);return e.map((function(e){var r=new T(e),l=!0,c=!1,i=void 0;try{for(var o,u=a[Symbol.iterator]();!(l=(o=u.next()).done);l=!0){var s=o.value;r.addExpense(s.payload,s.kind,t,n)}}catch(m){c=!0,i=m}finally{try{l||null==u.return||u.return()}finally{if(c)throw i}}return r.finalize(),r}))}(a,t);return l.a.createElement(k.a,{className:e.root,elevation:3},l.a.createElement(S.a,{className:e.table},l.a.createElement(O.a,{stickyHeader:!0},l.a.createElement(j.a,null,l.a.createElement(x.a,null,l.a.createElement(W,{align:"left"},"Name"),l.a.createElement(W,{align:"right"},"Base Price"),t.map((function(e,a){return l.a.createElement(W,{align:"right",key:a},e.name)})),l.a.createElement(W,{align:"right"},"Total"))),l.a.createElement(w.a,null,n.map((function(e,a){return l.a.createElement(x.a,{key:a},l.a.createElement(P.a,{align:"left"},e.person.name),l.a.createElement(P.a,{align:"right"},e.person.basePrice.toFixed(2)),e.expenses.map((function(e,a){return l.a.createElement(P.a,{align:"right",key:a},e.toFixed(2))})),l.a.createElement(P.a,{align:"right"},e.total.toFixed(2)))}))))))},B=t(23),L=t(154),F=t(70),z=t.n(F),H=t(133),J=t(67),X=t.n(J),$=function(){return l.a.createElement(H.a,{color:"primary",variant:"contained",size:"large",type:"submit",startIcon:l.a.createElement(X.a,null)},"Add")},M=Object(b.a)((function(e){return{root:{padding:e.spacing(2)},headerIcon:{marginRight:e.spacing(1)},header:{display:"flex",alignItems:"center"}}})),V=function(e){var a=e.title,t=e.Icon,n=e.handleSubmit,r=e.children,c=M();return l.a.createElement(k.a,{elevation:3,className:c.root},l.a.createElement("div",{className:c.header},l.a.createElement(t,{fontSize:"large",className:c.headerIcon}),l.a.createElement(d.a,{variant:"h5"},a)),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n&&n(e)}},r,l.a.createElement($,null)))},G={counter:0,expenses:[]},K=t(138),Q=function(e){var a=e.label,t=e.name,n=e.percentage,r=e.value,c=e.handleChange,i=function(e){var a=parseFloat(e.target.value);isNaN(a)&&(a=void 0),c(a)};return n?l.a.createElement(L.a,{label:a,variant:"outlined",margin:"normal",name:t,fullWidth:!0,InputProps:{endAdornment:l.a.createElement(K.a,{position:"end"},"%")},InputLabelProps:{shrink:!0},type:"number",inputProps:{min:0,max:100},value:r||"",onChange:i}):l.a.createElement(L.a,{label:a,variant:"outlined",margin:"normal",name:t,value:r||"",fullWidth:!0,InputProps:{startAdornment:l.a.createElement(K.a,{position:"start"},"$")},type:"number",onChange:i})},U=function(){var e=Object(r.useState)({name:""}),a=Object(o.a)(e,2),t=a[0],n=a[1],c=Object(N.b)();return l.a.createElement(V,{title:"Add a new person",Icon:z.a,handleSubmit:function(){var e,a;""!==t.name&&t.basePrice&&t.basePrice>0&&(c((e=t.name,a=t.basePrice,{type:"ADD_PERSON",name:e,basePrice:a})),n({name:"",basePrice:void 0}))}},l.a.createElement(L.a,{label:"Name",variant:"outlined",margin:"normal",name:"name",value:t.name,fullWidth:!0,InputLabelProps:{shrink:!0},onChange:function(e){var a=e.target.value;n((function(e){return Object(B.a)({},e,{name:a})}))}}),l.a.createElement(Q,{label:"Base Price",name:"basePrice",value:t.basePrice,handleChange:function(e){n((function(a){return Object(B.a)({},a,{basePrice:e})}))}}))},Y=t(44),Z=t(136),ee=t(156),ae=t(150),te=t(140),ne=t(71),re=t.n(ne),le=Object(b.a)((function(e){return{formRow:{display:"flex",justifyContent:"space-between"},formRowItemLeft:Object(Y.a)({},e.breakpoints.up("sm"),{paddingRight:e.spacing(1)}),formRowItemRight:Object(Y.a)({},e.breakpoints.up("sm"),{paddingLeft:e.spacing(1)})}})),ce=function(){var e=le(),a=Object(r.useState)({name:"",kind:n.SplitEqually}),t=Object(o.a)(a,2),c=t[0],i=t[1],u=Object(N.b)();return l.a.createElement(V,{title:"Add a new expense",Icon:re.a,handleSubmit:function(){var e,a,t;""!==c.name&&c.payload&&c.payload>0&&(u((e=c.name,a=c.kind,t=c.payload,{type:"ADD_EXPENSE",name:e,kind:a,payload:t})),i({name:"",kind:n.SplitEqually,payload:void 0}))}},l.a.createElement(L.a,{label:"Name",name:"name",variant:"outlined",margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},value:c.name,onChange:function(e){if(e.target){var a=e.target.value;i((function(e){return Object(B.a)({},e,{name:a})}))}}}),l.a.createElement(f.a,{container:!0},l.a.createElement(f.a,{item:!0,xs:12,sm:6,className:e.formRowItemLeft},l.a.createElement(Z.a,{margin:"normal",fullWidth:!0},l.a.createElement(ee.a,{id:"kind-select-label",variant:"outlined"},"Kind"),l.a.createElement(ae.a,{labelId:"kind-select-label",labelWidth:40,fullWidth:!0,value:c.kind,variant:"outlined",onChange:function(e){var a=e.target.value;i((function(e){return Object(B.a)({},e,{kind:a})}))}},l.a.createElement(te.a,{value:n.Percentage},"Percentage"),l.a.createElement(te.a,{value:n.SplitEqually},"Split equally"),l.a.createElement(te.a,{value:n.SplitProportionally},"Split proportionally")))),l.a.createElement(f.a,{item:!0,xs:12,sm:6,className:e.formRowItemRight},l.a.createElement(Q,{label:"Price",name:"price",percentage:c.kind===n.Percentage,value:c.payload,handleChange:function(e){i((function(a){return Object(B.a)({},a,{payload:e})}))}}))))},ie=t(72),oe=t.n(ie),ue=t(51),se=t.n(ue),me=t(152),pe=t(142),de=t(137),Ee=t(94),fe=t(143),ge=t(144),he=Object(b.a)((function(e){return{drawerHeader:Object(B.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"})}})),be=function(e){var a=e.open,t=e.closeCallback,n=he(),r=Object(N.b)();return l.a.createElement(me.a,{open:a},l.a.createElement("div",{className:n.drawerHeader},l.a.createElement(p.a,{onClick:t},l.a.createElement(oe.a,null))),l.a.createElement(pe.a,null),l.a.createElement(de.a,null,l.a.createElement(Ee.a,{button:!0,onClick:function(){r({type:"RESET_STATE"}),t()}},l.a.createElement(fe.a,null,l.a.createElement(se.a,null)),l.a.createElement(ge.a,{primary:"Reset"}))))},ve=t(145),ye=Object(b.a)((function(e){return{root:{marginTop:e.spacing(2)}}})),Pe=function(e){var a=e.expense,t=a.kind===n.Percentage?"".concat(a.payload,"%"):"$".concat(a.payload),r="".concat(a.name," - ").concat(t),c=Object(N.b)();return l.a.createElement(Ee.a,null,l.a.createElement(ge.a,{primary:r,secondary:R(a.kind)}),l.a.createElement(ve.a,null,l.a.createElement(p.a,{edge:"end",onClick:function(){c({type:"REMOVE_EXPENSE",id:a.id})}},l.a.createElement(se.a,null))))},ke=function(){var e=ye(),a=Object(N.c)(D);return 0===a.length?null:l.a.createElement(k.a,{className:e.root,elevation:3},l.a.createElement(de.a,null,a.map((function(e,a){return l.a.createElement(Pe,{expense:e,key:a})}))))},Se=Object(b.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},container:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),Oe=function(){var e=Se(),a=Object(r.useState)(!1),t=Object(o.a)(a,2),n=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null),l.a.createElement(s.a,{position:"sticky"},l.a.createElement(m.a,null,l.a.createElement(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return c(!0)}},l.a.createElement(h.a,null)),l.a.createElement(d.a,{variant:"h6",className:e.title},"Check Splitter"))),l.a.createElement(be,{open:n,closeCallback:function(){return c(!1)}}),l.a.createElement(E.a,{fixed:!0,className:e.container},l.a.createElement(_,null),l.a.createElement(f.a,{container:!0,spacing:3},l.a.createElement(f.a,{item:!0,xs:12,sm:4},l.a.createElement(U,null)),l.a.createElement(f.a,{item:!0,xs:12,sm:8},l.a.createElement(ce,null))),l.a.createElement(ke,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=t(54),xe=t(29),we=Object(xe.combineReducers)({people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_PERSON":var t={name:a.name,basePrice:a.basePrice};return[].concat(Object(je.a)(e),[t]);case"RESET_STATE":return[];default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_EXPENSE":var t={id:e.counter,name:a.name,kind:a.kind,payload:a.payload};return{counter:e.counter+1,expenses:[].concat(Object(je.a)(e.expenses),[t])};case"REMOVE_EXPENSE":return{counter:e.counter,expenses:e.expenses.filter((function(e){return e.id!==a.id}))};case"RESET_STATE":return G;default:return e}}}),Ne=t(74),Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"check-splitter-state";try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):null}catch(t){return console.error(t),null}}()||void 0,Ie=Object(xe.createStore)(we,Ce,Object(Ne.composeWithDevTools)());Ie.subscribe((function(){!function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"check-splitter-state";try{window.localStorage.setItem(a,JSON.stringify(e))}catch(t){console.error(t)}}(Ie.getState())})),i.a.render(l.a.createElement(N.a,{store:Ie},l.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.189991e0.chunk.js.map