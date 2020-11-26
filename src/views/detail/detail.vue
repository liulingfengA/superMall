<template>
  <div class="dateil">
    <detail-nav-bar @titleCilck="titleCilck" ref="detailNav" ></detail-nav-bar>
    <scroll ref="scroll" class="content" @scroll="contentScroll" :probeType="3">
      <detailSwiper :topImgList="topImgList"></detailSwiper>
      <detail-base-info :goods="goodsinfo"></detail-base-info>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imgload="imgRefresh"></detail-goods-info>
      <detail-param-info ref="param" :goodsParam ="paramInfo" ></detail-param-info>
      <detail-comment-info ref="comment" :comments="commentInfo"></detail-comment-info>
      <goods-list ref="goodsList" :goodsList="recommendList"></goods-list>
      <div class="blank"></div>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isBackTopType"></back-top>
  </div>
</template>

<script>
import detailNavBar from "./childcomps/detailNarBar"
import detailSwiper from "./childcomps/detailSwiper"
import detailBaseInfo from "./childcomps/detailBaseInfo"
import detailGoodsInfo from "./childcomps/detailGoodsInfo"
import detailParamInfo from "./childcomps/detailParamInfo"
import detailShopInfo from "./childcomps/detailShopInfo"
import detailCommentInfo from "./childcomps/detailCommentInfo"
import detailBottomBar from "./childcomps/detailBottomBar"
import DetailParamInfo from './childcomps/detailParamInfo.vue'
import DetailShopInfo from './childcomps/detailShopInfo.vue'
import DetailCommentInfo from './childcomps/detailCommentInfo.vue'
import GoodsList from '../../components/content/goods/goodsList.vue'

import scroll from 'components/common/scroll/scroll'

import {debounce} from "components/common/utils.js"
import{getDetailData,Goods,goodsParam,getRecommend} from "network/detail.js"
import {imgloadListener,backTopMixin} from "components/common/mixin.js"



  export default {
    name: "detail",
    components:{
      scroll,
      detailNavBar,
      detailSwiper,
      detailBaseInfo,
      detailGoodsInfo,
      detailParamInfo,
      detailParamInfo,
      detailShopInfo,
      detailShopInfo,
      detailCommentInfo,
      DetailCommentInfo,
      GoodsList,
      detailBottomBar,

     
    },
    mixins:[imgloadListener,backTopMixin],
    data() {
      return {
        iid:null,
        topImgList:[], //轮播数据
        goodsinfo:{},
        detailInfo:{},
        paramInfo:{},
        shopInfo:{},
        commentInfo:{},
        recommendList:[],
        themeTops:[],
        gethoemTopY:null,
        currentIndex:0,
      
      }
    },
    created(){
      this.iid = this.$route.query.id
      getDetailData(this.iid).then(res => {
        console.log(res)
        const data = res.result
        //轮播图
        this.topImgList  = data.itemInfo.topImages
        //获取商品信息
        this.goodsinfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        //保持商品的详情数据
        this.detailInfo = data.detailInfo
        //商铺信息
        this.shopInfo = data.shopInfo
        //参数数据
        this.paramInfo = new goodsParam(data.itemParams.info,data.itemParams.rule)
        //评论
        if(data.rate.cRate !== 0) {
           this.commentInfo = data.rate.list[0]
          //  console.log(this.commentInfo)
        }
        //获取参数,评论,推荐,的位置在这里会出现bug 虽然dom已经渲染出来了但是图片依然没有加载完成,所以距离顶部的高度还是有问题
        // this.$nextTick(()=>{
        //   this.themeTops = [];
        //   this.themeTops.push(0)
        //   this.themeTops.push(-this.$refs.param.$el.offsetTop)
        //   this.themeTops.push(-this.$refs.comment.$el.offsetTop)
        //   this.themeTops.push(-this.$refs.goodsList.$el.offsetTop)
        //   console.log(this.themeTops)
        // })
      })
      getRecommend().then(res =>{
        this.recommendList = res.data.list
        console.log(this.recommendList,'111')
      }),
      this.gethoemTopY = debounce(()=>{
      this.themeTops = [];
      this.themeTops.push(0)
      this.themeTops.push(this.$refs.param.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.goodsList.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE) //js中能表示的最大值
      console.log(this.themeTops)
      },100)
      
    },
    mounted(){
      //混入之前的写法
      // const refresh = debounce(this.$refs.scroll.refresh,200)
      // this.imgloadListener = ()=>{
      //       refresh()
      // }
      // this.$bus.$on('imgload',this.imgloadListener)
     
    
    },
    updated() {
      // this.themeTops = [];
      // this.themeTops.push(0)
      // this.themeTops.push(-this.$refs.param.$el.offsetTop)
      // this.themeTops.push(-this.$refs.comment.$el.offsetTop)
      // this.themeTops.push(-this.$refs.goodsList.$el.offsetTop)
      // console.log(this.themeTops)
   
    },
    destroyed(){
      //注意  this.$bus.$off只能传入一个函数
      this.$bus.$off(this.imgloadListener)
    },
    methods:{
      imgRefresh(){
        this.$refs.scroll.refresh()
        //获取参数,评论,推荐的位置
         this.gethoemTopY()
      },
      titleCilck(index){
        this.$refs.scroll.scrollTo(0,-this.themeTops[index],500)
      },

      //监听滚动,并让页面股滚动位置和navbar联动
      contentScroll(position){
        let positionY = -position.y
        let length = this .themeTops.length
        //条件一: 限制触发的次数
        //条件二: 判断滚动数字在0到offsetTop之间
        for( let i = 0; i < length -1; i++){
          // if(this.currentIndex !== i && ((i < length - 1 &&positionY >= this.themeTops[i] && positionY < this.themeTops[i +1 ]) || (i === length - 1 &&positionY >= this.themeTops[i]))){
          //   this.currentIndex = i
          //   console.log(this.currentIndex)
          //   this.$refs.detailNav.currentIndex = this.currentIndex
          // }

          //条件简化之后 在108行 添加一个js能表示的最大值
          if(this.currentIndex !== i && (positionY > this.themeTops[i] && positionY < this.themeTops[i + 1])){
              this.currentIndex = i
              console.log(this.currentIndex)
              this.$refs.detailNav.currentIndex = this.currentIndex
          }
        }
        //backTop显隐 
        this.isBackTopType = (-position.y) > 800
      },
      // //回到顶部
      // backTop(){
      //   this.$refs.scroll.scrollTo(0,0,800)
      // }
      addToCart(){
        //获取购物车展示信息
       const product ={}
       product.img = this.topImgList[0]
       product.title = this.goodsinfo.title
       product.desc = this.goodsinfo.desc
       product.price = this.goodsinfo.realPrice
       product.iid = this.iid
      //将信息添加到购物车
      this.$store.dispatch('addCart',product).then((res) =>{console.log(res)})
      }
    }
  }
</script>

<style lang="scss" scoped>
.dateil{
  position: relative;
  z-index:100;
  background-color: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px);
}
.blank{
  height: 49px;
  width: 100%;
}
</style>