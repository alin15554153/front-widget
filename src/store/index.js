import Vue from 'vue'
import Vuex from 'vuex'
import cvmapPage from './modules/cvmapPage'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cvmapPage
  },
  getters
})

export default store
