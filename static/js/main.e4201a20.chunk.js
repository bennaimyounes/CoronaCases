(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(2),c=t.n(r),i=(t(12),t(3)),s=t(4),l=t(6),u=t(5),d=function(e){var n=e.flag,t=e.country,a=e.cases,r=e.todayCases,c=e.deaths,i=e.todayDeaths,s=e.recovered,l=e.todayRecovered;return o.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},o.a.createElement("img",{style:{width:"250px",height:"167px"},alt:"robots",src:"".concat(n)}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,"Number of Cases :",a),o.a.createElement("p",null,"Today Cases :",r),o.a.createElement("p",null,"Number of Deaths :",c),o.a.createElement("p",null,"Today Deaths :",i),o.a.createElement("p",null,"Number of Recovered: ",s),o.a.createElement("p",null,"Today Recovered: ",l)))},h=function(e){var n=e.corona;return o.a.createElement("div",null,n.map((function(e,t){return o.a.createElement(d,{key:t,flag:n[t].countryInfo.flag,country:n[t].country,cases:n[t].cases,todayCases:n[t].todayCases,deaths:n[t].deaths,todayDeaths:n[t].todayDeaths,recovered:n[t].recovered,todayRecovered:n[t].todayRecovered})})))},f=function(e){e.searchfield;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search countries",onChange:n}))},m=function(e){return o.a.createElement("div",null,e.children)},v=(t(13),function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={corona:[],searchfield:""},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://corona.lmao.ninja/v3/covid-19/countries").then((function(e){return e.json()})).then((function(n){e.setState({corona:n})}))}},{key:"render",value:function(){var e=this.state,n=e.corona,t=e.searchfield,a=n.filter((function(e){return e.country.toLowerCase().includes(t.toLowerCase())}));return n.length?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"Corona Cases"),o.a.createElement(f,{searchChange:this.onSearchChange}),o.a.createElement(m,null,o.a.createElement(h,{corona:a}))):o.a.createElement("h1",null,"Loading")}}]),t}(a.Component)),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(14);c.a.render(o.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/CoronaCases",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/CoronaCases","/service-worker.js");g?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):p(e)}))}}()},7:function(e,n,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.e4201a20.chunk.js.map