<template>
  <div class="index_con">
    <div class="content">
      <div class="news">
        <div class="title">
          <h3>
            <i class="iconfont">&#xe631;</i>热点新闻
          </h3>
          <div class="list">
            <newsBanner/>
          </div>
        </div>
      </div>
      <div class="business">
        <h3>
          <i class="iconfont">&#xe607;</i>主营业务
        </h3>
        <businessBanner/>
      </div>
      <div class="notice">
        <router-link to='/news/news_list?key=3'>
          <img width="100%" src="http://www.beijingns.com.cn/images/in_images/in_public.jpg" alt>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import newsBanner from "./component/news_banner";
import businessBanner from "./component/business_banner";

export default {
  components: {
    newsBanner,
    businessBanner
  }
};
</script>

<style lang="scss" scoped>
.index_con {
  width: 100%;
  .content {
    width: 1080px;
    margin: 0 auto;
    padding-bottom: 25px;
    border-bottom: 5px solid #ad8757;
    display: flex;
    .news {
      width: 25%;
      height: 150px;
      .title {
        h3 {
          color: #ad8757;
          padding-bottom: 4px;
          .iconfont {
            font-size: 18px;
            margin-right: 5px;
          }
        }
        .list {
          height: 105px;
        }
      }
    }
    .business {
      width: 60%;
      height: 150px;
      h3 {
        color: #ad8757;
        padding-bottom: 4px;
        border-bottom: 2px solid #ad8757;
        .iconfont {
          font-size: 18px;
          margin-right: 5px;
        }
      }
    }
    .notice {
      width: 15%;
      height: 141px;
      //   border: 1px solid red;
      overflow: hidden;
      line-height: 117px;
      padding: 33px 5px 0 5px;
    }
  }
}
</style>