<style lang="scss" scoped>
    $designWidth: 1200;
    //定义 scss函数 计算rem
    @function px2rem($px){
        @return $px*320/$designWidth/20 + rem;
    }
    html{
        font-size:10px;
        margin: 0px;
        padding: 0px;
    }
    body{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px;
    }
    .print-container{
        width: 720px;
	    height: 1050px;
        // padding: 35px;
        margin: 0px auto;
         .label-tag{
            padding: 0px 10px;
            font-family: SourceHanSerifCN-Bold;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 2px;
            color: #d02929;
        }
        .font-content{
            font-family: SourceHanSerifCN-Medium;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 2px;
            color: #000000;
        }
        .font-color-red{
            font-family: SourceHanSerifCN-Bold;
            font-size: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 5px;
            color: #d02929;
        }
        .print-header-container{
            padding: 0px 10px 10px 10px;
            border-bottom: solid 2px #d02929;
            .print-img-container{
                text-align: center;
                margin:12px 0px;
                img{
                    margin: 0 auto;
                }
            }
            .print-br-info{
                display: flex;
                justify-content: space-between;
            }
        }
        .print-foot-container{
            padding-top: 10px;
            border-top: solid 2px #d02929;
            .underline{
                display: inline-block;
                width: 171px;
                border-bottom: 2px solid #d02929;
            }
            .yf-underline{
                display: inline-block;
                width: 139px;
                border-bottom: 2px solid #d02929;
                font-family: SourceHanSerifCN-Bold;
                font-size: 19.8px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 2px;
                color: #d02929;
                text-align: center;
            }
            .frist-foot-item{
                display: flex;
                justify-content: space-between;
                margin-bottom: 20px;
            }
            .seconed-foot-item{
                display: flex;
                justify-content: space-between;
                .logo-img-container{
                    width: 273px;
                    height: 138px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .attention{
                    width: 460px;
                    margin-top: 10px;
                    .attention-frist{
                        padding-bottom: 2px;
                        /*border-bottom: 2px dashed #d02929;*/
                    }

                    .attention-li{
                        font-family: SourceHanSerifCN-Bold;
                        font-size: 14px;
                        font-weight: normal;
                        font-stretch: normal;
                        letter-spacing: 0px;
                        color: #d02929;
                    }
                    .attention-address{
                        margin-top: 2px;
                    }
                }
            }
        }
        .print-info-container{
                height: 760px;
                max-height: 760px;
                min-height:760px;
            .yf-item{
                    padding: 10px 0px;
                    border-bottom: 1px dashed #d02929;
                .yw-title{
                    font-family: SourceHanSerifCN-Bold;
                    font-size: 18px;
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: #d02929;
                }
                .yw-list{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    .yw-item{
                            display: flex;
                            flex-direction: column;
                            width: 168px;
                            padding-top: 5px;
                            .yw-bz{
                                display: inline-block;
                                height: 19px;
                                font-family: SourceHanSerifCN-Bold;
                                font-size: 13px;
                                font-weight: normal;
                                font-stretch: normal;
                                letter-spacing: 0px;
                                color: #d02929;
                            }
                            .yw-name{
                                font-family: SourceHanSerifCN-Medium;
                                font-size: 22px;
                                font-weight: normal;
                                font-stretch: normal;
                                letter-spacing: 1.1px;
                                color: #000000;
                            }
                    }
                }
            }
             .yf-item:last-child{
                border-bottom: 0px dashed #d02929;
            }

        }
    }
</style>

<template>
<div>
  <div class="print-container">
      <div class="print-header-container">
          <div class="print-img-container">
              <img :src="titleImg" width="441" height="44"/>
          </div>
          <div class="print-br-info">
              <div class="br-info-item">
                <span class="label-tag">姓名</span>
                <span class="font-content">{{printData.pName}}</span>
              </div>
              <div class="br-info-item">
                <span class="label-tag">性别</span>
                <span class="font-content">{{printData.gender}}</span>
              </div>
              <div class="br-info-item">
                <span class="label-tag">年龄</span>
                <span class="font-content">{{printData.age}}</span>
              </div>
              <div class="br-info-item">
                <span class="font-content">{{printData.address}}</span>
              </div>
              <div class="br-info-item">
                  <span class="font-content">{{year}}</span>
                  <span class="font-color-red">年</span>
                  <span class="font-content">{{month}}</span>
                  <span class="font-color-red">月</span>
                  <span class="font-content">{{day}}</span>
                  <span class="font-color-red">天</span>
              </div>
          </div>
      </div>
      <div class="print-info-container">
          <div v-for="(yfitem, yfindex) in mainReList" :key="yfindex">
              <div class="yf-item">
                <div class="yw-title">
                    主方{{yfitem.remark && yfitem.remark!="" ? "（"+yfitem.remark+"）":""}}
                </div>
                <div class="yw-list">
                    <div class="yw-item"  v-for="(ywitem, ywindex) in yfitem.mainMeList" :key="ywindex">
                        <span class="yw-bz">{{ywitem.remark && ywitem.remark!="" ? "（"+ywitem.remark+"）":""}}</span>
                        <span class="yw-name">{{ywitem.name && ywitem.name!="" ? ywitem.name+" "+ywitem.dose+"g":""}}</span>
                    </div>
                </div>
                </div>
              <div class="yf-item" v-for="(ffitem, ffindex) in yfitem.viceReList" :key="ffindex">
                   <div class="yw-title">
                  副方{{'零一二三四五六七八九'.charAt(ffindex+1)+(ffitem.remark && ffitem.remark!="" ? "（"+ffitem.remark+"）":"")}}
              </div>
              <div class="yw-list">
                  <div class="yw-item"  v-for="(ffitem, ywindex) in ffitem.viceMeList" :key="ywindex">
                      <span class="yw-bz">{{ffitem.remark && ffitem.remark!="" ? "（"+ffitem.remark+"）":""}}</span>
                      <span class="yw-name">{{ffitem.name && ffitem.name!="" ? ffitem.name+" "+ffitem.dose+"g":""}}</span>
                  </div>
              </div>
              </div>
          </div>
      </div>
      <div class="print-foot-container">
          <div class="frist-foot-item">
              <div>
                  <span class="label-tag">处方医师</span>
                  <span class="underline"></span>
              </div>
              <div>
                  <span class="label-tag">调配</span>
                  <span class="yf-underline">60</span>
                  <span class="font-color-red">付</span>
              </div>
          </div>
          <div class="seconed-foot-item">
              <div class="logo-img-container">
                  <img :src="qrcode" width="126" height="125" />
                  <img :src="Logo" width="135" height="135" />
              </div>
              <div class="attention">
                  <div class="attention-frist">
                      <div class="attention-li">1、处方仅限本人使用，请勿自行重复服用原方。</div>
                      <div class="attention-li">2、一天一付，一天三次，请加热服用。</div>
                      <div class="attention-li">3、请勿重复发送短信，请注明预约卢崇汉教授或卢玮医生。</div>
                      <div class="attention-li">4、根据相关规定，为保障用药安全，药品一经发出，不得退换。</div>
                  </div>
                  <div class="attention-li attention-address">
                      地址：成都市武侯区丽都路2号附14号  短信预约电话：18010601111
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
</template>
<script>
    import Logo from '@/assets/img/print/logo2.png'
    import qrcode from '@/assets/img/print/qr_code.png'
    import titleImg from '@/assets/img/print/title.png'
    export default {
        // 父组件传递选中类型参数
        data() {
            return {
                Logo:Logo,
                qrcode:qrcode,
                titleImg:titleImg,
                printData:{
                    pName:"杨光平",
                    gender:"男",
                    age:34,
                    address:"四川成都",
                    date:"2018-12-12"
                },
                mainReList: [
                {
                    "isStock": true,
                    "amount":20,
                    "remark":"后用，与主方同用",
                    // 主方药物列表
                    "mainMeList": [
                        {
                        "name": "制白附子",
                        "dose": 20,
                        "remark":"另包，先煮2小时"
                        },
                        {
                        "name": "生蒲黄",
                         "dose": 20,
                         "remark":"纱布包煎"
                        },
                        {
                        "name": "阿胶",
                        "dose": 20,
                        "remark":"纱布包煎"
                        },
                        {
                        "name": "黄芪",
                        "dose": 20,
                        "remark":""
                        },
                        {
                        "name": "中药名称",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "中药名称",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "中药名称",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "五中药名称",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "土三七",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "土三七",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "土三七",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "土三七",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "桂枝",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "桂枝",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "桂枝",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "桂枝",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "党参",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "党参",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "党参",
                        "dose": 12,
                        "remark":""
                        },
                        {
                        "name": "党参",
                        "dose": 12,
                        "remark":""
                        }
                    ],
                    // 副方列表
                    "viceReList": [
                        {
                        "isStock": true,
                        "amount":20,
                        "remark":"后用，与主方同用",
                        "viceMeList": [
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            }
                        ]
                        },
                        {
                        "isStock": true,
                        "amount":20,
                        "remark":"后用，与主方同用",
                        "viceMeList": [
                           {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            }
                        ]
                        },
                        {
                        "isStock": true,
                        "amount":20,
                        "remark":"后用，与主方同用",
                        "viceMeList": [
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "桂枝",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            },
                            {
                            "name": "党参",
                            "dose": 12,
                            "remark":""
                            }
                        ]
                        }
                    ]
                    }
            ]
            }
        }
        ,computed: {
            year:function(){
                return this.printData.date.split("-")[0];
            },
            month:function(){
                 return this.printData.date.split("-")[1];
            },
            day:function(){
                return this.printData.date.split("-")[2];
            }
        }
        ,created () {

        }
        ,watch: {

        }
        ,methods: {
            //创建打印
            createPdf:function(){
                let newWindow = window.open("_blank");   //打开新窗口
                let codestr = document.getElementById("pdf-wrap").innerHTML;   //获取需要生成pdf页面的div代码
                newWindow.document.write(codestr);   //向文档写入HTML表达式或者JavaScript代码
                newWindow.document.close();     //关闭document的输出流, 显示选定的数据
                newWindow.print();   //打印当前窗口
                return true;
            },
            //生成打印的页面字符串
            createPfStr:function(){

            },
            /** 计算列表高度，高度超出后 返回false 否则返回true */
            getListHeight:function(){
                var zt = this.mainReList;
                var allheight = 0;
                for(var i=0; i<zt.lenght;i++){
                    var zfywline = Math.ceil(zt.mainMeList/4);
                    var ff_l = zt.viceMeList.lenght;
                    allheight += (44 + zfywline * 53);
                    for(var j=0;j<zt.viceMeList.lenght;j++){
                        var ffywline = Math.ceil(zt.viceMeList[j]/4);
                        allheight += 44+53*ffywline;
                        if(allheight > 760){
                            return false;
                        }
                    }
                    if(allheight > 760){
                        return false;
                    }
                }
            }
        }
    }
</script>
