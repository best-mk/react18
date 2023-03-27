import { history } from './history'
import axios from 'axios'
const http = axios.create({
  baseURL: '请求统一地址',
  timeout: 5000 //请求超时时间
})
http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response.status === 401) {
      // 跳转到登录页
      history.push('/login')
    }
    return Promise.reject(error)
  }
)