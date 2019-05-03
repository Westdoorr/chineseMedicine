<template>
<div class="header" sty>
      <div class="logo-icon-div">
          <!-- <img src="./assets/header/logo.png" width="135" height="38"> -->
          <img :src="logoImg" width="135" height="38">
      </div>
      <div class="nav-item-div">
          <ul>
              <li :class="active == '/Index/xjczbr' ? 'selected' : ''"><a v-on:click="gotopage(homepage)" >首页</a></li>
              <li :class="active == '/Index/brglpage' ? 'selected' : ''"><a v-on:click="gotopage(brglpage)" >病人管理</a></li>
              <li :class="active == '/Index/blglpage' ? 'selected' : ''"><a v-on:click="gotopage(blglpage)">病历管理</a></li>
              <li :class="active == '/Index/wzqkpage' ? 'selected' : ''"><a v-on:click="gotopage(sjtjpage)" >数据统计</a></li>
              <li :class="active == '/Index/ypglpage' ? 'selected' : ''" v-if="roleuser == 2"><a v-on:click="gotopage(ypglpage)">药品管理</a></li>
          </ul>
      </div>
      <div class="user-info-div">
          <div class="btn-group-div">
              <span @click = "showUpdate()">{{rolename}}</span>
              <span style="color: #20a0ff;" @click="logout">注销</span>
          </div>
          <div class="now-date-div" style="margin-top: -20px">
            <span class="now-date" style="font-size: 25px">
              <!-- 2017/06/27  19:30 -->
              <div>
                {{formateDate}}
              </div>
              <div style="margin-left: 30%">
                {{formateday}}
              </div>
            </span>
          </div>
      </div>
  <el-dialog title="修改密码" :visible.sync="dialogFormVisible" style="font-size: 30px;width: 1920px" @close="clearDate">
    <el-form class="small-space" :model="tempUser" label-position="left" label-width="150px" size="medium"
             style='width: 600px; margin-left:50px'>
      <el-form-item label="新密码" style="font-size: 30px">
        <el-input type="password" v-model="tempUser.password" style="font-size: 30px">
        </el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="tempUser.checkpassword" @blur="passwordCheck" style="font-size: 30px">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="clearDate" style="width: 150px;height: 60px;font-size: 30px">取 消</el-button>
      <el-button type="primary" @click="updateUser" style="width: 150px;height: 60px;font-size: 30px">修 改</el-button>
    </div>
  </el-dialog>
</div>
</template>

<style lang="scss">
@import '../assets/css/head.scss';
</style>

<script>
 import picLogo from '@/assets/img/header/logo.png'
 import picAccount from '@/assets/img/header/accounts.png'
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
            weekday:new Date(),
            dialogFormVisible:false,
            rolename:"",
            roleuser:"",
            nickname:"",
            tempUser:{
            username:'',
            nickname:'',
            password:'',
            role:'',
            },
            logoImg:picLogo,
            picAccount:picAccount,
            nowdate:new Date(),
            homepage:'/Index/xjczbr',
            brglpage:'/Index/brglpage',
            blglpage:'/Index/blglpage',
            sjtjpage:'/Index/wzqkpage',
            ypglpage:'/Index/ypglpage',
        }
    }
    //计算属性 设置属性 获取属性值
    ,computed: {
        //格式化日期
      formateday:function(){
        var date = this.weekday;
        var mat ={};
        mat.W = date.getDay();
        if(mat.W == 0){
          mat.W = "日";
        }else if(mat.W == 1){
          mat.W = "一";
        }
        else if(mat.W == 2){
          mat.W = "二";
        }
        else if(mat.W == 3){
          mat.W = "三";
        }
        else if(mat.W == 4){
          mat.W = "四";
        }
        else if(mat.W == 5){
          mat.W = "五";
        }
        else if(mat.W == 6){
          mat.W = "六";
        }
        return "星期"+mat.W;
      },
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
      },
    }
    ,created () {
    // this.roleuser=this.$store.getters.gettersroleuser;
    // this.rolename=this.$store.getters.gettersrolename;
      this.roleuser = window.localStorage.getItem("role")
      this.rolename = window.localStorage.getItem("username")
      this.nickname=this.$store.getters.gettersnickname;
    }
    ,watch: {

    }
    ,methods: {
    clearDate(){
      var _that = this;
      _that.dialogFormVisible = false;
      _that.tempUser = {}
    },
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
      this.tempUser.nickname = this.nickname
      this.dialogFormVisible = true
    },
      updateUser() {
      var _that = this;
        if(_that.tempUser.checkpassword !==_that.tempUser.password ){
          _that.$message({
            type: 'error',
            message: '密码不一致'
          });
          console.log("这是"+_that.nickname)
        }else {
          _that.$http.post('/userManage/updateUser',{
            username: _that.rolename,
            password: _that.tempUser.password,
            nickname: _that.nickname,
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
    },

}
</script>

