import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue'
import './style/common.less'
import animated from 'animate.css'
Vue.use(animated)

Vue.config.productionTip = false

Vue.component('Layout', Layout)

// Vue.config.silent = true

Vue.config.performance = true




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
