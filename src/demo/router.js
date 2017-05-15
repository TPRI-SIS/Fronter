import Vue from 'vue'
import Router from 'vue-router'
import Nav from './navigate'
import Login from './login'
import DataStaticBaseData from './app/dataStaticBaseData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Nav',
      name: 'Nav',
      component: Nav,
      meta: { requiresAuth: true }
    },
    {
      path: '/DataStaticBaseData',
      name: 'DataStaticBaseData',
      component: DataStaticBaseData,
      meta: { requiresAuth: true }
    }
  ]
})