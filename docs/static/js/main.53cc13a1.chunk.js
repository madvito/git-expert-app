(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),u=n.n(c),i=n(1),l=n(8),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(i.a)(n,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim()&&t((function(e){return[u].concat(Object(l.a)(e))})),o("")}},r.a.createElement("h2",null,"Add Category"),r.a.createElement("input",{type:"text",value:u,onChange:function(e){o(e.target.value)}}))},s=n(4),m=n.n(s),p=n(7),f=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=P5wttDbHgIBvWzWdoq50pr8jtsyvx6YV&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,u=c.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),console.log(u),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r},g=function(e){var t=e.title,n=(e.id,e.url);return r.a.createElement("div",{className:"card animate__animated animate__fadeInDown"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("p",null,t))},E=function(e){var t=e.category,n=d(t),a=n.loading,c=n.data;return console.log(a,c),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),a&&r.a.createElement("p",{className:"animate__animated animate__flash"},"Loading"),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(g,Object.assign({key:e.id},e))})))," ")},h=function(){var e=Object(a.useState)(["One Punch Man"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map((function(e,t){return r.a.createElement(E,{key:e,category:e})}))))};n(15);u.a.render(r.a.createElement(h,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.53cc13a1.chunk.js.map