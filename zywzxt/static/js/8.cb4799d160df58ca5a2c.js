webpackJsonp([8],{BFqH:function(t,a){},Bg6X:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("mvHQ"),n=e.n(s),r={data:function(){return{yytjpage:"yytjpage",wzqkpage:"wzqkpage",rangeDate:[new Date,new Date],search_obj:{startDate:"",endDate:"",pageNum:1,pageSize:50},tableData:{list:[],pageNum:1,pageSize:50,total:0}}},watch:{rangeDate:function(t,a){t&&(this.search_obj.startDate=this.$common.dateFormatStr(this.rangeDate[0],"yyyy-MM-dd"),this.search_obj.endDate=this.$common.dateFormatStr(this.rangeDate[1],"yyyy-MM-dd"),this.getWzqkList())}},created:function(){document.title="数据统计-问诊情况",this.initPage()},methods:{rowClassname:function(){return"rowClassname"},headerClassname:function(){return"headerClassname"},gotoYytjPage:function(t){var a={path:t,data:{}};this.$store.dispatch("setPathParams",n()(a));var e={path:"wzqkpage",data:this.search_obj};this.$store.dispatch("setPrePathParams",n()(e)),this.$common.GotoPage(t,a,this)},initPage:function(){var t=JSON.parse(window.localStorage.getItem("pathParams"));t.data.pageNum&&(this.search_obj.pageNum=t.data.pageNum),t.data.pageSize&&t.data.pageSize>=50&&(this.search_obj.pageSize=t.data.pageSize),t.data.startDate?this.search_obj.startDate=t.data.startDate:this.search_obj.startDate=this.$common.dateFormatStr(new Date,"yyyy-MM-dd"),t.data.endDate?this.search_obj.endDate=t.data.endDate:this.search_obj.endDate=this.$common.dateFormatStr(new Date,"yyyy-MM-dd"),this.getWzqkList()},getWzqkList:function(){var t=this,a=this.search_obj;t.$http.get("/dataStatistics/getInquirySituation",{params:a}).then(function(a){"1"==a.code?"[]"!=n()(a.data.pageInfo.list)?t.tableData=a.data.pageInfo:t.tableData=[]:t.$common.openErrorMsgBox(a.msg,t)}).catch(function(a){t.$common.openErrorMsgBox(a,t)})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.search_obj.pageNum=t,this.getWzqkList(this.search_obj)},tableprint:function(){var t=document.getElementById("wzqktable"),a={};a.rangDate=this.search_obj.startDate+" ~ "+this.search_obj.endDate,a.list=this.tableData.list,this.$tablePrint(t,{data:a,type:"1"})}}},o={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sjtj-wzqk-container"},[e("div",{staticClass:"search-row"},[e("div",{staticClass:"search-row-btn-group"},[e("el-button",{staticClass:"btn-default wzqk-btn"},[t._v("每日问诊情况")]),t._v(" "),e("el-button",{staticClass:"btn-default yytj-btn",on:{click:function(a){t.gotoYytjPage(t.yytjpage)}}},[t._v("用药统计")])],1)]),t._v(" "),e("div",{staticClass:"search-row flex-justify-content"},[e("el-date-picker",{staticClass:"wzrq-input",attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.rangeDate,callback:function(a){t.rangeDate=a},expression:"rangeDate"}}),t._v(" "),e("span",{attrs:{name:"wzGjrs"}},[t._v("共计人数："+t._s(t.tableData.total))])],1),t._v(" "),e("div",{staticClass:"table-continer"},[e("el-table",{staticStyle:{border:"1px solid #ebeef5","overflow-y":"auto"},attrs:{id:"wzqktable",data:t.tableData.list,"header-row-class-name":t.headerClassname,"row-class-name":t.rowClassname,stripe:""}},[e("el-table-column",{attrs:{type:"index",label:"序号",width:"160"}}),t._v(" "),e("el-table-column",{attrs:{prop:"pName",label:"姓名",width:"200"}}),t._v(" "),e("el-table-column",{attrs:{prop:"gender",label:"性别",width:"120"}}),t._v(" "),e("el-table-column",{attrs:{prop:"age",label:"年龄",width:"200"}}),t._v(" "),e("el-table-column",{attrs:{prop:"residence",label:"来自",width:"400"}}),t._v(" "),e("el-table-column",{attrs:{prop:"description",label:"诊断",width:"400"}}),t._v(" "),e("el-table-column",{attrs:{prop:"times",label:"第几次",width:"120"}}),t._v(" "),e("el-table-column",{attrs:{prop:"amount",label:"付数"}})],1)],1),t._v(" "),e("div",{staticClass:"foot-container"},[e("div",{staticClass:"page-container"},[e("el-pagination",{attrs:{background:"","current-page":t.tableData.pageNum,"page-size":t.tableData.pageSize,layout:"total, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),e("div",{staticClass:"search-row-btn-group"},[e("el-button",{staticClass:"btn-default",staticStyle:{width:"200px","border-radius":"8px"},on:{click:t.tableprint}},[t._v("打印")])],1)])])},staticRenderFns:[]};var i=e("VU/8")(r,o,!1,function(t){e("BFqH")},null,null);a.default=i.exports}});
//# sourceMappingURL=8.cb4799d160df58ca5a2c.js.map