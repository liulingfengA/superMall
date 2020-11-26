<template>
  <div :class="{'check-btn':true,'check':isChecked}" >
      <img src="~assets/images/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    props:{
      isChecked:{
        type:Boolean,
        default:true
      }
    }
  }
</script>

<style lang="scss" scoped>
.check-btn{
  border-radius: 50px;
  border: 2px solid #aaa;
  
}
.check{
  border-color: red;
  background-color: red;
}
</style>