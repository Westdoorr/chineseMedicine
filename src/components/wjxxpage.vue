<template>
    <div class="wjxx-info-container">
        <el-form :model="basicWjxx" label-width="170px">
            <div class="wjxx-item">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="饭量">
                                 <el-select v-model="basicWjxx.fl" placeholder="请选择">
                                    <el-option label="无进食" value="无进食"></el-option>
                                    <el-option label="极少" value="极少"></el-option>
                                    <el-option label="较少" value="较少"></el-option>
                                    <el-option label="适中" value="适中"></el-option>
                                    <el-option label="较多" value="较多"></el-option>
                                    <el-option label="非常多" value="非常多"></el-option>
                                    <el-option label="异常多" value="异常多"></el-option>
                                    <el-option label="时多时少" value="时多时少"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.fl_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="纳后腹痛">
                                 <el-select v-model="basicWjxx.nhft" placeholder="请选择">
                                    <el-option label="无纳后腹痛情况" value="无纳后腹痛情况"></el-option>
                                    <el-option label="鲜有腹痛" value="鲜有腹痛"></el-option>
                                    <el-option label="偶尔腹痛" value="偶尔腹痛"></el-option>
                                    <el-option label="时有腹痛" value="时有腹痛"></el-option>
                                    <el-option label="常有腹痛" value="常有腹痛"></el-option>
                                    <el-option label="每进食后都腹痛" value="每进食后都腹痛"></el-option>
                                    <el-option label="时有时无" value="时有时无"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.nhft_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="饮食习惯">
                                 <el-select v-model="basicWjxx.ysxg" placeholder="请选择">
                                    <el-option label="喜冷" value="喜冷"></el-option>
                                    <el-option label="喜热" value="喜热"></el-option>
                                    <el-option label="畏冷" value="畏冷"></el-option>
                                    <el-option label="畏热" value="畏热"></el-option>
                                    <el-option label="喜酸" value="喜酸"></el-option>
                                    <el-option label="喜甜" value="喜甜"></el-option>
                                    <el-option label="畏辣" value="畏辣"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.ysxg_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="食欲">
                                 <el-select v-model="basicWjxx.sy" placeholder="请选择">
                                    <el-option label="毫无食欲" value="毫无食欲"></el-option>
                                    <el-option label="鲜有食欲" value="鲜有食欲"></el-option>
                                    <el-option label="食欲较低" value="食欲较低"></el-option>
                                    <el-option label="食欲正常" value="食欲正常"></el-option>
                                    <el-option label="食欲较强" value="食欲较强"></el-option>
                                    <el-option label="食欲旺盛" value="食欲旺盛"></el-option>
                                    <el-option label="时有时无" value="时有时无"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.sy_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="纳后腹胀">
                                 <el-select v-model="basicWjxx.nhfz" placeholder="请选择">
                                    <el-option label="永远吃不饱" value="永远吃不饱"></el-option>
                                    <el-option label="无明显不适" value="无明显不适"></el-option>
                                    <el-option label="无不适感" value="无不适感"></el-option>
                                    <el-option label="吃多一些就觉得胀" value="吃多一些就觉得胀"></el-option>
                                    <el-option label="吃喝后都觉得胀" value="吃喝后都觉得胀"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        
                        <el-form-item>
                            <el-input v-model="basicWjxx.nhfz_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="消化">
                            <el-select v-model="basicWjxx.xh" placeholder="请选择">
                                <el-option label="消化过快" value="消化过快"></el-option>
                                <el-option label="正常消化" value="正常消化"></el-option>
                                <el-option label="不太消化" value="不太消化"></el-option>
                                <el-option label="不能消化" value="不能消化"></el-option>
                                <el-option label="无异常" value="无异常"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.xh_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="饥饿感">
                                 <el-select v-model="basicWjxx.jeg" placeholder="请选择">
                                    <el-option label="从无饥饿感" value="从无饥饿感"></el-option>
                                    <el-option label="鲜有饥饿感" value="鲜有饥饿感"></el-option>
                                    <el-option label="时有饥饿感" value="时有饥饿感"></el-option>
                                    <el-option label="饥饿感正常" value="饥饿感正常"></el-option>
                                    <el-option label="常有饥饿感" value="常有饥饿感"></el-option>
                                    <el-option label="随时感觉饥饿" value="随时感觉饥饿"></el-option>
                                    <el-option label="时有时无" value="时有时无"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.jeg_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="纳后打嗝">
                                 <el-select v-model="basicWjxx.nhdg" placeholder="请选择">
                                    <el-option label="无嗝气情况" value="无嗝气情况"></el-option>
                                    <el-option label="偶尔打嗝" value="偶尔打嗝"></el-option>
                                    <el-option label="有时打嗝" value="有时打嗝"></el-option>
                                    <el-option label="常打嗝" value="常打嗝"></el-option>
                                    <el-option label="一直打嗝" value="一直打嗝"></el-option>
                                    <el-option label="时有时无" value="时有时无"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.nhdg_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>
            <div class="wjxx-item">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="入睡快慢">
                            <el-select v-model="basicWjxx.rskm" placeholder="请选择">
                                <el-option label="极易入睡" value="极易入睡"></el-option>
                                <el-option label="较快入睡" value="较快入睡"></el-option>
                                <el-option label="很难入睡" value="很难入睡"></el-option>
                                <el-option label="极难入睡" value="极难入睡"></el-option>
                                <el-option label="无异常" value="无异常"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.rskm_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="做梦频率">
                                 <el-select v-model="basicWjxx.zmpl" placeholder="请选择">
                                    <el-option label="无" value="无"></el-option>
                                    <el-option label="偶尔做梦" value="偶尔做梦"></el-option>
                                    <el-option label="经常做梦" value="经常做梦"></el-option>
                                    <el-option label="极多" value="极多"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.zmpl_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="睡眠质量">
                                 <el-select v-model="basicWjxx.smzl" placeholder="请选择">
                                    <el-option label="极高" value="极高"></el-option>
                                    <el-option label="较好" value="较好"></el-option>
                                    <el-option label="中等" value="中等"></el-option>
                                    <el-option label="较差" value="较差"></el-option>
                                    <el-option label="极差" value="极差"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.smzl_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="睡眠时长">
                                 <el-select v-model="basicWjxx.smsc" placeholder="请选择">
                                    <el-option label="极少（<4h）" value="极少（<4h）"></el-option>
                                    <el-option label="较少（4-6h）" value="较少（4-6h）"></el-option>
                                    <el-option label="正常（6-8h）" value="正常（6-8h）"></el-option>
                                    <el-option label="较多（9-12h）" value="较多（9-12h）"></el-option>
                                    <el-option label="极多（>12h）" value="极多（>12h）"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.smsc_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="噩梦否">
                                 <el-select v-model="basicWjxx.emf" placeholder="请选择">
                                    <el-option label="无" value="无"></el-option>
                                    <el-option label="极少" value="极少"></el-option>
                                    <el-option label="经常" value="经常"></el-option>
                                    <el-option label="极多" value="极多"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.emf_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="午睡否">
                                 <el-select v-model="basicWjxx.wsf" placeholder="请选择">
                                    <el-option label="有午睡习惯" value="有午睡习惯"></el-option>
                                    <el-option label="无午睡习惯" value="无午睡习惯"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.wsf_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="起夜次数">
                            <el-input v-model="basicWjxx.qycs" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">次</span>
                        </el-form-item>
                    </el-col>
                </el-row>
            </div>
            <div class="wjxx-item">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-col :span="16">
                            <el-form-item label="大便频率">
                                <el-input v-model="basicWjxx.dppl_r" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">日</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="8">
                            <el-form-item class="no-label-margin">
                                 <el-input v-model="basicWjxx.dppl_c" placeholder="" class="suffix-input-width"></el-input><span class="suffix-input-span">次</span>
                            </el-form-item>
                        </el-col>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="大便外观">
                            <el-select v-model="basicWjxx.dpwg" placeholder="请选择">
                                <el-option label="水样" value="水样"></el-option>
                                <el-option label="粥样" value="粥样"></el-option>
                                <el-option label="溏稀" value="溏稀"></el-option>
                                <el-option label="香蕉状" value="香蕉状"></el-option>
                                <el-option label="干硬" value="干硬"></el-option>
                                <el-option label="羊矢" value="羊矢"></el-option>
                                <el-option label="无异常" value="无异常"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.dpwg_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="颜色">
                                 <el-select v-model="basicWjxx.ys" placeholder="请选择">
                                    <el-option label="土黄色" value="土黄色"></el-option>
                                    <el-option label="褐色" value="褐色"></el-option>
                                    <el-option label="暗红色" value="暗红色"></el-option>
                                    <el-option label="黑色" value="黑色"></el-option>
                                    <el-option label="鲜红色" value="鲜红色"></el-option>
                                    <el-option label="浅红色" value="浅红色"></el-option>
                                    <el-option label="紫色" value="紫色"></el-option>
                                    <el-option label="绿色" value="绿色"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.ys_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="造瘘否">
                            <el-radio-group v-model="basicWjxx.zwf">
                                <el-radio label="是" value="是">是</el-radio>
                                <el-radio label="否" value="否">否</el-radio>
                            </el-radio-group>
                                 <!-- <el-select v-model="basicWjxx.zwf" placeholder="请选择">
                                    <el-option label="是" value="是"></el-option>
                                    <el-option label="否" value="否"></el-option>
                                </el-select> -->
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.zwf_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="顺畅度">
                            <el-select v-model="basicWjxx.scd" placeholder="请选择">
                                <el-option label="腹泻" value="腹泻"></el-option>
                                <el-option label="常常腹泻" value="常常腹泻"></el-option>
                                <el-option label="偶尔腹泻" value="偶尔腹泻"></el-option>
                                <el-option label="顺畅" value="顺畅"></el-option>
                                <el-option label="偶尔便秘" value="偶尔便秘"></el-option>
                                <el-option label="常常便秘" value="常常便秘"></el-option>
                                <el-option label="总是便秘" value="总是便秘"></el-option>
                                <el-option label="无异常" value="无异常"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.scd_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="便血否">
                                 <el-radio-group v-model="basicWjxx.bxf">
                                    <el-radio label="是" value="是">是</el-radio>
                                    <el-radio label="否" value="否">否</el-radio>
                                </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.bxf_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="粘连否">
                                 <el-radio-group v-model="basicWjxx.zlf">
                                    <el-radio label="是" value="是">是</el-radio>
                                    <el-radio label="否" value="否">否</el-radio>
                                </el-radio-group>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.zlf_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                     <el-col :span="8">
                         <el-form-item label="开塞露否">
                                <el-radio-group v-model="basicWjxx.kslf">
                                    <el-radio label="是" value="是">是</el-radio>
                                    <el-radio label="否" value="否">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="气味">
                                <el-input v-model="basicWjxx.ys" placeholder="备注"></el-input>
                            </el-form-item>
                     </el-col>
                </el-row>
            </div>
            <div class="wjxx-item">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="尿颜色">
                                 <el-select v-model="basicWjxx.lys" placeholder="请选择">
                                    <el-option label="浅稻黄色" value="浅稻黄色"></el-option>
                                    <el-option label="黄透明色" value="黄透明色"></el-option>
                                    <el-option label="深黄色" value="深黄色"></el-option>
                                    <el-option label="橙色" value="橙色"></el-option>
                                    <el-option label="粉色" value="粉色"></el-option>
                                    <el-option label="红色" value="红色"></el-option>
                                    <el-option label="其他" value="其他"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.lys_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="力量强度">
                            <el-select v-model="basicWjxx.llqd" placeholder="请选择">
                                <el-option label="有力" value="有力"></el-option>
                                <el-option label="较有力" value="较有力"></el-option>
                                <el-option label="无力" value="无力"></el-option>
                                <el-option label="无异常" value="无异常"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.llqd_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="尿等待">
                                 <el-select v-model="basicWjxx.ldd" placeholder="请选择">
                                   <el-option label="无" value="无"></el-option>
                                    <el-option label="时有" value="时有"></el-option>
                                    <el-option label="常有" value="常有"></el-option>
                                    <el-option label="总是" value="总是"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.ldd_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="尿量">
                                 <el-select v-model="basicWjxx.ll" placeholder="请选择">
                                   <el-option label="无" value="无"></el-option>
                                    <el-option label="极少" value="极少"></el-option>
                                    <el-option label="较少" value="较少"></el-option>
                                    <el-option label="较多" value="较多"></el-option>
                                    <el-option label="极多" value="极多"></el-option>
                                    <el-option label="异常多" value="异常多"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.ll_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="尿不急">
                                 <el-select v-model="basicWjxx.lbj" placeholder="请选择">
                                    <el-option label="无" value="无"></el-option>
                                    <el-option label="时有" value="时有"></el-option>
                                    <el-option label="常有" value="常有"></el-option>
                                    <el-option label="总是" value="总是"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.lbj_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="尿频">
                                 <el-select v-model="basicWjxx.lp" placeholder="请选择">
                                    <el-option label="无" value="无"></el-option>
                                    <el-option label="时有" value="时有"></el-option>
                                    <el-option label="常有" value="常有"></el-option>
                                    <el-option label="总是" value="总是"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.lp_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                     <el-col :span="8">
                         <el-form-item label="利尿剂否">
                                <el-radio-group v-model="basicWjxx.lljf">
                                    <el-radio label="是" value="是">是</el-radio>
                                    <el-radio label="否" value="否">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                     </el-col>
                </el-row>
            </div>
            <div class="wjxx-item">
                <el-row :gutter="20">
                     <el-col :span="8">
                         <el-form-item label="初潮">
                                <el-date-picker type="date" placeholder="请选择日期" v-model="basicWjxx.cc" format="yyyy-MM-dd" style="width:100%;"></el-date-picker>
                            </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="末次月经">
                                <el-date-picker type="date" placeholder="请选择日期" v-model="basicWjxx.mcyj" format="yyyy-MM-dd" style="width:100%;"></el-date-picker>
                            </el-form-item>
                     </el-col>
                     <el-col :span="8" class="sczq-label-width">
                        <el-col :span="12">
                            <el-form-item label="时长">
                                <el-input v-model="basicWjxx.sc"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="周期">
                                <el-input v-model="basicWjxx.zq"></el-input>
                            </el-form-item>
                        </el-col>
                     </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="痛经否">
                                 <el-select v-model="basicWjxx.tjf" placeholder="请选择">
                                    <el-option label="偶尔痛经" value="偶尔痛经"></el-option>
                                    <el-option label="常常痛经" value="常常痛经"></el-option>
                                    <el-option label="一直痛经" value="一直痛经"></el-option>
                                    <el-option label="无异常" value="无异常"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.tjf_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="腰部不适">
                                 <el-select v-model="basicWjxx.ybbs" placeholder="请选择">
                                    <el-option label="否" value="否"></el-option>
                                    <el-option label="经前" value="经前"></el-option>
                                    <el-option label="经后" value="经后"></el-option>
                                    <el-option label="期间" value="期间"></el-option>
                                    <el-option label="经前、经期" value="经前、经期"></el-option>
                                    <el-option label="经前、经后" value="经前、经后"></el-option>
                                    <el-option label="经期、经后" value="经期、经后"></el-option>
                                    <el-option label="经前、经期、经后" value="经前、经期、经后"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.ybbs_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="腹部不适">
                                 <el-select v-model="basicWjxx.fbbs" placeholder="请选择">
                                    <el-option label="否" value="否"></el-option>
                                    <el-option label="经前" value="经前"></el-option>
                                    <el-option label="经后" value="经后"></el-option>
                                    <el-option label="期间" value="期间"></el-option>
                                    <el-option label="经前、经期" value="经前、经期"></el-option>
                                    <el-option label="经前、经后" value="经前、经后"></el-option>
                                    <el-option label="经期、经后" value="经期、经后"></el-option>
                                    <el-option label="经前、经期、经后" value="经前、经期、经后"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.fbbs_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="周期规律">
                            <el-select v-model="basicWjxx.zqgl" placeholder="请选择">
                                <el-option label="规律" value="规律"></el-option>
                                <el-option label="不规律" value="不规律"></el-option>
                                <el-option label="有时规律" value="有时规律"></el-option>
                                <el-option label="无异常" value="无异常"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.zqgl_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="乳房涨否">
                                 <el-select v-model="basicWjxx.ffzf" placeholder="请选择">
                                    <el-option label="否" value="否"></el-option>
                                    <el-option label="经前" value="经前"></el-option>
                                    <el-option label="经后" value="经后"></el-option>
                                    <el-option label="期间" value="期间"></el-option>
                                    <el-option label="经前、经期" value="经前、经期"></el-option>
                                    <el-option label="经前、经后" value="经前、经后"></el-option>
                                    <el-option label="经期、经后" value="经期、经后"></el-option>
                                    <el-option label="经前、经期、经后" value="经前、经期、经后"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.ffzf_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="头部不适">
                                 <el-select v-model="basicWjxx.tbbs" placeholder="请选择">
                                     <el-option label="否" value="否"></el-option>
                                    <el-option label="经前" value="经前"></el-option>
                                    <el-option label="经后" value="经后"></el-option>
                                    <el-option label="期间" value="期间"></el-option>
                                    <el-option label="经前、经期" value="经前、经期"></el-option>
                                    <el-option label="经前、经后" value="经前、经后"></el-option>
                                    <el-option label="经期、经后" value="经期、经后"></el-option>
                                    <el-option label="经前、经期、经后" value="经前、经期、经后"></el-option>
                                </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="basicWjxx.tbbs_remarks" placeholder="备注"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                     <el-col :span="8">
                         <el-form-item label="绝经否">
                                <el-radio-group v-model="basicWjxx.jjf">
                                    <el-radio label="是" value="是">是</el-radio>
                                    <el-radio label="否" value="否">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="绝经年龄">
                                <el-input v-model="basicWjxx.jjnl"></el-input>
                            </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="绝经原因">
                                <el-input v-model="basicWjxx.jjyy"></el-input>
                            </el-form-item>
                     </el-col>
                </el-row>
                <el-row>
                     <el-col :span="8">
                         <el-form-item label="倒经否">
                                <el-radio-group v-model="basicWjxx.djf">
                                    <el-radio label="是" value="是">是</el-radio>
                                    <el-radio label="否" value="否">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                     </el-col>
                </el-row>
                <el-row :gutter="20">
                     <el-form-item style="text-align:center;margin-top:40px;">
                         <el-button type="primary" @click="opencomfigMethod('是否提交问卷信息',onSubmit)" class="btn-default btn-blue" >保存</el-button>
                        <el-button type="primary" @click="gotoBlglpage" class="btn-default" >返回</el-button>
                    </el-form-item>
                </el-row>
            </div>
        </el-form>
    </div>
</template>
<style lang="scss">
  @import '../assets/css/wjxxpage.scss'
</style>

<script src="../assets/js/wjxxpage.js">
  
</script>
