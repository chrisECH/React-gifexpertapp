(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(7),c=n.n(a),i=n(2),s=n(10),u=n(8),o=n.n(u),j=n(0),d=function(e){var t=e.setCategories,n=Object(r.useState)(""),a=Object(i.a)(n,2),c=a[0],u=a[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2&&(t((function(e){return[c].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){u(e.target.value)}})})};d.protoTypes={setCategories:o.a.func.isRequired};var l=n(11),p=n(6),f=n.n(p),b=n(9),O=function(){var e=Object(b.a)(f.a.mark((function e(t){var n,r,a,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=hu7X2DPoq32iBMWgHSlxQw3A9eOv0v7Z"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,c=a.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){e.id;var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__fadeIn   animate__delay-1s",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsx)("p",{children:t})]})},g=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){O(e).then((function(e){setTimeout((function(){console.log(e),c({data:e,loading:!1})}),3e3)}))}),[e]),a}(t),a=n.data,c=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:t}),c&&Object(j.jsx)("p",{children:"Loading"}),Object(j.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(j.jsx)(h,Object(l.a)({},e),e.id)}))})]})},x=function(){var e=Object(r.useState)(["Vikingos"]),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"GifExpertApp"}),Object(j.jsx)(d,{setCategories:a}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(g,{category:e},e)}))})]})};n(20);c.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.53a80bc0.chunk.js.map