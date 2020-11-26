<template>
  <div  class="detail-base-info" v-if="Object.keys(goods).length > 0">
    <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
          <span class="n-price">{{goods.newPrice}}</span>
          <span class="o-price">{{goods.oldPrice}}</span>
          <span class="discount">{{goods.discount}}</span>
      </div>
      <div class="info-other" v-if=" goods.columns && goods.service">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.service[goods.service.length - 1].name}}</span>
      </div>
      <div class="info-service" v-if="goods.service">
        <span class="info-service-item omit" v-for="index in goods.service.length - 1" :key="index">
          <img :src="goods.service[index-1].icon" alt="">
          <span>{{goods.service[index-1].name}}</span>
        </span>
      </div>
  </div>
</template>

<script>
  export default {
    props:{
      goods:{
        type:Object,
        default:()=>{return {}}
      }
    }
  }
</script>

<style lang="scss" scoped>
.detail-base-info{
  margin-top: 15px;
  padding: 6px;
  color:#999;
  .info-title{
    font-size: 16px;
     font-weight: bold;
    letter-spacing: 1px;
      color:#222;
  }
  .info-price{
    margin-top: 10px;
    .n-price{
      font-size: 24px;
      color: var(--color-tint);
      font-weight: bold;
    }
    .o-price{
      font-size: 14px;
      margin-left: 10px;
      text-decoration: line-through;
    }
    .discount{
      background-color: var(--color-high-text);
      border-radius: 10px;
      line-height: 10px;
      margin-left:12px ;
      padding:4px;
      font-size: 8px;
      color: #fff;
      vertical-align: 8px;
    }
  }
  .info-other , .info-service{
    display: flex;
    flex-direction:row; ;
    justify-content: space-between;
    align-items: center;
    padding: 10px 2px;
    font-size: 14px;
    margin-top: 10px;
    
  }
  .info-other {
    border-bottom:1px solid #999;
    }
  .info-service{
    font-size: 14px;
    color: #000;
    }
  
  .info-service img{
    width: 15px;
    height:15px;
    vertical-align: middle;
   
  }
   .info-service span{
    vertical-align: middle;
    margin-left: 2px;
  }
  .omit{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
}
</style>