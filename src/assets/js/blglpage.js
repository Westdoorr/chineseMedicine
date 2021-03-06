import qs from 'qs'
import {setExportToken,removeExportToken} from "../utils/exportCookie";

export default {
    data() {
      return {
        userrole:{},
        yytjpage:'yytjpage',
        wzqkpage:'wzqkpage',
        rangeDate:null,
        search_obj:{
            pname:null,
            startDate:null,
            endDate:null,
            keyWords:null,
            patientId:null,
            pageNum:1,
            pageSize:10,
           // 新增 1.3
            startAge:null,
            endAge:null,
            residence:null,
            gender:null
        },
        patientCount:0,//筛选出的病历包含的病人数目
        multipleSelectionAll:[],//所有选中的数据包含跨页数据
        multipleSelection:[],// 当前页选中的数据
        idKey: 'inquiryId', // 标识列表数据中每一行的唯一键的名称
        tableData: {
            list:[],
            pageNum:1,
            pageSize:10,
            total:0
        } ,
        // 禁止时间
        pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        }
      }
    },
    watch: {
        rangeDate: function (newQuestion, oldQuestion) {
          this.search_obj.startDate = this.$common.dateFormatStr(this.rangeDate[0],'yyyy-MM-dd');
          this.search_obj.endDate = this.$common.dateFormatStr(this.rangeDate[1],'yyyy-MM-dd');
        }
    },
    created ()  {
      document.title = '病历管理'
      this.initPage();
      this.roleuser=window.localStorage.getItem("role");
    },
    methods: {
      //日期改变
      //日期控件选中时的回调
      changeDate(val){
        let start,end
        if(val=="" || val==null) {
          this.search_obj.startDate = null
          this.search_obj.endDate= null
          this.rangeDate  = null
        }
      },
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      handleCurrentChange(val) {
        this.changePageCoreRecordData();
        this.search_obj.pageNum = val;
        this.getblList();
      },
      handleSelectionChange (val) {
            this.multipleSelection = val;
            //实时记录选中的数据
            setTimeout(()=>{
                this.changePageCoreRecordData();
            }, 50)
        },
      setSelectRow() {
                if (!this.multipleSelectionAll || this.multipleSelectionAll.length <= 0) {
                    return;
                }
                // 标识当前行的唯一键的名称
                let idKey = this.idKey;
                let selectAllIds = [];
                let that = this;
                this.multipleSelectionAll.forEach(row=>{
                    selectAllIds.push(row[idKey]);
                })
                this.$refs.table.clearSelection();
                for(var i = 0; i < this.tableData.list.length; i++) {
                    if (selectAllIds.indexOf(this.tableData.list[i][idKey]) >= 0) {
                        // 设置选中，记住table组件需要使用ref="table"
                        this.$refs.table.toggleRowSelection(this.tableData.list[i], true);
                    }
                }
            },

      // 记忆选择核心方法
      changePageCoreRecordData () {
                // 标识当前行的唯一键的名称
                let idKey = this.idKey;
                let that = this;
                // 如果总记忆中还没有选择的数据，那么就直接取当前页选中的数据，不需要后面一系列计算
                if (this.multipleSelectionAll.length <= 0) {
                    this.multipleSelectionAll = this.multipleSelection;
                    return;
                }
                // 总选择里面的key集合
                let selectAllIds = [];
                this.multipleSelectionAll.forEach(row=>{
                    selectAllIds.push(row[idKey]);
                })
                let selectIds = []
                // 获取当前页选中的id
                this.multipleSelection.forEach(row=>{
                    selectIds.push(row[idKey]);
                    // 如果总选择里面不包含当前页选中的数据，那么就加入到总选择集合里
                    if (selectAllIds.indexOf(row[idKey]) < 0) {
                        that.multipleSelectionAll.push(row);
                    }
                })
                let noSelectIds = [];
                // 得到当前页没有选中的id
                this.tableData.list.forEach(row=>{
                    if (selectIds.indexOf(row[idKey]) < 0) {
                        noSelectIds.push(row[idKey]);
                    }
                })
                noSelectIds.forEach(id=>{
                    if (selectAllIds.indexOf(id) >= 0) {
                        for(let i = 0; i< that.multipleSelectionAll.length; i ++) {
                            if (that.multipleSelectionAll[i][idKey] == id) {
                                // 如果总选择中有未被选中的，那么就删除这条
                                that.multipleSelectionAll.splice(i, 1);
                                break;
                            }
                        }
                    }
                })
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
        if(i_params.data.keyWords){
          this.search_obj.keyWords = i_params.data.keyWords;
        }
        if(i_params.data.startDate){
          this.search_obj.startDate = i_params.data.startDate;
        }
        if(i_params.data.endDate){
          this.search_obj.endDate = i_params.data.endDate;
        }
        if(i_params.data.patientId){
          this.search_obj.patientId = i_params.data.patientId;
        }
        if(i_params.data.startAge){
          this.search_obj.startAge = i_params.data.startAge;
        }
        if(i_params.data.endAge){
          this.search_obj.endAge = i_params.data.endAge;
        }
        if(i_params.data.residence){
          this.search_obj.residence = i_params.data.residence;
        }
        if(i_params.data.gender){
          this.search_obj.gender = i_params.data.gender;
        }
        this.getblList();
      },
      opencomfigMethod(msg,method_name,method_params){
        this.$common.openComfigDialog(msg,method_name,method_params,this);
      },
      //获取病历对应的病人数目
      getPatientCount(search_obj){
        var url = "/MrManage/getPatientCountByDailyPatients";
        return this.$http.get(url,{params: search_obj});
      },
      //按照页面获取符合条件的病历列表
      getDpList(search_obj){
        var url = "/MrManage/getMrList";
        return this.$http.get(url,{params: search_obj});
      },
      //获取病例table列表
      getblList(){
        var _that = this;
        var search_obj = this.search_obj;
        this.$http.all([_that.getDpList(search_obj),_that.getPatientCount(search_obj)])
          .then(this.$http.spread(function (list,count) {
            if (list.code == "1" && count.code == "1"){
              _that.patientCount = count.data.patientCount;
              _that.tableData = list.data.pageInfo;
              setTimeout(()=>{
                _that.setSelectRow();
              }, 50);
            }else {
              _that.$common.openErrorMsgBox(list.msg+count.msg,_that);
            }
          })).catch(function (error) {
          _that.$common.openErrorMsgBox(error,_that);
          })
      },
      /**
       * 查看病历的问诊信息
       * @param {*} row
       */
      gotoWzxxPage(row){
        var _that = this;
        var brinfo = {pId:row.pId,inquiryId:row.inquiryId};
         //跳转组件并且 传递pid
         var pathParams = new Object();
         pathParams.path = 'wjxxpage';
         pathParams.data = brinfo
         //缓存 目标跳转页面的参数
         _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
         var prePathParams = new Object();
         prePathParams.path = 'blglpage';
         prePathParams.data = this.search_obj;;
         //缓存 跳转页面的参数
         _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
         _that.$common.GotoPage("wjxxpage",brinfo,_that);
      },
      /**
       * 删除病人
       *
       * @param {any} row

       *
       */
      delDailyPatient(row){
           var _that = this;
           var loading = _that.$common.openLoading("删除病历!",_that);
        //  _that.$http.delete('/MrManage/deleteDailyPatient?patientId='+row.pId,{ method: 'delete',data:{patientId:row.pId}}).then(function (response) {
            _that.$http.delete('/MrManage/deleteDailyPatient?inquiryid='+row.inquiryId).then(function (response) {
             loading.close();
            if(response.code=="1"){
                _that.$common.openSuccessMsgBox("删除成功",_that);
                _that.getblList();
            }
         }).catch(function (error) {
            loading.close();
            _that.$common.openErrorMsgBox(error,_that);
        });
      },
      /**
       * 查看某次的药方病例
      */
      gotoyfpage(row){
        var _that = this;
        var brinfo = {pId:row.pId,inquiryId:row.inquiryId,lastinquiryId:''};
         //跳转组件并且 传递pid
         var pathParams = new Object();
         pathParams.path = 'bryfpage';
         pathParams.data = brinfo
         //缓存 目标跳转页面的参数
         _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
         var prePathParams = new Object();
         prePathParams.path = 'blglpage';
         prePathParams.data = this.search_obj;;
         //缓存 跳转页面的参数
         _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
         _that.$common.GotoPage("bryfpage",brinfo,_that);
         // _that.$router.push({ name:'bryfpage',params:{pId:row.pId,inquiryId:row.inquiryId,lastinquiryId:''}})
      },

      /**
       *
       * @param search_obj 生成主要筛选条件对应的字符串
       * @param source 关闭卡片时用于终止导出请求
       * @param uuid 通知后端是否终止导出请求的标识符
       * @returns {{filename: string, notify: ElNotificationComponent | undefined}}
       */
      openNotify(search_obj,source,uuid) {
        var message = '';
        var filename = '';
        if (search_obj.pname != null && search_obj.pname != ''){
          message = message + "<div>姓名:"+search_obj.pname+"</div>";
          filename = filename + "姓名:"+search_obj.pname;
        }
        if (search_obj.gender != null && search_obj.gender != ''){
          message = message + "<div>性别："+search_obj.gender+"</div>";
          filename = filename + "性别:"+search_obj.gender;
        }
        if (search_obj.residence != null && search_obj.residence != ''){
          message = message + "<div>来源地："+search_obj.residence+"</div>";
          filename = filename + "来源地:"+search_obj.residence;
        }
        if (search_obj.startAge != null && search_obj.startAge != ''){
          message = message + "<div>起始年龄："+search_obj.startAge+"</div>";
          filename = filename + "起始年龄:"+search_obj.startAge;
        }
        if (search_obj.endAge != null && search_obj.endAge != ''){
          message = message + "<div>结束年龄："+search_obj.endAge+"</div>";
          filename = filename + "结束年龄:"+search_obj.endAge;
        }
        if (search_obj.startDate != null && search_obj.startDate != ''){
          message = message + "<div>开始日期："+search_obj.startDate+"</div>";
          filename = filename + "开始日期:"+search_obj.startDate;
        }
        if (search_obj.endDate!= null && search_obj.endDate != ''){
          message = message + "<div>结束日期："+search_obj.endDate+"</div>";
          filename = filename + "结束日期:"+search_obj.endDate;
        }
        if (search_obj.keyWords != null && search_obj.keyWords != ''){
          message = message + "<div>关键字:"+search_obj.keyWords+"</div>";
          filename = filename + "关键字:"+search_obj.keyWords;
        }
        var notify = this.$notify({
          title: '病历导出',
          message: message,
          duration: 0,
          dangerouslyUseHTMLString: true,
          onClose: (isSuccess)=>{
            source.cancel('病历导出已终止！');
            removeExportToken(uuid)
            this.setExportTokenFalse(uuid,isSuccess)
          }
        });
        return {notify,filename}
      },
      setExportTokenFalse(uuid,isSuccess){
        console.log(isSuccess.toLocaleString());
        var url = '/index/setUuidToFalse';
        var _that = this;
        var parameter = {
          uuid: uuid
        }
        this.$http.get(url,{params: parameter}).then(function (response) {
          if (response.code == '1'){
            if (!isSuccess){
              _that.$common.openSuccessMsgBox("病历导出任务已取消！",_that)
            }
          }
        })
      },
      /**
       * 导出病历
       *
       */
      exportBlList(){
          var _that = this;
          var temp_arry = new Array();
          var params_obj = {};
          params_obj.inquiryIdList ="";
		      params_obj.all = false;
		      params_obj.patientId = null;
        if(JSON.stringify(this.multipleSelectionAll)=='[]'){
            _that.$common.openErrorMsgBox("请选中要导出的病历信息",_that);
            return false;
        }else{
            for(var i=0;i<this.multipleSelectionAll.length;i++){
                temp_arry.push(this.multipleSelectionAll[i].inquiryId);
            }
        }
        params_obj.inquiryIdList = temp_arry;
        var url = "/dataStatistics/getInquiryInfoList";
		var loading = _that.$common.openLoading("病历导出中，请耐心等待",_that);
        //修改以post方式下载文件
        _that.$http.post(url,params_obj).then(function (response) {
                loading.close();
                if(response.code == "1"){
                    if(JSON.stringify(response.data)!="{}"){
                        if(response.data.inquiryInfo && JSON.stringify(response.data.inquiryInfo)!="{}"){
                            _that.$exportPrint(response.data.inquiryInfo,{});
                        }
                    }else{
                        _that.$common.openErrorMsgBox(response.msg,_that);
                    }
                    //打印的请求数据成功 把数据传递给打印控件；
                }else{
                    _that.$common.openErrorMsgBox(response.msg,_that);
                }
            }).catch(function (error) {
                _that.$common.openErrorMsgBox(error,_that);

            });
      },

      /**
       * 根据筛选条件一键导出病历到PDF
       */
      allExportBlList(){
        var _that = this;
        var search_obj = this.search_obj;
        var url = "/dataStatistics/getAllInquiryInfoList";
        var loading = _that.$common.openLoading("病历导出中，请耐心等待",_that);
        _that.$http.get(url,{params: search_obj,timeout:0}).then(function (response) {
          loading.close();
          if(response.code == "1"){
            if(JSON.stringify(response.data)!="{}"){
              if(response.data.inquiryInfo && JSON.stringify(response.data.inquiryInfo)!="{}"){
                _that.$common.openSuccessMsgBox("病历导出到PDF成功！",_that)
                _that.$exportPrint(response.data.inquiryInfo,{});
              }
            }else{
              _that.$common.openErrorMsgBox(response.msg,_that);
            }
            //打印的请求数据成功 把数据传递给打印控件；
          }else{
            _that.$common.openErrorMsgBox(response.msg,_that);
          }
        }).catch(function (error) {
          loading.close();
          _that.$common.openErrorMsgBox(error,_that);

        });
      },
      /**
       * 根据筛选条件一键导出病历到WORD
       */
      allExportWord(){
        var _that = this;
        var source = _that.$http.CancelToken.source()
        var search_obj = this.search_obj;
        var uuid = this.$common.guid();
        setExportToken(uuid)
        var returnData = _that.openNotify(search_obj,source,uuid);
        var notify = returnData.notify;
        var filename = returnData.filename;
        var url = "/index/getAllPatientInfoWord";
        search_obj["uuid"] = uuid;
        _that.$http.get(url,{params: search_obj,timeout:0,cancelToken:source.token}).then(function (response) {
          try{
            //判断respose是否能够被JSON解析，若能解析，则说明从后台返回值为错误JSON信息；若不能解析则说明从后台返回值为WORD文件内容
            if (JSON.stringify(response.data)=="{}"){
              _that.$common.openErrorMsgBox(response.msg,_that);
              notify.close(true);
            }else {
              _that.$common.openSuccessMsgBox("病历导出到WORD文件中成功！", _that)
              let blob = new Blob([response], {
                type: `application/msword` //word文档为msword,pdf文档为pdf
              });
              let downloadElement = document.createElement("a");
              let objectUrl = URL.createObjectURL(blob);//创建下载的链接
              let fname = filename; //下载文件的名字
              downloadElement.href = objectUrl;
              downloadElement.download = fname;
              document.body.appendChild(downloadElement);
              downloadElement.click();//点击下载
              document.body.removeChild(downloadElement);//下载完成后移除元素
              URL.revokeObjectURL(objectUrl)
              notify.close(true);//下载成功，删除提示卡片
            }
          }catch (e) {
              console.log(e)
          }
        }).catch(function (error) {
          console.log("进入最终处理")
          _that.$common.openErrorMsgBox(error,_that);

        });
      },
      /**
       * 导出word
       *
       */
      exportWord(){
        var _that = this;
        var params_obj = {};
        params_obj.inquiryIdList =[];
        params_obj.all = false;
        params_obj.patientId = null;
        if(JSON.stringify(this.multipleSelectionAll)=='[]'){
          _that.$common.openErrorMsgBox("请选中要导出的病历信息",_that);
          return false;
        }else{
          for(var i=0;i<this.multipleSelectionAll.length;i++){
            params_obj.inquiryIdList.push(this.multipleSelectionAll[i].inquiryId);
          }
        }
        var url = "/index/getPatientInfoWord?all=false"
        params_obj.inquiryIdList.forEach((p)=>{
          url+="&inquiryIdList="+p
        })
        // var url = "/index/getPatientInfoWord?inquiryIdList=533&inquiryIdList=534&all=false";
        var loading = _that.$common.openLoading("病历word文档导出中，请耐心等待",_that);
        _that.$http.post(url,{}).then(function (response) {
          loading.close();
          let blob = new Blob([response], {type: `application/msword` //word文档为msword,pdf文档为pdf
          });
          let objectUrl = URL.createObjectURL(blob);
          let link = document.createElement("a");
          let fname = `病人病例`; //下载文件的名字
          link.href = objectUrl;
          link.setAttribute("download", fname);
          document.body.appendChild(link);
          link.click();
        }).catch(function (error) {
          loading.close();
          _that.$common.openErrorMsgBox(error,_that);

        });
      }
    }
  }
