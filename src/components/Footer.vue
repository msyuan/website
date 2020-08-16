<template>
  <div class="footer-box">
    <p>Copyright© 2020 xxxxx信息科技有限公司 版权所有   备案号：<a href="http://www.beian.miit.gov.cn" target="_blank">浙江ICP备xxxxxx</a></p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  },
  data () {
    return {
      title: '底部公用组件'
    }
  }
}
</script>

<style scoped lang="less">
  .footer-box{
    width: 100%;
    height: 70px;
    background: #334259;
    color: #fff;
    font-size: 16px;
    line-height: 70px;
    a{
      color: #fff;
      text-decoration: none;
      &:hover{
        color: #f60;
      }
    }
  }
</style>
