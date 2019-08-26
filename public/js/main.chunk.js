(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{319:function(e,t,a){},477:function(e,t){},495:function(e,t,a){e.exports=a(967)},654:function(e,t){},656:function(e,t){},688:function(e,t){},689:function(e,t){},873:function(e,t,a){var r={"./geojson.json":456,"./table-schema.json":874,"./topojson.json":457};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id=873},958:function(e,t){},959:function(e,t){},963:function(e,t){},964:function(e,t){},967:function(e,t,a){"use strict";a.r(t);var r=a(4),n=a.n(r),c=a(117),o=a.n(c),i=a(230),s=a(118),u=a(479),l=a(480),d=function(e){try{return{resources:[{schema:e.resources[0].schema}]}}catch(t){return{}}},p=function(e){if(!e)return{};switch((e.views||[]).length){case 1:return e.views[0];case 2:return e.views[1];case 3:return e.views[2];default:return d(e)}},f=function(e){return e?e.resources[0]:{}},v=function(e){return JSON.parse(JSON.stringify(e))},b=Object(s.combineReducers)({dataViewBuilder:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"DATA_VIEW_CHART_BUILDER_ACTION":default:return e}},filterUI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"FILTER_UI_ACTION":default:return e}},sharedState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DATA_VIEW_CHART_BUILDER_ACTION":var a=v(e.datapackage);return a.views.length<=2&&a.views.unshift(t.payload),a.views.length>2&&(a.views[0]=t.payload),Object.assign(v(e),{datapackage:a});case"DATA_VIEW_MAP_BUILDER_ACTION":var r=v(e.datapackage);return r.views.forEach(function(e,a){"tabularmap"===e.specType&&(r.views[a]=t.payload)}),Object.assign(v(e),{datapackage:r});case"FILTER_UI_ACTION":var n=v(e.datapackage);return n.resources[0]=t.payload,Object.assign(v(e),{datapackage:n});case"FETCH_DATA_BEGIN":return Object.assign({},e,{loading:!0});case"FETCH_DATA_SUCCESS":return Object.assign({},e,{loading:!1,error:!1,datapackage:t.payload.datapackage});case"FETCH_DATA_FAILURE":return Object.assign({},e,{loading:!1,error:!0,errorBody:t.payload});default:return e}}}),h={dataViewBuilder:{},filterUI:{},sharedState:{loading:!1,datapackage:{},loadedData:{}}};a(319);var w=a(29),g=a(481),m=a(485),y=a.n(m),O=a(486),k=function(e){var t=e.datapackage.views;return n.a.createElement(y.a,{loaded:!e.loading,style:{position:"relative"}},n.a.createElement("div",null,t.map(function(e){return n.a.createElement(O.DataView,{key:Math.random(),datapackage:{views:[e]}})})))},E=a(491),j=a(492),A=a(59),_=a.n(A),x=a(148),S=a(315),T=a(493),I=a(412);function N(e){try{return JSON.parse(e)}catch(t){return e}}function D(e){return e.views.map(function(t){return S.compileView(t,e)})}var C=function(){var e=Object(x.a)(_.a.mark(function e(t){var a,r,n;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=N(t),r=["csv","tsv","dsv","xls","xlsx"],e.prev=2,e.next=5,T.Dataset.load(a);case 5:return n=e.sent,e.next=8,Promise.all(n.resources.map(function(){var e=Object(x.a)(_.a.mark(function e(t){var a,n,c,o,i,s;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("FileInline"!==t.displayName){e.next=4;break}return e.abrupt("return");case 4:if(!t.descriptor.path||!t.descriptor.path.includes("datastore_search")){e.next=17;break}return e.next=7,fetch(t.descriptor.path);case 7:if((a=e.sent).ok){e.next=11;break}return t.descriptor.unavailable=!0,e.abrupt("return");case 11:return e.next=13,a.json();case 13:n=e.sent,t.descriptor.data=n.result.records,e.next=60;break;case 17:if("FileRemote"!==t.displayName||!r.includes(t.descriptor.format)){e.next=36;break}return e.prev=18,e.next=21,t.rows({size:100,keyed:!0});case 21:return c=e.sent,e.next=24,I(c);case 24:return(o=e.sent).length>0?t.descriptor.data=o:t.descriptor.unavailable=!0,e.next=28,t.addSchema();case 28:e.next=34;break;case 30:e.prev=30,e.t0=e.catch(18),console.warn(e.t0),t.descriptor.unavailable=!0;case 34:e.next=60;break;case 36:if(!t.descriptor.format.toLowerCase().includes("json")){e.next=55;break}return e.next=39,fetch(t.descriptor.path);case 39:if((i=e.sent).ok){e.next=43;break}return t.descriptor.unavailable=!0,e.abrupt("return");case 43:return e.next=45,i.json();case 45:if(s=e.sent,!["Feature","FeatureCollection","Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","GeometryCollection"].includes(s.type)){e.next=51;break}t.descriptor.data=s,e.next=53;break;case 51:return t.descriptor.unavailable=!0,e.abrupt("return");case 53:e.next=60;break;case 55:if("pdf"!==t.descriptor.format.toLowerCase()){e.next=59;break}return e.abrupt("return");case 59:t.descriptor.unavailable=!0;case 60:case"end":return e.stop()}},e,null,[[18,30]])}));return function(t){return e.apply(this,arguments)}}()));case 8:return e.abrupt("return",D(n.descriptor));case 11:return e.prev=11,e.t0=e.catch(2),console.warn("Failed to load a Dataset from provided datapackage id\n"+e.t0),e.abrupt("return",a);case 15:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t){return e.apply(this,arguments)}}();function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(a,!0).forEach(function(t){Object(w.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var U=function(){return{type:"FETCH_DATA_BEGIN"}},F=function(e){return{type:"FETCH_DATA_SUCCESS",payload:P({},e)}};function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var R=Object(i.b)(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach(function(t){Object(w.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e)},function(e){return{filterUIAction:function(t){return e(function(e){return function(){var t=Object(x.a)(_.a.mark(function t(a,r){var n,c,o;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"FILTER_UI_ACTION",payload:e}),(n=r().sharedState.datapackage).resources[0].datastore_active&&delete n.resources[0].data,a(U()),t.next=6,C(n);case 6:c=t.sent,(o=JSON.parse(JSON.stringify(n))).views=c,a(F({datapackage:o}));case 10:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}(t))},fetchDataAction:function(t){return e(function(e){return function(){var t=Object(x.a)(_.a.mark(function t(a){var r,n;return _.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(U()),t.next=3,C(e.datapackage);case 3:r=t.sent,(n=JSON.parse(JSON.stringify(e.datapackage))).views=r,a(F({datapackage:n}));case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(t))},dataViewBuilderAction:function(t){return e(function(e){return function(t){var a;"simple"===e.specType?a="DATA_VIEW_CHART_BUILDER_ACTION":"tabularmap"===e.specType&&(a="DATA_VIEW_MAP_BUILDER_ACTION"),t({type:a,payload:e})}}(t))}}})(function(e){Object(r.useEffect)(function(){var t={datapackage:e.sharedState.datapackage};e.fetchDataAction(t)},[]);var t,a=e.sharedState.datapackage.controls&&e.sharedState.datapackage.controls.showChartBuilder&&n.a.createElement("div",{className:"p-4 mr-4"},n.a.createElement(E.ChartBuilder,{view:p(e.sharedState.datapackage),dataViewBuilderAction:e.dataViewBuilderAction})),c=e.sharedState.datapackage.controls&&e.sharedState.datapackage.controls.showMapBuilder&&n.a.createElement("div",{className:"p-4 mr-4"},n.a.createElement(j.MapBuilder,{view:(t=e.sharedState.datapackage,t?(t.views||[]).find(function(e){return"tabularmap"===e.specType})||d(t):{}),dataViewBuilderAction:e.dataViewBuilderAction}));return n.a.createElement("div",{className:"text-center ml-6"},n.a.createElement("div",{className:"container py-4"},n.a.createElement("div",{className:""},n.a.createElement(g.QueryBuilder,{resource:f(e.sharedState.datapackage),filterBuilderAction:e.filterUIAction}))),n.a.createElement("div",{className:"container flex py-6"},n.a.createElement("div",{className:"w-3/4 p-3 mr-4"},n.a.createElement(k,e.sharedState)),n.a.createElement("div",{className:"w-1/4"},n.a.createElement("div",{className:"w-full"},a),n.a.createElement("div",{className:"w-full"},c))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V,J=document.getElementsByClassName("data-explorer"),M=!0,H=!1,W=void 0;try{for(var G,z=J[Symbol.iterator]();!(M=(G=z.next()).done);M=!0){var Q=G.value;try{var $=JSON.parse(Q.getAttribute("data-datapackage"));o.a.render(n.a.createElement(i.a,{store:(V={sharedState:{datapackage:$}},Object(s.createStore)(b,Object.assign({},h,V),Object(u.composeWithDevTools)(Object(s.applyMiddleware)(l.a))))},n.a.createElement(R,null)),document.getElementById(Q.id))}catch(q){console.warn("Failed to render data-explorer",q)}}}catch(K){H=!0,W=K}finally{try{M||null==z.return||z.return()}finally{if(H)throw W}}"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[495,1,2]]]);
//# sourceMappingURL=main.1d321772.chunk.js.map