module.exports ={
  //路由别名
  configureWebpack:{
    resolve:{
      alias:{
        "src":"@",
        "assets":"@/assets",
        "components":"@/components",
        "views":"@/views",
        "network":"@/network"
      }
    }
  },
  lintOnSave :false, //关闭eslint
}