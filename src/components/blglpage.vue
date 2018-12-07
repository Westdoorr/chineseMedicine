<template>
<div class="blgl-container">
    <div class="search-row">
        <div class="search-input-item">
            <el-input style="width:180px;margin-right:10px;margin-left: 1px;" v-model="search_obj.pname" placeholder="病人姓名"></el-input>
        </div>
        <div class="search-input-item">
           <el-input style="width:180px;margin-right:10px;margin-left: 1px;" v-model="search_obj.gender" placeholder="性别"></el-input>
        </div>
        <div class="search-input-item">
           <el-input style="width:180px;margin-right:10px;margin-left: 1px;" v-model="search_obj.residence" placeholder="来源地"></el-input>
        </div>
        <div class="search-input-item">
            <el-input style="width:127px;margin-right:10px;margin-left: 1px; display: inline-block" v-model="search_obj.endAge" placeholder="年龄"></el-input>-
            <el-input style="width:127px;margin-right:10px;margin-left: 1px;" v-model="search_obj.startAge" placeholder="年龄"></el-input>
        </div>

        <div class="search-range-date-item search-input-item1">
            <el-date-picker
                class="rq-input"
                v-model="rangeDate"
                :picker-options="pickerOptions1"
                type="daterange"
                :default-time="['00:00:00', '23:59:59']"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                format="yyyy/MM/dd"
                @change="changeDate"
            >
            </el-date-picker>
        </div>
        <div class="search-input-item">
            <el-input style="width:300px;margin-right:40px;" v-model="search_obj.keyWords" placeholder="输入关键字"></el-input>
        </div>
        <div class="search-row-btn-group">
          <el-button class="btn-default btn-deault-size btn-color-blue" @click="getblList">查询</el-button>
        </div>
    </div>
    <div class="table-continer">
        <el-table
        :data="tableData.list"
        ref="table"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        style="border:1px solid #ebeef5;overflow-y:auto;height:100%; width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="60"></el-table-column>
        <el-table-column prop="index" width="100px" label="序号" >
          <template scope="scope"><span>{{scope.$index+(tableData.pageNum - 1) * tableData.pageSize + 1}} </span></template>
        </el-table-column>
        <el-table-column prop="pName" label="姓名" width="160"></el-table-column>
        <el-table-column prop="inquiryDate" label="就诊时间" width="320"></el-table-column>
        <el-table-column prop="times" label="第几次" width="140"></el-table-column>
        <el-table-column prop="gender" label="性别" width="110"></el-table-column>
        <el-table-column prop="age" label="年龄" width="115"></el-table-column>
        <el-table-column prop="residence" label="来源地" width="320"></el-table-column>
        <el-table-column label="操作" width="510">
       <template slot-scope="scope">
            <!--<el-button @click="delDailyPatient(scope.row)" type="text" class="btn-font-default bnt-font-color">删除病历</el-button>-->
           <el-button @click="opencomfigMethod('请确认删除病例',delDailyPatient,scope.row)" type="text" class="btn-font-default bnt-font-color">删除病历</el-button>
            <el-button @click="gotoWzxxPage(scope.row)" type="text" class="btn-font-default">查看四诊</el-button>
            <el-button @click="gotoyfpage(scope.row)" type="text" class="btn-font-default">查看病历</el-button>
       </template>
        </el-table-column>
    </el-table>
  </div>

  <div class="foot-container">
      <div class="page-container">
        <el-pagination background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="tableData.pageNum"
        :page-size="tableData.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="tableData.total">
      </el-pagination>
    </div>
    <div class="search-row-btn-group">
       <el-button class="btn-default btn-deault-size btn-color-blue" @click="exportBlList">导出病历</el-button>
       <el-button class="btn-default btn-deault-size btn-color-blue" @click="exportWord">导出word</el-button>
    </div>
  </div>
</div>
</template>
<style lang="scss">
    // @import "@/assets/css/blglpage.scss"
    @import "../assets/css/blglpage.scss"
</style>

<script src = "../assets/js/blglpage.js">

</script>
