(this["webpackJsonpsample-bootrap"]=this["webpackJsonpsample-bootrap"]||[]).push([[0],{31:function(e,t,s){},33:function(e,t,s){},37:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(10),r=s.n(a),i=s(7),o=(s(31),s(32),s(17)),l=s(41),d=s(42),j=s(22),b=s(23),u=s(45),x=s(43),h=(s(33),s(1));var m=function(e){var t=e.toDo,s=e.toDos,n=e.setToDo,a=e.setToDos,r=Object(c.useState)({}),m=Object(i.a)(r,2),O=m[0],f=m[1];return Object(c.useEffect)((function(){var e=new Date,t=e.getDate(),s=e.getMonth()+1,c=e.getFullYear();f({dte:t+"-"+s+"-"+c,week:function(){switch(e.getDay()){case 0:return"Sunday";case 1:return"Monday";case 2:return"Thuesday";case 3:return"Wedensday";case 4:return"Thursday";case 5:return"Friday";case 6:return"Saturday";default:return null}}()})}),[]),Object(h.jsx)("div",{className:"add-wrapper mt-3",children:Object(h.jsxs)(l.a,{children:[Object(h.jsxs)("h3",{className:"heading text-center text-dark shadow p-3 border border-secondary rounded",children:["TODO",Object(h.jsx)("i",{class:"bi bi-card-checklist ps-4 pe-4"}),Object(h.jsx)("span",{className:"text-secondary",children:O.dte+" , "+O.week})]}),Object(h.jsxs)(d.a,{className:"justify-content-md-center input-items mt-5 ",children:[Object(h.jsx)(j.a,{xs:12,lg:5,children:Object(h.jsx)(b.a,{controlId:"floatingInput",label:"Write Here..",className:"mb-3",children:Object(h.jsx)(u.a.Control,{type:"text",id:"input-field",placeholder:"name@example.com",onChange:function(e){n(e.target.value)},style:{boxShadow:"16px 16px 12px -13px rgba(0,0,0,0.08) inset"}})})}),Object(h.jsx)(j.a,{xs:!0,lg:"2",children:Object(h.jsx)(x.a,{onClick:function(){a([].concat(Object(o.a)(s),[{id:Date.now(),text:t,status:!1}])),document.getElementById("input-field").value=" ",document.getElementById("input-field").focus()},variant:"outline-info",children:"Add Item"})})]})]})})},O=s(44);s(37);var f=function(e){var t=e.toDos,s=e.setToDos,c=e.setCancel,n=e.cancel;return Object(h.jsxs)("div",{className:"border border-danger p-4 rounded mb-3 shadow-sm",style:{minHeight:"200px"},children:[Object(h.jsxs)("h3",{className:"text-center mb-4 text-info",children:["Pending Tasks ",Object(h.jsx)("i",{class:"bi bi-clock-history ps-2"})]}),t.map((function(e){return Object(h.jsxs)(O.a,{variant:"primary",className:"d-flex justify-content-between pb-1 alert-box ",style:e.status?{textDecoration:"line-through"}:null,children:[e.text,Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)(u.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:Object(h.jsx)(u.a.Check,{type:"checkbox",value:e.status,onChange:function(c){console.log(c.target.checked),console.log(e),s(t.filter((function(t){return t.id===e.id&&(t.status=c.target.checked),t})))}})}),Object(h.jsx)("i",{class:"bi bi-x-square ps-4 pe-2 fs-5 text-danger pending-trash",onClick:function(){window.confirm("Do you want to delete..")&&(s(t.filter((function(t){return t!==e}))),c([].concat(Object(o.a)(n),[e])))}})]})]})}))]})};var p=function(e){var t=e.toDos;return Object(h.jsxs)("div",{className:"border border-warning p-4 rounded mb-3 shadow-sm",style:{minHeight:"200px"},children:[Object(h.jsxs)("h3",{className:"text-center mb-4 text-success",children:["Completed Tasks",Object(h.jsx)("i",{class:"bi bi-check2-square ps-3"})]}),t.map((function(e){if(e.status)return Object(h.jsxs)(O.a,{className:"d-flex justify-content-between",variant:"success",children:[e.text,Object(h.jsx)("i",{class:"bi bi-check-circle"})]})}))]})};var g=function(e){var t=e.cancel,s=e.setCancel;return Object(h.jsxs)("div",{className:"border border-info p-4 rounded mb-3 shadow-sm",style:{minHeight:"200px"},children:[Object(h.jsxs)("h3",{className:"text-center mb-4 text-danger",children:["Cancelled Tasks",Object(h.jsx)("i",{class:"bi bi-trash ps-3"})]}),t.map((function(e){return Object(h.jsxs)(O.a,{className:"d-flex justify-content-between",variant:"warning",children:[e.text,Object(h.jsx)("i",{class:"bi bi-x-circle",style:{cursor:"pointer"},onClick:function(){s(t.filter((function(t){return t!==e})))}})]})}))]})};var y=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(""),r=Object(i.a)(a,2),o=r[0],b=r[1],u=Object(c.useState)([]),x=Object(i.a)(u,2),O=x[0],y=x[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{toDo:o,toDos:s,setToDo:b,setToDos:n,getdate:function(){var e=new Date;return e.getDate()+" "+(e.getMonth()+1)+" "+e.getFullYear()}}),Object(h.jsx)(l.a,{className:"mt-5",children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(j.a,{xs:12,lg:!0,children:Object(h.jsx)(f,{setCancel:y,cancel:O,toDos:s,setToDos:n})}),Object(h.jsx)(j.a,{xs:12,lg:!0,children:Object(h.jsx)(p,{toDos:s})}),Object(h.jsx)(j.a,{xs:12,lg:!0,children:Object(h.jsx)(g,{cancel:O,setCancel:y})})]})})]})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2e98b772.chunk.js.map