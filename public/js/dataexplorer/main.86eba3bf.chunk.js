(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,a,t){},316:function(e,a){},337:function(e,a,t){e.exports=t(823)},351:function(e){e.exports={"copy share link":"copy share link","copy embed text":"copy embed text","copy API URI":"copy API URI","No share link available":"No share link available","UPDATE CHART":"UPDATE CHART",Next:"Next",Previous:"Previous",Table:"Table",Map:"Map",Chart:"Chart","Total rows":"Total rows","Select chart type, group column (abscissa x-axis) and series (ordinate y-axis) on the right hand side panel.":"Select chart type, group column (abscissa x-axis) and series (ordinate y-axis) on the right hand side panel.","Select geo data column on the right hand side panel.":"Select geo data column on the right hand side panel."}},356:function(e){e.exports={"copy share link":"kopier delingslink","copy embed text":"kopier indlejret tekst","copy API URI":"kopier API URI","No share link available":"Der er ikke noget link tilg\xe6ngeligt","UPDATE CHART":"OPDATER DIAGRAM",Next:"N\xe6ste",Previous:"Tidligere",Table:"Bord",Map:"Kort",Chart:"Diagram","Total rows":"Samlede r\xe6kker"}},361:function(e){e.exports={"copy share link":"Copier lien de partage","copy embed text":"Int\xe9grer code d'int\xe9gration","copy API URI":"Copier API URI","No share link available":"Pas de lien de partage","UPDATE CHART":"Mettre \xe0 jour le graphique",Next:"Suivant",Previous:"Pr\xe9c\xe9dent",Table:"Tableau",Map:"Carte",Chart:"Graphique","Total rows":"Entr\xe9es totales","Select chart type, group column (abscissa x-axis) and series (ordinate y-axis) on the right hand side panel.":"S\xe9lectionner le type de graphe, la colonne de groupement (axe horizontal) et la s\xe9rie (axe vertical) dans le panneau de droite","Select geo data column on the right hand side panel.":"S\xe9lectionner la colonne de type g\xe9ographique dans le panneau de droite"}},433:function(e,a){},434:function(e,a){},509:function(e,a){},511:function(e,a){},543:function(e,a){},544:function(e,a){},726:function(e,a,t){var r={"./geojson.json":295,"./table-schema.json":727,"./topojson.json":296};function n(e){var a=c(e);return t(a)}function c(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id=726},814:function(e,a){},815:function(e,a){},819:function(e,a){},820:function(e,a){},823:function(e,a,t){"use strict";t.r(a);var r=t(113),n=t(5),c=t.n(n),i=t(26),s=t(58),o=t(59),l=t(10),d=t(1),u=t.n(d),p=t(29),m=t.n(p),g=(t(119),t(112)),f=t(61),v=t(321),h=t(322),b=function(e){var a=w(e);return a.resources&&a.resources.forEach(function(e){delete e.data,delete e._values}),a.views&&a.views.forEach(function(e){e.resources&&e.resources.forEach(function(e){delete e.data,delete e._values})}),a},w=function(e){return JSON.parse(JSON.stringify(e))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DATA_VIEW_CHART_BUILDER_ACTION":var t=w(e);return t=t.map(function(e){return"simple"===e.datapackage.views[0].specType&&(e.datapackage.views[0]=a.payload),e}),Object.assign(w(e),t);case"DATA_VIEW_MAP_BUILDER_ACTION":var r=w(e);return r=r.map(function(e){return"tabularmap"===e.datapackage.views[0].specType&&(e.datapackage.views[0]=a.payload),e}),Object.assign(w(e),r);case"SELECT_TAB":case"FETCH_DATA_BEGIN":case"FETCH_DATA_SUCCESS":case"FETCH_DATA_FAILURE":return a.payload.widgets;default:return e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"DATAPACKAGE_LOAD":return a.payload.datapackage;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"FILTER_UI_ACTION":default:return e}},x=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&arguments[1];var e=arguments.length>2?arguments[2]:void 0;try{var a=w(e);delete a.serializedState;var t=b(a.datapackage),r=a.widgets.map(function(e){return e.datapackage=b(e.datapackage),e.loading=!1,e});return JSON.stringify(Object.assign(a,{datapackage:t,widgets:r}))}catch(n){return console.warn(n),{}}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return{widgets:k(e.widgets,a),datapackage:y(e.datapackage,a),datastoreFilters:E(e.datastoreFilters,a),serializedState:x(e.serializedState,a,e)}},T={datastoreFilters:{},datapackage:{},widgets:[],serializedState:{}};function O(e){return Object(f.createStore)(N,Object.assign({},T,e),Object(v.composeWithDevTools)(Object(f.applyMiddleware)(h.a)))}var A=t(323),S=t(329),C=t.n(S),_=t(330),j=function(e){var a,t,r=Object(l.useTranslation)().t,n=e.datapackage.views;return u.a.createElement(C.a,{loaded:!e.loading,style:{position:"relative"}},u.a.createElement("div",null,"simple"!==(t=n[0]).specType||t.spec&&Object.keys(t.spec).length>0?n.map(function(e){return u.a.createElement(_.DataView,{key:Math.random(),datapackage:{views:[e]}})}):(a=n[0].specType,u.a.createElement("div",{className:"dx-guiding-text"},"simple"===a?u.a.createElement("p",null,r("Select chart type, group column (abscissa x-axis) and series (ordinate y-axis) on the right hand side panel.")):"","tabularmap"===a?u.a.createElement("p",null,r("Select geo data column on the right hand side panel.")):""))))},I=["archiver","schema","shareLink","iframeText"],P=function(e){var a=Object(l.useTranslation)().t,t=function(e){if(e.length<=1500)return e;var a=JSON.parse(e);return a.datapackage.resources.forEach(function(e){for(var a in I)e[I[a]]&&delete e[I[a]]}),JSON.stringify(a)}(e.serializedState),r=new URL(window.location.href);r.searchParams.set("explorer",t);var n=r.href,c='<iframe src="'.concat(r.href,'" />'),i=n.length<2e3,s=function(e){var a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style={position:"absolute",left:"-9999px"},document.body.appendChild(a),a.select(),document.execCommand("copy"),document.body.removeChild(a)};return u.a.createElement("div",{className:"dx-share-container"},i?u.a.createElement("div",null,u.a.createElement("div",{className:"m-4 ml-0"},u.a.createElement("input",{id:"share-link",className:"border-solid border-2 border-gray-600 w-1/2 px-2",value:n}),u.a.createElement("a",{href:"#/",id:"copy-share-link",className:"m-4",onClick:function(){s(n)}},u.a.createElement("i",null,a("copy share link")))),u.a.createElement("div",{className:"m-4 ml-0"},u.a.createElement("input",{id:"embed",className:"border-solid border-2 border-gray-600 px-2 w-1/2",value:c}),u.a.createElement("a",{href:"#/",id:"copy-share-link",className:"m-4",onClick:function(){s(c)}},u.a.createElement("i",null,a("copy embed text"))))):u.a.createElement("p",{className:"no-share-link-message"},a("No share link available")),e.apiUri&&u.a.createElement("div",{className:"m-4 ml-0"},u.a.createElement("input",{id:"apiUri",className:"border-solid border-2 border-gray-600 px-2 w-1/2",value:e.apiUri}),u.a.createElement("a",{href:"#/",id:"copy-share-link",className:"m-4",onClick:function(){s(e.apiUri)}},u.a.createElement("i",null,a("copy API URI")))))},D=t(331),J=t.n(D),U=function(e){var a=Object(l.useTranslation)().t;return u.a.createElement(J.a,{previousLabel:a("Previous"),nextLabel:a("Next"),breakLabel:"...",breakClassName:"break-me",pageCount:Math.ceil(e.datapackage.resources[0].totalrowcount/100),marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(a){var t=a.selected,r=Math.ceil(100*t),n=JSON.parse(JSON.stringify(e.datapackage.resources[0])),c=new URL(n.api);if(n.api.includes("datastore_search?"))c.searchParams.set("offset",r);else if(n.api.includes("datastore_search_sql?")){var i=c.searchParams.get("sql"),s=/OFFSET(%20|\s)\d+/;s.test(i)?c.searchParams.set("sql",i.replace(s,"OFFSET ".concat(r))):c.searchParams.set("sql",i+" OFFSET ".concat(r)),n.api=n.api.includes("offset")}n.api=c.href,e.updateAction(n)},containerClassName:"pagination",activeClassName:"active"})},L=t(327),R=t(328),F=t(115),B=t(181),M=t(248);function V(e){try{return JSON.parse(e)}catch(a){return e}}var H=function(e){var a,t,n;return c.a.async(function(i){for(;;)switch(i.prev=i.next){case 0:return a=V(e),t=["csv","tsv","dsv","xls","xlsx"],i.prev=2,i.next=5,c.a.awrap(B.Dataset.load(a));case 5:return n=i.sent,i.next=8,c.a.awrap(Promise.all(n.resources.map(function(e){var a,n,i,s,o,l,d,u;return c.a.async(function(p){for(;;)switch(p.prev=p.next){case 0:if("FileInline"!==e.displayName){p.next=4;break}return p.abrupt("return");case 4:if(!e.descriptor.api||!e.descriptor.api.includes("datastore_search")){p.next=25;break}return p.next=7,c.a.awrap(fetch(e.descriptor.api));case 7:if((a=p.sent).ok){p.next=11;break}return e.descriptor.unavailable=!0,p.abrupt("return");case 11:return p.next=13,c.a.awrap(a.json());case 13:if(n=p.sent,e.descriptor.data=n.result.records.map(function(e,a){e._id,e._full_text,e._count;return Object(r.a)(e,["_id","_full_text","_count"])}),0===n.result.records.length?e.descriptor.totalrowcount=0:e.descriptor.totalrowcount=n.result.total||n.result.records[0]._count,e.descriptor.schema){p.next=23;break}return i=Object(B.open)({data:e.descriptor.data.map(Object.values),format:"csv"}),s=Object.keys(e.descriptor.data[0]||{}),i.descriptor.data=[s].concat(i.descriptor.data),p.next=22,c.a.awrap(i.addSchema());case 22:e.descriptor.schema=i.descriptor.schema;case 23:p.next=68;break;case 25:if("FileRemote"!==e.displayName||!t.includes(e.descriptor.format)){p.next=44;break}return p.prev=26,p.next=29,c.a.awrap(e.rows({size:100,keyed:!0}));case 29:return o=p.sent,p.next=32,c.a.awrap(M(o));case 32:return(l=p.sent).length>0?e.descriptor.data=l:e.descriptor.unavailable=!0,p.next=36,c.a.awrap(e.addSchema());case 36:p.next=42;break;case 38:p.prev=38,p.t0=p.catch(26),console.warn(p.t0),e.descriptor.unavailable=!0;case 42:p.next=68;break;case 44:if(!e.descriptor.format.toLowerCase().includes("json")){p.next=63;break}return p.next=47,c.a.awrap(fetch(e.descriptor.path));case 47:if((d=p.sent).ok){p.next=51;break}return e.descriptor.unavailable=!0,p.abrupt("return");case 51:return p.next=53,c.a.awrap(d.json());case 53:if(u=p.sent,!["Feature","FeatureCollection","Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","GeometryCollection"].includes(u.type)){p.next=59;break}e.descriptor.data=u,p.next=61;break;case 59:return e.descriptor.unavailable=!0,p.abrupt("return");case 61:p.next=68;break;case 63:if("pdf"!==e.descriptor.format.toLowerCase()){p.next=67;break}return p.abrupt("return");case 67:e.descriptor.unavailable=!0;case 68:case"end":return p.stop()}},null,null,[[26,38]])})));case 8:return i.abrupt("return",n.descriptor);case 11:return i.prev=11,i.t0=i.catch(2),console.warn("Failed to load a Dataset from provided datapackage id\n"+i.t0),i.abrupt("return",a);case 15:case"end":return i.stop()}},null,null,[[2,11]])},q=t(111),z=function(e){return{type:"SELECT_TAB",payload:Object(i.a)({},e)}},G=function(e){return{type:"DATAPACKAGE_LOAD",payload:Object(i.a)({},e)}},W=function(e){return{type:"FETCH_DATA_BEGIN",payload:Object(i.a)({},e)}},K=function(e){return{type:"FETCH_DATA_SUCCESS",payload:Object(i.a)({},e)}},Q=Object(g.b)(function(e){return Object(i.a)({},e)},function(e){return{filterUIAction:function(a){return e(function(e){return function(a,t){var r,n,i,s,o,l;return c.a.async(function(d){for(;;)switch(d.prev=d.next){case 0:return r=JSON.parse(JSON.stringify(t().datapackage)),n=JSON.parse(JSON.stringify(e)),(i=Object.assign(r,{resources:[n]})).resources[0].datastore_active&&delete i.resources[0].data,a(G({datapackage:i})),s=JSON.parse(JSON.stringify(t().widgets)).map(function(e){return e.loading=!0,e}),a(W({widgets:s})),r=JSON.parse(JSON.stringify(t().datapackage)),d.next=10,c.a.awrap(H(r));case 10:o=d.sent,a(G({datapackage:o})),l=JSON.parse(JSON.stringify(t().widgets)).map(function(e){return e.datapackage.views=e.datapackage.views.map(function(e){return Object(q.compileView)(e,o)}),e.loading=!1,e}),a(K({widgets:l}));case 14:case"end":return d.stop()}})}}(a))},fetchDataAction:function(a){return e(function(e){return function(a){var t,r,n,i;return c.a.async(function(s){for(;;)switch(s.prev=s.next){case 0:return t=JSON.parse(JSON.stringify(e.widgets)).map(function(e){return e.loading=!0,e}),a(W({widgets:t})),r=JSON.parse(JSON.stringify(e.datapackage)),s.next=5,c.a.awrap(H(r));case 5:n=s.sent,a(G({datapackage:n})),i=JSON.parse(JSON.stringify(e.widgets)).map(function(e){return e.datapackage.views=e.datapackage.views.map(function(e){return Object(q.compileView)(e,n)}),e}),a(K({widgets:i}));case 9:case"end":return s.stop()}})}}(a))},dataViewBuilderAction:function(a){return e(function(e){return function(a){var t;"simple"===e.specType?t="DATA_VIEW_CHART_BUILDER_ACTION":"tabularmap"===e.specType&&(t="DATA_VIEW_MAP_BUILDER_ACTION"),a({type:t,payload:e})}}(a))},selectTabAction:function(a){return e(function(e){return function(a,t){var r=JSON.parse(JSON.stringify(t().widgets));r.forEach(function(a,t){r[t].active=!1,a.name===e&&(r[t].active=!0)}),a(z({widgets:r}))}}(a))}}})(function(e){Object(d.useEffect)(function(){var a={datapackage:e.datapackage,widgets:e.widgets};e.fetchDataAction(a)},[]);var a,t=e.widgets.find(function(e){return e.active}),r=Object(l.useTranslation)().t,n=["web","document"],c=e.widgets.find(function(e){return e.datapackage.views.find(function(e){return!n.includes(e.specType)})}),i=e.datapackage.resources[0].datastore_active&&e.datapackage.resources[0].totalrowcount?e.datapackage.resources[0].totalrowcount.toLocaleString():"",s=t?t.name:e.widgets[0].name,o=e.widgets.map(function(e,a){return u.a.createElement(F.TabLink,{to:e.name,className:"mr-4",key:"tabLink-".concat(a)},r(e.name))}),p=e.widgets.map(function(a,t){return u.a.createElement(F.TabContent,{for:a.name,key:"tabContent-".concat(t)},["table","web"].includes(a.datapackage.views[0].specType)?u.a.createElement("div",{className:"container flex py-6"},u.a.createElement("div",{className:"w-full py-3"},u.a.createElement(j,a))):u.a.createElement("div",{className:"container flex py-6"},u.a.createElement("div",{className:"w-3/4 py-3 mr-4"},u.a.createElement(j,a)),u.a.createElement("div",{className:"w-1/4"},u.a.createElement("div",{className:"w-full"},u.a.createElement("div",{className:"p-4 mr-4"},"simple"===a.datapackage.views[0].specType?u.a.createElement(L.ChartBuilder,{view:a.datapackage.views[0],dataViewBuilderAction:e.dataViewBuilderAction}):"","tabularmap"===a.datapackage.views[0].specType?u.a.createElement(R.MapBuilder,{view:a.datapackage.views[0],dataViewBuilderAction:e.dataViewBuilderAction}):"")))))});return u.a.createElement("div",{className:"data-explorer"},i&&c&&u.a.createElement("div",{className:"total-rows"},u.a.createElement("span",{className:"total-rows-label"},r("Total rows")),": ",u.a.createElement("span",{className:"total-rows-value"},i)),u.a.createElement("div",{className:"datastore-query-builder"},function(e){var a=e.widgets.find(function(e){return e.active}),t=!1;try{t=["web","document"].includes(a.datapackage.views[0].specType)}catch(r){}return!t&&e.datapackage.resources[0].datastore_active}(e)?u.a.createElement(A.QueryBuilder,{resource:(a=e.datapackage,a?a.resources[0]:{}),filterBuilderAction:e.filterUIAction}):""),u.a.createElement(F.Tabs,{renderActiveTabContentOnly:!0,handleSelect:function(a){e.selectTabAction(a)},className:"data-explorer-content",selectedTab:s},o,p),e.datapackage.resources[0].datastore_active&&c?u.a.createElement(U,{datapackage:e.datapackage,updateAction:e.filterUIAction}):u.a.createElement("div",{className:"no-pagination not-datastore-resource"}),c?u.a.createElement(P,{serializedState:e.serializedState,apiUri:e.datapackage.resources[0].api}):u.a.createElement("div",{className:"no-share-feature"}))}),$=function(e){var a,t,r=Object(l.useTranslation)().t;if("string"===typeof e.datapackage)try{a=JSON.parse(e.datapackage)}catch(c){a={},console.warn("Invalid datapackage",c)}else"object"===typeof e.datapackage&&(a=e.datapackage);try{t=JSON.parse(JSON.stringify(a.views)),delete a.views}catch(i){console.log("No views set on datapackage")}var n=e.widgets?e.widgets:function(e){var a={table:r("Table"),tabularmap:r("Map"),map:r("Map"),simple:r("Chart")};return e.map(function(e,t){return{active:0===t,name:a[e.specType],datapackage:{views:[e]}}})}(t);return u.a.createElement(g.a,{store:O({widgets:n,datapackage:a})},u.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=document.getElementsByClassName("data-explorer");c.a.async(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.awrap(s.default.use(o.default).use(l.initReactI18next).init({detection:{order:["querystring","cookie","localStorage","navigator","htmlTag","path","subdomain"],lookupQuerystring:"lng",lookupCookie:"defaultLocale",lookupLocalStorage:"defaultLocale",lookupFromPathIndex:0,lookupFromSubdomainIndex:0},resources:{en:{translation:Object(i.a)({},t(351),{},t(352),{},t(353),{},t(354),{},t(355))},da:{translation:Object(i.a)({},t(356),{},t(357),{},t(358),{},t(359),{},t(360))},fr:{translation:Object(i.a)({},t(361),{},t(362),{},t(363),{},t(364),{},t(365))}},react:{useSuspense:!1},initImmediate:!1,debug:!1,nsSeparator:!1,keySeparator:!1,fallbackLng:!1,interpolation:{escapeValue:!1}}));case 2:case"end":return e.stop()}}).then(function(){var e=!0,a=!1,t=void 0;try{for(var n,c=X[Symbol.iterator]();!(e=(n=c.next()).done);e=!0){var i=n.value;try{var s=JSON.parse(i.getAttribute("data-datapackage")),o=s.datapackage,l=Object(r.a)(s,["datapackage"]);m.a.render(u.a.createElement($,Object.assign({datapackage:o},l)),document.getElementById(i.id))}catch(d){console.warn("Failed to render data-explorer",d)}}}catch(p){a=!0,t=p}finally{try{e||null==c.return||c.return()}finally{if(a)throw t}}}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[337,1,2]]]);
//# sourceMappingURL=main.86eba3bf.chunk.js.map