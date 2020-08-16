//接口基本地址
let baseURL = ''
if (process.env.NODE_ENV === 'development') {
  baseURL = ''
}else if (process.env.NODE_ENV === 'production') {
  baseURL = ''
}else{
  baseURL = ''
}

export default baseURL