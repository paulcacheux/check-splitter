(this["webpackJsonpcheck-splitter"]=this["webpackJsonpcheck-splitter"]||[]).push([[0],{84:function(e,t,n){e.exports=n(95)},95:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),l=n(8),o=n.n(l),c=n(23),u=n(152),s=n(153),m=n(154),p=n(147),h=n(49),d=n(155),f=n(145),v=n(75),E=n.n(v),g=n(132),b=n(4),y=n(160),k=n(131),x=n(96),w=n(133),O=n(134),S=n(135),j=n(136),P=n(137),N=n(138),T=n(14),I=n(34),C=n(35);function R(e){switch(e){case a.Percentage:return"Percentage";case a.SplitEqually:return"Split Equally";case a.SplitProportionally:return"Split Proportionally"}}!function(e){e[e.Percentage=0]="Percentage",e[e.SplitEqually=1]="SplitEqually",e[e.SplitProportionally=2]="SplitProportionally"}(a||(a={}));var A,W=function(){function e(t){Object(I.a)(this,e),this.person=void 0,this.expenses=void 0,this.total=void 0,this.person=t,this.expenses=[],this.total=0}return Object(C.a)(e,[{key:"getCurrentTotalPrice",value:function(){return this.person.basePrice+this.expenses.reduce((function(e,t){return e+t}),0)}},{key:"addExpense",value:function(e,t,n,r){switch(t){case a.Percentage:this.expenses.push(e*this.getCurrentTotalPrice()/100);break;case a.SplitEqually:this.expenses.push(e/n);break;case a.SplitProportionally:var i=this.person.basePrice/r;this.expenses.push(i*e)}}},{key:"finalize",value:function(){this.total=this.getCurrentTotalPrice()}}]),e}(),D=function(e){return e.people},q=function(e){return e.expenses.expenses},L=Object(b.a)((function(e){return Object(y.a)({head:{backgroundColor:e.palette.secondary.main,color:e.palette.common.white,fontWeight:"bold"},footer:{color:e.palette.primary.main,fontWeight:"bold",fontSize:"1.1em"}})}))(k.a),_=Object(g.a)((function(e){return{root:{width:"100%",marginBottom:e.spacing(2)},table:{maxHeight:"50vh"}}})),B=function(){var e=_(),t=Object(T.c)(D),n=Object(T.c)(q),a=function(e,t){var n=e.length,a=e.map((function(e){return e.basePrice})).reduce((function(e,t){return e+t}),0);return e.map((function(e){var r=new W(e),i=!0,l=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var s=c.value;r.addExpense(s.payload,s.kind,n,a)}}catch(m){l=!0,o=m}finally{try{i||null==u.return||u.return()}finally{if(l)throw o}}return r.finalize(),r}))}(t,n),r=a.map((function(e){return e.total})).reduce((function(e,t){return e+t}),0);return i.a.createElement(x.a,{className:e.root,elevation:3},i.a.createElement(w.a,{className:e.table},i.a.createElement(O.a,{stickyHeader:!0},i.a.createElement(S.a,null,i.a.createElement(j.a,null,i.a.createElement(L,{align:"left"},"Name"),i.a.createElement(L,{align:"right"},"Base Price"),n.map((function(e,t){return i.a.createElement(L,{align:"right",key:t},e.name)})),i.a.createElement(L,{align:"right"},"Total"))),i.a.createElement(P.a,null,a.map((function(e,t){return i.a.createElement(j.a,{key:t},i.a.createElement(k.a,{align:"left"},e.person.name),i.a.createElement(k.a,{align:"right"},e.person.basePrice.toFixed(2)),e.expenses.map((function(e,t){return i.a.createElement(k.a,{align:"right",key:t},e.toFixed(2))})),i.a.createElement(k.a,{align:"right"},e.total.toFixed(2)))}))),i.a.createElement(N.a,null,i.a.createElement(j.a,null,i.a.createElement(L,{align:"left"},"Total"),i.a.createElement(L,{align:"right",colSpan:n.length+2},r.toFixed(2)))))))},F=n(27),U=n(161),z=n(70),M=n.n(z),H=n(139),J=n(67),X=n.n(J),$=function(){return i.a.createElement(H.a,{color:"primary",variant:"contained",size:"large",type:"submit",startIcon:i.a.createElement(X.a,null)},"Add")},V=Object(g.a)((function(e){return{root:{padding:e.spacing(2)},headerIcon:{marginRight:e.spacing(1)},header:{display:"flex",alignItems:"center"}}})),G=function(e){var t=e.title,n=e.Icon,a=e.handleSubmit,r=e.children,l=V();return i.a.createElement(x.a,{elevation:3,className:l.root},i.a.createElement("div",{className:l.header},i.a.createElement(n,{fontSize:"large",className:l.headerIcon}),i.a.createElement(h.a,{variant:"h5"},t)),i.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a&&a(e)}},r,i.a.createElement($,null)))},K={counter:0,expenses:[]},Q=n(144),Y=function(e){var t=e.label,n=e.name,a=e.percentage,r=e.value,l=e.handleChange,o=function(e){var t=parseFloat(e.target.value);isNaN(t)&&(t=void 0),l(t)};return a?i.a.createElement(U.a,{label:t,variant:"outlined",margin:"normal",name:n,fullWidth:!0,InputProps:{endAdornment:i.a.createElement(Q.a,{position:"end"},"%")},InputLabelProps:{shrink:!0},type:"number",inputProps:{min:0,max:100},value:r||"",onChange:o}):i.a.createElement(U.a,{label:t,variant:"outlined",margin:"normal",name:n,value:r||"",fullWidth:!0,InputProps:{startAdornment:i.a.createElement(Q.a,{position:"start"},"$")},type:"number",onChange:o})},Z=function(e){var t=e.title,n=e.editId,a=Object(r.useState)({name:""}),l=Object(c.a)(a,2),o=l[0],u=l[1],s=Object(T.b)();return i.a.createElement(G,{title:t,Icon:M.a,handleSubmit:function(){var e,t;""!==o.name&&o.basePrice&&o.basePrice>0&&(n?console.log("Edit dispatch: "+n):s((e=o.name,t=o.basePrice,{type:"ADD_PERSON",name:e,basePrice:t})),u({name:"",basePrice:void 0}))}},i.a.createElement(U.a,{label:"Name",variant:"outlined",margin:"normal",name:"name",value:o.name,fullWidth:!0,InputLabelProps:{shrink:!0},onChange:function(e){var t=e.target.value;u((function(e){return Object(F.a)({},e,{name:t})}))}}),i.a.createElement(Y,{label:"Base Price",name:"basePrice",value:o.basePrice,handleChange:function(e){u((function(t){return Object(F.a)({},t,{basePrice:e})}))}}))},ee=function(){return i.a.createElement(Z,{title:"Add a new person"})},te=n(46),ne=n(142),ae=n(163),re=n(156),ie=n(146),le=n(71),oe=n.n(le),ce=Object(g.a)((function(e){return{formRow:{display:"flex",justifyContent:"space-between"},formRowItemLeft:Object(te.a)({},e.breakpoints.up("sm"),{paddingRight:e.spacing(1)}),formRowItemRight:Object(te.a)({},e.breakpoints.up("sm"),{paddingLeft:e.spacing(1)})}})),ue=function(){var e=ce(),t=Object(r.useState)({name:"",kind:a.SplitEqually}),n=Object(c.a)(t,2),l=n[0],o=n[1],u=Object(T.b)();return i.a.createElement(G,{title:"Add a new expense",Icon:oe.a,handleSubmit:function(){var e,t,n;""!==l.name&&l.payload&&l.payload>0&&(u((e=l.name,t=l.kind,n=l.payload,{type:"ADD_EXPENSE",name:e,kind:t,payload:n})),o({name:"",kind:a.SplitEqually,payload:void 0}))}},i.a.createElement(U.a,{label:"Name",name:"name",variant:"outlined",margin:"normal",fullWidth:!0,InputLabelProps:{shrink:!0},value:l.name,onChange:function(e){if(e.target){var t=e.target.value;o((function(e){return Object(F.a)({},e,{name:t})}))}}}),i.a.createElement(f.a,{container:!0},i.a.createElement(f.a,{item:!0,xs:12,sm:6,className:e.formRowItemLeft},i.a.createElement(ne.a,{margin:"normal",fullWidth:!0},i.a.createElement(ae.a,{id:"kind-select-label",variant:"outlined"},"Kind"),i.a.createElement(re.a,{labelId:"kind-select-label",labelWidth:40,fullWidth:!0,value:l.kind,variant:"outlined",onChange:function(e){var t=e.target.value;o((function(e){return Object(F.a)({},e,{kind:t})}))}},i.a.createElement(ie.a,{value:a.Percentage},"Percentage"),i.a.createElement(ie.a,{value:a.SplitEqually},"Split equally"),i.a.createElement(ie.a,{value:a.SplitProportionally},"Split proportionally")))),i.a.createElement(f.a,{item:!0,xs:12,sm:6,className:e.formRowItemRight},i.a.createElement(Y,{label:"Price",name:"price",percentage:l.kind===a.Percentage,value:l.payload,handleChange:function(e){o((function(t){return Object(F.a)({},t,{payload:e})}))}}))))},se=n(72),me=n.n(se),pe=n(53),he=n.n(pe),de=n(73),fe=n.n(de),ve=n(159),Ee=n(148),ge=n(143),be=n(97),ye=n(149),ke=n(150),xe=Object(g.a)((function(e){return{drawerHeader:Object(F.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"})}})),we=function(){navigator.serviceWorker.getRegistration().then((function(e){e?e.unregister().then((function(){window.location.reload(!0)})):window.location.reload(!0)}))},Oe=function(e){var t=e.open,n=e.closeCallback,a=xe(),r=Object(T.b)();return i.a.createElement(ve.a,{open:t},i.a.createElement("div",{className:a.drawerHeader},i.a.createElement(p.a,{onClick:n},i.a.createElement(me.a,null))),i.a.createElement(Ee.a,null),i.a.createElement(ge.a,null,i.a.createElement(be.a,{button:!0,onClick:function(){r({type:"RESET_STATE"}),n()}},i.a.createElement(ye.a,null,i.a.createElement(he.a,null)),i.a.createElement(ke.a,{primary:"Reset"})),i.a.createElement(be.a,{button:!0,onClick:we},i.a.createElement(ye.a,null,i.a.createElement(fe.a,null)),i.a.createElement(ke.a,{primary:"Update and reload"}))))},Se=n(151),je=Object(g.a)((function(e){return{root:{marginTop:e.spacing(2)}}})),Pe=function(e){var t=e.expense,n=t.kind===a.Percentage?"".concat(t.payload,"%"):"$".concat(t.payload),r="".concat(t.name," - ").concat(n),l=Object(T.b)();return i.a.createElement(be.a,null,i.a.createElement(ke.a,{primary:r,secondary:R(t.kind)}),i.a.createElement(Se.a,null,i.a.createElement(p.a,{edge:"end",onClick:function(){l({type:"REMOVE_EXPENSE",id:t.id})}},i.a.createElement(he.a,null))))},Ne=function(){var e=je(),t=Object(T.c)(q);return 0===t.length?null:i.a.createElement(x.a,{className:e.root,elevation:3},i.a.createElement(ge.a,null,t.map((function(e){return i.a.createElement(Pe,{expense:e,key:e.id})}))))},Te=n(162),Ie=n(74),Ce=n.n(Ie);!function(e){e[e.Number=0]="Number",e[e.Symbol=1]="Symbol",e[e.Operator=2]="Operator"}(A||(A={}));var Re=/^\d+(\.\d+)?/,Ae=function(){function e(t){Object(I.a)(this,e),this.input=void 0,this.currentIndex=void 0,this.bufferToken=void 0,this.input=t,this.currentIndex=0}return Object(C.a)(e,[{key:"currentChar",value:function(){return this.input[this.currentIndex]}},{key:"eatWhitespaces",value:function(){for(;this.currentIndex<this.input.length&&0===this.currentChar().trim().length;)this.currentIndex+=1}},{key:"innerNextToken",value:function(){if(this.eatWhitespaces(),this.currentIndex>=this.input.length)return null;var e=this.currentChar();if("("===e||")"===e)return this.currentIndex+=1,{type:A.Symbol,value:e};if("+"===e||"-"===e||"*"===e||"/"===e)return this.currentIndex+=1,{type:A.Operator,value:e};var t=this.input.substring(this.currentIndex).match(Re);if(t){var n=t[0];this.currentIndex+=n.length;var a=parseFloat(n);return{type:A.Number,value:a}}throw new Error("Unknown character in input string: '".concat(e,"'"))}},{key:"nextToken",value:function(){if(this.bufferToken){var e=this.bufferToken;return this.bufferToken=void 0,e}return this.innerNextToken()}},{key:"peekToken",value:function(){if(this.bufferToken)return this.bufferToken;var e=this.innerNextToken();return e&&(this.bufferToken=e),e}},{key:"advance",value:function(){this.nextToken()}}]),e}(),We=function(){function e(t,n,a){Object(I.a)(this,e),this.lhs=void 0,this.rhs=void 0,this.op=void 0,this.lhs=t,this.rhs=n,this.op=a}return Object(C.a)(e,[{key:"value",value:function(){switch(this.op){case"*":return this.lhs.value()*this.rhs.value();case"+":return this.lhs.value()+this.rhs.value();case"-":return this.lhs.value()-this.rhs.value();case"/":return this.lhs.value()/this.rhs.value()}}}]),e}(),De=function(){function e(t){Object(I.a)(this,e),this.literal=void 0,this.literal=t}return Object(C.a)(e,[{key:"value",value:function(){return this.literal}}]),e}(),qe=function(){function e(t){Object(I.a)(this,e),this.lexer=void 0,this.lexer=t}return Object(C.a)(e,[{key:"expect",value:function(e,t){var n=this.lexer.nextToken();if(!n||n.type!==e||n.value!==t)throw new Error("Unexpected token")}},{key:"parseExpression",value:function(){return this.lexer.peekToken()?this.parseAddExpression():null}},{key:"parseParenthesisExpression",value:function(){this.expect(A.Symbol,"(");var e=this.parseExpression();if(!e)throw new Error("Unexpected EOL");return this.expect(A.Symbol,")"),e}},{key:"parseAddExpression",value:function(){for(var e=this.parseMulExpression();;){var t=this.lexer.peekToken();if(!t||t.type!==A.Operator||"+"!==t.value&&"-"!==t.value)break;this.lexer.advance();var n=this.parseMulExpression();e=new We(e,n,t.value)}return e}},{key:"parseMulExpression",value:function(){for(var e=this.parseAtom();;){var t=this.lexer.peekToken();if(!t||t.type!==A.Operator||"*"!==t.value&&"/"!==t.value)break;this.lexer.advance();var n=this.parseAtom();e=new We(e,n,t.value)}return e}},{key:"parseAtom",value:function(){var e=this.lexer.peekToken();if(!e)throw new Error("Expected atom");if(e.type===A.Number)return this.lexer.advance(),new De(e.value);if(e.type===A.Symbol&&"("===e.value)return this.parseParenthesisExpression();throw new Error("Unexpected token")}}]),e}(),Le=n(157),_e=Object(g.a)((function(e){return{root:{marginTop:e.spacing(2),padding:e.spacing(2)},headerIcon:{marginRight:e.spacing(1)},header:{display:"flex",alignItems:"center"},alert:{marginTop:e.spacing(1)},result:{padding:e.spacing(1),backgroundColor:"#f5f5f5"}}})),Be=function(){var e=_e(),t=Object(r.useState)(""),n=Object(c.a)(t,2),a=n[0],l=n[1],o=Object(r.useState)(null),u=Object(c.a)(o,2),s=u[0],m=u[1],p=Object(r.useState)(null),d=Object(c.a)(p,2),f=d[0],v=d[1];return i.a.createElement(x.a,{className:e.root,elevation:3},i.a.createElement("div",{className:e.header},i.a.createElement(Ce.a,{fontSize:"large",className:e.headerIcon}),i.a.createElement(h.a,{variant:"h5"},"Calculator")),f&&i.a.createElement(Le.a,{severity:"error",className:e.alert},f),i.a.createElement("form",{onSubmit:function(e){e.preventDefault();try{var t=function(e){var t=new Ae(e),n=new qe(t).parseExpression();return n?n.value():null}(a);m(t)}catch(n){v(n.message||n.toString())}}},i.a.createElement(ne.a,{variant:"outlined",fullWidth:!0,margin:"normal"},i.a.createElement(ae.a,{htmlFor:"calculator-input"},"Input"),i.a.createElement(Te.a,{id:"calculator-input",value:a,onChange:function(e){l(e.target.value)},endAdornment:i.a.createElement(Q.a,{position:"end"},i.a.createElement(H.a,{color:"primary",variant:"contained",size:"large",type:"submit"},"=")),labelWidth:40}))),s&&i.a.createElement(x.a,{elevation:2,className:e.result},i.a.createElement(h.a,{variant:"subtitle1"}," = ",s)))},Fe=Object(g.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},container:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}}})),Ue=function(){var e=Fe(),t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],l=n[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null),i.a.createElement(s.a,{position:"sticky"},i.a.createElement(m.a,null,i.a.createElement(p.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return l(!0)}},i.a.createElement(E.a,null)),i.a.createElement(h.a,{variant:"h6",className:e.title},"Check Splitter"))),i.a.createElement(Oe,{open:a,closeCallback:function(){return l(!1)}}),i.a.createElement(d.a,{fixed:!0,className:e.container},i.a.createElement(B,null),i.a.createElement(f.a,{container:!0,spacing:3},i.a.createElement(f.a,{item:!0,sm:12,md:4},i.a.createElement(ee,null)),i.a.createElement(f.a,{item:!0,sm:12,md:8},i.a.createElement(ue,null))),i.a.createElement(Be,null),i.a.createElement(Ne,null)))},ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var He=n(58),Je=n(31),Xe=Object(Je.combineReducers)({people:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PERSON":var n={name:t.name,basePrice:t.basePrice};return[].concat(Object(He.a)(e),[n]);case"RESET_STATE":return[];default:return e}},expenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":var n={id:e.counter,name:t.name,kind:t.kind,payload:t.payload};return{counter:e.counter+1,expenses:[].concat(Object(He.a)(e.expenses),[n])};case"REMOVE_EXPENSE":return{counter:e.counter,expenses:e.expenses.filter((function(e){return e.id!==t.id}))};case"RESET_STATE":return K;default:return e}}}),$e=n(76),Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"check-splitter-state";try{var t=window.localStorage.getItem(e);if(!t)return null;var n=t?JSON.parse(t):null;return"version"in n&&1===n.version?n.state:null}catch(a){return console.error(a),null}}()||void 0,Ge=Object(Je.createStore)(Xe,Ve,Object($e.composeWithDevTools)());Ge.subscribe((function(){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"check-splitter-state",n={version:1,state:e};try{window.localStorage.setItem(t,JSON.stringify(n))}catch(a){console.error(a)}}(Ge.getState())})),o.a.render(i.a.createElement(T.a,{store:Ge},i.a.createElement(Ue,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/check-splitter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/check-splitter","/service-worker.js");ze?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Me(t,e)}))}}()}},[[84,1,2]]]);
//# sourceMappingURL=main.adf6b411.chunk.js.map