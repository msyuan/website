import axios from 'axios'
import baseURL from './baseUrl'


//错误信息
const errorStatus = (status) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误'
      break
    case 404:
      message = '不好意思，请求资料没找到'
      break
    case 500:
      message = '服务器错误'
      break
    case 504:
      message = '网络超时(504)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}

//创建axios实例
export const service = axios.create({
  timeout: 10000,  //请求超时
  baseURL: baseURL //api的基本地址
})


//请求拦截器
service.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  // 添加全局的loading...
  var userId = '';  // getUserId()
  var token = '';   // getToken()
  // 通过登录或者注册接口成功后，会返回一个token数据，以后每个接口header都加token，用来判断是否登录
  if (token) {
    config.headers['authToken'] = token;
  }
  if (userId) {
    config.headers['userId'] = userId;
  }
  //通过qs将传给后台的数据格式设置为form格式
  if (config.method === 'post') {
    //config.data = qs.stringify(config.data);
    config.headers.post['Content-Type'] = 'application/json;charset=utf-8'
  }
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use((response) => {
  // 对响应数据做点什么
  const { data, status } = response
  if (status === 200) {
    // 通过登录或者注册接口以后会返回一个token和userid值，存储到本地cookie里面
    // if (data.token) {
    //   setToken(data.token)
    // }
    // if (data.userId) {
    //   setUserId(data.userId)
    // }
    return data
  } else {
    // 处理http错误，抛到业务代码
    let msg = errorStatus(status)
    if (typeof response.data === 'string') {
      response.data = { msg }
    } else {
      response.data.msg = msg
    }
  }
  return Promise.reject(response)
}, (error) => {
  // 对响应错误做点什么
  // 错误抛到业务代码
  error.data = {}
  error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
  return Promise.resolve(error)
})

/**
 * post方法，对应post请求
 * @param { String } url [请求的url地址]
 * @param { Object } params [请求时携带的参数]
 */
export const POST = (url, params) =>{
  return service.post(url, params)
}

/**
 * get方法，对应get请求
 * @param { String } url [请求的url地址]
 * @param { Object } params [请求时携带的参数]
 */
export const GET = (url, params) => {
  return service.get(url, { params })
}