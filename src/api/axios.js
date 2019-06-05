import axios from 'axios'
import { baseURL } from './config'
import { getToken } from './auth';
// axios.defaults.baseURL = '/api/'
// let self=this
let service = axios.create({
    baseURL: '/api/',  //api的base_url
    timeout: 5000,//request timeout
    header: {
        'content-type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true //跨域携带 cookie了
})
//请求拦截
service.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers.common['Authorization'] = 'Bearer ' + token;
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
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '错误请求'
                    // this.$message.error('错误请求')
                    break;
                case 401:
                    // console.log('未授权，请重新登录')
                    alert('登录超时，请重新登录')
                    // err.message = '未授权，请重新登录'
                    // $message.error('登录超时，请重新登录') 
                    break;
                case 403:
                    err.message = '拒绝访问'
                    break;
                case 404:
                    err.message = '请求错误,未找到该资源'
                    break;
                case 405:
                    err.message = '请求方法未允许'
                    break;
                case 408:
                    err.message = '请求超时'
                    break;
                case 500:
                    err.message = '服务器端出错'
                    break;
                case 501:
                    err.message = '网络未实现'
                    break;
                case 502:
                    err.message = '网络错误'
                    break;
                case 503:
                    err.message = '服务不可用'
                    break;
                case 504:
                    err.message = '网络超时'
                    break;
                case 505:
                    err.message = 'http版本不支持该请求'
                    break;
                default:
                    err.message = `连接错误${err.response.status}`
            }
        } else {
            err.message = "连接到服务器失败"
        }
        message.err(err.message)
        return Promise.resolve(err.response)
    })
export default service;