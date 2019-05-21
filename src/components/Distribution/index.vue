<template>
  <div class="distribution_content">
    <div class="detail_con" v-html="detail[index-1]"></div>
  </div>
</template>

<script>
export default {
  props: ["detail", "list"],
  data() {
    return {
      index: "",
      title: this.list
    };
  },
  watch: {
    //根据url中key的值选择父组件中传过来数组的对应元素
    $route: {
      handler(new1, old1) {
        let item = new1.query.key;
        this.index = item;
        this.$store.commit("setBreadList", {
          first: "产业布局",
          second: this.list.length > 0 ? this.title[this.index - 1] : "产业布局"
        });
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.distribution_content {
  width: 800px;
  margin-bottom: 50px;
  padding: 20px;
  background: #fff;
  h1 {
    margin: 10px 0;
  }
  p {
    font-size: 16px;
  }
  .detail_con {
    text-align: center;
  }
}
</style>