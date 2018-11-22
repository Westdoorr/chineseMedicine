
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