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
  name: 'Contact',
  data () {
    return {
      title: '联系我们'
    }
  }
}
</script>