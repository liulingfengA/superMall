<template>
  <div  class="dateil-nar-bar">
    <nav-bar>
      <div class="left" slot="left" @click="goBack">
        <img src="~assets/images/common/back.svg" alt="">
      </div>
      <div class="titles" slot="center">
        <div class="title-item" 
        v-for="(title,index) in titles" :key="index"
        @click="activeHeight(index)"
        :class="{active:index === currentIndex}"
        >{{title}}</div>
      </div>
    </nav-bar> 
  </div>  
</template>

<script>
import NavBar from "components/common/navbar/navbar"
  export default {
    components:{
      NavBar,
    },
    data() {
      return{
        titles: ["商品","参数","评论","推荐"],
        currentIndex:0,
      }
    },
    methods: {
      activeHeight(index){
        this.currentIndex = index
        this.$emit("titleCilck",index)
      },
      goBack(){
        this.$router.go(-1)
      }
    },
  }
</script>

<style lang="scss" scoped>
.dateil-nar-bar{
  background-color:#fff;
  position: relative;
  z-index: 100;
}
.titles{
  display: flex;
  .title-item{
    flex:1;
  }
  .active{
    color:var(--color-high-text);
  }
  
}
.left img{
    margin-top: 12px;
  }
</style>