<template>
  <div class="btn-bar">
    <div class="check-box">
      <check-btn class="all-checked" :isChecked="isSelectAll" @click.native="checkClick"></check-btn>
      <span>全选</span>
      <div class="totalPrice">
        合计:{{totalPrice}}
      </div>
      <div class="calc">
        去计算({{checked}})
      </div>
    </div>
   
  </div>
</template>

<script>
import CheckBtn from 'components/content/checkBtn/checkBtn.vue'
  export default {
    components:{
        CheckBtn

    },
    computed:{
      totalPrice(){
        return "$" + this.$store.state.cartList.filter(item =>{
          return item.checked
          }).reduce((preValue,item) =>{
            return preValue + item.price*item.count;
            },0)
      },
      checked(){
        return this.$store.state.cartList.filter(item =>{ return item.checked}).length
      },
      isSelectAll(){
      //  return !(this.$store.state.cartList.filter(item =>{ return !item.checked}).length)
      if(this.$store.state.cartList.length === 0) return false
       return  !this.$store.state.cartList.find(item => { return !item.checked})
      }
    },
    methods: {
      checkClick(){
        if(this.isSelectAll){
          this.$store.state.cartList.forEach(item => {return item.checked =false})
        }else{
          this.$store.state.cartList.forEach(item => {return item.checked =true})
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.btn-bar{
  display: flex;;
  height: 40px;
  position: fixed;
  left: 0;
  right: 0;
  bottom:49px;;
  background-color: #eee;
}
.check-box{
  display: flex;
	align-items: center;
  // width: 40px;
  
}
.check-box span{
  margin-left: 5px;
}
.all-checked{
  width: 20px;
  height: 20px;
  margin-left: 10px;

}
.totalPrice{
  margin-left: 20px;
  flex:1;
}
.calc{
  width: 90px;
  height: 100%;
  line-height: 40px;
  background-color: brown;
  text-align: center;
  float: right;
  color: white;
}

</style>