import qs from 'qs'
export default {
    data() {
      return {
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
        },
        multipleSelectionAll:[],//所有选中的数据包含跨页数据
        multipleSelection:[],// 当前页选中的数据
        idKey: 'inquiryId', // 标识列表数据中每一行的唯一键的名称
        tableData: {
            list:[],
            pageNum:1,
            pageSize:10,
            total:0
          } ,
      }
    },
    //计算属性
    computed: {

    },
    watch: {
        rangeDate: function (newQuestion, oldQuestion) {
          this.search_obj.startDate = this.$common.dateFormatStr(this.rangeDate[0],'yyyy-MM-dd');
          this.search_obj.endDate = this.$common.dateFormatStr(this.rangeDate[1],'yyyy-MM-dd');
        }
    },
    created ()  {
        this.initPage();
    },
    methods: {
      // 序号
      typeIndex(index){
        console.log('序号：',index)
        return index + (this.pageNum - 1) * this.pageSize + 1;
      },
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
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

        this.getblList();
      },
      opencomfigMethod(msg,method_name,method_params){
        this.$common.openComfigDialog(msg,method_name,method_params,this);
      },
      //获取病例table列表
      getblList(){
        var _that = this;
        var search_obj = this.search_obj;
        var url = "/MrManage/getMrList";
        _that.$http.get(url,{
            params: search_obj
           }).then(function (response) {
               if(response.code=="1"){
                        _that.tableData = response.data.pageInfo;
                        console.log( _that.tableData)
                        setTimeout(()=>{
                            _that.setSelectRow();
                        }, 50);
               }else{
                    _that.$common.openErrorMsgBox(response.msg,_that);
               }

            }).catch(function (error) {
                _that.$common.openErrorMsgBox(error,_that);
            });
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
        console.log(JSON.stringify(params_obj));
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
				loading.close();
                _that.$common.openErrorMsgBox(error,_that);

            });
      }
    }
  }
