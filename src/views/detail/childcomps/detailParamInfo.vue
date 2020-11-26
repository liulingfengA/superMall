<template>
  <div class="param-info" v-if="Object.keys(goodsParam).length > 0">
    <table class="info-size" v-for="(table,index) in goodsParam.sizes" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table   class="info-param">
      <tr v-for="(info,index) in goodsParam.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParam.image.length !== 0">
        <img :src="goodsParam.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      goodsParam:{
        type:Object,
        default:()=>{return {}}
      }
    },
  }
</script>

<style lang="scss" scoped>
.param-info{
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table{
  width: 100%;
  border-collapse: collapse;

}
.param-info table tr{
  height: 42px;
}
.param-info table tr td{
  border-bottom: 1px solid #000;
  border-color:rgba(100, 100, 100, 0.1)
}
.info-param-key{
  width: 95px;
}
.info-param{
  border-top: 1px solid #000 ;
   border-color:rgba(0, 0, 0, 0.1);
}
.param-value{
  color:"#eb4868";
}
.param-img img{
  width: 100%;
}
.info-img img{
  width: 100%;
}
</style>