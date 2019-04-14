import {removeToken, setToken} from "../assets/utils/Cookie";
import router from "../router";
import store from "./index";
import axios from 'axios';

export const changeUserInfo = ({commit},payload) => {
  commit('mutationsUser',payload);
};
export const changePlaceData = ({commit},payload) => {
  commit('mutationsPlace',payload);
};
// 缓存当前页面的参数，
export const setPathParams = ({commit},payload) => {
  commit('setPathParams',payload);
};
//清空当前页面已缓存数据
export const clearPathParams = ({commit},payload) => {
  commit('clearPathParams',payload);
};
// 缓存当前父页面的参数，
export const setPrePathParams = ({commit},payload) => {
  commit('setPrePathParams',payload);
};
export const clearPrePathParams = ({commit},payload) => {
  commit('clearPrePathParams',payload);
};
// 登录
export  const Login =({commit, state}, ruleForm) => {
  return new Promise((resolve, reject) => {
    axios.post(
      '/index/login',ruleForm)
      .then(response => {
      if (response.code == 1) {
        //cookie中保存前端登录状态
        setToken();
      }
      resolve(response);
    }).catch(err => {
      reject(err)
    })
  })
};

// 登出
export const LogOut = ({commit}) => {
  return new Promise((resolve) => {
    axios.get(
      '/index/logout').then(response => {
      removeToken()
      resolve(response);
    }).catch(() => {
      removeToken()
    })
  })
};
// 前端 登出
export const FedLogOut = ({commit}) =>{
  return new Promise(resolve => {
    commit('RESET_USER')
    removeToken()
    resolve()
  })
};
export const depositrole = ({commit},payload) =>{
  commit('roleuser',payload);
}
export const depositname = ({commit},payload) =>{
  commit('rolename',payload)
}
export const depositnickname = ({commit},payload) =>{
  commit('nickname',payload)
}
