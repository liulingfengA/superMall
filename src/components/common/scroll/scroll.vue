<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
  export default {
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        scroll:null,
      }
    },
    mounted(){
      // setTimeout(() => {
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,
          probeType:this.probeType,
          pullUpLoad:this.pullUpLoad,
        })
        if(this.probeType === 2 || this.probeType === 3){ 
          this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
          })
        }
       
       if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
        this.scroll.finishPullUp()
        })
       }
      
      console.log(this.$refs.wrapper)
    },
    methods: {
      scrollTo(x,y,time=1000){
      this.scroll  &&  this.scroll.scrollTo(x,y,time)
      },
      refresh(){
       this.scroll  && this.scroll.refresh && this.scroll.refresh() 
      },
      getScrollY(){
        return this.scroll?this.scroll.scrollY:0
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>