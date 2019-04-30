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
    <div class="content">
      <h1>慈善事业</h1>
      <h5>2019.03.03</h5>
      <p>&nbsp;&nbsp;&nbsp;“人是我们的第一投资”，这不仅包含着我们的名字，更体现着我们与生俱来的核心理念。</p>
      <p>&nbsp;&nbsp;&nbsp;多年以来，一投集团一直热心公益慈善事业，先后捐资近亿元，在救灾、助教、扶贫、济困等多个方面不断奉献爱心，努力践行社会责任，其中包括捐建临高一百古柏希望小学、儋州美亚希望小学，帮助定安白沙村小学修建了教室、阅览室、公厕等基础设施；参加了2010年海南特大水灾赈灾、“献爱心工程”和为长江洪涝灾区、四川地震灾区捐款等活动，近年累计组织开展各项公益活动近百项之多。同时，一投集团还积极参与红色文化的保护和传承，先后捐助修缮冯白驹将军故居等项目。2010年，由第一投资控股集团有限公司与集团董事长蒋会成先生共同发起成立了海南成美慈善基金会，本着“成人之美，大爱无疆”的宗旨，在巾帼励志、医疗救助和环境保护三个方向进行持续性投入。</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    test: {
      type: String,
      default: "失败"
    }
  },
  created() {
    this.$store.commit("setBreadList", {
      first: "企业责任",
      second: "慈善事业"
    });
  }
};
</script>

<style lang="scss" scoped>
.intro_content {
  min-height: 500px;
  width: 800px;
  // border: 1px solid red;
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