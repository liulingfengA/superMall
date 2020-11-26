
import {debounce} from "components/common/utils.js"
import BackTop from 'components/content/backTop/backTop'
export const imgloadListener = {
  data(){
    return {     
      imgloadListener:null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.imgloadListener = ()=>{
      refresh()
    } 
    this.$bus.$on('imgload', this.imgloadListener)
    console.log('我是混入的内容')
  },
}
export const backTopMixin ={
  components:{
    BackTop
  },
  data(){
    return {
      isBackTopType:false,
    }
  },
  methods:{
    backTop(){
        this.$refs.scroll.scrollTo(0,0,800)
      }
  }
}