/**
 * 能发送异步ajax请求的函数模块
 * 封装axios库
 */

import axios from 'axios'
import { message } from 'antd'
const baseUrl = 'http://localhost:3000'
export default function ajax (url, data={}, method="GET") {
  // 执行异步ajax请求
  return new Promise((resolve, reject) => {
    let promise
    if (method === 'GET') {
      promise = axios.get(baseUrl + url, {
        params: data
      })
    } else {
      promise = axios.post(baseUrl + url, data)
    }

    // 如果成功了 调用resolve
    promise.then(res => {
      resolve(res)
    }).catch(err => {
      console.log(err)
      message.error(err.message)
    })
  })
}
