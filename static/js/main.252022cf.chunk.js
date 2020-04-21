(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(72),c=a.n(o),i=a(6),s=a.n(i),u=a(10),l=a(73),d=a(74),f=a(85),p=a(84),m=a(225),v=a(229),h=a(226),b=a(227),g=a(32),E=a.n(g),y=a(33),w=a.n(y),x=a(13),C=a.n(x),_=function(e){var t=e.data,a=t.confirmed,n=t.recovered,o=t.deaths,c=t.lastUpdate;return a?r.a.createElement("div",{className:C.a.container},r.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(m.a,{item:!0,component:v.a,x:12,md:3,className:w()(C.a.card,C.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:a.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(m.a,{item:!0,component:v.a,x:12,md:3,className:w()(C.a.card,C.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:n.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(m.a,{item:!0,component:v.a,x:12,md:3,className:w()(C.a.card,C.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(E.a,{start:0,end:o.value,duration:2.5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},k=a(31),j=a(34),O=a.n(j),D="https://covid19.mathdro.id/api",S=function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,r,o,c,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,O.a.get(a);case 5:return n=e.sent,r=n.data,o=r.confirmed,c=r.recovered,i=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:o,recovered:c,deaths:i,lastUpdate:u});case 14:e.prev=14,e.t0=e.catch(2),console.log("Error");case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("Error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log("Error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(45),W=a(80),R=a.n(W),U=function(e){var t=e.data,a=t.confirmed,o=t.recovered,c=t.deaths,i=e.country,l=Object(n.useState)([]),d=Object(k.a)(l,2),f=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=f.length?r.a.createElement(I.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(I.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(i)}}}):null;return r.a.createElement("div",{className:R.a.container},i?v:m)},B=a(230),V=a(228),P=a(81),J=a.n(P),L=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),o=Object(k.a)(a,2),c=o[0],i=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),r.a.createElement(B.a,{className:J.a.formControl},r.a.createElement(V.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),c.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},z=a(46),G=a.n(z),M=a(82),Q=a.n(M),T=function(){return r.a.createElement("div",{className:Q.a.admin},r.a.createElement("p",null,"Develop By:- Abhishek Raj Ravi"))},Z=a(83),q=a.n(Z),F=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:G.a.container},r.a.createElement("img",{src:q.a,className:G.a.covid,alt:"COVID-19"}),r.a.createElement(_,{data:t}),r.a.createElement(L,{handleCountryChange:this.handleCountryChange}),r.a.createElement(U,{data:t,country:a}),r.a.createElement(T,null))}}]),a}(n.Component),Y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(F,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-19",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-19","/service-worker.js");Y?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(t,e)}))}}()},46:function(e,t,a){e.exports={container:"App_container__1MQN3",covid:"App_covid__mZNnJ"}},80:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},82:function(e,t,a){e.exports={admin:"Footer_admin__1ek7g"}},83:function(e,t,a){e.exports=a.p+"static/media/ravi.febe4544.png"},88:function(e,t,a){e.exports=a(208)}},[[88,1,2]]]);
//# sourceMappingURL=main.252022cf.chunk.js.map