<template>
  <!-- 产业布局 -->
  <div class="about">
    <Header></Header>
    <div class="banner_img">
      <img width="100%" height="400px" src="../assets/top_banner3.jpg" alt>
    </div>
    <div class="content my_err">
      <innerMenu :list="sidebar"></innerMenu>
      <div class="right">
        <breadCrumb></breadCrumb>
        <router-view :detail="content"></router-view>
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
import Distribution from "../components/Distribution/index";
import serviceApi from "../api/axios.js";

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
        sub_nav: []
      },
      content: []
    };
  },
  methods: {
    async getDis() {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/industry/getIndustry");
      if (status == 200 && data) {
        let res = data.map((item, index) => {
          this.content.push(item.content); //所有的产业结果存在content中
          return {
            id: index + 1,
            nav: item.title,
            conten: item.content,
            key: item._id,
            url: "/distribution/list"
          };
        });
        this.sidebar.sub_nav = res;
      }
    }
  },
  mounted() {
    this.getDis();
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
    // .right{
    //   background: white;
    // }
  }
}
</style>
