export default {
    data() {
      return {
         basicWjxx:{
           fl:null,
           fl_remarks:null,
           nhft:null,
           nhft_remarks:null,
           ysxg:null,
           ysxg_remarks:null,
           sy:null,
           sy_remarks:null,
           nhfz:null,
           nhfz_remarks:null,
           xh:null,
           xh_remarks:null,
           jeg:null,
           jeg_remarks:null,
           nhdg:null,
           nhdg_remarks:null,
           rskm:null,
           rskm_remarks:null,
           zmpl:null,
           zmpl_remarks:null,
           smzl:null,
           smzl_remarks:null,
           smsc:null,
           smsc_remarks:null,
           emf:null,
           emf_remarks:null,
           wsf:null,
           wsf_remarks:null,
           qycs:null,
           dppl_r:null,
           dppl_c:null,
           dpwg:null,
           dpwg_remarks:null,
           ys:null,
           ys_remarks:null,
           zwf:null,
           zwf_remarks:null,
           scd:null,
           scd_remarks:null,
           bxf:null,
           bxf_remarks:null,
           zlf:null,
           zlf_remarks:null,
           kslf:null,
           qw:null,
           lys:null,
           lys_remarks:null,
           llqd:null,
           llqd_remarks:null,
           ldd:null,
           ldd_remarks:null,
           ll:null,
           ll_remarks:null,
           lbj:null,
           lbj_remarks:null,
           lp:null,
           lp_remarks:null,
           lljf:null,
           cc:null,
           mcyj:null,
           sc:null,
           zq:null,
           tjf:null,
           tjf_remarks:null,
           ybbs:null,
           ybbs_remarks:null,
           fbbs:null,
           fbbs_remarks:null,
           zqgl:null,
           zqgl_remarks:null,
           ffzf:null,
           ffzf_remarks:null,
           tbbs:null,
           tbbs_remarks:null,
           jjf:null,
           jjnl:null,
           jjyy:null,
           djf:null,
         }
    }
  },
  beforeCreate () {
    
  },
  created () {
    this.getWjxxData();
  },
  methods: {
    /**
     * 跳转病历管理页面
     * 
     */
    gotoHome() {
      this.$common.GotoPage("xhome",{},this);
    },
    /** 
     * 获取问卷信息
    */
    getWjxxData(){
      var param_obj = JSON.parse(window.localStorage.getItem("pathParams"));
      this.basicWjxx.inquiryId = param_obj.data.inquiryId;
    },
    /**
     * 转化数组列表为对象
     */
    setAnswerFormat(res_obj){
      var answerVOList = res_obj.data.AnswerList.answerVOList;
      for(var key in answerVOList){
        var temp_obj = answerVOList[key];
        if(temp_obj.answer && temp_obj.answer != ""){
          this.basicWjxx[temp_obj.stem] = temp_obj.answer;
        }
        if(temp_obj.remark && temp_obj.remark != ""){
          this.basicWjxx[temp_obj.stem+"_remarks"] = temp_obj.remark;
        }
      }
    },
    /**
     * 封装保存参数
     */
    setParamsFormat(){
      var obj = new Object();
      var p_arry = new Array();
      var params = JSON.parse(JSON.stringify(this.basicWjxx));
      for(var key in params){
        if(key.indexOf("_remarks") == -1){
          var temp_p = new Object();
          if(params[key]=="" || !params[key]){
            temp_p.answer = null;
          }else{
            temp_p.answer = params[key];
          }
          if(params[key+"_remarks"]=="" || !params[key+"_remarks"]){
            temp_p.remark = null;
          }else{
            temp_p.remark = params[key+"_remarks"];
          }
          temp_p.stem = key;
          temp_p.questionLabel = key;
          p_arry.push(temp_p);
        }else{
          continue
        }
      }
      obj.inquiryId = JSON.parse(window.localStorage.getItem("pathParams")).data.inquiryId;
      obj.answerVOList = p_arry;
      return obj;
    },
      /**
     * 是否保存
     */
    isonSubmit(){
      var _that = this;
      this.$confirm("是否提交问卷信息", '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            _that.onSubmit();
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '操作已取消'
          });          
        });
    },
    opencomfigMethod(msg,method_name,method_params){
        this.$common.openComfigDialog(msg,method_name,method_params,this);
      },
    /**
     * 问卷信息 保存 提交
     */
    onSubmit(){
      var params = this.setParamsFormat();
      var _that = this;
      var loading = _that.$common.openLoading("提交中",_that);
      _that.$http.post('/infoGather/postInquiryAnswer',params).then(function (response) {
           loading.close();
           if(response.code=="1"){
              _that.$common.openSuccessMsgBox("操作成功",_that);
              setTimeout(function(){ 
                _that.$common.GotoPage("xhome",{},_that);
              }, 1000);
           }else{
            _that.$common.openErrorMsgBox(response.msg,_that);
           }
          
      }).catch(function (error) {
        console.log(error);
        setTimeout(function(){
          loading.close();
         _that.$common.openErrorMsgBox(response.msg,_that);
       }, 1000);
      });
    }
  }
}