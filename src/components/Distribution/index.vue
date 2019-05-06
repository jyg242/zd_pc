<template>
  <div class="distribution_content">
    <h1>参股股份制银行</h1>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;集团参股海口农商银行、三亚农商银行，进一步完善公司在股份制银行服务领域的产业布局集团参股海口农商银行、三亚农商银行，进一步完善公司在股份制银行服务领域的产业布局集团参股海口农商银行、三亚农商银行，进一步完善公司在股份制银行服务领域的产业布局集团参股海口农商银行、三亚农商银行，进一步完善公司在股份制银行服务领域的产业布局集团参股海口农商银行、三亚农商银行，进一步完善公司在股份制银行服务领域的产业布局。</p>
    <div>
      <img
        src="http://www.firstgroup.com.cn/firstgroup/fg2/fg2_3/fg2_3_2/201702/W020170213590206380010.jpg"
        alt
        width="620px"
        height="410px"
      >
    </div>
    <!-- h2参股股份制银行 -->
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push({ path: "/new_detail", query: { uid: 2 } });
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
  min-height: 500px;
  margin-bottom: 50px;
  padding: 20px;
  background: #fff;
  h1 {
    margin: 10px 0;
  }
  p {
    font-size: 16px;
  }
  div{
    // border: 1px solid red;
    text-align: center;
  }
}
</style>