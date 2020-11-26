<template>
<div>
  <div  v-if="Object.keys(comments).length > 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">
        用户评价
      </div>
      <div class="header-more">
        更多
      </div>
    </div>
    <div class="info-user">
      <img :src="comments.user.avatar" alt="">
      <span>{{comments.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{comments.content}}</p>
      <div class="info-other">
        <span class="date">{{comments.created | showDate}}</span>
        <span>{{comments.style}}</span>
      </div>
      <div class="info-imgs">
        <img v-for="(item,index) in comments.images" :key="index" :src="item" alt="">
      </div>
    </div>
  </div>
  <div v-else class="no-date">
    暂无评论
  </div>
</div>
</template>

<script>
import {createTime} from "components/common/utils.js"
  export default {
    props:{
      comments:{
        type:Object,
        default:()=>{return {}}
      }
    },
    filters:{
      showDate(value){
        //将date格式化
        const date = value * 1000
        return createTime('yyyy-MM-dd hh:mm:ss',date)

      }
    }
  }
</script>

<style lang="scss" scoped>
.comment-info{
  padding: 5px 12px;
  color:#333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header-title{
  float: left;
  font-size: 15px;
}
.header-more{
  float: right;
  margin-right: 10px;
  font-size: 13px;
}
.info-user{
  padding: 10px 0 5px;
}
.info-user img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span{
  // position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.info-detail{
  padding: 0 5px 15px;
}
.info-detail p{
  font-size: 14px;
  color:#777;
  line-height: 1.5;

}
.info-detail , .info-other{
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.info-other .date{
  margin-right: 8px;

}
.info-imgs{
  margin-top: 10px;
}
.info-imgs img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
.no-date{
  text-align: center;
  font-size: 20px;
}
</style>