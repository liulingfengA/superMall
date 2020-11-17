<template>
  <div id="app">
    
    <router-view/>
    <mainTabBar></mainTabBar>
  </div>
</template>
<script>
import mainTabBar from 'components/content/mainTabBar'

export default {
  components:{
   mainTabBar,
  }
}
</script>

<style scope>

#app{
  width: 100%;
  height: 100%;
  
}
.home-nav{
  background-color: var(--color-tint);
  color:var(--color-background)
}
</style>
