export default {
    name: 'xjczbr',
    data() {
        return {
          form: {
            country:'',
            sourceProvince:null,
            sourceCity:null,
            age:null,
            pname: null,
            birthday: null,
            gender: '男',
          },
          placeDate:{},
          country:[],
          province:[],
          city:[],
          rules: {
            pname: [
              { required: true, message: '请输入姓名'}
            ],
          },
          value1:"2018-07-01"
        }
      },
      created () {

      },
      beforeMount () {
         //获取地址请求
        this.getPlace();
      },
      computed: {
          birthday() {
      　　　　return this.form.birthday
      　　}
      },
      watch: {
          birthday(newValue, oldValue) {
      　　　　var age  = this.$common.GetAgeByBrithday(newValue);
              this.form.age = age;
      　　},
         placeDate(newValue,oldValue){
            //默认 患者来源地 0 24 1348
            this.setProList("0");
            this.setCityList("24");
            this.form.country = "0";
            this.form.sourceProvince = 24;
            this.form.sourceCity =1348;
         }
      },

      methods: {
        opencomfigMethod(msg,method_name,method_params){
          this.$common.openComfigDialog(msg,method_name,method_params,this);
        },
        //联动设置 城市 设置为外国时表单的值
        setCityList(value){
          //第一次遍历省份列表
           var proNameList = this.$store.getters.gettersPlaceData.placeList;
           this.form.sourceCity=null;
           this.city = [];
           for(var key in proNameList){
             if(proNameList[key].id == value){
               this.city = proNameList[key].cityList;
               break;
             }
           }
        },
        //联动设置 省份
        setProList(selectvalue){
          console.log(selectvalue);
          //依据值修改省份的下拉值
            this.province = [];
            this.city = [];
            this.form.sourceProvince=null;
            this.form.sourceCity=null;
          if(selectvalue=="0"){
            //代表国内
            var proNameList = this.$store.getters.gettersPlaceData.placeList;
            proNameList = proNameList.slice(1,proNameList.length-1);
            this.province = proNameList;
          }else{
            //国外
            var proNameList = this.$store.getters.gettersPlaceData.placeList;
            this.province = proNameList[0].cityList;
          }
        },
        //重置外国的字段 不一致
        updateWgzdm(proList){
          var newList = new Array();
          for(var key in proList){
            var tmpObj = new Object();
            tmpObj.id = proList[key].cityId;
            tmpObj.provName = proList[key].cityName;
            tmpObj.cityList = [];
            newList.push(tmpObj);
          }
          return newList;
        },
        //获取相应的国家省份地址
        getPlace(){
           var placeData = this.$store.getters.gettersPlaceData;
            if(placeData && JSON.stringify(placeData) == "{}"){
              var _that = this;
              this.$http.get('/index/getPlace')
              .then(function (response) {
                if(response.code=="1"){
                  placeData = response.data;
                  placeData.placeList[0].cityList = _that.updateWgzdm(placeData.placeList[0].cityList);
                  _that.$store.dispatch("changePlaceData", placeData);
                  _that.placeDate = _that.$store.getters.gettersPlaceData;
                }else{
                  _that.$common.openErrorMsgBox(response.msg,_that);
                }
              })
              .catch(function (error) {
                 _that.$common.openErrorMsgBox(error,_that);
              });
            }
        },
        changeBirdate(){
            //第一步：格式化校验数据是否合理
            if(this.form.birthday){
              //var reg = /^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))$/;
              var reg1 = /^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02(0[1-9]|[1][0-9]|2[0-8])))$/;
              var regExp = new RegExp(/^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))$/);
              var regExp1 = new RegExp(reg1);
              if(regExp.test(this.form.birthday)&&this.form.birthday.length>7){

              }else if(regExp1.test(this.form.birthday)&&this.form.birthday.length>7){
                //格式化当前日期格式
                this.form.birthday = this.form.birthday.substring(0,4)+"-"+this.form.birthday.substring(4,6)+"-"+this.form.birthday.substring(6,8);
                //this.$common.GetAgeByBrithday(this.form.birthday);
              }else{
                // this.form.birthday = null;
                // this.form.age = null;
                //提示  然后值清空 在填
                this.$common.openErrorMsgBox("请输入正确的日期格式",this);

              }
            }
        },
        //return  false 属性有空， true时 校验通过
        allRequired(formData){
          var boolean_swt = true;
            //遍历对象
            for(var key in formData){
              if(!formData[key] || formData[key] ==""){
                  if(key=='sourceCity' && formData.country=="1"){
                    continue;
                  }
                  boolean_swt = false;
                  break;
              }
            }
            return boolean_swt;
        },
        /**
         *
         * 初诊时 新增问诊 获取问诊id
         */
        newInquiry(brid){
          var _that = this;
          var loading = this.$common.openLoading("新建问诊中",_that);
          var param ={patientId:brid};
          this.$http.post('/inquiry/newInquiry',param).then(function (response) {
              loading.close();
              if(response.code == "1"){
                _that.$common.openSuccessMsgBox("初诊成功，请开处方",_that);
                var brinfo = {pId:brid,inquiryId:response.data.inquiryId};
                //跳转组件并且 传递pid
                var pathParams = new Object();
                pathParams.path = 'bryfpage';
                pathParams.data = brinfo;
                //缓存 目标跳转页面的参数
                _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
                var prePathParams = new Object();
                prePathParams.path = 'xjczbr';
                prePathParams.data = {};
                //缓存 跳转页面的参数
                _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
                _that.$common.GotoPage("bryfpage",brinfo,_that);
              }else{
                _that.$common.openErrorMsgBox(response.msg,_that);
              }

          }).catch(function (error) {
            console.log(error);
            setTimeout(function(){
              loading.close();
            _that.$common.openErrorMsgBox(error,_that);
           }, 1000);
          });
        },
        /**
         * 新建问诊 返回问诊id
         *
         * @param {String} brid 病人id
         *
         * return 问诊id
         */
        newInquiry_new(brid){
            var _that = this;
            var param ={patientId:brid};
            this.$http.post('/inquiry/newInquiry?patientId='+brid,param).then(function (response) {
              if(response.code == "1"){
                var brinfo = {pId:brid,inquiryId:response.data.inquiryId};
                _that.getLastInquiry(brinfo);
              }else{
                _that.$common.openErrorMsgBox(response.msg,_that);
              }

            }).catch(function (error) {
              console.log(error);
              setTimeout(function(){
                _that.$common.openErrorMsgBox(error,_that);
               }, 1000);
            });
        },
        /**
         * 获取病人最近一次问诊信息
         *
         */
        getLastInquiry(brinfo){
            var url= "/inquiry/getLatestInquiryInfo?patientId="+brinfo.pId;
            var _that = this;
            var inquiryID = '';
            this.$http.get(url)
              .then(function (response) {
                if(response.code == "1"){
                    if(JSON.stringify(response.data)!="{}"){
                        if(response.data.inquiryInfo.inquiryId){
                            brinfo.lastinquiryId = response.data.inquiryInfo.inquiryId;
                        }else{
                            brinfo.lastinquiryId = "";
                        }
                        //跳转组件并且 传递pid
                        var pathParams = new Object();
                        pathParams.path = 'bryfpage';
                        pathParams.data = brinfo;
                        //缓存 目标跳转页面的参数
                        _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
                        var prePathParams = new Object();
                        prePathParams.path = 'xjczbr';
                        prePathParams.data = {};
                        //缓存 跳转页面的参数
                        _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
                        _that.$common.GotoPage("bryfpage",brinfo,_that);
                    }
                }else{
                  _that.$common.openErrorMsgBox(response.msg,_that);
                }
            }).catch(function (error) {
                setTimeout(function(){
                     _that.$common.openErrorMsgBox(error,_that);
                 }, 1000);
            });

        },
        //提交初访
        czSubmit() {
           var _that = this;
          //初诊数据提交，都必须填写 数据项校验
          var swt_btn = this.allRequired(this.form);
          if(!swt_btn){
            this.$common.openErrorMsgBox("请完整填写基本信息!",_that);
            return;
          }
          //打开加载层
          var loading = this.$common.openLoading("初诊中",_that);
          var param = this.form;
          //特殊处理一下表单  来源为外国的数据
          // if(!param.sourceCity && param.country=="1"){
          //     param.sourceCity = param.sourceProvince;
          //     param.sourceProvince = param.country;
          // }
          this.$http.post('/index/firstDiag',param).then(function (response) {
            loading.close();
            if(response.code == "1"){
              //新建病人信息完成，再次新增问诊信息
              _that.newInquiry(response.data.pId);
            }else{
              _that.$common.openErrorMsgBox(response.msg,_that);
            }
          }).catch(function (error) {
            setTimeout(function(){
              loading.close();
             _that.$common.openErrorMsgBox(error,_that);
            }, 1000);
          });
        },
        /**
         * 是否有病人重复
         *
         */
        isRepeat(p_data){
            var _that = this;
            var loading = this.$common.openLoading("复诊诊中",_that);
            var param = p_data;
            this.$http.post('/index/revisit',param).then(function (response) {
                if(response.code == "1"){
                    if(response.data.isRepeat==0){
                        //代表没有重复条件的病人
                         _that.newInquiry_new(response.data.pId);
                        // _that.$common.GotoPage("bryfpage",brinfo,_that);

                        loading.close();
                        //封装参数 打开开药药方
                    }else if(response.data.isRepeat==1){
                        loading.close();
                        //代表有重复条件病人
                        var brinfo = {"pname":p_data.pname};
                          //跳转组件并且 传递pid
                          var pathParams = new Object();
                          pathParams.path = 'brglpage';
                          pathParams.data = brinfo;
                          //缓存 目标跳转页面的参数
                          _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
                          var prePathParams = new Object();
                          prePathParams.path = 'xjczbr';
                          prePathParams.data = {};
                          //缓存 跳转页面的参数
                          _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
                          _that.$common.GotoPage("brglpage",brinfo,_that);
                    }else if(response.data.isRepeat==2){
                        //需要进行初访操作
                        loading.close();
                        _that.$common.openErrorMsgBox("该病人需进行初诊",_that);
                    }else{

                    }
                }else{
                    _that.$common.openErrorMsgBox(response.msg,_that);
                }
            }).catch(function (error) {
                setTimeout(function(){
                  loading.close();
                _that.$common.openErrorMsgBox(error,_that);
              }, 1000);
            });
        },
        /**
         * 数据复诊
         *
         */
        fzSubmit() {
            var _that = this;
            if(_that.form.pname){
                var name = _that.form.pname.replace(/(^\s*)|(\s*$)/g, "");
                if(name!=""){
                    _that.isRepeat(_that.form);
                }else{
                    _that.$common.openErrorMsgBox("请填写患者姓名！",_that);
                }
            }else{
                _that.$common.openErrorMsgBox("请填写患者姓名！",_that);
            }
        }
      }
  }
