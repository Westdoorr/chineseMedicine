<template>
<div class="x_header">
      <div class="logo-icon-div">
          <!-- <img src="./assets/header/logo.png" width="135" height="38"> -->
          <img :src="logoImg" width="135" height="38">
      </div>
      <div class="user-info-div">
          <div class="btn-group-div">
              <span @click = "showUpdate()">{{rolename}}</span>
            <span style="color: #20a0ff;" @click="logout">注销</span>
          </div>
          <div class="now-date-div">
            <span class="now-date">
              <!-- 2017/06/27  19:30 -->
              {{formateDate}}
            </span>
          </div>
      </div>
  <el-dialog title="修改密码" :visible.sync="dialogFormVisible" style="font-size: 30px">
    <el-form class="small-space" :model="tempUser" label-position="left" label-width="150px" size="medium"
             style='width: 600px; margin-left:50px'>
      <el-form-item label="新密码" style="font-size: 30px">
        <el-input type="password" v-model="tempUser.password">
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="tempUser.checkpassword" @blur="passwordCheck">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false" style="width: 150px;height: 60px;font-size: 30px">取 消</el-button>
      <el-button type="primary" @click="updateUser" style="width: 150px;height: 60px;font-size: 30px">修 改</el-button>
    </div>
  </el-dialog>
    </div>
</template>

<style lang="scss" scoped>
    .x_header{
      width: 100%;
      height: 88px;
      background-color: #324057;
      border-radius: 2px;
      display:flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .logo-icon-div{
          width: 283px;
          height: 38px;
          padding-left: 44px;
      }
      .user-info-div{
        width: 569px;
        height: 100%;
        display:flex;
        flex-direction: row;
        align-items: center;
        .user-icon{
          width: 40px;
          height: 40px;
          margin-right: 20px;
        }
        .btn-group-div{
          width: auto;
          height: auto;
         span{
            height: 40px;
            font-family: PingFangSC-Regular;
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #ffffff;
            margin-right: 20px;
         }
        }
        .now-date-div{
          width: 247px;
	        height: 40px;
             @media screen and (min-width: 769px) {
                margin-left: 50px;
             }
          span{
            font-family: PingFangSC-Regular;
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #99a9bf;
          }
        }
      }
    }
    @media screen and (max-width: 758px) {
        .x_header .user-info-div .now-date-div{
            margin-left: 0px;
        }
    }
</style>

<script>
 import picLogo from '@/assets/img/header/logo.png'
 import picAccount from '@/assets/img/header/accounts.png'
 import {roleuser} from "../../store/mutations";
export default {
    name:"headervue",
    // 父组件传递选中类型参数
    props: {
        active:{
            type:String,
            required:true
        }
    }
    ,data() {
        return {
            dialogFormVisible:false,
            tempUser:{},
            rolename:{},
            roleuser:{},
            logoImg:picLogo,
            picAccount:picAccount,
            nowdate:new Date(),
            homepage:'/Index/xjczbr',
            brglpage:'/Index/brglpage',
            blglpage:'/Index/blglpage',
            sjtjpage:'/Index/wzqkpage'
        }
    }
    //计算属性 设置属性 获取属性值
    ,computed: {
        //格式化日期
        formateDate:function(){
            var date = this.nowdate;
            var mat={};
            mat.M=date.getMonth()+1;//月份记得加1
            mat.H=date.getHours();
            mat.s=date.getSeconds();
            mat.m=date.getMinutes();
            mat.Y=date.getFullYear();
            mat.D=date.getDate();
            mat.M = mat.M.toString().length < 2 ? '0'+mat.M.toString(): mat.M.toString();
            mat.D = mat.D.toString().length < 2 ? '0'+mat.D.toString(): mat.D.toString();
            mat.H = mat.H.toString().length < 2 ? '0'+mat.H.toString(): mat.H.toString();
            mat.m = mat.m .toString().length < 2 ? '0'+mat.m.toString(): mat.m .toString();
            return mat.Y+"/"+mat.M+"/"+mat.D+" "+mat.H+":"+mat.m;
        }
    }
    ,created () {
/*    this.roleuser=this.$store.getters.gettersroleuser;
    this.rolename=this.$store.getters.gettersrolename;*/
    this.roleuser = window.localStorage.getItem("role")
    this.rolename = window.localStorage.getItem("username")
    }
    ,watch: {

    }
    ,methods: {
    passwordCheck() {
      var _that = this;
      if(_that.tempUser.checkpassword !==_that.tempUser.password ){
        _that.$message({
          type: 'error',
          message: '密码不一致'
        });
      }
    },
    showUpdate() {
      this.tempUser.role = this.roleuser;
      this.tempUser.password = '';
      this.dialogFormVisible = true
    },
    updateUser() {
      var _that = this;
      if(_that.tempUser.checkpassword !==_that.tempUser.password ){
        _that.$message({
          type: 'error',
          message: '密码不一致'
        });
      }else {
        _that.$http.post('/userManage/updateUser',{
          username: _that.rolename,
          password: _that.tempUser.password,
          role : _that.tempUser.role
        }).then(response => {
          if(response.code == 1){
            _that.dialogFormVisible = false
            _that.logout()
          }
        })
          .catch(function (error) {
            console.log(error);
          })
      }
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
        gotopage:function(value){
            this.$emit('headCallBack', value);
        },
        //检查是不是为两位数字，不足补全
        check:function(str){
            str=str.toString();
            if(str.length<2){
                str='0'+ str;
            }
            return str;
        }
    }
    ,mounted () {
        var _this = this;
        this.timer = setInterval(function(){
            _this.nowdate = new Date();//修改数据date
        },1000*60);
    }
    ,beforeDestroy () {
         if(this.timer) {
            clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
        }
    }

}
</script>

