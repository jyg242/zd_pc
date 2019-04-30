<template>
  <div class="news_detail">
    <Header></Header>
    <div class="banner_img">
      <img
        width="100%"
        height="400px"
        src="../../assets/top_banner2.jpg"
        alt
      >
    </div>
    <div class="content_all">
      <breadCrumb></breadCrumb>
      <div class="content_news">
        <h2>{{news.title}}</h2>
        <p>
          <span>来源：{{news.from}}</span>
          <span>作者：{{news.by}}</span>
          <span>时间：{{news.time}}</span>
        </p>
        <p>{{news.detail}}</p>
        <div class="news_img"><img :src="news.url" alt></div>
        <p>{{news.detail1}}</p>
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
      news: {
        title: "双星报喜：“大唐元一”与“大唐元山”斩获母基金周刊两项大奖",
        from: "中迪投资",
        by: "小飞",
        time: "2019.04.22",
        url:
          "http://www.zhongzhiwealth.com/uploads/allimg/180702/2_180702184348_1.jpg",
        detail:
          "2018年6月26日，由《母基金周刊》主办的“LP之夜·母基金周刊年中盛典”在北京前门23号Blue Note Beijing盛大开启， 200余位母基金行业精英齐聚一堂，共话新形势下母基金行业的机遇与挑战，大唐财富应邀参加了此次活动",
        detail1:
          "凭借强大的品牌影响力、优质的产品管理能力及专业的管理团队，“大唐元一”与国投创和、中金启元、紫荆资本等市场最一线的股权母基金站在一起，共同斩获“最具创新母基金奖”。作为成立仅仅一年半的创新产品，“大唐元一”出色的表现基于其背后创新的投资逻辑。“大唐元一”建立了由5个大维度、316个子维度组成的立体GP基金评估体系，通过严谨的考核体系对GP管理人进行考核和评价。“大唐元一”秉承“白马里面挑黑马”的投资理念，用去伪存真的真实尽调，精准捕捉绩优基金的核心因素。这种核心因素的判断能力是“大唐元一”的核心竞争力，这也是其获得“最具创新母基金”的重要原因。"
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
        img{
          width: 50%;
        }
      }
    }
  }
}
</style>
