(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.6a6ae2f7.png"},24:function(e){e.exports={breakfast:[{title:"Sandwich de jam\xf3n y queso",price:"$10.00",value:10},{title:"Jugo de frutas natural",price:"$7.00",value:7},{title:"Caf\xe9 Americano",price:"$5.00",value:5},{title:"Caf\xe9 con leche",price:"$7.00",value:7}]}},25:function(e){e.exports={meal:[{title:"Hamburguesa simple",price:"$10.00",value:10},{title:"Hamburguesa doble",price:"$15.00",value:15},{title:"Papas fritas",price:"$5.00",value:5},{title:"Aros de cebolla",price:"$5.00",value:5}]}},26:function(e){e.exports={drinks:[{title:"Agua 500ml",price:"$5.00",value:5},{title:"Agua 750ml",price:"$5.00",value:5},{title:"Gaseosa 500ml",price:"$7.00",value:7},{title:"Gaseosa 750ml",price:"$10.00",value:10}]}},27:function(e,t,a){e.exports=a(42)},32:function(e,t,a){},33:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),i=(a(32),a(1)),o=a(2),s=a(4),u=a(3),m=a(5),d=a(10),p=a(11),b=(a(33),a(12)),E=a.n(b),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"backgroundHome"},r.a.createElement("img",{className:"logo",src:E.a,alt:"logoBQ"}),r.a.createElement(d.b,{to:"/Position"},r.a.createElement("button",{type:"button",className:"start",onClick:this.onClick},"Inicio")))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"backgroundPosition"},r.a.createElement(d.b,{to:"/CheckoutOne"},r.a.createElement("button",{className:"btnPosition"},"C A J A 1")),r.a.createElement(d.b,{to:"/CheckoutTwo"},r.a.createElement("button",{className:"btnPosition"},"C A J A 2")),r.a.createElement(d.b,{to:"/Kitchen"},r.a.createElement("button",{className:"btnPosition"},"C O C I N A")))}}]),t}(n.Component),v=a(13),k=a(24),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).addItem=function(e){var t=e.currentTarget,n=t.getAttribute("name"),r=t.getAttribute("value"),c=document.getElementsByClassName("printOrd")[0];c.innerHTML=" ",console.log(n,r);var l={keyTitle:n,keyPrice:r};a.setState({printOrder:[].concat(Object(v.a)(a.state.printOrder),[l])},function(){console.log(a.state.printOrder),a.state.printOrder.forEach(function(e,t){c.innerHTML+="<li> ".concat(e.keyTitle," ").concat(e.keyPrice,' <button className="delete"><i class="far fa-trash-alt"></button></li>')}),a.total()}),console.log(a.state.printOrder)},a.state={breakfast:k.breakfast,printOrder:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"total",value:function(){var e=this.state.printOrder.map(function(e){return parseInt(e.keyPrice)}).reduce(function(e,t){return e+t},0);return console.log(e),document.getElementsByClassName("print-total")[0].innerHTML="Total: $  ".concat(e,".00"),e}},{key:"render",value:function(){var e=this,t=this.state.breakfast.map(function(t,a){return r.a.createElement("button",{className:"btnBreakfast btnMenu",key:a,name:t.title,value:t.price,onClick:e.addItem},t.title)});return r.a.createElement("div",null,t)}}]),t}(n.Component),g=a(25),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).addItem=function(e){var t=e.currentTarget,n=t.getAttribute("name"),r=t.getAttribute("value"),c=document.getElementsByClassName("printOrd")[0];c.innerHTML=" ",console.log(n,r);var l={keyTitle:n,keyPrice:r};a.setState({printOrder:[].concat(Object(v.a)(a.state.printOrder),[l])},function(){console.log(a.state.printOrder),a.state.printOrder.forEach(function(e,t){c.innerHTML+="<li> ".concat(e.keyTitle," ").concat(e.keyPrice,' <button className="delete"><i class="far fa-trash-alt"></i></button> </li>')}),a.total()}),console.log(a.state.printOrder)},a.state={meal:g.meal,printOrder:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"total",value:function(){var e=this.state.printOrder.map(function(e){return parseInt(e.keyPrice)}).reduce(function(e,t){return e+t},0);return console.log(e),document.getElementsByClassName("print-total")[0].innerHTML="Total: $  ".concat(e,".00"),e}},{key:"render",value:function(){var e=this,t=this.state.meal.map(function(t,a){return r.a.createElement("button",{className:"btnDinner btnMenu",key:a,name:t.title,value:t.price,onClick:e.addItem},t.title)});return r.a.createElement("div",null,t)}}]),t}(n.Component),N=a(26),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).addItem=function(e){var t=e.currentTarget,n=t.getAttribute("name"),r=t.getAttribute("value"),c=document.getElementsByClassName("printOrd")[0];c.innerHTML=" ",console.log(n,r);var l={keyTitle:n,keyPrice:r};a.setState({printOrder:[].concat(Object(v.a)(a.state.printOrder),[l])},function(){console.log(a.state.printOrder),a.state.printOrder.forEach(function(e,t){c.innerHTML+="<li> ".concat(e.keyTitle," ").concat(e.keyPrice,' <button className="delete"><i class="far fa-trash-alt"></i></button> </li>')}),a.total()}),console.log(a.state.printOrder)},a.state={drinks:N.drinks,printOrder:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"total",value:function(){var e=this.state.printOrder.map(function(e){return parseInt(e.keyPrice)}).reduce(function(e,t){return e+t},0);return console.log(e),document.getElementsByClassName("print-total")[0].innerHTML="Total: $  ".concat(e,".00"),e}},{key:"render",value:function(){var e=this,t=this.state.drinks.map(function(t,a){return r.a.createElement("button",{className:"btnDrinks btnMenu",key:a,name:t.title,value:t.price,onClick:e.addItem},t.title)});return r.a.createElement("div",null,t)}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.b,{to:"/Home"},r.a.createElement("button",{type:"button",className:"logOut fas fa-sign-out-alt"}))}}]),t}(n.Component),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"backgroundMenuOrder row-sm-12"},r.a.createElement("div",{className:"Menu col-sm-6"},r.a.createElement("div",{className:"backgroundBreakfast"},r.a.createElement("p",{className:"titleBkf"},"D e s a y u n o"),r.a.createElement(h,null)),r.a.createElement("div",{className:"backgroundMeal"},r.a.createElement("p",{className:"titleBkf"},"C o m i d a"),r.a.createElement(y,null)),r.a.createElement("div",{className:"backgroundDrinks"},r.a.createElement("h2",{className:"titleDrinks"},"B e b i d a s"),r.a.createElement(j,null))),r.a.createElement("div",null,r.a.createElement("div",{className:"card col-sm-6 orderBox"},r.a.createElement("img",{src:E.a,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Cashier 1"),r.a.createElement("h5",{className:"numOrder"},"Orden #"),r.a.createElement("p",{className:"card-text printOrd"}),r.a.createElement("p",{className:"print-total"})),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("button",{type:"button",className:"sendKitchen"},"Enviar a Cocina")),r.a.createElement("div",null,r.a.createElement(C,null)))))}}]),t}(n.Component),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"backgroundMenuOrder row-sm-12"},r.a.createElement("div",{className:"Menu col-sm-6"},r.a.createElement("div",{className:"backgroundBreakfast"},r.a.createElement("p",{className:"titleBkf"},"D e s a y u n o"),r.a.createElement(h,null)),r.a.createElement("div",{className:"backgroundMeal"},r.a.createElement("p",{className:"titleBkf"},"C o m i d a"),r.a.createElement(y,null)),r.a.createElement("div",{className:"backgroundDrinks"},r.a.createElement("h2",{className:"titleDrinks"},"B e b i d a s"),r.a.createElement(j,null))),r.a.createElement("div",null,r.a.createElement("div",{class:"card col-sm-6",className:"orderBox"},r.a.createElement("img",{src:E.a,class:"card-img-top",alt:"..."}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},"Cashier 2"),r.a.createElement("h5",{class:"numOrder"},"Orden #"),r.a.createElement("p",{className:"card-text printOrd"}),r.a.createElement("p",{className:"print-total"})),r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("button",{type:"button",className:"sendKitchen"},"Enviar a Cocina")),r.a.createElement("div",null,r.a.createElement(C,null)))))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:f}),r.a.createElement(p.a,{path:"/Home",component:f}),r.a.createElement(p.a,{path:"/Position",component:O}),r.a.createElement(p.a,{path:"/CheckoutOne",component:T}),r.a.createElement(p.a,{path:"/CheckoutTwo",component:B})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.ce4581c1.chunk.js.map