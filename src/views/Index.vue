<template>
  <div class="main">
    <div>
      <transition name="fade">
        <loading v-if="isLoading"></loading>
      </transition>
    </div>
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
import Header from "../components/Index/Header/Index.vue";
import Banner from "../components/Index/Banner/Index.vue";
import About from "../components/Index/About/Index.vue";
import Industry from "../components/Index/Industry/Index.vue";
import News from "../components/Index/News/Index.vue";
import Partner from "../components/Index/Partner/Index.vue";
import Footer from "../components/Index/Footer/Index.vue";
import Loading from "../components/Loading/Loading";

import serviceApi from '../api/axios.js'

export default {
  components: {
    Header,
    Banner,
    About,
    Industry,
    News,
    Partner,
    Footer,
    Loading
  },
  data(){
    return{
      isLoading: true
    }
  },
  methods: {
    
  },
  mounted() {
    
    // 初始化页面数据
    this.loadPageData()
    this.imageDate()
  },
  
  methods:{
    loadPageData: function() {
      // axios 请求页面数据 .then 中将状态值修改  this.isLoading = false
      setTimeout(()=>{this.isLoading=false},1000)
    },
  }
};
</script>

<style lang="scss" scoped>
.main {
  .banner {
    margin-top: 5px;
    // border: 1px solid red;
  }
  
}

</style>