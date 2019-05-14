<template>
  <div class="news_detail">
    <Header></Header>
    <div class="banner_img">
      <img width="100%" height="400px" src="../../assets/top_banner2.jpg" alt>
    </div>
    <div class="content_all">
      <breadCrumb></breadCrumb>
      <div class="content_news">
        <h2>{{news.TITLE}}</h2>
        <p>
          <!-- <span>来源：{{news.from}}</span> -->
          <span>作者：{{news.AUTH}}</span>
          <span>时间：{{timeChange(news.createAt)}}</span>
        </p>
        <div v-html="news.CONTENT"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../Index/Header/Index1";
import Footer from "../Index/Footer/Index1";
import innerMenu from "../Public/innerMenu/index";
import breadCrumb from "../Public/Breadcrumb/index";
import serviceApi from "../../api/axios.js";
import timeChange from '../../util/time_change.js'
export default {
  data() {
    this.timeChange=timeChange
    return {
      key: "",
      news:{}
    };
  },
  components: {
    Header,
    Footer,
    innerMenu,
    breadCrumb
  },
  methods: {
    async getDetail() {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/news/getNews_one", {
        params: {
          key: this.key
        }
      });
      if(status==200&&data){
        this.news=data[0]
        console.log(this.news)
      }
    }
  },
  mounted() {
    let content = this.$route.query.content;
    console.log(content);
    this.key = content;
    this.getDetail()
  }
};
</script>

<style lang="scss" scoped>
.news_detail {
  .banner_img {
    // margin-top: 5px;
    margin-bottom: 10px;
  }
  .content_all {
    width: 1080px;
    min-height: 500px;
    margin-bottom: 5px;
    padding: 15px;
    margin: 0px auto 30px;
    background: white;

    .content_news {
      margin-top: 50px;
      margin-bottom: 150px;

      width: 100%;
      min-height: 300px;
      h2 {
        text-align: center;
      }
      p:nth-child(2) {
        font-size: medium;
        text-align: center;
        span {
          margin-right: 25px;
        }
      }
      .news_img {
        // border: 1px solid red;
        // width: 400px;
        margin: 20px auto;
        text-align: center;
        img {
          width: 50%;
        }
      }
    }
  }
}
</style>
