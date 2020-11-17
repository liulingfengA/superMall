
import axios from 'axios'


export function request(config) {

  //1. 创建axios实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',//远程接口
    timeout:5000
  })

  //2.axios拦截器
  //请求拦截
  instance.interceptors.request.use((success)=>{
    // console.log(success)
    return success
  },(err)=>{
    console.log(err)
  })


  //响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res.data
  },err=>{
    // console.log(err)
  })

  // 3.发送请求
  return instance(config)
}