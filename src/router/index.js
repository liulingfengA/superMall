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
  {
    path: "/detail",
    name: "detail",
    component:()=> import (/* webpackChunkName: "cart" */ '../views/detail/detail.vue'),
     
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

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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
