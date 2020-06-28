import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'

Vue.use(Vant);

// 设置axios请求根路径
axios.defaults.baseURL = "https://fanhc.xyz/api/public/v1"

// 把axios添加到vue的原型属性上
// $http是自己起的一个属性名
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
