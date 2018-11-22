
<template>
   <div class="x-home-from-container">
      <div class="x-home-form">
        <el-form ref="form" :model="form" :rules="rules" label-width="180px" label-position="right">
            <el-row>
                <el-form-item label="姓名">
                    <el-input  v-model="form.pname" placeholder="请输入姓名"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="性别">
                    <el-radio-group v-model="form.gender">
                        <el-radio label="男" value="男"></el-radio>
                        <el-radio label="女" value="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="年龄">
                    <el-input v-model.number="form.age" placeholder="请输入年龄"></el-input>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="诊断日期">
                   <el-date-picker
                    v-model="form.iqDate"
                    format="yyyy/MM/dd"
                    type="date"
                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-row>
            <el-row>
                <el-form-item label="来源地">
                <el-row class="lyd">
                <el-col :span="8">
                    <el-select v-model="form.country" style="margin-right:10px;width(100% - 10px);" @change="setProList">
                        <el-option label="中国" value="0"></el-option>
                        <el-option label="外国" value="1"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <el-select v-model="form.sourceProvince" style="margin-right:10px;margin-left:10px;width(100% - 20px);" @change="setCityList">
                        <el-option
                            v-for="item in province"
                            :key="item.id"
                            :label="item.provName"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-col>
                <el-col :span="8">
                    <el-select v-model="form.sourceCity" style="margin-left:10px;width(100% - 10px);">
                        <el-option
                            v-for="item in city"
                            :key="item.cityId"
                            :label="item.cityName"
                            :value="item.cityId">
                        </el-option>
                    </el-select>
                </el-col>
                </el-row>
            </el-form-item>
            </el-row>
            <el-row class="btn-group-container">
                    <el-button type="primary" @click="onSubmitWjxx" class="btn-default btn-blue" >已填写基本资料</el-button>
                    <el-button type="primary" @click="onSubmitBrxx" class="btn-default" >未填写基本资料</el-button>
            </el-row>
        </el-form>
      </div>
    </div>
</template>
<style lang="scss">
    @import '../../assets/css/xxsj/x_home.scss';
</style>
<script src="../../assets/js/xxsj/x_home.js">

</script>  

