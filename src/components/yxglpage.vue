<template>
  <div style="margin-top: 20px;margin-left:55px">
    <div>
      <span style="font-size: 40px">病人影像</span>
    </div>
    <div style="font-size: 25px;margin-top: 20px;display: flex">
      <div>
        <span>姓名：</span>
        <span>{{pname}}</span>
      </div>
      <div style="margin-left: 150px">
        <span>年龄：</span>
        <span>{{age}}</span>
      </div>
      <div style="margin-left: 150px">
        <span>性别：</span>
        <span>{{gender}}</span>
      </div>
      <div style="margin-left: 150px">
        <span>来源地：</span>
        <span>{{residence}}</span>
      </div>
    </div>
    <div style="margin-top: 30px;font-size: 20px" v-for="(di,index1) in inquiries">
      <div style="font-size: 25px;margin-bottom: 20px">
        <span>{{di.date}}</span>
        <span style="margin-left: 20px">第{{di.times}}次</span>
      </div>
      <div>
        <el-col :span="24" style="margin-left: 60px;margin-bottom: 20px" class="hhh">
          <div class="xixi" v-for="(image,index) in di.images" style="width: 330px;float: left" >
            <i @click="removepicture(index,index1)" class="el-icon-close" style="height: 50px;width: 50px;margin-left: 305px"></i>
            <img style="margin-left: 25px;margin-top: -50px" :src=image.imageUrl>
<!--            <div>
              <el-button @click="removepicture(index,index1) " class="btn-border-red" style="margin-left:32%;width: 100px;height: 50px;font-size: 25px">删除</el-button>
            </div>-->
          </div>
        </el-col>
      </div>
    </div>
    <div>
      <el-button @click="gotoLastPage" style="margin-bottom: 80px;margin-top: 50px;margin-left: 45%;
      width: 100px;height: 60px;font-size: 25px;background-color:#20a0ff;border: solid 1px #20a0ff;border-radius:4px;color: white">返回</el-button>
    </div>
  </div>
</template>

<script>
    export default {
      name: "yxglpage",
      data(){
        return{
            counter : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            indexs:[],
            image:[],
            patientId:"",
            pname:"",
            gender:"",
            residence:"",
            age:"",
            inquiries:[{
              inquiryId:"",
              times:"",
              date:"",
              images:[{
                id:"",
                imageUrl:[],
              }
              ]
            }
            ],
        }
      },
      created(){
        this.getPatientImages()
      },
      methods:{
        selectimage(index,index1){
          let _that = this;
          let hhh = document.getElementsByClassName("hhh")
          let xixi = document.getElementsByClassName("xixi");
          _that.counter[index]=_that.counter[index]+1;
          console.log("111"+_that.counter)
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
            xixi[index].style.backgroundColor = "blue";
            _that.indexs.push(index)
          }
        },
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
        removepicture(index,index1) {
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
            console.log("index1"+index1)
            console.log("index"+index)
            picture.push(_that.inquiries[index1].images[index]);
            id.push(picture[0].id);
            let url = '/inquiry/deleteInquiryImage?images='+id;
            _that.$http.post(url,{
            }).then(response => {
              if(response.code == 1){
                _that.getPatientImages()
                let xixi = document.getElementsByClassName("xixi");
                xixi[index].style.backgroundColor = "white";
              }
            }).catch(() => {
              _that.$message.error("删除失败")
            })
          })
        },
        getPatientImages(){
          var param = JSON.parse(window.localStorage.getItem("pathParams"));
          var _that = this;
          var url = "/patientManage/getPatientImages";
          _that.$http.get(url,{
            params: {
              patientId:param.data.pId
            }
          }).then(function (response) {
            //得到个人信息的数据，对个人信息进行处理后绑定
            if(response.code == "1"){
              _that.gender = response.data.gender;
              _that.pname = response.data.pname;
              _that.residence = response.data.residence;
              _that.age = response.data.age;
              _that.inquiries = response.data.inquiries
              // _that.basicInfo = response.data.patientInfo;
            }else{
              _that.$common.openErrorMsgBox(response.msg,_that);
            }
          }).catch(function (error) {
            _that.$common.openErrorMsgBox(error,_that);
          });
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
      }
    }
</script>

<style scoped>

</style>
