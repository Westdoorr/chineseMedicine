<template>
    <div class="br-list-div">
        <div class="br-list-container">
            <div class="search-row">
                <div class="search-range-date-item">
                    <el-date-picker
                        class="rq-input"
                        v-model="rangeDate"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <div class="search-row-btn-group">
                    <el-button class="btn-default btn-deault-size btn-color-blue" @click="getBlList">查询</el-button>
                </div>
            </div>
            <div class="table-continer">
                <el-table
                    :data="tableData.list"
                    :header-row-class-name="headerClassname"
                    :row-class-name="rowClassname"
                    stripe
                    style="border:1px solid #ebeef5;overflow-y:auto;height:100%;">
                    <el-table-column
                        type="selection"
                        width="96">
                    </el-table-column>
                    <el-table-column
                    prop="iqDate"
                    label="就诊时间"
                    width="340">
                    </el-table-column>
                    <el-table-column
                    prop="pname"
                    label="姓名"
                    width="150">
                    </el-table-column>
                    <el-table-column
                    label="操作">
                <template slot-scope="scope">
                        <el-button @click="searchBrxx(scope.row)" type="text" class="btn-font-default">查看</el-button>
                        <el-button @click="opencomfigMethod('请确认删除？',deleteBlObj,scope.row)" type="text" class="btn-font-default">删除</el-button>
                </template>
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
                <el-button @click="downLoadFile" class="btn-default btn-deault-size btn-color-blue">导出病历</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    @import '../../assets/css/xxsj/x_list.scss'
</style>
<script src="../../assets/js/xxsj/x_list.js">
  
</script>


