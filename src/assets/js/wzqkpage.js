export default {
    data() {
      return {
        yytjpage:'yytjpage',
        wzqkpage:'wzqkpage',
        rangeDate:[new Date(),new Date()],
        search_obj:{
            startDate:"",
            endDate:"",
            pageNum:1,
            pageSize:50
          },
        tableData: {
            list:[],
            pageNum:1,
            pageSize:50,
            total:0
          }
      }
    },
    watch: {
        rangeDate: function (newQuestion, oldQuestion) {
          if(newQuestion){
              this.search_obj.startDate = this.$common.dateFormatStr(this.rangeDate[0],'yyyy-MM-dd');
              this.search_obj.endDate = this.$common.dateFormatStr(this.rangeDate[1],'yyyy-MM-dd');
              this.getWzqkList();
          }
        }
    },
    created ()  {
      document.title = '数据统计-问诊情况'
        this.initPage();
    },
    methods: {
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      //跳转到药方界面
      gotoYytjPage(pagename) {
        var  _that = this,
            prePath = "";
        var pathParams = {path:pagename,data:{}};
        _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
        var prePathParams = {path:"wzqkpage",data:_that.search_obj};
        _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
        _that.$common.GotoPage(pagename,pathParams,_that);
      },
      //初始化当前组件
      initPage(){
        //从缓存中取出当前页面的参数
        var i_params = JSON.parse(window.localStorage.getItem("pathParams"));
        if(i_params.data.pageNum){
            this.search_obj.pageNum = i_params.data.pageNum;
        }
        if(i_params.data.pageSize && i_params.data.pageSize>=50){
            this.search_obj.pageSize = i_params.data.pageSize;
        }
        if(i_params.data.startDate){
          this.search_obj.startDate = i_params.data.startDate;
        }else{
          this.search_obj.startDate = this.$common.dateFormatStr(new Date(),'yyyy-MM-dd');
        }
        if(i_params.data.endDate){
          this.search_obj.endDate = i_params.data.endDate;
        }else{
          this.search_obj.endDate = this.$common.dateFormatStr(new Date(),'yyyy-MM-dd');
        }
        this.getWzqkList();
      },
      /**
       * 获取问诊情况列表
       */
      getWzqkList(){
        var _that = this;
        var search_obj = this.search_obj;
        var url = "/dataStatistics/getInquirySituation";
        _that.$http.get(url,{
            params: search_obj
           }).then(function (response) {
             if(response.code == "1"){
                if(JSON.stringify(response.data.pageInfo.list)!="[]"){
                    _that.tableData = response.data.pageInfo;
                }else{
                   _that.tableData = [];
                }
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
        this.getWzqkList(this.search_obj);
      },
      tableprint(){
        var doc_obj = document.getElementById("wzqktable");
        var data = {};
        data.rangDate = this.search_obj.startDate+' ~ '+this.search_obj.endDate;
        data.list = this.tableData.list;
        this.$tablePrint(doc_obj,{"data":data,"type":"1"}); //打印
      }
    }
  }
