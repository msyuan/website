/*
 * @Description: 
 * @Author: your name
 * @Date: 2020-08-15 11:45:52
 * @LastEditTime: 2020-08-16 09:20:25
 * @LastEditors: Please set LastEditors
 * @FilePath: \website\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const Product = () => import('@/views/Product.vue')
const CompanyStyle = () => import('@/views/CompanyStyle.vue')
const NewList = () => import('@/views/NewList.vue')
const Contact = () => import('@/views/Contact.vue')
const Login = () => import('@/views/Login.vue')
const Register = () => import('@/views/Register.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: {
      title: '运营产品'
    }
  },
  {
    path: '/companyStyle',
    name: 'CompanyStyle',
    component: CompanyStyle,
    meta: {
      title: '公司风采'
    }
  },
  {
    path: '/newList',
    name: 'NewList',
    component: NewList,
    meta: {
      title: '公司动态 '
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: '联系我们'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登陆'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
