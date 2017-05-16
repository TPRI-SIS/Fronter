import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-dark.css'
import $ from 'jquery'
import GoBack from './app/goBack'
import GridLayout from './ui/gridLayout'
import NavLayout from './ui/NavLayout'
import Scroll from './ui/scroll'
import Config from './apiDefine/config'

import Gesture from './ui/gesture'
import Screen from './ui/screen'
import router from './app/router'


import Ajax from './apiDefine/ajax'
import LocalStorage from  './apiDefine/localStorage'


Vue.use(MuseUI)

const components = {
  GoBack,
  GridLayout,
  NavLayout,
  Scroll,
  Gesture
}



export default {

  install: function (instance) {
   instance.prototype.$ajax=Ajax
   instance.prototype.$localStorage=LocalStorage
   instance.prototype.$screen=Screen


    Object.keys(components).forEach((key) => {
      instance.component(components[key].name, components[key])
    })
  },
  config: function (c) {
    for (var key in Config) {
      Config[key] = c[key]
    }
  },
  router:router
}
