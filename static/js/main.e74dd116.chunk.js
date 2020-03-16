(this["webpackJsonpcheck-splitter"]=this["webpackJsonpcheck-splitter"]||[]).push([[0],{81:function(e,t,a){e.exports=a(92)},92:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),i=a(8),c=a.n(i),o=a(37),s=a(146),u=a(147),m=a(148),p=a(141),d=a(47),f=a(149),h=a(139),E=a(73),g=a.n(E),v=a(127),b=a(4),y=a(153),k=a(126),P=a(93),S=a(128),w=a(129),O=a(130),j=a(131),x=a(132),N=a(14),C=a(64),R=a(65);function I(e){switch(e){case n.Percentage:return"Percentage";case n.SplitEqually:return"Split Equally";case n.SplitProportionally:return"Split Proportionally"}}!function(e){e[e.Percentage=0]="Percentage",e[e.SplitEqually=1]="SplitEqually",e[e.SplitProportionally=2]="SplitProportionally"}(n||(n={}));var T=function(){function e(t){Object(C.a)(this,e),this.person=void 0,this.expenses=void 0,this.total=void 0,this.person=t,this.expenses=[],this.total=0}return Object(R.a)(e,[{key:"getCurrentTotalPrice",value:function(){return this.person.basePrice+this.expenses.reduce((function(e,t){return e+t}),0)}},{key:"addExpense",value:function(e,t,a,r){switch(t){case n.Percentage:this.expenses.push(e*this.getCurrentTotalPrice()/100);break;case n.SplitEqually:this.expenses.push(e/a);break;case n.SplitProportionally:var l=this.person.basePrice/r;this.expenses.push(l*e)}}},{key:"finalize",value:function(){this.total=this.getCurrentTotalPrice()}}]),e}(),A=function(e){return e.people},W=function(e){return e.expenses.expenses},D=Object(b.a)((function(e){return Object(y.a)({head:{backgroundColor:e.palette.secondary.main,color:e.palette.common.white}})}))(k.a),q=Object(v.a)((function(e){return{root:{width:"100%",marginBottom:e.spacing(2)},table:{maxHeight:"50vh"}}})),_=function(){var e=q(),t=Object(N.c)(A),a=Object(N.c)(W),n=function(e,t){var a=e.length,n=e.map((function(e){return e.basePrice})).reduce((function(e,t){return e+t}),0);return e.map((function(e){var r=new T(e),l=!0,i=!1,c=void 0;try{for(var o,s=t[Symbol.iterator]();!(l=(o=s.next()).done);l=!0){var u=o.value;r.addExpense(u.payload,u.kind,a,n)}}catch(m){i=!0,c=m}finally{try{l||null==s.return||s.return()}finally{if(i)throw c}}return r.finalize(),r}))}(t,a);return l.a.createElement(P.a,{className:e.root,elevation:3},l.a.createElement(S.a,{className:e.table},l.a.createElement(w.a,{stickyHeader:!0},l.a.createElement(O.a,null,l.a.createElement(j.a,null,l.a.createElement(D,{align:"left"},"Name"),l.a.createElement(D,{align:"right"},"Base Price"),a.map((function(e,t){return l.a.createElement(D,{align:"right",key:t},e.name)})),l.a.createElement(D,{align:"right"},"Total"))),l.a.createElement(x.a,null,n.map((function(e,t){return l.a.createElement(j.a,{key:t},l.a.createElement(k.a,{align:"left"},e.person.name),l.a.createElement(k.a,{align:"right"},e.person.basePrice.toFixed(2)),e.expenses.map((function(e,t){return l.a.createElement(k.a,{align:"right",key:t},e.toFixed(2))})),l.a.createElement(k.a,{align:"right"},e.total.toFixed(2)))}))))))},B=a(23),L=a(154),F=a(70),z=a.n(F),H=a(133),J=a(67),X=a.n(J),U=function(){return l.a.createElement(H.a,{color:"primary",variant:"contained",size:"large",type:"submit",startIcon:l.a.createElement(X.a,null)},"Add")},$=Object(v.a)((function(e){return{root:{padding:e.spacing(2)},headerIcon:{marginRight:e.spacing(1)},header:{display:"flex",alignItems:"center"}}})),M=function(e){var t=e.title,a=e.Icon,n=e.handleSubmit,r=e.children,i=$();return l.a.createElement(P.a,{elevation:3,className:i.root},l.a.createElement("div",{className:i.header},l.a.createElement(a,{fontSize:"large",className:i.headerIcon}),l.a.createElement(d.a,{variant:"h5"},t)),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n&&n(e)}},r,l.a.createElement(U,null)))},V={counter:0,expenses:[]},G=a(138),K=function(e){var t=e.label,a=e.name,n=e.percentage,r=e.value,i=e.handleChange,c=function(e){var t=parseFloat(e.target.value);isNaN(t)&&(t=void 0),i(t)};return n?l.a.createElement(L.a,{label:t,variant:"outlined",margin:"normal",name:a,fullWidth:!0,InputProps:{endAdornment:l.a.createElement(G.a,{position:"end"},"%")},InputLabelProps:{shrink:!0},type:"number",inputProps:{min:0,max:100},value:r||"",onChange:c}):l.a.createElement(L.a,{label:t,variant:"outlined",margin:"normal",name:a,value:r||"",fullWidth:!0,InputProps:{startAdornment:l.a.createElement(G.a,{position:"start"},"$")},type:"number",onChange:c})},Q=function(){var e=Object(r.useState)({name:""}),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(N.b)();return l.a.createElement(M,{title:"Add a new person",Icon:z.a,handleSubmit:function(){var e,t;""!==a.name&&a.basePrice&&a.basePrice>0&&(i((e=a.name,t=a.basePrice,{type:"ADD_PERSON",name:e,basePrice:t})),n({name:"",basePrice:void 0}))}},l.a.createElement(L.a,{label:"Name",variant:"outlined",margin:"normal",name:"name",value:a.name,fullWidth:!0,InputLabelProps:{shrink:!0},onChange:function(e){var t=e.target.value;n((function(e){return Object(B.a)({},e,{name:t})}))}}),l.a.createElement(K,{label:"Base Price",name:"basePrice",value:a.basePrice,handleChange:function(e){n((function(t){return Object(B.a)({},t,{basePrice:e})}))}}))},Y=a(44),Z=a(136),ee=a(156),te=a(150),ae=a(140),ne=a(71),re=a.n(ne),le=Object(v.a)((function(e){return{formRow:{display:"flex",justifyContent:"space-between"},formRowItemLeft:Object(Y.a)({},e.breakpoints.up("sm"),{paddingRight:e.spacing(1)}),formRowItemRight:Object(Y.a)({},e.breakpoints.up("sm"),{paddingLeft:e.spacing(1)})}})),ie=function(){var e=le(),t=Object(r.useState)({name:"",kind:n.SplitEqually}),a=Object(o.a)(t,2),i=a[0],c=a[1],s=Object(N.b)();return l.a.createElement(M,{title:"Add a new expense",Icon:re.a,handleSubmit:function(){var e,t,a;""!==i.name&&i.payload&&i.payload>0&&(s((e=i.name,t=i.kind,a=i.payload,{type:"ADD_EXPENSE",name:e,kind:t,payload:a})),c({name:"",kind:n.SplitEqually,payload:void 0}))}},l.a.createElement(L.a,{label:"Name",name:"name",variant:"outlined",margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},value:i.name,onChange:function(e){if(e.target){var t=e.target.value;c((function(e){return Object(B.a)({},e,{name:t})}))}}}),l.a.createElement(h.a,{container:!0},l.a.createElement(h.a,{item:!0,xs:12,sm:6,className:e.formRowItemLeft},l.a.createElement(Z.a,{margin:"normal",fullWidth:!0},l.a.createElement(ee.a,{id:"kind-select-label",variant:"outlined"},"Kind"),l.a.createElement(te.a,{labelId:"kind-select-label",labelWidth:40,fullWidth:!0,value:i.kind,variant:"outlined",onChange:function(e){var t=e.target.value;c((function(e){return Object(B.a)({},e,{kind:t})}))}},l.a.createElement(ae.a,{value:n.Percentage},"Percentage"),l.a.createElement(ae.a,{value:n.SplitEqually},"Split equally"),l.a.createElement(ae.a,{value:n.SplitProportionally},"Split proportionally")))),l.a.createElement(h.a,{item:!0,xs:12,sm:6,className:e.formRowItemRight},l.a.createElement(K,{label:"Price",name:"price",percentage:i.kind===n.Percentage,value:i.payload,handleChange:function(e){c((function(t){return Object(B.a)({},t,{payload:e})}))}}))))},ce=a(72),oe=a.n(ce),se=a(51),ue=a.n(se),me=a(152),pe=a(142),de=a(137),fe=a(94),he=a(143),Ee=a(144),ge=Object(v.a)((function(e){return{drawerHeader:Object(B.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"})}})),ve=function(e){var t=e.open,a=e.closeCallback,n=ge(),r=Object(N.b)();return l.a.createElement(me.a,{open:t},l.a.createElement("div",{className:n.drawerHeader},l.a.createElement(p.a,{onClick:a},l.a.createElement(oe.a,null))),l.a.createElement(pe.a,null),l.a.createElement(de.a,null,l.a.createElement(fe.a,{button:!0,onClick:function(){r({type:"RESET_STATE"}),a()}},l.a.createElement(he.a,null,l.a.createElement(ue.a,null)),l.a.createElement(Ee.a,{primary:"Reset"}))))},be=a(145),ye=Object(v.a)((function(e){return{root:{marginTop:e.spacing(2)}}})),ke=function(e){var t=e.expense,a=t.kind===n.Percentage?"".concat(t.payload,"%"):"$".concat(t.payload),r="".concat(t.name," - ").concat(a),i=Object(N.b)();return l.a.createElement(fe.a,null,l.a.createElement(Ee.a,{primary:r,secondary:I(t.kind)}),l.a.createElement(be.a,null,l.a.createElement(p.a,{edge:"end",onClick:function(){i({type:"REMOVE_EXPENSE",id:t.id})}},l.a.createElement(ue.a,null))))},Pe=function(){var e=ye(),t=Object(N.c)(W);return 0===t.length?null:l.a.createElement(P.a,{className:e.root,elevation:3},l.a.createElement(de.a,null,t.map((function(e,t){return l.a.createElement(ke,{expense:e,key:t})}))))},Se=Object(v.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},container:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),we=function(){var e=Se(),t=Object(r.useState)(!1),a=Object(o.a)(t,2),n=a[0],i=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null),l.a.createElement(u.a,{position:"sticky"},l.a.createElement(m.a,null,l.a.createElement(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return i(!0)}},l.a.createElement(g.a,null)),l.a.createElement(d.a,{variant:"h6",className:e.title},"Check Splitter"))),l.a.createElement(ve,{open:n,closeCallback:function(){return i(!1)}}),l.a.createElement(f.a,{fixed:!0,className:e.container},l.a.createElement(_,null),l.a.createElement(h.a,{container:!0,spacing:3},l.a.createElement(h.a,{item:!0,xs:12,sm:4},l.a.createElement(Q,null)),l.a.createElement(h.a,{item:!0,xs:12,sm:8},l.a.createElement(ie,null))),l.a.createElement(Pe,null)))},Oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var xe=a(54),Ne=a(29),Ce=Object(Ne.combineReducers)({people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PERSON":var a={name:t.name,basePrice:t.basePrice};return[].concat(Object(xe.a)(e),[a]);case"RESET_STATE":return[];default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":var a={id:e.counter,name:t.name,kind:t.kind,payload:t.payload};return{counter:e.counter+1,expenses:[].concat(Object(xe.a)(e.expenses),[a])};case"REMOVE_EXPENSE":return{counter:e.counter,expenses:e.expenses.filter((function(e){return e.id!==t.id}))};case"RESET_STATE":return V;default:return e}}}),Re=a(74),Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"check-splitter-state";try{var t=window.localStorage.getItem(e);if(!t)return null;var a=t?JSON.parse(t):null;return"version"in a&&1===a.version?a.state:null}catch(n){return console.error(n),null}}()||void 0,Te=Object(Ne.createStore)(Ce,Ie,Object(Re.composeWithDevTools)());Te.subscribe((function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"check-splitter-state",a={version:1,state:e};try{window.localStorage.setItem(t,JSON.stringify(a))}catch(n){console.error(n)}}(Te.getState())})),c.a.render(l.a.createElement(N.a,{store:Te},l.a.createElement(we,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/check-splitter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/check-splitter","/service-worker.js");Oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):je(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):je(t,e)}))}}()}},[[81,1,2]]]);
//# sourceMappingURL=main.e74dd116.chunk.js.map