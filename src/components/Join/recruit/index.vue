<template>
  <div class="news_company">
    <ul>
      <li>
        <span class="title">
          <h3 @click="go">北京中迪投资股份有限公司2019招聘简章</h3>
          <p>发布时间 : 2018-07-02</p>
          <p>■ 高级绩效管理师 工作地点：海口 岗位要求： 1、人力资源、工商管理、统计学等相关专业本科以上学历； 2、熟悉人力资源六大模块，了解现代企业人力资...</p>
        </span>
      </li>
      <li>
        <span class="title">
          <h3 @click="go">北京中迪投资股份有限公司2019招聘简章</h3>
          <p>发布时间 : 2018-07-02</p>
          <p>■ 高级绩效管理师 工作地点：海口 岗位要求： 1、人力资源、工商管理、统计学等相关专业本科以上学历； 2、熟悉人力资源六大模块，了解现代企业人力资...</p>
        </span>
      </li>
      <li>
        <span class="title">
          <h3 @click="go">北京中迪投资股份有限公司2019招聘简章</h3>
          <p>发布时间 : 2018-07-02</p>
          <p>■ 高级绩效管理师 工作地点：海口 岗位要求： 1、人力资源、工商管理、统计学等相关专业本科以上学历； 2、熟悉人力资源六大模块，了解现代企业人力资...</p>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.push({ path: "/rec_detail", query: { uid: 2 } });
    }
  },
  created() {
    this.$store.commit("setBreadList", {
      first: "加入我们",
      second: "诚聘英才"
    });
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