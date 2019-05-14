<template>
  <div class="news_company">
    <ul>
      <li v-for="item in company_News" :key="item._id">
        <img src="http://www.zhongzhiwealth.com/uploads/180702/2-1PF21T315494.jpg" alt>
        <span class="title">
          <h3 @click="go(item._id)">{{item.TITLE}}</h3>
          <p>{{timeChange(item.createAt)}}</p>
          <!-- <p >{{spliceTitle(item.CONTENT,50)}}</p> -->
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import spliceTitle from "../../../util/splice_title.js";
import timeChange from "../../../util/time_change.js";
import serviceApi from "../../../api/axios.js";
export default {
  data() {
    this.spliceTitle = spliceTitle;
    this.timeChange = timeChange;
    return {
      company_News: []
    };
  },
  methods: {
    //跳转详情页
    go(item) {
      this.$router.push({ path: "/new_detail", query: { content: item } });
    },
    //获取新闻列表
    async getNews() {
      let type = this.$route.query.key;
      let {
        status,
        data: { data }
      } = await serviceApi.get("/news/getNews", { params: { key: type } });
      if(status==200){
        console.log(data)
        this.company_News=data
      }
    }
  },
  created() {
    this.$store.commit("setBreadList", {
      first: "新闻中心",
      second: "公司新闻"
    });
    this.getNews()
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