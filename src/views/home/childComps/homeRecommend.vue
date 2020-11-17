<template>
  <div class="home-recommend" >
    <div class="recommendItem" v-for="(item,index) in recommendImg" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}} </p>
      </a>
    </div> 
  </div>
</template>

<script>
  export default {
    props:{
      recommendImg:{
        type:Array,
        default:()=>{
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.home-recommend{
  width: 100vw;
  height: 110px;
  display: flex;
  text-align: center;
  margin-top: 10px;
  // border-bottom: 8px solid #f0f0f0;
  box-shadow: 0px 8px 0px 0px rgba(100, 100, 100, 0.2);
  .recommendItem{
    flex: 1;
    margin: 0 auto;
    img{
      width: 65px;
      height: 65px;
      margin-bottom: 5px;
    }
  }
}
</style>