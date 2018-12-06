import qs from 'qs'
export default {
    data() {
      return {
        search_obj:{
            pname:null,
            patientId:null,
            pageNum:1,
            pageSize:10
          },
        diagnoseLabels:"诊断标签：",
        multipleSelectionAll:[],//所有选中的数据包含跨页数据
        multipleSelection:[],// 当前页选中的数据
        idKey: 'inquiryId', // 标识列表数据中每一行的唯一键的名称
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
          var _that = this;
          var brinfo = {pId:row.pId,inquiryId:row.inquiryId,lastinquiryId:'',pname:this.search_obj.pname};//以前
          var brinfo1 = {pId:row.pId,inquiryId:row.inquiryId,lastinquiryId:''}; //现在
           //跳转组件并且 传递pid
           var pathParams = new Object();
           pathParams.path = 'bryfpage';
           pathParams.data = brinfo
           pathParams.fh_ = brinfo
           //缓存 目标跳转页面的参数
           _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
           var prePathParams = new Object();
           prePathParams.path = 'grblglpage';
           prePathParams.data = this.search_obj;
            prePathParams.is_display_xj = false //去掉返回
            prePathParams.is_display_fh = false //去掉返回
           //缓存 跳转页面的参数
           _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
           // _that.$common.GotoPage("bryfpage",brinfo,_that);
           _that.$router.push({ name:'bryfpage',params:{pId:row.pId,inquiryId:row.inquiryId,lastinquiryId:''}})
                               'bryfpage/:pId/:inquiryId/:lastinquiryId'
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
          this.changePageCoreRecordData();
         this.search_obj.pageNum = val;
         this.getBrList(this.search_obj);
      },
    handleSelectionChange (val) {
        this.multipleSelection = val;
        //实时记录选中的数据
        setTimeout(()=>{
            this.changePageCoreRecordData();
        }, 50);
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
      toggleSelection(rows) {
        if (rows) {
        rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
        });
        } else {
        this.$refs.multipleTable.clearSelection();
        }
      },
      /**
       * 从缓存中取出当前页面的数据
      */
      initPage(){
        //从缓存中取出当前页面的参数
        var i_params = JSON.parse(window.localStorage.getItem("pathParams"));

        if(i_params.data.pId!="" && i_params.data.pId){
            this.search_obj.patientId = i_params.data.pId;
        }
        if(i_params.data.patientId!="" && i_params.data.patientId){
            this.search_obj.patientId = i_params.data.patientId;
        }
        if(i_params.data.pname!=""){
            this.search_obj.pname = i_params.data.pname;
        }
        if(i_params.data.pageNum){
            this.search_obj.pageNum = i_params.data.pageNum;
        }
        if(i_params.data.pageSize){
            this.search_obj.pageSize = i_params.data.pageSize;
        }
        this.getBrDiagnoseLabels(this.search_obj.patientId);
        this.getBrList(this.search_obj);
      },
      /**
       * 获取病人的所有诊断标签
       * @param {*} pId
       */
      getBrDiagnoseLabels(pId){
          var _that = this;
          _that.$http.get("/inquiry/getOnePatientLabels?patientId="+pId).then(function (response) {
                if(response.code == "1"){
                    var str = JSON.stringify(response.data.diagnoseLabels);
                    str = str.replace(/[\[\]\"]*/g, '');
                    _that.diagnoseLabels = _that.diagnoseLabels+str;
                }else{
                    _that.$common.openErrorMsgBox(response.msg,_that);
                }
            }).catch(function (error) {
                 _that.$common.openErrorMsgBox(error,_that);
            });
      },
      /**
       * 获取病人的病历列表
       * @param {*} search_obj
       */
      getBrList(search_obj){
        var _that = this;
        var url = "/MrManage/getMrList";
        _that.$http.get(url,{
            params: search_obj
           }).then(function (response) {
               if(response.code == "1"){
                  if(JSON.stringify(response.data.pageInfo.list)!="[]"){
                    _that.tableData = response.data.pageInfo;
                    setTimeout(()=>{
                        _that.setSelectRow();
                    }, 50);
                }
               }else{
                   _that.$common.openErrorMsgBox(response.msg,_that);
               }

            }).catch(function (error) {
                 _that.$common.openErrorMsgBox(error,_that);
            });
      },
      GobackPage(){
          this.$common.GoBackPrePage("grblglpage",this.search_obj,this);
      },
      /**
       * 导出病历
       *
       */
      exportBlList(){
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
         console.log(JSON.stringify(params_obj));
         var url = "/dataStatistics/getInquiryInfoList";
		     var loading = _that.$common.openLoading("病历导出中，请耐心等待",_that);
          _that.$http.post(url, params_obj).then(function (response) {
                  loading.close();
                  if(response.code == "1"){
                      //打印的请求数据成功 把数据传递给打印控件；
            if(response.data.inquiryInfo && JSON.stringify(response.data.inquiryInfo)!="{}"){
              _that.$exportPrint(response.data.inquiryInfo,{});
            }

                  }else{
                      _that.$common.openErrorMsgBox(response.msg,_that);
                  }
              }).catch(function (error) {
			  	loading.close();
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
        // console.log(JSON.stringify(params_obj));
         console.log(params_obj);
        var url = "/index/getPatientInfoWord?all=false"
        params_obj.inquiryIdList.forEach((p)=>{
               url+="&inquiryIdList="+p
        })
        console.log(url)
        // var url = "/index/getPatientInfoWord?inquiryIdList=533&inquiryIdList=534&all=false";
        var loading = _that.$common.openLoading("病历word文档导出中，请耐心等待",_that);
         _that.$http.post(url,{}).then(function (response) {
           console.log(response)
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
