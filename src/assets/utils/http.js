import axios from 'axios'
import qs from 'qs'
import store from '../../store'
import {Message, MessageBox} from 'element-ui'

// 测试地址
const API = {
    //问诊
    local:'http://127.0.0.1:8087',
    online:'http://127.0.0.1:8087'
}

//production 为生产环境
axios.defaults.baseURL = API.online;
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

//http request 拦截器（对发送的数据做提前处理）
axios.interceptors.request.use(
    config => {
      if(config.method!="get"){
        if(config.url == "/inquiry/getObjFromFile"){
          config.headers = {
            'Content-Type': 'multipart/form-data'
          }
        }else{
          //更改 post 的 content-type格式
          if(config.url == "/dataStatistics/getInquiryInfoList" || config.url == "/inquiry/newInquiry"){
            config.data = qs.stringify(config.data,{ arrayFormat: 'repeat' });
            config.headers = {
            'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
            }
          }else if(config.post_type && config.post_type == "nojson"){
              config.data = qs.stringify(config.data,{ arrayFormat: 'repeat' });
              config.headers = {
              'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
              }
          }else if(config.post_type && config.post_type == "json"){
              config.headers = {
                'Content-Type': 'application/json;charset=UTF-8'
              }
          }
          else if(config.post_type && config.post_type == "form-data"){
            config.headers = {
            'Content-Type': 'multipart/form-data'
            }
          }else{
              if(typeof(config.data)=="object"){
                 config.data = JSON.stringify(config.data);
              }
              config.headers = {
                'Content-Type': 'application/json;charset=UTF-8'
              }
          }
        }
      }else{
        config.data = qs.stringify(config.data);
        config.headers = {
          'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }
      console.log(config.data);
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

//http response 拦截器（对返回的数据做一些处理）
axios.interceptors.response.use(
    response => {
        if(response.status == 200){
            const res = response.data;
            if (res.code == '20011') {
              Message({
                showClose: true,
                message: "当前用户信息已失效，5秒后返回登录页面，请重新登录",
                type: 'error',
                duration: 5000,
                onClose: () => {
                  store.dispatch('FedLogOut').then(() => {
                    location.reload()// 为了重新实例化vue-router对象 避免bug
                  })
                }
              })
              return res;
            }else if (res.code == '502') {
              Message({
                showClose: true,
                message: "该用户已被最新登陆用户覆盖，5秒后回到最新登录用户的首页",
                type: 'error',
                duration: 5000,
                onClose: () => {
                  store.dispatch('LogOutNoPermission' ).then(() => {
                    console.log("已经出现警告")

                  })
                }
              })
              return null;
            }
            return res;
        }
    },
    error => {
        return Promise.reject("与服务器断开连接")
    }
)
