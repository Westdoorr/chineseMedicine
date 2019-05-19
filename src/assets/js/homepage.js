export default {
    name: 'xjczbr',
    data() {
        return {
          selectCountryId:1,
          selectProvinceId:24,
          selectCityId:1348,
          countryList:[],
          provinceList:[],
          cityList:[],
          dissbutton:false,
          canvas:"",
          saveImage:"",
          mediaStreamTrack :null,
          dialogphotoVisible: false,
          form: {
            picture:"",
            sourceContinent:'',
            sourceProvince:null,
            sourceCity:null,
            age:null,
            pname: null,
            birthday: null,
            gender: '男',
          },
          // placeData:{},
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
        document.title = '首页';
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
      },

      methods: {
        getMedia() {
        var _that = this;
        _that.dissbutton = false;
        _that.form.picture = [];
        let constraints = {
          video: {width: 280, height: 400},
        };
        //获得video摄像头区域
        //这里介绍新的方法，返回一个 Promise对象
        // 这个Promise对象返回成功后的回调函数带一个 MediaStream 对象作为其参数
        // then()是Promise对象里的方法
        // then()方法是异步执行，当then()前的方法执行完后再执行then()内部的程序
        // 避免数据没有获取到
        let promise = navigator.mediaDevices.getUserMedia(constraints);
        promise.then(function (MediaStream) {
          _that.mediaStreamTrack = MediaStream.getTracks()[0];
          try{
            _that.$refs.video.src = URL.createObjectURL(MediaStream);
          }catch (e) {
            console.log(e);
            _that.$refs.video.srcObject = MediaStream;
          }
/*          video.src = URL.createObjectURL(MediaStream);*/
          _that.$refs.video.play();
        });
        _that.dialogphotoVisible = true;
        },
        getMedia1() {
          var _that = this;
          _that.form.picture = _that.canvas.toDataURL('image/png');
          let constraints = {
            video: {width: 280, height: 400},
          };
          //获得video摄像头区域
          //这里介绍新的方法，返回一个 Promise对象
          // 这个Promise对象返回成功后的回调函数带一个 MediaStream 对象作为其参数
          // then()是Promise对象里的方法
          // then()方法是异步执行，当then()前的方法执行完后再执行then()内部的程序
          // 避免数据没有获取到
          let promise = navigator.mediaDevices.getUserMedia(constraints);
          promise.then(function (MediaStream) {
            _that.mediaStreamTrack = MediaStream.getTracks()[0];
            try{
              _that.$refs.video.src = URL.createObjectURL(MediaStream);
            }catch (e) {
              console.log(e);
              _that.$refs.video.srcObject = MediaStream;
            }
            _that.$refs.video.play();
          });
          _that.dialogphotoVisible = true;
        },
        funclose(){
        var _that = this;
        _that.mediaStreamTrack.stop();
        },
        takePhoto() {
      //获得Canvas对象
      let video = document.getElementById("video");
      this.canvas = document.getElementById("canvas");
      let ctx = this.canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, 280, 400);
      },
        confirmphoto(){
        var _that = this;
          var saveImage = _that.canvas.toDataURL('image/png');
          _that.form.picture = saveImage;
          _that.dialogphotoVisible = false;
          _that.mediaStreamTrack.stop();
          _that.dissbutton = true;
        },
        opencomfigMethod(msg,method_name,method_params){
          this.$common.openComfigDialog(msg,method_name,method_params,this);
        },
        //联动设置 城市 设置为外国时表单的值
        setCityList(value){
          //第一次遍历省份列表
          for(let i =0 ; i< this.provinceList.length; i++){
            if(value == this.provinceList[i].id){
              this.cityList = this.provinceList[i].cityList;
              break;
            }
          }
          this.selectCityId="";
        },
        initCityList() {
          //第一次遍历省份列表
              this.cityList = this.provinceList[22].cityList;
        },
        //联动设置 省份
        setProList(value){
          //依据值修改省份的下拉值
            for(let i =0 ; i< this.countryList.length; i++){
              if(value == this.countryList[i].continentId){
                this.provinceList = this.countryList[i].placeList;
                break;
              }
            }
          this.selectProvinceId="";
          this.selectCityId="";
        },
        initProList() {
          //依据值修改省份的下拉值
              this.provinceList = this.countryList[0].placeList;
        },
        //获取相应的国家省份地址
        getPlace(){
           var placeData = this.$store.getters.gettersPlaceData;
            if(placeData && JSON.stringify(placeData) == "{}"){
              var _that = this;
              this.$http.get('/index/getPlace').then(function (response) {
                console.log("地址",response);
                if(response.code=="1"){
                  placeData = response.data.placeList;
                  _that.$store.dispatch("changePlaceData", placeData);
                  //_that.placeData = _that.$store.getters.gettersPlaceData;
                  _that.countryList = placeData;
                  _that.initProList();
                  _that.initCityList();
                }else{
                  _that.$common.openErrorMsgBox(response.msg,_that);
                }
              })
              .catch(function (error) {
                 _that.$common.openErrorMsgBox(error,_that);
              });
            }else {
              this.countryList = placeData;
              this.initProList();
              this.initCityList();
            }
        },
        putinname(){
          var mingzi=this.form.pname.replace(/\s*/g,"");
          this.form.pname=mingzi;
          if(this.form.pname.match(/^[ ]*$/)){
            this.$common.openErrorMsgBox("请填写姓名",this);
          }else{
            console.log("正确")
          }
        },
        changeBirdate(){
            //第一步：格式化校验数据是否合理
            if(this.form.birthday){
              //var reg = /^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))$/;
              var reg1 = /^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02(0[1-9]|[1][0-9]|2[0-8])))$/;
              var regExp = new RegExp(/^([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8])))$/);
              var regExp1 = new RegExp(reg1);
             if(regExp.test(this.form.birthday)&&this.form.birthday.length>7) {
               if (this.isBirthday()&& this.isDayRight()){
               }else {
                 this.$common.openErrorMsgBox("请输入正确的日期格式",this);
               }
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
        //判断年龄是否小于零
        isBirthday(){
            var date = new Date();
            var mat={};
            mat.M=date.getMonth()+1;//月份记得加1
            mat.Y=date.getFullYear();
            mat.D=date.getDate();
            var year =parseInt(this.form.birthday.substring(0,4).replace(/\b(0+)/gi,""));
            var month =parseInt(this.form.birthday.substring(5,7).replace(/\b(0+)/gi,""));
            var day =parseInt(this.form.birthday.substring(8,10).replace(/\b(0+)/gi,""));
            var yearLT = (year<mat.Y);
            var yearEQ = (year===mat.Y);
            var monthLT = (month<mat.M);
            var monthEQ = (month===mat.M);
            var dayLE = (day<=mat.D);
            if (yearLT)
              return true;
            if ((!yearLT)&&yearEQ&&monthLT)
              return true;
            if((!yearLT)&&yearEQ&&(!monthLT)&&monthEQ&&dayLE)
              return true;

            return false;
        },
        //判断月份对应日期
        isDayRight(){
          var year =parseInt(this.form.birthday.substring(0,4).replace(/\b(0+)/gi,""));
          var month =parseInt(this.form.birthday.substring(5,7).replace(/\b(0+)/gi,""));
          var day =parseInt(this.form.birthday.substring(8,10).replace(/\b(0+)/gi,""));
          if((month ===1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12)&& day > 31){
            return false;
          }else if((month === 4 || month ===6 || month === 9 || month === 11)&& day >30){
            return false;
          }else if (month===2 && day > 29){
            return false;
          }
          return true;
        },
        //return  false 属性有空， true时 校验通过
        allRequired(formData){
          console.log(formData)
          var boolean_swt = true;
            //遍历对象
            for(var key in formData){
              if (!this.isBirthday() || !this.isDayRight()){
                boolean_swt = false;
                break;
              }
              if(key === 'age') continue
              if(formData[key] === null|| formData[key] ==""){
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
                // pathParams.type = "new";
                //缓存 目标跳转页面的参数
                _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
                var prePathParams = new Object();
                prePathParams.path = 'xjczbr';
                prePathParams.data = {};
                prePathParams.type = 'new';
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
          _that.form.sourceProvince = _that.selectProvinceId;
          _that.form.sourceCity = _that.selectCityId;
          _that.form.sourceContinent = _that.selectCountryId;
          console.log("province  "+_that.form.sourceProvince)
          console.log("city  "+_that.form.sourceCity)
          console.log("continent  "+_that.form.sourceContinent)
          var swt_btn = this.allRequired(this.form);
          console.log(this.form)
          if(this.form.age < 0){
            this.$message({
                  showClose: true,
                  message: '年龄不能小于0',
                  type: 'error'
                });
          }
          else {
            if(!swt_btn){
              this.$common.openErrorMsgBox("请完整填写基本信息!",_that);
              return;
            }
          // else if(this.form.age == 0){
          //   // console.log("不能为0")
          //   this.$message({
          //     showClose: true,
          //     message: '年龄不能为0',
          //     type: 'error'
          //   });
          //   return;
          // }
          //打开加载层
          var loading = this.$common.openLoading("初诊中",_that);
          var param = this.form;
          //特殊处理一下表单  来源为外国的数据
          // if(!param.sourceCity && param.country=="1"){
          //     param.sourceCity = param.sourceProvince;
          //     param.sourceProvince = param.country;
          // }
          var formdata1 = new FormData();
            param.picture =  _that.$common.base64Tofile(param.picture,"111.jpg");
            console.log("1111"+param.picture)
            formdata1.append('picture',param.picture,"111.png")
            formdata1.append('sourceContinent',param.sourceContinent);
            formdata1.append('sourceProvince',param.sourceProvince);
            formdata1.append('sourceCity',param.sourceCity);
            formdata1.append('age',param.age);
            formdata1.append('pname',param.pname);
            formdata1.append('birthday',param.birthday);
            formdata1.append('gender',param.gender);
          let config = {
            post_type: "form-data"
          };
          this.$http.post('/index/firstDiag',formdata1,config).then(function (response) {
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
          }
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
                  console.log("复诊",response)
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
                          console.log()
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
