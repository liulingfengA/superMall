<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control 
      ref="tabControlTop"  
      class="tab-control mt"
      :titles="tabcontrolList"
      @tabClick="tabClick"
      v-show="isTabFixed"
      >
    </tab-control>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" @pullingUp="loadmore" :pull-up-load="true">
      <home-swiper  :banners="banners" @swiperImgLoad="swiperImgLoad"  ></home-swiper>
      <home-recommend  :recommendImg="recommendImg" ></home-recommend>
      <feater-view ></feater-view>
      <tab-control 
      ref="tabControl"  
      class="tab-control"
      :titles="tabcontrolList"
      @tabClick="tabClick"
      >
      </tab-control>
      <goods-list  :goodsList="showGoodsType"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isBackTopType"></back-top>
  </div>
</template>

<script>
    import NavBar from "components/common/navbar/navbar";
    import tabControl from 'components/content/tabcontrol/tabControl'
    import goodsList from 'components/content/goods/goodsList'
    import Scroll from 'components/common/scroll/scroll'
    import homeSwiper from './childComps/homeSwiper'
    import HomeRecommend from './childComps/homeRecommend';
    import featerView from './childComps/featerView'
    import BackTop from 'components/content/backTop/backTop'
   

    import {getHomeMultidata,getHomeGoods} from "network/home";
    import {debounce} from "components/common/utils.js"
    import {imgloadListener} from "components/common/mixin.js"
    import GoodsList from 'components/content/goods/goodsList.vue';
    
    export default {
        name: "Home",
        components:{
            NavBar,
            tabControl,
            homeSwiper,
            HomeRecommend,
            featerView,
            GoodsList,
            Scroll,
            BackTop,
            saveY:0,
        },
        mixins:[imgloadListener],
        data() {
          return {
            banners: [],
            recommendImg:[],
            tabcontrolList: [
              {
                value:'流行',
                index:1
              },
              {
                value:'新款',
                index:2
              },
              {
                value:'精选',
                index:3
              }
            ],
            goods:{
              'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]},
            }
            ,
            goodsListType:'pop',
            isBackTopType:false,
            tabOffsetTop:0,
            isTabFixed:false,
          }
        },
        created() {
            //bannner数据
            this.getHomeMultidata()
            //商品数据
            this.getHomeGoods('pop')
            this.getHomeGoods('new')
            this.getHomeGoods('sell')

        },
        mounted() {
          //goodsItem的imgLoad的监听 混入之前的写法
          // const refresh = debounce(this.$refs.scroll.refresh,200)
          // this.imgloadListener = ()=>{
          //   refresh()
          // } 
          // this.$bus.$on('imgload', this.imgloadListener)
          //所有的组件都有属性$el ,获取组件内的元
          this.swiperImgLoad()
        },
        destroyed() {
          //销毁
        },
        activated() {
          //活跃
          this.$refs.scroll.scrollTo(0,this.saveY,0)
          this.$refs.scroll.refresh()
        },
        deactivated() {
          //不活跃 
          //保存滚动的y值
          this.saveY = this.$refs.scroll.getScrollY()
          //取消goodsItem的imgLoad的监听
          this.$bus.$off(this.imgloadListener)
        },
        computed: {
          showGoodsType(){
            return this.goods[this.goodsListType].list
          },
        },
        methods: {
           /**事件监听 */
           tabClick(index){
             switch (index){
                case 0:
                this.goodsListType = 'pop'
                break
                case 1:
                this.goodsListType = 'new'
                break
                case 2:
                this.goodsListType = 'sell'
                break
             }
             this.$refs.scroll.scrollTo(0,-this.tabOffsetTop,500)
             this.$refs.tabControlTop.currentIndex = index
             this.$refs.tabControl.currentIndex = index
           },
          /**网络请求 */
          getHomeMultidata(){
            getHomeMultidata().then(res =>{ 
              this.banners = res.data.banner.list
              this.recommendImg = res.data.recommend.list
            })
          },
          getHomeGoods(type) {
            const page = this.goods[type].page+1
            getHomeGoods(type,page).then(res => {
              this.goods[type].list.push(...res.data.list)
              this.goods[type].page += 1
            })
          },
          // 监听滚动 
          contentScroll(position){
            //backTop显隐 
             this.isBackTopType = (-position.y) > 800
            //是否吸顶
              this.isTabFixed = (-position.y) >this.tabOffsetTop

          },
          //回到顶部
          backTop(){
            this.$refs.scroll.scrollTo(0,0,1000)
          },
          //上拉加载
          loadmore(){
            this.getHomeGoods(this.goodsListType)
          },
          //吸顶效果
          swiperImgLoad(){
            this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
          }
          //防抖函数
          // debounce(fn,delay){
          //   let timer = null;
          //   return function(...args){
          //     if(timer) clearInterval(timer)
          //     timer = setTimeout(()=>{
          //       fn.apply(this,args)
          //     },delay)

          //   }
          // }
        },
       
    }
</script>

<style lang="scss" scoped>
  #home {
    // padding-top: 44px;
    height: 100vh;
    position: relative;
 
  

  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;
  }
  /* .home-scroller{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  } */
  .tab-control{
    // position: sticky;
    // top: 43px;
    z-index: 1;
  }
  .mt{
   position: relative;
   z-index: 9;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    //计算BScroll滚动区间的第二种css写法
    // height: calc(100% - 93px); 
    // overflow: hidden;
    // margin-top:44px; 
  }

</style>
