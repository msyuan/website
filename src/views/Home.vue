<template>
  <Layout>
    <div class="ui-content">
      <h1 :class="classObj">首页</h1>
      <section class="ui-box section1">
        <div class="main">
          <h3 class="animate__animated animate__bounce">2016年美丽的太子湾公园，传说中的圣地之旅</h3>
        </div>
      </section>
      <section class="ui-box section2">
        <div class="main">
          <h3 class="animate__animated animate__bounce">2016年美丽的太子湾公园，传说中的圣地之旅</h3>
        </div>
      </section>
      <section class="ui-box section3">
        <div class="main">
          <h3 class="animate__animated animate__bounce">2016年美丽的太子湾公园，传说中的圣地之旅</h3>
        </div>
      </section>
      <section class="ui-box section4">
        <div class="main">
          <h3 class="animate__animated animate__bounce">2016年美丽的太子湾公园，传说中的圣地之旅</h3>
        </div>
      </section>
      <section class="ui-box section5">
        <div class="main">
          <h3 class="animate__animated animate__bounce">2016年美丽的太子湾公园，传说中的圣地之旅</h3>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import { userLogin } from '@/service/user'
export default {
  name: 'Home',
  data () {
    return {
      isActive: false,
      isError: true
    }
  },
  computed: {
    classObj () {
      return {
        active: (this.isActive && this.isError),
        'error-color': this.isError
      }
    }
  },
  created () {

  },
  methods: {
    // 请求方法
    componentDidMount() {
      console.log("是否运行了")
      let data = {
        phone: '',
        password: '111111'
      }
      userLogin(data).then(resp => {
        console.log(resp)
        this.$store.dispatch('Login', resp.user)
      })
    },
    test () {
      console.log('点击了')
    }
  }
}
</script>
<style lang='less' scoped>
  .error-color{
    color: #f60;
  }
  .ui-box{
    width: 100%;
    height: 400px;
    color: #fff;
    h3{
      padding-top: 50px;
    }
  }
  .section1{
    background: rgb(116, 175, 243);
  }
  .section2{
    background: rgb(0, 203, 211);
  }
  .section3{
    background: rgb(255, 104, 104);
  }
  .section4{
    background: rgb(219, 94, 157);
  }
  .section5{
    background: rgb(228, 171, 41);
  }
</style>
