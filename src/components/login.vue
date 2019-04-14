<template>
  <div class="note" :style="note">
    <div class = "loginFrame">
      <!--表单组件放在外面，标签栏在里面-->
      <el-form ref = "ruleForm" :model = "ruleForm" class = "login-container">
        <div class = "tabsUser">
          <el-p>问诊系统登陆</el-p>
        </div>
        <div class = "formGroup">
          <el-form-item prop="username">
            <el-input type = "text"  auto-complete = "off" placeholder = "请输入您的账号" class = "form-control" v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type = "password" auto-complete = "off" placeholder = "请输入密码" class = "form-control" v-model="ruleForm.password" @keyup.enter.native="handleLogin"></el-input>
          </el-form-item>
        </div>

        <div class = "formButton">
          <el-form-item style = "width:100%;"  class="login-button">
            <el-button type = "primary" style = "width:90%;" @click.native.prevent="handleLogin">登录</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        ruleForm:{
          username:'',
          password:'',
        },
        logining : false,
        note: {
          position:"absolute",
          top:"0px",
          left:"0px",
          width: "100%",
          height:"100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url(" + require("../assets/img/2222.jpg") + ")",
        },
        rules: {
          username :[
            {required: true, message: '请输入账号',trigger: 'blur'},
          ],
          password: [
            {required: true,message: '请输入密码', trigger: 'blur'},
          ]
        },
        checked: false
      };
    },
    methods: {
      handleLogin() {
        this.$store.dispatch('Login', this.ruleForm).then(response =>{
          this.$store.dispatch('depositrole',response.data.role)
          this.$store.dispatch('depositname',response.data.username)
          this.$store.dispatch('depositnickname',response.data.nickname)
          window.localStorage.setItem("role",response.data.role)
          window.localStorage.setItem("username",response.data.username)
              if(response.code == 1){
                if (response.data.role == 1){
                  this.$router.push({path: '/xindex/yhglpage'})
                }else{
                  this.$router.push({path:'/Index/xjczbr'})
                }
              }
              else {
                this.$message({
                  type: 'error',
                  message: '用户名或密码错误'
                });
              }
            })
            .catch(function (error) {
              console.log(error);
            })
      }
    }
  }</script>


<style lang="scss">
  @import '../assets/CSS/register.scss';
</style>
