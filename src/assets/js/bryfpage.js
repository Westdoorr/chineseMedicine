export default {
    name:"bryfpage"
    ,data() {
        return {
            allTotal:0,
            diagnoseLabels:null,
            d_isActive:false,
            b_isActive:false,
            is_display_xjzd:false,
            is_display_zd:false,
            is_display_fh:true,
            is_display_xj: true,
            options: [],
            yfdata:{
                "pName":"",
                "inquiryId": 0,
                "description": "",
                "diagnoseLabel": null,
                "age":0,
                "gender":"",
                "date":"",
                "address":"",
                mainReList: [
                    {
                    "amount": null,
                    "isStock": true,
                    "remarks": "",
                    "mainMeList": null,
                    "recipeDetailList": [
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      },
                      {
                        "detailId": 0,
                        "recipeId": 0,
                        "medicine": "",
                        "dose": 0,
                        "remark": null
                      }
                    ],
                    "viceReList": [
                      {
                        "amount": null,
                        "isStock": true,
                        "remarks": "先用，与主方同用",
                        "viceMeList": null,
                        "viceRecipeDetailList": [
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          }
                        ]
                      },
                      {
                        "amount": null,
                        "isStock": true,
                        "remarks": "后用，与主方同用",
                        "viceMeList": null,
                        "viceRecipeDetailList": [
                         {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          }
                        ]
                      }
                      /*,{
                        "amount": null,
                        "isStock": true,
                        "remarks": "最后用，与主方同用",
                        "viceMeList": null,
                        "viceRecipeDetailList": [
                         {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          },
                          {
                            "detailId": 0,
                            "viceRecipeId": 0,
                            "medicine": "",
                            "dose": 0,
                            "remark": null
                          }
                        ]
                      }*/
                    ]
                  }
                ]
            },
            mbViceObj:{
                            "amount": 14,
                            "isStock": true,
                            "remarks": "副方备注",
                            "viceMeList": null,
                            "viceRecipeDetailList": [
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            }
                            ]
                        },
            mbMainObj:{
                    "amount": 0,
                    "isStock": true,
                    "remarks": "",
                    "mainMeList": null,
                    "recipeDetailList": [
                        {
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                        ,{
                            "detailId": null,
                            "recipeId": null,
                            "medicine": "",
                            "dose": null,
                            "remark": null
                        }
                    ]
                    ,"viceReList": [
                        {
                            "amount": 14,
                            "isStock": true,
                            "remarks": "先用，与主方同用",
                            "viceMeList": null,
                            "viceRecipeDetailList": [
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            }
                            ]
                        },
                        {
                            "amount": 14,
                            "isStock": true,
                            "remarks": "后用，与主方同用",
                            "viceMeList": null,
                            "viceRecipeDetailList": [
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            }

                            ]
                        }
                        /*,{
                            "amount": null,
                            "isStock": true,
                            "remarks": "最后用，与主方同用",
                            "viceMeList": null,
                            "viceRecipeDetailList": [
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            },
                            {
                                "detailId": null,
                                "viceRecipeId": null,
                                "medicine": "",
                                "dose": null,
                                "remark": null
                            }

                            ]
                        }*/

                    ]
                 },
            addTime:""

        };
    }
    ,computed: {
        getPersonInfo:function(){
            var result_str =this.yfdata.gender+" , "+this.yfdata.resisdence+" , "+this.yfdata.date+" , "+this.yfdata.age+"岁 , 第"+this.yfdata.times+"次";
            return result_str;
        }
    }
    //请求药方数据，
    ,beforeCreate () {
        //
    }
    ,created () {
        // this.initDiagnoseLabel();
        this.initPage();
        //请求药方数据
        this.getyfDate();
        // window.onbeforeunload = function(e) {
        //   console.log("刷新")
        //   return "您编辑的信息尚未保存，您确定要离开吗？"//这里内容不会显示在提示框，为了增加语义化。
        // };
        window.addEventListener("beforeunload", function (e) {
          var confirmationMessage = '确定离开此页吗？本页不需要刷新或后退';

          (e || window.event).returnValue = confirmationMessage;     // Gecko and Trident
          return confirmationMessage;                                // Gecko and WebKit
        });
    },

    //离开之前
     beforeRouteLeave(to, from, next){
       this.$confirm('是否离开当前页面', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         type: 'warning',
         customClass:"qcMessage"
         }).then(() => {
           // console.log("取消绑定")
           // window.removeEventListener("beforeunload", this.beforeunload(e));
           next();
         }).catch(() => {

       });
     },
      deactivated(){
        console.log("取消绑定")
        window.removeEventListener("beforeunload",this.beforeunload);
      },

  watch: {},

  mounted() {
    //页面打开就滚动到88处
    this.scrollWindow()


    //刷新
    window.addEventListener("beforeunload",function () {
       console.log("刷新")
       return true
    });


    //滚动条滚动
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollWindow(){
        window.scrollTo(100,88);
    },


    beforeunload(e){
      console.log("刷新")
      window.onbeforeunload = function(){ return false; }
    },

    //入库
     ruKu(mrindex){
         this.yfdata.mainReList[mrindex].isStock = !this.yfdata.mainReList[mrindex].isStock
     },

    //副方入库
    viceRuKu(mrindex,vindex){
      this.yfdata.mainReList[mrindex].viceReList[vindex].isStock = !this.yfdata.mainReList[mrindex].viceReList[vindex].isStock
    },

    //清空主方
    qkMegBox(data,mrindex,vindex){
       console.log("清空主方")
      if(data ==="deleteZf"){
        this.$confirm('是否清除主方内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          customClass:"qcMessage"
        }).then(() => {
          this.yfdata.mainReList[mrindex].recipeDetailList.forEach((p)=>{
            p.detailId= null,
              p.recipeId= null,
              p.medicine=""
            p.dose= null,
              p.remark=null
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '操作已取消'
          });
        });


      }
      //清空副方
      else if(data ==="deleteFf"){

        this.$confirm('是否清除该副方内容', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          customClass:"qcMessage"
        }).then(() => {
          this.yfdata.mainReList[mrindex].viceReList[vindex].viceRecipeDetailList.forEach((p)=>{
            p.detailId= null,
              p.recipeId= null,
              p.medicine=""
            p.dose= null,
              p.remark=null
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '操作已取消'
          });
        });



      }
    },

    mous_qk(){
      console.log("移入")
    }

    ,

    //清空副方

    /**
     * 初始化页面的按钮
     */
    initPage:function(){
        var prePathParams = JSON.parse(window.localStorage.getItem("prePathParams"));
        console.log("传输的数据",prePathParams)
        // this.is_display_xjzd = true;
        // this.is_display_fh = prePathParams.is_display_xj;
        // this.is_display_fh = prePathParams.is_display_xj;
        // this.is_display_zd = true;
        if(prePathParams.path == "brglpage"){
          console.log("从病人管理页面来")
          this.is_display_fh = prePathParams.is_display_xj;
          this.is_display_xj = prePathParams.is_display_fh;
          console.log(this.is_display_xj)
            //排除从病人管理的新建复诊
            // if(prePathParams.data.xzfz != "new"){
            //     this.is_display_fh = false;
            //     this.is_display_zd = true;
            // }
            // if(prePathParams.path=="grblglpage" && prePathParams.data.xzfz != "new"){
            //     this.is_display_xjzd = false;
            //     this.is_display_fh = false; //返回
            //     this.is_display_xj = false //新建
            // }
        }else if(prePathParams.path == "grblglpage"){
          this.is_display_fh = prePathParams.is_display_xj;
          this.is_display_xj = prePathParams.is_display_fh;
        }else if(prePathParams.path == "blglpage"){
          this.is_display_fh = false
          this.is_display_xj =false
          this.is_display_zd =false
        }

        else{
            this.is_display_fh = true;
            this.is_display_zd = false;
        }
    },
    setActiveSyle:function(type){
        if(type == 1){
            if(this.d_isActive == false){
                this.d_isActive = true;
            }else{
                this.d_isActive = false;
            }
        }else{
            if(this.b_isActive == false){
                this.b_isActive = true;
            }else{
                this.b_isActive = false;
            }
        }
    },
    gotoLastPage:function(){
        //跳转组件并且 传递pid
      var pathParams = window.localStorage.getItem("prePathParams");
      var prePathParams = window.localStorage.getItem("pathParams");
      prePathParams = JSON.parse(prePathParams);
      prePathParams.path = "brglpage";
      //缓存 目标跳转页面的参数
      this.$store.dispatch("setPathParams", pathParams);
      this.$store.dispatch("setPrePathParams", JSON.stringify(prePathParams));
      //缓存 跳转页面的参数
      this.$common.GotoPage(JSON.parse(pathParams).path,JSON.parse(pathParams),this);
    },
    /**
     * 清除操作
     *
     * */
    clearAllYw:function(){
        var model_list = new Array();
        model_list.push(this.mbMainObj);
        this.yfdata.mainReList=model_list;
        this.allTotal = this.getAllTotal(this.yfdata);
        this.$common.openSuccessMsgBox("清除成功!",this);
    },
    /**
     * 遍历计算总付数
     */
    getAllTotal:function(yfdata){
        var mainRelist = yfdata.mainReList;
        var allTotal = 0;
        for(var i in mainRelist){
            var zfObj = mainRelist[i];
            var zf_num = 0;
            if(!zfObj.amount || zfObj.amount==""){
                zf_num= 0;
            }else{
                zf_num =  parseInt(zfObj.amount);
            }
            allTotal = allTotal+zf_num;
 /*           for(var j in mainRelist[i].viceReList){
                var ff_num = 0;
                if(!mainRelist[i].viceReList[j].amount || mainRelist[i].viceReList[j].amount==""){
                    ff_num = 0;
                }else{
                    ff_num = parseInt(mainRelist[i].viceReList[j].amount);
                }
                allTotal = allTotal+ff_num;
            }*/
        }
        if(allTotal == 0){
            allTotal = null;
        }
        return allTotal;
    },
    opencomfigMethod(msg,method_name,method_params){
        this.$common.openComfigDialog(msg,method_name,method_params,this);
    },
    /**
     * 设置模版数据格式，原因 后端新增串 和返回的串格式一致
     * 把药物对象转化成String
     */
    setSubmitYfData:function(yfdata){
        //生成新的对象 避免改到原本的数据值
        var tmpObj = JSON.parse(JSON.stringify(yfdata));
        for(var i in tmpObj.mainReList){
            var recipeDetailList = new Array();
            console.log(i);
            for(var j in tmpObj.mainReList[i].recipeDetailList){
                //主方药物对象 转化成为  字符串数组
                if(tmpObj.mainReList[i].recipeDetailList[j].medicine!=""){
                    recipeDetailList.push(tmpObj.mainReList[i].recipeDetailList[j].medicine);
                }
            }
            //更新已经完成的字符串数组
            tmpObj.mainReList[i].mainMeList = recipeDetailList;
            //去除已转的冗余数据
            delete tmpObj.mainReList[i].recipeDetailList;
            for(var m in tmpObj.mainReList[i].viceReList){
                var viceYWlist = new Array();
                var viceRecipeDetailList = tmpObj.mainReList[i].viceReList[m].viceRecipeDetailList;
                for(var n in viceRecipeDetailList){
                    if(viceRecipeDetailList[n].medicine!=""){
                        viceYWlist.push(viceRecipeDetailList[n].medicine);
                    }
                }
                tmpObj.mainReList[i].viceReList[m].viceMeList = viceYWlist;
                delete tmpObj.mainReList[i].viceReList[m].viceRecipeDetailList;
            }
        }
        return tmpObj;
    },
    /**
     * 异步提交诊断标签
     */
    async SubmitDiagnoseLabels (){
        var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
        var s_parms = {};
        s_parms.patientId = r_params.data.pId;
        s_parms.inquiryId = r_params.data.inquiryId;
        //转化字符串为字符数组
        if(this.diagnoseLabels){
            var str = this.diagnoseLabels.replace(/\uff0c/g, ',');
            var d_arry = str.split(",");
            if(d_arry){
                s_parms.diagnoseLabels = d_arry;
            }else{
                s_parms.diagnoseLabels = null;
            }
        }else{
              s_parms.diagnoseLabels = null;
        }
        let data = await new Promise((resolve, reject) => {
            this.$http.post('/inquiry/postDiagnoseLabels',s_parms).then((data) =>  {
                resolve(data);
            }).catch(function (error) {
                reject(error);

            });
        });
        return data;
    },
    /**
     * 完成诊断 提交数据
     */
    submitYfData:function(){
        var _that = this;
        var btn_switch = false;
        var loading = this.$common.openLoading("正在新增/修改问诊信息，请稍候",_that);
        var param = _that.setSubmitYfData(_that.yfdata);
        this.SubmitDiagnoseLabels().then((data) => {
            if(typeof data.code == "undefined" || data.code!="1"){
                loading.close();
                _that.$common.openErrorMsgBox("基本信息的诊断标签保存失败！",_that);
                btn_switch = true;
            }else{
                _that.$http.post('/inquiry/postInquiryInfo',param).then(function (response) {
                    loading.close();
                    if(response.code =="1"){
                        _that.$common.openSuccessMsgBox("操作成功",_that);
                        _that.openMegBox("是否打印处方",'printYfPage');
                    }else{
                        _that.$common.openErrorMsgBox(response.msg,_that);
                    }

                }).catch(function (error) {
                    loading.close();
                  setTimeout(function(){
                    _that.$common.openErrorMsgBox(error,_that);
                    }, 1000);
                });
            }
        }, (error) => {
            loading.close();
            _that.$common.openErrorMsgBox(error,_that);
        });
    },
    /**
     * 获取复诊药方数据
     */
    getfzYfData:function(){
        var _that = this;
        var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
        var inquiryId = r_params.data.inquiryId;
        var lastinquiryId = r_params.data.lastinquiryId;
        if(lastinquiryId){
            //获取诊断标签
            _that.$http.get("/inquiry/getInquiryLabels?inquiryId="+lastinquiryId).then(function (response) {
                if(response.code == "1"){
                    var d_str = JSON.stringify(response.data.diagnoseLabels);
                    if(d_str == "[]"){
                        _that.diagnoseLabels = null;
                    }else{
                        _that.diagnoseLabels = d_str.replace(/[\[\]\"]*/g, '');
                    }
                    // _that.diagnoseLabels = JSON.stringify(response.data.diagnoseLabels);
                }else{
                    _that.$common.openErrorMsgBox(response.msg,_that);
                }
            }).catch(function(error){
                 _that.$common.openErrorMsgBox(error,_that);
            });
            //获取药方信息
            var url = "/inquiry/getInquiryInfo?inquiryId="+lastinquiryId;
            _that.$http.get(url)
            .then(function (response) {
                if(response.code == "1"){
                    var yfdataInfo = response.data.inquiryInfo;
                    if(JSON.stringify(yfdataInfo.mainReList) === '[]'){
                        //代表为空的新数组，复制模版给对象
                        var mbMainList = new Array();
                        var obj = JSON.parse(JSON.stringify(_that.mbMainObj));
                        mbMainList.push(obj);
                        yfdataInfo.mainReList = mbMainList;
                        yfdataInfo.inquiryId = inquiryId;
                         yfdataInfo = _that.setDefaultAmount(yfdataInfo);
                        _that.yfdata = yfdataInfo;
                        _that.allTotal = _that.getAllTotal(yfdataInfo);
                    }else{
                        //主方数据不为空，规范数据然后赋值
                          yfdataInfo = _that.setDefaultAmount(yfdataInfo);
                          yfdataInfo = _that.normalYwArry(yfdataInfo);
                          yfdataInfo.inquiryId = inquiryId;
                        _that.yfdata = yfdataInfo;
                        _that.allTotal = _that.getAllTotal(yfdataInfo);
                    }
                }else{
                    _that.$common.openErrorMsgBox(response.msg,_that);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    /**
     * 获取初诊药方数据
     */
    getCzYfData:function(){
        var _that = this;
        var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
        var inquiryId = r_params.data.inquiryId;
        if(inquiryId){
            //获取诊断标签数据
            _that.$http.get("/inquiry/getInquiryLabels?inquiryId="+inquiryId).then(function (response) {
                console.log('初诊数据',response)
                if(response.code == "1"){
                    var d_str = JSON.stringify(response.data.diagnoseLabels);
                    if(d_str == "[]"){
                        _that.diagnoseLabels = null;
                    }else{
                        _that.diagnoseLabels = d_str.replace(/[\[\]\"]*/g, '');
                    }
                }else{
                    _that.$common.openErrorMsgBox(response.msg,_that);
                }
            }).catch(function(error){
                 _that.$common.openErrorMsgBox(error,_that);
            });
            //获取药方数据
            var url = "/inquiry/getInquiryInfo?inquiryId="+inquiryId;
            _that.$http.get(url)
            .then(function (response) {
                if(response.code == "1"){
                    var yfdataInfo = response.data.inquiryInfo;
                    if(JSON.stringify(yfdataInfo.mainReList) === '[]'){
                        //代表为空的新数组，复制模版给对象
                        var mbMainList = new Array();
                        var obj = JSON.parse(JSON.stringify(_that.mbMainObj));
                        mbMainList.push(obj);
                        yfdataInfo.mainReList = mbMainList;
                        yfdataInfo = _that.setDefaultAmount(yfdataInfo);
                        _that.yfdata = yfdataInfo;
                        _that.allTotal = _that.getAllTotal(yfdataInfo);
                    }else{
                        //主方数据不为空，规范数据然后赋值
                          yfdataInfo = _that.normalYwArry(yfdataInfo);
                          yfdataInfo = _that.setDefaultAmount(yfdataInfo);
                        _that.yfdata = yfdataInfo;
                        _that.allTotal = _that.getAllTotal(yfdataInfo);
                    }
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
     * 判断是初诊/复诊
     * 依据问诊id 获取问诊信息
     * 获取问诊数据
     * */
    getyfDate:function(){
        var _that = this;
        var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
        var lastinquiryId = r_params.data.lastinquiryId;
        if(lastinquiryId == "" || !lastinquiryId){
            this.getCzYfData();
        }else{
            this.getfzYfData();
        }

    },
    /**
     * 页面打印
    */
    printYfPage(){
        var _that = this;
        var loading = _that.$common.openLoading("请稍后!",_that);
        var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
        var inquiryId = r_params.data.inquiryId;
            //获取药方数据
        var url = "/inquiry/getInquiryInfo?inquiryId="+inquiryId;
        _that.$http.get(url)
        .then(function (response) {
            loading.close();
            if(response.code == "1"){
                var yfdataInfo = response.data.inquiryInfo;
                if(JSON.stringify(yfdataInfo.mainReList) === '[]'){
                    //代表为空的新数组，复制模版给对象
                    var mbMainList = new Array();
                    var obj = JSON.parse(JSON.stringify(_that.mbMainObj));
                    mbMainList.push(obj);
                    yfdataInfo.mainReList = mbMainList;
                    yfdataInfo = _that.setDefaultAmount(yfdataInfo);
                    _that.yfdata = yfdataInfo;
                    _that.allTotal = _that.getAllTotal(yfdataInfo);
                }else{
                    //主方数据不为空，规范数据然后赋值
                        yfdataInfo = _that.normalYwArry(yfdataInfo);
                        yfdataInfo = _that.setDefaultAmount(yfdataInfo);
                        _that.yfdata = yfdataInfo;
                        _that.allTotal = _that.getAllTotal(yfdataInfo);
                }
                _that.yfdata.allTotal = _that.allTotal;
                _that.$Print(_that.yfdata,{'n_height':760});
            }else{
                _that.$common.openErrorMsgBox(response.msg,_that);
            }
        })
        .catch(function (error) {
                _that.$common.openErrorMsgBox(error,_that);
        });

    },
    /**
     * 删除时的提示确认框
     * msg 提示内容
     * callback 点击确定时的回调函数
     * mindex 主方列表 序号
     * vindex 副方列表 序号
     */
    openMegBox(msg,callback,mindex,vindex) {
        this.$confirm(msg, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          customClass:"qcMessage"

        }).then(() => {
            if(callback==="deleteZf"){
                this.deleteZf(mindex);
            }else if(callback === "deleteFf"){
                this.deleteFf(mindex,vindex);
            }else if(callback === "printYfPage"){
                this.printYfPage();
            }else{

            }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '操作已取消'
          });
        });
      },
    /**
     * 新增主方方法
    */
    addZf:function(mindex,val){
        var obj = JSON.parse(JSON.stringify(this.mbMainObj));
        // var obj = Object.assign({}, this.mbMainObj);
        this.yfdata.mainReList.push(obj);
        this.allTotal=this.getAllTotal(this.yfdata);
        this.$common.openSuccessMsgBox("主方新增成功!",this);
    },
    /**
     * 移除副方
     * mindex 代表主方序号
     * vindex 代表副方序号
     */
    deleteFf:function(mindex,vindex){
        this.yfdata.mainReList[mindex].viceReList.splice(vindex,1);
        this.updateZfAmount(mindex);
        this.$common.openSuccessMsgBox("副方移除成功!",this);
    },
    /**
     * 移除指定的主方
     *  */
    deleteZf:function(mindex){
        this.yfdata.mainReList.splice(mindex,1);
        this.allTotal = this.getAllTotal(this.yfdata);
        this.$common.openSuccessMsgBox("主方移除成功!",this);
    },

    /**
     * 修改或新增主药方中的药物列表
     * mindex 主方序号
     * val 修改的值 */
    updateMainMe:function(mindex,val){
        var switch_btn = true;
        var list = this.yfdata.mainReList[mindex].recipeDetailList;
        if(list && list.length > 0){
            for(var key in list){
                if(list[key].medicine==""){
                    // list[key].name=val;
                    switch_btn = false;
                    this.$set( this.yfdata.mainReList[mindex].recipeDetailList[key],"medicine",val);
                    break;
                }
            }
            //默认的数据对象中没有药品为空的数据 向列表中添加四个对象
            if(switch_btn){
                this.yfdata.mainReList[mindex].recipeDetailList.push({
                "detailId": null,
                "recipeId": null,
                "medicine": val,
                "dose": null,
                "remark": null
              });
                this.yfdata.mainReList[mindex].recipeDetailList.push({
                "detailId": null,
                "recipeId": null,
                "medicine": "",
                "dose": null,
                "remark": null
              });
                this.yfdata.mainReList[mindex].recipeDetailList.push({
                "detailId": null,
                "recipeId": null,
                "medicine": "",
                "dose": null,
                "remark": null
              });
                this.yfdata.mainReList[mindex].recipeDetailList.push({
                "detailId": null,
                "recipeId": null,
                "medicine": "",
                "dose": null,
                "remark": null
              });
            }
        }

    },
    /**
     * 修改或新增副药方的药物列表
     * value 要修改的值
     * vindex 副方序号
     * mindex 主方序号 */

    updateViceMe:function(value,vindex,mindex){
        var switch_btn = true;
        var list = this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList;
         if(list && list.length > 0){
             for(var key in list){
                if(list[key].medicine==""){
                    // list[key].name=val;
                    switch_btn = false;
                    this.$set( this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList[key],"medicine",value);
                    break;
                }
            }
            //默认的数据对象中没有药品为空的数据 向列表中添加四个对象
            if(switch_btn){
                this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.push({
                "detailId": null,
                "recipeId": null,
                "medicine": value,
                "dose": null,
                "remark": null
              });
                this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.push({
                "detailId": null,
                "recipeId": null,
                "medicine": "",
                "dose": null,
                "remark": null
              });
                this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.push({
                "detailId": null,
                "recipeId": null,
                "medicine": "",
                "dose": null,
                "remark": null
              });
                this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.push({
                "detailId": null,
                "recipeId": null,
                "medicine": "",
                "dose": null,
                "remark": null
              });
            }
         }
    },
    /**
     * 更新总付数
     *  */
    updateAmount:function(e){
        this.allTotal = this.getAllTotal(this.yfdata);
    },
    updateZfAmount:function(mrindex){
        var zf_total_num = null;
         var mainRelist = this.yfdata.mainReList;
         for(var j in mainRelist[mrindex].viceReList){
            var ff_num = 0;
            if(!mainRelist[mrindex].viceReList[j].amount || mainRelist[mrindex].viceReList[j].amount==""){
                ff_num = 0;
            }else{
                ff_num = parseInt(mainRelist[mrindex].viceReList[j].amount);
            }
            zf_total_num = zf_total_num+ff_num;
        }
        this.yfdata.mainReList[mrindex].amount = zf_total_num;
        this.updateAmount();
    },
    /**
     * 新增副方药物
     * e 触发事件
     * vindex 副方序号
     * mindex 主方序号
     */
    addfyfyw:function(e,vindex,mindex){
       console.log("新增副方的药物");
       var value = e.target.value;
       this.updateViceMe(value,vindex,mindex);
       e.target.value='';
    },
    /**
     * 新增主方药物
     * e. 触发事件
     * mindex 主方序号
     */
    addzyfyw: function (e,mindex) {
        this.updateMainMe(mindex,e.target.value);
        e.target.value='';
    },
      /** 新增副方 */
    addZyfff:function (mrindex){
        var obj = JSON.parse(JSON.stringify(this.mbViceObj));
        //   var obj = Object.assign({}, this.mbViceObj);
            if(this.yfdata.mainReList[mrindex].viceReList.length == 0){
                obj.remarks = "先用，与主方同用";
            }else if(this.yfdata.mainReList[mrindex].viceReList.length == 1){
                obj.remarks = "后用，与主方同用";
            }else{
                obj.remarks = "最后用，与主方同用";
            }
          this.yfdata.mainReList[mrindex].viceReList.push(obj);
          this.updateZfAmount(mrindex);
          this.$common.openSuccessMsgBox("新增副方成功!",this);
      },
    /**
    格式化药方的药物列表格式
    */
    normalYwArry:function(yfObj){
        var Obj = JSON.parse(JSON.stringify(yfObj));
        for(var i = 0; i<Obj.mainReList.length; i++){
        //第一步 规范主方
        var normal_zfyw = this.IsMbYwArry(Obj.mainReList[i].recipeDetailList,1);
        Obj.mainReList[i].recipeDetailList = normal_zfyw;
        //第二步 规范副方

        if(JSON.stringify(Obj.mainReList[i].viceReList)!="[]"){
            for(var j = 0; j<Obj.mainReList[i].viceReList.length; j++){
                var normal_ffyw = this.IsMbYwArry(Obj.mainReList[i].viceReList[j].viceRecipeDetailList,2);
                Obj.mainReList[i].viceReList[j].viceRecipeDetailList = normal_ffyw;
            }
        }
        }
        return Obj;
    },
    setDefaultAmount:function(yfdata){
        if(yfdata){
            if(yfdata.mainReList && JSON.stringify(yfdata.mainRelist)!="[]"){
                for(var i = 0;i < yfdata.mainReList.length; i++){
                    var amount_value = yfdata.mainReList[i].amount;
                    if(typeof amount_value == "string"){
                        amount_value = parseInt(amount_value);
                    }
                    if(!amount_value || amount_value<=0){
                        yfdata.mainReList[i].amount = null;
                    }
                    if(JSON.stringify(yfdata.mainReList[i].viceReList)!="[]"){
                        for(var j = 0; j<yfdata.mainReList[i].viceReList.length; j++){
                            var v_amout_value = yfdata.mainReList[i].viceReList[j].amount;
                            if(typeof amount_value == "string"){
                                v_amout_value = parseInt(v_amout_value);
                            }
                            if(!yfdata.mainReList[i].viceReList[j].amount || v_amout_value<=0){
                                yfdata.mainReList[i].viceReList[j].amount = null;
                            }
                        }
                    }
                }
            }
        }
        return yfdata;
    },
    /**
    * 是否为规范的模版数据，如果不是就设置成为规范的模版数据
    * arry 监测数组， type 1 代表为主方药物列表， 2代表 副方药物列表
    * return normal 符合规范的标准数据
    *
    */
    IsMbYwArry:function(arry,type){
        var normal_length = 12;
        var normal_arry = JSON.parse(JSON.stringify(arry));
        if(type == 2){
            normal_length = 8;
        }
        //第一步是否符合模版的长度
        if(JSON.stringify(arry) == '[]'){
            for(var i = 0; i<normal_length; i++){
                var obj = {
                "detailId": null,
                "recipeId": null,
                "medicine": "",
                "dose": null,
                "remark": null
                };
                normal_arry.push(obj);
            }
        }else{
            while (normal_arry.length < normal_length || normal_arry.length%4 !=0 )
            {
                var obj = {
                "detailId": null,
                "recipeId": null,
                "medicine": "",
                "dose": null,
                "remark": null
                };
                normal_arry.push(obj);
            }
        }
        return normal_arry;

    },
    /**数组最后四位对象是否为空
     * return true 为空
     * false 不为空
     */
    arryEnd4null:function(arry){
        var switch_btn = true;
        for(var i = arry.length - 1; i > arry.length-5; i--){
            if(arry[i].medicine != ""){
                switch_btn = false;
            }
        }
        return switch_btn;
    },
    /**
     * 更新主方药物列表
     * input失去焦点
     * 操作相应的数据
     * mindex 代表主方序号
     * findex 代表药物序号
     * */
    updateMainYw:function(mindex,findex){
        //第一步 排除是否为删除操作
        var ywObj = this.yfdata.mainReList[mindex].recipeDetailList[findex];
        if(ywObj.medicine == ""){
            //删除操作 清空这个为空的对象，然后在数组末尾添加一个空的数据，判断最后四个数组对象为空并且数组对象大于等于16 去掉末尾四个数据；
            this.yfdata.mainReList[mindex].recipeDetailList.splice(findex,1);
            //末尾添加数组对象
            var obj = {
            "detailId": null,
            "recipeId": null,
            "medicine": "",
            "dose": null,
            "remark": null
            };
            this.yfdata.mainReList[mindex].recipeDetailList.push(obj);
            var sz_length = this.yfdata.mainReList[mindex].recipeDetailList.length;
            var flag = this.arryEnd4null(this.yfdata.mainReList[mindex].recipeDetailList);
            if(sz_length>=16 && flag){
                this.yfdata.mainReList[mindex].recipeDetailList.splice(sz_length-4,4);
            }

        }
        //是更新数据，直接做数据请求操作
    },
    /** 更新 副方药物列表 */
    updateViceYw:function(mindex,vindex,findex){
        var ywObj = this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList[findex];
        if(ywObj.medicine == ""){
            //删除操作 清空这个为空的对象，然后在数组末尾添加一个空的数据，判断最后四个数组对象为空并且数组对象大于等于null 去掉末尾四个数据；
            this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.splice(findex,1);
            //末尾添加数组对象
            var obj = {
            "detailId": null,
            "recipeId": null,
            "medicine": "",
            "dose": null,
            "remark": null
            };
            this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.push(obj);
            var sz_length = this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.length;
            var flag = this.arryEnd4null(this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList);
            if(sz_length>=12 && flag){
                this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.splice(sz_length-4,4);
            }
        }
    },
    /**
     *新建问诊
     */
    newInquiry_new:function(){
        var loading = this.$common.openLoading("新建问诊中,请稍等!",this);
        var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
        var brid= r_params.data.pId;
        this.$common.newInquiry_new(brid,this);
        this.is_display_xjzd = true;
        this.is_display_xj = true;
        this.is_display_fh = true;
        setTimeout(function(){
           loading.close();
        },2500);
    },
    }
    ,beforeMount () {
        //绑定数据前计算总付数
       this.allTotal = this.getAllTotal(this.yfdata);
    }
}
