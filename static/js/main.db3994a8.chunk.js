(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{15:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),i=n(10),s=n(2),u=n(3),l=n(5),h=n(4),d=(n(15),n(9)),b=n(0),j=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsx)("form",{onSubmit:this.handleSubmit,children:Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Name"}),Object(b.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(b.jsx)("p",{children:"Number"}),Object(b.jsx)("input",{type:"tel",value:this.state.number,onChange:this.handleChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",onClick:this.handleChange,children:"Add contact"})]})})}}]),n}(a.Component),m=j,f=n(23),p=n(6),O=n.n(p),v=function t(e,n,a){var c=this;Object(s.a)(this,t),this.equals=function(t){return c.name===t.name},this.id=e,this.name=n,this.number=a};v.propTypes={id:O.a.string,name:O.a.string,number:O.a.string};var g=v,x=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDeleteContact;return Object(b.jsxs)("li",{children:[n,": ",a,Object(b.jsx)("button",{type:"button",onClick:function(){return c(e)},children:Object(b.jsx)("p",{children:"Delete"})})]})},C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(b.jsx)(x,{id:e,name:a,number:c,onDeleteContact:n},e)}))})})},y=function(t){var e=t.value,n=t.onChange;return Object(b.jsx)("div",{children:Object(b.jsxs)("label",{children:[Object(b.jsx)("p",{children:"Find contacts by name:"}),Object(b.jsx)("input",{type:"text",value:e,onChange:n})]})})},S=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleAddContact=function(e){var n=e.name,a=e.number,c=Object(f.a)(),r=new g(c,n,a);t.state.contacts.find((function(t){return r.equals(t)}))?alert("".concat(r.name," already exists in contacts")):t.setState({contacts:[].concat(Object(i.a)(t.state.contacts),[r])})},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts;return n?a.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})):a},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("Component did mount");var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){console.log("Component did update"),this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(m,{onSubmit:this.handleAddContact}),e.length>0&&Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(y,{value:t,onChange:this.changeFilter}),Object(b.jsx)(C,{contacts:e,onDeleteContact:this.handleDeleteContact})]})]})}}]),n}(a.Component),k=S;n(19),n(20);o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.db3994a8.chunk.js.map