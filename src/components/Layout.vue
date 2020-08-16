<template>
  <!-- 布局组件  -->
  <div class="ui-layout">
    <div class="ui-header">
      <Header></Header>
    </div>
    <div class="ui-main">
      <slot></slot>
    </div>
    <div class="ui-footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped lang='less'>
  .ui-layout{
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-between;
    -webkit-box-orient:vertical;
    flex-direction: column;
    .ui-main{
      flex:1;
      width:100%;
    }
  }
</style>