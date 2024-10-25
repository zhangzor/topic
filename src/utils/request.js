import axios from 'axios'
import { showLoadingToast } from 'vant'
import router from '@/router'

// 对象枚举类型：定义命名常量集合的数据类型
let CodeEnum = {
  success: 200, // 成功
  error: 1000, // 异常
  effe: 10000, // 退出登录
  effe500: 500
}

// 创建axios
const request = axios.create({
  // 配置公共请求地址
  // baseURL: 'https://tst-wxapi.scachealth.com/api'
  // baseURL: 'https://wxapi.scachealth.com/api'
  baseURL: process.env.VUE_APP_BASE_API,
  // timeout: 5000
  // 'multipart/form-data'
  // headers: { 'Content-Type': 'application/json' }
})
// 添加一个请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('main')
    JSON.parse(token)?.token &&
      (config.headers.Authorization = `Bearer ${JSON.parse(token)?.token}`)
    config.headers.platformId = 2
    config.headers.userId = JSON.parse(token)?.userInfo.id
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加一个响应拦截器
request.interceptors.response.use(
  (res) => {
    // 自定义处理
    if (res.data.code === CodeEnum.effe) {
      // 清除登录信息，退出登录等处理
      showLoadingToast({
        message: res.data.msg,
        forbidClick: true
      })
      window.localStorage.clear()
      router.push('/login')
      return false
    }

    if (res.status === CodeEnum.success) {
      return res.data
    }
    if (res.data.code === CodeEnum.effe500) {
      showLoadingToast({
        message: '网络超时，请重新登陆！',
        forbidClick: true
      })
    }
  },
  (error) => {
    // 响应错误
    return Promise.reject(error)
  }
)

export default request
