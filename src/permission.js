import router from './router/index'
import store from './store/index'
import {getToken} from './assets/utils/Cookie' // 验权
const whiteList = ['/Login', '/404'] //白名单,不需要登录的路由
router.beforeEach((to, from, next) => {
  if (getToken()) {
    //如果已经登录
    if (to.path === '/Login') {
      var role = window.localStorage.getItem("role")
      console.log("role="+role);
      if (role == 1) {
        console.log("进入用户管理首页")
        next({path: '/xindex/yhglpage'})
      }else {
        console.log("执行到这里")
        next({path:'/Index/xjczbr'})
      }

    } else {
      next()
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    //如果前往的路径是白名单内的,就可以直接前往
    next()
  } else {
    //如果路径不是白名单内的,而且又没有登录,就跳转登录页面
    next('/Login')
  }
})
