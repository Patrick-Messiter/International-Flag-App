(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=(n(16),n(5)),l=n(1);n(18);function u(e){function t(){e.setToggleDarkMode(!e.toggleDarkMode)}return a.a.createElement("nav",{className:e.toggleDarkMode?"DarkMinor Navbar":"LightMinor Navbar"},a.a.createElement("div",{className:"Navbar-inner"},a.a.createElement("h1",null,"Where in the world?"),e.toggleDarkMode?a.a.createElement("h4",{onClick:function(){return t()}},a.a.createElement("span",{role:"img","aria-label":"Sun emoji"},"\ud83c\udf1e")," Light Mode"):a.a.createElement("h4",{onClick:function(){return t()}},a.a.createElement("span",{role:"img","aria-label":"Moon emoji"},"\ud83c\udf19")," Dark Mode")))}function m(e){var t=e.toString();return t=t.replace(/\B(?=(\d{3})+(?!\d))/g,",")}function s(e){return e[Math.floor(Math.random()*e.length)]}function f(e){return a.a.createElement("div",{onClick:e.selectCard,className:e.toggleDarkMode?"DarkMinor Card-container":"LightMinor Card-container"},a.a.createElement("img",{src:e.item.flags.png,alt:"".concat(e.item.name.common," flag")}),a.a.createElement("div",{className:"Card-container-inner"},a.a.createElement("h3",null,e.item.name.common),e.toggleQuizSection?a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("span",null,"Population: ???")),a.a.createElement("li",null,a.a.createElement("span",null,"Region: ???")),a.a.createElement("li",null,a.a.createElement("span",null,"Capital: ???"))):a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("span",null,"Population:")," ",m(e.item.population)),a.a.createElement("li",null,a.a.createElement("span",null,"Region:")," ",e.item.region),a.a.createElement("li",null,a.a.createElement("span",null,"Capital:")," ",e.item.capital))))}var g=n(2),h=n(6);function p(e){function t(t){e.setFormData(function(e){return Object(h.a)({},e,Object(g.a)({},t.target.name,t.target.value))})}return a.a.createElement("form",{className:"Form-container"},a.a.createElement("div",{className:e.toggleDarkMode?"DarkMinor Form-input-container":"LightMinor Form-input-container"},a.a.createElement("p",null,a.a.createElement("span",{role:"img","aria-label":"Magnifying glass emoji"},"\ud83d\udd0d")),a.a.createElement("input",{className:e.toggleDarkMode?"DarkMinor Form-input":"LightMinor Form-input",type:"text",placeholder:"Search for a country",name:"countryName",onChange:t,value:e.formData.countryName})),a.a.createElement("div",{className:"Form-select-container"},a.a.createElement("select",{id:"regionName",value:e.formData.regionName,onChange:t,name:"regionName",className:e.toggleDarkMode?"DarkMinor":"LightMinor"},a.a.createElement("option",{hidden:!0,value:""},"Filter by Region"),a.a.createElement("option",{hidden:!e.formData.regionName,value:""},"None"),a.a.createElement("option",{value:"Africa"},"Africa"),a.a.createElement("option",{value:"Americas"},"America"),a.a.createElement("option",{value:"Asia"},"Asia"),a.a.createElement("option",{value:"Europe"},"Europe"),a.a.createElement("option",{value:"Oceania"},"Oceania"))))}function d(e){var t=a.a.useState({countryName:"",regionName:""}),n=Object(l.a)(t,2),r=n[0],o=n[1];function i(t){e.countryData.map(function(n){n.name.common===t&&(e.setChooseCountry(n),e.setToggleSection(!0))})}var c=e.countryData.map(function(t){var n=t.name.common.toLowerCase();if(r.countryName&&r.regionName){if(n.includes(r.countryName.toLowerCase())&&t.region===r.regionName)return a.a.createElement(f,{key:t.name.common,item:t,selectCard:function(){return i(t.name.common)},toggleDarkMode:e.toggleDarkMode})}else if(r.regionName){if(r.regionName===t.region)return a.a.createElement(f,{key:t.name.common,item:t,selectCard:function(){return i(t.name.common)},toggleDarkMode:e.toggleDarkMode})}else{if(!r.countryName)return a.a.createElement(f,{key:t.name.common,item:t,selectCard:function(){return i(t.name.common)},toggleDarkMode:e.toggleDarkMode});if(n.includes(r.countryName.toLowerCase()))return a.a.createElement(f,{key:t.name.common,item:t,selectCard:function(){return i(t.name.common)},toggleDarkMode:e.toggleDarkMode})}});return a.a.createElement("main",{className:e.toggleDarkMode?"DarkMain Main-home-section":"LightMain Main-home-section"},a.a.createElement("div",{className:"Home-outer-container"},a.a.createElement("button",{onClick:function(){return e.setToggleQuizSection(!0)}},"Quiz Section!"),a.a.createElement("div",{className:"Home-form-container"},a.a.createElement(p,{formData:r,setFormData:o,toggleDarkMode:e.toggleDarkMode})),a.a.createElement("div",{className:"Home-card-container"},c)))}var y=n(7);function v(e){var t=a.a.useState([]),n=Object(l.a)(t,2),r=n[0],o=n[1];var i=e.item.name.nativeName,c=i[Object.keys(i)[0]],u=e.item.currencies,s=u[Object.keys(u)[0]],f=Object.values(e.item.languages),g="";f.map(function(e,t,n){return n.length-1===t?g+="".concat(e):g+="".concat(e,", ")}),a.a.useEffect(function(){return e.item.borders&&e.item.borders&&e.countryData.map(function(t){e.item.borders.includes(t.cca3)&&o(function(e){return[].concat(Object(y.a)(e),[t])})}),function(){o([])}},[e.item]),console.log(r);var h=r.map(function(t){return a.a.createElement("button",{className:e.toggleDarkMode?"DarkMinor Country-section-button":"LightMinor Country-section-button",onClick:function(){return e.setChooseCountry(t)},key:t.name.common},t.name.common)});return a.a.createElement("section",{className:e.toggleDarkMode?"DarkMain Country-section-outer":"LightMain Country-section-outer"},a.a.createElement("div",{className:"Country-section"},a.a.createElement("button",{className:"Country-section-button Back-button",onClick:function(){e.setToggleSection(!1)}},"\u2190 Back"),a.a.createElement("div",{className:"Country-section-container"},a.a.createElement("img",{src:e.item.flags.svg,alt:"".concat(e.item.name.common," flag")}),a.a.createElement("div",{className:"Country-section-container-inner"},a.a.createElement("h1",null,e.item.name.common),a.a.createElement("div",{className:"Country-section-container-inner-leftlist"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("span",null,"Native Name: "),c.common?"".concat(c.common):"Nil native name"),a.a.createElement("li",null,a.a.createElement("span",null,"Population:")," ",m(e.item.population)),a.a.createElement("li",null,a.a.createElement("span",null,"Region:")," ",e.item.region),a.a.createElement("li",null,a.a.createElement("span",null,"Sub Region:")," ",e.item.subregion),a.a.createElement("li",null,a.a.createElement("span",null,"Capital:")," ",e.item.capital))),a.a.createElement("div",{className:"Country-section-container-inner-rightlist"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("span",null,"Top Level Domain:")," ",e.item.tld?"".concat(e.item.tld[0]):"There is nil top level domain"," "),a.a.createElement("li",null,a.a.createElement("span",null,"Currencies:")," ",s.name),a.a.createElement("li",null,a.a.createElement("span",null,"Languages:")," ",g," "))),a.a.createElement("div",{className:"Country-section-container-inner-bottom"},a.a.createElement("p",null,a.a.createElement("span",{className:"Border-buttons-span"},"Border Countries:")," ",h," "))))))}function E(e){var t=a.a.useState(s(e.item)),n=Object(l.a)(t,2),r=n[0],o=(n[1],a.a.useState(s(e.item))),i=Object(l.a)(o,2),c=i[0],u=(i[1],a.a.useState()),m=Object(l.a)(u,2),f=m[0],g=m[1],h=a.a.useState(),p=Object(l.a)(h,2),d=p[0],y=p[1],v=[[e.countryOne,e.countryTwo,r,c],[r,e.countryOne,c,e.countryTwo],[c,r,e.countryTwo,e.countryOne]];return console.log(d),console.log(f),a.a.useEffect(function(){y(s(v))},[]),a.a.useEffect(function(){f&&(f===e.countryOne.capital||f===e.countryTwo.capital?(e.setScore(function(e){return e+1}),e.setQuestionsAsked(function(e){return e+1})):e.setQuestionsAsked(function(e){return e+1}))},[f]),a.a.createElement("div",null,a.a.createElement("h2",null,"Which of the below is the capital city of either ",e.countryOne.name.common," or ",e.countryTwo.name.common),function(){if(d)return d.map(function(e){return a.a.createElement("button",{onClick:function(){return g(e.capital)}},e.capital)})}(),function(){if(f)return f===e.countryOne.capital||f===e.countryTwo.capital?a.a.createElement("h3",null,"Congratulations you got it right!"):a.a.createElement("h3",null,"Sorry you got it wrong! The correct answers were: ",e.countryOne.capital," (",e.countryOne.name.common,") or ",e.countryTwo.capital," (",e.countryTwo.name.common,")")}())}function b(e){var t=a.a.useState(s(e.item)),n=Object(l.a)(t,2),r=n[0],o=(n[1],a.a.useState(s(e.item))),i=Object(l.a)(o,2),c=i[0],u=(i[1],a.a.useState(0)),m=Object(l.a)(u,2),g=m[0],h=m[1],p=a.a.useState(0),d=Object(l.a)(p,2),y=d[0],v=d[1];console.log(g),console.log(y);var b=[r,c].map(function(t){return a.a.createElement(f,{key:t.name.common,item:t,toggleQuizSection:e.toggleQuizSection})});return a.a.createElement("section",null,a.a.createElement("div",{className:"QuizSection-inner"},a.a.createElement("h1",null,"This is the Quiz Section"),a.a.createElement("button",{onClick:function(){return e.setToggleQuizSection(!1)}},"Back"),a.a.createElement("p",null,"Score: ",g,"/",y),b,a.a.createElement(E,{countryOne:r,countryTwo:c,item:e.item,score:g,setScore:h,setQuestionsAsked:v})))}function w(){w=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(D){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var a=t&&t.prototype instanceof s?t:s,o=Object.create(a.prototype),i=new M(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=b(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(e,n,i),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(D){return{type:"throw",arg:D}}}e.wrap=l;var m={};function s(){}function f(){}function g(){}var h={};c(h,a,function(){return this});var p=Object.getPrototypeOf,d=p&&p(p(C([])));d&&d!==t&&n.call(d,a)&&(h=d);var y=g.prototype=s.prototype=Object.create(h);function v(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var m=l.arg,s=m.value;return s&&"object"==typeof s&&n.call(s,"__await")?t.resolve(s.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(s).then(function(e){m.value=e,i(m)},function(e){return r("throw",e,i,c)})}c(l.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function C(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=g,c(y,"constructor",g),c(g,"constructor",f),f.displayName=c(g,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(l(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},v(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,M.prototype={constructor:M,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),m}},e}var k=function(){var e=a.a.useState(null),t=Object(l.a)(e,2),n=t[0],r=t[1],o=a.a.useState(),i=Object(l.a)(o,2),m=i[0],s=i[1],f=a.a.useState(!1),g=Object(l.a)(f,2),h=g[0],p=g[1],y=a.a.useState(!1),E=Object(l.a)(y,2),k=E[0],N=E[1],M=a.a.useState(!1),C=Object(l.a)(M,2),S=C[0],D=C[1];function O(){return(O=Object(c.a)(w().mark(function e(){var t,n;return w().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/all");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}return console.log(n),a.a.useEffect(function(){!function(){O.apply(this,arguments)}()},[]),a.a.createElement("div",{className:"App"},a.a.createElement(u,{toggleDarkMode:S,setToggleDarkMode:D}),h||k?h&&!k?a.a.createElement(v,{countryData:n,item:m,setChooseCountry:s,toggleSection:h,setToggleSection:p,toggleDarkMode:S}):!h&&k?a.a.createElement(b,{item:n,toggleQuizSection:k,setToggleQuizSection:N}):void 0:function(){if(null!=n)return a.a.createElement(d,{countryData:n,setCountryData:r,chooseCountry:m,setChooseCountry:s,toggleSection:h,setToggleSection:p,toggleDarkMode:S,toggleQuizSection:k,setToggleQuizSection:N})}())};i.a.render(a.a.createElement(k,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.6264c069.chunk.js.map