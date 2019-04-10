webpackJsonp([3],{"8GtK":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,n=a("bOdI"),o=a.n(n),r=a("mvHQ"),l=a.n(r),i={data:function(){return{roleuser:{},wzqkpage:"wzqkpage",rangeDate:null,search_obj:{startDate:null,endDate:null,medicine:null,pageNum:1,pageSize:500},table:[]}},created:function(){document.title="数据统计-用药统计",this.initPage(),this.roleuser=this.$store.getters.gettersroleuser},watch:{rangeDate:function(t,e){this.rangeDate?(this.search_obj.startDate=this.$common.dateFormatStr(this.rangeDate[0],"yyyy-MM-dd"),this.search_obj.endDate=this.$common.dateFormatStr(this.rangeDate[1],"yyyy-MM-dd")):(this.search_obj.startDate=null,this.search_obj.endDate=null)}},methods:(s={downLoad:function(){var t={patientId:brid};this.$http.post("/inquiry/newInquiry",t).then(function(t){var e=new Blob([res.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"}),a=document.createElement("a"),s=window.URL.createObjectURL(e);a.href=s,a.download="任务统计.xls",document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(s)}).catch(function(t){console.log(t)})},rowClassname:function(){return"rowClassname"},headerClassname:function(){return"headerClassname"},gotoWzqkPage:function(t){var e={path:t,data:{}};this.$store.dispatch("setPathParams",l()(e));var a={path:"yytjpage",data:this.search_obj};this.$store.dispatch("setPrePathParams",l()(a)),this.$common.GotoPage(t,e,this)},initPage:function(){var t=JSON.parse(window.localStorage.getItem("pathParams"));t.data.pageNum&&(this.search_obj.pageNum=t.data.pageNum),t.data.pageSize&&(this.search_obj.pageSize=t.data.pageSize),t.data.startDate&&(this.search_obj.startDate=t.data.startDate),t.data.endDate&&(this.search_obj.endDate=t.data.endDate),t.data.medicine&&(this.search_obj.medicine=t.data.medicine),this.getYytjList()},getYytjList:function(){var t=this,e=this.search_obj;t.$http.get("/dataStatistics/drugUse",{params:e}).then(function(e){console.log(e),"1"==e.code?t.setThreeList(e.data.pageInfo.list):t.$common.openErrorMsgBox(e.msg,t)}).catch(function(e){t.$common.openErrorMsgBox(e,t)})}},o()(s,"gotoWzqkPage",function(t){var e={path:t,data:{}};this.$store.dispatch("setPathParams",l()(e));var a={path:"yytjpage",data:this.search_obj};this.$store.dispatch("setPrePathParams",l()(a)),this.$common.GotoPage(t,e,this)}),o()(s,"setThreeList",function(t){if(this.table=[],console.log(t.length),t.length>0&&"[]"!=l()(t)){var e=Math.ceil(t.length/120);console.log("数字是"+e);for(var a=0;a<e;a++){var s=new Array,n=new Array,o=new Array,r=t.length-120*a;if(r>40){s=t.slice(0+120*a,40+120*a),n=t.slice(40+120*a,80+120*a),o=t.slice(80+120*a,120+120*a)}else s=t.slice(0,r);console.log("11111111111"),s=this.setYwListIndex(s,1),n=this.setYwListIndex(n,2),o=this.setYwListIndex(o,3);var i={list1:[],list2:[],list3:[]};i.list1=s,i.list2=n,i.list3=o,this.table.push(i)}console.log("table是"+this.table[0].list1[0].medicine)}}),o()(s,"setYwListIndex",function(t,e){if(t&&t.length>0)for(var a in t)t[a]&&t[a].yindex||(t[a].yindex=null);return t}),o()(s,"tableprint",function(){var t=document.getElementById("wzqktable"),e={};e.table=this.table,e.rangDate=(this.search_obj.startDate?this.search_obj.startDate:"")+" ~ "+(this.search_obj.endDate?this.search_obj.endDate:""),this.$tablePrint(t,{data:e,type:"2"})}),o()(s,"exportExcel",function(){var t=this,e="/dataStatistics/drugUseToExcel?startDate="+this.search_obj.startDate+"&endDate="+this.search_obj.endDate+"&medicine="+this.search_obj.medicine+"&pageNum=1&pageSize=500",a=t.$common.openLoading("病历word文档导出中，请耐心等待",t);t.$http.get(e,{responseType:"arraybuffer"}).then(function(t){console.log(e),console.log(t),a.close();var s=new Blob([t],{type:"application/vnd.ms-excel"}),n=URL.createObjectURL(s),o=document.createElement("a");o.href=n,o.setAttribute("download","用药统计.xlsx"),document.body.appendChild(o),o.click()}).catch(function(e){a.close(),t.$common.openErrorMsgBox(e,t)})}),s)},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sjtj-yytj-container"},[a("div",{staticClass:"search-row"},[a("div",{staticClass:"search-row-btn-group"},[2==t.roleuser?a("el-button",{staticClass:"btn-default",staticStyle:{width:"100px"},on:{click:t.exportExcel}},[t._v("导出")]):t._e()],1),t._v(" "),a("div",{staticClass:"search-row-btn-group"},[a("el-button",{staticClass:"btn-default wzqk-btn",on:{click:function(e){t.gotoWzqkPage(t.wzqkpage)}}},[t._v("每日问诊情况")]),t._v(" "),a("el-button",{staticClass:"btn-default yytj-btn"},[t._v("用药统计")])],1),t._v(" "),a("div",{staticClass:"search-input-item"},[a("el-input",{attrs:{placeholder:"请输入药名"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getYytjList(e):null}},model:{value:t.search_obj.medicine,callback:function(e){t.$set(t.search_obj,"medicine",e)},expression:"search_obj.medicine"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getYytjList},slot:"append"})],1)],1),t._v(" "),a("div",{staticClass:"search-rangedate-item"},[a("el-date-picker",{staticClass:"yytj-range-date",attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{blur:t.getYytjList},model:{value:t.rangeDate,callback:function(e){t.rangeDate=e},expression:"rangeDate"}})],1),t._v(" "),a("div",{staticClass:"search-row-btn-group"},[a("el-button",{staticClass:"btn-default",staticStyle:{width:"200px"},on:{click:t.tableprint}},[t._v("打印")])],1)]),t._v(" "),t._l(this.table,function(e){return a("div",{staticClass:"table-continer",staticStyle:{"margin-bottom":"80px"}},[a("el-table",{attrs:{data:e.list1,"header-row-class-name":t.headerClassname,"row-class-name":t.rowClassname,stripe:""}},[a("el-table-column",{attrs:{prop:"yindex",label:"序号",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"medicine",label:"药名",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dose",label:"药房用量",width:"191"}}),t._v(" "),a("el-table-column",{attrs:{label:"药方用量",width:"155"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n              "+t._s("0"==e.row.notStock?"":"+"+e.row.notStock)+"\n            ")]}}])})],1),t._v(" "),a("el-table",{attrs:{data:e.list2,"header-row-class-name":t.headerClassname,"row-class-name":t.rowClassname,stripe:""}},[a("el-table-column",{attrs:{prop:"yindex",label:"序号",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"medicine",label:"药名",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dose",label:"药房用量",width:"191"}}),t._v(" "),a("el-table-column",{attrs:{label:"药方用量",width:"155"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s("0"==e.row.notStock?"":"+"+e.row.notStock)+"\n        ")]}}])})],1),t._v(" "),a("el-table",{attrs:{data:e.list3,"header-row-class-name":t.headerClassname,"row-class-name":t.rowClassname,stripe:""}},[a("el-table-column",{attrs:{prop:"yindex",label:"序号",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"medicine",label:"药名",width:"160"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dose",label:"药房用量",width:"191"}}),t._v(" "),a("el-table-column",{attrs:{label:"药方用量",width:"155"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s("0"==e.row.notStock?"":"+"+e.row.notStock)+"\n        ")]}}])})],1)],1)})],2)},staticRenderFns:[]};var d=a("VU/8")(i,c,!1,function(t){a("RE1H")},null,null);e.default=d.exports},"9bBU":function(t,e,a){a("mClu");var s=a("FeBl").Object;t.exports=function(t,e,a){return s.defineProperty(t,e,a)}},C4MV:function(t,e,a){t.exports={default:a("9bBU"),__esModule:!0}},RE1H:function(t,e){},bOdI:function(t,e,a){"use strict";e.__esModule=!0;var s,n=a("C4MV"),o=(s=n)&&s.__esModule?s:{default:s};e.default=function(t,e,a){return e in t?(0,o.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},mClu:function(t,e,a){var s=a("kM2E");s(s.S+s.F*!a("+E39"),"Object",{defineProperty:a("evD5").f})}});
//# sourceMappingURL=3.f620b5d8df6da837307d.js.map