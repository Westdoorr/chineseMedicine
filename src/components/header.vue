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
          </ul>
      </div>
      <div class="user-info-div">
          <div class="user-icon">
            <img :src="picAccount" width="40" height="40">
          </div>
          <div class="btn-group-div">
              <span>卢玮</span>
              <span style="color: #20a0ff;">注销</span>
          </div>
          <div class="now-date-div">
            <span class="now-date">
              <!-- 2017/06/27  19:30 -->
              {{formateDate}}
            </span>
          </div>
      </div>
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

    }
    ,watch: {

    }
    ,methods: {
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

