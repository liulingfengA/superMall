import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'

// import axios from 'axios'
// import { Button ,Row ,Col ,Swipe,SwipeItem,Lazyload} from 'vant'

// Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)
import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
Vue.component('chart', ECharts)



Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then(res => {console.log(res)})

// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{type:'pop' ,page:1}
// }).then(res => {console.log(res)})

//axios.all
// axios.all([
//  axios({
//   url:'http://123.207.32.32:8000/home/multidata'
//  }),
//  axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{type:'pop' ,page:1}
//   })
// ]).then(results => {
//   console.log(results)
// })


////axios.all 中  axios.spread()展开请求结果
// axios.all([
//   axios({
//    url:'http://152.136.185.210:8000/api/w6/home/multidata'
//   }),
//   axios({
//    url:'http://152.136.185.210:8000/api/w6/home/data',
//    params:{type:'pop' ,page:1}
//    })
//  ]).then(axios.spread((res1,res2) => {
//    console.log(res1)
//    console.log(res2)
//  }))

//instance输出
// import {request} from '@/network/request.js'

// request({
//   url: '/home/multidata'
// }).then(
//   (res) =>{console.log(res)}
//   )
//   .catch(err=>{console.log(err)})