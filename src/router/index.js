import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Index/template.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login/template.vue')
  },
  {                  
    path: '/register',
    component: () => import('@/views/Register/template.vue')
  },
  {
    path:'/user/:userId',
    component: () => import('@/views/User/template.vue')
  },
  {
    path: '/my',
    component: () => import('@/views/My/template.vue')
  },
  {
    path: '/edit/:blogId',
    component: () => import('@/views/Edit/template.vue')
  },
  {
    path: '/detail/:blogId',
    component: () => import('@/views/Detail/template.vue')
  },
  {
    path: '/create',
    component: () => import('@/views/Create/template.vue')
  }
]                                                                          

const router = new VueRouter({
  mode: 'history',
  base: '/vue-sharing-blog/',
  routes
})

export default router
