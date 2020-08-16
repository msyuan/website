import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '哈哈'
    }
  },
  mutations: {
    login_success(state, user) {
      state.user = user
    }
  },
  actions: {
    Login({commit}, user) {
      commit('login_success', user)
    }
  },
  modules: {
  }
})
