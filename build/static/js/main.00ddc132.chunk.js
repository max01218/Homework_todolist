(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),s=n(7),c=n.n(s),a=(n(13),n(8)),r=n(2),d=n(3),u=n(5),l=n(4),h=(n(14),n(0)),p=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).state={newText:t.todo.text,editing:!1},o}return Object(d.a)(n,[{key:"deleteTodo",value:function(){this.props.remove(this.props.todo.id)}},{key:"checkTodoToggle",value:function(){this.props.checkToggle(this.props.todo.id)}},{key:"showEditForm",value:function(){var t=this.state.editing;this.setState({newText:this.props.todo.text,editing:!t})}},{key:"getNewText",value:function(t){var e=t.target.value;this.setState({newText:e})}},{key:"saveEditedValue",value:function(){var t=this.state.newText;this.props.saveEditedValue(this.props.todo.id,t),this.setState({newText:this.props.todo.text,editing:!1})}},{key:"render",value:function(){var t=this,e=this.state.editing,n=this.props.todo;return Object(h.jsxs)("li",{className:"list-group-item list-row "+(n.completed?"done":""),children:[Object(h.jsx)("div",{className:"btn-circle checkbox",onClick:function(){return t.checkTodoToggle()},children:"\u2713"}),Object(h.jsxs)("div",{className:"list-text__container",onDoubleClick:function(){return t.showEditForm()},children:[!e&&Object(h.jsx)("span",{className:"list-text",children:n.text}),e&&Object(h.jsxs)("div",{className:"input-group",children:[Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:n.text,value:this.state.newText,onChange:function(e){return t.getNewText(e)}}),Object(h.jsxs)("div",{className:"input-group-append",children:[Object(h.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return t.showEditForm()},children:"\u53d6\u6d88"}),Object(h.jsx)("button",{className:"btn btn-outline-secondary",type:"button",onClick:function(){return t.saveEditedValue()},children:"\u5b8c\u6210\u7de8\u8f2f"})]})]})]}),Object(h.jsx)("div",{className:"btn-circle delete",onClick:function(){return t.deleteTodo()},children:"\u2715"})]})}}]),n}(i.a.Component),j=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsx)("h1",{children:"CGU Todo list"})}}]),n}(i.a.Component),b=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(r.a)(this,n),(o=e.call(this,t)).state={todos:[{id:1,text:"1",color:"red",completed:!0},{id:2,text:"2",completed:!1},{id:3,text:"3",completed:!1}],newId:4,newText:""},o}return Object(d.a)(n,[{key:"getNewValue",value:function(t){var e=t.target.value;this.setState({newText:e})}},{key:"addTodo",value:function(t){var e=this.state,n=e.todos,o=e.newText,i=e.newId;o?this.setState({todos:[].concat(Object(a.a)(n),[{id:i,text:o,completed:!1}]),newId:i+1,newText:""}):t.preventDefault()}},{key:"deleteTodo",value:function(t){var e=this.state.todos.filter((function(e){return e.id!==t}));this.setState({todos:e})}},{key:"checkTodoToggle",value:function(t){var e=this.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}));this.setState({todos:e})}},{key:"saveEditedValue",value:function(t,e){var n=this.state.todos.map((function(n){return n.id===t&&(n.text=e),n}));this.setState({todos:n})}},{key:"render",value:function(){var t=this,e=this.state.todos;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("header",{className:"header__container",children:Object(h.jsx)(j,{})}),Object(h.jsxs)("div",{className:"input-group mb-3",children:[Object(h.jsx)("input",{type:"text",className:"form-control",id:"input-add",placeholder:"add a new todo",value:this.state.newText,onChange:function(e){return t.getNewValue(e)}}),Object(h.jsx)("span",{className:"input-group-append",children:Object(h.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(e){return t.addTodo(e)},children:"Add"})})]}),Object(h.jsx)("ul",{className:"list-group list-group-flush",children:e.map((function(e){return Object(h.jsx)(p,{todo:e,remove:function(e){return t.deleteTodo(e)},checkToggle:function(e){return t.checkTodoToggle(e)},saveEditedValue:function(e,n){return t.saveEditedValue(e,n)}},e.id)}))})]})}}]),n}(i.a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),o(t),i(t),s(t),c(t)}))};c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(b,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.00ddc132.chunk.js.map