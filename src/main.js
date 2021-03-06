// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import layui from 'vue-lay'

import 'vue-lay/lib/vue-lay.css'
// import '@/assets/css/style.css'

Vue.config.productionTip = false

Vue.use(layui)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>'
}).$mount('#app')
