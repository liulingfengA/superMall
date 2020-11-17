<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" ></home-swiper>
    <home-recommend :recommendImg="recommendImg" ></home-recommend>
    <feater-view></feater-view>
    <tab-control class="tab-control" :titles="tabcontrolList" @tabClick="tabClick"></tab-control>
    <goods-list  :goodsList="shoeGoodsType"></goods-list>
   
  </div>
</template>

<script>
    import NavBar from "components/common/navbar/navbar";
    import tabControl from 'components/content/tabcontrol/tabControl'
    import goodsList from 'components/content/goods/goodsList'

    import homeSwiper from './childComps/homeSwiper'
    import HomeRecommend from './childComps/homeRecommend';
    import featerView from './childComps/featerView'
   

    import {getHomeMultidata,getHomeGoods} from "network/home";
    import GoodsList from '../../components/content/goods/goodsList.vue';
    
    
    
    export default {
        name: "Home",
        components:{
            NavBar,
            tabControl,
            homeSwiper,
            HomeRecommend,
            featerView,
            GoodsList,
            
        },
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
            goodsListType:'pop'
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
        computed: {
          shoeGoodsType(){
            return this.goods[this.goodsListType].list
          }
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
          }
        }
       
    }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100%;
    position: relative;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 10 ;

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
    position: sticky;
    top: 43px;
    z-index: 1;
  }



</style>
