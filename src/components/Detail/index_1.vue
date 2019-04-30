<template>
  <div class="news_detail">
    <Header></Header>
    <div class="banner_img">
      <img
        width="100%"
        height="400px"
        src="../../assets/top_banner5.jpg"
        alt
      >
    </div>
    <div class="content_all">
      <breadCrumb></breadCrumb>
      <div class="content_rec">
        <h2>{{recruit.title}}</h2>
        <span>发布时间：{{recruit.time}}</span>
        <div class="rec_cont">
          <h5>■ {{recruit.detail.post}}</h5>
          <p>工作地点 : {{recruit.detail.site}}</p>
          <p>岗位要求 :</p>
          <ul>
            <li v-for="(item,index) in recruit.detail.require" :key="index">{{item}}</li>
          </ul>
        </div>
        <h3>应聘者请将简历（注明应聘岗位）投送到 : 297138663@qq.com &nbsp;电话 : 021-88888888</h3>
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

export default {
  data() {
    return {
      recruit: {
        title: "集团本部招聘岗位",
        time: "2019.04.22",
        detail: {
          post: "高级前端开发工程师",
          site: "北京",
          require: [
            "人力资源、工商管理、统计学等相关专业本科以上学历",
            "熟悉人力资源六大模块，了解现代企业人力资源管理模式",
            "2年以上薪酬绩效核算相关工作经验（条件优秀可适当放宽)",
            "了解国家相关法律政策，持人力资源管理师证书优先考虑",
            "良好的数据统计分析能力，办公软件操作熟练"
          ]
        }
      }
    };
  },
  components: {
    Header,
    Footer,
    innerMenu,
    breadCrumb
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
    margin: 0px auto 30px;
    .content_rec {
      margin-top: 50px;
      margin-bottom: 150px;
      width: 100%;
      min-height: 300px;
      background: #fff;
      padding: 40px;
      span {
        font-size: 12px;
      }
      .rec_cont {
        margin-top: 25px;
        margin-left: 90px;
        h5 {
          font-size: 20px;
          margin-bottom: 35px;
        }
        p {
          font-size: 18px;
        }
        li {
          margin-bottom: 10px;
          font-size: 16px;
        }
      }
    }
    h3 {
      margin-top: 80px;
    }
  }
}
</style>
