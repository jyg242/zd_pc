<template>
  <div class="distribution_content">
    <div class="detail_con" v-html="detail[index-1]"></div>
  </div>
</template>

<script>
export default {
  props: ["detail"],
  data() {
    return {
      index: ""
    };
  },
  watch: {
    $route: {
      handler(new1, old1) {
        let item = new1.query.key;
        this.index = item;
      },
      immediate: true
    }
  },
  created() {
    this.$store.commit("setBreadList", {
      first: "产业布局",
      second: "参与股份制银行"
    });
  }
};
</script>

<style lang="scss" scoped>
.distribution_content {
  width: 800px;
  // min-height: 500px;
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
    // border: 1px solid red;
    text-align: center;
  // min-height: 500px;

  }
}
</style>