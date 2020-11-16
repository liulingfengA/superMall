module.exports ={
  //路由别名
  configureWebpack:{
    resolve:{
      alias:{
        "src":"@",
        "assets":"@/assets",
        "components":"@/components",
        "views":"@/views",
      }
    }
  }
}