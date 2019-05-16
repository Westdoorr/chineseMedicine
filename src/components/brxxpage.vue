<template>
    <div class="brxx-info-container">
        <el-form ref="formName" :rules="rules" :model="basicInfo" label-width="170px">
          <div class="picture">
            <img style="height: 400px;width: 280px" :src=basicInfo.headImage>
            <div>
<!--              <el-button style="margin-left:30%; width:40%; height: 60px;font-size: 25px;
              background-color:#20a0ff;border: solid 1px #20a0ff;border-radius:4px;color: white" @click="getMedia()">修改</el-button>-->
            </div>
            <el-dialog  :visible.sync ="dialogphotoVisible" @close = "funclose()" style="width: 1300px;margin-left: 12%">
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
            </el-dialog>
          </div>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="病人编号">
                  <el-input v-model="basicInfo.patientId" placeholder="" :readonly="true" style="width: 86%"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" :offset="4">
                <el-form-item label="身高" prop="height">
                  <el-input v-model.number="basicInfo.height" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">cm</span>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="体重" prop="weight">
                  <el-input v-model.number="basicInfo.weight" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">kg</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="姓名">
                  <el-input v-model="basicInfo.pname" placeholder="" style="width: 86%"></el-input>
                </el-form-item>
              </el-col>
                <el-col :span="12" :offset="4">
                    <el-form-item label="职业">
                        <el-input v-model="basicInfo.occupation" placeholder=""></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="性别">
                  <el-radio-group v-model="basicInfo.gender">
                    <el-radio label="男" value='男'></el-radio>
                    <el-radio label="女" value='女'></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
                <el-col :span="12">
                    <el-form-item label="婚姻史">
                        <el-radio-group v-model="basicInfo.marriage">
                            <el-radio   label="已婚" value='已婚'></el-radio>
                            <el-radio  style="margin-left: 50px" label="未婚" value='未婚'></el-radio>
                            <el-radio  style="margin-left: 50px" label="离异" value='离异'></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label="民族">
                  <el-select v-model="basicInfo.national" placeholder="请选择民族" style="width: 86%">
                    <el-option label="汉" value="汉"></el-option>
                    <el-option label="藏" value="藏"></el-option>
                    <el-option label="回" value="回"></el-option>
                    <el-option label="壮" value="壮"></el-option>
                    <el-option label="少数民族" value="少数民族"></el-option>
                    <el-option label="国外民族" value="国外民族"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
                <el-col :span="12" :offset="4">
                    <el-form-item label="宗教信仰">
                        <el-select v-model="basicInfo.religiousBelief" placeholder="请选择宗教">
                            <el-option label="无" value="无"></el-option>
                            <el-option label="佛教" value="佛教"></el-option>
                            <el-option label="道教" value="道教"></el-option>
                            <el-option label="基督教" value="基督教"></el-option>
                            <el-option label="其他宗教" value="其他宗教"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <div class="two-col-container">
                <div class="frist-col-container">
                    <el-row :gutter="20" style="width: 575px">
                      <el-col :span="24">
                        <el-form-item label="国籍">
                          <el-select v-model="basicInfo.nationality" placeholder="请选择国籍" style="width: 86%">
                            <el-option label="中国" value="中国"></el-option>
                            <el-option label="美国" value="美国"></el-option>
                            <el-option label="日本" value="日本"></el-option>
                            <el-option label="英国" value="英国"></el-option>
                            <el-option label="法国" value="法国"></el-option>
                            <el-option label="德国" value="德国"></el-option>
                            <el-option label="加拿大" value="加拿大"></el-option>
                            <el-option label="澳大利亚" value="澳大利亚"></el-option>
                            <el-option label="俄罗斯" value="俄罗斯"></el-option>
                            <el-option label="新西兰" value="新西兰"></el-option>
                            <el-option label="意大利" value="意大利"></el-option>
                            <el-option label="韩国" value="韩国"></el-option>
                            <el-option label="比利时" value="比利时"></el-option>
                            <el-option label="瑞士" value="瑞士"></el-option>
                            <el-option label="新加坡" value="新加坡"></el-option>
                            <el-option label="墨西哥" value="墨西哥"></el-option>
                            <el-option label="荷兰" value="荷兰"></el-option>
                            <el-option label="巴西" value="巴西"></el-option>
                            <el-option label="爱尔兰" value="爱尔兰"></el-option>
                            <el-option label="马来西亚" value="马拉西亚"></el-option>
                            <el-option label="丹麦" value="丹麦"></el-option>
                            <el-option label="其他" value="其他"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                     <el-row :gutter="20" style="width: 575px">
                       <el-col :span="24">
                         <el-form-item label="证件类型">
                           <el-select v-model="basicInfo.certificatesType" placeholder="请选择证件类型" style="width: 86%">
                             <el-option label="身份证" value="身份证"></el-option>
                             <el-option label="护照" value="护照"></el-option>
                             <el-option label="港澳通行证" value="港澳通行证"></el-option>
                           </el-select>
                         </el-form-item>
                       </el-col>
                     </el-row>
                     <el-row :gutter='20'>
                       <el-col :span="24">
                         <el-form-item label="证件编号" prop="certificatesNumber" style="width: 98%">
                           <el-input v-model="basicInfo.certificatesNumber" placeholder=""></el-input>
                         </el-form-item>
                       </el-col>
                     </el-row>
                     <el-row :gutter='20'>
                       <el-col :span="16">
                         <el-form-item label="生日">
                           <!-- <label class="el-form-item__label" style="width: 200px;">生日</label> -->
                           <el-date-picker type="date" placeholder="请选择日期" v-model="basicInfo.birthday" format="yyyy-MM-dd" style="width:80%;"></el-date-picker>
                         </el-form-item>
                       </el-col>
                       <el-col :span="8" style="margin-left: -20px">
                         <el-form-item label="年龄" label-width="100px" class="age-sm-screen" prop="age">
                           <el-input v-model.number="basicInfo.age"  placeholder="年龄"></el-input>
                         </el-form-item>
                       </el-col>
                     </el-row>
                     <el-row :gutter='20'>
                         <el-col :span="24">
                             <el-form-item label="出生地点">
                                <el-select v-model="b_country" placeholder="请选择" style="width:32%;" @change="showProList(1)">
                                    <el-option label="中国" :value = 0></el-option>
                                    <el-option label="外国" :value = 1></el-option>
                                </el-select>
                                <el-select v-model="basicInfo.incuProvince" placeholder="请选择" style="width:32%;" @change="showCityList(1)">
                                    <el-option
                                        v-for="item in province"
                                        :key="item.id"
                                        :label="item.provName"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select v-model="basicInfo.incuCity" placeholder="请选择" style="width:32%;">
                                    <el-option
                                        v-for="item in city"
                                        :key="item.cityId"
                                        :label="item.cityName"
                                        :value="item.cityId">
                                    </el-option>
                                </el-select>
                             </el-form-item>
                         </el-col>
                     </el-row>
                     <el-row :gutter='20'>
                         <el-col :span="24">
                             <el-form-item label="来源地">
                                 <el-select v-model="s_country" placeholder="请选择" style="width:32%;" @change="showProList(2)">
                                    <el-option label="中国" :value = 0></el-option>
                                    <el-option label="外国" :value = 1></el-option>
                                </el-select>
                                <el-select v-model="basicInfo.sourceProvince" placeholder="请选择" style="width:32%;" @change="showCityList(2)">
                                    <el-option
                                        v-for="item in sourceProvince"
                                        :key="item.id"
                                        :label="item.provName"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                                <el-select v-model="basicInfo.sourceCity" placeholder="请选择" style="width:32%;">
                                    <el-option
                                        v-for="item in sourceCity"
                                        :key="item.cityId"
                                        :label="item.cityName"
                                        :value="item.cityId">
                                    </el-option>
                                </el-select>
                             </el-form-item>
                         </el-col>
                     </el-row>
                </div>
                <div class="seconde-col-container">
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-form-item label="饮食习惯" style="margin-bottom:0px;">
                                <!--<el-checkbox-group v-model="basicInfo.eatingHabits"  @change="setCheckBox('eatingHabits')">-->
                                 <el-checkbox-group v-model="basicInfo.eatingHabits">
                                    <el-checkbox label="非素食者" ></el-checkbox>
                                    <el-checkbox label="完全素食者"></el-checkbox>
                                    <el-checkbox label="奶蛋素食"></el-checkbox>
                                    <el-checkbox label="半素食"></el-checkbox>
                                    <el-checkbox label="鱼素食"></el-checkbox>
                                    <el-checkbox label="果素食"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item>
                                <el-input v-model="basicInfo.ehRemark" placeholder="备注"></el-input>
                            </el-form-item>
                         </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-form-item label="遗传病史" style="margin-bottom:0px;">
                                <el-checkbox-group v-model="basicInfo.heredityHistory">
                                    <el-checkbox label="无" @change="cLearhCheckbox"></el-checkbox>
                                    <el-checkbox label="高血压" @change="sethCheckBox"></el-checkbox>
                                    <el-checkbox label="糖尿病" @change="sethCheckBox"></el-checkbox>
                                    <el-checkbox label="心脑血管疾病" @change="sethCheckBox"></el-checkbox>
                                    <el-checkbox label="肿瘤" @change="sethCheckBox"></el-checkbox>
                                    <el-checkbox label="心脏病" @change="sethCheckBox"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item>
                                <el-input v-model="basicInfo.hhRemark" placeholder="备注"></el-input>
                            </el-form-item>
                         </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="24">
                            <el-form-item label="传染病史" style="margin-bottom:0px;">
                                <el-checkbox-group v-model="basicInfo.infectionHistory">
                                    <el-checkbox label="无"  @change="clearinCheckbox"></el-checkbox>
                                    <el-checkbox label="肝炎" @change="setInCheckbox"></el-checkbox>
                                    <el-checkbox label="结核"  @change="setInCheckbox"></el-checkbox>
                                    <el-checkbox label="痢疾"  @change="setInCheckbox"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item>
                                <el-input v-model="basicInfo.ihRemark" placeholder="备注"></el-input>
                            </el-form-item>
                         </el-col>
                    </el-row>
                </div>
            </div>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="外伤史">
                        <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="basicInfo.traumaHistory">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="手术史">
                        <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="basicInfo.surgeryHistory">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="家人病史">
                        <el-input
                        type="textarea"
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="basicInfo.familyHistory">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="接触史">
                        <el-checkbox-group v-model="basicInfo.contactHistory">
                            <el-checkbox label="无" @change="clearConCheckbox"></el-checkbox>
                            <el-checkbox label="疫区" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="疫情" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="疫水" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="牧区" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="矿山" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="高氟区" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="低碘区" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="化学物质" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="放射物质" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="有毒物质接触史" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="吸毒史" @change="setConCheckbox"></el-checkbox>
                            <el-checkbox label="冶游史" @change="setConCheckbox"></el-checkbox>
                        </el-checkbox-group>
                         <el-input v-model="basicInfo.chRemark" placeholder="备注"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="药物过敏">
                        <el-checkbox-group v-model="basicInfo.meAllergy">
                            <el-checkbox label="无"></el-checkbox>
                        </el-checkbox-group>
                         <el-input v-model="basicInfo.meallRemark" placeholder="备注"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="过敏物">
                        <el-checkbox-group v-model="basicInfo.allergy">
                            <el-checkbox label="无" @change="clearAllCheckbox"></el-checkbox>
                            <el-checkbox label="海鲜" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="粉尘" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="牛奶" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="鸡蛋" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="酒精" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="葱" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="姜" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="蒜" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="花生" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="霉菌" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="大豆" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="柳絮" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="橡胶" @change="setAllCheckbox"></el-checkbox>
                            <el-checkbox label="芒果" @change="setAllCheckbox"></el-checkbox>
                        </el-checkbox-group>
                         <el-input v-model="basicInfo.allRemark" placeholder="备注"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-col :span="10">
                    <el-form-item label="输血史">
                         <el-select v-model="basicInfo.bloodTrans" placeholder="请选择">
                            <el-option label="否" value="否"></el-option>
					        <el-option label="是" value="是"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10">
                    <el-col :span="12">
                        <el-form-item label="吸烟史">
                            <el-select v-model="basicInfo.smoke" placeholder="请选择">
                                <el-option label="否" value="否"></el-option>
					            <el-option label="是" value="是"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-col>
                <el-col :span="12">
                    <el-col :span="10">
                        <el-form-item label="戒烟">
                            <el-select v-model="basicInfo.quitSmoke" placeholder="请选择">
                                <el-option label="否" value="否"></el-option>
					            <el-option label="是" value="是"></el-option>
                            </el-select>
                        </el-form-item>
                   </el-col>
                   <el-col :span="9">
                        <el-form-item label="戒烟时长" label-width="200px">
                            <el-input v-model.number="basicInfo.quitSmokeTime" placeholder=""></el-input>
                        </el-form-item>
                   </el-col>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="10">
                    <el-col :span="12">
                        <el-form-item label="饮酒史">
                            <el-select v-model="basicInfo.drink" placeholder="请选择">
                                <el-option label="否" value="否"></el-option>
					            <el-option label="是" value="是"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :lg="10" :sm="12">
                        <el-form-item label="每日" label-width="120px" prop="dailyDrink">
                            <el-input v-model.number="basicInfo.dailyDrink" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">两</span>
                        </el-form-item>
                    </el-col>
                </el-col>
                <el-col :span="12">
                    <el-col :span="10">
                        <el-form-item label="戒酒">
                            <el-select v-model="basicInfo.quitDrink" placeholder="请选择">
                                <el-option label="否" value="否"></el-option>
					            <el-option label="是" value="是"></el-option>
                            </el-select>
                        </el-form-item>
                   </el-col>
                   <el-col :span="9">
                        <el-form-item label="戒酒时长" label-width="200px">
                            <el-input v-model.number="basicInfo.quitDrinkTime" placeholder=""></el-input>
                        </el-form-item>
                   </el-col>
                </el-col>
            </el-row>
             <el-row>
                 <el-col :span="24">
                    <el-col :lg="5" :sm="4">
                        <el-form-item label="孕" label-width="170px" prop="pregnant">
                             <el-input v-model.number="basicInfo.pregnant" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :lg="4" :sm="5">
                        <el-form-item label="产" label-width="80px" prop="birth">
                             <el-input v-model.number="basicInfo.birth" placeholder=""></el-input>
                        </el-form-item>
                    </el-col>
                     <el-col :lg="4" :sm="5">
                        <el-form-item label="早产" label-width="120px">
                              <el-select v-model="basicInfo.prematureLabour" placeholder="请选择">
                                <el-option label="否" value="否"></el-option>
					            <el-option label="是" value="是"></el-option>
                              </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :lg="4" :sm="5">
                        <el-form-item label="流产" label-width="120px">
                              <el-select v-model="basicInfo.abortion" placeholder="请选择">
                                <el-option label="否" value="否"></el-option>
					            <el-option label="是" value="是"></el-option>
                              </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :lg="4" :sm="5">
                        <el-form-item label="避孕" label-width="120px">
                              <el-select v-model="basicInfo.contraception" placeholder="请选择">
                                <el-option label="否" value="否"></el-option>
					            <el-option label="是" value="是"></el-option>
                              </el-select>
                        </el-form-item>
                    </el-col>
                 </el-col>
             </el-row>
            <el-row>
                <el-form-item style="text-align:center;margin-top:40px;">
                    <el-button type="primary" @click="opencomfigMethod('是否提交病人信息',onSubmit)" class="btn-blue" >提交</el-button>
                    <el-button type="primary" @click="gotoBlglpage" class="btn-default" >返回</el-button>
                </el-form-item>
            </el-row>
     </el-form>
    </div>
</template>
<style lang="scss">
    @import '../assets/css/brxxpage.scss';
</style>

<script src = "../assets/js/brxxpage.js">
</script>
