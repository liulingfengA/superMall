<template>
  <div>
    我的
    <echartsChild :options="polar"></echartsChild>
  </div>
</template>

<script>
import echartsChild from "./echartChild/echartsChild";
export default {
  components: {
    echartsChild,
  },
  data(){
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }
    return {
      polar: {
        title: {
          text: "极坐标双数值轴",
        },
        legend: {
          data: ["line","per"],
        },
        polar: {
          center: ["50%", "54%"],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        angleAxis: {
          type: "value",
          startAngle: 0,
        },
        radiusAxis: {
          min: 0,
        },
        series: [
          {
            coordinateSystem: "polar",
            name: "line",
            type: "line",
            showSymbol: false,
            data: data,
          },
        ],
        animationDuration: 2000,
      
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>