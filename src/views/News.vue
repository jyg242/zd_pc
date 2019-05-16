<template>
  <div class="about">
    <Header></Header>
    <div class="banner_img">
      <img
        width="100%"
        height="400px"
        src="../assets/top_banner2.jpg"
        alt
      >
    </div>
    <div class="content my_err">
      <innerMenu :list="sidebar"></innerMenu>
      <div class="right">
        <breadCrumb></breadCrumb>
        <router-view></router-view>
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

export default {
  components: {
    Header,
    Footer,
    innerMenu,
    breadCrumb
  },
  data() {
    return {
      sidebar: {
        title: "新闻中心",
        title_en: "NEWS",
        sub_nav: [
          { id: 1, nav: "公司新闻", url: "/news/news_list?key=1" },
          { id: 2, nav: "媒体关注", url: "/news/news_list?key=2" },
          { id: 3, nav: "公司公告", url: "/news/news_list?key=3" }
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
