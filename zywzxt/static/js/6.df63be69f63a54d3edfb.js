webpackJsonp([6],{"/tie":function(e,t,a){e.exports=a.p+"static/img/zhongyi1.553dd0c.jpg"},FFC6:function(e,t){},loco:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("mvHQ"),o=a.n(l),s={data:function(){return{ppname:"",b_country:null,placeDate:{},province:[],city:[],s_country:null,sourceProvince:[],sourceCity:[],rules:{height:[{type:"number",message:"只能填写数字",trigger:"change"}],weight:[{type:"number",message:"只能填写数字",trigger:"change"}],age:[{type:"number",message:"只能填写数字",trigger:"change"}],certificatesNumber:[{validator:function(e,t,a){if(t){if(t&&""!=t&&(t=t.trim()),!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(t)||/^[a-zA-Z]{5,17}$/.test(t)||/^[a-zA-Z0-9]{5,17}$/.test(t)||/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/.test(t)))return a(new Error("请输入正确的证件号"));a()}else a()},trigger:"change"}],dailyDrink:[{type:"number",message:"只能填写数字",trigger:"change"}],pregnant:[{type:"number",message:"只能填写数字",trigger:"change"}],birth:[{type:"number",message:"只能填写数字",trigger:"change"}]},basicInfo:{id:null,patientId:null,certificatesType:null,certificatesNumber:null,pname:null,gender:null,age:null,birthday:null,nationality:null,national:null,incunabulum:null,residence:null,height:null,weight:null,occupation:null,marriage:null,religiousBelief:null,eatingHabits:null,ehRemark:null,heredityHistory:null,hhRemark:null,infectionHistory:null,ihRemark:null,traumaHistory:null,surgeryHistory:null,familyHistory:null,contactHistory:null,chRemark:null,meAllergy:null,meallRemark:null,allergy:null,allRemark:null,bloodTrans:null,smoke:null,dailySmoke:null,quitSmoke:null,pregnant:null,birth:null,prematureLabour:null,abortion:null,insertDate:1534608e6,sourceProvince:null,sourceCity:null,incuProvince:null,incuCity:null,quitSmokeTime:null,contraception:null,drink:null,dailyDrink:null,quitDrink:null,quitDrinkTime:null,iqDate:null}}},computed:{birthday:function(){return this.basicInfo.birthday}},watch:{birthday:function(e,t){var a=this.$common.GetAgeByBrithday(e);this.basicInfo.age=a}},created:function(){this.$common.getPlace(this,this.getBrxxinfo),this.getinformation()},methods:{getinformation:function(){var e=this;this.params=this.$route.query,console.log("地址后台挂的值",this.params);var t=JSON.parse(window.localStorage.getItem("pathParams"));console.log("地址后台缓存",t);this.$http.get("/patientManage/getPatientInfo",{params:{pId:this.params.pId}}).then(function(t){e.ppname=t.data.patientInfo.pname,document.title=e.ppname+"的基本信息",console.log("名字是嘿嘿嘿"+e.ppname)}).catch(function(e){console.log(e)})},gotoBlglpage:function(){var e=window.localStorage.getItem("prePathParams"),t=window.localStorage.getItem("pathParams");this.$store.dispatch("setPathParams",e),this.$store.dispatch("setPrePathParams",t),this.$common.GotoPage("brglpage",JSON.parse(e),this)},clearAllCheckbox:function(e){e&&(this.basicInfo.allergy=["无"])},setAllCheckbox:function(e){if(e){var t=this.basicInfo.allergy.indexOf("无");-1!=t&&this.basicInfo.allergy.splice(t,1)}},clearConCheckbox:function(e){e&&(this.basicInfo.contactHistory=["无"])},setConCheckbox:function(e){if(e){var t=this.basicInfo.contactHistory.indexOf("无");-1!=t&&this.basicInfo.contactHistory.splice(t,1)}},clearinCheckbox:function(e){e&&(this.basicInfo.infectionHistory=["无"])},setInCheckbox:function(e){if(e){var t=this.basicInfo.infectionHistory.indexOf("无");-1!=t&&this.basicInfo.infectionHistory.splice(t,1)}},cLearhCheckbox:function(e){e&&(this.basicInfo.heredityHistory=["无"])},sethCheckBox:function(e){if(e){var t=this.basicInfo.heredityHistory.indexOf("无");-1!=t&&this.basicInfo.heredityHistory.splice(t,1)}},setCityList:function(e){1==e?(this.city=this.$common.setCityList(this.basicInfo.incuProvince,this),this.basicInfo.incuCity=null,console.log(this.city)):(this.sourceCity=this.$common.setCityList(this.basicInfo.sourceProvince,this),this.basicInfo.sourceCity=null)},setProList:function(e){1==e?(this.province=this.$common.setProList(this.b_country,this),this.basicInfo.incuProvince=null,this.basicInfo.incuCity=null):(this.sourceProvince=this.$common.setProList(this.s_country,this),this.basicInfo.sourceProvince=null,this.basicInfo.sourceCity=null)},detailBrbrth:function(e){e.sourceProvince&&(1==this.$common.isChinaProvince(e.sourceProvince,this)?(this.s_country=1,this.sourceProvince=this.$common.setProList(this.s_country,this),this.sourceCity=this.$common.setCityList(e.sourceProvince,this)):(this.s_country=0,this.sourceProvince=this.$common.setProList(this.s_country,this),this.sourceCity=this.$common.setCityList(e.sourceProvince,this)));e.incuProvince&&(this.b_country=this.$common.isChinaProvince(e.incuProvince,this),this.province=this.$common.setProList(this.b_country,this),this.city=this.$common.setCityList(e.incuProvince,this))},setNullArray:function(e){var t=JSON.parse(o()(e)),a=["height","weight","dailyDrink","pregnant","birth"];for(var l in t)t[l]||(-1!=a.indexOf(l)?t[l]=null:t[l]="");var s=["eatingHabits","heredityHistory","infectionHistory","contactHistory","meAllergy","allergy"];for(var l in s)if(t[s[l]])try{if("[]"==o()(t[s[l]])){i=new Array;"eatingHabits"!=s[l]?i.push("无"):i.push("非素食者"),t[s[l]]=i}else t[s[l]]=JSON.parse(t[s[l]])}catch(e){i=new Array;"eatingHabits"!=s[l]?i.push("无"):i.push("非素食者"),t[s[l]]=i}else{var i=new Array;"eatingHabits"!=s[l]?i.push("无"):i.push("非素食者"),t[s[l]]=i}return t},getBrxxinfo:function(){var e=JSON.parse(window.localStorage.getItem("pathParams")),t=this;t.$http.get("/patientManage/getPatientInfo",{params:e.data}).then(function(e){"1"==e.code?(t.detailBrbrth(e.data.patientInfo),t.basicInfo=t.setNullArray(e.data.patientInfo),console.log("1"+t.basicInfo.sourceProvince),console.log("2"+t.basicInfo.sourceCity)):t.$common.openErrorMsgBox(e.msg,t)}).catch(function(e){t.$common.openErrorMsgBox(e,t)})},setSuBmitParams:function(e){var t=JSON.parse(o()(e)),a=["eatingHabits","heredityHistory","infectionHistory","contactHistory","meAllergy","allergy"];for(var l in a){var s=o()(t[a[l]]);s=this.$common.decodeToStr(s),t[a[l]]=s}return t},opencomfigMethod:function(e,t,a){this.$common.openComfigDialog(e,t,a,this)},onSubmit:function(){var e=this,t=this;this.$refs.formName.validate(function(a){if(!a)return t.$common.openErrorMsgBox("数据项校验未通过",t),!1;var l=t.setSuBmitParams(e.basicInfo);t.$http.put("/patientManage/updatePatientInfo",l).then(function(e){"1"==e.code?(t.$common.openSuccessMsgBox("更新病人信息成功！，即将返回病人管理",t),t.goTobrglpage()):t.$common.openErrorMsgBox(e.msg,t)}).catch(function(e){t.$common.openErrorMsgBox(e,t)})})},goTobrglpage:function(){var e=window.localStorage.getItem("prePathParams"),t=window.localStorage.getItem("pathParams");this.$store.dispatch("setPathParams",e),this.$store.dispatch("setPrePathParams",t),this.$common.GotoPage("brglpage",JSON.parse(e),this)}}},i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"brxx-info-container"},[l("el-form",{ref:"formName",attrs:{rules:e.rules,model:e.basicInfo,"label-width":"170px"}},[l("div",{staticClass:"picture"},[l("img",{staticStyle:{height:"400px",width:"280px"},attrs:{src:a("/tie")}})]),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"病人编号"}},[l("el-input",{staticStyle:{width:"86%"},attrs:{placeholder:"",readonly:!0},model:{value:e.basicInfo.patientId,callback:function(t){e.$set(e.basicInfo,"patientId",t)},expression:"basicInfo.patientId"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:6,offset:4}},[l("el-form-item",{attrs:{label:"身高",prop:"height"}},[l("el-input",{staticClass:"suffix-input-width",attrs:{placeholder:""},model:{value:e.basicInfo.height,callback:function(t){e.$set(e.basicInfo,"height",e._n(t))},expression:"basicInfo.height"}}),l("span",{staticClass:"suffix-input-span"},[e._v("cm")])],1)],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-form-item",{attrs:{label:"体重",prop:"weight"}},[l("el-input",{staticClass:"suffix-input-width",attrs:{placeholder:""},model:{value:e.basicInfo.weight,callback:function(t){e.$set(e.basicInfo,"weight",e._n(t))},expression:"basicInfo.weight"}}),l("span",{staticClass:"suffix-input-span"},[e._v("kg")])],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{staticStyle:{width:"86%"},attrs:{placeholder:""},model:{value:e.basicInfo.pname,callback:function(t){e.$set(e.basicInfo,"pname",t)},expression:"basicInfo.pname"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12,offset:4}},[l("el-form-item",{attrs:{label:"职业"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.basicInfo.occupation,callback:function(t){e.$set(e.basicInfo,"occupation",t)},expression:"basicInfo.occupation"}})],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"性别"}},[l("el-radio-group",{model:{value:e.basicInfo.gender,callback:function(t){e.$set(e.basicInfo,"gender",t)},expression:"basicInfo.gender"}},[l("el-radio",{attrs:{label:"男",value:"男"}}),e._v(" "),l("el-radio",{attrs:{label:"女",value:"女"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"婚姻史"}},[l("el-radio-group",{model:{value:e.basicInfo.marriage,callback:function(t){e.$set(e.basicInfo,"marriage",t)},expression:"basicInfo.marriage"}},[l("el-radio",{attrs:{label:"已婚",value:"已婚"}}),e._v(" "),l("el-radio",{attrs:{label:"未婚",value:"未婚"}}),e._v(" "),l("el-radio",{attrs:{label:"离异",value:"离异"}})],1)],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:8}},[l("el-form-item",{attrs:{label:"民族"}},[l("el-select",{staticStyle:{width:"86%"},attrs:{placeholder:"请选择民族"},model:{value:e.basicInfo.national,callback:function(t){e.$set(e.basicInfo,"national",t)},expression:"basicInfo.national"}},[l("el-option",{attrs:{label:"汉",value:"汉"}}),e._v(" "),l("el-option",{attrs:{label:"藏",value:"藏"}}),e._v(" "),l("el-option",{attrs:{label:"回",value:"回"}}),e._v(" "),l("el-option",{attrs:{label:"壮",value:"壮"}}),e._v(" "),l("el-option",{attrs:{label:"少数民族",value:"少数民族"}}),e._v(" "),l("el-option",{attrs:{label:"国外民族",value:"国外民族"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:12,offset:4}},[l("el-form-item",{attrs:{label:"宗教信仰"}},[l("el-select",{attrs:{placeholder:"请选择宗教"},model:{value:e.basicInfo.religiousBelief,callback:function(t){e.$set(e.basicInfo,"religiousBelief",t)},expression:"basicInfo.religiousBelief"}},[l("el-option",{attrs:{label:"无",value:"无"}}),e._v(" "),l("el-option",{attrs:{label:"佛教",value:"佛教"}}),e._v(" "),l("el-option",{attrs:{label:"道教",value:"道教"}}),e._v(" "),l("el-option",{attrs:{label:"基督教",value:"基督教"}}),e._v(" "),l("el-option",{attrs:{label:"其他宗教",value:"其他宗教"}})],1)],1)],1)],1),e._v(" "),l("div",{staticClass:"two-col-container"},[l("div",{staticClass:"frist-col-container"},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:16}},[l("el-form-item",{attrs:{label:"国籍"}},[l("el-select",{staticStyle:{width:"86%"},attrs:{placeholder:"请选择国籍"},model:{value:e.basicInfo.nationality,callback:function(t){e.$set(e.basicInfo,"nationality",t)},expression:"basicInfo.nationality"}},[l("el-option",{attrs:{label:"中国",value:"中国"}}),e._v(" "),l("el-option",{attrs:{label:"美国",value:"美国"}}),e._v(" "),l("el-option",{attrs:{label:"日本",value:"日本"}}),e._v(" "),l("el-option",{attrs:{label:"英国",value:"英国"}}),e._v(" "),l("el-option",{attrs:{label:"法国",value:"法国"}}),e._v(" "),l("el-option",{attrs:{label:"德国",value:"德国"}}),e._v(" "),l("el-option",{attrs:{label:"加拿大",value:"加拿大"}}),e._v(" "),l("el-option",{attrs:{label:"澳大利亚",value:"澳大利亚"}}),e._v(" "),l("el-option",{attrs:{label:"俄罗斯",value:"俄罗斯"}}),e._v(" "),l("el-option",{attrs:{label:"新西兰",value:"新西兰"}}),e._v(" "),l("el-option",{attrs:{label:"意大利",value:"意大利"}}),e._v(" "),l("el-option",{attrs:{label:"韩国",value:"韩国"}}),e._v(" "),l("el-option",{attrs:{label:"比利时",value:"比利时"}}),e._v(" "),l("el-option",{attrs:{label:"瑞士",value:"瑞士"}}),e._v(" "),l("el-option",{attrs:{label:"新加坡",value:"新加坡"}}),e._v(" "),l("el-option",{attrs:{label:"墨西哥",value:"墨西哥"}}),e._v(" "),l("el-option",{attrs:{label:"荷兰",value:"荷兰"}}),e._v(" "),l("el-option",{attrs:{label:"巴西",value:"巴西"}}),e._v(" "),l("el-option",{attrs:{label:"爱尔兰",value:"爱尔兰"}}),e._v(" "),l("el-option",{attrs:{label:"马来西亚",value:"马拉西亚"}}),e._v(" "),l("el-option",{attrs:{label:"丹麦",value:"丹麦"}}),e._v(" "),l("el-option",{attrs:{label:"其他",value:"其他"}})],1)],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:16}},[l("el-form-item",{attrs:{label:"证件类型"}},[l("el-select",{staticStyle:{width:"86%"},attrs:{placeholder:"请选择证件类型"},model:{value:e.basicInfo.certificatesType,callback:function(t){e.$set(e.basicInfo,"certificatesType",t)},expression:"basicInfo.certificatesType"}},[l("el-option",{attrs:{label:"身份证",value:"身份证"}}),e._v(" "),l("el-option",{attrs:{label:"护照",value:"护照"}}),e._v(" "),l("el-option",{attrs:{label:"港澳通行证",value:"港澳通行证"}})],1)],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-form-item",{staticStyle:{width:"98%"},attrs:{label:"证件编号",prop:"certificatesNumber"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.basicInfo.certificatesNumber,callback:function(t){e.$set(e.basicInfo,"certificatesNumber",t)},expression:"basicInfo.certificatesNumber"}})],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:16}},[l("el-form-item",{attrs:{label:"生日"}},[l("el-date-picker",{staticStyle:{width:"80%"},attrs:{type:"date",placeholder:"请选择日期",format:"yyyy-MM-dd"},model:{value:e.basicInfo.birthday,callback:function(t){e.$set(e.basicInfo,"birthday",t)},expression:"basicInfo.birthday"}})],1)],1),e._v(" "),l("el-col",{staticStyle:{"margin-left":"-20px"},attrs:{span:8}},[l("el-form-item",{staticClass:"age-sm-screen",attrs:{label:"年龄","label-width":"100px",prop:"age"}},[l("el-input",{attrs:{placeholder:"年龄"},model:{value:e.basicInfo.age,callback:function(t){e.$set(e.basicInfo,"age",e._n(t))},expression:"basicInfo.age"}})],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"出生地点"}},[l("el-select",{staticStyle:{width:"32%"},attrs:{placeholder:"请选择"},on:{change:function(t){e.setProList(1)}},model:{value:e.b_country,callback:function(t){e.b_country=t},expression:"b_country"}},[l("el-option",{attrs:{label:"中国",value:0}}),e._v(" "),l("el-option",{attrs:{label:"外国",value:1}})],1),e._v(" "),l("el-select",{staticStyle:{width:"32%"},attrs:{placeholder:"请选择"},on:{change:function(t){e.setCityList(1)}},model:{value:e.basicInfo.incuProvince,callback:function(t){e.$set(e.basicInfo,"incuProvince",t)},expression:"basicInfo.incuProvince"}},e._l(e.province,function(e){return l("el-option",{key:e.id,attrs:{label:e.provName,value:e.id}})})),e._v(" "),l("el-select",{staticStyle:{width:"32%"},attrs:{placeholder:"请选择"},model:{value:e.basicInfo.incuCity,callback:function(t){e.$set(e.basicInfo,"incuCity",t)},expression:"basicInfo.incuCity"}},e._l(e.city,function(e){return l("el-option",{key:e.cityId,attrs:{label:e.cityName,value:e.cityId}})}))],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"来源地"}},[l("el-select",{staticStyle:{width:"32%"},attrs:{placeholder:"请选择"},on:{change:function(t){e.setProList(2)}},model:{value:e.s_country,callback:function(t){e.s_country=t},expression:"s_country"}},[l("el-option",{attrs:{label:"中国",value:0}}),e._v(" "),l("el-option",{attrs:{label:"外国",value:1}})],1),e._v(" "),l("el-select",{staticStyle:{width:"32%"},attrs:{placeholder:"请选择"},on:{change:function(t){e.setCityList(2)}},model:{value:e.basicInfo.sourceProvince,callback:function(t){e.$set(e.basicInfo,"sourceProvince",t)},expression:"basicInfo.sourceProvince"}},e._l(e.sourceProvince,function(e){return l("el-option",{key:e.id,attrs:{label:e.provName,value:e.id}})})),e._v(" "),l("el-select",{staticStyle:{width:"32%"},attrs:{placeholder:"请选择"},model:{value:e.basicInfo.sourceCity,callback:function(t){e.$set(e.basicInfo,"sourceCity",t)},expression:"basicInfo.sourceCity"}},e._l(e.sourceCity,function(e){return l("el-option",{key:e.cityId,attrs:{label:e.cityName,value:e.cityId}})}))],1)],1)],1)],1),e._v(" "),l("div",{staticClass:"seconde-col-container"},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"饮食习惯"}},[l("el-checkbox-group",{model:{value:e.basicInfo.eatingHabits,callback:function(t){e.$set(e.basicInfo,"eatingHabits",t)},expression:"basicInfo.eatingHabits"}},[l("el-checkbox",{attrs:{label:"非素食者"}}),e._v(" "),l("el-checkbox",{attrs:{label:"完全素食者"}}),e._v(" "),l("el-checkbox",{attrs:{label:"奶蛋素食"}}),e._v(" "),l("el-checkbox",{attrs:{label:"半素食"}}),e._v(" "),l("el-checkbox",{attrs:{label:"鱼素食"}}),e._v(" "),l("el-checkbox",{attrs:{label:"果素食"}})],1)],1),e._v(" "),l("el-form-item",[l("el-input",{attrs:{placeholder:"备注"},model:{value:e.basicInfo.ehRemark,callback:function(t){e.$set(e.basicInfo,"ehRemark",t)},expression:"basicInfo.ehRemark"}})],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"遗传病史"}},[l("el-checkbox-group",{model:{value:e.basicInfo.heredityHistory,callback:function(t){e.$set(e.basicInfo,"heredityHistory",t)},expression:"basicInfo.heredityHistory"}},[l("el-checkbox",{attrs:{label:"无"},on:{change:e.cLearhCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"高血压"},on:{change:e.sethCheckBox}}),e._v(" "),l("el-checkbox",{attrs:{label:"糖尿病"},on:{change:e.sethCheckBox}}),e._v(" "),l("el-checkbox",{attrs:{label:"心脑血管疾病"},on:{change:e.sethCheckBox}}),e._v(" "),l("el-checkbox",{attrs:{label:"肿瘤"},on:{change:e.sethCheckBox}}),e._v(" "),l("el-checkbox",{attrs:{label:"心脏病"},on:{change:e.sethCheckBox}})],1)],1),e._v(" "),l("el-form-item",[l("el-input",{attrs:{placeholder:"备注"},model:{value:e.basicInfo.hhRemark,callback:function(t){e.$set(e.basicInfo,"hhRemark",t)},expression:"basicInfo.hhRemark"}})],1)],1)],1),e._v(" "),l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:24}},[l("el-form-item",{staticStyle:{"margin-bottom":"0px"},attrs:{label:"传染病史"}},[l("el-checkbox-group",{model:{value:e.basicInfo.infectionHistory,callback:function(t){e.$set(e.basicInfo,"infectionHistory",t)},expression:"basicInfo.infectionHistory"}},[l("el-checkbox",{attrs:{label:"无"},on:{change:e.clearinCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"肝炎"},on:{change:e.setInCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"结核"},on:{change:e.setInCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"痢疾"},on:{change:e.setInCheckbox}})],1)],1),e._v(" "),l("el-form-item",[l("el-input",{attrs:{placeholder:"备注"},model:{value:e.basicInfo.ihRemark,callback:function(t){e.$set(e.basicInfo,"ihRemark",t)},expression:"basicInfo.ihRemark"}})],1)],1)],1)],1)]),e._v(" "),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"外伤史"}},[l("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.basicInfo.traumaHistory,callback:function(t){e.$set(e.basicInfo,"traumaHistory",t)},expression:"basicInfo.traumaHistory"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"手术史"}},[l("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.basicInfo.surgeryHistory,callback:function(t){e.$set(e.basicInfo,"surgeryHistory",t)},expression:"basicInfo.surgeryHistory"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"家人病史"}},[l("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.basicInfo.familyHistory,callback:function(t){e.$set(e.basicInfo,"familyHistory",t)},expression:"basicInfo.familyHistory"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"接触史"}},[l("el-checkbox-group",{model:{value:e.basicInfo.contactHistory,callback:function(t){e.$set(e.basicInfo,"contactHistory",t)},expression:"basicInfo.contactHistory"}},[l("el-checkbox",{attrs:{label:"无"},on:{change:e.clearConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"疫区"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"疫情"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"疫水"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"牧区"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"矿山"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"高氟区"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"低碘区"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"化学物质"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"放射物质"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"有毒物质接触史"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"吸毒史"},on:{change:e.setConCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"冶游史"},on:{change:e.setConCheckbox}})],1),e._v(" "),l("el-input",{attrs:{placeholder:"备注"},model:{value:e.basicInfo.chRemark,callback:function(t){e.$set(e.basicInfo,"chRemark",t)},expression:"basicInfo.chRemark"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"药物过敏"}},[l("el-checkbox-group",{model:{value:e.basicInfo.meAllergy,callback:function(t){e.$set(e.basicInfo,"meAllergy",t)},expression:"basicInfo.meAllergy"}},[l("el-checkbox",{attrs:{label:"无"}})],1),e._v(" "),l("el-input",{attrs:{placeholder:"备注"},model:{value:e.basicInfo.meallRemark,callback:function(t){e.$set(e.basicInfo,"meallRemark",t)},expression:"basicInfo.meallRemark"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"过敏物"}},[l("el-checkbox-group",{model:{value:e.basicInfo.allergy,callback:function(t){e.$set(e.basicInfo,"allergy",t)},expression:"basicInfo.allergy"}},[l("el-checkbox",{attrs:{label:"无"},on:{change:e.clearAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"海鲜"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"粉尘"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"牛奶"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"鸡蛋"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"酒精"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"葱"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"姜"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"蒜"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"花生"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"霉菌"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"大豆"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"柳絮"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"橡胶"},on:{change:e.setAllCheckbox}}),e._v(" "),l("el-checkbox",{attrs:{label:"芒果"},on:{change:e.setAllCheckbox}})],1),e._v(" "),l("el-input",{attrs:{placeholder:"备注"},model:{value:e.basicInfo.allRemark,callback:function(t){e.$set(e.basicInfo,"allRemark",t)},expression:"basicInfo.allRemark"}})],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:12}},[l("el-col",{attrs:{span:10}},[l("el-form-item",{attrs:{label:"输血史"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.basicInfo.bloodTrans,callback:function(t){e.$set(e.basicInfo,"bloodTrans",t)},expression:"basicInfo.bloodTrans"}},[l("el-option",{attrs:{label:"否",value:"否"}}),e._v(" "),l("el-option",{attrs:{label:"是",value:"是"}})],1)],1)],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:10}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"吸烟史"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.basicInfo.smoke,callback:function(t){e.$set(e.basicInfo,"smoke",t)},expression:"basicInfo.smoke"}},[l("el-option",{attrs:{label:"否",value:"否"}}),e._v(" "),l("el-option",{attrs:{label:"是",value:"是"}})],1)],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-col",{attrs:{span:10}},[l("el-form-item",{attrs:{label:"戒烟"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.basicInfo.quitSmoke,callback:function(t){e.$set(e.basicInfo,"quitSmoke",t)},expression:"basicInfo.quitSmoke"}},[l("el-option",{attrs:{label:"否",value:"否"}}),e._v(" "),l("el-option",{attrs:{label:"是",value:"是"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:9}},[l("el-form-item",{attrs:{label:"戒烟时长","label-width":"200px"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.basicInfo.quitSmokeTime,callback:function(t){e.$set(e.basicInfo,"quitSmokeTime",e._n(t))},expression:"basicInfo.quitSmokeTime"}})],1)],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:10}},[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"饮酒史"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.basicInfo.drink,callback:function(t){e.$set(e.basicInfo,"drink",t)},expression:"basicInfo.drink"}},[l("el-option",{attrs:{label:"否",value:"否"}}),e._v(" "),l("el-option",{attrs:{label:"是",value:"是"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{lg:10,sm:12}},[l("el-form-item",{attrs:{label:"每日","label-width":"120px",prop:"dailyDrink"}},[l("el-input",{staticClass:"suffix-input-width",attrs:{placeholder:""},model:{value:e.basicInfo.dailyDrink,callback:function(t){e.$set(e.basicInfo,"dailyDrink",e._n(t))},expression:"basicInfo.dailyDrink"}}),l("span",{staticClass:"suffix-input-span"},[e._v("两")])],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-col",{attrs:{span:10}},[l("el-form-item",{attrs:{label:"戒酒"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.basicInfo.quitDrink,callback:function(t){e.$set(e.basicInfo,"quitDrink",t)},expression:"basicInfo.quitDrink"}},[l("el-option",{attrs:{label:"否",value:"否"}}),e._v(" "),l("el-option",{attrs:{label:"是",value:"是"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:9}},[l("el-form-item",{attrs:{label:"戒酒时长","label-width":"200px"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.basicInfo.quitDrinkTime,callback:function(t){e.$set(e.basicInfo,"quitDrinkTime",e._n(t))},expression:"basicInfo.quitDrinkTime"}})],1)],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:24}},[l("el-col",{attrs:{lg:5,sm:4}},[l("el-form-item",{attrs:{label:"孕","label-width":"170px",prop:"pregnant"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.basicInfo.pregnant,callback:function(t){e.$set(e.basicInfo,"pregnant",e._n(t))},expression:"basicInfo.pregnant"}})],1)],1),e._v(" "),l("el-col",{attrs:{lg:4,sm:5}},[l("el-form-item",{attrs:{label:"产","label-width":"80px",prop:"birth"}},[l("el-input",{attrs:{placeholder:""},model:{value:e.basicInfo.birth,callback:function(t){e.$set(e.basicInfo,"birth",e._n(t))},expression:"basicInfo.birth"}})],1)],1),e._v(" "),l("el-col",{attrs:{lg:4,sm:5}},[l("el-form-item",{attrs:{label:"早产","label-width":"120px"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.basicInfo.prematureLabour,callback:function(t){e.$set(e.basicInfo,"prematureLabour",t)},expression:"basicInfo.prematureLabour"}},[l("el-option",{attrs:{label:"否",value:"否"}}),e._v(" "),l("el-option",{attrs:{label:"是",value:"是"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{lg:4,sm:5}},[l("el-form-item",{attrs:{label:"流产","label-width":"120px"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.basicInfo.abortion,callback:function(t){e.$set(e.basicInfo,"abortion",t)},expression:"basicInfo.abortion"}},[l("el-option",{attrs:{label:"否",value:"否"}}),e._v(" "),l("el-option",{attrs:{label:"是",value:"是"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{lg:4,sm:5}},[l("el-form-item",{attrs:{label:"避孕","label-width":"120px"}},[l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.basicInfo.contraception,callback:function(t){e.$set(e.basicInfo,"contraception",t)},expression:"basicInfo.contraception"}},[l("el-option",{attrs:{label:"否",value:"否"}}),e._v(" "),l("el-option",{attrs:{label:"是",value:"是"}})],1)],1)],1)],1)],1),e._v(" "),l("el-row",[l("el-form-item",{staticStyle:{"text-align":"center","margin-top":"40px"}},[l("el-button",{staticClass:"btn-blue",attrs:{type:"primary"},on:{click:function(t){e.opencomfigMethod("是否提交病人信息",e.onSubmit)}}},[e._v("提交")]),e._v(" "),l("el-button",{staticClass:"btn-default",attrs:{type:"primary"},on:{click:e.gotoBlglpage}},[e._v("返回")])],1)],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")(s,i,!1,function(e){a("FFC6")},null,null);t.default=n.exports}});
//# sourceMappingURL=6.df63be69f63a54d3edfb.js.map