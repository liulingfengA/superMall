<template>
      <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
           <slot  name="item-icon"></slot>
        </div>
       <div v-else>
         <slot  name="item-icon-active"></slot>
       </div>
        <div :style="activeType"> <slot name="item-text"></slot></div>
      </div>
</template>

<script>
  export default {
    props:{
      path:String,
      activeStyle:{
        type:Object,
        default:()=>{},
        replace:true
      },
    },
    data() {
      return {
        // isActive:true,
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeType(){
        return this.isActive?this.activeStyle:{}
      }
    },
    methods: {
      itemClick(){
        //if解决两次点击导航报错Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation to current location: "/profile".路由重复点击造成导航重复
        if(this.$route.path !== this.path){
          this.$router.replace(this.path)
        }
        
      }
    },
  }
</script>

<style lang="scss" scoped>
.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align:top;
  }
}
</style>