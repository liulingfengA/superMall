<template>
  <div>
    <tabbar>
        <tabbarItem :path="'/home'" :activeStyle="{ 'font-weight': 600}">
          <img slot='item-icon' src="../assets/images/tabbarimg/home.svg" alt="">
          <img slot='item-icon-active' src="../assets/images/tabbarimg/home_select.svg" alt="">
          <div slot='item-text'>首页</div>
        </tabbarItem>
        <tabbarItem :path="'/category'" :activeStyle="{ 'font-weight': 600}">
          <img slot='item-icon' src="../assets/images/tabbarimg/02TABbar.svg" alt="">
          <img slot='item-icon-active' src="../assets/images/tabbarimg/02TABbar-fill.svg" alt="">
          <div slot='item-text'>分类</div>
        </tabbarItem>
        <tabbarItem :path="'/cart'" :activeStyle="{ 'font-weight': 600}">
          <img slot='item-icon' src="../assets/images/tabbarimg/03TABbar.svg" alt="">
          <img slot='item-icon-active' src="../assets/images/tabbarimg/03TABbar-fill.svg" alt="">
          <div slot='item-text'>购物车</div>
        </tabbarItem>
        <tabbarItem :path="'/profile'" :activeStyle="{ 'font-weight': 600}">
          <img slot='item-icon' src="../assets/images/tabbarimg/05TABbar.svg" alt="">
          <img slot='item-icon-active' src="../assets/images/tabbarimg/05TABbar-fill.svg" alt="">
          <div slot='item-text'>我的</div>
        </tabbarItem>
      </tabbar>
  </div>
</template>

<script>
  import tabbar from './tabbar/index.vue'
  import tabbarItem from './tabbar/tabbarItem.vue'
  export default {
    components:{
      tabbar,
      tabbarItem
    }
  }
</script>

<style lang="scss" scoped>

</style>