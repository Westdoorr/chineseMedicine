export default {
    data() {
      return {
        wzqkpage:'wzqkpage',
        rangeDate:null,
        search_obj:{
            startDate:null,
            endDate:null,
            medicine:null,
            pageNum:1,
            pageSize:500
          },
        tableData: {
            list1:[],
            list2:[],
            list3:[]
          }
      }
    },
    created () {
        //获取页面的初始化数据
        this.initPage();
    },
    watch: {
      rangeDate:function(newQuestion, oldQuestion){
        if(this.rangeDate){
          this.search_obj.startDate = this.$common.dateFormatStr(this.rangeDate[0],'yyyy-MM-dd');
          this.search_obj.endDate = this.$common.dateFormatStr(this.rangeDate[1],'yyyy-MM-dd');
        }else{
          this.search_obj.startDate = null;
          this.search_obj.endDate = null;
        }

      },

    },
    methods: {

      //下载表格
      downLoad(){
        var _that = this;
        var param ={patientId:brid};
        this.$http.post('/inquiry/newInquiry',param,).then(function (response) {
            const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
            const downloadElement = document.createElement('a')
            const href = window.URL.createObjectURL(blob)
            downloadElement.href = href
            downloadElement.download = '任务统计.xls'
            document.body.appendChild(downloadElement)
            downloadElement.click()
            document.body.removeChild(downloadElement) // 下载完成移除元素
            window.URL.revokeObjectURL(href) // 释放掉blob对象
        }).catch(function (error) {
          console.log(error);
        });

      },

      //
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      //跳转到药方界面
      gotoWzqkPage(pagename) {
        var  _that = this,
            prePath = "";
        var pathParams = {path:pagename,data:{}};
        _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
        var prePathParams = {path:"yytjpage",data:_that.search_obj};
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
        if(i_params.data.pageSize){
            this.search_obj.pageSize = i_params.data.pageSize;
        }
        if(i_params.data.startDate){
          this.search_obj.startDate = i_params.data.startDate;
        }
        if(i_params.data.endDate){
          this.search_obj.endDate = i_params.data.endDate;
        }
        if(i_params.data.medicine){
            this.search_obj.medicine = i_params.data.medicine;
        }
        this.getYytjList();
      },
      /**
       * 获取用药统计列表
       */
      getYytjList(){
        var _that = this;
        var search_obj = this.search_obj;
        var url = "/dataStatistics/drugUse";
        _that.$http.get(url,{
            params: search_obj
           }).then(function (response) {
             console.log(response)
               if(response.code == "1"){
                   _that.setThreeList(response.data.pageInfo.list);
               }else{
                 _that.$common.openErrorMsgBox(response.msg,_that);
               }
            }).catch(function (error) {
                 _that.$common.openErrorMsgBox(error,_that);
            });
      },
      //跳转到药方界面
      gotoWzqkPage(pagename) {
        var  _that = this,
            prePath = "";
        var pathParams = {path:pagename,data:{}};
        _that.$store.dispatch("setPathParams", JSON.stringify(pathParams));
        var prePathParams = {path:"yytjpage",data:_that.search_obj};
        _that.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
        _that.$common.GotoPage(pagename,pathParams,_that);
      },
      setThreeList(list){
        console.log(list.length)
        if(list.length>0){
          //第一步 判断是否整除3
          if(JSON.stringify(list) != "[]"){
            //第二步 不能整除 补齐整除数组
            if(list.length%3 != 0){
              var min_number = Math.floor(list.length/3);
              var arry1 = new Array(),
                arry2 = new Array(),
                arry3 = new Array();
              var l_number = list.length%3;
              if(min_number!=0){
                arry1 = list.slice(0,min_number);
                arry2 = list.slice(min_number,2*min_number);
                arry3 = list.slice(2*min_number,3*min_number);
              }else{
                l_number = list.length;
              }
              if(l_number==1){
                arry1.push(list[list.length-1]);
                var temp_obj = new Object();
                temp_obj.dose = null;
                temp_obj.medicine = null;
                arry2.push(temp_obj);
                var temp_obj1 = new Object();
                temp_obj1.dose = null;
                temp_obj1.medicine = null;
                arry3.push(temp_obj1);
              }else{
                arry1.push(list[list.length-2]);
                arry2.push(list[list.length-1]);
                var temp_obj1 = new Object();
                temp_obj1.dose = null;
                temp_obj1.medicine = null;
                arry3.push(temp_obj1);
              }
              arry1=this.setYwListIndex(arry1,1);
              arry2=this.setYwListIndex(arry2,2);
              arry3=this.setYwListIndex(arry3,3);
              this.tableData.list1 =arry1;
              this.tableData.list2 = arry2;
              this.tableData.list3 = arry3;
            }else{
              var index = list.length/3;
              var arry1 = list.slice(0,index),
                arry2 = list.slice(index,index*2),
                arry3 = list.slice(index*2,list.length);
              arry1=this.setYwListIndex(arry1,1);
              arry2=this.setYwListIndex(arry2,2);
              arry3=this.setYwListIndex(arry3,3);
              this.tableData.list1 =arry1;
              this.tableData.list2 = arry2;
              this.tableData.list3 = arry3;
            }
          }

        }
        else {
          this.tableData.list1 =[];
          this.tableData.list2 = [];
          this.tableData.list3 = [];
        }

      },
      /** 对药物的列表序号排序 type　加几*/
      setYwListIndex(arry,type){
        var num = 3;
        if(arry && arry.length>0){
          for(var index in arry){
            if(arry[index] && arry[index].yindex){
              arry[index].yindex = index*3 + type;
            }else{

              arry[index].yindex = null;
            }
          }
        }
        return arry;
      },
      tableprint(){
        var doc_obj = document.getElementById("wzqktable");
        var data = {};
        data.rangDate = (this.search_obj.startDate ? this.search_obj.startDate : '')+' ~ '+(this.search_obj.endDate ? this.search_obj.endDate : '');
        data.list1 = this.tableData.list1;
        data.list2 = this.tableData.list2;
        data.list3 = this.tableData.list3;
        this.$tablePrint(doc_obj,{"data":data,"type":"2"});
      },

      /*
      * 导出excel
      *
      * */
      exportExcel(){
        var _that = this;
         var url ="/dataStatistics/drugUseToExcel?startDate="+this.search_obj.startDate+"&endDate="+this.search_obj.endDate+"&medicine="+ this.search_obj.medicine+"&pageNum="+1+"&pageSize="+500;
        var loading = _that.$common.openLoading("病历word文档导出中，请耐心等待",_that);
        _that.$http.get(url,{responseType: 'arraybuffer'}).
        then(function (response) {
          console.log(url)
          console.log(response)
          loading.close();
          let blob = new Blob([response], {type: `application/vnd.ms-excel`});
          let objectUrl = URL.createObjectURL(blob);
          let link = document.createElement("a");
          let fname = '用药统计.xlsx'; //下载文件的名字
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
