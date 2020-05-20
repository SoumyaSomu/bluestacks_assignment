(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{171:function(e,a,t){},172:function(e,a,t){},176:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(29),l=t.n(r),s=(t(90),t(45)),i=t.n(s),o=t(28),m=t.n(o),u=t(54),d=t(30),g=t(31),p=t(84),f=t(74),h=t(27),E=t(83),b=t(7),v=t.n(b),N=t(32),O=t(46),C=t.n(O),w=(t(110),function(e){var a=v()().startOf("day"),t=v.a.duration(v()(e.item.createdOn,"YYYY-MM-DD").diff(a)).asDays(),n=Math.trunc(t);return c.a.createElement("tr",null,c.a.createElement("td",{className:"display-grid"},c.a.createElement("span",{className:"fw-500 fs-14 heading-color"},v()(e.item.createdOn).format("MMM YYYY,Do")),c.a.createElement("span",{className:"fs-12 fs-italic sub-heading-color"},t>0&&"".concat(n," days ahead"),t<0&&"".concat(-1*n," days ago"),0===t&&"live")),c.a.createElement("td",null,c.a.createElement("div",{className:"display-flex"},c.a.createElement("img",{className:"games-image",src:e.item.image_url}),c.a.createElement("span",{className:"display-grid pl-18"},c.a.createElement("span",{className:"fw-500 fs-14 heading-color"},e.item.name),c.a.createElement("span",{className:"fs-12 fs-italic sub-heading-color"},e.item.region)))),c.a.createElement("td",null,c.a.createElement("div",null,c.a.createElement("img",{className:"pricing-image",src:"".concat("/bluestacks_assignment","/assets/Price.png")}),c.a.createElement(N.a,{style:{width:"20%"},trigger:c.a.createElement("button",{className:"ml-12 heading-color fs-12"}," View Pricing"),position:"right center",modal:!0},(function(a){return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("img",{className:"popup-image",src:e.item.image_url}),c.a.createElement("div",{className:"position-relative ml-28percent"},c.a.createElement("p",{className:"fw-500 fs-14 heading-color position-absolute bottom-0 left-8"},e.item.name),c.a.createElement("span",{className:"fs-12 fs-italic sub-heading-color position-absolute bottom-0 left-8"},e.item.region))),c.a.createElement("h5",{className:"mb-10 mt-24 heading-color"},"Pricing"),e.item.pricing.map((function(e){return c.a.createElement("div",{className:"mb-20"},c.a.createElement("span",{className:"sub-heading-color"},e.name),c.a.createElement("span",{className:"heading-color fw-500 mr-20 float-right"},"$ ",e.price))})),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"button button-primary",onClick:function(){a()}},"Close")))})))),c.a.createElement("td",null,c.a.createElement("div",{className:"display-flex"},c.a.createElement("div",null,c.a.createElement("img",{className:"actions-image",src:"".concat("/bluestacks_assignment","/assets/file.png")}),c.a.createElement("span",{className:"ml-10 heading-color fs-12"},"CSV")),c.a.createElement("div",{className:"ml-20"},c.a.createElement("img",{className:"actions-image ml-18",src:"".concat("/bluestacks_assignment","/assets/statistics-report.png")}),c.a.createElement("span",{className:"ml-10 heading-color fs-12"},"Report")),c.a.createElement("div",null,c.a.createElement("img",{className:"actions-image ml-18",src:"".concat("/bluestacks_assignment","/assets/calendar.png")}),c.a.createElement(N.a,{style:{width:"20%"},trigger:c.a.createElement("button",{className:"ml-12 heading-color fs-12"},"Schedule Again"),position:"right center",modal:!0},(function(a){return c.a.createElement("div",null,c.a.createElement("h6",{className:"text-center heading-color reshedule-campaign"},"Reschedule Campaign"),c.a.createElement("div",{className:"text-center"},c.a.createElement(C.a,{selected:e.editing?Date.parse(e.newCreatedOn):Date.parse(e.item.createdOn),onChange:e.handleChange,inline:!0})),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{className:"button button-primary save-schedule-date",onClick:e.editCampaign,onSelect:function(){a()}},"Save")))}))))))}),y=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(f.a)(a).call(this,e))).state={campaigns:[],filteredCampaigns:[],newCreatedOn:"",editing:!1,current:v()().startOf("day")},t.apiUrl="https://api.mocki.io/v1/7db13b8a",t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.editCampaign=t.editCampaign.bind(Object(h.a)(t)),t}return Object(E.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=Object(u.a)(m.a.mark((function e(){var a,t,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("campaigns"),!(t=JSON.parse(a))){e.next=6;break}this.setState((function(){return{campaigns:t}})),e.next=12;break;case 6:return e.next=8,i.a.get("".concat(this.apiUrl,"/campaigns"));case 8:n=e.sent,this.setState({campaigns:n.data.data}),c=JSON.stringify(n.data.data),localStorage.setItem("campaigns",c);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(){var e=Object(u.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("date",a),this.setState({newCreatedOn:a,editing:!0}),console.log(this.state.newCreatedOn);case 3:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"editCampaign",value:function(e){var a=this,t=localStorage.getItem("campaigns"),n=JSON.parse(t);n.forEach((function(t,n){t.id===e&&(t.createdOn=a.state.newCreatedOn)})),this.setState({campaigns:n,editing:!1,newCreatedOn:""});var c=JSON.stringify(n);localStorage.setItem("campaigns",c),alert("Campaign has been rescheduled on the selected date.")}},{key:"render",value:function(){var e=this;return"upcoming"===this.props.filterOption&&(this.state.filteredCampaigns=this.state.campaigns.filter((function(a){var t=v.a.duration(v()(a.createdOn,"YYYY-MM-DD").diff(e.state.current)).asDays();return Math.trunc(t)>0}))),"live"===this.props.filterOption&&(this.state.filteredCampaigns=this.state.campaigns.filter((function(a){var t=v.a.duration(v()(a.createdOn,"YYYY-MM-DD").diff(e.state.current)).asDays();return 0===Math.trunc(t)}))),"past"===this.props.filterOption&&(this.state.filteredCampaigns=this.state.campaigns.filter((function(a){var t=v.a.duration(v()(a.createdOn,"YYYY-MM-DD").diff(e.state.current)).asDays();return Math.trunc(t)<0}))),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"DATE"),c.a.createElement("th",null,"CAMPAIGN"),c.a.createElement("th",null,"VIEW"),c.a.createElement("th",null,"ACTIONS"))),c.a.createElement("tbody",null,this.state.filteredCampaigns.map((function(a,t){return c.a.createElement(w,{key:a.id,item:a,handleChange:e.handleChange,editing:e.state.editing,newCreatedOn:e.state.newCreatedOn,editCampaign:function(){e.editCampaign(a.id)}})}))))}}]),a}(n.Component),k=t(16),S=(t(170),t(59));t(171);function Y(){var e=Object(n.useState)(!1),a=Object(S.a)(e,2),t=(a[0],a[1],Object(n.useState)(!1)),r=Object(S.a)(t,2),l=(r[0],r[1]);Object(n.useEffect)((function(){var e=window.matchMedia("(max-width: 700px)");return e.addListener(s),s(e),function(){e.removeListener(s)}}),[]);var s=function(e){e.matches?l(!0):l(!1)};return c.a.createElement("header",{className:"Header"},c.a.createElement("img",{src:"assets/bluestacks.png",className:"Logo",alt:"logo"}))}t(172);var M=t(181),x=function(){var e=Object(M.a)(),a=e.t,t=e.i18n;function n(e){t.changeLanguage(e)}return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"lang-div"},c.a.createElement("label",{className:"lang-label"},"Select Language :"),c.a.createElement("button",{style:{marginTop:"10px",marginRight:"15px",color:"#069",cursor:"pointer"},onClick:function(){return n("en")}},"English"),c.a.createElement("button",{style:{color:"#069",cursor:"pointer"},onClick:function(){return n("german")}},"German")),c.a.createElement(Y,null),c.a.createElement("div",{className:"container overflowx-auto"},c.a.createElement(k.d,{defaultIndex:1,onSelect:function(e){return console.log(e)}},c.a.createElement("h4",{className:"table-heading"},"Manage Campaigns"),c.a.createElement(k.b,null,c.a.createElement(k.a,null,a("tabs.1")),c.a.createElement(k.a,null,a("tabs.2")),c.a.createElement(k.a,null,a("tabs.3"))),c.a.createElement(k.c,null,c.a.createElement(y,{filterOption:"upcoming"})),c.a.createElement(k.c,null,c.a.createElement(y,{filterOption:"live"})),c.a.createElement(k.c,null,c.a.createElement(y,{filterOption:"past"})))))},D=t(58),j=t(23),I=t(82),L=t(81);D.a.use(I.a).use(L.a).use(j.f).init({fallbackLng:"en",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json",crossDomain:!1},debug:!0,whiteList:["en","german"],interpolation:{escapeValue:!1}});D.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(n.Suspense,{fallback:c.a.createElement("div",null,"Loading~~~~~")},c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,a,t){e.exports=t(176)},90:function(e,a,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.c706c1c9.chunk.js.map