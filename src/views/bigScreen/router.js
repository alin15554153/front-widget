import Vue from 'vue'
import VueRouter from 'vue-router'
import bigScreen from './bigScreen.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'bigScreen',
    component: bigScreen,
    meta: { title: 'bigScreen' }
  }
]

export default new VueRouter({
  routes: routes
})
