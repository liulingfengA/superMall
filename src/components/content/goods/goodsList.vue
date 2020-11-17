<template>
  <div class="goods">
    <goods-list-item class="goods-list-item" v-for="goods in goodsList" :key="goods.iid" :goodsItem="goods">

    </goods-list-item>
  </div>
</template>

<script>
import goodsListItem from "./goodsListItem"

  export default {
    props:{
      goodsList:{
        type: Array,
        default:()=>{return []}
      }
    },
    components:{
      goodsListItem
    },
  }
</script>

<style lang="scss" scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}

</style>