import Vue from 'vue'
import Vuex from 'vuex'
import tinylabs from './modules/tinylabs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tinylabs,
  },
})
