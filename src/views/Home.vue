<template>
  <Layout>
    <Chart
      :option="option1"
      width="1400px"
      height="400px"
      style="margin-top: 50px"
    ></Chart>
    <Chart
      :option="option2"
      width="1400px"
      height="400px"
      style="margin-top: 50px"
    ></Chart>
  </Layout>
</template>

<script>
  /**
   * @name home (组件名称)
   * @module 组件存放位置
   * @desc 组件描述
   * @author Li Xuesong
   * @date
   * @param {Object} [title] - 参数说明
   * @param {String} [columns] - 参数说明
   * @example 调用示例
   * <home></home>
   */

  import Layout from "@/components/content/Layout";
  import Chart from "@/components/common/Chart";
  import { humidity } from "@/assets/data/humidityData/humidity";
  import { visibility } from "@/assets/data/visibilityData/Visibility";

  export default {
    name: "home",
    components: {
      Layout,
      Chart,
    },
    props: {},
    data() {
      return {
        option1: {},
        option2: {},
      };
    },
    created() {},
    mounted() {
      this.option1 = this.generateOption(
        visibility,
        "可见度",
        "车祸数量/起",
        "#ff7675",
        "可见度对车祸数量的影响"
      );
      this.option2 = this.generateOption(
        humidity,
        "湿度",
        "车祸数量/起",
        "#8c5ce7",
        "湿度对车祸数量的影响"
      );
    },
    methods: {
      generateOption(json, xname, yname, lineColor, titleText) {
        let data1 = Object.keys(json);
        let data2 = Object.values(json).map((h) => h["0"]);
        let option = {
          title: {
            text: titleText,
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: 28,
            },
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
              shadowStyle: {
                color: "#ffffff25"
              }
            },
          },
          xAxis: {
            name: xname,
            type: "category",
            data: data1,
            nameTextStyle: {
              color: lineColor,
              fontSize: 15,
              fontWeight: 700,
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            name: yname,
            type: "value",
            nameGap: 25,
            nameTextStyle: {
              color: lineColor,
              fontSize: 15,
              fontWeight: 700,
            },
            axisLabel: {
              textStyle: {
                color: "#fff",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
            splitLine: {
              show: false,
            },
          },
          series: [
            {
              data: data2,
              type: "line",
              itemStyle: {
                normal: {
                  color: lineColor,
                  lineStyle: {
                    color: lineColor,
                  },
                },
              },
            },
          ],
        };
        return option;
      },
    },
    computed: {},
    watch: {},
  };
</script>

<style scoped>
</style>
