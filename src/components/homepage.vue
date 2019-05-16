<template>
   <div class="from-container-div">
      <div class="base-form-c">
        <el-form ref="form" :model="form" :rules="rules" label-width="156px" label-position="right">
          <el-form-item label="姓名" prop="pname">
            <el-input class="index-input" v-model="form.pname" placeholder="请输入姓名" @blur="putinname"></el-input>
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
                <el-input class="index-input" v-model="form.birthday" @blur="changeBirdate" style="width: calc(100% - 124px);" placeholder="yyyy-mm-dd"></el-input>
                <!--<el-date-picker type="date" placeholder="请选择日期" v-model="form.birthday" format="yyyy/MM/dd" style="width: calc(100% - 124px);"></el-date-picker>-->
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="来源地">
             <el-row class="lyd">
               <el-col :span="8">
                  <el-select v-model="selectCountryId" style="margin-right:10px;width(100% - 10px);" @change="setProList">
                    <el-option v-for="country in countryList"
                    :key = "country.continentId"
                    :label = "country.continentName"
                    :value = "country.continentId">
                    </el-option>
                  </el-select>
               </el-col>
               <el-col :span="8">
                 <el-select v-model="selectProvinceId"  style="margin-right:10px;margin-left:10px;width(100% - 20px);" @change="setCityList">
                     <el-option
                        v-for="province in provinceList"
                        :key="province.id"
                        :label="province.provName"
                        :value="province.id">
                      </el-option>
                  </el-select>
               </el-col>
               <el-col :span="8">
                 <el-select filterable popper-class="city" v-model="selectCityId" style="margin-left:10px;width:185px;">
                    <el-option
                        v-for="city in cityList"
                        :key="city.cityId"
                        :label="city.cityName"
                        :value="city.cityId">
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
        <div style="position: absolute;margin-left: 900px;margin-top: -520px">
          <div v-if="dissbutton == false">
            <el-button @click="getMedia()" style="font-size: 100px;padding: 10px;width: 280px;height: 400px">+</el-button>
          </div>
          <img :src=form.picture  @click="getMedia1()">
          <el-dialog  :visible.sync ="dialogphotoVisible" @close = "funclose()" style="width: 1300px;margin-left: 12%">
            <div>
              <div style="margin-left: 20px">
                <video  ref="video" id="video" width="280px" height="400px" preload="auto"></video>
                <canvas id="canvas" width="280px" height="400px" style="margin-top: 1px"></canvas>
              </div>
              <div style="margin-left:35%;margin-top: 10px">
                <el-button id="snap" @click="takePhoto()" style="width: 80px;height: 40px;font-size: 25px;
                     background-color:#20a0ff;border: solid 1px #20a0ff;border-radius:4px;color: white;padding: 5px">拍照</el-button>
                <el-button @click="confirmphoto()" style="width: 80px;height: 40px;font-size: 25px;
                     background-color:#20a0ff;border: solid 1px #20a0ff;border-radius:4px;color: white;padding: 5px">确定</el-button>
              </div>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
</template>
<script src="../assets/js/homepage.js">
</script>

  <style lang="scss">
    @import '../assets/css/homepage.scss';
  </style>
