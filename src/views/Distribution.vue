<template>
  <div class="about">
    <Header></Header>
    <div class="banner_img">
      <img
        width="100%"
        height="400px"
        src="../assets/top_banner3.jpg"
        alt
      >
    </div>
    <div class="content my_err">
      <innerMenu :list="sidebar"></innerMenu>
      <div class="right">
        <breadCrumb></breadCrumb>
        <router-view :test="cs"></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Index/Header/Index1";
import Footer from "../components/Index/Footer/Index1";
import innerMenu from "../components/Public/innerMenu/index";
import breadCrumb from "../components/Public/Breadcrumb/index";
import Distribution from '../components/Distribution/index'

export default {
  components: {
    Header,
    Footer,
    innerMenu,
    breadCrumb,
    Distribution
  },
  data() {
    return {
      cs: "集团简介",
      sidebar: {
        title: "产业布局",
        title_en: "DISTRIBUTION",
        sub_nav: [
          { id: 1, nav: "参股股份制银行", url: "/distribution/list_1?key=1" },
          { id: 2, nav: "非银行金融服务", url: "/distribution/list_1?key=2" }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.about {
  .banner_img {
    margin-bottom: 30px;
  }
  .content {
    display: flex;
    justify-content: space-between;
    width: 1080px;
    margin-bottom: 5px;
  }
  .my_err {
    margin: 0px auto 30px;
  }
}
</style>
