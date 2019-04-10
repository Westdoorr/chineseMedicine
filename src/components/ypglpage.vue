<template>
  <div class="brgl-container">
    <div class="search-row">
      <div class="search-row-input-item">
        <el-input placeholder="请输入药品名" v-model="keyWords" @keyup.enter.native="searchmedicine">
          <el-button slot="append" icon="el-icon-search" @click="searchmedicine"></el-button>
        </el-input>
      </div>
      <div class="addmedicine">
        <el-button type="primary" class="button-size" @click="addRow()">药品新增</el-button>
      </div>
    </div>
    <div class="table-continer">
      <el-table
        :data="medicinelist"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        style="border:1px solid #ebeef5;overflow-y:auto;">
        <el-table-column
          type="index"
          label="序号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="medicineName"
          label="药名"
          width="250">
          <template scope="scope">
            <el-input class="new-yfmc" v-model="scope.row.medicineName"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="unitPrice"
          label="价格（元/g）"
          width="270">
          <template scope="scope">
            <el-input class="new-yfmc" v-model="scope.row.unitPrice"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源"
          width="500">
          <template scope="scope">
            <el-input class="new-yfmc" v-model="scope.row.source"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="600">
          <template slot-scope="scope">
            <el-button @click="removemedicine(scope.$index)" type="text" class="btn-font-default bnt-font-color">删除药品</el-button>
            <el-button @click="" type="text" class="btn-font-default">修改药品</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="foot">
      <el-button type="primary" class="button-size" @click="updatemedicine">确认修改</el-button>
    </div>
  </div>
</template>
<style>
  .el-table_2_column_9{
    color:blue;
  }
</style>
<style lang="scss">
  @import '../assets/css/ypglpage.scss';
</style>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        search_obj:{
        },
        keyWords:"",
        medicinelist: [{
          medicineName:1,
          unitPrice:1,
          source:10,
          medicineId:""
        }]
      }
    },
    created () {
      //获取页面的初始化数据
      document.title = '药品管理'
      this.getmedicine();
    },
    methods: {
      removemedicine($index) {
        this.$confirm('确定删除此药品?', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        }).then(() => {
          let medicine = this.medicinelist[$index];
          this.$http.delete('/medicineManage/deleteMedicine',{
            params:{
              medicineId: medicine.medicineId
            }
          }).then(response => {
            if(response.code == 1){
              this.getmedicine()
            }
          }).catch(() => {
            this.$message.error("删除失败")
          })
        })
      },
      updatemedicine(){
        var _that = this;
        for(let i=0 ; i<_that.medicinelist.length ;i++){
          if(_that.medicinelist[i].medicineId=="" || _that.medicinelist[i].medicineId==null ){
            _that.medicinelist[i].medicineId=_that.medicinelist[i].medicineName
          }
          console.log("名字"+_that.medicinelist[i].medicineName)
          console.log("Id"+_that.medicinelist[i].medicineId)
          console.log("价格"+_that.medicinelist[i].unitPrice)
          console.log("来源地"+_that.medicinelist[i].source)
          console.log(i)
        }
        this.$http.post('/medicineManage/updateMedicineList',this.medicinelist)
      .then(function (response) {
          if(response.code == "1"){
            _that.$common.openSuccessMsgBox("修改成功",_that);
            this.getmedicine()
          }else{
            _that.$common.openErrorMsgBox(response.msg,_that);
          }
        }).catch(function (error) {
          console.log(error);
        });
      },
      searchmedicine(){
        var _that =this
        var keyWords = _that.keyWords;
        console.log("参数",keyWords)
        _that.$http.get(
          "/medicineManage/findMedicineList",
          {params:{
              keyWord: keyWords
            }
          }).then(function (response) {
          console.log(response)
          if(response.code == 1){
            _that.medicinelist = response.data.medicinelist;
            console.log("药品"+this.medicinelist)
          }else{
            _that.$common.openErrorMsgBox(response.msg,_that);
          }
        }).catch(function (error) {
          _that.$common.openErrorMsgBox(error,_that);
        });
      },
      getmedicine(){
        this.$http.get(
          '/medicineManage/getMedicineList')
          .then(response =>{
            if(response.code == 1){
              this.medicinelist = response.data.medicinelist
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      addRow(){
        var obj = {
          medicineName:"",
          unitPrice:"",
          source:"",
          medicineId:""
        }
        this.medicinelist.push(obj)
      },
      deleteRow(index, rows) {//删除改行
        rows.splice(index, 1);
      },
      rowClassname() {
        return "rowClassname";
      },
      headerClassname() {
        return "headerClassname";
      },
      handleClick(row) {
        console.log(row);
      },
      //初始化当前组件
      /**
       * 移除病人信息
       * @param {object} row
       */
      delteBrinfoM(row){
        var _that = this;
        var url = "/index/deletePatient?patientId="+row.pId;
        _that.$http.delete(url).then(function (response) {
          if(response.code =="1"){
            _that.$common.openSuccessMsgBox("病人信息移除成功！",_that);
            setTimeout(function(){
              _that.getBrList();
            },1000);
          }else{
            _that.$common.openErrorMsgBox(response.msg,_that);
          }
        }).catch(function (error) {
          _that.$common.openErrorMsgBox(error,_that);
        });
      },
    }
  }

</script>
