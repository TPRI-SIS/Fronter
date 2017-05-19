import Vue from 'vue'
import Router from 'vue-router'
import Nav from './navigate'
import Login from './login'
import LifeCicle from './app/lifeCicle'
import DataStaticBaseData from './app/dataStaticBaseData'
import EChartDemo from './app/eChartDemo'
import NavLayoutDemo from './app/navLayoutDemo'


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
      path: '/Sub/LifeCicle',
      name: 'LifeCicle',
      component: LifeCicle,
      meta: { requiresAuth: true }
    },
    {

      path: '/Sub/EChartDemo',
      name: 'EChartDemo',
      component: EChartDemo,
    },
    {
      path: '/Sub/NavLayout',
      name: 'NavLayout',
      component: NavLayoutDemo,

      meta: { requiresAuth: true }
    }
  ]
})