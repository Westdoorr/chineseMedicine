<template>
  <div class="ypgl-container">
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
      <el-button @click = "sortmedicineNamedown" v-if="medicineNamebutton == false">药名排序</el-button>
      <el-button @click = "sortmedicineNameup" v-if="medicineNamebutton == true">药名排序</el-button>
      <el-button @click = "sortmedicinePricedown" v-if="unitPricebutton == false">单价排序</el-button>
      <el-button @click = "sortmedicinePriceup" v-if="unitPricebutton == true">单价排序</el-button>
      <el-button @click = "sortmedicinecount" >用量排序</el-button>
      <el-table
        :data="medicinelist"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        :default-sort = "{prop: 'date', order: 'descending'}"
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
            <el-input class="new-ypmc" v-model="scope.row.medicineName"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="unitPrice"
          label="价格（元/g）"
          width="270"
          >
          <template scope="scope">
            <el-input class="new-ypmc" v-model="scope.row.unitPrice"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源"
          width="500">
          <template scope="scope">
            <el-input class="new-ypmc" v-model="scope.row.source"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="600">
          <template slot-scope="scope">
            <el-button @click="removemedicine(scope.$index)" type="text" class="btn-font-default bnt-font-color">删除药品</el-button>
            <el-button @click="getpricechange(scope.$index)" type="text" class="btn-font-default">价格走势</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog  :visible.sync ="dialogpriceVisible">
        <div id="price" style="width: 1000px;height: 500px">
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
        unitPricebutton:true,
        medicineNamebutton:true,
        dialogpriceVisible: false,
        search_obj:{
        },
        changes:[{
          id:"",
          medicineName:"",
          unitPrice:"",
          updateDate:""
        }],
        medicineName:[],
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
      document.title = '药品管理';
      this.getmedicine();
    },
    methods: {
      objectArraySortdown(keyName){
        return function (objectN,objectM) {
          var valueN = objectN[keyName];
          var valueM = objectM[keyName];
          if(valueN < valueM)
            return 1;
          else
            return -1;
        }
      },
      objectArraySortup(keyName){
        return function (objectN,objectM) {
          var valueN = objectN[keyName];
          var valueM = objectM[keyName];
          if(valueN > valueM)
            return 1;
          else
            return -1;
        }
      },
      sortmedicineNamedown(){
        this.medicinelist.sort((a,b) => b.medicineName.localeCompare(a.medicineName, 'zh'));
        this.medicineNamebutton = true;
      },
      sortmedicineNameup(){
        this.medicinelist.sort((a, b)=> a.medicineName.localeCompare(b.medicineName, 'zh'));
        this.medicineNamebutton = false;
      },
      sortmedicinePricedown(){
        this.medicinelist.sort(this.objectArraySortdown('unitPrice'));
        this.unitPricebutton = true;
      },
      sortmedicinePriceup(){
        this.medicinelist.sort(this.objectArraySortup('unitPrice'));
        this.unitPricebutton = false;
      },
      sortmedicinecount(){
        var _that = this;
        _that.$http.get(
          "/medicineManage/getMedicineListOrderByUse",).then(function (response) {
          console.log(response)
          if(response.code == 1){
            _that.medicinelist = response.data.medicines;
          }else{
            _that.$common.openErrorMsgBox(response.msg,_that);
          }
        }).catch(function (error) {
          _that.$common.openErrorMsgBox(error,_that);
        });
      },
      getpricechange($index){
        var _that = this;
        _that.dialogpriceVisible = true;
        var medicine = _that.medicinelist[$index];
        _that.$http.get('/medicineManage/priceChange',{
          params :{
            medicineId : medicine.medicineId
          }
        }) .then(response =>{
          if(response.code == 1){
            _that.changes = response.data.changes
          }
          var myChart = _that.$echarts.init(document.getElementById('price'))
          var updateDate =[];
          var unitPrice = [];
          for(var i=0 ;i<_that.changes.length;i++){
            updateDate.push(_that.changes[i].updateDate)
            unitPrice.push(_that.changes[i].unitPrice)
          }
          myChart.setOption({
            title: {
              text: medicine.medicineName+'价格走势',
              textStyle:{
                fontSize:30,
              }
            },
            legend:{
              textStyle:{
                fontSize:30,
              }
            },
            tooltip: {},
            xAxis: {
              data: updateDate,
              axisLabel:{
                interval:0,
                rotate:10,
                show : true,
                textStyle:{
                  fontSize:20,
                }
              },
            },
            yAxis: {
              axisLabel:{
                show : true,
                textStyle:{
                  fontSize:20,
                }
              },
            },
            series: [{
              symbol: 'circle',
              symbolSize: 10,
              name: '价格',
              type: 'line',
              data: unitPrice,
              itemStyle : {
                normal: {
                  label : {
                    textStyle:{
                      fontSize:20,
                    },
                    show: true}}},
            }]
          });
        })
          .catch(function (error) {
            console.log(error);
          })
      },
      removemedicine($index) {
        var _that = this;
        this.$confirm('确定删除此药品?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showCancelButton: true,
          customClass:"qcMessage",
          type: 'warning'
        })
          .then(() => {
            let medicine = _that.medicinelist[$index];
            if(medicine.medicineId == "" || medicine.medicineId == null){
              _that.deleteRow($index)
            }else {
              _that.$http.delete('/medicineManage/deleteMedicine',{
                data:{
                  medicineId: medicine.medicineId
                }
              })
                .then(response => {
                  if(response.code == 1){
                    _that.deleteRow($index)
                  }
                }).catch(() => {
                _that.$message.error("删除失败")
              })
            }
        })
      },
      updatemedicine(){
        var _that = this;
        for(let i=0 ; i<_that.medicinelist.length ;i++){
          if(_that.medicinelist[i].medicineId=="" || _that.medicinelist[i].medicineId==null ){
            _that.medicinelist[i].medicineId=_that.medicinelist[i].medicineName
          }
        }
        this.$http.post('/medicineManage/updateMedicineList',_that.medicinelist)
      .then(function (response) {
          if(response.code == "1"){
            _that.$common.openSuccessMsgBox("修改成功",_that);
            _that.getmedicine()
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
              this.medicinelist = response.data.medicinelist;
              this.$store.dispatch('depositmedicineName',response.data.medicinelist.medicineName)
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
      deleteRow(index) {//删除改行
        this.medicinelist .splice(index, 1);
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
