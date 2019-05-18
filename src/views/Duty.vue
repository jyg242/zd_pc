<template>
<!-- 企业责任 -->
  <div class="about">
    <Header></Header>
    <div class="banner_img">
      <img
        width="100%"
        height="400px"
        src="../assets/top_banner4.jpg"
        alt
      >
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
import serviceApi from "../api/axios.js";


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
      content: [],
      sidebar: {
        title: "企业责任",
        title_en: "DUTY",
        sub_nav: [
          // { id: 1, nav: "公益事业", url: "/duty/public?key=1" },
          // { id: 2, nav: "慈善事业", url: "/duty/charity?key=2" }
        ]
      }
    };
  },
  methods: {
    async getDuty() {
      let {status,data:{data}}=await serviceApi.get('/duty/getDuty')
      if(status==200&&data){
        this.sidebar.sub_nav=data.map((item,index)=>{
          this.content.push(item.content)
          return{
            nav:item.title,
            id:index+1,
            url:'/duty/public'
          }
        })
      }
    }
  },
  mounted () {
    this.getDuty();
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
