<template>
  <Layout>
    Home
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

  export default {
    name: "home",
    components: {
      Layout
    },
    props: {},
    data() {
      return {};
    },
    created() {},
    mounted() {
      console.log("????");
    },
    methods: {},
    computed: {},
    watch: {},
  };
</script>

<style scoped>
</style>
