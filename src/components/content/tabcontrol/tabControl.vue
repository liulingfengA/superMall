<template>
  <div class="tab-control">
    <div 
      v-for="(title,index) in titles" :key="title.index"
      class="tab-content-item" 
      :class="{active:index == currentIndex }"
      @click="clickTouch(index)"
      >
      <span >{{title.value}}</span>
    </div>
    
  </div>
</template>

<script>
  export default {
    props:{
      titles:{
        type:Array,
        default:()=>{return []}
      }
    },
    data() {
      return {
        currentIndex:0,
      }
    },
    methods: {
      clickTouch(index) {
        this.currentIndex =index;
        this.$emit('tabClick', index)
      }
    }

  }
</script>

<style lang="scss" scoped>
.tab-control{
  display: flex;
  height: 40px;
  font-size: 16px;
  background-color: #fff;
  .tab-content-item{
    flex:1;
    text-align: center;
    line-height: 44px;
  }
  .active span{
    padding: 5px;
    border-bottom: 1px solid var(--color-high-text);
    color:var(--color-high-text);
  }
}
</style>