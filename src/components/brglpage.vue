<template>
<div class="brgl-container">
    <div class="search-row">
      <div class="search-input-item">
        <el-input style="width:180px;margin-right:10px;margin-left: 1px;" v-model="search_obj.pname" placeholder="病人姓名" @keyup.enter.native="getBrList"></el-input>
      </div>
      <div class="search-input-item">
        <el-input style="width:180px;margin-right:10px;margin-left: 1px;" v-model="search_obj.gender" placeholder="性别" @keyup.enter.native="getBrList"></el-input>
      </div>
      <div class="search-input-item">
        <el-input style="width:180px;margin-right:10px;margin-left: 1px;" v-model="search_obj.residence" placeholder="来源地" @keyup.enter.native="getBrList"></el-input>
      </div>
      <div class="search-input-item">
        <el-input style="width:127px;margin-right:10px;margin-left: 1px; display: inline-block" v-model="search_obj.startAge" placeholder="年龄"  @keyup.enter.native="getBrList"></el-input>-
        <el-input style="width:127px;margin-right:10px;margin-left: 1px;" v-model="search_obj.endAge" placeholder="年龄"  @keyup.enter.native="getBrList"></el-input>
      </div>
      <div class="search-row-btn-group">
        <el-button class="btn-default btn-deault-size btn-color-blue" @click="getBrList">查询</el-button>
      </div>
        <div class="search-row-btn-group">
          <el-button class="btn-default" @click="triggerSelect">同步基本信息</el-button>
          <input type="file"
           :style="{display: 'none'}"
           ref="fileinput" @change="selectedFile"/>
        </div>
    </div>
    <div class="table-continer">
        <el-table
        :data="tableData.list"
        :header-row-class-name="headerClassname"
        :row-class-name="rowClassname"
        stripe
        style="border:1px solid #ebeef5;overflow-y:auto;">
        <el-table-column
          prop="index"
          label="序号"
          width="130">
          <template scope="scope"><span>{{scope.$index+(tableData.pageNum - 1) * tableData.pageSize + 1}} </span></template>
        </el-table-column>
        <el-table-column
        prop="pName"
        label="姓名"
        width="175">
        </el-table-column>
        <el-table-column
        prop="latestDate"
        label="最近就诊时间"
        width="320">
        </el-table-column>
        <el-table-column
        prop="gender"
        label="性别"
        width="85">
        </el-table-column>
        <el-table-column
        prop="age"
        label="年龄"
        width="85">
        </el-table-column>
        <el-table-column
        prop="residence"
        label="来源地"
        width="295">
        </el-table-column>
        <el-table-column
        label="操作">
        <template slot-scope="scope">
            <el-button @click="gotoyfpage(scope.row,brxxpage)" type="text" class="btn-font-default">基本信息</el-button>
            <el-button @click="gotoyfpage(scope.row,yxglpage)" type="text" class="btn-font-default">影像管理</el-button>
            <el-button @click="gotoyfpage(scope.row,grblglpage)" type="text" class="btn-font-default">查看药方</el-button>
            <!--<el-button @click="newInquiry_new(scope.row.pId)" type="text" class="btn-font-default">新建复诊</el-button>-->
            <el-button @click="opencomfigMethod('是否新建复诊?',newInquiry_new,scope.row.pId)" type="text" class="btn-font-default">新建复诊</el-button>
            <!--<el-button @click="deleteBrInfo(scope.row)" type="text" class="btn-font-default bnt-font-color">移除</el-button>-->
            <el-button @click="opencomfigMethod('请确认删除病人信息?',delteBrinfoM,scope.row)" type="text" class="btn-font-default bnt-font-color">移除</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>

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
</div>
</template>

<style lang="scss">
   @import '../assets/css/brglpage.scss';
</style>

<script src="../assets/js/brglpage.js">

</script>
