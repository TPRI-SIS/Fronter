import Vue from 'vue'
import Router from 'vue-router'
import Nav from './navigate'
import Login from './login'
import LifeCicle from './app/lifeCicle'
import DataStaticBaseData from './app/dataStaticBaseData'
import EChartDemo from './app/eChartDemo'
import NavLayoutDemo from './app/navLayoutDemo'
import CollectionLayoutDemo from './app/collectionLayoutDemo'
import StackLayoutDemo from './app/stackLayoutDemo'
import PageLayoutDemo from './app/pageLayoutDemo'

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
      path: '/Sub/NavLayoutDemo',
      name: 'NavLayoutDemo',
      component: NavLayoutDemo,

      meta: { requiresAuth: true }
    },
    {
      path: '/Sub/CollectionLayoutDemo',
      name: 'CollectionLayoutDemo',
      component: CollectionLayoutDemo,
    },
    {
      path: '/Sub/StackLayoutDemo',
      name: 'StackLayoutDemo',
      component: StackLayoutDemo,


      meta: { requiresAuth: true }
    },
    {
      path: '/Sub/PageLayoutDemo',
      name: 'PageLayoutDemo',
      component: PageLayoutDemo,


      meta: { requiresAuth: true }
    }
  ]
})