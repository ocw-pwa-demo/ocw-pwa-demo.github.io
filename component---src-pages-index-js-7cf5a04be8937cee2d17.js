(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{289:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),c=t(281),l=t(282),s=t(284),i=t(110),o=t(148),u=t(312),d=t.n(u),m=t(313),p=t.n(m),f=t(314),E=t.n(f),g=t(292),v=t.n(g),w=function(){var e=o.a.useContainer(),a=e.setCourseTopic,t=e.setCourseFeature,c=e.setCourseLevel,l=Object(r.useCallback)(function(e){switch(e){case"lifelong-learner":a("All"),t("Any"),c("Graduate");break;case"educator":a("All"),t("Instructor Insights"),c("All");break;default:a("All"),t("Any"),c("Undergraduate")}}),s=Object(r.useCallback)(function(e){l(e.currentTarget.getAttribute("data-user")),Object(i.a)("discovery")});return n.a.createElement("div",{className:v.a.cardList},n.a.createElement("div",{className:v.a.card},n.a.createElement("img",{className:v.a.image,src:d.a,alt:"Lifelong Learner","data-user":"lifelong-learner",onClick:s}),n.a.createElement("h3",{className:v.a.title},"Lifelong Learner"),n.a.createElement("p",{className:v.a.description},"You are familiar with college coursework and interested in gaining additional knowledge.")),n.a.createElement("div",{className:v.a.card},n.a.createElement("img",{className:v.a.image,src:p.a,alt:"Educator","data-user":"educator",onClick:s}),n.a.createElement("h3",{className:v.a.title},"Educator"),n.a.createElement("p",{className:v.a.description},"You are an instructor interested in finding additional resources for you and your students.")),n.a.createElement("div",{className:v.a.card},n.a.createElement("img",{className:v.a.image,src:E.a,alt:"Student","data-user":"student",onClick:s}),n.a.createElement("h3",{className:v.a.title},"Student"),n.a.createElement("p",{className:v.a.description},"You are a student looking to supplement your coursework.")))},b=t(194),N=t(277),k=t.n(N),h=t(285),C=t(279),L=t(283),y=t.n(L),A=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:y.a.coursewareListLoading},n.a.createElement(C.a,{className:y.a.spinner})))};function j(){var e=function(e,a){a||(a=e.slice(0));return e.raw=a,e}(["\n  query($coursewareUid: ItemId) {\n    allCoursewares(\n      first: 100,\n      orderBy: [title_ASC],\n      filter: {\n        id: {eq: $coursewareUid},\n      }\n    ) {\n      id\n      title\n      courseLevel\n      trackingTitle\n      imageSrc\n      description\n      departmentNumber\n      masterCourseNumber\n    }\n  }\n"]);return j=function(){return e},e}var O=["1213239","1210619","1212633","1209197","1212665","1210545","1211040","1208928","1212540","1212499","1212066","1214047","1210901","1210826","1205081","1209952","1210952","1211480","1209309","1210692","1213846","1211780","1211454","1209750","1209632","1204149","1214160","1211391","1211718","1209799","1211640","1211287"],T=["1204324","1206282","1212323","1210150","1212540","1212066","1214047","1205206","1213348","1210692","1204688","1213551","1209632","1204149","1214160","1211391","1209799","1211640","1204993","1211287"],D=["1211688","1213164","1210295","1213868","1204324","1211527","1209985","1212589","1206007","1212419","1209359","1206282","1213497","1214079","1212323","1210150","1209143","1206380","1213268","1206926","1210386","1211821","1213718","1204809","1208966","1213588","1210212","1210753","1206842","1211199","1211238","1211119","1206604","1204851","1205206","1209058","1214122","1210246","1213348","1210428","1213927","1212364","1207309","1213368","1213806","1204176","1206079","1207007","1204688","1208858","1212978","1204729","1213907","1209844","1213551","1210351","1207114","1209514","1209227","1209391","1210992","1210487","1204993","1209918","1208698","1212098","1213442","1213633"],S=function(e){return e[Math.floor(Math.random()*e.length)]},x=k()(j()),I=function(e){var a;switch(e.user){case"lifelong-learner":a=S(O);break;case"educator":a=S(T);break;case"student":a=S(D);break;default:a="1204324"}var t=Object(b.a)(x,{variables:{coursewareUid:a}}),r=t.data.allCoursewares;return t.loading?n.a.createElement(A,null):n.a.createElement(h.a,{courseware:r[0],cardType:"condensed"})},U=(t(315),t(316)),W=t.n(U);a.default=function(){var e=Object(c.a)().siteMetadata;return n.a.createElement(s.a,null,n.a.createElement(l.a,{siteTitle:e.title,siteDescription:e.description}),n.a.createElement("div",{className:W.a.index},n.a.createElement("h3",null,"About OCW"),n.a.createElement("p",{className:v.a.ocwDescription},"Thousands of people utilize OCW to support their lifelong learning, career advancement, and instruction."),n.a.createElement("h3",null,"What type of OCW user are you?"),n.a.createElement(w,null),n.a.createElement("div",{className:v.a.cardList+" "+v.a.cardListBottom},n.a.createElement("div",null,n.a.createElement("p",{className:v.a.cardDescription},"Lifelong learners view..."),n.a.createElement(I,{user:"lifelong-learner"})),n.a.createElement("div",null,n.a.createElement("p",{className:v.a.cardDescription},"Educators view..."),n.a.createElement(I,{user:"educator"})),n.a.createElement("div",null,n.a.createElement("p",{className:v.a.cardDescription},"Students view..."),n.a.createElement(I,{user:"student"})))))}},312:function(e,a,t){e.exports=t.p+"static/lifelong-learner-4ccec736ee2497a233ee760276ab5aa2.jpg"},313:function(e,a,t){e.exports=t.p+"static/educator-44f4b69515e20854ef0ea2c702d509bb.jpg"},314:function(e,a,t){e.exports=t.p+"static/student-c8a6e23ded31926df5c249f56f237c17.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-7cf5a04be8937cee2d17.js.map