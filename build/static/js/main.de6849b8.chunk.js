(this["webpackJsonpwould-you-rather-project"]=this["webpackJsonpwould-you-rather-project"]||[]).push([[0],{159:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var s=n(0),o=n(41),r=n.n(o),a=(n(159),n(8)),c=n(63),i=n(64),u=n(78),j=n(76),d=n(12),b=n(11),l=n(191),h=n(142),O=n(192),x=n(2);var p=Object(d.g)(Object(b.b)((function(e){return{questions:e.questions,authedUser:e.authedUser,users:e.users}}))((function(e){var t=e.questions[e.id],n=e.users[t.author];return Object(x.jsxs)("div",{children:[Object(x.jsxs)(l.a,{children:[Object(x.jsxs)(l.a.Content,{children:[Object(x.jsx)(h.a,{floated:"right",size:"mini",src:n.avatarURL}),Object(x.jsxs)(l.a.Header,{children:[n.name," Asks"]}),Object(x.jsx)(l.a.Meta,{children:Object(x.jsx)("strong",{children:"Would You Rather"})}),Object(x.jsxs)(l.a.Description,{children:[t.optionOne.text,"..."]})]}),Object(x.jsx)(l.a.Content,{extra:!0,children:Object(x.jsx)("div",{className:"ui two buttons",children:Object(x.jsx)(O.a,{basic:!0,color:"green",onClick:function(n){n.preventDefault(),e.history.push("/questions/".concat(t.id))},children:"View Poll"})})})]}),Object(x.jsx)("br",{})]})}))),v=n(194),m=n(195),f=n(196),g=n(186);var w=Object(d.g)(Object(b.b)((function(e){return{questions:e.questions,authedUser:e.authedUser,users:e.users}}))((function(e){var t=e.questions[e.id],n=e.users[t.author];return Object(x.jsxs)("div",{children:[Object(x.jsxs)(l.a,{children:[Object(x.jsxs)(l.a.Content,{children:[Object(x.jsx)(h.a,{floated:"right",size:"mini",src:n.avatarURL}),Object(x.jsxs)(l.a.Header,{children:[n.name," Asks"]}),Object(x.jsx)(l.a.Meta,{children:Object(x.jsx)("strong",{children:"Would You Rather"})}),Object(x.jsxs)(l.a.Description,{children:[t.optionOne.text,"..."]})]}),Object(x.jsx)(l.a.Content,{extra:!0,children:Object(x.jsx)("div",{className:"ui two buttons",children:Object(x.jsx)(O.a,{basic:!0,color:"green",onClick:function(n){n.preventDefault(),e.history.push("/questions/".concat(t.id))},children:"View Poll"})})})]}),Object(x.jsx)("br",{})]})})));var q=Object(d.g)(Object(b.b)((function(e){return{questions:e.questions,authedUser:e.authedUser,users:e.users}}))((function(e){var t=e.questions[e.id],n=e.users[t.author];return Object(x.jsxs)("div",{children:[Object(x.jsxs)(l.a,{children:[Object(x.jsxs)(l.a.Content,{children:[Object(x.jsx)(h.a,{floated:"right",size:"mini",src:n.avatarURL}),Object(x.jsxs)(l.a.Header,{children:[n.name," Asks"]}),Object(x.jsx)(l.a.Meta,{children:Object(x.jsx)("strong",{children:"Would You Rather"})}),Object(x.jsxs)(l.a.Description,{children:[t.optionOne.text,"..."]})]}),Object(x.jsx)(l.a.Content,{extra:!0,children:Object(x.jsx)("div",{className:"ui two buttons",children:Object(x.jsx)(O.a,{basic:!0,color:"green",onClick:function(n){n.preventDefault(),e.history.push("/questions/".concat(t.id))},children:"View Poll"})})})]}),Object(x.jsx)("br",{})]})}))),y=function(){sessionStorage.clear()},T=function(){return!!sessionStorage.getItem("isAuthenticated")};var U=Object(b.b)((function(e){var t=e.users,n=e.questions,s=e.authedUser;if(!s)return y(),console.log("Hello world"),Object(x.jsx)(d.a,{to:"/"});var o=t[s],r=Object.keys(o.answers),a=Object.keys(n).filter((function(e){return!r.includes(e)}));return{questionId:Object.keys(n).sort((function(e,t){return n[t].timestamp-n[e].timestamp})),answeredQuestions:r.sort((function(e,t){return n[t].timestamp-n[e].timestamp})),unAnsweredQuestions:a.sort((function(e,t){return n[t].timestamp-n[e].timestamp})),authedUser:s}}))((function(e){var t=e.questionId,n=e.answeredQuestions,s=e.unAnsweredQuestions;return e.authedUser?(t.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(p,{id:e},e)},e)})),Object(x.jsx)("div",{children:Object(x.jsxs)(v.a,{children:[Object(x.jsxs)(m.a,{columns:2,relaxed:"very",children:[Object(x.jsxs)(m.a.Column,{children:[Object(x.jsx)(f.a,{as:"h1",children:"Un Answered Questions"}),s.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(q,{id:e},e)},e)}))]}),Object(x.jsxs)(m.a.Column,{children:[Object(x.jsx)(f.a,{as:"h1",children:"Answered Questions"}),n.map((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)(w,{id:e},e)},e)}))]})]}),Object(x.jsx)(g.a,{vertical:!0})]})})):(y(),console.log("Hello world"),Object(x.jsx)(d.a,{to:"/"}))})),k=(n(172),n(28)),C=n(21),S={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://pluralsight.imgix.net/author/lg/6f77d113-ea36-4592-814d-9d4acb32f231.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://res.cloudinary.com/practicaldev/image/fetch/s--XSU0DRVd--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/830/5ef86a35-5fce-4cb6-a2d6-7d452ed90b22.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://avatars.githubusercontent.com/u/810438?v=4",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},z={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function D(){return new Promise((function(e,t){setTimeout((function(){return e(Object(a.a)({},z))}),1e3)}))}function A(e){return new Promise((function(t,n){var s=e.author,o=function(e){var t=e.optionOneText,n=e.optionTwoText,s=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:s,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){z=Object(a.a)(Object(a.a)({},z),{},Object(C.a)({},o.id,o)),S=Object(a.a)(Object(a.a)({},S),{},Object(C.a)({},s,Object(a.a)(Object(a.a)({},S[s]),{},{questions:S[s].questions.concat([o.id])}))),t(o)}),1e3)}))}var R="ADD_QUESTION",L="ANSWER_QUESTION";function I(e){var t=e.optionOneText,n=e.optionTwoText,s=e.author;return function(e){return A({optionOneText:t,optionTwoText:n,author:s}).then((function(t){e({type:R,question:t})}))}}function Q(e){var t=e.authedUser,n=e.qid,s=e.answer;return function(e){return function(e){var t=e.authedUser,n=e.qid,s=e.answer;return new Promise((function(e,o){setTimeout((function(){S=Object(a.a)(Object(a.a)({},S),{},Object(C.a)({},t,Object(a.a)(Object(a.a)({},S[t]),{},{answers:Object(a.a)(Object(a.a)({},S[t].answers),{},Object(C.a)({},n,s))}))),z=Object(a.a)(Object(a.a)({},z),{},Object(C.a)({},n,Object(a.a)(Object(a.a)({},z[n]),{},Object(C.a)({},s,Object(a.a)(Object(a.a)({},z[n][s]),{},{votes:z[n][s].votes.concat([t])}))))),e()}),500)}))}({authedUser:t,qid:n,answer:s}).then((function(){e(function(e){var t=e.authedUser,n=e.qid,s=e.answer;return{type:L,authedUser:t,qid:n,answer:s}}({authedUser:t,qid:n,answer:s}))}))}}var N=n(190);var _=Object(b.b)((function(e,t){var n=e.questions,s=e.authedUser;return e.users,{authedUser:s,question:n[t.id]}}))((function(e){var t=Object(s.useState)(""),n=Object(k.a)(t,2),o=n[0],r=n[1],a=Object(s.useState)(""),c=Object(k.a)(a,2),i=c[0],u=c[1],j=Object(s.useState)(!1),b=Object(k.a)(j,2),l=b[0],h=b[1];return!0===l?Object(x.jsx)(d.a,{to:"/dashboard"}):Object(x.jsx)("div",{children:Object(x.jsxs)(v.a,{placeholder:!0,children:[Object(x.jsx)(f.a,{as:"h1",textAlign:"center",children:"Create New Question"}),Object(x.jsxs)(N.a,{children:[Object(x.jsxs)(N.a.Field,{width:"5",children:[Object(x.jsx)("label",{children:"Would You Rather"}),Object(x.jsx)("input",{placeholder:"Enter Option One Text here",onChange:function(e){e.preventDefault();var t=e.target.value;r(t)}})]}),Object(x.jsxs)(N.a.Field,{width:"5",children:[Object(x.jsx)("label",{children:"Or"}),Object(x.jsx)("input",{placeholder:"Enter Option Two Text here",onChange:function(e){e.preventDefault();var t=e.target.value;u(t)}})]}),Object(x.jsx)(O.a,{primary:!0,type:"submit",onClick:function(t){t.preventDefault();var n=e.authedUser,s={optionOneText:o,optionTwoText:i,author:n};e.dispatch(I(s)),r(""),u(""),h(!0)},children:"Submit"})]})]})})}));var E=Object(b.b)((function(e){var t=e.users;return{users:Object.values(t)}}))((function(e){var t=e.users.map((function(e){return{questions:e.questions.length,answers:Object.values(e.answers).length,totalScore:e.questions.length+Object.values(e.answers).length,user:e}})).sort((function(e,t){return t.totalScore-e.totalScore}));return Object(x.jsx)("div",{children:Object(x.jsx)("ul",{children:t.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)(l.a,{children:[Object(x.jsx)(h.a,{src:e.user.avatarURL,wrapped:!0,ui:!1}),Object(x.jsxs)(l.a.Content,{children:[Object(x.jsx)(l.a.Header,{children:e.user.name}),Object(x.jsx)(l.a.Description,{children:Object(x.jsxs)("span",{className:"",children:["Question answered : ",e.answers]})}),Object(x.jsxs)(l.a.Description,{children:["Created Questions : ",e.questions]})]}),Object(x.jsxs)(l.a.Content,{extra:!0,children:["Score : ",e.totalScore]})]}),Object(x.jsx)("br",{})]},e.user.id)}))})})})),P=n(188),H="SET_AUTHED_USER";function M(e){return{type:H,id:e}}var V=Object(d.g)(Object(b.b)((function(e){var t=e.users;return{users:Object.values(t)}}))((function(e){var t=Object(b.c)(),n=Object(s.useState)(""),o=Object(k.a)(n,2),r=o[0],a=o[1],c=Object(s.useState)(!1),i=Object(k.a)(c,2),u=i[0],j=i[1],l=e.users,h=(e.location.state||{from:{pathname:"/dashboard"}}).from;if(console.log(h),h.pathname.includes(["/dashboard","/leaderboard","add"])||d.a,console.log(h),console.log(h),!0===u)return Object(x.jsx)(d.a,{to:h});var p=l.map((function(e){return{key:e.id,text:e.name,value:e.id,image:{avatar:!0,src:e.avatarURL}}}));return Object(x.jsx)("div",{children:Object(x.jsxs)(v.a,{placeholder:!0,children:[Object(x.jsx)(f.a,{as:"h1",textAlign:"center",children:"Login"}),Object(x.jsx)(P.a,{onChange:function(e,t){e.preventDefault(),a(t.value)},inline:!0,options:p,defaultValue:p.value}),"Please, Choose User",Object(x.jsx)(O.a,{disabled:""===r,primary:!0,onClick:function(){""!==r&&t(M(r)),sessionStorage.setItem("isAuthenticated",!0),j(!0)},children:"Sign in"})]})})}))),W=n(85),F=n(187),Y=n(16);var J=Object(d.g)(Object(b.b)((function(e){return{questions:e.questions,authedUser:e.authedUser,users:e.users}}))((function(e){var t=Object(s.useState)(!1),n=Object(k.a)(t,2),o=n[0],r=n[1],a=Object(s.useState)(""),c=Object(k.a)(a,2),i=c[0],u=c[1],j=e.match.params.id;if(!Object.keys(e.questions).includes(j))return y(),Object(x.jsx)(d.a,{to:"/"});var b=e.questions[j],p=e.users[b.author],v=e.authedUser,m=function(e,t){u(t.value),console.log(i)};return Object(x.jsxs)("div",{style:{marginTop:-20},children:["Return to Home ",Object(x.jsx)(Y.b,{to:"/dashboard",children:Object(x.jsx)(W.a,{name:"log out",size:"big",link:!0})}),Object(x.jsx)(f.a,{as:"h1",children:"Question"}),Object(x.jsxs)(l.a,{children:[Object(x.jsxs)(l.a.Content,{children:[Object(x.jsx)(h.a,{floated:"right",size:"mini",src:p.avatarURL}),Object(x.jsxs)(l.a.Header,{children:[p.name," Asks"]}),Object(x.jsx)(l.a.Meta,{children:Object(x.jsx)("strong",{children:"Would You Rather"})}),!0===o||b.optionOne.votes.includes(v)||b.optionTwo.votes.includes(v)?null:Object(x.jsx)(N.a.Field,{children:Object(x.jsx)(F.a,{label:b.optionOne.text,name:"radioGroup",value:"optionOne",checked:"optionOne"===i,onChange:m})}),!0===o||b.optionOne.votes.includes(v)||b.optionTwo.votes.includes(v)?"Votes : "+b.optionOne.votes.length+" Out of "+Object.keys(e.users).length+" Votes\n||  ":null,!0===o||b.optionTwo.votes.includes(v)||b.optionOne.votes.includes(v)?null:Object(x.jsx)(N.a.Field,{children:Object(x.jsx)(F.a,{label:b.optionTwo.text,name:"radioGroup",value:"optionTwo",checked:"optionTwo"===i,onChange:m})}),!0===o||b.optionTwo.votes.includes(v)||b.optionOne.votes.includes(v)?"Votes : "+b.optionTwo.votes.length+" Out of "+Object.keys(e.users).length+" Votes ":null]}),Object(x.jsx)(l.a.Content,{extra:!0,children:Object(x.jsx)("div",{className:"ui two buttons",children:Object(x.jsx)(O.a,{disabled:""===i,basic:!0,color:"green",onClick:function(t){t.preventDefault(),e.dispatch(Q({authedUser:v,qid:b.id,answer:i})),r(!0)},children:"Submit"})})})]}),Object(x.jsx)("br",{})]})}))),G=n(189);var $=Object(d.g)(Object(b.b)((function(e){return{users:e.users,authedUser:e.authedUser}}))((function(e){var t=Object(s.useState)("Dashboard"),n=Object(k.a)(t,2),o=n[0],r=n[1],a=function(e,t){var n=t.name;r(n)};return Object(x.jsxs)(G.a,{pointing:!0,secondary:!0,children:[Object(x.jsx)(Y.b,{to:"/dashboard",children:Object(x.jsx)(G.a.Item,{name:"Dashboard",active:"Dashboard"===o,onClick:a})}),Object(x.jsx)(Y.b,{to:"/add",children:Object(x.jsx)(G.a.Item,{name:"New Question",active:"New Question"===o,onClick:a})}),Object(x.jsx)(Y.b,{to:"/leaderboard",children:Object(x.jsx)(G.a.Item,{name:"Leaderboard",active:"Leaderboard"===o,onClick:a})}),Object(x.jsxs)(G.a.Menu,{position:"right",children:[Object(x.jsx)(G.a.Item,{name:e.authedUser?"Welcome back "+e.users[e.authedUser].name:"Login, Please",active:"logout"===o,onClick:a}),T()&&Object(x.jsx)(W.a,{name:"log out",size:"big",link:!0,onClick:function(){return y(),e.dispatch(M(null)),console.log(e),Object(x.jsx)(d.a,{to:{pathname:"/",state:{from:e.location}}})}})]})]})}))),B=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:["Return to Dashboard ",Object(x.jsx)(Y.b,{to:"/dashboard",children:Object(x.jsx)(W.a,{name:"log out",size:"big",link:!0})}),Object(x.jsx)("h1",{children:"Page Not Found!"}),Object(x.jsx)("p",{children:"Sorry the page could not be found."})]})}}]),n}(s.Component),X=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.setAuthedUser(null)}},{key:"render",value:function(){return Object(x.jsx)("div",{children:"Logging out..."})}}]),n}(s.Component),K=(Object(b.b)(null,{setAuthedUser:M})(X),function(e){var t=e.component,n=e.exact,s=e.path;return Object(x.jsx)(d.b,{exact:n,path:s,render:function(e){return T()?Object(x.jsx)(t,Object(a.a)({},e)):Object(x.jsx)(d.a,{to:{pathname:"/",state:{from:e.location}}})}})}),Z=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){this.props.authedUser;return Object(x.jsxs)(s.Fragment,{children:[Object(x.jsx)($,{}),Object(x.jsx)("div",{style:{marginTop:"2em"},children:Object(x.jsxs)(d.d,{children:[Object(x.jsx)(d.b,{path:"/",exact:!0,render:function(e){return Object(x.jsx)(V,Object(a.a)({},e))}}),Object(x.jsx)(K,{path:"/404",component:B}),Object(x.jsx)(K,{path:"/dashboard",component:U}),Object(x.jsx)(K,{path:"/add",component:_}),Object(x.jsx)(K,{path:"/leaderboard",component:E}),Object(x.jsx)(K,{path:"/questions/:id",component:J}),Object(x.jsx)(d.b,{path:"/",render:function(){return y(),Object(x.jsx)(d.a,{to:{pathname:"/",state:{from:{pathname:"/404"}}}})}})]})})]})}}]),n}(s.Component),ee=Object(d.g)(Object(b.b)((function(e){return{authedUser:e.authedUser}}))(Z)),te=n(74),ne=n(141),se=function(e){return function(t){return function(n){console.group(n.type),console.log("The action: ",n);var s=t(n);return console.log("The new state: ",e.getState()),console.groupEnd(),s}}},oe=Object(te.a)(ne.a,se),re=n(112),ae="INITIAL_DATA";function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(a.a)(Object(a.a)({},e),{},{questions:[].concat(Object(re.a)(e.questions),[t.question.id])});default:return e}}var ie=Object(te.b)({questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return t.questions;case R:return Object(a.a)(Object(a.a)({},e),{},Object(C.a)({},t.question.id,t.question));case L:var n=t.qid,s=t.answer,o=t.authedUser,r=e[n][s],c=Object(C.a)({},n,Object(a.a)(Object(a.a)(Object(a.a)({},e[n]),r),{},{votes:Object(re.a)(r.votes.concat(o))}));return Object(a.a)(Object(a.a)({},e),c);default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return t.users;case R:return Object(a.a)(Object(a.a)({},e),{},Object(C.a)({},t.question.author,ce(e[t.question.author],t)));case L:var n=t.qid,s=t.answer,o=t.authedUser,r=Object(C.a)({},o,Object(a.a)(Object(a.a)({},e[o]),{},{answers:Object(a.a)(Object(a.a)({},e[o].answers),{},Object(C.a)({},n,s))}));return Object(a.a)(Object(a.a)({},e),r);default:return e}},authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return t.id;default:return e}}}),ue=Object(te.c)(ie,oe);ue.dispatch((function(e){return Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(a.a)({},S))}),1e3)})),D()]).then((function(t){var n=Object(k.a)(t,2),s=n[0],o=n[1];e(function(e){var t=e.users,n=e.questions;return{type:ae,users:t,questions:n}}({users:s,questions:o}))}))})),r.a.render(Object(x.jsx)(Y.a,{children:Object(x.jsx)(b.a,{store:ue,children:Object(x.jsx)(ee,{})})}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.de6849b8.chunk.js.map