import Vue from 'vue'
import VueRouter from 'vue-router'

// import ShoppingMail from '../components/shoppingMail.vue'
Vue.use(VueRouter)
  const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    name:'home',
    component:()=> import (/* webpackChunkName: "about" */ '../views/home/home.vue')
  },
  
  {
    path: "/profile",
    name: "profile",
    component:()=> import (/* webpackChunkName: "profile" */ '../views/profile/profile.vue')
  },
  {
    path: "/category",
    name: "category",
    component:()=> import (/* webpackChunkName: "category" */ '../views/category/category.vue')
  },
  {
    path: "/cart",
    name: "cart",
    component:()=> import (/* webpackChunkName: "cart" */ '../views/cart/cart.vue')
  },
  // {
  //   path: "/cart",
  //   name: "cart",
  //   component:()=> import (/* webpackChunkName: "cart" */ '../views/cart/cart.vue')
  // },
  // {
  //   path:'/ShoppingMail',
  //   name:'ShoppingMail',
  //   meta:{
  //     title:'Shopping'
  //   },
  //   beforeEnter: (to, from, next) => {
  //     console.log(to , from, next)
  //     next()
  //   },
  //   component:()=> import (/* webpackChunkName: "about" */ '../components/shoppingMail.vue')
  // },
 
  // {
  //   path:'/about',
  //   name:'about',
  //   meta:{
  //     title:"关于"
  //   },
  //   component:()=> import (/* webpackChunkName: "about" */ '../components/about.vue')
  // },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局路由守卫
// router.beforeEach((to,from,next) => {
//   document.title = to.meta.title,
//   console.log(to)
//   from,
//   next()
// })

export default router
