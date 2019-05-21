<template>
  <div class="intro_content">
    <div class="img">
      <img
        width="100%"
        height="100%"
        src="http://www.firstgroup.com.cn/firstgroup/fg4/images/P020170214480052343774.jpg"
        alt
      >
    </div>
    <div class="content" v-html="detail[index-1]"></div>
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
      handler(news1, old1) {
        let key = news1.query.key;
        this.index = key;
        // console.log(key)
        this.$store.commit("setBreadList", {
          first: "企业责任",
          second: key==1?'公益事业':'慈善事业'
        });
      },
      immediate: true
    }
  },
  created() {
    // this.$store.commit("setBreadList", {
    //   first: "企业责任",
    //   second: "公益事业"
    // });
  }
};
</script>

<style lang="scss" scoped>
.intro_content {
  min-height: 500px;
  width: 800px;
  padding: 20px;
  background: #fff;
  .content {
    margin-top: 20px;
    font-size: 14px;
    line-height: 2;
    color: #666;
    margin-bottom: 20px;
  }
}
.con_area {
  background: white;
}
</style>