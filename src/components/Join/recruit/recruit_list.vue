<template>
  <div class="news_company">
    <ul>
      <li v-for="item in res" :key="item._id">
        <span class="title">
          <h3 @click="go(item)">{{item.title}}</h3>
          <p>发布时间 : {{timeChange(item.createAt)}}</p>
          <p>■ {{item.post}} &nbsp;&nbsp;■ 工作地点:{{item.place}} &nbsp;&nbsp;■岗位要求： 1.{{item.items[0]}} &nbsp;&nbsp;2.{{item.items[1]}}...</p>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import serviceApi from "../../../api/axios.js";
import timeChange from "../../../util/time_change.js";
export default {
  data() {
    this.timeChange = timeChange;
    return {
      res: {}
    };
  },
  methods: {
    go(item) {
      this.$router.push({ name: "rec_detail", params: { detail: item } });
    },
    async getRecruit() {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/recruit/getRecruit");
      if (status == 200 && data) {
        this.res = data.reverse();
      }
    }
  },
  created() {
    this.$store.commit("setBreadList", {
      first: "加入我们",
      second: "诚聘英才"
    });
    this.getRecruit();
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
      height: 125px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px;
      margin-bottom: 15px;
      .title {
        // width: 500px;
        h3 {
          margin-top: 10px;
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