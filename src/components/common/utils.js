/**************************************防抖************************************/
/*****************************debounce(fn,delay )***fn:函数 deley:延迟时间**************************/
export  function debounce(fn,delay) {
  let timer =null ;
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this, args)
    },delay)
  }
}
 /**************************************时间格式化处理************************************/
/*****************************createTime("yyyy-MM-dd hh:mm:ss",v)***v：时间戳**************************/ 
export function createTime(fmt,v)   
{ //author: zk  
  var date = new Date(v);
  var o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "h+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}