<template>
<div class="sjtj-wzqk-container">
    <div class="search-row">
        <div class="search-row-btn-group">
          <el-button class="btn-default wzqk-btn">每日问诊情况</el-button>
          <el-button class="btn-default yytj-btn" @click="gotoYytjPage(yytjpage)">用药统计</el-button>
        </div>
    </div>
    <div class="search-row flex-justify-content">
       <el-date-picker
       class="wzrq-input"
        v-model="rangeDate"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <span name='wzGjrs'>共计人数：{{tableData.total}}</span>
    </div>
    <div class="table-continer">
        <el-table
        id = "wzqktable"
        :data="tableData.list"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        style="border:1px solid #ebeef5;overflow-y:auto;">
        <el-table-column
        type="index"
        label="序号"
        width="160">
        </el-table-column>
        <el-table-column
        prop="pName"
        label="姓名"
        width="200">
        </el-table-column>
        <el-table-column
        prop="age"
        label="年龄"
        width="200">
        </el-table-column>
        <el-table-column
        prop="residence"
        label="来自"
        width="400">
        </el-table-column>
        <el-table-column
        prop="description"
        label="诊断"
        width="400">
        </el-table-column>
        <el-table-column
        prop="times"
        label="第几次"
        width="240">
        </el-table-column>
        <el-table-column
        prop="amount"
        label="付数">
       
        </el-table-column>
    </el-table>
  </div>

  <div class="foot-container">
      <div class="page-container">
        <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="tableData.pageNum"
        :page-size="tableData.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="tableData.total">
      </el-pagination>
    </div>
    <div class="search-row-btn-group">
       <el-button class="btn-default" @click="tableprint" style="width:200px;border-radius: 8px;">打印</el-button>
    </div>
  </div>
</div> 
</template>
<style lang="scss">
  @import "../assets/css/wzqkpage.scss"
</style>

<script src="../assets/js/wzqkpage.js">
 
</script>
