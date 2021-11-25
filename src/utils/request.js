
/** axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
// import service from 'axios'
import axios from 'axios'
import QS from 'qs'
// import { Toast } from 'vant'
import router from '@/router'
import store from '../store/index'
let serviceConfig = 'http://localhost:8383'

let fkId =''


axios.defaults.baseURL = serviceConfig

axios.defaults.timeout = 12000

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


//请求拦截
axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error)
    }
)

//响应拦截
axios.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)


//封装get
export function get(url){

    //if (url.indexOf("jsonplaceholder.typicode.com"))

        if (window.sessionStorage.getItem('pkId') != null){
            fkId = '/' +window.sessionStorage.getItem('pkId') + ''

        }

    return new Promise((resolve, reject) => {
        axios.get(fkId +url)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

    //封装post
export function post(url, params)  {


        if (window.sessionStorage.getItem('pkId') != null){
            fkId = '/' +window.sessionStorage.getItem('pkId') + ''
        }

    // if ()
    return new Promise((resolve, reject) => {
        axios.post(fkId +url, params)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}