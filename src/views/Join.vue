<template>
<!-- 加入我们 -->
  <div class="about">
    <Header></Header>
    <div class="banner_img">
      <img
        width="100%"
        height="400px"
        src="../assets/top_banner5.jpg"
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
import Header from "../components/Index/Header/Index";
import Footer from "../components/Index/Footer/Index";
import innerMenu from "../components/Public/innerMenu/index";
import breadCrumb from "../components/Public/Breadcrumb/index";
import serviceApi from '../api/axios.js'

export default {
  components: {
    Header,
    Footer,
    innerMenu,
    breadCrumb
  },
  data() {
    return {
      cs: "集团简介",
      sidebar: {
        title: "加入我们",
        title_en: "JOIN US",
        sub_nav: [
          { id: 1, nav: "联系我们", url: "/join/contact?key=1" },
          { id: 2, nav: "诚聘英才", url: "/join/recruit?key=2" }
        ]
      }
    };
  },
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
