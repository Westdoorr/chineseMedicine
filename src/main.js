// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import App from './App'
import router from './router'
import store from './store/index'
//引入axios
import axios from 'axios'
import '../src/assets/utils/http.js'
//引入公共部分js
import common from '../src/assets/utils/common.js'
//引入打印插件
import Print from '../src/assets/utils/print.js'
//引入表格打印
import tablePrint from '../src/assets/utils/tablePrint.js'
//引入病历打印
import exportPrint from '../src/assets/utils/exportPrint.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new
   全局注册
*/
Vue.use(ElementUI)
//注册打印插件
Vue.prototype.$Print= Print;
//注册table 打印插件
Vue.prototype.$tablePrint = tablePrint;
Vue.prototype.$exportPrint = exportPrint;
//定义全局变量
Vue.prototype.$http= axios;
//定义全局属性给公共部分js
Vue.prototype.$common = common;

// // //全局守卫
// router.beforeEach((to, from, next) => {
//   // console.log(to)
//   // console.log(from)
//   // console.log(next)
//   if(to.path == "/Index/bryfpage"){
//      console.log("你正在进入药方界面")
//      this.showPriseP = false
//     console.log(this.showPriseP )
//      next();
//   }else {
//     next();
//   }
// })


var gc = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
