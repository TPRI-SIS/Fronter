import Vue from 'vue'
import App from './app'
import router from './router'
import framework from '../framework'


//配置使用哪种系统的API
framework.config(
  {
    ajax: 'browers'
  }
)


//加载框架
Vue.use(framework)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})