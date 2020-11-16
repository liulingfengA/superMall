<template>
    <div>
       <div class="top">
            <van-row class="seachBox">
                <van-col span="3">
                    <img class="loactionImg" :src="loactionImg" alt="">
                </van-col>
                <van-col span="17">
                   <input 
                   class='seach-input'
                    defaultValue="查找"
                   >
                </van-col>
                <van-col span="4">
                    <van-button  type="primary" size='mini'>查找</van-button>
                </van-col>
            </van-row>
       </div>
       <!--swiper-->
       <div class="swiper-box">
           <van-swipe class="swiper" :autoplay="2000">
               <van-swipe-item v-for="(banner,index) in bannerImg" :key="index">
                   <img class="swiperImg" width="100%" v-lazy="banner.img" alt="">
               </van-swipe-item>
           </van-swipe>
       </div>
       <!--type bar-->
       <div class="type-bar">
           <div v-for="(item, index) in category" :key="index">
               <img class='barImg' v-lazy="item.image" alt="">
               <p>{{item.mallCategoryName}}</p>
           </div>
        </div>    
    </div>
</template>

<script>
import axios from "axios"
    export default {
        data() {
            return {
                loactionImg:require('../assets/images/location.svg'),
                bannerImg:[
                    {  img:'http://gfs17.gomein.net.cn/T1kX_vByLT1RCvBVdK_800_pc.jpg'},
                    {  img:'http://gfs.gomein.net.cn/T1DXhvB7Zv1RCvBVdK_360.jpg'},
                    {  img:'http://gfs.gomein.net.cn/T1kFKvBCdT1RCvBVdK_360.jpg'},
                ],
                category:[],
                  


            }
        },
        created() {
            axios({
                url:'https://www.easy-mock.com/mock/5f54cbea22b6925fcfc5dd8b/smileVue/index',
                method: 'get'
            })
            .then((res)=>{
                console.log(res)
                if(res.status == 200){
                    this.category =res.data.data.category
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        },
    }
</script>

<style lang="scss" scoped>
.seachBox{
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.35rem;
    background-color: #f00;
}    
.loactionImg{
    width: 1rem;
    height: .5rem;
}
.seach-input{
    background-color:transparent;
    height: .9rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 2px solid #999;
}
.swiper-box{
    margin-top: 2px;
}
.swiper{
    max-height: 4rem;
}
.swiperImg{
    max-height:4rem;
}
.type-bar{
    background-color: #fff;
    padding: .3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    font-weight: nowrap;
}
.barImg{
    width: 1.2rem;
}
.type-bar div{
    padding: .1rem;
    font-size: 12px;
    text-align: center;
}

</style>