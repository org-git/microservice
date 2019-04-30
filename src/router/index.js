import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '/',
    // redirect: '/console',
    component: resolve => require(['@/views/layout'], resolve)
  }, {
    path: 'console',
    name: 'console',
    redirect: 'console/dashboard',
    component: resolve => require(['@/views/console/layout'], resolve),
    meta: {},
    children: [{
      path: 'dashboard',
      name: 'console-dashboard',
      component: resolve => require(['@/views/console/dashboard'], resolve),
      meta: {
        auth: true
      }
    }]
  }]
})
