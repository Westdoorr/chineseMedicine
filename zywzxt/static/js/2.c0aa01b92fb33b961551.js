webpackJsonp([2],{"GO+h":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=n.n(a),c=n("exGp"),s=n.n(c),l=n("mvHQ"),u=n.n(l),h={data:function(){return{brxxpage:"brxxpage",grblglpage:"grblglpage",bryfpage:"bryfpage",table_edit:"bryfpage",search_obj:{pname:"",pageNum:1,pageSize:10},tableData:{list:[],pageNum:1,pageSize:10,total:0}}},created:function(){document.title="病人管理",this.initPage()},methods:{rowClassname:function(){return"rowClassname"},headerClassname:function(){return"headerClassname"},handleClick:function(t){console.log(t)},gotoyfpage:function(t,e){console.log("病人管理行",t);var n={};n.pId=t.pId,n.pname=this.search_obj.pname;var r={path:e,data:n};this.$store.dispatch("setPathParams",u()(r));var o={path:"brglpage",data:this.search_obj};this.$store.dispatch("setPrePathParams",u()(o)),this.$common.GotoPage(e,n,this)},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.search_obj.pageNum=t,this.getBrList(this.search_obj)},initPage:function(){var t=JSON.parse(window.localStorage.getItem("pathParams"));""!=t.data.pname&&(this.search_obj.pname=t.data.pname),t.data.pageNum&&(this.search_obj.pageNum=t.data.pageNum),t.data.pageSize&&(this.search_obj.pageSize=t.data.pageSize),this.getBrList(this.search_obj)},getBrList:function(t){var e=this;t!=e.search_obj&&(t=e.search_obj);e.$http.get("/patientManage/getPatientList",{params:t}).then(function(t){console.log("病人管理列表",t),"1"==t.code?e.tableData=t.data.pageInfo:e.$common.openErrorMsgBox(t.msg,e)}).catch(function(t){e.$common.openErrorMsgBox(t,e)})},opencomfigMethod:function(t,e,n){this.$common.openComfigDialog(t,e,n,this)},delteBrinfoM:function(t){var e=this,n="/index/deletePatient?patientId="+t.pId;e.$http.delete(n).then(function(t){"1"==t.code?(e.$common.openSuccessMsgBox("病人信息移除成功！",e),setTimeout(function(){e.getBrList()},1e3)):e.$common.openErrorMsgBox(t.msg,e)}).catch(function(t){e.$common.openErrorMsgBox(t,e)})},newInquiry_new:function(t){console.log("新建复诊");var e=this,n={patientId:t};console.log("fdsds",n),this.$http.post("/inquiry/newInquiry",n).then(function(n){if("1"==n.code){var r={pId:t,inquiryId:n.data.inquiryId};e.getLastInquiry(r)}else e.$common.openErrorMsgBox(n.msg,e)}).catch(function(t){console.log(t),setTimeout(function(){loading.close(),e.$common.openErrorMsgBox(t,e)},1e3)})},getLastInquiry:function(t){var e="/inquiry/getLatestInquiryInfo?patientId="+t.pId,n=this;this.$http.get(e).then(function(e){if(console.log("请求日期",e),"1"==e.code){if("{}"!=u()(e.data)){e.data.inquiryInfo.inquiryId?t.lastinquiryId=e.data.inquiryInfo.inquiryId:t.lastinquiryId="";var r=new Object;r.path="bryfpage",r.data=t,n.$store.dispatch("setPathParams",u()(r));var o=new Object;o.path="brglpage",o.data=n.search_obj,o.data=n.search_obj,o.is_display_xj=!0,o.is_display_fh=!0,o.data.xzfz="new",o.data.inquiryDate=e.data.inquiryInfo.inquiryDate,o.data.date=e.data.inquiryInfo.date,n.$store.dispatch("setPrePathParams",u()(o)),n.$common.GotoPage("bryfpage",t,n)}}else n.$common.openErrorMsgBox(e.msg,n)}).catch(function(t){setTimeout(function(){n.$common.openErrorMsgBox(t,n)},1e3)})},triggerSelect:function(){this.$refs.fileinput.click()},selectedFile:function(t){console.log(t.target.files[0]),this.uploadFile()},uploadFile:function(){var t=this;return s()(o.a.mark(function e(){var n,r,a,c,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t,!((r=t.$refs.fileinput.files).length>0)){e.next=11;break}return a=n.$common.openLoading("数据同步中",n),(c=new FormData).append("file",r[0]),e.next=8,new i.a(function(t,e){n.$http.post("/inquiry/getObjFromFile",c).then(function(e){t(e)}).catch(function(t){e(t)})});case 8:s=e.sent,a.close(),"1"==s.code?n.$common.openSuccessMsgBox("病人信息同步完成！",n):n.$common.openErrorMsgBox(s.msg,n);case 11:case"end":return e.stop()}},e,t)}))()}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"brgl-container"},[n("div",{staticClass:"search-row"},[n("div",{staticClass:"search-row-input-item"},[n("el-input",{attrs:{placeholder:"请输入病人名字"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getBrList(e):null}},model:{value:t.search_obj.pname,callback:function(e){t.$set(t.search_obj,"pname",e)},expression:"search_obj.pname"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getBrList},slot:"append"})],1)],1),t._v(" "),n("div",{staticClass:"search-row-btn-group"},[n("el-button",{staticClass:"btn-default",on:{click:t.triggerSelect}},[t._v("同步基本信息")]),t._v(" "),n("input",{ref:"fileinput",style:{display:"none"},attrs:{type:"file"},on:{change:t.selectedFile}})],1)]),t._v(" "),n("div",{staticClass:"table-continer"},[n("el-table",{staticStyle:{border:"1px solid #ebeef5","overflow-y":"auto"},attrs:{data:t.tableData.list,"header-row-class-name":t.headerClassname,"row-class-name":t.rowClassname,stripe:""}},[n("el-table-column",{attrs:{prop:"index",label:"序号",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"pName",label:"姓名",width:"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"latestDate",label:"最近就诊时间",width:"320"}}),t._v(" "),n("el-table-column",{attrs:{prop:"gender",label:"性别",width:"110"}}),t._v(" "),n("el-table-column",{attrs:{prop:"age",label:"年龄",width:"110"}}),t._v(" "),n("el-table-column",{attrs:{prop:"residence",label:"来源地",width:"300"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"btn-font-default",attrs:{type:"text"},on:{click:function(n){t.gotoyfpage(e.row,t.brxxpage)}}},[t._v("基本信息")]),t._v(" "),n("el-button",{staticClass:"btn-font-default",attrs:{type:"text"},on:{click:function(n){t.gotoyfpage(e.row,t.grblglpage)}}},[t._v("查看药方")]),t._v(" "),n("el-button",{staticClass:"btn-font-default",attrs:{type:"text"},on:{click:function(n){t.opencomfigMethod("是否新建复诊?",t.newInquiry_new,e.row.pId)}}},[t._v("新建复诊")]),t._v(" "),n("el-button",{staticClass:"btn-font-default bnt-font-color",attrs:{type:"text"},on:{click:function(n){t.opencomfigMethod("请确认删除病人信息?",t.delteBrinfoM,e.row)}}},[t._v("移除")])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"page-container"},[n("el-pagination",{attrs:{background:"","current-page":t.tableData.pageNum,"page-size":t.tableData.pageSize,layout:"total, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},staticRenderFns:[]};var p=n("VU/8")(h,f,!1,function(t){n("Ja/s")},null,null);e.default=p.exports},"Ja/s":function(t,e){},SldL:function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",l="object"==typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{(u=e.regeneratorRuntime=l?t.exports:{}).wrap=w;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",g={},m={};m[i]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(S([])));v&&v!==r&&o.call(v,i)&&(m=v);var b=j.prototype=_.prototype=Object.create(m);L.prototype=b.constructor=j,j.constructor=L,j[s]=L.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},u.awrap=function(t){return{__await:t}},E(I.prototype),I.prototype[c]=function(){return this},u.AsyncIterator=I,u.async=function(t,e,n,r){var o=new I(w(t,e,n,r));return u.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},E(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function w(t,e,n,r){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),i=new P(r||[]);return a._invoke=function(t,e,n){var r=h;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return q()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?d:f,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function _(){}function L(){}function j(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function I(t){var e;this._invoke=function(n,r){function a(){return new Promise(function(e,a){!function e(n,r,a,i){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==typeof l&&o.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(l).then(function(t){s.value=t,a(s)},i)}i(c.arg)}(n,r,e,a)})}return e=e?e.then(a,a):a()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function $(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach($,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:q}}function q(){return{value:n,done:!0}}}(function(){return this}()||Function("return this")())},Xxa5:function(t,e,n){t.exports=n("jyFz")},exGp:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("//Fk"),a=(r=o)&&r.__esModule?r:{default:r};e.default=function(t){return function(){var e=t.apply(this,arguments);return new a.default(function(t,n){return function r(o,i){try{var c=e[o](i),s=c.value}catch(t){return void n(t)}if(!c.done)return a.default.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})}}},jyFz:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,a=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("SldL"),o)r.regeneratorRuntime=a;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}}});
//# sourceMappingURL=2.c0aa01b92fb33b961551.js.map