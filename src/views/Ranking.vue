<template>
  <Layout>
    <div class="ranking">
      <!-- <input type="file" id="inputfile" name="fileContent"> -->
      <button id="play">play!</button>
      <svg width="1600" height="900"></svg>
    </div>
  </Layout>
</template>

<script>
  import Layout from "@/components/content/Layout";
  import { start, run } from "@/plugins/ranking/visual";
  /**
   * @name  (组件名称)
   * @module 组件存放位置
   * @desc 组件描述
   * @author Li Xuesong
   * @date
   * @param {Object} [title] - 参数说明
   * @param {String} [columns] - 参数说明
   * @example 调用示例
   * <ranking></ranking>
   */

  export default {
    name: "ranking",
    components: {
      Layout,
    },
    props: {},
    data() {
      return {};
    },
    created() {},
    mounted() {
      run();
    },
    methods: {
      run() {
        run();
      },
    },
    computed: {},
    watch: {},
  };
</script>

<style scoped>
  #play {
    position: absolute;
    width: 80px;
    height: 50px;
    border-radius: 10px;
    border: 0;
    background-color: #dfdfdf45;
    color: #fff;
    cursor: pointer;
  }
</style>
