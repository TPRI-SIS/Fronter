import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-dark.css'
import $ from 'jquery'
import GoBack from './app/goBack'
import GridLayout from './ui/gridLayout'
import Scroll from './ui/scroll'
import Config from './apiDefine/config'
import Ajax from './apiDefine/ajax'
import Gesture from './ui/gesture'


Vue.use(MuseUI)

const components = {
  GoBack,
  GridLayout,
  Scroll,
  Gesture
}




export default {

  install: function (instance) {
   instance.prototype.$ajax=Ajax

    Object.keys(components).forEach((key) => {
      console.log(components[key])
      instance.component(components[key].name, components[key])
    })
  },
  config: function (c) {
    console.log(Config)
    for (var key in Config) {
      Config[key] = c[key]
    }
  }
}
