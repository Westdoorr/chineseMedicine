import Cookies from 'js-cookie'

export function setExportToken(uuid) {
  return Cookies.set(uuid, true,{expires:1})
}
//设置为false，以标识当前导出已被前端取消
export function removeExportToken(uuid) {
  return Cookies.set(uuid,false,{expires:new Date(new Date().getTime() + 1 * 60 * 1000)})
}
