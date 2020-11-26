<template>
  <div class="cart-list">
      <scroll class="content" ref="scroll">
        <cart-list-item v-for="(item,index) in cartList" :key="index" :list-item="item"></cart-list-item>
      </scroll>
  </div>
</template>

<script>
import scroll from 'components/common/scroll/scroll'
import {mapGetters} from 'vuex'
import CartListItem from './cartListItem.vue'
  export default {
    components:{
      scroll,
      CartListItem,
    },
    data() {
      return{

        }
    },
    computed:{
      ...mapGetters(["cartList"])
    },
    activated(){
      this.$refs.scroll.refresh();
    }
  }
</script>

<style lang="scss" scoped>
.cart-list{
   height:100vh;
}
.content{
 
  height:calc(100% - 44px - 49px) ;
  overflow: hidden;
}
</style>