(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(8),r=n.n(a),i=n(2),s=n(5),u=n(0),o=function(t){var e=t.setCategories,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(u.jsx)("form",{className:"gif__a\xf1adir_categoria",onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){var e=t.target;o(e.value)}})})},j=n(7),l=n.n(j),d=n(9),f=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,c,a,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=t.url,n=t.title;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card__img",children:Object(u.jsx)("img",{src:e,alt:n})}),Object(u.jsx)("p",{children:n})]})},p=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){r({data:Object(s.a)(t),loading:!1})}))}),[t]),a}(e),a=n.data,r=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),Object(u.jsxs)("div",{className:"card-grid",children:[r&&Object(u.jsx)("h4",{children:"Loading..."}),a.map((function(t){return Object(u.jsx)(b,{url:t.url,title:t.title},t.id)}))]})]})},O=(n(16),function(t){var e=t.defaultValue,n=void 0===e?[]:e,a=Object(c.useState)(n),r=Object(i.a)(a,2),s=r[0],j=r[1];return Object(u.jsxs)("div",{className:"gif__contenedor",children:[Object(u.jsx)("h3",{className:"gif__titulo",children:"GifExpertApp"}),Object(u.jsx)(o,{setCategories:j}),Object(u.jsx)("ol",{className:"gif__ol",children:s.map((function(t){return Object(u.jsx)(p,{category:t},t)}))})]})});n(17);r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.18f0cf76.chunk.js.map