(this.webpackJsonpcalendar_hackaton=this.webpackJsonpcalendar_hackaton||[]).push([[0],{15:function(e,t,n){e.exports=n(26)},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);for(var a=n(0),r=n.n(a),l=n(6),c=n.n(l),u=n(1),o=(n(25),n(5)),i=n.n(o),m=n(14),s=n(3),E=n(7),_=new Date,f=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=["January","February","March","April","May","June","July","August","September","October","November","December"],p=[],b=1800;b<=_.getFullYear()+100;b+=1)p.push(b);var h=[].concat(p),v=function(e){return e.year},y=function(e){return e.month},k=function(e){return e.day},S=function(e){return e.week},g=function(e){return e.events},N=function(e){return e.isShownEventForm},w=function(e){return e.eventSelectorValue},O=function(e){return{type:"SET_YEAR",year:e}},T=function(e){return{type:"SET_MONTH",month:e}},M=function(e){return{type:"SET_DAY",day:e}},C=function(e){return{type:"SET_WEEK",week:e}},F=function(e){return{type:"SET_IS_SHOWN_EVENT_FORM",isShown:e}},V={year:_.getFullYear(),month:"",day:"",week:"",events:[],isShownEventForm:!1,eventSelectorValue:""},j=Object(E.b)((function(e,t){switch(t.type){case"SET_YEAR":return Object(s.a)({},e,{year:t.year});case"SET_MONTH":return Object(s.a)({},e,{month:""===t.month?"":+t.month});case"SET_DAY":return Object(s.a)({},e,{day:t.day});case"SET_WEEK":return Object(s.a)({},e,{week:""===t.week?"":+t.week});case"SET_EVENTS":return Object(s.a)({},e,{events:[].concat(Object(m.a)(e.events),[{id:t.date,title:t.title,mark:t.mark}])});case"SET_IS_SHOWN_EVENT_FORM":return Object(s.a)({},e,{isShownEventForm:t.isShown});case"SET_EVENT_SELECTOR_VALUE":return Object(s.a)({},e,{eventSelectorValue:t.selector});default:return e}}),V),D=Object(u.b)((function(e){return{year:v(e),currentMonthOfYear:y(e),day:k(e),week:S(e),isShownEventForm:N(e),events:g(e),eventSelectorValue:w(e)}}),{setIsShownEventForm:F,setDay:M,setMonth:T})((function(e){for(var t=e.month,n=e.year,a=e.week,l=e.setDay,c=e.setIsShownEventForm,u=e.events,o=e.eventSelectorValue,m=e.setMonth,s=new Date(n,t),E=s.getDay(),_=[],p=0;p<E;p+=1)_.push("");for(var b=s.getMonth(),h=d[b],v=[],y=s,k=1;k<=31;k+=1)y.getMonth()===t&&v.push(k),y.setDate(y.getDate()+1);var S=function(e,t){m(t),l(e),c(!0)},g=function(e){return new Date(n,t,e).toString()};return r.a.createElement("table",{className:"table"},r.a.createElement("caption",{className:"table__caption"},h),r.a.createElement("thead",null,r.a.createElement("tr",{className:"table__caption--days"},f.map((function(e){return r.a.createElement("th",null,e)})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,(0===a||""===a)&&_.map((function(e){return r.a.createElement("td",{className:"table__td table__td--empty"},e)})),(0===a||""===a)&&v.slice(0,7-_.length).map((function(e){return r.a.createElement("td",{className:"table__td",onClick:function(){return S(e,t)}},r.a.createElement("div",{className:"wrapper__td"},e),r.a.createElement("ul",null,u.find((function(t){return t.id===g(e)}))&&u.filter((function(t){return t.id===g(e&&t.mark.includes(o))})).map((function(e){return r.a.createElement("li",{className:i()("table__li",{"table__li--necessary":"necessary"===e.mark},{"table__li--important":"important"===e.mark},{"table__li--meeting ":"meeting"===e.mark})},e.title)}))))}))),r.a.createElement("tr",null,(1===a||""===a)&&v.slice(7-_.length,14-_.length).map((function(e){return r.a.createElement("td",{className:"table__td",onClick:function(){return S(e,t)}},r.a.createElement("div",{className:"wrapper__td"},e),r.a.createElement("ul",null,u.find((function(t){return t.id===g(e)}))&&u.filter((function(t){return t.id===g(e)&&t.mark.includes(o)})).map((function(e){return r.a.createElement("li",{className:i()("table__li",{"table__li--necessary":"necessary"===e.mark},{"table__li--important":"important"===e.mark},{"table__li--meeting ":"meeting"===e.mark})},e.title)}))))}))),r.a.createElement("tr",null,(2===a||""===a)&&v.slice(14-_.length,21-_.length).map((function(e){return r.a.createElement("td",{className:"table__td",onClick:function(){return S(e,t)}},r.a.createElement("div",{className:"wrapper__td"},e),r.a.createElement("ul",null,u.find((function(t){return t.id===g(e)}))&&u.filter((function(t){return t.id===g(e)&&t.mark.includes(o)})).map((function(e){return r.a.createElement("li",{className:i()("table__li",{"table__li--necessary":"necessary"===e.mark},{"table__li--important":"important"===e.mark},{"table__li--meeting ":"meeting"===e.mark})},e.title)}))))}))),r.a.createElement("tr",null,(3===a||""===a)&&v.slice(21-_.length,28-_.length).map((function(e){return r.a.createElement("td",{className:"table__td",onClick:function(){return S(e,t)}},r.a.createElement("div",{className:"wrapper__td"},e),r.a.createElement("ul",null,u.find((function(t){return t.id===g(e)}))&&u.filter((function(t){return t.id===g(e)&&t.mark.includes(o)})).map((function(e){return r.a.createElement("li",{className:i()("table__li",{"table__li--necessary":"necessary"===e.mark},{"table__li--important":"important"===e.mark},{"table__li--meeting ":"meeting"===e.mark})},e.title)}))))}))),r.a.createElement("tr",null,(4===a||""===a)&&v.slice(28-_.length,35-_.length).map((function(e){return r.a.createElement("td",{className:"table__td",onClick:function(){return S(e,t)}},r.a.createElement("div",{className:"wrapper__td"},e),r.a.createElement("ul",null,u.find((function(t){return t.id===g(e)}))&&u.filter((function(t){return t.id===g(e)&&t.mark.includes(o)})).map((function(e){return r.a.createElement("li",{className:i()("table__li",{"table__li--necessary":"necessary"===e.mark},{"table__li--important":"important"===e.mark},{"table__li--meeting ":"meeting"===e.mark})},e.title)}))))})))))})),Y=function(){return[0,1,2,3,4,5,6,7,8,9,10,11].map((function(e){return r.a.createElement(D,{month:e})}))},W=Object(u.b)((function(e){return{year:v(e),month:y(e),day:k(e),week:S(e),eventSelectorValue:w(e)}}),{setYear:O,setMonth:T,setDay:M,setWeek:C,setEventSelectorValue:function(e){return{type:"SET_EVENT_SELECTOR_VALUE",selector:e}}})((function(e){var t=e.year,n=e.month,a=e.week,l=e.eventSelectorValue,c={year:e.setYear,month:e.setMonth,day:e.setDay,week:e.setWeek,eventSelectorValue:e.setEventSelectorValue},u=function(e,t){var n=e.target.value;c[t](n)};return r.a.createElement("header",{className:"header"},r.a.createElement("select",{className:"header__select",value:t,onChange:function(e){return u(e,"year")},required:!0},r.a.createElement("option",{value:""},"select year"),h.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement("select",{className:"header__select",value:n,onChange:function(e){return u(e,"month")},required:!0},r.a.createElement("option",{value:""},"all months"),d.map((function(e,t){return r.a.createElement("option",{value:t,key:e},e)}))),r.a.createElement("select",{className:"header__select",value:a,onChange:function(e){return u(e,"week")},required:!0},r.a.createElement("option",{value:""},"all weeks"),[0,1,2,3,4].map((function(e){return r.a.createElement("option",{value:e,key:e},e+1)}))),"\u200b",r.a.createElement("select",{className:"header__select",value:l,onChange:function(e){return u(e,"eventSelectorValue")},required:!0},r.a.createElement("option",{value:""},"all"),["necessary","important","meeting"].map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))))})),A=n(11),q=Object(u.b)((function(e){return{year:v(e),month:y(e),day:k(e),events:g(e)}}),{setEvents:function(e,t,n){return{type:"SET_EVENTS",date:e,title:t,mark:n}},setIsShownEventForm:F})((function(e){var t=e.year,n=e.month,l=e.day,c=e.setEvents,u=e.setIsShownEventForm,o=Object(a.useState)(""),i=Object(A.a)(o,2),m=i[0],s=i[1],E=Object(a.useState)(""),_=Object(A.a)(E,2),f=_[0],d=_[1],p=function(e){var t=e.target.value;d(t)};return r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=new Date(t,n,l);c(a.toString(),m,f),u(!1),s(""),d("")},className:"form"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:m,placeholder:"Enter event title",onChange:function(e){var t=e.target.value;s(t)},required:!0})),r.a.createElement("div",{className:"form__radio"},r.a.createElement("input",{type:"radio",name:"mark",value:"necessary",id:"necessary",required:""===f,onChange:function(e){return p(e)}}),r.a.createElement("label",{htmlFor:"necessary"},"Necessary"),r.a.createElement("input",{type:"radio",name:"mark",value:"important",id:"important",required:""===f,onChange:function(e){return p(e)}}),r.a.createElement("label",{htmlFor:"important"},"Important"),r.a.createElement("input",{type:"radio",name:"mark",value:"meeting",id:"meeting",required:""===f,onChange:function(e){return p(e)}}),r.a.createElement("label",{htmlFor:"meeting"},"Meeting")),r.a.createElement("button",{className:"form__back",type:"button",onClick:function(){s(""),d(""),u(!1)}},"Go back"),r.a.createElement("button",{className:"form__add",type:"submit"},"Add event")))})),x={setMonth:T,setYear:O,setWeek:C},I=Object(u.b)((function(e){return{year:v(e),month:y(e),week:S(e),setMonth:y(e),setYear:v(e),setWeek:S(e),isShownEventForm:N(e)}}),x)((function(e){var t=e.year,n=e.month,a=e.week,l=e.setMonth,c=e.setYear,u=e.setWeek,o=e.isShownEventForm,i=function(e){var a=new Date(t,n+1),r=new Date(t,n-1),u=-1===e?r:a;c(u.getFullYear()),l(u.getMonth())},m=function(e){c(1===e?t+1:t-1)},s=function(e){u(1===e?4===a?0:a+1:0===a?4:a-1)};return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(q,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"buttons__prevYear",type:"button",onClick:function(){return m(-1)},disabled:""===t},"prevYear"),""!==t&&(n||0===n)&&r.a.createElement("button",{className:"buttons__prevMonth",type:"button",onClick:function(){return i(-1)}},"prevMonth"),""!==t&&(a||0===a)&&r.a.createElement("button",{className:"buttons__prevWeek",type:"button",onClick:function(){return s(-1)}},"prevWeek"),""!==t&&(a||0===a)&&r.a.createElement("button",{className:"buttons__nextWeek",type:"button",onClick:function(){return s(1)}},"nextWeek"),""!==t&&(n||0===n)&&r.a.createElement("button",{className:"buttons__nextMonth",type:"button",onClick:function(){return i(1)}},"nextMonth"),r.a.createElement("button",{className:"buttons__nextYear",type:"button",onClick:function(){return m(1)},disabled:""===t},"nextYear")),""!==t&&""===n&&r.a.createElement("div",{className:"App"},r.a.createElement(Y,null)),""!==t&&(n||0===n)&&r.a.createElement(D,{month:n})))})),R=document.getElementById("root");c.a.render(r.a.createElement(u.a,{store:j},r.a.createElement(I,null)),R)}},[[15,1,2]]]);
//# sourceMappingURL=main.9e423698.chunk.js.map