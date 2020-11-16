<template>
  <div id="app">
    <router-view/>
    <mainTabBar></mainTabBar>
  </div>
</template>
<script>
import mainTabBar from 'components/mainTabBar'
export default {
  components:{
   mainTabBar
  }
}
</script>

<style lang="scss" scope>

#app{
  width: 100%;
  height: 100%;
  
}
</style>
