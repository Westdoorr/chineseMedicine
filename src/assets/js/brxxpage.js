export default {
    data() {
      var checkCardNum = (rule, value, callback) => {
        if (!value) {
          callback();
        } else {
          const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
          //   校验护照
          const re1 = /^[a-zA-Z]{5,17}$/;
          const re2 = /^[a-zA-Z0-9]{5,17}$/;
          //   港澳通行证
          const re3 = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
          if(value && value != ""){
            value = value.trim();
          }
          if (reg.test(value)||re1.test(value)||re2.test(value)||re3.test(value)) {
            callback();
          } else {
            return callback(new Error('请输入正确的证件号'));
          }
        }
      };
      return {
          //来源地
        countryList:[],
        provinceList:[],
        cityList:[],
        mediaStreamTrack :null,
        canvas:"",
        dialogphotoVisible:false,
        ppname:'',
        b_country:null,
        placeDate:{},
        province:[],
        city:[],
        //出生地
        s_country:null,
        sourceProvince:[],
        sourceCity:[],
        rules: {
            height: [
              { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            weight:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            age:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            certificatesNumber:[
                {validator: checkCardNum, trigger: 'change'}
            ],
            dailyDrink:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            pregnant:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
            birth:[
                { type: 'number', message: '只能填写数字',  trigger: 'change' }
            ],
          },
        basicInfo: {
            "headImage":null,
            "id": null,
            "patientId": null,
            "certificatesType": null,
            "certificatesNumber": null,
            "pname": null,
            "gender": null,
            "age": null,
            "birthday": null,
            "nationality": null,
            "national": null,
            "incunabulum": null,
            "residence": null,
            "height": null,
            "weight": null,
            "occupation": null,
            "marriage": null,
            "religiousBelief": null,
            "eatingHabits": null,
            // "eatingHabits": [],
            "ehRemark": null,
            "heredityHistory": null,
            // "heredityHistory": [],
            "hhRemark": null,
            "infectionHistory": null,
            // "infectionHistory": [],
            "ihRemark": null,
            "traumaHistory": null,
            // "traumaHistory": [],
            "surgeryHistory": null,
            "familyHistory": null,
            "contactHistory": null,
            // "contactHistory": [],
            "chRemark": null,
            "meAllergy": null,
            // "meAllergy": [],
            "meallRemark": null,
            "allergy": null,
            // "allergy": [],
            "allRemark": null,
            "bloodTrans": null,
            "smoke": null,
            "dailySmoke": null,
            "quitSmoke": null,
            "pregnant": null,
            "birth": null,
            "prematureLabour": null,
            "abortion": null,
            "insertDate": 1534608000000,
            "sourceProvince": null,
            "sourceCity": null,
            "incuProvince": null,
            "incuCity": null,
            "quitSmokeTime": null,
            "contraception": null,
            "drink": null,
            "dailyDrink": null,
            "quitDrink": null,
            "quitDrinkTime": null,
            "iqDate": null
          }
      }
    },
    computed: {
        birthday() {
    　　　　return this.basicInfo.birthday
    　　}
    },
    watch: {
        birthday(newValue, oldValue) {
    　　　　var age  = this.$common.GetAgeByBrithday(newValue);
            this.basicInfo.age = age;
    　　}
    },
    created () {
/*       this.getPlace(this,this.getBrxxinfo);*/
       this.getBrxxinfo();
       this.getinformation();
    },
    methods: {
      //修改照片
      getMedia() {
        var _that = this;
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
          _that.$refs.video.src = URL.createObjectURL(MediaStream);
          /*          video.src = URL.createObjectURL(MediaStream);*/
          _that.$refs.video.play();
        });
        _that.dialogphotoVisible = true;
      },
      funclose(){
        this.mediaStreamTrack.stop()
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
        _that.basicInfo.headImage = saveImage;
        _that.dialogphotoVisible = false;
        _that.mediaStreamTrack.stop()
        var formdata1 = new FormData();
        _that.basicInfo.headImage =  _that.$common.base64Tofile(_that.basicInfo.headImage,"111.jpg");
        formdata1.append('picture',_that.basicInfo.headImage,"111.png")
        formdata1.append('patientId',_that.basicInfo.patientId)
        let config = {
          post_type: "form-data"
        };
        _that.$http.post('/patientManage/updatePatientHeadImage',formdata1,config).then(function (response) {
          if(response.code == "1"){
            _that.basicInfo.headImage = saveImage
          }else{
            _that.$common.openErrorMsgBox(response.msg,_that);
          }
        }).catch(function (error) {
          setTimeout(function(){
            _that.$common.openErrorMsgBox(error,_that);
          }, 1000);
        });
      },
      getinformation:function(){
        this.params = this.$route.query
        console.log("地址后台挂的值",this.params )
        var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
        console.log("地址后台缓存",r_params)
        var that = this
        this.$http.get(
          '/patientManage/getPatientInfo',{
            params:{
              pId:this.params.pId
            }
          })
          .then(response =>{
            this.ppname=response.data.patientInfo.pname;
            document.title=this.ppname+"的基本信息";
            console.log("名字是嘿嘿嘿" + this.ppname)
          })
          .catch(function (error) {
            console.log(error);
          })
      },
         /**
     * 跳转病历管理页面
     *
     */
    gotoBlglpage() {
        //跳转组件并且 传递pid
        var pathParams = window.localStorage.getItem("prePathParams");
        var prePathParams = window.localStorage.getItem("pathParams");
        //缓存 目标跳转页面的参数
        this.$store.dispatch("setPathParams", pathParams);
        this.$store.dispatch("setPrePathParams", prePathParams);
        //缓存 跳转页面的参数
        this.$common.GotoPage("brglpage",JSON.parse(pathParams),this);
      },
    clearAllCheckbox(val){
        if(val){
            this.basicInfo.allergy = ["无"];
        }
    },
    setAllCheckbox(val){
        if(val){
            var index = this.basicInfo.allergy.indexOf("无");
            if(index != -1){
                this.basicInfo.allergy.splice(index,1);
            }
        }
    },
    clearConCheckbox(val){
        if(val){
            this.basicInfo.contactHistory = ["无"];
        }
    },
    setConCheckbox(val){
        if(val){
            var index = this.basicInfo.contactHistory.indexOf("无");
            if(index != -1){
                this.basicInfo.contactHistory.splice(index,1);
            }
        }
    },
    clearinCheckbox(val){
        if(val){
            this.basicInfo.infectionHistory = ["无"];
        }
    },
    setInCheckbox(val){
        if(val){
            var index = this.basicInfo.infectionHistory.indexOf("无");
            if(index != -1){
                this.basicInfo.infectionHistory.splice(index,1);
            }
        }
    },
    cLearhCheckbox(val){
       if(val){
           this.basicInfo.heredityHistory = ["无"];
       }
    },
    sethCheckBox(val){
        if(val){
            var index = this.basicInfo.heredityHistory.indexOf("无");
            if(index != -1){
                this.basicInfo.heredityHistory.splice(index,1);
            }
        }
    },
    /**
     * 依据选择的省份渲染 城市
     *
     * @param {any} type
     */
    showCityList(type){
        if(type == 1){
            this.city = this.$common.setCityList(this.basicInfo.incuProvince,this);
            this.basicInfo.incuCity = null;
            console.log( this.city)

        }else{
            this.sourceCity = this.$common.setCityList(this.basicInfo.sourceProvince,this);
            this.basicInfo.sourceCity = null;
        }
    },
     /**
      * 依据选择的国家渲染 省份
      *
      * @param {any} type
      */
     showProList(type){
        if(type  == 1){
            this.province = this.setProList(this.b_country,this);
            this.basicInfo.incuProvince = null;
            this.basicInfo.incuCity = null;
        }else{
            this.sourceProvince = this.$common.setProList(this.s_country,this);
            this.basicInfo.sourceProvince = null;
            this.basicInfo.sourceCity = null;
        }
     },
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
      getPlace(){
        var placeData = this.$store.getters.gettersPlaceData;
        if(placeData && JSON.stringify(placeData) == "{}"){
          var _that = this;
          this.$http.get('/index/getPlace').then(function (response) {
            console.log("地址",response);
            if(response.code=="1"){
              placeData = response.data.placeList;
              _that.$store.dispatch("changePlaceData", placeData);
              _that.placeDate = _that.$store.getters.gettersPlaceData;
              _that.countryList = placeData;
            }else{
              _that.$common.openErrorMsgBox(response.msg,_that);
            }
          })
            .catch(function (error) {
              _that.$common.openErrorMsgBox(error,_that);
            });
        }
      },
      /**
       * 处理病人的出生地和来源地数据的绑定
       *
       */
      detailBrbrth(obj){
        if(obj.sourceProvince){
            var ischina = this.$common.isChinaProvince(obj.sourceProvince,this);
            if(ischina == 1){
                //1 代表外国
                this.s_country = 1;
                this.sourceProvince = this.$common.setProList(this.s_country,this);
                this.sourceCity = this.$common.setCityList(obj.sourceProvince,this);
            }else{
                //1 代表 中国
                this.s_country = 0;
                this.sourceProvince = this.$common.setProList(this.s_country,this);
                this.sourceCity = this.$common.setCityList(obj.sourceProvince,this);
            }
        }
        if(obj.incuProvince){
            this.b_country = this.$common.isChinaProvince(obj.incuProvince,this);
            this.province = this.$common.setProList(this.b_country,this);
            this.city = this.$common.setCityList(obj.incuProvince,this);
        }
      },
      /**
       * 设置空数组
      /**
       *
       *
       * @param {*} t_obj
       * @returns
       */
      setNullArray:function(t_obj){
        var obj = JSON.parse(JSON.stringify(t_obj));
        var num_key_arry = ["height","weight","dailyDrink","pregnant","birth"];
        for(var key in obj){
            if( !obj[key]){
                if(num_key_arry.indexOf(key)!=-1){
                    obj[key] = null;
                }else{
                    obj[key] = "";
                }

            }
        }
        var arry_name = ["eatingHabits","heredityHistory","infectionHistory","contactHistory","meAllergy","allergy"];
        for(var key in arry_name){
            if(!obj[arry_name[key]]){
                var temp_arry = new Array();
                if(arry_name[key]!="eatingHabits"){
                    temp_arry.push("无");
                }else{
                    temp_arry.push("非素食者");
                }
                obj[arry_name[key]]=temp_arry;
            }else{
                try {
                    if(JSON.stringify(obj[arry_name[key]]) == "[]"){
                        var temp_arry = new Array();
                        if(arry_name[key]!="eatingHabits"){
                            temp_arry.push("无");
                        }else{
                            temp_arry.push("非素食者");
                        }
                        obj[arry_name[key]]=temp_arry;
                    }else{
                        obj[arry_name[key]] = JSON.parse(obj[arry_name[key]]);
                    }
                } catch (error) {
                    var temp_arry = new Array();
                    if(arry_name[key]!="eatingHabits"){
                        temp_arry.push("无");
                    }else{
                        temp_arry.push("非素食者");
                    }
                    obj[arry_name[key]]=temp_arry;
                }

            }
        }
        return obj;
      },
      /**
       * 获取病人信息
       *
       */
      getBrxxinfo(){
         var param = JSON.parse(window.localStorage.getItem("pathParams"));
         var _that = this;
         var url = "/patientManage/getPatientInfo";
         _that.$http.get(url,{
             params: param.data
            }).then(function (response) {
                 //得到个人信息的数据，对个人信息进行处理后绑定
                 if(response.code == "1"){
/*                     _that.detailBrbrth(response.data.patientInfo);*/
                     _that.basicInfo = _that.setNullArray(response.data.patientInfo);
                     console.log("1"+_that.basicInfo.sourceProvince)
                     console.log("2"+_that.basicInfo.sourceCity)
                    // _that.basicInfo = response.data.patientInfo;
                 }else{
                     _that.$common.openErrorMsgBox(response.msg,_that);
                 }
             }).catch(function (error) {
                _that.$common.openErrorMsgBox(error,_that);
             });
      },
      setSuBmitParams(obj){
         var params_obj = JSON.parse(JSON.stringify(obj));
         var arry_name = ["eatingHabits","heredityHistory","infectionHistory","contactHistory","meAllergy","allergy"];
         for(var key in arry_name){
           var temp_str = JSON.stringify(params_obj[arry_name[key]]);
           temp_str = this.$common.decodeToStr(temp_str);
           params_obj[arry_name[key]] = temp_str;
        }
        return params_obj;
      },
      opencomfigMethod(msg,method_name,method_params){
        this.$common.openComfigDialog(msg,method_name,method_params,this);
      },
      /**
       * 表单提交
       *
      */
      onSubmit(){
        var _that = this;
        this.$refs["formName"].validate((valid) => {
            if (valid) {
                var params = _that.setSuBmitParams(this.basicInfo);
                _that.$http.put("/patientManage/updatePatientInfo",params).then(function(response){
                      //数据提交
                      if(response.code == '1'){
                          _that.$common.openSuccessMsgBox("更新病人信息成功！，即将返回病人管理",_that);
                          _that.goTobrglpage();
                      }else{
                          _that.$common.openErrorMsgBox(response.msg,_that);
                      }
                }).catch(function(error){
                  _that.$common.openErrorMsgBox(error,_that);
                });
            } else {
              _that.$common.openErrorMsgBox("数据项校验未通过",_that);
              return false;
            }
          });
      },
      /**
       * 返回病人管理页面
       */
      goTobrglpage:function(){
        //跳转组件并且 传递pid
        var pathParams = window.localStorage.getItem("prePathParams");
        var prePathParams = window.localStorage.getItem("pathParams");
        //缓存 目标跳转页面的参数
        this.$store.dispatch("setPathParams", pathParams);
        this.$store.dispatch("setPrePathParams", prePathParams);
        //缓存 跳转页面的参数
        this.$common.GotoPage("brglpage",JSON.parse(pathParams),this);
      },
    }
  }
