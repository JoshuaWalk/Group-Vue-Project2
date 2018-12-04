import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Authentication from '@/components/Authentication'
import Shop from '@/components/Shop'
import Cart from '@/components/Cart'
import Raj from '@/components/Raj'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: Authentication
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/raj',
      name: 'raj',
      component: Raj
    },
    {path: '/cart',
     name: 'cart',
     component: Cart
    }
  ]
})
