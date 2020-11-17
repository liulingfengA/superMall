<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" ></home-swiper>
    <home-recommend :recommendImg="recommendImg" ></home-recommend>
  </div>
</template>

<script>
    import NavBar from "components/common/navbar/navbar";
    import homeSwiper from './childComps/homeSwiper'
    import HomeRecommend from './childComps/homeRecommend.vue';
    import {getHomeMultidata} from "network/home";
    
    
    
    export default {
        name: "Home",
        components:{
            NavBar,
            homeSwiper,
            HomeRecommend
        },
        data() {
          return {
            banners: [],
            recommendImg:[],
          }
        },
        created() {
            getHomeMultidata().then(res =>{
              console.log(res)  
              this.banners = res.data.banner.list
              this.recommendImg = res.data.recommend.list
              console.log(this.banners)
            })

        },
       
    }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;

  }

 

  .home-scroller{
    /*height:300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }



</style>
