webpackJsonp([5],{"56lb":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{dialogFormVisible:!1,search_obj:{},keyWords:"",medicinelist:[{medicineName:1,unitPrice:1,source:10,medicineId:""}]}},created:function(){document.title="药品管理",this.getmedicine()},methods:{removemedicine:function(e){var t=this;this.$confirm("确定删除此药品?","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning"}).then(function(){var n=t.medicinelist[e];t.$http.delete("/medicineManage/deleteMedicine",{params:{medicineId:n.medicineId}}).then(function(e){1==e.code&&t.getmedicine()}).catch(function(){t.$message.error("删除失败")})})},updatemedicine:function(){for(var e=this,t=0;t<e.medicinelist.length;t++)""!=e.medicinelist[t].medicineId&&null!=e.medicinelist[t].medicineId||(e.medicinelist[t].medicineId=e.medicinelist[t].medicineName),console.log("名字"+e.medicinelist[t].medicineName),console.log("Id"+e.medicinelist[t].medicineId),console.log("价格"+e.medicinelist[t].unitPrice),console.log("来源地"+e.medicinelist[t].source),console.log(t);this.$http.post("/medicineManage/updateMedicineList",this.medicinelist).then(function(t){"1"==t.code?(e.$common.openSuccessMsgBox("修改成功",e),this.getmedicine()):e.$common.openErrorMsgBox(t.msg,e)}).catch(function(e){console.log(e)})},searchmedicine:function(){var e=this,t=e.keyWords;console.log("参数",t),e.$http.get("/medicineManage/findMedicineList",{params:{keyWord:t}}).then(function(t){console.log(t),1==t.code?(e.medicinelist=t.data.medicinelist,console.log("药品"+this.medicinelist)):e.$common.openErrorMsgBox(t.msg,e)}).catch(function(t){e.$common.openErrorMsgBox(t,e)})},getmedicine:function(){var e=this;this.$http.get("/medicineManage/getMedicineList").then(function(t){1==t.code&&(e.medicinelist=t.data.medicinelist)}).catch(function(e){console.log(e)})},addRow:function(){this.medicinelist.push({medicineName:"",unitPrice:"",source:"",medicineId:""})},deleteRow:function(e,t){t.splice(e,1)},rowClassname:function(){return"rowClassname"},headerClassname:function(){return"headerClassname"},handleClick:function(e){console.log(e)},delteBrinfoM:function(e){var t=this,n="/index/deletePatient?patientId="+e.pId;t.$http.delete(n).then(function(e){"1"==e.code?(t.$common.openSuccessMsgBox("病人信息移除成功！",t),setTimeout(function(){t.getBrList()},1e3)):t.$common.openErrorMsgBox(e.msg,t)}).catch(function(e){t.$common.openErrorMsgBox(e,t)})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"brgl-container"},[n("div",{staticClass:"search-row"},[n("div",{staticClass:"search-row-input-item"},[n("el-input",{attrs:{placeholder:"请输入药品名"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.searchmedicine(t):null}},model:{value:e.keyWords,callback:function(t){e.keyWords=t},expression:"keyWords"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchmedicine},slot:"append"})],1)],1),e._v(" "),n("div",{staticClass:"addmedicine"},[n("el-button",{staticClass:"button-size",attrs:{type:"primary"},on:{click:function(t){e.addRow()}}},[e._v("药品新增")])],1)]),e._v(" "),n("div",{staticClass:"table-continer"},[n("el-table",{staticStyle:{border:"1px solid #ebeef5","overflow-y":"auto"},attrs:{data:e.medicinelist,"header-row-class-name":e.headerClassname,"row-class-name":e.rowClassname,stripe:""}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"150"}}),e._v(" "),n("el-table-column",{attrs:{prop:"medicineName",label:"药名",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"new-yfmc",model:{value:t.row.medicineName,callback:function(n){e.$set(t.row,"medicineName",n)},expression:"scope.row.medicineName"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"unitPrice",label:"价格（元/g）",width:"270"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"new-yfmc",model:{value:t.row.unitPrice,callback:function(n){e.$set(t.row,"unitPrice",n)},expression:"scope.row.unitPrice"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"source",label:"来源",width:"500"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{staticClass:"new-yfmc",model:{value:t.row.source,callback:function(n){e.$set(t.row,"source",n)},expression:"scope.row.source"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",width:"600"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"btn-font-default bnt-font-color",attrs:{type:"text"},on:{click:function(n){e.removemedicine(t.$index)}}},[e._v("删除药品")]),e._v(" "),n("el-button",{staticClass:"btn-font-default",attrs:{type:"text"},on:{click:function(e){}}},[e._v("修改药品")])]}}])})],1)],1),e._v(" "),n("div",{staticClass:"foot"},[n("el-button",{staticClass:"button-size",attrs:{type:"primary"},on:{click:e.updatemedicine}},[e._v("确认修改")])],1)])},staticRenderFns:[]};var c=n("VU/8")(i,o,!1,function(e){n("r9XW"),n("lF7L")},null,null);t.default=c.exports},lF7L:function(e,t){},r9XW:function(e,t){}});
//# sourceMappingURL=5.6d27a01eec97263c674d.js.map