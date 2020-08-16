/*
 * @Description: 
 * @Author: your name
 * @Date: 2020-08-10 15:56:23
 * @LastEditTime: 2020-08-15 11:05:19
 * @LastEditors: Please set LastEditors
 * @FilePath: \web-site\src\service\user.js
 */
import { POST } from './request'
import API from './api'


// 登陆
export const userLogin = (param) => {
  return POST(API.yuan_login, param)
}