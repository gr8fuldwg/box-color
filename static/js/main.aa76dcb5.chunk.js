(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{244:function(e,t,o){},246:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),c=o(73),r=o.n(c),l=(o(85),o(74)),s=o(75),i=o(78),u=o(76),h=o(79),d=o(12),m=o(77),b=(o(244),function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={boxColor:"white",selectedColor:"#ffff00"},o.onColorSelect=o.onColorSelect.bind(Object(d.a)(Object(d.a)(o))),o.changeBackground=o.changeBackground.bind(Object(d.a)(Object(d.a)(o))),o}return Object(h.a)(t,e),Object(s.a)(t,[{key:"onColorSelect",value:function(e,t){this.setState({selectedColor:e.hex})}},{key:"changeBackground",value:function(e){this.setState({boxColor:this.state.selectedColor})}},{key:"render",value:function(){var e={backgroundColor:this.state.boxColor};return n.a.createElement("div",{className:"App-container"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:""},"Box-Color")),n.a.createElement("main",{className:"App-main"},n.a.createElement("div",{className:"box",onClick:this.changeBackground,style:e}),n.a.createElement(m.HuePicker,{onChange:this.onColorSelect,color:this.state.selectedColor})),n.a.createElement("footer",{className:"App-footer"},n.a.createElement("p",null,"Made by Jon!!!")))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,o){e.exports=o(246)},85:function(e,t,o){}},[[80,2,1]]]);
//# sourceMappingURL=main.aa76dcb5.chunk.js.map