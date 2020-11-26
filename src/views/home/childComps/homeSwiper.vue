<template>
  <div>
    <Swiper>
      <SwiperItem v-for="item in banners" :key="item.backgurnd">
        <a href="/">
          <img :src="item.image" alt="" @load="imgload">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper"
  export default {
    components:{
      Swiper, SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default:()=>{
          return []
        }
      }
    },
    data() {
      return{
        isLoad:false,
      }
    },
    methods: {
      imgload(){
        if(!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad = true
        }
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>