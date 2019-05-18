<template>
  <!-- 新闻详情 -->
  <div class="news_detail">
    <Header></Header>
    <div class="banner_img">
      <img width="100%" height="400px" src="../../assets/top_banner2.jpg" alt>
    </div>
    <div class="content_all">
      <breadCrumb></breadCrumb>
      <div class="content_news">
        <h1>{{news.TITLE}}</h1>
        <p>
          <span>作者：{{news.AUTH}}</span>
          <span>时间：{{timeChange(news.createAt)}}</span>
          <span>来源：{{news.FROM}}</span>
        </p>
        <div v-html="news.CONTENT"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../Index/Header/Index";
import Footer from "../Index/Footer/Index";
import innerMenu from "../Public/innerMenu/index";
import breadCrumb from "../Public/Breadcrumb/index";
import serviceApi from "../../api/axios.js";
import timeChange from "../../util/time_change.js";
export default {
  data() {
    this.timeChange = timeChange;
    return {
      key: "",
      news: {}
    };
  },
  components: {
    Header,
    Footer,
    innerMenu,
    breadCrumb
  },
  methods: {
    // 获取对应新闻的详细信息
    async getDetail() {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/news/getNews_one", {
        params: {
          key: this.key
        }
      });
      if (status == 200 && data) {
        this.news = data[0];
      }
    }
  },
  mounted() {
    let content = this.$route.query.content; //新闻列表携带的对应新闻序号
    this.key = content;
    this.getDetail();
  }
};
</script>

<style lang="scss" scoped>
.news_detail {
  .banner_img {
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
      h1 {
        text-align: center;
      }
      p:nth-child(2) {
        margin-top: 30px;
        font-size: medium;
        text-align: center;
        span {
          margin-right: 30px;
        }
      }
      .news_img {
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
