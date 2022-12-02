/**
 * 包含应用中所有接口请求
 */
import ajax from './ajax'

// 登录
export function reqLogin (data) {
  return ajax('/login', data, 'POST')
}

// 添加用户
export function reqAddUser (data) {
  return ajax('/manage/user/add', data, 'POST')
}