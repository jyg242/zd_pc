<template>
<!-- 集团简介 -->
  <div class="intro_content">
    <div class="img">
      <img
        width="100%"
        height="100%"
        src="http://www.zhongzhiwealth.com/uploads/allimg/180427/1_180427085954_1.png"
        alt
      >
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("setBreadList", {
      first: "关于我们",
      second: "发展历程"
    });
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
</style>