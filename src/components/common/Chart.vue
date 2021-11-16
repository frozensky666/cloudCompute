<template>
  <div :style="{ height: height, width: width }"></div>
</template>

<script>
export default {
  name: "Chart",
  props: {
    option: {
      require: false,
      default() {
        return {};
      }
    },
    width: {
      require: false,
      default() {
        return "400px";
      }
    },
    height: {
      require: false,
      default() {
        return "300px";
      }
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    option: {
      deep: true,
      handler(val) {
        this.setOption(val);
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let chart = this.$echarts.init(this.$el);
      chart.showLoading();
      chart.setOption(this.option == null ? {} : this.option);
      chart.hideLoading();
      this.chart = chart;
      console.log("Chart init!");
    },
    setOption(val) {  
      this.chart.setOption(val == null ? {} : val);
      console.log("Chart change!");
    }
  },
  beforeDestroy() {
    if(!this.chart) {
      return;
    }
    // 释放图表实例
    this.chart.dispose();
    this.chart = null;
    console.log("Chart dispose!");
  }
};
</script>

<style scoped></style>
