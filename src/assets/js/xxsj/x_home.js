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
              iqDate: null,
              gender: '男',
            },
            placeDate:{},
            country:[],
            province:[],
            city:[],
            rules: {
              name: [
                { required: true, message: '请输入姓名', trigger: 'blur' }
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
    },
    watch: {
    },  
    methods: {
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
              this.$http.get('/infoGather/getPlace')
              .then(function (response) {
                if(response.code=="1"){
                  placeData = response.data;
                  placeData.placeList[0].cityList = _that.updateWgzdm(placeData.placeList[0].cityList);
                  _that.$store.dispatch("changePlaceData", placeData);
                  _that.placeDate = _that.$store.getters.gettersPlaceData;
                }else{
                   _that.$common.openLoading(response.msg,_that);
                }
              })
              .catch(function (error) {
                _that.$common.openLoading(error,_that);
              });
            }
        },
        /**
         *病人信息填写流程
         *
         */
        onSubmitBrxx() {
          var _that = this;
          var param =this.form;
          param.iqDate = _that.$common.dateFormatStr(param.iqDate,"yyyy-MM-dd");
          var loading = _that.$common.openLoading('',_that);
          this.$http.post('/infoGather/newDP',param).then(function (response) {
             loading.close();
              if(response.code == "1"){
                   var pathParams = {};
                   pathParams.path = "xbrxxpage";
                    _that.form.inquiryId = response.data.inquiryId;
                    var params  = JSON.parse(JSON.stringify(_that.form));
                   pathParams.data = params;
                   _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
                  _that.$common.GotoPage("xbrxxpage",pathParams,_that);
              }else{
                _that.$common.openErrorMsgBox(response.msg,_that);
              }
          }).catch(function (error) {
            loading.close();
            setTimeout(function(){ _that.$common.openErrorMsgBox(error,_that) }, 1000);
          });
      },
       /**
         *问卷信息填写流程
         *
         */
      onSubmitWjxx(){
        var _that = this;
        var param =this.form
        param.iqDate = _that.$common.dateFormatStr(param.iqDate,"yyyy-MM-dd");
        var loading = _that.$common.openLoading('',_that);
        this.$http.post('/infoGather/newDP',param).then(function (response) {
           loading.close();
            if(response.code == "1"){
                 var pathParams = {};
                 pathParams.path = "xwjxxpage";
                  _that.form.inquiryId = response.data.inquiryId;
                  var params  = JSON.parse(JSON.stringify(_that.form));
                 pathParams.data = params;
                 _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
                _that.$common.GotoPage("xwjxxpage",pathParams,_that);
            }else{
              _that.$common.openErrorMsgBox(response.msg,_that);
            }
        }).catch(function (error) {
          loading.close();
          setTimeout(function(){ _that.$common.openErrorMsgBox(error,_that) }, 1000);
        });
      }
    }
}