import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'
import Home from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/index' },
  {
    path: '/index', component: Index, children: [
      { path: '/home', name: 'home', component: Home }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
