<template>
  <div class="main">
    <Header class="header"></Header>
    <Banner class="banner"></Banner>
    <About class="index_about"></About>
    <Industry></Industry>
    <News></News>
  </div>
</template>

<script>
import Header from "../components/Header/Index.vue";
import Banner from "../components/Banner/Index.vue";
import About from "../components/About/Index.vue";
import Industry from "../components/Industry/Index.vue";
import News from "../components/News/Index.vue";

export default {
  components: {
    Header,
    Banner,
    About,
    Industry,
    News
  }
};
</script>

<style lang="scss" scoped>
.main {
  .banner {
    margin-top: 5px;
    // border: 1px solid red;
  }
  .index_about {
    // width: 100%;
    // background: #ffffff;
  }
}
</style>