(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/crow/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},4678:function(t,e,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=s(t);return a(e)}function s(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var r=a("2b0e"),n=a("5f5b");a("ab8b"),a("2dd8");r["default"].use(n["a"]);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("b-container",{staticClass:"px-0",attrs:{fluid:""}},[r("b-row",[r("b-col",[r("Crow-navbar")],1)],1)],1),r("b-container",[r("Crow"),r("hr"),r("b-row",[r("div",{staticClass:"mx-auto"},[t._v(" Made with: "),r("img",{attrs:{id:"cr-vue-logo",alt:"Vue logo",src:a("cf05")}})])])],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-form-row",{staticClass:"mb-4"},[a("b-col",{staticClass:"mt-4"},[a("b-form",{attrs:{inline:""},on:{submit:function(e){return e.preventDefault(),t.loadData(e)}}},[a("label",{attrs:{for:"input-radar"}},[t._v("Radar:")]),a("b-form-select",{staticClass:"mx-1",attrs:{id:"input-radar",options:t.availableRadars,size:"sm"},model:{value:t.selectedRadar,callback:function(e){t.selectedRadar=e},expression:"selectedRadar"}}),a("b-form-text",{staticClass:"mx-3"},[t._v(t._s(t.selectedRadarName)+" is located in "+t._s(t.selectedRadarCountry))]),a("label",{attrs:{for:"input-from-date"}},[t._v("From:")]),a("b-form-input",{staticClass:"mx-1",attrs:{id:"input-from-date",type:"date",placeholder:"type a date...",size:"sm"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),a("label",{attrs:{for:"input-to-date"}},[t._v("To:")]),a("b-form-input",{staticClass:"mx-1",attrs:{id:"input-to-date",type:"date",placeholder:"type a date...",size:"sm"},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),a("b-button",{attrs:{size:"sm",type:"submit",variant:"primary"}},[t._v("Load and view radar data")])],1)],1)],1),a("b-row",[a("b-col",[a("v-p-chart",{attrs:{"vtps-data":t.radarVtpsAsArray,"data-temporal-resolution":t.dataTemporalResolution,"style-config":t.VPChartStyle},scopedSlots:t._u([{key:"title",fn:function(){return[a("h3",[t._v("VP Chart")])]},proxy:!0}])})],1)],1),a("b-row",[a("b-col",[a("v-p-i-chart",{scopedSlots:t._u([{key:"title",fn:function(){return[a("h3",[t._v("VPI Chart")])]},proxy:!0}])})],1)],1)],1)},c=[],l=(a("a4d3"),a("e01a"),a("d28b"),a("99af"),a("4de4"),a("7db0"),a("4160"),a("4fad"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("ade3")),d=a("3835"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("title"),a("svg")],2)},f=[],b=(a("d81d"),a("13d5"),a("a9e3"),a("6062"),a("2909")),h=a("5698"),p={props:{vtpsData:Array,dataTemporalResolution:Number,styleConfig:Object},data:function(){return{chart:null,margin:{top:0,right:30,bottom:30,left:30},width:1040,height:270,xAxis:null,yAxis:null}},watch:{vtpsData:function(t){null!=this.chart&&this.chart.remove(),this.createEmptyChart(),this.createAndAddChartAxis(),this.updateChart(t)}},computed:{rectDivider:function(){var t=this.maxDatetime-this.minDatetime;return t/1e3/60/this.dataTemporalResolution},minDatetime:function(){return this.vtpsData.reduce((function(t,e){return e.timestamp<t?e.timestamp:t}),this.vtpsData[0].timestamp)},maxDatetime:function(){return this.vtpsData.reduce((function(t,e){return e.timestamp>t?e.timestamp:t}),this.vtpsData[0].timestamp)},maxDensity:function(){return this.vtpsData.reduce((function(t,e){return e.dens>t?e.dens:t}),this.vtpsData[0].dens)},distinctHeights:function(){return Object(b["a"])(new Set(this.vtpsData.map((function(t){return t.height}))))}},methods:{createEmptyChart:function(){var t=h["g"]("svg").attr("width",this.width+this.margin.left+this.margin.right).attr("height",this.height+this.margin.top+this.margin.bottom).append("g").attr("transform","translate("+this.margin.left+","+this.margin.top+")");this.chart=t},createAndAddChartAxis:function(){this.xAxis=h["f"]().domain([this.minDatetime,this.maxDatetime]).range([0,this.width]),this.chart.append("g").attr("transform","translate(0,"+this.height+")").call(h["a"](this.xAxis)),this.yAxis=h["d"]().range([this.height,0]).domain(this.distinctHeights),this.chart.append("g").call(h["b"](this.yAxis))},updateChart:function(t){var e=h["e"]().range([this.styleConfig.minDensityColor,this.styleConfig.maxDensityColor]).domain([0,this.maxDensity]),a=this.chart.selectAll().data(t,(function(t){return"".concat(t.timestamp," - ").concat(t.height," - ").concat(t.dens)})),r=a.enter().append("rect"),n=a.exit();n.remove();var s=this;a.merge(r).attr("x",(function(t){return s.xAxis(t.timestamp)})).attr("y",(function(t){return s.yAxis(t.height)})).attr("width",s.width/s.rectDivider).attr("height",s.yAxis.bandwidth()).style("fill",(function(t){return t.noData?s.styleConfig.noDataColor:e(t.dens)}))}}},m=p,j=a("2877"),v=Object(j["a"])(m,u,f,!1,null,null,null),g=v.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("title")],2)},D=[],x={},w=Object(j["a"])(x,y,D,!1,null,null,null),O=w.exports,C=a("c1df"),_=a.n(C),k=a("bc3a"),z=a.n(k),M=a("2ef0"),R=a.n(M),Y={dataBaseUrl:"https://crow.weernet.be",availableRadars:[{value:"behel",text:"Behel?",country:"Belgium"},{value:"bejab",text:"Jabbeke",country:"Belgium"},{value:"bezav",text:"Zaventem",country:"Belgium"},{value:"bewid",text:"Wideumont",country:"Belgium"},{value:"nldhl",text:"Den Helder",country:"the Netherlands"}],initialRadarCode:"behel",localizedDateFormat:"YYYY/MM/DD",vtpsFormat:{availableHeights:R.a.range(0,4801,200),temporalResolution:300,numHeaderLines:4},VPChartStyle:{minDensityColor:"#f0f0f0",maxDensityColor:"#dc3545",noDataColor:"white"}};a("a434"),a("0d03"),a("9129"),a("acd8"),a("e25e"),a("ac1f"),a("1276");function P(t){var e=t.split("\n");return e=e.splice(Y.vtpsFormat.numHeaderLines),e.pop(),e=e.map((function(t){var e=parseFloat(t.substring(76,82));return isNaN(e)&&(e=0),{datetime:Date.parse(t.substring(0,4)+"-"+t.substring(4,6)+"-"+t.substring(6,8)+"T"+t.substring(9,11)+":"+t.substring(11,13)),height:parseInt(t.substring(14,18)),dd:parseFloat(t.substring(47,52)),ff:parseFloat(t.substring(41,46)),dens:e,sd_vvp:parseFloat(t.substring(53,59))}})),e}function A(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:200,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:NaN;if("number"!=typeof e||"number"!=typeof a&&a!=1/0)throw"'altMin'/'altMax' need to be nunmeric";if(!isNaN(s)&&"number"==typeof s)throw"'alpha' needs to be numeric or Nan";a<=e&&console.log("'altMin' should be smaller than 'altMax'");var i=h["c"](t,(function(t){return t.height}));if(e=Math.max(e,i[0]),a=Math.min(a,i[1]+r),t=t.filter((function(t){return t.height>=e&t.height<=a})),t=t.filter((function(t){return t.sd_vvp>=n})),0==t.length)return NaN;var o=t.map((function(t){return t.ff})),c=t.map((function(t){return t.dens})),l=[];l=isNaN(s)?t.map((function(t){return 1+0*t.dd})):t.map((function(t){return Math.cos(t.dd-s)*Math.PI/180}));var d=.001*r*l.map((function(t,e){return t*o[e]*c[e]*3.6})).filter((function(t){return!Number.isNaN(t)})).reduce((function(t,e){return t+e}),0);return d}var N={readVtps:P,integrateProfile:A};function S(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function T(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?S(Object(a),!0).forEach((function(e){Object(l["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var V={data:function(){var t=_()().subtract(1,"days");return{startDate:t.format(_.a.HTML5_FMT.DATE),endDate:t.format(_.a.HTML5_FMT.DATE),selectedRadar:Y.initialRadarCode,availableRadars:Y.availableRadars,VPChartStyle:Y.VPChartStyle,dataTemporalResolution:Y.vtpsFormat.temporalResolution,availableHeights:Y.vtpsFormat.availableHeights,radarVtps:{}}},methods:{initializeEmptyData:function(){var t=this,e=_()(this.startDate,"YYYY-MM-DD").hour(0).minute(0).second(0),a=_()(this.endDate,"YYYY-MM-DD").hour(23).minute(59).second(59),r=e.clone(),n=function(){var e={};t.availableHeights.forEach((function(t){e[t]={noData:!0}})),t.$set(t.radarVtps,r.toDate().getTime(),e),r.add(t.dataTemporalResolution,"seconds")};while(r.isBefore(a))n()},loadData:function(){this.initializeEmptyData(),this.populateDataFromCrowServer(this.selectedRadar,this.startDate,this.endDate)},storeDataRow:function(t){var e={dd:t.dd,ff:t.ff,dens:t.dens,sd_vvp:t.sd_vvp,noData:!1};this.$set(this.radarVtps[t.datetime],t.height,e)},populateDataFromCrowServer:function(t,e,a){var r=this,n=_()(e,"YYYY-MM-DD"),s=_()(a,"YYYY-MM-DD").add(1,"days"),i=n.clone();while(i.isBefore(s,"day")){var o=this.buildDataUrl(t,i);z.a.get(o).then((function(t){var e=N.readVtps(t.data),a=!0,n=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var c=i.value;r.storeDataRow(c)}}catch(l){n=!0,s=l}finally{try{a||null==o.return||o.return()}finally{if(n)throw s}}})).catch((function(){})),i.add(1,"days")}},buildDataUrl:function(t,e){return"".concat(Y.dataBaseUrl,"/").concat(t,"/").concat(e.format("YYYY"),"/").concat(t,"_vpts_").concat(e.format("YYYYMMDD"),".txt")}},computed:{selectedRadarName:function(){var t=this;return this.availableRadars.find((function(e){return e.value==t.selectedRadar})).text},selectedRadarCountry:function(){var t=this;return this.availableRadars.find((function(e){return e.value==t.selectedRadar})).country},radarVtpsAsArray:function(){for(var t=[],e=0,a=Object.entries(this.radarVtps);e<a.length;e++)for(var r=Object(d["a"])(a[e],2),n=r[0],s=r[1],i=0,o=Object.entries(s);i<o.length;i++){var c=Object(d["a"])(o[i],2),l=c[0],u=c[1],f={timestamp:n,height:l};t.push(T({},f,{},u))}return t}},components:{VPChart:g,VPIChart:O}},E=V,F=Object(j["a"])(E,o,c,!1,null,null,null),H=F.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"danger"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("CROW prototype")]),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{href:"#"}},[t._v("Link")]),a("b-nav-item",{attrs:{href:"#",disabled:""}},[t._v("Disabled")])],1)],1)],1)},$=[],L={},U=Object(j["a"])(L,B,$,!1,null,null,null),I=U.exports,J={name:"app",components:{Crow:H,CrowNavbar:I}},q=J,G=(a("034f"),Object(j["a"])(q,s,i,!1,null,null,null)),W=G.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(W)}}).$mount("#app")},"85ec":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.06ace961.js.map