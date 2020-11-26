<template>
  <swiper class="detail-swiper">
    <swiper-item class="swiper-item" v-for="(img,index) in topImgList" :key="index">
      <img :src="img" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"
  export default {
    components:{
      Swiper, 
      SwiperItem
    },
    props:{
      topImgList:{
        type:Array,
        default:()=>{return []}
      }
    }
  }
</script>

<style lang="scss" scoped>
.detail-swiper{
  height:300px;
}
</style>