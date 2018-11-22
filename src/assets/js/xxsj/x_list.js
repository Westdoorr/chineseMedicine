export default {
    data() {
      return {
        yytjpage:'yytjpage',
        wzqkpage:'wzqkpage',
        rangeDate:null,
        search_obj:{
          startDate:null,
          endDate:null,
          pageNum:1,
          pageSzie:10
        },
        tableData: {
          list:[],
          pageNum:1,
          pageSize:10,
          total:0
        }
      }
    },
    watch: {
        rangeDate: function (newQuestion, oldQuestion) {
          if(this.rangeDate){
            this.search_obj.startDate = this.$common.dateFormatStr(this.rangeDate[0],'yyyy-MM-dd');   
            this.search_obj.endDate = this.$common.dateFormatStr(this.rangeDate[1],'yyyy-MM-dd'); 
          }else{
            this.search_obj.startDate = null;   
            this.search_obj.endDate = null; 
          } 
        }
    },
    created ()  {
        this.getBlList();
    },
    methods: {
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      searchBrxx(row){
        var pathParams = {},
        _that = this;
        pathParams.path = "xbrxxpage";
        var params  = JSON.parse(JSON.stringify(row));
        pathParams.data = params;
        _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
       _that.$common.GotoPage("xbrxxpage",pathParams,_that);
      },
      deleteBlObj(row){
        var _that = this;
        
        var url ='/infoGather/getPatientInfo?inquiryId='+row.inquiryId;
        _that.$http.delete(url).then(function (response) {
          if(response.code=="1"){
            _that.$common.openSuccessMsgBox("病历删除成功!",_that);
            //重新触发列表加载
            _that.getBlList();
          }else{
            _that.$common.openErrorMsgBox(response.msg,_that);
          }
        }).catch(function (error) {
          _that.$common.openErrorMsgBox(error,_that);
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.search_obj.pageNum = val;
        this.getBlList();
      },
      opencomfigMethod(msg,method_name,method_params){
        this.$common.openComfigDialog(msg,method_name,method_params,this);
      },
      /**
       * 获取问诊情况列表
       */
      getBlList(){
        
        var _that = this;
        var search_obj = this.search_obj;
        var url = "/infoGather/getRecordList";
        _that.$http.get(url,{
            params: search_obj
           }).then(function (response) {
             if(response.code == "1"){
                  if(JSON.stringify(response.data.pageInfo.list)!="[]"){
                    _that.tableData = response.data.pageInfo;
                  }
             }else{
                 _that.$common.openErrorMsgBox(response.msg,_that);
             }
            }).catch(function (error) {
                 _that.$common.openErrorMsgBox(error,_that);
            });
      },
      /**
       *下载文件
       *
       */
      downLoadFile(){
        var _that = this;
        this.$http.get('/infoGather/getPatientInfoFile',{
          responseType:'blob'
        })
        .then(function (res) {
            let blob = new Blob([res],{type:"application/octet-stream"});
            let objectUrl = URL.createObjectURL(blob);
            let link = document.createElement('a');
            link.style.display = 'none';
            link.href = objectUrl
            var fileName = "";
            if(_that.search_obj.startDate){
              fileName = fileName+_that.search_obj.startDate;
            }
            if(_that.search_obj.endDate){
              fileName = fileName+_that.search_obj.endDate;
            }
            if(fileName == ""){
              fileName = "导出病历列表";
            }
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(function (error) {
            _that.$common.openErrorMsgBox(error,_that);
        });
      }
    }
  }