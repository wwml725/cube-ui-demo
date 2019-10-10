import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import 'common/stylus/index.styl'
import loadImg from "common/image/default.png"

import VueLazyload from 'vue-lazyload'


// or with options
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: loadImg,
  // attempt: 1
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
