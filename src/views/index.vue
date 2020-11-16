
<template>
  <div id="index">
      首页
    <div>
        <router-link to="/ShoppingMail">goto</router-link>
        <router-link to="/home">home</router-link>
        <router-link to="/">index</router-link>
        <router-link to="/word">消息</router-link>    
        <router-link to="/word2">消息2</router-link> 
        <button @click="gotoAbout">关于</button>
        
    </div>
    <div>
        <news :news='newsList'></news>
        <newsT :news='news2list'></newsT>
    </div>
    <router-view></router-view>
    <div>
       
    </div>
    
  </div>
</template>

<script>
import news from "../components/news"
import newsT from "../components/news2"
export default {
    components:{
        news,
        newsT,
    },
    data() {
        return {
            newsList:['新闻1','新闻2','新闻1'],
            news2list:["消息1",'消息2','消息3']
        }
    },
    methods:{
        gotoAbout() {
            this.$router.push({name: "about",query:{router:"gotoAbout",qqq:'111'} })
        }
    }
}
</script>

<style lang="scss" scope>

</style>>

