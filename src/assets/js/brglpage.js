export default {
    data() {
      return {
        brxxpage:"brxxpage",
        grblglpage:"grblglpage",
        bryfpage:'bryfpage',
        table_edit:'bryfpage',
        search_obj:{
          pname:"",
          pageNum:1,
          pageSize:10
        },
        tableData: {
          list:[],
          pageNum:1,
          pageSize:10,
          total:0
        }
      }
    },
    created () {
      //获取页面的初始化数据
      this.initPage();
    },
    methods: {
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      handleClick(row) {
        console.log(row);
      },
      /**
       * 封装跳转页面参数
       * @param {object} row 病人信息对象
       * @param {string} pagename 跳转路径名
       */
      gotoyfpage(row,pagename) {
        var params = {},
            _that = this,
            prePath = "";
            params.pId = row.pId;
            params.pname = this.search_obj.pname;
        var pathParams = {path:pagename,data:params};
        _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
        var prePathParams = {path:"brglpage",data:_that.search_obj};
        _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
        _that.$common.GotoPage(pagename,params,_that);


      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.search_obj.pageNum = val;
        this.getBrList(this.search_obj);
      },
      //初始化当前组件
      initPage(){
        //从缓存中取出当前页面的参数
        var i_params = JSON.parse(window.localStorage.getItem("pathParams"));
        if(i_params.data.pname!=""){
            this.search_obj.pname = i_params.data.pname;
        }
        if(i_params.data.pageNum){
            this.search_obj.pageNum = i_params.data.pageNum;
        }
        if(i_params.data.pageSize){
            this.search_obj.pageSize = i_params.data.pageSize;
        }
        this.getBrList(this.search_obj);
      },
      /**
       * 获取病人列表
       * @param {object} search_obj  查询参数 姓名，当前页 当前页大小
       */
      getBrList(search_obj){
        var _that = this;
        if(search_obj != _that.search_obj){
           search_obj = _that.search_obj;
        }
        var url = "/patientManage/getPatientList";
        _that.$http.get(url,{
            params: search_obj
           }).then(function (response) {
             if(response.code =="1"){
                    _that.tableData = response.data.pageInfo;
             }else{
               _that.$common.openErrorMsgBox(response.msg,_that);
             }
            }).catch(function (error) {
                _that.$common.openErrorMsgBox(error,_that);
            });
      },
      opencomfigMethod(msg,method_name,method_params){
        this.$common.openComfigDialog(msg,method_name,method_params,this);
      },
      /**
       * 移除病人信息
       * @param {object} row
       */
      delteBrinfoM(row){
        var _that = this;
        var url = "/index/deletePatient?patientId="+row.pId;
        _that.$http.delete(url).then(function (response) {
            if(response.code =="1"){
              _that.$common.openSuccessMsgBox("病人信息移除成功！",_that);
              setTimeout(function(){
                _that.getBrList();
              },1000);
            }else{
               _that.$common.openErrorMsgBox(response.msg,_that);
            }
          }).catch(function (error) {
              _that.$common.openErrorMsgBox(error,_that);
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
        this.$http.post('/inquiry/newInquiry',param).then(function (response) {
          if(response.code=="1"){
            // var brinfo = {pId:brid,inquiryId:response.data.inquiryId,};
            var brinfo = {pId:brid,inquiryId:response.data.inquiryId,lastinquiryId:null};
            _that.getLastInquiry(brinfo);
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
       * 获取病人最近一次问诊信息
       *
       */
      getLastInquiry(brinfo){
          var url= "/inquiry/getLatestInquiryInfo?patientId="+brinfo.pId;
         // var brinfo = {pId:brid,inquiryId:response.data.inquiryId};
          var _that = this;
          var inquiryID = '';
          this.$http.get(url)
            .then(function (response) {
              console.log("请求日期",response)
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
                      prePathParams.path = 'brglpage';
                      prePathParams.data = _that.search_obj;
                      prePathParams.data = _that.search_obj;
                      prePathParams.is_display_xj = true //去掉返回
                      prePathParams.is_display_fh = true //去掉返回
                      prePathParams.data.xzfz = "new";
                      prePathParams.data.inquiryDate = response.data.inquiryInfo.inquiryDate;
                      prePathParams.data.date = response.data.inquiryInfo.date;
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
      triggerSelect () {
        this.$refs.fileinput.click()
      },

      selectedFile (e) {
        console.log(e.target.files[0])
        //根据项目需求做具体处理，比如说获取文件名
        this.uploadFile();
      },

      async uploadFile () {
        var _that = this;
        //如果不需要用到上传后的返回值可以把 async...await 语法去掉
        let files = this.$refs.fileinput.files;
        if(files.length > 0) {
         var loading =  _that.$common.openLoading("数据同步中",_that);
          let form = new FormData();
          form.append('file', files[0])
          let data = await new Promise((resolve, reject) => {
              _that.$http.post("/inquiry/getObjFromFile",form).then(res => {
                resolve(res)
              })
              .catch(err => {
                reject(err)
              });
            });
            loading.close();
            if(data.code == "1"){
              _that.$common.openSuccessMsgBox("病人信息同步完成！",_that);
            }else{
              _that.$common.openErrorMsgBox(data.msg,_that);
            }
        }
      }
    }
  }
