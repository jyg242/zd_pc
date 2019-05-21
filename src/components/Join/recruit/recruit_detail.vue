<template>
<!-- 招聘详情 -->
  <div class="news_detail">
    <Header></Header>
    <div class="banner_img">
      <img width="100%" height="400px" src="../../../assets/top_banner5.jpg" alt>
    </div>
    <div class="content_all">
      <breadCrumb></breadCrumb>
      <div class="content_rec">
        <h2>{{recruit.title}}</h2>
        <span>发布时间：{{timeChange(recruit.createAt)}}</span>
        <div class="rec_cont">
          <h5>■ {{recruit.post}}</h5>
          <p>工作地点 : {{recruit.place}}</p>
          <p>薪资待遇 : {{recruit.money}}</p>
          <p>岗位要求 :</p>
          <ul>
            <li v-for="(item,index) in recruit.items" :key="index">{{item}}</li>
          </ul>
        </div>
        <h3>应聘者请将简历（注明应聘岗位）投送到 : {{recruit.email}} &nbsp;电话 : {{recruit.phone}}</h3>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../Index/Header/Index";
import Footer from "../../Index/Footer/Index";
import innerMenu from "../../Public/innerMenu/index";
import breadCrumb from "../../Public/Breadcrumb/index";
import timeChange from "../../../util/time_change.js";
import serviceApi from "../../../api/axios";
export default {
  data() {
    this.timeChange = timeChange;
    return {
      recruit: {}
    };
  },
  components: {
    Header,
    Footer,
    innerMenu,
    breadCrumb
  },
  methods: {
    async getRecruit(id) {
      let {
        status,
        data: { data }
      } = await serviceApi.get("/recruit/getRecruit", { params: { key: id } });
      if (status == 200 && data) {
        this.recruit = data[0];
        this.getBread_title();
      }
    },
    //获取面包屑内容
    getBread_title() {
      this.$store.commit("setBreadList", {
        first: "诚聘英才",
        second: this.recruit.title
      });
    }
  },
  mounted() {
    let res = this.$route.params.detail;
    //如果页面单纯刷新阻断了父组件的传值,重新请求
    if (!res) {
      let id = localStorage.getItem("rec_detail_id");
      this.getRecruit(id);
    } else {
      //否则如果有值用之前的值
      this.recruit = res;
      this.getBread_title();
    }
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
