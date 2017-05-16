import Vue from 'vue'
import Router from 'vue-router'
import Nav from './navigate'
import Login from './login'
import DataStaticBaseData from './app/dataStaticBaseData'
import EChartDemo from './app/eChartDemo'

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
      path: '/Sub/DataStaticBaseData',
      name: 'DataStaticBaseData',
      component: DataStaticBaseData,
      meta: { requiresAuth: true }
    },
    {
<<<<<<< HEAD
      path: '/EChartDemo',
      name: 'EChartDemo',
      component: EChartDemo,
=======
      path: '/Sub/NavLayout',
      name: 'NavLayout',
      component: NavLayoutDemo,
>>>>>>> 47c58e9bc46876d47edd0a563d8c9e8198377c98
      meta: { requiresAuth: true }
    }
  ]
})