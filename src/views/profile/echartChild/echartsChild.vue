<template>
  <div class="echarts-box">
    我的echarts
    <chart class="echarts" :options="options"></chart>
  </div>
</template>

<script>
export default {
  name: "echartsChild",
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      Q:100%
    }
  }
};
</script>

<style lang="scss" scoped>
.echarts-box{
  width: 100%;
  height: 30vh;
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>