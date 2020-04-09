(this["webpackJsonpmaeasto-client"]=this["webpackJsonpmaeasto-client"]||[]).push([[0],{44:function(e,t,a){e.exports=a(79)},49:function(e,t,a){},54:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=(a(49),a(20)),s=a(11),i=a(30),m=a(3),u=a(1),d=a(13),p=a(14),h=a(7),f=a(15),y=a(16),E=a(9),v=(a(54),function(e){var t=e.categories,a=e.changeFilter;return r.a.createElement("ul",{className:"list-group mb-5 categories-list"},r.a.createElement("li",{id:"category-all",className:"list-group-item category",onClick:function(){return a(0)}},"\u041c\u0435\u043d\u044e"),t.map((function(e,t){return r.a.createElement("li",{key:"category-".concat(t),className:"list-group-item category",onClick:function(){return a(e.id)}},e.name)})))}),b=function(e){var t=e.product,a=e.addProduct,n=e.minusProduct,c=e.plusProduct;return r.a.createElement("div",{className:"col-md-4 product-item"},r.a.createElement("div",{className:"card mb-4 shadow-sm"},r.a.createElement("img",{src:t.image,height:"225"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",{className:"product-item-title"},t.name),r.a.createElement("p",{className:"card-text product-item-desc"},t.description),r.a.createElement("h5",{className:"product-item-props"},r.a.createElement("small",{className:"text-muted mr-2"},t.weight," ",t.weight_points),r.a.createElement("span",{className:"product-item-price"},t.price," \u0433\u0440\u043d")),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-custom",onClick:function(){return a(t)}},"\u0414\u043e\u0434\u0430\u0442\u0438"),r.a.createElement("div",{className:"product-item-counter"},r.a.createElement("span",{className:"with-border minus",onClick:function(){n(t)}},"-"),r.a.createElement("span",{className:"with-border counter"},t.count),r.a.createElement("span",{className:"with-border plus",onClick:function(){c(t)}},"+"))))))},g=function(e){var t=e.categories,a=e.loading,n=e.loaded,c=e.plusProduct,o=e.minusProduct,l=e.addProduct,s=e.changeFilter,i=e.categoryFilter;return!a&&n?r.a.createElement("div",{className:"ProductList"},r.a.createElement(v,{categories:t,changeFilter:s}),t.map((function(e){if(e.id===i||!i)return r.a.createElement("div",{key:"category-".concat(e.id),className:"mb-3"},r.a.createElement("h1",{className:"category-name"},e.name),r.a.createElement("div",{className:"row"},e.products.map((function(e){return r.a.createElement(b,{key:"product-".concat(e.id),product:e,plusProduct:c,minusProduct:o,addProduct:l})}))))})),r.a.createElement(v,{categories:t,changeFilter:s})):a&&n?r.a.createElement("h1",null,"ERROR"):a&&!n?r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement("h1",null)},N=a(27),O=a.n(N),C=a(42),j=a(24),P=a.n(j),F=function(e){switch(e){case"development":return"http://localhost:8000";case"test":case"production":default:return""}}("production"),R=function(){var e=Object(C.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("".concat(F,"/product/"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k="SET_INIT_STATE_PRODUCCT_LIST",w="PLUS_PRODUCT_PRODUCCT_LIST",T="MINUS_PRODUCT_PRODUCCT_LIST",_="RESET_PRODUCT_PRODUCCT_LIST",D="CHANGE_FILTER_PRODUCCT_LIST",x={products:[],categories:[],loaded:!1,loading:!1,categoryFilter:0},A="ADD_PRODUCT_TO_CART",M="REMOVE_PRODUCT_FROM_CART",S="PLUS_PRODUCT_TO_CART",U="MINUS_PRODUCT_TO_CART",L="CLEAN_CART",I=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(e,n){var r;return Object(d.a)(this,a),(r=t.call(this,e,n)).addProductToCart=r.addProductToCart.bind(Object(h.a)(r)),r}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setInitState,a=e.categoryFilter;t(Object(u.a)({},x,{loading:!0})),R().then((function(e){var n,r,c=[],o=[],l=Object(m.a)(e.data);try{for(l.s();!(r=l.n()).done;){var s=r.value;n=[];var d,p=Object(m.a)(s.products);try{for(p.s();!(d=p.n()).done;){var h=d.value;n.push(Object(u.a)({},h,{count:1}))}}catch(f){p.e(f)}finally{p.f()}o.push({id:s.id,name:s.name,products:n}),c=[].concat(Object(i.a)(c),Object(i.a)(n))}}catch(f){l.e(f)}finally{l.f()}t({categories:o,products:c,loading:!1,loaded:!0,categoryFilter:a})}))}},{key:"addProductToCart",value:function(e){var t=this.props,a=t.addProduct,n=t.resetProduct;a({id:e.id,name:e.name,price:e.price,count:e.count,totalPrice:e.price*e.count}),n(e)}},{key:"render",value:function(){var e=this,t=this.props,a=t.products,n=t.categories,c=t.loaded,o=t.loading,l=t.plusProduct,s=t.minusProduct,i=t.categoryFilter,m=t.changeFilter;return r.a.createElement(g,{products:a,categories:n,loaded:c,loading:o,plusProduct:l,minusProduct:s,categoryFilter:i,addProduct:function(t){return e.addProductToCart(t)},changeFilter:m})}}]),a}(r.a.Component),X={Component:Object(E.b)((function(e){return e.ProductListReducer}),(function(e){return{setInitState:function(t){return e(function(e){return{type:k,payload:e}}(t))},plusProduct:function(t){return e({type:w,payload:t})},minusProduct:function(t){return e({type:T,payload:t})},resetProduct:function(t){return e({type:_,payload:t})},addProduct:function(t){e({type:A,payload:t})},changeFilter:function(t){e({type:D,payload:t})}}}))(I)},G=function(){return r.a.createElement("div",{className:"container main-container"},r.a.createElement("div",{className:"jumbotron p-4 p-md-5 text-white rounded bg-dark"},r.a.createElement("div",{className:"col-md-12 px-0"},r.a.createElement("h3",{className:"display-6 font-italic text-left"},"\u0412\u0456\u0434\u0442\u0435\u043f\u0435\u0440 \u0449\u043e\u0434\u043d\u044f \u0437 12:00 \u0434\u043e 20:00 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043c\u043e\u0432\u0438\u0442\u0438 \u0441\u0432\u043e\u0457 \u0443\u043b\u044e\u0431\u043b\u0435\u043d\u0456 \u0441\u0442\u0440\u0430\u0432\u0438 \u0437 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u044e \u0432\u0456\u0434 Maestro!"),r.a.createElement("p",{className:"lead my-3 text-left"},"\u0417\u0430\u043b\u0438\u0448\u0430\u044e\u0447\u0438\u0441\u044c \u0432\u0434\u043e\u043c\u0430 \u0432\u0438 \u0440\u044f\u0442\u0443\u0454\u0442\u0435 \u0436\u0438\u0442\u0442\u044f , \u0430 \u043c\u0438 \u0445\u043e\u0447\u0435\u043c\u043e \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0432\u0430\u0448 \u043a\u0430\u0440\u0430\u043d\u0442\u0438\u043d \u0441\u043c\u0430\u0447\u043d\u0438\u043c \u0456 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u043c!"),r.a.createElement("p",{className:"lead my-3 text-left"},"\u0423\u043c\u043e\u0432\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438:",r.a.createElement("br",null),"\u2796\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437 -10%",r.a.createElement("br",null),"\u2796\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 50\u0433\u0440 (\u0432 \u043c\u0435\u0436\u0430\u0445 \u041b\u044c\u0432\u043e\u0432\u0430)",r.a.createElement("br",null),"\u2796\u0417\u0430 \u043c\u0435\u0436\u0456 \u041b\u044c\u0432\u043e\u0432\u0430 - \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0437\u0430 \u0442\u0430\u0440\u0438\u0444\u043e\u043c \u0442\u0430\u043a\u0441\u0456",r.a.createElement("br",null),"\u2796\u041f\u0440\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0432\u0456\u0434 500 \u0433\u0440\u043d - \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0411\u0415\u0417\u041a\u041e\u0428\u0422\u041e\u0412\u041d\u0410 "))),r.a.createElement(X.Component,null))},H=(a(73),function(e){var t=e.products,a=e.totalCount,n=e.totalPrice,c=e.plusProduct,o=e.minusProduct,l=e.removeProduct;return r.a.createElement("div",{className:"CartTemplate"},r.a.createElement("h4",{className:"d-flex justify-content-between align-items-center mb-3"},r.a.createElement("span",null,"\u0412\u0430\u0448\u0435 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"),r.a.createElement("span",{className:"badge badge-custom badge-pill"},a)),r.a.createElement("ul",{className:"list-group mb-3"},t.map((function(e,t){return r.a.createElement("li",{key:"cart-item-".concat(t),className:"list-group-item cart-item"},r.a.createElement("div",{className:"d-flex justify-content-between lh-condensed mb-2"},r.a.createElement("h6",{className:"my-0"},e.name),r.a.createElement("span",null,e.price,"\u0433\u0440\u043d X ",e.count," = ",e.totalPrice,"\u0433\u0440\u043d")),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"cart-item-counter"},r.a.createElement("span",{className:"with-border minus",onClick:function(){o(e)}},"-"),r.a.createElement("span",{className:"with-border counter"},e.count),r.a.createElement("span",{className:"with-border plus",onClick:function(){c(e)}},"+")),r.a.createElement("div",null,r.a.createElement("span",{className:"with-border remove",onClick:function(){return l(e)}},"X"))))})),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},r.a.createElement("span",null,"\u0412\u0441\u044c\u043e\u0433\u043e"),r.a.createElement("strong",null,n,"\u0433\u0440\u043d"))))}),J=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement(H,this.props)}}]),a}(r.a.Component),B={Component:Object(E.b)((function(e){return e.CartReducer}),(function(e){return{plusProduct:function(t){return e(function(e){return{type:S,payload:e}}(t))},minusProduct:function(t){return e(function(e){return{type:U,payload:e}}(t))},removeProduct:function(t){return e(function(e){return{type:M,payload:e}}(t))}}}))(J)},W=(a(74),function(e){var t=e.user,a=e.deliveryData,n=e.paymentData,c=e.changeName,o=e.changeCell,l=e.changeAddress,s=e.changeRegion,i=e.changeComment,m=e.changePaymentMethod,u=e.createOrder,d=e.errors;return r.a.createElement("form",{className:"needs-validation OrderFormTemplate",onSubmit:u},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"address"},"\u0406\u043c'\u044f"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",placeholder:"",onChange:c,value:t.name}),r.a.createElement("div",{className:"invalid-feedback ".concat(d.nameError?"d-block":"")},"\u0412\u043a\u0430\u0436\u0456\u0442\u044c \u0432\u0430\u0448\u0435 \u0456\u043c'\u044f.")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"cell"},"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443"),r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"+380")),r.a.createElement("input",{type:"text",className:"form-control",id:"cell",placeholder:"XXXXXXXXX",onChange:o,value:t.cell}),r.a.createElement("div",{className:"invalid-feedback ".concat(d.cellError?"d-block":""),style:{width:"100%"}},"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u0454 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u043c."))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"city"},"\u0420\u0435\u0433\u0456\u043e\u043d"),r.a.createElement("select",{onChange:s,value:a.region,className:"custom-select d-block w-100",id:"city"},r.a.createElement("option",{value:"lviv"},"\u041b\u044c\u0432\u0456\u0432"),r.a.createElement("option",{value:"lviv region"},"\u041e\u043a\u043e\u043b\u0438\u0446\u0456 \u041b\u044c\u0432\u043e\u0432\u0430"),r.a.createElement("option",{value:"by-client"},"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437 (\u0437\u043d\u0438\u0436\u043a\u0430 10%)"))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"address"},"\u0410\u0434\u0440\u0435\u0441\u0430"),r.a.createElement("input",{type:"text",className:"form-control",id:"address",placeholder:"\u0432\u0443\u043b. \u0428\u0435\u0432\u0447\u0435\u043d\u043a\u0430 1, \u043a\u0432 1",onChange:l,value:a.address}),r.a.createElement("div",{className:"invalid-feedback ".concat(d.addressError?"d-block":"")},"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0430\u0434\u0440\u0435\u0441\u0443 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438.")),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"comment"},"\u041a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456\u0439"),r.a.createElement("textarea",{className:"form-control",id:"comment",rows:5,placeholder:"\u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0456 \u043f\u0440\u043e\u043f\u043e\u0437\u0438\u0446\u0456\u0457...",onChange:i,value:a.comment})),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement("h4",{className:"mb-3"},"\u0422\u0438\u043f \u043e\u043f\u043b\u0430\u0442\u0438"),r.a.createElement("div",{className:"d-block my-3"},r.a.createElement("div",{className:"custom-control custom-radio"},r.a.createElement("input",{id:"cash",name:"paymentMethod",type:"radio",className:"custom-control-input",checked:"1"==n.paymentType,value:"1",onChange:m}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"cash"},"\u0413\u043e\u0442\u0456\u0432\u043a\u0430")),r.a.createElement("div",{className:"custom-control custom-radio"},r.a.createElement("input",{id:"debit",name:"paymentMethod",type:"radio",className:"custom-control-input",checked:"2"==n.paymentType,value:"2",onChange:m}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"debit"},"\u041a\u0430\u0440\u0442\u043a\u043e\u044e \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456"))),r.a.createElement("hr",{className:"mb-4"}),r.a.createElement("button",{className:"btn btn-custom btn-lg btn-block",type:"submit"},"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"))}),V="CHANGE_NAME",Y="CHANGE_CELL",$="CHANGE_ADDRESS",q="CHANGE_REGION",z="CHANGE_COMMENT",K="CHANGE_PAYMENT_METHOD",Q="RESET_FORM",Z="RESET_ERRORS",ee="SET_ERROR",te=function(e){Object(y.a)(a,e);var t=Object(f.a)(a);function a(e,n){var r;return Object(d.a)(this,a),(r=t.call(this,e,n)).changeFormName=r.changeFormName.bind(Object(h.a)(r)),r.changeFormCell=r.changeFormCell.bind(Object(h.a)(r)),r.changeFormAddress=r.changeFormAddress.bind(Object(h.a)(r)),r.changeFormRegion=r.changeFormRegion.bind(Object(h.a)(r)),r.changeFormComment=r.changeFormComment.bind(Object(h.a)(r)),r.changeFormPaymentMethod=r.changeFormPaymentMethod.bind(Object(h.a)(r)),r.createOrder=r.createOrder.bind(Object(h.a)(r)),r}return Object(p.a)(a,[{key:"changeFormName",value:function(e){(0,this.props.changeName)(e.target.value)}},{key:"changeFormCell",value:function(e){(0,this.props.changeCell)(e.target.value)}},{key:"changeFormAddress",value:function(e){(0,this.props.changeAddress)(e.target.value)}},{key:"changeFormRegion",value:function(e){(0,this.props.changeRegion)(e.target.value)}},{key:"changeFormComment",value:function(e){(0,this.props.changeComment)(e.target.value)}},{key:"changeFormPaymentMethod",value:function(e){(0,this.props.changePaymentMethod)(e.target.value)}},{key:"createOrder",value:function(e){e.preventDefault();var t=this.props,a=t.setError,n=t.resetErrors,r=this.props,c=r.user,o=r.deliveryData,l=r.paymentData,s=r.products;n();var i=!0;0===c.name.length&&(a("name"),i=!1),c.cell.length<9&&(a("cell"),i=!1),o.address.length<5&&(a("address"),i=!1),i&&function(e){try{var t=e.user,a=e.deliveryData,n=(e.paymentData,e.products),r=[];if(0===n.length)return!1;var c,o=Object(m.a)(n);try{for(o.s();!(c=o.n()).done;){var l=c.value;r.push({id:l.id,count:l.count})}}catch(i){o.e(i)}finally{o.f()}var s={user_name:t.name,phone_number:t.cell,address:a.address,region:a.region,comment:a.comment,compact_products:r};P.a.post("".concat(F,"/order/"),s).then((function(e){window.location.href="/success"})).catch((function(e){window.location.href="/failed"}))}catch(u){return!1}}({user:c,deliveryData:o,paymentData:l,products:s})}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.deliveryData,n=e.paymentData,c=e.errors;return r.a.createElement(W,{user:t,deliveryData:a,paymentData:n,changeName:this.changeFormName,changeCell:this.changeFormCell,changeAddress:this.changeFormAddress,changeRegion:this.changeFormRegion,changeComment:this.changeFormComment,changePaymentMethod:this.changeFormPaymentMethod,createOrder:this.createOrder,errors:c})}}]),a}(r.a.Component),ae={Component:Object(E.b)((function(e){var t=e.OrderFormReducer,a=e.CartReducer;return Object(u.a)({},t,{products:a.products})}),(function(e){return{changeName:function(t){return e(function(e){return{type:V,payload:e}}(t))},changeCell:function(t){return e(function(e){return{type:Y,payload:e}}(t))},changeAddress:function(t){return e(function(e){return{type:$,payload:e}}(t))},changeRegion:function(t){return e(function(e){return{type:q,payload:e}}(t))},changeComment:function(t){return e(function(e){return{type:z,payload:e}}(t))},changePaymentMethod:function(t){return e(function(e){return{type:K,payload:e}}(t))},resetForm:function(){return e({type:Q,payload:{}})},resetErrors:function(){return e({type:Z,payload:{}})},setError:function(t){return e(function(e){return{type:ee,payload:e}}(t))}}}))(te)},ne=function(){return r.a.createElement("div",{className:"container cart-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 order-md-2 mb-4"},r.a.createElement(B.Component,null)),r.a.createElement("div",{className:"col-md-8 order-md-1"},r.a.createElement("h4",{className:"mb-3"},"\u0414\u0435\u0442\u0430\u043b\u0456 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"),r.a.createElement(ae.Component,null))))},re=function(){return r.a.createElement("div",{className:"container main-container"},r.a.createElement("div",{className:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},r.a.createElement("div",{className:"col-md-5 p-lg-5 mx-auto my-5"},r.a.createElement("h1",{className:"display-4 font-weight-normal"},"\u0412\u0430\u0448\u0435 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u0438\u0439\u043d\u044f\u0442\u0435"),r.a.createElement("p",{className:"lead font-weight-normal"},"And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple\u2019s marketing pages."),r.a.createElement("a",{className:"btn btn-outline-secondary",href:"/"},"Go back")),r.a.createElement("div",{className:"product-device shadow-sm d-none d-md-block"}),r.a.createElement("div",{className:"product-device product-device-2 shadow-sm d-none d-md-block"})))},ce=function(){return r.a.createElement("div",{className:"container main-container"},r.a.createElement("h1",null,"Failed"))},oe=(a(75),function(e){var t=e.cartCount;return r.a.createElement("div",{className:"d-flex flex-column flex-md-row align-items-center fixed-top p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"},r.a.createElement("h5",{className:"my-0 mr-md-auto font-weight-normal"},r.a.createElement("img",{className:"topnav-logo",src:"/static/images/logo.jpg"}),r.a.createElement("span",{className:"d-none d-md-block"},"+38 098 982 35 82")),r.a.createElement("nav",{className:"my-2 my-md-0 mr-md-3"},r.a.createElement(l.b,{className:"p-2 text-dark",to:"/"},"\u0413\u043e\u043b\u043e\u0432\u043d\u0430")),r.a.createElement(l.b,{className:"btn btn-outline-custom",to:"/cart"},r.a.createElement("span",{className:"mr-1"},"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"),r.a.createElement("span",{className:"badge badge-light"},t)))}),le={Component:Object(E.b)((function(e){return{cartCount:e.CartReducer.totalCount}}))((function(e){return r.a.createElement(oe,e)}))},se=(a(77),function(){return r.a.createElement("footer",{className:"container pt-4 my-md-5 pt-md-5 border-top Footer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md"},r.a.createElement("img",{className:"mb-2",src:"/docs/4.4/assets/brand/bootstrap-solid.svg",alt:"",width:"24",height:"24"}),r.a.createElement("small",{className:"d-block mb-3 text-muted"},"\xa9 2015-2020")),r.a.createElement("div",{className:"col-6 col-md"},r.a.createElement("h5",null,"\u0423\u043c\u043e\u0432\u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438:"),r.a.createElement("ul",{className:"list-unstyled text-small"},r.a.createElement("li",null,"\u0421\u0430\u043c\u043e\u0432\u0438\u0432\u0456\u0437 -10%"),r.a.createElement("li",null,"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 50\u0433\u0440 (\u0432 \u043c\u0435\u0436\u0430\u0445 \u041b\u044c\u0432\u043e\u0432\u0430)"),r.a.createElement("li",null,"\u0417\u0430 \u043c\u0435\u0436\u0456 \u041b\u044c\u0432\u043e\u0432\u0430 - \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044c \u0437\u0430 \u0442\u0430\u0440\u0438\u0444\u043e\u043c \u0442\u0430\u043a\u0441\u0456"),r.a.createElement("li",null,"\u041f\u0440\u0438 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0432\u0456\u0434 500 \u0433\u0440\u043d - \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0411\u0415\u0417\u041a\u041e\u0428\u0422\u041e\u0412\u041d\u0410"))),r.a.createElement("div",{className:"col-6 col-md"},r.a.createElement("h5",null,"\u0427\u0430\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"),r.a.createElement("ul",{className:"list-unstyled text-small"},r.a.createElement("li",null,"59 \u0445\u0432 - 2 \u0433\u043e\u0434 ( \u0437\u0430\u043b\u0435\u0436\u043d\u043e \u044f\u043a\u0435 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u0456 \u043a\u0443\u0434\u0438 \u0432\u0435\u0437\u0442\u0438)"))),r.a.createElement("div",{className:"col-6 col-md"},r.a.createElement("h5",null,"\u042f\u043a \u043e\u043f\u043b\u0430\u0442\u0438\u0442\u0438?"),r.a.createElement("ul",{className:"list-unstyled text-small"},r.a.createElement("li",null,"\u0413\u043e\u0442\u0456\u0432\u043a\u043e\u044e \u043a\u0443\u0440\u2019\u0454\u0440\u0443"),r.a.createElement("li",null,"\u041a\u0430\u0440\u0442\u043a\u043e\u044e \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0440\u043c\u0456\u043d\u0430\u043b \u0443 \u043a\u0443\u0440\u2019\u0454\u0440\u0430")))))}),ie=function(){return r.a.createElement(se,null)},me=(a(78),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(le.Component,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:G}),r.a.createElement(s.a,{path:"/cart",component:ne}),r.a.createElement(s.a,{path:"/success",component:re}),r.a.createElement(s.a,{path:"/failed",component:ce})),r.a.createElement(ie,null)))}),ue=a(19),de={cartCount:0},pe={products:[],totalPrice:0,totalCount:0},he={nameError:!1,cellError:!1,addressError:!1},fe={user:{name:"",cell:""},deliveryData:{region:"lviv",address:"",comment:""},products:[],paymentData:{paymentType:"1"},errors:he},ye=Object(ue.b)({TopNavReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de;arguments.length>1&&arguments[1];return e},ProductListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;if(t.type===k)return t.payload;if(t.type===w){var a,n,r=t.payload,c=[],o=Object(m.a)(e.categories);try{for(o.s();!(n=o.n()).done;){var l=n.value;if(l.id===r.category){a=[];var s,i=Object(m.a)(l.products);try{for(i.s();!(s=i.n()).done;){var d=s.value;d.id===r.id?a.push(Object(u.a)({},d,{count:d.count+1})):a.push(d)}}catch(L){i.e(L)}finally{i.f()}c.push(Object(u.a)({},l,{products:a}))}else c.push(l)}}catch(L){o.e(L)}finally{o.f()}return Object(u.a)({},e,{categories:c})}if(t.type===T){var p,h,f=t.payload,y=[],E=Object(m.a)(e.categories);try{for(E.s();!(h=E.n()).done;){var v=h.value;if(v.id===f.category){p=[];var b,g=Object(m.a)(v.products);try{for(g.s();!(b=g.n()).done;){var N=b.value;if(N.id===f.id){var O=N.count>1?N.count-1:1;p.push(Object(u.a)({},N,{count:O}))}else p.push(N)}}catch(L){g.e(L)}finally{g.f()}y.push(Object(u.a)({},v,{products:p}))}else y.push(v)}}catch(L){E.e(L)}finally{E.f()}return Object(u.a)({},e,{categories:y})}if(t.type===_){var C,j,P=t.payload,F=[],R=Object(m.a)(e.categories);try{for(R.s();!(j=R.n()).done;){var A=j.value;if(A.id===P.category){C=[];var M,S=Object(m.a)(A.products);try{for(S.s();!(M=S.n()).done;){var U=M.value;U.id===P.id?C.push(Object(u.a)({},U,{count:1})):C.push(U)}}catch(L){S.e(L)}finally{S.f()}F.push(Object(u.a)({},A,{products:C}))}else F.push(A)}}catch(L){R.e(L)}finally{R.f()}return Object(u.a)({},e,{categories:F})}return t.type===D?Object(u.a)({},e,{categoryFilter:t.payload}):e},CartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;if(t.type===A){var a,n=t.payload,r=[],c=0,o=0,l=!1,s=Object(m.a)(e.products);try{for(s.s();!(a=s.n()).done;){var i=a.value;i.id===n.id?(r.push(n),c+=n.count,o+=n.totalPrice,l=!0):(r.push(i),c+=i.count,o+=i.totalPrice)}}catch(_){s.e(_)}finally{s.f()}l||(r.push(n),c+=n.count,o+=n.totalPrice);var d={products:r,totalCount:c,totalPrice:o};return d}if(t.type===M){var p,h=[],f=t.payload,y=Object(m.a)(e.products);try{for(y.s();!(p=y.n()).done;){var E=p.value;E.id!==f.id&&h.push(E)}}catch(_){y.e(_)}finally{y.f()}return{products:h,totalCount:e.totalCount-f.count,totalPrice:e.totalPrice-f.totalPrice}}if(t.type===S){var v,b=[],g=t.payload,N=Object(m.a)(e.products);try{for(N.s();!(v=N.n()).done;){var O=v.value;O.id===g.id?b.push(Object(u.a)({},O,{count:O.count+1,totalPrice:O.totalPrice+O.price})):b.push(O)}}catch(_){N.e(_)}finally{N.f()}return{products:b,totalCount:e.totalCount+1,totalPrice:e.totalPrice+g.price}}if(t.type===U){var C,j=[],P=t.payload,F=0,R=0,k=Object(m.a)(e.products);try{for(k.s();!(C=k.n()).done;){var w=C.value;if(w.id===P.id){var T=w.count-1;T>=1&&(j.push(Object(u.a)({},w,{count:T,totalPrice:w.price*T})),F+=T,R+=w.price*T)}else j.push(w),F+=w.count,R+=w.totalPrice}}catch(_){k.e(_)}finally{k.f()}return{products:j,totalCount:F,totalPrice:R}}return t.type===L?{products:[],totalCount:0,totalPrice:0}:e},OrderFormReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;if(t.type===V)return Object(u.a)({},e,{user:Object(u.a)({},e.user,{name:t.payload})});if(t.type===Y){var a=t.payload.match(/\d/g),n=a?a.join(""):"";return n.length>9&&(n=n.slice(0,9)),Object(u.a)({},e,{user:Object(u.a)({},e.user,{cell:n})})}if(t.type===q)return Object(u.a)({},e,{deliveryData:Object(u.a)({},e.deliveryData,{region:t.payload})});if(t.type===$){var r=t.payload;return r.length>32&&(r=r.slice(0,32)),Object(u.a)({},e,{deliveryData:Object(u.a)({},e.deliveryData,{address:r})})}if(t.type===z){var c=t.payload;return c.length>256&&(c=c.slice(0,256)),Object(u.a)({},e,{deliveryData:Object(u.a)({},e.deliveryData,{comment:c})})}if(t.type===K){var o=t.payload;return Object(u.a)({},e,{paymentData:Object(u.a)({},e.paymentData,{paymentType:o})})}if(t.type===Q)return Object(u.a)({},fe);if(t.type===Z)return Object(u.a)({},e,{errors:Object(u.a)({},he)});if(t.type===ee){var l=Object(u.a)({},e.errors),s=t.payload;return"name"===s&&(l.nameError=!0),"cell"===s&&(l.cellError=!0),"address"===s&&(l.addressError=!0),Object(u.a)({},e,{errors:Object(u.a)({},l)})}return e}}),Ee=Object(ue.c)(ye);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E.a,{store:Ee},r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.799f63cf.chunk.js.map