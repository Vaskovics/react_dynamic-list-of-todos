(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(9),c(10),c(0)),d=function(e){var t=e.list,c=e.onSelect;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:e.id}),Object(i.jsx)("td",{className:"is-vcentered"}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:"has-text-danger",children:e.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},j=function(){return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsxs)("select",{"data-cy":"statusSelect",children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"active",children:"Active"}),Object(i.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search..."}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(i.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})},r=(c(12),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),o=function(e){var t=e.list,c=e.onCross;return Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),0===t.length?Object(i.jsx)(r,{}):Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #2"}),Object(i.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c()}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:"quis ut nam facilis et officia qui"}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:Sincere@april.biz",children:"Leanne Graham"})]})]})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=900,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(),h=Object(n.a)(a,2),m=h[0],x=h[1],O=Object(l.useState)(!1),u=Object(n.a)(O,2),f=u[0],N=u[1];Object(l.useEffect)((function(){b("/todos").then((function(e){return s(e)}))}),[c]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(j,{})}),Object(i.jsx)("div",{className:"block",children:0===c.length?Object(i.jsx)(r,{}):Object(i.jsx)(d,{list:c,onSelect:function(e){x(e),N(!0)}})})]})})}),f&&Object(i.jsx)(o,{list:c,onCross:function(){x(void 0),N(!1)}}),m]})};a.a.render(Object(i.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3a0521a4.chunk.js.map