<template>
  <div class="bryf-container">
    <el-row >
      <el-col :span="12">
        <div class="info-container">
          <div class="bqms-info-container">
            <span class="person-info" >{{yfdata.pName+","+getPersonInfo}}</span>
            <div class="titile-container"  style="display: flex; justify-content: space-between; ">
              <div class="container" @click="setActiveSyle(2)">
                <span>病情描述</span>
                <span>
                        <i v-bind:class="[b_isActive ? 'el-icon-caret-top' : 'el-icon-caret-bottom']"></i>
                  <!-- <i class="el-icon-caret-bottom"></i> -->
                     </span>
              </div>
              <div class="time1">
                <el-input class="el-input1" v-model="yfdata.inquiryDate" placeholder="时间"></el-input>
              </div>
            </div>
            <div v-bind:class="[{ 'isdisplaynone': b_isActive }, 'bqms-input-container']">
              <!-- <div class="bqms-input-container"> -->
              <el-input
                type="textarea"
                :rows="7"
                placeholder="请输入病情描述"
                class="bqms"
                v-model="yfdata.description">
              </el-input>

            </div>
          </div>
          <div class="wzwt-info-container">
            <div class="titile-container" style="margin-top: 10px;font-size: 30px;color: #475669;font-family: PingFangSC-Medium;">
                      <span @click="setActiveSyle(1)">
                          诊断标签
                      </span>
              <span>
                          <i v-bind:class="[d_isActive ? 'el-icon-caret-top' : 'el-icon-caret-bottom']"  @click="setActiveSyle(1)"></i>
                <!-- <i class="el-icon-caret-bottom"></i> -->
                      </span>
              <!--<el-button :class="[{'isdisplaynone': is_display_xjzd },'btn-default']" class="btn-default" @click="newInquiry_new" style="margin-left: 20px">新建问诊</el-button>-->
            </div>
            <div v-bind:class="[{ 'isdisplaynone': d_isActive }, 'wzwt-input-container']">
              <el-input
                type="textarea"
                placeholder="请输入诊断标签，以句号分隔"
                class="bqms"
                v-model="diagnoseLabels" style="height:233px">
              </el-input>
            </div>
          </div>
        </div>
      </el-col>
      <el-col span="12" style="margin-left: -80px">
        <div class="yf-info-container">
          <div class="mainReList-container-div">
            <!-- 这里循环遍历药品对象，为空时默认生成null个单元格 每四个就添加一列，不足四个补足四个， -->
            <div class="mainReList-container" v-for="(item, mrindex) in yfdata.mainReList" :key="mrindex">
              <div class="zf-search-info">
                <span name="zfname">主方{{mrindex+1}}</span>
                <el-input class="new-yfmc" @keyup.enter.native="addzyfyw($event,mrindex)"></el-input>
                <el-input class="ywfs" @change="updateAmount" v-model="item.amount"></el-input><span>&nbsp;付</span>
                <el-input class="ywbz" v-model="item.remarks" placeholder="备注"></el-input>
                <el-button class="btn-default icon icon_rk" type="primary" v-model="item.isStock" @click="ruKu(mrindex)" style="padding: 0px; border: none">
                  <img v-if="item.isStock" src="../assets/img/ic_ruku1.png">
                  <img src="../assets/img/ic_ruku.png" v-else>
                </el-button>
                <el-button class="btn-default icon icon_qk"  @click="qkMegBox('deleteZf',mrindex,'')" type="primary" style="padding: 0px; border: none">
                  <img src="../assets/img/ic_qingkong.png">
                </el-button>
                <el-button class="btn-default icon icon_sc" @click="openMegBox('是否删除主方','deleteZf',mrindex,'')" type="primary" style="padding: 0px; border: none">
                  <img src="../assets/img/ic_shanchu.png">
                </el-button>
                <el-button class="btn-default icon icon_xz" @click="addZyfff(mrindex)" type="primary" style="padding: 0px; border: none">
                  <img src="../assets/img/ic_xinzeng.png">
                </el-button>
              </div>
              <div class="mainMeList-container" >
                <div class="yp-item" v-for="(h, i) in item.recipeDetailList" :key="i">
                  <input v-model="h.medicine" @blur="updateMainYw(mrindex,i)" @keyup.enter.exact="addMainEmpty(mrindex,i)" @keyup.ctrl.enter="addMainNewRow(mrindex,i)"/>
                </div>
              </div>
              <div class="viceReList-container" v-for="(vice, vindex) in item.viceReList" :key="vindex">
                <div class="zf-search-info">
                  <span name="zfname">副方{{vindex+1}}</span>
                  <el-input class="new-yfmc"  @keyup.enter.native="addfyfyw($event,vindex,mrindex)"></el-input>
                  <!--<el-input class="ywfs"  @change="updateZfAmount(mrindex)" v-model="vice.amount"></el-input><span>&nbsp;付</span>-->
                  <el-input class="ywfs"  v-model="vice.amount"></el-input><span>&nbsp;付</span>
                  <el-input class="ywbz" v-model="vice.remarks" placeholder="备注"></el-input>
                  <el-button class="btn-default icon icon_rk" v-model="vice.isStock" type="primary" @click="viceRuKu(mrindex,vindex)" style="padding: 0px; border: none">
                    <img v-if="vice.isStock" src="../assets/img/ic_ruku1.png">
                    <img src="../assets/img/ic_ruku.png" v-else>
                  </el-button>
                  <el-button class="btn-default icon icon_qk" type="primary" style="padding: 0px; border: none" @mouseenter="mous_qk()" @click="qkMegBox('deleteFf',mrindex,vindex)" >
                    <img src="../assets/img/ic_qingkong.png">

                  </el-button>
                  <el-button class="btn-default icon icon_sc" @click="openMegBox('是否删除副方','deleteFf',mrindex,vindex)"  type="primary" style="padding: 0px; border: none">
                    <img src="../assets/img/ic_shanchu.png">
                  </el-button>
                  <!--<el-input class="ywbz" v-model="vice.remarks"></el-input><el-checkbox name="isStock" v-model="vice.isStock" class="rk-checkbox">入库</el-checkbox>-->
                  <!--<el-button icon="el-icon-delete" @click="openMegBox('是否删除副方','deleteFf',mrindex,vindex)" class="zf-btn-delete"></el-button>-->
                </div>
                <div class="mainMeList-container" >
                  <div class="yp-item" v-for="(vim, m) in vice.viceRecipeDetailList" :key="m">
                    <input v-model="vim.medicine" @blur="updateViceYw(mrindex,vindex,m)" @keyup.enter.exact="addViceEmpty(mrindex,vindex,m)" @keyup.ctrl.enter="addViceNewRow(mrindex,vindex,m)"/></div>
                </div>
              </div>
            </div>
            <div style="clear: none; width: 100%; overflow:hidden;">
              <div class="yf-fs-info" style=" float: left">
                <span>共计</span>
                <!--<el-input class="yf-fs-all" v-model="allTotal"></el-input>-->
                <el-input class="yf-fs-all" v-model="yfdata.amount"></el-input>
                <span>付</span>
              </div>
              <div class="yf-header-container" style=" float: right">
                <!--<span class="brxm">{{yfdata.pName}}</span>-->
                <el-button class="btn-default" @click="addZf" style="margin-right: 28px;">加主方</el-button>
                <el-button class="btn-default btn-border-red" @click="clearAllYw">清空</el-button>
              </div>
            </div>
          </div>
          <div class="yf-foot-container">
            <div><el-button  @click="gotoLastPage" :class="[{'isdisplaynone': is_display_fh },'btn-default']">返回</el-button></div>
            <div><el-button :class="[{'isdisplaynone': false },'btn-default btn-blue']" @click="submitYfData">确认</el-button></div>
            <el-dialog  :visible.sync ="dialogerrorVisible"  style="width: 650px;margin-left: 35%;margin-top: 200px">
              <div style="margin-top: -50px;font-size: 30px">{{"药品名有误"}}</div>
              <div style="margin-top: 10px;font-size: 20px;margin-left: 50px;width: 550px">
                <span v-for="i in errorName">{{i+"，"}}</span>
              </div>
              <div style="margin-left: 24%;margin-top: 20px">
                <el-button @click="errorName = []; dialogerrorVisible = false" style="width: 80px;height: 40px;font-size: 25px;
                     background-color:#20a0ff;border: solid 1px #20a0ff;border-radius:4px;color: white;padding: 5px;">确定</el-button>
              </div>
            </el-dialog>
            <!--<el-button  @click="gotoLastPage" :class="[{'isdisplaynone': is_display_fh },'btn-default']" >返回</el-button>-->
            <div><el-button :class="[{'isdisplaynone': false },'btn-default']" @click="getrecipePrice" style="margin-left: 85px">药方价格</el-button>
              <el-dialog class="pricing" title="药方价格" center :visible.sync="dialogFormVisible" style="width: 600px;margin-left: 700px" @close="dialogStatus = false;">
                <el-row style="font-size: 35px;margin-bottom: 50px;width: 500px;margin-left: 100px">
                    <span>
                      {{yfdata.amount}}
                    </span>
                  <span>付药，</span>
                  <span>共计</span>
                  <span>
                      {{priceData.actualPrice}}
                  </span>
                  <span>
                      元
                  </span>
                </el-row>
                <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="printYfPage()" v-if="dialogStatus == 'print'">打 印</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">返 回</el-button>
            </span>
              </el-dialog>
            </div>
            <div> <el-button :class="[{'isdisplaynone': is_display_xj },'btn-default']" @click="newInquiry_new" style="margin-left: 20px">新建问诊</el-button></div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">
        <el-button  @click="getMedia()" style="margin-bottom:20px; width: 140px;height: 40px;font-size: 20px;padding: 10px;border: solid 1px #20a0ff;border-radius:4px;color: #20a0ff">开启摄像头</el-button>
        <el-button  @click="removesomepicture()" style="margin-left:0px;width: 140px;height: 40px;font-size: 20px;padding: 10px;border: solid 1px red;border-radius:4px;color: red">删除选中</el-button>
        <el-dialog  :visible.sync ="dialogphotoVisible" @close = "funclose()"  style="width: 650px;margin-left: 30%">
          <div style="margin-left: 20px">
            <video  ref="video" id="video" width="280px" height="400px" preload="auto"></video>
            <canvas id="canvas" width="280px" height="400px"></canvas>
          </div>
          <div style="margin-left:35%;margin-top: 10px">
            <el-button id="snap" @click="takePhoto()" style="width: 80px;height: 40px;font-size: 25px;
                     background-color:#20a0ff;border: solid 1px #20a0ff;border-radius:4px;color: white;padding: 5px">拍照</el-button>
            <el-button @click="confirmphoto()" style="width: 80px;height: 40px;font-size: 25px;
                     background-color:#20a0ff;border: solid 1px #20a0ff;border-radius:4px;color: white;padding: 5px">确定</el-button>
          </div>
        </el-dialog>
      </el-col>
      <el-col :span="22">
        <div class="xixi" v-for="(saveimage,index) in image" style="width: 330px;float: left">
          <i @click="removepicture(index)" class="el-icon-close" style="height: 50px;width: 50px;margin-left: 305px;font-size: 30px"></i>
          <img style="margin-left: 25px;margin-top: -50px" :src=saveimage.imageUrl @click="selectimage(index)">
<!--          <div>
            <el-button @click="removepicture(index)" class="btn-border-red" style="margin-left:32%;width: 100px;height: 50px;font-size: 25px">删除</el-button>
          </div>-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
  @import '../assets/css/bryfpage.scss';
</style>

<style lang ="scss">
  @import '../assets/css/yfprint.scss';
</style>
<style lang="scss" scoped>
  .isdisplaynone{
    display: none;
  }
  /*左侧两个文本框样式*/
  .bryf-container{
    height: calc(100% - 148px);
    padding: 20px 0px;
    width: 1835px;
    margin: 0 auto;
    overflow-y: auto;
    .person-info{
      display: inline-block;
      width: 838px;
      height: 55px;
      line-height: 55px;
      box-sizing: border-box;
      cursor: pointer;
      background: #fff;
      text-align: left;
      padding: 0px 15px;
      font-family: PingFangSC-Regular;
      font-size: 28px;
      letter-spacing: 0px;
      color: #475669;
      border-radius: 8px;
      border: solid 1px #c0ccda;
      overflow: hidden;
      font-weight: bold;
    }
    .info-container{
      flex: 0 0 838px;
      width: 838px;
      height: 100%;
      margin: 0px;
      padding: 0px;
      .wzwt-info-container{
        width: 100%;
        height: auto;
        margin-bottom: 20px;
        .wzwt-input-container{
          height: auto;
          margin-top:10px;
          /*height: 233px;*/

        }
      }
      .bqms-info-container{
        width: 100%;
        height: auto;
        .bqms-input-container{
          margin-top: 10px;
          font-size: 34px;

        }
        .titile-container{
          margin-top: 10px;
          span{
            font-family: PingFangSC-Medium;
            font-size: 30px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #475669;
          }

          .time1{
            width: 397px;
            height: 45px;
            font-size: 28px;
            .el-input1{
              height: 45px;
              font-size: 28px;
              /*border: 1px solid #000;*/
              .el-input .el-input__inner{
                /*border:none*/
                height: 50px;
                border: 1px solid #00ff00;
              }
            }
          }
        }
      }

    }

  }
  /*右侧药物的列表样式*/
  .yf-info-container{
    margin-left: 16px;
    width: 980px;
    height: auto;
    /*overflow: hidden;*/
    /*background-color: #ffd833;*/
    text-align: center;
    /*margin-top: 10px;*/
    margin-bottom: 10px;
    .yf-header-container{
      span.brxm{
        font-family: PingFangSC-Medium;
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #475669;
        margin-right: 35px;
      }

    }
    .el-button+.el-button{
      margin-left: 0;
    }
  }
  .mainReList-container-div{
    /*margin-top: 40px;*/
    /*margin-left: 20px;*/
  }
  .yf-foot-container{
    display: flex;
    justify-content:space-between;
    margin-top: 20px;
    div{
      width: 33.3%;
      text-align: center;
    }
    div:last-child{
      text-align: right;
    }
    div:first-child{
      text-align: left;
    }
  }
  //药品列表样式
  .mainMeList-container{
    width:976px;
    height: auto;
    /*padding-bottom: 1px;*/
    margin-top:15px;
    margin-bottom:18px;
    display: flex;
    flex-wrap:wrap;
    border-bottom: 1px solid #c0ccda;
    border-right:1px solid #c0ccda;
    /*overflow: hidden;*/
    .yp-item{
      width:244px;
      height: 60px;
      box-sizing: border-box;
      line-height: 60px;
      overflow: hidden;
      input{
        width:244px;
        height: 60px;
        box-sizing: border-box;
        padding: 5px 15px;
        font-family: PingFangSC-Regular;
        font-size: 40px;
        color: #475669;
        border: 1px solid #c0ccda;
        border-bottom: 0px;
        border-right: 0px;
      }
      input:focus{
        border-color: #fff;
      }
    }
  }
</style>

<script src="../assets/js/bryfpage.js">
</script>


