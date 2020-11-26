<template>
  <div class="cart">
    <cart-nav-bar></cart-nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartBottomBar from './childcomps/cartBottomBar.vue'
import CartList from './childcomps/cartList.vue'
import CartNavBar from './childcomps/cartNavBar.vue'
  export default {
    components:{
        CartNavBar,
        CartList,
        CartBottomBar,
    }
  }
</script>

<style lang="scss" scoped>

</style>