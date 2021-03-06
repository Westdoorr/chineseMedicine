export default {
  name:"bryfpage"
  ,data() {
    return {
      errorName:[],
      standardList:[],
      seen:false,
      current:0,
      counter : [0,0,0,0,0,0,0,0],
      indexs:[],
      image:[],
      mediaStreamTrack:null,
      dialogphotoVisible:false,
      dialogerrorVisible:false,
      picture:[],
      ppname:'',
      count:0, //第几次
      allTotal:0,
      dialogFormVisible: false,
      dialogStatus:false,
      diagnoseLabels:null,
      d_isActive:false,
      b_isActive:false,
      is_display_xjzd:false,
      is_display_zd:false,
      is_display_fh:true,
      is_display_xj: true,
      options: [],
      priceData:[{
        originalPrice:"",
        actualPrice:"",
      }
      ],
      yfdata:{
        "pName":"",
        "inquiryId": 0,
        "description": "",
        "diagnoseLabel": null,
        "age":0,
        "gender":"",
        "date":"",
        "address":"",
        "amount":null, //主方数
        "inquiryDate":null,
        "count":"",
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
        "amount": null,
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
      // console.log(this.yfdata)
      var result_str =this.yfdata.gender+", "+this.yfdata.resisdence+", "+this.yfdata.date+", "+this.yfdata.age+", 第"+parseInt(this.yfdata.times)+"次" + ", 第"+this.yfdata.count+"位";
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
    //
    this.params = this.$route.query
    console.log("地址后台挂的值",this.params )
    var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
    console.log("地址后台缓存",r_params)
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
    this.getinformation();
    this.getInquiryImages();
    //返回按钮
    /* window.addEventListener("popstate", function(){
       console.log("监听返回");
       // if(confirm('你确定要离开药方界面吗')==true){
         // return true;
         history.go(0)
       // }
       return false
     })*/
  },

  //离开之前
  beforeRouteLeave(to, from, next){
    this.$confirm('是否离开当前页面并保存', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      customClass:"qcMessage"
    }).then(() => {
      console.log("取消绑定")
      this.quitsubmitYfData();
      // window.removeEventListener("beforeunload", this.beforeunload(e));
      next();

    }).catch(() => {
      console.log("取消跳转")
      // next(false)
    });
  },


  deactivated(){
    console.log("取消绑定")
    window.removeEventListener("beforeunload",this.beforeunload);
  },

  watch: {
    '$route':'fetchData'
  },

  mounted() {
    //页面打开就滚动到88处
    // this.scrollWindow()
    //刷新
    window.addEventListener("beforeunload",function () {
      console.log("刷新")
      return true
    });


    //滚动条滚动
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    /**
     * 将对应主方新加一行
     * @param mindex
     * @param findex
     */
    addMainNewRow(mindex,findex){
      for (let i = 0; i < 4; i++) {
        var emptyMedicine = {
          "detailId": null,
          "recipeId": null,
          "medicine": "",
          "dose": null,
          "remark": null
        };
        this.yfdata.mainReList[mindex].recipeDetailList.push(emptyMedicine);
      }
    },
    /**
     * 将对应副方新加一行
     * @param mindex
     * @param vindex
     * @param findex
     */
    addViceNewRow(mindex,vindex,findex){
      for (let i = 0; i < 4; i++) {
        var emptyMedicine = {
          "detailId": null,
          "recipeId": null,
          "medicine": "",
          "dose": null,
          "remark": null
        };
        this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.push(emptyMedicine);
      }

    },
    /**
     * 多选图片对照片进行标记
     * @param index
     */
    selectimage(index){
      let _that = this;
      let xixi = document.getElementsByClassName("xixi");
      _that.counter[index]=_that.counter[index]+1;
      if(_that.counter[index] %2 == 0){
        xixi[index].style.backgroundColor = "white";
        for(let i = 0;i< _that.indexs.length;i++)
        {
          if(_that.indexs[i] == index){
            _that.indexs.splice(i,1)
          }else {
            continue
          }
        }
      }else {
        xixi[index].style.backgroundColor = "#66CCFF  ";
        _that.indexs.push(index)
      }
    },
    /**
     * 批量删除照片
     */
    removesomepicture() {
      let picture = [];
      let id=[];
      var _that = this;
      this.$confirm('确定删除这些照片?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
        customClass:"qcMessage",
        type: 'warning'
      }).then(() => {
        for(let i = 0 ; i< _that.indexs.length; i++){
          let count = "";
          count = _that.indexs[i];
          picture.push(_that.image[count]);
          id.push(picture[i].id)
        }
        let url = '/inquiry/deleteInquiryImage?';
/*        url+="images="+id*/
        id.forEach((p)=>{
          url+="images="+p+"&"
        })
;        _that.$http.post(url,{
        }).then(response => {
          if(response.code == 1){
            let xixi = document.getElementsByClassName("xixi");
            for (let n =0; n<_that.indexs.length;n++){
              xixi[n].style.backgroundColor = "white";
            }
            _that.getInquiryImages()
            _that.indexs=[]
          }
        }).catch(() => {
          _that.$message.error("删除失败")
        })
      })
    },
    /**
     * 删除一张照片
     */
    removepicture(index) {
      let picture = [];
      let id=[];
      var _that = this;
      this.$confirm('确定删除此照片?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
        customClass:"qcMessage",
        type: 'warning'
      }).then(() => {
        picture.push(_that.image[index]);
        id.push(picture[0].id);
        let url = '/inquiry/deleteInquiryImage?images='+id;
        _that.$http.post(url,{
        }).then(response => {
          if(response.code == 1){
            _that.getInquiryImages()
            let xixi = document.getElementsByClassName("xixi");
            xixi[index].style.backgroundColor = "white";
          }
        }).catch(() => {
          _that.$message.error("删除失败")
        })
      })
    },
    /**
     * 从后台获取对应药方的照片
     */
    getInquiryImages(){
      var _that = this;
      _that.params = _that.$route.query
      var url = "/inquiry/getInquiryImages";
      _that.$http.get(url,{
        params: {
          inquiryId: _that.params.inquiryId
        }
      }).then(function (response) {
        if(response.code == "1"){
          _that.image = response.data.images
        }else{
          _that.$common.openErrorMsgBox(response.msg,_that);
        }
      }).catch(function (error) {
        _that.$common.openErrorMsgBox(error,_that);
      });
    },
    /**
     * 打开摄像头
     */
    getMedia() {
      var _that = this;
      let constraints = {
        video: {width: 280, height: 400},
      };
      //获得video摄像头区域
      let video = document.getElementById("video");
      //这里介绍新的方法，返回一个 Promise对象
      // 这个Promise对象返回成功后的回调函数带一个 MediaStream 对象作为其参数
      // then()是Promise对象里的方法
      // then()方法是异步执行，当then()前的方法执行完后再执行then()内部的程序
      // 避免数据没有获取到
      let promise = navigator.mediaDevices.getUserMedia(constraints);
      promise.then(function (MediaStream) {
        _that.mediaStreamTrack = MediaStream.getTracks()[0];
        try{
          _that.$refs.video.src = URL.createObjectURL(MediaStream);
        }catch (e) {
          console.log(e);
          _that.$refs.video.srcObject = MediaStream;
        }
        //_that.$refs.video.src = URL.createObjectURL(MediaStream);
        /*          video.src = URL.createObjectURL(MediaStream);*/
        _that.$refs.video.play();
      });
      _that.dialogphotoVisible = true;
    },
    /**
     * 关闭摄像头
     */
    funclose(){
      this.mediaStreamTrack.stop()
    },
    /**
     * 拍照
     */
    takePhoto() {
      var _that = this;
      //获得Canvas对象
      let video = document.getElementById("video");
      let canvas = document.getElementById("canvas");
      let ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, 280, 400);
      var saveImage = canvas.toDataURL('image/png');
      _that.picture = saveImage;
      _that.image.push(_that.picture);
      var formdata1 = new FormData();
      _that.picture =  _that.$common.base64Tofile(_that.picture,"111.jpg");
      formdata1.append('image',_that.picture,"111.png")
      formdata1.append('inquiryId',_that.yfdata.inquiryId)
      let config = {
        post_type: "form-data"
      };
      _that.$http.post('/inquiry/uploadInquiryImage',formdata1,config).then(function (response) {
        if(response.code == "1"){
          _that.getInquiryImages()
        }else{
          _that.$common.openErrorMsgBox(response.msg,_that);
        }
      }).catch(function (error) {
        setTimeout(function(){
          _that.$common.openErrorMsgBox(error,_that);
        }, 1000);
      });
    },
    /**
     * 确定拍照的照片
     */
    confirmphoto(){
      var _that = this;
      _that.dialogphotoVisible = false;
      _that.mediaStreamTrack.stop()
    },
    /**
     * 获取药方价格
     */
    getrecipePrice(){
      var _that = this
      _that.$http.get(
        '/inquiry/recipePrice',{
          params:{
            inquiryId : _that.yfdata.inquiryId
          }
        })
      .then(response =>{
        if(response.code == 1){
          _that.priceData.originalPrice = response.data.originalPrice;
          _that.priceData.actualPrice = response.data.actualPrice;
          _that.dialogFormVisible = true
        }
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    /**
     *
     *在主方中已经有药品的input输入框绑定ENTER键，将该输入框清空，并将该药品依次后移
     * mindex为该主方的index,
     * findex为该药品在该主方中的index
     **/
    addMainEmpty:function(mindex,findex){
      var inputMedicine = this.yfdata.mainReList[mindex].recipeDetailList[findex];
      console.log("主方药品为"+inputMedicine)
      if (inputMedicine.medicine != "") {
        var emptyMedicine = {
          "detailId": null,
          "recipeId": null,
          "medicine": "",
          "dose": null,
          "remark": null
        };
        this.yfdata.mainReList[mindex].recipeDetailList.splice(findex,0,emptyMedicine)
        var length = this.yfdata.mainReList[mindex].recipeDetailList.length
        if (this.yfdata.mainReList[mindex].recipeDetailList[length-1].medicine==""){
          this.yfdata.mainReList[mindex].recipeDetailList.pop()
        } else {
          for (let i = 0; i < 3; i++) {
            var endEmptyMedicine = {
              "detailId": null,
              "recipeId": null,
              "medicine": "",
              "dose": null,
              "remark": null
            };
            this.yfdata.mainReList[mindex].recipeDetailList.push(endEmptyMedicine);
          }
        }

      }
    },
    /**
     *
     *在副方中已经有药品的input输入框绑定ENTER键，将该输入框清空，并将该药品依次后移
     * mindex为该主方的index,
     * findex为该药品在该主方中的index
     **/
    addViceEmpty:function(mindex,vindex,findex){
      var inputMedicine = this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList[findex];
      console.log("副方药品为"+inputMedicine)
      if (inputMedicine.medicine != "") {
        var emptyMedicine = {
          "detailId": null,
          "recipeId": null,
          "medicine": "",
          "dose": null,
          "remark": null
        };
        this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.splice(findex,0,emptyMedicine)
        var length = this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.length
        if (this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList[length-1].medicine==""){
          this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.pop()
        } else {
          for (let i = 0; i < 3; i++) {
            var endEmptyMedicine = {
              "detailId": null,
              "recipeId": null,
              "medicine": "",
              "dose": null,
              "remark": null
            };
            this.yfdata.mainReList[mindex].viceReList[vindex].viceRecipeDetailList.push(endEmptyMedicine);
          }
        }
      }
    },
    /**
     * 获取病人信息
     */
    getinformation:function(){
      this.params = this.$route.query;
      this.$http.get(
        '/inquiry/getInquiryInfo',{
          params:{
            inquiryId:this.params.inquiryId
          }
        })
        .then(response =>{
          this.ppname=response.data.inquiryInfo.pName;
          document.title=this.ppname+"的药方";
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    fetchData(){
      console.log("兼听路由改变了");
      // this.initDiagnoseLabel();
      this.initPage();
      //请求药方数据
      //
      this.params = this.$route.query;
      console.log("地址后台挂的值",this.params );
      var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
      console.log("地址后台缓存",r_params)
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
    scrollWindow(){
      window.scrollTo(100,88);
    },


    beforeunload(e){
      console.log("刷新");
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
        if(prePathParams.data.xzfz == "new"){
          // this.count=1
          this.yfdata.inquiryDate = prePathParams.data.inquiryDate
          this.yfdata.date = prePathParams.data.date
          // this.is_display_fh = false;
          // this.is_display_zd = true;
        }
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
      else if(prePathParams.path == "xjczbr"){

        if(prePathParams.type == "new"){
          this.count=0
        }
        else {
          // this.count=1
        }
      }
      else if(prePathParams.path == "newwz"){
        console.log("新建问诊")
        // var prePathParams = window.localStorage.getItem("pathParams");
        this.count=0
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
      this.yfdata.amount = this.getAllTotal(this.yfdata);
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
      console.log(yfdata)
      var tmpObj = JSON.parse(JSON.stringify(yfdata));
      for(var i in tmpObj.mainReList){
        if(tmpObj.mainReList[i].amount ==""||tmpObj.mainReList[i].amount ==null){
          this.$message.error('主方付数不能为空');
          return false;
        }
        else {
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
          console.log(tmpObj)
        }

      }
      return tmpObj;
    },
    /**
     * 异步提交诊断标签
     */
    async SubmitDiagnoseLabels (){
      /*        var r_params = JSON.parse(window.localStorage.getItem('pathParams'));*/
      var s_parms = {};
      // s_parms.patientId = r_params.data.pId;
      // s_parms.inquiryId = r_params.data.inquiryId;
      s_parms.patientId = this.$route.query.pId;
      s_parms.inquiryId = this.$route.query.inquiryId;
      //转化字符串为字符数组
      if(this.diagnoseLabels){
        var str = this.diagnoseLabels.replace(/\u3002/g, "。");
        var d_arry = str.split("。");
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
    quitsubmitYfData:function(){
      var _that = this;
      var btn_switch = false;
      var param = _that.setSubmitYfData(_that.yfdata);
      console.log(param)
      if(param !=false){
        console.log("共计",param)
        var loading = this.$common.openLoading("正在新增/修改问诊信息，请稍候",_that);
        _that.SubmitDiagnoseLabels().then((data) => {
          if(typeof data.code == "undefined" || data.code!="1"){
            loading.close();
            _that.$common.openErrorMsgBox("基本信息的诊断标签保存失败！",_that);
            btn_switch = true;
          }else {
                if(_that.errorName.length ==0){
                  _that.$http.post('/inquiry/postInquiryInfo',param).then(function (response) {
                    console.log(response)
                    loading.close();
                    if(response.code =="1"){
                      _that.$common.openSuccessMsgBox("操作成功",_that);
                      _that.dialogStatus = 'print';
                      _that.getrecipePrice()
                      /*                _that.dialogFormVisible = true;*/
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
              }
            }).catch(function (error) {
              _that.$common.openErrorMsgBox(error,_that);
            });
          }

    },
    submitYfData:function(){
      var _that = this;
      var btn_switch = false;
      var param = _that.setSubmitYfData(_that.yfdata);
      console.log(param)
      if(param !=false){
        console.log("共计",param)
        var loading = this.$common.openLoading("正在新增/修改问诊信息，请稍候",_that);
        _that.SubmitDiagnoseLabels().then((data) => {
          if(typeof data.code == "undefined" || data.code!="1"){
            loading.close();
            _that.$common.openErrorMsgBox("基本信息的诊断标签保存失败！",_that);
            btn_switch = true;
          }else {
            _that.$http.get(
              "/medicineManage/getMedicinesWithName",).then(function (response) {
              console.log(response);
              if(response.code == 1){
                _that.standardList = response.data;
                var reg = /[\u4e00-\u9fa5]/g;
                var MainNameList = [];
                var ViceNameList = [];
                var totalMain = [];
                var totalVice = [];
                var List1 = [];
                var List2 = [];
                for(let i = 0; i< param.mainReList.length; i++){
                  List1 = param.mainReList[i];
                  for(let j = 0;j<List1.mainMeList.length;j++){
                    MainNameList[j] = List1.mainMeList[j].match(reg).join("");
                    totalMain.push(MainNameList[j]);
                  }
                  for(let m = 0; m< List1.viceReList.length;m++){
                    List2 = List1.viceReList[m];
                    for(let n = 0;n< List2.viceMeList.length; n++){
                      ViceNameList[n] = List2.viceMeList[n].match(reg).join("");
                      totalVice.push((ViceNameList[n]))
                    }
                  }
                }
                for(let i = 0;i<totalMain.length;i++){
                  if(totalMain[i].substring(0,2) == "自加"){
                    totalMain[i] = totalMain[i].slice(2);
                  }
                    for (let j = 0; j<totalVice.length;j++){
                      if(totalVice[j].substring(0,2) == "自加"){
                        totalVice[j] = totalVice[j].slice(2);
                      }
                    }
                }
                var count = 0;
                for(let i =0;i<totalMain.length;i++){
                  for(let j = 0 ;j<_that.standardList.length;j++){
                    if(totalMain[i] == _that.standardList[j]){
                      count++;
                    }
                  }
                  if(count === 0){
                    _that.errorName.push(totalMain[i])
                  }else {
                    count = 0;
                  }
                }
                for(let i =0;i<totalVice.length;i++){
                  for(let j = 0 ;j<_that.standardList.length;j++){
                    if(totalVice[i] == _that.standardList[j]){
                      count++;
                    }
                  }
                  if(count === 0){
                    _that.errorName.push(totalVice[i])
                  }else {
                    count = 0;
                  }
                }
                if(_that.errorName.length ==0){
                  _that.$http.post('/inquiry/postInquiryInfo',param).then(function (response) {
                    console.log(response)
                    loading.close();
                    if(response.code =="1"){
                      _that.$common.openSuccessMsgBox("操作成功",_that);
                      _that.dialogStatus = 'print';
                      _that.getrecipePrice()
                      /*                _that.dialogFormVisible = true;*/
                    }else{
                      _that.$common.openErrorMsgBox(response.msg,_that);
                    }
                  }).catch(function (error) {
                    loading.close();
                    setTimeout(function(){
                      _that.$common.openErrorMsgBox(error,_that);
                    }, 1000);
                  });
                }else {
                  _that.dialogerrorVisible = true;
                  loading.close();
                }
              }else{
                _that.$common.openErrorMsgBox(response.msg,_that);
              }
            }).catch(function (error) {
              _that.$common.openErrorMsgBox(error,_that);
            });
          }
        }, (error) => {
          loading.close();
          _that.$common.openErrorMsgBox(error,_that);
        });
      }

    },
    /**
     * 获取复诊药方数据
     */
    getfzYfData:function(){

      var _that = this;
      // var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
      var r_params = this.params;
      var inquiryId = r_params.inquiryId;
      var lastinquiryId = r_params.lastinquiryId;
      console.log("复诊2",r_params)
      // var r_params =  this.params ;
      // var inquiryId = r_params.data.inquiryId;
      // var lastinquiryId = r_params.data.lastinquiryId;
      console.log("复诊3",inquiryId)
      console.log("复诊4",lastinquiryId)
      if(lastinquiryId){
        console.log("复诊5")
        //获取诊断标签
        _that.$http.get("/inquiry/getInquiryLabels?inquiryId="+lastinquiryId).then(function (response) {
          console.log(response)
          if(response.code == "1"){
            var d_str = JSON.stringify(response.data.diagnoseLabels);

            console.log(d_str)
            if(d_str == "[]"){
              _that.diagnoseLabels = null;
            }else{
              d_str = d_str.replace(/[\[\]\"]*/g, '');
              _that.diagnoseLabels = d_str.replace(/[\,\"]/g, '。');
            }
            // _that.diagnoseLabels = JSON.stringify(response.data.diagnoseLabels);
          }else{
            _that.$common.openErrorMsgBox(response.msg,_that);
          }
        }).catch(function(error){
          _that.$common.openErrorMsgBox(error,_that);
        });
        // var brinfo = {pId:brid,inquiryId:response.data.inquiryId};
        // var url= "/inquiry/getLatestInquiryInfo?patientId="+brinfo.pId;

        //获取药方信息
        //  var url = "/inquiry/getInquiryInfo?inquiryId="+lastinquiryId;
        //这修改了东西
        var url= "/inquiry/getRevisitInfoVO?inquiryId="+r_params.lastinquiryId
        _that.$http.get(url)
          .then(function (response) {
            console.log("获取最后一次日期",response)
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
                _that.yfdata.amount = _that.getAllTotal(yfdataInfo);
              }else{
                //主方数据不为空，规范数据然后赋值
                yfdataInfo = _that.setDefaultAmount(yfdataInfo);
                yfdataInfo = _that.normalYwArry(yfdataInfo);
                yfdataInfo.inquiryId = inquiryId;
                _that.yfdata = yfdataInfo;
                _that.yfdata.amount = _that.getAllTotal(yfdataInfo);
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
      // var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
      var r_params = this.params;

      var inquiryId = r_params.inquiryId;
      if(inquiryId){
        //获取诊断标签数据
        _that.$http.get("/inquiry/getInquiryLabels?inquiryId="+inquiryId).then(function (response) {
          console.log('初诊数据',response)
          if(response.code == "1"){
            var d_str = JSON.stringify(response.data.diagnoseLabels);
            if(d_str == "[]"){
              _that.diagnoseLabels = null;
            }else{
              d_str = d_str.replace(/[\[\]\"]*/g, '');
              _that.diagnoseLabels = d_str.replace(/[\,\"]/g, '。');
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
            console.log('初诊数据',response)
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
                _that.yfdata.amount = _that.getAllTotal(yfdataInfo);
              }else{
                //主方数据不为空，规范数据然后赋值
                yfdataInfo = _that.normalYwArry(yfdataInfo);
                yfdataInfo = _that.setDefaultAmount(yfdataInfo);
                _that.yfdata = yfdataInfo;
                _that.yfdata.amount = _that.getAllTotal(yfdataInfo);
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
      //12-6修改
      // var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
      var r_params =  this.params;
      console.log("初始化",r_params)
      var lastinquiryId = this.params.lastinquiryId;
      if(lastinquiryId == "" || !lastinquiryId){
        console.log("初诊")
        this.getCzYfData();
      }else{
        console.log("复诊")
        this.getfzYfData();
      }

      //
      // var lastinquiryId = this.params.lastinquiryId;
      // console.log(this.params.lastinquiryId)
      // if(lastinquiryId == "" || !lastinquiryId){
      //     this.getCzYfData();
      // }else{
      //     this.getfzYfData();
      // }

    },
    /**
     * 页面打印
     */
    printYfPage(){
      var _that = this;
      _that.dialogFormVisible = false;
      var loading = _that.$common.openLoading("请稍后!",_that);
      // var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
      // var inquiryId = r_params.data.inquiryId;
      var r_params = this.params;
      var inquiryId = r_params.inquiryId;
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
            _that.$Print(_that.yfdata,{'n_height':750});
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
      // this.updateZfAmount(mindex);
      this.$common.openSuccessMsgBox("副方移除成功!",this);
    },
    /**
     * 移除指定的主方
     *  */
    deleteZf:function(mindex){
      this.yfdata.mainReList.splice(mindex,1);
      _that.yfdata.amount = this.getAllTotal(this.yfdata);
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
      this.yfdata.amount = this.getAllTotal(this.yfdata);
    },
    // updateZfAmount:function(mrindex){
    //     var zf_total_num = null;
    //      var mainRelist = this.yfdata.mainReList;
    //      for(var j in mainRelist[mrindex].viceReList){
    //         var ff_num = 0;
    //         if(!mainRelist[mrindex].viceReList[j].amount || mainRelist[mrindex].viceReList[j].amount==""){
    //             ff_num = 0;
    //         }else{
    //             ff_num = parseInt(mainRelist[mrindex].viceReList[j].amount);
    //         }
    //         zf_total_num = zf_total_num+ff_num;
    //     }
    //     this.yfdata.mainReList[mrindex].amount = zf_total_num;
    //     this.updateAmount();
    // },
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
      // this.updateZfAmount(mrindex);
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
      // var r_params = JSON.parse(window.localStorage.getItem('pathParams'));
      var r_params = this.params
      console.log("新建问诊的东西",r_params)
      var brid= {pId:r_params.pId,inquiryId:r_params.inquiryId}
      console.log("新建问诊的ids",brid)
      this.$common.newInquiry_new(brid,this);
      this.image = [];
      this.is_display_xjzd = true;
      this.is_display_xj = true;
      this.is_display_fh = true;
      this.count = 1
      setTimeout(function(){
        loading.close();
      },2500);
    },
  }
  ,beforeMount () {
    //绑定数据前计算总付数
    this.yfdata.amount = this.getAllTotal(this.yfdata);
  }
}
