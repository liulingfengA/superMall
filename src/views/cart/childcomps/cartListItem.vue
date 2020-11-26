<template>
  <div id="shop-item">
    <div class="item-selector">
      <check-btn @click.native="checkClick" :isChecked="listItem.checked"></check-btn>
    </div>
    <div class="item-img">
      <img :src="listItem.img" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title omit">{{listItem.title}}</div>
      <div class="item-desc omit">{{listItem.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{listItem.price}}</div>
        <div class="item-count right">x{{listItem.count}}</div>
      </div>
    </div>
	</div>
</template>

<script>
import CheckBtn from '../../../components/content/checkBtn/checkBtn.vue'
  export default {
    props:{
      listItem:{
        type:Object,
        default:()=>{return {}}
      }
    },
    components:{
        CheckBtn

    },
    mounted(){
    },
    methods:{
      checkClick(){
        this.listItem.checked = !this.listItem.checked
        console.log( this.listItem.checked)
      }
    }
  }
</script>

<style lang="scss" scoped>
#shop-item{
  width: 100%;
  display:flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.left{
  float: left;
}
.right{
  float: right;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content:center;
  align-items: center;
  margin-right: 5px;

}
.item-title , .item-desc{
  overflow: hidden;
  word-spacing: nowrap;
  text-overflow: ellipsis;
}
.item-img > img{
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info{
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-desc{
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}
.info-bottom{
  margin-top: 10px;
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
}
.info-bottom ,.item-price{
  color:orangered;
}
.omit{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
  }
</style>