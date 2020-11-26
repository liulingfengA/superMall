"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import ShoppingMail from '../components/shoppingMail.vue'
_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/home/home.vue'));
    });
  }
}, {
  path: "/profile",
  name: "profile",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/profile/profile.vue'));
    });
  }
}, {
  path: "/category",
  name: "category",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/category/category.vue'));
    });
  }
}, {
  path: "/cart",
  name: "cart",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/cart/cart.vue'));
    });
  }
}, {
  path: "/detail",
  name: "detail",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/detail/detail.vue'));
    });
  }
} // {
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
]; //获取原型对象上的push函数

var originalPush = _vueRouter["default"].prototype.push; //修改原型对象中的push方法

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};

var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
}); //全局路由守卫
// router.beforeEach((to,from,next) => {
//   document.title = to.meta.title,
//   console.log(to)
//   from,
//   next()
// })

var _default = router;
exports["default"] = _default;