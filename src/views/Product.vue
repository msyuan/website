<template>
  <Layout>
    <div class="ui-content">
      <h1>{{title}}</h1>
      <div>这里写页面内容</div>
    </div>
  </Layout>
</template>
<script>
export default {
  name: 'Product',
  data () {
    return {
      title: '运营产品'
    }
  }
}
</script>