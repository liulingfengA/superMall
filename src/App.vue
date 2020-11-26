<template>
  <div id="app" >
    <!-- exclude这里指的name是指组件的name 而不是路由的name ,所有组件必须有name属性才会生效  见detail组件-->
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
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

/* .home-nav{
  background-color: var(--color-tint);
  color:var(--color-background);
  z-index: 9;
} */
</style>
