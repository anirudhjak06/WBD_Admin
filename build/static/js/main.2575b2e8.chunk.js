(this.webpackJsonplamaadmin=this.webpackJsonplamaadmin||[]).push([[0],{313:function(e,t,s){},319:function(e,t,s){},320:function(e,t,s){},322:function(e,t,s){},456:function(e,t,s){},474:function(e,t,s){},475:function(e,t,s){},476:function(e,t,s){},477:function(e,t,s){},481:function(e,t,s){},482:function(e,t,s){},483:function(e,t,s){},484:function(e,t,s){},485:function(e,t,s){},486:function(e,t,s){},487:function(e,t,s){},488:function(e,t,s){},489:function(e,t,s){},492:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(26),r=s.n(a),n=(s(313),s(537)),i=s(540),l=s(541),d=s(542),o=s(543),j=s(544),u=s(36),b=s(1);function h(){return Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsxs)("div",{className:"sidebarWrapper",children:[Object(b.jsxs)("div",{className:"sidebarMenu",children:[Object(b.jsx)("h3",{className:"sidebarTitle",children:"Dashboard"}),Object(b.jsx)("ul",{className:"sidebarList",children:Object(b.jsx)(u.b,{to:"/",className:"link",children:Object(b.jsxs)("li",{className:"sidebarListItem",children:[Object(b.jsx)(n.a,{className:"sidebarIcon"}),"Home"]})})})]}),Object(b.jsxs)("div",{className:"sidebarMenu",children:[Object(b.jsx)("h3",{className:"sidebarTitle",children:"Quick Menu"}),Object(b.jsxs)("ul",{className:"sidebarList",children:[Object(b.jsx)(u.b,{to:"/users",className:"link",children:Object(b.jsxs)("li",{className:"sidebarListItem",children:[Object(b.jsx)(i.a,{className:"sidebarIcon"}),"Users"]})}),Object(b.jsx)(u.b,{to:"/products",className:"link",children:Object(b.jsxs)("li",{className:"sidebarListItem",children:[Object(b.jsx)(l.a,{className:"sidebarIcon"}),"Products"]})}),Object(b.jsx)(u.b,{to:"/orders",className:"link",children:Object(b.jsxs)("li",{className:"sidebarListItem",children:[Object(b.jsx)(d.a,{className:"sidebarIcon"}),"Orders"]})}),Object(b.jsx)(u.b,{to:"/transactions",className:"link",children:Object(b.jsxs)("li",{className:"sidebarListItem",children:[Object(b.jsx)(o.a,{className:"sidebarIcon"}),"Transactions"]})})]})]}),Object(b.jsxs)("div",{className:"sidebarMenu",children:[Object(b.jsx)("h3",{className:"sidebarTitle",children:"Notifications"}),Object(b.jsx)("ul",{className:"sidebarList",children:Object(b.jsx)(u.b,{to:"/contacts",className:"link",children:Object(b.jsxs)("li",{className:"sidebarListItem",children:[Object(b.jsx)(j.a,{className:"sidebarIcon"}),"Contact Forms"]})})})]})]})})}s(319);var m=s(545),p=s(546),O=s(547);function x(){return Object(b.jsx)("div",{className:"topbar",children:Object(b.jsxs)("div",{className:"topbarWrapper",children:[Object(b.jsx)("div",{className:"topLeft",children:Object(b.jsx)("span",{className:"logo",children:"Admin"})}),Object(b.jsxs)("div",{className:"topRight",children:[Object(b.jsxs)("div",{className:"topbarIconContainer",children:[Object(b.jsx)(m.a,{}),Object(b.jsx)("span",{className:"topIconBadge",children:"0"})]}),Object(b.jsxs)("div",{className:"topbarIconContainer",children:[Object(b.jsx)(p.a,{}),Object(b.jsx)("span",{className:"topIconBadge",children:"0"})]}),Object(b.jsx)("div",{className:"topbarIconContainer",children:Object(b.jsx)(O.a,{})}),Object(b.jsx)("img",{src:""})]})]})})}s(320);var f=s(9),N=s.n(f),v=s(33),g=s(20),w=s(7),S=(s(322),s(548)),I=s(563),y=s(274),U=s(281),k=s(145),T=s(552);function F(e){var t=e.title,s=e.data,c=e.dataKey,a=e.grid;return Object(b.jsxs)("div",{className:"chart",children:[Object(b.jsx)("h3",{className:"chartTitle",children:t}),Object(b.jsx)(S.a,{width:"100%",aspect:4,children:Object(b.jsxs)(I.a,{data:s,children:[Object(b.jsx)(y.a,{dataKey:"name",stroke:"#5550bd"}),Object(b.jsx)(U.a,{type:"monotone",dataKey:c,stroke:"#5550bd"}),Object(b.jsx)(k.a,{}),a&&Object(b.jsx)(T.a,{stroke:"#e0dfdf",strokeDasharray:"5 5"})]})})]})}s(456);var C=s(553),L=s(204),P=s.n(L),A="https://greengrocery30.herokuapp.com/api/",D=P.a.create({baseURL:A}),M=P.a.create({baseURL:A,headers:{token:"Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTI0ZjM4NjRhODM2YTJiZTFiYWZlMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTcxODMyOCwiZXhwIjoxNjQxOTc3NTI4fQ.BHKvrS09UpdDaToxnbbJzQeat-vcSXC2LJcxD0aYo1k")}});function J(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),s=(t[0],t[1]),a=Object(c.useState)(0),r=Object(w.a)(a,2),n=(r[0],r[1]);return Object(c.useEffect)((function(){(function(){var e=Object(g.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("orders/income");case 3:t=e.sent,s(t.data),n(100*t.data[1].total/t.data[0].total-100),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{className:"featured",children:[Object(b.jsxs)("div",{className:"featuredItem",children:[Object(b.jsx)("span",{className:"featuredTitle",children:"Revanue"}),Object(b.jsxs)("div",{className:"featuredMoneyContainer",children:[Object(b.jsx)("span",{className:"featuredMoney",children:"\u20b910,000"}),Object(b.jsxs)("span",{className:"featuredMoneyRate",children:["+10% ",Object(b.jsx)(C.a,{className:"featuredIcon"})]})]}),Object(b.jsx)("span",{className:"featuredSub",children:"Compared to last month"})]}),Object(b.jsxs)("div",{className:"featuredItem",children:[Object(b.jsx)("span",{className:"featuredTitle",children:"Sales"}),Object(b.jsxs)("div",{className:"featuredMoneyContainer",children:[Object(b.jsx)("span",{className:"featuredMoney",children:"\u20b94,415"}),Object(b.jsxs)("span",{className:"featuredMoneyRate",children:["+1.4 ",Object(b.jsx)(C.a,{className:"featuredIcon"})]})]}),Object(b.jsx)("span",{className:"featuredSub",children:"Compared to last month"})]}),Object(b.jsxs)("div",{className:"featuredItem",children:[Object(b.jsx)("span",{className:"featuredTitle",children:"Cost"}),Object(b.jsxs)("div",{className:"featuredMoneyContainer",children:[Object(b.jsx)("span",{className:"featuredMoney",children:"\u20b92,225"}),Object(b.jsxs)("span",{className:"featuredMoneyRate",children:["+2.4 ",Object(b.jsx)(C.a,{className:"featuredIcon"})]})]}),Object(b.jsx)("span",{className:"featuredSub",children:"Compared to last month"})]})]})}s(474);var E=[{id:1,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:2,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:3,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:4,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:5,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:6,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:7,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:8,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:9,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"},{id:10,username:"Jon Snow",avatar:"https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",email:"jon@gmail.com",status:"active",transaction:"$120.00"}],_=(s(475),s(175));function B(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){var e=Object(g.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("users/?new=true");case 3:t=e.sent,a(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsxs)("div",{className:"widgetSm",children:[Object(b.jsx)("span",{className:"widgetSmTitle",children:"New Join Members"}),Object(b.jsx)("ul",{className:"widgetSmList",children:s.map((function(e){return Object(b.jsxs)("li",{className:"widgetSmListItem",children:[Object(b.jsx)("img",{src:e.img||"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif",alt:"",className:"widgetSmImg"}),Object(b.jsx)("div",{className:"widgetSmUser",children:Object(b.jsx)("span",{className:"widgetSmUsername",children:e.username})}),Object(b.jsx)("div",{className:"widgetSmUser",children:Object(b.jsx)("span",{className:"widgetSmUsername",children:Object(_.a)(e.createdAt)})})]},e._id)}))})]})}s(476);function R(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),s=t[0],a=t[1];Object(c.useEffect)((function(){(function(){var e=Object(g.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("orders?new=true");case 3:t=e.sent,a(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var r=function(e){var t=e.type;return Object(b.jsx)("button",{className:"widgetLgButton "+t,children:t})};return Object(b.jsxs)("div",{className:"widgetLg",children:[Object(b.jsx)("h3",{className:"widgetLgTitle",children:"Latest Transactions"}),Object(b.jsxs)("table",{className:"widgetLgTable",children:[Object(b.jsxs)("tr",{className:"widgetLgTr",children:[Object(b.jsx)("th",{className:"widgetLgTh",children:"Customer"}),Object(b.jsx)("th",{className:"widgetLgTh",children:"Date"}),Object(b.jsx)("th",{className:"widgetLgTh",children:"Amount"}),Object(b.jsx)("th",{className:"widgetLgTh",children:"Status"})]}),s.map((function(e){return Object(b.jsxs)("tr",{className:"widgetLgTr",children:[Object(b.jsx)("td",{className:"widgetLgUser",children:Object(b.jsx)("span",{className:"widgetLgName",children:e.userId})}),Object(b.jsx)("td",{className:"widgetLgDate",children:Object(_.a)(e.createdAt)}),Object(b.jsxs)("td",{className:"widgetLgAmount",children:["\u20b9 ",e.amount]}),Object(b.jsx)("td",{className:"widgetLgStatus",children:Object(b.jsx)(r,{type:e.status})})]},e._id)}))]})]})}function z(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),s=t[0],a=t[1],r=Object(c.useMemo)((function(){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"]}),[]);return Object(c.useEffect)((function(){(function(){var e=Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("/users/stats");case 3:e.sent.data.map((function(e){return a((function(t){return[].concat(Object(v.a)(t),[{name:r[e._id-1],"Active User":e.total}])}))})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)(J,{}),Object(b.jsx)(F,{data:s,title:"User Analytics",grid:!0,dataKey:"Active User"}),Object(b.jsxs)("div",{className:"homeWidgets",children:[Object(b.jsx)(B,{}),Object(b.jsx)(R,{})]})]})}var K=s(40),V=(s(477),s(75)),Y=s(35);function $(){var e=Object(c.useState)(E),t=Object(w.a)(e,2),s=(t[0],t[1],Object(c.useState)([])),a=Object(w.a)(s,2),r=a[0],n=a[1];Object(Y.c)((function(e){return e.user.users}));Object(c.useEffect)((function(){(function(){var e=Object(g.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("users/");case 3:t=e.sent,n(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var i=[{field:"_id",headerName:"ID",width:220},{field:"username",headerName:"User",width:200,renderCell:function(e){return Object(b.jsxs)("div",{className:"userListUser",children:[Object(b.jsx)("img",{className:"userListImg",src:e.row.img||"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif",alt:""}),e.row.username]})}},{field:"email",headerName:"Email",width:200},{field:"isVolunteer",headerName:"Volunteer",width:150},{field:"createdAt",headerName:"Created Time",width:200},{field:"action",headerName:"Action",width:150,renderCell:function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u.b,{to:"/user/"+e.row._id,children:Object(b.jsx)("button",{className:"productListEdit",children:"View"})})})}}];return Object(b.jsx)("div",{className:"userList",children:Object(b.jsx)(V.a,{rows:r,getRowId:function(e){return e._id},columns:i,pageSize:12,checkboxSelection:!0})})}var W=s(556),Q=s(557),X=s(558),Z=s(559);s(481);function G(){var e=Object(K.f)().pathname.split("/")[2],t=Object(c.useState)({}),s=Object(w.a)(t,2),a=s[0],r=s[1];Object(Y.b)();return Object(c.useEffect)((function(){(function(){var t=Object(g.a)(N.a.mark((function t(){var s;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.get("/users/find/"+e);case 3:s=t.sent,console.log(s),r(s.data),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(b.jsxs)("div",{className:"user",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Username: "}),a.username," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Email: "}),a.email," "]}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{className:"userTitleContainer",children:Object(b.jsx)("h1",{className:"userTitle",children:"Edit User"})}),Object(b.jsxs)("div",{className:"userContainer",children:[Object(b.jsxs)("div",{className:"userShow",children:[Object(b.jsxs)("div",{className:"userShowTop",children:[Object(b.jsx)("img",{src:a.img||"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif",alt:"",className:"userShowImg"}),Object(b.jsx)("div",{className:"userShowTopTitle",children:Object(b.jsx)("span",{className:"userShowUsername",children:a.username})})]}),Object(b.jsxs)("div",{className:"userShowBottom",children:[Object(b.jsx)("span",{className:"userShowTitle",children:"User"}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(i.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:a.username})]}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(W.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:a.createdAt})]}),Object(b.jsx)("span",{className:"userShowTitle",children:"Contact Details"}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(Q.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:"+1 123 456 67"})]}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(j.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:a.email})]}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(X.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:"India"})]})]})]}),Object(b.jsxs)("div",{className:"userUpdate",children:[Object(b.jsx)("span",{className:"userUpdateTitle",children:"Edit"}),Object(b.jsxs)("form",{className:"userUpdateForm",children:[Object(b.jsxs)("div",{className:"userUpdateLeft",children:[Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",placeholder:a.username,className:"userUpdateInput"})]}),Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"text",placeholder:a.email,className:"userUpdateInput"})]}),Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Phone"}),Object(b.jsx)("input",{type:"text",placeholder:"+1 123 456 67",className:"userUpdateInput"})]}),Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Address"}),Object(b.jsx)("input",{type:"text",placeholder:"India",className:"userUpdateInput"})]})]}),Object(b.jsx)("div",{className:"userUpdateRight",children:Object(b.jsxs)("div",{className:"userUpdateUpload",children:[Object(b.jsx)("img",{className:"userUpdateImg",src:a.img||"https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif",alt:""}),Object(b.jsx)("label",{htmlFor:"file",children:Object(b.jsx)(Z.a,{className:"userUpdateIcon"})}),Object(b.jsx)("input",{type:"file",id:"file",style:{display:"none"}})]})})]})]})]})]})}s(482);function H(){return Object(b.jsxs)("div",{className:"newUser",children:[Object(b.jsx)("h1",{className:"newUserTitle",children:"New User"}),Object(b.jsxs)("form",{className:"newUserForm",children:[Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",placeholder:"john"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Full Name"}),Object(b.jsx)("input",{type:"text",placeholder:"John Smith"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"email",placeholder:"john@gmail.com"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",placeholder:"password"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Phone"}),Object(b.jsx)("input",{type:"text",placeholder:"+1 123 456 78"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Address"}),Object(b.jsx)("input",{type:"text",placeholder:"New York | USA"})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Gender"}),Object(b.jsxs)("div",{className:"newUserGender",children:[Object(b.jsx)("input",{type:"radio",name:"gender",id:"male",value:"male"}),Object(b.jsx)("label",{for:"male",children:"Male"}),Object(b.jsx)("input",{type:"radio",name:"gender",id:"female",value:"female"}),Object(b.jsx)("label",{for:"female",children:"Female"}),Object(b.jsx)("input",{type:"radio",name:"gender",id:"other",value:"other"}),Object(b.jsx)("label",{for:"other",children:"Other"})]})]}),Object(b.jsxs)("div",{className:"newUserItem",children:[Object(b.jsx)("label",{children:"Active"}),Object(b.jsxs)("select",{className:"newUserSelect",name:"active",id:"active",children:[Object(b.jsx)("option",{value:"yes",children:"Yes"}),Object(b.jsx)("option",{value:"no",children:"No"})]})]}),Object(b.jsx)("button",{className:"newUserButton",children:"Create"})]})]})}s(483);var q=s(560),ee=s(76),te=Object(ee.b)({name:"user",initialState:{currentUser:null,isFetching:!1,error:!1},reducers:{loginStart:function(e){e.isFetching=!0},loginSuccess:function(e,t){e.isFetching=!1,e.currentUser=t.payload},loginFailure:function(e){e.isFetching=!1,e.error=!0},logout:function(e){e.currentUser=null}}}),se=te.actions,ce=se.loginStart,ae=se.loginSuccess,re=se.loginFailure,ne=te.reducer,ie=Object(ee.b)({name:"product",initialState:{products:[],isFetching:!1,error:!1},reducers:{getProductStart:function(e){e.isFetching=!0,e.error=!1},getProductSuccess:function(e,t){e.isFetching=!1,e.products=t.payload},getProductFailure:function(e){e.isFetching=!1,e.error=!0},deleteProductStart:function(e){e.isFetching=!0,e.error=!1},deleteProductSuccess:function(e,t){e.isFetching=!1,e.products.splice(e.products.findIndex((function(e){return e._id===t.payload})),1)},deleteProductFailure:function(e){e.isFetching=!1,e.error=!0},updateProductStart:function(e){e.isFetching=!0,e.error=!1},updateProductSuccess:function(e,t){e.isFetching=!1,e.products[e.products.findIndex((function(e){return e._id===t.payload.id}))]=t.payload.product},updateProductFailure:function(e){e.isFetching=!1,e.error=!0},addProductStart:function(e){e.isFetching=!0,e.error=!1},addProductSuccess:function(e,t){e.isFetching=!1,e.products.push(t.payload)},addProductFailure:function(e){e.isFetching=!1,e.error=!0}}}),le=ie.actions,de=le.getProductStart,oe=le.getProductSuccess,je=le.getProductFailure,ue=le.deleteProductStart,be=le.deleteProductSuccess,he=le.deleteProductFailure,me=(le.updateProductStart,le.updateProductSuccess,le.updateProductFailure,le.addProductStart),pe=le.addProductSuccess,Oe=le.addProductFailure,xe=ie.reducer,fe=Object(ee.b)({name:"contact",initialState:{contacts:[],isFetching:!1,error:!1},reducers:{getContactStart:function(e){e.isFetching=!0,e.error=!1},getContactSuccess:function(e,t){e.isFetching=!1,e.contacts=t.payload},getContactFailure:function(e){e.isFetching=!1,e.error=!0}}}),Ne=fe.actions,ve=(Ne.getContactStart,Ne.getContactSuccess,Ne.getContactFailure,fe.reducer,Object(ee.b)({name:"order",initialState:{products:[],isFetching:!1,error:!1},reducers:{getOrderStart:function(e){e.isFetching=!0,e.error=!1},getOrderSuccess:function(e,t){e.isFetching=!1,e.products=t.payload},getOrderFailure:function(e){e.isFetching=!1,e.error=!0}}})),ge=ve.actions,we=(ge.getOrderStart,ge.getOrderSuccess,ge.getOrderFailure,ve.reducer,function(){var e=Object(g.a)(N.a.mark((function e(t,s){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ce()),e.prev=1,e.next=4,D.post("/auth/login",s);case 4:c=e.sent,t(ae(c.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(re());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,s){return e.apply(this,arguments)}}()),Se=function(){var e=Object(g.a)(N.a.mark((function e(t){var s;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(de()),e.prev=1,e.next=4,D.get("/products");case 4:s=e.sent,t(oe(s.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(je());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=Object(g.a)(N.a.mark((function e(t,s){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(ue());try{s(be(t))}catch(c){s(he())}case 2:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),ye=function(){var e=Object(g.a)(N.a.mark((function e(t,s){var c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(me()),e.prev=1,e.next=4,M.post("/products",t);case 4:c=e.sent,s(pe(c.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s(Oe());case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,s){return e.apply(this,arguments)}}();function Ue(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.product.products}));Object(c.useEffect)((function(){Se(e)}),[e]);var s=[{field:"_id",headerName:"ID",width:220},{field:"product",headerName:"Product",width:200,renderCell:function(e){return Object(b.jsxs)("div",{className:"productListItem",children:[Object(b.jsx)("img",{className:"productListImg",src:e.row.img,alt:""}),e.row.title]})}},{field:"inStock",headerName:"Stock",width:200},{field:"price",headerName:"Price",width:160},{field:"action",headerName:"Action",width:150,renderCell:function(t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u.b,{to:"/product/"+t.row._id,children:Object(b.jsx)("button",{className:"productListEdit",children:"Edit"})}),Object(b.jsx)(q.a,{className:"productListDelete",onClick:function(){return s=t.row._id,void Ie(s,e);var s}})]})}}];return Object(b.jsx)("div",{className:"productList",children:Object(b.jsx)(V.a,{rows:t,disableSelectionOnClick:!0,columns:s,getRowId:function(e){return e._id},pageSize:12,checkboxSelection:!0})})}s(484);function ke(){var e=Object(K.f)().pathname.split("/")[2],t=Object(c.useState)([]),s=Object(w.a)(t,2),a=s[0],r=s[1],n=Object(Y.c)((function(t){return t.product.products.find((function(t){return t._id===e}))})),i=Object(c.useMemo)((function(){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","Sep","Oct","Nov","Dec"]}),[]);return Object(c.useEffect)((function(){(function(){var t=Object(g.a)(N.a.mark((function t(){var s;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.get("orders/income?pid="+e);case 3:s=t.sent,s.data.sort((function(e,t){return e._id-t._id})).map((function(e){return r((function(t){return[].concat(Object(v.a)(t),[{name:i[e._id-1],Sales:e.total}])}))})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[e,i]),Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"productTitleContainer",children:[Object(b.jsx)("h1",{className:"productTitle",children:"Product"}),Object(b.jsx)(u.b,{to:"/newproduct",children:Object(b.jsx)("button",{className:"productAddButton",children:"Create"})})]}),Object(b.jsxs)("div",{className:"productTop",children:[Object(b.jsx)("div",{className:"productTopLeft",children:Object(b.jsx)(F,{data:a,dataKey:"Sales",title:"Sales Performance"})}),Object(b.jsxs)("div",{className:"productTopRight",children:[Object(b.jsxs)("div",{className:"productInfoTop",children:[Object(b.jsx)("img",{src:n.img,alt:"",className:"productInfoImg"}),Object(b.jsx)("span",{className:"productName",children:n.title})]}),Object(b.jsxs)("div",{className:"productInfoBottom",children:[Object(b.jsxs)("div",{className:"productInfoItem",children:[Object(b.jsx)("span",{className:"productInfoKey",children:"id:"}),Object(b.jsx)("span",{className:"productInfoValue",children:n._id})]}),Object(b.jsxs)("div",{className:"productInfoItem",children:[Object(b.jsx)("span",{className:"productInfoKey",children:"Sales:"}),Object(b.jsx)("span",{className:"productInfoValue",children:"0"})]}),Object(b.jsxs)("div",{className:"productInfoItem",children:[Object(b.jsx)("span",{className:"productInfoKey",children:"In stock:"}),Object(b.jsx)("span",{className:"productInfoValue",children:n.inStock?"Yes":"No"})]})]})]})]}),Object(b.jsx)("div",{className:"productBottom",children:Object(b.jsxs)("form",{className:"productForm",children:[Object(b.jsxs)("div",{className:"productFormLeft",children:[Object(b.jsx)("label",{children:"Product Name"}),Object(b.jsx)("input",{type:"text",placeholder:n.title}),Object(b.jsx)("label",{children:"Product Description"}),Object(b.jsx)("input",{type:"text",placeholder:n.desc}),Object(b.jsx)("label",{children:"Price"}),Object(b.jsx)("input",{type:"text",placeholder:n.price}),Object(b.jsx)("label",{children:"In Stock"}),Object(b.jsxs)("select",{name:"inStock",id:"idStock",children:[Object(b.jsx)("option",{value:"true",children:"Yes"}),Object(b.jsx)("option",{value:"false",children:"No"})]})]}),Object(b.jsxs)("div",{className:"productFormRight",children:[Object(b.jsxs)("div",{className:"productUpload",children:[Object(b.jsx)("img",{src:n.img,alt:"",className:"productUploadImg"}),Object(b.jsx)("label",{for:"file",children:Object(b.jsx)(Z.a,{})}),Object(b.jsx)("input",{type:"file",id:"file",style:{display:"none"}})]}),Object(b.jsx)("button",{className:"productButton",children:"Update"})]})]})})]})}var Te=s(15),Fe=s(143),Ce=(s(485),s(144)),Le=s(277),Pe=Object(Le.a)({apiKey:"AIzaSyB7S0XtlD0TjUigf896hpMFO6zyOqGoXUA",authDomain:"shop-de1b6.firebaseapp.com",projectId:"shop-de1b6",storageBucket:"shop-de1b6.appspot.com",messagingSenderId:"334968057132",appId:"1:334968057132:web:818e8c68cc7c2bf9461089"});function Ae(){var e=Object(c.useState)({}),t=Object(w.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(null),n=Object(w.a)(r,2),i=n[0],l=n[1],d=Object(c.useState)([]),o=Object(w.a)(d,2),j=o[0],u=o[1],h=Object(Y.b)(),m=function(e){a((function(t){return Object(Fe.a)(Object(Fe.a)({},t),{},Object(Te.a)({},e.target.name,e.target.value))}))};return Object(b.jsxs)("div",{className:"newProduct",children:[Object(b.jsx)("h1",{className:"addProductTitle",children:"New Product"}),Object(b.jsxs)("form",{className:"addProductForm",children:[Object(b.jsxs)("div",{className:"addProductItem",children:[Object(b.jsx)("label",{children:"Image"}),Object(b.jsx)("input",{type:"file",id:"file",onChange:function(e){return l(e.target.files[0])}})]}),Object(b.jsxs)("div",{className:"addProductItem",children:[Object(b.jsx)("label",{children:"Title"}),Object(b.jsx)("input",{name:"title",type:"text",placeholder:"Mango...",onChange:m})]}),Object(b.jsxs)("div",{className:"addProductItem",children:[Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)("input",{name:"desc",type:"text",placeholder:"Description...",onChange:m})]}),Object(b.jsxs)("div",{className:"addProductItem",children:[Object(b.jsx)("label",{children:"Price"}),Object(b.jsx)("input",{name:"price",type:"number",placeholder:"100",onChange:m})]}),Object(b.jsxs)("div",{className:"addProductItem",children:[Object(b.jsx)("label",{children:"Categories"}),Object(b.jsx)("input",{type:"text",placeholder:"Fruit, Vegetable",onChange:function(e){u(e.target.value.split(","))}})]}),Object(b.jsxs)("div",{className:"addProductItem",children:[Object(b.jsx)("label",{children:"Stock"}),Object(b.jsxs)("select",{name:"inStock",onChange:m,children:[Object(b.jsx)("option",{value:"true",children:"Yes"}),Object(b.jsx)("option",{value:"false",children:"No"})]})]}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault();var t=(new Date).getTime()+i.name,c=Object(Ce.b)(Pe),a=Object(Ce.c)(c,t),r=Object(Ce.d)(a,i);r.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case"paused":console.log("Upload is paused");break;case"running":console.log("Upload is running")}}),(function(e){}),(function(){Object(Ce.a)(r.snapshot.ref).then((function(e){var t=Object(Fe.a)(Object(Fe.a)({},s),{},{img:e,categories:j});ye(t,h)}))}),alert("Product has been created successfully!"))},className:"addProductButton",children:"Create"})]})]})}var De=function(){var e=Object(c.useState)(""),t=Object(w.a)(e,2),s=t[0],a=t[1],r=Object(c.useState)(""),n=Object(w.a)(r,2),i=n[0],l=n[1],d=Object(Y.b)(),o=Object(Y.c)((function(e){return e.user})),j=(o.isFetching,o.error);return Object(b.jsxs)("div",{style:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(b.jsx)("input",{style:{padding:10,marginBottom:20},type:"text",placeholder:"username",onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("input",{style:{padding:10,marginBottom:20},type:"password",placeholder:"password",onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),we(d,{username:s,password:i})},style:{padding:10,width:100},children:"Login"}),j&&Object(b.jsx)("h1",{children:"Something went wrong..."})]})};s(486);function Me(){Object(Y.b)();var e=Object(c.useState)([]),t=Object(w.a)(e,2),s=t[0],a=t[1];Object(c.useEffect)((function(){(function(){var e=Object(g.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("contact/");case 3:t=e.sent,a(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var r=[{field:"_id",headerName:"ID",width:320},{field:"contact",headerName:"User",width:200,renderCell:function(e){return Object(b.jsx)("div",{className:"productListItem",children:e.row.username})}},{field:"email",headerName:"Email",width:200},{field:"desc",headerName:"Message",width:160},{field:"action",headerName:"Action",width:150,renderCell:function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(u.b,{to:"/contact/"+e.row._id,children:Object(b.jsx)("button",{className:"productListEdit",children:"View"})})})}}];return Object(b.jsx)("div",{className:"productList",children:Object(b.jsx)(V.a,{rows:s,columns:r,getRowId:function(e){return e._id},pageSize:18})})}s(487);function Je(){Object(Y.b)();var e=Object(c.useState)([]),t=Object(w.a)(e,2),s=t[0],a=t[1];Object(c.useEffect)((function(){(function(){var e=Object(g.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("orders/");case 3:t=e.sent,a(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(b.jsx)("div",{className:"productList",children:Object(b.jsx)(V.a,{rows:s,disableSelectionOnClick:!0,columns:[{field:"_id",headerName:"ID",width:320},{field:"address",headerName:"Address",width:250},{field:"amount",headerName:"Amount",width:160},{field:"createdAt",headerName:"Created Date",width:200},{field:"status",headerName:"Status",width:160}],getRowId:function(e){return e._id},pageSize:12,checkboxSelection:!0})})}var Ee=s(561);s(488);function _e(){var e=Object(K.f)().pathname.split("/")[2],t=Object(c.useState)({}),s=Object(w.a)(t,2),a=s[0],r=s[1];Object(Y.b)();return Object(c.useEffect)((function(){(function(){var t=Object(g.a)(N.a.mark((function t(){var s;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.get("/contact/find/"+e);case 3:s=t.sent,console.log(s.data),console.log(e),r(s.data),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(b.jsxs)("div",{className:"user",children:[Object(b.jsx)("div",{className:"userTitleContainer",children:Object(b.jsx)("h1",{className:"userTitle",children:"View Form"})}),Object(b.jsxs)("div",{className:"userContainer",children:[Object(b.jsxs)("div",{className:"userShow",children:[Object(b.jsx)("div",{className:"userShowTop",children:Object(b.jsx)("div",{className:"userShowTopTitle",children:Object(b.jsx)("span",{className:"userShowUsername",children:a.username})})}),Object(b.jsxs)("div",{className:"userShowBottom",children:[Object(b.jsx)("span",{className:"userShowTitle",children:"User"}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(i.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:a.username})]}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(W.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:a.email})]}),Object(b.jsx)("span",{className:"userShowTitle",children:"Contact Details"}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(Q.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:"+1 123 456 67"})]}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(Ee.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:a.desc})]}),Object(b.jsxs)("div",{className:"userShowInfo",children:[Object(b.jsx)(X.a,{className:"userShowIcon"}),Object(b.jsx)("span",{className:"userShowInfoTitle",children:"India"})]})]})]}),Object(b.jsxs)("div",{className:"userUpdate",children:[Object(b.jsx)("span",{className:"userUpdateTitle",children:"User Details"}),Object(b.jsx)("form",{className:"userUpdateForm",children:Object(b.jsxs)("div",{className:"userUpdateLeft",children:[Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",placeholder:a.username,className:"userUpdateInput"})]}),Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{type:"text",placeholder:a.email,className:"userUpdateInput"})]}),Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Message"}),Object(b.jsx)("input",{type:"text",placeholder:a.desc,className:"userUpdateInput"})]}),Object(b.jsxs)("div",{className:"userUpdateItem",children:[Object(b.jsx)("label",{children:"Address"}),Object(b.jsx)("input",{type:"text",placeholder:"India",className:"userUpdateInput"})]})]})})]})]})]})}s(489);function Be(){Object(Y.b)();var e=Object(c.useState)([]),t=Object(w.a)(e,2),s=t[0],a=t[1];Object(c.useEffect)((function(){(function(){var e=Object(g.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.get("orders/");case 3:t=e.sent,a(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(b.jsx)("div",{className:"productList",children:Object(b.jsx)(V.a,{rows:s,disableSelectionOnClick:!0,columns:[{field:"_id",headerName:"Payment ID",width:250},{field:"userId",headerName:"User ID",width:250},{field:"address",headerName:"Address",width:250},{field:"amount",headerName:"Amount",width:140},{field:"createdAt",headerName:"Created Date",width:200}],getRowId:function(e){return e._id},pageSize:12,checkboxSelection:!0})})}var Re=function(){return Object(b.jsx)(u.a,{children:Object(b.jsxs)(K.c,{children:[Object(b.jsx)(K.a,{path:"/login",children:Object(b.jsx)(De,{})}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{}),Object(b.jsx)(K.a,{exact:!0,path:"/",children:Object(b.jsx)(z,{})}),Object(b.jsx)(K.a,{path:"/users",children:Object(b.jsx)($,{})}),Object(b.jsx)(K.a,{path:"/user/:userId",children:Object(b.jsx)(G,{})}),Object(b.jsx)(K.a,{path:"/newUser",children:Object(b.jsx)(H,{})}),Object(b.jsx)(K.a,{path:"/products",children:Object(b.jsx)(Ue,{})}),Object(b.jsx)(K.a,{path:"/product/:productId",children:Object(b.jsx)(ke,{})}),Object(b.jsx)(K.a,{path:"/newproduct",children:Object(b.jsx)(Ae,{})}),Object(b.jsx)(K.a,{path:"/contacts",children:Object(b.jsx)(Me,{})}),Object(b.jsx)(K.a,{path:"/contact/:contactId",children:Object(b.jsx)(_e,{})}),Object(b.jsx)(K.a,{path:"/orders",children:Object(b.jsx)(Je,{})}),Object(b.jsx)(K.a,{path:"/transactions",children:Object(b.jsx)(Be,{})})]})]})]})})},ze=s(51),Ke=s(84),Ve=s(278),Ye={key:"root",version:1,storage:s.n(Ve).a},$e=Object(ze.b)({user:ne,product:xe}),We=Object(Ke.g)(Ye,$e),Qe=Object(ee.a)({reducer:We,middleware:function(e){return e({serializableCheck:{ignoredActions:[Ke.a,Ke.f,Ke.b,Ke.c,Ke.d,Ke.e]}})}}),Xe=Object(Ke.h)(Qe),Ze=s(279);r.a.render(Object(b.jsx)(Y.a,{store:Qe,children:Object(b.jsx)(Ze.a,{loading:"null",persistor:Xe,children:Object(b.jsx)(Re,{})})}),document.getElementById("root"))}},[[492,1,2]]]);
//# sourceMappingURL=main.2575b2e8.chunk.js.map