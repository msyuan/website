<template>
  <!-- 头部公共组件 -->
  <div class="header-box">
    <div id="nav" class="main">
      <img src="../assets/logo.png" class="logo" alt="logo" />
      <div class="nav-list">
        <router-link exact-active-class='active' class="item" to="/">首页</router-link>
        <router-link exact-active-class='active' class="item" to="/product">运营产品</router-link>
        <router-link exact-active-class='active' class="item" to="/companyStyle">公司风采</router-link>
        <router-link exact-active-class='active' class="item" to="/newList">公司动态</router-link>
        <router-link exact-active-class='active' class="item" to="/about">关于我们</router-link>
        <router-link exact-active-class='active' class="item" to="/contact">联系我们</router-link>
      </div>
      <div class="user-bar">
        <span class="item">{{userName}}</span>
        <router-link class="item" to="/register">注册</router-link>
        <router-link class="item" to="/login">登陆</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      userName: ''   // 用户名字
    }
  },
  created () {
    this.userName = this.$store.state.user.name
  }
}
</script>
<style scoped lang="less">
  .header-box{
    width: 100%;
  }
  .main{
    width: 1200px;
    margin: 0 auto;
  }
 
  #nav{
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    .logo{
      width: 50px;
      height: 50px;
      margin-top: 15px;
      // float: left;
    }
    .nav-list{
      // float: right;
      height: 80px;
      .item{
        width: 100px;
        margin-right: 50px;
        position: relative;
        text-decoration: none;
        color: #333;
        text-align: center;
        &::after{
          content: '';
          position: absolute;
          left: 50%;
          bottom: -15px;
          width: 1px;
          height: 2px;
          background: #ff4f81;
          transform: translateX(-150%);
          -webkit-transform: translateX(-150%);
        }
      }
      .item:hover{
        color: #ff4f81;
        text-decoration: none;
        &::after{
          width: 60px;
          transition: transform .3s ease;
          transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
        }
      }
      .active{
        color: #ff4f81;
      }
    }
    .user-bar{
      font-size: 16px;
      .item{
        margin-left: 35px;
        color: #333;
        text-decoration: none;
      }
    }
  }
</style>
