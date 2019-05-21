<template>
  <!-- 新闻列表 -->
  <div class="news_company">
    <ul>
      <li v-for="item in company_News" :key="item._id">
        <img :src="item.IMG_MIN" alt>
        <span class="title">
          <h3 @click="go(item._id)">{{item.TITLE}}</h3>
          <p>{{timeChange(item.createAt)}}</p>
          <p>{{item.INTRO}}</p>
        </span>
      </li>
    </ul>
    <Pagination class="page_location"></Pagination>
  </div>
</template>

<script>
import spliceTitle from "../../util/splice_title.js";
import timeChange from "../../util/time_change.js";
import serviceApi from "../../api/axios.js";
import Pagination from "../Public/Pagination";
export default {
  components: {
    Pagination
  },
  data() {
    this.spliceTitle = spliceTitle;
    this.timeChange = timeChange;
    return {
      company_News: [],
      type: this.$route.query.key,
      pageSize: [],
      item: "",
      pageTotal: ""
    };
  },
  methods: {
    //跳转详情页
    go(item) {
      this.$router.push({ path: "/new_detail", query: { content: item } });
    },
    //获取对应的新闻列表
    async getNews(item, page = 1) {
      let {
        status,
        data: { data, pageAll }
      } = await serviceApi.get("/news/getNews", {
        params: {
          key: item,
          page: this.$store.state.pageSize || 1
        }
      });
      if (status == 200 && data) {
        this.$store.commit("setPages", pageAll);
        this.company_News = data;
      }
    }
  },
  computed: {
    cs() {
      return this.$store.state.pageSize;
    }
  },
  //观察url的变化,请求对应的新闻类型列表
  watch: {
    $route: {
      handler(new1) {
        let item = new1.query.key;
        this.item = item;
        this.getNews(item);
        this.$store.commit("setBreadList", {
          first: "新闻中心",
          second: item == 1 ? "公司新闻" : item == 2 ? "行业动态" : "公司公告"
        });
        this.$store.commit("setPageSize", 1);
      },
      immediate: true
    },
    cs: {
      handler(new1) {
        this.getNews(this.item, new1);
        this.page = new1;
      },
      immediate: true
    }
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
  .page_location {
    text-align: center;
    margin-top: 30px;
  }
}
</style>