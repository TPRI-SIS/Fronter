import Vue from 'vue'
import App from './app'
import router from './router'
import framework from '../framework'



//配置使用哪种系统的API
framework.config(
  {
    ajax: 'browers',
    localStorage:'browers',
    geo:'browers'
  }
)


//加载框架
Vue.use(framework)


//初始化路由系统
framework.router.init(router)


/* eslint-disable no-new */
var instance=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})




