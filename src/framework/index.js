import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import './ui/main.css'
import 'animate.css'
import Jquery from 'jquery'
import GoBack from './app/goBack'
import GridLayout from './ui/gridLayout'
import NavLayout from './ui/NavLayout'
import StackLayout from './ui/stackLayout'
import PageLayout from './ui/pageLayout'
import Scroll from './ui/scroll'
import VueEchart from './ui/VueEchart'
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
  StackLayout,
  PageLayout,
  Scroll,
  Gesture,
  VueEchart
}



export default {

  install: function (instance) {
   window.$ajax=Ajax
   window.$localStorage=LocalStorage
   window.$screen=Screen

   window.$=Jquery


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
