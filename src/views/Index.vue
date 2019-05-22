<template>
  <!-- 首页 -->
  <div class="main">
    <div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
    <Header class="header"></Header>
    <Banner class="banner"></Banner>
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
      isLoading: this.$store.state.isLoad,
      img: []
    };
  },
  computed: {
    isLoad_state() {
      return this.$store.state.isLoad;
    }
  },
  watch: {
    isLoad_state: {
      handler(new1) {
        if (new1 === 0) {
          this.isLoading = 0;
        }
      },
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../node_modules/swiper/dist/css/swiper.css";
.main {
  .banner {
    width: 100%;
    max-height: 550px;
    overflow: hidden;
  }
}
</style>