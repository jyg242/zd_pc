<template>
  <div class="main">
    <Header class="header"></Header>
    <Banner class="banner"></Banner>
    <About class="index_about"></About>
    <Industry></Industry>
    <News></News>
    <Partner></Partner>
    <Footer></Footer>
    
  </div>
</template>

<script>
import '../assets/css/style.css'

import Header from "../components/Index/Header/Index.vue";
import Banner from "../components/Index/Banner/Index.vue";
import About from "../components/Index/About/Index.vue";
import Industry from "../components/Index/Industry/Index.vue";
import News from "../components/Index/News/Index.vue";
import Partner from "../components/Index/Partner/Index.vue";
import Footer from "../components/Index/Footer/Index.vue";



export default {
  components: {
    Header,
    Banner,
    About,
    Industry,
    News,
    Partner,
    Footer
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