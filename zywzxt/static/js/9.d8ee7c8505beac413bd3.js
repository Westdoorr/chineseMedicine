webpackJsonp([9],{"+b1K":function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("yh9t"),n=e.n(s),r=e("V7lh"),i=e.n(r),m=e("ONhW"),o=e.n(m),c={data:function(){return{Logo:n.a,qrcode:i.a,titleImg:o.a,printData:{pName:"杨光平",gender:"男",age:34,address:"四川成都",date:"2018-12-12"},mainReList:[{isStock:!0,amount:20,remark:"后用，与主方同用",mainMeList:[{name:"制白附子",dose:20,remark:"另包，先煮2小时"},{name:"生蒲黄",dose:20,remark:"纱布包煎"},{name:"阿胶",dose:20,remark:"纱布包煎"},{name:"黄芪",dose:20,remark:""},{name:"中药名称",dose:12,remark:""},{name:"中药名称",dose:12,remark:""},{name:"中药名称",dose:12,remark:""},{name:"五中药名称",dose:12,remark:""},{name:"土三七",dose:12,remark:""},{name:"土三七",dose:12,remark:""},{name:"土三七",dose:12,remark:""},{name:"土三七",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""}],viceReList:[{isStock:!0,amount:20,remark:"后用，与主方同用",viceMeList:[{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""}]},{isStock:!0,amount:20,remark:"后用，与主方同用",viceMeList:[{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""}]},{isStock:!0,amount:20,remark:"后用，与主方同用",viceMeList:[{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"桂枝",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""},{name:"党参",dose:12,remark:""}]}]}]}},computed:{year:function(){return this.printData.date.split("-")[0]},month:function(){return this.printData.date.split("-")[1]},day:function(){return this.printData.date.split("-")[2]}},created:function(){},watch:{},methods:{createPdf:function(){var a=window.open("_blank"),t=document.getElementById("pdf-wrap").innerHTML;return a.document.write(t),a.document.close(),a.print(),!0},createPfStr:function(){},getListHeight:function(){for(var a=this.mainReList,t=0,e=0;e<a.lenght;e++){var s=Math.ceil(a.mainMeList/4);a.viceMeList.lenght;t+=44+53*s;for(var n=0;n<a.viceMeList.lenght;n++){if((t+=44+53*Math.ceil(a.viceMeList[n]/4))>760)return!1}if(t>760)return!1}}}},d={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"print-container"},[e("div",{staticClass:"print-header-container"},[e("div",{staticClass:"print-img-container"},[e("img",{attrs:{src:a.titleImg,width:"441",height:"44"}})]),a._v(" "),e("div",{staticClass:"print-br-info"},[e("div",{staticClass:"br-info-item"},[e("span",{staticClass:"label-tag"},[a._v("姓名")]),a._v(" "),e("span",{staticClass:"font-content"},[a._v(a._s(a.printData.pName))])]),a._v(" "),e("div",{staticClass:"br-info-item"},[e("span",{staticClass:"label-tag"},[a._v("性别")]),a._v(" "),e("span",{staticClass:"font-content"},[a._v(a._s(a.printData.gender))])]),a._v(" "),e("div",{staticClass:"br-info-item"},[e("span",{staticClass:"label-tag"},[a._v("年龄")]),a._v(" "),e("span",{staticClass:"font-content"},[a._v(a._s(a.printData.age))])]),a._v(" "),e("div",{staticClass:"br-info-item"},[e("span",{staticClass:"font-content"},[a._v(a._s(a.printData.address))])]),a._v(" "),e("div",{staticClass:"br-info-item"},[e("span",{staticClass:"font-content"},[a._v(a._s(a.year))]),a._v(" "),e("span",{staticClass:"font-color-red"},[a._v("年")]),a._v(" "),e("span",{staticClass:"font-content"},[a._v(a._s(a.month))]),a._v(" "),e("span",{staticClass:"font-color-red"},[a._v("月")]),a._v(" "),e("span",{staticClass:"font-content"},[a._v(a._s(a.day))]),a._v(" "),e("span",{staticClass:"font-color-red"},[a._v("天")])])])]),a._v(" "),e("div",{staticClass:"print-info-container"},a._l(a.mainReList,function(t,s){return e("div",{key:s},[e("div",{staticClass:"yf-item"},[e("div",{staticClass:"yw-title"},[a._v("\n                    主方"+a._s(t.remark&&""!=t.remark?"（"+t.remark+"）":"")+"\n                ")]),a._v(" "),e("div",{staticClass:"yw-list"},a._l(t.mainMeList,function(t,s){return e("div",{key:s,staticClass:"yw-item"},[e("span",{staticClass:"yw-bz"},[a._v(a._s(t.remark&&""!=t.remark?"（"+t.remark+"）":""))]),a._v(" "),e("span",{staticClass:"yw-name"},[a._v(a._s(t.name&&""!=t.name?t.name+" "+t.dose+"g":""))])])}))]),a._v(" "),a._l(t.viceReList,function(t,s){return e("div",{key:s,staticClass:"yf-item"},[e("div",{staticClass:"yw-title"},[a._v("\n                  副方"+a._s("零一二三四五六七八九".charAt(s+1)+(t.remark&&""!=t.remark?"（"+t.remark+"）":""))+"\n              ")]),a._v(" "),e("div",{staticClass:"yw-list"},a._l(t.viceMeList,function(t,s){return e("div",{key:s,staticClass:"yw-item"},[e("span",{staticClass:"yw-bz"},[a._v(a._s(t.remark&&""!=t.remark?"（"+t.remark+"）":""))]),a._v(" "),e("span",{staticClass:"yw-name"},[a._v(a._s(t.name&&""!=t.name?t.name+" "+t.dose+"g":""))])])}))])})],2)})),a._v(" "),e("div",{staticClass:"print-foot-container"},[a._m(0),a._v(" "),e("div",{staticClass:"seconed-foot-item"},[e("div",{staticClass:"logo-img-container"},[e("img",{attrs:{src:a.qrcode,width:"126",height:"125"}}),a._v(" "),e("img",{attrs:{src:a.Logo,width:"135",height:"135"}})]),a._v(" "),a._m(1)])])])])},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"frist-foot-item"},[e("div",[e("span",{staticClass:"label-tag"},[a._v("处方医师")]),a._v(" "),e("span",{staticClass:"underline"})]),a._v(" "),e("div",[e("span",{staticClass:"label-tag"},[a._v("调配")]),a._v(" "),e("span",{staticClass:"yf-underline"},[a._v("60")]),a._v(" "),e("span",{staticClass:"font-color-red"},[a._v("付")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"attention"},[e("div",{staticClass:"attention-frist"},[e("div",{staticClass:"attention-li"},[a._v("1、每张处方仅限患者本人用药；")]),a._v(" "),e("div",{staticClass:"attention-li"},[a._v("2、一天一副药，一天三次，服用时请加热；")]),a._v(" "),e("div",{staticClass:"attention-li"},[a._v("3、服药期间如有任何疑问，请及时咨询医师；")]),a._v(" "),e("div",{staticClass:"attention-li"},[a._v("4、药物服用完后，请勿自行继续服用原方；")])]),a._v(" "),e("div",{staticClass:"attention-li attention-address"},[a._v("\n                      地址：成都市武侯区丽都路2号附17号  短信预约电话：18010601111\n                  ")])])}]};var v=e("VU/8")(c,d,!1,function(a){e("NkzP")},"data-v-68c40b36",null);t.default=v.exports},NkzP:function(a,t){}});
//# sourceMappingURL=9.d8ee7c8505beac413bd3.js.map