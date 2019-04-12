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
            <el-button @click="getpricechange(scope.$index)" type="text" class="btn-font-default bnt-font-color">价格走势</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="价格走势" :visible.sync ="dialogpriceVisible">
        <div id="price" style="width: 500px;height: 500px">
        </div>
      </el-dialog>
    </div>
    <div class="foot">
      <el-button type="primary" class="button-size" @click="updatemedicine">确认修改</el-button>
    </div>
  </div>
</template>
<style lang="scss">
  @import '../assets/css/ypglpage.scss';
</style>

<script>
  export default {
    data() {
      return {
        dialogpriceVisible: false,
        search_obj:{
        },
        changes:[],
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
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        var myChart = this.$echarts.init(document.getElementById('price'))
        // 绘制图表
        myChart.setOption({
          title: { text: '价格走势' },
          tooltip: {},
          xAxis: {
            data: this.changes.updateDate
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      },
      getpricechange($index){
        var _that = this;
        _that.dialogpriceVisible = true;
        var medicine = _that.medicinelist[$index]
        _that.$http.get('/medicineManage/priceChange',{
          params :{
            medicineId : medicine.medicineId
          }
        }) .then(response =>{
          if(response.code == 1){
            _that.changes = response.data.changes
          }
          _that.drawLine();
        })
          .catch(function (error) {
            console.log(error);
          })
      },
      removemedicine($index) {
        var _that = this;
        this.$confirm('确定删除此药品?', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        }).then(() => {
          let medicine = _that.medicinelist[$index];
          medicine.medicineId = JSON.stringify(medicine.medicineId)
          console.log("这是"+medicine.medicineId)
          _that.$http.delete('/medicineManage/deleteMedicine',{
            params:{
              medicineId: medicine.medicineId
            }
          })
            .then(response => {
            if(response.code == 1){
              _that.getmedicine()
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
    }
  }

</script>
