(this.webpackJsonpits_cold_outside=this.webpackJsonpits_cold_outside||[]).push([[0],{19:function(e,a,t){e.exports=t(43)},24:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(17),c=t.n(l),o=(t(24),t(3)),r=t(4),s=t(6),d=t(5),m=t(2),h=t(7),p=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return console.log("redraw view",this.props),this.props.failed?i.a.createElement("div",{className:"alert alert-danger"},"No city with that name!"):this.props.loaded?i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},this.props.data.name),i.a.createElement("p",null,"Coords: ",this.props.data.coord.lat," ",this.props.data.coord.lon),i.a.createElement("p",null,"Temperature: ",this.props.data.main.temp),i.a.createElement("p",null,"Temperature min.: ",this.props.data.main.temp_min),i.a.createElement("p",null,"Temperature max.: ",this.props.data.main.temp_max),i.a.createElement("p",null,"Humidity: ",this.props.data.main.humidity),i.a.createElement("p",null,"Pressure: ",this.props.data.main.pressure),i.a.createElement("p",null,"Wind: ",this.props.data.wind.speed))):" "}}]),a}(i.a.Component),u=t(18),b=t.n(u),f=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).state={loading:!1},t.onSearchCityCallback=e.callback,t.onSearchFailedCallback=e.failedcallback,t.onSearchCity=t.onSearchCity.bind(Object(m.a)(t)),t}return Object(h.a)(a,e),Object(r.a)(a,[{key:"onSearchCity",value:function(e){var a=this;e.preventDefault(),this.setState({loading:!0});var t="https://api.openweathermap.org/data/2.5/weather?q="+this.refs.city_name.value+"&appid=05508bb378ad891b493b0c886cca7a57&units=metric";console.log(t),b.a.get(t).then((function(e){var t=e.data;console.log(t),a.onSearchCityCallback(t),a.setState({loading:!1})})).catch((function(e){console.log(e),a.onSearchFailedCallback(),a.setState({loading:!1})}))}},{key:"render",value:function(){console.log("redraw show");var e=this.state.loading?i.a.createElement("p",null,"Waiting..."):" ";return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.onSearchCity},i.a.createElement("input",{className:"form-control mb-3",ref:"city_name",placeholder:"City"}),i.a.createElement("button",{className:"btn btn-danger mb-3"},"Show"),e))}}]),a}(i.a.Component),v=(t(42),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).state={meta:{},loaded:!1,failed:!1},t.onSearchFailed=t.onSearchFailed.bind(Object(m.a)(t)),t.onDataReceived=t.onDataReceived.bind(Object(m.a)(t)),t}return Object(h.a)(a,e),Object(r.a)(a,[{key:"onSearchFailed",value:function(){this.setState({failed:!0}),console.log("search failed",this.state.meta,this.state.loaded)}},{key:"onDataReceived",value:function(e){this.setState({failed:!1,meta:e,loaded:!0}),console.log("data received",this.state.meta,this.state.loaded)}},{key:"render",value:function(){return console.log("redraw parent"),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container h-100"},i.a.createElement("div",{className:"d-flex justify-content-center h-100"},i.a.createElement("div",{className:"panel"},i.a.createElement(f,{callback:this.onDataReceived,failedcallback:this.onSearchFailed}),i.a.createElement(p,{data:this.state.meta,loaded:this.state.loaded,failed:this.state.failed})))))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f19d80e9.chunk.js.map