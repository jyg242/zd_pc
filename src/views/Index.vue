<template>
<!-- 首页 -->
  <div class="main">
    <div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
    <Header class="header"></Header>
    <Banner ></Banner>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Index/Header/Index.vue";
import Banner from "../components/Index/Banner/Index.vue";
import Content from "../components/Index/Content/index";
import Footer from "../components/Index/Footer/Index";
import Loading from "../components/Loading/Loading";
import serviceApi from "../api/axios.js";
export default {
  components: {
    Header,
    Banner,
    Content,
    Footer,
    Loading
  },
  data() {
    return {
      isLoading: true,
      img: []
    };
  },
  mounted() {
    // 初始化页面数据
    this.loadPageData();
    this.imageDate();
  },

  methods: {
    loadPageData: function() {
      // axios 请求页面数据 .then 中将状态值修改  this.isLoading = false
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    imageDate() {
      // let {status,data}=await serviceApi('/banner/getImg')
      // if(status==200){
      //   let res=data.data
      this.$store.dispatch("setAllimages");
      this.$store.dispatch("setAllnews");

    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../node_modules/swiper/dist/css/swiper.css';
.main {
  .banner {
    margin-top: 5px;
    // border: 1px solid red;
  }
}
</style>