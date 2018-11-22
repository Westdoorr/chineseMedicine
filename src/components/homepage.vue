<template>
   <div class="from-container-div">
      <div class="base-form-c">
        <el-form ref="form" :model="form" :rules="rules" label-width="156px" label-position="right">
          <el-form-item label="姓名" prop="pname">
            <el-input class="index-input" v-model="form.pname" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="性别">
             <el-radio-group v-model="form.gender">
              <el-radio label="男" value="男"></el-radio>
              <el-radio label="女" value="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄">
            <el-row>
              <el-col :span="6"><el-input class="full-width" v-model="form.age"  placeholder="请输入"></el-input></el-col>
              <el-col :span="18">
                <label class="el-form-item__label" style="width: 124px;padding-left:20px;padding-right:20px;">生日</label>
                <el-input class="index-input" v-model="form.birthday" @blur="changeBirdate" style="width: calc(100% - 124px);" placeholder="日期yyyy/mm/dd"></el-input>
                <!--<el-date-picker type="date" placeholder="请选择日期" v-model="form.birthday" format="yyyy/MM/dd" style="width: calc(100% - 124px);"></el-date-picker>-->
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="来源地">
             <el-row class="lyd">
               <el-col :span="8">
                  <el-select v-model="form.country" style="margin-right:10px;width(100% - 10px);" @change="setProList">
                    <el-option label="中国" value="0"></el-option>
                    <el-option label="外国" value="1"></el-option>
                  </el-select>
               </el-col>
               <el-col :span="8">
                 <el-select v-model="form.sourceProvince" filterable popper-class="city" style="margin-right:10px;margin-left:10px;width(100% - 20px);" @change="setCityList">
                     <el-option
                        v-for="item in province"
                        :key="item.id"
                        :label="item.provName"
                        :value="item.id">
                      </el-option>
                  </el-select>
               </el-col>
               <el-col :span="8">
                 <el-select filterable popper-class="city" v-model="form.sourceCity" style="margin-left:10px;width(100% - 10px);">
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
          <div class="el-form-item">
            <div class="el-form-item__content" style="height:70px;text-align:center;line-height:70px;">
              <!--<button type="button" class="el-button el-button--primary normal-btn-primary" @click="czSubmit"><span>初诊</span></button> -->
              <button type="button" class="el-button el-button--primary normal-btn-primary" @click="opencomfigMethod('请问是否进行初访?',czSubmit)"><span>初诊</span></button>
              <!--<button type="button" class="el-button el-button--default normal-btn-default" @click="fzSubmit"><span>复诊</span></button>-->
              <button type="button" class="el-button el-button--default normal-btn-default" @click="opencomfigMethod('请问是否进行复访?',fzSubmit)"><span>复诊</span></button>

            </div>
          </div>
        </el-form>
      </div>
    </div>
</template>
<script src="../assets/js/homepage.js">
</script>

  <style lang="scss">
    @import '../assets/css/homepage.scss';
  </style>
