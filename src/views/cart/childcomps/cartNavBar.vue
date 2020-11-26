<template>
  <div class="cart-nav-bar">
    <nav-bar>
      <div class="title" slot="center">
          购物车({{cartLength}})
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/navbar"
import { mapGetters } from 'vuex'
  export default {
    components:{
      NavBar
    },
    computed:{
      // cartLength(){
      //   return this.$store.state.cartList.length
      // }
      ...mapGetters([
        'cartLength',
      ])
    }
  }
</script>

<style lang="scss" scoped>
.cart-nav-bar{
  background-color: var(--color-tint);
  color:#fff;
}
</style>