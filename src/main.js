require('./bootstrap')
require('./plugins/index')
import Vue from 'vue'
import BaseTemplate from './layouts/BaseTemplate'
import router from './routes/index'
import store from './store'

Vue.config.productionTip = false

/**
 * Components Globals
 */
Vue.component('preloader-component', () => import('./components/Preloader'))

new Vue({
  render: h => h(BaseTemplate),
  router,
  store
}).$mount('#app')
