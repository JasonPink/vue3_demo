import axios from 'axios';
import qs from 'qs';
import baseConfig from './base'

function getToken() {
  //获取token
}

const service = axios.create({
  baseUrl: baseConfig.url,
  timeout: baseConfig.timeout
})

//请求拦截器
service.interceptors.request.use(
  config => {
    if(store.getter.token) {
      config.header['X-Toke'] = getToken()
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }
)
//响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if(res.code ! === 200) { //响应失败
       return Promise.reject(res)
    }else{
       return Promise.resolve(res)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
