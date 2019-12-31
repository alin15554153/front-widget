import Vue from 'vue'
import App from './navigation.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
new Vue({
  render: h => h(App)
}).$mount('#navigation')
