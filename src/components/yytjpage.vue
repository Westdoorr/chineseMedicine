<template>
<div class="sjtj-yytj-container">
    <div class="search-row">
      <div class="search-row-btn-group"><el-button class="btn-default" @click="exportExcel" style="width:100px" v-if="roleuser == 2">导出</el-button></div>
        <div class="search-row-btn-group">
          <el-button class="btn-default wzqk-btn" @click="gotoWzqkPage(wzqkpage)">每日问诊情况</el-button>
          <el-button class="btn-default yytj-btn">用药统计</el-button>
        </div>
        <div class="search-input-item">
          <el-input placeholder="请输入药名" v-model="search_obj.medicine" @keyup.enter.native="getYytjList">
              <el-button slot="append" icon="el-icon-search" @click="getYytjList"></el-button>
          </el-input>
        </div>
        <div class="search-rangedate-item">
            <el-date-picker
            class="yytj-range-date"
                v-model="rangeDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" @blur="getYytjList">
            </el-date-picker>
      </div>
        <div class="search-row-btn-group"><el-button class="btn-default" @click="tableprint" style="width:200px">打印</el-button></div>
    </div>
    <div class="table-continer" v-for="tableData in this.table" style="margin-bottom: 80px;font-size: 15px">
        <el-table
        :data="tableData.list1"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe>
        <el-table-column
          prop="yindex"
          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
        prop="medicine"
        label="药名"
        width="110">
        </el-table-column>
        <el-table-column
        prop="dose"
        label="药房用量"
        width="190">
        </el-table-column>
        <el-table-column
          label="药方用量"
          width="210">
          <template slot-scope="scope">
            {{scope.row.notStock =="0" ? "" :"+"+scope.row.notStock}}
          </template>
        </el-table-column>
    </el-table>

    <el-table
        :data="tableData.list2"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe>
        <el-table-column
         prop="yindex"
        label="序号"
        width="80">
        </el-table-column>
        <el-table-column
        prop="medicine"
        label="药名"
        width="110">
        </el-table-column>
        <el-table-column
        prop="dose"
        label="药房用量"
        width="190">
        </el-table-column>
      <el-table-column
        label="药方用量"
        width="210">
        <template slot-scope="scope">
          {{scope.row.notStock =="0" ? "" :"+"+scope.row.notStock}}
        </template>
      </el-table-column>
    </el-table>

    <el-table
        :data="tableData.list3"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe>
        <el-table-column
         prop="yindex"
        label="序号"
        width="80">
        </el-table-column>
        <el-table-column
        prop="medicine"
        label="药名"
        width="110">
        </el-table-column>
        <el-table-column
        prop="dose"
        label="药房用量"
        width="190">
        </el-table-column>
      <el-table-column
        label="药方用量"
        width="210">
        <template slot-scope="scope">
          {{scope.row.notStock =="0" ? "" :"+"+scope.row.notStock}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>
<style lang="scss">
  @import "../assets/css/yytjpage.scss";
</style>

<script src="../assets/js/yytjpage.js">

</script>
