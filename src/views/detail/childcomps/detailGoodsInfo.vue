<template>
  <div class="detail-info">
      <div class="info-desc">{{detailInfo.desc}}</div>
      <div class="info-title">{{imgList.key}}：</div>
      <div class="img-list">
        <img v-for="(img,index) in imgList.list" :key="index" :src="img" alt="" @load="imgload" >
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      detailInfo:{
        type:Object,
        default:()=>{return {}}
      }
    },
    data() {
      return {
        content:0,
        imgLength:0,
      }
    },
    methods: {
      imgload(){
        //提高性能
        // this.content ++;
        // console.log(this.content)
        // if(this.content === this.imgLength){
        //    this.$emit("imgload")
        // }
       
        this.$emit("imgload")
      }
    },
    watch: {
      //监听的必须是一个组件内部的属性
      //出现的错误: 以为watch内部写的是函数 , 但是实际上是一个内部属性
      detailInfo(){
        this.imgLength =  this.detailInfo.detailImage[0].list.length
      }
    },
    computed:{
      imgList(){
        return Object.keys(this.detailInfo).length !== 0&& this.$props.detailInfo.detailImage[0]
      }
    }
  }
</script>

<style lang="scss" scoped>
.img-list img{
  width: 100%;
}
.detail-info{
  margin-top: 20px;
  padding: 0 10px;
}
.info-title{
  margin-top: 20px;
}
</style>