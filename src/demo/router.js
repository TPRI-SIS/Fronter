import Vue from 'vue'
import Router from 'vue-router'
import Nav from './navigate'
import Login from './login'
import LifeCicle from './app/lifeCicle'
import DataStaticBaseData from './app/dataStaticBaseData'
import EChartDemo from './app/eChartDemo'
import NavLayoutDemo from './app/navLayoutDemo'
<<<<<<< HEAD
import GridList from './app/gridList'
=======
import StackLayoutDemo from './app/stackLayoutDemo'

>>>>>>> 4f4b9ad0ca7ee70ffaa8d4300f5a463218d124bd

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
    },
    {
<<<<<<< HEAD
      path: '/Sub/GridList',
      name: 'GridList',
      component: GridList,
=======
      path: '/Sub/StackLayoutDemo',
      name: 'StackLayoutDemo',
      component: StackLayoutDemo,
>>>>>>> 4f4b9ad0ca7ee70ffaa8d4300f5a463218d124bd

      meta: { requiresAuth: true }
    }
  ]
})