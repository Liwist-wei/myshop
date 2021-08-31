import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";

import Fastclick from 'fastclick'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();


Fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

