<template>
  <div class="news_company">
    <ul>
      <li v-for="item in company_News" :key="item._id">
        <img :src="item.IMG_MIN" alt>
        <span class="title">
          <h3 @click="go(item._id)">{{item.TITLE}}</h3>
          <p>{{timeChange(item.createAt)}}</p>
          <p >{{item.INTRO}}</p>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
// import spliceTitle from "../../../util/splice_title.js";
import spliceTitle from "../../util/splice_title.js";
import timeChange from "../../util/time_change.js";
import serviceApi from "../../api/axios.js";
export default {
  data() {
    this.spliceTitle = spliceTitle;
    this.timeChange = timeChange;
    // let type = this.$route.query.key;
    return {
      company_News: [],
      type: this.$route.query.key
    };
  },
  methods: {
    //跳转详情页
    go(item) {
      this.$router.push({ path: "/new_detail", query: { content: item } });
    },
    //获取新闻列表
    async getNews(item) {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/news/getNews", { params: { key: item } });
      if (status == 200) {
        this.company_News = data;
      }
    }
  },
  //观察url的变化,变化后重新发起数据请求
  watch: {
    $route(to, from) {
      let item = to.query.key;
      this.getNews(item);
    }
  },
  created() {
    this.$store.commit("setBreadList", {
      first: "新闻中心",
      second: "公司新闻"
    });
    this.getNews(this.type);
  }
};
</script>

<style lang="scss" scoped>
.news_company {
  width: 800px;
  min-height: 500px;
  ul {
    padding: 0;
    margin: 0;
    li {
      overflow: hidden;
      background: #fff;
      width: 800px;
      // height: 180px;
      height: 152px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
      margin-bottom: 15px;
      img {
        width: 225px;
        height: 140px;
      }
      .title {
        width: 500px;
        h3 {
          color: rgba(0, 0, 0, 0.85);
          &:hover {
            color: #ad8757;
          }
        }
      }
    }
  }
}
</style>