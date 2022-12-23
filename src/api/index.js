/**
 * 包含应用中所有接口请求
 */
import { message } from 'antd'
import jsonp from 'jsonp'
import ajax from './ajax'
import axios from 'axios'

// 登录
export function reqLogin (data) {
  return ajax('/login', data, 'POST')
}

// 添加用户
export function reqAddUser (data) {
  return ajax('/manage/user/add', data, 'POST')
}

// jsonp 请求的接口请求函数
export function reqWeather (city) {
  return new Promise((resolve, reject) => {
    const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    jsonp(url, {}, (err, data) => {
      console.log(err, data);
      if (!err && data.status == 'success') {
        const { dayPicuteUrl, weather } = data.result[0].weather_data[0]
        resolve({ dayPicuteUrl, weather })
      } else {
        message.error('获取天气信息失败')
      }
    })
  })
}

// 获取一级或某个耳机分类列表
export function reqCategoryList (data) {
  return ajax('/manage/category/list', data)
}

// 添加分类
export function reqCategoryAdd (data) {
  return ajax('/manage/category/add', data, 'POST')
}

// 更新品类名称
export function reqCategoryUpdate (data) {
  return ajax('/manage/category/update', data, 'POST')
}