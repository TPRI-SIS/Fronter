import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import './ui/main.css'
import 'animate.css'
import Jquery from 'jquery'
import GoBack from './app/goBack'
import VueEchart from './app/VueEchart'
import Card from './ui/card'


import GridLayout from './ui/gridLayout'
import NavLayout from './ui/NavLayout'
import StackLayout from './ui/stackLayout'
import PageLayout from './ui/pageLayout'
import Scroll from './ui/scroll'
import ScrollEx from './ui/scrollEx'

import Config from './apiDefine/config'

import Gesture from './ui/gesture'

import router from './app/router'
import CollectionLayout from './ui/collectionLayout'

import Ajax from './apiDefine/ajax'
import LocalStorage from  './apiDefine/localStorage'
import Screen from './apiDefine/screen'
import Geo from './apiDefine/geo'

import Loading from './ui/loading'


Vue.use(MuseUI)

const components = {
  GoBack,
  Card,
  GridLayout,
  NavLayout,
  StackLayout,
  PageLayout,
  Scroll,
  ScrollEx,
  Gesture,
  VueEchart,
  CollectionLayout,
  Loading
}


export default {

  install: function (instance) {
    window.$ajax = Ajax
    window.$localStorage = LocalStorage
    window.$screen = Screen
    window.$geo = Geo


    window.$ = Jquery

    require('./ui/waves')

    Waves.init();


    Object.keys(components).forEach((key) => {
      instance.component(components[key].name, components[key])
    })
  },
  config: function (c) {
    for (var key in Config) {
      if (typeof(c[key]) != 'undefined')
        Config[key] = c[key]
    }
  },
  router: router
}
