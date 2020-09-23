

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routes from './base/router'
import store from './vuex/store'
import Vuex from 'vuex'
import '@/js/openseadragon'
import utilApi from './common/utils';
import Vue from 'vue'
import App from './App.vue'



Vue.config.productionTip = false
// 在Vue中全局使用mintui
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueRouter)


// 将vue-resource在vue中绑定，自动在vue对象实例上注入一个$http对象就可以使用ajax方法了
import vueResource from 'vue-resource';
let sysConfig = require('@/../config/sysConfig')


Vue.use(vueResource);
const router = new VueRouter({
  routes:routes
})


new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: c => c(App)
})
