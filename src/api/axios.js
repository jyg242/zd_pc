import axios from 'axios'
import { baseURL } from './config'
import { getToken } from './auth';

let service = axios.create({
    baseURL: baseURL,  //api的base_url
    timeout: 5000,//request timeout
    header: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    withcredentials: true //跨域携带 cookie了
})
//请求拦截
service.interceptors.request.use(
    config => {
        if (true) {
            config.headers['x-Token'] = getToken()
        }
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)
//响应拦截
service.interceptors.response.use(
    response => response,
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)
export default service;