<template>
  <Layout>
    <div class="ui-content">
      <h1 class="title">{{title}}</h1>
      <div>这里写页面内容</div>
    </div>
  </Layout>
</template>
<script>
export default {
  name: 'CompanyStyle',
  data () {
    return {
      title: '公司风采'
    }
  }
}
</script>
<style scoped lang='less'>
  .title{
    color: #ff4f81;
  }
</style>