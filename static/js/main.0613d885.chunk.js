(this["webpackJsonpmonsters-box"]=this["webpackJsonpmonsters-box"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=(n(14),n(1)),i=n.n(s),l=n(2),u=n(5),h=n(6),m=n(7),p=n(8),d=(n(16),n(17),function(e){var t=e.monster;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180"),alt:""}),r.a.createElement("h1",null,t.name," "),r.a.createElement("p",null,t.email))}),f=(n(18),function(e){var t=e.monsters;return r.a.createElement("div",{className:"card-list"},t.map((function(e){return r.a.createElement(d,{monster:e,key:e.id})})))}),v=(n(19),function(e){var t=e.placeholder,n=e.onChangeHandler;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),g=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).onChangeHandler=function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({searchField:n.target.value});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={monsters:[],searchField:"",placeholder:"Search Monsters"},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({monsters:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=e.placeholder,o=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Box"),r.a.createElement(v,{placeholder:a,onChangeHandler:this.onChangeHandler}),r.a.createElement(f,{monsters:o}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.0613d885.chunk.js.map